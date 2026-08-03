# Внедрение UI3 в процесс разработки Figma-плагинов

## 1. Правильная модель

У системы два источника, и у них разные обязанности:

| Слой | Источник | Для чего используется |
|---|---|---|
| Runtime contract | Переменные --figma-color-* из iframe | Реальная светлая/темная тема и различия между редакторами |
| Reference snapshot | Публичный UI3 Community-файл | Полный каталог, режимы, типографика, размеры, аудит и генерация |
| Product adapter | src/ui3-runtime.css | Короткие стабильные имена, которыми пользуется код |
| Primitives | Button, IconButton, Input, Checkbox, Menu, Dialog и т. п. | Единственная точка реализации состояний и размеров |
| Screens | Интерфейс конкретного плагина | Собирается только из primitives и semantic aliases |

Figma официально рекомендует передавать themeColors: true в figma.showUI(). Тогда в html iframe появляются figma-light или figma-dark и набор семантических цветов; при переключении темы значения обновляются динамически. В документации также указано, что FigJam пока не поддерживает dark mode через этот API, а externally hosted UI не получает themeColors. Источник: [CSS Variables and Theming](https://developers.figma.com/docs/plugins/css-variables/).

Следствие: не переносите все 946 значений прямо в каждый компонент. Полный снимок остается неизменяемым generated-артефактом, а продуктовый код использует небольшой слой --ui3-bg, --ui3-text, --ui3-border, --ui3-icon и их смысловые варианты.

## 2. Структура в репозитории

Рекомендуемая схема:

~~~text
design-system/ui3/
  README.md
  docs/
    PLUGIN_INTEGRATION.md
    FIGMA_SOURCE_AUDIT.md
    UI3_TOKEN_CATALOG.md
  tokens/
    ui3.snapshot.json
    ui3.colors.css
    ui3.typography.css
    ui3.sizing.css
    ui3.effects.json
    ui3.effects.css
  src/
    index.css
    ui3-runtime.css
    ui3-icons.css
  icons/
    ui3.icons.json
    manifest.generated.json
    svg/
  scripts/
    build-icon-module.mjs
    generate-effects-css.mjs
    sync-icons.mjs
    validate.mjs
~~~

В монорепозитории этот каталог лучше оформить как внутренний пакет, например @company/figma-ui3. Версию пакета фиксируйте в каждом плагине; обновляйте через обычный review, а не заменой файлов вручную.

## 3. Подключение к новому плагину

### Main thread

~~~ts
figma.showUI(__html__, {
  themeColors: true,
  width: 360,
  height: 520,
});
~~~

Официальная документация по UI отдельно называет themeColors рекомендуемым способом поддержки light/dark: [Creating a User Interface](https://developers.figma.com/docs/plugins/creating-ui/).

### UI iframe

Импортируйте src/index.css один раз в корне UI. Порядок уже задан внутри файла: generated foundations → runtime aliases → dropdown/menu contract → icon contract.

Не назначайте классы figma-light или figma-dark вручную в production: их ставит Figma на элемент html. Для Storybook или автономного preview используйте только классы ui3-theme-light, ui3-theme-dark, ui3-theme-figjam-light, ui3-theme-figjam-dark, ui3-theme-devmode-light, ui3-theme-devmode-dark, ui3-theme-slides-light и ui3-theme-slides-dark.

### Product primitives

Сначала реализуйте и протестируйте небольшой обязательный набор:

1. Button и IconButton: default, hover, pressed, focus-visible, disabled, danger.
2. Input/Textarea: default, hover, focus, invalid, disabled.
3. Checkbox, Radio, Switch и SegmentedControl.
4. Menu/Dropdown и Tooltip.
5. Dialog/Modal, Notice и Progress.
6. Layout primitives: Stack, Row, Divider, ScrollArea.

В screen-компонентах запрещены произвольные HEX/RGB/HSL для UI и прямые обращения к generated --ui3-color-*; разрешены только semantic aliases из ui3-runtime.css. Исключения — содержимое импортируемого документа, пользовательские цвета и диагностический preview.

### Dropdown и меню

Для нативного control используйте:

~~~html
<select class="ui3-dropdown" aria-label="Format">
  <option>PDF</option>
  <option>SVG</option>
</select>
~~~

Для собственного listbox используйте `.ui3-dropdown__trigger`, `.ui3-dropdown__menu` и `.ui3-dropdown__option`. Стили явно задают menu surface и светлый текст, поэтому в `.figma-dark`/`ui3-theme-dark` dropdown не получает чёрный текст от страницы или системный цвет браузера. Состояния выбранного и недоступного пункта должны передаваться через `aria-selected` и `aria-disabled`.

## 4. Режимы

Публичный UI3-файл содержит восемь режимов:

- Light
- Dark
- FigJam-Light
- FigJam-Dark
- DevMode-Light
- DevMode-Dark
- Slides-Light
- Slides-Dark

Они сохранены в ui3.snapshot.json и ui3.colors.css. Но наличие режима в Community-файле не доказывает, что такой runtime-режим передается в iframe. Production UI всегда берет доступные значения из --figma-color-*; остальные режимы используются для визуальных стендов и smoke-тестов соответствующего editorType.

Минимальная матрица ручной проверки:

| Поверхность | Светлая | Темная | Размер/поведение |
|---|:---:|:---:|---|
| Figma Design | Да | Да | Modal и resize |
| FigJam | Да | Не заявлять до фактической поддержки API | Popup/modal |
| Dev Mode | Да | Да | Узкая и широкая Inspect panel |
| Slides | Да | Да | Если editorType заявлен в manifest |

## 5. Шрифты

В исходнике используются Inter, Whyte и Roboto Mono. Для обычного интерфейса плагина базовым шрифтом в адаптере выбран Inter. Figma указывает, что Inter заранее доступен плагинам, поэтому сетевой font source для него не нужен: [Plugin Manifest](https://developers.figma.com/docs/plugins/manifest/).

Whyte присутствует в документационных и display-стилях источника, но сам шрифт не входит в этот комплект. Не распространяйте файл шрифта без подтвержденной лицензии. Для production-панелей используйте Inter; Whyte подключайте только при наличии прав и отдельного локального asset-процесса.

Не смешивайте два контекста:

- Шрифт интерфейса iframe — обычный CSS/web-font вопрос.
- Шрифт создаваемого или изменяемого TextNode — Plugin API. Перед изменением текста надо вызвать figma.loadFontAsync(); эта функция загружает только шрифты, уже доступные в редакторе, и не скачивает их из интернета: [loadFontAsync](https://developers.figma.com/docs/plugins/api/properties/figma-loadfontasync/).

В источнике есть расхождение: typography variable heading/medium/fontSize равна 15, а локальный text style heading/heading.medium имеет размер 11 при line-height 25. Комплект сохраняет оба факта. Не «исправляйте» это скрыто — выберите контракт команды и выпустите изменение отдельной версией.

## 6. Подключение библиотеки иконок в Figma

### Подготовка контролируемого источника

1. Дублируйте Community UI3-файл в проект команды.
2. Назовите файл однозначно, например Company UI3 Foundations.
3. Ограничьте редактирование владельцами дизайн-системы.
4. Проверьте страницу Icons и оставьте публикуемыми только product-компоненты. Guides, Stroke Endpoints и служебные component sets лучше скрыть из публикации.
5. Сохраните исходные канонические имена icon.16.* и icon.24.*.
6. Привяжите цвет одноцветных иконок к семантическим icon-токенам, а не к hex.
7. Опубликуйте файл как library через Assets → Libraries → Publish.

Публикация библиотеки доступна на платных планах и требует edit-доступа к исходному файлу; изменения начинают распространяться только после новой публикации. Официальная инструкция: [Publish a library](https://help.figma.com/hc/en-us/articles/360025508373-Publish-a-library).

### Подключение в рабочих дизайн-файлах

1. Откройте Assets → Libraries.
2. Найдите контролируемую библиотеку и включите ее для файла.
3. Вставляйте instance из Assets или заменяйте иконку через instance swap.
4. Не detach-ите instance без отдельной причины.
5. При обновлении библиотеки сначала просматривайте diff, затем принимайте update.

Figma распространяет компоненты, стили и variables между файлами только после публикации и включения library. На Organization/Enterprise администратор может сделать библиотеку default для команды или workspace. Источники: [Guide to libraries](https://help.figma.com/hc/en-us/articles/360041051154-Guide-to-libraries-in-Figma) и [Manage a library](https://help.figma.com/hc/en-us/articles/21310245473815-Manage-a-library-for-a-workspace-or-organization).

На бесплатном Starter-плане можно работать с локальными компонентами в одном файле, но нельзя построить нормальный межпроектный publish/update-процесс. В этом случае храните шаблонный файл и явно считайте копии форками.

## 7. Подключение иконок в код

Figma library и npm/code package — две разные зависимости. Дизайнер получает component instance, а plugin UI — локальный SVG. Runtime-загрузка SVG с временных URL запрещена как архитектурная зависимость.

### Готовая локальная библиотека

В комплект уже включены 728 SVG-файлов и 729 записей отрисовываемых компонентов. Один и тот же SVG может обслуживать два исходных компонента с одинаковой геометрией. Используйте `canonicalName` из `icons/manifest.generated.json`.

Не импортируйте все 2,9 МБ SVG в UI-плагин. Создайте модуль только с нужными иконками:

~~~sh
npm run icons:list
npm run icons:module -- --icons icon.16.close,icon.24.check --out src/ui3-icons.selected.ts
~~~

~~~ts
import { getUi3IconSvg } from "./ui3-icons.selected";

iconHost.innerHTML = getUi3IconSvg("icon.16.close");
~~~

SVG являются проверенными статическими assets этого пакета. Для декоративной иконки задайте `aria-hidden="true"` контейнеру, а для icon-only кнопки — `aria-label` самой кнопке.

### Обновление экспорта

1. Создайте read-only access token с доступом к контролируемому файлу.
2. Передайте FIGMA_FILE_KEY и FIGMA_ACCESS_TOKEN только через локальное окружение или secret CI.
3. Выполните npm run icons:sync.
4. Скрипт найдет страницу Icons, построит новый manifest, экспортирует квадратные icon.16.* и icon.24.* как SVG и сохранит их локально. Недоступный для рендера компонент попадет в `failedExports`, не скрывая проблему.
5. Одноцветный SVG автоматически переводится на currentColor; многоцветный сохраняет собственные цвета и отмечается как multicolor.
6. Закоммитьте SVG и manifest как версионируемые артефакты; токен не коммитьте.

Скрипт использует официальные GET file / GET file nodes и GET image endpoints. Figma возвращает временные export URL, поэтому результат обязательно сохраняется локально: [REST file endpoints](https://developers.figma.com/docs/rest-api/file-endpoints/).

### Контракт компонента

Независимо от React/Vue/vanilla рекомендуется один публичный API:

~~~tsx
<Icon
  name="icon.16.chevron.right"
  size={16}
  tone="default"
  aria-hidden
/>
~~~

Правила:

- canonicalName — публичный идентификатор; nodeId используется только для синхронизации.
- Иконка наследует цвет через currentColor и tone.
- Декоративная иконка получает aria-hidden.
- IconButton обязан иметь доступное имя через aria-label или видимый текст.
- Удаление/переименование имени — breaking change. Сначала добавьте alias и deprecation.
- Экспортируйте по одному SVG/компоненту и используйте named exports, чтобы bundler мог убрать неиспользуемые иконки.
- Не используйте raster, base64 sprite и network fetch во время работы плагина.

Известная аномалия источника: `icon.16.slice` (`1:540750`) содержит видимую boolean-геометрию 0×0 и не экспортируется Figma. Пакет не подменяет ее пустым или выдуманным SVG.

## 8. Версионирование и обновления

Используйте SemVer для внутреннего пакета:

- patch: исправление метаданных, документации или эквивалентной геометрии;
- minor: новые токены, иконки или обратно совместимые aliases;
- major: удаление/переименование токена, canonicalName, изменение размера или смысла semantic alias.

Каждое обновление проходит:

1. Новый read-only snapshot.
2. Машинный diff токенов и иконок.
3. Review владельца дизайн-системы.
4. Visual regression для primitives во всех заявленных runtime-поверхностях.
5. Выпуск версии code package.
6. Публикация Figma library с тем же changelog.
7. Обновление одного pilot-плагина.
8. После smoke-теста — остальные проекты.

## 9. Definition of Done

- Нет произвольных UI-цветов вне semantic adapter.
- themeColors: true включен.
- Все interactive states используют правильный смысловой токен.
- Focus-visible видим с клавиатуры.
- Контраст проверен как минимум для текста, иконок, границ и disabled/error состояний.
- UI не ломается при resize и длинной локализованной строке.
- Figma Design light/dark протестированы в реальном iframe.
- Каждая заявленная дополнительная поверхность имеет отдельный smoke.
- Нет runtime-зависимости от Community URL, nodeId или временного export URL.
- SVG локальны, проходят validation и не содержат raster image.
- Figma library и code package имеют согласованные версии и changelog.
- Generated-файлы не правятся вручную.

## 10. Что является источником истины

При конфликте приоритет такой:

1. Наблюдаемое поведение текущего plugin iframe и официальный runtime API.
2. Product semantic adapter и его тесты.
3. Контролируемая опубликованная team library.
4. Зафиксированный Community snapshot.

Community-файл полезен как полный учебный и стартовый источник. Он не должен быть незаметно меняющейся production-зависимостью.
