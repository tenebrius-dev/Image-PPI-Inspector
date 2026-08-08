// ── Constants ──────────────────────────────────────────────────────────────

const FIGMA_PX_PER_INCH = 72;
const LOW_PPI_THRESHOLD = 250;
const TEMP_NODE_OFFSET_X = -20000;
const YIELD_EVERY_N_NODES = 300;

// ── Types ──────────────────────────────────────────────────────────────────

interface ImageNodeData {
    id: string;
    name: string;
    ppi: number;
    posX: number;
    posY: number;
    curW: number;
    curH: number;
    origW: number;
    origH: number;
    printW: number;
    printH: number;
    resScaleX: number;
    resScaleY: number;
    aspectRatio: number;
    hasCC: boolean;
}

interface ScanMessage {
    type: 'scan';
    scope: 'selection' | 'page' | 'project';
    includeCC: boolean;
}

interface ResizeMessage {
    type: 'resize';
    nodeId: string;
    origW: number;
    targetPpi: number;
    aspectRatio: number;
}

interface DownloadMessage {
    type: 'download-image' | 'download-image-cc';
    nodeId: string;
}

// ── Init ───────────────────────────────────────────────────────────────────

figma.showUI(__html__, { width: 300, height: 500, themeColors: true });
figma.skipInvisibleInstanceChildren = true;

let cancelScanRequested = false;

// ── Utilities ──────────────────────────────────────────────────────────────

const yieldToUI = (): Promise<void> => new Promise(resolve => setTimeout(resolve, 15));

function clone<T>(val: T): T {
    return JSON.parse(JSON.stringify(val));
}

function getTopVisibleImageFill(fills: readonly Paint[] | typeof figma.mixed): ImagePaint | null {
    if (!fills || fills === figma.mixed || !Array.isArray(fills)) return null;
    for (let i = fills.length - 1; i >= 0; i--) {
        const fill = fills[i];
        if (fill.type === 'IMAGE' && fill.imageHash && fill.visible !== false) {
            return fill as ImagePaint;
        }
    }
    return null;
}

function hasColorCorrection(fill: ImagePaint): boolean {
    if (!fill.filters) return false;
    const f = fill.filters;
    return (
        Math.abs(f.exposure    ?? 0) > 0.001 ||
        Math.abs(f.contrast    ?? 0) > 0.001 ||
        Math.abs(f.saturation  ?? 0) > 0.001 ||
        Math.abs(f.temperature ?? 0) > 0.001 ||
        Math.abs(f.tint        ?? 0) > 0.001 ||
        Math.abs(f.highlights  ?? 0) > 0.001 ||
        Math.abs(f.shadows     ?? 0) > 0.001
    );
}

// ── Node Traversal ─────────────────────────────────────────────────────────

// Synchronous shallow scan — used only for single-selection auto-preview
function findImageNodesInSelection(nodes: readonly SceneNode[]): SceneNode[] {
    const result: SceneNode[] = [];
    for (const node of nodes) {
        if (!node.visible) continue;
        if ('fills' in node && getTopVisibleImageFill(node.fills)) result.push(node);
        if ('findAll' in node) {
            result.push(...(node.findAll(child =>
                child.visible && 'fills' in child && getTopVisibleImageFill(child.fills) !== null
            ) as SceneNode[]));
        }
    }
    return result;
}

// Async deep scan — used for full page/project scan with cancellation support
async function findAllImageNodesAsync(nodes: readonly BaseNode[]): Promise<SceneNode[]> {
    const imageNodes: SceneNode[] = [];
    let counter = 0;

    async function traverse(currentNodes: readonly BaseNode[]): Promise<void> {
        for (const node of currentNodes) {
            if (cancelScanRequested) return;
            if ('visible' in node && !node.visible) continue;
            if ('fills' in node && getTopVisibleImageFill(node.fills)) {
                imageNodes.push(node as SceneNode);
            }
            if ('children' in node) {
                await traverse((node as ChildrenMixin).children);
            }
            if (++counter % YIELD_EVERY_N_NODES === 0) await yieldToUI();
        }
    }

    await traverse(nodes);
    return imageNodes;
}

// ── Core Logic ─────────────────────────────────────────────────────────────

