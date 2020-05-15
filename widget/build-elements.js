// build-elements.js
const fs = require('fs-extra');
const concat = require('concat');
const widgetName = 'widget-name';

(async function build() {
  const files = [
    './dist/widget/scripts.js',
    './dist/widget/runtime-es5.js',
    './node_modules/zone.js/dist/zone.min.js',
    './dist/widget/main-es5.js',
  ];
  await fs.ensureDir('elements');
  await concat(files, `elements/${widgetName}.js`);
})().catch(err => console.debug(err));