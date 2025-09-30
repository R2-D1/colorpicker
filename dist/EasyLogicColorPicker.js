(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EasyLogicColorPicker"] = factory();
	else
		root["EasyLogicColorPicker"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var regenerator = __webpack_require__(625);
var regeneratorAsyncIterator = __webpack_require__(775);
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 37:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorAsyncGen = __webpack_require__(7);
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 93:
/***/ (function(module) {

function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) r.unshift(t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 102:
/***/ (function(module) {

!function(r,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};function t(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(0, 0, 0, 0)";return Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]}),"hex"==e?n(r):"rgb"==e?a(r,t):"hsl"==e?o(r):r}function n(r){Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]});var e=r.r.toString(16);r.r<16&&(e="0"+e);var t=r.g.toString(16);r.g<16&&(t="0"+t);var n=r.b.toString(16);r.b<16&&(n="0"+n);var a="";if(r.a<1){var o=Math.floor(255*r.a);a=o.toString(16),o<16&&(a="0"+a)}return"#".concat(e).concat(t).concat(n).concat(a)}function a(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rgba(0, 0, 0, 0)";if(Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]}),void 0!==r)return 1==r.a||void 0===r.a?isNaN(r.r)?e:"rgb(".concat(r.r,",").concat(r.g,",").concat(r.b,")"):"rgba(".concat(r.r,",").concat(r.g,",").concat(r.b,",").concat(r.a,")")}function o(r){return Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]}),1==r.a||void 0===r.a?"hsl(".concat(r.h,",").concat(r.s,"%,").concat(r.l,"%)"):"hsla(".concat(r.h,",").concat(r.s,"%,").concat(r.l,"%,").concat(r.a,")")}r.d(e,{default:()=>br});const g={format:t,rgb:a,hsl:o,hex:n};function i(r,e){return e=void 0===e?1:e,Math.round(r*e)/e}const b={round:i};var f={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb(0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb(0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb(0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb(95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(237, 20, 61)",cyan:"rgb(0, 255, 255)",darkblue:"rgb(0, 0, 139)",darkcyan:"rgb(0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgrey:"rgb(169, 169, 169)",darkgreen:"rgb(0, 100, 0)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb(85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb(72, 61, 139)",darkslategray:"rgb(47, 79, 79)",darkslategrey:"rgb(47, 79, 79)",darkturquoise:"rgb(0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb(0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb(30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb(34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb(75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgreen:"rgb(144, 238, 144)",lightgray:"rgb(211, 211, 211)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb(32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb(0, 255, 0)",limegreen:"rgb(50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb(0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb(60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb(0, 250, 154)",mediumturquoise:"rgb(72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb(25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb(0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",rebeccapurple:"rgb(102, 51, 153)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb(65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb(46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb(0, 255, 127)",steelblue:"rgb(70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb(0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb(64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)",transparent:"rgba(0, 0, 0, 0)"};const l={isColorName:function(r){return!!f[r]},getColorByName:function(r){return f[r]}};function c(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function u(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.l}var a,o,g;if(r/=360,t/=100,0==(e/=100))a=o=g=t;else{var b=t<.5?t*(1+e):t+e-t*e,f=2*t-b;a=c(f,b,r+1/3),o=c(f,b,r),g=c(f,b,r-1/3)}return{r:i(255*a),g:i(255*o),b:i(255*g)}}const s={HUEtoRGB:c,HSLtoHSV:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.l}var a=u(r,e,t);return x(a.r,a.g,a.b)},HSLtoRGB:u};function h(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var d=/(#(?:[\da-f]{3}){1,2}|#(?:[\da-f]{8})|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;function p(r){var e=r.match(d),t=[];if(!e)return t;for(var n=0,a=e.length;n<a;n++)if(e[n].indexOf("#")>-1||e[n].indexOf("rgb")>-1||e[n].indexOf("hsl")>-1)t.push({color:e[n]});else{var o=l.getColorByName(e[n]);o&&t.push({color:e[n],nameColor:o})}var g={next:0};return t.forEach((function(e){var t=r.indexOf(e.color,g.next);e.startIndex=t,e.endIndex=t+e.color.length,g.next=e.endIndex})),t}function v(r){var e=p(r);return e.forEach((function(e,t){r=r.replace(e.color,"@"+t)})),{str:r,matches:e}}function y(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",t=v(r);return t.str.split(e).map((function(r,e){return r=O(r),t.matches[e]&&(r=r.replace("@"+e,t.matches[e].color)),r}))}function m(r,e){return e.forEach((function(e,t){r=r.replace("@"+t,e.color)})),r}function O(r){return r.replace(/^\s+|\s+$/g,"")}function w(r){if("string"==typeof r){if(l.isColorName(r)&&(r=l.getColorByName(r)),r.indexOf("rgb(")>-1){for(var e=0,t=(a=r.replace("rgb(","").replace(")","").split(",")).length;e<t;e++)a[e]=parseInt(O(a[e]),10);var n={type:"rgb",r:a[0],g:a[1],b:a[2],a:1};return Object.assign(n,M(n))}if(r.indexOf("rgba(")>-1){for(e=0,t=(a=r.replace("rgba(","").replace(")","").split(",")).length;e<t;e++)a[e]=t-1==e?parseFloat(O(a[e])):parseInt(O(a[e]),10);return n={type:"rgb",r:a[0],g:a[1],b:a[2],a:a[3]},Object.assign(n,M(n))}if(r.indexOf("hsl(")>-1){for(e=0,t=(a=r.replace("hsl(","").replace(")","").split(",")).length;e<t;e++)a[e]=parseFloat(O(a[e]));return n={type:"hsl",h:a[0],s:a[1],l:a[2],a:1},Object.assign(n,u(n))}if(r.indexOf("hsla(")>-1){for(e=0,t=(a=r.replace("hsla(","").replace(")","").split(",")).length;e<t;e++)a[e]=t-1==e?parseFloat(O(a[e])):parseInt(O(a[e]),10);return n={type:"hsl",h:a[0],s:a[1],l:a[2],a:a[3]},Object.assign(n,u(n))}if(0==r.indexOf("#")){var a=[],o=1;if(3==(r=r.replace("#","")).length)for(e=0,t=r.length;e<t;e++){var g=r.substr(e,1);a.push(parseInt(g+g,16))}else if(8===r.length){for(e=0,t=r.length;e<t;e+=2)a.push(parseInt(r.substr(e,2),16));o=a.pop()/255}else for(e=0,t=r.length;e<t;e+=2)a.push(parseInt(r.substr(e,2),16));return n={type:"hex",r:a[0],g:a[1],b:a[2],a:o},Object.assign(n,M(n))}}else if("number"==typeof r){if(0<=r&&r<=16777215)return n={type:"hex",r:(16711680&r)>>16,g:(65280&r)>>8,b:(255&r)>>0,a:1},Object.assign(n,M(n));if(0<=r&&r<=4294967295)return n={type:"hex",r:(4278190080&r)>>24,g:(16711680&r)>>16,b:(65280&r)>>8,a:(255&r)/255},Object.assign(n,M(n))}return r}function j(r){"string"==typeof r&&(r=y(r));var e=(r=r.map((function(r){if("string"==typeof r){var e=v(r),t=O(e.str).split(" ");return t[1]?t[1].includes("%")?t[1]=parseFloat(t[1].replace(/%/,""))/100:t[1]=parseFloat(t[1]):t[1]="*",t[0]=m(t[0],e.matches),t}if(Array.isArray(r))return r[1]?"string"==typeof r[1]&&(r[1].includes("%")?r[1]=parseFloat(r[1].replace(/%/,""))/100:r[1]=+r[1]):r[1]="*",function(r){return function(r){if(Array.isArray(r))return h(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return h(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r)}))).filter((function(r){return"*"===r[1]})).length;if(e>0){var t=(1-r.filter((function(r){return"*"!=r[1]&&1!=r[1]})).map((function(r){return r[1]})).reduce((function(r,e){return r+e}),0))/e;r.forEach((function(e,n){"*"==e[1]&&n>0&&(r.length-1==n||(e[1]=t))}))}return r}const k={matches:p,convertMatches:v,convertMatchesArray:y,reverseMatches:m,parse:w,parseGradient:j,trim:O,color_regexp:d,color_split:","};function x(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=r/255,o=e/255,g=t/255,i=Math.max(a,o,g),b=Math.min(a,o,g),f=i-b,l=0;return 0==f?l=0:i==a?l=(o-g)/f%6*60:i==o?l=60*((g-a)/f+2):i==g&&(l=60*((a-o)/f+4)),l<0&&(l=360+l),{h:l,s:0==i?0:f/i,v:i}}function M(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}r/=255,e/=255,t/=255;var a,o,g=Math.max(r,e,t),b=Math.min(r,e,t),f=(g+b)/2;if(g==b)a=o=0;else{var l=g-b;switch(o=f>.5?l/(2-g-b):l/(g+b),g){case r:a=(e-t)/l+(e<t?6:0);break;case e:a=(t-r)/l+2;break;case t:a=(r-e)/l+4}a/=6}return{h:i(360*a),s:i(100*o),l:i(100*f)}}function P(r){return{r,g:r,b:r}}function S(r,e,t){return Math.ceil(.2126*r+.7152*e+.0722*t)}function B(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=S(r,e,t),o=.564*(t-a),g=.713*(r-a);return{y:a,cr:g,cb:o}}function A(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.04045;return 100*(r>e?Math.pow((r+.055)/1.055,2.4):r/12.92)}function G(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=r/255,o=e/255,g=t/255,i=.4124*(a=A(a))+.3576*(o=A(o))+.1805*(g=A(g)),b=.2126*a+.7152*o+.0722*g,f=.0193*a+.1192*o+.9505*g;return{x:i,y:b,z:f}}const C={RGBtoCMYK:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=r/255,o=e/255,g=t/255,i=1-Math.max(a,o,g),b=(1-a-i)/(1-i),f=(1-o-i)/(1-i),l=(1-g-i)/(1-i);return{c:b,m:f,y:l,k:i}},RGBtoGray:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return P(B(r,e,t).y)},RGBtoHSL:M,RGBtoHSV:x,RGBtoLAB:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return XYZtoLAB(G(r,e,t))},RGBtoSimpleGray:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return P(Math.ceil((r+e+t)/3))},RGBtoXYZ:G,RGBtoYCrCb:B,c:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return P((r+e+t)/3>90?0:255)},brightness:S,gray:P};function R(r){return Math.pow(r,3)>.008856?Math.pow(r,3):(r-16/116)/7.787}function H(r){return r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r}function D(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.x,e=n.y,t=n.z}var a=r/100,o=e/100,g=t/100,b=3.2406*a+-1.5372*o+-.4986*g,f=-.9689*a+1.8758*o+.0415*g,l=.0557*a+-.204*o+1.057*g;b=H(b),f=H(f),l=H(l);var c=i(255*b),u=i(255*f),s=i(255*l);return{r:c,g:u,b:s}}function E(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.l,e=n.a,t=n.b}var a=(r+16)/116,o=e/500+a,g=a-t/200;a=R(a);var i=95.047*(o=R(o)),b=100*a,f=108.883*(g=R(g));return{x:i,y:b,z:f}}const I={XYZtoRGB:D,LABtoRGB:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.l,e=n.a,t=n.b}return D(E(r,e,t))},LABtoXYZ:E};function q(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.v}var a=r,o=e,g=t;a>=360&&(a=0);var b=o*g,f=b*(1-Math.abs(a/60%2-1)),l=g-b,c=[];return 0<=a&&a<60?c=[b,f,0]:60<=a&&a<120?c=[f,b,0]:120<=a&&a<180?c=[0,b,f]:180<=a&&a<240?c=[0,f,b]:240<=a&&a<300?c=[f,0,b]:300<=a&&a<360&&(c=[b,0,f]),{r:i(255*(c[0]+l)),g:i(255*(c[1]+l)),b:i(255*(c[2]+l))}}const L={HSVtoHSL:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.v}var a=q(r,e,t);return M(a.r,a.g,a.b)},HSVtoRGB:q},Y={YCrCbtoRGB:function(r,e,t,n){if(1==arguments.length){var a=arguments[0];r=a.y,e=a.cr,t=a.cb,n=(n=a.bit)||0}var o=r+1.402*(e-n),g=r-.344*(t-n)-.714*(e-n),i=r+1.772*(t-n);return{r:Math.ceil(o),g:Math.ceil(g),b:Math.ceil(i)}}};function N(r,e){return Math.floor(Math.random()*(e-r+1))+r}function F(){return a({r:N(0,255),g:N(0,255),b:N(0,255)})}function V(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex",o={r:i(r.r+(e.r-r.r)*n),g:i(r.g+(e.g-r.g)*n),b:i(r.b+(e.b-r.b)*n),a:i(r.a+(e.a-r.a)*n,100)};return t(o,o.a<1?"rgb":a)}function z(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(!r)return[];"string"==typeof r&&(r=y(r));for(var t=(r=r||[]).length,n=[],a=0;a<t-1;a++)for(var o=0;o<e;o++)n.push(X(r[a],r[a+1],o/e));return n}function X(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex",a=w(r),o=w(e);return V(a,o,t,n)}function Z(r){return r=w(r),(Math.round(299*r.r)+Math.round(587*r.g)+Math.round(114*r.b))/1e3}function _(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgb",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,g=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,b=w(r),f=x(b),l=(g-o)*i/n,c=[],u=1;u<=n;u++)f[e]=Math.abs((i-l*u)/i),c.push(t(q(f),a));return c}z.parula=function(r){return z(["#352a87","#0f5cdd","#00b5a6","#ffc337","#fdff00"],r)},z.jet=function(r){return z(["#00008f","#0020ff","#00ffff","#51ff77","#fdff00","#ff0000","#800000"],r)},z.hsv=function(r){return z(["#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#ff0000"],r)},z.hot=function(r){return z(["#0b0000","#ff0000","#ffff00","#ffffff"],r)},z.pink=function(r){return z(["#1e0000","#bd7b7b","#e7e5b2","#ffffff"],r)},z.bone=function(r){return z(["#000000","#4a4a68","#a6c6c6","#ffffff"],r)},z.copper=function(r){return z(["#000000","#3d2618","#9d623e","#ffa167","#ffc77f"],r)};const K={interpolateRGB:V,blend:X,mix:function(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex";return X(r,e,t,n)},scale:z,contrast:Z,contrastColor:function(r){return Z(r)>=128?"black":"white"},gradient:function(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=[],n=e-((r=j(r)).length-1),a=n,o=1,g=r.length;o<g;o++){var i=r[o-1][0],b=r[o][0],f=1==o?r[o][1]:r[o][1]-r[o-1][1],l=o==r.length-1?a:Math.floor(f*n);t=t.concat(z([i,b],l),[b]),a-=l}return t},scaleHSV:_,scaleH:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:360;return _(r,"h",e,t,n,a,1)},scaleS:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return _(r,"s",e,t,n,a,100)},scaleV:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return _(r,"v",e,t,n,a,100)},random:F,randomRGBA:function(){return a({r:N(0,255),g:N(0,255),b:N(0,255),a:N(0,1e3)/1e3})},randomByCount:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=[],t=0;t<r;t++)e[e.length]=F();return e}};function U(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function $(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?U(Object(t),!0).forEach((function(e){T(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function T(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}const J=$($($($($($($($($($({},g),b),K),k),Y),C),{CMYKtoRGB:function(r,e,t,n){if(1==arguments.length){var a=arguments[0];r=a.c,e=a.m,t=a.y,n=a.k}var o=255*(1-r)*(1-n),g=255*(1-e)*(1-n),i=255*(1-t)*(1-n);return{r:o,g,b:i}}}),L),s),I);function Q(r){return null==r}function W(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function rr(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?W(Object(t),!0).forEach((function(e){er(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function er(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var tr=[rr({rgb:"#ff0000",start:0},J.parse("#ff0000")),rr({rgb:"#ffff00",start:.17},J.parse("#ffff00")),rr({rgb:"#00ff00",start:.33},J.parse("#00ff00")),rr({rgb:"#00ffff",start:.5},J.parse("#00ffff")),rr({rgb:"#0000ff",start:.67},J.parse("#0000ff")),rr({rgb:"#ff00ff",start:.83},J.parse("#ff00ff")),rr({rgb:"#ff0000",start:1},J.parse("#ff0000"))];function nr(r){for(var e,t,n=0;n<tr.length;n++)if(tr[n].start>=r){e=tr[n-1],t=tr[n];break}return e&&t?J.mix(e.rgb,t.rgb,(r-e.start)/(t.start-e.start)):tr[0].rgb}const ar={colors:tr,checkHueColor:nr,getHueScale:function(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t=arguments.length>2?arguments[2]:void 0,n=Q(t)?r-e:e,a=Q(t)?r+scale:t,o=[],g=0;g<tr.length;g++){var i=tr[g];n<=i.start&&i.start<a?o.push({rgb:i.rgb,start:i.start}):tr[g+1]&&i.start<n&&n<tr[g+1].start?o.push({rgb:nr(n),start:n}):tr[g-1]&&tr[g-1].start<a&&a<i.start?o.push({rgb:nr(a),start:a}):i.start<n||i.start>a||o.push({rgb:i.rgb,start:i.start})}return o}};function or(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function gr(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?or(Object(t),!0).forEach((function(e){ir(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):or(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function ir(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}const br=gr(gr(gr({},J),ar),l);return e.default})()}));

/***/ }),

/***/ 121:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(532);
var regenerator = __webpack_require__(625);
var regeneratorAsync = __webpack_require__(37);
var regeneratorAsyncGen = __webpack_require__(7);
var regeneratorAsyncIterator = __webpack_require__(775);
var regeneratorKeys = __webpack_require__(93);
var regeneratorValues = __webpack_require__(419);
function _regeneratorRuntime() {
  "use strict";

  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && o.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys,
      values: regeneratorValues
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(121)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 419:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(906)["default"]);
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 532:
/***/ (function(module) {

function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var regeneratorDefine = __webpack_require__(978);
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
    return this;
  }), regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 775:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var OverloadYield = __webpack_require__(532);
var regeneratorDefine = __webpack_require__(978);
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 906:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 978:
/***/ (function(module) {

function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ColorPicker: function() { return /* reexport */ entry; },
  GradientPicker: function() { return /* binding */ src_GradientPicker; },
  "default": function() { return /* binding */ src; }
});

;// ./src/styles/injectStyles.js
var STYLE_ID = 'easylogic-colorpicker-styles';
var STYLE_TEXT = ".el-colorpicker{--color-bg:var(--cp-color-bg,#fff);--color-fill:var(--cp-color-fill,#222);--color-key:var(--cp-color-key,#30a2ff);--color-blur:var(--cp-color-blur,#888);--color-pointer-fill:var(--cp-color-pointer-fill,#fff);--size-width:var(--cp-size-width,240px);--size-radius:var(--cp-size-radius,2px);--size-side-padding:var(--cp-size-side-padding,16px);--size-inner-padding:var(--cp-size-inner-padding,10px);--size-pointer:var(--cp-size-pointer,12px);--size-pointer-stroke:var(--cp-size-pointer-stroke,3px);--palette-width:var(--cp-palette-width,100%);--palette-height:var(--cp-palette-height,150px);--slider-height:var(--cp-slider-height,8px);--slider-radius:var(--cp-slider-radius,4px);--slider-stroke-color:var(--cp-slider-stroke-color,rgba(0,0,0,.15));--preview-size:var(--cp-preview-size,36px);--preview-radius:var(--cp-preview-radius,50%);--preview-stroke-color:var(--cp-preview-stroke-color,rgba(0,0,0,.15));--form-bg:var(--cp-form-bg,#fff);--form-border-color:var(--cp-form-border-color,#ddd);--swatch-column:var(--cp-swatch-column,7);--swatch-gap:var(--cp-swatch-gap,8px);--swatch-item-size:var(--cp-swatch-item-size,22px);--swatch-item-stroke-radius:var(--cp-swatch-item-stroke-radius,50%);--swatch-item-stroke-color:var(--cp-swatch-item-stroke-color,rgba(0,0,0,.15));--swatch-border-color:var(--cp-swatch-border-color,#ddd);--shadow-outer:var(--cp-shadow-outer,0 0 10px 2px rgba(0,0,0,.12),inset 0 0 0 1px rgba(0,0,0,.15));--shadow-pointer:var(--cp-shadow-pointer,0 0 2px 1px rgba(0,0,0,.5),inset 0 0 3px 0 rgba(0,0,0,.5));--shadow-pointer-active:var(--cp-shadow-pointer-active,inset 0 0 0 1px var(--color-key),0 0 3px 1px var(--color-key));--speed-focus:var(--cp-speed-focus,200ms);border-radius:var(--size-radius);box-sizing:border-box;color:var(--color-fill);position:relative;user-select:none;-webkit-user-select:none;width:100%}.el-colorpicker:after{border-radius:var(--size-radius);bottom:0;box-shadow:var(--shadow-outer);content:\"\";display:block;left:0;pointer-events:none;position:absolute;right:0;top:0}.el-colorpicker,.el-colorpicker button,.el-colorpicker input{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.25}.el-gradientpicker{--gradientpicker-border-color:var(--cp-gradientpicker-border-color,#ddd);--range-thumb-width:var(--cp-range-thumb-width,10px);--range-thumb-height:var(--cp-range-thumb-height,10px);--range-thumb-color:var(--cp-range-thumb-color,#556375)}.el-cp-slider{box-sizing:border-box;position:relative}.el-cp-slider:active .el-cp-slider__circle{box-shadow:var(--shadow-pointer-active)}.el-cp-slider__body{border-radius:var(--slider-radius,4px);box-sizing:border-box;cursor:default;height:var(--slider-height,8px);margin:0;position:relative}.el-cp-slider__body:after{bottom:0;box-shadow:inset 0 0 0 1px var(--slider-stroke-color);content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:1}.el-cp-slider__bar,.el-cp-slider__body:after{border-radius:var(--slider-radius,4px);display:block}.el-cp-slider__bar{height:100%}.el-cp-slider__circle{border-radius:50%}.el-cp-slider__brick,.el-cp-slider__circle{border:var(--size-pointer-stroke,3px) solid var(--color-pointer-fill,#fff);box-shadow:var(--shadow-pointer);box-sizing:border-box;height:var(--size-pointer,12px);left:0;position:absolute;top:50%;transform:translate(-50%,-50%);transition:box-shadow var(--speed-focus) ease-out;width:var(--size-pointer,12px);z-index:2}.el-cp-slider__brick{border-radius:2px}.el-cp-slider--hue .el-cp-slider__body{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.el-cp-slider--alpha .el-cp-slider__body{background-color:transparent;background-image:linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);background-position:0 0,0 5px,5px -5px,-5px 0;background-size:10px 10px}.el-cp-slider--brightness .el-cp-slider__body{background-image:linear-gradient(90deg,#000 0,hsla(0,0%,100%,0))}.el-cp-slider--vertical .el-cp-slider__body{height:100%}.el-cp-slider--vertical .el-cp-slider__brick,.el-cp-slider--vertical .el-cp-slider__circle{left:50%;top:0}.el-cp-slider--vertical .el-cp-slider__brick{height:10px;width:100%}.el-cp-slider--vertical.el-cp-slider--hue .el-cp-slider__body{background:linear-gradient(180deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.el-cp-palette{background-color:var(--palette-bg,#eee);box-sizing:border-box;cursor:default;height:var(--palette-height,150px);position:relative;width:var(--palette-width,100%)}.el-cp-palette:after,.el-cp-palette:before{bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0}.el-cp-palette:before{background-color:hsla(20,42%,65%,0);background-image:linear-gradient(90deg,#fff,hsla(20,42%,65%,0));background-repeat:repeat-x}.el-cp-palette:after{background-image:linear-gradient(0deg,#000,hsla(20,42%,65%,0))}.el-cp-palette:active .el-cp-palette__pointer{box-shadow:var(--shadow-pointer-active)}.el-cp-palette__pointer{border:var(--size-pointer-stroke) solid var(--color-pointer-fill);border-radius:50%;box-shadow:var(--shadow-pointer);box-sizing:border-box;display:block;height:var(--size-pointer);position:absolute;transform:translate(-50%,-50%);width:var(--size-pointer);z-index:2}.el-cp-color-form{border:none;margin:0;padding:0}.el-cp-color-form legend{font-size:0}.el-cp-color-form__wrap{display:flex;margin:0}.el-cp-color-form.hex .el-cp-color-field:first-child,.el-cp-color-form.hsl .el-cp-color-field:nth-child(3),.el-cp-color-form.rgb .el-cp-color-field:nth-child(2){display:flex}.el-cp-color-field{display:none;flex:1;gap:4px}.el-cp-color-field label{display:block;flex:1;text-align:center}.el-cp-color-field input{-moz-appearance:textfield;background:var(--form-bg);border:none;border-radius:2px;box-shadow:inset 0 0 0 1px var(--form-border-color);box-sizing:border-box;color:var(--color-fill);display:block;font-size:12px;font-weight:500;height:24px;margin:0;outline:none;padding:0;text-align:center;transition:box-shadow var(--speed-focus) ease-out;width:100%}.el-cp-color-field input:focus{box-shadow:inset 0 1px 5px 0 var(--form-border-color),inset 0 0 0 1px var(--form-border-color),0 0 0 2px var(--color-key)}.el-cp-color-field input::-webkit-inner-spin-button,.el-cp-color-field input::-webkit-outer-spin-button{-webkit-appearance:none}.el-cp-color-field span{color:var(--color-blur);display:block;font-size:10px;line-height:1.15;margin:4px 0 0}.el-cp-color-nav{margin-left:var(--size-inner-padding)}.el-cp-color-nav__label{-webkit-tap-highlight-color:rgba(0,0,0,0);background:none;border:none;border-radius:2px;height:24px;margin:0;padding:0;position:relative;transition:box-shadow var(--speed-focus) ease-out;width:36px}.el-cp-color-nav__label,.el-cp-color-nav__label select{box-sizing:border-box;cursor:pointer;display:block;outline:none}.el-cp-color-nav__label select{appearance:none;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.el-cp-color-nav__label svg{stroke-width:1.5px;color:var(--color-fill);display:block;height:100%;margin:0 auto;transform-origin:50% 50%;transition:transform var(--speed-focus) ease-out;width:20px}.el-cp-color-nav__label:focus-within{box-shadow:0 0 0 2px var(--color-key)}.el-cp-color-nav__label:active svg{transform:rotate(90deg)}.el-cp-color-preview{background-color:transparent;background-image:linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);background-position:0 0,0 8px,8px -8px,-8px 0;background-size:16px 16px;box-sizing:border-box;height:var(--preview-size);overflow:hidden;position:relative;width:var(--preview-size)}.el-cp-color-preview,.el-cp-color-preview:after{border-radius:var(--preview-radius);display:block}.el-cp-color-preview:after{bottom:0;box-shadow:inset 0 0 0 1px var(--preview-stroke-color);content:\"\";left:0;pointer-events:none;position:absolute;right:0;top:0}.el-cp-color-preview em{display:block;height:100%;position:relative}.el-cp-palette-ring{box-sizing:border-box;display:flex;justify-content:center}.el-cp-palette-ring__wrap{margin:0 auto;position:relative}.el-cp-palette-ring__canvas{border-radius:50%;display:block;margin:0 auto;overflow:hidden}.el-cp-palette-ring__pointer{border:var(--size-pointer-stroke) solid var(--color-pointer-fill);border-radius:50%;box-shadow:var(--shadow-pointer);box-sizing:border-box;display:block;height:var(--size-pointer);left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:var(--size-pointer);z-index:2}.el-cp-palette-ring:active .el-cp-palette-ring__pointer{box-shadow:var(--shadow-pointer-active)}.el-cp-palette-circle{box-sizing:border-box;display:flex;justify-content:center}.el-cp-palette-circle__wrap{position:relative}.el-cp-palette-circle__canvas{border-radius:50%;display:block;overflow:hidden}.el-cp-palette-circle__brightness{border-radius:50%;box-sizing:border-box;display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.el-cp-palette-circle__pointer{border:var(--size-pointer-stroke) solid var(--color-pointer-fill);border-radius:50%;box-shadow:var(--shadow-pointer);box-sizing:border-box;display:block;height:var(--size-pointer);left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:var(--size-pointer);z-index:2}.el-cp-palette-circle:active .el-cp-palette-circle__pointer{box-shadow:var(--shadow-pointer-active)}.el-cp-color-eyedropper button{background:none;border:none;border-radius:var(--size-radius);box-sizing:border-box;cursor:pointer;display:block;font-size:0;height:30px;margin:-4px;outline:none;padding:0;transition:box-shadow var(--speed-focus) ease-out,opacity var(--speed-focus) ease-out;width:30px}.el-cp-color-eyedropper button:focus-visible{box-shadow:0 0 0 2px var(--color-key)}.el-cp-color-eyedropper button:active{opacity:.5}.el-cp-color-eyedropper svg{color:var(--color-fill);display:block;margin:0 auto}.el-cp-swatches__header{align-items:center;display:flex;margin:0 0 16px}.el-cp-swatches__header h2{cursor:auto;flex:1;font-size:12px;font-weight:600;line-height:1.15;margin:0}.el-cp-colors{display:grid;gap:var(--swatch-gap,10px);grid-template-columns:repeat(var(--swatch-column,5),1fr);list-style:none;margin:0;padding:0}.el-cp-colors>li button{border:none;border-radius:var(--swatch-item-stroke-radius);box-sizing:border-box;cursor:pointer;display:block;font-size:0;height:var(--swatch-item-size,20px);margin:0 auto;outline:none;padding:0;transition:box-shadow var(--speed-focus) ease-out;width:var(--swatch-item-size,20px)}.el-cp-colors>li button:active{opacity:.5}.el-cp-colors__item{background-color:transparent;background-image:linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);background-position:0 0,0 6px,6px -6px,-6px 0;background-size:12px 12px;position:relative}.el-cp-colors__item:after,.el-cp-colors__item:before{border-radius:var(--swatch-item-stroke-radius);bottom:0;content:\"\";display:block;left:0;position:absolute;right:0;top:0}.el-cp-colors__item:before{background-color:var(--color)}.el-cp-colors__item:after{box-shadow:inset 0 0 0 1px var(--swatch-item-stroke-color)}.el-cp-colors__item:disabled,.el-cp-colors__item:focus{box-shadow:0 0 0 2px var(--color-key)}.el-colorpicker--default .el-colorpicker__wrap{padding:0 0 16px;position:relative}.el-colorpicker--default .el-cp-palette,.el-colorpicker--default .el-cp-palette:after,.el-colorpicker--default .el-cp-palette:before{border-radius:5px}.el-colorpicker--default .el-cp-color-control{align-items:center;display:flex;margin:16px 0 0;padding:0 var(--size-side-padding);user-select:none}.el-colorpicker--default .el-cp-color-control__left{margin-right:var(--size-inner-padding,16px)}.el-colorpicker--default .el-cp-color-control__body{flex:1}.el-colorpicker--default .el-cp-color-control__body>:nth-child(n+2){margin-top:8px}.el-colorpicker--default .el-cp-color-control__right{margin-left:var(--size-inner-padding,16px)}.el-colorpicker--default .el-cp-color-form{margin:16px 0 0;padding:0 var(--size-side-padding)}.el-colorpicker--default .el-cp-swatches{border-top:1px solid var(--swatch-border-color);margin:16px 0 0;padding:16px var(--size-side-padding) 0}.el-colorpicker--ring .el-colorpicker__wrap{padding:20px 0 16px}.el-colorpicker--ring .el-colorpicker__body{height:var(--height);margin:0 auto 16px;padding:20px;position:relative;width:var(--width)}.el-colorpicker--ring .el-cp-palette-ring{height:var(--height);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--width)}.el-colorpicker--ring .el-cp-palette{height:calc(var(--height) - var(--thickness)*2 - 30%);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:calc(var(--width) - var(--thickness)*2 - 30%);z-index:3}.el-colorpicker--ring .el-cp-color-control{align-items:center;display:flex;margin:0;padding:0 var(--size-side-padding);user-select:none}.el-colorpicker--ring .el-cp-color-control__left{margin-right:var(--size-inner-padding,16px)}.el-colorpicker--ring .el-cp-color-control__body{flex:1}.el-colorpicker--ring .el-cp-color-control__body>:nth-child(n+2){margin-top:8px}.el-colorpicker--ring .el-cp-color-control__right{margin-left:var(--size-side-padding,16px)}.el-colorpicker--ring .el-cp-color-form{margin:16px 0 0;padding:0 var(--size-side-padding)}.el-colorpicker--ring .el-cp-swatches{border-top:1px solid var(--swatch-border-color);margin:16px 0 0;padding:16px var(--size-side-padding) 0}.el-colorpicker--mini{--control-width:40px}.el-colorpicker--mini .el-colorpicker__wrap{position:relative}.el-colorpicker--mini .el-colorpicker__body{padding-right:var(--control-width);position:relative}.el-colorpicker--mini .el-colorpicker__palette{padding-top:100%;position:relative}.el-colorpicker--mini .el-cp-palette{--palette-width:100%;--palette-height:100%;bottom:0;left:0;position:absolute;right:0;top:0}.el-colorpicker--mini .el-cp-palette,.el-colorpicker--mini .el-cp-palette:after,.el-colorpicker--mini .el-cp-palette:before{border-bottom-left-radius:var(--size-radius);border-top-left-radius:var(--size-radius)}.el-colorpicker--mini .el-cp-color-control{--slider-radius:0;bottom:0;display:flex;position:absolute;right:0;top:0;width:var(--control-width)}.el-colorpicker--mini .el-cp-color-control>*{flex:1}.el-colorpicker--mini .el-cp-color-control>:last-child .el-cp-slider__body:after{border-bottom-right-radius:var(--size-radius);border-top-right-radius:var(--size-radius)}.el-colorpicker--mini .el-cp-swatches{margin:0;padding:16px var(--size-side-padding) 16px}.el-colorpicker--circle .el-colorpicker__wrap{padding:0 0 16px;position:relative}.el-colorpicker--circle .el-cp-palette-circle{padding:20px}.el-colorpicker--circle .el-cp-color-control{align-items:center;display:flex;margin:0;padding:0 var(--size-side-padding);user-select:none}.el-colorpicker--circle .el-cp-color-control__left{margin-right:var(--size-inner-padding,16px)}.el-colorpicker--circle .el-cp-color-control__body{flex:1}.el-colorpicker--circle .el-cp-color-control__body>:nth-child(n+2){margin-top:8px}.el-colorpicker--circle .el-cp-color-control__right{margin-left:var(--size-side-padding,16px)}.el-colorpicker--circle .el-cp-color-form{margin:16px 0 0;padding:0 var(--size-side-padding)}.el-colorpicker--circle .el-cp-swatches{border-top:1px solid var(--swatch-border-color);margin:16px 0 0;padding:16px var(--size-side-padding) 0}.el-colorpicker--none .el-colorpicker__wrap{padding:16px;position:relative}.el-colorpicker--none .el-colorpicker__empty{align-items:center;color:var(--color-blur);display:flex;font-size:12px;height:65px;justify-content:center;letter-spacing:-.25px}.gradient-editor{position:relative;user-select:none}.gradient-editor .unit{grid-column-gap:2px;display:grid;font-size:11px;grid-template-columns:70px 50px 50px}.gradient-editor [data-editor]{display:none;margin-top:6px}.gradient-editor [data-editor]>label{font-size:11px}.gradient-editor:not([data-selected-editor*=static-gradient]) [data-editor=gradient],.gradient-editor:not([data-selected-editor*=static-gradient]) [data-editor=tools],.gradient-editor[data-selected-editor=conic-gradient] [data-editor=angle],.gradient-editor[data-selected-editor=conic-gradient] [data-editor=centerX],.gradient-editor[data-selected-editor=conic-gradient] [data-editor=centerY],.gradient-editor[data-selected-editor=linear-gradient] [data-editor=angle],.gradient-editor[data-selected-editor=radial-gradient] [data-editor=centerX],.gradient-editor[data-selected-editor=radial-gradient] [data-editor=centerY],.gradient-editor[data-selected-editor=radial-gradient] [data-editor=radialType],.gradient-editor[data-selected-editor=repeating-conic-gradient] [data-editor=angle],.gradient-editor[data-selected-editor=repeating-conic-gradient] [data-editor=centerX],.gradient-editor[data-selected-editor=repeating-conic-gradient] [data-editor=centerY],.gradient-editor[data-selected-editor=repeating-linear-gradient] [data-editor=angle],.gradient-editor[data-selected-editor=repeating-radial-gradient] [data-editor=centerX],.gradient-editor[data-selected-editor=repeating-radial-gradient] [data-editor=centerY],.gradient-editor[data-selected-editor=repeating-radial-gradient] [data-editor=radialType]{display:block}.gradient-editor[data-selected-editor=radial-gradient] [data-editor=radialType] select,.gradient-editor[data-selected-editor=repeating-radial-gradient] [data-editor=radialType] select{border:none;border-bottom:1px solid #000;font-size:12px;padding:5px 0;width:170px}.gradient-editor .sub-editor{padding:0 8px 10px}.gradient-editor .sub-editor>div{grid-template-columns:50px 1fr}.gradient-editor .gradient-steps{height:30px;position:relative}.gradient-editor .hue,.gradient-editor .hue-container{background-color:transparent;background-image:linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);background-position:0 0,0 5px,5px -5px,-5px 0;background-size:10px 10px;border:1px solid var(--gradientpicker-border-color);border-radius:10px;box-sizing:border-box;height:15px;left:8px;pointer-events:all;position:absolute;right:8px}.gradient-editor .hue{pointer-events:none}.gradient-editor .hue .step-list{border-radius:10px;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.gradient-editor .hue .step-list[data-selected-index=\"0\"] [data-index=\"0\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"0\"] [data-index=\"0\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"1\"] [data-index=\"1\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"1\"] [data-index=\"1\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"2\"] [data-index=\"2\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"2\"] [data-index=\"2\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"3\"] [data-index=\"3\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"3\"] [data-index=\"3\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"4\"] [data-index=\"4\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"4\"] [data-index=\"4\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"5\"] [data-index=\"5\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"5\"] [data-index=\"5\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"6\"] [data-index=\"6\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"6\"] [data-index=\"6\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"7\"] [data-index=\"7\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"7\"] [data-index=\"7\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"8\"] [data-index=\"8\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"8\"] [data-index=\"8\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"9\"] [data-index=\"9\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"9\"] [data-index=\"9\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"10\"] [data-index=\"10\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"10\"] [data-index=\"10\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"11\"] [data-index=\"11\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"11\"] [data-index=\"11\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"12\"] [data-index=\"12\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"12\"] [data-index=\"12\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"13\"] [data-index=\"13\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"13\"] [data-index=\"13\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"14\"] [data-index=\"14\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"14\"] [data-index=\"14\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"15\"] [data-index=\"15\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"15\"] [data-index=\"15\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"16\"] [data-index=\"16\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"16\"] [data-index=\"16\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"17\"] [data-index=\"17\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"17\"] [data-index=\"17\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"18\"] [data-index=\"18\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"18\"] [data-index=\"18\"] .arrow{display:block}.gradient-editor .hue .step-list[data-selected-index=\"19\"] [data-index=\"19\"]{border:0;transform:translateX(-50%) translateY(70%)}.gradient-editor .hue .step-list[data-selected-index=\"19\"] [data-index=\"19\"] .arrow{display:block}.gradient-editor .hue .step-list .step{border:1px solid #fff;border-radius:100%;box-shadow:0 0 2px 0 rgba(0,0,0,.5);box-sizing:border-box;display:inline-block;height:15px;pointer-events:all;position:absolute;top:50%;width:15px}.gradient-editor .hue .step-list .step[data-cut=true],.gradient-editor .hue .step-list .step[data-cut=true] .color-view{border-radius:0}.gradient-editor .hue .step-list .step{background-color:transparent;background-image:linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);background-position:0 0,0 5px,5px -5px,-5px 0;background-size:10px 10px;transform:translateX(-50%) translateY(-50%)}.gradient-editor .hue .step-list .step .color-view{border-radius:100%;bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:0}.gradient-editor .hue .step-list .step .arrow{clip-path:polygon(40% 0,60% 0,60% 100%,40% 100%);display:none;height:5px;left:50%;pointer-events:none;position:absolute;top:0;transform:translateX(-50%) translateY(-120%);width:5px}.gradient-editor input[type=range]{appearance:none;background-color:transparent;margin:6.2px 0;width:100%}.gradient-editor input[type=range]:focus{outline:none}.gradient-editor input[type=range]::-webkit-slider-runnable-track{background:var(--range-thumb-color);border:0 solid #010101;border-radius:0;cursor:pointer;height:1px;width:100%}.gradient-editor input[type=range]::-webkit-slider-thumb{appearance:none;background:var(--range-thumb-color);border-radius:10px;cursor:pointer;height:var(--range-thumb-width);margin-top:-5px;width:var(--range-thumb-width)}.gradient-editor input[type=range]:focus::-webkit-slider-runnable-track{background:#3174ad}.gradient-editor input[type=range]::-moz-range-track{background:var(--range-thumb-color);border:0 solid #010101;border-radius:0;cursor:pointer;height:1px;width:100%}.gradient-editor input[type=range]::-moz-range-thumb{background:var(--range-thumb-color);border:1px solid #000;border-radius:9px;cursor:pointer;height:var(--range-thumb-width);width:var(--range-thumb-height)}.gradient-editor input[type=range]::-ms-track{background:transparent;border-color:transparent;color:transparent;cursor:pointer;height:1px;width:100%}.gradient-editor input[type=range]::-ms-fill-lower{box-shadow:0 0 0 #000,0 0 0 #0d0d0d}.gradient-editor input[type=range]::-ms-fill-lower,.gradient-editor input[type=range]::-ms-fill-upper{background:var(--range-thumb-color);border:0 solid #010101;border-radius:0}.gradient-editor input[type=range]::-ms-thumb{background:var(--range-thumb-color);border-radius:9px;cursor:pointer;height:var(--range-thumb-width);width:var(--range-thumb-height)}.gradient-editor input[type=range]:focus::-ms-fill-lower,.gradient-editor input[type=range]:focus::-ms-fill-upper{background:var(--range-thumb-color)}.gradient-editor .right-menu{display:inline-block;float:right}.gradient-editor .right-menu button{background-color:transparent;border:0;border-radius:4px;font-size:11px;height:20px;text-align:center;vertical-align:middle;width:20px}.gradient-editor .right-menu button:hover{background-color:var(--gradientpicker-border-color)}.text-input{border:none;border-bottom:1px solid #444;border-radius:0;font-size:13px}.select{border:none}.field{background-color:#fff;border-radius:5px;margin-bottom:5px;padding:9px}.field .text-input{margin-right:5px;width:50px}.field__label{font-size:13px}.field__top-row{align-items:center;display:flex;justify-content:space-between}.connect{display:flex;gap:10px}.remove-color{border:none;border-radius:50%;cursor:pointer;font-size:18px;height:30px;padding-bottom:3px;text-align:center;width:30px}.gradient-picker{background-color:#f5f5f5;border-radius:5px;box-sizing:border-box;width:250px}.gradient-picker .gradient-body{display:grid;grid-template-columns:1fr 224px}.gradient-picker .gradient-body>div:first-child{border-right:1px solid var(--gradientpicker-border-color);padding:5px}.gradient-picker .popup-item{margin-bottom:5px}.gradient-picker .grid-2{display:grid;grid-template-columns:60px 1fr}.gradient-picker .grid-2 label{font-size:11px;padding-right:2px;text-align:left}.gradient-picker .gradient-preview{background-color:transparent;background-image:linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);background-position:0 0,0 5px,5px -5px,-5px 0;background-size:10px 10px;border-radius:5px;height:150px;overflow:hidden;position:relative;width:100%}.gradient-picker .gradient-preview .gradient-view{bottom:0;left:0;position:absolute;right:0;top:0}.gradient-picker .picker-tab{margin-top:4px;user-select:none}.gradient-picker .picker-tab .picker-tab-list{padding:2px 0;text-align:center}.gradient-picker .picker-tab .picker-tab-list[data-value=linear-gradient] .picker-tab-item[data-selected-value=linear-gradient]{box-shadow:0 0 3px 0 rgba(0,0,0,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=linear-gradient] .picker-tab-item[data-selected-value=linear-gradient] .icon svg path{fill:rgba(0,0,255,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=repeating-linear-gradient] .picker-tab-item[data-selected-value=repeating-linear-gradient]{box-shadow:0 0 3px 0 rgba(0,0,0,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=repeating-linear-gradient] .picker-tab-item[data-selected-value=repeating-linear-gradient] .icon svg path{fill:rgba(0,0,255,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=radial-gradient] .picker-tab-item[data-selected-value=radial-gradient]{box-shadow:0 0 3px 0 rgba(0,0,0,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=radial-gradient] .picker-tab-item[data-selected-value=radial-gradient] .icon svg path{fill:rgba(0,0,255,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=repeating-radial-gradient] .picker-tab-item[data-selected-value=repeating-radial-gradient]{box-shadow:0 0 3px 0 rgba(0,0,0,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=repeating-radial-gradient] .picker-tab-item[data-selected-value=repeating-radial-gradient] .icon svg path{fill:rgba(0,0,255,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=conic-gradient] .picker-tab-item[data-selected-value=conic-gradient]{box-shadow:0 0 3px 0 rgba(0,0,0,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=conic-gradient] .picker-tab-item[data-selected-value=conic-gradient] .icon svg path{fill:rgba(0,0,255,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=repeating-conic-gradient] .picker-tab-item[data-selected-value=repeating-conic-gradient]{box-shadow:0 0 3px 0 rgba(0,0,0,.5)}.gradient-picker .picker-tab .picker-tab-list[data-value=repeating-conic-gradient] .picker-tab-item[data-selected-value=repeating-conic-gradient] .icon svg path{fill:rgba(0,0,255,.5)}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item{border-radius:20%;box-sizing:border-box;cursor:pointer;display:inline-block;height:35px;position:relative;vertical-align:middle;width:35px}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item .icon{border-radius:100%;display:inline-block;height:90%;left:50%;pointer-events:none;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%);width:90%}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item .icon svg{height:100%;width:100%}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item[data-selected-value=static-gradient] .icon{background-image:linear-gradient(90deg,red,red)}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item[data-selected-value=linear-gradient] .icon{background-image:linear-gradient(90deg,#000,gray)}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item[data-selected-value=radial-gradient] .icon{background-image:radial-gradient(closest-side,#000,#ebf8e1,gray)}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item[data-selected-value=conic-gradient] .icon{background-image:conic-gradient(#000,#ebf8e1)}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item[data-selected-value=repeating-linear-gradient] .icon{background-image:repeating-linear-gradient(45deg,#3f87a6,#ebf8e1 15%,#f69d3c 20%)}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item[data-selected-value=repeating-radial-gradient] .icon{background-image:repeating-radial-gradient(circle,#3f87a6,#ebf8e1 15%,#f69d3c 20%)}.gradient-picker .picker-tab .picker-tab-list .picker-tab-item[data-selected-value=repeating-conic-gradient] .icon{background-image:repeating-conic-gradient(#3f87a6,#ebf8e1 5%,#f69d3c 10%)}.gradient-picker .picker-tab .picker-gradient-selector{padding:2px 10px}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps{display:block;height:30px;position:relative}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue-container{background-color:transparent;background-image:linear-gradient(45deg,#ccc 25%,transparent 0),linear-gradient(-45deg,#ccc 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ccc 0),linear-gradient(-45deg,transparent 75%,#ccc 0);background-position:0 0,0 5px,5px -5px,-5px 0;background-size:10px 10px;box-shadow:0 0 1px 0 rgba(0,0,0,.1);height:14px;position:absolute;width:100%;z-index:0}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue{cursor:pointer;margin:0;padding:0;position:relative}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue>.step-list{cursor:copy;height:14px;position:relative;width:100%;z-index:1}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue>.step-list.mode-drag{cursor:pointer}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue .drag-bar{background-color:hsla(0,0%,100%,.8);border:2px solid #fff;border-radius:50%;box-shadow:0 0 2px 0 rgba(0,0,0,.6);cursor:pointer;display:inline-block;height:10px;left:0;position:absolute;top:17px;transform:translateX(-50%);transition:top .3s ease-out;width:10px}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue .drag-bar .guide-line{bottom:8px;height:0;left:3px;pointer-events:none;position:absolute;transform:translateX(-1px);transition:all .3s ease-out;width:1px}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue .drag-bar.selected{top:30px;z-index:1}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue .drag-bar.selected .guide-line{height:17px}.gradient-picker .picker-tab .picker-gradient-selector .gradient-steps .hue .drag-bar.selected .guide-change{opacity:1}.gradient-picker .el-colorpicker{--shadow-outer:none;--size-radius:0}";
function ensureColorPickerStyles() {
  var targetDocument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document !== 'undefined' ? document : undefined;
  if (!targetDocument) {
    return;
  }
  if (targetDocument.getElementById(STYLE_ID)) {
    return;
  }
  var style = targetDocument.createElement('style');
  style.id = STYLE_ID;
  style.textContent = STYLE_TEXT;
  targetDocument.head.appendChild(style);
  return style;
}
if (typeof document !== 'undefined') {
  ensureColorPickerStyles(document);
}
/* harmony default export */ var injectStyles = (ensureColorPickerStyles);
;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/get.js

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

;// ./src/util/Dom.js



var counter = 0;
var cached = [];
var Dom = /*#__PURE__*/function () {
  function Dom(tag, className, attr) {
    _classCallCheck(this, Dom);
    if (typeof tag !== 'string') {
      this.el = tag;
    } else {
      var el = document.createElement(tag);
      this.uniqId = counter++;
      if (className) el.className = className;
      attr = attr || {};
      for (var k in attr) {
        el.setAttribute(k, attr[k]);
      }
      this.el = el;
    }
  }
  return _createClass(Dom, [{
    key: "attr",
    value: function attr(key, value) {
      if (arguments.length === 1) {
        return this.el.getAttribute(key);
      }
      this.el.setAttribute(key, value);
      return this;
    }
  }, {
    key: "html",
    value: function html(_html) {
      try {
        if (typeof _html === 'string') {
          this.el.innerHTML = _html;
        } else {
          this.empty().append(_html);
        }
      } catch (e) {}
      return this;
    }
  }, {
    key: "find",
    value: function find(selector) {
      return this.el.querySelector(selector);
    }
  }, {
    key: "$",
    value: function $(selector) {
      return new Dom(this.find(selector));
    }
  }, {
    key: "findAll",
    value: function findAll(selector) {
      return this.el.querySelectorAll(selector);
    }
  }, {
    key: "$$",
    value: function $$(selector) {
      return _toConsumableArray(this.findAll(selector)).map(function (el) {
        return new Dom(el);
      });
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.html('');
    }
  }, {
    key: "append",
    value: function append(el) {
      if (typeof el === 'string') {
        this.el.appendChild(document.createTextNode(el));
      } else {
        this.el.appendChild(el.el || el);
      }
      return this;
    }
  }, {
    key: "appendTo",
    value: function appendTo(target) {
      var t = target.el ? target.el : target;
      t.appendChild(this.el);
      return this;
    }
  }, {
    key: "css",
    value: function css(key, value) {
      var _this = this;
      if (arguments.length === 2) {
        this.el.style[key] = value;
      } else if (arguments.length === 1) {
        if (typeof key === 'string') {
          return getComputedStyle(this.el)[key];
        } else {
          var keys = key || {};
          Object.keys(keys).forEach(function (k) {
            _this.el.style[k] = keys[k];
          });
        }
      }
      return this;
    }
  }, {
    key: "offset",
    value: function offset() {
      var rect = this.rect();
      return {
        top: rect.top + Dom.getScrollTop(),
        left: rect.left + Dom.getScrollLeft()
      };
    }
  }, {
    key: "position",
    value: function position() {
      if (this.el.style.top) {
        return {
          top: parseFloat(this.css('top')),
          left: parseFloat(this.css('left'))
        };
      } else {
        return this.rect();
      }
    }
  }, {
    key: "size",
    value: function size() {
      return [this.width(), this.height()];
    }
  }, {
    key: "rect",
    value: function rect() {
      return this.el.getBoundingClientRect();
    }
  }, {
    key: "width",
    value: function width() {
      return this.el.offsetWidth || this.rect().width;
    }
  }, {
    key: "height",
    value: function height() {
      return this.el.offsetHeight || this.rect().height;
    }
  }, {
    key: "dataKey",
    value: function dataKey(key) {
      return this.uniqId + '.' + key;
    }
  }, {
    key: "data",
    value: function data(key, value) {
      if (arguments.length === 2) {
        cached[this.dataKey(key)] = value;
      } else if (arguments.length === 1) {
        return cached[this.dataKey(key)];
      } else {
        var keys = Object.keys(cached);
        var uniqId = this.uniqId + '.';
        return keys.filter(function (key) {
          return key.indexOf(uniqId) === 0;
        }).map(function (value) {
          return cached[value];
        });
      }
      return this;
    }
  }, {
    key: "val",
    value: function val(value) {
      if (arguments.length === 0) {
        return this.el.value;
      } else if (arguments.length === 1) {
        this.el.value = value;
      }
      return this;
    }
  }, {
    key: "checked",
    value: function checked() {
      return this.el.checked;
    }
  }, {
    key: "int",
    value: function int() {
      return parseInt(this.val(), 10);
    }
  }, {
    key: "float",
    value: function float() {
      return parseFloat(this.val());
    }
  }, {
    key: "scrollTop",
    value: function scrollTop() {
      if (this.el === document.body) {
        return Dom.getScrollTop();
      }
      return this.el.scrollTop;
    }
  }, {
    key: "scrollLeft",
    value: function scrollLeft() {
      if (this.el === document.body) {
        return Dom.getScrollLeft();
      }
      return this.el.scrollLeft;
    }
  }, {
    key: "on",
    value: function on(eventName, callback, opt1, opt2) {
      this.el.addEventListener(eventName, callback, opt1, opt2);
      return this;
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      this.el.removeEventListener(eventName, callback);
      return this;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.el;
    }
  }, {
    key: "createChild",
    value: function createChild(tag) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var css = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var $element = new Dom(tag, className, attrs);
      $element.css(css);
      this.append($element);
      return $element;
    }
  }, {
    key: "firstChild",
    value: function firstChild() {
      return new Dom(this.el.firstElementChild);
    }
  }, {
    key: "replace",
    value: function replace(oldElement, newElement) {
      this.el.replaceChild(newElement, oldElement);
      return this;
    }
  }], [{
    key: "getScrollTop",
    value: function getScrollTop() {
      return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);
    }
  }]);
}();

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}

;// ./src/util/Event.js
/* harmony default export */ var Event = ({
  addEvent: function addEvent(dom, eventName, callback, options) {
    if (!dom) return;
    dom.addEventListener(eventName, callback, options);
  },
  removeEvent: function removeEvent(dom, eventName, callback) {
    if (!dom) return;
    dom.removeEventListener(eventName, callback);
  },
  pos: function pos(e) {
    if (e.touches && e.touches[0]) return e.touches[0];
    return e;
  },
  posXY: function posXY(e) {
    var pos = this.pos(e);
    return {
      x: pos.pageX,
      y: pos.pageY
    };
  }
});
;// ./src/util/State.js


var DELEGATE_SPLIT = '.';
var State = /*#__PURE__*/function () {
  function State(masterObj) {
    var settingObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, State);
    this.masterObj = masterObj;
    this.settingObj = settingObj;
  }
  return _createClass(State, [{
    key: "set",
    value: function set(key, value) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      this.settingObj[key] = value || defaultValue;
    }
  }, {
    key: "init",
    value: function init(key) {
      if (!this.has(key) || !this.settingObj[key]) {
        var arr = key.split(DELEGATE_SPLIT);
        var obj = this.masterObj.refs[arr[0]] || this.masterObj[arr[0]] || this.masterObj;
        var method = arr.pop();
        if (obj[method]) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var value = obj[method].apply(obj, args);
          this.set(key, value);
        }
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.init(key, defaultValue);
      return this.settingObj[key] || defaultValue;
    }
  }, {
    key: "has",
    value: function has(key) {
      return !!this.settingObj[key];
    }
  }]);
}();

