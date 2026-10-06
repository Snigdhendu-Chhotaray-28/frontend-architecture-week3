(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},fi={},cc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),_p=Symbol.for("react.portal"),Pp=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),Lp=Symbol.for("react.profiler"),Mp=Symbol.for("react.provider"),Dp=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),Ap=Symbol.for("react.memo"),Rp=Symbol.for("react.lazy"),La=Symbol.iterator;function Op(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fc=Object.assign,pc={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||dc}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hc(){}hc.prototype=Vn.prototype;function Cs(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||dc}var js=Cs.prototype=new hc;js.constructor=Cs;fc(js,Vn.prototype);js.isPureReactComponent=!0;var Ma=Array.isArray,gc=Object.prototype.hasOwnProperty,Es={current:null},mc={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)gc.call(t,r)&&!mc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Yr,type:e,key:i,ref:l,props:o,_owner:Es.current}}function Fp(e,t){return{$$typeof:Yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function Bp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Da=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bp(""+e.key):t.toString(36)}function ko(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Yr:case _p:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+bi(l,0):r,Ma(o)?(n="",e!=null&&(n=e.replace(Da,"$&/")+"/"),ko(o,t,n,"",function(d){return d})):o!=null&&(zs(o)&&(o=Fp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Da,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ma(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+bi(i,s);l+=ko(i,t,n,a,o)}else if(a=Op(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+bi(i,s++),l+=ko(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function to(e,t,n){if(e==null)return e;var r=[],o=0;return ko(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Wp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},$o={transition:null},Up={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:$o,ReactCurrentOwner:Es};function vc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Vn;A.Fragment=Pp;A.Profiler=Lp;A.PureComponent=Cs;A.StrictMode=Np;A.Suspense=bp;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Up;A.act=vc;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Es.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)gc.call(t,a)&&!mc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Yr,type:e.type,key:o,ref:i,props:r,_owner:l}};A.createContext=function(e){return e={$$typeof:Dp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mp,_context:e},e.Consumer=e};A.createElement=yc;A.createFactory=function(e){var t=yc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Ip,render:e}};A.isValidElement=zs;A.lazy=function(e){return{$$typeof:Rp,_payload:{_status:-1,_result:e},_init:Wp}};A.memo=function(e,t){return{$$typeof:Ap,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};A.unstable_act=vc;A.useCallback=function(e,t){return Ee.current.useCallback(e,t)};A.useContext=function(e){return Ee.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};A.useEffect=function(e,t){return Ee.current.useEffect(e,t)};A.useId=function(){return Ee.current.useId()};A.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Ee.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};A.useRef=function(e){return Ee.current.useRef(e)};A.useState=function(e){return Ee.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Ee.current.useTransition()};A.version="18.3.1";cc.exports=A;var D=cc.exports;const ke=Tp(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=D,Vp=Symbol.for("react.element"),Qp=Symbol.for("react.fragment"),Gp=Object.prototype.hasOwnProperty,Yp=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kp={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Gp.call(t,r)&&!Kp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Vp,type:e,key:i,ref:l,props:o,_owner:Yp.current}}fi.Fragment=Qp;fi.jsx=xc;fi.jsxs=xc;uc.exports=fi;var u=uc.exports,kl={},wc={exports:{}},Re={},kc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var M=T.length;T.push(L);e:for(;0<M;){var V=M-1>>>1,W=T[V];if(0<o(W,L))T[V]=L,T[M]=W,M=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],M=T.pop();if(M!==L){T[0]=M;e:for(var V=0,W=T.length,ge=W>>>1;V<ge;){var re=2*(V+1)-1,ce=T[re],Fe=re+1,Be=T[Fe];if(0>o(ce,M))Fe<W&&0>o(Be,ce)?(T[V]=Be,T[Fe]=M,V=Fe):(T[V]=ce,T[re]=M,V=re);else if(Fe<W&&0>o(Be,M))T[V]=Be,T[Fe]=M,V=Fe;else break e}}return L}function o(T,L){var M=T.sortIndex-L.sortIndex;return M!==0?M:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],d=[],h=1,g=null,m=3,v=!1,y=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=T)r(d),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(d)}}function w(T){if(x=!1,p(T),!y)if(n(a)!==null)y=!0,he(C);else{var L=n(d);L!==null&&ot(w,L.startTime-T)}}function C(T,L){y=!1,x&&(x=!1,f(j),j=-1),v=!0;var M=m;try{for(p(L),g=n(a);g!==null&&(!(g.expirationTime>L)||T&&!P());){var V=g.callback;if(typeof V=="function"){g.callback=null,m=g.priorityLevel;var W=V(g.expirationTime<=L);L=e.unstable_now(),typeof W=="function"?g.callback=W:g===n(a)&&r(a),p(L)}else r(a);g=n(a)}if(g!==null)var ge=!0;else{var re=n(d);re!==null&&ot(w,re.startTime-L),ge=!1}return ge}finally{g=null,m=M,v=!1}}var z=!1,$=null,j=-1,O=5,E=-1;function P(){return!(e.unstable_now()-E<O)}function B(){if($!==null){var T=e.unstable_now();E=T;var L=!0;try{L=$(!0,T)}finally{L?b():(z=!1,$=null)}}else z=!1}var b;if(typeof c=="function")b=function(){c(B)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ct=pe.port2;pe.port1.onmessage=B,b=function(){ct.postMessage(null)}}else b=function(){N(B,0)};function he(T){$=T,z||(z=!0,b())}function ot(T,L){j=N(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,he(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var M=m;m=L;try{return T()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=m;m=T;try{return L()}finally{m=M}},e.unstable_scheduleCallback=function(T,L,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,T){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=M+W,T={id:h++,callback:L,priorityLevel:T,startTime:M,expirationTime:W,sortIndex:-1},M>V?(T.sortIndex=M,t(d,T),n(a)===null&&T===n(d)&&(x?(f(j),j=-1):x=!0,ot(w,M-V))):(T.sortIndex=W,t(a,T),y||v||(y=!0,he(C))),T},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(T){var L=m;return function(){var M=m;m=L;try{return T.apply(this,arguments)}finally{m=M}}}})($c);kc.exports=$c;var Xp=kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=D,Ae=Xp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sc=new Set,Tr={};function dn(e,t){In(e,t),In(e+"Capture",t)}function In(e,t){for(Tr[e]=t,e=0;e<t.length;e++)Sc.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,Jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},ba={};function qp(e){return $l.call(ba,e)?!0:$l.call(Ia,e)?!1:Jp.test(e)?ba[e]=!0:(Ia[e]=!0,!1)}function eh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function th(e,t,n,r){if(t===null||typeof t>"u"||eh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ts=/[\-:]([a-z])/g;function _s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ts,_s);ve[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ts,_s);ve[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ts,_s);ve[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ps(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(th(t,n,o,r)&&(n=null),r||o===null?qp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),mn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Ns=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),jc=Symbol.for("react.context"),Ls=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),Ms=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Ec=Symbol.for("react.offscreen"),Aa=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ai;function cr(e){if(Ai===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ai=t&&t[1]||""}return`
`+Ai+e}var Ri=!1;function Oi(e,t){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function nh(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case mn:return"Portal";case Sl:return"Profiler";case Ns:return"StrictMode";case Cl:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jc:return(e.displayName||"Context")+".Consumer";case Cc:return(e._context.displayName||"Context")+".Provider";case Ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ms:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function rh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oh(e){var t=zc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=oh(e))}function Tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ra(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _c(e,t){t=t.checked,t!=null&&Ps(e,"checked",t,!1)}function Tl(e,t){_c(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_l(e,t.type,n):t.hasOwnProperty("defaultValue")&&_l(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _l(e,t,n){(t!=="number"||Ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(dr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Pc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,Lc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ih=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){ih.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function Mc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function Dc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Mc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var lh=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ll(e,t){if(t){if(lh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,_n=null,Pn=null;function Wa(e){if(e=Zr(e)){if(typeof Il!="function")throw Error(S(280));var t=e.stateNode;t&&(t=yi(t),Il(e.stateNode,e.type,t))}}function Ic(e){_n?Pn?Pn.push(e):Pn=[e]:_n=e}function bc(){if(_n){var e=_n,t=Pn;if(Pn=_n=null,Wa(e),t)for(e=0;e<t.length;e++)Wa(t[e])}}function Ac(e,t){return e(t)}function Rc(){}var Fi=!1;function Oc(e,t,n){if(Fi)return e(t,n);Fi=!0;try{return Ac(e,t,n)}finally{Fi=!1,(_n!==null||Pn!==null)&&(Rc(),bc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var bl=!1;if(yt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{bl=!1}function sh(e,t,n,r,o,i,l,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var vr=!1,Oo=null,Fo=!1,Al=null,ah={onError:function(e){vr=!0,Oo=e}};function uh(e,t,n,r,o,i,l,s,a){vr=!1,Oo=null,sh.apply(ah,arguments)}function ch(e,t,n,r,o,i,l,s,a){if(uh.apply(this,arguments),vr){if(vr){var d=Oo;vr=!1,Oo=null}else throw Error(S(198));Fo||(Fo=!0,Al=d)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ua(e){if(fn(e)!==e)throw Error(S(188))}function dh(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ua(o),e;if(i===r)return Ua(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Bc(e){return e=dh(e),e!==null?Wc(e):null}function Wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wc(e);if(t!==null)return t;e=e.sibling}return null}var Uc=Ae.unstable_scheduleCallback,Ha=Ae.unstable_cancelCallback,fh=Ae.unstable_shouldYield,ph=Ae.unstable_requestPaint,ne=Ae.unstable_now,hh=Ae.unstable_getCurrentPriorityLevel,Is=Ae.unstable_ImmediatePriority,Hc=Ae.unstable_UserBlockingPriority,Bo=Ae.unstable_NormalPriority,gh=Ae.unstable_LowPriority,Vc=Ae.unstable_IdlePriority,pi=null,at=null;function mh(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:xh,yh=Math.log,vh=Math.LN2;function xh(e){return e>>>=0,e===0?32:31-(yh(e)/vh|0)|0}var io=64,lo=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=fr(s):(i&=l,i!==0&&(r=fr(i)))}else l=n&~o,l!==0?r=fr(l):i!==0&&(r=fr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function wh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-et(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=wh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qc(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Bi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function $h(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-et(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Gc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yc,As,Kc,Xc,Zc,Ol=!1,so=[],Lt=null,Mt=null,Dt=null,Nr=new Map,Lr=new Map,zt=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function Jn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&As(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ch(e,t,n,r,o){switch(t){case"focusin":return Lt=Jn(Lt,e,t,n,r,o),!0;case"dragenter":return Mt=Jn(Mt,e,t,n,r,o),!0;case"mouseover":return Dt=Jn(Dt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Nr.set(i,Jn(Nr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Lr.set(i,Jn(Lr.get(i)||null,e,t,n,r,o)),!0}return!1}function Jc(e){var t=Zt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fc(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Kc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dl=r,n.target.dispatchEvent(r),Dl=null}else return t=Zr(n),t!==null&&As(t),e.blockedOn=n,!1;t.shift()}return!0}function Qa(e,t,n){So(e)&&n.delete(t)}function jh(){Ol=!1,Lt!==null&&So(Lt)&&(Lt=null),Mt!==null&&So(Mt)&&(Mt=null),Dt!==null&&So(Dt)&&(Dt=null),Nr.forEach(Qa),Lr.forEach(Qa)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ol||(Ol=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,jh)))}function Mr(e){function t(o){return qn(o,e)}if(0<so.length){qn(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&qn(Lt,e),Mt!==null&&qn(Mt,e),Dt!==null&&qn(Dt,e),Nr.forEach(t),Lr.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Jc(n),n.blockedOn===null&&zt.shift()}var Nn=kt.ReactCurrentBatchConfig,Uo=!0;function Eh(e,t,n,r){var o=H,i=Nn.transition;Nn.transition=null;try{H=1,Rs(e,t,n,r)}finally{H=o,Nn.transition=i}}function zh(e,t,n,r){var o=H,i=Nn.transition;Nn.transition=null;try{H=4,Rs(e,t,n,r)}finally{H=o,Nn.transition=i}}function Rs(e,t,n,r){if(Uo){var o=Fl(e,t,n,r);if(o===null)Zi(e,t,r,Ho,n),Va(e,r);else if(Ch(o,e,t,n,r))r.stopPropagation();else if(Va(e,r),t&4&&-1<Sh.indexOf(e)){for(;o!==null;){var i=Zr(o);if(i!==null&&Yc(i),i=Fl(e,t,n,r),i===null&&Zi(e,t,r,Ho,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zi(e,t,r,null,n)}}var Ho=null;function Fl(e,t,n,r){if(Ho=null,e=Ds(r),e=Zt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hh()){case Is:return 1;case Hc:return 4;case Bo:case gh:return 16;case Vc:return 536870912;default:return 16}default:return 16}}var _t=null,Os=null,Co=null;function ed(){if(Co)return Co;var e,t=Os,n=t.length,r,o="value"in _t?_t.value:_t.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Co=o.slice(e,1<r?1-r:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Ga(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ao:Ga,this.isPropagationStopped=Ga,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=Oe(Qn),Xr=ee({},Qn,{view:0,detail:0}),Th=Oe(Xr),Wi,Ui,er,hi=ee({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Wi=e.screenX-er.screenX,Ui=e.screenY-er.screenY):Ui=Wi=0,er=e),Wi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),Ya=Oe(hi),_h=ee({},hi,{dataTransfer:0}),Ph=Oe(_h),Nh=ee({},Xr,{relatedTarget:0}),Hi=Oe(Nh),Lh=ee({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mh=Oe(Lh),Dh=ee({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ih=Oe(Dh),bh=ee({},Qn,{data:0}),Ka=Oe(bh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Oh[e])?!!t[e]:!1}function Bs(){return Fh}var Bh=ee({},Xr,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wh=Oe(Bh),Uh=ee({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xa=Oe(Uh),Hh=ee({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),Vh=Oe(Hh),Qh=ee({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gh=Oe(Qh),Yh=ee({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kh=Oe(Yh),Xh=[9,13,27,32],Ws=yt&&"CompositionEvent"in window,xr=null;yt&&"documentMode"in document&&(xr=document.documentMode);var Zh=yt&&"TextEvent"in window&&!xr,td=yt&&(!Ws||xr&&8<xr&&11>=xr),Za=" ",Ja=!1;function nd(e,t){switch(e){case"keyup":return Xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Jh(e,t){switch(e){case"compositionend":return rd(t);case"keypress":return t.which!==32?null:(Ja=!0,Za);case"textInput":return e=t.data,e===Za&&Ja?null:e;default:return null}}function qh(e,t){if(vn)return e==="compositionend"||!Ws&&nd(e,t)?(e=ed(),Co=Os=_t=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eg[e.type]:t==="textarea"}function od(e,t,n,r){Ic(r),t=Vo(t,"onChange"),0<t.length&&(n=new Fs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Dr=null;function tg(e){gd(e,0)}function gi(e){var t=kn(e);if(Tc(t))return e}function ng(e,t){if(e==="change")return t}var id=!1;if(yt){var Vi;if(yt){var Qi="oninput"in document;if(!Qi){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),Qi=typeof eu.oninput=="function"}Vi=Qi}else Vi=!1;id=Vi&&(!document.documentMode||9<document.documentMode)}function tu(){wr&&(wr.detachEvent("onpropertychange",ld),Dr=wr=null)}function ld(e){if(e.propertyName==="value"&&gi(Dr)){var t=[];od(t,Dr,e,Ds(e)),Oc(tg,t)}}function rg(e,t,n){e==="focusin"?(tu(),wr=t,Dr=n,wr.attachEvent("onpropertychange",ld)):e==="focusout"&&tu()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(Dr)}function ig(e,t){if(e==="click")return gi(t)}function lg(e,t){if(e==="input"||e==="change")return gi(t)}function sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:sg;function Ir(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$l.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,t){var n=nu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nu(n)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=Ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ro(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ag(e){var t=ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sd(n.ownerDocument.documentElement,n)){if(r!==null&&Us(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ru(n,i);var l=ru(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ug=yt&&"documentMode"in document&&11>=document.documentMode,xn=null,Bl=null,kr=null,Wl=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wl||xn==null||xn!==Ro(r)||(r=xn,"selectionStart"in r&&Us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Ir(kr,r)||(kr=r,r=Vo(Bl,"onSelect"),0<r.length&&(t=new Fs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Gi={},ud={};yt&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function mi(e){if(Gi[e])return Gi[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return Gi[e]=t[n];return e}var cd=mi("animationend"),dd=mi("animationiteration"),fd=mi("animationstart"),pd=mi("transitionend"),hd=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){hd.set(e,t),dn(t,[e])}for(var Yi=0;Yi<iu.length;Yi++){var Ki=iu[Yi],cg=Ki.toLowerCase(),dg=Ki[0].toUpperCase()+Ki.slice(1);Ht(cg,"on"+dg)}Ht(cd,"onAnimationEnd");Ht(dd,"onAnimationIteration");Ht(fd,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(pd,"onTransitionEnd");In("onMouseEnter",["mouseout","mouseover"]);In("onMouseLeave",["mouseout","mouseover"]);In("onPointerEnter",["pointerout","pointerover"]);In("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fg=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ch(r,t,void 0,e),e.currentTarget=null}function gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;lu(o,s,d),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,d=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;lu(o,s,d),i=a}}}if(Fo)throw e=Al,Fo=!1,Al=null,e}function G(e,t){var n=t[Gl];n===void 0&&(n=t[Gl]=new Set);var r=e+"__bubble";n.has(r)||(md(t,e,2,!1),n.add(r))}function Xi(e,t,n){var r=0;t&&(r|=4),md(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[co]){e[co]=!0,Sc.forEach(function(n){n!=="selectionchange"&&(fg.has(n)||Xi(n,!1,e),Xi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Xi("selectionchange",!1,t))}}function md(e,t,n,r){switch(qc(t)){case 1:var o=Eh;break;case 4:o=zh;break;default:o=Rs}n=o.bind(null,t,n,e),o=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Zt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Oc(function(){var d=i,h=Ds(n),g=[];e:{var m=hd.get(e);if(m!==void 0){var v=Fs,y=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":v=Wh;break;case"focusin":y="focus",v=Hi;break;case"focusout":y="blur",v=Hi;break;case"beforeblur":case"afterblur":v=Hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vh;break;case cd:case dd:case fd:v=Mh;break;case pd:v=Gh;break;case"scroll":v=Th;break;case"wheel":v=Kh;break;case"copy":case"cut":case"paste":v=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xa}var x=(t&4)!==0,N=!x&&e==="scroll",f=x?m!==null?m+"Capture":null:m;x=[];for(var c=d,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Pr(c,f),w!=null&&x.push(Ar(c,w,p)))),N)break;c=c.return}0<x.length&&(m=new v(m,y,null,n,h),g.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Dl&&(y=n.relatedTarget||n.fromElement)&&(Zt(y)||y[vt]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=d,y=y?Zt(y):null,y!==null&&(N=fn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=d),v!==y)){if(x=Ya,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xa,w="onPointerLeave",f="onPointerEnter",c="pointer"),N=v==null?m:kn(v),p=y==null?m:kn(y),m=new x(w,c+"leave",v,n,h),m.target=N,m.relatedTarget=p,w=null,Zt(h)===d&&(x=new x(f,c+"enter",y,n,h),x.target=p,x.relatedTarget=N,w=x),N=w,v&&y)t:{for(x=v,f=y,c=0,p=x;p;p=hn(p))c++;for(p=0,w=f;w;w=hn(w))p++;for(;0<c-p;)x=hn(x),c--;for(;0<p-c;)f=hn(f),p--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=hn(x),f=hn(f)}x=null}else x=null;v!==null&&su(g,m,v,x,!1),y!==null&&N!==null&&su(g,N,y,x,!0)}}e:{if(m=d?kn(d):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var C=ng;else if(qa(m))if(id)C=lg;else{C=og;var z=rg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=ig);if(C&&(C=C(e,d))){od(g,C,n,h);break e}z&&z(e,m,d),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&_l(m,"number",m.value)}switch(z=d?kn(d):window,e){case"focusin":(qa(z)||z.contentEditable==="true")&&(xn=z,Bl=d,kr=null);break;case"focusout":kr=Bl=xn=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,ou(g,n,h);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":ou(g,n,h)}var $;if(Ws)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else vn?nd(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(td&&n.locale!=="ko"&&(vn||j!=="onCompositionStart"?j==="onCompositionEnd"&&vn&&($=ed()):(_t=h,Os="value"in _t?_t.value:_t.textContent,vn=!0)),z=Vo(d,j),0<z.length&&(j=new Ka(j,e,null,n,h),g.push({event:j,listeners:z}),$?j.data=$:($=rd(n),$!==null&&(j.data=$)))),($=Zh?Jh(e,n):qh(e,n))&&(d=Vo(d,"onBeforeInput"),0<d.length&&(h=new Ka("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=$))}gd(g,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Pr(e,n),i!=null&&r.unshift(Ar(e,i,o)),i=Pr(e,t),i!=null&&r.push(Ar(e,i,o))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,o?(a=Pr(n,i),a!=null&&l.unshift(Ar(n,a,s))):o||(a=Pr(n,i),a!=null&&l.push(Ar(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var pg=/\r\n?/g,hg=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(hg,"")}function fo(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(S(425))}function Qo(){}var Ul=null,Hl=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,mg=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(yg)}:Ql;function yg(e){setTimeout(function(){throw e})}function Ji(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Mr(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),st="__reactFiber$"+Gn,Rr="__reactProps$"+Gn,vt="__reactContainer$"+Gn,Gl="__reactEvents$"+Gn,vg="__reactListeners$"+Gn,xg="__reactHandles$"+Gn;function Zt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cu(e);e!==null;){if(n=e[st])return n;e=cu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[st]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function yi(e){return e[Rr]||null}var Yl=[],$n=-1;function Vt(e){return{current:e}}function K(e){0>$n||(e.current=Yl[$n],Yl[$n]=null,$n--)}function Q(e,t){$n++,Yl[$n]=e.current,e.current=t}var Wt={},Se=Vt(Wt),Ne=Vt(!1),rn=Wt;function bn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Le(e){return e=e.childContextTypes,e!=null}function Go(){K(Ne),K(Se)}function du(e,t,n){if(Se.current!==Wt)throw Error(S(168));Q(Se,t),Q(Ne,n)}function yd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,rh(e)||"Unknown",o));return ee({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,rn=Se.current,Q(Se,e),Q(Ne,Ne.current),!0}function fu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=yd(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,K(Ne),K(Se),Q(Se,e)):K(Ne),Q(Ne,n)}var pt=null,vi=!1,qi=!1;function vd(e){pt===null?pt=[e]:pt.push(e)}function wg(e){vi=!0,vd(e)}function Qt(){if(!qi&&pt!==null){qi=!0;var e=0,t=H;try{var n=pt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,vi=!1}catch(o){throw pt!==null&&(pt=pt.slice(e+1)),Uc(Is,Qt),o}finally{H=t,qi=!1}}return null}var Sn=[],Cn=0,Ko=null,Xo=0,We=[],Ue=0,on=null,ht=1,gt="";function Yt(e,t){Sn[Cn++]=Xo,Sn[Cn++]=Ko,Ko=e,Xo=t}function xd(e,t,n){We[Ue++]=ht,We[Ue++]=gt,We[Ue++]=on,on=e;var r=ht;e=gt;var o=32-et(r)-1;r&=~(1<<o),n+=1;var i=32-et(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ht=1<<32-et(t)+o|n<<o|r,gt=i+e}else ht=1<<i|n<<o|r,gt=e}function Hs(e){e.return!==null&&(Yt(e,1),xd(e,1,0))}function Vs(e){for(;e===Ko;)Ko=Sn[--Cn],Sn[Cn]=null,Xo=Sn[--Cn],Sn[Cn]=null;for(;e===on;)on=We[--Ue],We[Ue]=null,gt=We[--Ue],We[Ue]=null,ht=We[--Ue],We[Ue]=null}var be=null,Ie=null,X=!1,qe=null;function wd(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Ie=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:ht,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Ie=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xl(e){if(X){var t=Ie;if(t){var n=t;if(!pu(e,t)){if(Kl(e))throw Error(S(418));t=It(n.nextSibling);var r=be;t&&pu(e,t)?wd(r,n):(e.flags=e.flags&-4097|2,X=!1,be=e)}}else{if(Kl(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,be=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function po(e){if(e!==be)return!1;if(!X)return hu(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=Ie)){if(Kl(e))throw kd(),Error(S(418));for(;t;)wd(e,t),t=It(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=be?It(e.stateNode.nextSibling):null;return!0}function kd(){for(var e=Ie;e;)e=It(e.nextSibling)}function An(){Ie=be=null,X=!1}function Qs(e){qe===null?qe=[e]:qe.push(e)}var kg=kt.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gu(e){var t=e._init;return t(e._payload)}function $d(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Ot(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=ll(p,f.mode,w),c.return=f,c):(c=o(c,p),c.return=f,c)}function a(f,c,p,w){var C=p.type;return C===yn?h(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&gu(C)===c.type)?(w=o(c,p.props),w.ref=tr(f,c,p),w.return=f,w):(w=Lo(p.type,p.key,p.props,null,f.mode,w),w.ref=tr(f,c,p),w.return=f,w)}function d(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=sl(p,f.mode,w),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function h(f,c,p,w,C){return c===null||c.tag!==7?(c=tn(p,f.mode,w,C),c.return=f,c):(c=o(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case no:return p=Lo(c.type,c.key,c.props,null,f.mode,p),p.ref=tr(f,null,c),p.return=f,p;case mn:return c=sl(c,f.mode,p),c.return=f,c;case jt:var w=c._init;return g(f,w(c._payload),p)}if(dr(c)||Xn(c))return c=tn(c,f.mode,p,null),c.return=f,c;ho(f,c)}return null}function m(f,c,p,w){var C=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case no:return p.key===C?a(f,c,p,w):null;case mn:return p.key===C?d(f,c,p,w):null;case jt:return C=p._init,m(f,c,C(p._payload),w)}if(dr(p)||Xn(p))return C!==null?null:h(f,c,p,w,null);ho(f,p)}return null}function v(f,c,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case no:return f=f.get(w.key===null?p:w.key)||null,a(c,f,w,C);case mn:return f=f.get(w.key===null?p:w.key)||null,d(c,f,w,C);case jt:var z=w._init;return v(f,c,p,z(w._payload),C)}if(dr(w)||Xn(w))return f=f.get(p)||null,h(c,f,w,C,null);ho(c,w)}return null}function y(f,c,p,w){for(var C=null,z=null,$=c,j=c=0,O=null;$!==null&&j<p.length;j++){$.index>j?(O=$,$=null):O=$.sibling;var E=m(f,$,p[j],w);if(E===null){$===null&&($=O);break}e&&$&&E.alternate===null&&t(f,$),c=i(E,c,j),z===null?C=E:z.sibling=E,z=E,$=O}if(j===p.length)return n(f,$),X&&Yt(f,j),C;if($===null){for(;j<p.length;j++)$=g(f,p[j],w),$!==null&&(c=i($,c,j),z===null?C=$:z.sibling=$,z=$);return X&&Yt(f,j),C}for($=r(f,$);j<p.length;j++)O=v($,f,j,p[j],w),O!==null&&(e&&O.alternate!==null&&$.delete(O.key===null?j:O.key),c=i(O,c,j),z===null?C=O:z.sibling=O,z=O);return e&&$.forEach(function(P){return t(f,P)}),X&&Yt(f,j),C}function x(f,c,p,w){var C=Xn(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var z=C=null,$=c,j=c=0,O=null,E=p.next();$!==null&&!E.done;j++,E=p.next()){$.index>j?(O=$,$=null):O=$.sibling;var P=m(f,$,E.value,w);if(P===null){$===null&&($=O);break}e&&$&&P.alternate===null&&t(f,$),c=i(P,c,j),z===null?C=P:z.sibling=P,z=P,$=O}if(E.done)return n(f,$),X&&Yt(f,j),C;if($===null){for(;!E.done;j++,E=p.next())E=g(f,E.value,w),E!==null&&(c=i(E,c,j),z===null?C=E:z.sibling=E,z=E);return X&&Yt(f,j),C}for($=r(f,$);!E.done;j++,E=p.next())E=v($,f,j,E.value,w),E!==null&&(e&&E.alternate!==null&&$.delete(E.key===null?j:E.key),c=i(E,c,j),z===null?C=E:z.sibling=E,z=E);return e&&$.forEach(function(B){return t(f,B)}),X&&Yt(f,j),C}function N(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===yn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case no:e:{for(var C=p.key,z=c;z!==null;){if(z.key===C){if(C=p.type,C===yn){if(z.tag===7){n(f,z.sibling),c=o(z,p.props.children),c.return=f,f=c;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&gu(C)===z.type){n(f,z.sibling),c=o(z,p.props),c.ref=tr(f,z,p),c.return=f,f=c;break e}n(f,z);break}else t(f,z);z=z.sibling}p.type===yn?(c=tn(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Lo(p.type,p.key,p.props,null,f.mode,w),w.ref=tr(f,c,p),w.return=f,f=w)}return l(f);case mn:e:{for(z=p.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=sl(p,f.mode,w),c.return=f,f=c}return l(f);case jt:return z=p._init,N(f,c,z(p._payload),w)}if(dr(p))return y(f,c,p,w);if(Xn(p))return x(f,c,p,w);ho(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=ll(p,f.mode,w),c.return=f,f=c),l(f)):n(f,c)}return N}var Rn=$d(!0),Sd=$d(!1),Zo=Vt(null),Jo=null,jn=null,Gs=null;function Ys(){Gs=jn=Jo=null}function Ks(e){var t=Zo.current;K(Zo),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Jo=e,Gs=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(Gs!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(Jo===null)throw Error(S(308));jn=e,Jo.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var Jt=null;function Xs(e){Jt===null?Jt=[e]:Jt.push(e)}function Cd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Xs(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Xs(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qo(e,t,n,r){var o=e.updateQueue;Et=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,d=a.next;a.next=null,l===null?i=d:l.next=d,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=a))}if(i!==null){var g=o.baseState;l=0,h=d=a=null,s=i;do{var m=s.lane,v=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(m=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){g=y.call(v,g,m);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(v,g,m):y,m==null)break e;g=ee({},g,m);break e;case 2:Et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=v,a=g):h=h.next=v,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(a=g),o.baseState=a,o.firstBaseUpdate=d,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);sn|=l,e.lanes=l,e.memoizedState=g}}function yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Jr={},ut=Vt(Jr),Or=Vt(Jr),Fr=Vt(Jr);function qt(e){if(e===Jr)throw Error(S(174));return e}function Js(e,t){switch(Q(Fr,t),Q(Or,e),Q(ut,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}K(ut),Q(ut,t)}function On(){K(ut),K(Or),K(Fr)}function Ed(e){qt(Fr.current);var t=qt(ut.current),n=Nl(t,e.type);t!==n&&(Q(Or,e),Q(ut,n))}function qs(e){Or.current===e&&(K(ut),K(Or))}var J=Vt(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function ea(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var zo=kt.ReactCurrentDispatcher,tl=kt.ReactCurrentBatchConfig,ln=0,q=null,se=null,de=null,ti=!1,$r=!1,Br=0,$g=0;function xe(){throw Error(S(321))}function ta(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function na(e,t,n,r,o,i){if(ln=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?Eg:zg,e=n(r,o),$r){i=0;do{if($r=!1,Br=0,25<=i)throw Error(S(301));i+=1,de=se=null,t.updateQueue=null,zo.current=Tg,e=n(r,o)}while($r)}if(zo.current=ni,t=se!==null&&se.next!==null,ln=0,de=se=q=null,ti=!1,t)throw Error(S(300));return e}function ra(){var e=Br!==0;return Br=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?q.memoizedState=de=e:de=de.next=e,de}function Ge(){if(se===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=de===null?q.memoizedState:de.next;if(t!==null)de=t,se=e;else{if(e===null)throw Error(S(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?q.memoizedState=de=e:de=de.next=e}return de}function Wr(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,d=i;do{var h=d.lane;if((ln&h)===h)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=g,l=r):a=a.next=g,q.lanes|=h,sn|=h}d=d.next}while(d!==null&&d!==i);a===null?l=r:a.next=s,rt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,sn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=Ge(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);rt(i,t.memoizedState)||(Pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function zd(){}function Td(e,t){var n=q,r=Ge(),o=t(),i=!rt(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,oa(Nd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Ur(9,Pd.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(S(349));ln&30||_d(n,t,o)}return o}function _d(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pd(e,t,n,r){t.value=n,t.getSnapshot=r,Ld(t)&&Md(e)}function Nd(e,t,n){return n(function(){Ld(t)&&Md(e)})}function Ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function Md(e){var t=xt(e,1);t!==null&&tt(t,e,1,-1)}function vu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=jg.bind(null,q,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dd(){return Ge().memoizedState}function To(e,t,n,r){var o=lt();q.flags|=e,o.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(se!==null){var l=se.memoizedState;if(i=l.destroy,r!==null&&ta(r,l.deps)){o.memoizedState=Ur(t,n,i,r);return}}q.flags|=e,o.memoizedState=Ur(1|t,n,i,r)}function xu(e,t){return To(8390656,8,e,t)}function oa(e,t){return xi(2048,8,e,t)}function Id(e,t){return xi(4,2,e,t)}function bd(e,t){return xi(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,Ad.bind(null,t,e),n)}function ia(){}function Od(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fd(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bd(e,t,n){return ln&21?(rt(n,t)||(n=Qc(),q.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Sg(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{H=n,tl.transition=r}}function Wd(){return Ge().memoizedState}function Cg(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ud(e))Hd(t,n);else if(n=Cd(e,t,n,r),n!==null){var o=je();tt(n,e,r,o),Vd(n,t,r)}}function jg(e,t,n){var r=Rt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ud(e))Hd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,rt(s,l)){var a=t.interleaved;a===null?(o.next=o,Xs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Cd(e,t,o,r),n!==null&&(o=je(),tt(n,e,r,o),Vd(n,t,r))}}function Ud(e){var t=e.alternate;return e===q||t!==null&&t===q}function Hd(e,t){$r=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}var ni={readContext:Qe,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Eg={readContext:Qe,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cg.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:vu,useDebugValue:ia,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=vu(!1),t=e[0];return e=Sg.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=lt();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),fe===null)throw Error(S(349));ln&30||_d(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,xu(Nd.bind(null,r,i,e),[e]),r.flags|=2048,Ur(9,Pd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(X){var n=gt,r=ht;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$g++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zg={readContext:Qe,useCallback:Od,useContext:Qe,useEffect:oa,useImperativeHandle:Rd,useInsertionEffect:Id,useLayoutEffect:bd,useMemo:Fd,useReducer:nl,useRef:Dd,useState:function(){return nl(Wr)},useDebugValue:ia,useDeferredValue:function(e){var t=Ge();return Bd(t,se.memoizedState,e)},useTransition:function(){var e=nl(Wr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:zd,useSyncExternalStore:Td,useId:Wd,unstable_isNewReconciler:!1},Tg={readContext:Qe,useCallback:Od,useContext:Qe,useEffect:oa,useImperativeHandle:Rd,useInsertionEffect:Id,useLayoutEffect:bd,useMemo:Fd,useReducer:rl,useRef:Dd,useState:function(){return rl(Wr)},useDebugValue:ia,useDeferredValue:function(e){var t=Ge();return se===null?t.memoizedState=e:Bd(t,se.memoizedState,e)},useTransition:function(){var e=rl(Wr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:zd,useSyncExternalStore:Td,useId:Wd,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),o=Rt(e),i=mt(r,o);i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(tt(t,e,o,r),Eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),o=Rt(e),i=mt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(tt(t,e,o,r),Eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Rt(e),o=mt(n,r);o.tag=2,t!=null&&(o.callback=t),t=bt(e,o,r),t!==null&&(tt(t,e,r,n),Eo(t,e,r))}};function wu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(o,i):!0}function Qd(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(o=Le(t)?rn:Se.current,r=t.contextTypes,i=(r=r!=null)?bn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function ql(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Zs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Qe(i):(i=Le(t)?rn:Se.current,o.context=bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Jl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&wi.enqueueReplaceState(o,o.state,null),qo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=nh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _g=typeof WeakMap=="function"?WeakMap:Map;function Gd(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oi||(oi=!0,cs=r),es(e,t)},n}function Yd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){es(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){es(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _g;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ug.bind(null,e,t,n),t.then(e,e))}function Su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var Pg=kt.ReactCurrentOwner,Pe=!1;function Ce(e,t,n,r){t.child=e===null?Sd(t,null,n,r):Rn(t,e.child,n,r)}function ju(e,t,n,r,o){n=n.render;var i=t.ref;return Ln(t,o),r=na(e,t,n,r,i,o),n=ra(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(X&&n&&Hs(t),t.flags|=1,Ce(e,t,r,o),t.child)}function Eu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!pa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Kd(e,t,i,r,o)):(e=Lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(l,r)&&e.ref===t.ref)return wt(e,t,o)}return t.flags|=1,e=Ot(i,r),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ir(i,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,wt(e,t,o)}return ts(e,t,n,r,o)}function Xd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(zn,De),De|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(zn,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Q(zn,De),De|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Q(zn,De),De|=r;return Ce(e,t,o,n),t.child}function Zd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ts(e,t,n,r,o){var i=Le(n)?rn:Se.current;return i=bn(t,i),Ln(t,o),n=na(e,t,n,r,i,o),r=ra(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(X&&r&&Hs(t),t.flags|=1,Ce(e,t,n,o),t.child)}function zu(e,t,n,r,o){if(Le(n)){var i=!0;Yo(t)}else i=!1;if(Ln(t,o),t.stateNode===null)_o(e,t),Qd(t,n,r),ql(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Qe(d):(d=Le(n)?rn:Se.current,d=bn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==d)&&ku(t,l,r,d),Et=!1;var m=t.memoizedState;l.state=m,qo(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Ne.current||Et?(typeof h=="function"&&(Jl(t,n,h,r),a=t.memoizedState),(s=Et||wu(t,n,s,r,m,a,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,jd(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Xe(t.type,s),l.props=d,g=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Le(n)?rn:Se.current,a=bn(t,a));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==a)&&ku(t,l,r,a),Et=!1,m=t.memoizedState,l.state=m,qo(t,r,l,o);var y=t.memoizedState;s!==g||m!==y||Ne.current||Et?(typeof v=="function"&&(Jl(t,n,v,r),y=t.memoizedState),(d=Et||wu(t,n,d,r,m,y,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ns(e,t,n,r,i,o)}function ns(e,t,n,r,o,i){Zd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&fu(t,n,!1),wt(e,t,i);r=t.stateNode,Pg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rn(t,e.child,null,i),t.child=Rn(t,null,s,i)):Ce(e,t,s,i),t.memoizedState=r.state,o&&fu(t,n,!0),t.child}function Jd(e){var t=e.stateNode;t.pendingContext?du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&du(e,t.context,!1),Js(e,t.containerInfo)}function Tu(e,t,n,r,o){return An(),Qs(o),t.flags|=256,Ce(e,t,n,r),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0};function os(e){return{baseLanes:e,cachePool:null,transitions:null}}function qd(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(J,o&1),e===null)return Xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Si(l,r,0,null),e=tn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=os(n),t.memoizedState=rs,e):la(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Ng(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ot(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Ot(s,i):(i=tn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?os(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=rs,r}return i=e.child,e=i.sibling,r=Ot(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function la(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function go(e,t,n,r){return r!==null&&Qs(r),Rn(t,e.child,null,n),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ng(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(S(422))),go(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Si({mode:"visible",children:r.children},o,0,null),i=tn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Rn(t,e.child,null,l),t.child.memoizedState=os(l),t.memoizedState=rs,i);if(!(t.mode&1))return go(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=ol(i,r,void 0),go(e,t,l,r)}if(s=(l&e.childLanes)!==0,Pe||s){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xt(e,o),tt(r,e,o,-1))}return fa(),r=ol(Error(S(421))),go(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ie=It(o.nextSibling),be=t,X=!0,qe=null,e!==null&&(We[Ue++]=ht,We[Ue++]=gt,We[Ue++]=on,ht=e.id,gt=e.overflow,on=t),t=la(t,r.children),t.flags|=4096,t)}function _u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zl(e.return,t,n)}function il(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ef(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_u(e,n,t);else if(e.tag===19)_u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ei(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),il(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ei(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}il(t,!0,n,null,i);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lg(e,t,n){switch(t.tag){case 3:Jd(t),An();break;case 5:Ed(t);break;case 1:Le(t.type)&&Yo(t);break;case 4:Js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(Zo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?qd(e,t,n):(Q(J,J.current&1),e=wt(e,t,n),e!==null?e.sibling:null);Q(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ef(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Xd(e,t,n)}return wt(e,t,n)}var tf,is,nf,rf;tf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};is=function(){};nf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,qt(ut.current);var i=null;switch(n){case"input":o=zl(e,o),r=zl(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=Pl(e,o),r=Pl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Ll(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var a=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&G("scroll",e),i||s===a||(i=[])):(i=i||[]).push(d,a))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};rf=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mg(e,t,n){var r=t.pendingProps;switch(Vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Le(t.type)&&Go(),we(t),null;case 3:return r=t.stateNode,On(),K(Ne),K(Se),ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ps(qe),qe=null))),is(e,t),we(t),null;case 5:qs(t);var o=qt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)nf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return we(t),null}if(e=qt(ut.current),po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[st]=t,r[Rr]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<pr.length;o++)G(pr[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Ra(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Fa(r,i),G("invalid",r)}Ll(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",""+s]):Tr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&G("scroll",r)}switch(n){case"input":ro(r),Oa(r,i,!0);break;case"textarea":ro(r),Ba(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[st]=t,e[Rr]=r,tf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ml(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<pr.length;o++)G(pr[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":Ra(e,r),o=zl(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),G("invalid",e);break;case"textarea":Fa(e,r),o=Pl(e,r),G("invalid",e);break;default:o=r}Ll(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Dc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&_r(e,a):typeof a=="number"&&_r(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&G("scroll",e):a!=null&&Ps(e,i,a,l))}switch(n){case"input":ro(e),Oa(e,r,!1);break;case"textarea":ro(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)rf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=qt(Fr.current),qt(ut.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(i=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return we(t),null;case 13:if(K(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ie!==null&&t.mode&1&&!(t.flags&128))kd(),An(),t.flags|=98560,i=!1;else if(i=po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[st]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else qe!==null&&(ps(qe),qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ue===0&&(ue=3):fa())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return On(),is(e,t),e===null&&br(t.stateNode.containerInfo),we(t),null;case 10:return Ks(t.type._context),we(t),null;case 17:return Le(t.type)&&Go(),we(t),null;case 19:if(K(J),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)nr(i,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ei(e),l!==null){for(t.flags|=128,nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Bn&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ei(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!X)return we(t),null}else 2*ne()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=J.current,Q(J,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return da(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Dg(e,t){switch(Vs(t),t.tag){case 1:return Le(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),K(Ne),K(Se),ea(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qs(t),null;case 13:if(K(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(J),null;case 4:return On(),null;case 10:return Ks(t.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var mo=!1,$e=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,_=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function ls(e,t,n){try{n()}catch(r){te(e,t,r)}}var Pu=!1;function bg(e,t){if(Ul=Uo,e=ad(),Us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var v;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(v=g.firstChild)!==null;)m=g,g=v;for(;;){if(g===e)break t;if(m===n&&++d===o&&(s=l),m===i&&++h===r&&(a=l),(v=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hl={focusedElem:e,selectionRange:n},Uo=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,N=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Xe(t.type,x),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=Pu,Pu=!1,y}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ls(t,n,i)}o=o.next}while(o!==r)}}function ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function of(e){var t=e.alternate;t!==null&&(e.alternate=null,of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Rr],delete t[Gl],delete t[vg],delete t[xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}var me=null,Ze=!1;function St(e,t,n){for(n=n.child;n!==null;)sf(e,t,n),n=n.sibling}function sf(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:$e||En(n,t);case 6:var r=me,o=Ze;me=null,St(e,t,n),me=r,Ze=o,me!==null&&(Ze?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Ze?(e=me,n=n.stateNode,e.nodeType===8?Ji(e.parentNode,n):e.nodeType===1&&Ji(e,n),Mr(e)):Ji(me,n.stateNode));break;case 4:r=me,o=Ze,me=n.stateNode.containerInfo,Ze=!0,St(e,t,n),me=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ls(n,t,l),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!$e&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,St(e,t,n),$e=r):St(e,t,n);break;default:St(e,t,n)}}function Lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ig),t.forEach(function(r){var o=Vg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:me=s.stateNode,Ze=!1;break e;case 3:me=s.stateNode.containerInfo,Ze=!0;break e;case 4:me=s.stateNode.containerInfo,Ze=!0;break e}s=s.return}if(me===null)throw Error(S(160));sf(i,l,o),me=null,Ze=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(d){te(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)af(t,e),t=t.sibling}function af(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),it(e),r&4){try{Sr(3,e,e.return),ki(3,e)}catch(x){te(e,e.return,x)}try{Sr(5,e,e.return)}catch(x){te(e,e.return,x)}}break;case 1:Ke(t,e),it(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(Ke(t,e),it(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var o=e.stateNode;try{_r(o,"")}catch(x){te(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&_c(o,i),Ml(s,l);var d=Ml(s,i);for(l=0;l<a.length;l+=2){var h=a[l],g=a[l+1];h==="style"?Dc(o,g):h==="dangerouslySetInnerHTML"?Lc(o,g):h==="children"?_r(o,g):Ps(o,h,g,d)}switch(s){case"input":Tl(o,i);break;case"textarea":Pc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Tn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?Tn(o,!!i.multiple,i.defaultValue,!0):Tn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Rr]=i}catch(x){te(e,e.return,x)}}break;case 6:if(Ke(t,e),it(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){te(e,e.return,x)}}break;case 3:if(Ke(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(x){te(e,e.return,x)}break;case 4:Ke(t,e),it(e);break;case 13:Ke(t,e),it(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ua=ne())),r&4&&Lu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?($e=(d=$e)||h,Ke(t,e),$e=d):Ke(t,e),it(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(g=_=h;_!==null;){switch(m=_,v=m.child,m.tag){case 0:case 11:case 14:case 15:Sr(4,m,m.return);break;case 1:En(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){te(r,n,x)}}break;case 5:En(m,m.return);break;case 22:if(m.memoizedState!==null){Du(g);continue}}v!==null?(v.return=m,_=v):Du(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{o=g.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Mc("display",l))}catch(x){te(e,e.return,x)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){te(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ke(t,e),it(e),r&4&&Lu(e);break;case 21:break;default:Ke(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_r(o,""),r.flags&=-33);var i=Nu(e);us(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Nu(e);as(e,s,l);break;default:throw Error(S(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ag(e,t,n){_=e,uf(e)}function uf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||mo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||$e;s=mo;var d=$e;if(mo=l,($e=a)&&!d)for(_=o;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?Iu(o):a!==null?(a.return=l,_=a):Iu(o);for(;i!==null;)_=i,uf(i),i=i.sibling;_=o,mo=s,$e=d}Mu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):Mu(e)}}function Mu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&yu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Mr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}$e||t.flags&512&&ss(t)}catch(m){te(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Du(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Iu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ki(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){te(t,o,a)}}var i=t.return;try{ss(t)}catch(a){te(t,i,a)}break;case 5:var l=t.return;try{ss(t)}catch(a){te(t,l,a)}}}catch(a){te(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Rg=Math.ceil,ri=kt.ReactCurrentDispatcher,sa=kt.ReactCurrentOwner,Ve=kt.ReactCurrentBatchConfig,R=0,fe=null,le=null,ye=0,De=0,zn=Vt(0),ue=0,Hr=null,sn=0,$i=0,aa=0,Cr=null,_e=null,ua=0,Bn=1/0,dt=null,oi=!1,cs=null,At=null,yo=!1,Pt=null,ii=0,jr=0,ds=null,Po=-1,No=0;function je(){return R&6?ne():Po!==-1?Po:Po=ne()}function Rt(e){return e.mode&1?R&2&&ye!==0?ye&-ye:kg.transition!==null?(No===0&&(No=Qc()),No):(e=H,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function tt(e,t,n,r){if(50<jr)throw jr=0,ds=null,Error(S(185));Kr(e,n,r),(!(R&2)||e!==fe)&&(e===fe&&(!(R&2)&&($i|=n),ue===4&&Tt(e,ye)),Me(e,r),n===1&&R===0&&!(t.mode&1)&&(Bn=ne()+500,vi&&Qt()))}function Me(e,t){var n=e.callbackNode;kh(e,t);var r=Wo(e,e===fe?ye:0);if(r===0)n!==null&&Ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ha(n),t===1)e.tag===0?wg(bu.bind(null,e)):vd(bu.bind(null,e)),mg(function(){!(R&6)&&Qt()}),n=null;else{switch(Gc(r)){case 1:n=Is;break;case 4:n=Hc;break;case 16:n=Bo;break;case 536870912:n=Vc;break;default:n=Bo}n=yf(n,cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cf(e,t){if(Po=-1,No=0,R&6)throw Error(S(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Wo(e,e===fe?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=li(e,r);else{t=r;var o=R;R|=2;var i=ff();(fe!==e||ye!==t)&&(dt=null,Bn=ne()+500,en(e,t));do try{Bg();break}catch(s){df(e,s)}while(!0);Ys(),ri.current=i,R=o,le!==null?t=0:(fe=null,ye=0,t=ue)}if(t!==0){if(t===2&&(o=Rl(e),o!==0&&(r=o,t=fs(e,o))),t===1)throw n=Hr,en(e,0),Tt(e,r),Me(e,ne()),n;if(t===6)Tt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Og(o)&&(t=li(e,r),t===2&&(i=Rl(e),i!==0&&(r=i,t=fs(e,i))),t===1))throw n=Hr,en(e,0),Tt(e,r),Me(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Kt(e,_e,dt);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=ua+500-ne(),10<t)){if(Wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ql(Kt.bind(null,e,_e,dt),t);break}Kt(e,_e,dt);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-et(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rg(r/1960))-r,10<r){e.timeoutHandle=Ql(Kt.bind(null,e,_e,dt),r);break}Kt(e,_e,dt);break;case 5:Kt(e,_e,dt);break;default:throw Error(S(329))}}}return Me(e,ne()),e.callbackNode===n?cf.bind(null,e):null}function fs(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=li(e,t),e!==2&&(t=_e,_e=n,t!==null&&ps(t)),e}function ps(e){_e===null?_e=e:_e.push.apply(_e,e)}function Og(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!rt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~aa,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function bu(e){if(R&6)throw Error(S(327));Mn();var t=Wo(e,0);if(!(t&1))return Me(e,ne()),null;var n=li(e,t);if(e.tag!==0&&n===2){var r=Rl(e);r!==0&&(t=r,n=fs(e,r))}if(n===1)throw n=Hr,en(e,0),Tt(e,t),Me(e,ne()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,_e,dt),Me(e,ne()),null}function ca(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(Bn=ne()+500,vi&&Qt())}}function an(e){Pt!==null&&Pt.tag===0&&!(R&6)&&Mn();var t=R;R|=1;var n=Ve.transition,r=H;try{if(Ve.transition=null,H=1,e)return e()}finally{H=r,Ve.transition=n,R=t,!(R&6)&&Qt()}}function da(){De=zn.current,K(zn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gg(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:On(),K(Ne),K(Se),ea();break;case 5:qs(r);break;case 4:On();break;case 13:K(J);break;case 19:K(J);break;case 10:Ks(r.type._context);break;case 22:case 23:da()}n=n.return}if(fe=e,le=e=Ot(e.current,null),ye=De=t,ue=0,Hr=null,aa=$i=sn=0,_e=Cr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Jt=null}return e}function df(e,t){do{var n=le;try{if(Ys(),zo.current=ni,ti){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ti=!1}if(ln=0,de=se=q=null,$r=!1,Br=0,sa.current=null,n===null||n.return===null){ue=1,Hr=t,le=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ye,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Su(l);if(v!==null){v.flags&=-257,Cu(v,l,s,i,t),v.mode&1&&$u(i,d,t),t=v,a=d;var y=t.updateQueue;if(y===null){var x=new Set;x.add(a),t.updateQueue=x}else y.add(a);break e}else{if(!(t&1)){$u(i,d,t),fa();break e}a=Error(S(426))}}else if(X&&s.mode&1){var N=Su(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Cu(N,l,s,i,t),Qs(Fn(a,s));break e}}i=a=Fn(a,s),ue!==4&&(ue=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Gd(i,a,t);mu(i,f);break e;case 1:s=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(At===null||!At.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Yd(i,s,t);mu(i,w);break e}}i=i.return}while(i!==null)}hf(n)}catch(C){t=C,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function ff(){var e=ri.current;return ri.current=ni,e===null?ni:e}function fa(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(sn&268435455)&&!($i&268435455)||Tt(fe,ye)}function li(e,t){var n=R;R|=2;var r=ff();(fe!==e||ye!==t)&&(dt=null,en(e,t));do try{Fg();break}catch(o){df(e,o)}while(!0);if(Ys(),R=n,ri.current=r,le!==null)throw Error(S(261));return fe=null,ye=0,ue}function Fg(){for(;le!==null;)pf(le)}function Bg(){for(;le!==null&&!fh();)pf(le)}function pf(e){var t=mf(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?hf(e):le=t,sa.current=null}function hf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dg(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}else if(n=Mg(n,t,De),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function Kt(e,t,n){var r=H,o=Ve.transition;try{Ve.transition=null,H=1,Wg(e,t,n,r)}finally{Ve.transition=o,H=r}return null}function Wg(e,t,n,r){do Mn();while(Pt!==null);if(R&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($h(e,i),e===fe&&(le=fe=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,yf(Bo,function(){return Mn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var l=H;H=1;var s=R;R|=4,sa.current=null,bg(e,n),af(n,e),ag(Hl),Uo=!!Ul,Hl=Ul=null,e.current=n,Ag(n),ph(),R=s,H=l,Ve.transition=i}else e.current=n;if(yo&&(yo=!1,Pt=e,ii=o),i=e.pendingLanes,i===0&&(At=null),mh(n.stateNode),Me(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(oi)throw oi=!1,e=cs,cs=null,e;return ii&1&&e.tag!==0&&Mn(),i=e.pendingLanes,i&1?e===ds?jr++:(jr=0,ds=e):jr=0,Qt(),null}function Mn(){if(Pt!==null){var e=Gc(ii),t=Ve.transition,n=H;try{if(Ve.transition=null,H=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,ii=0,R&6)throw Error(S(331));var o=R;for(R|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(_=d;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Sr(8,h,i)}var g=h.child;if(g!==null)g.return=h,_=g;else for(;_!==null;){h=_;var m=h.sibling,v=h.return;if(of(h),h===d){_=null;break}if(m!==null){m.return=v,_=m;break}_=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var c=e.current;for(_=c;_!==null;){l=_;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,_=p;else e:for(l=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ki(9,s)}}catch(C){te(s,s.return,C)}if(s===l){_=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,_=w;break e}_=s.return}}if(R=o,Qt(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{H=n,Ve.transition=t}}return!1}function Au(e,t,n){t=Fn(n,t),t=Gd(e,t,1),e=bt(e,t,1),t=je(),e!==null&&(Kr(e,1,t),Me(e,t))}function te(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Fn(n,e),e=Yd(t,e,1),t=bt(t,e,1),e=je(),t!==null&&(Kr(t,1,e),Me(t,e));break}}t=t.return}}function Ug(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>ne()-ua?en(e,0):aa|=n),Me(e,t)}function gf(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=je();e=xt(e,t),e!==null&&(Kr(e,t,n),Me(e,n))}function Hg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function Vg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),gf(e,n)}var mf;mf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Lg(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,X&&t.flags&1048576&&xd(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_o(e,t),e=t.pendingProps;var o=bn(t,Se.current);Ln(t,n),o=na(null,t,r,e,o,n);var i=ra();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(i=!0,Yo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Zs(t),o.updater=wi,t.stateNode=o,o._reactInternals=t,ql(t,r,e,n),t=ns(null,t,r,!0,i,n)):(t.tag=0,X&&i&&Hs(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Gg(r),e=Xe(r,e),o){case 0:t=ts(null,t,r,e,n);break e;case 1:t=zu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Eu(null,t,r,Xe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),ts(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),zu(e,t,r,o,n);case 3:e:{if(Jd(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,jd(e,t),qo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Fn(Error(S(423)),t),t=Tu(e,t,r,n,o);break e}else if(r!==o){o=Fn(Error(S(424)),t),t=Tu(e,t,r,n,o);break e}else for(Ie=It(t.stateNode.containerInfo.firstChild),be=t,X=!0,qe=null,n=Sd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===o){t=wt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Ed(t),e===null&&Xl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Vl(r,o)?l=null:i!==null&&Vl(r,i)&&(t.flags|=32),Zd(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&Xl(t),null;case 13:return qd(e,t,n);case 4:return Js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),ju(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Q(Zo,r._currentValue),r._currentValue=l,i!==null)if(rt(i.value,l)){if(i.children===o.children&&!Ne.current){t=wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=mt(-1,n&-n),a.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?a.next=a:(a.next=h.next,h.next=a),d.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Zl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Zl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ln(t,n),o=Qe(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),Eu(e,t,r,o,n);case 15:return Kd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),_o(e,t),t.tag=1,Le(r)?(e=!0,Yo(t)):e=!1,Ln(t,n),Qd(t,r,o),ql(t,r,o,n),ns(null,t,r,!0,e,n);case 19:return ef(e,t,n);case 22:return Xd(e,t,n)}throw Error(S(156,t.tag))};function yf(e,t){return Uc(e,t)}function Qg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Qg(e,t,n,r)}function pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gg(e){if(typeof e=="function")return pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ls)return 11;if(e===Ms)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")pa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case yn:return tn(n.children,o,i,t);case Ns:l=8,o|=8;break;case Sl:return e=He(12,n,t,o|2),e.elementType=Sl,e.lanes=i,e;case Cl:return e=He(13,n,t,o),e.elementType=Cl,e.lanes=i,e;case jl:return e=He(19,n,t,o),e.elementType=jl,e.lanes=i,e;case Ec:return Si(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cc:l=10;break e;case jc:l=9;break e;case Ls:l=11;break e;case Ms:l=14;break e;case jt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=He(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function tn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Si(e,t,n,r){return e=He(22,e,r,t),e.elementType=Ec,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ha(e,t,n,r,o,i,l,s,a){return e=new Yg(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=He(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zs(i),e}function Kg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vf(e){if(!e)return Wt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Le(n))return yd(e,n,t)}return t}function xf(e,t,n,r,o,i,l,s,a){return e=ha(n,r,!0,e,o,i,l,s,a),e.context=vf(null),n=e.current,r=je(),o=Rt(n),i=mt(r,o),i.callback=t??null,bt(n,i,o),e.current.lanes=o,Kr(e,o,r),Me(e,r),e}function Ci(e,t,n,r){var o=t.current,i=je(),l=Rt(o);return n=vf(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(o,t,l),e!==null&&(tt(e,o,l,i),Eo(e,o,l)),l}function si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ga(e,t){Ru(e,t),(e=e.alternate)&&Ru(e,t)}function Xg(){return null}var wf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}ji.prototype.render=ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ci(e,t,null,null)};ji.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Ci(null,e,null,null)}),t[vt]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Jc(e)}};function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ou(){}function Zg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=si(l);i.call(d)}}var l=xf(t,r,e,0,null,!1,!1,"",Ou);return e._reactRootContainer=l,e[vt]=l.current,br(e.nodeType===8?e.parentNode:e),an(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=si(a);s.call(d)}}var a=ha(e,0,!1,null,null,!1,!1,"",Ou);return e._reactRootContainer=a,e[vt]=a.current,br(e.nodeType===8?e.parentNode:e),an(function(){Ci(t,a,n,r)}),a}function zi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=si(l);s.call(a)}}Ci(t,l,e,o)}else l=Zg(n,t,e,o,r);return si(l)}Yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(bs(t,n|1),Me(t,ne()),!(R&6)&&(Bn=ne()+500,Qt()))}break;case 13:an(function(){var r=xt(e,1);if(r!==null){var o=je();tt(r,e,1,o)}}),ga(e,1)}};As=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=je();tt(t,e,134217728,n)}ga(e,134217728)}};Kc=function(e){if(e.tag===13){var t=Rt(e),n=xt(e,t);if(n!==null){var r=je();tt(n,e,t,r)}ga(e,t)}};Xc=function(){return H};Zc=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Il=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=yi(r);if(!o)throw Error(S(90));Tc(r),Tl(r,o)}}}break;case"textarea":Pc(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Ac=ca;Rc=an;var Jg={usingClientEntryPoint:!1,Events:[Zr,kn,yi,Ic,bc,ca]},rr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qg={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bc(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||Xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{pi=vo.inject(qg),at=vo}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ya(t))throw Error(S(200));return Kg(e,t,null,n)};Re.createRoot=function(e,t){if(!ya(e))throw Error(S(299));var n=!1,r="",o=wf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ha(e,1,!1,null,null,n,!1,r,o),e[vt]=t.current,br(e.nodeType===8?e.parentNode:e),new ma(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Bc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return an(e)};Re.hydrate=function(e,t,n){if(!Ei(t))throw Error(S(200));return zi(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!ya(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=wf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=xf(t,null,e,1,n??null,o,!1,i,l),e[vt]=t.current,br(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ji(t)};Re.render=function(e,t,n){if(!Ei(t))throw Error(S(200));return zi(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Ei(e))throw Error(S(40));return e._reactRootContainer?(an(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Re.unstable_batchedUpdates=ca;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ei(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return zi(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),wc.exports=Re;var em=wc.exports,Fu=em;kl.createRoot=Fu.createRoot,kl.hydrateRoot=Fu.hydrateRoot;var Y="-ms-",Er="-moz-",F="-webkit-",$f="comm",Ti="rule",va="decl",tm="@import",nm="@namespace",Sf="@keyframes",rm="@layer",Cf=Math.abs,xa=String.fromCharCode,hs=Object.assign;function om(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function jf(e){return e.trim()}function ft(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function Mo(e,t,n){return e.indexOf(t,n)}function ae(e,t){return e.charCodeAt(t)|0}function un(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Ef(e){return e.length}function hr(e,t){return t.push(e),e}function im(e,t){return e.map(t).join("")}function Bu(e,t){return e.filter(function(n){return!ft(n,t)})}var _i=1,Wn=1,zf=0,Ye=0,ie=0,Yn="";function Pi(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:_i,column:Wn,length:l,return:"",siblings:s}}function Ct(e,t){return hs(Pi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gn(e){for(;e.root;)e=Ct(e.root,{children:[e]});hr(e,e.siblings)}function lm(){return ie}function sm(){return ie=Ye>0?ae(Yn,--Ye):0,Wn--,ie===10&&(Wn=1,_i--),ie}function nt(){return ie=Ye<zf?ae(Yn,Ye++):0,Wn++,ie===10&&(Wn=1,_i++),ie}function Nt(){return ae(Yn,Ye)}function Do(){return Ye}function Ni(e,t){return un(Yn,e,t)}function Vr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function am(e){return _i=Wn=1,zf=Je(Yn=e),Ye=0,[]}function um(e){return Yn="",e}function al(e){return jf(Ni(Ye-1,gs(e===91?e+2:e===40?e+1:e)))}function cm(e){for(;(ie=Nt())&&ie<33;)nt();return Vr(e)>2||Vr(ie)>3?"":" "}function dm(e,t){for(;--t&&nt()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Ni(e,Do()+(t<6&&Nt()==32&&nt()==32))}function gs(e){for(;nt();)switch(ie){case e:return Ye;case 34:case 39:e!==34&&e!==39&&gs(ie);break;case 40:e===41&&gs(e);break;case 92:nt();break}return Ye}function fm(e,t){for(;nt()&&e+ie!==57;)if(e+ie===84&&Nt()===47)break;return"/*"+Ni(t,Ye-1)+"*"+xa(e===47?e:nt())}function pm(e){for(;!Vr(Nt());)nt();return Ni(e,Ye)}function hm(e){return um(Io("",null,null,null,[""],e=am(e),0,[0],e))}function Io(e,t,n,r,o,i,l,s,a){for(var d=0,h=0,g=l,m=0,v=0,y=0,x=1,N=1,f=1,c=0,p="",w=o,C=i,z=r,$=p;N;)switch(y=c,c=nt()){case 40:if(y!=108&&ae($,g-1)==58){Mo($+=I(al(c),"&","&\f"),"&\f",Cf(d?s[d-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:$+=al(c);break;case 9:case 10:case 13:case 32:$+=cm(y);break;case 92:$+=dm(Do()-1,7);continue;case 47:switch(Nt()){case 42:case 47:hr(gm(fm(nt(),Do()),t,n,a),a),(Vr(y||1)==5||Vr(Nt()||1)==5)&&Je($)&&un($,-1,void 0)!==" "&&($+=" ");break;default:$+="/"}break;case 123*x:s[d++]=Je($)*f;case 125*x:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+h:f==-1&&($=I($,/\f/g,"")),v>0&&(Je($)-g||x===0&&y===47)&&hr(v>32?Uu($+";",r,n,g-1,a):Uu(I($," ","")+";",r,n,g-2,a),a);break;case 59:$+=";";default:if(hr(z=Wu($,t,n,d,h,o,s,p,w=[],C=[],g,i),i),c===123)if(h===0)Io($,t,z,z,w,i,g,s,C);else{switch(m){case 99:if(ae($,3)===110)break;case 108:if(ae($,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Io(e,z,z,r&&hr(Wu(e,z,z,0,0,o,s,p,o,w=[],g,C),C),o,C,g,s,r?w:C):Io($,z,z,z,[""],C,0,s,C)}}d=h=v=0,x=f=1,p=$="",g=l;break;case 58:g=1+Je($),v=y;default:if(x<1){if(c==123)--x;else if(c==125&&x++==0&&sm()==125)continue}switch($+=xa(c),c*x){case 38:f=h>0?1:($+="\f",-1);break;case 44:s[d++]=(Je($)-1)*f,f=1;break;case 64:Nt()===45&&($+=al(nt())),m=Nt(),h=g=Je(p=$+=pm(Do())),c++;break;case 45:y===45&&Je($)==2&&(x=0)}}return i}function Wu(e,t,n,r,o,i,l,s,a,d,h,g){for(var m=o-1,v=o===0?i:[""],y=Ef(v),x=0,N=0,f=0;x<r;++x)for(var c=0,p=un(e,m+1,m=Cf(N=l[x])),w=e;c<y;++c)(w=jf(N>0?v[c]+" "+p:I(p,/&\f/g,v[c])))&&(a[f++]=w);return Pi(e,t,n,o===0?Ti:s,a,d,h,g)}function gm(e,t,n,r){return Pi(e,t,n,$f,xa(lm()),un(e,2,-2),0,r)}function Uu(e,t,n,r,o){return Pi(e,t,n,va,un(e,0,r),un(e,r+1,-1),r,o)}function Tf(e,t,n){switch(om(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return F+e+e;case 4855:return F+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Er+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Er+e+Y+e+e;case 5936:switch(ae(e,t+11)){case 114:return F+e+Y+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+Y+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+Y+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+Y+e+e;case 6165:return F+e+Y+"flex-"+e+e;case 5187:return F+e+I(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return F+e+Y+"flex-item-"+I(e,/flex-|-self/g,"")+(ft(e,/flex-|baseline/)?"":Y+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return F+e+Y+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+Y+I(e,"shrink","negative")+e;case 5292:return F+e+Y+I(e,"basis","preferred-size")+e;case 6060:return F+"box-"+I(e,"-grow","")+F+e+Y+I(e,"grow","positive")+e;case 4554:return F+I(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+Y+"flex-pack:$3"),/space-between/,"justify")+F+e+e;case 4200:if(!ft(e,/flex-|baseline/))return Y+"grid-column-align"+un(e,t)+e;break;case 2592:case 3360:return Y+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ft(r.props,/grid-\w+-end/)})?~Mo(e+(n=n[t].value),"span",0)?e:Y+I(e,"-start","")+e+Y+"grid-row-span:"+(~Mo(n,"span",0)?ft(n,/\d+/):+ft(n,/\d+/)-+ft(e,/\d+/))+";":Y+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ft(r.props,/grid-\w+-start/)})?e:Y+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Er+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mo(e,"stretch",0)?Tf(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,d){return Y+o+":"+i+d+(l?Y+o+"-span:"+(s?a:+a-+i)+d:"")+e});case 4949:if(ae(e,t+6)===121)return I(e,":",":"+F)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ae(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+Y+"$2box$3")+e;case 100:return I(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function ai(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function mm(e,t,n,r){switch(e.type){case rm:if(e.children.length)break;case tm:case nm:case va:return e.return=e.return||e.value;case $f:return"";case Sf:return e.return=e.value+"{"+ai(e.children,r)+"}";case Ti:if(!Je(e.value=e.props.join(",")))return""}return Je(n=ai(e.children,r))?e.return=e.value+"{"+n+"}":""}function ym(e){var t=Ef(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function vm(e){return function(t){t.root||(t=t.return)&&e(t)}}function xm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case va:e.return=Tf(e.value,e.length,n);return;case Sf:return ai([Ct(e,{value:I(e.value,"@","@"+F)})],r);case Ti:if(e.length)return im(n=e.props,function(o){switch(ft(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gn(Ct(e,{props:[I(o,/:(read-\w+)/,":"+Er+"$1")]})),gn(Ct(e,{props:[o]})),hs(e,{props:Bu(n,r)});break;case"::placeholder":gn(Ct(e,{props:[I(o,/:(plac\w+)/,":"+F+"input-$1")]})),gn(Ct(e,{props:[I(o,/:(plac\w+)/,":"+Er+"$1")]})),gn(Ct(e,{props:[I(o,/:(plac\w+)/,Y+"input-$1")]})),gn(Ct(e,{props:[o]})),hs(e,{props:Bu(n,r)});break}return""})}}var Dn={},ul,cl;const Un=typeof process<"u"&&Dn!==void 0&&(Dn.REACT_APP_SC_ATTR||Dn.SC_ATTR)||"data-styled",_f="active",Pf="data-styled-version",Li="6.5.3",wa=`/*!sc*/
`,zr=typeof window<"u"&&typeof document<"u";function Hu(e){if(typeof process<"u"&&Dn!==void 0){const t=Dn[e];if(t!==void 0&&t!=="")return t!=="false"}}const wm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(cl=(ul=Hu("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&ul!==void 0?ul:Hu("SC_DISABLE_SPEEDY"))!==null&&cl!==void 0?cl:typeof process<"u"&&Dn!==void 0&&!1),Nf="sc-keyframes-",km={};function cn(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let bo=new Map,ui=new Map,Ao=1;const gr=e=>{if(bo.has(e))return bo.get(e);for(;ui.has(Ao);)Ao++;const t=Ao++;return bo.set(e,t),ui.set(t,e),t},$m=e=>ui.get(e),Sm=(e,t)=>{Ao=t+1,bo.set(e,t),ui.set(t,e)},ka=Object.freeze([]),Hn=Object.freeze({});function Lf(e,t,n=Hn){return e.theme!==n.theme&&e.theme||t||n.theme}const Cm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jm=/(^-|-$)/g;function Mf(e){return e.replace(Cm,"-").replace(jm,"")}const Em=/(a)(d)/gi,Vu=e=>String.fromCharCode(e+(e>25?39:97));function $a(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Vu(t%52)+n;return(Vu(t%52)+n).replace(Em,"$1-$2")}const ms=5381,nn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Df=e=>nn(ms,e);function Sa(e){return $a(Df(e)>>>0)}function zm(e){return e.displayName||e.name||"Component"}function ys(e){return typeof e=="string"&&!0}function Tm(e){return ys(e)?`styled.${e}`:`Styled(${zm(e)})`}const If=Symbol.for("react.memo"),_m=Symbol.for("react.forward_ref"),Pm={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Nm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lm={[_m]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[If]:bf};function Qu(e){return("type"in(t=e)&&t.type.$$typeof)===If?bf:"$$typeof"in e?Lm[e.$$typeof]:Pm;var t}const Mm=Object.defineProperty,Dm=Object.getOwnPropertyNames,Im=Object.getOwnPropertySymbols,bm=Object.getOwnPropertyDescriptor,Am=Object.getPrototypeOf,Rm=Object.prototype;function Af(e,t,n){if(typeof t!="string"){const r=Am(t);r&&r!==Rm&&Af(e,r,n);const o=Dm(t).concat(Im(t)),i=Qu(e),l=Qu(t);for(let s=0;s<o.length;++s){const a=o[s];if(!(a in Nm||n&&n[a]||l&&a in l||i&&a in i)){const d=bm(t,a);try{Mm(e,a,d)}catch{}}}}return e}function Kn(e){return typeof e=="function"}const Om=Symbol.for("react.forward_ref");function Ca(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Om&&"styledComponentId"in e}function mr(e,t){return e&&t?e+" "+t:e||t||""}function ci(e,t){return e.join("")}function Qr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function vs(e,t,n=!1){if(!n&&!Qr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=vs(e[r],t[r]);else if(Qr(t))for(const r in t)e[r]=vs(e[r],t[r]);return e}function ja(e,t){Object.defineProperty(e,"toString",{value:t})}const Fm=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let l=i;for(;e>=l;)if(l<<=1,l<0)throw cn(16,`${e}`);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(let s=i;s<l;s++)this.groupSizes[s]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+wa;return t}},Bm=`style[${Un}][${Pf}="${Li}"]`,Wm=new RegExp(`^${Un}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Gu=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,xs=e=>{if(!e)return document;if(Gu(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Gu(t))return t}return document},Um=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,l=r.length;i<l;i++)(o=r[i])&&e.registerName(t,o)},Hm=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(wa),o=[];for(let i=0,l=r.length;i<l;i++){const s=r[i].trim();if(!s)continue;const a=s.match(Wm);if(a){const d=0|parseInt(a[1],10),h=a[2];d!==0&&(Sm(h,d),Um(e,h,a[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},dl=e=>{const t=xs(e.options.target).querySelectorAll(Bm);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(Un)!==_f&&(Hm(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let or=!1;function Vm(){if(or!==!1)return or;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return or=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return or=t.getAttribute("content")||void 0}return or=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Rf=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(a=>{const d=Array.from(a.querySelectorAll(`style[${Un}]`));return d[d.length-1]})(r),l=i!==void 0?i.nextSibling:null;o.setAttribute(Un,_f),o.setAttribute(Pf,Li);const s=t||Vm();return s&&o.setAttribute("nonce",s),r.insertBefore(o,l),o},Qm=class{constructor(e,t){this.element=Rf(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,l=o.length;i<l;i++){const s=o[i];if(s.ownerNode===n)return s}throw cn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Gm=class{constructor(e,t){this.element=Rf(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Yu=zr;const Ym={isServer:!zr,useCSSOMInjection:!wm};class qr{static registerId(t){return gr(t)}constructor(t=Hn,n={},r){this.options=Object.assign(Object.assign({},Ym),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&zr&&Yu&&(Yu=!1,dl(this)),ja(this,()=>(o=>{const i=o.getTag(),{length:l}=i;let s="";for(let a=0;a<l;a++){const d=$m(a);if(d===void 0)continue;const h=o.names.get(d);if(h===void 0||!h.size)continue;const g=i.getGroup(a);if(g.length===0)continue;const m=Un+".g"+a+'[id="'+d+'"]';let v="";for(const y of h)y.length>0&&(v+=y+",");s+=g+m+'{content:"'+v+'"}'+wa}return s})(this))}rehydrate(){!this.server&&zr&&dl(this)}reconstructWithOptions(t,n=!0){const r=new qr(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&zr&&t.target!==this.options.target&&xs(this.options.target)!==xs(t.target)&&dl(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new Qm(r,o):new Gm(r,o))(this.options),new Fm(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){gr(t),t.startsWith(Nf)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(gr(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(gr(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const Of=new WeakSet,Km={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xm(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Km||e.startsWith("--")?String(t).trim():t+"px"}const Xt=47;function Ku(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const Ff=Symbol.for("sc-keyframes");function Zm(e){return typeof e=="object"&&e!==null&&Ff in e}function Bf(e){return Kn(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Wf=e=>e==null||e===!1||e==="",Jm=Symbol.for("react.client.reference");function Xu(e){return e.$$typeof===Jm}function Uf(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Wf(r)&&(Array.isArray(r)&&Of.has(r)||Kn(r)?t.push(Ku(n)+":",r,";"):Qr(r)?(t.push(n+" {"),Uf(r,t),t.push("}")):t.push(Ku(n)+": "+Xm(n,r)+";"))}}function Ft(e,t,n,r,o=[]){if(Wf(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Xu(e))return o;if(Bf(e)&&t){const l=e(t);return Ft(l,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let l=0;l<e.length;l++)Ft(e[l],t,n,r,o);return o}return Ca(e)?(o.push(`.${e.styledComponentId}`),o):Zm(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Xu(e)?o:Qr(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Uf(e,o),o):(o.push(e.toString()),o)}const qm=Df(Li);class e0{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=nn(qm,n),this.baseStyle=r,qr.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let l=0;l<this.rules.length;l++){const s=this.rules[l];if(typeof s=="string")i+=s;else if(s)if(Bf(s)){const a=s(t);typeof a=="string"?i+=a:a!=null&&a!==!1&&(i+=ci(Ft(a,t,n,r)))}else i+=ci(Ft(s,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const l=r.hash?r.hash+i:i;let s=this.dynamicNameCache.get(l);if(!s){if(s=$a(nn(nn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const a=this.dynamicNameCache.keys().next().value;a!==void 0&&this.dynamicNameCache.delete(a)}this.dynamicNameCache.set(l,s)}if(!n.hasNameForId(this.componentId,s)){const a=r(i,"."+s,void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=mr(o,s)}}return o}}const t0=/&/g;function Hf(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function fl(e){const t=e.length;let n="",r=0,o=0,i=0,l=!1,s=!1;for(let a=0;a<t;a++){const d=e.charCodeAt(a);if(i!==0||l||d!==Xt||e.charCodeAt(a+1)!==42)if(l)d===42&&e.charCodeAt(a+1)===Xt&&(l=!1,a++);else if(d!==34&&d!==39||Hf(e,a)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let h=a+1;for(;h<t;){const g=e.charCodeAt(h);if(g===59||g===10)break;h++}h<t&&e.charCodeAt(h)===59&&h++,o=0,a=h-1,r=h;continue}o===0&&(n+=e.substring(r,a+1),r=a+1)}else d===59&&o===0&&(n+=e.substring(r,a+1),r=a+1)}else i===0?i=d:i===d&&(i=0);else l=!0,a++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function Vf(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const l=i.props,s=[];for(let a=0;a<l.length;a++)s[a]=n+l[a];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&Vf(i.children,t)}return e}function n0({options:e=Hn,plugins:t=ka}=Hn){let n,r,o;const i=(m,v,y)=>y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?`.${n}`:m,l=t.slice();l.push(m=>{m.type===Ti&&m.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),m.props[0]=m.props[0].replace(t0,r).replace(o,i))}),e.prefix&&l.push(xm),l.push(mm);let s=[];const a=ym(l.concat(vm(m=>s.push(m)))),d=(m,v="",y="",x="&")=>{n=x,r=v,o=void 0;const N=function(c){const p=c.indexOf("//")!==-1,w=c.indexOf("}")!==-1;if(!p&&!w)return c;if(!p)return fl(c);const C=c.length;let z="",$=0,j=0,O=0,E=0,P=0,B=!1;for(;j<C;){const b=c.charCodeAt(j);if(b!==34&&b!==39||Hf(c,j))if(O===0)if(b===Xt&&j+1<C&&c.charCodeAt(j+1)===42){for(j+=2;j+1<C&&(c.charCodeAt(j)!==42||c.charCodeAt(j+1)!==Xt);)j++;j+=2}else if(b!==40)if(b!==41)if(E>0)j++;else if(b===42&&j+1<C&&c.charCodeAt(j+1)===Xt)z+=c.substring($,j),j+=2,$=j,B=!0;else if(b===Xt&&j+1<C&&c.charCodeAt(j+1)===Xt){for(z+=c.substring($,j);j<C&&c.charCodeAt(j)!==10;)j++;$=j,B=!0}else b===123?P++:b===125&&P--,j++;else E>0&&E--,j++;else E++,j++;else j++;else O===0?O=b:O===b&&(O=0),j++}return B?($<C&&(z+=c.substring($)),P===0?z:fl(z)):P===0?c:fl(c)}(m);let f=hm(y||v?y+" "+v+" { "+N+" }":N);return e.namespace&&(f=Vf(f,e.namespace)),s=[],ai(f,a),s},h=e;let g=ms;for(let m=0;m<t.length;m++)t[m].name||cn(15),g=nn(g,t[m].name);return h!=null&&h.namespace&&(g=nn(g,h.namespace)),h!=null&&h.prefix&&(g=nn(g,"p")),d.hash=g!==ms?g.toString():"",d}const r0=new qr,ws=n0(),Qf=ke.createContext({shouldForwardProp:void 0,styleSheet:r0,stylis:ws,stylisPlugins:void 0});Qf.Consumer;function Gf(){return ke.useContext(Qf)}const Gr=ke.createContext(void 0);Gr.Consumer;function o0(e){const t=ke.useContext(Gr),n=ke.useMemo(()=>function(r,o){if(!r)throw cn(14);if(Kn(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw cn(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?ke.createElement(Gr.Provider,{value:n},e.children):null}const Zu=Object.prototype.hasOwnProperty,pl={};function i0(e,t){const n=typeof e!="string"?"sc":Mf(e);pl[n]=(pl[n]||0)+1;const r=n+"-"+Sa(Li+n+pl[n]);return t?t+"-"+r:r}function l0(e,t,n){const r=Ca(e),o=e,i=!ys(e),{attrs:l=ka,componentId:s=i0(t.displayName,t.parentComponentId),displayName:a=Tm(e)}=t,d=t.displayName&&t.componentId?Mf(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:g}=t;if(r&&o.shouldForwardProp){const x=o.shouldForwardProp;if(t.shouldForwardProp){const N=t.shouldForwardProp;g=(f,c)=>x(f,c)&&N(f,c)}else g=x}const m=new e0(n,d,r?o.componentStyle:void 0);function v(x,N){return function(f,c,p){const{attrs:w,componentStyle:C,defaultProps:z,foldedComponentIds:$,styledComponentId:j,target:O}=f,E=ke.useContext(Gr),P=Gf(),B=f.shouldForwardProp||P.shouldForwardProp,b=Lf(c,E,z)||Hn;let pe,ct;{const L=ke.useRef(null),M=L.current;if(M!==null&&M[1]===b&&M[2]===P.styleSheet&&M[3]===P.stylis&&M[7]===C&&function(V,W,ge){const re=V,ce=W;let Fe=0;for(const Be in ce)if(Zu.call(ce,Be)&&(Fe++,re[Be]!==ce[Be]))return!1;return Fe===ge}(M[0],c,M[4]))pe=M[5],ct=M[6];else{pe=function(W,ge,re){const ce=Object.assign(Object.assign({},ge),{className:void 0,theme:re}),Fe=W.length>1;for(let Be=0;Be<W.length;Be++){const Ii=W[Be],eo=Kn(Ii)?Ii(Fe?Object.assign({},ce):ce):Ii;for(const $t in eo)$t==="className"?ce.className=mr(ce.className,eo[$t]):$t==="style"?ce.style=Object.assign(Object.assign({},ce.style),eo[$t]):$t in ge&&ge[$t]===void 0||(ce[$t]=eo[$t])}return"className"in ge&&typeof ge.className=="string"&&(ce.className=mr(ce.className,ge.className)),ce}(w,c,b),ct=C.generateAndInjectStyles(pe,P.styleSheet,P.stylis);let V=0;for(const W in c)Zu.call(c,W)&&V++;L.current=[c,b,P.styleSheet,P.stylis,V,pe,ct,C]}}const he=pe.as||O,ot=function(L,M,V,W){const ge={};for(const re in L)L[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&L.theme===V||(re==="forwardedAs"?ge.as=L.forwardedAs:W&&!W(re,M)||(ge[re]=L[re]));return ge}(pe,he,b,B);let T=mr($,j);return ct&&(T+=" "+ct),pe.className&&(T+=" "+pe.className),ot[ys(he)&&he.includes("-")?"class":"className"]=T,p&&(ot.ref=p),D.createElement(he,ot)}(y,x,N)}v.displayName=a;let y=ke.forwardRef(v);return y.attrs=h,y.componentStyle=m,y.displayName=a,y.shouldForwardProp=g,y.foldedComponentIds=r?mr(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=d,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get(){return this._foldedDefaultProps},set(x){this._foldedDefaultProps=r?function(N,...f){for(const c of f)vs(N,c,!0);return N}({},o.defaultProps,x):x}}),ja(y,()=>`.${y.styledComponentId}`),i&&Af(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}var s0=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Ju(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const qu=e=>(Of.add(e),e);function U(e,...t){if(Kn(e)||Qr(e))return qu(Ft(Ju(ka,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Ft(n):qu(Ft(Ju(n,t)))}function ks(e,t,n=Hn){if(!t)throw cn(1,t);const r=(o,...i)=>e(t,n,U(o,...i));return r.attrs=o=>ks(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>ks(e,t,Object.assign(Object.assign({},n),o)),r}const Yf=e=>ks(l0,e),k=Yf;s0.forEach(e=>{k[e]=Yf(e)});class a0{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(Kn(i)&&!Ca(i))return!1}return!0}(t),qr.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const s=this.computeRules(t,n,r,o);r.insertRules(i,s.name,s.rules)}return}const l=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&l){const s=l.rules,a=this.instanceRules.get(t).rules;if(s.length===a.length){let d=!0;for(let h=0;h<s.length;h++)if(s[h]!==a[h]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=ci(Ft(this.rules,n,r,o)),l={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,l),l}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function u0(e,...t){const n=U(e,...t),r=`sc-global-${Sa(JSON.stringify(n))}`,o=new a0(n,r),i=s=>{const a=Gf(),d=ke.useContext(Gr);let h;{const g=ke.useRef(null);g.current===null&&(g.current=a.styleSheet.allocateGSInstance(r)),h=g.current}a.styleSheet.server&&l(h,s,a.styleSheet,d,a.stylis);{const g=o.isStatic?[h,a.styleSheet,o]:[h,s,a.styleSheet,d,a.stylis,o],m=ke.useRef(o);ke.useLayoutEffect(()=>{a.styleSheet.server||(m.current!==o&&(a.styleSheet.clearRules(r),m.current=o),l(h,s,a.styleSheet,d,a.stylis))},g),ke.useLayoutEffect(()=>()=>{a.styleSheet.server||o.removeStyles(h,a.styleSheet)},[h,a.styleSheet,o])}return a.styleSheet.server&&o.instanceRules.delete(h),null};function l(s,a,d,h,g){if(o.isStatic)o.renderStyles(s,km,d,g);else{const m=Object.assign(Object.assign({},a),{theme:Lf(a,h,i.defaultProps)});o.renderStyles(s,m,d,g)}}return ke.memo(i)}var Kf;class c0{constructor(t,n){this[Kf]=!0,this.inject=(r,o=ws)=>{const i=this.getName(o);if(!r.hasNameForId(this.id,i)){const l=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,l)}},this.name=t,this.id=Nf+t,this.rules=n,gr(this.id),ja(this,()=>{throw cn(12,String(this.name))})}getName(t=ws){return t.hash?this.name+$a(+t.hash>>>0):this.name}}function Ea(e,...t){const n=ci(U(e,...t)),r=Sa(n);return new c0(r,n)}Kf=Ff;const d0={colors:{primary:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},accent:{purple:"#8b5cf6",pink:"#ec4899",teal:"#14b8a6",cyan:"#06b6d4",amber:"#f59e0b"},status:{success:"#10b981",successLight:"#ecfdf5",successBorder:"#a7f3d0",warning:"#f59e0b",warningLight:"#fffbeb",warningBorder:"#fde68a",danger:"#ef4444",dangerLight:"#fef2f2",dangerBorder:"#fecaca",info:"#3b82f6",infoLight:"#eff6ff",infoBorder:"#bfdbfe"},priority:{low:{bg:"#ecfdf5",text:"#047857",border:"#a7f3d0",dot:"#10b981"},medium:{bg:"#fffbeb",text:"#b45309",border:"#fde68a",dot:"#f59e0b"},high:{bg:"#fef2f2",text:"#b91c1c",border:"#fecaca",dot:"#ef4444"}},category:{Work:{bg:"#eef2ff",text:"#4338ca",border:"#c7d2fe"},Personal:{bg:"#fdf4ff",text:"#86198f",border:"#f5d0fe"},Learning:{bg:"#f0fdf4",text:"#15803d",border:"#bbf7d0"},Health:{bg:"#fff7ed",text:"#c2410c",border:"#ffedd5"},Finance:{bg:"#ecfeff",text:"#0e7490",border:"#cffafe"},General:{bg:"#f8fafc",text:"#334155",border:"#e2e8f0"}},surface:{body:"#f8fafc",card:"#ffffff",sidebar:"#ffffff",header:"#ffffff",modal:"#ffffff",subtle:"#f1f5f9",border:"#e2e8f0",borderLight:"#f1f5f9",borderDark:"#cbd5e1"},text:{primary:"#0f172a",secondary:"#475569",muted:"#64748b",light:"#94a3b8",white:"#ffffff"}},typography:{fontFamily:{heading:"'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",body:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",mono:"'JetBrains Mono', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700,extrabold:800},lineHeight:{tight:1.25,normal:1.5,relaxed:1.75}},spacing:{1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem"},radii:{none:"0",sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem","2xl":"1.25rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",card:"0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.05)",cardHover:"0 10px 25px -5px rgba(79, 70, 229, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)",modal:"0 25px 50px -12px rgba(15, 23, 42, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",primaryGlow:"0 0 20px -3px rgba(79, 70, 229, 0.4)"},transitions:{fast:"all 0.15s ease-in-out",normal:"all 0.25s ease-in-out",slow:"all 0.4s ease-in-out",bounce:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},breakpoints:{mobile:"480px",tablet:"768px",laptop:"1024px",desktop:"1280px",wide:"1536px"},media:{mobile:"@media (max-width: 480px)",tablet:"@media (max-width: 768px)",laptop:"@media (max-width: 1024px)",desktop:"@media (min-width: 1025px)",mobileAbove:"@media (min-width: 481px)",tabletAbove:"@media (min-width: 769px)"},zIndices:{dropdown:1e3,sticky:1020,fixed:1030,modalBackdrop:1040,modal:1050,popover:1060,tooltip:1070}},f0=u0`
  /* Modern CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    background-color: ${({theme:e})=>e.colors.surface.body};
    color: ${({theme:e})=>e.colors.text.primary};
    line-height: ${({theme:e})=>e.typography.lineHeight.normal};
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    color: ${({theme:e})=>e.colors.text.primary};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    line-height: ${({theme:e})=>e.typography.lineHeight.tight};
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  /* Custom Scrollbar for modern polished look */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.surface.subtle};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.surface.borderDark};
    border-radius: ${({theme:e})=>e.radii.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.text.muted};
  }

  /* Focus outline accessibility */
  :focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary[500]};
    outline-offset: 2px;
  }

  /* Screen reader only utility class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`,p0=(e,t)=>{const[n,r]=D.useState(()=>{if(typeof window>"u")return t;try{const i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(i){return console.warn(`[useLocalStorage] Error reading key "${e}" from localStorage:`,i),t}}),o=D.useCallback(i=>{try{r(l=>{const s=i instanceof Function?i(l):i;return typeof window<"u"&&window.localStorage.setItem(e,JSON.stringify(s)),s})}catch(l){console.error(`[useLocalStorage] Error setting key "${e}" into localStorage:`,l)}},[e]);return D.useEffect(()=>{const i=l=>{if(l.key===e&&l.newValue!==null)try{r(JSON.parse(l.newValue))}catch(s){console.warn(`[useLocalStorage] Failed to parse updated storage event for "${e}":`,s)}};return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[e]),[n,o]},h0=(e,t=300)=>{const[n,r]=D.useState(e);return D.useEffect(()=>{const o=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(o)}},[e,t]),n},ec=[{id:"task-1",title:"Architect Context API & Custom Hooks",description:"Implement TaskContext and create reusable hooks (useLocalStorage, useTasks, useDebounce) for modular state management.",category:"Work",priority:"high",completed:!0,dueDate:"2026-10-05",createdAt:"2026-10-01T09:00:00.000Z",updatedAt:"2026-10-05T14:30:00.000Z"},{id:"task-2",title:"Build Styled Components Design System",description:"Construct theme tokens, responsive breakpoints, global styles, and accessible UI component primitives using styled-components.",category:"Work",priority:"high",completed:!0,dueDate:"2026-10-06",createdAt:"2026-10-02T10:15:00.000Z",updatedAt:"2026-10-06T11:00:00.000Z"},{id:"task-3",title:"Conduct Cross-Browser Verification",description:"Run comprehensive compatibility testing across Google Chrome, Microsoft Edge, and Mozilla Firefox with real screenshot captures.",category:"Work",priority:"high",completed:!1,dueDate:"2026-10-08",createdAt:"2026-10-03T11:30:00.000Z",updatedAt:"2026-10-03T11:30:00.000Z"},{id:"task-4",title:"Review React 18 Concurrent Features",description:"Read the latest technical RFCs on useTransition and automatic batching to optimize complex dashboard re-renders.",category:"Learning",priority:"medium",completed:!1,dueDate:"2026-10-10",createdAt:"2026-10-04T08:45:00.000Z",updatedAt:"2026-10-04T08:45:00.000Z"},{id:"task-5",title:"Prepare Monthly Budget & Expense Report",description:"Aggregate software subscription expenses, calculate cloud hosting estimates, and finalize internship development budget.",category:"Finance",priority:"medium",completed:!1,dueDate:"2026-10-15",createdAt:"2026-10-04T14:20:00.000Z",updatedAt:"2026-10-04T14:20:00.000Z"},{id:"task-6",title:"Schedule Ergonomic Workspace Setup",description:"Adjust monitor height, calibrate dual-display brightness, and order an anti-fatigue mat for sit-stand desk.",category:"Health",priority:"low",completed:!0,dueDate:"2026-10-04",createdAt:"2026-10-01T16:00:00.000Z",updatedAt:"2026-10-04T18:00:00.000Z"},{id:"task-7",title:"Organize Tech Bookshelf & Clean Workstation",description:"Sort JavaScript/TypeScript reference manuals and clear peripheral cable clutter.",category:"Personal",priority:"low",completed:!1,dueDate:"2026-10-12",createdAt:"2026-10-05T07:10:00.000Z",updatedAt:"2026-10-05T07:10:00.000Z"}],g0="taskflow-tasks-v1",Te={LOW:"low",MEDIUM:"medium",HIGH:"high"},za=["Work","Personal","Learning","Health","Finance","General"],oe={ALL:"all",ACTIVE:"active",COMPLETED:"completed"},m0=[{value:"created-desc",label:"Newest First"},{value:"created-asc",label:"Oldest First"},{value:"due-asc",label:"Due Date (Earliest)"},{value:"due-desc",label:"Due Date (Latest)"},{value:"priority-desc",label:"Priority (High to Low)"},{value:"priority-asc",label:"Priority (Low to High)"},{value:"title-asc",label:"Title (A-Z)"}],xo={high:3,medium:2,low:1},tc=e=>{if(!e)return"No due date";try{const t=new Date(e);return isNaN(t.getTime())?"Invalid date":new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(t)}catch{return e}},y0=(e,t)=>{if(!e||t)return"none";const n=new Date;n.setHours(0,0,0,0);const r=new Date(e);r.setHours(0,0,0,0);const o=r.getTime()-n.getTime(),i=Math.ceil(o/(1e3*60*60*24));return i<0?"overdue":i===0?"today":"upcoming"},v0=(e,t)=>{const{search:n,status:r,priority:o,category:i,sortBy:l}=t;return e.filter(s=>{if(n&&n.trim()!==""){const a=n.toLowerCase().trim(),d=s.title.toLowerCase().includes(a),h=s.description?s.description.toLowerCase().includes(a):!1;if(!d&&!h)return!1}return!(r==="active"&&s.completed||r==="completed"&&!s.completed||o&&o!=="all"&&s.priority!==o||i&&i!=="all"&&s.category!==i)}).sort((s,a)=>{switch(l){case"created-asc":return new Date(s.createdAt).getTime()-new Date(a.createdAt).getTime();case"created-desc":return new Date(a.createdAt).getTime()-new Date(s.createdAt).getTime();case"due-asc":return s.dueDate?a.dueDate?new Date(s.dueDate).getTime()-new Date(a.dueDate).getTime():-1:1;case"due-desc":return s.dueDate?a.dueDate?new Date(a.dueDate).getTime()-new Date(s.dueDate).getTime():-1:1;case"priority-desc":return(xo[a.priority]||0)-(xo[s.priority]||0);case"priority-asc":return(xo[s.priority]||0)-(xo[a.priority]||0);case"title-asc":return s.title.localeCompare(a.title);default:return new Date(a.createdAt).getTime()-new Date(s.createdAt).getTime()}})},x0=e=>{const t={};return!e.title||e.title.trim().length===0?t.title="Task title is required.":e.title.trim().length<3?t.title="Title must be at least 3 characters.":e.title.trim().length>100&&(t.title="Title cannot exceed 100 characters."),e.description&&e.description.length>500&&(t.description="Description cannot exceed 500 characters."),e.category||(t.category="Please select a category."),e.priority||(t.priority="Please select a priority level."),{isValid:Object.keys(t).length===0,errors:t}},Xf=D.createContext(null),hl={search:"",status:oe.ALL,priority:"all",category:"all",sortBy:"created-desc"},w0=({children:e})=>{const[t,n]=p0(g0,ec),[r,o]=D.useState(hl),i=h0(r.search,250),[l,s]=D.useState(null),a=D.useCallback((E,P="success")=>{s({id:Date.now(),message:E,type:P})},[]),d=D.useCallback(()=>{s(null)},[]);D.useEffect(()=>{const E=t.filter(P=>!P.completed).length;E>0?document.title=`(${E}) TaskFlow – Task Management Dashboard`:document.title="TaskFlow – All Tasks Completed! 🎉"},[t]);const h=D.useCallback(E=>{const P={id:`task-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,title:E.title.trim(),description:E.description?E.description.trim():"",category:E.category||"General",priority:E.priority||"medium",dueDate:E.dueDate||"",completed:!1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return n(B=>[P,...B]),a(`Task "${P.title}" added successfully!`,"success"),P},[n,a]),g=D.useCallback((E,P)=>{n(B=>B.map(b=>b.id===E?{...b,...P,title:P.title?P.title.trim():b.title,description:P.description!==void 0?P.description.trim():b.description,updatedAt:new Date().toISOString()}:b)),a("Task updated successfully!","info")},[n,a]),m=D.useCallback(E=>{n(P=>{const B=P.find(pe=>pe.id===E),b=B?B.title:"Task";return a(`Deleted "${b}"`,"danger"),P.filter(pe=>pe.id!==E)})},[n,a]),v=D.useCallback(E=>{n(P=>P.map(B=>{if(B.id===E){const b=!B.completed;return a(b?`Completed "${B.title}"! 🎉`:`Marked "${B.title}" as pending`,b?"success":"info"),{...B,completed:b,updatedAt:new Date().toISOString()}}return B}))},[n,a]),y=D.useCallback(E=>t.find(P=>P.id===E)||null,[t]),x=D.useCallback(()=>{n(E=>{const P=E.filter(b=>!b.completed),B=E.length-P.length;return B>0&&a(`Cleared ${B} completed tasks`,"info"),P})},[n,a]),N=D.useCallback(()=>{n(ec),o(hl),a("Restored sample demonstration tasks","info")},[n,a]),f=D.useCallback(E=>{o(P=>({...P,search:E}))},[]),c=D.useCallback(E=>{o(P=>({...P,status:E}))},[]),p=D.useCallback(E=>{o(P=>({...P,priority:E}))},[]),w=D.useCallback(E=>{o(P=>({...P,category:E}))},[]),C=D.useCallback(E=>{o(P=>({...P,sortBy:E}))},[]),z=D.useCallback(()=>{o(hl),a("Filters reset to default","info")},[a]),$=D.useMemo(()=>{const E=t.length,P=t.filter(he=>he.completed).length,B=E-P,b=t.filter(he=>he.priority==="high"&&!he.completed).length,pe=E>0?Math.round(P/E*100):0,ct=t.reduce((he,ot)=>(he[ot.category]=(he[ot.category]||0)+1,he),{});return{total:E,completed:P,pending:B,highPriority:b,completionRate:pe,categoryCounts:ct}},[t]),j=D.useMemo(()=>{const E={...r,search:i};return v0(t,E)},[t,r,i]),O=D.useMemo(()=>({tasks:t,filteredTasks:j,filters:r,statistics:$,toast:l,addTask:h,updateTask:g,deleteTask:m,toggleTask:v,getTaskById:y,clearCompleted:x,resetToDefault:N,setSearch:f,setStatusFilter:c,setPriorityFilter:p,setCategoryFilter:w,setSortBy:C,resetFilters:z,showToast:a,hideToast:d}),[t,j,r,$,l,h,g,m,v,y,x,N,f,c,p,w,C,z,a,d]);return u.jsx(Xf.Provider,{value:O,children:e})};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=e=>e==null?void 0:e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $0(e,t,n=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:k0(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=e=>{let t="",n=!1;for(const r of e){if(r==="-"||r==="_"||r<=" "){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=e=>{const t=S0(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function gl(e){return e!=null}function j0(e,t={}){var m,v;const n=t.attributeNames??{},r=y=>n[y]??y,o=e.size??e.width??Gt.width,i=e.size??e.height??Gt.height,l=((m=e.aliases)==null?void 0:m.filter(y=>typeof y=="string"&&y.trim()!=="").map(y=>`lucide-${y}`))??[],s=[...e.name?[`lucide-${e.name}`]:[],...l],a=((v=t.className)==null?void 0:v.split(" ").filter(Boolean))??[],d=t.includeDefaultClasses===!1?$s(...a):$s("lucide",...s,...a),h=t.absoluteStrokeWidth?Number(t.strokeWidth??Gt["stroke-width"])*Number(e.size??e.width??Gt.width)/Number(t.size??t.width??Gt.width):t.strokeWidth??Gt["stroke-width"];return["svg",{...Object.entries(Gt).reduce((y,[x,N])=>(y[r(x)]=N,y),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&gl(t.size)&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&gl(t.width)&&{[r("width")]:t.width},..."height"in t&&gl(t.height)&&{[r("height")]:t.height},[r("stroke-width")]:h,...d&&{[r("class")]:d},[r("viewBox")]:`0 0 ${o} ${i}`,...t.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(y=>{const[x,N,f]=y,c=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...N}:N;return f?[x,c,f]:[x,c]})]}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function E0(e,t={}){return j0(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},T0=D.createContext({}),_0=()=>D.useContext(T0),P0=D.forwardRef(({color:e,size:t,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:i,nonScalingStroke:l,className:s="",children:a,iconNode:d=[],icon:h={node:d,aliases:[],size:24},...g},m)=>{const{size:v=24,strokeWidth:y=2,absoluteStrokeWidth:x=!1,nonScalingStroke:N=!1,color:f="currentColor",className:c=""}=_0()??{},p=!!a||z0(g),[w,C,z=[]]=E0(h,{color:e??f,width:n??t??v,height:r??t??v,strokeWidth:o??y,absoluteStrokeWidth:i??x,nonScalingStroke:l??N,className:$s(c,s),hasA11yProp:p,attributes:g});return D.createElement(w,{ref:m,...C},[...z.map(([$,j])=>D.createElement($,j)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Z(e,t=[],n=[]){const r=typeof e=="string"?$0(e,t,n):e,o=D.forwardRef(({className:i,...l},s)=>D.createElement(P0,{ref:s,icon:r,className:i,...l}));return r.name&&(o.displayName=C0(r.name)),o}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Zf.node;const N0=Z(Zf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Jf.node;const L0=Z(Jf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};qf.node;const di=Z(qf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};ep.node;const M0=Z(ep);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};tp.node;const np=Z(tp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp={name:"clipboard-list",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]};rp.node;const D0=Z(rp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};op.node;const ip=Z(op);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};lp.node;const I0=Z(lp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp={name:"folder-open",size:24,node:[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]};sp.node;const b0=Z(sp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap={name:"inbox",size:24,node:[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]};ap.node;const A0=Z(ap);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};up.node;const R0=Z(up);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};cp.node;const dp=Z(cp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};fp.node;const O0=Z(fp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp={name:"pen",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-2"]};pp.node;const F0=Z(pp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};hp.node;const Mi=Z(hp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};gp.node;const mp=Z(gp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};yp.node;const B0=Z(yp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp={name:"search-x",size:24,node:[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]};vp.node;const W0=Z(vp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};xp.node;const U0=Z(xp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};wp.node;const H0=Z(wp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};kp.node;const Ta=Z(kp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};$p.node;const _a=Z($p);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};Sp.node;const V0=Z(Sp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Cp.node;const Di=Z(Cp),ir=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  width: 100%;
`,lr=k.label`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};

  span.required {
    color: ${({theme:e})=>e.colors.status.danger};
  }
`,Pa=U`
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  background-color: ${({theme:e})=>e.colors.surface.card};
  border: 1.5px solid ${({hasError:e,theme:t})=>e?t.colors.status.danger:t.colors.surface.border};
  border-radius: ${({theme:e})=>e.radii.lg};
  outline: none;
  transition: ${({theme:e})=>e.transitions.fast};

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.light};
  }

  &:hover:not(:disabled) {
    border-color: ${({hasError:e,theme:t})=>e?t.colors.status.danger:t.colors.surface.borderDark};
  }

  &:focus {
    border-color: ${({hasError:e,theme:t})=>e?t.colors.status.danger:t.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({hasError:e,theme:t})=>e?"rgba(239, 68, 68, 0.15)":"rgba(79, 70, 229, 0.15)"};
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.surface.subtle};
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.text.light};
  }
`,Ss=k.input`
  ${Pa}
`,Q0=k.textarea`
  ${Pa}
  min-height: 90px;
  resize: vertical;
`,jp=k.select`
  ${Pa}
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
  padding-right: 2.25rem;
  cursor: pointer;
`,nc=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.status.danger};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,G0=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.muted};
`,Y0=k.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,K0=k.div`
  position: absolute;
  left: 0.875rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>e.colors.text.light};
  svg {
    width: 16px;
    height: 16px;
  }
`,X0=k.button`
  position: absolute;
  right: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radii.full};
  color: ${({theme:e})=>e.colors.text.light};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.surface.subtle};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,Z0=k(Ss)`
  padding-left: 2.375rem;
  padding-right: 2rem;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.surface.card};
`,Ep=({value:e,onChange:t,onClear:n,placeholder:r="Search tasks...",id:o="task-search",...i})=>u.jsxs(Y0,{children:[u.jsx(K0,{children:u.jsx(U0,{})}),u.jsx(Z0,{id:o,type:"text",value:e,onChange:t,placeholder:r,"aria-label":r,...i}),e&&u.jsx(X0,{type:"button",onClick:n,"aria-label":"Clear search",children:u.jsx(Di,{})})]}),J0=({theme:e,variant:t="primary"})=>{switch(t){case"primary":return U`
        background: linear-gradient(135deg, ${e.colors.primary[600]}, ${e.colors.primary[700]});
        color: ${e.colors.text.white};
        box-shadow: ${e.shadows.sm};
        &:hover:not(:disabled) {
          background: linear-gradient(135deg, ${e.colors.primary[500]}, ${e.colors.primary[600]});
          box-shadow: ${e.shadows.primaryGlow};
          transform: translateY(-1px);
        }
        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;case"secondary":return U`
        background: ${e.colors.surface.subtle};
        color: ${e.colors.text.primary};
        border: 1px solid ${e.colors.surface.border};
        &:hover:not(:disabled) {
          background: ${e.colors.surface.borderLight};
          border-color: ${e.colors.surface.borderDark};
        }
      `;case"danger":return U`
        background: ${e.colors.status.dangerLight};
        color: ${e.colors.status.danger};
        border: 1px solid ${e.colors.status.dangerBorder};
        &:hover:not(:disabled) {
          background: ${e.colors.status.danger};
          color: ${e.colors.text.white};
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);
        }
      `;case"success":return U`
        background: ${e.colors.status.successLight};
        color: ${e.colors.status.success};
        border: 1px solid ${e.colors.status.successBorder};
        &:hover:not(:disabled) {
          background: ${e.colors.status.success};
          color: ${e.colors.text.white};
        }
      `;case"ghost":return U`
        background: transparent;
        color: ${e.colors.text.secondary};
        &:hover:not(:disabled) {
          background: ${e.colors.surface.subtle};
          color: ${e.colors.text.primary};
        }
      `;case"outline":return U`
        background: transparent;
        color: ${e.colors.primary[600]};
        border: 1.5px solid ${e.colors.primary[300]};
        &:hover:not(:disabled) {
          background: ${e.colors.primary[50]};
          border-color: ${e.colors.primary[600]};
        }
      `;default:return""}},q0=({theme:e,size:t="md"})=>{switch(t){case"sm":return U`
        padding: 0.375rem 0.75rem;
        font-size: ${e.typography.fontSize.xs};
        border-radius: ${e.radii.md};
        gap: 0.375rem;
      `;case"lg":return U`
        padding: 0.75rem 1.5rem;
        font-size: ${e.typography.fontSize.md};
        border-radius: ${e.radii.xl};
        gap: 0.625rem;
      `;case"md":default:return U`
        padding: 0.5rem 1rem;
        font-size: ${e.typography.fontSize.sm};
        border-radius: ${e.radii.lg};
        gap: 0.5rem;
      `}},ey=k.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  line-height: 1;
  white-space: nowrap;
  transition: ${({theme:e})=>e.transitions.normal};
  user-select: none;
  width: ${({fullWidth:e})=>e?"100%":"auto"};

  ${e=>J0(e)}
  ${e=>q0(e)}

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  svg {
    width: ${({size:e})=>e==="sm"?"14px":e==="lg"?"20px":"16px"};
    height: ${({size:e})=>e==="sm"?"14px":e==="lg"?"20px":"16px"};
    flex-shrink: 0;
  }
`,Ut=({children:e,variant:t="primary",size:n="md",fullWidth:r=!1,icon:o=null,iconRight:i=null,disabled:l=!1,onClick:s,type:a="button",ariaLabel:d,...h})=>u.jsxs(ey,{variant:t,size:n,fullWidth:r,disabled:l,onClick:s,type:a,"aria-label":d,...h,children:[o&&u.jsx("span",{"aria-hidden":"true",children:o}),e&&u.jsx("span",{children:e}),i&&u.jsx("span",{"aria-hidden":"true",children:i})]}),pn=()=>{const e=D.useContext(Xf);if(!e)throw new Error("[useTasks] Error: useTasks must be used within a <TaskProvider>. Please check your component hierarchy.");return e},ty=k.header`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndices.sticky};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[8]}`};
  background-color: ${({theme:e})=>e.colors.surface.header};
  border-bottom: 1px solid ${({theme:e})=>e.colors.surface.border};
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.92);

  ${({theme:e})=>e.media.tablet} {
    padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  }
`,ny=k.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
`,ry=k.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: ${({theme:e})=>e.radii.lg};
  color: ${({theme:e})=>e.colors.text.secondary};

  &:hover {
    background-color: ${({theme:e})=>e.colors.surface.subtle};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  svg {
    width: 22px;
    height: 22px;
  }

  ${({theme:e})=>e.media.tablet} {
    display: flex;
  }
`,oy=k.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  cursor: pointer;
`,iy=k.div`
  width: 38px;
  height: 38px;
  border-radius: ${({theme:e})=>e.radii.xl};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary[600]}, ${({theme:e})=>e.colors.accent.purple});
  color: ${({theme:e})=>e.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({theme:e})=>e.shadows.primaryGlow};

  svg {
    width: 22px;
    height: 22px;
  }
`,ly=k.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    font-weight: ${({theme:e})=>e.typography.fontWeight.extrabold};
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.text.primary}, ${({theme:e})=>e.colors.primary[700]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    font-size: 0.7rem;
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
    color: ${({theme:e})=>e.colors.text.muted};

    ${({theme:e})=>e.media.mobile} {
      display: none;
    }
  }
`,sy=k.div`
  flex: 1;
  max-width: 440px;
  margin: 0 ${({theme:e})=>e.spacing[6]};

  ${({theme:e})=>e.media.tablet} {
    display: none; /* In mobile, search moves into filter bar */
  }
`,ay=k.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,uy=k.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0.375rem 0.75rem;
  background-color: ${({theme:e})=>e.colors.primary[50]};
  border: 1px solid ${({theme:e})=>e.colors.primary[200]};
  border-radius: ${({theme:e})=>e.radii.full};

  ${({theme:e})=>e.media.mobile} {
    display: none;
  }
`,cy=k.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary[600]}, ${({theme:e})=>e.colors.accent.pink});
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: bold;
`,dy=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.primary[800]};
`,fy=({onOpenAddModal:e,onToggleSidebar:t})=>{const{filters:n,setSearch:r}=pn();return u.jsxs(ty,{children:[u.jsxs(ny,{children:[u.jsx(ry,{onClick:t,"aria-label":"Toggle navigation menu",type:"button",children:u.jsx(O0,{})}),u.jsxs(oy,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[u.jsx(iy,{children:u.jsx(H0,{})}),u.jsxs(ly,{children:[u.jsx("h1",{children:"TaskFlow"}),u.jsx("span",{children:"React State & Hooks Dashboard"})]})]})]}),u.jsx(sy,{children:u.jsx(Ep,{value:n.search,onChange:o=>r(o.target.value),onClear:()=>r(""),placeholder:"Search tasks by title or description..."})}),u.jsxs(ay,{children:[u.jsx(Ut,{variant:"primary",size:"md",icon:u.jsx(Mi,{}),onClick:e,id:"btn-header-add-task",children:"Add Task"}),u.jsxs(uy,{children:[u.jsx(cy,{children:"JS"}),u.jsx(dy,{children:"Intern Workspace"})]})]})]})},py=k.div`
  display: none;
  ${({theme:e})=>e.media.tablet} {
    display: ${({$isOpen:e})=>e?"block":"none"};
    position: fixed;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(2px);
    z-index: ${({theme:e})=>e.zIndices.fixed};
  }
`,hy=k.aside`
  width: 260px;
  background-color: ${({theme:e})=>e.colors.surface.sidebar};
  border-right: 1px solid ${({theme:e})=>e.colors.surface.border};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 65px);
  position: sticky;
  top: 65px;
  overflow-y: auto;
  padding: ${({theme:e})=>`${e.spacing[6]} ${e.spacing[4]}`};
  transition: transform ${({theme:e})=>e.transitions.normal};

  ${({theme:e})=>e.media.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: ${({theme:e})=>e.zIndices.fixed+1};
    box-shadow: ${({theme:e})=>e.shadows.xl};
    transform: ${({$isOpen:e})=>e?"translateX(0)":"translateX(-100%)"};
    width: 280px;
  }
`,gy=k.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[4]};
  padding-bottom: ${({theme:e})=>e.spacing[3]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.surface.border};

  ${({theme:e})=>e.media.tablet} {
    display: flex;
  }
`,my=k.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
`,yy=k.button`
  padding: 0.375rem;
  border-radius: ${({theme:e})=>e.radii.md};
  color: ${({theme:e})=>e.colors.text.muted};
  &:hover {
    background-color: ${({theme:e})=>e.colors.surface.subtle};
    color: ${({theme:e})=>e.colors.text.primary};
  }
  svg {
    width: 20px;
    height: 20px;
  }
`,rc=k.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.light};
  margin: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[3]} ${e.spacing[2]}`};
`,oc=k.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,sr=k.li``,ar=k.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  border-radius: ${({theme:e})=>e.radii.lg};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: ${({theme:e})=>e.transitions.fast};

  div.left {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${({$isActive:e,theme:t})=>e&&U`
      background-color: ${t.colors.primary[50]};
      color: ${t.colors.primary[700]};
      font-weight: ${t.typography.fontWeight.semibold};

      div.left svg {
        color: ${t.colors.primary[600]};
      }
    `}

  &:hover:not(:disabled) {
    background-color: ${({$isActive:e,theme:t})=>e?t.colors.primary[100]:t.colors.surface.subtle};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,ur=k.span`
  padding: 0.15rem 0.5rem;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({$isActive:e,theme:t})=>e?t.colors.primary[200]:t.colors.surface.subtle};
  color: ${({$isActive:e,theme:t})=>e?t.colors.primary[800]:t.colors.text.muted};
`,vy=k.div`
  margin-top: auto;
  padding-top: ${({theme:e})=>e.spacing[6]};
  border-top: 1px solid ${({theme:e})=>e.colors.surface.border};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ic=k.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: ${({theme:e})=>e.transitions.fast};

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.surface.subtle};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,xy=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem;
  background-color: ${({theme:e})=>e.colors.surface.subtle};
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-top: ${({theme:e})=>e.spacing[3]};
  font-size: 0.7rem;
  color: ${({theme:e})=>e.colors.text.muted};

  svg {
    width: 14px;
    height: 14px;
    color: ${({theme:e})=>e.colors.status.success};
  }
`,wy=({isOpen:e,onClose:t})=>{const{filters:n,setStatusFilter:r,setPriorityFilter:o,setCategoryFilter:i,statistics:l,resetToDefault:s,clearCompleted:a}=pn(),d=(x,N="all")=>{r(x),o(N),i("all"),t&&t()},h=x=>{i(x),t&&t()},g=n.status===oe.ALL&&n.priority==="all"&&n.category==="all",m=n.status===oe.ACTIVE&&n.priority==="all",v=n.status===oe.COMPLETED,y=n.priority==="high"&&n.status==="all";return u.jsxs(u.Fragment,{children:[u.jsx(py,{$isOpen:e,onClick:t}),u.jsxs(hy,{$isOpen:e,children:[u.jsxs(gy,{children:[u.jsx(my,{children:"Task Navigation"}),u.jsx(yy,{onClick:t,"aria-label":"Close sidebar",children:u.jsx(Di,{})})]}),u.jsx(rc,{children:"Main Views"}),u.jsxs(oc,{children:[u.jsx(sr,{children:u.jsxs(ar,{$isActive:g,onClick:()=>d(oe.ALL),children:[u.jsxs("div",{className:"left",children:[u.jsx(dp,{}),u.jsx("span",{children:"All Tasks"})]}),u.jsx(ur,{$isActive:g,children:l.total})]})}),u.jsx(sr,{children:u.jsxs(ar,{$isActive:m,onClick:()=>d(oe.ACTIVE),children:[u.jsxs("div",{className:"left",children:[u.jsx(ip,{}),u.jsx("span",{children:"In Progress"})]}),u.jsx(ur,{$isActive:m,children:l.pending})]})}),u.jsx(sr,{children:u.jsxs(ar,{$isActive:v,onClick:()=>d(oe.COMPLETED),children:[u.jsxs("div",{className:"left",children:[u.jsx(np,{}),u.jsx("span",{children:"Completed"})]}),u.jsx(ur,{$isActive:v,children:l.completed})]})}),u.jsx(sr,{children:u.jsxs(ar,{$isActive:y,onClick:()=>d("all","high"),children:[u.jsxs("div",{className:"left",children:[u.jsx(_a,{}),u.jsx("span",{children:"High Priority"})]}),u.jsx(ur,{$isActive:y,children:l.highPriority})]})})]}),u.jsx(rc,{children:"Categories"}),u.jsx(oc,{children:za.map(x=>{const N=l.categoryCounts[x]||0,f=n.category===x;return u.jsx(sr,{children:u.jsxs(ar,{$isActive:f,onClick:()=>h(x),children:[u.jsxs("div",{className:"left",children:[u.jsx(b0,{}),u.jsx("span",{children:x})]}),u.jsx(ur,{$isActive:f,children:N})]})},x)})}),u.jsxs(vy,{children:[u.jsxs(ic,{onClick:s,title:"Restore original realistic demo tasks",children:[u.jsx(mp,{}),u.jsx("span",{children:"Reset Demo Data"})]}),l.completed>0&&u.jsxs(ic,{onClick:a,title:"Remove all completed tasks",children:[u.jsx(Ta,{}),u.jsxs("span",{children:["Clear Completed (",l.completed,")"]})]}),u.jsxs(xy,{children:[u.jsx(I0,{}),u.jsx("span",{children:"LocalStorage Synchronized"})]})]})]})]})},ky=k.div`
  background-color: ${({theme:e})=>e.colors.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.surface.border};
  border-radius: ${({theme:e})=>e.radii["2xl"]};
  padding: ${({theme:e})=>e.spacing[5]};
  box-shadow: ${({theme:e})=>e.shadows.card};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  position: relative;
  overflow: hidden;
  transition: ${({theme:e})=>e.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.cardHover};
    border-color: ${({theme:e,$accentColor:t})=>t||e.colors.primary[300]};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({$accentColor:e,theme:t})=>e||`linear-gradient(90deg, ${t.colors.primary[500]}, ${t.colors.accent.purple})`};
  }
`,$y=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Sy=k.div`
  width: 44px;
  height: 44px;
  border-radius: ${({theme:e})=>e.radii.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({$bgColor:e})=>e||"rgba(79, 70, 229, 0.1)"};
  color: ${({$iconColor:e,theme:t})=>e||t.colors.primary[600]};

  svg {
    width: 22px;
    height: 22px;
  }
`,Cy=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  padding: 0.2rem 0.5rem;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.surface.subtle};
  color: ${({theme:e})=>e.colors.text.secondary};
`,jy=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ey=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize["3xl"]};
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-weight: ${({theme:e})=>e.typography.fontWeight.extrabold};
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.1;
`,zy=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.muted};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,Ty=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.light};
`,wo=({icon:e,title:t,value:n,subtitle:r,badgeText:o,accentColor:i,iconBgColor:l,iconColor:s})=>u.jsxs(ky,{$accentColor:i,children:[u.jsxs($y,{children:[u.jsx(Sy,{$bgColor:l,$iconColor:s,children:e}),o&&u.jsx(Cy,{children:o})]}),u.jsxs(jy,{children:[u.jsx(Ey,{children:n}),u.jsx(zy,{children:t}),r&&u.jsx(Ty,{children:r})]})]}),_y=k.section`
  margin-bottom: ${({theme:e})=>e.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,Py=k.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({theme:e})=>e.spacing[4]};

  ${({theme:e})=>e.media.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({theme:e})=>e.media.mobile} {
    grid-template-columns: 1fr;
  }
`,Ny=k.div`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary[900]}, ${({theme:e})=>e.colors.primary[800]});
  border-radius: ${({theme:e})=>e.radii["2xl"]};
  padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[6]}`};
  color: ${({theme:e})=>e.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  box-shadow: ${({theme:e})=>e.shadows.md};

  ${({theme:e})=>e.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`,Ly=k.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  svg {
    width: 24px;
    height: 24px;
    color: ${({theme:e})=>e.colors.accent.teal};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: ${({theme:e})=>e.typography.fontSize.md};
      font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    }

    span {
      font-size: ${({theme:e})=>e.typography.fontSize.xs};
      color: ${({theme:e})=>e.colors.primary[200]};
    }
  }
`,My=k.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};

  ${({theme:e})=>e.media.tablet} {
    width: 100%;
    max-width: none;
  }
`,Dy=k.div`
  flex: 1;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: ${({theme:e})=>e.radii.full};
  overflow: hidden;
`,Iy=k.div`
  height: 100%;
  width: ${({$percentage:e})=>`${e}%`};
  background: linear-gradient(90deg, ${({theme:e})=>e.colors.accent.teal}, #34d399);
  border-radius: ${({theme:e})=>e.radii.full};
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`,by=k.span`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.accent.teal};
  min-width: 45px;
  text-align: right;
`,Ay=()=>{const{statistics:e}=pn();return u.jsxs(_y,{"aria-label":"Task overview statistics",children:[u.jsxs(Py,{children:[u.jsx(wo,{icon:u.jsx(dp,{}),title:"Total Tasks",value:e.total,subtitle:"All recorded workspace items",badgeText:"All Items",accentColor:"#6366f1",iconBgColor:"#e0e7ff",iconColor:"#4f46e5"}),u.jsx(wo,{icon:u.jsx(np,{}),title:"Completed",value:e.completed,subtitle:`${e.completionRate}% completion rate`,badgeText:"Finished",accentColor:"#10b981",iconBgColor:"#d1fae5",iconColor:"#059669"}),u.jsx(wo,{icon:u.jsx(ip,{}),title:"In Progress",value:e.pending,subtitle:"Tasks awaiting completion",badgeText:"Active",accentColor:"#3b82f6",iconBgColor:"#dbeafe",iconColor:"#2563eb"}),u.jsx(wo,{icon:u.jsx(_a,{}),title:"High Priority",value:e.highPriority,subtitle:"Urgent pending attention",badgeText:"Urgent",accentColor:"#ef4444",iconBgColor:"#fee2e2",iconColor:"#dc2626"})]}),u.jsxs(Ny,{children:[u.jsxs(Ly,{children:[u.jsx(V0,{}),u.jsxs("div",{children:[u.jsx("strong",{children:"Workspace Productivity"}),u.jsxs("span",{children:[e.completed," of ",e.total," tasks resolved"]})]})]}),u.jsxs(My,{children:[u.jsx(Dy,{children:u.jsx(Iy,{$percentage:e.completionRate})}),u.jsxs(by,{children:[e.completionRate,"%"]})]})]})]})},Ry=k.div`
  background-color: ${({theme:e})=>e.colors.surface.card};
  border: 1px solid ${({theme:e})=>e.colors.surface.border};
  border-radius: ${({theme:e})=>e.radii["2xl"]};
  padding: ${({theme:e})=>e.spacing[4]};
  box-shadow: ${({theme:e})=>e.shadows.card};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[6]};
`,Oy=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;

  ${({theme:e})=>e.media.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`,Fy=k.div`
  display: flex;
  background-color: ${({theme:e})=>e.colors.surface.subtle};
  padding: 0.25rem;
  border-radius: ${({theme:e})=>e.radii.xl};
  gap: 0.25rem;
  border: 1px solid ${({theme:e})=>e.colors.surface.border};

  ${({theme:e})=>e.media.mobile} {
    width: 100%;
  }
`,ml=k.button`
  padding: 0.45rem 1rem;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border-radius: ${({theme:e})=>e.radii.lg};
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: ${({theme:e})=>e.transitions.fast};
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  ${({$isActive:e,theme:t})=>e&&U`
      background-color: ${t.colors.surface.card};
      color: ${t.colors.primary[600]};
      box-shadow: ${t.shadows.sm};
      font-weight: ${t.typography.fontWeight.bold};
    `}

  &:hover:not(:disabled) {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,yl=k.span`
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({$isActive:e,theme:t})=>e?t.colors.primary[100]:t.colors.surface.border};
  color: ${({$isActive:e,theme:t})=>e?t.colors.primary[800]:t.colors.text.muted};
`,By=k.div`
  display: none;
  ${({theme:e})=>e.media.tablet} {
    display: block;
    width: 100%;
  }
`,Wy=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-wrap: wrap;
  padding-top: ${({theme:e})=>e.spacing[3]};
  border-top: 1px solid ${({theme:e})=>e.colors.surface.borderLight};

  ${({theme:e})=>e.media.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`,Uy=k.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-wrap: wrap;
  flex: 1;

  ${({theme:e})=>e.media.mobile} {
    flex-direction: column;
    width: 100%;
  }
`,vl=k.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 140px;

  ${({theme:e})=>e.media.mobile} {
    width: 100%;
  }

  span.label {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    color: ${({theme:e})=>e.colors.text.muted};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
    white-space: nowrap;
  }
`,xl=k(jp)`
  padding: 0.4rem 2rem 0.4rem 0.75rem;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  border-radius: ${({theme:e})=>e.radii.lg};
`,Hy=()=>{const{filters:e,setSearch:t,setStatusFilter:n,setPriorityFilter:r,setCategoryFilter:o,setSortBy:i,resetFilters:l,statistics:s}=pn(),a=e.search!==""||e.status!==oe.ALL||e.priority!=="all"||e.category!=="all"||e.sortBy!=="created-desc";return u.jsxs(Ry,{"aria-label":"Task Filters and Sorting Controls",children:[u.jsxs(Oy,{children:[u.jsxs(Fy,{role:"tablist",children:[u.jsxs(ml,{role:"tab","aria-selected":e.status===oe.ALL,$isActive:e.status===oe.ALL,onClick:()=>n(oe.ALL),children:[u.jsx("span",{children:"All Tasks"}),u.jsx(yl,{$isActive:e.status===oe.ALL,children:s.total})]}),u.jsxs(ml,{role:"tab","aria-selected":e.status===oe.ACTIVE,$isActive:e.status===oe.ACTIVE,onClick:()=>n(oe.ACTIVE),children:[u.jsx("span",{children:"In Progress"}),u.jsx(yl,{$isActive:e.status===oe.ACTIVE,children:s.pending})]}),u.jsxs(ml,{role:"tab","aria-selected":e.status===oe.COMPLETED,$isActive:e.status===oe.COMPLETED,onClick:()=>n(oe.COMPLETED),children:[u.jsx("span",{children:"Completed"}),u.jsx(yl,{$isActive:e.status===oe.COMPLETED,children:s.completed})]})]}),u.jsx(By,{children:u.jsx(Ep,{value:e.search,onChange:d=>t(d.target.value),onClear:()=>t(""),placeholder:"Search tasks...",id:"mobile-task-search"})})]}),u.jsxs(Wy,{children:[u.jsxs(Uy,{children:[u.jsxs(vl,{children:[u.jsx("span",{className:"label",children:"Priority:"}),u.jsxs(xl,{value:e.priority,onChange:d=>r(d.target.value),"aria-label":"Filter by priority",children:[u.jsx("option",{value:"all",children:"All Priorities"}),u.jsx("option",{value:Te.HIGH,children:"High Priority"}),u.jsx("option",{value:Te.MEDIUM,children:"Medium Priority"}),u.jsx("option",{value:Te.LOW,children:"Low Priority"})]})]}),u.jsxs(vl,{children:[u.jsx("span",{className:"label",children:"Category:"}),u.jsxs(xl,{value:e.category,onChange:d=>o(d.target.value),"aria-label":"Filter by category",children:[u.jsx("option",{value:"all",children:"All Categories"}),za.map(d=>u.jsx("option",{value:d,children:d},d))]})]}),u.jsxs(vl,{children:[u.jsx("span",{className:"label",children:"Sort By:"}),u.jsx(xl,{value:e.sortBy,onChange:d=>i(d.target.value),"aria-label":"Sort tasks by",children:m0.map(d=>u.jsx("option",{value:d.value,children:d.label},d.value))})]})]}),a&&u.jsx(Ut,{variant:"ghost",size:"sm",onClick:l,icon:u.jsx(mp,{}),title:"Reset all active filters",children:"Reset Filters"})]})]})},Na=k.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border-radius: ${({theme:e})=>e.radii.full};
  white-space: nowrap;
  line-height: 1.2;
  transition: ${({theme:e})=>e.transitions.fast};

  /* Priority variant */
  ${({$type:e,$priority:t,theme:n})=>{var r,o,i;return e==="priority"&&U`
      background-color: ${((r=n.colors.priority[t])==null?void 0:r.bg)||n.colors.surface.subtle};
      color: ${((o=n.colors.priority[t])==null?void 0:o.text)||n.colors.text.secondary};
      border: 1px solid ${((i=n.colors.priority[t])==null?void 0:i.border)||n.colors.surface.border};
    `}}

  /* Category variant */
  ${({$type:e,$category:t,theme:n})=>{var r,o,i;return e==="category"&&U`
      background-color: ${((r=n.colors.category[t])==null?void 0:r.bg)||n.colors.category.General.bg};
      color: ${((o=n.colors.category[t])==null?void 0:o.text)||n.colors.category.General.text};
      border: 1px solid ${((i=n.colors.category[t])==null?void 0:i.border)||n.colors.category.General.border};
    `}}

  /* Status variant */
  ${({$type:e,$status:t,theme:n})=>e==="status"&&U`
      ${t==="completed"&&U`
        background-color: ${n.colors.status.successLight};
        color: ${n.colors.status.success};
        border: 1px solid ${n.colors.status.successBorder};
      `}
      ${t==="active"&&U`
        background-color: ${n.colors.status.infoLight};
        color: ${n.colors.status.info};
        border: 1px solid ${n.colors.status.infoBorder};
      `}
      ${t==="overdue"&&U`
        background-color: ${n.colors.status.dangerLight};
        color: ${n.colors.status.danger};
        border: 1px solid ${n.colors.status.dangerBorder};
      `}
      ${t==="today"&&U`
        background-color: ${n.colors.status.warningLight};
        color: ${n.colors.status.warning};
        border: 1px solid ${n.colors.status.warningBorder};
      `}
      ${t==="upcoming"&&U`
        background-color: ${n.colors.surface.subtle};
        color: ${n.colors.text.secondary};
        border: 1px solid ${n.colors.surface.border};
      `}
    `}

  /* Neutral / Custom variant */
  ${({$type:e,theme:t})=>e==="neutral"&&U`
      background-color: ${t.colors.surface.subtle};
      color: ${t.colors.text.secondary};
      border: 1px solid ${t.colors.surface.border};
    `}
`,Vy=k.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({$priority:e,theme:t})=>{var n;return((n=t.colors.priority[e])==null?void 0:n.dot)||t.colors.primary[500]}};
`,Qy=({priority:e})=>{const t=e?e.charAt(0).toUpperCase()+e.slice(1):"Medium";return u.jsxs(Na,{$type:"priority",$priority:(e==null?void 0:e.toLowerCase())||"medium",children:[u.jsx(Vy,{$priority:(e==null?void 0:e.toLowerCase())||"medium"}),t," Priority"]})},Gy=({category:e})=>u.jsx(Na,{$type:"category",$category:e||"General",children:e||"General"}),Yy=({status:e})=>{const t=()=>{switch(e){case"completed":return"Completed";case"active":return"In Progress";case"overdue":return"Overdue";case"today":return"Due Today";case"upcoming":return"Upcoming";default:return e}};return u.jsx(Na,{$type:"status",$status:e,children:t()})},Ky=k.div`
  background-color: ${({theme:e})=>e.colors.surface.card};
  border: 1px solid
    ${({$isCompleted:e,theme:t})=>e?t.colors.surface.borderLight:t.colors.surface.border};
  border-radius: ${({theme:e})=>e.radii.xl};
  padding: ${({theme:e})=>e.spacing[5]};
  box-shadow: ${({theme:e})=>e.shadows.card};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  transition: ${({theme:e})=>e.transitions.normal};
  position: relative;
  overflow: hidden;

  ${({$isCompleted:e})=>e&&U`
      opacity: 0.75;
      background-color: #fafbfd;
    `}

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.cardHover};
    border-color: ${({theme:e})=>e.colors.primary[300]};
    transform: translateY(-2px);
  }
`,Xy=k.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
`,Zy=k.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
`,Jy=k.button`
  width: 22px;
  height: 22px;
  border-radius: ${({theme:e})=>e.radii.md};
  border: 2px solid
    ${({$checked:e,theme:t})=>e?t.colors.status.success:t.colors.surface.borderDark};
  background-color: ${({$checked:e,theme:t})=>e?t.colors.status.success:"transparent"};
  color: ${({theme:e})=>e.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.status.success};
    background-color: ${({$checked:e,theme:t})=>e?t.colors.status.success:t.colors.status.successLight};
  }

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 3px;
  }
`,qy=k.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
`,e1=k.h4`
  font-size: ${({theme:e})=>e.typography.fontSize.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.35;
  transition: ${({theme:e})=>e.transitions.fast};

  ${({$isCompleted:e,theme:t})=>e&&U`
      text-decoration: line-through;
      color: ${t.colors.text.muted};
    `}
`,t1=k.p`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,n1=k.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,r1=k.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  padding: 0.2rem 0.5rem;
  border-radius: ${({theme:e})=>e.radii.sm};

  ${({$status:e,theme:t})=>{switch(e){case"overdue":return U`
          background-color: ${t.colors.status.dangerLight};
          color: ${t.colors.status.danger};
          border: 1px solid ${t.colors.status.dangerBorder};
        `;case"today":return U`
          background-color: ${t.colors.status.warningLight};
          color: ${t.colors.status.warning};
          border: 1px solid ${t.colors.status.warningBorder};
        `;default:return U`
          background-color: ${t.colors.surface.subtle};
          color: ${t.colors.text.secondary};
          border: 1px solid ${t.colors.surface.border};
        `}}}

  svg {
    width: 13px;
    height: 13px;
  }
`,o1=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({theme:e})=>e.colors.surface.borderLight};
  padding-top: ${({theme:e})=>e.spacing[3]};
  margin-top: auto;
`,i1=k.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`,lc=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: ${({theme:e})=>e.radii.md};
  color: ${({theme:e})=>e.colors.text.muted};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e,$variant:t})=>t==="danger"?e.colors.status.dangerLight:e.colors.surface.subtle};
    color: ${({theme:e,$variant:t})=>t==="danger"?e.colors.status.danger:e.colors.primary[600]};
  }

  svg {
    width: 15px;
    height: 15px;
  }
`,l1=({task:e,onToggle:t,onEdit:n,onDelete:r})=>{const o=y0(e.dueDate,e.completed);return u.jsxs(Ky,{$isCompleted:e.completed,children:[u.jsx(Xy,{children:u.jsxs(Zy,{children:[u.jsx(Jy,{$checked:e.completed,onClick:()=>t(e.id),"aria-label":e.completed?`Mark ${e.title} as in progress`:`Mark ${e.title} as completed`,type:"button",children:e.completed&&u.jsx(L0,{})}),u.jsxs(qy,{children:[u.jsx(e1,{$isCompleted:e.completed,children:e.title}),e.description&&u.jsx(t1,{children:e.description})]})]})}),u.jsxs(n1,{children:[u.jsx(Qy,{priority:e.priority}),u.jsx(Gy,{category:e.category}),e.dueDate&&u.jsxs(r1,{$status:o,children:[o==="overdue"?u.jsx(di,{}):u.jsx(N0,{}),u.jsx("span",{children:o==="overdue"?`Overdue: ${tc(e.dueDate)}`:o==="today"?"Due Today":tc(e.dueDate)})]})]}),u.jsxs(o1,{children:[u.jsx(Yy,{status:e.completed?"completed":"active"}),u.jsxs(i1,{children:[u.jsx(lc,{onClick:()=>n(e),"aria-label":`Edit task ${e.title}`,title:"Edit Task",type:"button",children:u.jsx(F0,{})}),u.jsx(lc,{$variant:"danger",onClick:()=>r(e.id),"aria-label":`Delete task ${e.title}`,title:"Delete Task",type:"button",children:u.jsx(Ta,{})})]})]})]})},s1=k.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({theme:e})=>`${e.spacing[12]} ${e.spacing[6]}`};
  background-color: ${({theme:e})=>e.colors.surface.card};
  border: 2px dashed ${({theme:e})=>e.colors.surface.border};
  border-radius: ${({theme:e})=>e.radii["2xl"]};
  margin: ${({theme:e})=>`${e.spacing[6]} 0`};
`,a1=k.div`
  width: 64px;
  height: 64px;
  border-radius: ${({theme:e})=>e.radii.full};
  background-color: ${({theme:e})=>e.colors.primary[50]};
  color: ${({theme:e})=>e.colors.primary[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing[4]};

  svg {
    width: 32px;
    height: 32px;
  }
`,u1=k.h3`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
`,c1=k.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.text.muted};
  max-width: 420px;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  line-height: 1.6;
`,sc=({icon:e,title:t="No tasks found",description:n="There are no tasks matching your current filters. Try resetting your search or create a new task.",actionLabel:r,onAction:o})=>u.jsxs(s1,{children:[u.jsx(a1,{children:e||u.jsx(D0,{})}),u.jsx(u1,{children:t}),u.jsx(c1,{children:n}),r&&o&&u.jsx(Ut,{variant:"primary",size:"md",onClick:o,icon:u.jsx(Mi,{}),children:r})]}),d1=k.section`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,f1=k.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
  flex-wrap: wrap;
`,p1=k.div`
  display: flex;
  align-items: baseline;
  gap: ${({theme:e})=>e.spacing[3]};

  h3 {
    font-size: ${({theme:e})=>e.typography.fontSize.lg};
    font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  span.count {
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    color: ${({theme:e})=>e.colors.text.muted};
    font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  }
`,h1=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};

  ${({theme:e})=>e.media.mobile} {
    grid-template-columns: 1fr;
  }
`,g1=({onOpenAddModal:e,onEditTask:t,onDeleteTask:n})=>{const{filteredTasks:r,tasks:o,filters:i,toggleTask:l,resetFilters:s}=pn();return i.search!==""||i.status!=="all"||i.priority!=="all"||i.category,o.length===0?u.jsx(sc,{icon:u.jsx(A0,{}),title:"Your workspace is clear",description:"You have no tasks created yet. Click below to add your first actionable item.",actionLabel:"Create Your First Task",onAction:e}):r.length===0?u.jsx(sc,{icon:u.jsx(W0,{}),title:"No matching tasks found",description:`No tasks match the active filter criteria "${i.search?i.search:"selected filters"}". Try clearing filters to see all tasks.`,actionLabel:"Clear Active Filters",onAction:s}):u.jsxs(d1,{"aria-label":"Task List",children:[u.jsxs(f1,{children:[u.jsxs(p1,{children:[u.jsx("h3",{children:"Workspace Tasks"}),u.jsxs("span",{className:"count",children:["Showing ",r.length," of ",o.length," tasks"]})]}),u.jsx(Ut,{variant:"primary",size:"sm",icon:u.jsx(Mi,{}),onClick:e,id:"btn-list-add-task",children:"Add Task"})]}),u.jsx(h1,{children:r.map(a=>u.jsx(l1,{task:a,onToggle:l,onEdit:t,onDelete:n},a.id))})]})},m1=Ea`
  from { opacity: 0; }
  to { opacity: 1; }
`,y1=Ea`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,v1=k.div`
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({theme:e})=>e.zIndices.modalBackdrop};
  padding: ${({theme:e})=>e.spacing[4]};
  animation: ${m1} 0.2s ease-out;
`,x1=k.div`
  background-color: ${({theme:e})=>e.colors.surface.modal};
  border-radius: ${({theme:e})=>e.radii["2xl"]};
  box-shadow: ${({theme:e})=>e.shadows.modal};
  width: 100%;
  max-width: ${({$maxWidth:e})=>e||"540px"};
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: ${({theme:e})=>e.zIndices.modal};
  animation: ${y1} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid ${({theme:e})=>e.colors.surface.border};

  ${({theme:e})=>e.media.mobile} {
    max-height: 95vh;
    border-radius: ${({theme:e})=>e.radii.xl};
  }
`,w1=k.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing[5]} ${e.spacing[6]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.surface.border};

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[4]}`};
  }
`,k1=k.h2`
  font-size: ${({theme:e})=>e.typography.fontSize.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeight.bold};
  color: ${({theme:e})=>e.colors.text.primary};
`,$1=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: ${({theme:e})=>e.radii.lg};
  color: ${({theme:e})=>e.colors.text.muted};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    background-color: ${({theme:e})=>e.colors.surface.subtle};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,S1=k.div`
  padding: ${({theme:e})=>`${e.spacing[6]} ${e.spacing[6]}`};
  overflow-y: auto;

  ${({theme:e})=>e.media.mobile} {
    padding: ${({theme:e})=>`${e.spacing[4]} ${e.spacing[4]}`};
  }
`,zp=({isOpen:e,onClose:t,title:n,children:r,maxWidth:o="540px",id:i="accessible-modal"})=>{const l=D.useRef(null);return D.useEffect(()=>{const s=a=>{a.key==="Escape"&&e&&t()};return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",s)),()=>{document.body.style.overflow="",window.removeEventListener("keydown",s)}},[e,t]),e?u.jsx(v1,{onClick:t,role:"dialog","aria-modal":"true","aria-labelledby":`${i}-title`,children:u.jsxs(x1,{ref:l,$maxWidth:o,onClick:s=>s.stopPropagation(),children:[u.jsxs(w1,{children:[u.jsx(k1,{id:`${i}-title`,children:n}),u.jsx($1,{onClick:t,"aria-label":"Close modal",type:"button",children:u.jsx(Di,{})})]}),u.jsx(S1,{children:r})]})}):null},C1=k.form`
  display: flex;
  flex-direction: column;
`,j1=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[4]};

  ${({theme:e})=>e.media.mobile} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,E1=k.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`,wl=k.button`
  flex: 1;
  padding: 0.5rem;
  border-radius: ${({theme:e})=>e.radii.lg};
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border: 1.5px solid
    ${({$isSelected:e,$priority:t,theme:n})=>{var r;return e?(r=n.colors.priority[t])==null?void 0:r.dot:n.colors.surface.border}};
  background-color: ${({$isSelected:e,$priority:t,theme:n})=>{var r;return e?(r=n.colors.priority[t])==null?void 0:r.bg:n.colors.surface.card}};
  color: ${({$isSelected:e,$priority:t,theme:n})=>{var r;return e?(r=n.colors.priority[t])==null?void 0:r.text:n.colors.text.secondary}};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({$priority:e,theme:t})=>{var n;return(n=t.colors.priority[e])==null?void 0:n.dot}};
  }
`,z1=k.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[3]};
  margin-top: ${({theme:e})=>e.spacing[4]};
  padding-top: ${({theme:e})=>e.spacing[4]};
  border-top: 1px solid ${({theme:e})=>e.colors.surface.border};

  ${({theme:e})=>e.media.mobile} {
    flex-direction: column-reverse;
    button {
      width: 100%;
    }
  }
`,T1=({initialData:e=null,onSubmit:t,onCancel:n,isEditMode:r=!1})=>{const[o,i]=D.useState({title:"",description:"",category:"Work",priority:Te.MEDIUM,dueDate:""}),[l,s]=D.useState({}),[a,d]=D.useState(!1);D.useEffect(()=>{e&&i({title:e.title||"",description:e.description||"",category:e.category||"Work",priority:e.priority||Te.MEDIUM,dueDate:e.dueDate||""})},[e]);const h=v=>{const{name:y,value:x}=v.target;i(N=>({...N,[y]:x})),a&&l[y]&&s(N=>({...N,[y]:null}))},g=v=>{i(y=>({...y,priority:v})),a&&l.priority&&s(y=>({...y,priority:null}))},m=v=>{v.preventDefault(),d(!0);const y=x0(o);if(!y.isValid){s(y.errors);return}s({}),t(o)};return u.jsxs(C1,{onSubmit:m,noValidate:!0,children:[u.jsxs(ir,{children:[u.jsxs(lr,{htmlFor:"task-title",children:["Task Title ",u.jsx("span",{className:"required",children:"*"})]}),u.jsx(Ss,{id:"task-title",name:"title",type:"text",value:o.title,onChange:h,placeholder:"e.g. Implement State Management Architecture",hasError:!!l.title,autoFocus:!0}),l.title?u.jsxs(nc,{children:[u.jsx(di,{size:12}),l.title]}):u.jsx(G0,{children:"Give your task a clear, concise action title."})]}),u.jsxs(ir,{children:[u.jsx(lr,{htmlFor:"task-description",children:"Description (Optional)"}),u.jsx(Q0,{id:"task-description",name:"description",value:o.description,onChange:h,placeholder:"Provide additional context, specifications, or sub-steps...",hasError:!!l.description}),l.description&&u.jsxs(nc,{children:[u.jsx(di,{size:12}),l.description]})]}),u.jsxs(j1,{children:[u.jsxs(ir,{children:[u.jsx(lr,{htmlFor:"task-category",children:"Category"}),u.jsx(jp,{id:"task-category",name:"category",value:o.category,onChange:h,children:za.map(v=>u.jsx("option",{value:v,children:v},v))})]}),u.jsxs(ir,{children:[u.jsx(lr,{htmlFor:"task-due-date",children:"Due Date"}),u.jsx(Ss,{id:"task-due-date",name:"dueDate",type:"date",value:o.dueDate,onChange:h})]})]}),u.jsxs(ir,{children:[u.jsx(lr,{children:"Priority Level"}),u.jsxs(E1,{role:"radiogroup","aria-label":"Task Priority",children:[u.jsx(wl,{type:"button",role:"radio","aria-checked":o.priority===Te.LOW,$priority:"low",$isSelected:o.priority===Te.LOW,onClick:()=>g(Te.LOW),children:"Low"}),u.jsx(wl,{type:"button",role:"radio","aria-checked":o.priority===Te.MEDIUM,$priority:"medium",$isSelected:o.priority===Te.MEDIUM,onClick:()=>g(Te.MEDIUM),children:"Medium"}),u.jsx(wl,{type:"button",role:"radio","aria-checked":o.priority===Te.HIGH,$priority:"high",$isSelected:o.priority===Te.HIGH,onClick:()=>g(Te.HIGH),children:"High"})]})]}),u.jsxs(z1,{children:[n&&u.jsx(Ut,{type:"button",variant:"secondary",onClick:n,children:"Cancel"}),u.jsx(Ut,{type:"submit",variant:"primary",icon:r?u.jsx(B0,{}):u.jsx(Mi,{}),id:"btn-submit-task-form",children:r?"Save Changes":"Create Task"})]})]})},ac=({isOpen:e,onClose:t,onSubmit:n,initialData:r=null,isEditMode:o=!1})=>u.jsx(zp,{isOpen:e,onClose:t,title:o?"Edit Task Details":"Create New Task",id:"task-dialog",children:u.jsx(T1,{initialData:r,onSubmit:n,onCancel:t,isEditMode:o})}),_1=k.main`
  flex: 1;
  padding: ${({theme:e})=>`${e.spacing[8]} ${e.spacing[8]}`};
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  ${({theme:e})=>e.media.tablet} {
    padding: ${({theme:e})=>`${e.spacing[6]} ${e.spacing[4]}`};
  }
`,P1=k.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};

  p {
    font-size: ${({theme:e})=>e.typography.fontSize.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
    line-height: 1.6;
  }

  div.warning-box {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background-color: ${({theme:e})=>e.colors.status.dangerLight};
    border: 1px solid ${({theme:e})=>e.colors.status.dangerBorder};
    border-radius: ${({theme:e})=>e.radii.lg};
    color: ${({theme:e})=>e.colors.status.danger};
    font-size: ${({theme:e})=>e.typography.fontSize.xs};
    font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};

    svg {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
    }
  }

  div.modal-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${({theme:e})=>e.spacing[3]};
    margin-top: ${({theme:e})=>e.spacing[2]};
    padding-top: ${({theme:e})=>e.spacing[4]};
    border-top: 1px solid ${({theme:e})=>e.colors.surface.border};
  }
`,N1=({isAddModalOpen:e,setIsAddModalOpen:t})=>{const{addTask:n,updateTask:r,deleteTask:o}=pn(),[i,l]=D.useState(null),[s,a]=D.useState(null),d=()=>t(!0),h=()=>t(!1),g=c=>{n(c),t(!1)},m=c=>l(c),v=()=>l(null),y=c=>{i&&(r(i.id,c),l(null))},x=c=>a(c),N=()=>a(null),f=()=>{s&&(o(s),a(null))};return u.jsxs(_1,{children:[u.jsx(Ay,{}),u.jsx(Hy,{}),u.jsx(g1,{onOpenAddModal:d,onEditTask:m,onDeleteTask:x}),u.jsx(ac,{isOpen:e,onClose:h,onSubmit:g,isEditMode:!1}),u.jsx(ac,{isOpen:!!i,onClose:v,onSubmit:y,initialData:i,isEditMode:!0}),u.jsx(zp,{isOpen:!!s,onClose:N,title:"Confirm Task Deletion",maxWidth:"460px",id:"delete-confirmation-dialog",children:u.jsxs(P1,{children:[u.jsxs("div",{className:"warning-box",children:[u.jsx(_a,{}),u.jsx("span",{children:"This action cannot be undone."})]}),u.jsx("p",{children:"Are you sure you want to delete this task? It will be permanently removed from your workspace storage."}),u.jsxs("div",{className:"modal-actions",children:[u.jsx(Ut,{variant:"secondary",onClick:N,type:"button",children:"Cancel"}),u.jsx(Ut,{variant:"danger",icon:u.jsx(Ta,{}),onClick:f,type:"button",id:"btn-confirm-delete",children:"Delete Task"})]})]})})]})},L1=Ea`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,M1=k.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: ${({theme:e})=>e.zIndices.tooltip};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  background-color: ${({theme:e})=>e.colors.surface.card};
  border-radius: ${({theme:e})=>e.radii.xl};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  border-left: 4px solid
    ${({$type:e,theme:t})=>e==="success"?t.colors.status.success:e==="danger"?t.colors.status.danger:t.colors.primary[600]};
  animation: ${L1} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 380px;

  ${({theme:e})=>e.media.mobile} {
    left: 16px;
    right: 16px;
    bottom: 16px;
    max-width: none;
  }
`,D1=k.div`
  display: flex;
  align-items: center;
  color: ${({$type:e,theme:t})=>e==="success"?t.colors.status.success:e==="danger"?t.colors.status.danger:t.colors.primary[600]};

  svg {
    width: 20px;
    height: 20px;
  }
`,I1=k.p`
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  flex: 1;
`,b1=k.button`
  color: ${({theme:e})=>e.colors.text.muted};
  padding: 4px;
  border-radius: ${({theme:e})=>e.radii.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
    background-color: ${({theme:e})=>e.colors.surface.subtle};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,A1=()=>{const{toast:e,hideToast:t}=pn();return D.useEffect(()=>{if(e){const n=setTimeout(()=>{t()},3500);return()=>clearTimeout(n)}},[e,t]),e?u.jsxs(M1,{$type:e.type,role:"status","aria-live":"polite",children:[u.jsxs(D1,{$type:e.type,children:[e.type==="success"&&u.jsx(M0,{}),e.type==="danger"&&u.jsx(di,{}),e.type==="info"&&u.jsx(R0,{})]}),u.jsx(I1,{children:e.message}),u.jsx(b1,{onClick:t,"aria-label":"Dismiss notification",children:u.jsx(Di,{})})]}):null},R1=k.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colors.surface.body};
`,O1=k.div`
  display: flex;
  flex: 1;
  width: 100%;
`,F1=()=>{const[e,t]=D.useState(!1),[n,r]=D.useState(!1),o=()=>{t(s=>!s)},i=()=>{t(!1)},l=()=>{r(!0)};return u.jsxs(o0,{theme:d0,children:[u.jsx(f0,{}),u.jsx(w0,{children:u.jsxs(R1,{children:[u.jsx(fy,{onOpenAddModal:l,onToggleSidebar:o}),u.jsxs(O1,{children:[u.jsx(wy,{isOpen:e,onClose:i}),u.jsx(N1,{isAddModalOpen:n,setIsAddModalOpen:r})]}),u.jsx(A1,{})]})})]})};kl.createRoot(document.getElementById("root")).render(u.jsx(ke.StrictMode,{children:u.jsx(F1,{})}));
