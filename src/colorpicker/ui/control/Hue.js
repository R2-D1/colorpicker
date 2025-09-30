import BaseSlider from '../../../colorpicker/BaseSlider';
export default class Hue extends BaseSlider {

  constructor(opt) {
    super(opt);
    this.minValue = 0;
    this.maxValue = 360;
  }

  template() {
    return `
      <nav class="el-cp-slider el-cp-slider--hue">
        <p ref="$container" class="el-cp-slider__body">
          <i ref="$bar" class="el-cp-slider__circle"></i>
        </p>
      </nav>
    `;
  }

  getDefaultValue() {
    return this.$store.hsv.h;
  }

  refreshColorUI(e) {
    const dist = this.getCalculatedDist(e);
    this.changeColor({
      h: (dist / 100) * this.maxValue,
      type: 'hsv',
    });
  }

}
