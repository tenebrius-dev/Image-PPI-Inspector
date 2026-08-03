# Аудит переноса UI3 из Figma

Дата проверки: 2 августа 2026 года.

Источник: [UI3 — Figma’s UI Kit (Community)](https://www.figma.com/design/C87oqghCfxdKR5iYmCxEVP/UI3--Figma-s-UI-Kit--Community-?node-id=1-547037), file key `C87oqghCfxdKR5iYmCxEVP`.

## Результат

| Область | Источник Figma | Локальный комплект | Статус |
|---|---:|---:|---|
| Страницы | 29 | 29 в metadata snapshot | Совпадает |
| Цветовые variables | 946, 8 modes | 946, 8 modes | Совпадает |
| Typography variables | 57 | 57 | Совпадает |
| Sizing variables | 12 | 12 | Совпадает |
| Text styles | 12 | 12 | Совпадает |
| Effect/elevation styles | 10 | 10 JSON + CSS | Совпадает |
| Icon components | 820 | 820 в индексе | Совпадает |
| Icon component sets | 9 | 9 в индексе | Совпадает |
| Кандидаты на SVG-экспорт | 730 | 730 | Совпадает |
| Реально отрисовываемые icon components | 729 | 729 manifest records | Совпадает |
| Уникальные SVG | 728 | 728 локальных файлов | Совпадает с учетом дубля геометрии |

Машинная сверка нормализованных данных дала одинаковые контрольные хэши источника и локального снимка:

- Colors: `95a0fdc7`;
- Typography: `f25b7660`;
- Sizing: `f4b8cb3e`;
- Text styles: `d705db1c`;
- Icon inventory: `56a468b8`.

## Иконки

Одноцветные SVG переведены на `currentColor`, многоцветные сохранены без подмены цветов. Manifest хранит исходное имя, `nodeId`, component key, размер, локальный путь и hash геометрии.

Для dropdown/menu в исходном UI3 snapshot поверхность меню — тёмная (`✦/bg/menu/default`), а основной текст меню — светлый (`✦/text/menu/default`) во всех восьми режимах. Поэтому исправление в starter-kit явно задаёт светлый текст и тёмную menu surface и в светлой, и в тёмной теме; это не зависит от наследования цвета страницы.

В источнике есть два повторяющихся имени:

- `icon.24.text.paragraph-indent` — одинаковая геометрия, поэтому два component records используют один SVG;
- `icon.24.text.resize-height` — разная геометрия, поэтому обе версии получили стабильный hash-суффикс.

Источник содержит одну подтвержденную аномалию: `icon.16.slice`, node `1:540750`, имеет видимую boolean-геометрию 0×0. Figma возвращает ошибку экспорта. Компонент записан в `failedExports` с кодом `SOURCE_EMPTY_GEOMETRY`; пустая или выдуманная замена не добавлялась.

## Граница полноты

Этот пакет полностью переносит проверенные foundations, стили эффектов и пригодные для экспорта иконки указанной Community-копии. Он также содержит runtime adapter и процесс внедрения в плагины.

Страницы с UI-компонентами и примерами — Buttons, Inputs, Menus, Dialogs и другие — не преобразованы автоматически в готовые React/Vue/vanilla-компоненты. Figma-компонент и кодовый компонент имеют разные контракты состояний, доступности и runtime-темизации. Поэтому заявлять полную code-component parity было бы неверно: product primitives должны реализовываться в конкретном стеке и проходить визуальный и функциональный QA.

## Повторная проверка

Из корня комплекта:

~~~sh
npm run effects:build
npm run validate
npm run icons:list
~~~

Для выборочной интеграции иконок:

~~~sh
npm run icons:module -- --icons icon.16.close,icon.24.check --out src/ui3-icons.selected.ts
~~~
