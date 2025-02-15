import Color from "@easylogic/color";
import UIElement from "../../colorpicker/UIElement";
import {calculateAngle, round} from "../../util/functions/math";
import {Length} from "./Length";


var radialTypeList = [
  {
    label: 'Коло',
    value: 'circle'
  },
  {
    label: 'Коло (найближча сторона)',
    value: 'circle closest-side'
  },
  {
    label: 'Коло (найближчий кут)',
    value: 'circle closest-corner'
  },
  {
    label: 'Коло (найвіддаленіша сторона)',
    value: 'circle farthest-side'
  },
  {
    label: 'Коло (найвіддаленіший кут)',
    value: 'circle farthest-corner'
  },
  {
    label: 'Еліпс',
    value: 'ellipse'
  },
  {
    label: 'Еліпс (найближча сторона)',
    value: 'ellipse closest-side'
  },
  {
    label: 'Еліпс (найближчий кут)',
    value: 'ellipse closest-corner'
  },
  {
    label: 'Еліпс (найвіддаленіша сторона)',
    value: 'ellipse farthest-side'
  },
  {
    label: 'Еліпс (найвіддаленіший кут)',
    value: 'ellipse farthest-corner'
  }
]

export default class GradientEditor extends UIElement {

  initialize() {
    super.initialize();


    var colorsteps = [
      {offset: Length.percent(0), cut: false, color: 'yellow'},
      {offset: Length.percent(100), cut: false, color: 'red'}
    ]

    this.type = 'linear-gradient'
    this.index = 0
    this.colorsteps = colorsteps;
    this.radialPosition = [Length.percent(50), Length.percent(50)]
    this.radialType = 'ellipse'
  }

  '@changeRadialPosition'(posX, posY) {

    if (this.type.includes('linear-gradient')) {
      this['@changeKeyValue']('angle', Length.deg(calculateAngle(posX.value - 50, posY.value - 50)).round(1000))
    } else {
      this['@changeKeyValue']('radialPosition', [posX, posY]);
    }

    this.reloadInputValue();
  }

  '@setGradientEditor'(str, index = 0, type = 'linear-gradient', angle, radialPosition, radialType) {
    var results = Color.convertMatches(str);
    var colorsteps = results.str.split(',').map(it => it.trim()).map(it => {
      var [color, offset1, offset2] = it.split(' ').filter(str => str.length);

      color = Color.reverseMatches(color, results.matches);
      var cut = false;
      if (offset2) {
        cut = true;
      }

      var offset = cut ? Length.parse(offset2) : Length.parse(offset1)

      if (offset.isDeg()) {
        offset = Length.percent(offset.value / 360 * 100)
      }

      return {color, offset, cut}

    })

    if (colorsteps.length == 1) {
      colorsteps.push({
        color: colorsteps[0].color,
        offset: Length.percent(100),
        cut: false
      })
    }

    this.cachedStepListRect = null;


    this.colorsteps = colorsteps;
    this.index = index;
    this.type = type;
    this.angle = Length.parse(angle || '90deg');
    this.radialPosition = radialPosition || [Length.percent(50), Length.percent(50)]
    this.radialType = radialType


    this.refresh();

    this.selectStep(index);

    this.reloadInputValue();
  }

