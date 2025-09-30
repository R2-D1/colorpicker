import ColorPicker from './colorpicker';
import GradientPickerUI from './gradientpicker';
import './scss/index.scss';

// Surface the gradient picker on the default export so the UMD build exposes it.
ColorPicker.GradientPicker = GradientPickerUI;

export const GradientPicker = GradientPickerUI;

export default ColorPicker;
