!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="aorA")}({"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"2SVd":function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},"2faE":function(t,e,n){var r=n("5K7Z"),o=n("eUtF"),i=n("G8Mo"),u=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5oMp":function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,c=[],f=!1,l=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=s(p);f=!0;for(var e=c.length;e;){for(a=c,c=[];++l<e;)a&&a[l].run();l=-1,e=c.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||f||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"93I4":function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return"object"===(void 0===t?"undefined":n(t))?null!==t:"function"==typeof t}},"9rSQ":function(t,e,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},AHeU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"注册失败",isShow:!1}},methods:{toast:function(t){var e=this,n=t||{title:"一个toast",time:1e3},r=n.title,o=n.time;this.isShow=!0,this.title=r.length>8?r.substring(0,8)+"...":r,setTimeout(function(){return e.isShow=!1},o)}}}},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},BEtg:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},CgaS:function(t,e,n){"use strict";var r=n("JEQr"),o=n("xTJ+"),i=n("9rSQ"),u=n("UnBK");function s(t){this.defaults=t,this.interceptors={request:new i,response:new i}}s.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[u,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=s},DfZB:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Gdu4:function(t,e){},HSsa:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},Hsns:function(t,e,n){var r=n("93I4"),o=n("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},JEQr:function(t,e,n){"use strict";(function(e){var r=n("xTJ+"),o=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n("tQ2B"):void 0!==e&&(t=n("tQ2B")),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(u(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(t){s.headers[t]={}}),r.forEach(["post","put","patch"],function(t){s.headers[t]=r.merge(i)}),t.exports=s}).call(this,n("8oxB"))},JFUb:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,s){var a=typeof(t=t||{}).default;"object"!==a&&"function"!==a||(t=t.default);var c,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId=i),u?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var l=f.render;f.render=function(t,e){return c.call(e),l(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},L8JS:function(t,e){},LYNF:function(t,e,n){"use strict";var r=n("OH9c");t.exports=function(t,e,n,o,i){var u=new Error(t);return r(u,e,n,o,i)}},Lmem:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},MLWZ:function(t,e,n){"use strict";var r=n("xTJ+");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var u=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),u.push(o(e)+"="+o(t))}))}),i=u.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},NegM:function(t,e,n){var r=n("2faE"),o=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},OH9c:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},OTTw:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"QXD/":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"movie"}},[n("Popup",{ref:"popup"}),t._v(" "),n("div",{staticClass:"title"},[t._v("人工智能匹配")]),t._v(" "),n("div",{staticClass:"account_form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.my_team,expression:"my_team"}],staticClass:"account_btn",attrs:{type:"text",value:"",id:"username",placeholder:"我的战队名称"},domProps:{value:t.my_team},on:{input:function(e){e.target.composing||(t.my_team=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"vest_team"},[n("input",{staticClass:"modify",attrs:{type:"button",value:"修改名称"},on:{click:t.modify}})]),t._v(" "),n("div",{staticClass:"vest_team"},[n("span",{staticClass:"vest_title"},[t._v("对手战队名称：")]),t._v(" "),n("span",{staticClass:"team_name"},[t._v(t._s(t.vest_title))])])],1)},o=[]},"RU/L":function(t,e,n){n("Rqdy");var r=n("WEpk").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"Rn+g":function(t,e,n){"use strict";var r=n("LYNF");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},Rqdy:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SEkw:function(t,e,n){t.exports={default:n("RU/L"),__esModule:!0}},SS6v:function(t,e,n){"use strict";n.r(e);var r=n("AHeU"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var u=n("cIHa"),s=n("JFUb");var a=function(t){n("L8JS")},c=Object(s.a)(o.a,u.a,u.b,!1,a,"data-v-1c22397c",null);e.default=c.exports},UiF9:function(t,e,n){"use strict";var r=n("iNz7"),o=n.n(r),i=n("QXD/"),u=n("JFUb");var s=function(t){n("Gdu4")},a=Object(u.a)(o.a,i.a,i.b,!1,s,null,null);e.default=a.exports},UnBK:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),i=n("Lmem"),u=n("JEQr"),s=n("2SVd"),a=n("5oMp");function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!s(t.url)&&(t.url=a(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||u.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},WEpk:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},Y7ZC:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("2GTP"),u=n("NegM"),s=n("B+OT"),a=function t(e,n,a){var c,f,l,p=e&t.F,d=e&t.G,h=e&t.S,m=e&t.P,v=e&t.B,y=e&t.W,w=d?o:o[n]||(o[n]={}),g=w.prototype,x=d?r:h?r[n]:(r[n]||{}).prototype;for(c in d&&(a=n),a)(f=!p&&x&&void 0!==x[c])&&s(w,c)||(l=f?x[c]:a[c],w[c]=d&&"function"!=typeof x[c]?a[c]:v&&f?i(l,r):y&&x[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):m&&"function"==typeof l?i(Function.call,l):l,m&&((w.virtual||(w.virtual={}))[c]=l,e&t.R&&g&&!g[c]&&u(g,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},YEIV:function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("SEkw"));e.default=function(t,e,n){return e in t?(0,r.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},aorA:function(t,e,n){"use strict";n.r(e);var r=n("UiF9");n("c/8g");new Vue({el:"#app",template:"<App/>",components:{App:r.default}})},"c/8g":function(t,e){},cIHa:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[this.isShow?e("div",{staticClass:"popup"},[this._v(this._s(this.title))]):this._e()])},o=[]},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")(function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a})},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},endd:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},eqyj:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,u){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},iNz7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("YEIV"));o(n("vDqi")),o(n("SS6v"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){var t;return{my_team:"",vest_title:"机器猫战队",words:(t={"不动":["同意","我们也累了","你们别耍诈","做人要诚信","敌不动我不动"],"平":["考虑一下","再说吧","怕了吗","别怂呀","不相信"],"和":["算了吧","你以为我们会相信？","你们别耍诈","做人要诚信","看看情况"],"不行":["你才不行","切","等着瞧吧","wait and see","走着瞧"],"菜":["你才菜呢","比你强就行了","看结果吧","少废话，就是干","晚上11点见"],"浪费":["对你自己说吧","不会放弃的","坚持到底","还有希望呢","最后一刻见"],"白费":["今天赢得肯定是我们","不要高兴得太早","胜利肯定是我们","我们赢定了","打爆你们哦"],"呵呵":["笑啥笑","我们也呵呵","不要高兴得太早","呵呵呵呵","同志们加油"],"怂":["来么","不","结果见","来吧","少废话"],"干":["不要太冲动了","你们要想好","年轻人太冲动了","得饶人处且饶人","希望不要哭"],"牛逼":["还是你们牛逼","还是你们厉害","彼此彼此","确实强呀","还行吧"],"爆":["少说话多做事儿","实力证明","要你们哭","谁爆谁哦","很有自信么"],"弱":["少说废话，看结果吧","他强任他强我干我的羊","你牛逼行了吧","来吧来吧","等着瞧吧"],"赢":["放马过来吧","不要想得太美","精神可嘉呀","理想是美好的","不要太有胜负心"],"加油":["一起加油","我们也加油","玩得开心就好","come on！","拼一拼哦"],"胜":["我们才是最后的赢家","放弃吧","别白费功夫了"],"拼":["努力是白费的","不要太看重结果","我们也会努力的"],"傻":["你骂谁呢","傻子乐","要你哭"],"蠢":["希望不是说自己哦","怎么也比你们聪明","靠实力吧，不要废话"],"狗":["文明比赛","友谊第一","唉"],"猪":["你才猪呢","靠实力说话","你们激怒了我的小宇宙"]},(0,r.default)(t,"菜",["你最菜了","别哭哦","来么来么少废话"]),(0,r.default)(t,"妈逼",["屏蔽","不跟你这种人计较","打哭你"]),(0,r.default)(t,"逼",["心态最重要","冷静","王之藐视"]),(0,r.default)(t,"大爷",["大哈哈爷咯","不跟你计较","你大爷还是你大爷"]),(0,r.default)(t,"脑残",["何必呢","输不起呀","看谁是咯"]),(0,r.default)(t,"贱",["还是你们更胜一筹","比不过你们","在这方面确实不如你们"]),(0,r.default)(t,"杂种",["闭嘴吧","我靠","你彻底激怒了我们"]),(0,r.default)(t,"2B",["今天要让你们哭","打爆你们","一个字，干！"]),(0,r.default)(t,"MB",["可不可以文明点","我们靠实力PK吧","就会嘴上功夫"]),(0,r.default)(t,"屎",["嘴真臭哦","嘴贱无敌","忍无可忍无需再忍"]),(0,r.default)(t,"大哥",["叫大哥也没用哦","该赢还得赢","抱歉了兄弟这局得赢"]),(0,r.default)(t,"兄弟",["四海一家人","友谊第一比赛第二","该赢还得赢"]),(0,r.default)(t,"放水",["不行啦","先赢了这局吧","还是得赢哦"]),(0,r.default)(t,"放一马",["你们加油咯","靠实力么","你们行的呀"]),(0,r.default)(t,"累",["我们也累哦","不要放弃哈","坚持住哦"]),(0,r.default)(t,"让",["我们就是为了赢","不行哦","还是要赢的"]),(0,r.default)(t,"求",["我不吃这套哦","求人不如求己","对不住了哦"]),(0,r.default)(t,"厉害",["你们也不错哦","彼此彼此哦","今天拼尽全力了"]),(0,r.default)(t,"强",["彼此彼此啦","强中自有强中手","全力一搏吧"]),(0,r.default)(t,"耶",["厉害呀","确实强","希望明天还能碰到"]),(0,r.default)(t,"哦耶",["好棒哈","确实厉害","任重道远呀"]),(0,r.default)(t,"欧耶",["明天见哦","厉害厉害厉害","开心就好哦"]),(0,r.default)(t,"哈哈",["哈哈哈哈哈","哦哈哈嘿嘿都棒棒的","大家都很棒"]),(0,r.default)(t,"嘿嘿",["笑得好猥琐呀","别高兴太早哦","玩得开心就好"]),(0,r.default)(t,"好样",["为友谊干杯","都加油吧","今天很开心"]),(0,r.default)(t,"能量",["我们也需要哦","今天一定要赢","坚持到底就是胜利","必须赢","谁都需要能量"]),(0,r.default)(t,"水",["水是能量之源","看谁人缘更好吧","水水水水水！"]),t)}},created:function(){this.init()},watch:{},methods:{init:function(){},modify:function(){var t=this;""!==this.vest_title&&(this.vest_title="正在思考中...",setTimeout(function(){var e=t.my_team;t.vest_title=t.getTitle(e.trim().toUpperCase())},1500))},getTitle:function(t){for(var e in this.words)if(t.indexOf(e)>=0){var n=parseInt(Math.random()*this.words[e].length,10),r=this.words[e][n];return this.filterWords(e,n),r}return"机器猫战队"},filterWords:function(t,e){this.words[t].splice(e,1),0===this.words[t].length&&delete this.words[t]},words:function(t){}}}},"jfS+":function(t,e,n){"use strict";var r=n("endd");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},jmDH:function(t,e,n){t.exports=!n("KUxP")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},n6bm:function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,i=String(t),u="",s=0,a=r;i.charAt(0|s)||(a="=",s%1);u+=a.charAt(63&e>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new o;e=e<<8|n}return u}},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},tQ2B:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),i=n("MLWZ"),u=n("w0Vi"),s=n("OTTw"),a=n("LYNF"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("n6bm");t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",y=t.auth.password||"";p.Authorization="Basic "+c(v+":"+y)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,r),d=null}},d.onerror=function(){f(a("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=n("eqyj"),g=(t.withCredentials||s(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;g&&(p[t.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},vDqi:function(t,e,n){t.exports=n("zuR4")},w0Vi:function(t,e,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,u={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(u[e]&&o.indexOf(e)>=0)return;u[e]="set-cookie"===e?(u[e]?u[e]:[]).concat([n]):u[e]?u[e]+", "+n:n}}),u):u}},xAGQ:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},"xTJ+":function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n("HSsa"),i=n("BEtg"),u=Object.prototype.toString;function s(t){return"[object Array]"===u.call(t)}function a(t){return null!==t&&"object"===(void 0===t?"undefined":r(t))}function c(t){return"[object Function]"===u.call(t)}function f(t,e){if(null!==t&&void 0!==t)if("object"!==(void 0===t?"undefined":r(t))&&(t=[t]),s(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===u.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===u.call(t)},isFile:function(t){return"[object File]"===u.call(t)},isBlob:function(t){return"[object Blob]"===u.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function t(){var e={};function n(n,o){"object"===r(e[o])&&"object"===(void 0===n?"undefined":r(n))?e[o]=t(e[o],n):e[o]=n}for(var o=0,i=arguments.length;o<i;o++)f(arguments[o],n);return e},extend:function(t,e,n){return f(e,function(e,r){t[r]=n&&"function"==typeof e?o(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},zuR4:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),i=n("CgaS"),u=n("JEQr");function s(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var a=s(u);a.Axios=i,a.create=function(t){return s(r.merge(u,t))},a.Cancel=n("endd"),a.CancelToken=n("jfS+"),a.isCancel=n("Lmem"),a.all=function(t){return Promise.all(t)},a.spread=n("DfZB"),t.exports=a,t.exports.default=a}});