async function calculateNodeData(node: SceneNode): Promise<ImageNodeData | null> {
    try {
        if (!('fills' in node) || node.fills === figma.mixed || !Array.isArray(node.fills)) return null;

        const fill = getTopVisibleImageFill(node.fills);
        if (!fill) return null;

        const image = figma.getImageByHash(fill.imageHash);
        if (!image) return null;

        let size: { width: number; height: number };
        try {
            size = await image.getSizeAsync();
        } catch {
            await image.getBytesAsync(); // force load into memory
            size = await image.getSizeAsync();
        }

        const transform = fill.imageTransform;
        const scaleX = transform ? Math.abs(transform[0][0]) : 1;
        const scaleY = transform ? Math.abs(transform[1][1]) : 1;

        const nodeWidth  = Math.max(node.width,  1);
        const nodeHeight = Math.max(node.height, 1);

        const t00 = transform ? transform[0][0] : 1;
        const t11 = transform ? transform[1][1] : 1;
        const t02 = transform ? transform[0][2] : 0;
        const t12 = transform ? transform[1][2] : 0;

        const posX = t00 !== 0 ? (-t02 / t00) * nodeWidth  : 0;
        const posY = t11 !== 0 ? (-t12 / t11) * nodeHeight : 0;

        const ppiX = size.width  / (nodeWidth  / scaleX / FIGMA_PX_PER_INCH);
        const ppiY = size.height / (nodeHeight / scaleY / FIGMA_PX_PER_INCH);
        const ppi  = Math.round((ppiX + ppiY) / 2);

        return {
            id: node.id,
            name: node.name,
            ppi,
            posX,
            posY,
            resScaleX: (FIGMA_PX_PER_INCH / ppiX) * 100,
            resScaleY: (FIGMA_PX_PER_INCH / ppiY) * 100,
            curW: nodeWidth,
            curH: nodeHeight,
            origW: size.width,
            origH: size.height,
            printW: (nodeWidth  / FIGMA_PX_PER_INCH) * 25.4,
            printH: (nodeHeight / FIGMA_PX_PER_INCH) * 25.4,
            aspectRatio: nodeHeight / nodeWidth,
            hasCC: hasColorCorrection(fill),
        };
    } catch (err) {
        console.error(`Error processing node ${node.id}`, err);
        return null;
    }
}

/** Shared helper: resolves a node by ID and returns its top image fill + image object. Throws on any error. */
async function getImageFillFromNode(nodeId: string): Promise<{ node: SceneNode; fill: ImagePaint; image: Image }> {
    const node = await figma.getNodeByIdAsync(nodeId) as SceneNode;
    if (!node) throw new Error('Layer not found.');
    if (!('fills' in node) || node.fills === figma.mixed || !Array.isArray(node.fills)) {
        throw new Error('No valid fills found.');
    }
    const fill = getTopVisibleImageFill(node.fills);
    if (!fill?.imageHash) throw new Error('No image fill found.');
    const image = figma.getImageByHash(fill.imageHash);
    if (!image) throw new Error('Image not found in Figma memory.');
    return { node, fill, image };
}

// ── Selection Handling ─────────────────────────────────────────────────────

async function checkSelection(): Promise<void> {
    const selection = figma.currentPage.selection;

    if (selection.length === 0) {
        figma.ui.postMessage({ type: 'clear' });
        return;
    }

    const imageNodes = findImageNodesInSelection(selection);

    if (imageNodes.length > 0 && imageNodes.length <= 50) {
        const images: ImageNodeData[] = [];
        for (const node of imageNodes) {
            const data = await calculateNodeData(node);
            if (data) images.push(data);
        }
        if (images.length > 0) {
            figma.ui.postMessage({
                type: 'images-list',
                images,
                selectedIds: selection.map(n => n.id),
            });
            return;
        }
    }

    if (imageNodes.length === 0) {
        figma.ui.postMessage({ type: 'clear' });
    } else {
        // More than 50 images — update scan button context without auto-scan
        figma.ui.postMessage({ type: 'selection-context', hasSelection: true });
    }
}

// ── Message Handlers ───────────────────────────────────────────────────────

async function handleScan(msg: ScanMessage): Promise<void> {
    cancelScanRequested = false;
    await yieldToUI();

    const scopeNodes =
        msg.scope === 'selection' ? figma.currentPage.selection :
        msg.scope === 'project'   ? figma.root.children :
                                    figma.currentPage.children;

    const allImageNodes = await findAllImageNodesAsync(scopeNodes);

    if (cancelScanRequested) {
        figma.ui.postMessage({ type: 'scan-cancelled' });
        return;
    }

    const total = allImageNodes.length;

    if (total === 0) {
        figma.ui.postMessage({ type: 'scan-results', images: [], ccImages: msg.includeCC ? [] : null, total: 0 });
        return;
    }

    const resultsPPI: ImageNodeData[] = [];
    const resultsCC:  ImageNodeData[] = [];

    for (let i = 0; i < total; i++) {
        if (cancelScanRequested) {
            figma.ui.postMessage({ type: 'scan-cancelled' });
            return;
        }

        const data = await calculateNodeData(allImageNodes[i]);
        if (data) {
            if (data.ppi < LOW_PPI_THRESHOLD) resultsPPI.push(data);
            if (msg.includeCC && data.hasCC)   resultsCC.push(data);
        }

        if (i % 2 === 0 || i === total - 1) {
            figma.ui.postMessage({ type: 'scan-progress', current: i + 1, total });
            await yieldToUI();
        }
    }

    if (cancelScanRequested) {
        figma.ui.postMessage({ type: 'scan-cancelled' });
        return;
    }

    resultsPPI.sort((a, b) => a.ppi - b.ppi);
    figma.ui.postMessage({
        type: 'scan-results',
        images: resultsPPI,
        ccImages: msg.includeCC ? resultsCC : null,
        total,
    });
}

