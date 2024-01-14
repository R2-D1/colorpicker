import UIElement from '../../UIElement';
import Hue from '../../ui/control/Hue';
import Opacity from '../../ui/control/Opacity';
import ColorPreview from '../../ui/ColorPreview';
import Eyedropper from '../../ui/Eyedropper';
import { enableEyeDropper } from '../../../util/functions/support';

export default class Control extends UIElement {

  components() {
    return {
      Hue,
      Opacity,
      ColorPreview,
      Eyedropper,
    };
  }

  template() {
    let $eyedropper = !!enableEyeDropper ? `
      <div class="el-cp-color-control__left">
        <template target="Eyedropper"></template>
      </div>
    ` : '';
    let $opacity = this.opt.useOpacity ? `<template target="Opacity"></template>` : '';

    return `
      <article class="el-cp-color-control">
        ${$eyedropper}
        <div class="el-cp-color-control__body">
          <template target="Hue"></template>
          ${$opacity}
        </div>
        <div class="el-cp-color-control__right">
          <template target="ColorPreview"></template>
        </div>
      </article>
    `;
  }

  refresh() {
    this.Hue.setColorUI();
    if (!!this.opt.useOpacity) this.Opacity.setColorUI();
  }

  ['@changeColor']() {
    this.refresh();
  }

  ['@initColor']() {
    this.refresh();
  }

}
