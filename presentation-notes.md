# WIP Tailwind CSS Presentation Notes

## Intro
* Atomic, utility driven design
* Differences compared to Bootstrap
* Pros
  Prototype speed, development speed
  Small resulting CSS file
  Can leverage CSS-in-JS as needed
  Share CSS values outside of CSS (D3 using variables set in Tailwind)
  list more...
* Cons
  changes to actual CSS require rebuilding the CSS (should be infrequent)
  list more...

## tailwindconfig.js
* Config
* Plugins
* Variants

## Build Process
* npx tailwindcss build ./src/styles/index.css -o ./src/styles.css
* show dev vs prod (Purge CSS)

## How to use
* First try to not write any CSS
  use utilities to form the backbone of your component markup
* When you do need to write new CSS, there are a few ways you can do it
  Plugins
  list more
