(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[899],{4899:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Y}});var r=n(885),i=n(9434),o=n(6731),a=function(t){return t.contacts.contacts},s=n(7840),c="Filter_label__vEd1E",u="Filter_input__N7T3z",f=n(3329),l=function(){var t=(0,o.lr)(),e=(0,r.Z)(t,2),n=e[0],l=e[1],h=(0,i.v9)(a),p=(0,i.I0)();if(0!==h.length)return(0,f.jsxs)("label",{className:"label",children:[(0,f.jsx)("span",{className:c,children:"Find contacts by name"}),(0,f.jsx)("input",{className:u,onChange:function(t){var e=t.target.value.trim();p((0,s.T)(e)),l(""===e?{}:{query:e})},type:"text",value:n.value,name:"filter",placeholder:"Start typing the name..."})]})},h=n(2791),p=n(7306),v=n(4217),d=n(9926),y=n(8619),m=n(7247),b=n(3144),g=n(5671),w=n(136),O=n(3668),x=n(7465),_=function(t){(0,w.Z)(n,t);var e=(0,O.Z)(n);function n(){var t;(0,g.Z)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).submit=function(){t.emit("confetti",!0)},t.close=function(){t.emit("confetti",!1)},t}return(0,b.Z)(n)}(n.n(x)()),j=new _,P="Contacts-list_wrapper__4cfoZ",C="Contacts-list_list__f9BVg",M="Contacts-list_item__leVYG",S="Contacts-list_text__dStqy",I="Contacts-list_tel__c1YFg",E="Contacts-list_btn__9SrUC",L=function(){var t=(0,i.v9)(a),e=(0,i.v9)((function(t){return t.contacts.filter})),n=(0,i.I0)(),r=(0,i.v9)(v.H),o=(0,h.useMemo)((function(){return t.length?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):[]}),[t,e]);(0,h.useEffect)((function(){r&&n((0,p.yF)())}),[n,r]),(0,h.useEffect)((function(){j.submit()}),[t]);var s=o.map((function(t){var e=t.id,r=t.name,i=t.number;return(0,f.jsxs)("li",{className:M,children:[(0,f.jsxs)("p",{className:S,children:[(0,f.jsx)(y.Z,{sx:{fontSize:20,marginRight:1}}),r]}),(0,f.jsxs)("p",{className:I,children:["Tel: ",i]}),(0,f.jsx)(d.Z,{className:E,variant:"contained",startIcon:(0,f.jsx)(m.Z,{}),type:"button",onClick:function(){return n((0,p.GK)(e))},children:"Delete"})]},e)}));return(0,f.jsx)("div",{className:P,children:(0,f.jsx)("ul",{className:C,children:s})})},N=n(5206),A="Form_form__e1yzW",k="Form_label__8nx+5",D="Form_input__FTtTw",F="Form_btn__0ebGo",T=function(){var t=(0,h.useState)(""),e=(0,r.Z)(t,2),n=e[0],o=e[1],s=(0,h.useState)(""),c=(0,r.Z)(s,2),u=c[0],l=c[1],v=(0,i.v9)(a),y=(0,i.I0)(),m=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":o(r);break;case"number":l(r);break;default:console.log(r+"is not a valid value")}};return(0,f.jsxs)("form",{className:A,onSubmit:function(t){t.preventDefault(),v.some((function(t){return t.name===n}))?N.Am.warning("".concat(n," is already in contacts!")):(y((0,p.uK)({name:n,number:u})),o(""),l(""))},children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{className:k,children:"Name"}),(0,f.jsx)("input",{className:D,onChange:m,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"John Smith",required:!0})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{className:k,children:"Number"}),(0,f.jsx)("input",{className:D,onChange:m,value:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"123-456-7890",required:!0})]}),(0,f.jsx)(d.Z,{className:F,disabled:!n||!u,variant:"contained",type:"submit",children:(0,f.jsx)("span",{children:"Add contact"})})]})},R=n(1425),Z=n.n(R),z=n(4164),B=function(){var t=(0,h.useState)(!0),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=(0,h.useState)({y:window.innerHeight,x:window.innerWidth-20}),a=(0,r.Z)(o,2),s=a[0],c=a[1];return(0,h.useEffect)((function(){var t=function(){var t;return c({y:null===(t=window)||void 0===t?void 0:t.innerHeight,x:window.innerWidth-20})};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),(0,h.useEffect)((function(){var t=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(t)}}),[]),z.createPortal((0,f.jsx)(Z(),{style:{position:"fixed",top:0,left:0,zIndex:1e5,width:"100%",pointerEvents:"none"},numberOfPieces:n?200:0,gravity:.3,onConfettiComplete:function(t){i(!1),null===t||void 0===t||t.reset()},width:s.x,height:s.y}),document.body)},q=function(){var t=(0,h.useRef)(null),e=(0,h.useState)(!1),n=(0,r.Z)(e,2),i=n[0],o=n[1];return(0,h.useEffect)((function(){return j.on("confetti",o),function(){j.off("confetti",o)}}),[]),(0,h.useEffect)((function(){return i&&(t.current=setTimeout((function(){j.close()}),4e3)),function(){t.current&&clearTimeout(t.current)}}),[i]),i&&(0,f.jsx)(B,{})},Q="ContactPage_wrapper__Csj47",Y=function(){return(0,f.jsxs)("main",{className:Q,children:[(0,f.jsx)(T,{}),(0,f.jsx)(l,{}),(0,f.jsx)(L,{}),(0,f.jsx)(q,{})]})}},8619:function(t,e,n){"use strict";var r=n(4836);e.Z=void 0;var i=r(n(5649)),o=n(3329),a=(0,i.default)((0,o.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");e.Z=a},7247:function(t,e,n){"use strict";var r=n(4836);e.Z=void 0;var i=r(n(5649)),o=n(3329),a=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a},7465:function(t){"use strict";var e,n="object"===typeof Reflect?Reflect:null,r=n&&"function"===typeof n.apply?n.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};e=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!==t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,o),r(n)}function o(){"function"===typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}d(t,e,o,{once:!0}),"error"!==e&&function(t,e,n){"function"===typeof t.on&&d(t,"error",e,n)}(t,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(t){if("function"!==typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function c(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function u(t,e,n,r){var i,o,a,u;if(s(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),a=o[e]),void 0===a)a=o[e]=n,++t._eventsCount;else if("function"===typeof a?a=o[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=c(t))>0&&a.length>i&&!a.warned){a.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=t,f.type=e,f.count=a.length,u=f,console&&console.warn&&console.warn(u)}return t}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function h(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):v(i,i.length)}function p(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function d(t,e,n,r){if("function"===typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!==typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){r.once&&t.removeEventListener(e,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!==typeof t||t<0||i(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!==typeof t||t<0||i(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var c=o[t];if(void 0===c)return!1;if("function"===typeof c)r(c,this,e);else{var u=c.length,f=v(c,u);for(n=0;n<u;++n)r(f[n],this,e)}return!0},o.prototype.addListener=function(t,e){return u(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return u(this,t,e,!0)},o.prototype.once=function(t,e){return s(e),this.on(t,l(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return s(e),this.prependListener(t,l(this,t,e)),this},o.prototype.removeListener=function(t,e){var n,r,i,o,a;if(s(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0===--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},o.prototype.listeners=function(t){return h(this,t,!0)},o.prototype.rawListeners=function(t){return h(this,t,!1)},o.listenerCount=function(t,e){return"function"===typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},1425:function(t,e,n){var r;"undefined"!=typeof self&&self,t.exports=(r=n(2791),function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=r},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:((o=0)||(o=.3*r),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:((o=0)||(o=.3*r),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+s+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+s:((o=0)||(o=r*(.3*1.5)),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*-.5+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+s+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",(function(){return z}));var r,i,o=n(0),a=n.n(o),s=n(1),c=n.n(s);function u(t,e){return t+Math.random()*(e-t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(r||(r={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(i||(i={}));var h=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"context",void 0),l(this,"radius",void 0),l(this,"x",void 0),l(this,"y",void 0),l(this,"w",void 0),l(this,"h",void 0),l(this,"vx",void 0),l(this,"vy",void 0),l(this,"shape",void 0),l(this,"angle",void 0),l(this,"angularSpin",void 0),l(this,"color",void 0),l(this,"rotateY",void 0),l(this,"rotationDirection",void 0),l(this,"getOptions",void 0),this.getOptions=n;var a,s,c=this.getOptions(),f=c.colors,h=c.initialVelocityX,p=c.initialVelocityY;this.context=e,this.x=r,this.y=o,this.w=u(5,20),this.h=u(5,20),this.radius=u(5,10),this.vx="number"==typeof h?u(-h,h):u(h.min,h.max),this.vy="number"==typeof p?u(-p,0):u(p.min,p.max),this.shape=(a=0,s=2,Math.floor(a+Math.random()*(s-a+1))),this.angle=u(0,360)*Math.PI/180,this.angularSpin=u(-.2,.2),this.color=f[Math.floor(Math.random()*f.length)],this.rotateY=u(0,1),this.rotationDirection=u(0,1)?i.Positive:i.Negative}var e,n,o;return e=t,(n=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,o=t.friction,a=t.opacity,s=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=o,this.vy*=o,this.rotateY>=1&&this.rotationDirection===i.Positive?this.rotationDirection=i.Negative:this.rotateY<=-1&&this.rotationDirection===i.Negative&&(this.rotationDirection=i.Positive);var c=.1*this.rotationDirection;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,s&&"function"==typeof s)s.call(this,this.context);else switch(this.shape){case r.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case r.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case r.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&f(e.prototype,n),o&&f(e,o),t}();function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"canvas",void 0),p(this,"context",void 0),p(this,"getOptions",void 0),p(this,"x",0),p(this,"y",0),p(this,"w",0),p(this,"h",0),p(this,"lastNumberOfPieces",0),p(this,"tweenInitTime",Date.now()),p(this,"particles",[]),p(this,"particlesGenerated",0),p(this,"removeParticleAt",(function(t){r.particles.splice(t,1)})),p(this,"getParticle",(function(){var t=u(r.x,r.w+r.x),e=u(r.y,r.h+r.y);return new h(r.context,r.getOptions,t,e)})),p(this,"animate",(function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,s=o.recycle,c=o.numberOfPieces,u=o.debug,f=o.tweenFunction,l=o.tweenDuration;if(!a)return!1;var h=r.particles.length,p=s?h:n,v=Date.now();if(p<c){i!==c&&(r.tweenInitTime=v,r.lastNumberOfPieces=c);for(var d=r.tweenInitTime,y=f(v-d>l?l:Math.max(0,v-d),p,c,l),m=Math.round(y-p),b=0;b<m;b++)r.particles.push(r.getParticle());r.particlesGenerated+=m}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach((function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(s&&p<=c?r.particles[n]=r.getParticle():r.removeParticleAt(n))})),h>0||p<c})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.getOptions=n};function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:c.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},w=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"_options",void 0),b(this,"generator",void 0),b(this,"rafId",void 0),b(this,"setOptionsWithDefaults",(function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=y(y(y({},e),g),t),Object.assign(r,t.confettiSource)})),b(this,"update",(function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)})),b(this,"reset",(function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)})),b(this,"stop",(function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.generator=new v(this.canvas,(function(){return r.options})),this.options=n,this.update()}var e,n,r;return e=t,(n=[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}])&&m(e.prototype,n),r&&m(e,r),t}();function O(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||M(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,e)||M(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){if(t){if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=D(t);if(e){var i=D(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return A(this,n)}}function A(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=a.a.createRef(),R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(o,t);var e,n,r,i=N(o);function o(t){var e;I(this,o);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return F(k(e=i.call.apply(i,[this,t].concat(r))),"canvas",a.a.createRef()),F(k(e),"confetti",void 0),e.canvas=t.canvasRef||T,e}return e=o,(n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=Z(this.props)[0];this.confetti=new w(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=Z(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t=C(Z(this.props),2),e=t[0],n=t[1],r=P({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},n.style);return a.a.createElement("canvas",_({width:e.width,height:e.height,ref:this.canvas},n,{style:r}))}}])&&E(e.prototype,n),r&&E(e,r),o}(o.Component);function Z(t){var e={},n={},r=[].concat(O(Object.keys(g)),["confettiSource","drawShape","onConfettiComplete"]),i=["canvasRef"];for(var o in t){var a=t[o];r.includes(o)?e[o]=a:i.includes(o)?i[o]=a:n[o]=a}return[e,n,{}]}F(R,"defaultProps",P({},g)),F(R,"displayName","ReactConfetti");var z=a.a.forwardRef((function(t,e){return a.a.createElement(R,_({canvasRef:e},t))}));e.default=z}]).default)}}]);
//# sourceMappingURL=899.cfabed14.chunk.js.map