;// ./src/util/EventMachine.js







var CHECK_EVENT_PATTERN = /^(click|mouse(down|up|move|enter|leave)|touch(start|move|end)|key(down|up|press)|contextmenu|change|input)/ig;
var CHECK_LOAD_PATTERN = /^load (.*)/ig;
var EVENT_SAPARATOR = ' ';
var META_KEYS = ['Control', 'Shift', 'Alt', 'Meta'];
var EventMachine = /*#__PURE__*/function () {
  function EventMachine() {
    _classCallCheck(this, EventMachine);
    this.state = new State(this);
    this.refs = {};
    this.childComponents = this.components();
  }

  /**
   * 자식으로 사용할 컴포넌트를 생성해준다.
   * 생성 시점에 $store 객체가 자동으로 공유된다.
   * 모든 데이타는 $store 기준으로 작성한다.
   */
  return _createClass(EventMachine, [{
    key: "newChildComponents",
    value: function newChildComponents() {
      var _this = this;
      var childKeys = Object.keys(this.childComponents);
      childKeys.forEach(function (key) {
        var Component = _this.childComponents[key];
        _this[key] = new Component(_this);
      });
    }

    /**
     * 부모가 정의한 template 과  그 안에서 동작하는 자식 컴포넌트들을 다 합쳐서
     * 최종 element 를 만들어준다.
     *
     * 그리고 자동으로 load 되어질게 있으면 로드 해준다.
     */
  }, {
    key: "render",
    value: function render($container) {
      // 1. 나의 template 을 만들어내고
      if (!this.template()) return;
      this.$el = this.template() ? this.parseTemplate(this.template()) : null;
      this.refs.$el = this.$el;
      if ($container) {
        $container.append(this.$el);
      }

      // 개별 객체 셋팅하고
      this.parseTarget();

      // 데이타 로드 하고
      this.load();
      this.afterRender();
    }
  }, {
    key: "afterRender",
    value: function afterRender() {}

    /**
     * 자식 컴포넌트로 사용될 객체 정의
     */
  }, {
    key: "components",
    value: function components() {
      return {};
    }

    /**
     * Class 기반으로 $el 을 생성하기 위해서
     * 선언형으로 html 템플릿을 정의한다.
     *
     * @param {any} html
     */
  }, {
    key: "parseTemplate",
    value: function parseTemplate(html) {
      var _this2 = this;
      var $el = new Dom('div').html(html).firstChild();

      // ref element 정리
      var refs = $el.findAll('[ref]');
      _toConsumableArray(refs).forEach(function (node) {
        var name = node.getAttribute('ref');
        _this2.refs[name] = new Dom(node);
      });
      return $el;
    }

    /**
     * target 으로 지정된 자식 컴포넌트를 대체해준다.
     */
  }, {
    key: "parseTarget",
    value: function parseTarget() {
      var _this3 = this;
      var $el = this.$el;
      var targets = $el.findAll('[target]');
      _toConsumableArray(targets).forEach(function (node) {
        var targetComponentName = node.getAttribute('target');
        var refName = node.getAttribute('ref') || targetComponentName;
        var Component = _this3.childComponents[targetComponentName];
        var instance = new Component(_this3);
        _this3[refName] = instance;
        _this3.refs[refName] = instance.$el;
        if (instance) {
          instance.render();
          var $parent = new Dom(node.parentNode);
          if (instance.$el) {
            $parent.replace(node, instance.$el.el);
          }
        }
      });
    }

    // `load function`이 정의된 객체는 load 를 실행해준다.
  }, {
    key: "load",
    value: function load() {
      var _this4 = this;
      this.filterProps(CHECK_LOAD_PATTERN).forEach(function (callbackName) {
        var elName = callbackName.split('load ')[1];
        if (_this4.refs[elName]) {
          _this4.refs[elName].html(_this4.parseTemplate(_this4[callbackName].call(_this4)));
        }
      });
    }

    // 기본 템플릿 지정
  }, {
    key: "template",
    value: function template() {
      return '<div></div>';
    }
  }, {
    key: "initialize",
    value: function initialize() {}

    /**
     * 이벤트를 초기화한다.
     */
  }, {
    key: "initializeEvent",
    value: function initializeEvent() {
      var _this5 = this;
      this.initializeEventMachine();
      // 자식 이벤트도 같이 초기화 한다.
      // 그래서 이 메소드는 부모에서 한번만 불려도 된다.
      Object.keys(this.childComponents).forEach(function (key) {
        if (_this5[key]) _this5[key].initializeEvent();
      });
    }

    /**
     * 자원을 해제한다.
     * 이것도 역시 자식 컴포넌트까지 제어하기 때문에 가장 최상위 부모에서 한번만 호출되도 된다.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;
      this.destroyEventMachine();
      // this.refs = {}

      Object.keys(this.childComponents).forEach(function (key) {
        if (_this6[key]) _this6[key].destroy();
      });
    }
  }, {
    key: "destroyEventMachine",
    value: function destroyEventMachine() {
      this.removeEventAll();
    }
  }, {
    key: "initializeEventMachine",
    value: function initializeEventMachine() {
      this.filterProps(CHECK_EVENT_PATTERN).forEach(this.parseEvent.bind(this));
    }

    /**
     * property 수집하기
     * 상위 클래스의 모든 property 를 수집해서 리턴한다.
     */
  }, {
    key: "collectProps",
    value: function collectProps() {
      if (!this.collapsedProps) {
        var p = this.__proto__;
        var results = [];
        do {
          results.push.apply(results, _toConsumableArray(Object.getOwnPropertyNames(p)));
          p = p.__proto__;
        } while (p);
        this.collapsedProps = results;
      }
      return this.collapsedProps;
    }
  }, {
    key: "filterProps",
    value: function filterProps(pattern) {
      return this.collectProps().filter(function (key) {
        return key.match(pattern);
      });
    }
  }, {
    key: "parseEvent",
    value: function parseEvent(key) {
      var arr = key.split(EVENT_SAPARATOR);
      this.bindingEvent(arr, this[key].bind(this));
    }
  }, {
    key: "getDefaultDomElement",
    value: function getDefaultDomElement(dom) {
      var el;
      if (dom) {
        el = this.refs[dom] || this[dom] || window[dom];
      } else {
        el = this.el || this.$el || this.$root;
      }
      if (el instanceof Dom) {
        return el.getElement();
      }
      return el;
    }
  }, {
    key: "getDefaultEventObject",
    value: function getDefaultEventObject(eventName) {
      var _this7 = this;
      var arr = eventName.split('.');
      var realEventName = arr.shift();
      var isControl = arr.includes('Control');
      var isShift = arr.includes('Shift');
      var isAlt = arr.includes('Alt');
      var isMeta = arr.includes('Meta');
      arr = arr.filter(function (code) {
        return META_KEYS.includes(code) === false;
      });
      var checkMethodList = arr.filter(function (code) {
        return !!_this7[code];
      });
      arr = arr.filter(function (code) {
        return checkMethodList.includes(code) === false;
      }).map(function (code) {
        return code.toLowerCase();
      });
      return {
        eventName: realEventName,
        isControl: isControl,
        isShift: isShift,
        isAlt: isAlt,
        isMeta: isMeta,
        codes: arr,
        checkMethodList: checkMethodList
      };
    }
  }, {
    key: "bindingEvent",
    value: function bindingEvent(_ref, callback) {
      var _ref2 = _toArray(_ref),
        eventName = _ref2[0],
        dom = _ref2[1],
        delegate = _ref2.slice(2);
      dom = this.getDefaultDomElement(dom);
      var eventObject = this.getDefaultEventObject(eventName);
      eventObject.dom = dom;
      eventObject.delegate = delegate.join(EVENT_SAPARATOR);
      this.addEvent(eventObject, callback);
    }
  }, {
    key: "matchPath",
    value: function matchPath(el, selector) {
      if (el) {
        if (el.matches(selector)) {
          return el;
        }
        return this.matchPath(el.parentElement, selector);
      }
      return null;
    }
  }, {
    key: "getBindings",
    value: function getBindings() {
      if (!this._bindings) {
        this.initBindings();
      }
      return this._bindings;
    }
  }, {
    key: "addBinding",
    value: function addBinding(obj) {
      this.getBindings().push(obj);
    }
  }, {
    key: "initBindings",
    value: function initBindings() {
      this._bindings = [];
    }
  }, {
    key: "checkEventType",
    value: function checkEventType(e, eventObject) {
      var _this8 = this;
      var onlyControl = eventObject.isControl ? e.ctrlKey : true;
      var onlyShift = eventObject.isShift ? e.shiftKey : true;
      var onlyAlt = eventObject.isAlt ? e.altKey : true;
      var onlyMeta = eventObject.isMeta ? e.metaKey : true;
      var hasKeyCode = true;
      if (eventObject.codes.length) {
        hasKeyCode = eventObject.codes.includes(e.code.toLowerCase()) || eventObject.codes.includes(e.key.toLowerCase());
      }
      var isAllCheck = true;
      if (eventObject.checkMethodList.length) {
        // 체크 메소드들은 모든 메소드를 다 적용해야한다.
        isAllCheck = eventObject.checkMethodList.every(function (method) {
          return _this8[method].call(_this8, e);
        });
      }
      return onlyControl && onlyAlt && onlyShift && onlyMeta && hasKeyCode && isAllCheck;
    }
  }, {
    key: "makeCallback",
    value: function makeCallback(eventObject, callback) {
      var _this9 = this;
      if (eventObject.delegate) {
        return function (e) {
          e.xy = Event.posXY(e);
          if (_this9.checkEventType(e, eventObject)) {
            var delegateTarget = _this9.matchPath(e.target || e.srcElement, eventObject.delegate);
            if (delegateTarget) {
              // delegate target 이 있는 경우만 callback 실행
              e.delegateTarget = delegateTarget;
              e.$delegateTarget = new Dom(delegateTarget);
              return callback(e);
            }
          }
        };
      } else {
        return function (e) {
          e.xy = Event.posXY(e);
          if (_this9.checkEventType(e, eventObject)) {
            return callback(e);
          }
        };
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent(eventObject, callback) {
      eventObject.callback = this.makeCallback(eventObject, callback);
      this.addBinding(eventObject);
      var options = true;
      if (eventObject.eventName === 'touchstart') {
        options = {
          passive: true
        };
      }
      Event.addEvent(eventObject.dom, eventObject.eventName, eventObject.callback, options);
    }
  }, {
    key: "removeEventAll",
    value: function removeEventAll() {
      var _this0 = this;
      this.getBindings().forEach(function (obj) {
        _this0.removeEvent(obj);
      });
      this.initBindings();
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(_ref3) {
      var eventName = _ref3.eventName,
        dom = _ref3.dom,
        callback = _ref3.callback;
      Event.removeEvent(dom, eventName, callback);
    }
  }]);
}();

;// ./src/colorpicker/UIElement.js





function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var CHECK_STORE_EVENT_PATTERN = /^@/;
var UIElement = /*#__PURE__*/function (_EventMachine) {
  function UIElement(opt) {
    var _this;
    _classCallCheck(this, UIElement);
    _this = _callSuper(this, UIElement, [opt]);
    _this.opt = opt && opt.opt ? opt.opt : opt || {};
    if (opt && opt.$store) _this.$store = opt.$store;
    _this.initialize();
    _this.initializeStoreEvent();
    return _this;
  }

  /**
   * initialize store event
   *
   * you can define '@xxx' method(event) in UIElement
   */
  _inherits(UIElement, _EventMachine);
  return _createClass(UIElement, [{
    key: "initializeStoreEvent",
    value: function initializeStoreEvent() {
      var _this2 = this;
      this.storeEvents = {};
      this.filterProps(CHECK_STORE_EVENT_PATTERN).forEach(function (key) {
        var arr = key.split('@');
        arr.shift();
        var event = arr.join('@');
        _this2.storeEvents[event] = _this2[key].bind(_this2);
        _this2.$store.on(event, _this2.storeEvents[event]);
      });
    }
  }]);
}(EventMachine);
/* harmony default export */ var colorpicker_UIElement = (UIElement);
;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@easylogic+color@0.0.7/node_modules/@easylogic/color/dist/color.js
var dist_color = __webpack_require__(102);
var color_default = /*#__PURE__*/__webpack_require__.n(dist_color);
;// ./src/colorpicker/BaseModule.js


var BaseModule = /*#__PURE__*/function () {
  function BaseModule($store) {
    _classCallCheck(this, BaseModule);
    this.$store = $store;
    this.initialize();
  }
  return _createClass(BaseModule, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;
      this.filterProps().forEach(function (key) {
        _this.$store.action(key, _this);
      });
    }
  }, {
    key: "filterProps",
    value: function filterProps() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
      return Object.getOwnPropertyNames(this.__proto__).filter(function (key) {
        return key.startsWith(pattern);
      });
    }
  }]);
}();

