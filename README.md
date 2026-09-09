# Image PPI Inspector (Figma Plugin)

[English](#english) | [Русский](#русский)

---

<a name="english"></a>
## English

**Image PPI Inspector** is a professional Figma plugin designed for prepress inspection, raster image analysis, effective resolution (PPI) verification, crop geometry tracking, and direct export to **CMYK (100% JPG)** with embedded standard or custom ICC color profiles.

---

### Features

#### 1. Resolution Inspection (Effective PPI)
- Instant calculation of the true effective PPI for selected raster layers, considering in-Figma scaling and transformations.
- Prepress standard color-coded quality indicator:
  - 🟢 **Green (≥ 300 PPI)** — High print quality;
  - 🟡 **Yellow (250–299 PPI)** — Acceptable quality;
  - 🔴 **Red (< 250 PPI)** — Warning: risk of visible pixelation in print.
- One-click copy for any displayed value.

#### 2. Geometry & Crop Analysis
- Displays current layout dimensions (`Current Size`) and original image file dimensions (`Original Size`).
- Crop coordinates (`Crop Positioning`: `X`, `Y`) and scale factor (`Scale`: `X% × Y%`).
- Unit switcher in the toolbar: **`Unit: px / mm`**.
- **Copy Full Info** button to copy all layer metadata to clipboard.

#### 3. Target PPI Calculator
- Interactive target resolution input (`Target PPI`, defaults to 300).
- Automatic calculation of maximum physical print size (`Max Print`) in millimeters for the given target PPI.
- **Resize to Target PPI** button — automatically scales the selected layer proportionally to achieve the exact target PPI.

#### 4. Direct CMYK Export (100% JPG)
Built-in standalone color separation engine powered by `jsColorEngine`, providing pixel-perfect conversion parity with Adobe Photoshop (ACE):
- **4 Rendering Intents** (Photoshop-identical order):
  1. `Perceptual`
  2. `Saturation`
  3. `Relative Colorimetric` *(default)*
  4. `Absolute Colorimetric`
- **Black Point Compensation (BPC)** toggle.
- **7 Built-in Standard ICC Profiles** (compressed and decompressed on-the-fly):
  - `ISO Coated v2 300% (ECI)` *(default)*
  - `ISO Coated v2 (ECI)`
  - `Coated FOGRA39`
  - `Uncoated FOGRA29`
  - `Coated GRACoL 2006`
  - `US Web Coated (SWOP) v2`
  - `Japan Color 2001 Coated`
- **Custom Profile Loader (`Load Custom ICC...`)**: load any external `.icc` or `.icm` profile file.
- **Lossless Subsampling-Free JPEG (100% Quality)** with complete metadata:
  - JFIF header with exact DPI;
  - Full `APP2 (ICC_PROFILE)` markers containing the selected profile bytes.

#### 5. Color Corrections Inspection
- Detects Figma image adjustments (exposure, contrast, saturation, temperature, tint, highlights, shadows).
- Download original source image or processed/corrected image separately.

#### 6. Native Figma UI3 Design
- Fully compliant with the official Figma UI3 Community design catalogue.
- Custom dropdown menus with active-item positioning, keyboard navigation, and guaranteed 8px viewport padding.
- Adaptive dynamic window height without awkward inner scrollbars.
- Full Light and Dark theme support.

---

### Project Structure

```
image-ppi-inspector/
├── manifest.json              # Figma plugin manifest
├── package.json               # Dependencies and build scripts
├── tsconfig.json              # TypeScript configuration
├── build-ui.js                # UI bundle builder (compresses profiles, injects CSS and JS)
├── code.ts                    # Plugin main logic (Figma sandbox runtime)
├── code.js                    # Compiled JavaScript
├── ui.html                    # Plugin interface (Figma UI iframe)
├── assets/
│   └── profiles/              # Binary ICC profile files
├── src/
│   └── cmyk-engine.js         # CMYK conversion engine and JPEG encoder
├── design-system/             # UI3 design system tokens and styles
└── docs/                      # Documentation
    └── CMYK_EXPORT.md         # CMYK engine architecture and technical specs
```

---

### Build and Development

#### Requirements
- [Node.js](https://nodejs.org/) (version 18+)
- npm

#### Install Dependencies
```bash
npm install
```

#### Build Plugin
Builds the UI bundle (ICC profiles compression, CSS & CMYK engine injection) and compiles TypeScript:
```bash
npm run build
```

#### Watch Mode
```bash
npm run watch
```

#### Running in Figma
1. Open Figma Desktop.
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**.
3. Select `manifest.json` from the `image-ppi-inspector` directory.
4. Run the plugin via **Plugins** → **Development** → **Image PPI Inspector**.

---

### License

ISC License.

---

[Back to top](#image-ppi-inspector-figma-plugin) | [English](#english) | [Русский](#русский)

---

<a name="русский"></a>
## Русский

**Image PPI Inspector** — профессиональный плагин для Figma, предназначенный для предпечатной проверки и инспекции растровых изображений, анализа эффективного разрешения (PPI), геометрии кадрирования и прямого экспорта в **CMYK (100% JPG)** с внедрением стандартных или пользовательских профилей ICC.

---

### Возможности

#### 1. Инспекция разрешения (Effective PPI)
- Мгновенный расчёт реального эффективного PPI выбранных растровых слоёв с учётом масштабирования и трансформаций внутри Figma.
- Цветовая индикация качества печати (светофор по полиграфическим стандартам):
  - 🟢 **Зелёный (≥ 300 PPI)** — высокое полиграфическое качество;
  - 🟡 **Жёлтый (250–299 PPI)** — допустимое качество;
  - 🔴 **Красный (< 250 PPI)** — предупреждение о риске пикселизации при печати.
- Быстрое копирование значений в буфер обмена в один клик.

#### 2. Геометрия и кадрирование
- Отображение текущего размера в макете (`Current Size`) и оригинального размера файла (`Original Size`).
- Координаты кадрирования (`Crop Positioning`: `X`, `Y`) и коэффициент масштабирования (`Scale`: `X% × Y%`).
- Переключатель единиц измерения в шапке: **`Unit: px / mm`**.
- Кнопка **Copy Full Info** для копирования всех метаданных слоя.

#### 3. Калькулятор целевого разрешения (Target PPI)
- Интерактивный ввод целевого разрешения (`Target PPI`, по умолчанию 300).
- Расчёт максимального физического размера качественной печати (`Max Print`) в миллиметрах.
- Кнопка **Resize to Target PPI** — автоматическое пропорциональное масштабирование выделенного слоя до достижения заданного PPI.

#### 4. Экспорт в CMYK (100% JPG)
Встроенный автономный движок цветоделения на базе `jsColorEngine`, обеспечивающий попиксельную точность цветоделения, идентичную Adobe Photoshop (ACE):
- **4 метода рендеринга (Rendering Intent)** в порядке Adobe Photoshop:
  1. `Perceptual`
  2. `Saturation`
  3. `Relative Colorimetric` *(по умолчанию)*
  4. `Absolute Colorimetric`
- **Компенсация точки чёрного (Black Point Compensation, BPC)** с возможностью отключения.
- **7 встроенных стандартных профилей ICC** (хранятся в сжатом виде и распаковываются на лету):
  - `ISO Coated v2 300% (ECI)` *(по умолчанию)*
  - `ISO Coated v2 (ECI)`
  - `Coated FOGRA39`
  - `Uncoated FOGRA29`
  - `Coated GRACoL 2006`
  - `US Web Coated (SWOP) v2`
  - `Japan Color 2001 Coated`
- **Загрузка пользовательских профилей (`Load Custom ICC...`)**: поддержка любых файлов `.icc` и `.icm`.
- **Чистый JPEG без субдискретизации (100% Quality)** с внедрением полных метаданных:
  - Заголовок JFIF с точным разрешением (DPI);
  - Маркеры `APP2 (ICC_PROFILE)` с байтами выбранного ICC-профиля.

#### 5. Инспекция цветокоррекции (Color Corrections)
- Определение наличия встроенных фильтров Figma (экспозиция, контраст, насыщенность, температура, оттенок, света, тени).
- Возможность раздельного скачивания оригинального изображения и скорректированного изображения.

#### 6. Нативный дизайн Figma UI3
- Полное соответствие официальному каталогу компонентов Figma UI3 Community.
- Кастомные выпадающие меню с позиционированием по активному элементу, клавиатурным управлением и гарантированным отступом 8 px от границ окна.
- Адаптивная динамическая высота окна плагина без внутренних скроллов и полос прокрутки.
- Поддержка светлой и тёмной тем оформления Figma.

---

### Структура проекта

```
image-ppi-inspector/
├── manifest.json              # Манифест плагина Figma
├── package.json               # Зависимости и скрипты сборки
├── tsconfig.json              # Конфигурация TypeScript
├── build-ui.js                # Скрипт сборки UI, упаковки CSS и ICC профилей
├── code.ts                    # Логика плагина (Figma sandbox runtime)
├── code.js                    # Скомпилированный JavaScript
├── ui.html                    # Интерфейс плагина (Figma UI iframe)
├── assets/
│   └── profiles/              # Бинарные файлы ICC профилей
├── src/
│   └── cmyk-engine.js         # Движок CMYK конверсии и JPEG кодировщик
├── design-system/             # Токены и стили дизайн-системы UI3
└── docs/                      # Дополнительная документация
    └── CMYK_EXPORT.md         # Архитектура и спецификация CMYK движка
```

---

### Сборка и разработка

#### Требования
- [Node.js](https://nodejs.org/) (версия 18+)
- npm

#### Установка зависимостей
```bash
npm install
```

#### Сборка плагина
Команда собирает UI-бандл (сжатие профилей ICC, сборка CSS и движка CMYK) и компилирует TypeScript:
```bash
npm run build
```

#### Режим отслеживания изменений (Watch)
```bash
npm run watch
```

#### Запуск в Figma
1. Откройте Figma Desktop.
2. Перейдите в **Plugins** → **Development** → **Import plugin from manifest...**.
3. Выберите файл `manifest.json` из папки `image-ppi-inspector`.
4. Запустите плагин через меню **Plugins** → **Development** → **Image PPI Inspector**.

---

### Лицензия

ISC License.
