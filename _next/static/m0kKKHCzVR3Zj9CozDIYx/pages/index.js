(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5IsQ":function(e,t){var n,r,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,l=[],c=!1,f=-1;function h(){c&&u&&(c=!1,u.length?l=u.concat(l):f=-1,l.length&&d())}function d(){if(!c){var e=a(h);c=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||c||a(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},"8H5F":function(e,t,n){var r=n("0HwX"),s=n("GCLZ"),i=n("qA3Z"),o=n("/6KZ"),a=n("fGh/"),u=n("ADe/");o(o.S,"Reflect",{get:function e(t,n){var o,l,c=arguments.length<3?t:arguments[2];return u(t)===c?t[n]:(o=r.f(t,n))?i(o,"value")?o.value:void 0!==o.get?o.get.call(c):void 0:a(l=s(t))?e(l,n,c):void 0}})},HrG8:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("5IsQ"))},LJWA:function(e,t,n){n("8H5F"),e.exports=n("TaGV").Reflect.get},"R/ia":function(e,t,n){e.exports=n("LJWA")},RNiq:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.r(t);var s=n("hHgk"),i=n.n(s);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var u=n("t+lh"),l=n.n(u),c=n("XzKa"),f=n.n(c);function h(e){return(h="function"===typeof f.a&&"symbol"===typeof l.a?function(e){return typeof e}:function(e){return e&&"function"===typeof f.a&&e.constructor===f.a&&e!==f.a.prototype?"symbol":typeof e})(e)}function d(e){return(d="function"===typeof f.a&&"symbol"===h(l.a)?function(e){return h(e)}:function(e){return e&&"function"===typeof f.a&&e.constructor===f.a&&e!==f.a.prototype?"symbol":h(e)})(e)}function m(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=n("jDdP"),v=n.n(p),_=n("OKNm"),y=n.n(_);function g(e){return(g=y.a?v.a:function(e){return e.__proto__||v()(e)})(e)}var b=n("tvLF"),x=n.n(b),S=n("R/ia"),w=n.n(S);function j(e,t,n){return(j="undefined"!==typeof Reflect&&w.a?w.a:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var s=x()(r,t);return s.get?s.get.call(n):s.value}})(e,t,n||e)}var N=n("6Ndq"),k=n.n(N);function R(e,t){return(R=y.a||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=k()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}var F=n("YIwv"),z=n.n(F),T=n("mXGw"),A=n.n(T),E=n("9fEB"),B=n.n(E),I=A.a.createElement,O=function(e){function t(){return r(this,t),m(this,g(t).apply(this,arguments))}return C(t,A.a.Component),a(t,[{key:"render",value:function(){return I("div",{className:"jsx-4045693476"},I(z.a,{id:"4045693476"},[".header.jsx-4045693476{position:fixed;top:0px;left:0px;width:100%;height:auto;text-align:center;z-index:1000;}"]),I("div",{className:"jsx-4045693476 header"}))}}]),t}(),P=A.a.createElement,q=function(e){function t(e){return r(this,t),m(this,g(t).call(this,e))}return C(t,A.a.Component),a(t,[{key:"render",value:function(e){return P("div",{className:"jsx-3636536621"},P(z.a,{id:"3636536621"},[]),P(B.a,null,P("title",{className:"jsx-3636536621"},"Audi MF"),P("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-3636536621"}),P("link",{rel:"stylesheet",type:"text/css",href:"/css/main.css",className:"jsx-3636536621"}),P("link",{rel:"stylesheet",type:"text/css",href:"/css/button.css",className:"jsx-3636536621"}),P("link",{rel:"stylesheet",type:"text/css",href:"/css/fonts.css",className:"jsx-3636536621"}),P("link",{rel:"stylesheet",type:"text/css",href:"/css/grid.css",className:"jsx-3636536621"}),P("link",{rel:"stylesheet",type:"text/css",href:"/css/typography.css",className:"jsx-3636536621"}),P("link",{rel:"stylesheet",type:"text/css",href:"/css/normalize.css",className:"jsx-3636536621"})),P(O,null),P("div",{className:"jsx-3636536621 relative"},e))}}]),t}(),V=A.a.createElement,G=function(e){function t(e){var n;return r(this,t),(n=m(this,g(t).call(this,e))).state={isFormVisible:!1,isConfirmationVisible:!1},n}return C(t,A.a.Component),a(t,[{key:"render",value:function(){var e=this;function t(e){return e?"":"hidden"}return V("div",{className:"jsx-903660642"},V(z.a,{id:"903660642"},[".teaser-performance.jsx-903660642{position:relative;}",".btn-booking.jsx-903660642{display:inline-block;border-bottom:5px solid #000;font-size:3.25vw;margin-left:5.9vw;margin-top:40vw;padding-bottom:4.5vw;position:absolute;z-index:5;}",".arrow-booking.jsx-903660642{font-family:Audi Extended Normal;}",".form-booking.jsx-903660642,.form-confirmation.jsx-903660642{position:absolute;background-color:#fff;border:1px solid #d3d3d3;display:inline-block;font-size:4vw;left:50%;padding:20px;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:60vw;}",".form-booking.jsx-903660642{z-index:10;}",".form-group.jsx-903660642{margin-bottom:0.5rem;}",".form-group-submit.jsx-903660642{text-align:center;}",".form-label.jsx-903660642{width:19vw;display:inline-block;}",".form-label.jsx-903660642::after{content:':';}",".form-booking.jsx-903660642 input.jsx-903660642{font-size:4vw;width:38vw;}",".form-confirmation.jsx-903660642{text-align:center;z-index:15;}",".form-message.jsx-903660642{display:block;}",".form-button.form-button-confirmation.jsx-903660642{font-size:3vw;margin-top:20px;}",".form-button.jsx-903660642{font-size:4vw;margin-top:10px;}"]),V("div",{className:"jsx-903660642 block teaser-performance"},V("span",{onClick:function(){e.setState({isFormVisible:!0})},className:"jsx-903660642 btn btn-booking"},"Book a test drive",V("span",{className:"jsx-903660642 arrow-booking"},"\u2192")),V("form",{onSubmit:function(t){t.preventDefault(),e.setState({isFormVisible:!1,isConfirmationVisible:!0}),t.target.reset()},className:"jsx-903660642 "+("form-booking "+t(this.state.isFormVisible)||!1)},V("div",{className:"jsx-903660642 form-group"},V("label",{htmlFor:"name",className:"jsx-903660642 form-label "},"Name"),V("input",{type:"text",name:"name",id:"name",required:!0,className:"jsx-903660642 form-control"})),V("div",{className:"jsx-903660642 form-group"},V("label",{htmlFor:"email",className:"jsx-903660642 form-label "},"Email"),V("input",{type:"email",name:"email",id:"email",required:!0,className:"jsx-903660642 form-control"})),V("div",{className:"jsx-903660642 form-group"},V("label",{htmlFor:"phone",className:"jsx-903660642 form-label "},"Phone"),V("input",{type:"text",name:"phone",id:"phone",required:!0,className:"jsx-903660642 form-control"})),V("div",{className:"jsx-903660642 form-group"},V("label",{htmlFor:"date",className:"jsx-903660642 form-label "},"Date"),V("input",{type:"date",id:"date",name:"date",defaultValue:"2020-01-01",min:"2020-01-01",max:"2020-12-31",className:"jsx-903660642"})),V("div",{className:"jsx-903660642 form-group"},V("label",{htmlFor:"time",className:"jsx-903660642 form-label "},"Time"),V("input",{type:"time",id:"time",name:"time",defaultValue:"09:00",min:"09:00",max:"18:00",required:!0,className:"jsx-903660642"})),V("div",{className:"jsx-903660642 form-group form-group-submit"},V("button",{id:"btn-booking",name:"btn-booking",className:"jsx-903660642 form-button"},"Book"))),V("div",{className:"jsx-903660642 "+("form-confirmation "+t(this.state.isConfirmationVisible)||!1)},V("span",{className:"jsx-903660642 form-message"},"Your test drive has been booked!"),V("button",{id:"btn-confirmation",name:"btn-confirmation",onClick:function(){e.setState({isConfirmationVisible:!1})},className:"jsx-903660642 form-button form-button-confirmation"},"Close")),V("img",{src:"https://cdn.jsdelivr.net/gh/kashsapient/microfrontend-resources/img/teaser-performance.png",alt:"",className:"jsx-903660642"})))}}]),t}();n.d(t,"default",function(){return H});var L=A.a.createElement,H=function(e){function t(e){return r(this,t),m(this,g(t).call(this,e))}return C(t,q),a(t,[{key:"render",value:function(){return j(g(t.prototype),"render",this).call(this,L("div",{className:"jsx-3636536621"},L(z.a,{id:"3636536621"},[]),L("div",{id:"app",className:"jsx-3636536621 relative"},L(G,null))))}}]),t}()},TqC3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},YIwv:function(e,t,n){e.exports=n("s1G/")},"s1G/":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,s=n("mXGw");var i=new(((r=n("uVoP"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map(function(e){var t=e[0],n=e[1];return i.computeId(t,n)}).join(" ")};var s=r.prototype;return s.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},s.componentWillUnmount=function(){i.remove(this.props)},s.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(s.Component);t.default=o},uVoP:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("zcKR")),s=i(n("HrG8"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var s=String(n),i=t+s;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+s)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var s=n+r;return t[s]||(t[s]=r.replace(e,n)),t[s]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,s=e.id;if(r){var i=this.computeId(s,r);return{styleId:i,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,n)]}}return{styleId:this.computeId(s),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}();t.default=o},zcKR:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}}},[["TqC3",0,1]]]);