  template() {
    return /*html*/`
        <div class='gradient-editor' data-selected-editor='${this.type}'>
            <div class='gradient-steps' data-editor='gradient'>
                <div class="hue-container" ref="$back"></div>
                <div class="hue" ref="$steps">
                    <div class='step-list' ref="$stepList" ></div>
                </div>
            </div>
            <div class='sub-editor' ref='$subEditor'>
              <div class='field ' data-editor='tools'>
                    <div class='field__top-row'>
                        <label for="cut" class="connect field__label">
                            <input type='checkbox' ref='$cut' id="cut" checked />Об'єднати
                        </label>
                        <button class="remove-color" type="button" ref="$remove" title="Видалити колір">&times;</button>
                    </div>
              </div>
              <div data-editor='angle' class="field">
              <div class="field__top-row">
                <label class="field__label">Кут</label>
                 <div class="field__input"><input class="text-input" type='number' data-key='angle' min='-720' max="720" step='0.1' ref='$angleNumber' /><sup>°</sup></div>
               </div>
                <div class="field__bottom-row">
                  <input type='range' data-key='angle' min='-720' max="720" step='0.1' ref='$angle' />
                </div>
              </div>
              <div data-editor='centerX'  class="field">
                <div  class="field__top-row">
                    <label  class="field__label">По горизонталі</label>
                  <input class="text-input" type='number' data-key='centerX' min='-100' max="100" step='0.1' ref='$centerXNumber' />
                  <select class="select" ref='$centerXSelect'>
                      <option value='%'>%</option>
                      <option value='px'>px</option>
                        <!-- <option value='em'>em</option>-->
                    </select>
                  </div>
                <div class="field__bottom-row">
                    <input type='range' data-key='centerX' min='-100' max="100" step='0.1' ref='$centerX' />
                </div>
              </div>
              <div data-editor='centerY' class="field">
              <div  class="field__top-row">
                <label class="field__label">По вертикалі</label>
                <input class="text-input" type='number' data-key='centerX' min='-100' max="100" step='0.1' ref='$centerYNumber' />
                 <select class="select" ref='$centerYSelect'>
                      <option value='%'>%</option>
                      <option value='px'>px</option>
                       <!-- <option value='em'>em</option>-->
                    </select>
                </div>
                <div class='field__bottom-row'>
                  <div><input type='range' data-key='centerY' min='-100' max="100" step='0.1' ref='$centerY' /></div>
                </div>
              </div>
              <div data-editor='radialType' class="field">
                <div class="field__top-row">
                <label class="field__label">Тип</label>
                <select ref='$radialType'>
                  ${radialTypeList.map(k => {
      var selected = this.radialType === k.value ? 'selected' : '';
      return `<option value="${k.value}" ${selected}>${k.label}</option>`
    }).join('')}
                </select>
                </div>
              </div>
            </div>
        </div>
      `;
  }

  'input $angle'(e) {
    this.refs.$angleNumber.val(this.refs.$angle.val())
    this['@changeKeyValue']('angle', Length.deg(this.refs.$angle.val()))
  }

  'input $angleNumber'(e) {
    this.refs.$angle.val(this.refs.$angleNumber.val())
    this['@changeKeyValue']('angle', Length.deg(this.refs.$angle.val()))
  }

  'input $centerX'(e) {
    this.refs.$centerXNumber.val(this.refs.$centerX.val())
    this['@changeKeyValue']('radialPositionX')
  }

  'input $centerXNumber'(e) {
    this.refs.$centerX.val(this.refs.$centerXNumber.val())
    this['@changeKeyValue']('radialPositionX')
  }

  'input $centerY'(e) {
    this.refs.$centerYNumber.val(this.refs.$centerY.val())
    this['@changeKeyValue']('radialPositionY')
  }

  'input $centerYNumber'(e) {
    this.refs.$centerY.val(this.refs.$centerYNumber.val())
    this['@changeKeyValue']('radialPositionX')
  }

  'change $centerXSelect'(e) {

    this['@changeKeyValue']('radialPositionX')
  }

  'change $centerYSelect'(e) {
    this['@changeKeyValue']('radialPositionY')
  }

  get radialPositionX() {
    return new Length(+this.refs.$centerX.val(), this.refs.$centerXSelect.val())
  }

  get radialPositionY() {
    return new Length(+this.refs.$centerY.val(), this.refs.$centerYSelect.val())
  }

  'change $radialType'(e) {
    this['@changeKeyValue']('radialType', this.refs.$radialType.val())
  }

