import ensureColorPickerStyles from './styles/injectStyles.js';
import ColorPicker, * as EntryExports from './entry.js';

export const GradientPicker = EntryExports.GradientPicker;
export { ColorPicker };
export default ColorPicker;
export * from './entry.js';

ensureColorPickerStyles();
