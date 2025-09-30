import Bundle from './dist/EasyLogicColorPicker.js';

const resolved = Bundle?.default ?? Bundle;
const gradient = Bundle?.GradientPicker ?? resolved?.GradientPicker;

export const GradientPicker = gradient;
export const ColorPicker = resolved;
export default resolved;