async function handleResize(msg: ResizeMessage): Promise<void> {
    try {
        const node = await figma.getNodeByIdAsync(msg.nodeId) as SceneNode;
        if (node && 'resize' in node) {
            const newWidth = (msg.origW / msg.targetPpi) * FIGMA_PX_PER_INCH;
            node.resize(newWidth, newWidth * msg.aspectRatio);
            checkSelection();
            figma.notify(`✅ Resized to ${msg.targetPpi} PPI`);
        } else {
            figma.notify('❌ Cannot resize this node type.');
        }
    } catch (e) {
        console.error('Resize failed', e);
    }
}

async function handleDownloadImage(msg: DownloadMessage): Promise<void> {
    try {
        const { image, node } = await getImageFillFromNode(msg.nodeId);
        const bytes = await image.getBytesAsync();
        figma.ui.postMessage({ type: 'download-file', bytes, name: node.name });
    } catch (err: any) {
        figma.notify('❌ ' + err.message);
    }
}

async function handleDownloadCC(msg: DownloadMessage): Promise<void> {
    let tempRect: RectangleNode | null = null;
    try {
        const { fill, image, node } = await getImageFillFromNode(msg.nodeId);
        const size = await image.getSizeAsync();

        // Create a temporary node directly on the page to avoid clipping, masks,
        // and parent frame opacity that would affect the export result.
        tempRect = figma.createRectangle();
        tempRect.name = 'Export_Temp';
        tempRect.resize(size.width, size.height);
        tempRect.x = node.x + TEMP_NODE_OFFSET_X;
        tempRect.y = node.y;

        const { imageTransform: _removed, ...restFill } = clone(fill);
        const newFill: ImagePaint = { ...restFill, scaleMode: 'FILL' };
        tempRect.fills = [newFill];


        figma.currentPage.appendChild(tempRect);

        // Export at native pixel resolution with BASIC resampling (no interpolation)
        const bytes = await tempRect.exportAsync({
            format: 'PNG',
            constraint: { type: 'SCALE', value: size.width / tempRect.width },
            imageResampling: 'BASIC',
        } as any);

        figma.ui.postMessage({ type: 'download-file', bytes, name: node.name + '_CC' });
    } catch (err: any) {
        figma.notify('Error downloading CC image: ' + err.message);
    } finally {
        // Guaranteed cleanup — even if an error occurs mid-way
        tempRect?.remove();
    }
}

async function handleFocusNode(nodeId: string): Promise<void> {
    try {
        const node = await figma.getNodeByIdAsync(nodeId) as SceneNode;
        if (node) {
            figma.currentPage.selection = [node];
            figma.viewport.scrollAndZoomIntoView([node]);
        }
    } catch (e) {
        console.error('Failed to focus node', e);
    }
}

async function handleRestoreSelection(nodeIds: string[]): Promise<void> {
    try {
        const nodes: SceneNode[] = [];
        for (const id of nodeIds) {
            const node = await figma.getNodeByIdAsync(id);
            if (node) nodes.push(node as SceneNode);
        }
        figma.currentPage.selection = nodes;
    } catch (e) {
        console.error('Failed to restore initial selection', e);
    }
}

// ── Event Listeners ────────────────────────────────────────────────────────

figma.on('selectionchange', checkSelection);

figma.loadAllPagesAsync().then(() => {
    figma.on('documentchange', event => {
        const selectionIds = new Set(figma.currentPage.selection.map(n => n.id));
        const affectsSelection = event.documentChanges.some(
            c => c.type === 'PROPERTY_CHANGE' && selectionIds.has(c.id)
        );
        if (affectsSelection) checkSelection();
    });
});

checkSelection();

// ── Message Dispatcher ─────────────────────────────────────────────────────

figma.ui.onmessage = async (msg: any) => {
    switch (msg.type) {
        case 'resize-window':     figma.ui.resize(msg.width, Math.round(msg.height)); break;
        case 'notify':            if (msg.msg) figma.notify(msg.msg); break;
        case 'cancel-scan':       cancelScanRequested = true; break;
        case 'focus-node':        await handleFocusNode(msg.nodeId); break;
        case 'restore-selection': await handleRestoreSelection(msg.nodeIds); break;
        case 'scan':              await handleScan(msg); break;
        case 'resize':            await handleResize(msg); break;
        case 'download-image':    await handleDownloadImage(msg); break;
        case 'download-image-cc': await handleDownloadCC(msg); break;
    }
};