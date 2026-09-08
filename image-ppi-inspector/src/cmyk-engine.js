/**
 * CMYK Conversion Engine and Adobe-compatible CMYK JPEG Encoder
 * Powered by jsColorEngine (Glenn Wilton) & standard ICC Color Profiles
 * Implements recommendations from Rgb To Cmyk Figma Guide.md
 */

(function(global) {
  // Profiles cache (raw Uint8Array)
  const profileCache = new Map();
  // Transform cache (key: profileKey -> Transform instance)
  const transformCache = new Map();

  let rgbProfilePromise = null;

  async function decompressDeflateRaw(compressedUint8) {
    if (typeof DecompressionStream !== 'undefined') {
      const ds = new DecompressionStream('deflate-raw');
      const writer = ds.writable.getWriter();
      writer.write(compressedUint8);
      writer.close();
      const chunks = [];
      const reader = ds.readable.getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        chunks.push(value);
      }
      let totalLen = 0;
      for (const c of chunks) totalLen += c.length;
      const res = new Uint8Array(totalLen);
      let offset = 0;
      for (const c of chunks) {
        res.set(c, offset);
        offset += c.length;
      }
      return res;
    }
    throw new Error('DecompressionStream is not supported in this environment');
  }

  function base64ToUint8(base64) {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  async function getSharedRgbProfile() {
    if (rgbProfilePromise) return rgbProfilePromise;

    rgbProfilePromise = (async () => {
      const { Profile } = global.jsColorEngine;
      const prof = new Profile();
      // Built-in virtual sRGB profile in jsColorEngine
      await prof.loadPromise('*sRGB');
      if (!prof.loaded) {
        throw new Error('Failed to load virtual sRGB profile in jsColorEngine');
      }
      return prof;
    })();

    return rgbProfilePromise;
  }

  async function getProfileBytes(profileKey, customBytes) {
    if (profileKey === 'custom') {
      if (!customBytes || customBytes.length === 0) {
        throw new Error('No custom ICC profile provided');
      }
      return customBytes;
    }

    if (profileCache.has(profileKey)) {
      return profileCache.get(profileKey);
    }

    if (!global.__ICC_PROFILES__ || !global.__ICC_PROFILES__[profileKey]) {
      throw new Error(`Profile ${profileKey} not found in bundled profiles`);
    }

    const compressedBase64 = global.__ICC_PROFILES__[profileKey].data;
    const compressedBytes = base64ToUint8(compressedBase64);
    const rawIccBytes = await decompressDeflateRaw(compressedBytes);

    profileCache.set(profileKey, rawIccBytes);
    return rawIccBytes;
  }

  async function getCmykTransform(profileKey, iccBytes, options) {
    const opts = options || {};
    const intent = opts.intent !== undefined ? opts.intent : 'relative';
    const useBpc = opts.bpc !== undefined ? opts.bpc : true;

    const { Profile, Transform, eIntent } = global.jsColorEngine;

    let targetIntent = eIntent.relative;
    if (intent === 'perceptual' || intent === eIntent.perceptual || intent === 0) {
      targetIntent = eIntent.perceptual;
    } else if (intent === 'saturation' || intent === eIntent.saturation || intent === 2) {
      targetIntent = eIntent.saturation;
    } else if (intent === 'absolute' || intent === eIntent.absolute || intent === 3) {
      targetIntent = eIntent.absolute;
    } else {
      targetIntent = eIntent.relative;
    }

    const cacheKey = `${profileKey}_${targetIntent}_${useBpc}`;

    // Only cache standard profiles (custom profiles can change with each upload)
    if (profileKey !== 'custom' && transformCache.has(cacheKey)) {
      return transformCache.get(cacheKey);
    }

    const rgbProfile = await getSharedRgbProfile();

    const cmykProfile = new Profile();
    await cmykProfile.loadPromise(iccBytes);
    if (!cmykProfile.loaded) {
      throw new Error('Failed to parse CMYK ICC profile: ' + (cmykProfile.lastError ? cmykProfile.lastError.text : 'Unknown error'));
    }

    // Configured for int8 (0-255) with auto LUT mode and Black Point Compensation (BPC)
    // Matches Adobe Photoshop (ACE) default conversion
    const transform = new Transform({
      dataFormat: 'int8',
      lutMode: 'auto',
      BPC: useBpc
    });

    transform.create(rgbProfile, cmykProfile, targetIntent);

    if (profileKey !== 'custom') {
      transformCache.set(cacheKey, transform);
    }

    return transform;
  }

  async function convertRgbaToCmyk(rgba, width, height, profileKeyOrBytes, maybeBytes, maybeOptions) {
    if (!global.jsColorEngine) {
      throw new Error('jsColorEngine library not loaded in environment');
    }

    let profileKey = 'custom';
    let iccBytes;
    let opts = {};

    if (typeof profileKeyOrBytes === 'string') {
      profileKey = profileKeyOrBytes;
      if (maybeBytes instanceof Uint8Array) {
        iccBytes = maybeBytes;
        opts = maybeOptions || {};
      } else {
        opts = (maybeBytes && typeof maybeBytes === 'object') ? maybeBytes : (maybeOptions || {});
        iccBytes = await getProfileBytes(profileKey, null);
      }
    } else if (profileKeyOrBytes instanceof Uint8Array) {
      profileKey = 'custom';
      iccBytes = profileKeyOrBytes;
      opts = (maybeBytes && typeof maybeBytes === 'object') ? maybeBytes : (maybeOptions || {});
    } else {
      opts = maybeOptions || {};
      iccBytes = await getProfileBytes(profileKey, null);
    }

    // 1. Composite RGBA over opaque white background: R = R*a + 255*(1-a)
    const numPixels = width * height;
    const rgb = new Uint8Array(numPixels * 3);
    for (let i = 0; i < numPixels; i++) {
      const r = rgba[i * 4];
      const g = rgba[i * 4 + 1];
      const b = rgba[i * 4 + 2];
      const a = rgba[i * 4 + 3] / 255;
      rgb[i * 3]     = Math.round(r * a + 255 * (1 - a));
      rgb[i * 3 + 1] = Math.round(g * a + 255 * (1 - a));
      rgb[i * 3 + 2] = Math.round(b * a + 255 * (1 - a));
    }

    // 2. Obtain / build jsColorEngine Transform
    const transform = await getCmykTransform(profileKey, iccBytes, opts);

    // 3. Fast LUT-based transformation of pixel array
    const cmyk = transform.transformArray(rgb);

    return cmyk;
  }

  function encodeCMYKJpeg(cmykData, width, height, options) {
    options = options || {};
    const quality = options.quality !== undefined ? options.quality : 100;
    const dpi = Math.max(1, Math.round(options.dpi || 300));
    const iccProfile = options.iccProfile || null;

    const ZigZag = [
       0, 1, 5, 6,14,15,27,28,
       2, 4, 7,13,16,26,29,42,
       3, 8,12,17,25,30,41,43,
       9,11,18,24,31,40,44,53,
      10,19,23,32,39,45,52,54,
      20,22,33,38,46,51,55,60,
      21,34,37,47,50,56,59,61,
      35,36,48,49,57,58,62,63
    ];

    const std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
    const std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
    const std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
    const std_ac_luminance_values = [
      0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
      0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
      0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
      0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
      0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
      0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
      0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
      0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
      0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
      0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
      0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
      0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
      0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
      0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
      0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
      0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
      0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
      0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
      0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
      0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
      0xf9,0xfa
    ];

    const YTable = new Array(64);
    const fdtbl_Y = new Array(64);
    const YQT = [
      16, 11, 10, 16, 24, 40, 51, 61,
      12, 12, 14, 19, 26, 58, 60, 55,
      14, 13, 16, 24, 40, 57, 69, 56,
      14, 17, 22, 29, 51, 87, 80, 62,
      18, 22, 37, 56, 68,109,103, 77,
      24, 35, 55, 64, 81,104,113, 92,
      49, 64, 78, 87,103,121,120,101,
      72, 92, 95, 98,112,100,103, 99
    ];

    let sf = quality < 50 ? Math.floor(5000 / quality) : Math.floor(200 - quality * 2);
    if (sf < 1) sf = 1;

    const aasf = [
      1.0, 1.387039845, 1.306562965, 1.175875602,
      1.0, 0.785694958, 0.541196100, 0.275899379
    ];

    let k = 0;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let t = Math.floor((YQT[k] * sf + 50) / 100);
        if (t < 1) t = 1;
        if (t > 255) t = 255;
        YTable[ZigZag[k]] = t;
        fdtbl_Y[k] = 1.0 / (t * aasf[row] * aasf[col] * 8.0);
        k++;
      }
    }

    function computeHuffmanTbl(nrcodes, std_values) {
      let codevalue = 0;
      let pos_in_table = 0;
      const HT = [];
      for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= nrcodes[i]; j++) {
          HT[std_values[pos_in_table]] = [];
          HT[std_values[pos_in_table]][0] = codevalue;
          HT[std_values[pos_in_table]][1] = i;
          pos_in_table++;
          codevalue++;
        }
        codevalue *= 2;
      }
      return HT;
    }

    const YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes, std_dc_luminance_values);
    const YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes, std_ac_luminance_values);

    const bitcode = new Array(65535);
    const category = new Array(65535);
    let nr_lower = 1;
    let nr_upper = 2;
    for (let cat = 1; cat <= 15; cat++) {
      for (let nr = nr_lower; nr < nr_upper; nr++) {
        category[32767 + nr] = cat;
        bitcode[32767 + nr] = [];
        bitcode[32767 + nr][1] = cat;
        bitcode[32767 + nr][0] = nr;
      }
      for (let nrneg = -(nr_upper - 1); nrneg <= -nr_lower; nrneg++) {
        category[32767 + nrneg] = cat;
        bitcode[32767 + nrneg] = [];
        bitcode[32767 + nrneg][1] = cat;
        bitcode[32767 + nrneg][0] = nr_upper - 1 + nrneg;
      }
      nr_lower <<= 1;
      nr_upper <<= 1;
    }

    const byteout = [];
    let bytenew = 0;
    let bytepos = 7;

    function writeByte(val) { byteout.push(val & 0xFF); }
    function writeWord(val) {
      byteout.push((val >> 8) & 0xFF);
      byteout.push(val & 0xFF);
    }
    function write32(val) {
      byteout.push((val >> 24) & 0xFF);
      byteout.push((val >> 16) & 0xFF);
      byteout.push((val >> 8) & 0xFF);
      byteout.push(val & 0xFF);
    }
    function writeBits(bits) {
      const value = bits[0];
      let posval = bits[1] - 1;
      while (posval >= 0) {
        if (value & (1 << posval)) {
          bytenew |= (1 << bytepos);
        }
        posval--;
        bytepos--;
        if (bytepos < 0) {
          if (bytenew === 0xFF) {
            writeByte(0xFF);
            writeByte(0x00);
          } else {
            writeByte(bytenew);
          }
          bytepos = 7;
          bytenew = 0;
        }
      }
    }

    // 1. SOI
    writeWord(0xFFD8);

    // 2. APP1 (EXIF Resolution metadata: 300 DPI or custom DPI)
    // Note: APP0 (JFIF) is omitted as JFIF standard strictly prohibits 4-channel CMYK
    writeWord(0xFFE1);
    const exifTotalLen = 2 + 6 + 8 + 2 + 3 * 12 + 4 + 16; // 74 bytes
    writeWord(exifTotalLen);
    writeByte(0x45); writeByte(0x78); writeByte(0x69); writeByte(0x66); writeByte(0x00); writeByte(0x00); // "Exif\0\0"
    writeByte(0x4D); writeByte(0x4D); writeByte(0x00); writeByte(0x2A); // "MM\0*"
    write32(8); // IFD0 offset
    writeWord(3); // 3 tags
    writeWord(0x011A); writeWord(5); write32(1); write32(50); // XResolution
    writeWord(0x011B); writeWord(5); write32(1); write32(58); // YResolution
    writeWord(0x0128); writeWord(3); write32(1); writeWord(2); writeWord(0); // ResolutionUnit (Inches)
    write32(0);
    write32(dpi); write32(1);
    write32(dpi); write32(1);

    // 3. APP2 (ICC Profile Chunks)
    if (iccProfile && iccProfile.length > 0) {
      const maxChunk = 65519;
      const numMarkers = Math.ceil(iccProfile.length / maxChunk);
      for (let seq = 1; seq <= numMarkers; seq++) {
        const start = (seq - 1) * maxChunk;
        const end = Math.min(start + maxChunk, iccProfile.length);
        const chunkLen = end - start;
        const markerLen = 2 + 14 + chunkLen;
        writeWord(0xFFE2);
        writeWord(markerLen);
        const sig = [0x49, 0x43, 0x43, 0x5F, 0x50, 0x52, 0x4F, 0x46, 0x49, 0x4C, 0x45, 0x00];
        for (let b = 0; b < sig.length; b++) writeByte(sig[b]);
        writeByte(seq);
        writeByte(numMarkers);
        for (let j = start; j < end; j++) writeByte(iccProfile[j]);
      }
    }

    // 4. APP14 (Adobe CMYK transform = 0)
    // Format: "Adobe" (5 bytes), DCTEncodeVersion (2 bytes), Flags0 (2 bytes), Flags1 (2 bytes), ColorTransform (1 byte)
    writeWord(0xFFEE);
    writeWord(14); // 2 + 5 + 2 + 2 + 2 + 1 = 14 bytes
    writeByte(0x41); writeByte(0x64); writeByte(0x6F); writeByte(0x62); writeByte(0x65); // "Adobe" (5 bytes, no null byte)
    writeWord(0x0064);
    writeWord(0x0000);
    writeWord(0x0000);
    writeByte(0x00); // transform = 0 (CMYK)

    // 5. DQT
    writeWord(0xFFDB);
    writeWord(67);
    writeByte(0);
    for (let i = 0; i < 64; i++) writeByte(YTable[i]);

    // 6. SOF0 (4 components: C, M, Y, K)
    writeWord(0xFFC0);
    writeWord(20);
    writeByte(8);
    writeWord(height);
    writeWord(width);
    writeByte(4);
    writeByte(1); writeByte(0x11); writeByte(0);
    writeByte(2); writeByte(0x11); writeByte(0);
    writeByte(3); writeByte(0x11); writeByte(0);
    writeByte(4); writeByte(0x11); writeByte(0);

    // 7. DHT (Huffman tables: length = 2 (len field) + 1 (Tc/Th) + 16 (Li counts) + sum(Li) values = 19 + sum(Li))
    writeWord(0xFFC4);
    let dhtLen = 19;
    for (let i = 1; i <= 16; i++) dhtLen += std_dc_luminance_nrcodes[i];
    writeWord(dhtLen);
    writeByte(0x00);
    for (let i = 1; i <= 16; i++) writeByte(std_dc_luminance_nrcodes[i]);
    for (let i = 0; i < std_dc_luminance_values.length; i++) writeByte(std_dc_luminance_values[i]);

    writeWord(0xFFC4);
    dhtLen = 19;
    for (let i = 1; i <= 16; i++) dhtLen += std_ac_luminance_nrcodes[i];
    writeWord(dhtLen);
    writeByte(0x10);
    for (let i = 1; i <= 16; i++) writeByte(std_ac_luminance_nrcodes[i]);
    for (let i = 0; i < std_ac_luminance_values.length; i++) writeByte(std_ac_luminance_values[i]);

    // 8. SOS
    writeWord(0xFFDA);
    writeWord(14);
    writeByte(4);
    writeByte(1); writeByte(0x00);
    writeByte(2); writeByte(0x00);
    writeByte(3); writeByte(0x00);
    writeByte(4); writeByte(0x00);
    writeByte(0x00);
    writeByte(0x3F);
    writeByte(0x00);

    // 10. Macroblocks
    const outputfDCTQuant = new Array(64);
    function fDCTQuant(data, fdtbl) {
      let fshift = 0;
      for (let i = 0; i < 8; i++) {
        const d0 = data[fshift], d1 = data[fshift + 1], d2 = data[fshift + 2], d3 = data[fshift + 3];
        const d4 = data[fshift + 4], d5 = data[fshift + 5], d6 = data[fshift + 6], d7 = data[fshift + 7];

        const tmp0 = d0 + d7, tmp7 = d0 - d7;
        const tmp1 = d1 + d6, tmp6 = d1 - d6;
        const tmp2 = d2 + d5, tmp5 = d2 - d5;
        const tmp3 = d3 + d4, tmp4 = d3 - d4;

        const tmp10 = tmp0 + tmp3, tmp13 = tmp0 - tmp3;
        const tmp11 = tmp1 + tmp2, tmp12 = tmp1 - tmp2;

        data[fshift] = tmp10 + tmp11;
        data[fshift + 4] = tmp10 - tmp11;

        const z1 = (tmp12 + tmp13) * 0.707106781;
        data[fshift + 2] = tmp13 + z1;
        data[fshift + 6] = tmp13 - z1;

        const tmp10_2 = tmp4 + tmp5, tmp11_2 = tmp5 + tmp6, tmp12_2 = tmp6 + tmp7;
        const z5 = (tmp10_2 - tmp12_2) * 0.382683433;
        const z2 = 0.541196100 * tmp10_2 + z5;
        const z4 = 1.306562965 * tmp12_2 + z5;
        const z3 = tmp11_2 * 0.707106781;

        const z11 = tmp7 + z3, z13 = tmp7 - z3;
        data[fshift + 5] = z13 + z2;
        data[fshift + 3] = z13 - z2;
        data[fshift + 1] = z11 + z4;
        data[fshift + 7] = z11 - z4;

        fshift += 8;
      }

      fshift = 0;
      for (let i = 0; i < 8; i++) {
        const d0 = data[fshift], d1 = data[fshift + 8], d2 = data[fshift + 16], d3 = data[fshift + 24];
        const d4 = data[fshift + 32], d5 = data[fshift + 40], d6 = data[fshift + 48], d7 = data[fshift + 56];

        const tmp0 = d0 + d7, tmp7 = d0 - d7;
        const tmp1 = d1 + d6, tmp6 = d1 - d6;
        const tmp2 = d2 + d5, tmp5 = d2 - d5;
        const tmp3 = d3 + d4, tmp4 = d3 - d4;

        const tmp10 = tmp0 + tmp3, tmp13 = tmp0 - tmp3;
        const tmp11 = tmp1 + tmp2, tmp12 = tmp1 - tmp2;

        data[fshift] = tmp10 + tmp11;
        data[fshift + 32] = tmp10 - tmp11;

        const z1 = (tmp12 + tmp13) * 0.707106781;
        data[fshift + 16] = tmp13 + z1;
        data[fshift + 48] = tmp13 - z1;

        const tmp10_2 = tmp4 + tmp5, tmp11_2 = tmp5 + tmp6, tmp12_2 = tmp6 + tmp7;
        const z5 = (tmp10_2 - tmp12_2) * 0.382683433;
        const z2 = 0.541196100 * tmp10_2 + z5;
        const z4 = 1.306562965 * tmp12_2 + z5;
        const z3 = tmp11_2 * 0.707106781;

        const z11 = tmp7 + z3, z13 = tmp7 - z3;
        data[fshift + 40] = z13 + z2;
        data[fshift + 24] = z13 - z2;
        data[fshift + 8] = z11 + z4;
        data[fshift + 56] = z11 - z4;

        fshift++;
      }

      for (let i = 0; i < 64; i++) {
        const val = data[i] * fdtbl[i];
        outputfDCTQuant[i] = (val > 0.0) ? ((val + 0.5) | 0) : ((val - 0.5) | 0);
      }
      return outputfDCTQuant;
    }

    const DU = new Array(64);
    function processDU(CDU, fdtbl, DC, HTDC, HTAC) {
      const EOB = HTAC[0x00];
      const SIXTEEN_ZEROS = HTAC[0xF0];
      const DU_DCT = fDCTQuant(CDU, fdtbl);

      // Reorder from natural order to standard JPEG zigzag order
      for (let j = 0; j < 64; ++j) {
        DU[ZigZag[j]] = DU_DCT[j];
      }

      // DC
      const Diff = DU[0] - DC;
      DC = DU[0];
      if (Diff === 0) {
        writeBits(HTDC[0]);
      } else {
        const pos = 32767 + Diff;
        writeBits(HTDC[category[pos]]);
        writeBits(bitcode[pos]);
      }

      // AC
      let end0pos = 63;
      while (end0pos > 0 && DU[end0pos] === 0) end0pos--;
      if (end0pos === 0) {
        writeBits(EOB);
        return DC;
      }

      let i = 1;
      while (i <= end0pos) {
        const startpos = i;
        while (DU[i] === 0 && i <= end0pos) i++;
        let nrzeroes = i - startpos;
        if (nrzeroes >= 16) {
          const lng = nrzeroes >> 4;
          for (let nrmarker = 1; nrmarker <= lng; nrmarker++) writeBits(SIXTEEN_ZEROS);
          nrzeroes &= 0x0F;
        }
        const pos = 32767 + DU[i];
        writeBits(HTAC[(nrzeroes << 4) + category[pos]]);
        writeBits(bitcode[pos]);
        i++;
      }

      if (end0pos !== 63) writeBits(EOB);
      return DC;
    }

    let DCC = 0, DCM = 0, DCY = 0, DCK = 0;
    const CDU = new Float32Array(64);
    const MDU = new Float32Array(64);
    const YDU = new Float32Array(64);
    const KDU = new Float32Array(64);

    const quadWidth = width * 4;

    for (let y = 0; y < height; y += 8) {
      for (let x = 0; x < width; x += 8) {
        let pos = 0;
        for (let r = 0; r < 8; r++) {
          const curY = Math.min(y + r, height - 1);
          const rowStart = curY * quadWidth;
          for (let c = 0; c < 8; c++) {
            const curX = Math.min(x + c, width - 1);
            const p = rowStart + (curX * 4);

            // Invert values for Adobe CMYK transform=0: 255 - val
            // Center around 0: (255 - val) - 128 = 127 - val
            CDU[pos] = 127 - cmykData[p];
            MDU[pos] = 127 - cmykData[p + 1];
            YDU[pos] = 127 - cmykData[p + 2];
            KDU[pos] = 127 - cmykData[p + 3];
            pos++;
          }
        }

        DCC = processDU(CDU, fdtbl_Y, DCC, YDC_HT, YAC_HT);
        DCM = processDU(MDU, fdtbl_Y, DCM, YDC_HT, YAC_HT);
        DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
        DCK = processDU(KDU, fdtbl_Y, DCK, YDC_HT, YAC_HT);
      }
    }

    if (bytepos < 7) {
      writeBits([(1 << (bytepos + 1)) - 1, bytepos + 1]);
    }
    writeWord(0xFFD9); // EOI

    return new Uint8Array(byteout);
  }

  // Export to global scope
  global.CmykEngine = {
    getProfileBytes,
    convertRgbaToCmyk,
    encodeCMYKJpeg,
    eIntent: {
      perceptual: 0,
      relative: 1,
      saturation: 2,
      absolute: 3
    }
  };

})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