  '@changeKeyValue'(key, value) {

    if (key === 'angle') {
      value = value.value;
    }

    if (key === 'radialPositionX' || key === 'radialPositionY') {
      this['radialPosition'] = [this.radialPositionX, this.radialPositionY]
    } else {
      this[key] = value;
    }

    this.updateData();
  }

  '@changeColorStepOffset'(key, value) {
    if (this.currentStep) {
      this.currentStep.offset = value.clone();
      this.$currentStep.css({
        left: this.currentStep.offset
      })
      this.setColorUI()
      this.updateData();
    }
  }

  'click $back'(e) {
    if (this.startXY) return;

    var rect = this.refs.$stepList.rect()

    var minX = rect.x;
    var maxX = rect.right;

    var x = e.xy.x

    if (x < minX) x = minX
    else if (x > maxX) x = maxX
    var percent = (x - minX) / rect.width * 100;


    var list = this.colorsteps.map((it, index) => {
      return {index, color: it.color, offset: it.offset}
    })

    var prev = list.filter(it => it.offset.value <= percent).pop();
    var next = list.filter(it => it.offset.value >= percent).shift();

    if (prev && next) {
      this.colorsteps.splice(next.index, 0, {
        cut: false,
        offset: Length.percent(percent),
        color: Color.mix(prev.color, next.color, (percent - prev.offset.value) / (next.offset.value - prev.offset.value))
      })
    } else if (prev) {
      this.colorsteps.splice(prev.index + 1, 0, {
        cut: false,
        offset: Length.percent(percent),
        color: 'rgba(0, 0, 0, 1)'
      })
    } else if (next) {
      this.colorsteps.splice(next.index - 1, 0, {
        cut: false,
        offset: Length.percent(percent),
        color: 'rgba(0, 0, 0, 1)'
      })
    } else {
      this.colorsteps.push({
        cut: false,
        offset: Length.percent(0),
        color: 'rgba(0, 0, 0, 1)'
      })
    }

    this.refresh();
    this.updateData();
  }

  reloadStepList() {
    this.refs.$stepList.html(this.colorsteps.map((it, index) => {
      return `<div class='step' data-index='${index}' data-cut='${it.cut}' style='left: ${it.offset};'>
        <div class='color-view' style="background-color: ${it.color}"></div>
        <div class='arrow' style="background-color: ${it.color}"></div>
      </div>`
    }).join(''))
  }

  'click $cut'() {
    if (this.currentStep) {
      this.currentStep.cut = this.refs.$cut.checked()
      this.$currentStep.attr('data-cut', this.currentStep.cut);
      this.setColorUI()
      this.updateData();
    }
  }

  'click $remove'() {
    this.removeStep(this.index)
  }

  removeStep(index) {
    // if (this.colorsteps.length === 2) return;
    this.colorsteps.splice(index, 1);
    var currentStep = this.colorsteps[index]
    var currentIndex = index;
    if (!currentStep) {
      currentStep = this.colorsteps[index - 1]
      currentIndex = index - 1;
    }

    if (currentStep) {
      this.selectStep(currentIndex);
    }
    this.refresh();
    this.updateData();
  }


  selectStep(index) {
    this.index = index;
    this.currentStep = this.colorsteps[index];
    this.refs.$stepList.attr('data-selected-index', index);
    this.$currentStep = this.refs.$stepList.$(`[data-index="${index.toString()}"]`)
    if (this.$currentStep) {
      this.$colorView = this.$currentStep.$('.color-view');
      this.$arrow = this.$currentStep.$('.arrow');
      this.refs.$cut.el.checked = this.currentStep.cut;
    }
    this.prev = this.colorsteps[index - 1];
    this.next = this.colorsteps[index + 1];


  }

