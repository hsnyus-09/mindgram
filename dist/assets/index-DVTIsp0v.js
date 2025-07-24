function DE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w_={exports:{}},Ru={},E_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),LE=Symbol.for("react.portal"),ME=Symbol.for("react.fragment"),jE=Symbol.for("react.strict_mode"),FE=Symbol.for("react.profiler"),UE=Symbol.for("react.provider"),VE=Symbol.for("react.context"),zE=Symbol.for("react.forward_ref"),BE=Symbol.for("react.suspense"),WE=Symbol.for("react.memo"),$E=Symbol.for("react.lazy"),Sm=Symbol.iterator;function HE(t){return t===null||typeof t!="object"?null:(t=Sm&&t[Sm]||t["@@iterator"],typeof t=="function"?t:null)}var S_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C_=Object.assign,x_={};function Ss(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||S_}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I_(){}I_.prototype=Ss.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=x_,this.updater=n||S_}var Ud=Fd.prototype=new I_;Ud.constructor=Fd;C_(Ud,Ss.prototype);Ud.isPureReactComponent=!0;var Cm=Array.isArray,T_=Object.prototype.hasOwnProperty,Vd={current:null},k_={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T_.call(e,r)&&!k_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fl,type:t,key:s,ref:o,props:i,_owner:Vd.current}}function GE(t,e){return{$$typeof:fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===fl}function qE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xm=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qE(""+t.key):e.toString(36)}function fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fl:case LE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ac(o,0):r,Cm(i)?(n="",t!=null&&(n=t.replace(xm,"$&/")+"/"),fa(i,e,n,"",function(h){return h})):i!=null&&(zd(i)&&(i=GE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cm(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ac(s,a);o+=fa(s,e,n,u,i)}else if(u=HE(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ac(s,a++),o+=fa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hl(t,e,n){if(t==null)return t;var r=[],i=0;return fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},pa={transition:null},YE={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:pa,ReactCurrentOwner:Vd};function P_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Hl,forEach:function(t,e,n){Hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hl(t,function(){e++}),e},toArray:function(t){return Hl(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ss;ne.Fragment=ME;ne.Profiler=FE;ne.PureComponent=Fd;ne.StrictMode=jE;ne.Suspense=BE;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE;ne.act=P_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)T_.call(e,u)&&!k_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:fl,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:VE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UE,_context:t},t.Consumer=t};ne.createElement=N_;ne.createFactory=function(t){var e=N_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:zE,render:t}};ne.isValidElement=zd;ne.lazy=function(t){return{$$typeof:$E,_payload:{_status:-1,_result:t},_init:KE}};ne.memo=function(t,e){return{$$typeof:WE,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=pa.transition;pa.transition={};try{t()}finally{pa.transition=e}};ne.unstable_act=P_;ne.useCallback=function(t,e){return pt.current.useCallback(t,e)};ne.useContext=function(t){return pt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return pt.current.useEffect(t,e)};ne.useId=function(){return pt.current.useId()};ne.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return pt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ne.useRef=function(t){return pt.current.useRef(t)};ne.useState=function(t){return pt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return pt.current.useTransition()};ne.version="18.3.1";E_.exports=ne;var L=E_.exports;const Bd=bE(L),QE=DE({__proto__:null,default:Bd},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE=L,JE=Symbol.for("react.element"),ZE=Symbol.for("react.fragment"),eS=Object.prototype.hasOwnProperty,tS=XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nS={key:!0,ref:!0,__self:!0,__source:!0};function R_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eS.call(e,r)&&!nS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JE,type:t,key:s,ref:o,props:i,_owner:tS.current}}Ru.Fragment=ZE;Ru.jsx=R_;Ru.jsxs=R_;w_.exports=Ru;var g=w_.exports,Eh={},A_={exports:{}},Rt={},O_={exports:{}},D_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Y){var q=U.length;U.push(Y);e:for(;0<q;){var fe=q-1>>>1,X=U[fe];if(0<i(X,Y))U[fe]=Y,U[q]=X,q=fe;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Y=U[0],q=U.pop();if(q!==Y){U[0]=q;e:for(var fe=0,X=U.length,_e=X>>>1;fe<_e;){var at=2*(fe+1)-1,$e=U[at],Ot=at+1,He=U[Ot];if(0>i($e,q))Ot<X&&0>i(He,$e)?(U[fe]=He,U[Ot]=q,fe=Ot):(U[fe]=$e,U[at]=q,fe=at);else if(Ot<X&&0>i(He,q))U[fe]=He,U[Ot]=q,fe=Ot;else break e}}return Y}function i(U,Y){var q=U.sortIndex-Y.sortIndex;return q!==0?q:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],m=1,f=null,p=3,T=!1,N=!1,A=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(U){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=U)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function b(U){if(A=!1,k(U),!N)if(n(u)!==null)N=!0,Ii(z);else{var Y=n(h);Y!==null&&an(b,Y.startTime-U)}}function z(U,Y){N=!1,A&&(A=!1,x(_),_=-1),T=!0;var q=p;try{for(k(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||U&&!I());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,p=f.priorityLevel;var X=fe(f.expirationTime<=Y);Y=t.unstable_now(),typeof X=="function"?f.callback=X:f===n(u)&&r(u),k(Y)}else r(u);f=n(u)}if(f!==null)var _e=!0;else{var at=n(h);at!==null&&an(b,at.startTime-Y),_e=!1}return _e}finally{f=null,p=q,T=!1}}var B=!1,C=null,_=-1,w=5,E=-1;function I(){return!(t.unstable_now()-E<w)}function P(){if(C!==null){var U=t.unstable_now();E=U;var Y=!0;try{Y=C(!0,U)}finally{Y?S():(B=!1,C=null)}}else B=!1}var S;if(typeof v=="function")S=function(){v(P)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ln=lt.port2;lt.port1.onmessage=P,S=function(){ln.postMessage(null)}}else S=function(){D(P,0)};function Ii(U){C=U,B||(B=!0,S())}function an(U,Y){_=D(function(){U(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){N||T||(N=!0,Ii(z))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var q=p;p=Y;try{return U()}finally{p=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=p;p=U;try{return Y()}finally{p=q}},t.unstable_scheduleCallback=function(U,Y,q){var fe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,U){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=q+X,U={id:m++,callback:Y,priorityLevel:U,startTime:q,expirationTime:X,sortIndex:-1},q>fe?(U.sortIndex=q,e(h,U),n(u)===null&&U===n(h)&&(A?(x(_),_=-1):A=!0,an(b,q-fe))):(U.sortIndex=X,e(u,U),N||T||(N=!0,Ii(z))),U},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(U){var Y=p;return function(){var q=p;p=Y;try{return U.apply(this,arguments)}finally{p=q}}}})(D_);O_.exports=D_;var rS=O_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iS=L,Pt=rS;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b_=new Set,jo={};function yi(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(jo[t]=e,t=0;t<e.length;t++)b_.add(e[t])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sh=Object.prototype.hasOwnProperty,sS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Im={},Tm={};function oS(t){return Sh.call(Tm,t)?!0:Sh.call(Im,t)?!1:sS.test(t)?Tm[t]=!0:(Im[t]=!0,!1)}function lS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aS(t,e,n,r){if(e===null||typeof e>"u"||lS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,$d);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,$d);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,$d);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aS(e,n,i,r)&&(n=null),r||i===null?oS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=iS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),Gd=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),Ih=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),j_=Symbol.for("react.offscreen"),km=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Oc;function ho(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Dc=!1;function bc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function uS(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Li:return"Fragment";case bi:return"Portal";case Ch:return"Profiler";case Gd:return"StrictMode";case xh:return"Suspense";case Ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:Th(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Th(t(e))}catch{}}return null}function cS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Th(e);case 8:return e===Gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hS(t){var e=F_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ql(t){t._valueTracker||(t._valueTracker=hS(t))}function U_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Aa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V_(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Nh(t,e){V_(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||Aa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function Ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(fo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function z_(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kl,W_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dS=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){dS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function $_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function H_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fS=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oh(t,e){if(e){if(fS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lh=null,Yi=null,Qi=null;function Om(t){if(t=gl(t)){if(typeof Lh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Lu(e),Lh(t.stateNode,t.type,e))}}function G_(t){Yi?Qi?Qi.push(t):Qi=[t]:Yi=t}function q_(){if(Yi){var t=Yi,e=Qi;if(Qi=Yi=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function K_(t,e){return t(e)}function Y_(){}var Lc=!1;function Q_(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return K_(t,e,n)}finally{Lc=!1,(Yi!==null||Qi!==null)&&(Y_(),q_())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Mh=!1;if(jn)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Mh=!1}function pS(t,e,n,r,i,s,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var vo=!1,Oa=null,Da=!1,jh=null,mS={onError:function(t){vo=!0,Oa=t}};function gS(t,e,n,r,i,s,o,a,u){vo=!1,Oa=null,pS.apply(mS,arguments)}function yS(t,e,n,r,i,s,o,a,u){if(gS.apply(this,arguments),vo){if(vo){var h=Oa;vo=!1,Oa=null}else throw Error(j(198));Da||(Da=!0,jh=h)}}function _i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dm(t){if(_i(t)!==t)throw Error(j(188))}function _S(t){var e=t.alternate;if(!e){if(e=_i(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dm(i),t;if(s===r)return Dm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function J_(t){return t=_S(t),t!==null?Z_(t):null}function Z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z_(t);if(e!==null)return e;t=t.sibling}return null}var ev=Pt.unstable_scheduleCallback,bm=Pt.unstable_cancelCallback,vS=Pt.unstable_shouldYield,wS=Pt.unstable_requestPaint,Re=Pt.unstable_now,ES=Pt.unstable_getCurrentPriorityLevel,Qd=Pt.unstable_ImmediatePriority,tv=Pt.unstable_UserBlockingPriority,ba=Pt.unstable_NormalPriority,SS=Pt.unstable_LowPriority,nv=Pt.unstable_IdlePriority,Au=null,yn=null;function CS(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Au,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:TS,xS=Math.log,IS=Math.LN2;function TS(t){return t>>>=0,t===0?32:31-(xS(t)/IS|0)|0}var Yl=64,Ql=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function La(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=po(a):(s&=o,s!==0&&(r=po(s)))}else o=n&~i,o!==0?r=po(o):s!==0&&(r=po(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function kS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=kS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rv(){var t=Yl;return Yl<<=1,!(Yl&4194240)&&(Yl=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function PS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,Jd,ov,lv,av,Uh=!1,Xl=[],fr=null,pr=null,mr=null,Vo=new Map,zo=new Map,rr=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lm(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=gl(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AS(t,e,n,r,i){switch(e){case"focusin":return fr=eo(fr,t,e,n,r,i),!0;case"dragenter":return pr=eo(pr,t,e,n,r,i),!0;case"mouseover":return mr=eo(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vo.set(s,eo(Vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zo.set(s,eo(zo.get(s)||null,t,e,n,r,i)),!0}return!1}function uv(t){var e=Gr(t.target);if(e!==null){var n=_i(e);if(n!==null){if(e=n.tag,e===13){if(e=X_(n),e!==null){t.blockedOn=e,av(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=gl(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mm(t,e,n){ma(t)&&n.delete(e)}function OS(){Uh=!1,fr!==null&&ma(fr)&&(fr=null),pr!==null&&ma(pr)&&(pr=null),mr!==null&&ma(mr)&&(mr=null),Vo.forEach(Mm),zo.forEach(Mm)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,OS)))}function Bo(t){function e(i){return to(i,t)}if(0<Xl.length){to(Xl[0],t);for(var n=1;n<Xl.length;n++){var r=Xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&to(fr,t),pr!==null&&to(pr,t),mr!==null&&to(mr,t),Vo.forEach(e),zo.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&rr.shift()}var Xi=$n.ReactCurrentBatchConfig,Ma=!0;function DS(t,e,n,r){var i=ce,s=Xi.transition;Xi.transition=null;try{ce=1,Zd(t,e,n,r)}finally{ce=i,Xi.transition=s}}function bS(t,e,n,r){var i=ce,s=Xi.transition;Xi.transition=null;try{ce=4,Zd(t,e,n,r)}finally{ce=i,Xi.transition=s}}function Zd(t,e,n,r){if(Ma){var i=Vh(t,e,n,r);if(i===null)Gc(t,e,r,ja,n),Lm(t,r);else if(AS(i,t,e,n,r))r.stopPropagation();else if(Lm(t,r),e&4&&-1<RS.indexOf(t)){for(;i!==null;){var s=gl(i);if(s!==null&&sv(s),s=Vh(t,e,n,r),s===null&&Gc(t,e,r,ja,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}var ja=null;function Vh(t,e,n,r){if(ja=null,t=Yd(r),t=Gr(t),t!==null)if(e=_i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=X_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ja=t,null}function cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ES()){case Qd:return 1;case tv:return 4;case ba:case SS:return 16;case nv:return 536870912;default:return 16}default:return 16}}var ur=null,ef=null,ga=null;function hv(){if(ga)return ga;var t,e=ef,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ga=i.slice(t,1<r?1-r:void 0)}function ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function jm(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jl:jm,this.isPropagationStopped=jm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=At(Cs),ml=Ie({},Cs,{view:0,detail:0}),LS=At(ml),jc,Fc,no,Ou=Ie({},ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(jc=t.screenX-no.screenX,Fc=t.screenY-no.screenY):Fc=jc=0,no=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),Fm=At(Ou),MS=Ie({},Ou,{dataTransfer:0}),jS=At(MS),FS=Ie({},ml,{relatedTarget:0}),Uc=At(FS),US=Ie({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),VS=At(US),zS=Ie({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BS=At(zS),WS=Ie({},Cs,{data:0}),Um=At(WS),$S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GS[t])?!!e[t]:!1}function nf(){return qS}var KS=Ie({},ml,{key:function(t){if(t.key){var e=$S[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YS=At(KS),QS=Ie({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=At(QS),XS=Ie({},ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),JS=At(XS),ZS=Ie({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),eC=At(ZS),tC=Ie({},Ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nC=At(tC),rC=[9,13,27,32],rf=jn&&"CompositionEvent"in window,wo=null;jn&&"documentMode"in document&&(wo=document.documentMode);var iC=jn&&"TextEvent"in window&&!wo,dv=jn&&(!rf||wo&&8<wo&&11>=wo),zm=" ",Bm=!1;function fv(t,e){switch(t){case"keyup":return rC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function sC(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:(Bm=!0,zm);case"textInput":return t=e.data,t===zm&&Bm?null:t;default:return null}}function oC(t,e){if(Mi)return t==="compositionend"||!rf&&fv(t,e)?(t=hv(),ga=ef=ur=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dv&&e.locale!=="ko"?null:e.data;default:return null}}var lC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lC[t.type]:e==="textarea"}function mv(t,e,n,r){G_(r),e=Fa(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,Wo=null;function aC(t){Tv(t,0)}function Du(t){var e=Ui(t);if(U_(e))return t}function uC(t,e){if(t==="change")return e}var gv=!1;if(jn){var Vc;if(jn){var zc="oninput"in document;if(!zc){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),zc=typeof $m.oninput=="function"}Vc=zc}else Vc=!1;gv=Vc&&(!document.documentMode||9<document.documentMode)}function Hm(){Eo&&(Eo.detachEvent("onpropertychange",yv),Wo=Eo=null)}function yv(t){if(t.propertyName==="value"&&Du(Wo)){var e=[];mv(e,Wo,t,Yd(t)),Q_(aC,e)}}function cC(t,e,n){t==="focusin"?(Hm(),Eo=e,Wo=n,Eo.attachEvent("onpropertychange",yv)):t==="focusout"&&Hm()}function hC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(Wo)}function dC(t,e){if(t==="click")return Du(e)}function fC(t,e){if(t==="input"||t==="change")return Du(e)}function pC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:pC;function $o(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sh.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,e){var n=Gm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gm(n)}}function _v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vv(){for(var t=window,e=Aa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Aa(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mC(t){var e=vv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_v(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qm(n,s);var o=qm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gC=jn&&"documentMode"in document&&11>=document.documentMode,ji=null,zh=null,So=null,Bh=!1;function Km(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||ji==null||ji!==Aa(r)||(r=ji,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&$o(So,r)||(So=r,r=Fa(zh,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},Bc={},wv={};jn&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function bu(t){if(Bc[t])return Bc[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wv)return Bc[t]=e[n];return t}var Ev=bu("animationend"),Sv=bu("animationiteration"),Cv=bu("animationstart"),xv=bu("transitionend"),Iv=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Iv.set(t,e),yi(e,[t])}for(var Wc=0;Wc<Ym.length;Wc++){var $c=Ym[Wc],yC=$c.toLowerCase(),_C=$c[0].toUpperCase()+$c.slice(1);Ar(yC,"on"+_C)}Ar(Ev,"onAnimationEnd");Ar(Sv,"onAnimationIteration");Ar(Cv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(xv,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vC=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Qm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yS(r,e,void 0,t),t.currentTarget=null}function Tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Qm(i,a,h),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Qm(i,a,h),s=u}}}if(Da)throw t=jh,Da=!1,jh=null,t}function we(t,e){var n=e[qh];n===void 0&&(n=e[qh]=new Set);var r=t+"__bubble";n.has(r)||(kv(e,t,2,!1),n.add(r))}function Hc(t,e,n){var r=0;e&&(r|=4),kv(n,t,r,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[ea]){t[ea]=!0,b_.forEach(function(n){n!=="selectionchange"&&(vC.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ea]||(e[ea]=!0,Hc("selectionchange",!1,e))}}function kv(t,e,n,r){switch(cv(e)){case 1:var i=DS;break;case 4:i=bS;break;default:i=Zd}n=i.bind(null,e,n,t),i=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Q_(function(){var h=s,m=Yd(n),f=[];e:{var p=Iv.get(t);if(p!==void 0){var T=tf,N=t;switch(t){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":T=YS;break;case"focusin":N="focus",T=Uc;break;case"focusout":N="blur",T=Uc;break;case"beforeblur":case"afterblur":T=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=jS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=JS;break;case Ev:case Sv:case Cv:T=VS;break;case xv:T=eC;break;case"scroll":T=LS;break;case"wheel":T=nC;break;case"copy":case"cut":case"paste":T=BS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Vm}var A=(e&4)!==0,D=!A&&t==="scroll",x=A?p!==null?p+"Capture":null:p;A=[];for(var v=h,k;v!==null;){k=v;var b=k.stateNode;if(k.tag===5&&b!==null&&(k=b,x!==null&&(b=Uo(v,x),b!=null&&A.push(Go(v,b,k)))),D)break;v=v.return}0<A.length&&(p=new T(p,N,null,n,m),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",p&&n!==bh&&(N=n.relatedTarget||n.fromElement)&&(Gr(N)||N[Fn]))break e;if((T||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,T?(N=n.relatedTarget||n.toElement,T=h,N=N?Gr(N):null,N!==null&&(D=_i(N),N!==D||N.tag!==5&&N.tag!==6)&&(N=null)):(T=null,N=h),T!==N)){if(A=Fm,b="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=Vm,b="onPointerLeave",x="onPointerEnter",v="pointer"),D=T==null?p:Ui(T),k=N==null?p:Ui(N),p=new A(b,v+"leave",T,n,m),p.target=D,p.relatedTarget=k,b=null,Gr(m)===h&&(A=new A(x,v+"enter",N,n,m),A.target=k,A.relatedTarget=D,b=A),D=b,T&&N)t:{for(A=T,x=N,v=0,k=A;k;k=Oi(k))v++;for(k=0,b=x;b;b=Oi(b))k++;for(;0<v-k;)A=Oi(A),v--;for(;0<k-v;)x=Oi(x),k--;for(;v--;){if(A===x||x!==null&&A===x.alternate)break t;A=Oi(A),x=Oi(x)}A=null}else A=null;T!==null&&Xm(f,p,T,A,!1),N!==null&&D!==null&&Xm(f,D,N,A,!0)}}e:{if(p=h?Ui(h):window,T=p.nodeName&&p.nodeName.toLowerCase(),T==="select"||T==="input"&&p.type==="file")var z=uC;else if(Wm(p))if(gv)z=fC;else{z=hC;var B=cC}else(T=p.nodeName)&&T.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=dC);if(z&&(z=z(t,h))){mv(f,z,n,m);break e}B&&B(t,p,h),t==="focusout"&&(B=p._wrapperState)&&B.controlled&&p.type==="number"&&Ph(p,"number",p.value)}switch(B=h?Ui(h):window,t){case"focusin":(Wm(B)||B.contentEditable==="true")&&(ji=B,zh=h,So=null);break;case"focusout":So=zh=ji=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Km(f,n,m);break;case"selectionchange":if(gC)break;case"keydown":case"keyup":Km(f,n,m)}var C;if(rf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Mi?fv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(dv&&n.locale!=="ko"&&(Mi||_!=="onCompositionStart"?_==="onCompositionEnd"&&Mi&&(C=hv()):(ur=m,ef="value"in ur?ur.value:ur.textContent,Mi=!0)),B=Fa(h,_),0<B.length&&(_=new Um(_,t,null,n,m),f.push({event:_,listeners:B}),C?_.data=C:(C=pv(n),C!==null&&(_.data=C)))),(C=iC?sC(t,n):oC(t,n))&&(h=Fa(h,"onBeforeInput"),0<h.length&&(m=new Um("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:h}),m.data=C))}Tv(f,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(t,n),s!=null&&r.unshift(Go(t,s,i)),s=Uo(t,e),s!=null&&r.push(Go(t,s,i))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=Uo(n,s),u!=null&&o.unshift(Go(n,u,a))):i||(u=Uo(n,s),u!=null&&o.push(Go(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wC=/\r\n?/g,EC=/\u0000|\uFFFD/g;function Jm(t){return(typeof t=="string"?t:""+t).replace(wC,`
`).replace(EC,"")}function ta(t,e,n){if(e=Jm(e),Jm(t)!==e&&n)throw Error(j(425))}function Ua(){}var Wh=null,$h=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,SC=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,CC=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(t){return Zm.resolve(null).then(t).catch(xC)}:Gh;function xC(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function eg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),mn="__reactFiber$"+xs,qo="__reactProps$"+xs,Fn="__reactContainer$"+xs,qh="__reactEvents$"+xs,IC="__reactListeners$"+xs,TC="__reactHandles$"+xs;function Gr(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=eg(t);t!==null;){if(n=t[mn])return n;t=eg(t)}return e}t=n,n=t.parentNode}return null}function gl(t){return t=t[mn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Lu(t){return t[qo]||null}var Kh=[],Vi=-1;function Or(t){return{current:t}}function Ee(t){0>Vi||(t.current=Kh[Vi],Kh[Vi]=null,Vi--)}function ye(t,e){Vi++,Kh[Vi]=t.current,t.current=e}var Tr={},it=Or(Tr),St=Or(!1),ri=Tr;function cs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Va(){Ee(St),Ee(it)}function tg(t,e,n){if(it.current!==Tr)throw Error(j(168));ye(it,e),ye(St,n)}function Nv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,cS(t)||"Unknown",i));return Ie({},n,r)}function za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ri=it.current,ye(it,t),ye(St,St.current),!0}function ng(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Nv(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,Ee(St),Ee(it),ye(it,t)):Ee(St),ye(St,n)}var Nn=null,Mu=!1,Kc=!1;function Pv(t){Nn===null?Nn=[t]:Nn.push(t)}function kC(t){Mu=!0,Pv(t)}function Dr(){if(!Kc&&Nn!==null){Kc=!0;var t=0,e=ce;try{var n=Nn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Mu=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),ev(Qd,Dr),i}finally{ce=e,Kc=!1}}return null}var zi=[],Bi=0,Ba=null,Wa=0,Lt=[],Mt=0,ii=null,Rn=1,An="";function zr(t,e){zi[Bi++]=Wa,zi[Bi++]=Ba,Ba=t,Wa=e}function Rv(t,e,n){Lt[Mt++]=Rn,Lt[Mt++]=An,Lt[Mt++]=ii,ii=t;var r=Rn;t=An;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-en(e)+i|n<<i|r,An=s+t}else Rn=1<<s|n<<i|r,An=t}function of(t){t.return!==null&&(zr(t,1),Rv(t,1,0))}function lf(t){for(;t===Ba;)Ba=zi[--Bi],zi[Bi]=null,Wa=zi[--Bi],zi[Bi]=null;for(;t===ii;)ii=Lt[--Mt],Lt[Mt]=null,An=Lt[--Mt],Lt[Mt]=null,Rn=Lt[--Mt],Lt[Mt]=null}var Nt=null,kt=null,Se=!1,Kt=null;function Av(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,kt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:Rn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,kt=null,!0):!1;default:return!1}}function Yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(Se){var e=kt;if(e){var n=e;if(!rg(t,e)){if(Yh(t))throw Error(j(418));e=gr(n.nextSibling);var r=Nt;e&&rg(t,e)?Av(r,n):(t.flags=t.flags&-4097|2,Se=!1,Nt=t)}}else{if(Yh(t))throw Error(j(418));t.flags=t.flags&-4097|2,Se=!1,Nt=t}}}function ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function na(t){if(t!==Nt)return!1;if(!Se)return ig(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=kt)){if(Yh(t))throw Ov(),Error(j(418));for(;e;)Av(t,e),e=gr(e.nextSibling)}if(ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Nt?gr(t.stateNode.nextSibling):null;return!0}function Ov(){for(var t=kt;t;)t=gr(t.nextSibling)}function hs(){kt=Nt=null,Se=!1}function af(t){Kt===null?Kt=[t]:Kt.push(t)}var NC=$n.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sg(t){var e=t._init;return e(t._payload)}function Dv(t){function e(x,v){if(t){var k=x.deletions;k===null?(x.deletions=[v],x.flags|=16):k.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=wr(x,v),x.index=0,x.sibling=null,x}function s(x,v,k){return x.index=k,t?(k=x.alternate,k!==null?(k=k.index,k<v?(x.flags|=2,v):k):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,v,k,b){return v===null||v.tag!==6?(v=th(k,x.mode,b),v.return=x,v):(v=i(v,k),v.return=x,v)}function u(x,v,k,b){var z=k.type;return z===Li?m(x,v,k.props.children,b,k.key):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===tr&&sg(z)===v.type)?(b=i(v,k.props),b.ref=ro(x,v,k),b.return=x,b):(b=xa(k.type,k.key,k.props,null,x.mode,b),b.ref=ro(x,v,k),b.return=x,b)}function h(x,v,k,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=nh(k,x.mode,b),v.return=x,v):(v=i(v,k.children||[]),v.return=x,v)}function m(x,v,k,b,z){return v===null||v.tag!==7?(v=Jr(k,x.mode,b,z),v.return=x,v):(v=i(v,k),v.return=x,v)}function f(x,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return v=th(""+v,x.mode,k),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gl:return k=xa(v.type,v.key,v.props,null,x.mode,k),k.ref=ro(x,null,v),k.return=x,k;case bi:return v=nh(v,x.mode,k),v.return=x,v;case tr:var b=v._init;return f(x,b(v._payload),k)}if(fo(v)||Js(v))return v=Jr(v,x.mode,k,null),v.return=x,v;ra(x,v)}return null}function p(x,v,k,b){var z=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return z!==null?null:a(x,v,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Gl:return k.key===z?u(x,v,k,b):null;case bi:return k.key===z?h(x,v,k,b):null;case tr:return z=k._init,p(x,v,z(k._payload),b)}if(fo(k)||Js(k))return z!==null?null:m(x,v,k,b,null);ra(x,k)}return null}function T(x,v,k,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(k)||null,a(v,x,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gl:return x=x.get(b.key===null?k:b.key)||null,u(v,x,b,z);case bi:return x=x.get(b.key===null?k:b.key)||null,h(v,x,b,z);case tr:var B=b._init;return T(x,v,k,B(b._payload),z)}if(fo(b)||Js(b))return x=x.get(k)||null,m(v,x,b,z,null);ra(v,b)}return null}function N(x,v,k,b){for(var z=null,B=null,C=v,_=v=0,w=null;C!==null&&_<k.length;_++){C.index>_?(w=C,C=null):w=C.sibling;var E=p(x,C,k[_],b);if(E===null){C===null&&(C=w);break}t&&C&&E.alternate===null&&e(x,C),v=s(E,v,_),B===null?z=E:B.sibling=E,B=E,C=w}if(_===k.length)return n(x,C),Se&&zr(x,_),z;if(C===null){for(;_<k.length;_++)C=f(x,k[_],b),C!==null&&(v=s(C,v,_),B===null?z=C:B.sibling=C,B=C);return Se&&zr(x,_),z}for(C=r(x,C);_<k.length;_++)w=T(C,x,_,k[_],b),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?_:w.key),v=s(w,v,_),B===null?z=w:B.sibling=w,B=w);return t&&C.forEach(function(I){return e(x,I)}),Se&&zr(x,_),z}function A(x,v,k,b){var z=Js(k);if(typeof z!="function")throw Error(j(150));if(k=z.call(k),k==null)throw Error(j(151));for(var B=z=null,C=v,_=v=0,w=null,E=k.next();C!==null&&!E.done;_++,E=k.next()){C.index>_?(w=C,C=null):w=C.sibling;var I=p(x,C,E.value,b);if(I===null){C===null&&(C=w);break}t&&C&&I.alternate===null&&e(x,C),v=s(I,v,_),B===null?z=I:B.sibling=I,B=I,C=w}if(E.done)return n(x,C),Se&&zr(x,_),z;if(C===null){for(;!E.done;_++,E=k.next())E=f(x,E.value,b),E!==null&&(v=s(E,v,_),B===null?z=E:B.sibling=E,B=E);return Se&&zr(x,_),z}for(C=r(x,C);!E.done;_++,E=k.next())E=T(C,x,_,E.value,b),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?_:E.key),v=s(E,v,_),B===null?z=E:B.sibling=E,B=E);return t&&C.forEach(function(P){return e(x,P)}),Se&&zr(x,_),z}function D(x,v,k,b){if(typeof k=="object"&&k!==null&&k.type===Li&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Gl:e:{for(var z=k.key,B=v;B!==null;){if(B.key===z){if(z=k.type,z===Li){if(B.tag===7){n(x,B.sibling),v=i(B,k.props.children),v.return=x,x=v;break e}}else if(B.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===tr&&sg(z)===B.type){n(x,B.sibling),v=i(B,k.props),v.ref=ro(x,B,k),v.return=x,x=v;break e}n(x,B);break}else e(x,B);B=B.sibling}k.type===Li?(v=Jr(k.props.children,x.mode,b,k.key),v.return=x,x=v):(b=xa(k.type,k.key,k.props,null,x.mode,b),b.ref=ro(x,v,k),b.return=x,x=b)}return o(x);case bi:e:{for(B=k.key;v!==null;){if(v.key===B)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){n(x,v.sibling),v=i(v,k.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=nh(k,x.mode,b),v.return=x,x=v}return o(x);case tr:return B=k._init,D(x,v,B(k._payload),b)}if(fo(k))return N(x,v,k,b);if(Js(k))return A(x,v,k,b);ra(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,k),v.return=x,x=v):(n(x,v),v=th(k,x.mode,b),v.return=x,x=v),o(x)):n(x,v)}return D}var ds=Dv(!0),bv=Dv(!1),$a=Or(null),Ha=null,Wi=null,uf=null;function cf(){uf=Wi=Ha=null}function hf(t){var e=$a.current;Ee($a),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){Ha=t,uf=Wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},Wi===null){if(Ha===null)throw Error(j(308));Wi=t,Ha.dependencies={lanes:0,firstContext:t}}else Wi=Wi.next=t;return e}var qr=null;function df(t){qr===null?qr=[t]:qr.push(t)}function Lv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,df(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,df(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}function og(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=h:a.next=h,m.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,m=h=u=null,a=s;do{var p=a.lane,T=a.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=t,A=a;switch(p=e,T=n,A.tag){case 1:if(N=A.payload,typeof N=="function"){f=N.call(T,f,p);break e}f=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=A.payload,p=typeof N=="function"?N.call(T,f,p):N,p==null)break e;f=Ie({},f,p);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else T={eventTime:T,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(h=m=T,u=f):m=m.next=T,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(m===null&&(u=f),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=f}}function lg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var yl={},_n=Or(yl),Ko=Or(yl),Yo=Or(yl);function Kr(t){if(t===yl)throw Error(j(174));return t}function pf(t,e){switch(ye(Yo,e),ye(Ko,t),ye(_n,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}Ee(_n),ye(_n,e)}function fs(){Ee(_n),Ee(Ko),Ee(Yo)}function jv(t){Kr(Yo.current);var e=Kr(_n.current),n=Ah(e,t.type);e!==n&&(ye(Ko,t),ye(_n,n))}function mf(t){Ko.current===t&&(Ee(_n),Ee(Ko))}var Ce=Or(0);function qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function gf(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var va=$n.ReactCurrentDispatcher,Qc=$n.ReactCurrentBatchConfig,si=0,xe=null,be=null,Ue=null,Ka=!1,Co=!1,Qo=0,PC=0;function tt(){throw Error(j(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function _f(t,e,n,r,i,s){if(si=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=t===null||t.memoizedState===null?DC:bC,t=n(r,i),Co){s=0;do{if(Co=!1,Qo=0,25<=s)throw Error(j(301));s+=1,Ue=be=null,e.updateQueue=null,va.current=LC,t=n(r,i)}while(Co)}if(va.current=Ya,e=be!==null&&be.next!==null,si=0,Ue=be=xe=null,Ka=!1,e)throw Error(j(300));return t}function vf(){var t=Qo!==0;return Qo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?xe.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function zt(){if(be===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ue===null?xe.memoizedState:Ue.next;if(e!==null)Ue=e,be=t;else{if(t===null)throw Error(j(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ue===null?xe.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Xo(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,h=s;do{var m=h.lane;if((si&m)===m)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var f={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=m,oi|=m}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=a,rn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fv(){}function Uv(t,e){var n=xe,r=zt(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,wf(Bv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Jo(9,zv.bind(null,n,r,i,e),void 0,null),We===null)throw Error(j(349));si&30||Vv(n,e,i)}return i}function Vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zv(t,e,n,r){e.value=n,e.getSnapshot=r,Wv(e)&&$v(t)}function Bv(t,e,n){return n(function(){Wv(e)&&$v(t)})}function Wv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function $v(t){var e=Un(t,1);e!==null&&tn(e,t,1,-1)}function ag(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=OC.bind(null,xe,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hv(){return zt().memoizedState}function wa(t,e,n,r){var i=dn();xe.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function ju(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&yf(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function ug(t,e){return wa(8390656,8,t,e)}function wf(t,e){return ju(2048,8,t,e)}function Gv(t,e){return ju(4,2,t,e)}function qv(t,e){return ju(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yv(t,e,n){return n=n!=null?n.concat([t]):null,ju(4,4,Kv.bind(null,e,t),n)}function Ef(){}function Qv(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xv(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jv(t,e,n){return si&21?(rn(n,e)||(n=rv(),xe.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function RC(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Qc.transition;Qc.transition={};try{t(!1),e()}finally{ce=n,Qc.transition=r}}function Zv(){return zt().memoizedState}function AC(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Lv(t,e,n,r),n!==null){var i=ht();tn(n,t,r,i),n0(n,e,r)}}function OC(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rn(a,o)){var u=e.interleaved;u===null?(i.next=i,df(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Lv(t,e,i,r),n!==null&&(i=ht(),tn(n,t,r,i),n0(n,e,r))}}function e0(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function t0(t,e){Co=Ka=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}var Ya={readContext:Vt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},DC={readContext:Vt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wa(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return wa(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AC.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:ag,useDebugValue:Ef,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=ag(!1),e=t[0];return t=RC.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=dn();if(Se){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),We===null)throw Error(j(349));si&30||Vv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ug(Bv.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=We.identifierPrefix;if(Se){var n=An,r=Rn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bC={readContext:Vt,useCallback:Qv,useContext:Vt,useEffect:wf,useImperativeHandle:Yv,useInsertionEffect:Gv,useLayoutEffect:qv,useMemo:Xv,useReducer:Xc,useRef:Hv,useState:function(){return Xc(Xo)},useDebugValue:Ef,useDeferredValue:function(t){var e=zt();return Jv(e,be.memoizedState,t)},useTransition:function(){var t=Xc(Xo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Uv,useId:Zv,unstable_isNewReconciler:!1},LC={readContext:Vt,useCallback:Qv,useContext:Vt,useEffect:wf,useImperativeHandle:Yv,useInsertionEffect:Gv,useLayoutEffect:qv,useMemo:Xv,useReducer:Jc,useRef:Hv,useState:function(){return Jc(Xo)},useDebugValue:Ef,useDeferredValue:function(t){var e=zt();return be===null?e.memoizedState=t:Jv(e,be.memoizedState,t)},useTransition:function(){var t=Jc(Xo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Uv,useId:Zv,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=vr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(tn(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=vr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(tn(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=vr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=yr(t,i,r),e!==null&&(tn(e,t,r,n),_a(e,t,r))}};function cg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,r)||!$o(i,s):!0}function r0(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=Ct(e)?ri:it.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=Ct(e)?ri:it.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fu.enqueueReplaceState(i,i.state,null),Ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e){try{var n="",r=e;do n+=uS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MC=typeof WeakMap=="function"?WeakMap:Map;function i0(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xa||(Xa=!0,cd=r),ed(t,e)},n}function s0(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QC.bind(null,t,e,n),e.then(t,t))}function fg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var jC=$n.ReactCurrentOwner,vt=!1;function ct(t,e,n,r){e.child=t===null?bv(e,null,n,r):ds(e,t.child,n,r)}function mg(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=_f(t,e,n,r,s,i),n=vf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Se&&n&&of(e),e.flags|=1,ct(t,e,r,i),e.child)}function gg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o0(t,e,s,r,i)):(t=xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function o0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($o(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return td(t,e,n,r,i)}function l0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Hi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Hi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Hi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Hi,It),It|=r;return ct(t,e,i,n),e.child}function a0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,r,i){var s=Ct(n)?ri:it.current;return s=cs(e,s),Ji(e,i),n=_f(t,e,n,r,s,i),r=vf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Se&&r&&of(e),e.flags|=1,ct(t,e,n,i),e.child)}function yg(t,e,n,r,i){if(Ct(n)){var s=!0;za(e)}else s=!1;if(Ji(e,i),e.stateNode===null)Ea(t,e),r0(e,n,r),Zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Vt(h):(h=Ct(n)?ri:it.current,h=cs(e,h));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&hg(e,o,r,h),nr=!1;var p=e.memoizedState;o.state=p,Ga(e,r,o,i),u=e.memoizedState,a!==r||p!==u||St.current||nr?(typeof m=="function"&&(Jh(e,n,m,r),u=e.memoizedState),(a=nr||cg(e,n,a,r,p,u,h))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mv(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:Gt(e.type,a),o.props=h,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=Ct(n)?ri:it.current,u=cs(e,u));var T=n.getDerivedStateFromProps;(m=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&hg(e,o,r,u),nr=!1,p=e.memoizedState,o.state=p,Ga(e,r,o,i);var N=e.memoizedState;a!==f||p!==N||St.current||nr?(typeof T=="function"&&(Jh(e,n,T,r),N=e.memoizedState),(h=nr||cg(e,n,h,r,p,N,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return nd(t,e,n,r,s,i)}function nd(t,e,n,r,i,s){a0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ng(e,n,!1),Vn(t,e,s);r=e.stateNode,jC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&ng(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?tg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tg(t,e.context,!1),pf(t,e.containerInfo)}function _g(t,e,n,r,i){return hs(),af(i),e.flags|=256,ct(t,e,n,r),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function c0(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ce,i&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zu(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=rd,t):Sf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return FC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rd,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ia(t,e,n,r){return r!==null&&af(r),ds(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zc(Error(j(422))),ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zu({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=rd,s);if(!(e.mode&1))return ia(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Zc(s,r,void 0),ia(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),tn(r,t,i,-1))}return Nf(),r=Zc(Error(j(421))),ia(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=gr(i.nextSibling),Nt=e,Se=!0,Kt=null,t!==null&&(Lt[Mt++]=Rn,Lt[Mt++]=An,Lt[Mt++]=ii,Rn=t.id,An=t.overflow,ii=e),e=Sf(e,r.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function eh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function h0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&qa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),eh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}eh(e,!0,n,null,s);break;case"together":eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UC(t,e,n){switch(e.tag){case 3:u0(e),hs();break;case 5:jv(e);break;case 1:Ct(e.type)&&za(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye($a,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?c0(t,e,n):(ye(Ce,Ce.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,l0(t,e,n)}return Vn(t,e,n)}var d0,sd,f0,p0;d0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};f0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(_n.current);var s=null;switch(n){case"input":i=kh(t,i),r=kh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Rh(t,i),r=Rh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ua)}Oh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(jo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(jo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&we("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};p0=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VC(t,e,n){var r=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Ct(e.type)&&Va(),nt(e),null;case 3:return r=e.stateNode,fs(),Ee(St),Ee(it),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(fd(Kt),Kt=null))),sd(t,e),nt(e),null;case 5:mf(e);var i=Kr(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)f0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return nt(e),null}if(t=Kr(_n.current),na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[qo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<mo.length;i++)we(mo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Nm(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Rm(r,s),we("invalid",r)}Oh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,a,t),i=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":ql(r),Pm(r,s,!0);break;case"textarea":ql(r),Am(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ua)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[qo]=r,d0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<mo.length;i++)we(mo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Nm(t,r),i=kh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),we("invalid",t);break;case"textarea":Rm(t,r),i=Rh(t,r),we("invalid",t);break;default:i=r}Oh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?H_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&W_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fo(t,u):typeof u=="number"&&Fo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&Hd(t,s,u,o))}switch(n){case"input":ql(t),Pm(t,r,!1);break;case"textarea":ql(t),Am(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)p0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Kr(Yo.current),Kr(_n.current),na(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return nt(e),null;case 13:if(Ee(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&kt!==null&&e.mode&1&&!(e.flags&128))Ov(),hs(),e.flags|=98560,s=!1;else if(s=na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[mn]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Kt!==null&&(fd(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Le===0&&(Le=3):Nf())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return fs(),sd(t,e),t===null&&Ho(e.stateNode.containerInfo),nt(e),null;case 10:return hf(e.type._context),nt(e),null;case 17:return Ct(e.type)&&Va(),nt(e),null;case 19:if(Ee(Ce),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)io(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qa(t),o!==null){for(e.flags|=128,io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>ms&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304)}else{if(!r)if(t=qa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return nt(e),null}else 2*Re()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=Ce.current,ye(Ce,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return kf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function zC(t,e){switch(lf(e),e.tag){case 1:return Ct(e.type)&&Va(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),Ee(St),Ee(it),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(Ee(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ce),null;case 4:return fs(),null;case 10:return hf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var sa=!1,rt=!1,BC=typeof WeakSet=="function"?WeakSet:Set,W=null;function $i(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function od(t,e,n){try{n()}catch(r){Te(t,e,r)}}var wg=!1;function WC(t,e){if(Wh=Ma,t=vv(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,m=0,f=t,p=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)p=f,f=T;for(;;){if(f===t)break t;if(p===n&&++h===i&&(a=o),p===s&&++m===r&&(u=o),(T=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=T}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},Ma=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var A=N.memoizedProps,D=N.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?A:Gt(e.type,A),D);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(b){Te(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return N=wg,wg=!1,N}function xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&od(e,n,s)}i=i.next}while(i!==r)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[qo],delete e[qh],delete e[IC],delete e[TC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g0(t){return t.tag===5||t.tag===3||t.tag===4}function Eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ua));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var qe=null,qt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)y0(t,e,n),n=n.sibling}function y0(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:rt||$i(n,e);case 6:var r=qe,i=qt;qe=null,Zn(t,e,n),qe=r,qt=i,qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(qt?(t=qe,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),Bo(t)):qc(qe,n.stateNode));break;case 4:r=qe,i=qt,qe=n.stateNode.containerInfo,qt=!0,Zn(t,e,n),qe=r,qt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!rt&&($i(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,e,a)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Zn(t,e,n),rt=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function Sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BC),e.forEach(function(r){var i=JC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,qt=!1;break e;case 3:qe=a.stateNode.containerInfo,qt=!0;break e;case 4:qe=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(qe===null)throw Error(j(160));y0(s,o,i),qe=null,qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_0(e,t),e=e.sibling}function _0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),cn(t),r&4){try{xo(3,t,t.return),Uu(3,t)}catch(A){Te(t,t.return,A)}try{xo(5,t,t.return)}catch(A){Te(t,t.return,A)}}break;case 1:Ht(e,t),cn(t),r&512&&n!==null&&$i(n,n.return);break;case 5:if(Ht(e,t),cn(t),r&512&&n!==null&&$i(n,n.return),t.flags&32){var i=t.stateNode;try{Fo(i,"")}catch(A){Te(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&V_(i,s),Dh(a,o);var h=Dh(a,s);for(o=0;o<u.length;o+=2){var m=u[o],f=u[o+1];m==="style"?H_(i,f):m==="dangerouslySetInnerHTML"?W_(i,f):m==="children"?Fo(i,f):Hd(i,m,f,h)}switch(a){case"input":Nh(i,s);break;case"textarea":z_(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Ki(i,!!s.multiple,T,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ki(i,!!s.multiple,s.defaultValue,!0):Ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[qo]=s}catch(A){Te(t,t.return,A)}}break;case 6:if(Ht(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Te(t,t.return,A)}}break;case 3:if(Ht(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(A){Te(t,t.return,A)}break;case 4:Ht(e,t),cn(t);break;case 13:Ht(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(If=Re())),r&4&&Sg(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(h=rt)||m,Ht(e,t),rt=h):Ht(e,t),cn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(W=t,m=t.child;m!==null;){for(f=W=m;W!==null;){switch(p=W,T=p.child,p.tag){case 0:case 11:case 14:case 15:xo(4,p,p.return);break;case 1:$i(p,p.return);var N=p.stateNode;if(typeof N.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(A){Te(r,n,A)}}break;case 5:$i(p,p.return);break;case 22:if(p.memoizedState!==null){xg(f);continue}}T!==null?(T.return=p,W=T):xg(f)}m=m.sibling}e:for(m=null,f=t;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=$_("display",o))}catch(A){Te(t,t.return,A)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=h?"":f.memoizedProps}catch(A){Te(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ht(e,t),cn(t),r&4&&Sg(t);break;case 21:break;default:Ht(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fo(i,""),r.flags&=-33);var s=Eg(t);ud(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Eg(t);ad(t,a,o);break;default:throw Error(j(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $C(t,e,n){W=t,v0(t)}function v0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sa;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||rt;a=sa;var h=rt;if(sa=o,(rt=u)&&!h)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Ig(i):u!==null?(u.return=o,W=u):Ig(i);for(;s!==null;)W=s,v0(s),s=s.sibling;W=i,sa=a,rt=h}Cg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Cg(t)}}function Cg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Bo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}rt||e.flags&512&&ld(e)}catch(p){Te(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function xg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Ig(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{ld(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{ld(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var HC=Math.ceil,Qa=$n.ReactCurrentDispatcher,Cf=$n.ReactCurrentOwner,Ut=$n.ReactCurrentBatchConfig,ie=0,We=null,Ae=null,Ye=0,It=0,Hi=Or(0),Le=0,Zo=null,oi=0,Vu=0,xf=0,Io=null,yt=null,If=0,ms=1/0,kn=null,Xa=!1,cd=null,_r=null,oa=!1,cr=null,Ja=0,To=0,hd=null,Sa=-1,Ca=0;function ht(){return ie&6?Re():Sa!==-1?Sa:Sa=Re()}function vr(t){return t.mode&1?ie&2&&Ye!==0?Ye&-Ye:NC.transition!==null?(Ca===0&&(Ca=rv()),Ca):(t=ce,t!==0||(t=window.event,t=t===void 0?16:cv(t.type)),t):1}function tn(t,e,n,r){if(50<To)throw To=0,hd=null,Error(j(185));pl(t,n,r),(!(ie&2)||t!==We)&&(t===We&&(!(ie&2)&&(Vu|=n),Le===4&&ir(t,Ye)),xt(t,r),n===1&&ie===0&&!(e.mode&1)&&(ms=Re()+500,Mu&&Dr()))}function xt(t,e){var n=t.callbackNode;NS(t,e);var r=La(t,t===We?Ye:0);if(r===0)n!==null&&bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bm(n),e===1)t.tag===0?kC(Tg.bind(null,t)):Pv(Tg.bind(null,t)),CC(function(){!(ie&6)&&Dr()}),n=null;else{switch(iv(r)){case 1:n=Qd;break;case 4:n=tv;break;case 16:n=ba;break;case 536870912:n=nv;break;default:n=ba}n=k0(n,w0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w0(t,e){if(Sa=-1,Ca=0,ie&6)throw Error(j(327));var n=t.callbackNode;if(Zi()&&t.callbackNode!==n)return null;var r=La(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Za(t,r);else{e=r;var i=ie;ie|=2;var s=S0();(We!==t||Ye!==e)&&(kn=null,ms=Re()+500,Xr(t,e));do try{KC();break}catch(a){E0(t,a)}while(!0);cf(),Qa.current=s,ie=i,Ae!==null?e=0:(We=null,Ye=0,e=Le)}if(e!==0){if(e===2&&(i=Fh(t),i!==0&&(r=i,e=dd(t,i))),e===1)throw n=Zo,Xr(t,0),ir(t,r),xt(t,Re()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!GC(i)&&(e=Za(t,r),e===2&&(s=Fh(t),s!==0&&(r=s,e=dd(t,s))),e===1))throw n=Zo,Xr(t,0),ir(t,r),xt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Br(t,yt,kn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=If+500-Re(),10<e)){if(La(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gh(Br.bind(null,t,yt,kn),e);break}Br(t,yt,kn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HC(r/1960))-r,10<r){t.timeoutHandle=Gh(Br.bind(null,t,yt,kn),r);break}Br(t,yt,kn);break;case 5:Br(t,yt,kn);break;default:throw Error(j(329))}}}return xt(t,Re()),t.callbackNode===n?w0.bind(null,t):null}function dd(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=Za(t,e),t!==2&&(e=yt,yt=n,e!==null&&fd(e)),t}function fd(t){yt===null?yt=t:yt.push.apply(yt,t)}function GC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~xf,e&=~Vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function Tg(t){if(ie&6)throw Error(j(327));Zi();var e=La(t,0);if(!(e&1))return xt(t,Re()),null;var n=Za(t,e);if(t.tag!==0&&n===2){var r=Fh(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=Zo,Xr(t,0),ir(t,e),xt(t,Re()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,yt,kn),xt(t,Re()),null}function Tf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ms=Re()+500,Mu&&Dr())}}function li(t){cr!==null&&cr.tag===0&&!(ie&6)&&Zi();var e=ie;ie|=1;var n=Ut.transition,r=ce;try{if(Ut.transition=null,ce=1,t)return t()}finally{ce=r,Ut.transition=n,ie=e,!(ie&6)&&Dr()}}function kf(){It=Hi.current,Ee(Hi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SC(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Va();break;case 3:fs(),Ee(St),Ee(it),gf();break;case 5:mf(r);break;case 4:fs();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:hf(r.type._context);break;case 22:case 23:kf()}n=n.return}if(We=t,Ae=t=wr(t.current,null),Ye=It=e,Le=0,Zo=null,xf=Vu=oi=0,yt=Io=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function E0(t,e){do{var n=Ae;try{if(cf(),va.current=Ya,Ka){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ka=!1}if(si=0,Ue=be=xe=null,Co=!1,Qo=0,Cf.current=null,n===null||n.return===null){Le=1,Zo=e,Ae=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ye,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var T=fg(o);if(T!==null){T.flags&=-257,pg(T,o,a,s,e),T.mode&1&&dg(s,h,e),e=T,u=h;var N=e.updateQueue;if(N===null){var A=new Set;A.add(u),e.updateQueue=A}else N.add(u);break e}else{if(!(e&1)){dg(s,h,e),Nf();break e}u=Error(j(426))}}else if(Se&&a.mode&1){var D=fg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),pg(D,o,a,s,e),af(ps(u,a));break e}}s=u=ps(u,a),Le!==4&&(Le=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=i0(s,u,e);og(s,x);break e;case 1:a=u;var v=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(_r===null||!_r.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=s0(s,a,e);og(s,b);break e}}s=s.return}while(s!==null)}x0(n)}catch(z){e=z,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function S0(){var t=Qa.current;return Qa.current=Ya,t===null?Ya:t}function Nf(){(Le===0||Le===3||Le===2)&&(Le=4),We===null||!(oi&268435455)&&!(Vu&268435455)||ir(We,Ye)}function Za(t,e){var n=ie;ie|=2;var r=S0();(We!==t||Ye!==e)&&(kn=null,Xr(t,e));do try{qC();break}catch(i){E0(t,i)}while(!0);if(cf(),ie=n,Qa.current=r,Ae!==null)throw Error(j(261));return We=null,Ye=0,Le}function qC(){for(;Ae!==null;)C0(Ae)}function KC(){for(;Ae!==null&&!vS();)C0(Ae)}function C0(t){var e=T0(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?x0(t):Ae=e,Cf.current=null}function x0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zC(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ae=null;return}}else if(n=VC(n,e,It),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Le===0&&(Le=5)}function Br(t,e,n){var r=ce,i=Ut.transition;try{Ut.transition=null,ce=1,YC(t,e,n,r)}finally{Ut.transition=i,ce=r}return null}function YC(t,e,n,r){do Zi();while(cr!==null);if(ie&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PS(t,s),t===We&&(Ae=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,k0(ba,function(){return Zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=ce;ce=1;var a=ie;ie|=4,Cf.current=null,WC(t,n),_0(n,t),mC($h),Ma=!!Wh,$h=Wh=null,t.current=n,$C(n),wS(),ie=a,ce=o,Ut.transition=s}else t.current=n;if(oa&&(oa=!1,cr=t,Ja=i),s=t.pendingLanes,s===0&&(_r=null),CS(n.stateNode),xt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xa)throw Xa=!1,t=cd,cd=null,t;return Ja&1&&t.tag!==0&&Zi(),s=t.pendingLanes,s&1?t===hd?To++:(To=0,hd=t):To=0,Dr(),null}function Zi(){if(cr!==null){var t=iv(Ja),e=Ut.transition,n=ce;try{if(Ut.transition=null,ce=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Ja=0,ie&6)throw Error(j(331));var i=ie;for(ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(W=h;W!==null;){var m=W;switch(m.tag){case 0:case 11:case 15:xo(8,m,s)}var f=m.child;if(f!==null)f.return=m,W=f;else for(;W!==null;){m=W;var p=m.sibling,T=m.return;if(m0(m),m===h){W=null;break}if(p!==null){p.return=T,W=p;break}W=T}}}var N=s.alternate;if(N!==null){var A=N.child;if(A!==null){N.child=null;do{var D=A.sibling;A.sibling=null,A=D}while(A!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,W=x;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,W=k;else e:for(o=v;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uu(9,a)}}catch(z){Te(a,a.return,z)}if(a===o){W=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,W=b;break e}W=a.return}}if(ie=i,Dr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Au,t)}catch{}r=!0}return r}finally{ce=n,Ut.transition=e}}return!1}function kg(t,e,n){e=ps(n,e),e=i0(t,e,1),t=yr(t,e,1),e=ht(),t!==null&&(pl(t,1,e),xt(t,e))}function Te(t,e,n){if(t.tag===3)kg(t,t,n);else for(;e!==null;){if(e.tag===3){kg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=ps(n,t),t=s0(e,t,1),e=yr(e,t,1),t=ht(),e!==null&&(pl(e,1,t),xt(e,t));break}}e=e.return}}function QC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(Le===4||Le===3&&(Ye&130023424)===Ye&&500>Re()-If?Xr(t,0):xf|=n),xt(t,e)}function I0(t,e){e===0&&(t.mode&1?(e=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):e=1);var n=ht();t=Un(t,e),t!==null&&(pl(t,e,n),xt(t,n))}function XC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I0(t,n)}function JC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),I0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,UC(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Se&&e.flags&1048576&&Rv(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ea(t,e),t=e.pendingProps;var i=cs(e,it.current);Ji(e,n),i=_f(null,e,r,t,i,n);var s=vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=Fu,e.stateNode=i,i._reactInternals=e,Zh(e,r,t,n),e=nd(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&of(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ex(r),t=Gt(r,t),i){case 0:e=td(null,e,r,t,n);break e;case 1:e=yg(null,e,r,t,n);break e;case 11:e=mg(null,e,r,t,n);break e;case 14:e=gg(null,e,r,Gt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),td(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),yg(t,e,r,i,n);case 3:e:{if(u0(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mv(t,e),Ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ps(Error(j(423)),e),e=_g(t,e,r,n,i);break e}else if(r!==i){i=ps(Error(j(424)),e),e=_g(t,e,r,n,i);break e}else for(kt=gr(e.stateNode.containerInfo.firstChild),Nt=e,Se=!0,Kt=null,n=bv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=Vn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return jv(e),t===null&&Qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hh(r,i)?o=null:s!==null&&Hh(r,s)&&(e.flags|=32),a0(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return c0(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ds(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),mg(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye($a,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!St.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?u.next=u:(u.next=m.next,m.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Vt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),gg(t,e,r,i,n);case 15:return o0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Ea(t,e),e.tag=1,Ct(r)?(t=!0,za(e)):t=!1,Ji(e,n),r0(e,r,i),Zh(e,r,i,n),nd(null,e,r,!0,t,n);case 19:return h0(t,e,n);case 22:return l0(t,e,n)}throw Error(j(156,e.tag))};function k0(t,e){return ev(t,e)}function ZC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new ZC(t,e,n,r)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ex(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Kd)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Li:return Jr(n.children,i,s,e);case Gd:o=8,i|=8;break;case Ch:return t=jt(12,n,e,i|2),t.elementType=Ch,t.lanes=s,t;case xh:return t=jt(13,n,e,i),t.elementType=xh,t.lanes=s,t;case Ih:return t=jt(19,n,e,i),t.elementType=Ih,t.lanes=s,t;case j_:return zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case M_:o=9;break e;case qd:o=11;break e;case Kd:o=14;break e;case tr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function zu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=j_,t.lanes=n,t.stateNode={isHidden:!1},t}function th(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function nh(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,r,i,s,o,a,u){return t=new tx(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function nx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N0(t){if(!t)return Tr;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ct(n))return Nv(t,n,e)}return e}function P0(t,e,n,r,i,s,o,a,u){return t=Rf(n,r,!0,t,i,s,o,a,u),t.context=N0(null),n=t.current,r=ht(),i=vr(n),s=Ln(r,i),s.callback=e??null,yr(n,s,i),t.current.lanes=i,pl(t,i,r),xt(t,r),t}function Bu(t,e,n,r){var i=e.current,s=ht(),o=vr(i);return n=N0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(i,e,o),t!==null&&(tn(t,i,o,s),_a(t,i,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Af(t,e){Ng(t,e),(t=t.alternate)&&Ng(t,e)}function rx(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Wu.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Bu(t,e,null,null)};Wu.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;li(function(){Bu(null,t,null,null)}),e[Fn]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&uv(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function ix(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=eu(o);s.call(h)}}var o=P0(e,r,t,0,null,!1,!1,"",Pg);return t._reactRootContainer=o,t[Fn]=o.current,Ho(t.nodeType===8?t.parentNode:t),li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=eu(u);a.call(h)}}var u=Rf(t,0,!1,null,null,!1,!1,"",Pg);return t._reactRootContainer=u,t[Fn]=u.current,Ho(t.nodeType===8?t.parentNode:t),li(function(){Bu(e,u,n,r)}),u}function Hu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=eu(o);a.call(u)}}Bu(e,o,t,i)}else o=ix(n,e,t,i,r);return eu(o)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Xd(e,n|1),xt(e,Re()),!(ie&6)&&(ms=Re()+500,Dr()))}break;case 13:li(function(){var r=Un(t,1);if(r!==null){var i=ht();tn(r,t,1,i)}}),Af(t,1)}};Jd=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=ht();tn(e,t,134217728,n)}Af(t,134217728)}};ov=function(t){if(t.tag===13){var e=vr(t),n=Un(t,e);if(n!==null){var r=ht();tn(n,t,e,r)}Af(t,e)}};lv=function(){return ce};av=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Lh=function(t,e,n){switch(e){case"input":if(Nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lu(r);if(!i)throw Error(j(90));U_(r),Nh(r,i)}}}break;case"textarea":z_(t,n);break;case"select":e=n.value,e!=null&&Ki(t,!!n.multiple,e,!1)}};K_=Tf;Y_=li;var sx={usingClientEntryPoint:!1,Events:[gl,Ui,Lu,G_,q_,Tf]},so={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ox={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J_(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Au=la.inject(ox),yn=la}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(j(200));return nx(t,e,null,n)};Rt.createRoot=function(t,e){if(!Df(t))throw Error(j(299));var n=!1,r="",i=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Ho(t.nodeType===8?t.parentNode:t),new Of(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=J_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return li(t)};Rt.hydrate=function(t,e,n){if(!$u(e))throw Error(j(200));return Hu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=R0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wu(e)};Rt.render=function(t,e,n){if(!$u(e))throw Error(j(200));return Hu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!$u(t))throw Error(j(40));return t._reactRootContainer?(li(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Tf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$u(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Hu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function A0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A0)}catch(t){console.error(t)}}A0(),A_.exports=Rt;var lx=A_.exports,Rg=lx;Eh.createRoot=Rg.createRoot,Eh.hydrateRoot=Rg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},el.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const Ag="popstate";function ax(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:D0(i)}return cx(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function O0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ux(){return Math.random().toString(36).substr(2,8)}function Og(t,e){return{usr:t.state,key:t.key,idx:e}}function pd(t,e,n,r){return n===void 0&&(n=null),el({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||ux()})}function D0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=hr.Pop,u=null,h=m();h==null&&(h=0,o.replaceState(el({},o.state,{idx:h}),""));function m(){return(o.state||{idx:null}).idx}function f(){a=hr.Pop;let D=m(),x=D==null?null:D-h;h=D,u&&u({action:a,location:A.location,delta:x})}function p(D,x){a=hr.Push;let v=pd(A.location,D,x);h=m()+1;let k=Og(v,h),b=A.createHref(v);try{o.pushState(k,"",b)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(b)}s&&u&&u({action:a,location:A.location,delta:1})}function T(D,x){a=hr.Replace;let v=pd(A.location,D,x);h=m();let k=Og(v,h),b=A.createHref(v);o.replaceState(k,"",b),s&&u&&u({action:a,location:A.location,delta:0})}function N(D){let x=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof D=="string"?D:D0(D);return v=v.replace(/ $/,"%20"),Me(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let A={get action(){return a},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ag,f),u=D,()=>{i.removeEventListener(Ag,f),u=null}},createHref(D){return e(i,D)},createURL:N,encodeLocation(D){let x=N(D);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:T,go(D){return o.go(D)}};return A}var Dg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dg||(Dg={}));function hx(t,e,n){return n===void 0&&(n="/"),dx(t,e,n)}function dx(t,e,n,r){let i=typeof e=="string"?Is(e):e,s=M0(i.pathname||"/",n);if(s==null)return null;let o=b0(t);fx(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let h=Ix(s);a=Sx(o[u],h)}return a}function b0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Me(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Zr([r,u.relativePath]),m=n.concat(u);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),b0(s.children,e,m,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:wx(h,s.index),routesMeta:m})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of L0(s.path))i(s,o,u)}),e}function L0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=L0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function fx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ex(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const px=/^:[\w-]+$/,mx=3,gx=2,yx=1,_x=10,vx=-2,bg=t=>t==="*";function wx(t,e){let n=t.split("/"),r=n.length;return n.some(bg)&&(r+=vx),e&&(r+=gx),n.filter(i=>!bg(i)).reduce((i,s)=>i+(px.test(s)?mx:s===""?yx:_x),r)}function Ex(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Sx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],h=a===r.length-1,m=s==="/"?e:e.slice(s.length)||"/",f=Cx({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},m),p=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Zr([s,f.pathname]),pathnameBase:Ax(Zr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Zr([s,f.pathnameBase]))}return o}function Cx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,m,f)=>{let{paramName:p,isOptional:T}=m;if(p==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const N=a[f];return T&&!N?h[p]=void 0:h[p]=(N||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function xx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),O0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ix(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return O0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function M0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Tx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t;return{pathname:n?n.startsWith("/")?n:kx(n,e):e,search:Ox(r),hash:Dx(i)}}function kx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Px(t,e){let n=Nx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rx(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=el({},t),Me(!i.pathname||!i.pathname.includes("?"),rh("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),rh("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),rh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=Tx(i,a),h=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||m)&&(u.pathname+="/"),u}const Zr=t=>t.join("/").replace(/\/\/+/g,"/"),Ax=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ox=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Dx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const j0=["post","put","patch","delete"];new Set(j0);const Lx=["get",...j0];new Set(Lx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tl.apply(this,arguments)}const bf=L.createContext(null),Mx=L.createContext(null),Gu=L.createContext(null),qu=L.createContext(null),vi=L.createContext({outlet:null,matches:[],isDataRoute:!1}),F0=L.createContext(null);function Ku(){return L.useContext(qu)!=null}function U0(){return Ku()||Me(!1),L.useContext(qu).location}function V0(t){L.useContext(Gu).static||L.useLayoutEffect(t)}function wi(){let{isDataRoute:t}=L.useContext(vi);return t?Qx():jx()}function jx(){Ku()||Me(!1);let t=L.useContext(bf),{basename:e,future:n,navigator:r}=L.useContext(Gu),{matches:i}=L.useContext(vi),{pathname:s}=U0(),o=JSON.stringify(Px(i,n.v7_relativeSplatPath)),a=L.useRef(!1);return V0(()=>{a.current=!0}),L.useCallback(function(h,m){if(m===void 0&&(m={}),!a.current)return;if(typeof h=="number"){r.go(h);return}let f=Rx(h,JSON.parse(o),s,m.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Zr([e,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[e,r,o,s,t])}function Fx(){let{matches:t}=L.useContext(vi),e=t[t.length-1];return e?e.params:{}}function Ux(t,e){return Vx(t,e)}function Vx(t,e,n,r){Ku()||Me(!1);let{navigator:i}=L.useContext(Gu),{matches:s}=L.useContext(vi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=U0(),m;if(e){var f;let D=typeof e=="string"?Is(e):e;u==="/"||(f=D.pathname)!=null&&f.startsWith(u)||Me(!1),m=D}else m=h;let p=m.pathname||"/",T=p;if(u!=="/"){let D=u.replace(/^\//,"").split("/");T="/"+p.replace(/^\//,"").split("/").slice(D.length).join("/")}let N=hx(t,{pathname:T}),A=Hx(N&&N.map(D=>Object.assign({},D,{params:Object.assign({},a,D.params),pathname:Zr([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:Zr([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&A?L.createElement(qu.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:hr.Pop}},A):A}function zx(){let t=Yx(),e=bx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const Bx=L.createElement(zx,null);class Wx extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(vi.Provider,{value:this.props.routeContext},L.createElement(F0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $x(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(bf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(vi.Provider,{value:e},r)}function Hx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);m>=0||Me(!1),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let f=o[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(h=m),f.route.id){let{loaderData:p,errors:T}=n,N=f.route.loader&&p[f.route.id]===void 0&&(!T||T[f.route.id]===void 0);if(f.route.lazy||N){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((m,f,p)=>{let T,N=!1,A=null,D=null;n&&(T=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||Bx,u&&(h<0&&p===0?(Xx("route-fallback"),N=!0,D=null):h===p&&(N=!0,D=f.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,p+1)),v=()=>{let k;return T?k=A:N?k=D:f.route.Component?k=L.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=m,L.createElement($x,{match:f,routeContext:{outlet:m,matches:x,isDataRoute:n!=null},children:k})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?L.createElement(Wx,{location:n.location,revalidation:n.revalidation,component:A,error:T,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):v()},null)}var z0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(z0||{}),B0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(B0||{});function Gx(t){let e=L.useContext(bf);return e||Me(!1),e}function qx(t){let e=L.useContext(Mx);return e||Me(!1),e}function Kx(t){let e=L.useContext(vi);return e||Me(!1),e}function W0(t){let e=Kx(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function Yx(){var t;let e=L.useContext(F0),n=qx(),r=W0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Qx(){let{router:t}=Gx(z0.UseNavigateStable),e=W0(B0.UseNavigateStable),n=L.useRef(!1);return V0(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,tl({fromRouteId:e},s)))},[t,e])}const Lg={};function Xx(t,e,n){Lg[t]||(Lg[t]=!0)}function Jx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hn(t){Me(!1)}function Zx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1,future:a}=t;Ku()&&Me(!1);let u=e.replace(/^\/*/,"/"),h=L.useMemo(()=>({basename:u,navigator:s,static:o,future:tl({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:m="/",search:f="",hash:p="",state:T=null,key:N="default"}=r,A=L.useMemo(()=>{let D=M0(m,u);return D==null?null:{location:{pathname:D,search:f,hash:p,state:T,key:N},navigationType:i}},[u,m,f,p,T,N,i]);return A==null?null:L.createElement(Gu.Provider,{value:h},L.createElement(qu.Provider,{children:n,value:A}))}function eI(t){let{children:e,location:n}=t;return Ux(md(e),n)}new Promise(()=>{});function md(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,md(r.props.children,s));return}r.type!==hn&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=md(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const tI="6";try{window.__reactRouterVersion=tI}catch{}const nI="startTransition",Mg=QE[nI];function rI(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=ax({window:i,v5Compat:!0}));let o=s.current,[a,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},m=L.useCallback(f=>{h&&Mg?Mg(()=>u(f)):u(f)},[u,h]);return L.useLayoutEffect(()=>o.listen(m),[o,m]),L.useEffect(()=>Jx(r),[r]),L.createElement(Zx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var jg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(jg||(jg={}));var Fg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fg||(Fg={}));/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>{const n=L.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:u,...h},m)=>L.createElement("svg",{ref:m,...iI,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${sI(t)}`,a].join(" "),...h},[...e.map(([f,p])=>L.createElement(f,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=st("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=st("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=st("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=st("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=st("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=st("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=st("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=st("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=st("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=st("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=st("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=st("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=st("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=st("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=st("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=st("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),mI=()=>{};var $g={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(t,e){if(!t)throw Ts(e)},Ts=function(t){return new Error("Firebase Database ("+H0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,m=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|h>>6,T=h&63;u||(T=64,o||(p=64)),r.push(n[m],n[f],n[p],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||f==null)throw new yI;const p=s<<2|a>>4;if(r.push(p),h!==64){const T=a<<4&240|h>>2;if(r.push(T),f!==64){const N=h<<6&192|f;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q0=function(t){const e=G0(t);return Lf.encodeByteArray(e,!0)},tu=function(t){return q0(t).replace(/\./g,"")},nu=function(t){try{return Lf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return K0(void 0,t)}function K0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vI(n)||(t[n]=K0(t[n],e[n]));return t}function vI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=()=>wI().__FIREBASE_DEFAULTS__,SI=()=>{if(typeof process>"u"||typeof $g>"u")return;const t=$g.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nu(t[1]);return e&&JSON.parse(e)},Mf=()=>{try{return mI()||EI()||SI()||CI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y0=t=>{var e,n;return(n=(e=Mf())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},xI=t=>{const e=Y0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Q0=()=>{var t;return(t=Mf())==null?void 0:t.config},X0=t=>{var e;return(e=Mf())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function J0(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[tu(JSON.stringify(n)),tu(JSON.stringify(o)),""].join(".")}const ko={};function TI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ko))ko[e]?t.emulator.push(e):t.prod.push(e);return t}function kI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Hg=!1;function Z0(t,e){if(typeof window>"u"||typeof document>"u"||!ks(window.location.host)||ko[t]===e||ko[t]||Hg)return;ko[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=TI().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,T){p.setAttribute("width","24"),p.setAttribute("id",T),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Hg=!0,o()},p}function m(p,T){p.setAttribute("id",T),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=kI(r),T=n("text"),N=document.getElementById(T)||document.createElement("span"),A=n("learnmore"),D=document.getElementById(A)||document.createElement("a"),x=n("preprendIcon"),v=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const k=p.element;a(k),m(D,A);const b=h();u(v,x),k.append(v,N,D,b),document.body.appendChild(k)}s?(N.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function NI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ew(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AI(){return H0.NODE_ADMIN===!0}function OI(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vl.prototype.create)}}class vl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?LI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,r)}}function LI(t,e){return t.replace(MI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return JSON.parse(t)}function Be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=nl(nu(s[0])||""),n=nl(nu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jI=function(t){const e=tw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FI=function(t){const e=tw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ru(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ai(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gg(s)&&Gg(o)){if(!ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,m;for(let f=0;f<80;f++){f<40?f<20?(h=a^s&(o^a),m=1518500249):(h=s^o^a,m=1859775393):f<60?(h=s&o|a&(s|o),m=2400959708):(h=s^o^a,m=3395469782);const p=(i<<5|i>>>27)+h+u+m+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function VI(t,e){const n=new zI(t,e);return n.subscribe.bind(n)}class zI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ih),i.error===void 0&&(i.error=ih),i.complete===void 0&&(i.complete=ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}function Yu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _l;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GI(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HI(t){return t===Wr?void 0:t}function GI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const KI={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},YI=ue.INFO,QI={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xu{constructor(e){this.name=e,this._logLevel=YI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const JI=(t,e)=>e.some(n=>t instanceof n);let qg,Kg;function ZI(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eT(){return Kg||(Kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,yd=new WeakMap,rw=new WeakMap,sh=new WeakMap,Ff=new WeakMap;function tT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nw.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function nT(t){if(yd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yd.set(t,e)}let _d={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rT(t){_d=t(_d)}function iT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return rw.set(r,e.sort?e.sort():[e]),Er(r)}:eT().includes(t)?function(...e){return t.apply(oh(this),e),Er(nw.get(this))}:function(...e){return Er(t.apply(oh(this),e))}}function sT(t){return typeof t=="function"?iT(t):(t instanceof IDBTransaction&&nT(t),JI(t,ZI())?new Proxy(t,_d):t)}function Er(t){if(t instanceof IDBRequest)return tT(t);if(sh.has(t))return sh.get(t);const e=sT(t);return e!==t&&(sh.set(t,e),Ff.set(e,t)),e}const oh=t=>Ff.get(t);function oT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const lT=["get","getKey","getAll","getAllKeys","count"],aT=["put","add","delete","clear"],lh=new Map;function Yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lT.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return lh.set(e,s),s}rT(t=>({...t,get:(e,n,r)=>Yg(e,n)||t.get(e,n,r),has:(e,n)=>!!Yg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vd="@firebase/app",Qg="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Xu("@firebase/app"),hT="@firebase/app-compat",dT="@firebase/analytics-compat",fT="@firebase/analytics",pT="@firebase/app-check-compat",mT="@firebase/app-check",gT="@firebase/auth",yT="@firebase/auth-compat",_T="@firebase/database",vT="@firebase/data-connect",wT="@firebase/database-compat",ET="@firebase/functions",ST="@firebase/functions-compat",CT="@firebase/installations",xT="@firebase/installations-compat",IT="@firebase/messaging",TT="@firebase/messaging-compat",kT="@firebase/performance",NT="@firebase/performance-compat",PT="@firebase/remote-config",RT="@firebase/remote-config-compat",AT="@firebase/storage",OT="@firebase/storage-compat",DT="@firebase/firestore",bT="@firebase/ai",LT="@firebase/firestore-compat",MT="firebase",jT="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="[DEFAULT]",FT={[vd]:"fire-core",[hT]:"fire-core-compat",[fT]:"fire-analytics",[dT]:"fire-analytics-compat",[mT]:"fire-app-check",[pT]:"fire-app-check-compat",[gT]:"fire-auth",[yT]:"fire-auth-compat",[_T]:"fire-rtdb",[vT]:"fire-data-connect",[wT]:"fire-rtdb-compat",[ET]:"fire-fn",[ST]:"fire-fn-compat",[CT]:"fire-iid",[xT]:"fire-iid-compat",[IT]:"fire-fcm",[TT]:"fire-fcm-compat",[kT]:"fire-perf",[NT]:"fire-perf-compat",[PT]:"fire-rc",[RT]:"fire-rc-compat",[AT]:"fire-gcs",[OT]:"fire-gcs-compat",[DT]:"fire-fst",[LT]:"fire-fst-compat",[bT]:"fire-vertex","fire-js":"fire-js",[MT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map,UT=new Map,Ed=new Map;function Xg(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Ed.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,t);for(const n of iu.values())Xg(n,t);for(const n of UT.values())Xg(n,t);return!0}function Uf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new vl("app","Firebase",VT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=jT;function iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:wd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=Q0()),!n)throw Sr.create("no-options");const s=iu.get(i);if(s){if(ai(n,s.options)&&ai(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new qI(i);for(const u of Ed.values())o.addComponent(u);const a=new zT(n,r,o);return iu.set(i,a),a}function sw(t=wd){const e=iu.get(t);if(!e&&t===wd&&Q0())return iw();if(!e)throw Sr.create("no-app",{appName:t});return e}function vn(t,e,n){let r=FT[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(o.join(" "));return}ui(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="firebase-heartbeat-database",WT=1,rl="firebase-heartbeat-store";let ah=null;function ow(){return ah||(ah=oT(BT,WT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function $T(t){try{const n=(await ow()).transaction(rl),r=await n.objectStore(rl).get(lw(t));return await n.done,r}catch(e){if(e instanceof Hn)zn.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Jg(t,e){try{const r=(await ow()).transaction(rl,"readwrite");await r.objectStore(rl).put(e,lw(t)),await r.done}catch(n){if(n instanceof Hn)zn.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function lw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=1024,GT=30;class qT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>GT){const o=QT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zg(),{heartbeatsToSend:r,unsentEntries:i}=KT(this._heartbeatsCache.heartbeats),s=tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zn.warn(n),""}}}function Zg(){return new Date().toISOString().substring(0,10)}function KT(t,e=HT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ey(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OI()?DI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ey(t){return tu(JSON.stringify({version:2,heartbeats:t})).length}function QT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){ui(new kr("platform-logger",e=>new uT(e),"PRIVATE")),ui(new kr("heartbeat",e=>new qT(e),"PRIVATE")),vn(vd,Qg,t),vn(vd,Qg,"esm2020"),vn("fire-js","")}XT("");function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JT=aw,uw=new vl("auth","Firebase",aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Xu("@firebase/auth");function ZT(t,...e){su.logLevel<=ue.WARN&&su.warn(`Auth (${Ei}): ${t}`,...e)}function Ia(t,...e){su.logLevel<=ue.ERROR&&su.error(`Auth (${Ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw Vf(t,...e)}function wn(t,...e){return Vf(t,...e)}function cw(t,e,n){const r={...JT(),[e]:n};return new vl("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return cw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uw.create(t,...e)}function G(t,e,...n){if(!t)throw Vf(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function Bn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ek(){return ty()==="http:"||ty()==="https:"}function ty(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ek()||PI()||"connection"in navigator)?navigator.onLine:!0}function nk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=jf()||ew()}get(){return tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sk=new wl(3e4,6e4);function Gn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function qn(t,e,n,r,i={}){return dw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ns({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return NI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ks(t.emulatorConfig.host)&&(h.credentials="include"),hw.fetch()(await fw(t,t.config.apiHost,n,a),h)})}async function dw(t,e,n){t._canInitEmulator=!1;const r={...rk,...e};try{const i=new lk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw aa(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw cw(t,m,h);sn(t,m)}}catch(i){if(i instanceof Hn)throw i;sn(t,"network-request-failed",{message:String(i)})}}async function El(t,e,n,r,i={}){const s=await qn(t,e,n,r,i);return"mfaPendingCredential"in s&&sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function fw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?zf(t.config,i):`${t.config.apiScheme}://${i}`;return ik.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ok(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),sk.get())})}}function aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}function ny(t){return t!==void 0&&t.enterprise!==void 0}class ak{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ok(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uk(t,e){return qn(t,"GET","/v2/recaptchaConfig",Gn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function lu(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hk(t,e=!1){const n=ot(t),r=await n.getIdToken(e),i=Bf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:No(uh(i.auth_time)),issuedAtTime:No(uh(i.iat)),expirationTime:No(uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uh(t){return Number(t)*1e3}function Bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=nu(n);return i?JSON.parse(i):(Ia("Failed to decode base64 JWT payload"),null)}catch(i){return Ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ry(t){const e=Bf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&dk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(t){var f;const e=t.auth,n=await t.getIdToken(),r=await il(t,lu(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?pw(i.providerUserInfo):[],o=mk(t.providerData,s),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=a?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Sd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function pk(t){const e=ot(t);await au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e){const n=await dw(t,{},async()=>{const r=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await fw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&ks(t.emulatorConfig.host)&&(u.credentials="include"),hw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yk(t,e){return qn(t,"POST","/v2/accounts:revokeToken",Gn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=ry(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new es;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await il(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hk(this,e)}reload(){return pk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await il(this,ck(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:T,providerData:N,stsTokenManager:A}=n;G(f&&A,e,"internal-error");const D=es.fromJSON(this.name,A);G(typeof f=="string",e,"internal-error"),er(r,e.name),er(i,e.name),G(typeof p=="boolean",e,"internal-error"),G(typeof T=="boolean",e,"internal-error"),er(s,e.name),er(o,e.name),er(a,e.name),er(u,e.name),er(h,e.name),er(m,e.name);const x=new Xt({uid:f,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:D,createdAt:h,lastLoginAt:m});return N&&Array.isArray(N)&&(x.providerData=N.map(v=>({...v}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new es;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await au(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new es;a.updateFromIdToken(r);const u=new Xt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Map;function Dn(t){Bn(t instanceof Function,"Expected a class definition");let e=iy.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mw.type="NONE";const sy=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ta(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ta("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lu(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(Dn(sy),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Dn(sy);const o=Ta(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const m=await h._get(o);if(m){let f;if(typeof m=="string"){const p=await lu(e,{idToken:m}).catch(()=>{});if(!p)break;f=await Xt._fromGetAccountInfoResponse(e,p,m)}else f=Xt._fromJSON(e,m);h!==s&&(a=f),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ts(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(Sw(e))return"Webos";if(yw(e))return"Safari";if((e.includes("chrome/")||_w(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gw(t=ft()){return/firefox\//i.test(t)}function yw(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _w(t=ft()){return/crios\//i.test(t)}function vw(t=ft()){return/iemobile/i.test(t)}function ww(t=ft()){return/android/i.test(t)}function Ew(t=ft()){return/blackberry/i.test(t)}function Sw(t=ft()){return/webos/i.test(t)}function Wf(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _k(t=ft()){var e;return Wf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function vk(){return RI()&&document.documentMode===10}function Cw(t=ft()){return Wf(t)||ww(t)||Sw(t)||Ew(t)||/windows phone/i.test(t)||vw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e=[]){let n;switch(t){case"Browser":n=oy(ft());break;case"Worker":n=`${oy(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e={}){return qn(t,"GET","/v2/passwordPolicy",Gn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=6;class Ck{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Sk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ly(this),this.idTokenSubscription=new ly(this),this.beforeStateQueue=new wk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lu(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(En(this));const n=e?ot(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ek(this),n=new Ck(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ZT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function br(t){return ot(t)}class ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ik(t){Ju=t}function Iw(t){return Ju.loadJS(t)}function Tk(){return Ju.recaptchaEnterpriseScript}function kk(){return Ju.gapiScript}function Nk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Pk{constructor(){this.enterprise=new Rk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Rk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ak="recaptcha-enterprise",Tw="NO_RECAPTCHA";class Ok{constructor(e){this.type=Ak,this.auth=br(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{uk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new ak(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;ny(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Tw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Pk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ny(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Tk();u.length!==0&&(u+=a),Iw(u).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function ay(t,e,n,r=!1,i=!1){const s=new Ok(t);let o;if(i)o=Tw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function uu(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ay(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ay(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t,e){const n=Uf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ai(s,e??{}))return i;sn(i,"already-initialized")}return n.initialize({options:e})}function bk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lk(t,e,n){const r=br(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kw(e),{host:o,port:a}=Mk(e),u=a===null?"":`:${a}`,h={url:`${s}//${o}${u}/`},m=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(ai(h,r.config.emulator)&&ai(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,ks(o)?(J0(`${s}//${o}${u}`),Z0("Auth",!0)):jk()}function kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Mk(t){const e=kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uy(o)}}}function uy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function Fk(t,e){return qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e){return El(t,"POST","/v1/accounts:signInWithPassword",Gn(t,e))}async function Vk(t,e){return qn(t,"POST","/v1/accounts:sendOobCode",Gn(t,e))}async function zk(t,e){return Vk(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Gn(t,e))}async function Wk(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Gn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends $f{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,n,"signInWithPassword",Uk);case"emailLink":return Bk(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,r,"signUpPassword",Fk);case"emailLink":return Wk(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return El(t,"POST","/v1/accounts:signInWithIdp",Gn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="http://localhost";class ci extends $f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:$k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gk(t){const e=go(yo(t)).link,n=e?go(yo(e)).deep_link_id:null,r=go(yo(t)).deep_link_id;return(r?go(yo(r)).link:null)||r||n||e||t}class Zu{constructor(e){const n=go(yo(e)),r=n.apiKey??null,i=n.oobCode??null,s=Hk(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Gk(e);try{return new Zu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.providerId=Si.PROVIDER_ID}static credential(e,n){return sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zu.parseLink(n);return G(r,"argument-error"),sl._fromEmailAndCode(e,r.code,r.tenantId)}}Si.PROVIDER_ID="password";Si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Sl{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Sl{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Sl{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e){return El(t,"POST","/v1/accounts:signUp",Gn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xt._fromIdTokenResponse(e,r,i),o=cy(r);return new hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cy(r);return new hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends Hn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cu(e,n,r,i)}}function Pw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cu._fromErrorAndOperation(t,s,e,r):s})}async function Kk(t,e,n=!1){const r=await il(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const s=await il(t,Pw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Bf(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e,n=!1){if(_t(t.app))return Promise.reject(En(t));const r="signIn",i=await Pw(t,r,e),s=await hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Aw(t,e){return Rw(br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t,e,n){var r;G(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),G(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),G(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(G(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(G(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(t){const e=br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xk(t,e,n){if(_t(t.app))return Promise.reject(En(t));const r=br(t),o=await uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ow(t),u}),a=await hi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Jk(t,e,n){return _t(t.app)?Promise.reject(En(t)):Aw(ot(t),Si.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ow(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e,n){const r=br(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){G(a.handleCodeInApp,r,"argument-error"),a&&Qk(r,o,a)}s(i,n),await uu(r,i,"getOobCode",zk)}function eN(t,e){const n=Zu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function hy(t,e,n){if(_t(t.app))return Promise.reject(En(t));const r=ot(t),i=Si.credentialWithLink(e,n||ou());return G(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Aw(r,i)}function tN(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function nN(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function rN(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function iN(t){return ot(t).signOut()}const hu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hu,"1"),this.storage.removeItem(hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=1e3,oN=10;class bw extends Dw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bw.type="LOCAL";const lN=bw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw extends Dw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lw.type="SESSION";const Mw=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),u=await aN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const h=Hf("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(m),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function cN(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function hN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function fN(){return jw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="firebaseLocalStorageDb",pN=1,du="firebaseLocalStorage",Uw="fbase_key";class Cl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([du],e?"readwrite":"readonly").objectStore(du)}function mN(){const t=indexedDB.deleteDatabase(Fw);return new Cl(t).toPromise()}function Cd(){const t=indexedDB.open(Fw,pN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(du,{keyPath:Uw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(du)?e(r):(r.close(),await mN(),e(await Cd()))})})}async function dy(t,e,n){const r=tc(t,!0).put({[Uw]:e,value:n});return new Cl(r).toPromise()}async function gN(t,e){const n=tc(t,!1).get(e),r=await new Cl(n).toPromise();return r===void 0?null:r.value}function fy(t,e){const n=tc(t,!0).delete(e);return new Cl(n).toPromise()}const yN=800,_N=3;class Vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_N)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(fN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await hN(),!this.activeServiceWorker)return;this.sender=new uN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await dy(e,hu,"1"),await fy(e,hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tc(i,!1).getAll();return new Cl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vw.type="LOCAL";const vN=Vw;new wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t,e){return e?Dn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends $f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EN(t){return Rw(t.auth,new Gf(t),t.bypassAuthState)}function SN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Yk(n,new Gf(t),t.bypassAuthState)}async function CN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Kk(n,new Gf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EN;case"linkViaPopup":case"linkViaRedirect":return CN;case"reauthViaPopup":case"reauthViaRedirect":return SN;default:sn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=new wl(2e3,1e4);class Gi extends zw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xN.get())};e()}}Gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="pendingRedirect",ka=new Map;class TN extends zw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await kN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kN(t,e){const n=RN(e),r=PN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function NN(t,e){ka.set(t._key(),e)}function PN(t){return Dn(t._redirectPersistence)}function RN(t){return Ta(IN,t.config.apiKey,t.name)}async function AN(t,e,n=!1){if(_t(t.app))return Promise.reject(En(t));const r=br(t),i=wN(r,e),o=await new TN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=10*60*1e3;class DN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ON&&this.cachedEventUids.clear(),this.cachedEventUids.has(py(e))}saveEventToCache(e){this.cachedEventUids.add(py(e)),this.lastProcessedEventTime=Date.now()}}function py(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jN=/^https?/;async function FN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LN(t);for(const n of e)try{if(UN(n))return}catch{}sn(t,"unauthorized-domain")}function UN(t){const e=ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jN.test(n))return!1;if(MN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new wl(3e4,6e4);function my(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zN(t){return new Promise((e,n)=>{var i,s,o;function r(){my(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{my(),n(wn(t,"network-request-failed"))},timeout:VN.get()})}if((s=(i=Sn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Sn().gapi)!=null&&o.load)r();else{const a=Nk("iframefcb");return Sn()[a]=()=>{gapi.load?r():n(wn(t,"network-request-failed"))},Iw(`${kk()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Na=null,e})}let Na=null;function BN(t){return Na=Na||zN(t),Na}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new wl(5e3,15e3),$N="__/auth/iframe",HN="emulator/auth/iframe",GN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KN(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zf(e,HN):`https://${t.config.authDomain}/${$N}`,r={apiKey:e.apiKey,appName:t.name,v:Ei},i=qN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ns(r).slice(1)}`}async function YN(t){const e=await BN(t),n=Sn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:KN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},WN.get());function u(){Sn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XN=500,JN=600,ZN="_blank",e2="http://localhost";class gy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t2(t,e,n,r=XN,i=JN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...QN,width:r.toString(),height:i.toString(),top:s,left:o},h=ft().toLowerCase();n&&(a=_w(h)?ZN:n),gw(h)&&(e=e||e2,u.scrollbars="yes");const m=Object.entries(u).reduce((p,[T,N])=>`${p}${T}=${N},`,"");if(_k(h)&&a!=="_self")return n2(e||"",a),new gy(null);const f=window.open(e||"",a,m);G(f,t,"popup-blocked");try{f.focus()}catch{}return new gy(f)}function n2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="__/auth/handler",i2="emulator/auth/handler",s2=encodeURIComponent("fac");async function yy(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ei,eventId:i};if(e instanceof Nw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,f]of Object.entries({}))o[m]=f}if(e instanceof Sl){const m=e.getScopes().filter(f=>f!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const m of Object.keys(a))a[m]===void 0&&delete a[m];const u=await t._getAppCheckToken(),h=u?`#${s2}=${encodeURIComponent(u)}`:"";return`${o2(t)}?${Ns(a).slice(1)}${h}`}function o2({config:t}){return t.emulator?zf(t,i2):`https://${t.authDomain}/${r2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="webStorageSupport";class l2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mw,this._completeRedirectFn=AN,this._overrideRedirectResult=NN}async _openPopup(e,n,r,i){var o;Bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await yy(e,n,r,ou(),i);return t2(e,s,Hf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yy(e,n,r,ou(),i);return cN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YN(e),r=new DN(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ch,{type:ch},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ch];s!==void 0&&n(!!s),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cw()||yw()||Wf()}}const a2=l2;var _y="@firebase/auth",vy="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h2(t){ui(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xw(t)},h=new xk(r,i,s,u);return bk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new kr("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new u2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(_y,vy,c2(t)),vn(_y,vy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=5*60,f2=X0("authIdTokenMaxAge")||d2;let wy=null;const p2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f2)return;const i=n==null?void 0:n.token;wy!==i&&(wy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function m2(t=sw()){const e=Uf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Dk(t,{popupRedirectResolver:a2,persistence:[vN,lN,Mw]}),r=X0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=p2(s.toString());nN(n,o,()=>o(n.currentUser)),tN(n,a=>o(a))}}const i=Y0("auth");return i&&Lk(n,`http://${i}`),n}function g2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ik({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",g2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h2("Browser");var y2="firebase",_2="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(y2,_2,"app");var Ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,_){function w(){}w.prototype=_.prototype,C.D=_.prototype,C.prototype=new w,C.prototype.constructor=C,C.C=function(E,I,P){for(var S=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)S[lt-2]=arguments[lt];return _.prototype[I].apply(E,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,_,w){w||(w=0);var E=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)E[I]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(I=0;16>I;++I)E[I]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=C.g[0],w=C.g[1],I=C.g[2];var P=C.g[3],S=_+(P^w&(I^P))+E[0]+3614090360&4294967295;_=w+(S<<7&4294967295|S>>>25),S=P+(I^_&(w^I))+E[1]+3905402710&4294967295,P=_+(S<<12&4294967295|S>>>20),S=I+(w^P&(_^w))+E[2]+606105819&4294967295,I=P+(S<<17&4294967295|S>>>15),S=w+(_^I&(P^_))+E[3]+3250441966&4294967295,w=I+(S<<22&4294967295|S>>>10),S=_+(P^w&(I^P))+E[4]+4118548399&4294967295,_=w+(S<<7&4294967295|S>>>25),S=P+(I^_&(w^I))+E[5]+1200080426&4294967295,P=_+(S<<12&4294967295|S>>>20),S=I+(w^P&(_^w))+E[6]+2821735955&4294967295,I=P+(S<<17&4294967295|S>>>15),S=w+(_^I&(P^_))+E[7]+4249261313&4294967295,w=I+(S<<22&4294967295|S>>>10),S=_+(P^w&(I^P))+E[8]+1770035416&4294967295,_=w+(S<<7&4294967295|S>>>25),S=P+(I^_&(w^I))+E[9]+2336552879&4294967295,P=_+(S<<12&4294967295|S>>>20),S=I+(w^P&(_^w))+E[10]+4294925233&4294967295,I=P+(S<<17&4294967295|S>>>15),S=w+(_^I&(P^_))+E[11]+2304563134&4294967295,w=I+(S<<22&4294967295|S>>>10),S=_+(P^w&(I^P))+E[12]+1804603682&4294967295,_=w+(S<<7&4294967295|S>>>25),S=P+(I^_&(w^I))+E[13]+4254626195&4294967295,P=_+(S<<12&4294967295|S>>>20),S=I+(w^P&(_^w))+E[14]+2792965006&4294967295,I=P+(S<<17&4294967295|S>>>15),S=w+(_^I&(P^_))+E[15]+1236535329&4294967295,w=I+(S<<22&4294967295|S>>>10),S=_+(I^P&(w^I))+E[1]+4129170786&4294967295,_=w+(S<<5&4294967295|S>>>27),S=P+(w^I&(_^w))+E[6]+3225465664&4294967295,P=_+(S<<9&4294967295|S>>>23),S=I+(_^w&(P^_))+E[11]+643717713&4294967295,I=P+(S<<14&4294967295|S>>>18),S=w+(P^_&(I^P))+E[0]+3921069994&4294967295,w=I+(S<<20&4294967295|S>>>12),S=_+(I^P&(w^I))+E[5]+3593408605&4294967295,_=w+(S<<5&4294967295|S>>>27),S=P+(w^I&(_^w))+E[10]+38016083&4294967295,P=_+(S<<9&4294967295|S>>>23),S=I+(_^w&(P^_))+E[15]+3634488961&4294967295,I=P+(S<<14&4294967295|S>>>18),S=w+(P^_&(I^P))+E[4]+3889429448&4294967295,w=I+(S<<20&4294967295|S>>>12),S=_+(I^P&(w^I))+E[9]+568446438&4294967295,_=w+(S<<5&4294967295|S>>>27),S=P+(w^I&(_^w))+E[14]+3275163606&4294967295,P=_+(S<<9&4294967295|S>>>23),S=I+(_^w&(P^_))+E[3]+4107603335&4294967295,I=P+(S<<14&4294967295|S>>>18),S=w+(P^_&(I^P))+E[8]+1163531501&4294967295,w=I+(S<<20&4294967295|S>>>12),S=_+(I^P&(w^I))+E[13]+2850285829&4294967295,_=w+(S<<5&4294967295|S>>>27),S=P+(w^I&(_^w))+E[2]+4243563512&4294967295,P=_+(S<<9&4294967295|S>>>23),S=I+(_^w&(P^_))+E[7]+1735328473&4294967295,I=P+(S<<14&4294967295|S>>>18),S=w+(P^_&(I^P))+E[12]+2368359562&4294967295,w=I+(S<<20&4294967295|S>>>12),S=_+(w^I^P)+E[5]+4294588738&4294967295,_=w+(S<<4&4294967295|S>>>28),S=P+(_^w^I)+E[8]+2272392833&4294967295,P=_+(S<<11&4294967295|S>>>21),S=I+(P^_^w)+E[11]+1839030562&4294967295,I=P+(S<<16&4294967295|S>>>16),S=w+(I^P^_)+E[14]+4259657740&4294967295,w=I+(S<<23&4294967295|S>>>9),S=_+(w^I^P)+E[1]+2763975236&4294967295,_=w+(S<<4&4294967295|S>>>28),S=P+(_^w^I)+E[4]+1272893353&4294967295,P=_+(S<<11&4294967295|S>>>21),S=I+(P^_^w)+E[7]+4139469664&4294967295,I=P+(S<<16&4294967295|S>>>16),S=w+(I^P^_)+E[10]+3200236656&4294967295,w=I+(S<<23&4294967295|S>>>9),S=_+(w^I^P)+E[13]+681279174&4294967295,_=w+(S<<4&4294967295|S>>>28),S=P+(_^w^I)+E[0]+3936430074&4294967295,P=_+(S<<11&4294967295|S>>>21),S=I+(P^_^w)+E[3]+3572445317&4294967295,I=P+(S<<16&4294967295|S>>>16),S=w+(I^P^_)+E[6]+76029189&4294967295,w=I+(S<<23&4294967295|S>>>9),S=_+(w^I^P)+E[9]+3654602809&4294967295,_=w+(S<<4&4294967295|S>>>28),S=P+(_^w^I)+E[12]+3873151461&4294967295,P=_+(S<<11&4294967295|S>>>21),S=I+(P^_^w)+E[15]+530742520&4294967295,I=P+(S<<16&4294967295|S>>>16),S=w+(I^P^_)+E[2]+3299628645&4294967295,w=I+(S<<23&4294967295|S>>>9),S=_+(I^(w|~P))+E[0]+4096336452&4294967295,_=w+(S<<6&4294967295|S>>>26),S=P+(w^(_|~I))+E[7]+1126891415&4294967295,P=_+(S<<10&4294967295|S>>>22),S=I+(_^(P|~w))+E[14]+2878612391&4294967295,I=P+(S<<15&4294967295|S>>>17),S=w+(P^(I|~_))+E[5]+4237533241&4294967295,w=I+(S<<21&4294967295|S>>>11),S=_+(I^(w|~P))+E[12]+1700485571&4294967295,_=w+(S<<6&4294967295|S>>>26),S=P+(w^(_|~I))+E[3]+2399980690&4294967295,P=_+(S<<10&4294967295|S>>>22),S=I+(_^(P|~w))+E[10]+4293915773&4294967295,I=P+(S<<15&4294967295|S>>>17),S=w+(P^(I|~_))+E[1]+2240044497&4294967295,w=I+(S<<21&4294967295|S>>>11),S=_+(I^(w|~P))+E[8]+1873313359&4294967295,_=w+(S<<6&4294967295|S>>>26),S=P+(w^(_|~I))+E[15]+4264355552&4294967295,P=_+(S<<10&4294967295|S>>>22),S=I+(_^(P|~w))+E[6]+2734768916&4294967295,I=P+(S<<15&4294967295|S>>>17),S=w+(P^(I|~_))+E[13]+1309151649&4294967295,w=I+(S<<21&4294967295|S>>>11),S=_+(I^(w|~P))+E[4]+4149444226&4294967295,_=w+(S<<6&4294967295|S>>>26),S=P+(w^(_|~I))+E[11]+3174756917&4294967295,P=_+(S<<10&4294967295|S>>>22),S=I+(_^(P|~w))+E[2]+718787259&4294967295,I=P+(S<<15&4294967295|S>>>17),S=w+(P^(I|~_))+E[9]+3951481745&4294967295,C.g[0]=C.g[0]+_&4294967295,C.g[1]=C.g[1]+(I+(S<<21&4294967295|S>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+P&4294967295}r.prototype.u=function(C,_){_===void 0&&(_=C.length);for(var w=_-this.blockSize,E=this.B,I=this.h,P=0;P<_;){if(I==0)for(;P<=w;)i(this,C,P),P+=this.blockSize;if(typeof C=="string"){for(;P<_;)if(E[I++]=C.charCodeAt(P++),I==this.blockSize){i(this,E),I=0;break}}else for(;P<_;)if(E[I++]=C[P++],I==this.blockSize){i(this,E),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var _=1;_<C.length-8;++_)C[_]=0;var w=8*this.o;for(_=C.length-8;_<C.length;++_)C[_]=w&255,w/=256;for(this.u(C),C=Array(16),_=w=0;4>_;++_)for(var E=0;32>E;E+=8)C[w++]=this.g[_]>>>E&255;return C};function s(C,_){var w=a;return Object.prototype.hasOwnProperty.call(w,C)?w[C]:w[C]=_(C)}function o(C,_){this.h=_;for(var w=[],E=!0,I=C.length-1;0<=I;I--){var P=C[I]|0;E&&P==_||(w[I]=P,E=!1)}this.g=w}var a={};function u(C){return-128<=C&&128>C?s(C,function(_){return new o([_|0],0>_?-1:0)}):new o([C|0],0>C?-1:0)}function h(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return D(h(-C));for(var _=[],w=1,E=0;C>=w;E++)_[E]=C/w|0,w*=4294967296;return new o(_,0)}function m(C,_){if(C.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(C.charAt(0)=="-")return D(m(C.substring(1),_));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),E=f,I=0;I<C.length;I+=8){var P=Math.min(8,C.length-I),S=parseInt(C.substring(I,I+P),_);8>P?(P=h(Math.pow(_,P)),E=E.j(P).add(h(S))):(E=E.j(w),E=E.add(h(S)))}return E}var f=u(0),p=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-D(this).m();for(var C=0,_=1,w=0;w<this.g.length;w++){var E=this.i(w);C+=(0<=E?E:4294967296+E)*_,_*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(N(this))return"0";if(A(this))return"-"+D(this).toString(C);for(var _=h(Math.pow(C,6)),w=this,E="";;){var I=b(w,_).g;w=x(w,I.j(_));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(C);if(w=I,N(w))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function N(C){if(C.h!=0)return!1;for(var _=0;_<C.g.length;_++)if(C.g[_]!=0)return!1;return!0}function A(C){return C.h==-1}t.l=function(C){return C=x(this,C),A(C)?-1:N(C)?0:1};function D(C){for(var _=C.g.length,w=[],E=0;E<_;E++)w[E]=~C.g[E];return new o(w,~C.h).add(p)}t.abs=function(){return A(this)?D(this):this},t.add=function(C){for(var _=Math.max(this.g.length,C.g.length),w=[],E=0,I=0;I<=_;I++){var P=E+(this.i(I)&65535)+(C.i(I)&65535),S=(P>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);E=S>>>16,P&=65535,S&=65535,w[I]=S<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(C,_){return C.add(D(_))}t.j=function(C){if(N(this)||N(C))return f;if(A(this))return A(C)?D(this).j(D(C)):D(D(this).j(C));if(A(C))return D(this.j(D(C)));if(0>this.l(T)&&0>C.l(T))return h(this.m()*C.m());for(var _=this.g.length+C.g.length,w=[],E=0;E<2*_;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<C.g.length;I++){var P=this.i(E)>>>16,S=this.i(E)&65535,lt=C.i(I)>>>16,ln=C.i(I)&65535;w[2*E+2*I]+=S*ln,v(w,2*E+2*I),w[2*E+2*I+1]+=P*ln,v(w,2*E+2*I+1),w[2*E+2*I+1]+=S*lt,v(w,2*E+2*I+1),w[2*E+2*I+2]+=P*lt,v(w,2*E+2*I+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new o(w,0)};function v(C,_){for(;(C[_]&65535)!=C[_];)C[_+1]+=C[_]>>>16,C[_]&=65535,_++}function k(C,_){this.g=C,this.h=_}function b(C,_){if(N(_))throw Error("division by zero");if(N(C))return new k(f,f);if(A(C))return _=b(D(C),_),new k(D(_.g),D(_.h));if(A(_))return _=b(C,D(_)),new k(D(_.g),_.h);if(30<C.g.length){if(A(C)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var w=p,E=_;0>=E.l(C);)w=z(w),E=z(E);var I=B(w,1),P=B(E,1);for(E=B(E,2),w=B(w,2);!N(E);){var S=P.add(E);0>=S.l(C)&&(I=I.add(w),P=S),E=B(E,1),w=B(w,1)}return _=x(C,I.j(_)),new k(I,_)}for(I=f;0<=C.l(_);){for(w=Math.max(1,Math.floor(C.m()/_.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=h(w),S=P.j(_);A(S)||0<S.l(C);)w-=E,P=h(w),S=P.j(_);N(P)&&(P=p),I=I.add(P),C=x(C,S)}return new k(I,C)}t.A=function(C){return b(this,C).h},t.and=function(C){for(var _=Math.max(this.g.length,C.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)&C.i(E);return new o(w,this.h&C.h)},t.or=function(C){for(var _=Math.max(this.g.length,C.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)|C.i(E);return new o(w,this.h|C.h)},t.xor=function(C){for(var _=Math.max(this.g.length,C.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)^C.i(E);return new o(w,this.h^C.h)};function z(C){for(var _=C.g.length+1,w=[],E=0;E<_;E++)w[E]=C.i(E)<<1|C.i(E-1)>>>31;return new o(w,C.h)}function B(C,_){var w=_>>5;_%=32;for(var E=C.g.length-w,I=[],P=0;P<E;P++)I[P]=0<_?C.i(P+w)>>>_|C.i(P+w+1)<<32-_:C.i(P+w);return new o(I,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,qf=o}).apply(typeof Ey<"u"?Ey:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,c,d){return l==Array.prototype||l==Object.prototype||(l[c]=d.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var c=0;c<l.length;++c){var d=l[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(l,c){if(c)e:{var d=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var R=l[y];if(!(R in d))break e;d=d[R]}l=l[l.length-1],y=d[l],c=c(y),c!=y&&c!=null&&e(d,l,{configurable:!0,writable:!0,value:c})}}function s(l,c){l instanceof String&&(l+="");var d=0,y=!1,R={next:function(){if(!y&&d<l.length){var O=d++;return{value:c(O,l[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(l){return l||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var c=typeof l;return c=c!="object"?c:l?Array.isArray(l)?"array":c:"null",c=="array"||c=="object"&&typeof l.length=="number"}function h(l){var c=typeof l;return c=="object"&&l!=null||c=="function"}function m(l,c,d){return l.call.apply(l.bind,arguments)}function f(l,c,d){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),l.apply(c,R)}}return function(){return l.apply(c,arguments)}}function p(l,c,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:f,p.apply(null,arguments)}function T(l,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function N(l,c){function d(){}d.prototype=c.prototype,l.aa=c.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(y,R,O){for(var V=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)V[pe-2]=arguments[pe];return c.prototype[R].apply(y,V)}}function A(l){const c=l.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=l[y];return d}return[]}function D(l,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const R=l.length||0,O=y.length||0;l.length=R+O;for(let V=0;V<O;V++)l[R+V]=y[V]}else l.push(y)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(l){return/^[\s\xa0]*$/.test(l)}function k(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var z=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function B(l,c,d){for(const y in l)c.call(d,l[y],y,l)}function C(l,c){for(const d in l)c.call(void 0,l[d],d,l)}function _(l){const c={};for(const d in l)c[d]=l[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,c){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)l[d]=y[d];for(let O=0;O<w.length;O++)d=w[O],Object.prototype.hasOwnProperty.call(y,d)&&(l[d]=y[d])}}function I(l){var c=1;l=l.split(":");const d=[];for(;0<c&&l.length;)d.push(l.shift()),c--;return l.length&&d.push(l.join(":")),d}function P(l){a.setTimeout(()=>{throw l},0)}function S(){var l=Y;let c=null;return l.g&&(c=l.g,l.g=l.g.next,l.g||(l.h=null),c.next=null),c}class lt{constructor(){this.h=this.g=null}add(c,d){const y=ln.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var ln=new x(()=>new Ii,l=>l.reset());class Ii{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let an,U=!1,Y=new lt,q=()=>{const l=a.Promise.resolve(void 0);an=()=>{l.then(fe)}};var fe=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(d){P(d)}var c=ln;c.j(l),100>c.h&&(c.h++,l.next=c.g,c.g=l)}U=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(l,c){this.type=l,this.g=this.target=c,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var at=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,c=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return l}();function $e(l,c){if(_e.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=c,c=l.relatedTarget){if(z){e:{try{b(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=l.fromElement:d=="mouseout"&&(c=l.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ot[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&$e.aa.h.call(this)}}N($e,_e);var Ot={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),Pl=0;function un(l,c,d,y,R){this.listener=l,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=R,this.key=++Pl,this.da=this.fa=!1}function Os(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function xn(l){this.src=l,this.g={},this.h=0}xn.prototype.add=function(l,c,d,y,R){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var V=Ds(l,c,y,R);return-1<V?(c=l[V],d||(c.fa=!1)):(c=new un(c,this.src,O,!!y,R),c.fa=d,l.push(c)),c};function Bt(l,c){var d=c.type;if(d in l.g){var y=l.g[d],R=Array.prototype.indexOf.call(y,c,void 0),O;(O=0<=R)&&Array.prototype.splice.call(y,R,1),O&&(Os(c),l.g[d].length==0&&(delete l.g[d],l.h--))}}function Ds(l,c,d,y){for(var R=0;R<l.length;++R){var O=l[R];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==y)return R}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Ls={};function Rl(l,c,d,y,R){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Rl(l,c[O],d,y,R);return null}return d=Ol(d),l&&l[He]?l.K(c,d,h(y)?!!y.capture:!1,R):pc(l,c,d,!1,y,R)}function pc(l,c,d,y,R,O){if(!c)throw Error("Invalid event type");var V=h(R)?!!R.capture:!!R,pe=Ti(l);if(pe||(l[bs]=pe=new xn(l)),d=pe.add(c,d,y,V,O),d.proxy)return d;if(y=mc(),d.proxy=y,y.src=l,y.listener=d,l.addEventListener)at||(R=V),R===void 0&&(R=!1),l.addEventListener(c.toString(),y,R);else if(l.attachEvent)l.attachEvent(js(c.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function mc(){function l(d){return c.call(l.src,l.listener,d)}const c=gc;return l}function Al(l,c,d,y,R){if(Array.isArray(c))for(var O=0;O<c.length;O++)Al(l,c[O],d,y,R);else y=h(y)?!!y.capture:!!y,d=Ol(d),l&&l[He]?(l=l.i,c=String(c).toString(),c in l.g&&(O=l.g[c],d=Ds(O,d,y,R),-1<d&&(Os(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete l.g[c],l.h--)))):l&&(l=Ti(l))&&(c=l.g[c.toString()],l=-1,c&&(l=Ds(c,d,y,R)),(d=-1<l?c[l]:null)&&Ms(d))}function Ms(l){if(typeof l!="number"&&l&&!l.da){var c=l.src;if(c&&c[He])Bt(c.i,l);else{var d=l.type,y=l.proxy;c.removeEventListener?c.removeEventListener(d,y,l.capture):c.detachEvent?c.detachEvent(js(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Ti(c))?(Bt(d,l),d.h==0&&(d.src=null,c[bs]=null)):Os(l)}}}function js(l){return l in Ls?Ls[l]:Ls[l]="on"+l}function gc(l,c){if(l.da)l=!0;else{c=new $e(c,this);var d=l.listener,y=l.ha||l.src;l.fa&&Ms(l),l=d.call(y,c)}return l}function Ti(l){return l=l[bs],l instanceof xn?l:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ol(l){return typeof l=="function"?l:(l[Fs]||(l[Fs]=function(c){return l.handleEvent(c)}),l[Fs])}function De(){X.call(this),this.i=new xn(this),this.M=this,this.F=null}N(De,X),De.prototype[He]=!0,De.prototype.removeEventListener=function(l,c,d,y){Al(this,l,c,d,y)};function je(l,c){var d,y=l.F;if(y)for(d=[];y;y=y.F)d.push(y);if(l=l.M,y=c.type||c,typeof c=="string")c=new _e(c,l);else if(c instanceof _e)c.target=c.target||l;else{var R=c;c=new _e(y,l),E(c,R)}if(R=!0,d)for(var O=d.length-1;0<=O;O--){var V=c.g=d[O];R=Mr(V,y,!0,c)&&R}if(V=c.g=l,R=Mr(V,y,!0,c)&&R,R=Mr(V,y,!1,c)&&R,d)for(O=0;O<d.length;O++)V=c.g=d[O],R=Mr(V,y,!1,c)&&R}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var l=this.i,c;for(c in l.g){for(var d=l.g[c],y=0;y<d.length;y++)Os(d[y]);delete l.g[c],l.h--}}this.F=null},De.prototype.K=function(l,c,d,y){return this.i.add(String(l),c,!1,d,y)},De.prototype.L=function(l,c,d,y){return this.i.add(String(l),c,!0,d,y)};function Mr(l,c,d,y){if(c=l.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,O=0;O<c.length;++O){var V=c[O];if(V&&!V.da&&V.capture==d){var pe=V.listener,Ge=V.ha||V.src;V.fa&&Bt(l.i,V),R=pe.call(Ge,y)!==!1&&R}}return R&&!y.defaultPrevented}function Us(l,c,d){if(typeof l=="function")d&&(l=p(l,d));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(l,c||0)}function M(l){l.g=Us(()=>{l.g=null,l.i&&(l.i=!1,M(l))},l.l);const c=l.h;l.h=null,l.m.apply(null,c)}class $ extends X{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:M(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function K(l){X.call(this),this.h=l,this.g={}}N(K,X);var H=[];function J(l){B(l.g,function(c,d){this.g.hasOwnProperty(d)&&Ms(c)},l),l.g={}}K.prototype.N=function(){K.aa.N.call(this),J(this)},K.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var he=a.JSON.stringify,Je=a.JSON.parse,Dt=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function gt(){}gt.prototype.h=null;function Kn(l){return l.h||(l.h=l.i())}function jr(){}var Wt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ki(){_e.call(this,"d")}N(ki,_e);function Vs(){_e.call(this,"c")}N(Vs,_e);var Yn={},bp=null;function yc(){return bp=bp||new De}Yn.La="serverreachability";function Lp(l){_e.call(this,Yn.La,l)}N(Lp,_e);function zs(l){const c=yc();je(c,new Lp(c))}Yn.STAT_EVENT="statevent";function Mp(l,c){_e.call(this,Yn.STAT_EVENT,l),this.stat=c}N(Mp,_e);function ut(l){const c=yc();je(c,new Mp(c,l))}Yn.Ma="timingevent";function jp(l,c){_e.call(this,Yn.Ma,l),this.size=c}N(jp,_e);function Bs(l,c){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},c)}function Ws(){this.g=!0}Ws.prototype.xa=function(){this.g=!1};function uE(l,c,d,y,R,O){l.info(function(){if(l.g)if(O)for(var V="",pe=O.split("&"),Ge=0;Ge<pe.length;Ge++){var se=pe[Ge].split("=");if(1<se.length){var Ze=se[0];se=se[1];var et=Ze.split("_");V=2<=et.length&&et[1]=="type"?V+(Ze+"="+se+"&"):V+(Ze+"=redacted&")}}else V=null;else V=O;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+c+`
`+d+`
`+V})}function cE(l,c,d,y,R,O,V){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+c+`
`+d+`
`+O+" "+V})}function Ni(l,c,d,y){l.info(function(){return"XMLHTTP TEXT ("+c+"): "+dE(l,d)+(y?" "+y:"")})}function hE(l,c){l.info(function(){return"TIMEOUT: "+c})}Ws.prototype.info=function(){};function dE(l,c){if(!l.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var y=d[l];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return he(d)}catch{return c}}var _c={NO_ERROR:0,TIMEOUT:8},fE={},vc;function Dl(){}N(Dl,gt),Dl.prototype.g=function(){return new XMLHttpRequest},Dl.prototype.i=function(){return{}},vc=new Dl;function Qn(l,c,d,y){this.j=l,this.i=c,this.l=d,this.R=y||1,this.U=new K(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fp}function Fp(){this.i=null,this.g="",this.h=!1}var Up={},wc={};function Ec(l,c,d){l.L=1,l.v=jl(In(c)),l.m=d,l.P=!0,Vp(l,null)}function Vp(l,c){l.F=Date.now(),bl(l),l.A=In(l.v);var d=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),em(d.i,"t",y),l.C=0,d=l.j.J,l.h=new Fp,l.g=_m(l.j,d?c:null,!l.m),0<l.O&&(l.M=new $(p(l.Y,l,l.g),l.O)),c=l.U,d=l.g,y=l.ca;var R="readystatechange";Array.isArray(R)||(R&&(H[0]=R.toString()),R=H);for(var O=0;O<R.length;O++){var V=Rl(d,R[O],y||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,c)):(l.u="GET",l.g.ea(l.A,l.u,null,c)),zs(),uE(l.i,l.u,l.A,l.l,l.R,l.m)}Qn.prototype.ca=function(l){l=l.target;const c=this.M;c&&Tn(l)==3?c.j():this.Y(l)},Qn.prototype.Y=function(l){try{if(l==this.g)e:{const et=Tn(this.g);var c=this.g.Ba();const Ai=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||lm(this.g)))){this.J||et!=4||c==7||(c==8||0>=Ai?zs(3):zs(2)),Sc(this);var d=this.g.Z();this.X=d;t:if(zp(this)){var y=lm(this.g);l="";var R=y.length,O=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),$s(this);var V="";break t}this.h.i=new a.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,l+=this.h.i.decode(y[c],{stream:!(O&&c==R-1)});y.length=0,this.h.g+=l,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,cE(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ge=this.g;if((pe=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var se=pe;break t}}se=null}if(d=se)Ni(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cc(this,d);else{this.o=!1,this.s=3,ut(12),Fr(this),$s(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<V.length;)if($t=pE(this,V),$t==wc){et==4&&(this.s=4,ut(14),d=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if($t==Up){this.s=4,ut(15),Ni(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else Ni(this.i,this.l,$t,null),Cc(this,$t);if(zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||V.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)Ni(this.i,this.l,V,"[Invalid Chunked Response]"),Fr(this),$s(this);else if(0<V.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Pc(Ze),Ze.M=!0,ut(11))}}else Ni(this.i,this.l,V,null),Cc(this,V);et==4&&Fr(this),this.o&&!this.J&&(et==4?pm(this.j,this):(this.o=!1,bl(this)))}else AE(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Fr(this),$s(this)}}}catch{}finally{}};function zp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function pE(l,c){var d=l.C,y=c.indexOf(`
`,d);return y==-1?wc:(d=Number(c.substring(d,y)),isNaN(d)?Up:(y+=1,y+d>c.length?wc:(c=c.slice(y,y+d),l.C=y+d,c)))}Qn.prototype.cancel=function(){this.J=!0,Fr(this)};function bl(l){l.S=Date.now()+l.I,Bp(l,l.I)}function Bp(l,c){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Bs(p(l.ba,l),c)}function Sc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Qn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(hE(this.i,this.A),this.L!=2&&(zs(),ut(17)),Fr(this),this.s=2,$s(this)):Bp(this,this.S-l)};function $s(l){l.j.G==0||l.J||pm(l.j,l)}function Fr(l){Sc(l);var c=l.M;c&&typeof c.ma=="function"&&c.ma(),l.M=null,J(l.U),l.g&&(c=l.g,l.g=null,c.abort(),c.ma())}function Cc(l,c){try{var d=l.j;if(d.G!=0&&(d.g==l||xc(d.h,l))){if(!l.K&&xc(d.h,l)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)Wl(d),zl(d);else break e;Nc(d),ut(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Bs(p(d.Za,d),6e3));if(1>=Hp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Vr(d,11)}else if((l.K||d.g==l)&&Wl(d),!v(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let se=R[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ze=se[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=se[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const Ai=se[5];Ai!=null&&typeof Ai=="number"&&0<Ai&&(y=1.5*Ai,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const $t=l.g;if($t){const $l=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($l){var O=y.h;O.g||$l.indexOf("spdy")==-1&&$l.indexOf("quic")==-1&&$l.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ic(O,O.h),O.h=null))}if(y.D){const Rc=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(y.ya=Rc,ve(y.I,y.D,Rc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var V=l;if(y.qa=ym(y,y.J?y.ia:null,y.W),V.K){Gp(y.h,V);var pe=V,Ge=y.L;Ge&&(pe.I=Ge),pe.B&&(Sc(pe),bl(pe)),y.g=V}else dm(y);0<d.i.length&&Bl(d)}else se[0]!="stop"&&se[0]!="close"||Vr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Vr(d,7):kc(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}zs(4)}catch{}}var mE=class{constructor(l,c){this.g=l,this.map=c}};function Wp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $p(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Hp(l){return l.h?1:l.g?l.g.size:0}function xc(l,c){return l.h?l.h==c:l.g?l.g.has(c):!1}function Ic(l,c){l.g?l.g.add(c):l.h=c}function Gp(l,c){l.h&&l.h==c?l.h=null:l.g&&l.g.has(c)&&l.g.delete(c)}Wp.prototype.cancel=function(){if(this.i=qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function qp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let c=l.i;for(const d of l.g.values())c=c.concat(d.D);return c}return A(l.i)}function gE(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var c=[],d=l.length,y=0;y<d;y++)c.push(l[y]);return c}c=[],d=0;for(y in l)c[d++]=l[y];return c}function yE(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var c=[];l=l.length;for(var d=0;d<l;d++)c.push(d);return c}c=[],d=0;for(const y in l)c[d++]=y;return c}}}function Kp(l,c){if(l.forEach&&typeof l.forEach=="function")l.forEach(c,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,c,void 0);else for(var d=yE(l),y=gE(l),R=y.length,O=0;O<R;O++)c.call(void 0,y[O],d&&d[O],l)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _E(l,c){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var y=l[d].indexOf("="),R=null;if(0<=y){var O=l[d].substring(0,y);R=l[d].substring(y+1)}else O=l[d];c(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ur(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ur){this.h=l.h,Ll(this,l.j),this.o=l.o,this.g=l.g,Ml(this,l.s),this.l=l.l;var c=l.i,d=new qs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Qp(this,d),this.m=l.m}else l&&(c=String(l).match(Yp))?(this.h=!1,Ll(this,c[1]||"",!0),this.o=Hs(c[2]||""),this.g=Hs(c[3]||"",!0),Ml(this,c[4]),this.l=Hs(c[5]||"",!0),Qp(this,c[6]||"",!0),this.m=Hs(c[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Ur.prototype.toString=function(){var l=[],c=this.j;c&&l.push(Gs(c,Xp,!0),":");var d=this.g;return(d||c=="file")&&(l.push("//"),(c=this.o)&&l.push(Gs(c,Xp,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(Gs(d,d.charAt(0)=="/"?EE:wE,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",Gs(d,CE)),l.join("")};function In(l){return new Ur(l)}function Ll(l,c,d){l.j=d?Hs(c,!0):c,l.j&&(l.j=l.j.replace(/:$/,""))}function Ml(l,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);l.s=c}else l.s=null}function Qp(l,c,d){c instanceof qs?(l.i=c,xE(l.i,l.h)):(d||(c=Gs(c,SE)),l.i=new qs(c,l.h))}function ve(l,c,d){l.i.set(c,d)}function jl(l){return ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Hs(l,c){return l?c?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Gs(l,c,d){return typeof l=="string"?(l=encodeURI(l).replace(c,vE),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function vE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Xp=/[#\/\?@]/g,wE=/[#\?:]/g,EE=/[#\?]/g,SE=/[#\?@]/g,CE=/#/g;function qs(l,c){this.h=this.g=null,this.i=l||null,this.j=!!c}function Xn(l){l.g||(l.g=new Map,l.h=0,l.i&&_E(l.i,function(c,d){l.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=qs.prototype,t.add=function(l,c){Xn(this),this.i=null,l=Pi(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(c),this.h+=1,this};function Jp(l,c){Xn(l),c=Pi(l,c),l.g.has(c)&&(l.i=null,l.h-=l.g.get(c).length,l.g.delete(c))}function Zp(l,c){return Xn(l),c=Pi(l,c),l.g.has(c)}t.forEach=function(l,c){Xn(this),this.g.forEach(function(d,y){d.forEach(function(R){l.call(c,R,y,this)},this)},this)},t.na=function(){Xn(this);const l=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const R=l[y];for(let O=0;O<R.length;O++)d.push(c[y])}return d},t.V=function(l){Xn(this);let c=[];if(typeof l=="string")Zp(this,l)&&(c=c.concat(this.g.get(Pi(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)c=c.concat(l[d])}return c},t.set=function(l,c){return Xn(this),this.i=null,l=Pi(this,l),Zp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[c]),this.h+=1,this},t.get=function(l,c){return l?(l=this.V(l),0<l.length?String(l[0]):c):c};function em(l,c,d){Jp(l,c),0<d.length&&(l.i=null,l.g.set(Pi(l,c),A(d)),l.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const O=encodeURIComponent(String(y)),V=this.V(y);for(y=0;y<V.length;y++){var R=O;V[y]!==""&&(R+="="+encodeURIComponent(String(V[y]))),l.push(R)}}return this.i=l.join("&")};function Pi(l,c){return c=String(c),l.j&&(c=c.toLowerCase()),c}function xE(l,c){c&&!l.j&&(Xn(l),l.i=null,l.g.forEach(function(d,y){var R=y.toLowerCase();y!=R&&(Jp(this,y),em(this,R,d))},l)),l.j=c}function IE(l,c){const d=new Ws;if(a.Image){const y=new Image;y.onload=T(Jn,d,"TestLoadImage: loaded",!0,c,y),y.onerror=T(Jn,d,"TestLoadImage: error",!1,c,y),y.onabort=T(Jn,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=T(Jn,d,"TestLoadImage: timeout",!1,c,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else c(!1)}function TE(l,c){const d=new Ws,y=new AbortController,R=setTimeout(()=>{y.abort(),Jn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(l,{signal:y.signal}).then(O=>{clearTimeout(R),O.ok?Jn(d,"TestPingServer: ok",!0,c):Jn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Jn(d,"TestPingServer: error",!1,c)})}function Jn(l,c,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function kE(){this.g=new Dt}function NE(l,c,d){const y=d||"";try{Kp(l,function(R,O){let V=R;h(R)&&(V=he(R)),c.push(y+O+"="+encodeURIComponent(V))})}catch(R){throw c.push(y+"type="+encodeURIComponent("_badmap")),R}}function Fl(l){this.l=l.Ub||null,this.j=l.eb||!1}N(Fl,gt),Fl.prototype.g=function(){return new Ul(this.l,this.j)},Fl.prototype.i=function(l){return function(){return l}}({});function Ul(l,c){De.call(this),this.D=l,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ul,De),t=Ul.prototype,t.open=function(l,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=c,this.readyState=1,Ys(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(c.body=l),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tm(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function tm(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var c=l.value?l.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!l.done}))&&(this.response=this.responseText+=c)}l.done?Ks(this):Ys(this),this.readyState==3&&tm(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ks(this))},t.Qa=function(l){this.g&&(this.response=l,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ys(l)}t.setRequestHeader=function(l,c){this.u.append(l,c)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=c.next();return l.join(`\r
`)};function Ys(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function nm(l){let c="";return B(l,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Tc(l,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=nm(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):ve(l,c,d))}function Pe(l){De.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Pe,De);var PE=/^https?$/i,RE=["POST","PUT"];t=Pe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);c=c?c.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vc.g(),this.v=this.o?Kn(this.o):Kn(vc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(c,String(l),!0),this.B=!1}catch(O){rm(this,O);return}if(l=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())d.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),R=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(RE,c,void 0))||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,V]of d)this.g.setRequestHeader(O,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{om(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){rm(this,O)}};function rm(l,c){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=c,l.m=5,im(l),Vl(l)}function im(l){l.A||(l.A=!0,je(l,"complete"),je(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,je(this,"complete"),je(this,"abort"),Vl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sm(this):this.bb())},t.bb=function(){sm(this)};function sm(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Tn(l)!=4||l.Z()!=2)){if(l.u&&Tn(l)==4)Us(l.Ea,0,l);else if(je(l,"readystatechange"),Tn(l)==4){l.h=!1;try{const V=l.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=V===0){var R=String(l.D).match(Yp)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),y=!PE.test(R?R.toLowerCase():"")}d=y}if(d)je(l,"complete"),je(l,"success");else{l.m=6;try{var O=2<Tn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",im(l)}}finally{Vl(l)}}}}function Vl(l,c){if(l.g){om(l);const d=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,c||je(l,"ready");try{d.onreadystatechange=y}catch{}}}function om(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Tn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var c=this.g.responseText;return l&&c.indexOf(l)==0&&(c=c.substring(l.length)),Je(c)}};function lm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function AE(l){const c={};l=(l.g&&2<=Tn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(v(l[y]))continue;var d=I(l[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[R]||[];c[R]=O,O.push(d)}C(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(l,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||c}function am(l){this.Aa=0,this.i=[],this.j=new Ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,l),this.cb=Qs("retryDelaySeedMs",1e4,l),this.Wa=Qs("forwardChannelMaxRetries",2,l),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Wp(l&&l.concurrentRequestLimit),this.Da=new kE,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=am.prototype,t.la=8,t.G=1,t.connect=function(l,c,d,y){ut(0),this.W=l,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=ym(this,null,this.W),Bl(this)};function kc(l){if(um(l),l.G==3){var c=l.U++,d=In(l.I);if(ve(d,"SID",l.K),ve(d,"RID",c),ve(d,"TYPE","terminate"),Xs(l,d),c=new Qn(l,l.j,c),c.L=2,c.v=jl(In(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.v,d=!0),d||(c.g=_m(c.j,null),c.g.ea(c.v)),c.F=Date.now(),bl(c)}gm(l)}function zl(l){l.g&&(Pc(l),l.g.cancel(),l.g=null)}function um(l){zl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Wl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Bl(l){if(!$p(l.h)&&!l.s){l.s=!0;var c=l.Ga;an||q(),U||(an(),U=!0),Y.add(c,l),l.B=0}}function OE(l,c){return Hp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=c.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Bs(p(l.Ga,l,c),mm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const R=new Qn(this,this.j,l);let O=this.o;if(this.S&&(O?(O=_(O),E(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=hm(this,R,c),d=In(this.I),ve(d,"RID",l),ve(d,"CVER",22),this.D&&ve(d,"X-HTTP-Session-Id",this.D),Xs(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(nm(O)))+"&"+c:this.m&&Tc(d,this.m,O)),Ic(this.h,R),this.Ua&&ve(d,"TYPE","init"),this.P?(ve(d,"$req",c),ve(d,"SID","null"),R.T=!0,Ec(R,d,null)):Ec(R,d,c),this.G=2}}else this.G==3&&(l?cm(this,l):this.i.length==0||$p(this.h)||cm(this))};function cm(l,c){var d;c?d=c.l:d=l.U++;const y=In(l.I);ve(y,"SID",l.K),ve(y,"RID",d),ve(y,"AID",l.T),Xs(l,y),l.m&&l.o&&Tc(y,l.m,l.o),d=new Qn(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),c&&(l.i=c.D.concat(l.i)),c=hm(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ic(l.h,d),Ec(d,y,c)}function Xs(l,c){l.H&&B(l.H,function(d,y){ve(c,y,d)}),l.l&&Kp({},function(d,y){ve(c,y,d)})}function hm(l,c,d){d=Math.min(l.i.length,d);var y=l.l?p(l.l.Na,l.l,l):null;e:{var R=l.i;let O=-1;for(;;){const V=["count="+d];O==-1?0<d?(O=R[0].g,V.push("ofs="+O)):O=0:V.push("ofs="+O);let pe=!0;for(let Ge=0;Ge<d;Ge++){let se=R[Ge].g;const Ze=R[Ge].map;if(se-=O,0>se)O=Math.max(0,R[Ge].g-100),pe=!1;else try{NE(Ze,V,"req"+se+"_")}catch{y&&y(Ze)}}if(pe){y=V.join("&");break e}}}return l=l.i.splice(0,d),c.D=l,y}function dm(l){if(!l.g&&!l.u){l.Y=1;var c=l.Fa;an||q(),U||(an(),U=!0),Y.add(c,l),l.v=0}}function Nc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Bs(p(l.Fa,l),mm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,fm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Bs(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),zl(this),fm(this))};function Pc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function fm(l){l.g=new Qn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var c=In(l.qa);ve(c,"RID","rpc"),ve(c,"SID",l.K),ve(c,"AID",l.T),ve(c,"CI",l.F?"0":"1"),!l.F&&l.ja&&ve(c,"TO",l.ja),ve(c,"TYPE","xmlhttp"),Xs(l,c),l.m&&l.o&&Tc(c,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=jl(In(c)),d.m=null,d.P=!0,Vp(d,l)}t.Za=function(){this.C!=null&&(this.C=null,zl(this),Nc(this),ut(19))};function Wl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function pm(l,c){var d=null;if(l.g==c){Wl(l),Pc(l),l.g=null;var y=2}else if(xc(l.h,c))d=c.D,Gp(l.h,c),y=1;else return;if(l.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=l.B;y=yc(),je(y,new jp(y,d)),Bl(l)}else dm(l);else if(R=c.s,R==3||R==0&&0<c.X||!(y==1&&OE(l,c)||y==2&&Nc(l)))switch(d&&0<d.length&&(c=l.h,c.i=c.i.concat(d)),R){case 1:Vr(l,5);break;case 4:Vr(l,10);break;case 3:Vr(l,6);break;default:Vr(l,2)}}}function mm(l,c){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*c}function Vr(l,c){if(l.j.info("Error code "+c),c==2){var d=p(l.fb,l),y=l.Xa;const R=!y;y=new Ur(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ll(y,"https"),jl(y),R?IE(y.toString(),d):TE(y.toString(),d)}else ut(2);l.G=0,l.l&&l.l.sa(c),gm(l),um(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function gm(l){if(l.G=0,l.ka=[],l.l){const c=qp(l.h);(c.length!=0||l.i.length!=0)&&(D(l.ka,c),D(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function ym(l,c,d){var y=d instanceof Ur?In(d):new Ur(d);if(y.g!="")c&&(y.g=c+"."+y.g),Ml(y,y.s);else{var R=a.location;y=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var O=new Ur(null);y&&Ll(O,y),c&&(O.g=c),R&&Ml(O,R),d&&(O.l=d),y=O}return d=l.D,c=l.ya,d&&c&&ve(y,d,c),ve(y,"VER",l.la),Xs(l,y),y}function _m(l,c,d){if(c&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=l.Ca&&!l.pa?new Pe(new Fl({eb:d})):new Pe(l.pa),c.Ha(l.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vm(){}t=vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bt(l,c){De.call(this),this.g=new am(c),this.l=l,this.h=c&&c.messageUrlParams||null,l=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(l?l["X-WebChannel-Content-Type"]=c.messageContentType:l={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(l?l["X-WebChannel-Client-Profile"]=c.va:l={"X-WebChannel-Client-Profile":c.va}),this.g.S=l,(l=c&&c.Sb)&&!v(l)&&(this.g.m=l),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,l=this.h,l!==null&&c in l&&(l=this.h,c in l&&delete l[c])),this.j=new Ri(this)}N(bt,De),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){kc(this.g)},bt.prototype.o=function(l){var c=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=he(l),l=d);c.i.push(new mE(c.Ya++,l)),c.G==3&&Bl(c)},bt.prototype.N=function(){this.g.l=null,delete this.j,kc(this.g),delete this.g,bt.aa.N.call(this)};function wm(l){ki.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var c=l.__sm__;if(c){e:{for(const d in c){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,c=c!==null&&l in c?c[l]:void 0),this.data=c}else this.data=l}N(wm,ki);function Em(){Vs.call(this),this.status=1}N(Em,Vs);function Ri(l){this.g=l}N(Ri,vm),Ri.prototype.ua=function(){je(this.g,"a")},Ri.prototype.ta=function(l){je(this.g,new wm(l))},Ri.prototype.sa=function(l){je(this.g,new Em)},Ri.prototype.ra=function(){je(this.g,"b")},bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,_c.NO_ERROR=0,_c.TIMEOUT=8,_c.HTTP_ERROR=6,fE.COMPLETE="complete",jr.EventType=Wt,Wt.OPEN="a",Wt.CLOSE="b",Wt.ERROR="c",Wt.MESSAGE="d",De.prototype.listen=De.prototype.K,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const Sy="@firebase/firestore",Cy="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Xu("@firebase/firestore");function Jt(t,...e){if(fu.logLevel<=ue.DEBUG){const n=e.map($w);fu.debug(`Firestore (${nc}): ${t}`,...n)}}function Ww(t,...e){if(fu.logLevel<=ue.ERROR){const n=e.map($w);fu.error(`Firestore (${nc}): ${t}`,...n)}}function $w(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Hw(t,r,n)}function Hw(t,e,n){let r=`FIRESTORE (${nc}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ww(r),new Error(r)}function Po(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Hw(e,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class le extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class E2{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Po(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ro;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ro,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Jt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Jt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ro)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Jt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Po(typeof r.accessToken=="string",31837,{l:r}),new v2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Po(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class S2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class C2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new S2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Po(this.o===void 0,3512);const r=s=>{s.error!=null&&Jt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Jt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Jt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Jt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Po(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=I2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Nr(t,e){return t<e?-1:t>e?1:0}function k2(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return hh(i)===hh(s)?Nr(i,s):hh(i)?1:-1}return Nr(t.length,e.length)}const N2=55296,P2=57343;function hh(t){const e=t.charCodeAt(0);return e>=N2&&e<=P2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="__name__";class fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&pu(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&pu(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=fn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Nr(e.length,n.length)}static compareSegments(e,n){const r=fn.isNumericId(e),i=fn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?fn.extractNumericId(e).compare(fn.extractNumericId(n)):k2(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qf.fromString(e.substring(4,e.length-2))}}class Yt extends fn{construct(e,n,r){return new Yt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(oe.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Yt(n)}static emptyPath(){return new Yt([])}}const R2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Hr extends fn{construct(e,n,r){return new Hr(e,n,r)}static isValidIdentifier(e){return R2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Hr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iy}static keyField(){return new Hr([Iy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new le(oe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new le(oe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new le(oe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new le(oe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Hr(n)}static emptyPath(){return new Hr([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.path=e}static fromPath(e){return new Yr(Yt.fromString(e))}static fromName(e){return new Yr(Yt.fromString(e).popFirst(5))}static empty(){return new Yr(Yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Yt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Yt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Yr(new Yt(e.slice()))}}function A2(t,e,n,r){if(e===!0&&r===!0)throw new le(oe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function O2(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function xl(t,e){if(!O2(t))throw new le(oe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new le(oe.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=-62135596800,ky=1e6;class pn{static now(){return pn.fromMillis(Date.now())}static fromDate(e){return pn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ky);return new pn(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ty)throw new le(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ky}_compareTo(e){return this.seconds===e.seconds?Nr(this.nanoseconds,e.nanoseconds):Nr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,pn._jsonSchema))return new pn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pn._jsonSchemaVersion="firestore/timestamp/1.0",pn._jsonSchema={type:Oe("string",pn._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};function D2(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new b2("Invalid base64 string: "+s):s}}(e);return new di(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new di(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Nr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}di.EMPTY_BYTE_STRING=new di("");const Ny="(default)";class mu{constructor(e,n){this.projectId=e,this.database=n||Ny}static empty(){return new mu("","")}get isDefaultDatabase(){return this.database===Ny}isEqual(e){return e instanceof mu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function M2(t){return new L2(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Py,re;(re=Py||(Py={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new qf([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=1048576;function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Jt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ro,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Kf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ry,Ay;(Ay=Ry||(Ry={})).Ma="default",Ay.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="firestore.googleapis.com",Dy=!0;class by{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le(oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=z2,this.ssl=Dy}else this.host=e.host,this.ssl=e.ssl??Dy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=j2;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<F2)throw new le(oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V2(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new le(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new le(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new le(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class B2{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new by({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new by(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new w2;switch(r.type){case"firstParty":return new C2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oy.get(n);r&&(Jt("ComponentProvider","Removing Datastore"),Oy.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yf(this.firestore,e,this._query)}}class gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gn(this.firestore,e,this._key)}toJSON(){return{type:gn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xl(n,gn._jsonSchema))return new gn(e,r||null,new Yr(Yt.fromString(n.referencePath)))}}gn._jsonSchemaVersion="firestore/documentReference/1.0",gn._jsonSchema={type:Oe("string",gn._jsonSchemaVersion),referencePath:Oe("string")};class Qf extends Yf{constructor(e,n,r){super(e,n,M2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gn(this.firestore,null,new Yr(e))}withConverter(e){return new Qf(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="AsyncQueue";class My{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new U2(this,"async_queue_retry"),this._c=()=>{const r=dh();r&&Jt(Ly,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=dh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ro;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!D2(e))throw e;Jt(Ly,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ww("INTERNAL UNHANDLED ERROR: ",jy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Kf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&pu(47125,{Pc:jy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class W2 extends B2{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new My,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new My(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(di.fromBase64String(e))}catch(n){throw new le(oe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pn(di.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:Oe("string",Pn._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(oe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Hr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(oe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(oe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Nr(this._lat,e._lat)||Nr(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ti._jsonSchemaVersion}}static fromJSON(e){if(xl(e,ti._jsonSchema))return new ti(e.latitude,e.longitude)}}ti._jsonSchemaVersion="firestore/geoPoint/1.0",ti._jsonSchema={type:Oe("string",ti._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,ni._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ni(e.vectorValues);throw new le(oe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ni._jsonSchemaVersion="firestore/vectorValue/1.0",ni._jsonSchema={type:Oe("string",ni._jsonSchemaVersion),vectorValues:Oe("object")};const $2=new RegExp("[~\\*/\\[\\]]");function H2(t,e,n){if(e.search($2)>=0)throw Fy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Gw(...e.split("."))._internalPath}catch{throw Fy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Fy(t,e,n,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let o="";return new le(oe.INVALID_ARGUMENT,s+t+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G2 extends qw{data(){return super.data()}}function Kw(t,e){return typeof e=="string"?H2(t,e):e instanceof Gw?e._internalPath:e._delegate._internalPath}class ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rs extends qw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(oe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=rs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",rs._jsonSchema={type:Oe("string",rs._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class Pa extends rs{data(e={}){return super.data(e)}}class Ao{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ca(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pa(this._firestore,this._userDataWriter,r.key,r,new ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(oe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Pa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ca(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Pa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ca(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,m=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),m=o.indexOf(a.doc.key)),{type:q2(a.type),doc:u,oldIndex:h,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(oe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=T2.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function q2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pu(61501,{type:t})}}Ao._jsonSchemaVersion="firestore/querySnapshot/1.0",Ao._jsonSchema={type:Oe("string",Ao._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};(function(e,n=!0){(function(i){nc=i})(Ei),ui(new kr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new W2(new E2(r.getProvider("auth-internal")),new x2(o,r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new le(oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mu(h.options.projectId,m)}(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),vn(Sy,Cy,e),vn(Sy,Cy,"esm2020")})();var Uy={};const Vy="@firebase/database",zy="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yw="";function K2(t){Yw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:nl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y2(e)}}catch{}return new Q2},Qr=Qw("localStorage"),X2=Qw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Xu("@firebase/database"),J2=function(){let t=1;return function(){return t++}}(),Xw=function(t){const e=WI(t),n=new UI;n.update(e);const r=n.digest();return Lf.encodeByteArray(r)},Il=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Il.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let Oo=null,By=!0;const Z2=function(t,e){F(!0,"Can't turn on custom loggers persistently."),is.logLevel=ue.VERBOSE,Oo=is.log.bind(is)},Ke=function(...t){if(By===!0&&(By=!1,Oo===null&&X2.get("logging_enabled")===!0&&Z2()),Oo){const e=Il.apply(null,t);Oo(e)}},Tl=function(t){return function(...e){Ke(t,...e)}},xd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Il(...t);is.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Il(...t)}`;throw is.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+Il(...t);is.warn(e)},eP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ys="[MIN_NAME]",fi="[MAX_NAME]",Ci=function(t,e){if(t===e)return 0;if(t===ys||e===fi)return-1;if(e===ys||t===fi)return 1;{const n=Wy(t),r=Wy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nP=function(t,e){return t===e?0:t<e?-1:1},oo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Be(e))},Jf=function(t){if(typeof t!="object"||t===null)return Be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Be(e[r]),n+=":",n+=Jf(t[e[r]]);return n+="}",n},Jw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zw=function(t){F(!Xf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const m=h.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(m.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},rP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oP=new RegExp("^-?(0*)\\d{1,10}$"),lP=-2147483648,aP=2147483647,Wy=function(t){if(oP.test(t)){const e=Number(t);if(e>=lP&&e<=aP)return e}return null},Ps=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},uP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Do=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,_t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class Ra{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ra.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="5",e1="v",t1="s",n1="r",r1="f",i1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,s1="ls",o1="p",Id="ac",l1="websocket",a1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1,h=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function c1(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===l1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===a1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dP(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.counters_={}}incrementCounter(e,n=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _I(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={},ph={};function ep(t){const e=t.toString();return fh[e]||(fh[e]=new fP),fh[e]}function pP(t,e){const n=t.toString();return ph[n]||(ph[n]=e()),ph[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ps(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="start",gP="close",yP="pLPCommand",_P="pRTLPCB",h1="id",d1="pw",f1="ser",vP="cb",wP="seg",EP="ts",SP="d",CP="dframe",p1=1870,m1=30,xP=p1-m1,IP=25e3,TP=3e4;class qi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tl(e),this.stats_=ep(n),this.urlFn=u=>(this.appCheckToken&&(u[Id]=this.appCheckToken),c1(n,a1,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TP)),tP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tp((...s)=>{const[o,a,u,h,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$y)this.id=a,this.password=u;else if(o===gP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[$y]="t",r[f1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[e1]=Zf,this.transportSessionId&&(r[t1]=this.transportSessionId),this.lastSessionId&&(r[s1]=this.lastSessionId),this.applicationId&&(r[o1]=this.applicationId),this.appCheckToken&&(r[Id]=this.appCheckToken),typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(r[n1]=r1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qi.forceAllow_=!0}static forceDisallow(){qi.forceDisallow_=!0}static isAvailable(){return qi.forceAllow_?!0:!qi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rP()&&!iP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=q0(n),i=Jw(r,xP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[CP]="t",r[h1]=e,r[d1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=J2(),window[yP+this.uniqueCallbackIdentifier]=e,window[_P+this.uniqueCallbackIdentifier]=n,this.myIFrame=tp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ke("frame writing exception"),a.stack&&Ke(a.stack),Ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[h1]=this.myID,e[d1]=this.myPW,e[f1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+m1+r.length<=p1;){const o=this.pendingSegs.shift();r=r+"&"+wP+i+"="+o.seg+"&"+EP+i+"="+o.ts+"&"+SP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(IP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=16384,NP=45e3;let gu=null;typeof MozWebSocket<"u"?gu=MozWebSocket:typeof WebSocket<"u"&&(gu=WebSocket);class Qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tl(this.connId),this.stats_=ep(n),this.connURL=Qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[e1]=Zf,typeof location<"u"&&location.hostname&&i1.test(location.hostname)&&(o[n1]=r1),n&&(o[t1]=n),r&&(o[s1]=r),i&&(o[Id]=i),s&&(o[o1]=s),c1(e,l1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qr.set("previous_websocket_failure",!0);try{let r;AI(),this.mySock=new gu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&gu!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Qr.isInMemoryStorage||Qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=nl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Jw(n,kP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{static get ALL_TRANSPORTS(){return[qi,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Qt&&Qt.isAvailable();let r=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const i=this.transports_=[];for(const s of ol.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ol.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ol.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=6e4,RP=5e3,AP=10*1024,OP=100*1024,mh="t",Hy="d",DP="s",Gy="r",bP="e",qy="o",Ky="a",Yy="n",Qy="p",LP="h";class MP{constructor(e,n,r,i,s,o,a,u,h,m){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tl("c:"+this.id+":"),this.transportManager_=new ol(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Do(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mh in e){const n=e[mh];n===Ky?this.upgradeIfSecondaryHealthy_():n===Gy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oo("t",e),r=oo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ky,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oo("t",e),r=oo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oo(mh,e);if(Hy in e){const r=e[Hy];if(n===LP){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DP?this.onConnectionShutdown_(r):n===Gy?this.onReset_(r):n===bP?xd("Server Error: "+r):n===qy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zf!==r&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Do(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(PP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Do(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends y1{static getInstance(){return new yu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=32,Jy=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new de("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pr(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function np(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ll(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function wt(t,e){const n=Z(t),r=Z(e);if(n===null)return e;if(n===r)return wt(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function FP(t,e){const n=ll(t,0),r=ll(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ci(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function rp(t,e){if(Pr(t)!==Pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ft(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pr(t)>Pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class UP{constructor(e,n){this.errorPrefix_=n,this.parts_=ll(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Qu(this.parts_[r]);v1(this)}}function VP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qu(e),v1(t)}function zP(t){const e=t.parts_.pop();t.byteLength_-=Qu(e),t.parts_.length>0&&(t.byteLength_-=1)}function v1(t){if(t.byteLength_>Jy)throw new Error(t.errorPrefix_+"has a key path longer than "+Jy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xy+") or object contains a cycle "+$r(t))}function $r(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends y1{static getInstance(){return new ip}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=1e3,BP=60*5*1e3,Zy=30*1e3,WP=1.3,$P=3e4,HP="server_kill",e_=3;class Mn extends g1{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Mn.nextPersistentConnectionId_++,this.log_=Tl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lo,this.maxReconnectDelay_=BP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ip.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Be(s)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new _l,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,h=a.s;Mn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Cn(e,"w")){const r=gs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||FI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xd("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$P&&(this.reconnectDelay_=lo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(f){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:h};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);o?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new MP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,T=>{dt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(HP)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&dt(f),u())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gd(this.interruptReasons_)&&(this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=e_&&(this.reconnectDelay_=Zy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=e_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yw.replace(/\./g,"-")]=1,jf()?e["framework.cordova"]=1:ew()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yu.getInstance().currentlyOnline();return gd(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ee(ys,e),i=new ee(ys,n);return this.compare(r,i)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class w1 extends rc{static get __EMPTY_NODE(){return ha}static set __EMPTY_NODE(e){ha=e}compare(e,n){return Ci(e.name,n.name)}isDefinedOn(e){throw Ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(fi,ha)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,ha)}toString(){return".key"}}const ss=new w1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Et.EMPTY_NODE,this.right=s??Et.EMPTY_NODE}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0;Ve.BLACK=!1;class GP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(e,n=Et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new da(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new da(this.root_,null,this.comparator_,!0,e)}}Et.EMPTY_NODE=new GP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t,e){return Ci(t.name,e.name)}function sp(t,e){return Ci(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td;function KP(t){Td=t}const E1=function(t){return typeof t=="number"?"number:"+Zw(t):"string:"+t},S1=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else F(t===Td||t.isEmpty(),"priority of unexpected type.");F(t===Td||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_;class Fe{static set __childrenNodeConstructor(e){t_=e}static get __childrenNodeConstructor(){return t_}constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),S1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:Z(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||Pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+E1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zw(this.value_):e+=this.value_,this.lazyHash_=Xw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return F(i>=0,"Unknown leaf type: "+n),F(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C1,x1;function YP(t){C1=t}function QP(t){x1=t}class XP extends rc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ci(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(fi,new Fe("[PRIORITY-POST]",x1))}makePost(e,n){const r=C1(e);return new ee(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ne=new XP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=Math.log(2);class ZP{constructor(e){const n=s=>parseInt(Math.log(s)/JP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _u=function(t,e,n,r){t.sort(e);const i=function(u,h){const m=h-u;let f,p;if(m===0)return null;if(m===1)return f=t[u],p=n?n(f):f,new Ve(p,f.node,Ve.BLACK,null,null);{const T=parseInt(m/2,10)+u,N=i(u,T),A=i(T+1,h);return f=t[T],p=n?n(f):f,new Ve(p,f.node,Ve.BLACK,N,A)}},s=function(u){let h=null,m=null,f=t.length;const p=function(N,A){const D=f-N,x=f;f-=N;const v=i(D+1,x),k=t[D],b=n?n(k):k;T(new Ve(b,k.node,A,null,v))},T=function(N){h?(h.left=N,h=N):(m=N,h=N)};for(let N=0;N<u.count;++N){const A=u.nextBitIsOne(),D=Math.pow(2,u.count-(N+1));A?p(D,Ve.BLACK):(p(D,Ve.BLACK),p(D,Ve.RED))}return m},o=new ZP(t.length),a=s(o);return new Et(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh;const Di={};class bn{static get Default(){return F(Di&&Ne,"ChildrenNode.ts has not been loaded"),gh=gh||new bn({".priority":Di},{".priority":Ne}),gh}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=gs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Et?n:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=_u(r,e.getCompare()):a=Di;const u=e.toString(),h={...this.indexSet_};h[u]=e;const m={...this.indexes_};return m[u]=a,new bn(m,h)}addToIndexes(e,n){const r=ru(this.indexes_,(i,s)=>{const o=gs(this.indexSet_,s);if(F(o,"Missing index implementation for "+s),i===Di)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ee.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),_u(a,o.getCompare())}else return Di;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ee(e.name,a))),u.insert(e,e.node)}});return new bn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ru(this.indexes_,i=>{if(i===Di)return i;{const s=n.get(e.name);return s?i.remove(new ee(e.name,s)):i}});return new bn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;class Q{static get EMPTY_NODE(){return ao||(ao=new Q(new Et(sp),null,bn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&S1(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ao}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ao:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ao:this.priorityNode_;return new Q(i,o,s)}}updateChild(e,n){const r=Z(e);if(r===null)return n;{F(Z(e)!==".priority"||Pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ge(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ne,(o,a)=>{n[o]=a.val(e),r++,s&&Q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+E1(this.getPriority().val())+":"),this.forEachChild(Ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kl?-1:0}withIndex(e){if(e===ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ne),i=n.getIterator(Ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ss?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eR extends Q{constructor(){super(new Et(sp),Q.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const kl=new eR;Object.defineProperties(ee,{MIN:{value:new ee(ys,Q.EMPTY_NODE)},MAX:{value:new ee(fi,kl)}});w1.__EMPTY_NODE=Q.EMPTY_NODE;Fe.__childrenNodeConstructor=Q;KP(kl);QP(kl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=!0;function ze(t,e=null){if(t===null)return Q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,ze(e))}if(!(t instanceof Array)&&tR){const n=[];let r=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ze(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ee(o,u)))}}),n.length===0)return Q.EMPTY_NODE;const s=_u(n,qP,o=>o.name,sp);if(r){const o=_u(n,Ne.getCompare());return new Q(s,ze(e),new bn({".priority":o},{".priority":Ne}))}else return new Q(s,ze(e),bn.Default)}else{let n=Q.EMPTY_NODE;return Xe(t,(r,i)=>{if(Cn(t,r)&&r.substring(0,1)!=="."){const s=ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ze(e))}}YP(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR extends rc{constructor(e){super(),this.indexPath_=e,F(!te(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ci(e.name,n.name):s}makePost(e,n){const r=ze(e),i=Q.EMPTY_NODE.updateChild(this.indexPath_,r);return new ee(n,i)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,kl);return new ee(fi,e)}toString(){return ll(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR extends rc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ci(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const r=ze(e);return new ee(n,r)}toString(){return".value"}}const iR=new rR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){return{type:"value",snapshotNode:t}}function _s(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function al(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ul(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(al(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_s(n,r)):o.trackChildChange(ul(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(al(i,s))}),n.isLeafNode()||n.forEachChild(Ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ul(i,s,o))}else r.trackChildChange(_s(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.indexedFilter_=new op(e.getIndex()),this.index_=e.getIndex(),this.startPost_=cl.getStartPost_(e),this.endPost_=cl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ee(n,r))||(r=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Q.EMPTY_NODE);const s=this;return n.forEachChild(Ne,(o,a)=>{s.matches(new ee(o,a))||(i=i.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new cl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ee(n,r))||(r=Q.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Q.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Q.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,T)=>f(T,p)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const u=new ee(n,r),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),m=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,h,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const T=p==null?1:o(p,u);if(m&&!r.isEmpty()&&T>=0)return s!=null&&s.trackChildChange(ul(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(al(n,f));const A=a.updateImmediateChild(n,Q.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(_s(p.name,p.node)),A.updateImmediateChild(p.name,p.node)):A}}else return r.isEmpty()?e:m&&o(h,u)>=0?(s!=null&&(s.trackChildChange(al(h.name,h.node)),s.trackChildChange(_s(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(h.name,Q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ys}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new lp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lR(t){return t.loadsAllData()?new op(t.getIndex()):t.hasLimit()?new oR(t):new cl(t)}function n_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ne?n="$priority":t.index_===iR?n="$value":t.index_===ss?n="$key":(F(t.index_ instanceof nR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function r_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends g1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Tl("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vu.getListenId_(e,r),a={};this.listens_[o]=a;const u=n_(e._queryParams);this.restRequest_(s+".json",u,(h,m)=>{let f=m;if(h===404&&(f=null,h=null),h===null&&this.onDataUpdate_(s,f,!1,r),gs(this.listens_,o)===a){let p;h?h===401?p="permission_denied":p="rest_error:"+h:p="ok",i(p,null)}})}unlisten(e,n){const r=vu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=n_(e._queryParams),r=e._path.toString(),i=new _l;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ns(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=nl(a.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){return{value:null,children:new Map}}function T1(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Z(e);t.children.has(r)||t.children.set(r,wu());const i=t.children.get(r);e=ge(e),T1(i,e,n)}}function kd(t,e,n){t.value!==null?n(e,t.value):uR(t,(r,i)=>{const s=new de(e.toString()+"/"+r);kd(i,s,n)})}function uR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=10*1e3,hR=30*1e3,dR=5*60*1e3;class fR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cR(e);const r=i_+(hR-i_)*Math.random();Do(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Xe(e,(i,s)=>{s>0&&Cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Do(this.reportStats_.bind(this),Math.floor(Math.random()*2*dR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zt||(Zt={}));function ap(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function up(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Zt.ACK_USER_WRITE,this.source=ap()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new Eu(ae(),n,this.revert)}}else return F(Z(this.path)===e,"operationForChild called for unrelated child."),new Eu(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.source=e,this.path=n,this.type=Zt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new hl(this.source,ae()):new hl(this.source,ge(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Zt.OVERWRITE}operationForChild(e){return te(this.path)?new pi(this.source,ae(),this.snap.getImmediateChild(e)):new pi(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Zt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new pi(this.source,ae(),n.value):new vs(this.source,ae(),n)}else return F(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(sR(o.childName,o.snapshotNode))}),uo(t,i,"child_removed",e,r,n),uo(t,i,"child_added",e,r,n),uo(t,i,"child_moved",s,r,n),uo(t,i,"child_changed",e,r,n),uo(t,i,"value",e,r,n),i}function uo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>yR(t,a,u)),o.forEach(a=>{const u=gR(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function gR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yR(t,e,n){if(e.childName==null||n.childName==null)throw Ts("Should only compare child_ events.");const r=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e){return{eventCache:t,serverCache:e}}function bo(t,e,n,r){return ic(new mi(e,n,r),t.serverCache)}function k1(t,e,n,r){return ic(t.eventCache,new mi(e,n,r))}function Nd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh;const _R=()=>(yh||(yh=new Et(nP)),yh);class me{static fromObject(e){let n=new me(null);return Xe(e,(r,i)=>{n=n.set(new de(r),i)}),n}constructor(e,n=_R()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(te(e))return null;{const r=Z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ge(e),n);return s!=null?{path:ke(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=Z(e),r=this.children.get(n);return r!==null?r.subtree(ge(e)):new me(null)}}set(e,n){if(te(e))return new me(n,this.children);{const r=Z(e),s=(this.children.get(r)||new me(null)).set(ge(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Z(e),r=this.children.get(n);if(r){const i=r.remove(ge(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(te(e))return this.value;{const n=Z(e),r=this.children.get(n);return r?r.get(ge(e)):null}}setTree(e,n){if(te(e))return n;{const r=Z(e),s=(this.children.get(r)||new me(null)).setTree(ge(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(te(e))return null;{const s=Z(e),o=this.children.get(s);return o?o.findOnPath_(ge(e),ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,r){if(te(e))return this;{this.value&&r(n,this.value);const i=Z(e),s=this.children.get(i);return s?s.foreachOnPath_(ge(e),ke(n,i),r):new me(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new me(null))}}function Lo(t,e,n){if(te(e))return new nn(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=wt(i,e);return s=s.updateChild(o,n),new nn(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new nn(s)}}}function Pd(t,e,n){let r=t;return Xe(n,(i,s)=>{r=Lo(r,ke(e,i),s)}),r}function s_(t,e){if(te(e))return nn.empty();{const n=t.writeTree_.setTree(e,new me(null));return new nn(n)}}function Rd(t,e){return xi(t,e)!=null}function xi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(wt(n.path,e)):null}function o_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ne,(r,i)=>{e.push(new ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ee(r,i.value))}),e}function Cr(t,e){if(te(e))return t;{const n=xi(t,e);return n!=null?new nn(new me(n)):new nn(t.writeTree_.subtree(e))}}function Ad(t){return t.writeTree_.isEmpty()}function ws(t,e){return N1(ae(),t.writeTree_,e)}function N1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(F(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=N1(ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){return O1(e,t)}function vR(t,e,n,r,i){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Lo(t.visibleWrites,e,n)),t.lastWriteId=r}function wR(t,e,n,r){F(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Pd(t.visibleWrites,e,n),t.lastWriteId=r}function ER(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function SR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&CR(a,r.path)?i=!1:Ft(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return xR(t),!0;if(r.snap)t.visibleWrites=s_(t.visibleWrites,r.path);else{const a=r.children;Xe(a,u=>{t.visibleWrites=s_(t.visibleWrites,ke(r.path,u))})}return!0}else return!1}function CR(t,e){if(t.snap)return Ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ft(ke(t.path,n),e))return!0;return!1}function xR(t){t.visibleWrites=P1(t.allWrites,IR,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function IR(t){return t.visible}function P1(t,e,n){let r=nn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ft(n,o)?(a=wt(n,o),r=Lo(r,a,s.snap)):Ft(o,n)&&(a=wt(o,n),r=Lo(r,ae(),s.snap.getChild(a)));else if(s.children){if(Ft(n,o))a=wt(n,o),r=Pd(r,a,s.children);else if(Ft(o,n))if(a=wt(o,n),te(a))r=Pd(r,ae(),s.children);else{const u=gs(s.children,Z(a));if(u){const h=u.getChild(ge(a));r=Lo(r,ae(),h)}}}else throw Ts("WriteRecord should have .snap or .children")}}return r}function R1(t,e,n,r,i){if(!r&&!i){const s=xi(t.visibleWrites,e);if(s!=null)return s;{const o=Cr(t.visibleWrites,e);if(Ad(o))return n;if(n==null&&!Rd(o,ae()))return null;{const a=n||Q.EMPTY_NODE;return ws(o,a)}}}else{const s=Cr(t.visibleWrites,e);if(!i&&Ad(s))return n;if(!i&&n==null&&!Rd(s,ae()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(Ft(h.path,e)||Ft(e,h.path))},a=P1(t.allWrites,o,e),u=n||Q.EMPTY_NODE;return ws(a,u)}}}function TR(t,e,n){let r=Q.EMPTY_NODE;const i=xi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cr(t.visibleWrites,e);return n.forEachChild(Ne,(o,a)=>{const u=ws(Cr(s,new de(o)),a);r=r.updateImmediateChild(o,u)}),o_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cr(t.visibleWrites,e);return o_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function kR(t,e,n,r,i){F(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ke(e,n);if(Rd(t.visibleWrites,s))return null;{const o=Cr(t.visibleWrites,s);return Ad(o)?i.getChild(n):ws(o,i.getChild(n))}}function NR(t,e,n,r){const i=ke(e,n),s=xi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cr(t.visibleWrites,i);return ws(o,r.getNode().getImmediateChild(n))}else return null}function PR(t,e){return xi(t.visibleWrites,e)}function RR(t,e,n,r,i,s,o){let a;const u=Cr(t.visibleWrites,e),h=xi(u,ae());if(h!=null)a=h;else if(n!=null)a=ws(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const m=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let T=p.getNext();for(;T&&m.length<i;)f(T,r)!==0&&m.push(T),T=p.getNext();return m}else return[]}function AR(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function Su(t,e,n,r){return R1(t.writeTree,t.treePath,e,n,r)}function dp(t,e){return TR(t.writeTree,t.treePath,e)}function l_(t,e,n,r){return kR(t.writeTree,t.treePath,e,n,r)}function Cu(t,e){return PR(t.writeTree,ke(t.treePath,e))}function OR(t,e,n,r,i,s){return RR(t.writeTree,t.treePath,e,n,r,i,s)}function fp(t,e,n){return NR(t.writeTree,t.treePath,e,n)}function A1(t,e){return O1(ke(t.treePath,e),t.writeTree)}function O1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ul(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,al(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,_s(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ul(r,e.snapshotNode,i.oldSnap));else throw Ts("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const D1=new bR;class pp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gi(this.viewCache_),s=OR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){return{filter:t}}function MR(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jR(t,e,n,r,i){const s=new DR;let o,a;if(n.type===Zt.OVERWRITE){const h=n;h.source.fromUser?o=Od(t,e,h.path,h.snap,r,i,s):(F(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!te(h.path),o=xu(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===Zt.MERGE){const h=n;h.source.fromUser?o=UR(t,e,h.path,h.children,r,i,s):(F(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Dd(t,e,h.path,h.children,r,i,a,s))}else if(n.type===Zt.ACK_USER_WRITE){const h=n;h.revert?o=BR(t,e,h.path,r,i,s):o=VR(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===Zt.LISTEN_COMPLETE)o=zR(t,e,n.path,r,s);else throw Ts("Unknown operation type: "+n.type);const u=s.getChanges();return FR(e,o,u),{viewCache:o,changes:u}}function FR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Nd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(I1(Nd(e)))}}function b1(t,e,n,r,i,s){const o=e.eventCache;if(Cu(r,n)!=null)return e;{let a,u;if(te(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=gi(e),m=h instanceof Q?h:Q.EMPTY_NODE,f=dp(r,m);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const h=Su(r,gi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=Z(n);if(h===".priority"){F(Pr(n)===1,"Can't have a priority with additional path components");const m=o.getNode();u=e.serverCache.getNode();const f=l_(r,n,m,u);f!=null?a=t.filter.updatePriority(m,f):a=o.getNode()}else{const m=ge(n);let f;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const p=l_(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(h).updateChild(m,p):f=o.getNode().getImmediateChild(h)}else f=fp(r,h,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),h,f,m,i,s):a=o.getNode()}}return bo(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function xu(t,e,n,r,i,s,o,a){const u=e.serverCache;let h;const m=o?t.filter:t.filter.getIndexedFilter();if(te(n))h=m.updateFullNode(u.getNode(),r,null);else if(m.filtersNodes()&&!u.isFiltered()){const T=u.getNode().updateChild(n,r);h=m.updateFullNode(u.getNode(),T,null)}else{const T=Z(n);if(!u.isCompleteForPath(n)&&Pr(n)>1)return e;const N=ge(n),D=u.getNode().getImmediateChild(T).updateChild(N,r);T===".priority"?h=m.updatePriority(u.getNode(),D):h=m.updateChild(u.getNode(),T,D,N,D1,null)}const f=k1(e,h,u.isFullyInitialized()||te(n),m.filtersNodes()),p=new pp(i,f,s);return b1(t,f,n,i,p,a)}function Od(t,e,n,r,i,s,o){const a=e.eventCache;let u,h;const m=new pp(i,e,s);if(te(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=bo(e,h,!0,t.filter.filtersNodes());else{const f=Z(n);if(f===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=bo(e,h,a.isFullyInitialized(),a.isFiltered());else{const p=ge(n),T=a.getNode().getImmediateChild(f);let N;if(te(p))N=r;else{const A=m.getCompleteChild(f);A!=null?np(p)===".priority"&&A.getChild(_1(p)).isEmpty()?N=A:N=A.updateChild(p,r):N=Q.EMPTY_NODE}if(T.equals(N))u=e;else{const A=t.filter.updateChild(a.getNode(),f,N,p,m,o);u=bo(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function a_(t,e){return t.eventCache.isCompleteForChild(e)}function UR(t,e,n,r,i,s,o){let a=e;return r.foreach((u,h)=>{const m=ke(n,u);a_(e,Z(m))&&(a=Od(t,a,m,h,i,s,o))}),r.foreach((u,h)=>{const m=ke(n,u);a_(e,Z(m))||(a=Od(t,a,m,h,i,s,o))}),a}function u_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Dd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;te(n)?h=r:h=new me(null).setTree(n,r);const m=e.serverCache.getNode();return h.children.inorderTraversal((f,p)=>{if(m.hasChild(f)){const T=e.serverCache.getNode().getImmediateChild(f),N=u_(t,T,p);u=xu(t,u,new de(f),N,i,s,o,a)}}),h.children.inorderTraversal((f,p)=>{const T=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!m.hasChild(f)&&!T){const N=e.serverCache.getNode().getImmediateChild(f),A=u_(t,N,p);u=xu(t,u,new de(f),A,i,s,o,a)}}),u}function VR(t,e,n,r,i,s,o){if(Cu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(te(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return xu(t,e,n,u.getNode().getChild(n),i,s,a,o);if(te(n)){let h=new me(null);return u.getNode().forEachChild(ss,(m,f)=>{h=h.set(new de(m),f)}),Dd(t,e,n,h,i,s,a,o)}else return e}else{let h=new me(null);return r.foreach((m,f)=>{const p=ke(n,m);u.isCompleteForPath(p)&&(h=h.set(m,u.getNode().getChild(p)))}),Dd(t,e,n,h,i,s,a,o)}}function zR(t,e,n,r,i){const s=e.serverCache,o=k1(e,s.getNode(),s.isFullyInitialized()||te(n),s.isFiltered());return b1(t,o,n,r,D1,i)}function BR(t,e,n,r,i,s){let o;if(Cu(r,n)!=null)return e;{const a=new pp(r,e,i),u=e.eventCache.getNode();let h;if(te(n)||Z(n)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=Su(r,gi(e));else{const f=e.serverCache.getNode();F(f instanceof Q,"serverChildren would be complete if leaf node"),m=dp(r,f)}m=m,h=t.filter.updateFullNode(u,m,s)}else{const m=Z(n);let f=fp(r,m,e.serverCache);f==null&&e.serverCache.isCompleteForChild(m)&&(f=u.getImmediateChild(m)),f!=null?h=t.filter.updateChild(u,m,f,ge(n),a,s):e.eventCache.getNode().hasChild(m)?h=t.filter.updateChild(u,m,Q.EMPTY_NODE,ge(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Su(r,gi(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Cu(r,ae())!=null,bo(e,h,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new op(r.getIndex()),s=lR(r);this.processor_=LR(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),m=new mi(u,o.isFullyInitialized(),i.filtersNodes()),f=new mi(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ic(f,m),this.eventGenerator_=new pR(this.query_)}get query(){return this.query_}}function $R(t){return t.viewCache_.serverCache.getNode()}function HR(t,e){const n=gi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function c_(t){return t.eventRegistrations_.length===0}function GR(t,e){t.eventRegistrations_.push(e)}function h_(t,e,n){const r=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function d_(t,e,n,r){e.type===Zt.MERGE&&e.source.queryId!==null&&(F(gi(t.viewCache_),"We should always have a full cache before handling merges"),F(Nd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jR(t.processor_,i,e,n,r);return MR(t.processor_,s.viewCache),F(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,L1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function qR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ne,(s,o)=>{r.push(_s(s,o))}),n.isFullyInitialized()&&r.push(I1(n.getNode())),L1(t,r,n.getNode(),e)}function L1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return mR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;class KR{constructor(){this.views=new Map}}function YR(t){F(!Iu,"__referenceConstructor has already been defined"),Iu=t}function QR(){return F(Iu,"Reference.ts has not been loaded"),Iu}function XR(t){return t.views.size===0}function mp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return F(s!=null,"SyncTree gave us an op for an invalid query."),d_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(d_(o,e,n,r));return s}}function JR(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Su(n,i?r:null),u=!1;a?u=!0:r instanceof Q?(a=dp(n,r),u=!1):(a=Q.EMPTY_NODE,u=!1);const h=ic(new mi(a,u,!1),new mi(r,i,!1));return new WR(e,h)}return o}function ZR(t,e,n,r,i,s){const o=JR(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),GR(o,n),qR(o,n)}function eA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Rr(t);if(i==="default")for(const[u,h]of t.views.entries())o=o.concat(h_(h,n,r)),c_(h)&&(t.views.delete(u),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=t.views.get(i);u&&(o=o.concat(h_(u,n,r)),c_(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!Rr(t)&&s.push(new(QR())(e._repo,e._path)),{removed:s,events:o}}function M1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function os(t,e){let n=null;for(const r of t.views.values())n=n||HR(r,e);return n}function j1(t,e){if(e._queryParams.loadsAllData())return sc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function F1(t,e){return j1(t,e)!=null}function Rr(t){return sc(t)!=null}function sc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;function tA(t){F(!Tu,"__referenceConstructor has already been defined"),Tu=t}function nA(){return F(Tu,"Reference.ts has not been loaded"),Tu}let rA=1;class f_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=AR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U1(t,e,n,r,i){return vR(t.pendingWriteTree_,e,n,r,i),i?Rs(t,new pi(ap(),e,n)):[]}function iA(t,e,n,r){wR(t.pendingWriteTree_,e,n,r);const i=me.fromObject(n);return Rs(t,new vs(ap(),e,i))}function dr(t,e,n=!1){const r=ER(t.pendingWriteTree_,e);if(SR(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(ae(),!0):Xe(r.children,o=>{s=s.set(new de(o),!0)}),Rs(t,new Eu(r.path,s,n))}else return[]}function oc(t,e,n){return Rs(t,new pi(up(),e,n))}function sA(t,e,n){const r=me.fromObject(n);return Rs(t,new vs(up(),e,r))}function oA(t,e){return Rs(t,new hl(up(),e))}function lA(t,e,n){const r=yp(t,n);if(r){const i=_p(r),s=i.path,o=i.queryId,a=wt(s,e),u=new hl(cp(o),a);return vp(t,s,u)}else return[]}function bd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||F1(o,e))){const u=eA(o,e,n,r);XR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const h=u.removed;if(a=u.events,!i){const m=h.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,T)=>Rr(T));if(m&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const T=cA(p);for(let N=0;N<T.length;++N){const A=T[N],D=A.query,x=B1(t,A);t.listenProvider_.startListening(Mo(D),ku(t,D),x.hashFn,x.onComplete)}}}!f&&h.length>0&&!r&&(m?t.listenProvider_.stopListening(Mo(e),null):h.forEach(p=>{const T=t.queryToTagMap.get(lc(p));t.listenProvider_.stopListening(Mo(p),T)}))}hA(t,h)}return a}function aA(t,e,n,r){const i=yp(t,r);if(i!=null){const s=_p(i),o=s.path,a=s.queryId,u=wt(o,e),h=new pi(cp(a),u,n);return vp(t,o,h)}else return[]}function uA(t,e,n,r){const i=yp(t,r);if(i){const s=_p(i),o=s.path,a=s.queryId,u=wt(o,e),h=me.fromObject(n),m=new vs(cp(a),u,h);return vp(t,o,m)}else return[]}function p_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,T)=>{const N=wt(p,i);s=s||os(T,N),o=o||Rr(T)});let a=t.syncPointTree_.get(i);a?(o=o||Rr(a),s=s||os(a,ae())):(a=new KR,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=Q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((T,N)=>{const A=os(N,ae());A&&(s=s.updateImmediateChild(T,A))}));const h=F1(a,e);if(!h&&!e._queryParams.loadsAllData()){const p=lc(e);F(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const T=dA();t.queryToTagMap.set(p,T),t.tagToQueryMap.set(T,p)}const m=hp(t.pendingWriteTree_,i);let f=ZR(a,e,n,m,s,u);if(!h&&!o&&!r){const p=j1(a,e);f=f.concat(fA(t,e,p))}return f}function gp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=wt(o,e),h=os(a,u);if(h)return h});return R1(i,e,s,n,!0)}function Rs(t,e){return V1(e,t.syncPointTree_,null,hp(t.pendingWriteTree_,ae()))}function V1(t,e,n,r){if(te(t.path))return z1(t,e,n,r);{const i=e.get(ae());n==null&&i!=null&&(n=os(i,ae()));let s=[];const o=Z(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,m=A1(r,o);s=s.concat(V1(a,u,h,m))}return i&&(s=s.concat(mp(i,t,r,n))),s}}function z1(t,e,n,r){const i=e.get(ae());n==null&&i!=null&&(n=os(i,ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=A1(r,o),m=t.operationForChild(o);m&&(s=s.concat(z1(m,a,u,h)))}),i&&(s=s.concat(mp(i,t,r,n))),s}function B1(t,e){const n=e.query,r=ku(t,n);return{hashFn:()=>($R(e)||Q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?lA(t,n._path,r):oA(t,n._path);{const s=sP(i,n);return bd(t,n,null,s)}}}}function ku(t,e){const n=lc(e);return t.queryToTagMap.get(n)}function lc(t){return t._path.toString()+"$"+t._queryIdentifier}function yp(t,e){return t.tagToQueryMap.get(e)}function _p(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function vp(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const i=hp(t.pendingWriteTree_,e);return mp(r,n,i,null)}function cA(t){return t.fold((e,n,r)=>{if(n&&Rr(n))return[sc(n)];{let i=[];return n&&(i=M1(n)),Xe(r,(s,o)=>{i=i.concat(o)}),i}})}function Mo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nA())(t._repo,t._path):t}function hA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=lc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function dA(){return rA++}function fA(t,e,n){const r=e._path,i=ku(t,e),s=B1(t,n),o=t.listenProvider_.startListening(Mo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)F(!Rr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((h,m,f)=>{if(!te(h)&&m&&Rr(m))return[sc(m).query];{let p=[];return m&&(p=p.concat(M1(m).map(T=>T.query))),Xe(f,(T,N)=>{p=p.concat(N)}),p}});for(let h=0;h<u.length;++h){const m=u[h];t.listenProvider_.stopListening(Mo(m),ku(t,m))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wp(n)}node(){return this.node_}}class Ep{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new Ep(this.syncTree_,n)}node(){return gp(this.syncTree_,this.path_)}}const pA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},m_=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gA(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},gA=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},W1=function(t,e,n,r){return Sp(e,new Ep(n,t),r)},$1=function(t,e,n){return Sp(t,new wp(e),n)};function Sp(t,e,n){const r=t.getPriority().val(),i=m_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=m_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(Ne,(a,u)=>{const h=Sp(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function xp(t,e){let n=e instanceof de?e:new de(e),r=t,i=Z(n);for(;i!==null;){const s=gs(r.node.children,i)||{children:{},childCount:0};r=new Cp(i,r,s),n=ge(n),i=Z(n)}return r}function As(t){return t.node.value}function H1(t,e){t.node.value=e,Ld(t)}function G1(t){return t.node.childCount>0}function yA(t){return As(t)===void 0&&!G1(t)}function ac(t,e){Xe(t.node.children,(n,r)=>{e(new Cp(n,t,r))})}function q1(t,e,n,r){n&&e(t),ac(t,i=>{q1(i,e,!0)})}function _A(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Nl(t){return new de(t.parent===null?t.name:Nl(t.parent)+"/"+t.name)}function Ld(t){t.parent!==null&&vA(t.parent,t.name,t)}function vA(t,e,n){const r=yA(n),i=Cn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ld(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ld(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=/[\[\].#$\/\u0000-\u001F\u007F]/,EA=/[\[\].#$\u0000-\u001F\u007F]/,_h=10*1024*1024,Ip=function(t){return typeof t=="string"&&t.length!==0&&!wA.test(t)},K1=function(t){return typeof t=="string"&&t.length!==0&&!EA.test(t)},SA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),K1(t)},CA=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Xf(t)||t&&typeof t=="object"&&Cn(t,".sv")},Y1=function(t,e,n,r){r&&e===void 0||uc(Yu(t,"value"),e,n)},uc=function(t,e,n){const r=n instanceof de?new UP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$r(r));if(typeof e=="function")throw new Error(t+"contains a function "+$r(r)+" with contents = "+e.toString());if(Xf(e))throw new Error(t+"contains "+e.toString()+" "+$r(r));if(typeof e=="string"&&e.length>_h/3&&Qu(e)>_h)throw new Error(t+"contains a string greater than "+_h+" utf8 bytes "+$r(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ip(o)))throw new Error(t+" contains an invalid key ("+o+") "+$r(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VP(r,o),uc(t,a,r),zP(r)}),i&&s)throw new Error(t+' contains ".value" child '+$r(r)+" in addition to actual children.")}},xA=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ll(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ip(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(FP);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ft(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},IA=function(t,e,n,r){const i=Yu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Xe(e,(o,a)=>{const u=new de(o);if(uc(i,a,ke(n,u)),np(u)===".priority"&&!CA(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),xA(i,s)},Q1=function(t,e,n,r){if(!K1(n))throw new Error(Yu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TA=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Q1(t,e,n)},X1=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ip(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SA(n))throw new Error(Yu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function cc(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function J1(t,e,n){cc(t,n),Z1(t,r=>rp(r,e))}function on(t,e,n){cc(t,n),Z1(t,r=>Ft(r,e)||Ft(e,r))}function Z1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(PA(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Oo&&Ke("event: "+n.toString()),Ps(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="repo_interrupt",AA=25;class OA{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wu(),this.transactionQueueTree_=new Cp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DA(t,e,n){if(t.stats_=ep(t.repoInfo_),t.forceRestClient_||uP())t.server_=new vu(t.repoInfo_,(r,i,s,o)=>{g_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>y_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(r,i,s,o)=>{g_(t,r,i,s,o)},r=>{y_(t,r)},r=>{bA(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pP(t.repoInfo_,()=>new fR(t.stats_,t.server_)),t.infoData_=new aR,t.infoSyncTree_=new f_({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=oc(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tp(t,"connected",!1),t.serverSyncTree_=new f_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const h=o(a,u);on(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function eE(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hc(t){return pA({timestamp:eE(t)})}function g_(t,e,n,r,i){t.dataUpdateCount++;const s=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=ru(n,h=>ze(h));o=uA(t.serverSyncTree_,s,u,i)}else{const u=ze(n);o=aA(t.serverSyncTree_,s,u,i)}else if(r){const u=ru(n,h=>ze(h));o=sA(t.serverSyncTree_,s,u)}else{const u=ze(n);o=oc(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Es(t,s)),on(t.eventQueue_,a,o)}function y_(t,e){Tp(t,"connected",e),e===!1&&jA(t)}function bA(t,e){Xe(e,(n,r)=>{Tp(t,n,r)})}function Tp(t,e,n){const r=new de("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(r,i);const s=oc(t.infoSyncTree_,r,i);on(t.eventQueue_,r,s)}function kp(t){return t.nextWriteId_++}function LA(t,e,n,r,i){dc(t,"set",{path:e.toString(),value:n,priority:r});const s=hc(t),o=ze(n,r),a=gp(t.serverSyncTree_,e),u=$1(o,a,s),h=kp(t),m=U1(t.serverSyncTree_,e,u,h,!0);cc(t.eventQueue_,m),t.server_.put(e.toString(),o.val(!0),(p,T)=>{const N=p==="ok";N||dt("set at "+e+" failed: "+p);const A=dr(t.serverSyncTree_,h,!N);on(t.eventQueue_,e,A),Md(t,i,p,T)});const f=Pp(t,e);Es(t,f),on(t.eventQueue_,f,[])}function MA(t,e,n,r){dc(t,"update",{path:e.toString(),value:n});let i=!0;const s=hc(t),o={};if(Xe(n,(a,u)=>{i=!1,o[a]=W1(ke(e,a),ze(u),t.serverSyncTree_,s)}),i)Ke("update() called with empty data.  Don't do anything."),Md(t,r,"ok",void 0);else{const a=kp(t),u=iA(t.serverSyncTree_,e,o,a);cc(t.eventQueue_,u),t.server_.merge(e.toString(),n,(h,m)=>{const f=h==="ok";f||dt("update at "+e+" failed: "+h);const p=dr(t.serverSyncTree_,a,!f),T=p.length>0?Es(t,e):e;on(t.eventQueue_,T,p),Md(t,r,h,m)}),Xe(n,h=>{const m=Pp(t,ke(e,h));Es(t,m)}),on(t.eventQueue_,e,[])}}function jA(t){dc(t,"onDisconnectEvents");const e=hc(t),n=wu();kd(t.onDisconnect_,ae(),(i,s)=>{const o=W1(i,s,t.serverSyncTree_,e);T1(n,i,o)});let r=[];kd(n,ae(),(i,s)=>{r=r.concat(oc(t.serverSyncTree_,i,s));const o=Pp(t,i);Es(t,o)}),t.onDisconnect_=wu(),on(t.eventQueue_,ae(),r)}function FA(t,e,n){let r;Z(e._path)===".info"?r=p_(t.infoSyncTree_,e,n):r=p_(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function UA(t,e,n){let r;Z(e._path)===".info"?r=bd(t.infoSyncTree_,e,n):r=bd(t.serverSyncTree_,e,n),J1(t.eventQueue_,e._path,r)}function VA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RA)}function dc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ke(n,...e)}function Md(t,e,n,r){e&&Ps(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function tE(t,e,n){return gp(t.serverSyncTree_,e,n)||Q.EMPTY_NODE}function Np(t,e=t.transactionQueueTree_){if(e||fc(t,e),As(e)){const n=rE(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zA(t,Nl(e),n)}else G1(e)&&ac(e,n=>{Np(t,n)})}function zA(t,e,n){const r=n.map(h=>h.currentWriteId),i=tE(t,e,r);let s=i;const o=i.hash();for(let h=0;h<n.length;h++){const m=n[h];F(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const f=wt(e,m.path);s=s.updateChild(f,m.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{dc(t,"transaction put response",{path:u.toString(),status:h});let m=[];if(h==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,m=m.concat(dr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();fc(t,xp(t.transactionQueueTree_,e)),Np(t,t.transactionQueueTree_),on(t.eventQueue_,e,m);for(let p=0;p<f.length;p++)Ps(f[p])}else{if(h==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{dt("transaction at "+u.toString()+" failed: "+h);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=h}Es(t,e)}},o)}function Es(t,e){const n=nE(t,e),r=Nl(n),i=rE(t,n);return BA(t,i,r),r}function BA(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=wt(n,u.path);let m=!1,f;if(F(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)m=!0,f=u.abortReason,i=i.concat(dr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=AA)m=!0,f="maxretry",i=i.concat(dr(t.serverSyncTree_,u.currentWriteId,!0));else{const p=tE(t,u.path,o);u.currentInputSnapshot=p;const T=e[a].update(p.val());if(T!==void 0){uc("transaction failed: Data returned ",T,u.path);let N=ze(T);typeof T=="object"&&T!=null&&Cn(T,".priority")||(N=N.updatePriority(p.getPriority()));const D=u.currentWriteId,x=hc(t),v=$1(N,p,x);u.currentOutputSnapshotRaw=N,u.currentOutputSnapshotResolved=v,u.currentWriteId=kp(t),o.splice(o.indexOf(D),1),i=i.concat(U1(t.serverSyncTree_,u.path,v,u.currentWriteId,u.applyLocally)),i=i.concat(dr(t.serverSyncTree_,D,!0))}else m=!0,f="nodata",i=i.concat(dr(t.serverSyncTree_,u.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],m&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}fc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ps(r[a]);Np(t,t.transactionQueueTree_)}function nE(t,e){let n,r=t.transactionQueueTree_;for(n=Z(e);n!==null&&As(r)===void 0;)r=xp(r,n),e=ge(e),n=Z(e);return r}function rE(t,e){const n=[];return iE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function iE(t,e,n){const r=As(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ac(e,i=>{iE(t,i,n)})}function fc(t,e){const n=As(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,H1(e,n.length>0?n:void 0)}ac(e,r=>{fc(t,r)})}function Pp(t,e){const n=Nl(nE(t,e)),r=xp(t.transactionQueueTree_,e);return _A(r,i=>{vh(t,i)}),vh(t,r),q1(r,i=>{vh(t,i)}),n}function vh(t,e){const n=As(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?H1(e,void 0):n.length=s+1,on(t.eventQueue_,Nl(e),i);for(let o=0;o<r.length;o++)Ps(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $A(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const __=function(t,e){const n=HA(t),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new u1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new de(n.pathString)}},HA=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let m=t.indexOf("/");m===-1&&(m=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(m,f)),m<f&&(i=WA(t.substring(m,f)));const p=$A(t.substring(Math.min(t.length,f)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const T=e.slice(0,h);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),n=e.substring(N+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=v_.charAt(n%64),n=Math.floor(n/64);F(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=v_.charAt(e[i]);return F(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class KA{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return te(this._path)?null:np(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=r_(this._queryParams),n=Jf(e);return n==="{}"?"default":n}get _queryObject(){return r_(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Rp))return!1;const n=this._repo===e._repo,r=rp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jP(this._path)}}class Lr extends Rp{constructor(e,n){super(e,n,new lp,!1)}get parent(){const e=_1(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nu{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=dl(this.ref,e);return new Nu(this._node.getChild(n),r,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Nu(i,dl(this.ref,r),Ne)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ls(t,e){return t=ot(t),t._checkNotDeleted("ref"),e!==void 0?dl(t._root,e):t._root}function dl(t,e){return t=ot(t),Z(t._path)===null?TA("child","path",e):Q1("child","path",e),new Lr(t._repo,ke(t._path,e))}function sE(t,e){t=ot(t),X1("push",t._path),Y1("push",e,t._path,!0);const n=eE(t._repo),r=GA(n),i=dl(t,r),s=dl(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function oE(t,e){t=ot(t),X1("set",t._path),Y1("set",e,t._path,!1);const n=new _l;return LA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function QA(t,e){IA("update",e,t._path);const n=new _l;return MA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ap{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new qA("value",this,new Nu(e.snapshotNode,new Lr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new KA(this,e,n):null}matches(e){return e instanceof Ap?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function XA(t,e,n,r,i){const s=new YA(n,void 0),o=new Ap(s);return FA(t._repo,t,o),()=>UA(t._repo,t,o)}function Op(t,e,n,r){return XA(t,"value",e)}YR(Lr);tA(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="FIREBASE_DATABASE_EMULATOR_HOST",jd={};let ZA=!1;function e4(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ks(s);t.repoInfo_=new u1(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function t4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=__(s,i),a=o.repoInfo,u;typeof process<"u"&&Uy&&(u=Uy[JA]),u?(s=`http://${u}?ns=${a.namespace}`,o=__(s,i),a=o.repoInfo):o.repoInfo.secure;const h=new hP(t.name,t.options,e);kA("Invalid Firebase Database URL",o),te(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const m=r4(a,t,h,new cP(t,n));return new i4(m,t)}function n4(t,e){const n=jd[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VA(t),delete n[t.key]}function r4(t,e,n,r){let i=jd[e.name];i||(i={},jd[e.name]=i);let s=i[t.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new OA(t,ZA,n,r),i[t.toURLString()]=s,s}class i4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function s4(t=sw(),e){const n=Uf(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=xI("database");r&&o4(n,...r)}return n}function o4(t,e,n,r={}){t=ot(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ai(r,s.repoInfo_.emulatorOptions))return;Wn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ra(Ra.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:II(r.mockUserToken,t.app.options.projectId);o=new Ra(a)}ks(e)&&(J0(e),Z0("Database",!0)),e4(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(t){K2(Ei),ui(new kr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return t4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),vn(Vy,zy,t),vn(Vy,zy,"esm2020")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};l4();const a4={apiKey:"AIzaSyBlaEXQp4cMSWbYfJ-d6Gg07Ge9Q0VVjao",authDomain:"fir-dlqkr.firebaseapp.com",projectId:"fir-dlqkr",storageBucket:"fir-dlqkr.firebasestorage.app",messagingSenderId:"818684156502",appId:"1:818684156502:web:de8c709e107671a43079f7"};console.log("firebaseConfig");const lE=iw(a4),xr=m2(lE),as=s4(lE),aE=L.createContext({user:null,setUser:()=>{}}),Dp=()=>L.useContext(aE),u4=({children:t})=>{const[e,n]=L.useState(null);return L.useEffect(()=>{const r=rN(xr,i=>{n(i?{email:i.email||void 0}:null)});return()=>r()},[]),g.jsx(aE.Provider,{value:{user:e,setUser:n},children:t})},c4=t=>t?t.email?t.email.split("@")[0]:t.name?t.name:"":"",h4=({editorOnly:t})=>{const e=wi(),[n,r]=L.useState(!1),{user:i,setUser:s}=Dp(),o=c4(i),a=async()=>{await iN(xr),s(null),e("/")};return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"md:hidden flex items-center justify-between px-4 py-2 bg-white border-b shadow-sm sticky top-0 z-40",children:[g.jsxs("button",{onClick:()=>e("/"),className:"flex items-center space-x-2",children:[g.jsx(ei,{className:"h-7 w-7 text-indigo-600"}),g.jsx("span",{className:"text-xl font-bold text-gray-900",children:"MindGram"})]}),g.jsx("button",{onClick:()=>r(u=>!u),className:"p-2 rounded-lg hover:bg-gray-100",children:n?g.jsx("span",{style:{fontSize:24},children:"✕"}):g.jsx("span",{style:{fontSize:24},children:"☰"})})]}),n&&g.jsx("div",{className:"md:hidden fixed inset-0 z-50 bg-black/30",onClick:()=>r(!1),children:g.jsxs("div",{className:"absolute top-0 right-0 w-2/3 max-w-xs h-full bg-white shadow-lg flex flex-col justify-center items-center p-8 space-y-6",onClick:u=>u.stopPropagation(),children:[g.jsxs("button",{onClick:()=>{e("/community"),r(!1)},className:"flex items-center w-full text-indigo-600 font-bold text-xl py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors",children:[g.jsx("span",{className:"mr-3",role:"img","aria-label":"community",children:"🌐"}),"커뮤니티"]}),g.jsxs("button",{onClick:()=>{e("/editor"),r(!1)},className:"flex items-center w-full text-gray-700 font-medium text-xl py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors",children:[g.jsx("span",{className:"mr-3",role:"img","aria-label":"create",children:"📝"}),"만들기"]}),i?g.jsxs("span",{className:"flex items-center w-full text-gray-700 text-xl py-3 px-4",children:[g.jsx("span",{className:"mr-3",role:"img","aria-label":"user",children:"👤"}),o,"님!",g.jsxs("button",{onClick:a,className:"ml-4 flex items-center text-red-500 hover:text-red-700 text-base",children:[g.jsx(Ug,{className:"h-5 w-5 mr-1"}),"로그아웃"]})]}):g.jsxs(g.Fragment,{children:[g.jsxs("button",{onClick:()=>{e("/login"),r(!1)},className:"flex items-center w-full text-gray-700 text-xl py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors",children:[g.jsx("span",{className:"mr-3",role:"img","aria-label":"login",children:"🔑"}),"로그인"]}),g.jsxs("button",{onClick:()=>{e("/signup"),r(!1)},className:"flex items-center w-full justify-center bg-indigo-600 text-white text-xl py-3 px-4 rounded-lg hover:bg-indigo-700 mt-2 transition-colors",children:[g.jsx("span",{className:"mr-3",role:"img","aria-label":"signup",children:"✨"}),"회원가입"]})]})]})}),g.jsx("nav",{className:"hidden md:block bg-white shadow-sm border-b",children:g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex justify-between items-center h-16",children:[g.jsx("div",{className:"flex items-center space-x-2",children:g.jsxs("button",{onClick:()=>e("/"),className:"flex items-center space-x-2",children:[g.jsx(ei,{className:"h-8 w-8 text-indigo-600"}),g.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"MindGram"})]})}),g.jsxs("div",{className:"flex items-center space-x-6",children:[g.jsx("button",{onClick:()=>e("/community"),className:"text-gray-700 hover:text-indigo-600 font-medium transition-colors",children:"커뮤니티"}),g.jsx("button",{onClick:()=>e("/editor"),className:"text-gray-700 hover:text-indigo-600 font-medium transition-colors",children:"만들기"}),i?g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsxs("span",{className:"text-gray-700 cursor-pointer hover:underline hover:text-indigo-600",onClick:()=>e("/dashboard"),children:[o,"님!"]}),g.jsxs("button",{onClick:a,className:"flex items-center text-red-500 hover:text-red-700 text-base ml-2",children:[g.jsx(Ug,{className:"h-5 w-5 mr-1"}),"로그아웃"]})]}):g.jsxs("div",{className:"flex space-x-2",children:[g.jsxs("button",{onClick:()=>e("/login"),className:"flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors",children:[g.jsx(aI,{className:"h-4 w-4"}),g.jsx("span",{children:"로그인"})]}),g.jsxs("button",{onClick:()=>e("/signup"),className:"flex items-center space-x-1 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors",children:[g.jsx(fI,{className:"h-4 w-4"}),g.jsx("span",{children:"회원가입"})]})]})]})]})})})]})},Pu=Bd.memo(h4);async function co(t){const e=await fetch("https://us-central1-fir-dlqkr.cloudfunctions.net/api/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})});if(!e.ok){const r=await e.json();throw new Error(r.error||"API 호출 실패")}return(await e.json()).result}const wh=t=>{var De,je,Mr,Us;const e=wi(),{user:n,setUser:r}=Dp(),i=t.editorOnly,s=t.communityOnly,[o,a]=L.useState("home"),[u,h]=L.useState([{id:"1",text:"아이디어",x:400,y:300,connections:[]}]),[m,f]=L.useState(null),[p,T]=L.useState(null),[N,A]=L.useState("새로운 마인드맵"),[D,x]=L.useState(!1),[v,k]=L.useState([]),[b,z]=L.useState(""),[B,C]=L.useState({email:"",password:""}),[_,w]=L.useState({name:"",email:"",password:""}),[E,I]=L.useState(null),[P,S]=L.useState(null),[lt,ln]=L.useState(!1),[Ii,an]=L.useState(!1),[U,Y]=L.useState(null),[q,fe]=L.useState(null),[X,_e]=L.useState(null);L.useEffect(()=>{console.log(u)},[u]);const at=L.useRef(null),[$e,Ot]=L.useState({isDragging:!1,nodeId:null,offset:{x:0,y:0}}),[He,Pl]=L.useState(1),[un,Os]=L.useState({x:0,y:0}),xn=()=>{const M=at.current;if(!M)return{width:600,height:400};const $=M.getBoundingClientRect();return{width:$.width,height:$.height}},Bt=L.useCallback((M,$,K,H)=>{const J=xn(),he=K>1?K:K*J.width,Je=H>1?H:H*J.height,Dt=Date.now().toString(),gt={id:Dt,text:$,x:he,y:Je,connections:[]};h(Kn=>{const jr=[...Kn,gt];return M?jr.map(Wt=>Wt.id===M?{...Wt,connections:[...Wt.connections,Dt]}:Wt):jr})},[]),Ds=L.useCallback(async(M,$)=>{const K=xn();I&&I({type:"expansion",title:`"${$}" 확장 결과`,content:"AI가 관련 아이디어를 불러오는 중..."});try{const H=await co(`"${$}"라는 주제와 관련된 새로운 아이디어 3개를 JSON 배열로 반환해줘. 각 아이디어는 {"text":"아이디어 제목(10자 이내)"} 형태여야 하며, 마크다운/HTML 없이 JSON만 반환해.`);let J=[];try{J=JSON.parse(H)}catch{I&&I({type:"expansion",title:`"${$}" 확장 결과`,content:"AI 응답 파싱 오류"});return}const he=u.find(Kn=>Kn.id===M);if(!he)return;const Je=-90,Dt=360/J.length,gt=Math.min(K.width,K.height)*.22;J.forEach((Kn,jr)=>{const ki=(Je+jr*Dt)*Math.PI/180,Vs=(he.x+Math.cos(ki)*gt)/K.width,Yn=(he.y+Math.sin(ki)*gt)/K.height;setTimeout(()=>Bt(M,Kn.text,Vs,Yn),jr*200)}),I&&I({type:"expansion",title:`"${$}" 확장 결과`,content:`AI가 제안한 ${J.length}개의 관련 아이디어가 추가되었습니다.`})}catch{I&&I({type:"expansion",title:`"${$}" 확장 결과`,content:"AI 관련 아이디어를 불러오지 못했습니다."})}},[u,Bt,xn,I]);L.useCallback(async(M,$)=>{I({type:"recommendation",title:`"${$}" 추천 정보`,content:g.jsx("div",{className:"text-center text-gray-500 py-8",children:"AI 추천 정보를 불러오는 중..."})});try{const K=await co(`"${$}"라는 주제에 대해 아래 형식의 JSON 배열로 3가지 추천 정보를 생성해줘. 각 추천은 { "title": "추천 제목", "summary": "한 줄 요약", "link": "관련 링크" } 형태여야 하며, summary는 30자 이내로 간단하게, link는 실제 관련 위키/뉴스/공식문서 등 신뢰할 수 있는 URL로 넣어줘. 마크다운/HTML 없이 JSON만 반환해.`);let H=[];try{H=JSON.parse(K)}catch{I({type:"recommendation",title:`"${$}" 추천 정보`,content:g.jsx("div",{className:"text-red-500",children:"AI 응답 파싱 오류"})});return}I({type:"recommendation",title:`"${$}" 추천 정보`,content:g.jsx("div",{children:H.map((J,he)=>g.jsxs("div",{className:"mb-3 p-3 bg-blue-50 rounded-lg flex flex-col",children:[g.jsx("h4",{className:"font-medium text-blue-800 mb-1",children:J.title}),g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"text-sm text-gray-700 flex-1",children:J.summary}),J.link&&g.jsx("a",{href:J.link,target:"_blank",rel:"noopener noreferrer",className:"ml-2 text-indigo-600 underline text-xs",children:"바로가기"})]})]},he))})})}catch{I({type:"recommendation",title:`"${$}" 추천 정보`,content:g.jsx("div",{className:"text-red-500",children:"AI 추천 정보를 불러오지 못했습니다."})})}},[I]);const bs=L.useCallback(async M=>{f(M.id),Y({loading:!0,error:null,result:null}),fe({loading:!0,error:null,result:null}),_e({loading:!0,error:null,result:null}),I({type:"detail",title:`"${M.text}" AI 추천`,content:g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg",children:[g.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"💡 아이디어 개요"}),g.jsx("div",{className:"text-gray-700 text-sm",children:"개요 불러오는 중..."})]}),g.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[g.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"🔗 연관 키워드"}),g.jsx("div",{className:"text-gray-700 text-sm",children:"키워드 불러오는 중..."})]}),g.jsxs("div",{className:"p-4 bg-orange-50 rounded-lg",children:[g.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"📰 관련 뉴스"}),g.jsx("div",{className:"text-gray-700 text-sm",children:"뉴스 불러오는 중..."})]})]})});try{const $=`"${M.text}"라는 주제의 핵심 개요를 2~3문장으로 요약해줘. 마크다운/HTML 없이 평문만.`,K=await co($);Y({loading:!1,error:null,result:K})}catch{Y({loading:!1,error:"AI 호출 실패",result:null})}try{const $=`"${M.text}"와(과) 연관된 핵심 키워드 5개를 JSON 배열(["키워드1",...])로 반환해줘. 마크다운/HTML 없이 JSON만.`,K=await co($);let H=K;try{H=JSON.parse(K).join(", ")}catch{}fe({loading:!1,error:null,result:H})}catch{fe({loading:!1,error:"AI 호출 실패",result:null})}try{const $=`"${M.text}"와(과) 관련된 최신 뉴스 3개를 JSON 배열로 반환해줘. 각 뉴스는 {"title":"제목","summary":"요약","link":"URL"} 형태. 마크다운/HTML 없이 JSON만.`,K=await co($);let H=K;try{H=JSON.parse(K).map(he=>`• ${he.title}
  ${he.summary}
  ${he.link}`).join(`

`)}catch{}_e({loading:!1,error:null,result:H})}catch{_e({loading:!1,error:"AI 호출 실패",result:null})}I({type:"detail",title:`"${M.text}" AI 추천`,content:g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg",children:[g.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"💡 아이디어 개요"}),(U==null?void 0:U.loading)&&g.jsx("div",{className:"text-gray-400 text-sm",children:"개요 불러오는 중..."}),(U==null?void 0:U.error)&&g.jsx("div",{className:"text-red-500 text-sm",children:U.error}),(U==null?void 0:U.result)&&g.jsx("div",{className:"text-gray-700 text-sm whitespace-pre-line",children:U.result})]}),g.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[g.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"🔗 연관 키워드"}),(q==null?void 0:q.loading)&&g.jsx("div",{className:"text-gray-400 text-sm",children:"키워드 불러오는 중..."}),(q==null?void 0:q.error)&&g.jsx("div",{className:"text-red-500 text-sm",children:q.error}),(q==null?void 0:q.result)&&g.jsx("div",{className:"text-gray-700 text-sm whitespace-pre-line",children:q.result})]}),g.jsxs("div",{className:"p-4 bg-orange-50 rounded-lg",children:[g.jsx("h4",{className:"font-semibold text-orange-800 mb-2",children:"📰 관련 뉴스"}),(X==null?void 0:X.loading)&&g.jsx("div",{className:"text-gray-400 text-sm",children:"뉴스 불러오는 중..."}),(X==null?void 0:X.error)&&g.jsx("div",{className:"text-red-500 text-sm",children:X.error}),(X==null?void 0:X.result)&&g.jsx("div",{className:"text-gray-700 text-sm whitespace-pre-line",children:X.result})]})]})}),T($=>$===M.id?null:M.id)},[U,q,X]),Ls=()=>Pl(M=>Math.min(M*1.2,5)),Rl=()=>Pl(M=>Math.max(M/1.2,.2)),pc=(M,$)=>{var J;const K=(J=at.current)==null?void 0:J.getBoundingClientRect(),H=u.find(he=>he.id===$);H&&Ot({isDragging:!0,nodeId:$,offset:{x:(M.clientX-K.left-un.x)/He-H.x,y:(M.clientY-K.top-un.y)/He-H.y}})},mc=M=>{var J;if(!$e.isDragging)return;const $=(J=at.current)==null?void 0:J.getBoundingClientRect(),K=(M.clientX-$.left-un.x)/He-$e.offset.x,H=(M.clientY-$.top-un.y)/He-$e.offset.y;h(he=>he.map(Je=>Je.id===$e.nodeId?{...Je,x:K,y:H}:Je))},Al=()=>{Ot({isDragging:!1,nodeId:null,offset:{x:0,y:0}})},Ms=async()=>{let M="익명";n&&n.email?M=n.email.split("@")[0]:n&&n.name&&(M=n.name);const $={title:N,author:M,nodes:u,isPublic:D,likes:0,comments:0,createdAt:Date.now()};try{const K=sE(ls(as,"communityPosts"));await oE(K,$),alert(`마인드맵이 ${D?"공개로":"비공개로"} 저장되었습니다!`)}catch(K){alert("저장 실패: "+K)}},js=M=>{S({...M})},gc=()=>{h(M=>M.map($=>$.id===P.id?{...$,text:P.text}:$)),S(null)},Ti=M=>{h($=>$.filter(H=>H.id!==M).map(H=>({...H,connections:H.connections.filter(J=>J!==M)}))),f(null),I(null)};v.filter(M=>M.title.toLowerCase().includes(b.toLowerCase())||M.author.toLowerCase().includes(b.toLowerCase())),L.useEffect(()=>{const M=ls(as,"communityPosts"),$=Op(M,K=>{const H=K.val(),J=H?Object.entries(H).map(([he,Je])=>typeof Je=="object"&&Je!==null?{id:he,...Je}:null).filter(Boolean):[];k(J.filter(he=>he.isPublic))});return()=>$()},[]);const Fs=M=>{const $=$e.isDragging&&$e.nodeId===M.id;function K(H){const J=xn(),he=140,Je=50;let Dt=H.x+60,gt=H.y-25;return Dt+he>J.width&&(Dt=H.x-he-60),Dt<0&&(Dt=0),gt<0&&(gt=H.y+55),gt+Je>J.height&&(gt=J.height-Je),{x:Dt,y:gt}}return g.jsxs("g",{children:[g.jsx("circle",{cx:M.x,cy:M.y,r:"60",fill:m===M.id?"#3B82F6":"#10B981",stroke:"#fff",strokeWidth:"3",style:{cursor:"pointer"},onMouseDown:H=>pc(H,M.id),onClick:()=>bs(M)}),g.jsx("foreignObject",{x:M.x-50,y:M.y-30,width:100,height:60,pointerEvents:"none",children:g.jsx("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",wordBreak:"break-word",whiteSpace:"normal",fontSize:"12px",fontWeight:"bold",color:"white",pointerEvents:"none",userSelect:"none",padding:"4px"},children:M.text})}),!$&&p===M.id&&(()=>{const{x:H,y:J}=K(M);return g.jsxs("g",{children:[g.jsx("rect",{x:H,y:J,width:"90",height:"130",rx:"20",fill:"rgba(0,0,0,0.8)"}),g.jsxs("g",{style:{cursor:"pointer"},onClick:he=>{he.stopPropagation(),Ds(M.id,M.text)},children:[g.jsx("circle",{cx:H+45,cy:J+36,r:"18",fill:"#3B82F6"}),g.jsx("text",{x:H+45,y:J+36,textAnchor:"middle",dy:"0.35em",fill:"white",fontSize:"18",children:"+"}),g.jsx("text",{x:H+45,y:J+65,textAnchor:"middle",fill:"white",fontSize:"10",children:"확장"})]})]})})()]},M.id)},Ol=()=>u.flatMap(M=>M.connections.map($=>{const K=u.find(H=>H.id===$);return K?g.jsx("line",{x1:M.x,y1:M.y,x2:K.x,y2:K.y,stroke:"#6B7280",strokeWidth:"2",opacity:"0.6"},`${M.id}-${$}`):null}).filter(Boolean));return i?g.jsxs(g.Fragment,{children:[g.jsx(Pu,{}),g.jsxs("div",{className:"flex flex-col md:flex-row h-[calc(100vh-4rem)]",children:[g.jsxs("div",{className:"flex-[1_1_0%] min-w-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative",children:[g.jsxs("div",{className:"absolute top-6 left-4 z-10 flex flex-row space-x-2 items-center",children:[g.jsx("button",{onClick:Ls,className:"w-10 h-10 rounded-full bg-white shadow border text-2xl font-bold flex items-center justify-center hover:bg-indigo-100",children:"+"}),g.jsx("button",{onClick:Rl,className:"w-10 h-10 rounded-full bg-white shadow border text-2xl font-bold flex items-center justify-center hover:bg-indigo-100",children:"-"}),g.jsxs("div",{className:"flex items-center ml-6 space-x-3 bg-white/80 px-4 py-2 rounded-lg shadow border",children:[g.jsxs("label",{className:"flex items-center cursor-pointer select-none",children:[g.jsx("input",{type:"checkbox",checked:D,onChange:M=>x(M.target.checked),className:"form-checkbox h-5 w-5 text-indigo-600"}),g.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700",children:D?"공개":"비공개"})]}),g.jsxs("button",{onClick:Ms,className:"flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow",children:[g.jsx(hI,{className:"h-4 w-4 mr-1"})," 저장"]})]})]}),g.jsx("svg",{ref:at,width:"100%",height:"100%",className:"bg-white max-w-full max-h-full",onMouseMove:mc,onMouseUp:Al,onDoubleClick:M=>{var J;const $=(J=at.current)==null?void 0:J.getBoundingClientRect(),K=(M.clientX-$.left-un.x)/He,H=(M.clientY-$.top-un.y)/He;Bt(null,"새 아이디어",K/$.width,H/$.height)},style:{cursor:$e.isDragging?"grabbing":"default"},children:g.jsxs("g",{transform:`translate(${un.x},${un.y}) scale(${He})`,children:[Ol(),u.map(Fs)]})}),P&&g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40",children:g.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 w-full max-w-xs",children:[g.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-900",children:"노드 제목 수정"}),g.jsx("input",{type:"text",className:"w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500",value:P.text,onChange:M=>S({...P,text:M.target.value}),autoFocus:!0}),g.jsxs("div",{className:"flex justify-end space-x-2",children:[g.jsx("button",{onClick:()=>S(null),className:"px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300",children:"취소"}),g.jsx("button",{onClick:gc,className:"px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700",children:"저장"})]})]})}),g.jsxs("div",{className:`fixed inset-x-0 bottom-0 z-50 bg-white border-t shadow-2xl rounded-t-2xl p-4 transition-transform duration-300 md:hidden ${lt?"translate-y-0":"translate-y-full"}`,style:{minHeight:320},children:[g.jsx("button",{onClick:()=>ln(!1),className:"absolute top-2 right-4 p-2 rounded-full hover:bg-gray-100",children:g.jsx(uI,{className:"w-6 h-6 text-gray-500"})}),m&&g.jsxs("div",{className:"p-4 border-b bg-gray-50",children:[g.jsxs("div",{className:"flex items-center justify-between mb-3",children:[g.jsx("h3",{className:"font-semibold text-gray-900",children:"선택된 노드"}),g.jsxs("div",{className:"flex space-x-1",children:[g.jsx("button",{onClick:()=>js(u.find(M=>M.id===m)),className:"p-1 text-gray-500 hover:text-indigo-600 transition-colors",title:"편집",children:g.jsx(zg,{className:"h-4 w-4"})}),g.jsx("button",{onClick:()=>Ti(m),className:"p-1 text-gray-500 hover:text-red-600 transition-colors",title:"삭제",children:g.jsx(Wg,{className:"h-4 w-4"})})]})]}),g.jsxs("div",{className:"text-sm text-gray-600",children:[g.jsx("p",{className:"font-medium",children:(De=u.find(M=>M.id===m))==null?void 0:De.text}),g.jsxs("p",{className:"mt-1",children:["연결된 노드: ",(je=u.find(M=>M.id===m))==null?void 0:je.connections.length,"개"]})]})]}),g.jsx("div",{className:"flex-1 p-4 overflow-y-auto",children:E?g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:E.title}),g.jsx("div",{className:"text-gray-700",children:typeof E.content=="string"?g.jsx("p",{children:E.content}):E.content})]}):g.jsxs("div",{className:"text-center text-gray-500 mt-12",children:[g.jsx(ei,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),g.jsx("p",{className:"text-sm",children:"노드를 클릭하거나 확장/추천 버튼을 사용하여"}),g.jsx("p",{className:"text-sm",children:"상세 정보를 확인하세요"})]})}),g.jsxs("div",{className:"mt-4",children:[g.jsxs("button",{onClick:()=>{Bt(null,"새 아이디어",.5,.5)},className:"w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2",children:[g.jsx(Vg,{className:"h-4 w-4"}),g.jsx("span",{children:"새 노드 추가"})]}),g.jsxs("button",{onClick:()=>{const M=["혁신","기술","디자인","사용자경험","인공지능"],$=M[Math.floor(Math.random()*M.length)],K=.2+Math.random()*.6,H=.2+Math.random()*.6;Bt(null,$,K,H)},className:"w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors",children:[g.jsx(Bg,{className:"h-4 w-4"}),g.jsx("span",{children:"랜덤 아이디어"})]})]})]}),!lt&&g.jsxs("button",{onClick:()=>ln(!0),className:"md:hidden fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2",children:[g.jsx(ei,{className:"w-5 h-5"}),"메뉴"]})]}),g.jsxs("aside",{className:"hidden md:flex w-[400px] bg-white border-l shadow-lg flex-col h-full overflow-y-auto relative",children:[g.jsxs("div",{className:"flex-col flex-1",children:[m&&g.jsxs("div",{className:"p-4 border-b bg-gray-50",children:[g.jsxs("div",{className:"flex items-center justify-between mb-3",children:[g.jsx("h3",{className:"font-semibold text-gray-900",children:"선택된 노드"}),g.jsxs("div",{className:"flex space-x-1",children:[g.jsx("button",{onClick:()=>js(u.find(M=>M.id===m)),className:"p-1 text-gray-500 hover:text-indigo-600 transition-colors",title:"편집",children:g.jsx(zg,{className:"h-4 w-4"})}),g.jsx("button",{onClick:()=>Ti(m),className:"p-1 text-gray-500 hover:text-red-600 transition-colors",title:"삭제",children:g.jsx(Wg,{className:"h-4 w-4"})})]})]}),g.jsxs("div",{className:"text-sm text-gray-600",children:[g.jsx("p",{className:"font-medium",children:(Mr=u.find(M=>M.id===m))==null?void 0:Mr.text}),g.jsxs("p",{className:"mt-1",children:["연결된 노드: ",(Us=u.find(M=>M.id===m))==null?void 0:Us.connections.length,"개"]})]})]}),g.jsx("div",{className:"flex-1 p-4 overflow-y-auto",children:E?g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:E.title}),g.jsx("div",{className:"text-gray-700",children:typeof E.content=="string"?g.jsx("p",{children:E.content}):E.content})]}):g.jsxs("div",{className:"text-center text-gray-500 mt-12",children:[g.jsx(ei,{className:"h-12 w-12 mx-auto mb-4 text-gray-300"}),g.jsx("p",{className:"text-sm",children:"노드를 클릭하거나 확장/추천 버튼을 사용하여"}),g.jsx("p",{className:"text-sm",children:"상세 정보를 확인하세요"})]})})]}),g.jsxs("div",{className:"absolute bottom-0 left-0 w-full p-4 bg-white border-t",children:[g.jsxs("button",{onClick:()=>{Bt(null,"새 아이디어",.5,.5)},className:"w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2",children:[g.jsx(Vg,{className:"h-4 w-4"}),g.jsx("span",{children:"새 노드 추가"})]}),g.jsxs("button",{onClick:()=>{const M=["혁신","기술","디자인","사용자경험","인공지능"],$=M[Math.floor(Math.random()*M.length)],K=.2+Math.random()*.6,H=.2+Math.random()*.6;Bt(null,$,K,H)},className:"w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors",children:[g.jsx(Bg,{className:"h-4 w-4"}),g.jsx("span",{children:"랜덤 아이디어"})]})]})]})]})]}):s?g.jsx(g.Fragment,{children:g.jsx("div",{className:"p-8 text-center text-gray-500",children:"커뮤니티 페이지 준비 중"})}):g.jsxs(g.Fragment,{children:[g.jsx(Pu,{}),g.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[g.jsxs("div",{className:"text-center mb-12",children:[g.jsx("h2",{className:"text-4xl font-bold text-gray-900 mb-4",children:"아이디어를 연결하고 공유하세요"}),g.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"AI 기반 마인드맵으로 창의적 사고를 확장하고 다른 사람들과 아이디어를 나누어보세요"}),!n&&g.jsx("button",{onClick:()=>e("/signup"),className:"bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors",children:"무료로 시작하기"})]}),g.jsxs("div",{className:"mb-8",children:[g.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[g.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"공개 마인드맵"}),g.jsx("div",{className:"flex-1 max-w-md",children:g.jsxs("div",{className:"relative",children:[g.jsx(dI,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"}),g.jsx("input",{type:"text",placeholder:"마인드맵 검색...",value:b,onChange:M=>z(M.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"})]})})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:v.filter(M=>M.title.toLowerCase().includes(b.toLowerCase())||M.author.toLowerCase().includes(b.toLowerCase())).map((M,$)=>{var K;return console.log(M),g.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6",children:[g.jsxs("div",{className:"flex items-center justify-between mb-4",children:[g.jsx("h4",{className:"text-lg font-semibold text-gray-900",children:M.title}),g.jsx(lI,{className:"h-5 w-5 text-green-500"})]}),g.jsx("div",{className:"mb-4",children:g.jsx("svg",{width:"100%",height:"120",viewBox:"0 0 300 120",children:M.nodes.map((H,J)=>g.jsxs("g",{children:[g.jsx("circle",{cx:H.x*.75,cy:H.y*.4,r:"15",fill:"#10B981",stroke:"#fff",strokeWidth:"2"}),g.jsx("text",{x:H.x*.75,y:H.y*.4,textAnchor:"middle",dy:"0.35em",fill:"white",fontSize:"8",fontWeight:"bold",children:H.text.substring(0,4)})]},J))})}),g.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-600",children:[g.jsxs("span",{children:["by ",M.author]}),g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx($0,{className:"h-4 w-4"}),g.jsx("span",{children:M.likes})]}),g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsx("span",{children:((K=M.comments)==null?void 0:K.length)||0}),g.jsx(cI,{className:"h-4 w-4"})]})]})]}),g.jsxs("button",{onClick:()=>e(`/map/${M.id}`),className:"w-full mt-4 bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors",children:[g.jsx(oI,{className:"h-4 w-4 inline mr-2"}),"자세히 보기"]})]},$)})})]})]})})]})};function d4(){const t=wi(),[e,n]=L.useState({email:"",password:""}),[r,i]=L.useState(""),s=async o=>{o.preventDefault();try{await Jk(xr,e.email,e.password),alert("로그인 성공!"),t("/")}catch(a){i(a.message)}};return g.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[g.jsxs("div",{className:"text-center mb-6",children:[g.jsx(ei,{className:"h-12 w-12 text-indigo-600 mx-auto mb-2"}),g.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"로그인"})]}),g.jsxs("form",{onSubmit:s,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"이메일"}),g.jsx("input",{type:"email",value:e.email,onChange:o=>n({...e,email:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",placeholder:"dev@example.com",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"비밀번호"}),g.jsx("input",{type:"password",value:e.password,onChange:o=>n({...e,password:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",required:!0})]}),r&&g.jsx("div",{className:"text-red-500 text-sm",children:r}),g.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors",children:"로그인"})]}),g.jsx("div",{className:"mt-4 text-center",children:g.jsx("button",{onClick:()=>t("/signup"),className:"text-indigo-600 hover:text-indigo-800 text-sm",children:"계정이 없으신가요? 회원가입"})}),g.jsx("div",{className:"mt-4 text-center",children:g.jsx("button",{onClick:()=>t("/"),className:"text-gray-600 hover:text-gray-800 text-sm",children:"홈으로 돌아가기"})})]})})}function f4(){const t=wi(),[e,n]=L.useState({name:"",email:"",password:""}),[r,i]=L.useState(""),s=async o=>{o.preventDefault();try{await Xk(xr,e.email,e.password),alert("회원가입 성공! 로그인 해주세요."),t("/login")}catch(a){i(a.message)}};return g.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[g.jsxs("div",{className:"text-center mb-6",children:[g.jsx(ei,{className:"h-12 w-12 text-indigo-600 mx-auto mb-2"}),g.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"회원가입"})]}),g.jsxs("form",{onSubmit:s,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"이름"}),g.jsx("input",{type:"text",value:e.name,onChange:o=>n({...e,name:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"이메일"}),g.jsx("input",{type:"email",value:e.email,onChange:o=>n({...e,email:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"비밀번호"}),g.jsx("input",{type:"password",value:e.password,onChange:o=>n({...e,password:o.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",required:!0})]}),r&&g.jsx("div",{className:"text-red-500 text-sm",children:r}),g.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors",children:"회원가입"})]}),g.jsx("div",{className:"mt-4 text-center",children:g.jsx("button",{onClick:()=>t("/login"),className:"text-indigo-600 hover:text-indigo-800 text-sm",children:"이미 계정이 있으신가요? 로그인"})}),g.jsx("div",{className:"mt-4 text-center",children:g.jsx("button",{onClick:()=>t("/"),className:"text-gray-600 hover:text-gray-800 text-sm",children:"홈으로 돌아가기"})})]})})}function p4(){const{id:t}=Fx();wi();const[e,n]=L.useState(null),[r,i]=L.useState(0),[s,o]=L.useState(!1),[a,u]=L.useState([]),[h,m]=L.useState("");L.useEffect(()=>{if(!t)return;const T=ls(as,`communityPosts/${t}`),N=Op(T,A=>{const D=A.val();n(D),i((D==null?void 0:D.likes)||0),u(D!=null&&D.comments?Object.values(D.comments):[])});return()=>N()},[t]);const f=async()=>{if(!t||!e)return;const T=s?r-1:r+1;o(!s),i(T),await QA(ls(as,`communityPosts/${t}`),{likes:T})},p=async T=>{if(T.preventDefault(),!h.trim()||!t)return;const N={user:"익명",text:h,createdAt:new Date().toLocaleString()},A=ls(as,`communityPosts/${t}/comments`),D=sE(A);await oE(D,N),m("")};return e?g.jsxs(g.Fragment,{children:[g.jsx(Pu,{}),g.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col",children:g.jsxs("div",{className:"flex-1 flex flex-col md:flex-row max-w-5xl mx-auto w-full p-6 gap-8",children:[g.jsx("div",{className:"flex-1 bg-white rounded-lg shadow p-4 flex items-center justify-center min-h-[400px]",children:g.jsx("svg",{width:"600",height:"400",style:{background:"#f9fafb",borderRadius:16},children:e.nodes&&e.nodes.map(T=>g.jsxs("g",{children:[g.jsx("circle",{cx:T.x,cy:T.y,r:"40",fill:"#10B981",stroke:"#fff",strokeWidth:"3"}),g.jsx("text",{x:T.x,y:T.y,textAnchor:"middle",dy:"0.35em",fill:"white",fontSize:"12",fontWeight:"bold",children:T.text})]},T.id))})}),g.jsxs("div",{className:"w-full md:w-96 flex flex-col space-y-6",children:[g.jsxs("div",{className:"bg-white rounded-lg shadow p-4 flex flex-col items-center",children:[g.jsx("div",{className:"mb-2",children:g.jsx(pI,{className:"w-14 h-14 text-gray-400 bg-gray-100 rounded-full p-2"})}),g.jsx("div",{className:"text-lg font-bold text-gray-900",children:e.author}),g.jsx("div",{className:"text-sm text-gray-500 mb-1",children:e.createdAt?new Date(e.createdAt).toLocaleString():""}),g.jsx("div",{className:"text-xl font-semibold text-indigo-700 mt-2 mb-1 text-center",children:e.title}),g.jsxs("button",{onClick:f,className:`flex items-center space-x-1 px-4 py-2 rounded-lg mt-2 ${s?"bg-red-100 text-red-600":"bg-gray-100 text-gray-700"} hover:bg-red-200 transition`,children:[g.jsx($0,{className:`h-5 w-5 ${s?"fill-red-500":""}`}),g.jsx("span",{children:r}),g.jsx("span",{children:"좋아요"})]})]}),g.jsxs("div",{className:"bg-white rounded-lg shadow p-4 flex-1 flex flex-col",children:[g.jsx("div",{className:"font-semibold text-gray-900 mb-2",children:"댓글"}),g.jsxs("div",{className:"flex-1 space-y-3 overflow-y-auto max-h-60 mb-2",children:[a.length===0&&g.jsx("div",{className:"text-gray-400 text-sm",children:"아직 댓글이 없습니다."}),a.map((T,N)=>g.jsxs("div",{className:"bg-gray-50 rounded p-2",children:[g.jsx("div",{className:"text-sm font-bold text-indigo-700",children:T.user}),g.jsx("div",{className:"text-sm text-gray-800 mb-1",children:T.text}),g.jsx("div",{className:"text-xs text-gray-400",children:T.createdAt})]},N))]}),g.jsxs("form",{onSubmit:p,className:"flex mt-2 gap-2",children:[g.jsx("input",{type:"text",value:h,onChange:T=>m(T.target.value),className:"flex-1 border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500",placeholder:"댓글을 입력하세요"}),g.jsx("button",{type:"submit",className:"bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 text-sm",children:"등록"})]})]})]})]})})]}):g.jsx("div",{children:"불러오는 중..."})}const m4={url:window.location.origin+"/finishSignIn",handleCodeInApp:!0};function g4(){const[t,e]=L.useState(""),[n,r]=L.useState(!1),[i,s]=L.useState(""),o=async a=>{a.preventDefault(),s("");try{await Zk(xr,t,m4),window.localStorage.setItem("emailForSignIn",t),r(!0)}catch(u){s(u.message)}};return g.jsx("form",{onSubmit:o,className:"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100",children:g.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"이메일 링크 로그인"}),g.jsx("input",{type:"email",value:t,onChange:a=>e(a.target.value),required:!0,placeholder:"이메일 입력",className:"w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"}),g.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2",children:"로그인 링크 전송"}),n&&g.jsx("div",{className:"text-green-600 text-sm",children:"이메일로 링크를 보냈습니다!"}),i&&g.jsx("div",{className:"text-red-500 text-sm",children:i})]})})}function y4(){const[t,e]=L.useState(""),[n,r]=L.useState(!1),[i,s]=L.useState(""),o=wi();return L.useEffect(()=>{if(eN(xr,window.location.href)){let a=window.localStorage.getItem("emailForSignIn");if(!a)return;hy(xr,a,window.location.href).then(()=>{window.localStorage.removeItem("emailForSignIn"),r(!0),setTimeout(()=>o("/"),1e3)}).catch(u=>{s(u.message)})}},[o]),window.localStorage.getItem("emailForSignIn")?n?g.jsx("div",{className:"min-h-screen flex items-center justify-center text-green-600 text-xl",children:"로그인 성공!"}):g.jsx("div",{className:"min-h-screen flex items-center justify-center text-gray-600 text-xl",children:"로그인 처리 중..."}):g.jsx("form",{onSubmit:async a=>{a.preventDefault();try{await hy(xr,t,window.location.href),window.localStorage.removeItem("emailForSignIn"),r(!0),setTimeout(()=>o("/"),1e3)}catch(u){s(u.message)}},className:"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100",children:g.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"이메일로 로그인"}),g.jsx("input",{type:"email",value:t,onChange:a=>e(a.target.value),required:!0,placeholder:"이메일 입력",className:"w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"}),g.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors mb-2",children:"로그인"}),i&&g.jsx("div",{className:"text-red-500 text-sm",children:i})]})})}const _4=()=>{const{user:t}=Dp(),[e,n]=L.useState([]),r=wi();return L.useEffect(()=>{if(!t||!t.email)return;const i=t.email.split("@")[0],s=ls(as,"communityPosts"),o=Op(s,a=>{const u=a.val(),h=u?Object.entries(u).map(([m,f])=>typeof f=="object"&&f!==null?{id:m,...f}:null).filter(Boolean):[];n(h.filter(m=>!m.isPublic&&m.author===i))});return()=>o()},[t]),t?g.jsxs(g.Fragment,{children:[g.jsx(Pu,{}),g.jsxs("div",{className:"max-w-3xl mx-auto py-10 px-4",children:[g.jsx("h2",{className:"text-2xl font-bold mb-6",children:"내 비공개 마인드맵"}),e.length===0?g.jsx("div",{className:"text-gray-500 text-center py-12",children:"비공개로 저장한 보드가 없습니다."}):g.jsx("div",{className:"space-y-4",children:e.map(i=>g.jsxs("div",{className:"bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between",children:[g.jsxs("div",{children:[g.jsx("div",{className:"text-lg font-semibold text-gray-900",children:i.title}),g.jsxs("div",{className:"text-sm text-gray-500",children:["저장일: ",i.createdAt?new Date(i.createdAt).toLocaleString():""]}),g.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["상태: ",i.isPublic?"공개":"비공개"]})]}),g.jsx("button",{onClick:()=>r(`/map/${i.id}`),className:"mt-3 md:mt-0 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors",children:"상세보기"})]},i.id))})]})]}):g.jsx("div",{className:"p-8 text-center",children:"로그인 후 이용 가능합니다."})};Eh.createRoot(document.getElementById("root")).render(g.jsx(Bd.StrictMode,{children:g.jsx(u4,{children:g.jsx(rI,{children:g.jsxs(eI,{children:[g.jsx(hn,{path:"/",element:g.jsx(wh,{})}),g.jsx(hn,{path:"/community",element:g.jsx(wh,{communityOnly:!0})}),g.jsx(hn,{path:"/editor",element:g.jsx(wh,{editorOnly:!0})}),g.jsx(hn,{path:"/login",element:g.jsx(d4,{})}),g.jsx(hn,{path:"/signup",element:g.jsx(f4,{})}),g.jsx(hn,{path:"/map/:id",element:g.jsx(p4,{})}),g.jsx(hn,{path:"/email-link-login",element:g.jsx(g4,{})}),g.jsx(hn,{path:"/finishSignIn",element:g.jsx(y4,{})}),g.jsx(hn,{path:"/dashboard",element:g.jsx(_4,{})})]})})})}));
