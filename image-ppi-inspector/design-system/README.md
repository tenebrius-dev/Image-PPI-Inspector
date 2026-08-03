# UI3 Plugin Design System

Готовый снимок публичной UI3-системы Figma и слой, который безопасно подключается к интерфейсам плагинов.

## Что внутри

- Полный машинный снимок: 946 цветовых переменных в 8 режимах, 57 типографических переменных, 12 размерных переменных, 12 текстовых стилей и 10 стилей эффектов/elevation.
- Полный читаемый каталог всех цветовых и шрифтовых токенов.
- CSS с исходными UI3-токенами и отдельный стабильный семантический слой для кода плагина.
- Исправленный dropdown/menu-примитив с явными светлыми текстами на UI3 menu surface в тёмной теме.
- Индекс 820 icon-компонентов и готовая локальная библиотека: 728 SVG-файлов для 729 отрисовываемых компонентов.
- Скрипты синхронизации, выборочной генерации TypeScript-модуля и локальная проверка контракта.
- Подробный процесс внедрения, версионирования и QA.

Главная инструкция: [docs/PLUGIN_INTEGRATION.md](docs/PLUGIN_INTEGRATION.md).

Полный перечень токенов: [docs/UI3_TOKEN_CATALOG.md](docs/UI3_TOKEN_CATALOG.md).

## Быстрый старт

1. Скопируйте этот каталог в репозиторий плагина, например в design-system/ui3.
2. Подключите единый CSS entrypoint из UI-кода:

~~~css
@import "./design-system/ui3/src/index.css";
~~~

3. В main-коде плагина обязательно включите runtime-тему Figma:

~~~ts
figma.showUI(__html__, {
  themeColors: true,
  width: 360,
  height: 520,
});
~~~

4. В feature-компонентах используйте только короткие переменные слоя runtime:

~~~css
.panel {
  color: var(--ui3-text);
  background: var(--ui3-bg);
  border: 1px solid var(--ui3-border);
}

.primaryButton {
  color: var(--ui3-text-on-brand);
  background: var(--ui3-bg-brand);
}
~~~

5. Запустите проверку комплекта:

~~~sh
npm run validate
~~~

Для нативного списка используйте `select.ui3-dropdown`, для управляемого listbox — классы `.ui3-dropdown__trigger`, `.ui3-dropdown__menu` и `.ui3-dropdown__option`. Не задавайте dropdown-цвета через `#fff`, `#000` или системные `color-scheme` значения вручную.

## Иконки

Для Figma-макетов опубликуйте собственную контролируемую копию UI3 как team library и включайте ее в рабочих файлах через Assets → Libraries. Community-копию не используйте как изменяемую производственную зависимость.

Для кода SVG уже находятся в `icons/svg`, а соответствия имен — в `icons/manifest.generated.json`. Чтобы включать в bundle только нужные иконки, создайте TypeScript-модуль:

~~~sh
npm run icons:module -- --icons icon.16.close,icon.24.check --out src/ui3-icons.selected.ts
~~~

Для обновления из вашей контролируемой копии Figma скрипт заново обнаружит страницу Icons, построит manifest и экспортирует 16/24 px компоненты:

~~~sh
FIGMA_ACCESS_TOKEN=... FIGMA_FILE_KEY=... npm run icons:sync
~~~

Токен должен иметь доступ только на чтение содержимого нужного файла. Не добавляйте его в репозиторий и не вставляйте в manifest плагина.

Стабильным идентификатором является `canonicalName`, а не `nodeId`. Компонент `icon.16.slice` не входит в SVG-набор: в исходном Figma-файле его видимая геометрия имеет размер 0×0, что зафиксировано в manifest и аудите.

## Статус источника

Снимок получен 31 июля 2026 года и повторно проверен 2 августа 2026 года напрямую по [UI3 — Figma’s UI Kit (Community)](https://www.figma.com/community/file/1486123838948777078/ui3-figmas-ui-kit). Это полный набор локальных foundations именно этой публичной копии. Подробная сверка: [docs/FIGMA_SOURCE_AUDIT.md](docs/FIGMA_SOURCE_AUDIT.md). Он не является обещанием совпадения с закрытой текущей системой, которую Figma использует в production.

В runtime плагина приоритет имеет официальный контракт [CSS Variables and Theming](https://developers.figma.com/docs/plugins/css-variables/): themeColors добавляет классы figma-light/figma-dark и переменные --figma-color-*. Полные 946 UI3-токенов нужны для аудита, предпросмотра режимов и генерации — feature-код не должен зависеть от них напрямую.
