!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="kkh6")}({"2SVd":function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},"48GG":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{parentPullUpState:{default:0},onInfiniteLoad:{type:Function,require:!1}},data:function(){return{top:0,startY:0,pullUpState:0,isLoading:!1,pullUpStateText:{moreDataTxt:"上拉加载更多",loadingMoreDataTxt:"加载中...",noMoreDataTxt:"已经拉到底"}}},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY},touchMove:function(t){t.targetTouches[0].pageY<this.startY&&this.judgeScrollBarToTheEnd()},judgeScrollBarToTheEnd:function(){var t=document.querySelector(".loadMoudle").clientHeight;(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.scrollHeight)>=t&&(3===this.pullUpState||this.isLoading||(this.pullUpState=1,this.infiniteLoad()))},infiniteLoad:function(){var t=this;this.pullUpState=2,this.isLoading=!0,setTimeout(function(){t.onInfiniteLoad(t.infiniteLoadDone)},800)},infiniteLoadDone:function(){this.pullUpState=0,this.isLoading=!1}},watch:{parentPullUpState:{handler:function(t,e){this.pullUpState=t},immediate:!0,deep:!0}}}},"5oMp":function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},"6oGp":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loadMoudle",style:{transform:"translate3d(0,"+t.top+"px, 0)"},on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)}}},[t._t("default"),t._v(" "),n("footer",{staticClass:"load-more"},[t._t("load-more",[1===t.pullUpState?n("div",{staticClass:"moreData-tip"},[n("span",{staticClass:"moreData-tip-text"},[t._v(t._s(t.pullUpStateText.moreDataTxt))])]):t._e(),t._v(" "),2===t.pullUpState?n("div",{staticClass:"loadingMoreData-tip"},[n("span",{staticClass:"icon-loading"}),t._v(" "),n("span",{staticClass:"loadingMoreData-tip-text"},[t._v(t._s(t.pullUpStateText.loadingMoreDataTxt))])]):t._e(),t._v(" "),3===t.pullUpState?n("div",{staticClass:"noMoreData-tip"},[n("span",{staticClass:"connectingLine"}),t._v(" "),n("span",{staticClass:"noMoreData-tip-text"},[t._v(t._s(t.pullUpStateText.noMoreDataTxt))]),t._v(" "),n("span",{staticClass:"connectingLine"})]):t._e()])],2)],2)},o=[]},"7yeM":function(t,e){},"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var t=s(p);f=!0;for(var e=c.length;e;){for(u=c,c=[];++l<e;)u&&u[l].run();l=-1,e=c.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||f||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9HAi":function(t,e,n){"use strict";n.r(e);var r=n("48GG"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var a=n("6oGp"),s=n("JFUb");var u=function(t){n("Lyky")},c=Object(s.a)(o.a,a.a,a.b,!1,u,"data-v-37385b66",null);e.default=c.exports},"9rSQ":function(t,e,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},BEtg:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},CgaS:function(t,e,n){"use strict";var r=n("JEQr"),o=n("xTJ+"),i=n("9rSQ"),a=n("UnBK");function s(t){this.defaults=t,this.interceptors={request:new i,response:new i}}s.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=s},DfZB:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},HSsa:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},JEQr:function(t,e,n){"use strict";(function(e){var r=n("xTJ+"),o=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n("tQ2B"):void 0!==e&&(t=n("tQ2B")),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(t){s.headers[t]={}}),r.forEach(["post","put","patch"],function(t){s.headers[t]=r.merge(i)}),t.exports=s}).call(this,n("8oxB"))},JFUb:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var c,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId=i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var l=f.render;f.render=function(t,e){return c.call(e),l(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},LYNF:function(t,e,n){"use strict";var r=n("OH9c");t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},Lmem:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},Lyky:function(t,e){},MLWZ:function(t,e,n){"use strict";var r=n("xTJ+");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var a=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},OH9c:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},OTTw:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"Rn+g":function(t,e,n){"use strict";var r=n("LYNF");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},TQC6:function(t,e){},UnBK:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),i=n("Lmem"),a=n("JEQr"),s=n("2SVd"),u=n("5oMp");function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!s(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},WVKw:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movie-page",attrs:{id:"movie"}},[n("div",{staticClass:"login"},[n("span",{staticClass:"account_text"},[t._v(t._s(t.accountName)+"，已登录！")]),t._v(" "),n("input",{staticClass:"exit_btn",attrs:{type:"button",value:"退出"},on:{click:t.clear}})]),t._v(" "),n("ul",{staticClass:"nav"},t._l(t.navs,function(e,r){return n("li",{key:r,class:{selected:r===t.isTabSelected},on:{click:function(e){t.chooseTab(r,e)}}},[n("span",[t._v(t._s(r))])])})),t._v(" "),n("v-reload",{attrs:{"on-infinite-load":t.onInfiniteLoad,"parent-pull-up-state":t.currentPullUpState}},[t._l(t.lists,function(e,r){return[n("ul",{directives:[{name:"show",rawName:"v-show",value:r===t.isTabSelected,expression:"key === isTabSelected"}],key:r,staticClass:"movie-list"},t._l(e,function(e,r){return n("li",{key:r},[n("a",{attrs:{href:e.gotoLink}},[n("span",{staticClass:"pic"},[n("img",{attrs:{src:e.poster}})]),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"rate"},[t._v(t._s(e.rate))])])])}))]})],2)],1)},o=[]},endd:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},eqyj:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(t,e,n){"use strict";var r=n("endd");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},kkh6:function(t,e,n){"use strict";n.r(e);var r=n("sYTU");n("TQC6");new Vue({el:"#app",template:"<App/>",components:{App:r.default}})},n6bm:function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,i=String(t),a="",s=0,u=r;i.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&e>>8-s%1*8)){if((n=i.charCodeAt(s+=.75))>255)throw new o;e=e<<8|n}return a}},sJfz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n("vDqi")),o=i(n("9HAi"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{lists:null,navs:null,accountName:null,isTabSelected:"中国大陆",infiniteLoadData:{"中国大陆":{pullUpState:0},"科幻":{pullUpState:0},"动画":{pullUpState:0},"爱情":{pullUpState:0},"历史":{pullUpState:0}}}},components:{"v-reload":o.default},computed:{currentPullUpState:function(){return this.infiniteLoadData[this.isTabSelected].pullUpState}},created:function(){this.init()},methods:{init:function(){this.getData(),this.accountName=this.getCookie("username")||"admin"},getData:function(){var t=this;r.default.post("/getMovieList",{type:["中国大陆","科幻","动画","爱情","历史"]}).then(function(e){if(e.data.success){var n;!function(){var r=window.location.origin,o=e.data.data;for(n in t.navs=o,t.lists=o,o)o[n].forEach(function(t){t.gotoLink=r+"/detail?id="+t.doubanId})}()}else{alert(e.data.message);var r=window.location.origin+"/login";window.location.replace(r)}}).catch(function(t){alert(t)})},getOneData:function(){var t=this;r.default.post("/getMovieOneItem",{type:this.isTabSelected,pageStart:this.lists[this.isTabSelected].length+1,pageSize:6}).then(function(e){if(200==e.data.statesCode){var n=window.location.origin,r=e.data.data;t.lists[t.isTabSelected]=t.lists[t.isTabSelected].concat(r),t.lists[t.isTabSelected].forEach(function(t){t.gotoLink=n+"/detail?id="+t.doubanId})}else if(204==e.data.statesCode)t.infiniteLoadData[t.isTabSelected].pullUpState=3;else{alert(e.data.message);var o=window.location.origin+"/login";window.location.replace(o)}}).catch(function(t){alert(t+"#######")})},chooseTab:function(t,e){this.isTabSelected=t},clear:function(){var t=window.location.origin+"/login";this.delCookie("sessionId"),window.location.replace(t)},getCookie:function(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null},delCookie:function(t){var e=new Date,n=this.getCookie(t);e.setTime(e.getTime()-1),null!==n&&(document.cookie=t+"="+n+";expires="+e.toGMTString())},onInfiniteLoad:function(t){0===this.infiniteLoadData[this.isTabSelected].pullUpState&&this.getOneData(),t()}}}},sYTU:function(t,e,n){"use strict";var r=n("sJfz"),o=n.n(r),i=n("WVKw"),a=n("JFUb");var s=function(t){n("7yeM")},u=Object(a.a)(o.a,i.a,i.b,!1,s,"data-v-70be90e4",null);e.default=u.exports},tQ2B:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),i=n("MLWZ"),a=n("w0Vi"),s=n("OTTw"),u=n("LYNF"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("n6bm");t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",g=t.auth.password||"";p.Authorization="Basic "+c(v+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,r),d=null}},d.onerror=function(){f(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n("eqyj"),w=(t.withCredentials||s(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},vDqi:function(t,e,n){t.exports=n("zuR4")},w0Vi:function(t,e,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},xAGQ:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},"xTJ+":function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n("HSsa"),i=n("BEtg"),a=Object.prototype.toString;function s(t){return"[object Array]"===a.call(t)}function u(t){return null!==t&&"object"===(void 0===t?"undefined":r(t))}function c(t){return"[object Function]"===a.call(t)}function f(t,e){if(null!==t&&void 0!==t)if("object"!==(void 0===t?"undefined":r(t))&&(t=[t]),s(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===a.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:u,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===a.call(t)},isFile:function(t){return"[object File]"===a.call(t)},isBlob:function(t){return"[object Blob]"===a.call(t)},isFunction:c,isStream:function(t){return u(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function t(){var e={};function n(n,o){"object"===r(e[o])&&"object"===(void 0===n?"undefined":r(n))?e[o]=t(e[o],n):e[o]=n}for(var o=0,i=arguments.length;o<i;o++)f(arguments[o],n);return e},extend:function(t,e,n){return f(e,function(e,r){t[r]=n&&"function"==typeof e?o(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},zuR4:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),i=n("CgaS"),a=n("JEQr");function s(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var u=s(a);u.Axios=i,u.create=function(t){return s(r.merge(a,t))},u.Cancel=n("endd"),u.CancelToken=n("jfS+"),u.isCancel=n("Lmem"),u.all=function(t){return Promise.all(t)},u.spread=n("DfZB"),t.exports=u,t.exports.default=u}});