'use strict';

if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
  globalThis.self = globalThis;
}

const bundle = require('./dist/EasyLogicColorPicker.js');
const resolved = bundle && bundle.default ? bundle.default : bundle;

// Ensure default export
module.exports = resolved;
module.exports.default = resolved;

// Re-export ancillary members when available
if (bundle && bundle.GradientPicker) {
  module.exports.GradientPicker = bundle.GradientPicker;
} else if (resolved && resolved.GradientPicker) {
  module.exports.GradientPicker = resolved.GradientPicker;
}

// Preserve other enumerable properties from the bundle
if (bundle && typeof bundle === 'object') {
  Object.keys(bundle).forEach((key) => {
    if (!(key in module.exports)) {
      module.exports[key] = bundle[key];
    }
  });
}
