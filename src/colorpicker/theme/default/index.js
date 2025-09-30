import BaseColorPicker from '../../BaseColorPicker';
import Palette from '../../ui/Palette';
import Forms from '../../ui/ColorInformation';
import Swatch from '../../ui/Swatch';
import Control from './Control';
import './index.css';

export default class DefaultColorPicker extends BaseColorPicker {

  components() {
    return {
      Palette,
      Control,
      Forms,
      Swatch,
    };
  }

  template() {
    return `
      <div class="el-colorpicker__wrap">
        <template target="Palette"></template>
        <template target="Control"></template>
        <template target="Forms"></template>
        <template target="Swatch"></template>
      </div>
    `;
  }

}