;// ./src/colorpicker/module/ColorManager.js







function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ColorManager_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ColorManager_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ColorManager_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ColorManager_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }


var ColorManager = /*#__PURE__*/function (_BaseModule) {
  function ColorManager() {
    _classCallCheck(this, ColorManager);
    return ColorManager_callSuper(this, ColorManager, arguments);
  }
  _inherits(ColorManager, _BaseModule);
  return _createClass(ColorManager, [{
    key: "initialize",
    value: function initialize() {
      _superPropGet(ColorManager, "initialize", this, 3)([]);
      this.$store.rgb = {};
      this.$store.hsl = {};
      this.$store.hsv = {};
      this.$store.alpha = 1;
      this.$store.format = 'hex';
    }
  }, {
    key: '/changeFormat',
    value: function _changeFormat($store, format) {
      $store.format = format;
      $store.emit('changeFormat');
    }
  }, {
    key: '/initColor',
    value: function _initColor($store, obj) {
      $store.dispatch('/changeColor', obj, true);
      $store.emit('initColor');
    }
  }, {
    key: '/changeColor',
    value: function _changeColor($store, colorObj, isInit) {
      colorObj = colorObj || '#ffffff';
      if (typeof colorObj === 'string') colorObj = color_default().parse(colorObj);
      $store.alpha = typeof colorObj.a === 'undefined' || colorObj.a === null ? $store.alpha : colorObj.a;
      if (!$store.format) {
        $store.format = colorObj.type !== 'hsv' ? colorObj.type || 'hex' : 'hex';
      }
      switch (colorObj.type) {
        case 'hsl':
          $store.hsl = Object.assign($store.hsl, colorObj);
          $store.rgb = color_default().HSLtoRGB($store.hsl);
          $store.hsv = color_default().HSLtoHSV(colorObj);
          break;
        case 'hex':
          $store.rgb = Object.assign($store.rgb, colorObj);
          $store.hsl = color_default().RGBtoHSL($store.rgb);
          $store.hsv = color_default().RGBtoHSV(colorObj);
          break;
        case 'rgb':
          $store.rgb = Object.assign($store.rgb, colorObj);
          $store.hsl = color_default().RGBtoHSL($store.rgb);
          $store.hsv = color_default().RGBtoHSV(colorObj);
          break;
        case 'hsv':
          $store.hsv = Object.assign($store.hsv, colorObj);
          $store.rgb = color_default().HSVtoRGB($store.hsv);
          $store.hsl = color_default().HSVtoHSL($store.hsv);
          break;
      }
      if (!isInit) $store.emit('changeColor', colorObj);
    }
  }, {
    key: '/getHueColor',
    value: function _getHueColor($store) {
      return color_default().checkHueColor($store.hsv.h / 360);
    }
  }, {
    key: '/toString',
    value: function _toString($store, type) {
      type = type || $store.format;
      var obj = $store[type] || $store.rgb;
      return color_default().format(_objectSpread(_objectSpread({}, obj), {}, {
        a: $store.alpha
      }), type);
    }
  }, {
    key: '/toColor',
    value: function _toColor($store, type) {
      type = type || $store.format;
      switch (type) {
        case 'rgb':
          return $store.dispatch('/toRGB');
        case 'hsl':
          return $store.dispatch('/toHSL');
        case 'hex':
          return $store.dispatch('/toHEX');
        default:
          return $store.dispatch('/toString', type);
      }
    }
  }, {
    key: '/toRGB',
    value: function _toRGB($store) {
      return $store.dispatch('/toString', 'rgb');
    }
  }, {
    key: '/toHSL',
    value: function _toHSL($store) {
      return $store.dispatch('/toString', 'hsl');
    }
  }, {
    key: '/toHEX',
    value: function _toHEX($store) {
      return $store.dispatch('/toString', 'hex').toUpperCase();
    }
  }]);
}(BaseModule);

;// ./src/colorpicker/module/ColorSwatch.js






function ColorSwatch_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ColorSwatch_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ColorSwatch_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ColorSwatch_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ColorSwatch_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

var ColorSwatch = /*#__PURE__*/function (_BaseModule) {
  function ColorSwatch() {
    _classCallCheck(this, ColorSwatch);
    return ColorSwatch_callSuper(this, ColorSwatch, arguments);
  }
  _inherits(ColorSwatch, _BaseModule);
  return _createClass(ColorSwatch, [{
    key: "initialize",
    value: function initialize() {
      ColorSwatch_superPropGet(ColorSwatch, "initialize", this, 3)([]);
      this.$store.swatch = [];
    }

    /**
     * get colors
     *
     * @param {BaseStore} $store
     * @return {array}
     */
  }, {
    key: '/swatch.index',
    value: function _swatchIndex($store) {
      return $store.swatch && Array.isArray($store.swatch) && $store.swatch.length > 0 ? $store.swatch : [];
    }

    /**
     * set colors
     *
     * @param {BaseStore} $store
     * @param {array} colors
     */
  }, {
    key: '/swatch.set',
    value: function _swatchSet($store) {
      var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      $store.swatch = colors && Array.isArray(colors) ? colors : [];
    }
  }]);
}(BaseModule);

;// ./src/colorpicker/BaseStore.js



var BaseStore = /*#__PURE__*/function () {
  function BaseStore(opt) {
    _classCallCheck(this, BaseStore);
    this.callbacks = [];
    this.actions = [];
    this.modules = opt.modules || [];
    this.initialize();
  }
  return _createClass(BaseStore, [{
    key: "initialize",
    value: function initialize() {
      this.initializeModule();
    }
  }, {
    key: "initializeModule",
    value: function initializeModule() {
      var _this = this;
      this.modules.forEach(function (Module) {
        var instance = new Module(_this);
      });
    }
  }, {
    key: "action",
    value: function action(_action, context) {
      this.actions[_action] = {
        context: context,
        callback: context[_action]
      };
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      var args = Array.prototype.slice.call(arguments);
      action = args.shift();
      var m = this.actions[action];
      if (m) return m.callback.apply(m.context, [this].concat(_toConsumableArray(args)));
    }
  }, {
    key: "module",
    value: function module(ModuleObject) {
      // this.action();
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this.callbacks.push({
        event: event,
        callback: callback
      });
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      switch (arguments.length) {
        case 0:
          this.callbacks = [];
          break;
        case 1:
          this.callbacks = this.callbacks.filter(function (f) {
            return f.event !== event;
          });
          break;
        case 2:
          this.callbacks = this.callbacks.filter(function (f) {
            return f.event !== event && f.callback !== callback;
          });
          break;
      }
    }
  }, {
    key: "emit",
    value: function emit() {
      var args = Array.prototype.slice.call(arguments);
      var event = args.shift();
      this.callbacks.filter(function (f) {
        return f.event === event;
      }).forEach(function (f) {
        if (f && typeof f.callback == 'function') f.callback.apply(f, _toConsumableArray(args));
      });
    }
  }]);
}();
/* harmony default export */ var colorpicker_BaseStore = (BaseStore);
;// ./src/colorpicker/BaseColorPicker.js






function BaseColorPicker_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, BaseColorPicker_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function BaseColorPicker_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (BaseColorPicker_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function BaseColorPicker_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }





var BaseColorPicker = /*#__PURE__*/function (_UIElement) {
  function BaseColorPicker(opt) {
    _classCallCheck(this, BaseColorPicker);
    return BaseColorPicker_callSuper(this, BaseColorPicker, [opt]);
  }
  _inherits(BaseColorPicker, _UIElement);
  return _createClass(BaseColorPicker, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;
      if (this.$store) this.destroy();

      // set store
      this.$store = new colorpicker_BaseStore({
        modules: [ColorManager, ColorSwatch]
      });

      // set store events
      this.$store.on('changeColor', function () {
        if (!(_this.opt.onChange && typeof _this.opt.onChange === 'function')) return;
        _this.opt.onChange(_this.getColor());
      });
      this.$store.on('lastUpdateColor', function () {
        if (!(_this.opt.onChanged && typeof _this.opt.onChanged === 'function')) return;
        _this.opt.onChanged(_this.getColor());
      });
      this.$store.on('changeFormat', function () {
        if (!(_this.opt.onChangeFormat && typeof _this.opt.onChangeFormat === 'function')) return;
        _this.opt.onChangeFormat(_this.$store.format);
      });

      // set elements
      this.$body = new Dom(this.opt.container || document.body);
      this.$root = new Dom('div', 'el-colorpicker', {});

      // append colorpicker to container
      this.$body.append(this.$root);

      // set theme
      var theme;
      switch (this.opt.type) {
        case 'circle':
        case 'ring':
        case 'mini':
        case 'none':
          theme = this.opt.type;
          break;
        default:
          theme = 'default';
          break;
      }
      this.$root.el.classList.add("el-colorpicker--".concat(theme));

      // set swatchColors
      this.$store.dispatch('/swatch.set', this.opt.swatchColors);

      // render component
      this.render(this.$root);

      // set color
      this.$store.dispatch('/changeFormat', this.opt.format);
      this.$store.dispatch('/initColor', this.opt.color);

      // initial events
      this.initializeEvent();

      // call onInit
      if (this.opt.onInit && typeof this.opt.onInit === 'function') {
        this.opt.onInit(this);
      }
    }

    /**
     * get color
     *
     * @param {string} format hex,rgb,hsl
     * @return {string}
     */
  }, {
    key: "getColor",
    value: function getColor() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      return this.$store.dispatch('/toColor', format || this.opt.outputFormat);
    }

    /**
     * set color
     *
     * @param {string} color
     * @param {string} format
     */
  }, {
    key: "setColor",
    value: function setColor(color) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      this.$store.dispatch('/changeColor', color);
    }

    /**
     * set options
     *
     * @param {object} options
     */
  }, {
    key: "setOption",
    value: function setOption(options) {
      if (!options) return;
      this.opt = Object.assign(this.opt, options);
      this.destroy();
      this.initialize();
    }

    /**
     * destroy colorpicker
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.$store) return;
      BaseColorPicker_superPropGet(BaseColorPicker, "destroy", this, 3)([]);
      this.$store.off('changeColor');
      this.$store.off('lastUpdateColor');
      this.$store.off('changeFormat');
      this.$body.html('');
      delete this.$store;
      if (this.opt.onDestroy && typeof this.opt.onDestroy === 'function') {
        this.opt.onDestroy();
      }
    }
  }]);
}(colorpicker_UIElement);

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// ./src/colorpicker/ui/Palette.js






function Palette_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Palette_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Palette_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Palette_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var Palette = /*#__PURE__*/function (_UIElement) {
  function Palette() {
    _classCallCheck(this, Palette);
    return Palette_callSuper(this, Palette, arguments);
  }
  _inherits(Palette, _UIElement);
  return _createClass(Palette, [{
    key: "template",
    value: function template() {
      var styles = [this.opt.paletteHeight && "--palette-height: ".concat(this.opt.paletteHeight, "px;")].filter(Boolean).join('');
      return "\n      <nav class=\"el-cp-palette\" style=\"".concat(styles, "\">\n        <span ref=\"$drag_pointer\" data-axis-value=\"all\" class=\"el-cp-palette__pointer\"></span>\n      </nav>\n    ");
    }
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(color) {
      this.$el.el.style.setProperty('--palette-bg', color);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.cacheSize();
      this.setColorUI();
    }
  }, {
    key: "calculateSV",
    value: function calculateSV() {
      var pos = this.drag_pointer_pos || {
        x: 0,
        y: 0
      };
      var s = pos.x / 100;
      var v = (100 - pos.y) / 100;
      this.$store.dispatch('/changeColor', {
        type: 'hsv',
        s: s,
        v: v
      });
    }
  }, {
    key: "setColorUI",
    value: function setColorUI() {
      var x = 100 * this.$store.hsv.s;
      var y = 100 * (1 - this.$store.hsv.v);
      this.refs.$drag_pointer.css({
        left: "".concat(x, "%"),
        top: "".concat(y, "%")
      });
      this.drag_pointer_pos = {
        x: x,
        y: y
      };
      this.setBackgroundColor(this.$store.dispatch('/getHueColor'));
    }
  }, {
    key: "setMainColor",
    value: function setMainColor(e) {
      var pos = this.$el.offset();
      var x = 100 * ((Event.pos(e).pageX - pos.left) / this.w);
      var y = 100 * ((Event.pos(e).pageY - pos.top) / this.h);
      x = Math.max(0, Math.min(100, x));
      y = Math.max(0, Math.min(100, y));
      this.refs.$drag_pointer.css({
        left: "".concat(x, "%"),
        top: "".concat(y, "%")
      });
      this.drag_pointer_pos = {
        x: x,
        y: y
      };
      this.calculateSV();
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }, {
    key: 'mouseup document',
    value: function mouseup_document() {
      if (!this.isDown) return;
      this.isDown = false;
      this.$store.emit('lastUpdateColor');
    }
  }, {
    key: 'mousemove document',
    value: function mousemove_document(e) {
      if (!this.isDown) return;
      this.cacheSize();
      this.setMainColor(e);
    }
  }, {
    key: "mousedown",
    value: function mousedown(e) {
      this.isDown = true;
      this.cacheSize();
      this.axis = new Dom(e.target).attr('data-axis-value');
      this.x = e.pageX;
      this.y = e.pageY;
      this.setMainColor(e);
    }
  }, {
    key: 'touchend document',
    value: function touchend_document() {
      this['mouseup document']();
    }
  }, {
    key: 'touchmove document',
    value: function touchmove_document(e) {
      if (!this.isDown) return;
      this.setMainColor(e);
    }
  }, {
    key: "touchstart",
    value: function touchstart(e) {
      e.preventDefault();
      this.isDown = true;
      this.cacheSize();
      this.setMainColor(e);
    }
  }, {
    key: "contextmenu",
    value: function contextmenu() {
      this['mouseup document']();
    }
  }, {
    key: "cacheSize",
    value: function cacheSize() {
      var _this$$el$size = this.$el.size(),
        _this$$el$size2 = _slicedToArray(_this$$el$size, 2),
        width = _this$$el$size2[0],
        height = _this$$el$size2[1];
      this.w = width;
      this.h = height;
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/ui/ColorInformation.js





function ColorInformation_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ColorInformation_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ColorInformation_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ColorInformation_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var ColorInformation = /*#__PURE__*/function (_UIElement) {
  function ColorInformation() {
    _classCallCheck(this, ColorInformation);
    return ColorInformation_callSuper(this, ColorInformation, arguments);
  }
  _inherits(ColorInformation, _UIElement);
  return _createClass(ColorInformation, [{
    key: "template",
    value: function template() {
      if (!this.opt.useInformation) return null;
      return "\n      <fieldset class=\"el-cp-color-form\">\n        <legend>change color code</legend>\n        <div class=\"el-cp-color-form__wrap\">\n          <div class=\"el-cp-color-field\">\n            <label>\n              <input ref=\"$hexCode\" type=\"text\"/>\n              <span>HEX</span>\n            </label>\n          </div>\n          <div class=\"el-cp-color-field\">\n            <label>\n              <input ref=\"$rgb_r\" type=\"number\" step=\"1\" min=\"0\" max=\"255\"/>\n              <span>R</span>\n            </label>\n            <label>\n              <input ref=\"$rgb_g\" type=\"number\" step=\"1\" min=\"0\" max=\"255\"/>\n              <span>G</span>\n            </label>\n            <label>\n              <input ref=\"$rgb_b\" type=\"number\" step=\"1\" min=\"0\" max=\"255\"/>\n              <span>B</span>\n            </label>\n            <label>\n              <input ref=\"$rgb_a\" type=\"number\" step=\"0.01\" min=\"0\" max=\"1\"/>\n              <span>A</span>\n            </label>\n          </div>\n          <div class=\"el-cp-color-field\">\n            <label>\n              <input ref=\"$hsl_h\" type=\"number\" step=\"1\" min=\"0\" max=\"360\"/>\n              <span>H</span>\n            </label>\n            <label>\n              <input ref=\"$hsl_s\" type=\"number\" step=\"1\" min=\"0\" max=\"100\"/>\n              <span>S</span>\n            </label>\n            <label>\n              <input ref=\"$hsl_l\" type=\"number\" step=\"1\" min=\"0\" max=\"100\"/>\n              <span>L</span>\n            </label>\n            <label>\n              <input ref=\"$hsl_a\" type=\"number\" step=\"0.01\" min=\"0\" max=\"1\"/>\n              <span>A</span>\n            </label>\n          </div>\n          <nav ref=\"$informationChange\" class=\"el-cp-color-nav\">\n            <label title=\"Change color model\" class=\"el-cp-color-nav__label\">\n              <select ref=\"$changeColorModel\">\n                <option value=\"hex\">HEX</option>\n                <option value=\"rgb\">RGB</option>\n                <option value=\"hsl\">HSL</option>\n              </select>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <polyline points=\"6 9 12 15 18 9\"></polyline>\n              </svg>\n            </label>\n          </nav>\n        </div>\n      </fieldset>\n    ";
    }
  }, {
    key: "setCurrentFormat",
    value: function setCurrentFormat(format) {
      this.format = format;
      this.initFormat();
    }
  }, {
    key: "initFormat",
    value: function initFormat() {
      var _this = this;
      var current_format = this.format || 'hex';
      ['hex', 'rgb', 'hsl'].filter(function (it) {
        return it !== current_format;
      }).forEach(function (formatString) {
        _this.$el.el.classList.remove(formatString);
      });
      this.$el.el.classList.add(current_format);
    }
  }, {
    key: "goToFormat",
    value: function goToFormat(to_format) {
      this.format = to_format;
      if (to_format === 'rgb' || to_format === 'hsl') {
        this.initFormat();
      }
      this.$store.dispatch('/changeFormat', this.format);
    }
  }, {
    key: "getFormat",
    value: function getFormat() {
      return this.format || 'hex';
    }
  }, {
    key: "checkNumberKey",
    value: function checkNumberKey(e) {
      var code = e.which;
      var isExcept = false;
      if (code === 37 || code === 39 || code === 8 || code === 46 || code === 9) isExcept = true;
      return !(!isExcept && (code < 48 || code > 57));
    }
  }, {
    key: "checkNotNumberKey",
    value: function checkNotNumberKey(e) {
      return !this.checkNumberKey(e);
    }
  }, {
    key: "changeRgbColor",
    value: function changeRgbColor() {
      this.$store.dispatch('/changeColor', {
        type: 'rgb',
        r: this.refs.$rgb_r.int(),
        g: this.refs.$rgb_g.int(),
        b: this.refs.$rgb_b.int(),
        a: this.refs.$rgb_a.float()
      });
      this.$store.emit('lastUpdateColor');
    }
  }, {
    key: "changeHslColor",
    value: function changeHslColor() {
      this.$store.dispatch('/changeColor', {
        type: 'hsl',
        h: this.refs.$hsl_h.int(),
        s: this.refs.$hsl_s.int(),
        l: this.refs.$hsl_l.int(),
        a: this.refs.$hsl_a.float()
      });
      this.$store.emit('lastUpdateColor');
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }, {
    key: 'input $rgb_r',
    value: function input_$rgb_r() {
      this.changeRgbColor();
    }
  }, {
    key: 'input $rgb_g',
    value: function input_$rgb_g() {
      this.changeRgbColor();
    }
  }, {
    key: 'input $rgb_b',
    value: function input_$rgb_b() {
      this.changeRgbColor();
    }
  }, {
    key: 'input $rgb_a',
    value: function input_$rgb_a() {
      this.changeRgbColor();
    }
  }, {
    key: 'input $hsl_h',
    value: function input_$hsl_h() {
      this.changeHslColor();
    }
  }, {
    key: 'input $hsl_s',
    value: function input_$hsl_s() {
      this.changeHslColor();
    }
  }, {
    key: 'input $hsl_l',
    value: function input_$hsl_l() {
      this.changeHslColor();
    }
  }, {
    key: 'input $hsl_a',
    value: function input_$hsl_a() {
      this.changeHslColor();
    }
  }, {
    key: 'keyup $hexCode',
    value: function keyup_$hexCode() {
      var code = this.refs.$hexCode.val();
      if (code.charAt(0) === '#' && (code.length === 7 || code.length === 9)) {
        this.$store.dispatch('/changeColor', code);
        this.$store.emit('lastUpdateColor');
      }
    }
  }, {
    key: 'change $changeColorModel',
    value: function change_$changeColorModel(e) {
      switch (e.target.value) {
        case 'hex':
        case 'rgb':
        case 'hsl':
          this.format = e.target.value;
          break;
        default:
          this.format = 'hex';
          break;
      }
      this.initFormat();
      this.$store.dispatch('/changeFormat', this.format);
      this.$store.emit('lastUpdateColor');
    }
  }, {
    key: "setRGBInput",
    value: function setRGBInput() {
      this.refs.$rgb_r.val(this.$store.rgb.r);
      this.refs.$rgb_g.val(this.$store.rgb.g);
      this.refs.$rgb_b.val(this.$store.rgb.b);
      this.refs.$rgb_a.val(this.$store.alpha);
    }
  }, {
    key: "setHSLInput",
    value: function setHSLInput() {
      this.refs.$hsl_h.val(this.$store.hsl.h);
      this.refs.$hsl_s.val(this.$store.hsl.s);
      this.refs.$hsl_l.val(this.$store.hsl.l);
      this.refs.$hsl_a.val(this.$store.alpha);
    }
  }, {
    key: "setHexInput",
    value: function setHexInput() {
      this.refs.$hexCode.val(this.$store.dispatch('/toHEX'));
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.opt.useInformation) return;
      this.setCurrentFormat(this.$store.format);
      this.setRGBInput();
      this.setHSLInput();
      this.setHexInput();
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/ui/Swatch.js





function Swatch_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Swatch_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Swatch_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Swatch_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var Swatch = /*#__PURE__*/function (_UIElement) {
  function Swatch() {
    _classCallCheck(this, Swatch);
    return Swatch_callSuper(this, Swatch, arguments);
  }
  _inherits(Swatch, _UIElement);
  return _createClass(Swatch, [{
    key: "template",
    value: function template() {
      var colors = this.$store.dispatch('/swatch.index');
      if (!(colors.length > 0)) return null;
      return "\n      <div class=\"el-cp-swatches\">\n        ".concat(this.opt.swatchTitle ? "\n          <header class=\"el-cp-swatches__header\">\n            <h2 ref=\"$colorSwatchTitle\">".concat(this.opt.swatchTitle, "</h2>\n          </header>\n        ") : '', "\n        <div ref=\"$index\"></div>\n      </div>\n    ");
    }
  }, {
    key: 'load $index',
    value: function load_$index() {
      var colors = this.$store.dispatch('/swatch.index');
      return "\n      <ul class=\"el-cp-colors\">\n        ".concat(colors.map(function (color) {
        return "\n          <li>\n            <button\n              type=\"button\"\n              data-color=\"".concat(color, "\"\n              class=\"el-cp-colors__item\"\n              style=\"--color: ").concat(color, "\">\n              ").concat(color, "\n            </button>\n          </li>\n        ");
      }).join(''), "\n      </ul>\n    ");
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.load();
    }
  }, {
    key: "addColor",
    value: function addColor(color) {
      this.$store.dispatch('/addCurrentColor', color);
    }
  }, {
    key: 'click $index button',
    value: function click_$index_button(e) {
      this.$store.dispatch('/changeColor', e.$delegateTarget.attr('data-color'));
      this.$store.emit('lastUpdateColor');
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/BaseBox.js





function BaseBox_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, BaseBox_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function BaseBox_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (BaseBox_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var BaseBox = /*#__PURE__*/function (_UIElement) {
  function BaseBox(opt) {
    _classCallCheck(this, BaseBox);
    return BaseBox_callSuper(this, BaseBox, [opt]);
  }
  _inherits(BaseBox, _UIElement);
  return _createClass(BaseBox, [{
    key: "refresh",
    value: function refresh() {}
  }, {
    key: "refreshColorUI",
    value: function refreshColorUI(e) {}

    /** push change event  */
  }, {
    key: "changeColor",
    value: function changeColor(opt) {
      this.$store.dispatch('/changeColor', opt);
    }

    // Event Bindings
  }, {
    key: 'mouseup document',
    value: function mouseup_document(e) {
      this.onDragEnd(e);
    }
  }, {
    key: 'mousemove document',
    value: function mousemove_document(e) {
      this.onDragMove(e);
    }
  }, {
    key: 'mousedown $bar',
    value: function mousedown_$bar(e) {
      e.preventDefault();
      this.isDown = true;
    }
  }, {
    key: 'mousedown $container',
    value: function mousedown_$container(e) {
      this.isDown = true;
      this.onDragStart(e);
    }
  }, {
    key: 'touchend document',
    value: function touchend_document(e) {
      this.onDragEnd(e);
    }
  }, {
    key: 'touchmove document',
    value: function touchmove_document(e) {
      this.onDragMove(e);
    }
  }, {
    key: 'touchstart $bar',
    value: function touchstart_$bar(e) {
      e.preventDefault();
      this.isDown = true;
    }
  }, {
    key: 'touchstart $container',
    value: function touchstart_$container(e) {
      this.onDragStart(e);
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(e) {
      this.isDown = true;
      this.refreshColorUI(e);
    }
  }, {
    key: "onDragMove",
    value: function onDragMove(e) {
      if (this.isDown) this.refreshColorUI(e);
    }

    /* called when mouse is ended move  */
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      if (this.isDown) {
        this.$store.emit('lastUpdateColor');
        this.isDown = false;
      }
    }
  }, {
    key: "contextmenu",
    value: function contextmenu() {
      this.onDragEnd();
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/BaseSlider.js





function BaseSlider_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, BaseSlider_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function BaseSlider_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (BaseSlider_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var BaseSlider = /*#__PURE__*/function (_BaseBox) {
  function BaseSlider(opt) {
    var _this;
    _classCallCheck(this, BaseSlider);
    _this = BaseSlider_callSuper(this, BaseSlider, [opt]);
    _this.minValue = 0; // min domain value
    _this.maxValue = 1; // max domain value
    return _this;
  }

  // slider container's min and max position
  _inherits(BaseSlider, _BaseBox);
  return _createClass(BaseSlider, [{
    key: "getMinMaxPosition",
    value: function getMinMaxPosition() {
      var min = this.getMinPosition();
      var width = this.getMaxDist();
      var max = min + width;
      return {
        min: min,
        max: max,
        width: width
      };
    }

    /** get current position on page  */
  }, {
    key: "getCurrent",
    value: function getCurrent(value) {
      return this.getMaxDist() * value;
    }

    /** get min position on slider container  */
  }, {
    key: "getMinPosition",
    value: function getMinPosition() {
      return this.refs.$container.offset().left;
    }
  }, {
    key: "getMaxDist",
    value: function getMaxDist() {
      return this.refs.$container.size()[0];
    }

    /** get dist for position value */
  }, {
    key: "getDist",
    value: function getDist(current) {
      var _this$getMinMaxPositi = this.getMinMaxPosition(),
        min = _this$getMinMaxPositi.min,
        max = _this$getMinMaxPositi.max;
      var dist;
      if (current < min) {
        dist = 0;
      } else if (current > max) {
        dist = 100;
      } else {
        dist = (current - min) / (max - min) * 100;
      }
      return dist;
    }

    /** get calculated dist for domain value */
  }, {
    key: "getCalculatedDist",
    value: function getCalculatedDist(e) {
      var current = e ? this.getMousePosition(e) : this.getCurrent(this.getDefaultValue() / this.maxValue);
      return this.getDist(current);
    }

    /** get default value used in slider container */
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return 0;
    }

    /** set mouse position */
  }, {
    key: "setMousePosition",
    value: function setMousePosition(x) {
      this.refs.$bar.css({
        left: "".concat(x, "%")
      });
    }

    /** set mouse position in page */
  }, {
    key: "getMousePosition",
    value: function getMousePosition(e) {
      return Event.pos(e).pageX;
    }

    /** set drag bar position  */
  }, {
    key: "setColorUI",
    value: function setColorUI() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      v = v || this.getDefaultValue();
      if (this.lastV === v) return;
      this.lastV = v;
      this.setMousePosition(100 * ((v || 0) / this.maxValue));
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.setColorUI();
    }
  }]);
}(BaseBox);

;// ./src/colorpicker/ui/control/Hue.js





function Hue_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Hue_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Hue_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Hue_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var Hue = /*#__PURE__*/function (_BaseSlider) {
  function Hue(opt) {
    var _this;
    _classCallCheck(this, Hue);
    _this = Hue_callSuper(this, Hue, [opt]);
    _this.minValue = 0;
    _this.maxValue = 360;
    return _this;
  }
  _inherits(Hue, _BaseSlider);
  return _createClass(Hue, [{
    key: "template",
    value: function template() {
      return "\n      <nav class=\"el-cp-slider el-cp-slider--hue\">\n        <p ref=\"$container\" class=\"el-cp-slider__body\">\n          <i ref=\"$bar\" class=\"el-cp-slider__circle\"></i>\n        </p>\n      </nav>\n    ";
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this.$store.hsv.h;
    }
  }, {
    key: "refreshColorUI",
    value: function refreshColorUI(e) {
      var dist = this.getCalculatedDist(e);
      this.changeColor({
        h: dist / 100 * this.maxValue,
        type: 'hsv'
      });
    }
  }]);
}(BaseSlider);

;// ./src/colorpicker/ui/control/Opacity.js







function Opacity_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Opacity_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Opacity_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Opacity_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Opacity_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Opacity_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Opacity_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Opacity_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Opacity_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }


var Opacity = /*#__PURE__*/function (_BaseSlider) {
  function Opacity(opt) {
    var _this;
    _classCallCheck(this, Opacity);
    _this = Opacity_callSuper(this, Opacity, [opt]);
    _this.minValue = 0;
    _this.maxValue = 1;
    return _this;
  }
  _inherits(Opacity, _BaseSlider);
  return _createClass(Opacity, [{
    key: "template",
    value: function template() {
      return "\n      <nav class=\"el-cp-slider el-cp-slider--alpha\">\n        <p ref=\"$container\" class=\"el-cp-slider__body\">\n          <span ref=\"$colorbar\" class=\"el-cp-slider__bar\"></span>\n          <i ref=\"$bar\" class=\"el-cp-slider__circle\"></i>\n        </p>\n      </nav>\n    ";
    }
  }, {
    key: "refresh",
    value: function refresh() {
      Opacity_superPropGet(Opacity, "refresh", this, 3)([]);
      this.setOpacityColorBar();
    }
  }, {
    key: "setOpacityColorBar",
    value: function setOpacityColorBar() {
      var start = color_default().format(Opacity_objectSpread(Opacity_objectSpread({}, this.$store.rgb), {}, {
        a: 0
      }), 'rgb');
      var end = color_default().format(Opacity_objectSpread(Opacity_objectSpread({}, this.$store.rgb), {}, {
        a: 1
      }), 'rgb');
      this.refs.$colorbar.css('background', "linear-gradient(to right, ".concat(start, ", ").concat(end, ")"));
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this.$store.alpha;
    }
  }, {
    key: "refreshColorUI",
    value: function refreshColorUI(e) {
      var dist = this.getCalculatedDist(e);
      this.setColorUI(dist / 100 * this.maxValue);
      this.changeColor({
        a: Math.floor(dist) / 100 * this.maxValue
      });
    }
  }]);
}(BaseSlider);

;// ./src/colorpicker/ui/ColorPreview.js





function ColorPreview_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ColorPreview_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ColorPreview_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ColorPreview_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var ColorPreview = /*#__PURE__*/function (_UIElement) {
  function ColorPreview() {
    _classCallCheck(this, ColorPreview);
    return ColorPreview_callSuper(this, ColorPreview, arguments);
  }
  _inherits(ColorPreview, _UIElement);
  return _createClass(ColorPreview, [{
    key: "template",
    value: function template() {
      return "\n      <i class=\"el-cp-color-preview\">\n        <em ref=\"$color\"></em>\n      </i>\n    ";
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.refs.$color.css('background-color', this.$store.dispatch('/toRGB'));
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }]);
}(colorpicker_UIElement);

;// ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(140);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// ./src/util/functions/support.js
function isSupported(api, apiParent) {
  return api in apiParent;
}
var enableEyeDropper = isSupported('EyeDropper', window);
;// ./src/colorpicker/ui/Eyedropper.js







function Eyedropper_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Eyedropper_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Eyedropper_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Eyedropper_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var Eyedropper = /*#__PURE__*/function (_UIElement) {
  function Eyedropper() {
    _classCallCheck(this, Eyedropper);
    return Eyedropper_callSuper(this, Eyedropper, arguments);
  }
  _inherits(Eyedropper, _UIElement);
  return _createClass(Eyedropper, [{
    key: "template",
    value: function template() {
      return /*html*/"\n      <nav class=\"el-cp-color-eyedropper\">\n        <button type=\"button\" ref=\"$button\" title=\"Eyedropper\">\n          <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M7.797 18.344c-.019.001-.074-.009-.24-.065-.277-.094-.745-.25-1.137.141l-1.542 1.543a.595.595 0 0 1-.84-.84L5.58 17.58c.391-.39.235-.859.141-1.14-.045-.134-.06-.195-.072-.206-.002-.003-.005-.003-.007-.001l1.06-1.06.703.705a.432.432 0 1 0 .611-.611l-.703-.705.557-.557.703.703a.434.434 0 0 0 .611 0 .434.434 0 0 0 0-.61l-.703-.703.571-.572.703.704a.435.435 0 0 0 .612 0 .434.434 0 0 0 0-.61l-.705-.706L14 7.875l2.126 2.127-8.33 8.342zM19.29 9.37l-.654-.655 1.669-1.668a2.372 2.372 0 0 0-3.353-3.354l-1.669 1.669-.655-.654a1.341 1.341 0 0 0-1.898 1.897l.658.658-8.358 8.359c-.373.373-.214.841-.13 1.094.061.18.069.24.069.253l-1.543 1.542a1.458 1.458 0 1 0 2.062 2.061l1.536-1.54c.019-.003.08.006.259.066.252.085.72.243 1.093-.13l8.359-8.358.658.658a1.341 1.341 0 1 0 1.897-1.898z\" fill=\"currentColor\"/>\n          </svg>\n        </button>\n      </nav>\n    ";
    }
  }, {
    key: 'click $button',
    value: function () {
      var _click_$button = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var eyeDropper, result;
        return regenerator_default().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!enableEyeDropper) {
                _context.next = 2;
                break;
              }
              eyeDropper = new EyeDropper();
              _context.next = 1;
              return eyeDropper.open();
            case 1:
              result = _context.sent;
              this.$store.dispatch('/changeColor', result.sRGBHex);
              this.$store.emit('lastUpdateColor');
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function click_$button() {
        return _click_$button.apply(this, arguments);
      }
      return click_$button;
    }()
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/theme/default/Control.js





function Control_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Control_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Control_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Control_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var Control = /*#__PURE__*/function (_UIElement) {
  function Control() {
    _classCallCheck(this, Control);
    return Control_callSuper(this, Control, arguments);
  }
  _inherits(Control, _UIElement);
  return _createClass(Control, [{
    key: "components",
    value: function components() {
      return {
        Hue: Hue,
        Opacity: Opacity,
        ColorPreview: ColorPreview,
        Eyedropper: Eyedropper
      };
    }
  }, {
    key: "template",
    value: function template() {
      var $eyedropper = !!enableEyeDropper ? "\n      <div class=\"el-cp-color-control__left\">\n        <template target=\"Eyedropper\"></template>\n      </div>\n    " : '';
      var $opacity = this.opt.useOpacity ? "<template target=\"Opacity\"></template>" : '';
      return "\n      <article class=\"el-cp-color-control\">\n        ".concat($eyedropper, "\n        <div class=\"el-cp-color-control__body\">\n          <template target=\"Hue\"></template>\n          ").concat($opacity, "\n        </div>\n        <div class=\"el-cp-color-control__right\">\n          <template target=\"ColorPreview\"></template>\n        </div>\n      </article>\n    ");
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.Hue.setColorUI();
      if (!!this.opt.useOpacity) this.Opacity.setColorUI();
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/theme/default/index.js





function default_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, default_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function default_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (default_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var DefaultColorPicker = /*#__PURE__*/function (_BaseColorPicker) {
  function DefaultColorPicker() {
    _classCallCheck(this, DefaultColorPicker);
    return default_callSuper(this, DefaultColorPicker, arguments);
  }
  _inherits(DefaultColorPicker, _BaseColorPicker);
  return _createClass(DefaultColorPicker, [{
    key: "components",
    value: function components() {
      return {
        Palette: Palette,
        Control: Control,
        Forms: ColorInformation,
        Swatch: Swatch
      };
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <div class=\"el-colorpicker__wrap\">\n        <template target=\"Palette\"></template>\n        <template target=\"Control\"></template>\n        <template target=\"Forms\"></template>\n        <template target=\"Swatch\"></template>\n      </div>\n    ";
    }
  }]);
}(BaseColorPicker);

;// ./src/util/functions/math.js
function math_round(n, k) {
  k = typeof k == 'undefined' ? 1 : k;
  return Math.round(n * k) / k;
}
function degreeToRadian(angle) {
  return angle * Math.PI / 180;
}

/**
 *
 * convert radian to degree
 *
 * @param {number} radian
 * @returns {number} 0..360
 */
function radianToDegree(radian) {
  var angle = radian * 180 / Math.PI;
  // 각도가 0보다 작으면 360 에서 반전시킨다.
  if (angle < 0) {
    angle = 360 + angle;
  }
  return angle;
}
function getXInCircle(angle, radius) {
  var centerX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return centerX + radius * Math.cos(degreeToRadian(angle));
}
function getYInCircle(angle, radius) {
  var centerY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return centerY + radius * Math.sin(degreeToRadian(angle));
}
function getXYInCircle(angle, radius) {
  var centerX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var centerY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    x: getXInCircle(angle, radius, centerX),
    y: getYInCircle(angle, radius, centerY)
  };
}
function calculateAngle(rx, ry) {
  return radianToDegree(Math.atan2(ry, rx));
}
;// ./src/colorpicker/ui/PaletteWheel.js





function PaletteWheel_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, PaletteWheel_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function PaletteWheel_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (PaletteWheel_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var PaletteWheel = /*#__PURE__*/function (_UIElement) {
  function PaletteWheel(opt) {
    var _this;
    _classCallCheck(this, PaletteWheel);
    _this = PaletteWheel_callSuper(this, PaletteWheel, [opt]);
    _this.width = _this.opt.paletteWidth || 200;
    _this.height = _this.opt.paletteWidth || 200;
    _this.thickness = 0;
    return _this;
  }
  _inherits(PaletteWheel, _UIElement);
  return _createClass(PaletteWheel, [{
    key: "template",
    value: function template() {
      return "\n      <div class=\"el-cp-palette-circle\">\n        <div ref=\"$wrap\" class=\"el-cp-palette-circle__wrap\">\n          <canvas ref=\"$colorwheel\" class=\"el-cp-palette-circle__canvas\"></canvas>\n          <span ref=\"$valuewheel\" class=\"el-cp-palette-circle__brightness\"></span>\n          <i ref=\"$drag_pointer\" class=\"el-cp-palette-circle__pointer\"></i>\n        </div>\n      </div>\n    ";
    }
  }, {
    key: "afterRender",
    value: function afterRender() {
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh(isEvent) {
      this.setColorUI(isEvent);
    }
  }, {
    key: "setColorUI",
    value: function setColorUI(isEvent) {
      this.renderCanvas();
      this.renderValue();
      this.setHueColor(null, isEvent);
    }
  }, {
    key: "renderValue",
    value: function renderValue() {
      var value = 1 - this.$store.hsv.v;
      this.refs.$valuewheel.css({
        'background-color': "rgba(0, 0, 0, ".concat(value, ")")
      });
    }
  }, {
    key: "renderWheel",
    value: function renderWheel(width, height) {
      var $canvas = new Dom('canvas');
      var context = $canvas.el.getContext('2d');
      $canvas.el.width = width;
      $canvas.el.height = height;
      var img = context.getImageData(0, 0, width, height);
      var pixels = img.data;
      var half_width = Math.floor(width / 2);
      var half_height = Math.floor(height / 2);
      var radius = width > height ? half_height : half_width;
      var cx = half_width;
      var cy = half_height;
      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var rx = x - cx + 1;
          var ry = y - cy + 1;
          var d = rx * rx + ry * ry;
          var hue = calculateAngle(rx, ry);
          var rgb = color_default().HSVtoRGB(hue,
          // 0~360 hue
          Math.min(Math.sqrt(d) / radius, 1),
          // 0..1 Saturation
          1 // 0..1 Value
          );
          var index = (y * width + x) * 4;
          pixels[index] = rgb.r;
          pixels[index + 1] = rgb.g;
          pixels[index + 2] = rgb.b;
          pixels[index + 3] = 255;
        }
      }
      context.putImageData(img, 0, 0);
      if (this.thickness > 0) {
        // destination-out 은 그리는 영역이 지워진다.
        context.globalCompositeOperation = 'destination-out';
        context.fillStyle = 'black';
        context.beginPath();
        context.arc(cx, cy, radius - this.thickness, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
      return $canvas;
    }
  }, {
    key: "renderCanvas",
    value: function renderCanvas() {
      if (this.$store.createdWheelCanvas) return;
      var $canvas = this.refs.$colorwheel;
      $canvas.el.width = this.width;
      $canvas.el.height = this.height;
      var context = $canvas.el.getContext('2d');
      var $wheelCanvas = this.renderWheel(this.width, this.height);
      context.drawImage($wheelCanvas.el, 0, 0);
      this.$store.createdWheelCanvas = true;
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this.$store.hsv.h;
    }
  }, {
    key: "getDefaultSaturation",
    value: function getDefaultSaturation() {
      return this.$store.hsv.s;
    }
  }, {
    key: "getCurrentXY",
    value: function getCurrentXY(e, angle, radius, centerX, centerY) {
      return e ? Event.posXY(e) : getXYInCircle(angle, radius, centerX, centerY);
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      var width = this.state.get('$wrap.width');
      var height = this.state.get('$wrap.height');
      var radius = this.state.get('$colorwheel.width') / 2;
      var minX = this.refs.$wrap.offset().left;
      var minY = this.refs.$wrap.offset().top;
      return {
        minX: minX,
        minY: minY,
        width: width,
        height: height,
        radius: radius,
        centerX: minX + width / 2,
        centerY: minY + height / 2
      };
    }
  }, {
    key: "setHueColor",
    value: function setHueColor(e, isEvent) {
      if (!this.state.get('$wrap.width')) return;
      var _this$getRectangle = this.getRectangle(),
        minX = _this$getRectangle.minX,
        minY = _this$getRectangle.minY,
        radius = _this$getRectangle.radius,
        centerX = _this$getRectangle.centerX,
        centerY = _this$getRectangle.centerY,
        width = _this$getRectangle.width,
        height = _this$getRectangle.height;
      var _this$getCurrentXY = this.getCurrentXY(e, this.getDefaultValue(), this.getDefaultSaturation() * radius, centerX, centerY),
        x = _this$getCurrentXY.x,
        y = _this$getCurrentXY.y;
      var rx = x - centerX;
      var ry = y - centerY;
      var d = rx * rx + ry * ry;
      var hue = calculateAngle(rx, ry);
      if (d > radius * radius) {
        var pos = this.getCurrentXY(null, hue, radius, centerX, centerY);
        x = pos.x;
        y = pos.y;
      }

      // saturation
      var saturation = Math.min(Math.sqrt(d) / radius, 1);

      // set drag pointer position
      var cssWidth = (x - minX) / width * 100;
      var cssHeight = (y - minY) / height * 100;
      this.refs.$drag_pointer.css({
        left: "".concat(cssWidth, "%"),
        top: "".concat(cssHeight, "%")
      });
      if (!isEvent) {
        this.changeColor({
          type: 'hsv',
          h: hue,
          s: saturation
        });
      }
    }
  }, {
    key: "changeColor",
    value: function changeColor(opt) {
      this.$store.dispatch('/changeColor', opt);
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh(true);
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh(true);
    }
  }, {
    key: 'mouseup document',
    value: function mouseup_document() {
      if (!this.isDown) return;
      this.isDown = false;
      this.$store.emit('lastUpdateColor');
    }
  }, {
    key: 'mousemove document',
    value: function mousemove_document(e) {
      if (!this.isDown) return;
      this.setHueColor(e);
    }
  }, {
    key: 'mousedown $drag_pointer',
    value: function mousedown_$drag_pointer(e) {
      e.preventDefault();
      this.isDown = true;
    }
  }, {
    key: 'mousedown $wrap',
    value: function mousedown_$wrap(e) {
      this.isDown = true;
      this.setHueColor(e);
    }
  }, {
    key: 'touchend document',
    value: function touchend_document() {
      if (!this.isDown) return;
      this.isDown = false;
      this.$store.emit('lastUpdateColor');
    }
  }, {
    key: 'touchmove document',
    value: function touchmove_document(e) {
      if (!this.isDown) return;
      this.setHueColor(e);
    }
  }, {
    key: 'touchstart $drag_pointer',
    value: function touchstart_$drag_pointer(e) {
      e.preventDefault();
      this.isDown = true;
    }
  }, {
    key: 'touchstart $wrap',
    value: function touchstart_$wrap(e) {
      e.preventDefault();
      this.isDown = true;
      this.setHueColor(e);
    }
  }, {
    key: "contextmenu",
    value: function contextmenu() {
      this['mouseup document']();
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/ui/control/Brightness.js





function Brightness_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Brightness_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Brightness_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Brightness_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var Brightness = /*#__PURE__*/function (_BaseSlider) {
  function Brightness(opt) {
    var _this;
    _classCallCheck(this, Brightness);
    _this = Brightness_callSuper(this, Brightness, [opt]);
    _this.minValue = 0;
    _this.maxValue = 1;
    return _this;
  }
  _inherits(Brightness, _BaseSlider);
  return _createClass(Brightness, [{
    key: "template",
    value: function template() {
      return "\n      <nav class=\"el-cp-slider el-cp-slider--brightness\">\n        <p ref=\"$container\" class=\"el-cp-slider__body\">\n          <i ref=\"$bar\" class=\"el-cp-slider__circle\"></i>\n        </p>\n      </nav>\n    ";
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this.$store.hsv.v;
    }
  }, {
    key: "refreshColorUI",
    value: function refreshColorUI(e) {
      var dist = this.getCalculatedDist(e);
      this.setColorUI(dist / 100 * this.maxValue);
      this.changeColor({
        type: 'hsv',
        v: dist / 100 * this.maxValue
      });
    }
  }]);
}(BaseSlider);

;// ./src/colorpicker/theme/circle/Control.js





function circle_Control_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, circle_Control_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function circle_Control_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (circle_Control_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var Control_Control = /*#__PURE__*/function (_UIElement) {
  function Control() {
    _classCallCheck(this, Control);
    return circle_Control_callSuper(this, Control, arguments);
  }
  _inherits(Control, _UIElement);
  return _createClass(Control, [{
    key: "components",
    value: function components() {
      return {
        Brightness: Brightness,
        Opacity: Opacity,
        ColorPreview: ColorPreview,
        Eyedropper: Eyedropper
      };
    }
  }, {
    key: "template",
    value: function template() {
      var $eyedropper = !!enableEyeDropper ? "\n      <div class=\"el-cp-color-control__left\">\n        <template target=\"Eyedropper\"></template>\n      </div>\n    " : '';
      var $opacity = this.opt.useOpacity ? "<template target=\"Opacity\"></template>" : '';
      return "\n      <article class=\"el-cp-color-control\">\n        ".concat($eyedropper, "\n        <div class=\"el-cp-color-control__body\">\n          <template target=\"Brightness\"></template>\n          ").concat($opacity, "\n        </div>\n        <div class=\"el-cp-color-control__right\">\n          <template target=\"ColorPreview\"></template>\n        </div>\n      </article>\n    ");
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.Brightness.setColorUI();
      if (!!this.opt.useOpacity) this.Opacity.setColorUI();
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/theme/circle/index.js





function circle_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, circle_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function circle_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (circle_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





var CircleColorPicker = /*#__PURE__*/function (_BaseColorPicker) {
  function CircleColorPicker() {
    _classCallCheck(this, CircleColorPicker);
    return circle_callSuper(this, CircleColorPicker, arguments);
  }
  _inherits(CircleColorPicker, _BaseColorPicker);
  return _createClass(CircleColorPicker, [{
    key: "components",
    value: function components() {
      return {
        PaletteWheel: PaletteWheel,
        Control: Control_Control,
        Forms: ColorInformation,
        Swatch: Swatch
      };
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <div class=\"el-colorpicker__wrap\">\n        <template target=\"PaletteWheel\"></template>\n        <template target=\"Control\"></template>\n        <template target=\"Forms\"></template>\n        <template target=\"Swatch\"></template>\n      </div>\n    ";
    }
  }]);
}(BaseColorPicker);

;// ./src/colorpicker/ui/PaletteRing.js





function PaletteRing_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, PaletteRing_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function PaletteRing_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (PaletteRing_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var PaletteRing = /*#__PURE__*/function (_PaletteWheel) {
  function PaletteRing(opt) {
    var _this;
    _classCallCheck(this, PaletteRing);
    _this = PaletteRing_callSuper(this, PaletteRing, [opt]);
    _this.width = _this.opt.paletteWidth || 200;
    _this.height = _this.opt.paletteWidth || 200;
    _this.thickness = _this.opt.paletteThickness || 16;
    return _this;
  }
  _inherits(PaletteRing, _PaletteWheel);
  return _createClass(PaletteRing, [{
    key: "template",
    value: function template() {
      return "\n      <div data-type=\"ring\" class=\"el-cp-palette-ring\">\n        <div ref=\"$wrap\" class=\"el-cp-palette-ring__wrap\">\n          <canvas ref=\"$colorwheel\" class=\"el-cp-palette-ring__canvas\"></canvas>\n          <i ref=\"$drag_pointer\" class=\"el-cp-palette-ring__pointer\"></i>\n        </div>\n      </div>\n    ";
    }
  }, {
    key: "setColorUI",
    value: function setColorUI(isEvent) {
      this.renderCanvas();
      this.setHueColor(null, isEvent);
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this.$store.hsv.h;
    }
  }, {
    key: "setHueColor",
    value: function setHueColor(e, isEvent) {
      if (!this.state.get('$el.width')) return;
      var _this$getRectangle = this.getRectangle(),
        minX = _this$getRectangle.minX,
        minY = _this$getRectangle.minY,
        width = _this$getRectangle.width,
        height = _this$getRectangle.height,
        radius = _this$getRectangle.radius,
        centerX = _this$getRectangle.centerX,
        centerY = _this$getRectangle.centerY;
      var position = this.getCurrentXY(e, this.getDefaultValue(), radius, centerX, centerY);
      var hue = calculateAngle(position.x - centerX, position.y - centerY);
      var positionForHalf = this.getCurrentXY(null, hue, radius - this.thickness * .5, centerX, centerY);
      // set drag pointer position
      this.refs.$drag_pointer.css({
        left: "".concat((positionForHalf.x - minX) / width * 100, "%"),
        top: "".concat((positionForHalf.y - minY) / height * 100, "%")
      });
      if (!isEvent) this.changeColor({
        type: 'hsv',
        h: hue
      });
    }
  }]);
}(PaletteWheel);

;// ./src/colorpicker/theme/ring/Control.js





function ring_Control_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ring_Control_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ring_Control_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ring_Control_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }







var ring_Control_Control = /*#__PURE__*/function (_UIElement) {
  function Control() {
    _classCallCheck(this, Control);
    return ring_Control_callSuper(this, Control, arguments);
  }
  _inherits(Control, _UIElement);
  return _createClass(Control, [{
    key: "components",
    value: function components() {
      return {
        Hue: Hue,
        Brightness: Brightness,
        Opacity: Opacity,
        ColorPreview: ColorPreview,
        Eyedropper: Eyedropper
      };
    }
  }, {
    key: "template",
    value: function template() {
      var $eyedropper = !!enableEyeDropper ? "\n      <div class=\"el-cp-color-control__left\">\n        <template target=\"Eyedropper\"></template>\n      </div>\n    " : '';
      var $colorSliders = this.opt.useOpacity ? "\n      <template target=\"Opacity\"></template>\n    " : "\n      <template target=\"Hue\"></template>\n      <template target=\"Brightness\"></template>\n    ";
      return "\n      <article class=\"el-cp-color-control\">\n        ".concat($eyedropper, "\n        <div class=\"el-cp-color-control__body\">\n          ").concat($colorSliders, "\n        </div>\n        <div class=\"el-cp-color-control__right\">\n          <template target=\"ColorPreview\"></template>\n        </div>\n      </article>\n    ");
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!!this.opt.useOpacity) this.Opacity.setColorUI();
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/theme/ring/index.js





function ring_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ring_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ring_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ring_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var RingColorPicker = /*#__PURE__*/function (_BaseColorPicker) {
  function RingColorPicker() {
    _classCallCheck(this, RingColorPicker);
    return ring_callSuper(this, RingColorPicker, arguments);
  }
  _inherits(RingColorPicker, _BaseColorPicker);
  return _createClass(RingColorPicker, [{
    key: "components",
    value: function components() {
      return {
        PaletteRing: PaletteRing,
        Palette: Palette,
        Control: ring_Control_Control,
        Forms: ColorInformation,
        Swatch: Swatch
      };
    }
  }, {
    key: "template",
    value: function template() {
      var _this$opt = this.opt,
        paletteWidth = _this$opt.paletteWidth,
        paletteThickness = _this$opt.paletteThickness;
      var styles = [paletteWidth && "--width: ".concat(paletteWidth, "px;"), paletteWidth && "--height: ".concat(paletteWidth, "px;"), "--thickness: ".concat(paletteThickness || 16, "px;")].filter(Boolean).join('');
      return "\n      <div class=\"el-colorpicker__wrap\">\n        <div class=\"el-colorpicker__body\" style=\"".concat(styles, "\">\n          <template target=\"PaletteRing\"></template>\n          <template target=\"Palette\"></template>\n        </div>\n        <template target=\"Control\"></template>\n        <template target=\"Forms\"></template>\n        <template target=\"Swatch\"></template>\n      </div>\n    ");
    }
  }]);
}(BaseColorPicker);

;// ./src/colorpicker/VerticalSlider.js





function VerticalSlider_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, VerticalSlider_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function VerticalSlider_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (VerticalSlider_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var VerticalSlider = /*#__PURE__*/function (_BaseSlider) {
  function VerticalSlider(opt) {
    _classCallCheck(this, VerticalSlider);
    return VerticalSlider_callSuper(this, VerticalSlider, [opt]);
  }

  /** get max height for vertical slider */
  _inherits(VerticalSlider, _BaseSlider);
  return _createClass(VerticalSlider, [{
    key: "getMaxDist",
    value: function getMaxDist() {
      return this.state.get('$container.height');
    }

    /** set mouse pointer for vertical slider */
  }, {
    key: "setMousePosition",
    value: function setMousePosition(y) {
      this.refs.$bar.css({
        top: "".concat(y, "%")
      });
    }

    /** get mouse position by pageY for vertical slider */
  }, {
    key: "getMousePosition",
    value: function getMousePosition(e) {
      return Event.pos(e).pageY;
    }

    /** get min position for vertial slider */
  }, {
    key: "getMinPosition",
    value: function getMinPosition() {
      return this.refs.$container.offset().top;
    }
  }]);
}(BaseSlider);

;// ./src/colorpicker/ui/control/HueVertical.js





function HueVertical_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, HueVertical_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function HueVertical_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (HueVertical_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

var HueVertical = /*#__PURE__*/function (_VerticalSlider) {
  function HueVertical(opt) {
    var _this;
    _classCallCheck(this, HueVertical);
    _this = HueVertical_callSuper(this, HueVertical, [opt]);
    _this.minValue = 0;
    _this.maxValue = 360;
    return _this;
  }
  _inherits(HueVertical, _VerticalSlider);
  return _createClass(HueVertical, [{
    key: "template",
    value: function template() {
      return "\n      <nav class=\"el-cp-slider el-cp-slider--vertical el-cp-slider--hue\">\n        <p ref=\"$container\" class=\"el-cp-slider__body\">\n          <i ref=\"$bar\" class=\"el-cp-slider__brick\"></i>\n        </p>\n      </nav>\n    ";
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this.$store.hsv.h;
    }
  }, {
    key: "refreshColorUI",
    value: function refreshColorUI(e) {
      var dist = this.getCalculatedDist(e);
      this.changeColor({
        h: dist / 100 * this.maxValue,
        type: 'hsv'
      });
    }
  }]);
}(VerticalSlider);

;// ./src/colorpicker/ui/control/OpacityVertical.js







function OpacityVertical_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function OpacityVertical_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? OpacityVertical_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : OpacityVertical_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function OpacityVertical_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, OpacityVertical_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function OpacityVertical_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (OpacityVertical_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function OpacityVertical_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }


var OpacityVertical_Opacity = /*#__PURE__*/function (_VerticalSlider) {
  function Opacity(opt) {
    _classCallCheck(this, Opacity);
    return OpacityVertical_callSuper(this, Opacity, [opt]);
  }
  _inherits(Opacity, _VerticalSlider);
  return _createClass(Opacity, [{
    key: "template",
    value: function template() {
      return "\n      <div class=\"el-cp-slider el-cp-slider--vertical el-cp-slider--alpha\">\n        <p ref=\"$container\" class=\"el-cp-slider__body\">\n          <span ref=\"$colorbar\" class=\"el-cp-slider__bar\"></span>\n          <i ref=\"$bar\" class=\"el-cp-slider__brick\"></i>\n        </p>\n      </div>\n    ";
    }
  }, {
    key: "refresh",
    value: function refresh() {
      OpacityVertical_superPropGet(Opacity, "refresh", this, 3)([]);
      this.setOpacityColorBar();
    }
  }, {
    key: "setOpacityColorBar",
    value: function setOpacityColorBar() {
      var start = color_default().format(OpacityVertical_objectSpread(OpacityVertical_objectSpread({}, this.$store.rgb), {}, {
        a: 0
      }), 'rgb');
      var end = color_default().format(OpacityVertical_objectSpread(OpacityVertical_objectSpread({}, this.$store.rgb), {}, {
        a: 1
      }), 'rgb');
      this.refs.$colorbar.css('background', "linear-gradient(to top, ".concat(end, ", ").concat(start, ")"));
    }
  }, {
    key: "getDefaultValue",
    value: function getDefaultValue() {
      return this.$store.alpha;
    }
  }, {
    key: "refreshColorUI",
    value: function refreshColorUI(e) {
      var dist = this.getCalculatedDist(e);
      this.setColorUI(dist / 100 * this.maxValue);
      this.changeColor({
        a: Math.floor(dist) / 100 * this.maxValue
      });
    }
  }]);
}(VerticalSlider);

;// ./src/colorpicker/theme/mini/Control.js





function mini_Control_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, mini_Control_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function mini_Control_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (mini_Control_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var mini_Control_Control = /*#__PURE__*/function (_UIElement) {
  function Control() {
    _classCallCheck(this, Control);
    return mini_Control_callSuper(this, Control, arguments);
  }
  _inherits(Control, _UIElement);
  return _createClass(Control, [{
    key: "components",
    value: function components() {
      return {
        HueVertical: HueVertical,
        OpacityVertical: OpacityVertical_Opacity
      };
    }
  }, {
    key: "template",
    value: function template() {
      var $opacity = this.opt.useOpacity ? "<template target=\"OpacityVertical\"></template>" : '';
      return "\n      <div class=\"el-cp-color-control\">\n        <template target=\"HueVertical\"></template>\n        ".concat($opacity, "\n      </div>\n    ");
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.HueVertical.setColorUI();
      if (!!this.opt.useOpacity) this.OpacityVertical.setColorUI();
    }
  }, {
    key: '@changeColor',
    value: function changeColor() {
      this.refresh();
    }
  }, {
    key: '@initColor',
    value: function initColor() {
      this.refresh();
    }
  }]);
}(colorpicker_UIElement);

;// ./src/colorpicker/theme/mini/index.js





function mini_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, mini_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function mini_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (mini_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var MiniColorPicker = /*#__PURE__*/function (_BaseColorPicker) {
  function MiniColorPicker() {
    _classCallCheck(this, MiniColorPicker);
    return mini_callSuper(this, MiniColorPicker, arguments);
  }
  _inherits(MiniColorPicker, _BaseColorPicker);
  return _createClass(MiniColorPicker, [{
    key: "components",
    value: function components() {
      return {
        Palette: Palette,
        Control: mini_Control_Control,
        Swatch: Swatch
      };
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <div class=\"el-colorpicker__wrap\">\n        <div class=\"el-colorpicker__body\">\n          <div class=\"el-colorpicker__palette\">\n            <template target=\"Palette\"></template>\n          </div>\n          <template target=\"Control\"></template>\n        </div>\n        <template target=\"Swatch\"></template>\n      </div>\n    ";
    }
  }]);
}(BaseColorPicker);

;// ./src/colorpicker/theme/none/index.js





function none_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, none_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function none_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (none_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var none_MiniColorPicker = /*#__PURE__*/function (_BaseColorPicker) {
  function MiniColorPicker() {
    _classCallCheck(this, MiniColorPicker);
    return none_callSuper(this, MiniColorPicker, arguments);
  }
  _inherits(MiniColorPicker, _BaseColorPicker);
  return _createClass(MiniColorPicker, [{
    key: "components",
    value: function components() {
      return {
        Swatch: Swatch
      };
    }
  }, {
    key: "template",
    value: function template() {
      var colors = this.$store.dispatch('/swatch.index');
      return "\n      <div class=\"el-colorpicker__wrap\">\n        ".concat(colors.length > 0 ? "\n          <template target=\"Swatch\"></template>\n        " : "\n          <div class=\"el-colorpicker__empty\">No colorSet</div>\n        ", "\n      </div>\n    ");
    }
  }]);
}(BaseColorPicker);

;// ./src/colorpicker/defaults.js
/* harmony default export */ var defaults = ({
  // values
  container: undefined,
  type: null,
  // default,circle,ring,mini,none
  color: '#ffffff',
  format: 'hex',
  // hex,rgb,hsl
  outputFormat: undefined,
  // hex,rgb,hsl
  useInformation: true,
  useOpacity: true,
  paletteWidth: 200,
  paletteHeight: undefined,
  paletteThickness: 16,
  swatchTitle: 'Color palette',
  swatchColors: [],
  // callback functions
  onInit: undefined,
  onDestroy: undefined,
  onChange: undefined,
  onChanged: undefined,
  onChangeFormat: undefined
});
;// ./src/colorpicker/index.js







/**
 * ColorPicker
 *
 * @param {object} options
 */
function ColorPicker(options) {
  var _this = this;
  var core;

  // merge options
  options = Object.assign({}, defaults, options);

  /**
   * switch type
   *
   * @param {string} type
   * @param {ColorPicker} self
   */
  var switchType = function switchType(type) {
    var self = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    switch (type) {
      case 'circle':
        core = new CircleColorPicker(options);
        break;
      case 'ring':
        core = new RingColorPicker(options);
        break;
      case 'mini':
        core = new MiniColorPicker(options);
        break;
      case 'none':
        core = new none_MiniColorPicker(options);
        break;
      default:
        core = new DefaultColorPicker(options);
        break;
    }
    _this.opt = core.opt;
    _this.$el = core.$root.el;
  };
  switchType(options.type);

  /**
   * set type
   *
   * @param {string} type
   */
  this.setType = function (type) {
    options = Object.assign({}, this.opt, {
      type: type,
      color: core.getColor()
    });
    core.destroy();
    switchType(type, this);
  };
  this.initialize = function () {
    core.initialize();
    _this.opt = core.opt;
    _this.$el = core.$root.el;
  };
  this.destroy = function () {
    core.destroy();
    _this.opt = null;
    _this.$el = null;
  };
  this.getColor = function (format) {
    return core.getColor(format);
  };
  this.setColor = function (color, format) {
    return core.setColor(color, format);
  };
  this.setOption = function (options) {
    return core.setOption(options);
  };
}
/* harmony default export */ var colorpicker = (ColorPicker);
;// ./src/gradientpicker/default/EmbedColorPicker.js






function EmbedColorPicker_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function EmbedColorPicker_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? EmbedColorPicker_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : EmbedColorPicker_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function EmbedColorPicker_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, EmbedColorPicker_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function EmbedColorPicker_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (EmbedColorPicker_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var EmbedColorPicker = /*#__PURE__*/function (_UIElement) {
  function EmbedColorPicker() {
    _classCallCheck(this, EmbedColorPicker);
    return EmbedColorPicker_callSuper(this, EmbedColorPicker, arguments);
  }
  _inherits(EmbedColorPicker, _UIElement);
  return _createClass(EmbedColorPicker, [{
    key: "afterRender",
    value: function afterRender() {
      var _this = this;
      var options = this.opt.colorpicker || {
        type: "sketch"
      };
      this.colorPicker = new colorpicker(EmbedColorPicker_objectSpread(EmbedColorPicker_objectSpread({
        position: "inline",
        container: this.refs.$el.el
      }, options), {}, {
        onChange: function onChange(c) {
          _this.changeColor(c);
        }
      }));
    }
  }, {
    key: "template",
    value: function template() {
      return "<div ref=\"$color\"></div>";
    }
  }, {
    key: "changeColor",
    value: function changeColor(color) {
      this.$store.emit('changeEmbedColorPicker', color);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.colorPicker.setColor(color);
    }
  }]);
}(colorpicker_UIElement);

;// ./src/util/functions/func.js


function get(obj, key, callback) {
  var returnValue = defaultValue(obj[key], key);
  if (isFunction(callback)) return callback(returnValue);
  return returnValue;
}
function defaultValue(value, defaultValue) {
  return typeof value == 'undefined' ? defaultValue : value;
}
function isUndefined(value) {
  return typeof value == 'undefined' || value === null;
}
function isNotUndefined(value) {
  return !isUndefined(value);
}
function isArray(value) {
  return Array.isArray(value);
}
function isString(value) {
  return typeof value === 'string';
}
function isObject(value) {
  return _typeof(value) === 'object' && !isArray(value) && !isNumber(value) && !isString(value) && value !== null;
}
function isFunction(value) {
  return typeof value === 'function';
}
function isNumber(value) {
  return typeof value === 'number';
}
function clone(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    return null;
  }
}
function repeat(count) {
  return _toConsumableArray(Array(count));
}
var html = function html(strings) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var short_tag_regexp = /\<(\w*)([^\>]*)\/\>/gim;
  var HTML_TAG = {
    'image': true,
    'input': true,
    'br': true,
    'path': true
  };
  var results = strings.map(function (it, index) {
    var results = args[index] || '';
    if (isFunction(results)) results = results();
    if (!isArray(results)) results = [results];
    results = results.map(function (r) {
      if (isObject(r) && !isArray(r)) {
        return Object.keys(r).map(function (key) {
          return "".concat(key, "=\"").concat(r[key], "\"");
        }).join(' ');
      }
      return r;
    }).join('');
    return it + results;
  }).join('');
  results = results.replace(short_tag_regexp, function (match, p1) {
    if (HTML_TAG[p1.toLowerCase()]) {
      return match;
    } else {
      return match.replace('/>', "></".concat(p1, ">"));
    }
  });
  return results;
};
;// ./src/gradientpicker/default/Length.js




var _stringToPercent = {
  center: 50,
  top: 0,
  left: 0,
  right: 100,
  bottom: 100
};
var Position = /*#__PURE__*/_createClass(function Position() {
  _classCallCheck(this, Position);
});
Position.CENTER = "center";
Position.TOP = "top";
Position.RIGHT = "right";
Position.LEFT = "left";
Position.BOTTOM = "bottom";
var REG_CSS_UNIT = /([\d.]+)(px|pt|fr|r?em|deg|vh|vw|m?s|%|g?rad|turn)/gi;
var Length = /*#__PURE__*/function () {
  function Length() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    _classCallCheck(this, Length);
    this.value = value;
    this.unit = unit;
  }
  return _createClass(Length, [{
    key: Symbol.toPrimitive,
    value: function value(hint) {
      if (hint == "number") {
        return this.value;
      }
      return this.toString();
    }
  }, {
    key: "toString",
    value: function toString() {
      switch (this.unit) {
        case 'string':
        case 'number':
          return this.value + '';
        case 'var':
          return "var(--".concat(this.value, ")");
        case 'calc':
          return "calc(".concat(this.value, ")");
        default:
          return this.value + this.unit;
      }
    }
  }, {
    key: "isUnitType",
    value: function isUnitType(unit) {
      return this.unit === unit;
    }
  }, {
    key: "isCalc",
    value: function isCalc() {
      return this.isUnitType('calc');
    }
  }, {
    key: "isFr",
    value: function isFr() {
      return this.isUnitType('fr');
    }
  }, {
    key: "isPercent",
    value: function isPercent() {
      return this.isUnitType('%');
    }
  }, {
    key: "isPx",
    value: function isPx() {
      return this.isUnitType('px');
    }
  }, {
    key: "isEm",
    value: function isEm() {
      return this.isUnitType('em');
    }
  }, {
    key: "isDeg",
    value: function isDeg() {
      return this.isUnitType('deg');
    }
  }, {
    key: "isSecond",
    value: function isSecond() {
      return this.isUnitType('s');
    }
  }, {
    key: "isMs",
    value: function isMs() {
      return this.isUnitType('ms');
    }
  }, {
    key: "isNumber",
    value: function isNumber() {
      return this.isUnitType('number');
    }
  }, {
    key: "isString",
    value: function isString() {
      return this.isUnitType('');
    }
  }, {
    key: "isVar",
    value: function isVar() {
      return this.isUnitType('--');
    }
  }, {
    key: "set",
    value: function set(value) {
      this.value = value;
      return this;
    }
  }, {
    key: "add",
    value: function add(obj) {
      this.value += +obj;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(obj) {
      return this.add(-1 * obj);
    }
  }, {
    key: "mul",
    value: function mul(obj) {
      this.value *= +obj;
      return this;
    }
  }, {
    key: "div",
    value: function div(obj) {
      this.value /= +obj;
      return this;
    }
  }, {
    key: "mod",
    value: function mod(obj) {
      this.value %= +obj;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Length(this.value, this.unit);
    }
  }, {
    key: "getUnitName",
    value: function getUnitName() {
      return this.unit === "%" ? "percent" : this.unit;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        value: this.value,
        unit: this.unit
      };
    }
  }, {
    key: "rate",
    value: function rate(value) {
      return value / this.value;
    }
  }, {
    key: "stringToPercent",
    value: function stringToPercent() {
      if (isNotUndefined(_stringToPercent[this.value])) {
        return Length.percent(_stringToPercent[this.value]);
      }
      return Length.percent(0);
    }
  }, {
    key: "stringToEm",
    value: function stringToEm(maxValue) {
      return this.stringToPercent().toEm(maxValue);
    }
  }, {
    key: "stringToPx",
    value: function stringToPx(maxValue) {
      return this.stringToPercent().toPx(maxValue);
    }
  }, {
    key: "toPercent",
    value: function toPercent(maxValue) {
      var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
      if (this.isPercent()) {
        return this;
      } else if (this.isPx()) {
        return Length.percent(this.value * 100 / maxValue);
      } else if (this.isEm()) {
        return Length.percent(this.value * fontSize * 100 / maxValue);
      } else if (this.isString()) {
        return this.stringToPercent(maxValue);
      } else if (this.isDeg()) {
        return Length.percent(this.value / 360 * 100);
      }
    }
  }, {
    key: "toEm",
    value: function toEm(maxValue) {
      var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
      if (this.isPercent()) {
        return Length.em(this.value / 100 * maxValue / fontSize);
      } else if (this.isPx()) {
        return Length.em(this.value / fontSize);
      } else if (this.isEm()) {
        return this;
      } else if (this.isString()) {
        return this.stringToEm(maxValue);
      }
    }
  }, {
    key: "toPx",
    value: function toPx(maxValue) {
      var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
      if (this.isPercent()) {
        return Length.px(this.value / 100 * maxValue);
      } else if (this.isPx()) {
        return this;
      } else if (this.isEm()) {
        return Length.px(this.value / 100 * maxValue / 16);
      } else if (this.isString()) {
        return this.stringToPx(maxValue);
      }
    }
  }, {
    key: "toSecond",
    value: function toSecond() {
      if (this.isSecond()) {
        return this;
      } else if (this.isMs()) {
        return Length.second(this.value / 1000);
      }
    }
  }, {
    key: "toMs",
    value: function toMs() {
      if (this.isSecond()) {
        return Length.ms(this.value * 1000);
      } else if (this.isMs()) {
        return this;
      }
    }
  }, {
    key: "to",
    value: function to(unit, maxValue) {
      var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16;
      if (unit === "px") {
        return this.toPx(maxValue, fontSize);
      } else if (unit === "%" || unit === "percent") {
        return this.toPercent(maxValue, fontSize);
      } else if (unit === "em") {
        return this.toEm(maxValue, fontSize);
      }
    }
  }, {
    key: "toUnit",
    value: function toUnit(unit) {
      return new Length(this.value, unit);
    }
  }, {
    key: "calculate",
    value: function calculate(type, dist) {
      var func = this[type];
      if (func) {
        return func.call(this, dist);
      }
      return this;
    }
  }, {
    key: "includes",
    value: function includes() {
      for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
      }
      return arr.includes(this.value);
    }
  }, {
    key: "round",
    value: function round(k) {
      return new Length(math_round(this.value, k), this.unit);
    }
  }, {
    key: "equals",
    value: function equals(t) {
      return this.value === t.value && this.unit === t.unit;
    }
  }], [{
    key: "min",
    value: function min() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var min = args.shift();
      for (var i = 0, len = args.length; i < len; i++) {
        if (min.value > args[i].value) {
          min = args[i];
        }
      }
      return min;
    }
  }, {
    key: "max",
    value: function max() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var max = args.shift();
      for (var i = 0, len = args.length; i < len; i++) {
        if (max.value < args[i].value) {
          max = args[i];
        }
      }
      return max;
    }
  }, {
    key: "string",
    value: function string(value) {
      return new Length(value + "", "");
    }
  }, {
    key: "number",
    value: function number(value) {
      return new Length(+value, 'number');
    }
  }, {
    key: "px",
    value: function px(value) {
      return new Length(+value, "px");
    }
  }, {
    key: "em",
    value: function em(value) {
      return new Length(+value, "em");
    }
  }, {
    key: "percent",
    value: function percent(value) {
      return new Length(+value, "%");
    }
  }, {
    key: "deg",
    value: function deg(value) {
      return new Length(+value, "deg");
    }
  }, {
    key: "fr",
    value: function fr(value) {
      return new Length(+value, "fr");
    }
  }, {
    key: "second",
    value: function second(value) {
      return new Length(+value, 's');
    }
  }, {
    key: "ms",
    value: function ms(value) {
      return new Length(+value, 'ms');
    }
  }, {
    key: "var",
    value: function _var(value) {
      return new Length(value + '', '--');
    }

    /**
     * return calc()  css fuction string
     *
     * Length.calc(`${Length.percent(100)} - ${Length.px(10)}`)
     *
     * @param {*} str
     */
  }, {
    key: "calc",
    value: function calc(str) {
      return new Length(str, "calc");
    }
  }, {
    key: "parse",
    value: function parse(obj) {
      if (isString(obj)) {
        if (obj.indexOf("calc(") > -1) {
          return new Length(obj.split("calc(")[1].split(")")[0], "calc");
        } else {
          var arr = obj.replace(REG_CSS_UNIT, "$1 $2").split(" ");
          var isNumberString = +arr[0] == arr[0];
          if (isNumberString) {
            return new Length(+arr[0], arr[1]);
          } else {
            return new Length(arr[0]);
          }
        }
      }
      if (obj instanceof Length) {
        return obj;
      } else if (obj.unit) {
        if (obj.unit == "%" || obj.unit == "percent") {
          var value = 0;
          if (isNotUndefined(obj.percent)) {
            value = obj.percent;
          } else if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.percent(value);
        } else if (obj.unit == "px") {
          var value = 0;
          if (isNotUndefined(obj.px)) {
            value = obj.px;
          } else if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.px(value);
        } else if (obj.unit == "em") {
          var value = 0;
          if (isNotUndefined(obj.em)) {
            value = obj.em;
          } else if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.em(value);
        } else if (obj.unit == "deg") {
          var value = 0;
          if (isNotUndefined(obj.deg)) {
            value = obj.deg;
          } else if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.deg(value);
        } else if (obj.unit == "s") {
          var value = 0;
          if (isNotUndefined(obj.second)) {
            value = obj.second;
          } else if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.second(value);
        } else if (obj.unit == "ms") {
          var value = 0;
          if (isNotUndefined(obj.ms)) {
            value = obj.ms;
          } else if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.ms(value);
        } else if (obj.unit == "number") {
          var value = 0;
          if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.number(value);
        } else if (obj.unit == "--") {
          var value = 0;
          if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.var(value);
        } else if (obj.unit === "" || obj.unit === "string") {
          var value = "";
          if (isNotUndefined(obj.str)) {
            value = obj.str;
          } else if (isNotUndefined(obj.value)) {
            value = obj.value;
          }
          return Length.string(value);
        }
      }
      return Length.string(obj);
    }
  }]);
}();
Length.auto = Length.string("auto");
;// ./src/gradientpicker/default/GradientEditor.js







function GradientEditor_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, GradientEditor_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function GradientEditor_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (GradientEditor_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function GradientEditor_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }




var radialTypeList = [{
  label: 'Коло',
  value: 'circle'
}, {
  label: 'Коло (найближча сторона)',
  value: 'circle closest-side'
}, {
  label: 'Коло (найближчий кут)',
  value: 'circle closest-corner'
}, {
  label: 'Коло (найвіддаленіша сторона)',
  value: 'circle farthest-side'
}, {
  label: 'Коло (найвіддаленіший кут)',
  value: 'circle farthest-corner'
}, {
  label: 'Еліпс',
  value: 'ellipse'
}, {
  label: 'Еліпс (найближча сторона)',
  value: 'ellipse closest-side'
}, {
  label: 'Еліпс (найближчий кут)',
  value: 'ellipse closest-corner'
}, {
  label: 'Еліпс (найвіддаленіша сторона)',
  value: 'ellipse farthest-side'
}, {
  label: 'Еліпс (найвіддаленіший кут)',
  value: 'ellipse farthest-corner'
}];
var GradientEditor = /*#__PURE__*/function (_UIElement) {
  function GradientEditor() {
    _classCallCheck(this, GradientEditor);
    return GradientEditor_callSuper(this, GradientEditor, arguments);
  }
  _inherits(GradientEditor, _UIElement);
  return _createClass(GradientEditor, [{
    key: "initialize",
    value: function initialize() {
      GradientEditor_superPropGet(GradientEditor, "initialize", this, 3)([]);
      var colorsteps = [{
        offset: Length.percent(0),
        cut: false,
        color: 'yellow'
      }, {
        offset: Length.percent(100),
        cut: false,
        color: 'red'
      }];
      this.type = 'linear-gradient';
      this.index = 0;
      this.colorsteps = colorsteps;
      this.radialPosition = [Length.percent(50), Length.percent(50)];
      this.radialType = 'ellipse';
    }
  }, {
    key: '@changeRadialPosition',
    value: function changeRadialPosition(posX, posY) {
      if (this.type.includes('linear-gradient')) {
        this['@changeKeyValue']('angle', Length.deg(calculateAngle(posX.value - 50, posY.value - 50)).round(1000));
      } else {
        this['@changeKeyValue']('radialPosition', [posX, posY]);
      }
      this.reloadInputValue();
    }
  }, {
    key: '@setGradientEditor',
    value: function setGradientEditor(str) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear-gradient';
      var angle = arguments.length > 3 ? arguments[3] : undefined;
      var radialPosition = arguments.length > 4 ? arguments[4] : undefined;
      var radialType = arguments.length > 5 ? arguments[5] : undefined;
      var results = color_default().convertMatches(str);
      var colorsteps = results.str.split(',').map(function (it) {
        return it.trim();
      }).map(function (it) {
        var _it$split$filter = it.split(' ').filter(function (str) {
            return str.length;
          }),
          _it$split$filter2 = _slicedToArray(_it$split$filter, 3),
          color = _it$split$filter2[0],
          offset1 = _it$split$filter2[1],
          offset2 = _it$split$filter2[2];
        color = color_default().reverseMatches(color, results.matches);
        var cut = false;
        if (offset2) {
          cut = true;
        }
        var offset = cut ? Length.parse(offset2) : Length.parse(offset1);
        if (offset.isDeg()) {
          offset = Length.percent(offset.value / 360 * 100);
        }
        return {
          color: color,
          offset: offset,
          cut: cut
        };
      });
      if (colorsteps.length == 1) {
        colorsteps.push({
          color: colorsteps[0].color,
          offset: Length.percent(100),
          cut: false
        });
      }
      this.cachedStepListRect = null;
      this.colorsteps = colorsteps;
      this.index = index;
      this.type = type;
      this.angle = Length.parse(angle || '90deg');
      this.radialPosition = radialPosition || [Length.percent(50), Length.percent(50)];
      this.radialType = radialType;
      this.refresh();
      this.selectStep(index);
      this.reloadInputValue();
    }
  }, {
    key: "template",
    value: function template() {
      var _this = this;
      return /*html*/"\n        <div class='gradient-editor' data-selected-editor='".concat(this.type, "'>\n            <div class='gradient-steps' data-editor='gradient'>\n                <div class=\"hue-container\" ref=\"$back\"></div>\n                <div class=\"hue\" ref=\"$steps\">\n                    <div class='step-list' ref=\"$stepList\" ></div>\n                </div>\n            </div>\n            <div class='sub-editor' ref='$subEditor'>\n              <div class='field ' data-editor='tools'>\n                    <div class='field__top-row'>\n                        <label for=\"cut\" class=\"connect field__label\">\n                            <input type='checkbox' ref='$cut' id=\"cut\" checked />\u041E\u0431'\u0454\u0434\u043D\u0430\u0442\u0438\n                        </label>\n                        <button class=\"remove-color\" type=\"button\" ref=\"$remove\" title=\"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440\">&times;</button>\n                    </div>\n              </div>\n              <div data-editor='angle' class=\"field\">\n              <div class=\"field__top-row\">\n                <label class=\"field__label\">\u041A\u0443\u0442</label>\n                 <div class=\"field__input\"><input class=\"text-input\" type='number' data-key='angle' min='-720' max=\"720\" step='0.1' ref='$angleNumber' /><sup>\xB0</sup></div>\n               </div>\n                <div class=\"field__bottom-row\">\n                  <input type='range' data-key='angle' min='-720' max=\"720\" step='0.1' ref='$angle' />\n                </div>\n              </div>\n              <div data-editor='centerX'  class=\"field\">\n                <div  class=\"field__top-row\">\n                    <label  class=\"field__label\">\u041F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0456</label>\n                  <input class=\"text-input\" type='number' data-key='centerX' min='-100' max=\"100\" step='0.1' ref='$centerXNumber' />\n                  <select class=\"select\" ref='$centerXSelect'>\n                      <option value='%'>%</option>\n                      <option value='px'>px</option>\n                        <!-- <option value='em'>em</option>-->\n                    </select>\n                  </div>\n                <div class=\"field__bottom-row\">\n                    <input type='range' data-key='centerX' min='-100' max=\"100\" step='0.1' ref='$centerX' />\n                </div>\n              </div>\n              <div data-editor='centerY' class=\"field\">\n              <div  class=\"field__top-row\">\n                <label class=\"field__label\">\u041F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0456</label>\n                <input class=\"text-input\" type='number' data-key='centerX' min='-100' max=\"100\" step='0.1' ref='$centerYNumber' />\n                 <select class=\"select\" ref='$centerYSelect'>\n                      <option value='%'>%</option>\n                      <option value='px'>px</option>\n                       <!-- <option value='em'>em</option>-->\n                    </select>\n                </div>\n                <div class='field__bottom-row'>\n                  <div><input type='range' data-key='centerY' min='-100' max=\"100\" step='0.1' ref='$centerY' /></div>\n                </div>\n              </div>\n              <div data-editor='radialType' class=\"field\">\n                <div class=\"field__top-row\">\n                <label class=\"field__label\">\u0422\u0438\u043F</label>\n                <select ref='$radialType'>\n                  ").concat(radialTypeList.map(function (k) {
        var selected = _this.radialType === k.value ? 'selected' : '';
        return "<option value=\"".concat(k.value, "\" ").concat(selected, ">").concat(k.label, "</option>");
      }).join(''), "\n                </select>\n                </div>\n              </div>\n            </div>\n        </div>\n      ");
    }
  }, {
    key: 'input $angle',
    value: function input_$angle(e) {
      this.refs.$angleNumber.val(this.refs.$angle.val());
      this['@changeKeyValue']('angle', Length.deg(this.refs.$angle.val()));
    }
  }, {
    key: 'input $angleNumber',
    value: function input_$angleNumber(e) {
      this.refs.$angle.val(this.refs.$angleNumber.val());
      this['@changeKeyValue']('angle', Length.deg(this.refs.$angle.val()));
    }
  }, {
    key: 'input $centerX',
    value: function input_$centerX(e) {
      this.refs.$centerXNumber.val(this.refs.$centerX.val());
      this['@changeKeyValue']('radialPositionX');
    }
  }, {
    key: 'input $centerXNumber',
    value: function input_$centerXNumber(e) {
      this.refs.$centerX.val(this.refs.$centerXNumber.val());
      this['@changeKeyValue']('radialPositionX');
    }
  }, {
    key: 'input $centerY',
    value: function input_$centerY(e) {
      this.refs.$centerYNumber.val(this.refs.$centerY.val());
      this['@changeKeyValue']('radialPositionY');
    }
  }, {
    key: 'input $centerYNumber',
    value: function input_$centerYNumber(e) {
      this.refs.$centerY.val(this.refs.$centerYNumber.val());
      this['@changeKeyValue']('radialPositionX');
    }
  }, {
    key: 'change $centerXSelect',
    value: function change_$centerXSelect(e) {
      this['@changeKeyValue']('radialPositionX');
    }
  }, {
    key: 'change $centerYSelect',
    value: function change_$centerYSelect(e) {
      this['@changeKeyValue']('radialPositionY');
    }
  }, {
    key: "radialPositionX",
    get: function get() {
      return new Length(+this.refs.$centerX.val(), this.refs.$centerXSelect.val());
    }
  }, {
    key: "radialPositionY",
    get: function get() {
      return new Length(+this.refs.$centerY.val(), this.refs.$centerYSelect.val());
    }
  }, {
    key: 'change $radialType',
    value: function change_$radialType(e) {
      this['@changeKeyValue']('radialType', this.refs.$radialType.val());
    }
  }, {
    key: '@changeKeyValue',
    value: function changeKeyValue(key, value) {
      if (key === 'angle') {
        value = value.value;
      }
      if (key === 'radialPositionX' || key === 'radialPositionY') {
        this['radialPosition'] = [this.radialPositionX, this.radialPositionY];
      } else {
        this[key] = value;
      }
      this.updateData();
    }
  }, {
    key: '@changeColorStepOffset',
    value: function changeColorStepOffset(key, value) {
      if (this.currentStep) {
        this.currentStep.offset = value.clone();
        this.$currentStep.css({
          left: this.currentStep.offset
        });
        this.setColorUI();
        this.updateData();
      }
    }
  }, {
    key: 'click $back',
    value: function click_$back(e) {
      if (this.startXY) return;
      var rect = this.refs.$stepList.rect();
      var minX = rect.x;
      var maxX = rect.right;
      var x = e.xy.x;
      if (x < minX) x = minX;else if (x > maxX) x = maxX;
      var percent = (x - minX) / rect.width * 100;
      var list = this.colorsteps.map(function (it, index) {
        return {
          index: index,
          color: it.color,
          offset: it.offset
        };
      });
      var prev = list.filter(function (it) {
        return it.offset.value <= percent;
      }).pop();
      var next = list.filter(function (it) {
        return it.offset.value >= percent;
      }).shift();
      if (prev && next) {
        this.colorsteps.splice(next.index, 0, {
          cut: false,
          offset: Length.percent(percent),
          color: color_default().mix(prev.color, next.color, (percent - prev.offset.value) / (next.offset.value - prev.offset.value))
        });
      } else if (prev) {
        this.colorsteps.splice(prev.index + 1, 0, {
          cut: false,
          offset: Length.percent(percent),
          color: 'rgba(0, 0, 0, 1)'
        });
      } else if (next) {
        this.colorsteps.splice(next.index - 1, 0, {
          cut: false,
          offset: Length.percent(percent),
          color: 'rgba(0, 0, 0, 1)'
        });
      } else {
        this.colorsteps.push({
          cut: false,
          offset: Length.percent(0),
          color: 'rgba(0, 0, 0, 1)'
        });
      }
      this.refresh();
      this.updateData();
    }
  }, {
    key: "reloadStepList",
    value: function reloadStepList() {
      this.refs.$stepList.html(this.colorsteps.map(function (it, index) {
        return "<div class='step' data-index='".concat(index, "' data-cut='").concat(it.cut, "' style='left: ").concat(it.offset, ";'>\n        <div class='color-view' style=\"background-color: ").concat(it.color, "\"></div>\n        <div class='arrow' style=\"background-color: ").concat(it.color, "\"></div>\n      </div>");
      }).join(''));
    }
  }, {
    key: 'click $cut',
    value: function click_$cut() {
      if (this.currentStep) {
        this.currentStep.cut = this.refs.$cut.checked();
        this.$currentStep.attr('data-cut', this.currentStep.cut);
        this.setColorUI();
        this.updateData();
      }
    }
  }, {
    key: 'click $remove',
    value: function click_$remove() {
      this.removeStep(this.index);
    }
  }, {
    key: "removeStep",
    value: function removeStep(index) {
      // if (this.colorsteps.length === 2) return;
      this.colorsteps.splice(index, 1);
      var currentStep = this.colorsteps[index];
      var currentIndex = index;
      if (!currentStep) {
        currentStep = this.colorsteps[index - 1];
        currentIndex = index - 1;
      }
      if (currentStep) {
        this.selectStep(currentIndex);
      }
      this.refresh();
      this.updateData();
    }
  }, {
    key: "selectStep",
    value: function selectStep(index) {
      this.index = index;
      this.currentStep = this.colorsteps[index];
      this.refs.$stepList.attr('data-selected-index', index);
      this.$currentStep = this.refs.$stepList.$("[data-index=\"".concat(index.toString(), "\"]"));
      if (this.$currentStep) {
        this.$colorView = this.$currentStep.$('.color-view');
        this.$arrow = this.$currentStep.$('.arrow');
        this.refs.$cut.el.checked = this.currentStep.cut;
      }
      this.prev = this.colorsteps[index - 1];
      this.next = this.colorsteps[index + 1];
    }
  }, {
    key: 'mousedown $stepList .step',
    value: function mousedown_$stepList_Step(e) {
      var index = +e.$delegateTarget.attr('data-index');
      if (e.altKey) {
        this.removeStep(index);
        // return false;
      } else {
        this.selectStep(index);
        this.startXY = e.xy;
        this.$store.emit('selectColorStep', this.currentStep.color);
        this.refs.$cut.checked(this.currentStep.cut);
        // this.refs.$offset.val(this.currentStep.offset.value);
        this.refs.$stepList.attr('data-selected-index', index);
        this.cachedStepListRect = this.refs.$stepList.rect();
      }
    }
  }, {
    key: "getStepListRect",
    value: function getStepListRect() {
      return this.cachedStepListRect;
    }
  }, {
    key: 'mouseup document',
    value: function mouseup_document(e) {
      if (this.startXY) {
        this.startXY = null;
      }
    }
  }, {
    key: 'mousemove document',
    value: function mousemove_document(e) {
      if (!this.startXY) return;
      var dx = e.xy.x - this.startXY.x;
      var dy = e.xy.y - this.startXY.y;
      var rect = this.getStepListRect();
      var minX = rect.x;
      var maxX = rect.right;
      var x = this.startXY.x + dx;
      if (x < minX) x = minX;else if (x > maxX) x = maxX;
      var percent = (x - minX) / rect.width * 100;
      if (this.prev) {
        if (this.prev.offset.value > percent) {
          percent = this.prev.offset.value;
        }
      }
      if (this.next) {
        if (this.next.offset.value < percent) {
          percent = this.next.offset.value;
        }
      }
      this.currentStep.offset.set(math_round(percent, 100));
      this.$currentStep.css({
        left: Length.percent(percent)
      });
      // this.refs.$offset.val(this.currentStep.offset.value);
      this.setColorUI();
      this.updateData();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.reloadStepList();
      this.setColorUI();
    }
  }, {
    key: "getLinearGradient",
    value: function getLinearGradient() {
      var _this2 = this;
      if (this.colorsteps.length === 0) {
        return '';
      }
      if (this.colorsteps.length === 1) {
        var colorstep = this.colorsteps[0];
        return "linear-gradient(to right, ".concat(colorstep.color, " ").concat(colorstep.offset, ", ").concat(colorstep.color, " 100%)");
      }
      return "linear-gradient(to right, ".concat(this.colorsteps.map(function (it, index) {
        if (it.cut) {
          var prev = _this2.colorsteps[index - 1];
          if (prev) {
            return "".concat(it.color, " ").concat(prev.offset, " ").concat(it.offset);
          } else {
            return "".concat(it.color, " ").concat(it.offset);
          }
        } else {
          return "".concat(it.color, " ").concat(it.offset);
        }
      }).join(','), ")");
    }
  }, {
    key: "setColorUI",
    value: function setColorUI() {
      this.refs.$stepList.css("background-image", this.getLinearGradient());
      this.refs.$el.attr("data-selected-editor", this.type);
    }
  }, {
    key: "reloadInputValue",
    value: function reloadInputValue() {
      // this.refs.$offset.val(this.currentStep.offset.value);
      // this.refs.$offsetNumber.val(this.currentStep.offset.value);
      // this.refs.$offsetSelect.val(this.currentStep.offset.unit);

      this.refs.$angle.val(this.angle.value);
      this.refs.$angleNumber.val(this.angle.value);
      var radialPosition = this.radialPosition.map(function (it) {
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
  }, {
    key: '@setColorStepColor',
    value: function setColorStepColor(color) {
      if (this.currentStep) {
        this.currentStep.color = color;
        this.$colorView.css({
          'background-color': color
        });
        this.$arrow.css({
          'background-color': color
        });
        this.setColorUI();
        this.updateData();
      }
    }
  }, {
    key: "updateData",
    value: function updateData() {
      this.$store.emit('changeGradientEditor', {
        type: this.type,
        index: this.index,
        angle: this.angle,
        colorsteps: this.colorsteps,
        radialPosition: this.radialPosition,
        radialType: this.radialType
      });
    }
  }]);
}(colorpicker_UIElement);

;// ./src/gradientpicker/default/image-resource/Item.js




function Item_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Item_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Item_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Item_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

function _traverse(obj) {
  var results = [];
  obj.layers.length && obj.layers.forEach(function (it) {
    results.push.apply(results, _toConsumableArray(_traverse(it)));
  });
  results.push(obj);
  return results;
}
var Item = /*#__PURE__*/function () {
  function Item() {
    var _this = this;
    var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Item);
    if (json instanceof Item) {
      json = json.toJSON();
    }
    this.json = this.convert(Item_objectSpread(Item_objectSpread({}, this.getDefaultObject()), json));
    this.ref = new Proxy(this, {
      get: function get(target, key) {
        var originMethod = target[key];
        if (isFunction(originMethod)) {
          // method tracking
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return originMethod.apply(target, args);
          };
        } else {
          // getter or json property
          return originMethod || target.json[key];
        }
      },
      set: function set(target, key, value) {
        // Dom 객체가 오면 자동으로 입력 해줌
        if (value && value.realVal && isFunction(value.realVal)) {
          value = value.realVal();
        }
        if (_this.checkField(key, value)) {
          target.json[key] = value;
        } else {
          throw new Error("".concat(value, " is invalid as ").concat(key, " property value."));
        }
        return true;
      }
    });
    return this.ref;
  }

  /***********************************
   *
   * override
   *
   **********************************/
  return _createClass(Item, [{
    key: "getDefaultTitle",
    value: function getDefaultTitle() {
      return "Item";
    }

    /**
     * check attribute object
     */
  }, {
    key: "isAttribute",
    value: function isAttribute() {
      return false;
    }

    /***********************************
     *
     * getter
     *
     **********************************/
  }, {
    key: "title",
    get: function get() {
      return this.json.name || this.getDefaultTitle();
    }

    /**
     * get id
     */
  }, {
    key: "id",
    get: function get() {
      return this.json.id;
    }
  }, {
    key: "layers",
    get: function get() {
      return this.json.layers;
    }
  }, {
    key: "parent",
    get: function get() {
      return this.json.parent;
    }
  }, {
    key: "is",
    value: function is() {
      if (!this.json) return false;
      for (var _len2 = arguments.length, itemType = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        itemType[_key2] = arguments[_key2];
      }
      return itemType.indexOf(this.json.itemType) > -1;
    }

    /***********************************
     *
     * action
     *
     **********************************/

    /**
     * when json is loaded, json object is be a new instance
     *
     * @param {*} json
     */
  }, {
    key: "convert",
    value: function convert(json) {
      return json;
    }

    /**
     * defence to set invalid key-value
     *
     * @param {*} key
     * @param {*} value
     */
  }, {
    key: "checkField",
    value: function checkField(key, value) {
      return true;
    }
  }, {
    key: "toCloneObject",
    value: function toCloneObject() {
      var json = {
        itemType: this.json.itemType,
        type: this.json.type,
        selected: this.json.selected
      };
      return json;
    }

    /**
     * clone Item
     */
  }, {
    key: "clone",
    value: function clone() {
      var ItemClass = this.constructor;

      // 클론을 할 때 꼭 부모 참조를 넘겨줘야 한다. 
      // 그렇지 않으면 screenX, Y 에 대한 값을 계산할 수가 없다. 
      var item = new ItemClass(this.toCloneObject());
      item.parent = this.json.parent;
      return item;
    }

    /**
     * set json content
     *
     * @param {object} obj
     */
  }, {
    key: "reset",
    value: function reset(obj) {
      if (obj instanceof Item) {
        obj = obj.toJSON();
      }
      this.json = this.convert(Item_objectSpread(Item_objectSpread({}, this.json), obj));
    }

    /**
     * define defaut object for item
     *
     * @param {object} obj
     */
  }, {
    key: "getDefaultObject",
    value: function getDefaultObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Item_objectSpread({
        // id: uuidShort(),
        selected: false,
        // 선택 여부 체크 
        type: '',
        itemType: ''
      }, obj);
    }
  }, {
    key: "add",
    value: function add(layer) {
      this.json.layers.push(layer);
      layer.parent = this.ref;
      return layer;
    }

    /**
     * toggle item's attribute
     *
     * @param {*} field
     * @param {*} toggleValue
     */
  }, {
    key: "toggle",
    value: function toggle(field, toggleValue) {
      if (isUndefined(toggleValue)) {
        this.json[field] = !this.json[field];
      } else {
        this.json[field] = !!toggleValue;
      }
    }

    /**
     * convert to json
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.json;
    }
  }, {
    key: "html",
    get: function get() {
      var _this$json = this.json,
        elementType = _this$json.elementType,
        id = _this$json.id,
        layers = _this$json.layers,
        itemType = _this$json.itemType;
      var tagName = elementType || 'div';
      return "\n    <".concat(tagName, " class='element-item ").concat(itemType, "' data-id=\"").concat(id, "\">\n      ").concat(layers.map(function (it) {
        return it.html;
      }).join(''), "\n    </").concat(tagName, ">\n    ");
    }
  }, {
    key: "resize",
    value: function resize() {}
  }, {
    key: "copy",
    value: function copy() {
      this.json.parent.copyItem(this.ref);
    }
  }, {
    key: "copyItem",
    value: function copyItem(childItem) {
      // clone 을 어떻게 해야하나? 

      var child = childItem.clone();
      child.width.add(10);
      child.width.add(10);
      var layers = this.json.layers;
      var childIndex = -1;
      for (var i = 0, len = layers.length; i < len; i++) {
        if (layers[i] === childItem) {
          childIndex = i;
          break;
        }
      }
      if (childIndex > -1) {
        this.json.layers.splice(childIndex, 0, child);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      this.json.parent.removeItem(this.ref);
    }
  }, {
    key: "removeItem",
    value: function removeItem(childItem) {
      var layers = this.json.layers;
      var childIndex = -1;
      for (var i = 0, len = layers.length; i < len; i++) {
        if (layers[i] === childItem) {
          childIndex = i;
          break;
        }
      }
      if (childIndex > -1) {
        this.json.layers.splice(childIndex, 1);
      }
    }
  }, {
    key: "allLayers",
    get: function get() {
      return _toConsumableArray(_traverse(this.ref));
    }
  }]);
}();
;// ./src/gradientpicker/default/image-resource/ImageResource.js







function ImageResource_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ImageResource_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ImageResource_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ImageResource_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ImageResource_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ImageResource_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ImageResource_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ImageResource_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ImageResource_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

var ImageResource = /*#__PURE__*/function (_Item) {
  function ImageResource() {
    _classCallCheck(this, ImageResource);
    return ImageResource_callSuper(this, ImageResource, arguments);
  }
  _inherits(ImageResource, _Item);
  return _createClass(ImageResource, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return ImageResource_superPropGet(ImageResource, "getDefaultObject", this, 3)([ImageResource_objectSpread({
        itemType: "image-resource",
        type: "image"
      }, obj)]);
    }
  }, {
    key: "isGradient",
    value: function isGradient() {
      return false;
    }
  }, {
    key: "isLinear",
    value: function isLinear() {
      return false;
    }
  }, {
    key: "isRadial",
    value: function isRadial() {
      return false;
    }
  }, {
    key: "isConic",
    value: function isConic() {
      return false;
    }
  }, {
    key: "isStatic",
    value: function isStatic() {
      return false;
    }
  }, {
    key: "isImage",
    value: function isImage() {
      return false;
    }
  }, {
    key: "hasAngle",
    value: function hasAngle() {
      return false;
    }
  }, {
    key: "isUrl",
    value: function isUrl() {
      return false;
    }
  }, {
    key: "isFile",
    value: function isFile() {
      return false;
    }
  }, {
    key: "isAttribute",
    value: function isAttribute() {
      return true;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "none";
    }
  }]);
}(Item);
;// ./src/gradientpicker/default/image-resource/ColorStep.js







function ColorStep_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ColorStep_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ColorStep_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ColorStep_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ColorStep_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ColorStep_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ColorStep_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ColorStep_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ColorStep_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }



var ColorStep = /*#__PURE__*/function (_Item) {
  function ColorStep() {
    _classCallCheck(this, ColorStep);
    return ColorStep_callSuper(this, ColorStep, arguments);
  }
  _inherits(ColorStep, _Item);
  return _createClass(ColorStep, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      return ColorStep_superPropGet(ColorStep, "getDefaultObject", this, 3)([{
        cut: false,
        percent: 0,
        unit: "%",
        px: 0,
        em: 0,
        color: "rgba(0, 0, 0, 0)",
        prevColorStep: null
      }]);
    }
  }, {
    key: "toCloneObject",
    value: function toCloneObject() {
      return ColorStep_objectSpread(ColorStep_objectSpread({}, ColorStep_superPropGet(ColorStep, "toCloneObject", this, 3)([])), {}, {
        cut: this.json.cut,
        percent: this.json.percent,
        unit: this.json.unit,
        px: this.json.px,
        em: this.json.em,
        color: this.json.color
      });
    }
  }, {
    key: "on",
    value: function on() {
      this.json.cut = true;
    }
  }, {
    key: "off",
    value: function off() {
      this.json.cut = false;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.json.cut = !this.json.cut;
    }
  }, {
    key: "getUnit",
    value: function getUnit() {
      return this.json.unit == "%" ? "percent" : this.json.unit;
    }
  }, {
    key: "add",
    value: function add(num) {
      var unit = this.getUnit();
      this.json[unit] += +num;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      var unit = this.getUnit();
      this.json[unit] -= +num;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      var unit = this.getUnit();
      this.json[unit] *= +num;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      var unit = this.getUnit();
      this.json[unit] /= +num;
      return this;
    }
  }, {
    key: "mod",
    value: function mod(num) {
      var unit = this.getUnit();
      this.json[unit] %= +num;
      return this;
    }
  }, {
    key: "isPx",
    get: function get() {
      return this.json.unit == "px";
    }
  }, {
    key: "isPercent",
    get: function get() {
      return this.json.unit == "%" || this.json.unit === "percent";
    }
  }, {
    key: "isEm",
    get: function get() {
      return this.json.unit == "em";
    }

    /**
     * convert Length instance
     * @return {Length}
     */
  }, {
    key: "toLength",
    value: function toLength(maxValue) {
      // TODO: apply maxValue
      return Length.parse(this.json);
    }
  }, {
    key: "getPrevLength",
    value: function getPrevLength() {
      if (!this.json.prevColorStep) return '';
      return this.json.prevColorStep.toLength();
    }

    /**
     * get color string
     *
     * return {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      var prev = this.json.cut ? this.getPrevLength() : '';
      return "".concat(this.json.color, " ").concat(prev, " ").concat(this.toLength());
    }
  }, {
    key: "reset",
    value: function reset(json) {
      ColorStep_superPropGet(ColorStep, "reset", this, 3)([json]);
      if (this.parent()) {
        this.parent().sortColorStep();
      }
    }
  }], [{
    key: "parse",
    value: function parse(colorStepString) {
      var colorsteps = [];
      var results = color_default().convertMatches(colorStepString);
      var arr = results.str.split(' ').filter(function (it) {
        return it.trim();
      });
      var colorIndex = +arr[0].replace("@", "");
      var color = results.matches[colorIndex].color;
      if (arr.length === 1) {
        colorsteps.push(new ColorStep({
          color: color,
          unit: "%",
          percent: 0
        }));
      } else if (arr.length === 2) {
        var len = Length.parse(arr[1]);
        var data = {
          unit: len.unit
        };
        if (len.isPercent()) {
          data.percent = len.value;
        } else if (len.isPx()) {
          data.px = len.value;
        } else if (len.isEm()) {
          data.em = len.value;
        }
        colorsteps.push(new ColorStep(ColorStep_objectSpread({
          color: color
        }, data)));
      } else if (arr.length === 3) {
        [1, 2].forEach(function (index) {
          var len = Length.parse(arr[index]);
          var data = {
            unit: len.unit
          };
          if (len.isPercent()) {
            data.percent = len.value;
          } else if (len.isPx()) {
            data.px = len.value;
          } else if (len.isEm()) {
            data.em = len.value;
          }
          colorsteps.push(new ColorStep(ColorStep_objectSpread({
            color: color
          }, data)));
        });
      }
      return colorsteps;
    }
  }]);
}(Item);
;// ./src/gradientpicker/default/image-resource/Gradient.js







function Gradient_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Gradient_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Gradient_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gradient_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Gradient_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, Gradient_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Gradient_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Gradient_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function Gradient_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }



var DEFINED_ANGLES = {
  "to top": 0,
  "to top right": 45,
  "to right": 90,
  "to bottom right": 135,
  "to bottom": 180,
  "to bottom left": 225,
  "to left": 270,
  "to top left": 315
};
var Gradient = /*#__PURE__*/function (_ImageResource) {
  function Gradient() {
    _classCallCheck(this, Gradient);
    return Gradient_callSuper(this, Gradient, arguments);
  }
  _inherits(Gradient, _ImageResource);
  return _createClass(Gradient, [{
    key: "isGradient",
    value: function isGradient() {
      return true;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "none";
    }

    /**
     * colorsteps = [
     *    new ColorStep({color: 'red', percent: 0}),
     *    new ColorStep({color: 'red', percent: 0})
     * ]
     *
     * @param {*} obj
     */
  }, {
    key: "getDefaultObject",
    value: function getDefaultObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Gradient_superPropGet(Gradient, "getDefaultObject", this, 3)([Gradient_objectSpread({
        type: "gradient",
        colorsteps: []
      }, obj)]);
    }
  }, {
    key: "toCloneObject",
    value: function toCloneObject() {
      return Gradient_objectSpread(Gradient_objectSpread({}, Gradient_superPropGet(Gradient, "toCloneObject", this, 3)([])), {}, {
        colorsteps: this.json.colorsteps.map(function (color) {
          return color.clone();
        })
      });
    }
  }, {
    key: "convert",
    value: function convert(json) {
      json.colorsteps = json.colorsteps.map(function (c) {
        return new ColorStep(c);
      });
      return json;
    }
  }, {
    key: "calculateAngle",
    value: function calculateAngle() {
      var angle = this.json.angle;
      return isUndefined(DEFINED_ANGLES[angle]) ? angle : DEFINED_ANGLES[angle] || 0;
    }

    /**
     * add ColorStep
     *
     * @param {ColorStep} colorstep
     * @param {boolean} isSort
     */
  }, {
    key: "addColorStep",
    value: function addColorStep(colorstep) {
      var isSort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.json.colorsteps.push(colorstep);
      if (isSort) this.sortColorStep();
      return colorstep;
    }
  }, {
    key: "insertColorStep",
    value: function insertColorStep(percent) {
      var startColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "rgba(216,216,216,0)";
      var endColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rgba(216,216,216,1)";
      var colorsteps = this.colorsteps;
      if (!colorsteps.length) {
        this.addColorStepList([new ColorStep({
          color: startColor,
          percent: percent,
          index: 0
        }), new ColorStep({
          color: endColor,
          percent: 100,
          index: 100
        })]);
        return;
      }
      if (percent < colorsteps[0].percent) {
        colorsteps[0].index = 1;
        this.addColorStep(new ColorStep({
          index: 0,
          color: colorsteps[0].color,
          percent: percent
        }));
        return;
      }
      var lastIndex = colorsteps.length - 1;
      if (colorsteps[lastIndex].percent < percent) {
        var color = colorsteps[lastIndex].color;
        var index = colorsteps[lastIndex].index + 1;
        this.addColorStep(new ColorStep({
          index: index,
          color: color,
          percent: percent
        }));
        return;
      }
      for (var i = 0, len = colorsteps.length - 1; i < len; i++) {
        var step = colorsteps[i];
        var nextStep = colorsteps[i + 1];
        if (step.percent <= percent && percent <= nextStep.percent) {
          var color = Color.mix(step.color, nextStep.color, (percent - step.percent) / (nextStep.percent - step.percent), "rgb");
          this.addColorStep(new ColorStep({
            index: step.index + 1,
            color: color,
            percent: percent
          }));
          return;
        }
      }
    }
  }, {
    key: "sortColorStep",
    value: function sortColorStep() {
      var children = this.colorsteps;
      children.sort(function (a, b) {
        if (a.percent > b.percent) return 1;
        if (a.percent < b.percent) return -1;
        if (a.percent == b.percent) {
          if (a.index === b.index) return 0;
          return a.index > b.index ? 1 : -1;
        }
      });
      children.forEach(function (it, index) {
        it.index = index * 100;
      });
    }

    /**
     * add ColorStep List
     * @param {Array<ColorStep>} colorstepList
     */
  }, {
    key: "addColorStepList",
    value: function addColorStepList() {
      var _this = this;
      var colorstepList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      colorstepList.forEach(function (c) {
        _this.addColorStep(c, false);
      });
      this.sortColorStep();
    }

    /**
     * get color step by id
     *
     * @param {string} id
     */
  }, {
    key: "getColorStep",
    value: function getColorStep(id) {
      return this.json.colorsteps.filter(function (c) {
        return c.id == id;
      })[0];
    }
  }, {
    key: "clear",
    value: function clear() {
      if (arguments.length) {
        this.json.colorsteps.splice(+(arguments.length <= 0 ? undefined : arguments[0]), 1);
      } else {
        this.json.colorsteps = [];
      }
    }

    /**
     * get colorstep list
     *
     * @return {Array<ColorStep>}
     */
  }, {
    key: "colorsteps",
    get: function get() {
      return this.json.colorsteps;
    }

    /**
     * get color string
     *
     * @return {string}
     */
  }, {
    key: "getColorString",
    value: function getColorString() {
      var colorsteps = this.colorsteps;
      if (!colorsteps.length) return '';
      var newColors = colorsteps.map(function (c, index) {
        c.prevColorStep = c.cut && index > 0 ? colorsteps[index - 1] : null;
        return c;
      });
      return newColors.map(function (f) {
        return "".concat(f);
      }).join(",");
    }
  }], [{
    key: "random",
    value: function random() {
      var angle = Math.floor(Math.random() * 1000) % 360;
      return "linear-gradient(".concat(angle, "deg, ").concat(Color.random(), " 0%, ").concat(Color.random(), " 100%)");
    }
  }]);
}(ImageResource);
;// ./src/gradientpicker/default/image-resource/LinearGradient.js








function LinearGradient_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function LinearGradient_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? LinearGradient_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : LinearGradient_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function LinearGradient_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, LinearGradient_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function LinearGradient_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (LinearGradient_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function LinearGradient_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }





var DEFINED_DIRECTIONS = {
  "0": "to top",
  "45": "to top right",
  "90": "to right",
  "135": "to bottom right",
  "180": "to bottom",
  "225": "to bottom left",
  "270": "to left",
  "315": "to top left"
};
var LinearGradient_DEFINED_ANGLES = {
  "to top": "0",
  "to top right": "45",
  "to right": "90",
  "to bottom right": "135",
  "to bottom": "180",
  "to bottom left": "225",
  "to left": "270",
  "to top left": "315"
};
var LinearGradient = /*#__PURE__*/function (_Gradient) {
  function LinearGradient() {
    _classCallCheck(this, LinearGradient);
    return LinearGradient_callSuper(this, LinearGradient, arguments);
  }
  _inherits(LinearGradient, _Gradient);
  return _createClass(LinearGradient, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return LinearGradient_superPropGet(LinearGradient, "getDefaultObject", this, 3)([LinearGradient_objectSpread({
        type: "linear-gradient",
        angle: 0
      }, obj)]);
    }
  }, {
    key: "toCloneObject",
    value: function toCloneObject() {
      return LinearGradient_objectSpread(LinearGradient_objectSpread({}, LinearGradient_superPropGet(LinearGradient, "toCloneObject", this, 3)([])), {}, {
        angle: this.json.angle
      });
    }
  }, {
    key: "isLinear",
    value: function isLinear() {
      return true;
    }
  }, {
    key: "hasAngle",
    value: function hasAngle() {
      return true;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.colorsteps.length === 0) return '';
      var colorString = this.getColorString();
      var opt = '';
      var angle = this.json.angle || 0;
      opt = angle;
      if (isNumber(opt)) {
        opt = DEFINED_DIRECTIONS["".concat(opt)] || opt;
      }
      if (isNumber(opt)) {
        opt = opt > 360 ? opt % 360 : opt;
        opt = "".concat(opt, "deg");
      }
      var result = "".concat(this.json.type, "(").concat(opt, ", ").concat(colorString, ")");
      return result;
    }
  }], [{
    key: "toLinearGradient",
    value: function toLinearGradient(colorsteps) {
      if (colorsteps.length === 0) {
        return "none";
      }
      var gradient = new LinearGradient({
        angle: "to right",
        colorsteps: colorsteps
      });
      return gradient + "";
    }
  }, {
    key: "parse",
    value: function parse(str) {
      var results = color_default().convertMatches(str);
      var angle = 0;
      var colorsteps = [];
      results.str.split("(")[1].split(")")[0].split(",").map(function (it) {
        return it.trim();
      }).forEach(function (newValue, index) {
        if (newValue.includes("@")) {
          // color 복원
          newValue = color_default().reverseMatches(newValue, results.matches);

          // 나머지는 ColorStep 이 파싱하는걸로
          // ColorStep 은 파싱이후 colorsteps 를 리턴해줌... 배열임, 명심 명심
          colorsteps.push.apply(colorsteps, _toConsumableArray(ColorStep.parse(newValue)));
        } else {
          // direction
          angle = isUndefined(LinearGradient_DEFINED_ANGLES[newValue]) ? Length.parse(newValue) : Length.deg(+LinearGradient_DEFINED_ANGLES[newValue]);
        }
      });
      return new LinearGradient({
        angle: angle,
        colorsteps: colorsteps
      });
    }
  }]);
}(Gradient);
;// ./src/gradientpicker/default/image-resource/RepeatingLinearGradient.js






function RepeatingLinearGradient_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, RepeatingLinearGradient_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function RepeatingLinearGradient_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RepeatingLinearGradient_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function RepeatingLinearGradient_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

var RepeatingLinearGradient = /*#__PURE__*/function (_LinearGradient) {
  function RepeatingLinearGradient() {
    _classCallCheck(this, RepeatingLinearGradient);
    return RepeatingLinearGradient_callSuper(this, RepeatingLinearGradient, arguments);
  }
  _inherits(RepeatingLinearGradient, _LinearGradient);
  return _createClass(RepeatingLinearGradient, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      return RepeatingLinearGradient_superPropGet(RepeatingLinearGradient, "getDefaultObject", this, 3)([{
        type: "repeating-linear-gradient",
        angle: 0
      }]);
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var linear = LinearGradient.parse(str);
      return new RepeatingLinearGradient({
        angle: linear.angle,
        colorsteps: linear.colorsteps
      });
    }
  }]);
}(LinearGradient);
;// ./src/gradientpicker/default/image-resource/RadialGradient.js









function RadialGradient_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function RadialGradient_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? RadialGradient_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : RadialGradient_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function RadialGradient_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, RadialGradient_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function RadialGradient_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RadialGradient_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function RadialGradient_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }





var DEFINED_POSITIONS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "center", true), "top", true), "left", true), "right", true), "bottom", true);
var RadialGradient = /*#__PURE__*/function (_Gradient) {
  function RadialGradient() {
    _classCallCheck(this, RadialGradient);
    return RadialGradient_callSuper(this, RadialGradient, arguments);
  }
  _inherits(RadialGradient, _Gradient);
  return _createClass(RadialGradient, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return RadialGradient_superPropGet(RadialGradient, "getDefaultObject", this, 3)([RadialGradient_objectSpread({
        type: "radial-gradient",
        radialType: "ellipse",
        radialPosition: [Position.CENTER, Position.CENTER]
      }, obj)]);
    }
  }, {
    key: "toCloneObject",
    value: function toCloneObject() {
      var radialPosition = this.json.radialPosition || [Length.percent(50), Length.percent(50)];
      return RadialGradient_objectSpread(RadialGradient_objectSpread({}, RadialGradient_superPropGet(RadialGradient, "toCloneObject", this, 3)([])), {}, {
        radialType: this.json.radialType || 'ellipse',
        radialPosition: JSON.parse(JSON.stringify(radialPosition))
      });
    }
  }, {
    key: "isRadial",
    value: function isRadial() {
      return true;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.colorsteps.length === 0) return '';
      var colorString = this.getColorString();
      var json = this.json;
      var opt = '';
      var radialType = json.radialType;
      var radialPosition = json.radialPosition || ["center", "center"];
      radialPosition = DEFINED_POSITIONS[radialPosition] ? radialPosition : radialPosition.join(' ');
      opt = radialPosition ? "".concat(radialType, " at ").concat(radialPosition) : radialType;
      return "".concat(json.type || "radial-gradient", "(").concat(opt, ", ").concat(colorString, ")");
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var results = color_default().convertMatches(str);
      var radialType = "ellipse";
      var radialPosition = [Position.CENTER, Position.CENTER];
      var colorsteps = [];
      results.str.split("(")[1].split(")")[0].split(",").map(function (it) {
        return it.trim();
      }).forEach(function (newValue, index) {
        if (newValue.includes("@")) {
          // color 복원
          newValue = color_default().reverseMatches(newValue, results.matches);

          // 나머지는 ColorStep 이 파싱하는걸로
          // ColorStep 은 파싱이후 colorsteps 를 리턴해줌... 배열임, 명심 명심
          colorsteps.push.apply(colorsteps, _toConsumableArray(ColorStep.parse(newValue)));
        } else {
          // direction
          if (newValue.includes("at")) {
            // at 이 있으면 radialPosition 이 있는 것임
            var _newValue$split$map = newValue.split("at").map(function (it) {
              return it.trim();
            });
            var _newValue$split$map2 = _slicedToArray(_newValue$split$map, 2);
            radialType = _newValue$split$map2[0];
            radialPosition = _newValue$split$map2[1];
          } else {
            // at 이 없으면 radialPosition 이 center, center 로 있음
            radialType = newValue;
          }
          if (isString(radialPosition)) {
            var arr = radialPosition.split(' ');
            if (arr.length === 1) {
              var len = Length.parse(arr[0]);
              if (len.isString()) {
                radialPosition = [len.value, len.value];
              } else {
                radialPosition = [len.clone(), len.clone()];
              }
            } else if (arr.length === 2) {
              radialPosition = arr.map(function (it) {
                var len = Length.parse(it);
                return len.isString() ? len.value : len;
              });
            }
          }
        }
      });
      return new RadialGradient({
        radialType: radialType,
        colorsteps: colorsteps
      });
    }
  }]);
}(Gradient);
;// ./src/gradientpicker/default/image-resource/RepeatingRadialGradient.js






function RepeatingRadialGradient_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, RepeatingRadialGradient_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function RepeatingRadialGradient_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RepeatingRadialGradient_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function RepeatingRadialGradient_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

var RepeatingRadialGradient = /*#__PURE__*/function (_RadialGradient) {
  function RepeatingRadialGradient() {
    _classCallCheck(this, RepeatingRadialGradient);
    return RepeatingRadialGradient_callSuper(this, RepeatingRadialGradient, arguments);
  }
  _inherits(RepeatingRadialGradient, _RadialGradient);
  return _createClass(RepeatingRadialGradient, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      return RepeatingRadialGradient_superPropGet(RepeatingRadialGradient, "getDefaultObject", this, 3)([{
        type: "repeating-radial-gradient"
      }]);
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var radial = RadialGradient.parse(str);
      return new RepeatingRadialGradient({
        radialType: radial.radialType,
        radialPosition: radial.radialPosition,
        colorsteps: radial.colorsteps
      });
    }
  }]);
}(RadialGradient);
;// ./src/gradientpicker/default/image-resource/ConicGradient.js









function ConicGradient_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ConicGradient_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ConicGradient_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ConicGradient_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ConicGradient_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, ConicGradient_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ConicGradient_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ConicGradient_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ConicGradient_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }







var ConicGradient_DEFINED_POSITIONS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "center", true), "top", true), "left", true), "right", true), "bottom", true);
var ConicGradient_DEFINED_ANGLES = {
  "to top": 0,
  "to top right": 45,
  "to right": 90,
  "to bottom right": 135,
  "to bottom": 180,
  "to bottom left": 225,
  "to left": 270,
  "to top left": 315
};
var ConicGradient = /*#__PURE__*/function (_Gradient) {
  function ConicGradient() {
    _classCallCheck(this, ConicGradient);
    return ConicGradient_callSuper(this, ConicGradient, arguments);
  }
  _inherits(ConicGradient, _Gradient);
  return _createClass(ConicGradient, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return ConicGradient_superPropGet(ConicGradient, "getDefaultObject", this, 3)([ConicGradient_objectSpread({
        type: "conic-gradient",
        angle: 0,
        radialPosition: [Position.CENTER, Position.CENTER]
      }, obj)]);
    }
  }, {
    key: "toCloneObject",
    value: function toCloneObject() {
      return ConicGradient_objectSpread(ConicGradient_objectSpread({}, ConicGradient_superPropGet(ConicGradient, "toCloneObject", this, 3)([])), {}, {
        angle: this.json.angle,
        radialPosition: JSON.parse(JSON.stringify(this.json.radialPosition))
      });
    }
  }, {
    key: "isConic",
    value: function isConic() {
      return true;
    }
  }, {
    key: "hasAngle",
    value: function hasAngle() {
      return true;
    }
  }, {
    key: "getColorString",
    value: function getColorString() {
      if (this.colorsteps.length === 0) return '';
      var colorsteps = this.colorsteps;
      if (!colorsteps) return '';
      colorsteps.sort(function (a, b) {
        if (a.percent == b.percent) return 0;
        return a.percent > b.percent ? 1 : -1;
      });
      var newColors = colorsteps.map(function (c, index) {
        c.prevColorStep = c.cut && index > 0 ? colorsteps[index - 1] : null;
        return c;
      });
      return newColors.map(function (f) {
        var deg = Math.floor(f.percent * 3.6);
        var prev = '';
        if (f.cut && f.prevColorStep) {
          var prevDeg = Math.floor(f.prevColorStep.percent * 3.6);
          prev = "".concat(prevDeg, "deg");
        }
        return "".concat(f.color, " ").concat(prev, " ").concat(deg, "deg");
      }).join(",");
    }
  }, {
    key: "toString",
    value: function toString() {
      var colorString = this.getColorString();
      var opt = [];
      var json = this.json;
      var conicAngle = json.angle;
      var conicPosition = json.radialPosition || Position.CENTER;
      conicPosition = ConicGradient_DEFINED_POSITIONS[conicPosition] ? conicPosition : conicPosition.join(' ');
      if (isNotUndefined(conicAngle)) {
        conicAngle = +(ConicGradient_DEFINED_ANGLES[conicAngle] || conicAngle);
        opt.push("from ".concat(conicAngle, "deg"));
      }
      if (conicPosition) {
        opt.push("at ".concat(conicPosition));
      }
      var optString = opt.length ? opt.join(' ') + "," : '';
      return "".concat(json.type, "(").concat(optString, " ").concat(colorString, ")");
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var results = color_default().convertMatches(str);
      var angle = "0deg"; //
      var radialPosition = [Position.CENTER, Position.CENTER];
      var colorsteps = [];
      results.str.split("(")[1].split(")")[0].split(",").map(function (it) {
        return it.trim();
      }).forEach(function (newValue, index) {
        if (newValue.includes("@")) {
          // conic 은 최종 값이 deg 라  gradient 의 공통 영역을 위해서
          // deg 르 % 로 미리 바꾸는 작업이 필요하다.
          newValue = newValue.split(' ').map(function (it) {
            return it.trim();
          }).map(function (it) {
            if (it.includes("deg")) {
              return Length.parse(it).toPercent();
            } else {
              return it;
            }
          }).join(' ');

          // color 복원
          newValue = color_default().reverseMatches(newValue, results.matches);

          // 나머지는 ColorStep 이 파싱하는걸로
          // ColorStep 은 파싱이후 colorsteps 를 리턴해줌... 배열임, 명심 명심
          colorsteps.push.apply(colorsteps, _toConsumableArray(ColorStep.parse(newValue)));
        } else {
          // direction
          if (newValue.includes("at")) {
            // at 이 있으면 radialPosition 이 있는 것임
            var _newValue$split$map = newValue.split("at").map(function (it) {
              return it.trim();
            });
            var _newValue$split$map2 = _slicedToArray(_newValue$split$map, 2);
            angle = _newValue$split$map2[0];
            radialPosition = _newValue$split$map2[1];
          } else {
            // at 이 없으면 radialPosition 이 center, center 로 있음
            angle = newValue;
          }
          if (isString(radialPosition)) {
            var arr = radialPosition.split(' ');
            if (arr.length === 1) {
              var len = Length.parse(arr[0]);
              if (len.isString()) {
                radialPosition = [len.value, len.value];
              } else {
                radialPosition = [len.clone(), len.clone()];
              }
            } else if (arr.length === 2) {
              radialPosition = arr.map(function (it) {
                var len = Length.parse(it);
                return len.isString() ? len.value : len;
              });
            }
          }
          if (isString(angle)) {
            if (angle.includes("from")) {
              angle = angle.split("from")[1];
              angle = isUndefined(ConicGradient_DEFINED_ANGLES[angle]) ? Length.parse(angle) : Length.deg(+ConicGradient_DEFINED_ANGLES[angle]);
            }
          }
        }
      });
      angle.value = angle.unit;
      return new ConicGradient({
        angle: angle,
        radialPosition: radialPosition,
        colorsteps: colorsteps
      });
    }
  }]);
}(Gradient);
;// ./src/gradientpicker/default/image-resource/RepeatingConicGradient.js






function RepeatingConicGradient_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, RepeatingConicGradient_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function RepeatingConicGradient_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (RepeatingConicGradient_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function RepeatingConicGradient_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }


var RepeatingConicGradient = /*#__PURE__*/function (_ConicGradient) {
  function RepeatingConicGradient() {
    _classCallCheck(this, RepeatingConicGradient);
    return RepeatingConicGradient_callSuper(this, RepeatingConicGradient, arguments);
  }
  _inherits(RepeatingConicGradient, _ConicGradient);
  return _createClass(RepeatingConicGradient, [{
    key: "getDefaultObject",
    value: function getDefaultObject() {
      return RepeatingConicGradient_superPropGet(RepeatingConicGradient, "getDefaultObject", this, 3)([{
        type: "repeating-conic-gradient",
        angle: 0,
        radialPosition: [Position.CENTER, Position.CENTER]
      }]);
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var conic = ConicGradient.parse(str);
      return new RepeatingConicGradient({
        angle: conic.angle,
        radialPosition: conic.radialPosition,
        colorsteps: conic.colorsteps
      });
    }
  }]);
}(ConicGradient);
;// ./src/gradientpicker/default/index.js







function default_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function default_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? default_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : default_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function gradientpicker_default_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, gradientpicker_default_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function gradientpicker_default_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (gradientpicker_default_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function default_superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }













var tabs = [{
  type: "linear-gradient",
  title: "Linear Gradient"
}, {
  type: "repeating-linear-gradient",
  title: "Repeating Linear Gradient"
}, {
  type: "radial-gradient",
  title: "Radial Gradient"
}, {
  type: "repeating-radial-gradient",
  title: "Repeating Radial Gradient"
}, {
  type: "conic-gradient",
  title: "Conic Gradient"
}, {
  type: "repeating-conic-gradient",
  title: "Repeating Conic Gradient"
}];
var reg = /((linear\-gradient|repeating\-linear\-gradient|radial\-gradient|repeating\-radial\-gradient|conic\-gradient|repeating\-conic\-gradient|url)\(([^\)]*)\))/gi;
var DefaultGradientPicker = /*#__PURE__*/function (_BaseColorPicker) {
  function DefaultGradientPicker() {
    _classCallCheck(this, DefaultGradientPicker);
    return gradientpicker_default_callSuper(this, DefaultGradientPicker, arguments);
  }
  _inherits(DefaultGradientPicker, _BaseColorPicker);
  return _createClass(DefaultGradientPicker, [{
    key: "components",
    value: function components() {
      return {
        EmbedColorPicker: EmbedColorPicker,
        GradientEditor: GradientEditor
      };
    }
  }, {
    key: "parseImage",
    value: function parseImage(str) {
      var results = color_default().convertMatches(str);
      var image = null;
      results.str.match(reg).forEach(function (value, index) {
        value = color_default().reverseMatches(value, results.matches);
        if (value.includes("repeating-linear-gradient")) {
          image = RepeatingLinearGradient.parse(value);
        } else if (value.includes("linear-gradient")) {
          image = LinearGradient.parse(value);
        } else if (value.includes("repeating-radial-gradient")) {
          image = RepeatingRadialGradient.parse(value);
        } else if (value.includes("radial")) {
          image = RadialGradient.parse(value);
        } else if (value.includes("repeating-conic-gradient")) {
          image = RepeatingConicGradient.parse(value);
        } else if (value.includes("conic")) {
          image = ConicGradient.parse(value);
        }
      });
      return image;
    }
  }, {
    key: "callbackColorValue",
    value: function callbackColorValue() {
      var gradientString = this.image.toString();
      if (typeof this.opt.onChange == 'function') {
        this.opt.onChange.call(this, gradientString, this.image);
      }
      if (typeof this.colorpickerShowCallback == 'function') {
        this.colorpickerShowCallback(gradientString, this.image);
      }
    }
  }, {
    key: "callbackHideColorValue",
    value: function callbackHideColorValue() {
      var gradientString = this.image.toString();
      if (typeof this.opt.onHide == 'function') {
        this.opt.onHide.call(this, gradientString, this.image);
      }
      if (typeof this.colorpickerHideCallback == 'function') {
        this.colorpickerHideCallback(gradientString, this.image);
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      default_superPropGet(DefaultGradientPicker, "initialize", this, 3)([]);
      this.selectedTab = "linear-gradient";
      this.$root.el.classList = "";
      this.$root.el.classList.add('el-gradientpicker');
      this.setGradient(this.opt.gradient || 'linear-gradient(to right, red 0%, yellow 100%)');
    }
  }, {
    key: "setGradient",
    value: function setGradient(gradientString) {
      this.gradient = gradientString;
      this.image = this.parseImage(this.gradient);
      this.selectTabContent(this.image.type);
    }

    /**
     * get color
     *
     */
  }, {
    key: "getColor",
    value: function getColor() {
      return this.getValue();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.image.toString();
    }
  }, {
    key: "template",
    value: function template() {
      return /*html*/"\n      <div class=\"el-gradientpicker--default gradient-picker\">\n        <div class='box'>\n          <div class='gradient-preview'>\n            <div class='gradient-view' ref='$gradientView'>\n            </div>\n          </div>\n          <div class=\"picker-tab\">\n            <div class=\"picker-tab-list\" ref=\"$tab\" data-value=\"static-gradient\" data-is-image-hidden=\"false\">\n              ".concat(tabs.map(function (it) {
        return "\n                  <span\n                    class='picker-tab-item ".concat(it.selected ? "selected" : '', "'\n                    data-selected-value='").concat(it.type, "'\n                    title='").concat(it.title, "'\n                  >\n                  <div class='icon'></div>\n                  </span>");
      }).join(''), "\n            </div>\n          </div>\n          <template target='GradientEditor'></template>\n\n        </div>\n        <div class='box'>\n          <template target=\"EmbedColorPicker\"></template>\n        </div>\n      </div>\n\n    ");
    }
  }, {
    key: "getColorString",
    value: function getColorString() {
      if (!this.image) return '';
      var value = this.image.getColorString();
      return value;
    }
  }, {
    key: 'mousedown $gradientView',
    value: function mousedown_$gradientView(e) {
      this.mouseDown = true;
      this.mouseDownX = e.clientX;
      this.mouseDownY = e.clientY;
      this.rect = this.refs.$gradientView.rect();
    }
  }, {
    key: 'mousemove document',
    value: function mousemove_document(e) {
      if (this.mouseDown) {
        var minX = this.rect.left;
        var maxX = this.rect.right;
        var minY = this.rect.top;
        var maxY = this.rect.bottom;
        var currentX = Math.min(Math.max(minX, e.clientX), maxX);
        var currentY = Math.min(Math.max(minY, e.clientY), maxY);
        var posX = Length.percent((currentX - minX) / (maxX - minX) * 100).round(100);
        var posY = Length.percent((currentY - minY) / (maxY - minY) * 100).round(100);
        this.$store.emit('changeRadialPosition', posX, posY);
      }
    }
  }, {
    key: 'mouseup document',
    value: function mouseup_document(e) {
      if (this.mouseDown) {
        this.mouseDown = false;
      }
    }
  }, {
    key: "getCurrentStepColor",
    value: function getCurrentStepColor() {
      var colorstep = this.image.colorsteps[this.selectColorStepIndex || 0] || {
        color: 'rgba(0, 0, 0, 1)'
      };
      return colorstep.color;
    }
  }, {
    key: '@changeGradientEditor',
    value: function changeGradientEditor(data) {
      var colorsteps = data.colorsteps.map(function (it, index) {
        return new ColorStep({
          color: it.color,
          percent: it.offset.value,
          cut: it.cut,
          index: (index + 1) * 100
        });
      });
      data = default_objectSpread(default_objectSpread({}, data), {}, {
        type: this.selectedTab,
        colorsteps: colorsteps
      });
      this.image.reset(data);
      this.updateGradientPreview();
      this.updateData();
    }
  }, {
    key: "click $tab .picker-tab-item",
    value: function click_$tab_PickerTabItem(e) {
      var type = e.$delegateTarget.attr("data-selected-value");
      this.selectTabContent(type);
    }
  }, {
    key: "selectTabContent",
    value: function selectTabContent(type) {
      this.selectedTab = type;
      this.refs.$tab.attr("data-value", type);
      this.image = this.createGradient({
        type: type
      }, this.image);
      this.$store.emit('setGradientEditor', this.getColorString(), this.selectColorStepIndex, this.image.type, this.image.angle, this.image.radialPosition, this.image.radialType);
      var color = this.getCurrentStepColor();
      this['@selectColorStep'](color);
      this.updateGradientPreview();
    }
  }, {
    key: "createGradient",
    value: function createGradient(data, gradient) {
      var colorsteps = data.colorsteps || gradient.colorsteps;

      // linear, conic 은 angle 도 같이 설정한다.
      var angle = data.angle || gradient.angle;

      // radial 은  radialType 도 같이 설정한다.
      var radialType = data.radialType || gradient.radialType || 'ellipse';
      var radialPosition = data.radialPosition || gradient.radialPosition || [Length.percent(50), Length.percent(50)];
      var json = gradient.clone().toJSON();
      delete json.itemType;
      delete json.type;
      switch (data.type) {
        case "linear-gradient":
          return new LinearGradient({
            colorsteps: colorsteps,
            angle: angle
          });
        case "repeating-linear-gradient":
          return new RepeatingLinearGradient({
            colorsteps: colorsteps,
            angle: angle
          });
        case "radial-gradient":
          return new RadialGradient({
            colorsteps: colorsteps,
            radialType: radialType,
            radialPosition: radialPosition
          });
        case "repeating-radial-gradient":
          return new RepeatingRadialGradient({
            colorsteps: colorsteps,
            radialType: radialType,
            radialPosition: radialPosition
          });
        case "conic-gradient":
          return new ConicGradient({
            colorsteps: colorsteps,
            angle: angle,
            radialPosition: radialPosition
          });
        case "repeating-conic-gradient":
          return new RepeatingConicGradient({
            colorsteps: colorsteps,
            angle: angle,
            radialPosition: radialPosition
          });
      }
      return new Gradient();
    }
  }, {
    key: '@changeEmbedColorPicker',
    value: function changeEmbedColorPicker(color) {
      this.$store.emit('setColorStepColor', color);
    }
  }, {
    key: "@selectColorStep",
    value: function selectColorStep(color) {
      this.EmbedColorPicker.setColor(color);
    }
  }, {
    key: '@changeColorStep',
    value: function changeColorStep() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.image.reset(default_objectSpread({}, data));
      this.updateGradientPreview();
      // this.updateData();
    }
  }, {
    key: "updateGradientPreview",
    value: function updateGradientPreview() {
      if (this.image) {
        this.refs.$gradientView.css('background-image', this.image.toString());
        this.updateData();
      }
    }
  }, {
    key: "updateData",
    value: function updateData() {
      this.callbackColorValue();
    }
  }]);
}(BaseColorPicker);

;// ./src/gradientpicker/defaults.js
/* harmony default export */ var gradientpicker_defaults = ({
  // values
  container: undefined,
  type: "default",
  gradient: 'linear-gradient(to right, white 0%, black 100%)',
  colorpicker: {
    color: "#FFFFFF",
    format: 'hex',
    // hex,rgb,hsl
    outputFormat: undefined,
    // hex,rgb,hsl
    useInformation: true,
    useOpacity: true,
    paletteWidth: 200,
    paletteHeight: undefined,
    paletteThickness: 16,
    swatchTitle: 'Color palette',
    swatchColors: []
  },
  // callback functions
  onInit: undefined,
  onDestroy: undefined,
  onChange: undefined,
  onChanged: undefined,
  onChangeFormat: undefined
});
;// ./src/gradientpicker/index.js



/**
 * GradientPicker
 *
 * @param {object} options
 */
function GradientPicker(options) {
  var core;

  // merge options
  options = Object.assign({}, gradientpicker_defaults, options);

  /**
   * switch type
   *
   * @param {string} type
   */
  function switchType(type) {
    core = new DefaultGradientPicker(options);
  }

  // set type
  switchType(options.type);
  return core;
}
/* harmony default export */ var gradientpicker = (GradientPicker);
;// ./src/entry.js


var entry_ColorPicker = Object.assign(colorpicker, {
  GradientPicker: gradientpicker
});
var entry_GradientPicker = gradientpicker;

/* harmony default export */ var entry = (entry_ColorPicker);
;// ./src/index.js


var src_GradientPicker = entry_GradientPicker;

/* harmony default export */ var src = (entry);

injectStyles();
}();
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);















}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});