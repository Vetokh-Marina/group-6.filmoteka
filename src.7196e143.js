parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EZ65":[function(require,module,exports) {
function t(){var t=window.pageYOffset,e=document.documentElement.clientHeight;t>e&&o.classList.add("back_to_top-show"),t<e&&o.classList.remove("back_to_top-show")}function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,0))}var o=document.querySelector(".back_to_top");window.addEventListener("scroll",t),o.addEventListener("click",e);
},{}],"BNjD":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,n=arguments[3];!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof e&&e.amd?e([],t):("undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:this).basicLightbox=t()}(function(){return function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var a="function"==typeof require&&require;if(!u&&a)return a(c,!0);if(i)return i(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[c]={exports:{}};n[c][0].call(l.exports,function(e){return r(n[c][1][e]||e)},l,l.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i,t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach(function(e){return i.appendChild(e)});var c=r(i,"IMG"),u=r(i,"VIDEO"),a=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===a&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===i(e)||e.parentElement.removeChild(e),n()},410),!0}(t,function(){if("function"==typeof e)return e(u)})};!0===n.closable&&t.addEventListener("click",function(e){e.target===t&&c()});var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout(function(){requestAnimationFrame(function(){return e.classList.add("basicLightbox--visible"),n()})},10),!0}(t,function(){if("function"==typeof e)return e(u)})},close:c};return u}},{}]},{},[1])(1)});
},{}],"jg0o":[function(require,module,exports) {

},{}],"zUU9":[function(require,module,exports) {
"use strict";var e=r(require("basiclightbox"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(i,a,l):i[a]=e[a]}return i.default=e,r&&r.set(e,i),i}require("basicLightbox/dist/basicLightbox.min.css");var i=document.querySelector(".footer-btn");function n(t){t.preventDefault(),e.create('\n    <h3 class="team-title">Над проектом працювали :</h3>\n    <ul class="team">\n      <li class="team-list">Denys Kravchuk</li>\n      <li class="team-list">Serhiy Stepanov</li>\n      <li class="team-list">Andrey Kovsh</li>\n      <li class="team-list">Valentyna Chudik</li>\n      <li class="team-list">Marina Vetokh</li>\n      <li class="team-list">Andrii Lavrenchuk</li>\n    </ul>\n').show()}i.addEventListener("click",n);
},{"basiclightbox":"BNjD","basicLightbox/dist/basicLightbox.min.css":"jg0o"}],"Focm":[function(require,module,exports) {
"use strict";require("./js/back-to-top"),require("./js/footer-modal.js");
},{"./js/back-to-top":"EZ65","./js/footer-modal.js":"zUU9"}]},{},["Focm"], null)
//# sourceMappingURL=/group-6.filmoteka/src.7196e143.js.map