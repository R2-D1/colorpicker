import BaseColorPicker from '~/colorpicker/BaseColorPicker';
import ColorPalette from '~/colorpicker/ui/ColorPalette';
import ColorInformation from '~/colorpicker/ui/ColorInformation';
import CurrentColorSets from '~/colorpicker/ui/CurrentColorSets';
import Control from './Control';
import './index.scss';

export default class DefaultColorPicker extends BaseColorPicker {

  components() {
    return {
      palette: ColorPalette,
      control: Control,
      information: ColorInformation,
      currentColorSets: CurrentColorSets,
    };
  }

  template() {
    return `
      <div class="el-colorpicker__wrap">
        <template target="palette"></template>
        <template target="control"></template>
        <template target="information"></template>
        <template target="currentColorSets"></template>
      </div>
    `;
  }

}
