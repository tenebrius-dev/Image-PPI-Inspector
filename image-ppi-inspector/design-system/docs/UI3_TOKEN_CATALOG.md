# UI3 Figma Design System — полный каталог токенов

> Снимок извлечен 31 июля 2026 года напрямую из [UI3 — Figma’s UI Kit (Community)](https://www.figma.com/design/C87oqghCfxdKR5iYmCxEVP/UI3--Figma-s-UI-Kit--Community-?node-id=1-547037). Это полный перечень локальных переменных цветов, типографики и размеров в этой публичной копии, а не обещание совпадения с закрытой внутренней системой Figma.

## Состав снимка

- Colors: **946** переменных × **8** режимов.
- Typography: **57** переменных.
- Sizing: **12** переменных.
- Text styles: **12** стилей.
- Effect/elevation styles: **10** стилей; точные эффекты — в `../tokens/ui3.effects.json`, CSS-переменные — в `../tokens/ui3.effects.css`.
- Icons: **820** компонентов и **9** наборов компонентов; 728 локальных SVG для 729 отрисовываемых компонентов — в `../icons/manifest.generated.json`.

## Цветовые токены

Значения разрешены до конечного HEX. В Alias сохранена исходная ссылка; если она зависит от режима, показаны все режимы.

<!-- BEGIN COLOR TOKENS -->
### ✦

| Token | Light | Dark | FigJam-Light | FigJam-Dark | DevMode-Light | DevMode-Dark | Slides-Light | Slides-Dark | Alias |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| `✦/_bg/bg-assistive` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `✦/bg/assistive/default` |
| `✦/_bg/bg-brand` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `✦/bg/brand/default` |
| `✦/_bg/bg-danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/bg/danger/default` |
| `✦/_bg/bg-default` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `✦/bg/default/default` |
| `✦/_bg/bg-figjam` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `✦/bg/figjam/default` |
| `✦/_bg/bg-handoff` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `✦/bg/handoff/default` |
| `✦/_bg/bg-hover` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `✦/bg/default/hover` |
| `✦/_bg/bg-menu` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `✦/bg/menu/default` |
| `✦/_bg/bg-secondary` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `✦/bg/default/secondary` |
| `✦/_bg/bg-selected` | `#E5F4FF` | `#4A5878` | `#F1E5FF` | `#604D75` | `#DAECDF` | `#517361` | `#FFDFCC` | `#864E37` | `✦/bg/selected/default` |
| `✦/_bg/bg-success` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `✦/bg/success/default` |
| `✦/_bg/bg-toolbar` | `#2C2C2C` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `✦/bg/toolbar/default` |
| `✦/_bg/bg-warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `✦/bg/warning/default` |
| `✦/_border/border-default` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `✦/border/default/default` |
| `✦/_border/border-menu` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `✦/border/menu/default` |
| `✦/_border/border-onbrand-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/border/brand/onbrand-strong` |
| `✦/_border/border-selected` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `✦/border/selected/default` |
| `✦/_border/border-selected-strong` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/border/selected/strong` |
| `✦/_border/border-strong` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `✦/border/default/strong` |
| `✦/_icon/icon-assistive` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/icon/assistive/default` |
| `✦/_icon/icon-brand` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/icon/brand/default` |
| `✦/_icon/icon-danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/danger/default` |
| `✦/_icon/icon-default` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `✦/icon/default/default` |
| `✦/_icon/icon-figjam` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `✦/icon/figjam/default` |
| `✦/_icon/icon-handoff` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/icon/handoff/default` |
| `✦/_icon/icon-onbrand` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/icon/brand/onbrand` |
| `✦/_icon/icon-onbrand-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `✦/icon/brand/onbrand-secondary` |
| `✦/_icon/icon-onbrand-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `✦/icon/brand/onbrand-tertiary` |
| `✦/_icon/icon-secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `✦/icon/default/secondary` |
| `✦/_icon/icon-success` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `✦/icon/success/default` |
| `✦/_icon/icon-tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `✦/icon/default/tertiary` |
| `✦/_icon/icon-warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `✦/icon/warning/default` |
| `✦/_multiplayer/multiplayerblue` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `✦/special/multiplayerblue` |
| `✦/_multiplayer/multiplayergreen` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `✦/special/multiplayergreen` |
| `✦/_multiplayer/multiplayergrey` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `✦/special/multiplayergrey` |
| `✦/_multiplayer/multiplayerpink` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `✦/special/multiplayerpink` |
| `✦/_multiplayer/multiplayerpurple` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `✦/special/multiplayerpurple` |
| `✦/_multiplayer/multiplayerred` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/special/multiplayerred` |
| `✦/_multiplayer/multiplayeryellow` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `✦/special/multiplayeryellow` |
| `✦/_text/text-assistive` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/text/assistive/default` |
| `✦/_text/text-brand` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/text/brand/default` |
| `✦/_text/text-danger` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `✦/text/danger/default` |
| `✦/_text/text-default` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `✦/text/default/default` |
| `✦/_text/text-figjam` | `#8638E5` | `#C5B2DC` | `#8638E5` | `#C5B2DC` | `#8638E5` | `#C5B2DC` | `#8638E5` | `#C5B2DC` | `✦/text/figjam/default` |
| `✦/_text/text-handoff` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/text/handoff/default` |
| `✦/_text/text-onbrand` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/text/brand/onbrand` |
| `✦/_text/text-onbrand-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `✦/text/brand/onbrand-secondary` |
| `✦/_text/text-onbrand-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `✦/text/brand/onbrand-tertiary` |
| `✦/_text/text-secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `✦/text/default/secondary` |
| `✦/_text/text-success` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/text/success/default` |
| `✦/_text/text-tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `✦/text/default/tertiary` |
| `✦/_text/text-warning` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `✦/text/warning/default` |
| `✦/bg/assistive/default` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `🎨/pink/500` |
| `✦/bg/assistive/hover` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `🎨/pink/600` |
| `✦/bg/assistive/pressed` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `🎨/pink/600` |
| `✦/bg/assistive/secondary` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `🎨/pink/700` |
| `✦/bg/assistive/tertiary` | `#FFE0FC` | `#68275E` | `#FFE0FC` | `#68275E` | `#FFE0FC` | `#68275E` | `#FFE0FC` | `#68275E` | `Light: 🎨/pink/200<br>Dark: 🎨/pink/800<br>FigJam-Light: 🎨/pink/200<br>FigJam-Dark: 🎨/pink/800<br>DevMode-Light: 🎨/pink/200<br>DevMode-Dark: 🎨/pink/800<br>Slides-Light: 🎨/pink/200<br>Slides-Dark: 🎨/pink/800` |
| `✦/bg/brand/default` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/bg/brand/hover` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/brand/pressed` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/brand/secondary` | `#0768CF` | `#105CAD` | `#7C2BDA` | `#652CA8` | `#008043` | `#0A5C35` | `#C53E0D` | `#B93F13` | `Light: 🎨/blue/700<br>Dark: 🎨/blue/700<br>FigJam-Light: 🎨/purple/700<br>FigJam-Dark: 🎨/purple/700<br>DevMode-Light: 🎨/green/700<br>DevMode-Dark: 🎨/green/700<br>Slides-Light: 🎨/persimmon/700<br>Slides-Dark: 🎨/persimmon/700` |
| `✦/bg/brand/tertiary` | `#E5F4FF` | `#394360` | `#F1E5FF` | `#473956` | `#CFF7D3` | `#476656` | `#FFDFCC` | `#603A2A` | `Light: 🎨/blue/200<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/purple/200<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/green/200<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/persimmon/200<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/component/default` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `🎨/purple/500` |
| `✦/bg/component/hover` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/bg/component/pressed` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/bg/component/secondary` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `🎨/purple/700` |
| `✦/bg/component/tertiary` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `Light: 🎨/purple/200<br>Dark: 🎨/pale_purple/800<br>FigJam-Light: 🎨/purple/200<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/purple/200<br>DevMode-Dark: 🎨/pale_purple/800<br>Slides-Light: 🎨/purple/200<br>Slides-Dark: 🎨/pale_purple/800` |
| `✦/bg/danger/default` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/bg/danger/hover` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `🎨/red/600` |
| `✦/bg/danger/pressed` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `🎨/red/600` |
| `✦/bg/danger/secondary` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `🎨/red/700` |
| `✦/bg/danger/tertiary` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `Light: 🎨/red/200<br>Dark: 🎨/pale_red/800<br>FigJam-Light: 🎨/red/200<br>FigJam-Dark: 🎨/pale_red/800<br>DevMode-Light: 🎨/red/200<br>DevMode-Dark: 🎨/pale_red/800<br>Slides-Light: 🎨/red/200<br>Slides-Dark: 🎨/pale_red/800` |
| `✦/bg/default/default` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `Light: 🎨/white/1000<br>Dark: 🎨/grey/800<br>FigJam-Light: 🎨/white/1000<br>FigJam-Dark: 🎨/grey/800<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/grey/800<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/grey/800` |
| `✦/bg/default/hover` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `Light: 🎨/grey/100<br>Dark: 🎨/grey/700<br>FigJam-Light: 🎨/grey/100<br>FigJam-Dark: 🎨/grey/700<br>DevMode-Light: 🎨/grey/100<br>DevMode-Dark: 🎨/grey/700<br>Slides-Light: 🎨/grey/100<br>Slides-Dark: 🎨/grey/700` |
| `✦/bg/default/pressed` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `Light: 🎨/grey/100<br>Dark: 🎨/grey/700<br>FigJam-Light: 🎨/grey/100<br>FigJam-Dark: 🎨/grey/700<br>DevMode-Light: 🎨/grey/100<br>DevMode-Dark: 🎨/grey/700<br>Slides-Light: 🎨/grey/100<br>Slides-Dark: 🎨/grey/700` |
| `✦/bg/default/secondary` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `#F5F5F5` | `#383838` | `Light: 🎨/grey/100<br>Dark: 🎨/grey/700<br>FigJam-Light: 🎨/grey/100<br>FigJam-Dark: 🎨/grey/700<br>DevMode-Light: 🎨/grey/100<br>DevMode-Dark: 🎨/grey/700<br>Slides-Light: 🎨/grey/100<br>Slides-Dark: 🎨/grey/700` |
| `✦/bg/default/tertiary` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `Light: 🎨/grey/200<br>Dark: 🎨/grey/600<br>FigJam-Light: 🎨/grey/200<br>FigJam-Dark: 🎨/grey/600<br>DevMode-Light: 🎨/grey/200<br>DevMode-Dark: 🎨/grey/600<br>Slides-Light: 🎨/grey/200<br>Slides-Dark: 🎨/grey/600` |
| `✦/bg/design/default` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `🎨/blue/500` |
| `✦/bg/design/hover` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `🎨/blue/600` |
| `✦/bg/design/pressed` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `🎨/blue/600` |
| `✦/bg/design/secondary` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `🎨/blue/700` |
| `✦/bg/design/tertiary` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `Light: 🎨/blue/200<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/blue/200<br>FigJam-Dark: 🎨/pale_blue/800<br>DevMode-Light: 🎨/blue/200<br>DevMode-Dark: 🎨/pale_blue/800<br>Slides-Light: 🎨/blue/200<br>Slides-Dark: 🎨/pale_blue/800` |
| `✦/bg/desktopBackgrounded/default` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/bg/desktopBackgrounded/disabled` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `🎨/grey/500` |
| `✦/bg/desktopBackgrounded/hover` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `🎨/grey/600` |
| `✦/bg/desktopBackgrounded/pressed` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/bg/desktopBackgrounded/secondary` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/bg/desktopBackgrounded/tertiary` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `🎨/grey/600` |
| `✦/bg/desktopForeground/default` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/bg/desktopForeground/disabled` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `🎨/grey/500` |
| `✦/bg/desktopForeground/hover` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/bg/desktopForeground/pressed` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/bg/desktopForeground/secondary` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/bg/desktopForeground/tertiary` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `🎨/grey/600` |
| `✦/bg/desktopFullscreen/default` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `🎨/black/1000` |
| `✦/bg/desktopFullscreen/disabled` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `🎨/grey/500` |
| `✦/bg/desktopFullscreen/hover` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/bg/desktopFullscreen/pressed` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/bg/desktopFullscreen/secondary` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/bg/desktopFullscreen/tertiary` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `🎨/grey/600` |
| `✦/bg/disabled/default` | `#D9D9D9` | `#757575` | `#D9D9D9` | `#757575` | `#D9D9D9` | `#757575` | `#D9D9D9` | `#757575` | `Light: 🎨/grey/300<br>Dark: 🎨/grey/500<br>FigJam-Light: 🎨/grey/300<br>FigJam-Dark: 🎨/grey/500<br>DevMode-Light: 🎨/grey/300<br>DevMode-Dark: 🎨/grey/500<br>Slides-Light: 🎨/grey/300<br>Slides-Dark: 🎨/grey/500` |
| `✦/bg/disabled/secondary` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `🎨/grey/400` |
| `✦/bg/figjam/default` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `🎨/purple/500` |
| `✦/bg/figjam/hover` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/bg/figjam/pressed` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/bg/figjam/secondary` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `🎨/purple/700` |
| `✦/bg/figjam/tertiary` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `Light: 🎨/purple/200<br>Dark: 🎨/pale_purple/800<br>FigJam-Light: 🎨/purple/200<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/purple/200<br>DevMode-Dark: 🎨/pale_purple/800<br>Slides-Light: 🎨/purple/200<br>Slides-Dark: 🎨/pale_purple/800` |
| `✦/bg/handoff/default` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `🎨/green/500` |
| `✦/bg/handoff/hover` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `🎨/green/600` |
| `✦/bg/handoff/pressed` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `🎨/green/600` |
| `✦/bg/handoff/secondary` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `🎨/green/700` |
| `✦/bg/handoff/tertiary` | `#DAECDF` | `#476656` | `#DAECDF` | `#476656` | `#DAECDF` | `#476656` | `#DAECDF` | `#476656` | `Light: 🎨/pale_green/200<br>Dark: 🎨/pale_green/800<br>FigJam-Light: 🎨/pale_green/200<br>FigJam-Dark: 🎨/pale_green/800<br>DevMode-Light: 🎨/pale_green/200<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/pale_green/200<br>Slides-Dark: 🎨/pale_green/800` |
| `✦/bg/info/default` | `#E5F4FF` | `#394360` | `#F1E5FF` | `#473956` | `#DAECDF` | `#476656` | `#FFDFCC` | `#603A2A` | `Light: 🎨/blue/200<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/purple/200<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/pale_green/200<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/persimmon/200<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/inverse/default` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `Light: 🎨/grey/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/grey/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/grey/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/grey/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/bg/measure/default` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/bg/measure/hover` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `🎨/red/600` |
| `✦/bg/measure/pressed` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `🎨/red/600` |
| `✦/bg/measure/secondary` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `🎨/red/700` |
| `✦/bg/measure/tertiary` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `Light: 🎨/red/200<br>Dark: 🎨/pale_red/800<br>FigJam-Light: 🎨/red/200<br>FigJam-Dark: 🎨/pale_red/800<br>DevMode-Light: 🎨/red/200<br>DevMode-Dark: 🎨/pale_red/800<br>Slides-Light: 🎨/red/200<br>Slides-Dark: 🎨/pale_red/800` |
| `✦/bg/menu/default` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/bg/menu/disabled` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `🎨/grey/500` |
| `✦/bg/menu/hover` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/bg/menu/pressed` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/bg/menu/secondary` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/bg/menu/selected` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/bg/menu/selected-hover` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/menu/selected-pressed` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/menu/selected-secondary` | `#394360` | `#394360` | `#473956` | `#473956` | `#476656` | `#476656` | `#603A2A` | `#603A2A` | `Light: 🎨/pale_blue/800<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/pale_purple/800<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/pale_green/800<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/pale_persimmon/800<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/menu/selected-tertiary` | `#394360` | `#394360` | `#473956` | `#473956` | `#476656` | `#476656` | `#603A2A` | `#603A2A` | `Light: 🎨/pale_blue/800<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/pale_purple/800<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/pale_green/800<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/pale_persimmon/800<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/menu/tertiary` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `🎨/grey/600` |
| `✦/bg/selected/default` | `#E5F4FF` | `#4A5878` | `#F1E5FF` | `#604D75` | `#DAECDF` | `#517361` | `#FFDFCC` | `#864E37` | `Light: 🎨/blue/200<br>Dark: 🎨/pale_blue/700<br>FigJam-Light: 🎨/purple/200<br>FigJam-Dark: 🎨/pale_purple/700<br>DevMode-Light: 🎨/pale_green/200<br>DevMode-Dark: 🎨/pale_green/700<br>Slides-Light: 🎨/persimmon/200<br>Slides-Dark: 🎨/pale_persimmon/700` |
| `✦/bg/selected/hover` | `#BDE3FF` | `#536383` | `#E4CCFF` | `#6B5884` | `#C3E0CC` | `#5C806D` | `#FFBB9E` | `#A55E40` | `Light: 🎨/blue/300<br>Dark: 🎨/pale_blue/600<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/pale_purple/600<br>DevMode-Light: 🎨/pale_green/300<br>DevMode-Dark: 🎨/pale_green/600<br>Slides-Light: 🎨/persimmon/300<br>Slides-Dark: 🎨/pale_persimmon/600` |
| `✦/bg/selected/onselected` | `#BDE3FF` | `#667799` | `#E4CCFF` | `#7F699B` | `#AFF4C6` | `#678E79` | `#FFBB9E` | `#D4693B` | `Light: 🎨/blue/300<br>Dark: 🎨/pale_blue/500<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/green/300<br>DevMode-Dark: 🎨/pale_green/500<br>Slides-Light: 🎨/persimmon/300<br>Slides-Dark: 🎨/pale_persimmon/500` |
| `✦/bg/selected/onselected-hover` | `#BDE3FF` | `#667799` | `#E4CCFF` | `#7F699B` | `#AFF4C6` | `#678E79` | `#FFBB9E` | `#D4693B` | `✦/bg/selected/onselected` |
| `✦/bg/selected/onselected-pressed` | `#BDE3FF` | `#667799` | `#E4CCFF` | `#7F699B` | `#AFF4C6` | `#678E79` | `#FFBB9E` | `#D4693B` | `✦/bg/selected/onselected` |
| `✦/bg/selected/pressed` | `#BDE3FF` | `#536383` | `#E4CCFF` | `#6B5884` | `#C3E0CC` | `#5C806D` | `#FFBB9E` | `#A55E40` | `Light: 🎨/blue/300<br>Dark: 🎨/pale_blue/600<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/pale_purple/600<br>DevMode-Light: 🎨/pale_green/300<br>DevMode-Dark: 🎨/pale_green/600<br>Slides-Light: 🎨/persimmon/300<br>Slides-Dark: 🎨/pale_persimmon/600` |
| `✦/bg/selected/secondary` | `#F2F9FF` | `#394360` | `#F9F5FF` | `#473956` | `#F1F8F2` | `#476656` | `#FFF2EB` | `#603A2A` | `Light: 🎨/blue/100<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/purple/100<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/pale_green/100<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/persimmon/100<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/selected/strong` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#50297A` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/800<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/bg/selected/tertiary` | `#F2F9FF` | `#394360` | `#F9F5FF` | `#473956` | `#F1F8F2` | `#476656` | `#FFF2EB` | `#603A2A` | `Light: 🎨/blue/100<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/purple/100<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/pale_green/100<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/persimmon/100<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/success/default` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `🎨/green/500` |
| `✦/bg/success/hover` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `🎨/green/600` |
| `✦/bg/success/pressed` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `🎨/green/600` |
| `✦/bg/success/secondary` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `🎨/green/700` |
| `✦/bg/success/tertiary` | `#CFF7D3` | `#476656` | `#CFF7D3` | `#476656` | `#CFF7D3` | `#476656` | `#CFF7D3` | `#476656` | `Light: 🎨/green/200<br>Dark: 🎨/pale_green/800<br>FigJam-Light: 🎨/green/200<br>FigJam-Dark: 🎨/pale_green/800<br>DevMode-Light: 🎨/green/200<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/green/200<br>Slides-Dark: 🎨/pale_green/800` |
| `✦/bg/toolbar/default` | `#2C2C2C` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `Light: 🎨/grey/800<br>Dark: 🎨/grey/800<br>FigJam-Light: 🎨/white/1000<br>FigJam-Dark: 🎨/grey/800<br>DevMode-Light: 🎨/grey/800<br>DevMode-Dark: 🎨/grey/800<br>Slides-Light: 🎨/grey/800<br>Slides-Dark: 🎨/grey/800` |
| `✦/bg/toolbar/disabled` | `#757575` | `#757575` | `#D9D9D9` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `Light: 🎨/grey/500<br>Dark: 🎨/grey/500<br>FigJam-Light: 🎨/grey/300<br>FigJam-Dark: 🎨/grey/500<br>DevMode-Light: 🎨/grey/500<br>DevMode-Dark: 🎨/grey/500<br>Slides-Light: 🎨/grey/500<br>Slides-Dark: 🎨/grey/500` |
| `✦/bg/toolbar/hover` | `#111111` | `#111111` | `#F5F5F5` | `#111111` | `#111111` | `#111111` | `#F5F5F5` | `#111111` | `Light: 🎨/grey/1000<br>Dark: 🎨/grey/1000<br>FigJam-Light: 🎨/grey/100<br>FigJam-Dark: 🎨/grey/1000<br>DevMode-Light: 🎨/grey/1000<br>DevMode-Dark: 🎨/grey/1000<br>Slides-Light: 🎨/grey/100<br>Slides-Dark: 🎨/grey/1000` |
| `✦/bg/toolbar/pressed` | `#111111` | `#111111` | `#F5F5F5` | `#111111` | `#111111` | `#111111` | `#111111` | `#111111` | `Light: 🎨/grey/1000<br>Dark: 🎨/grey/1000<br>FigJam-Light: 🎨/grey/100<br>FigJam-Dark: 🎨/grey/1000<br>DevMode-Light: 🎨/grey/1000<br>DevMode-Dark: 🎨/grey/1000<br>Slides-Light: 🎨/grey/1000<br>Slides-Dark: 🎨/grey/1000` |
| `✦/bg/toolbar/secondary` | `#383838` | `#383838` | `#F5F5F5` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `Light: 🎨/grey/700<br>Dark: 🎨/grey/700<br>FigJam-Light: 🎨/grey/100<br>FigJam-Dark: 🎨/grey/700<br>DevMode-Light: 🎨/grey/700<br>DevMode-Dark: 🎨/grey/700<br>Slides-Light: 🎨/grey/700<br>Slides-Dark: 🎨/grey/700` |
| `✦/bg/toolbar/selected` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/bg/toolbar/selected-hover` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/toolbar/selected-pressed` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/toolbar/selected-secondary` | `#0768CF` | `#105CAD` | `#7C2BDA` | `#652CA8` | `#008043` | `#0A5C35` | `#C53E0D` | `#B93F13` | `Light: 🎨/blue/700<br>Dark: 🎨/blue/700<br>FigJam-Light: 🎨/purple/700<br>FigJam-Dark: 🎨/purple/700<br>DevMode-Light: 🎨/green/700<br>DevMode-Dark: 🎨/green/700<br>Slides-Light: 🎨/persimmon/700<br>Slides-Dark: 🎨/persimmon/700` |
| `✦/bg/toolbar/selected-tertiary` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `✦/bg/toolbar/selected` |
| `✦/bg/toolbar/tertiary` | `#444444` | `#444444` | `#E6E6E6` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `Light: 🎨/grey/600<br>Dark: 🎨/grey/600<br>FigJam-Light: 🎨/grey/200<br>FigJam-Dark: 🎨/grey/600<br>DevMode-Light: 🎨/grey/600<br>DevMode-Dark: 🎨/grey/600<br>Slides-Light: 🎨/grey/600<br>Slides-Dark: 🎨/grey/600` |
| `✦/bg/tooltip/default` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/bg/tooltip/disabled` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `🎨/grey/500` |
| `✦/bg/tooltip/hover` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/bg/tooltip/pressed` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/bg/tooltip/secondary` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/bg/tooltip/selected` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/bg/tooltip/selected-hover` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/tooltip/selected-pressed` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/bg/tooltip/selected-secondary` | `#394360` | `#394360` | `#473956` | `#473956` | `#476656` | `#476656` | `#603A2A` | `#603A2A` | `Light: 🎨/pale_blue/800<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/pale_purple/800<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/pale_green/800<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/pale_persimmon/800<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/tooltip/selected-tertiary` | `#394360` | `#394360` | `#473956` | `#473956` | `#476656` | `#476656` | `#603A2A` | `#603A2A` | `Light: 🎨/pale_blue/800<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/pale_purple/800<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/pale_green/800<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/pale_persimmon/800<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/bg/tooltip/tertiary` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `🎨/grey/600` |
| `✦/bg/warning/default` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/bg/warning/hover` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `🎨/yellow/600` |
| `✦/bg/warning/pressed` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `🎨/yellow/600` |
| `✦/bg/warning/secondary` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `🎨/yellow/700` |
| `✦/bg/warning/tertiary` | `#FFF1C2` | `#5C4100` | `#FFF1C2` | `#5C4100` | `#FFF1C2` | `#5C4100` | `#FFF1C2` | `#5C4100` | `Light: 🎨/yellow/200<br>Dark: 🎨/pale_yellow/800<br>FigJam-Light: 🎨/yellow/200<br>FigJam-Dark: 🎨/pale_yellow/800<br>DevMode-Light: 🎨/yellow/200<br>DevMode-Dark: 🎨/pale_yellow/800<br>Slides-Light: 🎨/yellow/200<br>Slides-Dark: 🎨/pale_yellow/800` |
| `✦/border/assistive/default` | `#FFBDF2` | `#96207A` | `#FFBDF2` | `#96207A` | `#FFBDF2` | `#96207A` | `#FFBDF2` | `#96207A` | `Light: 🎨/pink/300<br>Dark: 🎨/pink/700<br>FigJam-Light: 🎨/pink/300<br>FigJam-Dark: 🎨/pink/700<br>DevMode-Light: 🎨/pink/300<br>DevMode-Dark: 🎨/pink/700<br>Slides-Light: 🎨/pink/300<br>Slides-Dark: 🎨/pink/700` |
| `✦/border/assistive/onassistive` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `🎨/pink/600` |
| `✦/border/assistive/onassistive-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/assistive/strong` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `Light: 🎨/pink/600<br>Dark: 🎨/pink/400<br>FigJam-Light: 🎨/pink/600<br>FigJam-Dark: 🎨/pink/400<br>DevMode-Light: 🎨/pink/600<br>DevMode-Dark: 🎨/pink/400<br>Slides-Light: 🎨/pink/600<br>Slides-Dark: 🎨/pink/400` |
| `✦/border/brand/default` | `#BDE3FF` | `#105CAD` | `#E4CCFF` | `#652CA8` | `#AFF4C6` | `#0A5C35` | `#FFBB9E` | `#B93F13` | `Light: 🎨/blue/300<br>Dark: 🎨/blue/700<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/purple/700<br>DevMode-Light: 🎨/green/300<br>DevMode-Dark: 🎨/green/700<br>Slides-Light: 🎨/persimmon/300<br>Slides-Dark: 🎨/persimmon/700` |
| `✦/border/brand/onbrand` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/border/brand/onbrand-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/brand/strong` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/border/component/default` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `Light: 🎨/purple/300<br>Dark: 🎨/purple/700<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/purple/700<br>DevMode-Light: 🎨/purple/300<br>DevMode-Dark: 🎨/purple/700<br>Slides-Light: 🎨/purple/300<br>Slides-Dark: 🎨/purple/700` |
| `✦/border/component/hover` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `🎨/purple/500` |
| `✦/border/component/oncomponent` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/border/component/oncomponent-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/component/strong` | `#8638E5` | `#D6B6FB` | `#8638E5` | `#D6B6FB` | `#8638E5` | `#D6B6FB` | `#8638E5` | `#D6B6FB` | `Light: 🎨/purple/600<br>Dark: 🎨/purple/300<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/300<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/purple/300<br>Slides-Light: 🎨/purple/600<br>Slides-Dark: 🎨/purple/300` |
| `✦/border/danger/default` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `Light: 🎨/red/300<br>Dark: 🎨/red/700<br>FigJam-Light: 🎨/red/300<br>FigJam-Dark: 🎨/red/700<br>DevMode-Light: 🎨/red/300<br>DevMode-Dark: 🎨/red/700<br>Slides-Light: 🎨/red/300<br>Slides-Dark: 🎨/red/700` |
| `✦/border/danger/ondanger` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `🎨/red/600` |
| `✦/border/danger/ondanger-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/danger/strong` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `Light: 🎨/red/600<br>Dark: 🎨/red/400<br>FigJam-Light: 🎨/red/600<br>FigJam-Dark: 🎨/red/400<br>DevMode-Light: 🎨/red/600<br>DevMode-Dark: 🎨/red/400<br>Slides-Light: 🎨/red/600<br>Slides-Dark: 🎨/red/400` |
| `✦/border/default/default` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `Light: 🎨/grey/200<br>Dark: 🎨/grey/600<br>FigJam-Light: 🎨/grey/200<br>FigJam-Dark: 🎨/grey/600<br>DevMode-Light: 🎨/grey/200<br>DevMode-Dark: 🎨/grey/600<br>Slides-Light: 🎨/grey/200<br>Slides-Dark: 🎨/grey/600` |
| `✦/border/default/strong` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `Light: 🎨/grey/800<br>Dark: 🎨/white/800<br>FigJam-Light: 🎨/grey/800<br>FigJam-Dark: 🎨/white/800<br>DevMode-Light: 🎨/grey/800<br>DevMode-Dark: 🎨/white/800<br>Slides-Light: 🎨/grey/800<br>Slides-Dark: 🎨/white/800` |
| `✦/border/design/default` | `#BDE3FF` | `#105CAD` | `#BDE3FF` | `#105CAD` | `#BDE3FF` | `#105CAD` | `#BDE3FF` | `#105CAD` | `Light: 🎨/blue/300<br>Dark: 🎨/blue/700<br>FigJam-Light: 🎨/blue/300<br>FigJam-Dark: 🎨/blue/700<br>DevMode-Light: 🎨/blue/300<br>DevMode-Dark: 🎨/blue/700<br>Slides-Light: 🎨/blue/300<br>Slides-Dark: 🎨/blue/700` |
| `✦/border/design/ondesign` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `🎨/blue/600` |
| `✦/border/design/ondesign-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/design/strong` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/blue/600<br>FigJam-Dark: 🎨/blue/400<br>DevMode-Light: 🎨/blue/600<br>DevMode-Dark: 🎨/blue/400<br>Slides-Light: 🎨/blue/600<br>Slides-Dark: 🎨/blue/400` |
| `✦/border/desktopBackgrounded/default` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `🎨/grey/600` |
| `✦/border/desktopBackgrounded/disabled` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/desktopBackgrounded/strong` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/border/desktopForeground/default` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/desktopForeground/disabled` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/desktopForeground/strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/desktopFullscreen/default` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/border/desktopFullscreen/disabled` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/border/desktopFullscreen/strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/disabled/default` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `Light: 🎨/grey/200<br>Dark: 🎨/grey/600<br>FigJam-Light: 🎨/grey/200<br>FigJam-Dark: 🎨/grey/600<br>DevMode-Light: 🎨/grey/200<br>DevMode-Dark: 🎨/grey/600<br>Slides-Light: 🎨/grey/200<br>Slides-Dark: 🎨/grey/600` |
| `✦/border/disabled/strong` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `Light: 🎨/black/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/black/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/black/400<br>Slides-Dark: 🎨/white/400` |
| `✦/border/figjam/default` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `Light: 🎨/purple/300<br>Dark: 🎨/purple/700<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/purple/700<br>DevMode-Light: 🎨/purple/300<br>DevMode-Dark: 🎨/purple/700<br>Slides-Light: 🎨/purple/300<br>Slides-Dark: 🎨/purple/700` |
| `✦/border/figjam/onfigjam` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/border/figjam/onfigjam-strong` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/border/figjam/strong` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `Light: 🎨/purple/600<br>Dark: 🎨/purple/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/purple/400<br>Slides-Light: 🎨/purple/600<br>Slides-Dark: 🎨/purple/400` |
| `✦/border/handoff/default` | `#AFF4C6` | `#0A5C35` | `#AFF4C6` | `#0A5C35` | `#AFF4C6` | `#0A5C35` | `#AFF4C6` | `#0A5C35` | `Light: 🎨/green/300<br>Dark: 🎨/green/700<br>FigJam-Light: 🎨/green/300<br>FigJam-Dark: 🎨/green/700<br>DevMode-Light: 🎨/green/300<br>DevMode-Dark: 🎨/green/700<br>Slides-Light: 🎨/green/300<br>Slides-Dark: 🎨/green/700` |
| `✦/border/handoff/strong` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `Light: 🎨/green/600<br>Dark: 🎨/green/400<br>FigJam-Light: 🎨/green/600<br>FigJam-Dark: 🎨/green/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/green/600<br>Slides-Dark: 🎨/green/400` |
| `✦/border/measure/default` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `Light: 🎨/red/300<br>Dark: 🎨/red/700<br>FigJam-Light: 🎨/red/300<br>FigJam-Dark: 🎨/red/700<br>DevMode-Light: 🎨/red/300<br>DevMode-Dark: 🎨/red/700<br>Slides-Light: 🎨/red/300<br>Slides-Dark: 🎨/red/700` |
| `✦/border/measure/onmeasure` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `🎨/red/600` |
| `✦/border/measure/onmeasure-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/measure/strong` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `Light: 🎨/red/600<br>Dark: 🎨/red/400<br>FigJam-Light: 🎨/red/600<br>FigJam-Dark: 🎨/red/400<br>DevMode-Light: 🎨/red/600<br>DevMode-Dark: 🎨/red/400<br>Slides-Light: 🎨/red/600<br>Slides-Dark: 🎨/red/400` |
| `✦/border/menu/default` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/menu/disabled` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/menu/disabled-strong` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/menu/onselected` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/border/menu/onselected-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/menu/selected` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/border/menu/selected-strong` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/border/menu/strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/selected/default` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/border/selected/onselected` | `#BDE3FF` | `#667799` | `#E4CCFF` | `#7F699B` | `#AFF4C6` | `#678E79` | `#FFBB9E` | `#D4693B` | `Light: 🎨/blue/300<br>Dark: 🎨/pale_blue/500<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/green/300<br>DevMode-Dark: 🎨/pale_green/500<br>Slides-Light: 🎨/persimmon/300<br>Slides-Dark: 🎨/pale_persimmon/500` |
| `✦/border/selected/onselected-strong` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `Light: 🎨/black/800<br>Dark: 🎨/white/800<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/800<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/800<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/800` |
| `✦/border/selected/strong` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/border/success/default` | `#AFF4C6` | `#0A5C35` | `#AFF4C6` | `#0A5C35` | `#AFF4C6` | `#0A5C35` | `#AFF4C6` | `#0A5C35` | `Light: 🎨/green/300<br>Dark: 🎨/green/700<br>FigJam-Light: 🎨/green/300<br>FigJam-Dark: 🎨/green/700<br>DevMode-Light: 🎨/green/300<br>DevMode-Dark: 🎨/green/700<br>Slides-Light: 🎨/green/300<br>Slides-Dark: 🎨/green/700` |
| `✦/border/success/onsuccess` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `🎨/green/600` |
| `✦/border/success/onsuccess-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/success/strong` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `Light: 🎨/green/600<br>Dark: 🎨/green/400<br>FigJam-Light: 🎨/green/600<br>FigJam-Dark: 🎨/green/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/green/600<br>Slides-Dark: 🎨/green/400` |
| `✦/border/toolbar/default` | `#444444` | `#444444` | `#E6E6E6` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `Light: 🎨/grey/600<br>Dark: 🎨/grey/600<br>FigJam-Light: 🎨/grey/200<br>FigJam-Dark: 🎨/grey/600<br>DevMode-Light: 🎨/grey/600<br>DevMode-Dark: 🎨/grey/600<br>Slides-Light: 🎨/grey/600<br>Slides-Dark: 🎨/grey/600` |
| `✦/border/toolbar/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#E6E6E6` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `Light: 🎨/white/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/grey/200<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/white/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/white/400<br>Slides-Dark: 🎨/white/400` |
| `✦/border/toolbar/onselected` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/toolbar/selected` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/border/toolbar/selected-strong` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/border/toolbar/strong` | `#FFFFFF` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/grey/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/border/tooltip/default` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/tooltip/disabled` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/tooltip/disabled-strong` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/border/tooltip/onselected` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/border/tooltip/onselected-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/tooltip/selected` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/border/tooltip/selected-strong` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/border/tooltip/strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/border/warning/default` | `#FFE8A3` | `#925711` | `#FFE8A3` | `#925711` | `#FFE8A3` | `#925711` | `#FFE8A3` | `#925711` | `Light: 🎨/yellow/300<br>Dark: 🎨/yellow/900<br>FigJam-Light: 🎨/yellow/300<br>FigJam-Dark: 🎨/yellow/900<br>DevMode-Light: 🎨/yellow/300<br>DevMode-Dark: 🎨/yellow/900<br>Slides-Light: 🎨/yellow/300<br>Slides-Dark: 🎨/yellow/900` |
| `✦/border/warning/onwarning` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `🎨/yellow/700` |
| `✦/border/warning/onwarning-strong` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/border/warning/strong` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `Light: 🎨/yellow/1000<br>Dark: 🎨/yellow/400<br>FigJam-Light: 🎨/yellow/1000<br>FigJam-Dark: 🎨/yellow/400<br>DevMode-Light: 🎨/yellow/1000<br>DevMode-Dark: 🎨/yellow/400<br>Slides-Light: 🎨/yellow/1000<br>Slides-Dark: 🎨/yellow/400` |
| `✦/fullscreen/assistive/bg` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `✦/bg/assistive/default` |
| `✦/fullscreen/assistive/bg-secondary` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `✦/bg/assistive/secondary` |
| `✦/fullscreen/assistive/bg-tertiary` | `#FFE0FC` | `#68275E` | `#FFE0FC` | `#68275E` | `#FFE0FC` | `#68275E` | `#FFE0FC` | `#68275E` | `✦/bg/assistive/tertiary` |
| `✦/fullscreen/assistive/border` | `#FFBDF2` | `#96207A` | `#FFBDF2` | `#96207A` | `#FFBDF2` | `#96207A` | `#FFBDF2` | `#96207A` | `✦/border/assistive/default` |
| `✦/fullscreen/assistive/border-onassitive` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `✦/border/assistive/onassistive` |
| `✦/fullscreen/assistive/border-onassitive-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/border/assistive/onassistive-strong` |
| `✦/fullscreen/assistive/border-strong` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/border/assistive/strong` |
| `✦/fullscreen/assistive/icon` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/icon/assistive/default` |
| `✦/fullscreen/assistive/icon-onassitive` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/icon/assistive/onassistive` |
| `✦/fullscreen/assistive/text` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/text/assistive/default` |
| `✦/fullscreen/assistive/text-onassistive` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/text/assistive/onassistive` |
| `✦/fullscreen/component/bg` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `✦/bg/component/default` |
| `✦/fullscreen/component/bg-secondary` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `✦/bg/component/secondary` |
| `✦/fullscreen/component/bg-tertiary` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `#F1E5FF` | `#473956` | `✦/bg/component/tertiary` |
| `✦/fullscreen/component/border` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `#E4CCFF` | `#652CA8` | `✦/border/component/default` |
| `✦/fullscreen/component/border-oncomponent` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `✦/border/component/oncomponent` |
| `✦/fullscreen/component/border-oncomponent-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/border/component/oncomponent-strong` |
| `✦/fullscreen/component/border-strong` | `#8638E5` | `#D6B6FB` | `#8638E5` | `#D6B6FB` | `#8638E5` | `#D6B6FB` | `#8638E5` | `#D6B6FB` | `✦/border/component/strong` |
| `✦/fullscreen/component/icon` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `✦/icon/component/default` |
| `✦/fullscreen/component/icon-oncomponent` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/icon/component/oncomponent` |
| `✦/fullscreen/component/text` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `✦/text/component/default` |
| `✦/fullscreen/component/text-oncomponent` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/text/component/oncomponent` |
| `✦/fullscreen/default/bg` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `✦/bg/default/default` |
| `✦/fullscreen/default/border` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `#E6E6E6` | `#444444` | `✦/border/default/default` |
| `✦/fullscreen/default/border-strong` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `#2C2C2C` | `#FFFFFFE5` | `✦/border/default/strong` |
| `✦/fullscreen/default/icon` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `✦/icon/default/default` |
| `✦/fullscreen/default/icon-secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `✦/icon/default/secondary` |
| `✦/fullscreen/default/icon-tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `✦/icon/default/tertiary` |
| `✦/fullscreen/default/text` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `✦/text/default/default` |
| `✦/fullscreen/default/text-secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `✦/text/default/secondary` |
| `✦/fullscreen/default/text-tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `✦/text/default/tertiary` |
| `✦/fullscreen/design/bg` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `✦/bg/design/default` |
| `✦/fullscreen/design/bg-secondary` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `✦/bg/design/secondary` |
| `✦/fullscreen/design/bg-tertiary` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `✦/bg/design/tertiary` |
| `✦/fullscreen/design/border` | `#BDE3FF` | `#105CAD` | `#BDE3FF` | `#105CAD` | `#BDE3FF` | `#105CAD` | `#BDE3FF` | `#105CAD` | `✦/border/design/default` |
| `✦/fullscreen/design/border-ondesign` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `✦/border/design/ondesign` |
| `✦/fullscreen/design/border-ondesign-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/border/design/ondesign-strong` |
| `✦/fullscreen/design/border-strong` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `✦/border/design/strong` |
| `✦/fullscreen/design/icon` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `✦/icon/design/default` |
| `✦/fullscreen/design/icon-ondesign` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/icon/design/ondesign` |
| `✦/fullscreen/design/text` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `✦/text/design/default` |
| `✦/fullscreen/design/text-ondesign` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/text/design/ondesign` |
| `✦/fullscreen/measure/bg` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/bg/measure/default` |
| `✦/fullscreen/measure/bg-secondary` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `✦/bg/measure/secondary` |
| `✦/fullscreen/measure/bg-tertiary` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `#FFE2E0` | `#60332A` | `✦/bg/measure/tertiary` |
| `✦/fullscreen/measure/border` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `#FFC7C2` | `#963323` | `✦/border/measure/default` |
| `✦/fullscreen/measure/border-onmeasure` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `✦/border/measure/onmeasure` |
| `✦/fullscreen/measure/border-onmeasure-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/border/measure/onmeasure-strong` |
| `✦/fullscreen/measure/border-strong` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `✦/border/measure/strong` |
| `✦/fullscreen/measure/icon` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/measure/default` |
| `✦/fullscreen/measure/icon-onmeasure` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/icon/measure/onmeasure` |
| `✦/fullscreen/measure/text` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `✦/text/measure/default` |
| `✦/fullscreen/measure/text-onmeasure` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `✦/text/measure/onmeasure` |
| `✦/fullscreen/selection/bg` | `#E5F4FF` | `#4A5878` | `#F1E5FF` | `#604D75` | `#DAECDF` | `#517361` | `#FFDFCC` | `#864E37` | `✦/bg/selected/default` |
| `✦/fullscreen/selection/bg-secondary` | `#F2F9FF` | `#394360` | `#F9F5FF` | `#473956` | `#F1F8F2` | `#476656` | `#FFF2EB` | `#603A2A` | `✦/bg/selected/secondary` |
| `✦/fullscreen/selection/border` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `✦/border/selected/default` |
| `✦/fullscreen/selection/border-onselected` | `#BDE3FF` | `#667799` | `#E4CCFF` | `#7F699B` | `#AFF4C6` | `#678E79` | `#FFBB9E` | `#D4693B` | `✦/border/selected/onselected` |
| `✦/fullscreen/selection/border-onselected-strong` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `✦/border/selected/onselected-strong` |
| `✦/fullscreen/selection/border-strong` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/border/selected/strong` |
| `✦/fullscreen/selection/icon` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/icon/selected/default` |
| `✦/fullscreen/selection/icon-onselected` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `✦/icon/selected/onselected` |
| `✦/fullscreen/selection/text` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/text/selected/default` |
| `✦/fullscreen/selection/text-onselected` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `✦/text/selected/onselected` |
| `✦/fullscreen/special/borderselectedimmutablenode` | `#9747FF` | `#8A38F5` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `Light: 🎨/purple/500<br>Dark: 🎨/purple/500<br>FigJam-Light: 🎨/blue/500<br>FigJam-Dark: 🎨/blue/500<br>DevMode-Light: 🎨/blue/500<br>DevMode-Dark: 🎨/blue/500<br>Slides-Light: 🎨/purple/500<br>Slides-Dark: 🎨/purple/500` |
| `✦/fullscreen/special/canvasdefaultfill` | `#F5F5F5` | `#1E1E1E` | `#F5F5F5` | `#1E1E1E` | `#F5F5F5` | `#1E1E1E` | `#F5F5F5` | `#1E1E1E` | `Light: 🎨/grey/100<br>Dark: 🎨/grey/900<br>FigJam-Light: 🎨/grey/100<br>FigJam-Dark: 🎨/grey/900<br>DevMode-Light: 🎨/grey/100<br>DevMode-Dark: 🎨/grey/900<br>Slides-Light: 🎨/grey/100<br>Slides-Dark: 🎨/grey/900` |
| `✦/fullscreen/special/framedefaultfill` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/fullscreen/special/iconondarkcanvas` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `✦/special/iconondarkcanvas` |
| `✦/fullscreen/special/iconondarkcanvassecondary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/fullscreen/special/icononlightcanvas` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `✦/special/icononlightcanvas` |
| `✦/fullscreen/special/icononlightcanvassecondary` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `🎨/black/400` |
| `✦/fullscreen/special/shapedefaultfill` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `🎨/grey/300` |
| `✦/fullscreen/special/textcomponentondarkcanvas` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `🎨/purple/400` |
| `✦/fullscreen/special/textcomponentonlightcanvas` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/fullscreen/special/textondarkcanvas` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `✦/special/textondarkcanvas` |
| `✦/fullscreen/special/textondarkcanvassecondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `✦/special/textondarkcanvassecondary` |
| `✦/fullscreen/special/textonlightcanvas` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `✦/special/textonlightcanvas` |
| `✦/fullscreen/special/textonlightcanvassecondary` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `✦/special/textonlightcanvassecondary` |
| `✦/fullscreen/special/textselectedondarkcanvas` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `#80CAFF` | `#7CC4F8` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/purple/400<br>DevMode-Dark: 🎨/purple/400<br>Slides-Light: 🎨/blue/400<br>Slides-Dark: 🎨/blue/400` |
| `✦/fullscreen/special/textselectedonlightcanvas` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#007BE5` | `#0A6DC2` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/purple/600<br>Slides-Light: 🎨/blue/600<br>Slides-Dark: 🎨/blue/600` |
| `✦/icon/assistive/default` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `Light: 🎨/pink/600<br>Dark: 🎨/pink/400<br>FigJam-Light: 🎨/pink/600<br>FigJam-Dark: 🎨/pink/400<br>DevMode-Light: 🎨/pink/600<br>DevMode-Dark: 🎨/pink/400<br>Slides-Light: 🎨/pink/600<br>Slides-Dark: 🎨/pink/400` |
| `✦/icon/assistive/onassistive` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/assistive/onassistive-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/assistive/onassistive-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/assistive/pressed` | `#CB0B96` | `#FBB1ED` | `#CB0B96` | `#FBB1ED` | `#CB0B96` | `#FBB1ED` | `#CB0B96` | `#FBB1ED` | `Light: 🎨/pink/700<br>Dark: 🎨/pink/300<br>FigJam-Light: 🎨/pink/700<br>FigJam-Dark: 🎨/pink/300<br>DevMode-Light: 🎨/pink/700<br>DevMode-Dark: 🎨/pink/300<br>Slides-Light: 🎨/pink/700<br>Slides-Dark: 🎨/pink/300` |
| `✦/icon/assistive/secondary` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/icon/assistive/default` |
| `✦/icon/assistive/tertiary` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/icon/assistive/default` |
| `✦/icon/brand/default` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/icon/brand/onbrand` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/brand/onbrand-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/brand/onbrand-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/brand/pressed` | `#0768CF` | `#0C8CE9` | `#7C2BDA` | `#8A38F5` | `#008043` | `#198F51` | `#C53E0D` | `#F65009` | `Light: 🎨/blue/700<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/700<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/700<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/700<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/icon/brand/secondary` | `#80CAFF` | `#0A6DC2` | `#D9B8FF` | `#7A2ED6` | `#85E0A3` | `#078348` | `#FFA27A` | `#DB4606` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/icon/brand/tertiary` | `#BDE3FF` | `#394360` | `#E4CCFF` | `#473956` | `#AFF4C6` | `#476656` | `#FFBB9E` | `#603A2A` | `Light: 🎨/blue/300<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/purple/300<br>FigJam-Dark: 🎨/pale_purple/800<br>DevMode-Light: 🎨/green/300<br>DevMode-Dark: 🎨/pale_green/800<br>Slides-Light: 🎨/persimmon/300<br>Slides-Dark: 🎨/pale_persimmon/800` |
| `✦/icon/component/default` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `Light: 🎨/purple/600<br>Dark: 🎨/purple/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/purple/400<br>Slides-Light: 🎨/purple/600<br>Slides-Dark: 🎨/purple/400` |
| `✦/icon/component/oncomponent` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/component/oncomponent-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/component/oncomponent-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/component/pressed` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `Light: 🎨/purple/700<br>Dark: 🎨/purple/300<br>FigJam-Light: 🎨/purple/700<br>FigJam-Dark: 🎨/purple/300<br>DevMode-Light: 🎨/purple/700<br>DevMode-Dark: 🎨/purple/300<br>Slides-Light: 🎨/purple/700<br>Slides-Dark: 🎨/purple/300` |
| `✦/icon/component/secondary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/icon/component/tertiary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/icon/danger/default` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/danger/hover` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `Light: 🎨/red/700<br>Dark: 🎨/red/300<br>FigJam-Light: 🎨/red/700<br>FigJam-Dark: 🎨/red/300<br>DevMode-Light: 🎨/red/700<br>DevMode-Dark: 🎨/red/300<br>Slides-Light: 🎨/red/700<br>Slides-Dark: 🎨/red/300` |
| `✦/icon/danger/ondanger` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/danger/ondanger-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/danger/ondanger-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/danger/pressed` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `Light: 🎨/red/700<br>Dark: 🎨/red/300<br>FigJam-Light: 🎨/red/700<br>FigJam-Dark: 🎨/red/300<br>DevMode-Light: 🎨/red/700<br>DevMode-Dark: 🎨/red/300<br>Slides-Light: 🎨/red/700<br>Slides-Dark: 🎨/red/300` |
| `✦/icon/danger/secondary` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/danger/default` |
| `✦/icon/danger/secondary-hover` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/danger/default` |
| `✦/icon/danger/tertiary` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/danger/default` |
| `✦/icon/default/default` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/default/hover` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/default/pressed` | `#007BE5` | `#0A6DC2` | `#8638E5` | `#7A2ED6` | `#009951` | `#078348` | `#E24C0C` | `#DB4606` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/600<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/600<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/600<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/600` |
| `✦/icon/default/secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `Light: 🎨/black/500<br>Dark: 🎨/white/500<br>FigJam-Light: 🎨/black/500<br>FigJam-Dark: 🎨/white/500<br>DevMode-Light: 🎨/black/500<br>DevMode-Dark: 🎨/white/500<br>Slides-Light: 🎨/black/500<br>Slides-Dark: 🎨/white/500` |
| `✦/icon/default/secondary-hover` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/default/tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `Light: 🎨/black/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/black/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/black/400<br>Slides-Dark: 🎨/white/400` |
| `✦/icon/default/tertiary-hover` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/design/default` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/blue/600<br>FigJam-Dark: 🎨/blue/400<br>DevMode-Light: 🎨/blue/600<br>DevMode-Dark: 🎨/blue/400<br>Slides-Light: 🎨/blue/600<br>Slides-Dark: 🎨/blue/400` |
| `✦/icon/design/ondesign` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/design/ondesign-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/design/ondesign-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/design/pressed` | `#0768CF` | `#A8D7FA` | `#0768CF` | `#A8D7FA` | `#0768CF` | `#A8D7FA` | `#0768CF` | `#A8D7FA` | `Light: 🎨/blue/700<br>Dark: 🎨/blue/300<br>FigJam-Light: 🎨/blue/700<br>FigJam-Dark: 🎨/blue/300<br>DevMode-Light: 🎨/blue/700<br>DevMode-Dark: 🎨/blue/300<br>Slides-Light: 🎨/blue/700<br>Slides-Dark: 🎨/blue/300` |
| `✦/icon/design/secondary` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `✦/icon/design/default` |
| `✦/icon/design/tertiary` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `✦/icon/design/default` |
| `✦/icon/desktopBackgrounded/danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/desktopBackgrounded/default` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/desktopBackgrounded/desktopForeground/danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/desktopBackgrounded/desktopForeground/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopBackgrounded/desktopForeground/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/desktopBackgrounded/desktopForeground/disabled/ondisabled` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/icon/desktopBackgrounded/desktopForeground/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopBackgrounded/desktopForeground/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/desktopBackgrounded/desktopForeground/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopBackgrounded/desktopForeground/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/desktopBackgrounded/desktopForeground/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopBackgrounded/desktopForeground/warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/icon/desktopBackgrounded/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/desktopBackgrounded/disabled/ondisabled` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/icon/desktopBackgrounded/hover` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/desktopBackgrounded/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/desktopBackgrounded/secondary-hover` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/desktopBackgrounded/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/desktopBackgrounded/tertiary-hover` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/desktopBackgrounded/warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/icon/desktopFullscreen/danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/desktopFullscreen/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopFullscreen/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/desktopFullscreen/disabled/ondisabled` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `🎨/black/1000` |
| `✦/icon/desktopFullscreen/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopFullscreen/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/desktopFullscreen/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopFullscreen/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/desktopFullscreen/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/desktopFullscreen/warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/icon/disabled/default` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `Light: 🎨/black/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/black/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/black/400<br>Slides-Dark: 🎨/white/400` |
| `✦/icon/disabled/ondisabled` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `Light: 🎨/white/1000<br>Dark: 🎨/grey/800<br>FigJam-Light: 🎨/white/1000<br>FigJam-Dark: 🎨/grey/800<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/grey/800<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/grey/800` |
| `✦/icon/figjam/default` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `Light: 🎨/purple/600<br>Dark: 🎨/purple/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/purple/400<br>Slides-Light: 🎨/purple/600<br>Slides-Dark: 🎨/purple/400` |
| `✦/icon/figjam/onfigjam` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/figjam/onfigjam-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/figjam/onfigjam-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/figjam/pressed` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `Light: 🎨/purple/700<br>Dark: 🎨/purple/300<br>FigJam-Light: 🎨/purple/700<br>FigJam-Dark: 🎨/purple/300<br>DevMode-Light: 🎨/purple/700<br>DevMode-Dark: 🎨/purple/300<br>Slides-Light: 🎨/purple/700<br>Slides-Dark: 🎨/purple/300` |
| `✦/icon/figjam/secondary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/icon/figjam/tertiary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/icon/handoff/default` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `Light: 🎨/green/600<br>Dark: 🎨/green/400<br>FigJam-Light: 🎨/green/600<br>FigJam-Dark: 🎨/green/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/green/600<br>Slides-Dark: 🎨/green/400` |
| `✦/icon/handoff/pressed` | `#008043` | `#A1E8B9` | `#008043` | `#A1E8B9` | `#008043` | `#A1E8B9` | `#008043` | `#A1E8B9` | `Light: 🎨/green/700<br>Dark: 🎨/green/300<br>FigJam-Light: 🎨/green/700<br>FigJam-Dark: 🎨/green/300<br>DevMode-Light: 🎨/green/700<br>DevMode-Dark: 🎨/green/300<br>Slides-Light: 🎨/green/700<br>Slides-Dark: 🎨/green/300` |
| `✦/icon/handoff/secondary` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/icon/handoff/default` |
| `✦/icon/handoff/tertiary` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/icon/handoff/default` |
| `✦/icon/inverse/oninverse` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `Light: 🎨/white/800<br>Dark: 🎨/black/800<br>FigJam-Light: 🎨/white/800<br>FigJam-Dark: 🎨/black/800<br>DevMode-Light: 🎨/white/800<br>DevMode-Dark: 🎨/black/800<br>Slides-Light: 🎨/white/800<br>Slides-Dark: 🎨/black/800` |
| `✦/icon/measure/default` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/measure/hover` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `Light: 🎨/red/700<br>Dark: 🎨/red/300<br>FigJam-Light: 🎨/red/700<br>FigJam-Dark: 🎨/red/300<br>DevMode-Light: 🎨/red/700<br>DevMode-Dark: 🎨/red/300<br>Slides-Light: 🎨/red/700<br>Slides-Dark: 🎨/red/300` |
| `✦/icon/measure/onmeasure` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/measure/onmeasure-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/measure/onmeasure-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/measure/pressed` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `#BD2915` | `#FBBCB6` | `Light: 🎨/red/700<br>Dark: 🎨/red/300<br>FigJam-Light: 🎨/red/700<br>FigJam-Dark: 🎨/red/300<br>DevMode-Light: 🎨/red/700<br>DevMode-Dark: 🎨/red/300<br>Slides-Light: 🎨/red/700<br>Slides-Dark: 🎨/red/300` |
| `✦/icon/measure/secondary` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/measure/default` |
| `✦/icon/measure/secondary-hover` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/measure/default` |
| `✦/icon/measure/tertiary` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `✦/icon/measure/default` |
| `✦/icon/menu/danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/menu/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/menu/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/menu/disabled/ondisabled` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/icon/menu/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/menu/pressed` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/icon/menu/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/menu/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/menu/selected` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/icon/menu/selected-secondary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/icon/menu/selected-tertiary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/icon/menu/selected/onselected` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/menu/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/menu/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/menu/warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/icon/selected/default` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/icon/selected/onselected` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/selected/onselected-secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `Light: 🎨/black/500<br>Dark: 🎨/white/500<br>FigJam-Light: 🎨/black/500<br>FigJam-Dark: 🎨/white/500<br>DevMode-Light: 🎨/black/500<br>DevMode-Dark: 🎨/white/500<br>Slides-Light: 🎨/black/500<br>Slides-Dark: 🎨/white/500` |
| `✦/icon/selected/onselected-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/selected/onselected-tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `Light: 🎨/black/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/black/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/black/400<br>Slides-Dark: 🎨/white/400` |
| `✦/icon/selected/secondary` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/icon/selected/default` |
| `✦/icon/selected/tertiary` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/icon/selected/default` |
| `✦/icon/success/default` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `🎨/green/500` |
| `✦/icon/success/onselected-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/success/onsuccess` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/success/onsuccess-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/icon/success/pressed` | `#008043` | `#A1E8B9` | `#008043` | `#A1E8B9` | `#008043` | `#A1E8B9` | `#008043` | `#A1E8B9` | `Light: 🎨/green/700<br>Dark: 🎨/green/300<br>FigJam-Light: 🎨/green/700<br>FigJam-Dark: 🎨/green/300<br>DevMode-Light: 🎨/green/700<br>DevMode-Dark: 🎨/green/300<br>Slides-Light: 🎨/green/700<br>Slides-Dark: 🎨/green/300` |
| `✦/icon/success/secondary` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `✦/icon/success/default` |
| `✦/icon/success/tertiary` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `✦/icon/success/default` |
| `✦/icon/toolbar/danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/toolbar/default` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/toolbar/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `Light: 🎨/white/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/white/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/white/400<br>Slides-Dark: 🎨/white/400` |
| `✦/icon/toolbar/disabled/ondisabled` | `#2C2C2C` | `#2C2C2C` | `#0000004D` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `Light: 🎨/grey/800<br>Dark: 🎨/grey/800<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/grey/800<br>DevMode-Light: 🎨/grey/800<br>DevMode-Dark: 🎨/grey/800<br>Slides-Light: 🎨/grey/800<br>Slides-Dark: 🎨/grey/800` |
| `✦/icon/toolbar/hover` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/toolbar/pressed` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/icon/toolbar/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `Light: 🎨/white/500<br>Dark: 🎨/white/500<br>FigJam-Light: 🎨/black/500<br>FigJam-Dark: 🎨/white/500<br>DevMode-Light: 🎨/white/500<br>DevMode-Dark: 🎨/white/500<br>Slides-Light: 🎨/white/500<br>Slides-Dark: 🎨/white/500` |
| `✦/icon/toolbar/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/toolbar/selected` | `#80CAFF` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/icon/toolbar/selected-secondary` | `#80CAFF` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/icon/toolbar/selected` |
| `✦/icon/toolbar/selected-tertiary` | `#80CAFF` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/icon/toolbar/selected` |
| `✦/icon/toolbar/selected/onselected` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/toolbar/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `Light: 🎨/white/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/white/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/white/400<br>Slides-Dark: 🎨/white/400` |
| `✦/icon/toolbar/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/icon/toolbar/warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/icon/tooltip/danger` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/icon/tooltip/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/tooltip/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/tooltip/disabled/ondisabled` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/icon/tooltip/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/tooltip/pressed` | `#0D99FF` | `#0C8CE9` | `#9747FF` | `#8A38F5` | `#14AE5C` | `#198F51` | `#FF5C16` | `#F65009` | `Light: 🎨/blue/500<br>Dark: 🎨/blue/500<br>FigJam-Light: 🎨/purple/500<br>FigJam-Dark: 🎨/purple/500<br>DevMode-Light: 🎨/green/500<br>DevMode-Dark: 🎨/green/500<br>Slides-Light: 🎨/persimmon/500<br>Slides-Dark: 🎨/persimmon/500` |
| `✦/icon/tooltip/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/icon/tooltip/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/tooltip/selected` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/icon/tooltip/selected-secondary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/icon/tooltip/selected` |
| `✦/icon/tooltip/selected-tertiary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/icon/tooltip/selected` |
| `✦/icon/tooltip/selected/onselected` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/tooltip/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/icon/tooltip/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/icon/tooltip/warning` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/icon/warning/default` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/icon/warning/onwarning` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/icon/warning/onwarning-secondary` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `🎨/black/500` |
| `✦/icon/warning/onwarning-tertiary` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `🎨/black/400` |
| `✦/icon/warning/pressed` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `Light: 🎨/yellow/1000<br>Dark: 🎨/yellow/400<br>FigJam-Light: 🎨/yellow/1000<br>FigJam-Dark: 🎨/yellow/400<br>DevMode-Light: 🎨/yellow/1000<br>DevMode-Dark: 🎨/yellow/400<br>Slides-Light: 🎨/yellow/1000<br>Slides-Dark: 🎨/yellow/400` |
| `✦/icon/warning/secondary` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `✦/icon/warning/default` |
| `✦/icon/warning/tertiary` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `✦/icon/warning/default` |
| `✦/special/bghoverondarkcanvas` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `🎨/white/300` |
| `✦/special/bghoveronlightcanvas` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `🎨/black/300` |
| `✦/special/bghovertransparent` | `#0000000D` | `#FFFFFF0D` | `#0000000D` | `#FFFFFF0D` | `#0000000D` | `#FFFFFF0D` | `#0000000D` | `#FFFFFF0D` | `Light: 🎨/black/100<br>Dark: 🎨/white/100<br>FigJam-Light: 🎨/black/100<br>FigJam-Dark: 🎨/white/100<br>DevMode-Light: 🎨/black/100<br>DevMode-Dark: 🎨/white/100<br>Slides-Light: 🎨/black/100<br>Slides-Dark: 🎨/white/100` |
| `✦/special/bginspectpadding` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `🎨/blue/500` |
| `✦/special/bginspectpaddingtertiary` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `#E5F4FF` | `#394360` | `Light: 🎨/blue/200<br>Dark: 🎨/pale_blue/800<br>FigJam-Light: 🎨/blue/200<br>FigJam-Dark: 🎨/pale_blue/800<br>DevMode-Light: 🎨/blue/200<br>DevMode-Dark: 🎨/pale_blue/800<br>Slides-Light: 🎨/blue/200<br>Slides-Dark: 🎨/pale_blue/800` |
| `✦/special/bginspectspacing` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `🎨/pink/500` |
| `✦/special/bgsecondaryoncanvas` | `#E6E6E6` | `#111111` | `#E6E6E6` | `#111111` | `#E6E6E6` | `#111111` | `#E6E6E6` | `#111111` | `Light: 🎨/grey/200<br>Dark: 🎨/grey/1000<br>FigJam-Light: 🎨/grey/200<br>FigJam-Dark: 🎨/grey/1000<br>DevMode-Light: 🎨/grey/200<br>DevMode-Dark: 🎨/grey/1000<br>Slides-Light: 🎨/grey/200<br>Slides-Dark: 🎨/grey/1000` |
| `✦/special/bgselectedarea` | `#0D99FF33` | `#0D99FF33` | `#974AFF33` | `#974AFF33` | `#14AE5C33` | `#14AE5C33` | `#FF5C1633` | `#FF5C1633` | — |
| `✦/special/bgtransparent` | `#FFFFFF99` | `#00000099` | `#FFFFFF99` | `#00000099` | `#FFFFFF99` | `#00000099` | `#FFFFFF99` | `#00000099` | — |
| `✦/special/bgtransparentsecondary` | `#FFFFFF` | `#FFFFFF26` | `#FFFFFF` | `#FFFFFF26` | `#FFFFFF` | `#FFFFFF26` | `#FFFFFF` | `#FFFFFF26` | — |
| `✦/special/bgtransparentsecondary/hover` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `Light: 🎨/black/200<br>Dark: 🎨/white/200<br>FigJam-Light: 🎨/black/200<br>FigJam-Dark: 🎨/white/200<br>DevMode-Light: 🎨/black/200<br>DevMode-Dark: 🎨/white/200<br>Slides-Light: 🎨/black/200<br>Slides-Dark: 🎨/white/200` |
| `✦/special/bgtransparentsecondary/pressed` | `#00000026` | `#FFFFFF26` | `#00000026` | `#FFFFFF26` | `#00000026` | `#FFFFFF26` | `#00000026` | `#FFFFFF26` | — |
| `✦/special/bgvoting` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/special/bgvotingsecondary` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `🎨/yellow/200` |
| `✦/special/bgvotingtertiary` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `🎨/yellow/100` |
| `✦/special/bgvotingwheeldial` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `🎨/yellow/100` |
| `✦/special/bgvotingwheelhover` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `🎨/yellow/200` |
| `✦/special/borderinspectpadding` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `🎨/blue/500` |
| `✦/special/borderinspectspacing` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `🎨/pink/500` |
| `✦/special/bordertranslucent` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `Light: 🎨/black/200<br>Dark: 🎨/white/200<br>FigJam-Light: 🎨/black/200<br>FigJam-Dark: 🎨/white/200<br>DevMode-Light: 🎨/black/200<br>DevMode-Dark: 🎨/white/200<br>Slides-Light: 🎨/black/200<br>Slides-Dark: 🎨/white/200` |
| `✦/special/code` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/special/codeaccent` | `#CE7012` | `#FCB34A` | `#CE7012` | `#FCB34A` | `#CE7012` | `#FCB34A` | `#CE7012` | `#FCB34A` | `Light: 🎨/orange/900<br>Dark: 🎨/orange/400<br>FigJam-Light: 🎨/orange/900<br>FigJam-Dark: 🎨/orange/400<br>DevMode-Light: 🎨/orange/900<br>DevMode-Dark: 🎨/orange/400<br>Slides-Light: 🎨/orange/900<br>Slides-Dark: 🎨/orange/400` |
| `✦/special/codeattribute` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/special/codeclassname` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/blue/600<br>FigJam-Dark: 🎨/blue/400<br>DevMode-Light: 🎨/blue/600<br>DevMode-Dark: 🎨/blue/400<br>Slides-Light: 🎨/blue/600<br>Slides-Dark: 🎨/blue/400` |
| `✦/special/codecomment` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `Light: 🎨/black/500<br>Dark: 🎨/white/500<br>FigJam-Light: 🎨/black/500<br>FigJam-Dark: 🎨/white/500<br>DevMode-Light: 🎨/black/500<br>DevMode-Dark: 🎨/white/500<br>Slides-Light: 🎨/black/500<br>Slides-Dark: 🎨/white/500` |
| `✦/special/codeproperty` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/special/codestring` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/blue/600<br>FigJam-Dark: 🎨/blue/400<br>DevMode-Light: 🎨/blue/600<br>DevMode-Dark: 🎨/blue/400<br>Slides-Light: 🎨/blue/600<br>Slides-Dark: 🎨/blue/400` |
| `✦/special/codestylename` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/blue/600<br>FigJam-Dark: 🎨/blue/400<br>DevMode-Light: 🎨/blue/600<br>DevMode-Dark: 🎨/blue/400<br>Slides-Light: 🎨/blue/600<br>Slides-Dark: 🎨/blue/400` |
| `✦/special/codetag` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `Light: 🎨/purple/600<br>Dark: 🎨/purple/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/purple/400<br>Slides-Light: 🎨/purple/600<br>Slides-Dark: 🎨/purple/400` |
| `✦/special/codevalue` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `Light: 🎨/pink/600<br>Dark: 🎨/pink/400<br>FigJam-Light: 🎨/pink/600<br>FigJam-Dark: 🎨/pink/400<br>DevMode-Light: 🎨/pink/600<br>DevMode-Dark: 🎨/pink/400<br>Slides-Light: 🎨/pink/600<br>Slides-Dark: 🎨/pink/400` |
| `✦/special/codevariable` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `Light: 🎨/green/600<br>Dark: 🎨/green/400<br>FigJam-Light: 🎨/green/600<br>FigJam-Dark: 🎨/green/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/green/600<br>Slides-Dark: 🎨/green/400` |
| `✦/special/conditionalborder` | `#FFFFFF00` | `#444444` | `#FFFFFF00` | `#444444` | `#FFFFFF00` | `#444444` | `#FFFFFF00` | `#444444` | `Light: —<br>Dark: 🎨/grey/600<br>FigJam-Light: —<br>FigJam-Dark: 🎨/grey/600<br>DevMode-Light: —<br>DevMode-Dark: 🎨/grey/600<br>Slides-Light: —<br>Slides-Dark: 🎨/grey/600` |
| `✦/special/icondesignfilesecondary` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `🎨/blue/400` |
| `✦/special/iconfigjamfilesecondary` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `🎨/purple/400` |
| `✦/special/iconondarkcanvas` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `🎨/white/800` |
| `✦/special/icononlightcanvas` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/special/icononvoting` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/special/iconprototypefile` | `#D9D9D9` | `#757575` | `#D9D9D9` | `#757575` | `#D9D9D9` | `#757575` | `#D9D9D9` | `#757575` | `Light: 🎨/grey/300<br>Dark: 🎨/grey/500<br>FigJam-Light: 🎨/grey/300<br>FigJam-Dark: 🎨/grey/500<br>DevMode-Light: 🎨/grey/300<br>DevMode-Dark: 🎨/grey/500<br>Slides-Light: 🎨/grey/300<br>Slides-Dark: 🎨/grey/500` |
| `✦/special/iconprototypefilesecondary` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `Light: 🎨/grey/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/grey/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/grey/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/grey/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/special/iconpublishedfile` | `#2C2C2C` | `#757575` | `#2C2C2C` | `#757575` | `#2C2C2C` | `#757575` | `#2C2C2C` | `#757575` | `Light: 🎨/grey/800<br>Dark: 🎨/grey/500<br>FigJam-Light: 🎨/grey/800<br>FigJam-Dark: 🎨/grey/500<br>DevMode-Light: 🎨/grey/800<br>DevMode-Dark: 🎨/grey/500<br>Slides-Light: 🎨/grey/800<br>Slides-Dark: 🎨/grey/500` |
| `✦/special/iconpublishedfilesecondary` | `#757575` | `#B3B3B3` | `#757575` | `#B3B3B3` | `#757575` | `#B3B3B3` | `#757575` | `#B3B3B3` | `Light: 🎨/grey/500<br>Dark: 🎨/grey/400<br>FigJam-Light: 🎨/grey/500<br>FigJam-Dark: 🎨/grey/400<br>DevMode-Light: 🎨/grey/500<br>DevMode-Dark: 🎨/grey/400<br>Slides-Light: 🎨/grey/500<br>Slides-Dark: 🎨/grey/400` |
| `✦/special/loading` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `#0000001A` | `#FFFFFF1A` | `Light: 🎨/black/200<br>Dark: 🎨/white/200<br>FigJam-Light: 🎨/black/200<br>FigJam-Dark: 🎨/white/200<br>DevMode-Light: 🎨/black/200<br>DevMode-Dark: 🎨/white/200<br>Slides-Light: 🎨/black/200<br>Slides-Dark: 🎨/white/200` |
| `✦/special/loadingmenu` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `🎨/white/200` |
| `✦/special/loadingsecondary` | `#0000000D` | `#FFFFFF0D` | `#0000000D` | `#FFFFFF0D` | `#0000000D` | `#FFFFFF0D` | `#0000000D` | `#FFFFFF0D` | `Light: 🎨/black/100<br>Dark: 🎨/white/100<br>FigJam-Light: 🎨/black/100<br>FigJam-Dark: 🎨/white/100<br>DevMode-Light: 🎨/black/100<br>DevMode-Dark: 🎨/white/100<br>Slides-Light: 🎨/black/100<br>Slides-Dark: 🎨/white/100` |
| `✦/special/loadingsecondarymenu` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `🎨/white/100` |
| `✦/special/modalbackdrop` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `🎨/black/500` |
| `✦/special/multiplayerblue` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `🎨/blue/600` |
| `✦/special/multiplayerbluehover` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `🎨/blue/700` |
| `✦/special/multiplayerbluesecondary` | `#034AC1` | `#184591` | `#034AC1` | `#184591` | `#034AC1` | `#184591` | `#034AC1` | `#184591` | `🎨/blue/800` |
| `✦/special/multiplayergreen` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `🎨/green/500` |
| `✦/special/multiplayergreenhover` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `🎨/green/600` |
| `✦/special/multiplayergreensecondary` | `#036838` | `#0A4C2D` | `#036838` | `#0A4C2D` | `#036838` | `#0A4C2D` | `#036838` | `#0A4C2D` | `🎨/green/800` |
| `✦/special/multiplayergrey` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `🎨/pale_blue/500` |
| `✦/special/multiplayergreyhover` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | `🎨/pale_blue/600` |
| `✦/special/multiplayergreysecondary` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | `🎨/pale_blue/800` |
| `✦/special/multiplayerpink` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `🎨/pink/500` |
| `✦/special/multiplayerpinkhover` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `🎨/pink/600` |
| `✦/special/multiplayerpinksecondary` | `#971172` | `#68275E` | `#971172` | `#68275E` | `#971172` | `#68275E` | `#971172` | `#68275E` | `🎨/pink/800` |
| `✦/special/multiplayerpurple` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `🎨/purple/500` |
| `✦/special/multiplayerpurplehover` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `🎨/purple/600` |
| `✦/special/multiplayerpurplesecondary` | `#681ABB` | `#50297A` | `#681ABB` | `#50297A` | `#681ABB` | `#50297A` | `#681ABB` | `#50297A` | `🎨/purple/800` |
| `✦/special/multiplayerred` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `🎨/red/500` |
| `✦/special/multiplayerredhover` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `🎨/red/600` |
| `✦/special/multiplayerredsecondary` | `#9F1F18` | `#7C2622` | `#9F1F18` | `#7C2622` | `#9F1F18` | `#7C2622` | `#9F1F18` | `#7C2622` | `🎨/red/800` |
| `✦/special/multiplayeryellow` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `🎨/yellow/500` |
| `✦/special/multiplayeryellowhover` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `🎨/yellow/600` |
| `✦/special/multiplayeryellowsecondary` | `#EBA611` | `#C58011` | `#EBA611` | `#C58011` | `#EBA611` | `#C58011` | `#EBA611` | `#C58011` | `🎨/yellow/800` |
| `✦/special/nodehandle` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `🎨/blue/400` |
| `✦/special/prototypeloadingbackdrop` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/special/scrollbar` | `#B3B3B380` | `#B3B3B380` | `#B3B3B380` | `#B3B3B380` | `#B3B3B380` | `#B3B3B380` | `#B3B3B380` | `#B3B3B380` | — |
| `✦/special/shadow` | `#00000026` | `#00000099` | `#00000026` | `#00000099` | `#00000026` | `#00000099` | `#00000026` | `#00000099` | — |
| `✦/special/texthighlight` | `#0D99FF66` | `#0D99FF66` | `#974AFF66` | `#974AFF66` | `#14AE5C66` | `#14AE5C66` | `#0D99FF66` | `#0D99FF66` | — |
| `✦/special/textondarkcanvas` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `🎨/white/800` |
| `✦/special/textondarkcanvassecondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/special/textoninspectpadding` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textoninspectspacing` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textonlightcanvas` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/special/textonlightcanvassecondary` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `🎨/black/400` |
| `✦/special/textonmultiplayerblue` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textonmultiplayergreen` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textonmultiplayergrey` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textonmultiplayerpink` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textonmultiplayerpurple` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textonmultiplayerred` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/special/textonmultiplayeryellow` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/special/textonvoting` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/text/assistive/default` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `Light: 🎨/pink/600<br>Dark: 🎨/pink/400<br>FigJam-Light: 🎨/pink/600<br>FigJam-Dark: 🎨/pink/400<br>DevMode-Light: 🎨/pink/600<br>DevMode-Dark: 🎨/pink/400<br>Slides-Light: 🎨/pink/600<br>Slides-Dark: 🎨/pink/400` |
| `✦/text/assistive/onassistive` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/assistive/onassistive-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/assistive/onassistive-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/assistive/pressed` | `#CB0B96` | `#FBB1ED` | `#CB0B96` | `#FBB1ED` | `#CB0B96` | `#FBB1ED` | `#CB0B96` | `#FBB1ED` | `Light: 🎨/pink/700<br>Dark: 🎨/pink/300<br>FigJam-Light: 🎨/pink/700<br>FigJam-Dark: 🎨/pink/300<br>DevMode-Light: 🎨/pink/700<br>DevMode-Dark: 🎨/pink/300<br>Slides-Light: 🎨/pink/700<br>Slides-Dark: 🎨/pink/300` |
| `✦/text/assistive/secondary` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/text/assistive/default` |
| `✦/text/assistive/tertiary` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `#EA10AC` | `#FC9CE0` | `✦/text/assistive/default` |
| `✦/text/brand/default` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/text/brand/onbrand` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/brand/onbrand-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/brand/onbrand-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/brand/secondary` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/text/brand/default` |
| `✦/text/brand/tertiary` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/text/brand/default` |
| `✦/text/component/default` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `#8638E5` | `#D1A8FF` | `Light: 🎨/purple/600<br>Dark: 🎨/purple/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/purple/400<br>Slides-Light: 🎨/purple/600<br>Slides-Dark: 🎨/purple/400` |
| `✦/text/component/oncomponent` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/component/oncomponent-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/component/oncomponent-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/component/pressed` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `Light: 🎨/purple/700<br>Dark: 🎨/purple/300<br>FigJam-Light: 🎨/purple/700<br>FigJam-Dark: 🎨/purple/300<br>DevMode-Light: 🎨/purple/700<br>DevMode-Dark: 🎨/purple/300<br>Slides-Light: 🎨/purple/700<br>Slides-Dark: 🎨/purple/300` |
| `✦/text/component/secondary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/text/component/tertiary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/text/danger/default` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `Light: 🎨/red/600<br>Dark: 🎨/red/400<br>FigJam-Light: 🎨/red/600<br>FigJam-Dark: 🎨/red/400<br>DevMode-Light: 🎨/red/600<br>DevMode-Dark: 🎨/red/400<br>Slides-Light: 🎨/red/600<br>Slides-Dark: 🎨/red/400` |
| `✦/text/danger/ondanger` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/danger/ondanger-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/danger/ondanger-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/danger/secondary` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `✦/text/danger/default` |
| `✦/text/danger/tertiary` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `✦/text/danger/default` |
| `✦/text/default/default` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/default/hover` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/default/secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `Light: 🎨/black/500<br>Dark: 🎨/white/500<br>FigJam-Light: 🎨/black/500<br>FigJam-Dark: 🎨/white/500<br>DevMode-Light: 🎨/black/500<br>DevMode-Dark: 🎨/white/500<br>Slides-Light: 🎨/black/500<br>Slides-Dark: 🎨/white/500` |
| `✦/text/default/secondary-hover` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/default/tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `Light: 🎨/black/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/black/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/black/400<br>Slides-Dark: 🎨/white/400` |
| `✦/text/default/tertiary-hover` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `Light: 🎨/black/800<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/design/default` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/blue/600<br>FigJam-Dark: 🎨/blue/400<br>DevMode-Light: 🎨/blue/600<br>DevMode-Dark: 🎨/blue/400<br>Slides-Light: 🎨/blue/600<br>Slides-Dark: 🎨/blue/400` |
| `✦/text/design/ondesign` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/design/ondesign-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/design/ondesign-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/design/pressed` | `#0768CF` | `#A8D7FA` | `#0768CF` | `#A8D7FA` | `#0768CF` | `#A8D7FA` | `#0768CF` | `#A8D7FA` | `Light: 🎨/blue/700<br>Dark: 🎨/blue/300<br>FigJam-Light: 🎨/blue/700<br>FigJam-Dark: 🎨/blue/300<br>DevMode-Light: 🎨/blue/700<br>DevMode-Dark: 🎨/blue/300<br>Slides-Light: 🎨/blue/700<br>Slides-Dark: 🎨/blue/300` |
| `✦/text/design/secondary` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `✦/text/design/default` |
| `✦/text/design/tertiary` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `#007BE5` | `#7CC4F8` | `✦/text/design/default` |
| `✦/text/desktopBackgrounded/danger` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `🎨/red/400` |
| `✦/text/desktopBackgrounded/default` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/desktopBackgrounded/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/desktopBackgrounded/disabled/ondisabled` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `🎨/grey/700` |
| `✦/text/desktopBackgrounded/hover` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/desktopBackgrounded/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/desktopBackgrounded/secondary-hover` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/desktopBackgrounded/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/desktopBackgrounded/tertiary-hover` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/desktopBackgrounded/warning` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `🎨/yellow/400` |
| `✦/text/desktopForeground/danger` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `🎨/red/400` |
| `✦/text/desktopForeground/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopForeground/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/desktopForeground/disabled/ondisabled` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/text/desktopForeground/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopForeground/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/desktopForeground/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopForeground/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/desktopForeground/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopForeground/warning` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `🎨/yellow/400` |
| `✦/text/desktopFullscreen/danger` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `🎨/red/400` |
| `✦/text/desktopFullscreen/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopFullscreen/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/desktopFullscreen/disabled/ondisabled` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `🎨/black/1000` |
| `✦/text/desktopFullscreen/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopFullscreen/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/desktopFullscreen/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopFullscreen/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/desktopFullscreen/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/desktopFullscreen/warning` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `🎨/yellow/400` |
| `✦/text/disabled/default` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `Light: 🎨/black/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/black/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/black/400<br>Slides-Dark: 🎨/white/400` |
| `✦/text/disabled/ondisabled` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `#FFFFFF` | `#2C2C2C` | `Light: 🎨/white/1000<br>Dark: 🎨/grey/800<br>FigJam-Light: 🎨/white/1000<br>FigJam-Dark: 🎨/grey/800<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/grey/800<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/grey/800` |
| `✦/text/figjam/default` | `#8638E5` | `#C5B2DC` | `#8638E5` | `#C5B2DC` | `#8638E5` | `#C5B2DC` | `#8638E5` | `#C5B2DC` | `Light: 🎨/purple/600<br>Dark: 🎨/pale_purple/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/pale_purple/400<br>DevMode-Light: 🎨/purple/600<br>DevMode-Dark: 🎨/pale_purple/400<br>Slides-Light: 🎨/purple/600<br>Slides-Dark: 🎨/pale_purple/400` |
| `✦/text/figjam/onfigjam` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/figjam/onfigjam-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/figjam/onfigjam-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/figjam/pressed` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `#7C2BDA` | `#D6B6FB` | `Light: 🎨/purple/700<br>Dark: 🎨/purple/300<br>FigJam-Light: 🎨/purple/700<br>FigJam-Dark: 🎨/purple/300<br>DevMode-Light: 🎨/purple/700<br>DevMode-Dark: 🎨/purple/300<br>Slides-Light: 🎨/purple/700<br>Slides-Dark: 🎨/purple/300` |
| `✦/text/figjam/secondary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/text/figjam/tertiary` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `#C5B2DC` | `#7F699B` | `Light: 🎨/pale_purple/400<br>Dark: 🎨/pale_purple/500<br>FigJam-Light: 🎨/pale_purple/400<br>FigJam-Dark: 🎨/pale_purple/500<br>DevMode-Light: 🎨/pale_purple/400<br>DevMode-Dark: 🎨/pale_purple/500<br>Slides-Light: 🎨/pale_purple/400<br>Slides-Dark: 🎨/pale_purple/500` |
| `✦/text/handoff/default` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `Light: 🎨/green/600<br>Dark: 🎨/green/400<br>FigJam-Light: 🎨/green/600<br>FigJam-Dark: 🎨/green/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/green/600<br>Slides-Dark: 🎨/green/400` |
| `✦/text/handoff/secondary` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/text/handoff/default` |
| `✦/text/handoff/tertiary` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/text/handoff/default` |
| `✦/text/inverse/oninverse` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `Light: 🎨/white/800<br>Dark: 🎨/black/800<br>FigJam-Light: 🎨/white/800<br>FigJam-Dark: 🎨/black/800<br>DevMode-Light: 🎨/white/800<br>DevMode-Dark: 🎨/black/800<br>Slides-Light: 🎨/white/800<br>Slides-Dark: 🎨/black/800` |
| `✦/text/measure/default` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `Light: 🎨/red/600<br>Dark: 🎨/red/400<br>FigJam-Light: 🎨/red/600<br>FigJam-Dark: 🎨/red/400<br>DevMode-Light: 🎨/red/600<br>DevMode-Dark: 🎨/red/400<br>Slides-Light: 🎨/red/600<br>Slides-Dark: 🎨/red/400` |
| `✦/text/measure/onmeasure` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/measure/onmeasure-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/measure/onmeasure-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/measure/secondary` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `✦/text/measure/default` |
| `✦/text/measure/tertiary` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `#DC3412` | `#FCA397` | `✦/text/measure/default` |
| `✦/text/menu/danger` | `#F24822` | `#FCA397` | `#F24822` | `#FCA397` | `#F24822` | `#FCA397` | `#F24822` | `#FCA397` | `Light: 🎨/red/500<br>Dark: 🎨/red/400<br>FigJam-Light: 🎨/red/500<br>FigJam-Dark: 🎨/red/400<br>DevMode-Light: 🎨/red/500<br>DevMode-Dark: 🎨/red/400<br>Slides-Light: 🎨/red/500<br>Slides-Dark: 🎨/red/400` |
| `✦/text/menu/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/menu/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/menu/disabled/ondisabled` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/text/menu/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/menu/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/menu/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/menu/selected` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/text/menu/selected-secondary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/text/menu/selected` |
| `✦/text/menu/selected-tertiary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/text/menu/selected` |
| `✦/text/menu/selected/onselected` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/menu/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/menu/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/menu/warning` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `🎨/yellow/400` |
| `✦/text/selected/default` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `Light: 🎨/blue/600<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/600<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/600<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/text/selected/onselected` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `#000000E5` | `#FFFFFFE5` | `Light: 🎨/black/800<br>Dark: 🎨/white/800<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/800<br>DevMode-Light: 🎨/black/800<br>DevMode-Dark: 🎨/white/800<br>Slides-Light: 🎨/black/800<br>Slides-Dark: 🎨/white/800` |
| `✦/text/selected/onselected-secondary` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `Light: 🎨/black/500<br>Dark: 🎨/white/500<br>FigJam-Light: 🎨/black/500<br>FigJam-Dark: 🎨/white/500<br>DevMode-Light: 🎨/black/500<br>DevMode-Dark: 🎨/white/500<br>Slides-Light: 🎨/black/500<br>Slides-Dark: 🎨/white/500` |
| `✦/text/selected/onselected-strong` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/selected/onselected-tertiary` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `Light: 🎨/black/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/black/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/black/400<br>Slides-Dark: 🎨/white/400` |
| `✦/text/selected/secondary` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/text/selected/default` |
| `✦/text/selected/tertiary` | `#007BE5` | `#7CC4F8` | `#8638E5` | `#D1A8FF` | `#009951` | `#79D297` | `#E24C0C` | `#FFA27A` | `✦/text/selected/default` |
| `✦/text/success/default` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `Light: 🎨/green/600<br>Dark: 🎨/green/400<br>FigJam-Light: 🎨/green/600<br>FigJam-Dark: 🎨/green/400<br>DevMode-Light: 🎨/green/600<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/green/600<br>Slides-Dark: 🎨/green/400` |
| `✦/text/success/onselected-tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/success/onsuccess` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/success/onsuccess-secondary` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `🎨/white/600` |
| `✦/text/success/secondary` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/text/success/default` |
| `✦/text/success/tertiary` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `#009951` | `#79D297` | `✦/text/success/default` |
| `✦/text/toolbar/danger` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `🎨/red/400` |
| `✦/text/toolbar/default` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/toolbar/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `Light: 🎨/white/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/white/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/white/400<br>Slides-Dark: 🎨/white/400` |
| `✦/text/toolbar/disabled/ondisabled` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `🎨/grey/800` |
| `✦/text/toolbar/hover` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/toolbar/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#00000080` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `Light: 🎨/white/500<br>Dark: 🎨/white/500<br>FigJam-Light: 🎨/black/500<br>FigJam-Dark: 🎨/white/500<br>DevMode-Light: 🎨/white/500<br>DevMode-Dark: 🎨/white/500<br>Slides-Light: 🎨/white/500<br>Slides-Dark: 🎨/white/500` |
| `✦/text/toolbar/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/toolbar/selected` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/text/toolbar/selected-secondary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/text/toolbar/selected` |
| `✦/text/toolbar/selected-tertiary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/text/toolbar/selected` |
| `✦/text/toolbar/selected/onselected` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/toolbar/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#0000004D` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `Light: 🎨/white/400<br>Dark: 🎨/white/400<br>FigJam-Light: 🎨/black/400<br>FigJam-Dark: 🎨/white/400<br>DevMode-Light: 🎨/white/400<br>DevMode-Dark: 🎨/white/400<br>Slides-Light: 🎨/white/400<br>Slides-Dark: 🎨/white/400` |
| `✦/text/toolbar/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#000000E5` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `Light: 🎨/white/1000<br>Dark: 🎨/white/1000<br>FigJam-Light: 🎨/black/800<br>FigJam-Dark: 🎨/white/1000<br>DevMode-Light: 🎨/white/1000<br>DevMode-Dark: 🎨/white/1000<br>Slides-Light: 🎨/white/1000<br>Slides-Dark: 🎨/white/1000` |
| `✦/text/toolbar/warning` | `#FFD966` | `#F7D15F` | `#B86200` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `Light: 🎨/yellow/400<br>Dark: 🎨/yellow/400<br>FigJam-Light: 🎨/yellow/1000<br>FigJam-Dark: 🎨/yellow/400<br>DevMode-Light: 🎨/yellow/400<br>DevMode-Dark: 🎨/yellow/400<br>Slides-Light: 🎨/yellow/400<br>Slides-Dark: 🎨/yellow/400` |
| `✦/text/tooltip/danger` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `🎨/red/400` |
| `✦/text/tooltip/default` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/tooltip/disabled` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/tooltip/disabled/ondisabled` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `🎨/grey/900` |
| `✦/text/tooltip/hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/tooltip/secondary` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `🎨/white/500` |
| `✦/text/tooltip/secondary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/tooltip/selected` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `Light: 🎨/blue/400<br>Dark: 🎨/blue/400<br>FigJam-Light: 🎨/purple/400<br>FigJam-Dark: 🎨/purple/400<br>DevMode-Light: 🎨/green/400<br>DevMode-Dark: 🎨/green/400<br>Slides-Light: 🎨/persimmon/400<br>Slides-Dark: 🎨/persimmon/400` |
| `✦/text/tooltip/selected-secondary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/text/tooltip/selected` |
| `✦/text/tooltip/selected-tertiary` | `#80CAFF` | `#7CC4F8` | `#D9B8FF` | `#D1A8FF` | `#85E0A3` | `#79D297` | `#FFA27A` | `#FFA27A` | `✦/text/tooltip/selected` |
| `✦/text/tooltip/selected/onselected` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/tooltip/tertiary` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `🎨/white/400` |
| `✦/text/tooltip/tertiary-hover` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `🎨/white/1000` |
| `✦/text/tooltip/warning` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `🎨/yellow/400` |
| `✦/text/warning/default` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `Light: 🎨/yellow/1000<br>Dark: 🎨/yellow/400<br>FigJam-Light: 🎨/yellow/1000<br>FigJam-Dark: 🎨/yellow/400<br>DevMode-Light: 🎨/yellow/1000<br>DevMode-Dark: 🎨/yellow/400<br>Slides-Light: 🎨/yellow/1000<br>Slides-Dark: 🎨/yellow/400` |
| `✦/text/warning/onwarning` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `🎨/black/800` |
| `✦/text/warning/onwarning-secondary` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `🎨/black/500` |
| `✦/text/warning/onwarning-tertiary` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `🎨/black/400` |
| `✦/text/warning/secondary` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `✦/text/warning/default` |
| `✦/text/warning/tertiary` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `#B86200` | `#F7D15F` | `✦/text/warning/default` |

### 🎨

| Token | Light | Dark | FigJam-Light | FigJam-Dark | DevMode-Light | DevMode-Dark | Slides-Light | Slides-Dark | Alias |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|---|
| `🎨/black/100` | `#0000000D` | `#0000000D` | `#0000000D` | `#0000000D` | `#0000000D` | `#0000000D` | `#0000000D` | `#0000000D` | — |
| `🎨/black/1000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | `#000000` | — |
| `🎨/black/200` | `#0000001A` | `#0000001A` | `#0000001A` | `#0000001A` | `#0000001A` | `#0000001A` | `#0000001A` | `#0000001A` | — |
| `🎨/black/300` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | `#00000033` | — |
| `🎨/black/400` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | — |
| `🎨/black/500` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | `#00000080` | — |
| `🎨/black/600` | `#000000CC` | `#000000CC` | `#000000CC` | `#000000CC` | `#000000CC` | `#000000CC` | `#000000CC` | `#000000CC` | — |
| `🎨/black/700` | `#000000D9` | `#000000D9` | `#000000D9` | `#000000D9` | `#000000D9` | `#000000D9` | `#000000D9` | `#000000D9` | — |
| `🎨/black/800` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | `#000000E5` | — |
| `🎨/black/900` | `#000000F2` | `#000000F2` | `#000000F2` | `#000000F2` | `#000000F2` | `#000000F2` | `#000000F2` | `#000000F2` | — |
| `🎨/blue/100` | `#F2F9FF` | `#E2F1FD` | `#F2F9FF` | `#E2F1FD` | `#F2F9FF` | `#E2F1FD` | `#F2F9FF` | `#E2F1FD` | — |
| `🎨/blue/1000` | `#0D193F` | `#161E36` | `#0D193F` | `#161E36` | `#0D193F` | `#161E36` | `#0D193F` | `#161E36` | — |
| `🎨/blue/200` | `#E5F4FF` | `#CFE9FC` | `#E5F4FF` | `#CFE9FC` | `#E5F4FF` | `#CFE9FC` | `#E5F4FF` | `#CFE9FC` | — |
| `🎨/blue/300` | `#BDE3FF` | `#A8D7FA` | `#BDE3FF` | `#A8D7FA` | `#BDE3FF` | `#A8D7FA` | `#BDE3FF` | `#A8D7FA` | — |
| `🎨/blue/400` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | `#80CAFF` | `#7CC4F8` | — |
| `🎨/blue/500` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | `#0D99FF` | `#0C8CE9` | — |
| `🎨/blue/600` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | `#007BE5` | `#0A6DC2` | — |
| `🎨/blue/700` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | `#0768CF` | `#105CAD` | — |
| `🎨/blue/800` | `#034AC1` | `#184591` | `#034AC1` | `#184591` | `#034AC1` | `#184591` | `#034AC1` | `#184591` | — |
| `🎨/blue/900` | `#093077` | `#1B335F` | `#093077` | `#1B335F` | `#093077` | `#1B335F` | `#093077` | `#1B335F` | — |
| `🎨/green/100` | `#EBFFEE` | `#DDFDE2` | `#EBFFEE` | `#DDFDE2` | `#EBFFEE` | `#DDFDE2` | `#EBFFEE` | `#DDFDE2` | — |
| `🎨/green/1000` | `#083A23` | `#0B1E15` | `#083A23` | `#0B1E15` | `#083A23` | `#0B1E15` | `#083A23` | `#0B1E15` | — |
| `🎨/green/200` | `#CFF7D3` | `#BEEFC2` | `#CFF7D3` | `#BEEFC2` | `#CFF7D3` | `#BEEFC2` | `#CFF7D3` | `#BEEFC2` | — |
| `🎨/green/300` | `#AFF4C6` | `#A1E8B9` | `#AFF4C6` | `#A1E8B9` | `#AFF4C6` | `#A1E8B9` | `#AFF4C6` | `#A1E8B9` | — |
| `🎨/green/400` | `#85E0A3` | `#79D297` | `#85E0A3` | `#79D297` | `#85E0A3` | `#79D297` | `#85E0A3` | `#79D297` | — |
| `🎨/green/500` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | `#14AE5C` | `#198F51` | — |
| `🎨/green/600` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | `#009951` | `#078348` | — |
| `🎨/green/700` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | `#008043` | `#0A5C35` | — |
| `🎨/green/800` | `#036838` | `#0A4C2D` | `#036838` | `#0A4C2D` | `#036838` | `#0A4C2D` | `#036838` | `#0A4C2D` | — |
| `🎨/green/900` | `#024626` | `#082618` | `#024626` | `#082618` | `#024626` | `#082618` | `#024626` | `#082618` | — |
| `🎨/grey/100` | `#F5F5F5` | `#F5F5F5` | `#F5F5F5` | `#F5F5F5` | `#F5F5F5` | `#F5F5F5` | `#F5F5F5` | `#F5F5F5` | — |
| `🎨/grey/1000` | `#111111` | `#111111` | `#111111` | `#111111` | `#111111` | `#111111` | `#111111` | `#111111` | — |
| `🎨/grey/200` | `#E6E6E6` | `#E6E6E6` | `#E6E6E6` | `#E6E6E6` | `#E6E6E6` | `#E6E6E6` | `#E6E6E6` | `#E6E6E6` | — |
| `🎨/grey/300` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | `#D9D9D9` | — |
| `🎨/grey/400` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | `#B3B3B3` | — |
| `🎨/grey/500` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | `#757575` | — |
| `🎨/grey/600` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | `#444444` | — |
| `🎨/grey/700` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | `#383838` | — |
| `🎨/grey/800` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | `#2C2C2C` | — |
| `🎨/grey/900` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | `#1E1E1E` | — |
| `🎨/orange/100` | `#FFF4E5` | `#FFEDD7` | `#FFF4E5` | `#FFEDD7` | `#FFF4E5` | `#FFEDD7` | `#FFF4E5` | `#FFEDD7` | — |
| `🎨/orange/1000` | `#8A480F` | `#371D06` | `#8A480F` | `#371D06` | `#8A480F` | `#371D06` | `#8A480F` | `#371D06` | — |
| `🎨/orange/200` | `#FFE0C2` | `#FDD9B4` | `#FFE0C2` | `#FDD9B4` | `#FFE0C2` | `#FDD9B4` | `#FFE0C2` | `#FDD9B4` | — |
| `🎨/orange/300` | `#FCD19C` | `#FCC67F` | `#FCD19C` | `#FCC67F` | `#FCD19C` | `#FCC67F` | `#FCD19C` | `#FCC67F` | — |
| `🎨/orange/400` | `#FFC470` | `#FCB34A` | `#FFC470` | `#FCB34A` | `#FFC470` | `#FCB34A` | `#FFC470` | `#FCB34A` | — |
| `🎨/orange/500` | `#FFA629` | `#DE7D02` | `#FFA629` | `#DE7D02` | `#FFA629` | `#DE7D02` | `#FFA629` | `#DE7D02` | — |
| `🎨/orange/600` | `#FC9E24` | `#C86F04` | `#FC9E24` | `#C86F04` | `#FC9E24` | `#C86F04` | `#FC9E24` | `#C86F04` | — |
| `🎨/orange/700` | `#F79722` | `#AD5F05` | `#F79722` | `#AD5F05` | `#F79722` | `#AD5F05` | `#F79722` | `#AD5F05` | — |
| `🎨/orange/800` | `#DD7C0E` | `#985306` | `#DD7C0E` | `#985306` | `#DD7C0E` | `#985306` | `#DD7C0E` | `#985306` | — |
| `🎨/orange/900` | `#CE7012` | `#673806` | `#CE7012` | `#673806` | `#CE7012` | `#673806` | `#CE7012` | `#673806` | — |
| `🎨/pale_blue/100` | `#F1F5F8` | `#F1F5F8` | `#F1F5F8` | `#F1F5F8` | `#F1F5F8` | `#F1F5F8` | `#F1F5F8` | `#F1F5F8` | — |
| `🎨/pale_blue/1000` | `#121721` | `#121721` | `#121721` | `#121721` | `#121721` | `#121721` | `#121721` | `#121721` | — |
| `🎨/pale_blue/200` | `#E3ECF2` | `#E3ECF2` | `#E3ECF2` | `#E3ECF2` | `#E3ECF2` | `#E3ECF2` | `#E3ECF2` | `#E3ECF2` | — |
| `🎨/pale_blue/300` | `#D2DAE4` | `#D2DAE4` | `#D2DAE4` | `#D2DAE4` | `#D2DAE4` | `#D2DAE4` | `#D2DAE4` | `#D2DAE4` | — |
| `🎨/pale_blue/400` | `#AFBCCF` | `#AFBCCF` | `#AFBCCF` | `#AFBCCF` | `#AFBCCF` | `#AFBCCF` | `#AFBCCF` | `#AFBCCF` | — |
| `🎨/pale_blue/500` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | `#667799` | — |
| `🎨/pale_blue/600` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | `#536383` | — |
| `🎨/pale_blue/700` | `#4A5878` | `#4A5878` | `#4A5878` | `#4A5878` | `#4A5878` | `#4A5878` | `#4A5878` | `#4A5878` | — |
| `🎨/pale_blue/800` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | `#394360` | — |
| `🎨/pale_blue/900` | `#252D41` | `#252D41` | `#252D41` | `#252D41` | `#252D41` | `#252D41` | `#252D41` | `#252D41` | — |
| `🎨/pale_green/100` | `#F1F8F2` | `#F1F8F2` | `#F1F8F2` | `#F1F8F2` | `#F1F8F2` | `#F1F8F2` | `#F1F8F2` | `#F1F8F2` | — |
| `🎨/pale_green/1000` | `#172B22` | `#172B22` | `#172B22` | `#172B22` | `#172B22` | `#172B22` | `#172B22` | `#172B22` | — |
| `🎨/pale_green/200` | `#DAECDF` | `#DAECDF` | `#DAECDF` | `#DAECDF` | `#DAECDF` | `#DAECDF` | `#DAECDF` | `#DAECDF` | — |
| `🎨/pale_green/300` | `#C3E0CC` | `#C3E0CC` | `#C3E0CC` | `#C3E0CC` | `#C3E0CC` | `#C3E0CC` | `#C3E0CC` | `#C3E0CC` | — |
| `🎨/pale_green/400` | `#9FC1AA` | `#9FC1AA` | `#9FC1AA` | `#9FC1AA` | `#9FC1AA` | `#9FC1AA` | `#9FC1AA` | `#9FC1AA` | — |
| `🎨/pale_green/500` | `#678E79` | `#678E79` | `#678E79` | `#678E79` | `#678E79` | `#678E79` | `#678E79` | `#678E79` | — |
| `🎨/pale_green/600` | `#5C806D` | `#5C806D` | `#5C806D` | `#5C806D` | `#5C806D` | `#5C806D` | `#5C806D` | `#5C806D` | — |
| `🎨/pale_green/700` | `#517361` | `#517361` | `#517361` | `#517361` | `#517361` | `#517361` | `#517361` | `#517361` | — |
| `🎨/pale_green/800` | `#476656` | `#476656` | `#476656` | `#476656` | `#476656` | `#476656` | `#476656` | `#476656` | — |
| `🎨/pale_green/900` | `#2F483C` | `#2F483C` | `#2F483C` | `#2F483C` | `#2F483C` | `#2F483C` | `#2F483C` | `#2F483C` | — |
| `🎨/pale_persimmon/100` | `#FAEFEB` | `#FAEFEB` | `#FAEFEB` | `#FAEFEB` | `#FAEFEB` | `#FAEFEB` | `#FAEFEB` | `#FAEFEB` | — |
| `🎨/pale_persimmon/1000` | `#1F1714` | `#1F1714` | `#1F1714` | `#1F1714` | `#1F1714` | `#1F1714` | `#1F1714` | `#1F1714` | — |
| `🎨/pale_persimmon/200` | `#F8E9E2` | `#F8E9E2` | `#F8E9E2` | `#F8E9E2` | `#F8E9E2` | `#F8E9E2` | `#F8E9E2` | `#F8E9E2` | — |
| `🎨/pale_persimmon/300` | `#F3D6C9` | `#F3D6C9` | `#F3D6C9` | `#F3D6C9` | `#F3D6C9` | `#F3D6C9` | `#F3D6C9` | `#F3D6C9` | — |
| `🎨/pale_persimmon/400` | `#EBB49D` | `#EBB49D` | `#EBB49D` | `#EBB49D` | `#EBB49D` | `#EBB49D` | `#EBB49D` | `#EBB49D` | — |
| `🎨/pale_persimmon/500` | `#D4693B` | `#D4693B` | `#D4693B` | `#D4693B` | `#D4693B` | `#D4693B` | `#D4693B` | `#D4693B` | — |
| `🎨/pale_persimmon/600` | `#A55E40` | `#A55E40` | `#A55E40` | `#A55E40` | `#A55E40` | `#A55E40` | `#A55E40` | `#A55E40` | — |
| `🎨/pale_persimmon/700` | `#864E37` | `#864E37` | `#864E37` | `#864E37` | `#864E37` | `#864E37` | `#864E37` | `#864E37` | — |
| `🎨/pale_persimmon/800` | `#603A2A` | `#603A2A` | `#603A2A` | `#603A2A` | `#603A2A` | `#603A2A` | `#603A2A` | `#603A2A` | — |
| `🎨/pale_persimmon/900` | `#412B21` | `#412B21` | `#412B21` | `#412B21` | `#412B21` | `#412B21` | `#412B21` | `#412B21` | — |
| `🎨/pale_pink/100` | `#F6EEF4` | `#F6EEF4` | `#F6EEF4` | `#F6EEF4` | `#F6EEF4` | `#F6EEF4` | `#F6EEF4` | `#F6EEF4` | — |
| `🎨/pale_pink/1000` | `#1B1318` | `#1B1318` | `#1B1318` | `#1B1318` | `#1B1318` | `#1B1318` | `#1B1318` | `#1B1318` | — |
| `🎨/pale_pink/200` | `#F2E3EE` | `#F2E3EE` | `#F2E3EE` | `#F2E3EE` | `#F2E3EE` | `#F2E3EE` | `#F2E3EE` | `#F2E3EE` | — |
| `🎨/pale_pink/300` | `#E8CEE1` | `#E8CEE1` | `#E8CEE1` | `#E8CEE1` | `#E8CEE1` | `#E8CEE1` | `#E8CEE1` | `#E8CEE1` | — |
| `🎨/pale_pink/400` | `#DAAACE` | `#DAAACE` | `#DAAACE` | `#DAAACE` | `#DAAACE` | `#DAAACE` | `#DAAACE` | `#DAAACE` | — |
| `🎨/pale_pink/500` | `#AB5998` | `#AB5998` | `#AB5998` | `#AB5998` | `#AB5998` | `#AB5998` | `#AB5998` | `#AB5998` | — |
| `🎨/pale_pink/600` | `#86507A` | `#86507A` | `#86507A` | `#86507A` | `#86507A` | `#86507A` | `#86507A` | `#86507A` | — |
| `🎨/pale_pink/700` | `#724667` | `#724667` | `#724667` | `#724667` | `#724667` | `#724667` | `#724667` | `#724667` | — |
| `🎨/pale_pink/800` | `#51344A` | `#51344A` | `#51344A` | `#51344A` | `#51344A` | `#51344A` | `#51344A` | `#51344A` | — |
| `🎨/pale_pink/900` | `#33252F` | `#33252F` | `#33252F` | `#33252F` | `#33252F` | `#33252F` | `#33252F` | `#33252F` | — |
| `🎨/pale_purple/100` | `#F4F1F8` | `#F4F1F8` | `#F4F1F8` | `#F4F1F8` | `#F4F1F8` | `#F4F1F8` | `#F4F1F8` | `#F4F1F8` | — |
| `🎨/pale_purple/1000` | `#1A141F` | `#1A141F` | `#1A141F` | `#1A141F` | `#1A141F` | `#1A141F` | `#1A141F` | `#1A141F` | — |
| `🎨/pale_purple/200` | `#EDE7F3` | `#EDE7F3` | `#EDE7F3` | `#EDE7F3` | `#EDE7F3` | `#EDE7F3` | `#EDE7F3` | `#EDE7F3` | — |
| `🎨/pale_purple/300` | `#E0D4ED` | `#E0D4ED` | `#E0D4ED` | `#E0D4ED` | `#E0D4ED` | `#E0D4ED` | `#E0D4ED` | `#E0D4ED` | — |
| `🎨/pale_purple/400` | `#C5B2DC` | `#C5B2DC` | `#C5B2DC` | `#C5B2DC` | `#C5B2DC` | `#C5B2DC` | `#C5B2DC` | `#C5B2DC` | — |
| `🎨/pale_purple/500` | `#7F699B` | `#7F699B` | `#7F699B` | `#7F699B` | `#7F699B` | `#7F699B` | `#7F699B` | `#7F699B` | — |
| `🎨/pale_purple/600` | `#6B5884` | `#6B5884` | `#6B5884` | `#6B5884` | `#6B5884` | `#6B5884` | `#6B5884` | `#6B5884` | — |
| `🎨/pale_purple/700` | `#604D75` | `#604D75` | `#604D75` | `#604D75` | `#604D75` | `#604D75` | `#604D75` | `#604D75` | — |
| `🎨/pale_purple/800` | `#473956` | `#473956` | `#473956` | `#473956` | `#473956` | `#473956` | `#473956` | `#473956` | — |
| `🎨/pale_purple/900` | `#33293D` | `#33293D` | `#33293D` | `#33293D` | `#33293D` | `#33293D` | `#33293D` | `#33293D` | — |
| `🎨/pale_red/100` | `#FAEDEB` | `#FAEDEB` | `#FAEDEB` | `#FAEDEB` | `#FAEDEB` | `#FAEDEB` | `#FAEDEB` | `#FAEDEB` | — |
| `🎨/pale_red/1000` | `#1F1514` | `#1F1514` | `#1F1514` | `#1F1514` | `#1F1514` | `#1F1514` | `#1F1514` | `#1F1514` | — |
| `🎨/pale_red/200` | `#F8E5E2` | `#F8E5E2` | `#F8E5E2` | `#F8E5E2` | `#F8E5E2` | `#F8E5E2` | `#F8E5E2` | `#F8E5E2` | — |
| `🎨/pale_red/300` | `#F3CFC9` | `#F3CFC9` | `#F3CFC9` | `#F3CFC9` | `#F3CFC9` | `#F3CFC9` | `#F3CFC9` | `#F3CFC9` | — |
| `🎨/pale_red/400` | `#EBA99D` | `#EBA99D` | `#EBA99D` | `#EBA99D` | `#EBA99D` | `#EBA99D` | `#EBA99D` | `#EBA99D` | — |
| `🎨/pale_red/500` | `#D4583B` | `#D4583B` | `#D4583B` | `#D4583B` | `#D4583B` | `#D4583B` | `#D4583B` | `#D4583B` | — |
| `🎨/pale_red/600` | `#A55440` | `#A55440` | `#A55440` | `#A55440` | `#A55440` | `#A55440` | `#A55440` | `#A55440` | — |
| `🎨/pale_red/700` | `#864537` | `#864537` | `#864537` | `#864537` | `#864537` | `#864537` | `#864537` | `#864537` | — |
| `🎨/pale_red/800` | `#60332A` | `#60332A` | `#60332A` | `#60332A` | `#60332A` | `#60332A` | `#60332A` | `#60332A` | — |
| `🎨/pale_red/900` | `#412621` | `#412621` | `#412621` | `#412621` | `#412621` | `#412621` | `#412621` | `#412621` | — |
| `🎨/pale_teal/100` | `#F1F6F8` | `#F1F6F8` | `#F1F6F8` | `#F1F6F8` | `#F1F6F8` | `#F1F6F8` | `#F1F6F8` | `#F1F6F8` | — |
| `🎨/pale_teal/1000` | `#101A1E` | `#101A1E` | `#101A1E` | `#101A1E` | `#101A1E` | `#101A1E` | `#101A1E` | `#101A1E` | — |
| `🎨/pale_teal/200` | `#E3EEF2` | `#E3EEF2` | `#E3EEF2` | `#E3EEF2` | `#E3EEF2` | `#E3EEF2` | `#E3EEF2` | `#E3EEF2` | — |
| `🎨/pale_teal/300` | `#CEDEE4` | `#CEDEE4` | `#CEDEE4` | `#CEDEE4` | `#CEDEE4` | `#CEDEE4` | `#CEDEE4` | `#CEDEE4` | — |
| `🎨/pale_teal/400` | `#A3C2CC` | `#A3C2CC` | `#A3C2CC` | `#A3C2CC` | `#A3C2CC` | `#A3C2CC` | `#A3C2CC` | `#A3C2CC` | — |
| `🎨/pale_teal/500` | `#518394` | `#518394` | `#518394` | `#518394` | `#518394` | `#518394` | `#518394` | `#518394` | — |
| `🎨/pale_teal/600` | `#436C7A` | `#436C7A` | `#436C7A` | `#436C7A` | `#436C7A` | `#436C7A` | `#436C7A` | `#436C7A` | — |
| `🎨/pale_teal/700` | `#3C606D` | `#3C606D` | `#3C606D` | `#3C606D` | `#3C606D` | `#3C606D` | `#3C606D` | `#3C606D` | — |
| `🎨/pale_teal/800` | `#2F4C56` | `#2F4C56` | `#2F4C56` | `#2F4C56` | `#2F4C56` | `#2F4C56` | `#2F4C56` | `#2F4C56` | — |
| `🎨/pale_teal/900` | `#1F3238` | `#1F3238` | `#1F3238` | `#1F3238` | `#1F3238` | `#1F3238` | `#1F3238` | `#1F3238` | — |
| `🎨/pale_violet/100` | `#F1F1F8` | `#F1F1F8` | `#F1F1F8` | `#F1F1F8` | `#F1F1F8` | `#F1F1F8` | `#F1F1F8` | `#F1F1F8` | — |
| `🎨/pale_violet/1000` | `#14141F` | `#14141F` | `#14141F` | `#14141F` | `#14141F` | `#14141F` | `#14141F` | `#14141F` | — |
| `🎨/pale_violet/200` | `#E7E7F3` | `#E7E7F3` | `#E7E7F3` | `#E7E7F3` | `#E7E7F3` | `#E7E7F3` | `#E7E7F3` | `#E7E7F3` | — |
| `🎨/pale_violet/300` | `#D4D4ED` | `#D4D4ED` | `#D4D4ED` | `#D4D4ED` | `#D4D4ED` | `#D4D4ED` | `#D4D4ED` | `#D4D4ED` | — |
| `🎨/pale_violet/400` | `#B3B2DC` | `#B3B2DC` | `#B3B2DC` | `#B3B2DC` | `#B3B2DC` | `#B3B2DC` | `#B3B2DC` | `#B3B2DC` | — |
| `🎨/pale_violet/500` | `#6A699B` | `#6A699B` | `#6A699B` | `#6A699B` | `#6A699B` | `#6A699B` | `#6A699B` | `#6A699B` | — |
| `🎨/pale_violet/600` | `#595884` | `#595884` | `#595884` | `#595884` | `#595884` | `#595884` | `#595884` | `#595884` | — |
| `🎨/pale_violet/700` | `#4E4D75` | `#4E4D75` | `#4E4D75` | `#4E4D75` | `#4E4D75` | `#4E4D75` | `#4E4D75` | `#4E4D75` | — |
| `🎨/pale_violet/800` | `#393956` | `#393956` | `#393956` | `#393956` | `#393956` | `#393956` | `#393956` | `#393956` | — |
| `🎨/pale_violet/900` | `#29293D` | `#29293D` | `#29293D` | `#29293D` | `#29293D` | `#29293D` | `#29293D` | `#29293D` | — |
| `🎨/pale_yellow/100` | `#FFF5EB` | `#FFF5EB` | `#FFF5EB` | `#FFF5EB` | `#FFF5EB` | `#FFF5EB` | `#FFF5EB` | `#FFF5EB` | — |
| `🎨/pale_yellow/1000` | `#211A12` | `#211A12` | `#211A12` | `#211A12` | `#211A12` | `#211A12` | `#211A12` | `#211A12` | — |
| `🎨/pale_yellow/200` | `#FDEECE` | `#FDEECE` | `#FDEECE` | `#FDEECE` | `#FDEECE` | `#FDEECE` | `#FDEECE` | `#FDEECE` | — |
| `🎨/pale_yellow/300` | `#F5DFA8` | `#F5DFA8` | `#F5DFA8` | `#F5DFA8` | `#F5DFA8` | `#F5DFA8` | `#F5DFA8` | `#F5DFA8` | — |
| `🎨/pale_yellow/400` | `#E8CD7D` | `#E8CD7D` | `#E8CD7D` | `#E8CD7D` | `#E8CD7D` | `#E8CD7D` | `#E8CD7D` | `#E8CD7D` | — |
| `🎨/pale_yellow/500` | `#AD7F00` | `#AD7F00` | `#AD7F00` | `#AD7F00` | `#AD7F00` | `#AD7F00` | `#AD7F00` | `#AD7F00` | — |
| `🎨/pale_yellow/600` | `#906800` | `#906800` | `#906800` | `#906800` | `#906800` | `#906800` | `#906800` | `#906800` | — |
| `🎨/pale_yellow/700` | `#7A5800` | `#7A5800` | `#7A5800` | `#7A5800` | `#7A5800` | `#7A5800` | `#7A5800` | `#7A5800` | — |
| `🎨/pale_yellow/800` | `#5C4100` | `#5C4100` | `#5C4100` | `#5C4100` | `#5C4100` | `#5C4100` | `#5C4100` | `#5C4100` | — |
| `🎨/pale_yellow/900` | `#3A2A10` | `#3A2A10` | `#3A2A10` | `#3A2A10` | `#3A2A10` | `#3A2A10` | `#3A2A10` | `#3A2A10` | — |
| `🎨/persimmon/100` | `#FFF2EB` | `#FFE8DB` | `#FFF2EB` | `#FFE8DB` | `#FFF2EB` | `#FFE8DB` | `#FFF2EB` | `#FFE8DB` | — |
| `🎨/persimmon/1000` | `#611D0A` | `#43160A` | `#611D0A` | `#43160A` | `#611D0A` | `#43160A` | `#611D0A` | `#43160A` | — |
| `🎨/persimmon/200` | `#FFDFCC` | `#FED2B8` | `#FFDFCC` | `#FED2B8` | `#FFDFCC` | `#FED2B8` | `#FFDFCC` | `#FED2B8` | — |
| `🎨/persimmon/300` | `#FFBB9E` | `#FFB494` | `#FFBB9E` | `#FFB494` | `#FFBB9E` | `#FFB494` | `#FFBB9E` | `#FFB494` | — |
| `🎨/persimmon/400` | `#FFA27A` | `#FFA27A` | `#FFA27A` | `#FFA27A` | `#FFA27A` | `#FFA27A` | `#FFA27A` | `#FFA27A` | — |
| `🎨/persimmon/500` | `#FF5C16` | `#F65009` | `#FF5C16` | `#F65009` | `#FF5C16` | `#F65009` | `#FF5C16` | `#F65009` | — |
| `🎨/persimmon/600` | `#E24C0C` | `#DB4606` | `#E24C0C` | `#DB4606` | `#E24C0C` | `#DB4606` | `#E24C0C` | `#DB4606` | — |
| `🎨/persimmon/700` | `#C53E0D` | `#B93F13` | `#C53E0D` | `#B93F13` | `#C53E0D` | `#B93F13` | `#C53E0D` | `#B93F13` | — |
| `🎨/persimmon/800` | `#AA370D` | `#8E3210` | `#AA370D` | `#8E3210` | `#AA370D` | `#8E3210` | `#AA370D` | `#8E3210` | — |
| `🎨/persimmon/900` | `#842D0B` | `#59220D` | `#842D0B` | `#59220D` | `#842D0B` | `#59220D` | `#842D0B` | `#59220D` | — |
| `🎨/pink/100` | `#FFF0FE` | `#FDE2FB` | `#FFF0FE` | `#FDE2FB` | `#FFF0FE` | `#FDE2FB` | `#FFF0FE` | `#FDE2FB` | — |
| `🎨/pink/1000` | `#451138` | `#231A21` | `#451138` | `#231A21` | `#451138` | `#231A21` | `#451138` | `#231A21` | — |
| `🎨/pink/200` | `#FFE0FC` | `#FCCAF8` | `#FFE0FC` | `#FCCAF8` | `#FFE0FC` | `#FCCAF8` | `#FFE0FC` | `#FCCAF8` | — |
| `🎨/pink/300` | `#FFBDF2` | `#FBB1ED` | `#FFBDF2` | `#FBB1ED` | `#FFBDF2` | `#FBB1ED` | `#FFBDF2` | `#FBB1ED` | — |
| `🎨/pink/400` | `#FF99E0` | `#FC9CE0` | `#FF99E0` | `#FC9CE0` | `#FF99E0` | `#FC9CE0` | `#FF99E0` | `#FC9CE0` | — |
| `🎨/pink/500` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | `#FF24BD` | `#F316B0` | — |
| `🎨/pink/600` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | `#EA10AC` | `#D01B9C` | — |
| `🎨/pink/700` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | `#CB0B96` | `#96207A` | — |
| `🎨/pink/800` | `#971172` | `#68275E` | `#971172` | `#68275E` | `#971172` | `#68275E` | `#971172` | `#68275E` | — |
| `🎨/pink/900` | `#5F114C` | `#46253E` | `#5F114C` | `#46253E` | `#5F114C` | `#46253E` | `#5F114C` | `#46253E` | — |
| `🎨/purple/100` | `#F9F5FF` | `#F1E7FE` | `#F9F5FF` | `#F1E7FE` | `#F9F5FF` | `#F1E7FE` | `#F9F5FF` | `#F1E7FE` | — |
| `🎨/purple/1000` | `#2D0F46` | `#1F1924` | `#2D0F46` | `#1F1924` | `#2D0F46` | `#1F1924` | `#2D0F46` | `#1F1924` | — |
| `🎨/purple/200` | `#F1E5FF` | `#E3CFFC` | `#F1E5FF` | `#E3CFFC` | `#F1E5FF` | `#E3CFFC` | `#F1E5FF` | `#E3CFFC` | — |
| `🎨/purple/300` | `#E4CCFF` | `#D6B6FB` | `#E4CCFF` | `#D6B6FB` | `#E4CCFF` | `#D6B6FB` | `#E4CCFF` | `#D6B6FB` | — |
| `🎨/purple/400` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | `#D9B8FF` | `#D1A8FF` | — |
| `🎨/purple/500` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | `#9747FF` | `#8A38F5` | — |
| `🎨/purple/600` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | `#8638E5` | `#7A2ED6` | — |
| `🎨/purple/700` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | `#7C2BDA` | `#652CA8` | — |
| `🎨/purple/800` | `#681ABB` | `#50297A` | `#681ABB` | `#50297A` | `#681ABB` | `#50297A` | `#681ABB` | `#50297A` | — |
| `🎨/purple/900` | `#4B0D87` | `#3E2654` | `#4B0D87` | `#3E2654` | `#4B0D87` | `#3E2654` | `#4B0D87` | `#3E2654` | — |
| `🎨/red/100` | `#FFF5F5` | `#FEE7E7` | `#FFF5F5` | `#FEE7E7` | `#FFF5F5` | `#FEE7E7` | `#FFF5F5` | `#FEE7E7` | — |
| `🎨/red/1000` | `#660E0B` | `#311817` | `#660E0B` | `#311817` | `#660E0B` | `#311817` | `#660E0B` | `#311817` | — |
| `🎨/red/200` | `#FFE2E0` | `#FCCDCA` | `#FFE2E0` | `#FCCDCA` | `#FFE2E0` | `#FCCDCA` | `#FFE2E0` | `#FCCDCA` | — |
| `🎨/red/300` | `#FFC7C2` | `#FBBCB6` | `#FFC7C2` | `#FBBCB6` | `#FFC7C2` | `#FBBCB6` | `#FFC7C2` | `#FBBCB6` | — |
| `🎨/red/400` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | `#FFAFA3` | `#FCA397` | — |
| `🎨/red/500` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | `#F24822` | `#E03E1A` | — |
| `🎨/red/600` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | `#DC3412` | `#C4381C` | — |
| `🎨/red/700` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | `#BD2915` | `#963323` | — |
| `🎨/red/800` | `#9F1F18` | `#7C2622` | `#9F1F18` | `#7C2622` | `#9F1F18` | `#7C2622` | `#9F1F18` | `#7C2622` | — |
| `🎨/red/900` | `#771208` | `#54211C` | `#771208` | `#54211C` | `#771208` | `#54211C` | `#771208` | `#54211C` | — |
| `🎨/teal/100` | `#EBFBFF` | `#DDF7FD` | `#EBFBFF` | `#DDF7FD` | `#EBFBFF` | `#DDF7FD` | `#EBFBFF` | `#DDF7FD` | — |
| `🎨/teal/1000` | `#0E2F43` | `#0E1F2A` | `#0E2F43` | `#0E1F2A` | `#0E2F43` | `#0E1F2A` | `#0E2F43` | `#0E1F2A` | — |
| `🎨/teal/200` | `#CEF0F8` | `#BCE6F1` | `#CEF0F8` | `#BCE6F1` | `#CEF0F8` | `#BCE6F1` | `#CEF0F8` | `#BCE6F1` | — |
| `🎨/teal/300` | `#B6ECF7` | `#A4E2EF` | `#B6ECF7` | `#A4E2EF` | `#B6ECF7` | `#A4E2EF` | `#B6ECF7` | `#A4E2EF` | — |
| `🎨/teal/400` | `#75D7F0` | `#67CBE4` | `#75D7F0` | `#67CBE4` | `#75D7F0` | `#67CBE4` | `#75D7F0` | `#67CBE4` | — |
| `🎨/teal/500` | `#00A2C2` | `#0887A0` | `#00A2C2` | `#0887A0` | `#00A2C2` | `#0887A0` | `#00A2C2` | `#0887A0` | — |
| `🎨/teal/600` | `#0087A8` | `#087691` | `#0087A8` | `#087691` | `#0087A8` | `#087691` | `#0087A8` | `#087691` | — |
| `🎨/teal/700` | `#047195` | `#0A5B76` | `#047195` | `#0A5B76` | `#047195` | `#0A5B76` | `#047195` | `#0A5B76` | — |
| `🎨/teal/800` | `#085A78` | `#0C455A` | `#085A78` | `#0C455A` | `#085A78` | `#0C455A` | `#085A78` | `#0C455A` | — |
| `🎨/teal/900` | `#093C53` | `#0C2937` | `#093C53` | `#0C2937` | `#093C53` | `#0C2937` | `#093C53` | `#0C2937` | — |
| `🎨/violet/100` | `#F5F5FF` | `#F5F5FF` | `#F5F5FF` | `#F5F5FF` | `#F5F5FF` | `#F5F5FF` | `#F5F5FF` | `#F5F5FF` | — |
| `🎨/violet/1000` | `#1D1254` | `#1D1835` | `#1D1254` | `#1D1835` | `#1D1254` | `#1D1835` | `#1D1254` | `#1D1835` | — |
| `🎨/violet/200` | `#EBEBFF` | `#E6E5FF` | `#EBEBFF` | `#E6E5FF` | `#EBEBFF` | `#E6E5FF` | `#EBEBFF` | `#E6E5FF` | — |
| `🎨/violet/300` | `#D3D1FF` | `#CECCFF` | `#D3D1FF` | `#CECCFF` | `#D3D1FF` | `#CECCFF` | `#D3D1FF` | `#CECCFF` | — |
| `🎨/violet/400` | `#B4B2FF` | `#B9B8FF` | `#B4B2FF` | `#B9B8FF` | `#B4B2FF` | `#B9B8FF` | `#B4B2FF` | `#B9B8FF` | — |
| `🎨/violet/500` | `#4D49FC` | `#3D38F5` | `#4D49FC` | `#3D38F5` | `#4D49FC` | `#3D38F5` | `#4D49FC` | `#3D38F5` | — |
| `🎨/violet/600` | `#443DEB` | `#3B34D5` | `#443DEB` | `#3B34D5` | `#443DEB` | `#3B34D5` | `#443DEB` | `#3B34D5` | — |
| `🎨/violet/700` | `#3D32E2` | `#372CC9` | `#3D32E2` | `#372CC9` | `#3D32E2` | `#372CC9` | `#3D32E2` | `#372CC9` | — |
| `🎨/violet/800` | `#3620DF` | `#3927BE` | `#3620DF` | `#3927BE` | `#3620DF` | `#3927BE` | `#3620DF` | `#3927BE` | — |
| `🎨/violet/900` | `#2F15AC` | `#302579` | `#2F15AC` | `#302579` | `#2F15AC` | `#302579` | `#2F15AC` | `#302579` | — |
| `🎨/white/100` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | `#FFFFFF0D` | — |
| `🎨/white/1000` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | — |
| `🎨/white/200` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | `#FFFFFF1A` | — |
| `🎨/white/300` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | `#FFFFFF33` | — |
| `🎨/white/400` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | `#FFFFFF66` | — |
| `🎨/white/500` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | `#FFFFFFB2` | — |
| `🎨/white/600` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | — |
| `🎨/white/700` | `#FFFFFFD9` | `#FFFFFFD9` | `#FFFFFFD9` | `#FFFFFFD9` | `#FFFFFFD9` | `#FFFFFFD9` | `#FFFFFFD9` | `#FFFFFFD9` | — |
| `🎨/white/800` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | `#FFFFFFE5` | — |
| `🎨/white/900` | `#FFFFFFF2` | `#FFFFFFF2` | `#FFFFFFF2` | `#FFFFFFF2` | `#FFFFFFF2` | `#FFFFFFF2` | `#FFFFFFF2` | `#FFFFFFF2` | — |
| `🎨/yellow/100` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | `#FFFBEB` | `#FDF7DD` | — |
| `🎨/yellow/1000` | `#B86200` | `#71440F` | `#B86200` | `#71440F` | `#B86200` | `#71440F` | `#B86200` | `#71440F` | — |
| `🎨/yellow/200` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | `#FFF1C2` | `#FBE8AD` | — |
| `🎨/yellow/300` | `#FFE8A3` | `#F9DF90` | `#FFE8A3` | `#F9DF90` | `#FFE8A3` | `#F9DF90` | `#FFE8A3` | `#F9DF90` | — |
| `🎨/yellow/400` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | `#FFD966` | `#F7D15F` | — |
| `🎨/yellow/500` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | `#FFCD29` | `#F3C11B` | — |
| `🎨/yellow/600` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | `#FFC21A` | `#F2B50D` | — |
| `🎨/yellow/700` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | `#FAB815` | `#E4A711` | — |
| `🎨/yellow/800` | `#EBA611` | `#C58011` | `#EBA611` | `#C58011` | `#EBA611` | `#C58011` | `#EBA611` | `#C58011` | — |
| `🎨/yellow/900` | `#DD940E` | `#925711` | `#DD940E` | `#925711` | `#DD940E` | `#925711` | `#DD940E` | `#925711` | — |

<!-- END COLOR TOKENS -->

## Переменные типографики

<!-- BEGIN TYPOGRAPHY TOKENS -->
| Token | Type | Value | Alias |
|---|---|---|---|
| `body/large/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `body/large/fontSize` | `FLOAT` | `13` | — |
| `body/large/fontWeight` | `FLOAT` | `450` | `font/weight/default` |
| `body/large/letterSpacing` | `FLOAT` | `-0.25` | — |
| `body/large/lineHeight` | `FLOAT` | `22` | — |
| `body/large/strong/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `body/large/strong/fontSize` | `FLOAT` | `13` | — |
| `body/large/strong/fontWeight` | `FLOAT` | `550` | `font/weight/strong` |
| `body/large/strong/letterSpacing` | `FLOAT` | `-0.25` | — |
| `body/large/strong/lineHeight` | `FLOAT` | `22` | — |
| `body/medium/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `body/medium/fontSize` | `FLOAT` | `11` | — |
| `body/medium/fontWeight` | `FLOAT` | `450` | `font/weight/medium` |
| `body/medium/letterSpacing` | `FLOAT` | `0.5` | — |
| `body/medium/lineHeight` | `FLOAT` | `16` | — |
| `body/medium/strong/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `body/medium/strong/fontSize` | `FLOAT` | `11` | — |
| `body/medium/strong/fontWeight` | `FLOAT` | `550` | `font/weight/heavy` |
| `body/medium/strong/letterSpacing` | `FLOAT` | `0.5` | — |
| `body/medium/strong/lineHeight` | `FLOAT` | `16` | — |
| `body/small/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `body/small/fontSize` | `FLOAT` | `9` | — |
| `body/small/fontWeight` | `FLOAT` | `450` | `font/weight/default` |
| `body/small/letterSpacing` | `FLOAT` | `0.5` | — |
| `body/small/lineHeight` | `FLOAT` | `14` | — |
| `body/small/strong/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `body/small/strong/fontSize` | `FLOAT` | `9` | — |
| `body/small/strong/fontWeight` | `FLOAT` | `550` | `font/weight/strong` |
| `body/small/strong/letterSpacing` | `FLOAT` | `0.5` | — |
| `body/small/strong/lineHeight` | `FLOAT` | `14` | — |
| `font/family/default` | `STRING` | `Inter` | — |
| `font/family/display` | `STRING` | `Whyte` | — |
| `font/family/mono` | `STRING` | `Roboto Mono` | — |
| `font/weight/default` | `FLOAT` | `450` | — |
| `font/weight/heavy` | `FLOAT` | `550` | — |
| `font/weight/medium` | `FLOAT` | `450` | — |
| `font/weight/strong` | `FLOAT` | `550` | — |
| `heading/display/fontFamily` | `STRING` | `Whyte` | `font/family/display` |
| `heading/display/fontSize` | `FLOAT` | `48` | — |
| `heading/display/fontWeight` | `FLOAT` | `450` | `font/weight/default` |
| `heading/display/letterSpacing` | `FLOAT` | `-3` | — |
| `heading/display/lineHeight` | `FLOAT` | `56` | — |
| `heading/large/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `heading/large/fontSize` | `FLOAT` | `24` | — |
| `heading/large/fontWeight` | `FLOAT` | `550` | `font/weight/heavy` |
| `heading/large/letterSpacing` | `FLOAT` | `-1.7000000476837158` | — |
| `heading/large/lineHeight` | `FLOAT` | `32` | — |
| `heading/medium/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `heading/medium/fontSize` | `FLOAT` | `15` | — |
| `heading/medium/fontWeight` | `FLOAT` | `550` | `font/weight/heavy` |
| `heading/medium/letterSpacing` | `FLOAT` | `-0.5` | — |
| `heading/medium/lineHeight` | `FLOAT` | `25` | — |
| `heading/small/fontFamily` | `STRING` | `Inter` | `font/family/default` |
| `heading/small/fontSize` | `FLOAT` | `13` | — |
| `heading/small/fontWeight` | `FLOAT` | `550` | `font/weight/heavy` |
| `heading/small/letterSpacing` | `FLOAT` | `-0.25` | — |
| `heading/small/lineHeight` | `FLOAT` | `22` | — |
<!-- END TYPOGRAPHY TOKENS -->

## Переменные размеров

<!-- BEGIN SIZING TOKENS -->
| Token | Type | Value | Alias |
|---|---|---|---|
| `Radius/radius-full` | `FLOAT` | `9999` | — |
| `Radius/radius-large` | `FLOAT` | `13` | — |
| `Radius/radius-medium` | `FLOAT` | `5` | — |
| `Radius/radius-none` | `FLOAT` | `0` | — |
| `Radius/radius-small` | `FLOAT` | `2` | — |
| `Spacers/spacer-0` | `FLOAT` | `0` | — |
| `Spacers/spacer-1` | `FLOAT` | `4` | — |
| `Spacers/spacer-2` | `FLOAT` | `8` | — |
| `Spacers/spacer-3` | `FLOAT` | `16` | — |
| `Spacers/spacer-4` | `FLOAT` | `24` | — |
| `Spacers/spacer-5` | `FLOAT` | `32` | — |
| `Spacers/spacer-6` | `FLOAT` | `40` | — |
<!-- END SIZING TOKENS -->

## Локальные текстовые стили

<!-- BEGIN TEXT STYLES -->
| Style | Family | Weight/style | Size | Line height | Letter spacing |
|---|---|---|---:|---:|---:|
| `_doc/description` | `Whyte` | `Book` | `13` | `22px` | `1%` |
| `_doc/heading` | `Whyte` | `Regular` | `18` | `32px` | `1%` |
| `body/body.large` | `Inter` | `Regular` | `13` | `22px` | `-0.25%` |
| `body/body.large.strong` | `Inter` | `Medium` | `13` | `22px` | `-0.25%` |
| `body/body.medium` | `Inter` | `Medium` | `11` | `16px` | `0.5%` |
| `body/body.medium.strong` | `Inter` | `Semi Bold` | `11` | `16px` | `0.5%` |
| `body/body.small` | `Inter` | `Regular` | `9` | `14px` | `0.5%` |
| `body/body.small.strong` | `Inter` | `Medium` | `9` | `14px` | `0.5%` |
| `heading/display` | `Whyte` | `Medium` | `48` | `56px` | `-3%` |
| `heading/heading.large` | `Inter` | `Semi Bold` | `24` | `32px` | `-1.7000000476837158%` |
| `heading/heading.medium` | `Inter` | `Semi Bold` | `11` | `25px` | `-0.5%` |
| `heading/heading.small` | `Inter` | `Semi Bold` | `13` | `22px` | `-0.25%` |
<!-- END TEXT STYLES -->

### Зафиксированная аномалия источника

В локальных text styles `heading/heading.medium` имеет 11/25, а `heading/heading.small` — 13/22. При этом typography variable `heading/medium/fontSize` равна 15. Снимок сохраняет оба факта без скрытого исправления; нормализация шкалы должна быть отдельным версионируемым решением.
