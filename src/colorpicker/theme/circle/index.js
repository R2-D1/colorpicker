import BaseColorPicker from '../../BaseColorPicker';
import PaletteWheel from '../../ui/PaletteWheel';
import Swatch from '../../ui/Swatch';
import Forms from '../../ui/ColorInformation';
import Control from './Control';
import './index.css';

export default class CircleColorPicker extends BaseColorPicker {

  components() {
    return {
      PaletteWheel,
      Control,
      Forms,
      Swatch,
    }
  }

  template() {
    return `
      <div class="el-colorpicker__wrap">
        <template target="PaletteWheel"></template>
        <template target="Control"></template>
        <template target="Forms"></template>
        <template target="Swatch"></template>
      </div>
    `;
  }

}
