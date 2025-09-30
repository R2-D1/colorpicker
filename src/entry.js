import ColorPickerCore from './colorpicker';
import GradientPickerCore from './gradientpicker';

const ColorPicker = Object.assign(ColorPickerCore, {
  GradientPicker: GradientPickerCore,
});

export const GradientPicker = GradientPickerCore;
export { ColorPicker };

export default ColorPicker;