  'mousedown $stepList .step'(e) {
    var index = +e.$delegateTarget.attr('data-index')

    if (e.altKey) {
      this.removeStep(index);
      // return false;
    } else {

      this.selectStep(index);

      this.startXY = e.xy;
      this.$store.emit('selectColorStep', this.currentStep.color)
      this.refs.$cut.checked(this.currentStep.cut);
      // this.refs.$offset.val(this.currentStep.offset.value);
      this.refs.$stepList.attr('data-selected-index', index);
      this.cachedStepListRect = this.refs.$stepList.rect();
    }
  }


  getStepListRect() {
    return this.cachedStepListRect;
  }

  'mouseup document'(e) {
    if (this.startXY) {
      this.startXY = null;
    }
  }

  'mousemove document'(e) {
    if (!this.startXY) return;

    var dx = e.xy.x - this.startXY.x;
    var dy = e.xy.y - this.startXY.y;

    var rect = this.getStepListRect()

    var minX = rect.x;
    var maxX = rect.right;

    var x = this.startXY.x + dx

    if (x < minX) x = minX
    else if (x > maxX) x = maxX
    var percent = (x - minX) / rect.width * 100;

    if (this.prev) {
      if (this.prev.offset.value > percent) {
        percent = this.prev.offset.value
      }
    }

    if (this.next) {
      if (this.next.offset.value < percent) {
        percent = this.next.offset.value
      }
    }


    this.currentStep.offset.set(round(percent, 100));
    this.$currentStep.css({
      left: Length.percent(percent)
    })
    // this.refs.$offset.val(this.currentStep.offset.value);
    this.setColorUI()
    this.updateData();
  }


  refresh() {
    this.reloadStepList();
    this.setColorUI();
  }

  getLinearGradient() {
    if (this.colorsteps.length === 0) {
      return '';
    }

    if (this.colorsteps.length === 1) {
      var colorstep = this.colorsteps[0];
      return `linear-gradient(to right, ${colorstep.color} ${colorstep.offset}, ${colorstep.color} 100%)`
    }


    return `linear-gradient(to right, ${this.colorsteps.map((it, index) => {

      if (it.cut) {
        var prev = this.colorsteps[index - 1]
        if (prev) {
          return `${it.color} ${prev.offset} ${it.offset}`
        } else {
          return `${it.color} ${it.offset}`
        }

      } else {
        return `${it.color} ${it.offset}`
      }

    }).join(',')})`
  }

  setColorUI() {
    this.refs.$stepList.css("background-image", this.getLinearGradient());
    this.refs.$el.attr("data-selected-editor", this.type);
  }

  reloadInputValue() {
    // this.refs.$offset.val(this.currentStep.offset.value);
    // this.refs.$offsetNumber.val(this.currentStep.offset.value);
    // this.refs.$offsetSelect.val(this.currentStep.offset.unit);

    this.refs.$angle.val(this.angle.value);
    this.refs.$angleNumber.val(this.angle.value);


    const radialPosition = this.radialPosition.map(it => {
      if (it === 'center') {
        return Length.percent(50);
      }

      return it;
    });


    this.refs.$centerX.val(radialPosition[0].value);
    this.refs.$centerXNumber.val(radialPosition[0].value);
    this.refs.$centerXSelect.val(radialPosition[0].unit);

    this.refs.$centerY.val(radialPosition[1].value);
    this.refs.$centerYNumber.val(radialPosition[1].value);
    this.refs.$centerYSelect.val(radialPosition[1].unit);

    this.refs.$radialType.val(this.radialType);
  }

  '@setColorStepColor'(color) {

    if (this.currentStep) {
      this.currentStep.color = color;
      this.$colorView.css({
        'background-color': color
      })
      this.$arrow.css({
        'background-color': color
      })
      this.setColorUI()
      this.updateData();
    }
  }

  updateData() {

    this.$store.emit('changeGradientEditor', {
      type: this.type,
      index: this.index,
      angle: this.angle,
      colorsteps: this.colorsteps,
      radialPosition: this.radialPosition,
      radialType: this.radialType
    });
  }

}
