/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@gitbeaker/browser/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@gitbeaker/browser/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer) {!function(e,t){ true?t(exports):undefined}(this,(function(e){"use strict";var t="object"==typeof self?self.FormData:window.FormData,r=Object.freeze(Object.assign(Object.create(null),t,{default:t,__moduleExports:t})),n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}var s=o((function(e){var t,r;t=function(){var e=/^;\s*([^"=]+)=(?:"([^"]+)"|([^";,]+)(?:[;,]|$))/,t=/^<([^>]*)>/,r=/^\s*,\s*/;return{parse:function(n,o){for(var s,i,u,a=o&&o.extended||!1,p=[];n&&(n=n.trim(),i=t.exec(n));){for(var c={link:i[1]},h=(n=n.slice(i[0].length)).match(r);n&&(!h||h.index>0)&&(s=e.exec(n));)h=(n=n.slice(s[0].length)).match(r),"rel"===s[1]||"rev"===s[1]?(u=(s[2]||s[3]).split(/\s+/),c[s[1]]=u):c[s[1]]=s[2]||s[3];p.push(c),n=n.replace(r,"")}return a?p:p.reduce((function(e,t){return t.rel&&t.rel.forEach((function(r){e[r]=t.link})),e}),{})},stringify:function(e){var t=Object.keys(e).reduce((function(t,r){return t[e[r]]=t[e[r]]||[],t[e[r]].push(r),t}),{});return Object.keys(t).reduce((function(e,r){return e.concat("<"+r+'>; rel="'+t[r].join(" ")+'"')}),[]).join(", ")}}},r=n,e.exports?e.exports=t():"function"==typeof r.define&&r.define.amd?(void 0)(t):r.li=t()})),i=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function n(e){return e>=97&&e<=122}function o(e){return e>=65&&e<=90}function s(e){return e>=48&&e<=57}function i(e){return n(e)?e-32:e}function u(e){return e+32}function a(e){return e&&"object"==(void 0===e?"undefined":r(e))&&!(e instanceof Date)&&!(e instanceof Function)}function p(e,t,r){var n=void 0;if(e instanceof Array)n=[];else{if(void 0!==e.prototype)return e;n={}}for(var o in e){var s=e[o];"string"==typeof o&&(o=t(o,r&&r.separator)),a(s)?n[o]=p(s,t,r):n[o]=s}return n}function c(e,t,r){for(var n=Object.keys(e),o=0;o<n.length;++o){var s=n[o],i=e[s],u=t(s,r&&r.separator);u!==s&&delete e[s],a(i)?e[u]=p(i,t,r):e[u]=i}return e}function h(e,t){return function(e,t){var r=e.charCodeAt(0);if(s(r)||o(r)||r==t)return e;var n=[],a=!1;o(r)?(a=!0,n.push(u(r))):n.push(r);for(var p=e.length,c=1;c<p;++c){var h=e.charCodeAt(c);if(h===t){if(a=!0,h=e.charCodeAt(++c),isNaN(h))return e;n.push(i(h))}else n.push(h)}return a?String.fromCharCode.apply(void 0,n):e}(e,t&&t.charCodeAt(0)||95)}function f(e,t){return function(e,t){if(!n(e.charCodeAt(0)))return e;for(var r=e.length,s=!1,i=[],a=0;a<r;++a){var p=e.charCodeAt(a);o(p)?(i.push(t),i.push(u(p)),s=!0):i.push(p)}return s?String.fromCharCode.apply(void 0,i):e}(e,t&&t.charCodeAt(0)||95)}function l(e,t){return function(e,t){var r=e.charCodeAt(0);if(s(r)||r==t)return e;for(var o=e.length,u=!1,a=[],p=0;p<o;++p){var c=e.charCodeAt(p);if(c===t){if(u=!0,c=e.charCodeAt(++p),isNaN(c))return e;a.push(i(c))}else 0===p&&n(c)?(u=!0,a.push(c-32)):a.push(c)}return u?String.fromCharCode.apply(void 0,a):e}(e,t&&t.charCodeAt(0)||95)}function d(e,t){return function(e,t){if(!o(e.charCodeAt(0)))return e;for(var r=e.length,n=!1,s=[],i=0;i<r;++i){var a=e.charCodeAt(i);o(a)?(i>0&&s.push(t),s.push(u(a)),n=!0):s.push(a)}return n?String.fromCharCode.apply(void 0,s):e}(e,t&&t.charCodeAt(0)||95)}t.camelize=h,t.decamelize=f,t.pascalize=l,t.depascalize=d,t.camelizeKeys=function(e,t){return t=t||{},a(e)?t.inPlace?c(e,h,t):p(e,h,t):e},t.decamelizeKeys=function(e,t){return t=t||{},a(e)?t.inPlace?c(e,f,t):p(e,f,t):e},t.pascalizeKeys=function(e,t){return t=t||{},a(e)?t.inPlace?c(e,l,t):p(e,l,t):e},t.depascalizeKeys=function(e,t){return t=t||{},a(e)?t.inPlace?c(e,d,t):p(e,d,t):e}})),u=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function p(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],p(r),p(n))}function c(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(u),r=1;r<t.length;r++)t=(e=p(t,r).join("")).match(u);return e}}var h=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=c(r[0]);n!==r[0]&&(t[r[0]]=n)}r=a.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var i=o[s];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}},f=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]},l=o((function(e,t){function r(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function n(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()):encodeURIComponent(e):e}function o(e,t){return t.decode?h(e):e}function s(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function i(e){const t=(e=s(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function a(e,t){r((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const s="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map(t=>o(t,e)):null===r?r:o(r,e);n[t]=s};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),s=Object.create(null);if("string"!=typeof e)return s;if(!(e=e.trim().replace(/^[?#&]/,"")))return s;for(const r of e.split("&")){let[e,i]=f(t.decode?r.replace(/\+/g," "):r,"=");i=void 0===i?null:["comma","separator"].includes(t.arrayFormat)?i:o(i,t),n(o(e,t),i,s)}for(const e of Object.keys(s)){const r=s[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=u(r[e],t);else s[e]=u(r,t)}return!1===t.sort?s:(!0===t.sort?Object.keys(s).sort():Object.keys(s).sort(t.sort)).reduce((e,t)=>{const r=s[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=i,t.parse=a,t.stringify=(e,t)=>{if(!e)return"";r((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const o=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],s=function(e){switch(e.arrayFormat){case"index":return t=>(r,o)=>{const s=r.length;return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[n(t,e),"[",s,"]"].join("")]:[...r,[n(t,e),"[",n(s,e),"]=",n(o,e)].join("")]};case"bracket":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[n(t,e),"[]"].join("")]:[...r,[n(t,e),"[]=",n(o,e)].join("")];case"comma":case"separator":return t=>(r,o)=>null==o||0===o.length?r:0===r.length?[[n(t,e),"=",n(o,e)].join("")]:[[r,n(o,e)].join(e.arrayFormatSeparator)];default:return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,n(t,e)]:[...r,[n(t,e),"=",n(o,e)].join("")]}}(t),i={};for(const t of Object.keys(e))o(t)||(i[t]=e[t]);const u=Object.keys(i);return!1!==t.sort&&u.sort(t.sort),u.map(r=>{const o=e[r];return void 0===o?"":null===o?n(r,t):Array.isArray(o)?o.reduce(s(r),[]).join("&"):n(r,t)+"="+n(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=f(e,"#");return Object.assign({url:r.split("?")[0]||"",query:a(i(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:o(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const o=s(e.url).split("?")[0]||"",i=t.extract(e.url),u=t.parse(i,{sort:!1}),a=Object.assign(u,e.query);let p=t.stringify(a,r);p&&(p="?"+p);let c=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c="#"+n(e.fragmentIdentifier,r)),`${o}${p}${c}`}})),d=function(e,t){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};var m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function y(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function u(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}a((n=n.apply(e,t||[])).next())}))}function g(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,s=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}return i}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function w(e,t){return function(e){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=v(r),s=o[0],i=o.slice(1);return e.apply(this,b([m(m({},t),s)],i))||this}return function(e,t){function r(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(r,e),r}(e)}function R(e){return y(this,void 0,void 0,(function(){return g(this,(function(t){return[2,new Promise((function(t){return setTimeout(t,e)}))]}))}))}var I=function(e){var t=void 0===e?{}:e,r=t.token,n=t.jobToken,o=t.oauthToken,s=t.sudo,i=t.profileToken,u=t.requester,a=t.profileMode,p=void 0===a?"execution":a,c=t.host,h=void 0===c?"https://gitlab.com":c,f=t.url,l=void 0===f?"":f,d=t.version,m=void 0===d?4:d,y=t.camelize,g=void 0!==y&&y,v=t.rejectUnauthorized,b=void 0===v||v,w=t.requestTimeout,R=void 0===w?3e5:w;if(!u)throw new ReferenceError("Requester must be passed");this.url=[h,"api","v"+m,l].join("/"),this.headers={"user-agent":"gitbeaker"},this.rejectUnauthorized=b,this.camelize=g,this.requester=u,this.requestTimeout=R,o?this.headers.authorization="Bearer "+o:n?this.headers["job-token"]=n:r&&(this.headers["private-token"]=r),i&&(this.headers["X-Profile-Token"]=i,this.headers["X-Profile-Mode"]=p),s&&(this.headers.Sudo=""+s)},j=function(e,t){return(j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */function C(e,t){function r(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var _=function(){return(_=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function U(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function k(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function u(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}a((n=n.apply(e,t||[])).next())}))}function E(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}function S(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,s=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}return i}function P(e){return function(t){var r=this;Object.entries(e).forEach((function(e){var n=S(e,2),o=n[0],s=n[1];r[o]=new s(t)}))}}var A={post:function(e,t,n){void 0===n&&(n={});var o=n.isForm,s=n.sudo,i=n.showExpanded,u=U(n,["isForm","sudo","showExpanded"]);return k(this,void 0,void 0,(function(){var n,a;return E(this,(function(p){switch(p.label){case 0:return n=o?(c=u,h=new r,Object.entries(c).forEach((function(e){var t=S(e,2),r=t[0],n=t[1];Array.isArray(n)?h.append(r,n[0],n[1]):h.append(r,n)})),h):u,[4,e.requester.post(e,t,{body:n,sudo:s})];case 1:return a=p.sent(),[2,i?{data:a.body,status:a.status,headers:a.headers}:a.body]}var c,h}))}))},put:function(e,t,r){void 0===r&&(r={});var n=r.sudo,o=r.showExpanded,s=U(r,["sudo","showExpanded"]);return k(this,void 0,void 0,(function(){var r;return E(this,(function(i){switch(i.label){case 0:return[4,e.requester.put(e,t,{body:s,sudo:n})];case 1:return r=i.sent(),[2,o?{data:r.body,status:r.status,headers:r.headers}:r.body]}}))}))},get:function e(t,r,n){void 0===n&&(n={});var o=n.showExpanded,u=n.maxPages,a=n.sudo,p=U(n,["showExpanded","maxPages","sudo"]);return k(this,void 0,void 0,(function(){var n,c,h,f,l,d,m,y,g,v;return E(this,(function(b){switch(b.label){case 0:return[4,t.requester.get(t,r,{query:p||{},sudo:a})];case 1:return n=b.sent(),c=n.headers,h=n.status,f=n.body,l={total:parseInt(c["x-total"],10),next:parseInt(c["x-next-page"],10)||null,current:parseInt(c["x-page"],10)||1,previous:parseInt(c["x-prev-page"],10)||null,perPage:parseInt(c["x-per-page"],10),totalPages:parseInt(c["x-total-pages"],10)},d=!u||l.current<u,t.camelize&&(f=i.camelizeKeys(f)),Array.isArray(f)&&!p.page&&d&&l.next?(m=s.parse(c.link).next,"",y=new RegExp(".+/api/v\\d(/)?/"),[4,e(t,m.replace(y,""),{maxPages:u,sudo:a,showExpanded:!0})]):[3,3];case 2:g=b.sent(),l=g.pagination,f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(S(arguments[t]));return e}(f,g.data),b.label=3;case 3:return o?(v={data:f},Array.isArray(f)&&f.length>0||p.page?v.pagination=l:(v.headers=c,v.status=h),[2,v]):[2,f]}}))}))},del:function(e,t,r){void 0===r&&(r={});var n=r.sudo,o=r.showExpanded,s=U(r,["sudo","showExpanded"]);return k(this,void 0,void 0,(function(){var r;return E(this,(function(i){switch(i.label){case 0:return[4,e.requester.delete(e,t,{query:s,sudo:n})];case 1:return r=i.sent(),[2,o?{data:r.body,status:r.status,headers:r.headers}:r.body]}}))}))},stream:function(e,t,r){if("function"!=typeof e.requester.stream)throw new Error("Stream method is not implementated in requester!");return e.requester.stream(e,t,{query:r})}},T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"groups",e)},t.prototype.create=function(e,t,r){return A.post(this,"groups",_({name:e,path:t},r))},t.prototype.createLDAPLink=function(e,t,r,n,o){var s=encodeURIComponent(e);return A.post(this,"groups/"+s+"/ldap_group_links",_({cn:t,groupAccess:r,provider:n},o))},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"groups/"+r,t)},t.prototype.projects=function(e,t){var r=encodeURIComponent(e);return A.get(this,"groups/"+r+"/projects",t)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"groups/"+r,t)},t.prototype.removeLDAPLink=function(e,t,r){void 0===r&&(r={});var n=r.provider,o=U(r,["provider"]),s=encodeURIComponent(e),i=n?n+"/"+t:""+t;return A.del(this,"groups/"+s+"/ldap_group_links/"+i,o)},t.prototype.search=function(e,t){return A.get(this,"groups",_({search:e},t))},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"groups/"+r,t)},t.prototype.subgroups=function(e,t){var r=encodeURIComponent(e);return A.get(this,"groups/"+r+"/subgroups",t)},t.prototype.syncLDAP=function(e,t){var r=encodeURIComponent(e);return A.post(this,"groups/"+r+"/ldap_sync",t)},t}(I),x=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.all=function(e){var t=encodeURIComponent(e);return A.get(this,t+"/access_requests")},t.prototype.request=function(e){var t=encodeURIComponent(e);return A.post(this,t+"/access_requests")},t.prototype.approve=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,o+"/access_requests/"+s+"/approve",r)},t.prototype.deny=function(e,t){var r=S([e,t].map(encodeURIComponent),2),n=r[0],o=r[1];return A.del(this,n+"/access_requests/"+o)},t}(I);function L(e,t,r,n,o){var s=S([e,r,n].map(encodeURIComponent),3),i=[s[0],t,s[1],"notes",s[2],"award_emoji"];return o&&i.push(encodeURIComponent(o)),i.join("/")}var q=function(e){function t(t,r){var n=e.call(this,_({url:"projects"},r))||this;return n.resourceType=t,n}return C(t,e),t.prototype.all=function(e,t,r,n){return A.get(this,L(e,this.resourceType,t,r),n)},t.prototype.award=function(e,t,r,n,o){return A.post(this,L(e,this.resourceType,t,r),_({name:n},o))},t.prototype.remove=function(e,t,r,n,o){return A.del(this,L(e,this.resourceType,t,r,n),o)},t.prototype.show=function(e,t,r,n,o){return A.get(this,L(e,this.resourceType,t,r,n),o)},t}(I),M=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.add=function(e,t){var r=encodeURIComponent(e);return A.post(this,r+"/badges",t)},t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,r+"/badges",t)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,o+"/badges/"+s,r)},t.prototype.preview=function(e,t,r,n){var o=encodeURIComponent(e);return A.get(this,o+"/badges/render",_({linkUrl:t,imageUrl:r},n))},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,o+"/badges/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/badges/"+s,r)},t}(I),O=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,r+"/custom_attributes",t)},t.prototype.set=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.put(this,s+"/custom_attributes/"+i,_({value:r},n))},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,o+"/custom_attributes/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/custom_attributes/"+s,r)},t}(I),B=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.add=function(e,t,r,n){return A.post(this,encodeURIComponent(e)+"/deploy_tokens",_({name:t,scopes:r},n))},t.prototype.all=function(e){var t,r=e.resourceId,n=U(e,["resourceId"]);return t=r?encodeURIComponent(r)+"/deploy_tokens":"deploy_tokens",A.get(this,t,n)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,o+"/deploy_tokens/"+s,r)},t}(I),D=function(e){function t(t,r,n){var o=e.call(this,_({url:t},n))||this;return o.resource2Type=r,o}return C(t,e),t.prototype.addNote=function(e,t,r,n,o,s){var i=S([e,t,r,n].map(encodeURIComponent),4),u=i[0],a=i[1],p=i[2],c=i[3];return A.post(this,u+"/"+this.resource2Type+"/"+a+"/discussions/"+p+"/notes",_({body:o,noteId:c},s))},t.prototype.all=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/"+this.resource2Type+"/"+s+"/discussions",r)},t.prototype.create=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,s+"/"+this.resource2Type+"/"+i+"/discussions",_({body:r},n))},t.prototype.editNote=function(e,t,r,n,o,s){var i=S([e,t,r,n].map(encodeURIComponent),4),u=i[0],a=i[1],p=i[2],c=i[3];return A.put(this,u+"/"+this.resource2Type+"/"+a+"/discussions/"+p+"/notes/"+c,_({body:o},s))},t.prototype.removeNote=function(e,t,r,n,o){var s=S([e,t,r,n].map(encodeURIComponent),4),i=s[0],u=s[1],a=s[2],p=s[3];return A.del(this,i+"/"+this.resource2Type+"/"+u+"/discussions/"+a+"/notes/"+p,o)},t.prototype.show=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.get(this,s+"/"+this.resource2Type+"/"+i+"/discussions/"+u,n)},t}(I),N=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,r+"/boards",t)},t.prototype.create=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,n+"/boards",_({name:t},r))},t.prototype.createList=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,s+"/boards/"+i+"/lists",_({labelId:r},n))},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,o+"/boards/"+s,r)},t.prototype.editList=function(e,t,r,n,o){var s=S([e,t,r].map(encodeURIComponent),3),i=s[0],u=s[1],a=s[2];return A.put(this,i+"/boards/"+u+"/lists/"+a,_({position:n},o))},t.prototype.lists=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/boards/"+s+"/lists",r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,o+"/boards/"+s,r)},t.prototype.removeList=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.del(this,s+"/boards/"+i+"/lists/"+u,n)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/boards/"+s,r)},t.prototype.showList=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.get(this,s+"/boards/"+i+"/lists/"+u,n)},t}(I),G=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,r+"/labels",t)},t.prototype.create=function(e,t,r,n){var o=encodeURIComponent(e);return A.post(this,o+"/labels",_({name:t,color:r},n))},t.prototype.edit=function(e,t,r){var n=encodeURIComponent(e);return A.put(this,n+"/labels",_({name:t},r))},t.prototype.remove=function(e,t,r){var n=encodeURIComponent(e);return A.del(this,n+"/labels",_({name:t},r))},t.prototype.subscribe=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,o+"/issues/"+s+"/subscribe",r)},t.prototype.unsubscribe=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,o+"/issues/"+s+"/unsubscribe",r)},t}(I),F=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.add=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,s+"/members",_({userId:i,accessLevel:r},n))},t.prototype.all=function(e,t){void 0===t&&(t={});var r=t.includeInherited,n=U(t,["includeInherited"]),o=[encodeURIComponent(e),"members"];return r&&o.push("all"),A.get(this,o.join("/"),n)},t.prototype.edit=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.put(this,s+"/members/"+i,_({accessLevel:r},n))},t.prototype.show=function(e,t,r){void 0===r&&(r={});var n=r.includeInherited,o=U(r,["includeInherited"]),s=S([e,t].map(encodeURIComponent),2),i=s[0],u=s[1],a=[i,"members"];return n&&a.push("all"),a.push(u),A.get(this,a.join("/"),o)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,o+"/members/"+s,r)},t}(I),z=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,r+"/milestones",t)},t.prototype.create=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,n+"/milestones",_({title:t},r))},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,o+"/milestones/"+s,r)},t.prototype.issues=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/milestones/"+s+"/issues",r)},t.prototype.mergeRequests=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/milestones/"+s+"/merge_requests",r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/milestones/"+s,r)},t}(I),H=function(e){function t(t,r,n){var o=e.call(this,_({url:t},n))||this;return o.resource2Type=r,o}return C(t,e),t.prototype.all=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/"+this.resource2Type+"/"+s+"/notes",r)},t.prototype.create=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,s+"/"+this.resource2Type+"/"+i+"/notes",_({body:r},n))},t.prototype.edit=function(e,t,r,n,o){var s=S([e,t,r].map(encodeURIComponent),3),i=s[0],u=s[1],a=s[2];return A.put(this,i+"/"+this.resource2Type+"/"+u+"/notes/"+a,_({body:n},o))},t.prototype.remove=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.del(this,s+"/"+this.resource2Type+"/"+i+"/notes/"+u,n)},t.prototype.show=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.get(this,s+"/"+this.resource2Type+"/"+i+"/notes/"+u,n)},t}(I),Y=function(e){function t(t,r){return e.call(this,_({url:["templates",t].join("/")},r))||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"",e)},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,""+r,t)},t}(I),V=function(e){function t(t,r){return e.call(this,_({url:t},r))||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,r+"/variables",t)},t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,r+"/variables",t)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,o+"/variables/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,o+"/variables/"+s,r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,o+"/variables/"+s,r)},t}(I),W=function(e){function t(t){return e.call(this,"groups",t)||this}return C(t,e),t}(x),K=function(e){function t(t){return e.call(this,"groups",t)||this}return C(t,e),t}(M),J=function(e){function t(t){return e.call(this,"groups",t)||this}return C(t,e),t}(O),$=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"groups",t)||this}return C(t,e),t}(N),X=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"groups",t)||this}return C(t,e),t}(F),Z=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"groups",t)||this}return C(t,e),t}(z),Q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"groups/"+r+"/projects",t)},t.prototype.add=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"groups/"+o+"/projects/"+s,r)},t}(I),ee=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"groups",t)||this}return C(t,e),t}(V),te=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"groups",t)||this}return C(t,e),t}(G),re=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"groups",t)||this}return C(t,e),t}(B),ne=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"groups/"+r+"/epics",t)},t.prototype.create=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"groups/"+n+"/epics",_({title:t},r))},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"groups/"+o+"/epics/"+s,r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"groups/"+o+"/epics/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"groups/"+o+"/epics/"+s,r)},t}(I),oe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"groups/"+o+"/epics/"+s+"/issues",r)},t.prototype.assign=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.post(this,"groups/"+s+"/epics/"+i+"/issues/"+u,n)},t.prototype.edit=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.put(this,"groups/"+s+"/epics/"+i+"/issues/"+u,n)},t.prototype.remove=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.del(this,"groups/"+s+"/epics/"+i+"/issues/"+u,n)},t}(I),se=function(e){function t(t){return e.call(this,"groups","epics",t)||this}return C(t,e),t}(H),ie=function(e){function t(t){return e.call(this,"groups","epics",t)||this}return C(t,e),t}(D),ue=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"users",e)},t.prototype.activities=function(e){return A.get(this,"users/activities",e)},t.prototype.projects=function(e,t){var r=encodeURIComponent(e);return A.get(this,"users/"+r+"/projects",t)},t.prototype.block=function(e,t){var r=encodeURIComponent(e);return A.post(this,"users/"+r+"/block",t)},t.prototype.create=function(e){return A.post(this,"users",e)},t.prototype.current=function(e){return A.get(this,"user",e)},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"users/"+r,t)},t.prototype.events=function(e,t){var r=encodeURIComponent(e);return A.get(this,"users/"+r+"/events",t)},t.prototype.search=function(e,t){return A.get(this,"users",_({search:e},t))},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"users/"+r,t)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"users/"+r,t)},t.prototype.unblock=function(e,t){var r=encodeURIComponent(e);return A.post(this,"users/"+r+"/unblock",t)},t}(I),ae=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"users",t)||this}return C(t,e),t}(O),pe=function(e){return e?"users/"+encodeURIComponent(e)+"/emails":"user/emails"},ce=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t=e.userId,r=U(e,["userId"]);return A.get(this,pe(t),r)},t.prototype.add=function(e,t){void 0===t&&(t={});var r=t.userId,n=U(t,["userId"]);return A.post(this,pe(r),_({email:e},n))},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"user/emails/"+r,t)},t.prototype.remove=function(e,t){void 0===t&&(t={});var r=t.userId,n=U(t,["userId"]),o=encodeURIComponent(e);return A.del(this,pe(r)+"/"+o,n)},t}(I),he=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"users/"+r+"/impersonation_tokens",t)},t.prototype.add=function(e,t,r,n,o){var s=encodeURIComponent(e);return A.post(this,"users/"+s+"/impersonation_tokens",_({name:t,expiresAt:n,scopes:r},o))},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"users/"+o+"/impersonation_tokens/"+s,r)},t.prototype.revoke=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"users/"+o+"/impersonation_tokens/"+s,r)},t}(I),fe=function(e){return e?"users/"+encodeURIComponent(e)+"/keys":"user/keys"},le=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t=e.userId,r=U(e,["userId"]);return A.get(this,fe(t),r)},t.prototype.create=function(e,t,r){void 0===r&&(r={});var n=r.userId,o=U(r,["userId"]);return A.post(this,fe(n),_({title:e,key:t},o))},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"user/keys/"+r,t)},t.prototype.remove=function(e,t){void 0===t&&(t={});var r=t.userId,n=U(t,["userId"]),o=encodeURIComponent(e);return A.del(this,fe(r)+"/"+o,n)},t}(I),de=function(e){return e?"users/"+encodeURIComponent(e)+"/gpg_keys":"users/gpg_keys"},me=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t=e.userId,r=U(e,["userId"]);return A.get(this,de(t),r)},t.prototype.add=function(e,t){void 0===t&&(t={});var r=t.userId,n=U(t,["userId"]);return A.post(this,de(r),_({key:e},n))},t.prototype.show=function(e,t){void 0===t&&(t={});var r=t.userId,n=U(t,["userId"]),o=encodeURIComponent(e);return A.get(this,de(r)+"/"+o,n)},t.prototype.remove=function(e,t){void 0===t&&(t={});var r=t.userId,n=U(t,["userId"]),o=encodeURIComponent(e);return A.del(this,de(r)+"/"+o,n)},t}(I),ye=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/repository/branches",t)},t.prototype.create=function(e,t,r,n){var o,s=encodeURIComponent(e),i=this.url.includes("v3")?"branchName":"branch";return A.post(this,"projects/"+s+"/repository/branches",_(((o={})[i]=t,o.ref=r,o),n))},t.prototype.protect=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/protected_branches",_({name:t},r))},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/repository/branches/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/repository/branches/"+s,r)},t.prototype.unprotect=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/repository/branches/"+s+"/unprotect",r)},t}(I),ge=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/repository/commits",t)},t.prototype.cherryPick=function(e,t,r,n){var o=encodeURIComponent(e);return A.post(this,"projects/"+o+"/repository/commits/"+t+"/cherry_pick",_({branch:r},n))},t.prototype.comments=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/commits/"+t+"/comments",r)},t.prototype.create=function(e,t,r,n,o){void 0===n&&(n=[]);var s=encodeURIComponent(e);return A.post(this,"projects/"+s+"/repository/commits",_({branch:t,commitMessage:r,actions:n},o))},t.prototype.createComment=function(e,t,r,n){var o=encodeURIComponent(e);return A.post(this,"projects/"+o+"/repository/commits/"+t+"/comments",_({note:r},n))},t.prototype.diff=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/commits/"+t+"/diff",r)},t.prototype.editStatus=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/statuses/"+t,r)},t.prototype.references=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/commits/"+t+"/refs",r)},t.prototype.show=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/commits/"+t,r)},t.prototype.status=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/commits/"+t+"/statuses",r)},t.prototype.mergeRequests=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/commits/"+t+"/merge_requests",r)},t}(I),ve=function(e){function t(t){return e.call(this,"projects","repository/commits",t)||this}return C(t,e),t}(D),be=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.repositories=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/registry/repositories",t)},t.prototype.tags=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/registry/repositories/"+s+"/tags",r)},t.prototype.removeRepository=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/registry/repositories/"+s,r)},t.prototype.removeTag=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.del(this,"projects/"+s+"/registry/repositories/"+i+"/tags/"+u,n)},t.prototype.removeTags=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.del(this,"projects/"+s+"/registry/repositories/"+i+"/tags",_({nameRegexDelete:r},n))},t.prototype.showTag=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.get(this,"projects/"+s+"/registry/repositories/"+i+"/tags/"+u,n)},t}(I),we=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/deployments",t)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/deployments/"+s,r)},t.prototype.mergeRequests=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/deployments/"+s+"/merge_requests",r)},t}(I),Re=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.add=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/deploy_keys",t)},t.prototype.all=function(e){void 0===e&&(e={});var t,r=e.projectId,n=U(e,["projectId"]);return t=r?"projects/"+encodeURIComponent(r)+"/deploy_keys":"deploy_keys",A.get(this,t,n)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/deploy_keys/"+s,r)},t.prototype.enable=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/deploy_keys/"+s+"/enable",r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/deploy_keys/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/deploy_keys/"+s,r)},t}(I),Ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/environments",t)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/environments/"+s,r)},t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/environments",t)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/environments/"+s,r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/environments/"+s,r)},t.prototype.stop=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/environments/"+s+"/stop",r)},t}(I),je=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.addSpentTime=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,"projects/"+s+"/issues/"+i+"/add_spent_time",_({duration:r},n))},t.prototype.addTimeEstimate=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,"projects/"+s+"/issues/"+i+"/time_estimate",_({duration:r},n))},t.prototype.all=function(e){void 0===e&&(e={});var t,r=e.projectId,n=e.groupId,o=U(e,["projectId","groupId"]);return t=r?"projects/"+encodeURIComponent(r)+"/issues":n?"groups/"+encodeURIComponent(n)+"/issues":"issues",A.get(this,t,o)},t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/issues",t)},t.prototype.closedBy=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/issues/"+s+"/closed_by",r)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/issues/"+s,r)},t.prototype.link=function(e,t,r,n,o){var s=S([e,t].map(encodeURIComponent),2),i=s[0],u=s[1],a=S([r,n].map(encodeURIComponent),2),p=a[0],c=a[1];return A.post(this,"projects/"+i+"/issues/"+u+"/links",_({targetProjectId:p,targetIssueIid:c},o))},t.prototype.links=function(e,t){var r=S([e,t].map(encodeURIComponent),2),n=r[0],o=r[1];return A.get(this,"projects/"+n+"/issues/"+o+"/links")},t.prototype.participants=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/issues/"+s+"/participants",r)},t.prototype.relatedMergeRequests=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/issues/"+s+"/related_merge_requests",r)},t.prototype.removeLink=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.del(this,"projects/"+s+"/issues/"+i+"/links/"+u,_({},n))},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/issues/"+s,r)},t.prototype.resetSpentTime=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/issues/"+s+"/reset_spent_time",r)},t.prototype.resetTimeEstimate=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/issues/"+s+"/reset_time_estimate",r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/issues/"+s,r)},t.prototype.subscribe=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/issues/"+s+"/subscribe",r)},t.prototype.timeStats=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/issues/"+s+"/time_stats",r)},t.prototype.unsubscribe=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/issues/"+s+"/unsubscribe",r)},t}(I),Ce=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t,r=e.projectId,n=e.groupId,o=U(e,["projectId","groupId"]);return t=r?"projects/"+encodeURIComponent(r)+"/issues_statistics":n?"groups/"+encodeURIComponent(n)+"/issues_statistics":"issues_statistics",A.get(this,t,o)},t}(I),_e=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects","issues",t)||this}return C(t,e),t}(H),Ue=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects","issues",t)||this}return C(t,e),t}(D),ke=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"issues",t)||this}return C(t,e),t}(q),Ee=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/jobs",t)},t.prototype.cancel=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/jobs/"+s+"/cancel",r)},t.prototype.downloadSingleArtifactFile=function(e,t,r,n){void 0===n&&(n={});var o=n.stream,s=void 0!==o&&o,i=U(n,["stream"]),u=S([e,t].map(encodeURIComponent),2),a=u[0],p=u[1];return A[s?"stream":"get"](this,"projects/"+a+"/jobs/"+p+"/artifacts/"+r,i)},t.prototype.downloadSingleArtifactFileFromRef=function(e,t,r,n,o){void 0===o&&(o={});var s=o.stream,i=void 0!==s&&s,u=U(o,["stream"]),a=S([e,t,n].map(encodeURIComponent),3),p=a[0],c=a[1],h=a[2];return A[i?"stream":"get"](this,"projects/"+p+"/jobs/artifacts/"+c+"/raw/"+r+"?job="+h,u)},t.prototype.downloadLatestArtifactFile=function(e,t,r,n){void 0===n&&(n={});var o=n.stream,s=void 0!==o&&o,i=U(n,["stream"]),u=S([e,t,r].map(encodeURIComponent),3),a=u[0],p=u[1],c=u[2];return A[s?"stream":"get"](this,"projects/"+a+"/jobs/artifacts/"+p+"/download?job="+c,i)},t.prototype.downloadTraceFile=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/jobs/"+s+"/trace",r)},t.prototype.erase=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/jobs/"+s+"/erase",r)},t.prototype.eraseArtifacts=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/jobs/"+s+"/artifacts",r)},t.prototype.keepArtifacts=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/jobs/"+s+"/artifacts/keep",r)},t.prototype.play=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/jobs/"+s+"/play",r)},t.prototype.retry=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/jobs/"+s+"/retry",r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/jobs/"+s,r)},t.prototype.showPipelineJobs=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/pipelines/"+s+"/jobs",r)},t}(I),Se=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(G),Pe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.accept=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/merge_requests/"+s+"/merge",r)},t.prototype.addSpentTime=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,"projects/"+s+"/merge_requests/"+i+"/add_spent_time",_({duration:r},n))},t.prototype.addTimeEstimate=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.post(this,"projects/"+s+"/merge_requests/"+i+"/time_estimate",_({duration:r},n))},t.prototype.all=function(e){void 0===e&&(e={});var t,r=e.projectId,n=e.groupId,o=U(e,["projectId","groupId"]);return t=r?"projects/"+encodeURIComponent(r)+"/merge_requests":n?"groups/"+encodeURIComponent(n)+"/merge_requests":"merge_requests",A.get(this,t,o)},t.prototype.approve=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/merge_requests/"+s+"/approve",r)},t.prototype.approvals=function(e,t){void 0===t&&(t={});var r,n=t.mergerequestIid,o=U(t,["mergerequestIid"]),s=encodeURIComponent(e);n?r="projects/"+s+"/merge_requests/"+encodeURIComponent(n)+"/approvals":r="projects/"+s+"/approvals";return A.get(this,r,o)},t.prototype.approvalState=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/approval_state",r)},t.prototype.approvers=function(e,t,r,n){void 0===n&&(n={});var o,s=n.mergerequestIid,i=U(n,["mergerequestIid"]),u=encodeURIComponent(e);s?o="projects/"+u+"/merge_requests/"+encodeURIComponent(s)+"/approvers":o="projects/"+u+"/approvers";return A.put(this,o,_({approverIds:t,approverGroupIds:r},i))},t.prototype.cancelOnPipelineSucess=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/merge_requests/"+s+"/cancel_merge_when_pipeline_succeeds",r)},t.prototype.changes=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/changes",r)},t.prototype.closesIssues=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/closes_issues",r)},t.prototype.commits=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/commits",r)},t.prototype.create=function(e,t,r,n,o){var s=encodeURIComponent(e);return A.post(this,"projects/"+s+"/merge_requests",_({id:s,sourceBranch:t,targetBranch:r,title:n},o))},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/merge_requests/"+s,r)},t.prototype.editApprovals=function(e,t){void 0===t&&(t={});var r,n=t.mergerequestIid,o=U(t,["mergerequestIid"]),s=encodeURIComponent(e);n?r="projects/"+s+"/merge_requests/"+encodeURIComponent(n)+"/approvals":r="projects/"+s+"/approvals";return A.post(this,r,o)},t.prototype.participants=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/participants",r)},t.prototype.pipelines=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/pipelines",r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/merge_requests/"+s,r)},t.prototype.resetSpentTime=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/merge_requests/"+s+"/reset_spent_time",r)},t.prototype.resetTimeEstimate=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/merge_requests/"+s+"/reset_time_estimate",r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s,r)},t.prototype.subscribe=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/merge_requests/"+s+"/subscribe",r)},t.prototype.timeStats=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/time_stats",r)},t.prototype.version=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.get(this,"projects/"+s+"/merge_requests/"+i+"/versions/"+u,n)},t.prototype.versions=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/merge_requests/"+s+"/versions",r)},t.prototype.unapprove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/merge_requests/"+s+"/unapprove",r)},t.prototype.unsubscribe=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/merge_requests/"+s+"/unsubscribe",r)},t}(I),Ae=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"merge_requests",t)||this}return C(t,e),t}(q),Te=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects","merge_requests",t)||this}return C(t,e),t}(D),xe=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects","merge_requests",t)||this}return C(t,e),t}(H),Le=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/packages",t)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/packages/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/packages/"+s,r)},t.prototype.showFiles=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/packages/"+s+"/package_files",r)},t}(I),qe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/pipelines",t)},t.prototype.create=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/pipeline",_({ref:t},r))},t.prototype.delete=function(e,t,r){var n=encodeURIComponent(e);return A.del(this,"projects/"+n+"/pipelines/"+t,r)},t.prototype.show=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/pipelines/"+t,r)},t.prototype.retry=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/pipelines/"+t+"/retry",r)},t.prototype.cancel=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/pipelines/"+t+"/cancel",r)},t.prototype.showJobs=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/pipelines/"+t+"/jobs",r)},t.prototype.allVariables=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/pipelines/"+s+"/variables",r)},t}(I),Me=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/pipeline_schedules",t)},t.prototype.create=function(e,t,r,n,o){var s=encodeURIComponent(e);return A.post(this,"projects/"+s+"/pipeline_schedules",_({description:t,ref:r,cron:n},o))},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/pipeline_schedules/"+s,r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/pipeline_schedules/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/pipeline_schedules/"+s,r)},t.prototype.takeOwnership=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/pipeline_schedules/"+s+"/take_ownership",r)},t}(I),Oe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/pipeline_schedules/"+s+"/variables",r)},t.prototype.create=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/pipeline_schedules/"+s+"/variables",r)},t.prototype.edit=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.put(this,"projects/"+s+"/pipeline_schedules/"+i+"/variables/"+u,n)},t.prototype.show=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.get(this,"projects/"+s+"/pipeline_schedules/"+i+"/variables/"+u,n)},t.prototype.remove=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.del(this,"projects/"+s+"/pipeline_schedules/"+i+"/variables/"+u,n)},t}(I),Be={filename:Date.now().toString()+".tar.gz",contentType:"application/octet-stream"},De=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.download=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/export/download",t)},t.prototype.exportStatus=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/export",t)},t.prototype.import=function(e,t,r){void 0===r&&(r={});var n=r.metadata,o=U(r,["metadata"]);return A.post(this,"projects/import",_(_({isForm:!0},o),{file:[e,_(_({},Be),n)],path:t}))},t.prototype.importStatus=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/import",t)},t.prototype.schedule=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/export",t)},t}(I),Ne=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"projects",e)},t.prototype.archive=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/archive",t)},t.prototype.create=function(e){var t=e.userId,r=U(e,["userId"]),n=t?"projects/user/"+encodeURIComponent(t):"projects";return A.post(this,n,r)},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"projects/"+r,t)},t.prototype.events=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/events",t)},t.prototype.fork=function(e,t){void 0===t&&(t={});var r=t.forkedFromId,n=U(t,["forkedFromId"]),o="projects/"+encodeURIComponent(e)+"/fork";return r&&(o+="/"+encodeURIComponent(r)),A.post(this,o,n)},t.prototype.forks=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/forks",t)},t.prototype.languages=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/languages",t)},t.prototype.mirrorPull=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/mirror/pull",t)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"projects/"+r,t)},t.prototype.removeFork=function(e,t){var r=encodeURIComponent(e);return A.del(this,"projects/"+r+"/fork",t)},t.prototype.search=function(e,t){return A.get(this,"projects",_({search:e},t))},t.prototype.share=function(e,t,r,n){var o=encodeURIComponent(e);return A.post(this,"projects/"+o+"/share",_({groupId:t,groupAccess:r},n))},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r,t)},t.prototype.star=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/star",t)},t.prototype.statuses=function(e,t,r,n){var o=encodeURIComponent(e);return A.post(this,"projects/"+o+"/statuses/"+t,_({state:r},n))},t.prototype.transfer=function(e,t){var r=encodeURIComponent(e);return A.put(this,"projects/"+r+"/transfer",{namespace:t})},t.prototype.unarchive=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/unarchive",t)},t.prototype.unshare=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/share/"+s,r)},t.prototype.unstar=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/unstar",t)},t.prototype.upload=function(e,t,r){void 0===r&&(r={});var n=r.metadata,o=U(r,["metadata"]),s=encodeURIComponent(e);return A.post(this,"projects/"+s+"/uploads",_({isForm:!0,file:[t,_(_({},Be),n)]},o))},t}(I),Ge=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(x),Fe=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(M),ze=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(O),He=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(N),Ye=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/hooks",t)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/hooks/"+s,r)},t.prototype.add=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/hooks",_({url:t},r))},t.prototype.edit=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.put(this,"projects/"+s+"/hooks/"+i,_({url:r},n))},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/hooks/"+s,r)},t}(I),Ve=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(F),We=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(z),Ke=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/snippets",t)},t.prototype.content=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/snippets/"+s+"/raw",r)},t.prototype.create=function(e,t,r,n,o,s){var i=encodeURIComponent(e);return A.post(this,"projects/"+i+"/snippets",_({title:t,fileName:r,code:n,visibility:o},s))},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/snippets/"+s,r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/snippets/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/snippets/"+s,r)},t.prototype.userAgentDetails=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/snippets/"+s+"/user_agent_detail",r)},t}(I),Je=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects","snippets",t)||this}return C(t,e),t}(H),$e=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects","snippets",t)||this}return C(t,e),t}(D),Xe=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"issues",t)||this}return C(t,e),t}(q),Ze=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/protected_branches",t)},t.prototype.protect=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/protected_branches",_({name:t},r))},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/protected_branches/"+s,r)},t.prototype.unprotect=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/protected_branches/"+s,r)},t}(I),Qe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/protected_tags",t)},t.prototype.protect=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/protected_tags",_({name:t},r))},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/protected_tags/"+s,r)},t.prototype.unprotect=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/protected_tags/"+s,r)},t}(I),et=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(V),tt=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"projects",t)||this}return C(t,e),t}(B),rt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/push_rule",t)},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"projects/"+r+"/push_rule",t)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"projects/"+r+"/push_rule",t)},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/push_rule",t)},t}(I),nt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/releases",t)},t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/releases",t)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/releases/"+s,r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/releases/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/releases/"+s,r)},t}(I),ot=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/releases/"+s+"/assets/links",r)},t.prototype.create=function(e,t,r,n,o){var s=S([e,t].map(encodeURIComponent),2),i=s[0],u=s[1];return A.post(this,"projects/"+i+"/releases/"+u+"/assets/links",_({name:r,url:n},o))},t.prototype.edit=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.put(this,"projects/"+s+"/releases/"+i+"/assets/links/"+u,n)},t.prototype.remove=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.del(this,"projects/"+s+"/releases/"+i+"/assets/links/"+u,n)},t.prototype.show=function(e,t,r,n){var o=S([e,t,r].map(encodeURIComponent),3),s=o[0],i=o[1],u=o[2];return A.get(this,"projects/"+s+"/releases/"+i+"/assets/links/"+u,n)},t}(I),st=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.compare=function(e,t,r,n){var o=encodeURIComponent(e);return A.get(this,"projects/"+o+"/repository/compare",_({from:t,to:r},n))},t.prototype.contributors=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/repository/contributors",t)},t.prototype.mergeBase=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/merge_base",_({refs:t},r))},t.prototype.showArchive=function(e,t){void 0===t&&(t={});var r=t.fileType,n=void 0===r?"tar.gz":r,o=U(t,["fileType"]),s=encodeURIComponent(e);return A.get(this,"projects/"+s+"/repository/archive."+n,o)},t.prototype.showBlob=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/blobs/"+t,r)},t.prototype.showBlobRaw=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/repository/blobs/"+t+"/raw",r)},t.prototype.tree=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/repository/tree",t)},t}(I),it=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.create=function(e,t,r,n,o,s){var i=S([e,t].map(encodeURIComponent),2),u=i[0],a=i[1];return A.post(this,"projects/"+u+"/repository/files/"+a,_({branch:r,content:n,commitMessage:o},s))},t.prototype.edit=function(e,t,r,n,o,s){var i=S([e,t].map(encodeURIComponent),2),u=i[0],a=i[1];return A.put(this,"projects/"+u+"/repository/files/"+a,_({branch:r,content:n,commitMessage:o},s))},t.prototype.remove=function(e,t,r,n,o){var s=S([e,t].map(encodeURIComponent),2),i=s[0],u=s[1];return A.del(this,"projects/"+i+"/repository/files/"+u,_({branch:r,commitMessage:n},o))},t.prototype.show=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.get(this,"projects/"+s+"/repository/files/"+i,_({ref:r},n))},t.prototype.showBlame=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/repository/files/"+s+"/blame",r)},t.prototype.showRaw=function(e,t,r,n){var o=S([e,t].map(encodeURIComponent),2),s=o[0],i=o[1];return A.get(this,"projects/"+s+"/repository/files/"+i+"/raw",_({ref:r},n))},t}(I),ut=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t=e.projectId,r=U(e,["projectId"]),n=t?"projects/"+encodeURIComponent(t)+"/runners":"runners/all";return A.get(this,n,r)},t.prototype.allOwned=function(e){return A.get(this,"runners",e)},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"runners/"+r,t)},t.prototype.enable=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.post(this,"projects/"+o+"/runners",_({runnerId:s},r))},t.prototype.disable=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/runners/"+s,r)},t.prototype.jobs=function(e,t){var r=encodeURIComponent(e);return A.get(this,"runners/"+r+"/jobs",t)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"runners/"+r,t)},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"runners/"+r,t)},t}(I),at=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.edit=function(e,t,r){var n=encodeURIComponent(e);return A.put(this,"projects/"+n+"/services/"+t,r)},t.prototype.remove=function(e,t,r){var n=encodeURIComponent(e);return A.del(this,"projects/"+n+"/services/"+t,r)},t.prototype.show=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/services/"+t,r)},t}(I),pt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/repository/tags",t)},t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/repository/tags",t)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/repository/tags/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/repository/tags/"+s,r)},t}(I),ct=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"todos",e)},t.prototype.create=function(e,t,r){void 0===r&&(r={});var n=r.resourceName,o=U(r,["resourceName"]);return"issue"===n?A.post(this,"projects/"+e+"/issues/"+t+"/todo",o):A.post(this,"projects/"+e+"/merge_requests/"+t+"/todo",o)},t.prototype.done=function(e){var t=e.todoId,r=U(e,["todoId"]),n="mark_as_done";return t&&(n=t+"/"+n),A.post(this,"todos/"+n,r)},t}(I),ht=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.add=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/triggers",t)},t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/triggers",t)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/triggers/"+s,r)},t.prototype.pipeline=function(e,t,r,n){var o=(void 0===n?{}:n).variables,s=encodeURIComponent(e),i={};return o&&Object.entries(o).forEach((function(e){var t=S(e,2),r=t[0],n=t[1];i["variables["+r+"]"]=n})),A.post(this,"projects/"+s+"/trigger/pipeline",_({isForm:!0,ref:t,token:r},i))},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/triggers/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/triggers/"+s,r)},t}(I),ft=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/vulnerability_findings",t)},t}(I),lt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"application/settings",e)},t.prototype.edit=function(e){return A.put(this,"application/settings",e)},t}(I),dt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"broadcast_messages",e)},t.prototype.create=function(e){return A.post(this,"broadcast_messages",e)},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"broadcast_messages/"+r,t)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"broadcast_messages/"+r,t)},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"broadcast_messages/"+r,t)},t}(I),mt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"events",e)},t}(I),yt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"features",e)},t.prototype.set=function(e,t){var r=encodeURIComponent(e);return A.post(this,"features/"+r,t)},t}(I),gt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"geo_nodes",e)},t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,"geo_nodes/"+r,t)},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"geo_nodes/"+r,t)},t.prototype.failures=function(e){return A.post(this,"geo_nodes/current/failures",e)},t.prototype.repair=function(e,t){var r=encodeURIComponent(e);return A.del(this,"geo_nodes/"+r,t)},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"geo_nodes/"+r,t)},t.prototype.status=function(e,t){var r=encodeURIComponent(e);return A.get(this,"geo_nodes/"+r+"/status",t)},t.prototype.statuses=function(e){return A.get(this,"geo_nodes/statuses",e)},t}(I),vt=function(e){function t(t){return e.call(this,"gitignores",t)||this}return C(t,e),t}(Y),bt=function(e){function t(t){return e.call(this,"gitlab_ci_ymls",t)||this}return C(t,e),t}(Y),wt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"keys/"+r,t)},t}(I),Rt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.add=function(e,t){return A.post(this,"license",_({license:e},t))},t.prototype.all=function(e){return A.get(this,"licenses",e)},t.prototype.show=function(e){return A.get(this,"license",e)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"license/"+r,t)},t}(I),It=function(e){function t(t){return void 0===t&&(t={}),e.call(this,"licences",t)||this}return C(t,e),t}(Y),jt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.lint=function(e,t){return A.post(this,"ci/lint",_({content:e},t))},t}(I),Ct=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){return A.get(this,"namespaces",e)},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"namespaces/"+r,t)},t}(I);function _t(e){var t=e.projectId,r=e.groupId,n="";return t?n+="projects/"+encodeURIComponent(t)+"/":r&&(n+="groups/"+encodeURIComponent(r)+"/"),n+"notification_settings"}var Ut=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t=e.projectId,r=e.groupId,n=U(e,["projectId","groupId"]);return A.get(this,_t({groupId:r,projectId:t}),n)},t.prototype.edit=function(e){void 0===e&&(e={});var t=e.projectId,r=e.groupId,n=U(e,["projectId","groupId"]);return A.put(this,_t({groupId:r,projectId:t}),n)},t}(I),kt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.render=function(e,t){return A.post(this,"markdown",_({text:e},t))},t}(I),Et=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t=e.projectId,r=U(e,["projectId"]),n=t?"projects/"+encodeURIComponent(t)+"/":"";return A.get(this,n+"pages/domains",r)},t.prototype.create=function(e,t,r){var n=encodeURIComponent(e);return A.post(this,"projects/"+n+"/pages/domains",_({domain:t},r))},t.prototype.edit=function(e,t,r){var n=encodeURIComponent(e);return A.put(this,"projects/"+n+"/pages/domains/"+t,r)},t.prototype.show=function(e,t,r){var n=encodeURIComponent(e);return A.get(this,"projects/"+n+"/pages/domains/"+t,r)},t.prototype.remove=function(e,t,r){var n=encodeURIComponent(e);return A.del(this,"projects/"+n+"/pages/domains/"+t,r)},t}(I),St=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t,r){void 0===r&&(r={});var n=r.projectId,o=r.groupId,s=U(r,["projectId","groupId"]),i="";return n?i+="projects/"+encodeURIComponent(n)+"/":o&&(i+="groups/"+encodeURIComponent(o)+"/"),A.get(this,i+"search",_({scope:e,search:t},s))},t}(I),Pt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.queueMetrics=function(){return A.get(this,"sidekiq/queue_metrics")},t.prototype.processMetrics=function(){return A.get(this,"sidekiq/process_metrics")},t.prototype.jobStats=function(){return A.get(this,"sidekiq/job_stats")},t.prototype.compoundMetrics=function(){return A.get(this,"sidekiq/compound_metrics")},t}(I),At=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e){void 0===e&&(e={});var t=e.public,r=U(e,["public"]),n=t?"snippets/public":"snippets";return A.get(this,n,r)},t.prototype.content=function(e,t){var r=encodeURIComponent(e);return A.get(this,"snippets/"+r+"/raw",t)},t.prototype.create=function(e,t,r,n,o){return A.post(this,"snippets",_({title:e,fileName:t,content:r,visibility:n},o))},t.prototype.edit=function(e,t){var r=encodeURIComponent(e);return A.put(this,"snippets/"+r,t)},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"snippets/"+r,t)},t.prototype.show=function(e,t){var r=encodeURIComponent(e);return A.get(this,"snippets/"+r,t)},t.prototype.userAgentDetails=function(e,t){var r=encodeURIComponent(e);return A.get(this,"snippets/"+r+"/user_agent_detail",t)},t}(I),Tt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.add=function(e,t){return A.post(this,"hooks",_({url:e},t))},t.prototype.all=function(e){return A.get(this,"hooks",e)},t.prototype.edit=function(e,t,r){var n=encodeURIComponent(e);return A.put(this,"hooks/"+n,_({url:t},r))},t.prototype.remove=function(e,t){var r=encodeURIComponent(e);return A.del(this,"hooks/"+r,t)},t}(I),xt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.show=function(e){return A.get(this,"version",e)},t}(I),Lt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C(t,e),t.prototype.all=function(e,t){var r=encodeURIComponent(e);return A.get(this,"projects/"+r+"/wikis",t)},t.prototype.create=function(e,t){var r=encodeURIComponent(e);return A.post(this,"projects/"+r+"/wikis",t)},t.prototype.edit=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.put(this,"projects/"+o+"/wikis/"+s,r)},t.prototype.show=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.get(this,"projects/"+o+"/wikis/"+s,r)},t.prototype.remove=function(e,t,r){var n=S([e,t].map(encodeURIComponent),2),o=n[0],s=n[1];return A.del(this,"projects/"+o+"/wikis/"+s,r)},t}(I),qt=Object.freeze({__proto__:null,Groups:T,GroupAccessRequests:W,GroupBadges:K,GroupCustomAttributes:J,GroupIssueBoards:$,GroupMembers:X,GroupMilestones:Z,GroupProjects:Q,GroupVariables:ee,GroupLabels:te,GroupDeployTokens:re,Epics:ne,EpicIssues:oe,EpicNotes:se,EpicDiscussions:ie,Users:ue,UserCustomAttributes:ae,UserEmails:ce,UserImpersonationTokens:he,UserKeys:le,UserGPGKeys:me,Branches:ye,Commits:ge,CommitDiscussions:ve,ContainerRegistry:be,Deployments:we,DeployKeys:Re,Environments:Ie,Issues:je,IssuesStatistics:Ce,IssueNotes:_e,IssueDiscussions:Ue,IssueAwardEmojis:ke,Jobs:Ee,Labels:Se,MergeRequests:Pe,MergeRequestAwardEmojis:Ae,MergeRequestDiscussions:Te,MergeRequestNotes:xe,Packages:Le,Pipelines:qe,PipelineSchedules:Me,PipelineScheduleVariables:Oe,Projects:Ne,ProjectAccessRequests:Ge,ProjectBadges:Fe,ProjectCustomAttributes:ze,ProjectImportExport:De,ProjectIssueBoards:He,ProjectHooks:Ye,ProjectMembers:Ve,ProjectMilestones:We,ProjectSnippets:Ke,ProjectSnippetNotes:Je,ProjectSnippetDiscussions:$e,ProjectSnippetAwardEmojis:Xe,ProtectedBranches:Ze,ProtectedTags:Qe,ProjectVariables:et,ProjectDeployTokens:tt,PushRules:rt,Releases:nt,ReleaseLinks:ot,Repositories:st,RepositoryFiles:it,Runners:ut,Services:at,Tags:pt,Todos:ct,Triggers:ht,VulnerabilityFindings:ft,ApplicationSettings:lt,BroadcastMessages:dt,Events:mt,FeatureFlags:yt,GeoNodes:gt,GitignoreTemplates:vt,GitLabCIYMLTemplates:bt,Keys:wt,License:Rt,LicenceTemplates:It,Lint:jt,Namespaces:Ct,NotificationSettings:Ut,Markdown:kt,PagesDomains:Et,Search:St,SidekiqMetrics:Pt,Snippets:At,SystemHooks:Tt,Version:xt,Wikis:Lt}),Mt=P({Groups:T,GroupAccessRequests:W,GroupBadges:K,GroupCustomAttributes:J,GroupIssueBoards:$,GroupMembers:X,GroupMilestones:Z,GroupProjects:Q,GroupVariables:ee,GroupLabels:te,GroupDeployTokens:re,Epics:ne,EpicIssues:oe,EpicNotes:se,EpicDiscussions:ie}),Ot=P({Users:ue,UserCustomAttributes:ae,UserEmails:ce,UserImpersonationTokens:he,UserKeys:le,UserGPGKeys:me}),Bt=P({Branches:ye,Commits:ge,CommitDiscussions:ve,ContainerRegistry:be,DeployKeys:Re,Deployments:we,Environments:Ie,Issues:je,IssuesStatistics:Ce,IssueAwardEmojis:ke,IssueNotes:_e,IssueDiscussions:Ue,Jobs:Ee,Labels:Se,MergeRequests:Pe,MergeRequestAwardEmojis:Ae,MergeRequestDiscussions:Te,MergeRequestNotes:xe,Packages:Le,Pipelines:qe,PipelineSchedules:Me,PipelineScheduleVariables:Oe,Projects:Ne,ProjectAccessRequests:Ge,ProjectBadges:Fe,ProjectCustomAttributes:ze,ProjectImportExport:De,ProjectIssueBoards:He,ProjectHooks:Ye,ProjectMembers:Ve,ProjectMilestones:We,ProjectSnippets:Ke,ProjectSnippetNotes:Je,ProjectSnippetDiscussions:$e,ProjectSnippetAwardEmojis:Xe,ProtectedBranches:Ze,ProtectedTags:Qe,ProjectVariables:et,ProjectDeployTokens:tt,PushRules:rt,Releases:nt,ReleaseLinks:ot,Repositories:st,RepositoryFiles:it,Runners:ut,Services:at,Tags:pt,Todos:ct,Triggers:ht,VulnerabilityFindings:ft}),Dt=P(qt),Nt=Object.freeze({__proto__:null,ApplicationSettings:lt,Branches:ye,BroadcastMessages:dt,CommitDiscussions:ve,Commits:ge,ContainerRegistry:be,DeployKeys:Re,Deployments:we,Environments:Ie,EpicDiscussions:ie,EpicIssues:oe,EpicNotes:se,Epics:ne,Events:mt,FeatureFlags:yt,GeoNodes:gt,GitLabCIYMLTemplates:bt,GitignoreTemplates:vt,Gitlab:Dt,GroupAccessRequests:W,GroupBadges:K,GroupCustomAttributes:J,GroupDeployTokens:re,GroupIssueBoards:$,GroupLabels:te,GroupMembers:X,GroupMilestones:Z,GroupProjects:Q,GroupVariables:ee,Groups:T,GroupsBundle:Mt,IssueAwardEmojis:ke,IssueDiscussions:Ue,IssueNotes:_e,Issues:je,IssuesStatistics:Ce,Jobs:Ee,Keys:wt,Labels:Se,LicenceTemplates:It,License:Rt,Lint:jt,Markdown:kt,MergeRequestAwardEmojis:Ae,MergeRequestDiscussions:Te,MergeRequestNotes:xe,MergeRequests:Pe,Namespaces:Ct,NotificationSettings:Ut,Packages:Le,PagesDomains:Et,PipelineScheduleVariables:Oe,PipelineSchedules:Me,Pipelines:qe,ProjectAccessRequests:Ge,ProjectBadges:Fe,ProjectCustomAttributes:ze,ProjectDeployTokens:tt,ProjectHooks:Ye,ProjectImportExport:De,ProjectIssueBoards:He,ProjectMembers:Ve,ProjectMilestones:We,ProjectSnippetAwardEmojis:Xe,ProjectSnippetDiscussions:$e,ProjectSnippetNotes:Je,ProjectSnippets:Ke,ProjectVariables:et,Projects:Ne,ProjectsBundle:Bt,ProtectedBranches:Ze,ProtectedTags:Qe,PushRules:rt,ReleaseLinks:ot,Releases:nt,Repositories:st,RepositoryFiles:it,Runners:ut,Search:St,Services:at,SidekiqMetrics:Pt,Snippets:At,SystemHooks:Tt,Tags:pt,Todos:ct,Triggers:ht,UserCustomAttributes:ae,UserEmails:ce,UserGPGKeys:me,UserImpersonationTokens:he,UserKeys:le,Users:ue,UsersBundle:Ot,Version:xt,VulnerabilityFindings:ft,Wikis:Lt}),Gt=function(){return(Gt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function Ft(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function u(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}a((n=n.apply(e,t||[])).next())}))}function zt(e,t){var r,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}function Ht(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,s=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}return i}var Yt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};
/*! MIT License © Sindre Sorhus */const Vt={},Wt=e=>"undefined"!=typeof self&&self&&e in self?self:"undefined"!=typeof window&&window&&e in window?window:void 0!==Yt&&Yt&&e in Yt?Yt:"undefined"!=typeof globalThis&&globalThis?globalThis:void 0,Kt=["Headers","Request","Response","ReadableStream","fetch","AbortController","FormData"];for(const e of Kt)Object.defineProperty(Vt,e,{get(){const t=Wt(e),r=t&&t[e];return"function"==typeof r?r.bind(t):r}});const Jt=e=>null!==e&&"object"==typeof e,$t="function"==typeof Vt.AbortController,Xt="function"==typeof Vt.ReadableStream,Zt="function"==typeof Vt.FormData,Qt=(e,t)=>{const r=new Vt.Headers(e||{}),n=t instanceof Vt.Headers,o=new Vt.Headers(t||{});for(const[e,t]of o)n&&"undefined"===t||void 0===t?r.delete(e):r.set(e,t);return r},er=(...e)=>{let t={},r={};for(const n of e){if(Array.isArray(n))Array.isArray(t)||(t=[]),t=[...t,...n];else if(Jt(n)){for(let[e,r]of Object.entries(n))Jt(r)&&Reflect.has(t,e)&&(r=er(t[e],r)),t={...t,[e]:r};Jt(n.headers)&&(r=Qt(r,n.headers))}t.headers=r}return t},tr=["get","post","put","patch","head","delete"],rr={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},nr=[413,429,503],or=Symbol("stop");class sr extends Error{constructor(e){super(e.statusText||String(0===e.status||e.status?e.status:"Unknown response error")),this.name="HTTPError",this.response=e}}class ir extends Error{constructor(e){super("Request timed out"),this.name="TimeoutError",this.request=e}}const ur=e=>new Promise(t=>setTimeout(t,e)),ar=e=>tr.includes(e)?e.toUpperCase():e,pr={limit:2,methods:["get","put","head","delete","options","trace"],statusCodes:[408,413,429,500,502,503,504],afterStatusCodes:nr},cr=(e={})=>{if("number"==typeof e)return{...pr,limit:e};if(e.methods&&!Array.isArray(e.methods))throw new Error("retry.methods must be an array");if(e.statusCodes&&!Array.isArray(e.statusCodes))throw new Error("retry.statusCodes must be an array");return{...pr,...e,afterStatusCodes:nr}};class hr{constructor(e,t={}){if(this._retryCount=0,this._input=e,this._options={credentials:this._input.credentials||"same-origin",...t,headers:Qt(this._input.headers,t.headers),hooks:er({beforeRequest:[],beforeRetry:[],afterResponse:[]},t.hooks),method:ar(t.method||this._input.method),prefixUrl:String(t.prefixUrl||""),retry:cr(t.retry),throwHttpErrors:!1!==t.throwHttpErrors,timeout:void 0===t.timeout?1e4:t.timeout,fetch:t.fetch||Vt.fetch},"string"!=typeof this._input&&!(this._input instanceof URL||this._input instanceof Vt.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&"string"==typeof this._input){if(this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if($t&&(this.abortController=new Vt.AbortController,this._options.signal&&this._options.signal.addEventListener("abort",()=>{this.abortController.abort()}),this._options.signal=this.abortController.signal),this.request=new Vt.Request(this._input,this._options),this._options.searchParams){const e="?"+new URLSearchParams(this._options.searchParams).toString(),t=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,e);!(Zt&&this._options.body instanceof Vt.FormData||this._options.body instanceof URLSearchParams)||this._options.headers&&this._options.headers["content-type"]||this.request.headers.delete("content-type"),this.request=new Vt.Request(new Vt.Request(t,this.request),this._options)}void 0!==this._options.json&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type","application/json"),this.request=new Vt.Request(this.request,{body:this._options.body}));const r=async()=>{if(this._options.timeout>2147483647)throw new RangeError("The `timeout` option cannot be greater than 2147483647");await ur(1);let e=await this._fetch();for(const t of this._options.hooks.afterResponse){const r=await t(this.request,this._options,e.clone());r instanceof Vt.Response&&(e=r)}if(!e.ok&&this._options.throwHttpErrors)throw new sr(e);if(this._options.onDownloadProgress){if("function"!=typeof this._options.onDownloadProgress)throw new TypeError("The `onDownloadProgress` option must be a function");if(!Xt)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return this._stream(e.clone(),this._options.onDownloadProgress)}return this._options.parseJson&&(e.json=async()=>this._options.parseJson(await e.text())),e},n=this._options.retry.methods.includes(this.request.method.toLowerCase())?this._retry(r):r();for(const[e,r]of Object.entries(rr))n[e]=async()=>{this.request.headers.set("accept",this.request.headers.get("accept")||r);const o=(await n).clone();if("json"===e){if(204===o.status)return"";if(t.parseJson)return t.parseJson(await o.text())}return o[e]()};return n}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount<this._options.retry.limit&&!(e instanceof ir)){if(e instanceof sr){if(!this._options.retry.statusCodes.includes(e.response.status))return 0;const t=e.response.headers.get("Retry-After");if(t&&this._options.retry.afterStatusCodes.includes(e.response.status)){let e=Number(t);return Number.isNaN(e)?e=Date.parse(t)-Date.now():e*=1e3,void 0!==this._options.retry.maxRetryAfter&&e>this._options.retry.maxRetryAfter?0:e}if(413===e.response.status)return 0}return.3*2**(this._retryCount-1)*1e3}return 0}async _retry(e){try{return await e()}catch(t){const r=Math.min(this._calculateRetryDelay(t),2147483647);if(0!==r&&this._retryCount>0){await ur(r);for(const e of this._options.hooks.beforeRetry){if(await e({request:this.request,options:this._options,error:t,response:t.response.clone(),retryCount:this._retryCount})===or)return}return this._retry(e)}if(this._options.throwHttpErrors)throw t}}async _fetch(){for(const e of this._options.hooks.beforeRequest){const t=await e(this.request,this._options);if(t instanceof Request){this.request=t;break}if(t instanceof Response)return t}return!1===this._options.timeout?this._options.fetch(this.request.clone()):(e=this.request.clone(),t=this.abortController,r=this._options,new Promise((n,o)=>{const s=setTimeout(()=>{t&&t.abort(),o(new ir(e))},r.timeout);r.fetch(e).then(n).catch(o).then(()=>{clearTimeout(s)})}));var e,t,r}_stream(e,t){const r=Number(e.headers.get("content-length"))||0;let n=0;return new Vt.Response(new Vt.ReadableStream({start(o){const s=e.body.getReader();t&&t({percent:0,transferredBytes:0,totalBytes:r},new Uint8Array),async function e(){const{done:i,value:u}=await s.read();if(i)o.close();else{if(t){n+=u.byteLength;t({percent:0===r?0:n/r,transferredBytes:n,totalBytes:r},u)}o.enqueue(u),e()}}()}}))}}const fr=(...e)=>{for(const t of e)if((!Jt(t)||Array.isArray(t))&&void 0!==t)throw new TypeError("The `options` argument must be an object");return er({},...e)},lr=e=>{const t=(t,r)=>new hr(t,fr(e,r));for(const r of tr)t[r]=(t,n)=>new hr(t,fr(e,n,{method:r}));return t.HTTPError=sr,t.TimeoutError=ir,t.create=e=>lr(fr(e)),t.extend=t=>lr(fr(e,t)),t.stop=or,t};var dr=lr(),mr=[],yr=[],gr="undefined"!=typeof Uint8Array?Uint8Array:Array,vr=!1;function br(){vr=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,r=e.length;t<r;++t)mr[t]=e[t],yr[e.charCodeAt(t)]=t;yr["-".charCodeAt(0)]=62,yr["_".charCodeAt(0)]=63}function wr(e,t,r){for(var n,o,s=[],i=t;i<r;i+=3)n=(e[i]<<16)+(e[i+1]<<8)+e[i+2],s.push(mr[(o=n)>>18&63]+mr[o>>12&63]+mr[o>>6&63]+mr[63&o]);return s.join("")}function Rr(e){var t;vr||br();for(var r=e.length,n=r%3,o="",s=[],i=0,u=r-n;i<u;i+=16383)s.push(wr(e,i,i+16383>u?u:i+16383));return 1===n?(t=e[r-1],o+=mr[t>>2],o+=mr[t<<4&63],o+="=="):2===n&&(t=(e[r-2]<<8)+e[r-1],o+=mr[t>>10],o+=mr[t>>4&63],o+=mr[t<<2&63],o+="="),s.push(o),s.join("")}function Ir(e,t,r,n,o){var s,i,u=8*o-n-1,a=(1<<u)-1,p=a>>1,c=-7,h=r?o-1:0,f=r?-1:1,l=e[t+h];for(h+=f,s=l&(1<<-c)-1,l>>=-c,c+=u;c>0;s=256*s+e[t+h],h+=f,c-=8);for(i=s&(1<<-c)-1,s>>=-c,c+=n;c>0;i=256*i+e[t+h],h+=f,c-=8);if(0===s)s=1-p;else{if(s===a)return i?NaN:1/0*(l?-1:1);i+=Math.pow(2,n),s-=p}return(l?-1:1)*i*Math.pow(2,s-n)}function jr(e,t,r,n,o,s){var i,u,a,p=8*s-o-1,c=(1<<p)-1,h=c>>1,f=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:s-1,d=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,i=c):(i=Math.floor(Math.log(t)/Math.LN2),t*(a=Math.pow(2,-i))<1&&(i--,a*=2),(t+=i+h>=1?f/a:f*Math.pow(2,1-h))*a>=2&&(i++,a/=2),i+h>=c?(u=0,i=c):i+h>=1?(u=(t*a-1)*Math.pow(2,o),i+=h):(u=t*Math.pow(2,h-1)*Math.pow(2,o),i=0));o>=8;e[r+l]=255&u,l+=d,u/=256,o-=8);for(i=i<<o|u,p+=o;p>0;e[r+l]=255&i,l+=d,i/=256,p-=8);e[r+l-d]|=128*m}var Cr={}.toString,_r=Array.isArray||function(e){return"[object Array]"==Cr.call(e)};function Ur(){return Er.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function kr(e,t){if(Ur()<t)throw new RangeError("Invalid typed array length");return Er.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=Er.prototype:(null===e&&(e=new Er(t)),e.length=t),e}function Er(e,t,r){if(!(Er.TYPED_ARRAY_SUPPORT||this instanceof Er))return new Er(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return Ar(this,e)}return Sr(this,e,t,r)}function Sr(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);Er.TYPED_ARRAY_SUPPORT?(e=t).__proto__=Er.prototype:e=Tr(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!Er.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|qr(t,r),o=(e=kr(e,n)).write(t,r);o!==n&&(e=e.slice(0,o));return e}(e,t,r):function(e,t){if(Lr(t)){var r=0|xr(t.length);return 0===(e=kr(e,r)).length||t.copy(e,0,0,r),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?kr(e,0):Tr(e,t);if("Buffer"===t.type&&_r(t.data))return Tr(e,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function Pr(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function Ar(e,t){if(Pr(t),e=kr(e,t<0?0:0|xr(t)),!Er.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function Tr(e,t){var r=t.length<0?0:0|xr(t.length);e=kr(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function xr(e){if(e>=Ur())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ur().toString(16)+" bytes");return 0|e}function Lr(e){return!(null==e||!e._isBuffer)}function qr(e,t){if(Lr(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return an(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return pn(e).length;default:if(n)return an(e).length;t=(""+t).toLowerCase(),n=!0}}function Mr(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return $r(this,t,r);case"utf8":case"utf-8":return Wr(this,t,r);case"ascii":return Kr(this,t,r);case"latin1":case"binary":return Jr(this,t,r);case"base64":return Vr(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xr(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function Or(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function Br(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=Er.from(t,n)),Lr(t))return 0===t.length?-1:Dr(e,t,r,n,o);if("number"==typeof t)return t&=255,Er.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):Dr(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function Dr(e,t,r,n,o){var s,i=1,u=e.length,a=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;i=2,u/=2,a/=2,r/=2}function p(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(o){var c=-1;for(s=r;s<u;s++)if(p(e,s)===p(t,-1===c?0:s-c)){if(-1===c&&(c=s),s-c+1===a)return c*i}else-1!==c&&(s-=s-c),c=-1}else for(r+a>u&&(r=u-a),s=r;s>=0;s--){for(var h=!0,f=0;f<a;f++)if(p(e,s+f)!==p(t,f)){h=!1;break}if(h)return s}return-1}function Nr(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var s=t.length;if(s%2!=0)throw new TypeError("Invalid hex string");n>s/2&&(n=s/2);for(var i=0;i<n;++i){var u=parseInt(t.substr(2*i,2),16);if(isNaN(u))return i;e[r+i]=u}return i}function Gr(e,t,r,n){return cn(an(t,e.length-r),e,r,n)}function Fr(e,t,r,n){return cn(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function zr(e,t,r,n){return Fr(e,t,r,n)}function Hr(e,t,r,n){return cn(pn(t),e,r,n)}function Yr(e,t,r,n){return cn(function(e,t){for(var r,n,o,s=[],i=0;i<e.length&&!((t-=2)<0);++i)n=(r=e.charCodeAt(i))>>8,o=r%256,s.push(o),s.push(n);return s}(t,e.length-r),e,r,n)}function Vr(e,t,r){return 0===t&&r===e.length?Rr(e):Rr(e.slice(t,r))}function Wr(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var s,i,u,a,p=e[o],c=null,h=p>239?4:p>223?3:p>191?2:1;if(o+h<=r)switch(h){case 1:p<128&&(c=p);break;case 2:128==(192&(s=e[o+1]))&&(a=(31&p)<<6|63&s)>127&&(c=a);break;case 3:s=e[o+1],i=e[o+2],128==(192&s)&&128==(192&i)&&(a=(15&p)<<12|(63&s)<<6|63&i)>2047&&(a<55296||a>57343)&&(c=a);break;case 4:s=e[o+1],i=e[o+2],u=e[o+3],128==(192&s)&&128==(192&i)&&128==(192&u)&&(a=(15&p)<<18|(63&s)<<12|(63&i)<<6|63&u)>65535&&a<1114112&&(c=a)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),o+=h}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}Er.TYPED_ARRAY_SUPPORT=void 0===Yt.TYPED_ARRAY_SUPPORT||Yt.TYPED_ARRAY_SUPPORT,Er.poolSize=8192,Er._augment=function(e){return e.__proto__=Er.prototype,e},Er.from=function(e,t,r){return Sr(null,e,t,r)},Er.TYPED_ARRAY_SUPPORT&&(Er.prototype.__proto__=Uint8Array.prototype,Er.__proto__=Uint8Array),Er.alloc=function(e,t,r){return function(e,t,r,n){return Pr(t),t<=0?kr(e,t):void 0!==r?"string"==typeof n?kr(e,t).fill(r,n):kr(e,t).fill(r):kr(e,t)}(null,e,t,r)},Er.allocUnsafe=function(e){return Ar(null,e)},Er.allocUnsafeSlow=function(e){return Ar(null,e)},Er.isBuffer=hn,Er.compare=function(e,t){if(!Lr(e)||!Lr(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,o=0,s=Math.min(r,n);o<s;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},Er.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Er.concat=function(e,t){if(!_r(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Er.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=Er.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var s=e[r];if(!Lr(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},Er.byteLength=qr,Er.prototype._isBuffer=!0,Er.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)Or(this,t,t+1);return this},Er.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)Or(this,t,t+3),Or(this,t+1,t+2);return this},Er.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)Or(this,t,t+7),Or(this,t+1,t+6),Or(this,t+2,t+5),Or(this,t+3,t+4);return this},Er.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?Wr(this,0,e):Mr.apply(this,arguments)},Er.prototype.equals=function(e){if(!Lr(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Er.compare(this,e)},Er.prototype.inspect=function(){var e="";return this.length>0&&(e=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(e+=" ... ")),"<Buffer "+e+">"},Er.prototype.compare=function(e,t,r,n,o){if(!Lr(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(this===e)return 0;for(var s=(o>>>=0)-(n>>>=0),i=(r>>>=0)-(t>>>=0),u=Math.min(s,i),a=this.slice(n,o),p=e.slice(t,r),c=0;c<u;++c)if(a[c]!==p[c]){s=a[c],i=p[c];break}return s<i?-1:i<s?1:0},Er.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},Er.prototype.indexOf=function(e,t,r){return Br(this,e,t,r,!0)},Er.prototype.lastIndexOf=function(e,t,r){return Br(this,e,t,r,!1)},Er.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return Nr(this,e,t,r);case"utf8":case"utf-8":return Gr(this,e,t,r);case"ascii":return Fr(this,e,t,r);case"latin1":case"binary":return zr(this,e,t,r);case"base64":return Hr(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yr(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},Er.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Kr(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function Jr(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function $r(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var o="",s=t;s<r;++s)o+=un(e[s]);return o}function Xr(e,t,r){for(var n=e.slice(t,r),o="",s=0;s<n.length;s+=2)o+=String.fromCharCode(n[s]+256*n[s+1]);return o}function Zr(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function Qr(e,t,r,n,o,s){if(!Lr(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function en(e,t,r,n){t<0&&(t=65535+t+1);for(var o=0,s=Math.min(e.length-r,2);o<s;++o)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function tn(e,t,r,n){t<0&&(t=4294967295+t+1);for(var o=0,s=Math.min(e.length-r,4);o<s;++o)e[r+o]=t>>>8*(n?o:3-o)&255}function rn(e,t,r,n,o,s){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function nn(e,t,r,n,o){return o||rn(e,0,r,4),jr(e,t,r,n,23,4),r+4}function on(e,t,r,n,o){return o||rn(e,0,r,8),jr(e,t,r,n,52,8),r+8}Er.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),Er.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=Er.prototype;else{var o=t-e;r=new Er(o,void 0);for(var s=0;s<o;++s)r[s]=this[s+e]}return r},Er.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||Zr(e,t,this.length);for(var n=this[e],o=1,s=0;++s<t&&(o*=256);)n+=this[e+s]*o;return n},Er.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||Zr(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},Er.prototype.readUInt8=function(e,t){return t||Zr(e,1,this.length),this[e]},Er.prototype.readUInt16LE=function(e,t){return t||Zr(e,2,this.length),this[e]|this[e+1]<<8},Er.prototype.readUInt16BE=function(e,t){return t||Zr(e,2,this.length),this[e]<<8|this[e+1]},Er.prototype.readUInt32LE=function(e,t){return t||Zr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Er.prototype.readUInt32BE=function(e,t){return t||Zr(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Er.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||Zr(e,t,this.length);for(var n=this[e],o=1,s=0;++s<t&&(o*=256);)n+=this[e+s]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*t)),n},Er.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||Zr(e,t,this.length);for(var n=t,o=1,s=this[e+--n];n>0&&(o*=256);)s+=this[e+--n]*o;return s>=(o*=128)&&(s-=Math.pow(2,8*t)),s},Er.prototype.readInt8=function(e,t){return t||Zr(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Er.prototype.readInt16LE=function(e,t){t||Zr(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},Er.prototype.readInt16BE=function(e,t){t||Zr(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},Er.prototype.readInt32LE=function(e,t){return t||Zr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Er.prototype.readInt32BE=function(e,t){return t||Zr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Er.prototype.readFloatLE=function(e,t){return t||Zr(e,4,this.length),Ir(this,e,!0,23,4)},Er.prototype.readFloatBE=function(e,t){return t||Zr(e,4,this.length),Ir(this,e,!1,23,4)},Er.prototype.readDoubleLE=function(e,t){return t||Zr(e,8,this.length),Ir(this,e,!0,52,8)},Er.prototype.readDoubleBE=function(e,t){return t||Zr(e,8,this.length),Ir(this,e,!1,52,8)},Er.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||Qr(this,e,t,r,Math.pow(2,8*r)-1,0);var o=1,s=0;for(this[t]=255&e;++s<r&&(o*=256);)this[t+s]=e/o&255;return t+r},Er.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||Qr(this,e,t,r,Math.pow(2,8*r)-1,0);var o=r-1,s=1;for(this[t+o]=255&e;--o>=0&&(s*=256);)this[t+o]=e/s&255;return t+r},Er.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,1,255,0),Er.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},Er.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,2,65535,0),Er.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):en(this,e,t,!0),t+2},Er.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,2,65535,0),Er.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):en(this,e,t,!1),t+2},Er.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,4,4294967295,0),Er.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):tn(this,e,t,!0),t+4},Er.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,4,4294967295,0),Er.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):tn(this,e,t,!1),t+4},Er.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);Qr(this,e,t,r,o-1,-o)}var s=0,i=1,u=0;for(this[t]=255&e;++s<r&&(i*=256);)e<0&&0===u&&0!==this[t+s-1]&&(u=1),this[t+s]=(e/i>>0)-u&255;return t+r},Er.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);Qr(this,e,t,r,o-1,-o)}var s=r-1,i=1,u=0;for(this[t+s]=255&e;--s>=0&&(i*=256);)e<0&&0===u&&0!==this[t+s+1]&&(u=1),this[t+s]=(e/i>>0)-u&255;return t+r},Er.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,1,127,-128),Er.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},Er.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,2,32767,-32768),Er.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):en(this,e,t,!0),t+2},Er.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,2,32767,-32768),Er.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):en(this,e,t,!1),t+2},Er.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,4,2147483647,-2147483648),Er.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):tn(this,e,t,!0),t+4},Er.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||Qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),Er.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):tn(this,e,t,!1),t+4},Er.prototype.writeFloatLE=function(e,t,r){return nn(this,e,t,!0,r)},Er.prototype.writeFloatBE=function(e,t,r){return nn(this,e,t,!1,r)},Er.prototype.writeDoubleLE=function(e,t,r){return on(this,e,t,!0,r)},Er.prototype.writeDoubleBE=function(e,t,r){return on(this,e,t,!1,r)},Er.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o,s=n-r;if(this===e&&r<t&&t<n)for(o=s-1;o>=0;--o)e[o+t]=this[o+r];else if(s<1e3||!Er.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+s),t);return s},Er.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Er.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var s;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(s=t;s<r;++s)this[s]=e;else{var i=Lr(e)?e:an(new Er(e,n).toString()),u=i.length;for(s=0;s<r-t;++s)this[s+t]=i[s%u]}return this};var sn=/[^+\/0-9A-Za-z-_]/g;function un(e){return e<16?"0"+e.toString(16):e.toString(16)}function an(e,t){var r;t=t||1/0;for(var n=e.length,o=null,s=[],i=0;i<n;++i){if((r=e.charCodeAt(i))>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(i+1===n){(t-=3)>-1&&s.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&s.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function pn(e){return function(e){var t,r,n,o,s,i;vr||br();var u=e.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");s="="===e[u-2]?2:"="===e[u-1]?1:0,i=new gr(3*u/4-s),n=s>0?u-4:u;var a=0;for(t=0,r=0;t<n;t+=4,r+=3)o=yr[e.charCodeAt(t)]<<18|yr[e.charCodeAt(t+1)]<<12|yr[e.charCodeAt(t+2)]<<6|yr[e.charCodeAt(t+3)],i[a++]=o>>16&255,i[a++]=o>>8&255,i[a++]=255&o;return 2===s?(o=yr[e.charCodeAt(t)]<<2|yr[e.charCodeAt(t+1)]>>4,i[a++]=255&o):1===s&&(o=yr[e.charCodeAt(t)]<<10|yr[e.charCodeAt(t+1)]<<4|yr[e.charCodeAt(t+2)]>>2,i[a++]=o>>8&255,i[a++]=255&o),i}(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(sn,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function cn(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function hn(e){return null!=e&&(!!e._isBuffer||fn(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&fn(e.slice(0,0))}(e))}function fn(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function ln(){throw new Error("setTimeout has not been defined")}function dn(){throw new Error("clearTimeout has not been defined")}var mn=ln,yn=dn;function gn(e){if(mn===setTimeout)return setTimeout(e,0);if((mn===ln||!mn)&&setTimeout)return mn=setTimeout,setTimeout(e,0);try{return mn(e,0)}catch(t){try{return mn.call(null,e,0)}catch(t){return mn.call(this,e,0)}}}"function"==typeof Yt.setTimeout&&(mn=setTimeout),"function"==typeof Yt.clearTimeout&&(yn=clearTimeout);var vn,bn=[],wn=!1,Rn=-1;function In(){wn&&vn&&(wn=!1,vn.length?bn=vn.concat(bn):Rn=-1,bn.length&&jn())}function jn(){if(!wn){var e=gn(In);wn=!0;for(var t=bn.length;t;){for(vn=bn,bn=[];++Rn<t;)vn&&vn[Rn].run();Rn=-1,t=bn.length}vn=null,wn=!1,function(e){if(yn===clearTimeout)return clearTimeout(e);if((yn===dn||!yn)&&clearTimeout)return yn=clearTimeout,clearTimeout(e);try{yn(e)}catch(t){try{return yn.call(null,e)}catch(t){return yn.call(this,e)}}}(e)}}function Cn(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];bn.push(new _n(e,t)),1!==bn.length||wn||gn(jn)}function _n(e,t){this.fun=e,this.array=t}_n.prototype.run=function(){this.fun.apply(null,this.array)};var Un,kn,En=Yt.performance||{},Sn=(En.now||En.mozNow||En.msNow||En.oNow||En.webkitNow,Bn(Yt.fetch)&&Bn(Yt.ReadableStream));function Pn(e){kn||(kn=new Yt.XMLHttpRequest).open("GET",Yt.location.host?"/":"https://example.com");try{return kn.responseType=e,kn.responseType===e}catch(e){return!1}}var An=void 0!==Yt.ArrayBuffer,Tn=An&&Bn(Yt.ArrayBuffer.prototype.slice),xn=An&&Pn("arraybuffer"),Ln=!Sn&&Tn&&Pn("ms-stream"),qn=!Sn&&An&&Pn("moz-chunked-arraybuffer"),Mn=Bn(kn.overrideMimeType),On=Bn(Yt.VBArray);function Bn(e){return"function"==typeof e}kn=null;var Dn="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e},Nn=/%[sdj%]/g;function Gn(e){if(!Qn(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(Yn(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,o=n.length,s=String(e).replace(Nn,(function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}})),i=n[r];r<o;i=n[++r])Zn(i)||!ro(i)?s+=" "+i:s+=" "+Yn(i);return s}function Fn(e,t){if(eo(Yt.process))return function(){return Fn(e,t).apply(this,arguments)};var r=!1;return function(){return r||(console.error(t),r=!0),e.apply(this,arguments)}}var zn,Hn={};function Yn(e,t){var r={seen:[],stylize:Wn};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),Xn(t)?r.showHidden=t:t&&uo(r,t),eo(r.showHidden)&&(r.showHidden=!1),eo(r.depth)&&(r.depth=2),eo(r.colors)&&(r.colors=!1),eo(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=Vn),Kn(r,e,r.depth)}function Vn(e,t){var r=Yn.styles[t];return r?"["+Yn.colors[r][0]+"m"+e+"["+Yn.colors[r][1]+"m":e}function Wn(e,t){return e}function Kn(e,t,r){if(e.customInspect&&t&&so(t.inspect)&&t.inspect!==Yn&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return Qn(n)||(n=Kn(e,n,r)),n}var o=function(e,t){if(eo(t))return e.stylize("undefined","undefined");if(Qn(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(n=t,"number"==typeof n)return e.stylize(""+t,"number");var n;if(Xn(t))return e.stylize(""+t,"boolean");if(Zn(t))return e.stylize("null","null")}(e,t);if(o)return o;var s=Object.keys(t),i=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(t)),oo(t)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return Jn(t);if(0===s.length){if(so(t)){var u=t.name?": "+t.name:"";return e.stylize("[Function"+u+"]","special")}if(to(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(no(t))return e.stylize(Date.prototype.toString.call(t),"date");if(oo(t))return Jn(t)}var a,p,c="",h=!1,f=["{","}"];(a=t,Array.isArray(a)&&(h=!0,f=["[","]"]),so(t))&&(c=" [Function"+(t.name?": "+t.name:"")+"]");return to(t)&&(c=" "+RegExp.prototype.toString.call(t)),no(t)&&(c=" "+Date.prototype.toUTCString.call(t)),oo(t)&&(c=" "+Jn(t)),0!==s.length||h&&0!=t.length?r<0?to(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),p=h?function(e,t,r,n,o){for(var s=[],i=0,u=t.length;i<u;++i)ao(t,String(i))?s.push($n(e,t,r,n,String(i),!0)):s.push("");return o.forEach((function(o){o.match(/^\d+$/)||s.push($n(e,t,r,n,o,!0))})),s}(e,t,r,i,s):s.map((function(n){return $n(e,t,r,i,n,h)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(p,c,f)):f[0]+c+f[1]}function Jn(e){return"["+Error.prototype.toString.call(e)+"]"}function $n(e,t,r,n,o,s){var i,u,a;if((a=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?u=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(u=e.stylize("[Setter]","special")),ao(n,o)||(i="["+o+"]"),u||(e.seen.indexOf(a.value)<0?(u=Zn(r)?Kn(e,a.value,null):Kn(e,a.value,r-1)).indexOf("\n")>-1&&(u=s?u.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+u.split("\n").map((function(e){return"   "+e})).join("\n")):u=e.stylize("[Circular]","special")),eo(i)){if(s&&o.match(/^\d+$/))return u;(i=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(i=i.substr(1,i.length-2),i=e.stylize(i,"name")):(i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),i=e.stylize(i,"string"))}return i+": "+u}function Xn(e){return"boolean"==typeof e}function Zn(e){return null===e}function Qn(e){return"string"==typeof e}function eo(e){return void 0===e}function to(e){return ro(e)&&"[object RegExp]"===io(e)}function ro(e){return"object"==typeof e&&null!==e}function no(e){return ro(e)&&"[object Date]"===io(e)}function oo(e){return ro(e)&&("[object Error]"===io(e)||e instanceof Error)}function so(e){return"function"==typeof e}function io(e){return Object.prototype.toString.call(e)}function uo(e,t){if(!t||!ro(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}function ao(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function po(){}function co(){co.init.call(this)}function ho(e){return void 0===e._maxListeners?co.defaultMaxListeners:e._maxListeners}function fo(e,t,r){if(t)e.call(r);else for(var n=e.length,o=Ro(e,n),s=0;s<n;++s)o[s].call(r)}function lo(e,t,r,n){if(t)e.call(r,n);else for(var o=e.length,s=Ro(e,o),i=0;i<o;++i)s[i].call(r,n)}function mo(e,t,r,n,o){if(t)e.call(r,n,o);else for(var s=e.length,i=Ro(e,s),u=0;u<s;++u)i[u].call(r,n,o)}function yo(e,t,r,n,o,s){if(t)e.call(r,n,o,s);else for(var i=e.length,u=Ro(e,i),a=0;a<i;++a)u[a].call(r,n,o,s)}function go(e,t,r,n){if(t)e.apply(r,n);else for(var o=e.length,s=Ro(e,o),i=0;i<o;++i)s[i].apply(r,n)}function vo(e,t,r,n){var o,s,i,u;if("function"!=typeof r)throw new TypeError('"listener" argument must be a function');if((s=e._events)?(s.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),s=e._events),i=s[t]):(s=e._events=new po,e._eventsCount=0),i){if("function"==typeof i?i=s[t]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),!i.warned&&(o=ho(e))&&o>0&&i.length>o){i.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=i.length,u=a,"function"==typeof console.warn?console.warn(u):console.log(u)}}else i=s[t]=r,++e._eventsCount;return e}function bo(e,t,r){var n=!1;function o(){e.removeListener(t,o),n||(n=!0,r.apply(e,arguments))}return o.listener=r,o}function wo(e){var t=this._events;if(t){var r=t[e];if("function"==typeof r)return 1;if(r)return r.length}return 0}function Ro(e,t){for(var r=new Array(t);t--;)r[t]=e[t];return r}function Io(){this.head=null,this.tail=null,this.length=0}Yn.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},Yn.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},po.prototype=Object.create(null),co.EventEmitter=co,co.usingDomains=!1,co.prototype.domain=void 0,co.prototype._events=void 0,co.prototype._maxListeners=void 0,co.defaultMaxListeners=10,co.init=function(){this.domain=null,co.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new po,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},co.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},co.prototype.getMaxListeners=function(){return ho(this)},co.prototype.emit=function(e){var t,r,n,o,s,i,u,a="error"===e;if(i=this._events)a=a&&null==i.error;else if(!a)return!1;if(u=this.domain,a){if(t=arguments[1],!u){if(t instanceof Error)throw t;var p=new Error('Uncaught, unspecified "error" event. ('+t+")");throw p.context=t,p}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=u,t.domainThrown=!1,u.emit("error",t),!1}if(!(r=i[e]))return!1;var c="function"==typeof r;switch(n=arguments.length){case 1:fo(r,c,this);break;case 2:lo(r,c,this,arguments[1]);break;case 3:mo(r,c,this,arguments[1],arguments[2]);break;case 4:yo(r,c,this,arguments[1],arguments[2],arguments[3]);break;default:for(o=new Array(n-1),s=1;s<n;s++)o[s-1]=arguments[s];go(r,c,this,o)}return!0},co.prototype.addListener=function(e,t){return vo(this,e,t,!1)},co.prototype.on=co.prototype.addListener,co.prototype.prependListener=function(e,t){return vo(this,e,t,!0)},co.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,bo(this,e,t)),this},co.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,bo(this,e,t)),this},co.prototype.removeListener=function(e,t){var r,n,o,s,i;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(n=this._events))return this;if(!(r=n[e]))return this;if(r===t||r.listener&&r.listener===t)0==--this._eventsCount?this._events=new po:(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,s=r.length;s-- >0;)if(r[s]===t||r[s].listener&&r[s].listener===t){i=r[s].listener,o=s;break}if(o<0)return this;if(1===r.length){if(r[0]=void 0,0==--this._eventsCount)return this._events=new po,this;delete n[e]}else!function(e,t){for(var r=t,n=r+1,o=e.length;n<o;r+=1,n+=1)e[r]=e[n];e.pop()}(r,o);n.removeListener&&this.emit("removeListener",e,i||t)}return this},co.prototype.removeAllListeners=function(e){var t,r;if(!(r=this._events))return this;if(!r.removeListener)return 0===arguments.length?(this._events=new po,this._eventsCount=0):r[e]&&(0==--this._eventsCount?this._events=new po:delete r[e]),this;if(0===arguments.length){for(var n,o=Object.keys(r),s=0;s<o.length;++s)"removeListener"!==(n=o[s])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=new po,this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},co.prototype.listeners=function(e){var t,r=this._events;return r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(t):[]},co.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):wo.call(e,t)},co.prototype.listenerCount=wo,co.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]},Io.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},Io.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},Io.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},Io.prototype.clear=function(){this.head=this.tail=null,this.length=0},Io.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r},Io.prototype.concat=function(e){if(0===this.length)return Er.alloc(0);if(1===this.length)return this.head.data;for(var t=Er.allocUnsafe(e>>>0),r=this.head,n=0;r;)r.data.copy(t,n),n+=r.data.length,r=r.next;return t};var jo=Er.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function Co(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),function(e){if(e&&!jo(e))throw new Error("Unknown encoding: "+e)}(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=Uo;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=ko;break;default:return void(this.write=_o)}this.charBuffer=new Er(6),this.charReceived=0,this.charLength=0}function _o(e){return e.toString(this.encoding)}function Uo(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function ko(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}Co.prototype.write=function(e){for(var t="";this.charLength;){var r=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return"";if(e=e.slice(r,e.length),!((o=(t=this.charBuffer.slice(0,this.charLength).toString(this.encoding)).charCodeAt(t.length-1))>=55296&&o<=56319)){if(this.charReceived=this.charLength=0,0===e.length)return t;break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e);var n=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,n),n-=this.charReceived);var o;n=(t+=e.toString(this.encoding,0,n)).length-1;if((o=t.charCodeAt(n))>=55296&&o<=56319){var s=this.surrogateSize;return this.charLength+=s,this.charReceived+=s,this.charBuffer.copy(this.charBuffer,s,0,s),e.copy(this.charBuffer,0,0,s),t.substring(0,n)}return t},Co.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var r=e[e.length-t];if(1==t&&r>>5==6){this.charLength=2;break}if(t<=2&&r>>4==14){this.charLength=3;break}if(t<=3&&r>>3==30){this.charLength=4;break}}this.charReceived=t},Co.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var r=this.charReceived,n=this.charBuffer,o=this.encoding;t+=n.slice(0,r).toString(o)}return t},Po.ReadableState=So;var Eo=function(e){if(eo(zn)&&(zn=""),e=e.toUpperCase(),!Hn[e])if(new RegExp("\\b"+e+"\\b","i").test(zn)){Hn[e]=function(){var t=Gn.apply(null,arguments);console.error("%s %d: %s",e,0,t)}}else Hn[e]=function(){};return Hn[e]}("stream");function So(e,t){e=e||{},this.objectMode=!!e.objectMode,t instanceof ns&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var r=e.highWaterMark,n=this.objectMode?16:16384;this.highWaterMark=r||0===r?r:n,this.highWaterMark=~~this.highWaterMark,this.buffer=new Io,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(this.decoder=new Co(e.encoding),this.encoding=e.encoding)}function Po(e){if(!(this instanceof Po))return new Po(e);this._readableState=new So(e,this),this.readable=!0,e&&"function"==typeof e.read&&(this._read=e.read),co.call(this)}function Ao(e,t,r,n,o){var s=function(e,t){var r=null;hn(t)||"string"==typeof t||null==t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk"));return r}(t,r);if(s)e.emit("error",s);else if(null===r)t.reading=!1,function(e,t){if(t.ended)return;if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,xo(e)}(e,t);else if(t.objectMode||r&&r.length>0)if(t.ended&&!o){var i=new Error("stream.push() after EOF");e.emit("error",i)}else if(t.endEmitted&&o){var u=new Error("stream.unshift() after end event");e.emit("error",u)}else{var a;!t.decoder||o||n||(r=t.decoder.write(r),a=!t.objectMode&&0===r.length),o||(t.reading=!1),a||(t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,o?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&xo(e))),function(e,t){t.readingMore||(t.readingMore=!0,Cn(qo,e,t))}(e,t)}else o||(t.reading=!1);return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(t)}Dn(Po,co),Po.prototype.push=function(e,t){var r=this._readableState;return r.objectMode||"string"!=typeof e||(t=t||r.defaultEncoding)!==r.encoding&&(e=Er.from(e,t),t=""),Ao(this,r,e,t,!1)},Po.prototype.unshift=function(e){return Ao(this,this._readableState,e,"",!0)},Po.prototype.isPaused=function(){return!1===this._readableState.flowing},Po.prototype.setEncoding=function(e){return this._readableState.decoder=new Co(e),this._readableState.encoding=e,this};function To(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=8388608?e=8388608:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function xo(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(Eo("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?Cn(Lo,e):Lo(e))}function Lo(e){Eo("emit readable"),e.emit("readable"),Bo(e)}function qo(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(Eo("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function Mo(e){Eo("readable nexttick read 0"),e.read(0)}function Oo(e,t){t.reading||(Eo("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),Bo(e),t.flowing&&!t.reading&&e.read(0)}function Bo(e){var t=e._readableState;for(Eo("flow",t.flowing);t.flowing&&null!==e.read(););}function Do(e,t){return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):r=function(e,t,r){var n;e<t.head.data.length?(n=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):n=e===t.head.data.length?t.shift():r?function(e,t){var r=t.head,n=1,o=r.data;e-=o.length;for(;r=r.next;){var s=r.data,i=e>s.length?s.length:e;if(i===s.length?o+=s:o+=s.slice(0,e),0===(e-=i)){i===s.length?(++n,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=s.slice(i));break}++n}return t.length-=n,o}(e,t):function(e,t){var r=Er.allocUnsafe(e),n=t.head,o=1;n.data.copy(r),e-=n.data.length;for(;n=n.next;){var s=n.data,i=e>s.length?s.length:e;if(s.copy(r,r.length-e,0,i),0===(e-=i)){i===s.length?(++o,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=s.slice(i));break}++o}return t.length-=o,r}(e,t);return n}(e,t.buffer,t.decoder),r);var r}function No(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,Cn(Go,t,e))}function Go(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function Fo(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function zo(){}function Ho(e,t,r){this.chunk=e,this.encoding=t,this.callback=r,this.next=null}function Yo(e,t){Object.defineProperty(this,"buffer",{get:Fn((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")}),e=e||{},this.objectMode=!!e.objectMode,t instanceof ns&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var r=e.highWaterMark,n=this.objectMode?16:16384;this.highWaterMark=r||0===r?r:n,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var o=!1===e.decodeStrings;this.decodeStrings=!o,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,n=r.sync,o=r.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)!function(e,t,r,n,o){--t.pendingcb,r?Cn(o,n):o(n);e._writableState.errorEmitted=!0,e.emit("error",n)}(e,r,n,t,o);else{var s=$o(r);s||r.corked||r.bufferProcessing||!r.bufferedRequest||Jo(e,r),n?Cn(Ko,e,r,s,o):Ko(e,r,s,o)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new Qo(this)}function Vo(e){if(!(this instanceof Vo||this instanceof ns))return new Vo(e);this._writableState=new Yo(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev)),co.call(this)}function Wo(e,t,r,n,o,s,i){t.writelen=n,t.writecb=i,t.writing=!0,t.sync=!0,r?e._writev(o,t.onwrite):e._write(o,s,t.onwrite),t.sync=!1}function Ko(e,t,r,n){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,n(),Zo(e,t)}function Jo(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,o=new Array(n),s=t.corkedRequestsFree;s.entry=r;for(var i=0;r;)o[i]=r,r=r.next,i+=1;Wo(e,t,!0,t.length,o,"",s.finish),t.pendingcb++,t.lastBufferedRequest=null,s.next?(t.corkedRequestsFree=s.next,s.next=null):t.corkedRequestsFree=new Qo(t)}else{for(;r;){var u=r.chunk,a=r.encoding,p=r.callback;if(Wo(e,t,!1,t.objectMode?1:u.length,u,a,p),r=r.next,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequestCount=0,t.bufferedRequest=r,t.bufferProcessing=!1}function $o(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function Xo(e,t){t.prefinished||(t.prefinished=!0,e.emit("prefinish"))}function Zo(e,t){var r=$o(t);return r&&(0===t.pendingcb?(Xo(e,t),t.finished=!0,e.emit("finish")):Xo(e,t)),r}function Qo(e){var t=this;this.next=null,this.entry=null,this.finish=function(r){var n=t.entry;for(t.entry=null;n;){var o=n.callback;e.pendingcb--,o(r),n=n.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}}Po.prototype.read=function(e){Eo("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return Eo("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?No(this):xo(this),null;if(0===(e=To(e,t))&&t.ended)return 0===t.length&&No(this),null;var n,o=t.needReadable;return Eo("need readable",o),(0===t.length||t.length-e<t.highWaterMark)&&Eo("length less than watermark",o=!0),t.ended||t.reading?Eo("reading or ended",o=!1):o&&(Eo("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=To(r,t))),null===(n=e>0?Do(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&No(this)),null!==n&&this.emit("data",n),n},Po.prototype._read=function(e){this.emit("error",new Error("not implemented"))},Po.prototype.pipe=function(e,t){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e)}n.pipesCount+=1,Eo("pipe count=%d opts=%j",n.pipesCount,t);var o=!t||!1!==t.end?i:p;function s(e){Eo("onunpipe"),e===r&&p()}function i(){Eo("onend"),e.end()}n.endEmitted?Cn(o):r.once("end",o),e.on("unpipe",s);var u=function(e){return function(){var t=e._readableState;Eo("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&e.listeners("data").length&&(t.flowing=!0,Bo(e))}}(r);e.on("drain",u);var a=!1;function p(){Eo("cleanup"),e.removeListener("close",l),e.removeListener("finish",d),e.removeListener("drain",u),e.removeListener("error",f),e.removeListener("unpipe",s),r.removeListener("end",i),r.removeListener("end",p),r.removeListener("data",h),a=!0,!n.awaitDrain||e._writableState&&!e._writableState.needDrain||u()}var c=!1;function h(t){Eo("ondata"),c=!1,!1!==e.write(t)||c||((1===n.pipesCount&&n.pipes===e||n.pipesCount>1&&-1!==Fo(n.pipes,e))&&!a&&(Eo("false write response, pause",r._readableState.awaitDrain),r._readableState.awaitDrain++,c=!0),r.pause())}function f(t){var r;Eo("onerror",t),m(),e.removeListener("error",f),0===(r="error",e.listeners(r).length)&&e.emit("error",t)}function l(){e.removeListener("finish",d),m()}function d(){Eo("onfinish"),e.removeListener("close",l),m()}function m(){Eo("unpipe"),r.unpipe(e)}return r.on("data",h),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",f),e.once("close",l),e.once("finish",d),e.emit("pipe",r),n.flowing||(Eo("pipe resume"),r.resume()),e},Po.prototype.unpipe=function(e){var t=this._readableState;if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this)),this;if(!e){var r=t.pipes,n=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var o=0;o<n;o++)r[o].emit("unpipe",this);return this}var s=Fo(t.pipes,e);return-1===s||(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this)),this},Po.prototype.on=function(e,t){var r=co.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&xo(this):Cn(Mo,this))}return r},Po.prototype.addListener=Po.prototype.on,Po.prototype.resume=function(){var e=this._readableState;return e.flowing||(Eo("resume"),e.flowing=!0,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,Cn(Oo,e,t))}(this,e)),this},Po.prototype.pause=function(){return Eo("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(Eo("pause"),this._readableState.flowing=!1,this.emit("pause")),this},Po.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;for(var o in e.on("end",(function(){if(Eo("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)})),e.on("data",(function(o){(Eo("wrapped data"),t.decoder&&(o=t.decoder.write(o)),t.objectMode&&null==o)||(t.objectMode||o&&o.length)&&(n.push(o)||(r=!0,e.pause()))})),e)void 0===this[o]&&"function"==typeof e[o]&&(this[o]=function(t){return function(){return e[t].apply(e,arguments)}}(o));return function(e,t){for(var r=0,n=e.length;r<n;r++)t(e[r],r)}(["error","close","destroy","pause","resume"],(function(t){e.on(t,n.emit.bind(n,t))})),n._read=function(t){Eo("wrapped _read",t),r&&(r=!1,e.resume())},n},Po._fromList=Do,Vo.WritableState=Yo,Dn(Vo,co),Yo.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},Vo.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},Vo.prototype.write=function(e,t,r){var n=this._writableState,o=!1;return"function"==typeof t&&(r=t,t=null),Er.isBuffer(e)?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=zo),n.ended?function(e,t){var r=new Error("write after end");e.emit("error",r),Cn(t,r)}(this,r):function(e,t,r,n){var o=!0,s=!1;return null===r?s=new TypeError("May not write null values to stream"):Er.isBuffer(r)||"string"==typeof r||void 0===r||t.objectMode||(s=new TypeError("Invalid non-string/buffer chunk")),s&&(e.emit("error",s),Cn(n,s),o=!1),o}(this,n,e,r)&&(n.pendingcb++,o=function(e,t,r,n,o){r=function(e,t,r){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=Er.from(t,r));return t}(t,r,n),Er.isBuffer(r)&&(n="buffer");var s=t.objectMode?1:r.length;t.length+=s;var i=t.length<t.highWaterMark;i||(t.needDrain=!0);if(t.writing||t.corked){var u=t.lastBufferedRequest;t.lastBufferedRequest=new Ho(r,n,o),u?u.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else Wo(e,t,!1,s,r,n,o);return i}(this,n,e,t,r)),o},Vo.prototype.cork=function(){this._writableState.corked++},Vo.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||Jo(this,e))},Vo.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Vo.prototype._write=function(e,t,r){r(new Error("not implemented"))},Vo.prototype._writev=null,Vo.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!=e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||function(e,t,r){t.ending=!0,Zo(e,t),r&&(t.finished?Cn(r):e.once("finish",r));t.ended=!0,e.writable=!1}(this,n,r)},Dn(ns,Po);for(var es=Object.keys(Vo.prototype),ts=0;ts<es.length;ts++){var rs=es[ts];ns.prototype[rs]||(ns.prototype[rs]=Vo.prototype[rs])}function ns(e){if(!(this instanceof ns))return new ns(e);Po.call(this,e),Vo.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",os)}function os(){this.allowHalfOpen||this._writableState.ended||Cn(ss,this)}function ss(e){e.end()}function is(e){this.afterTransform=function(t,r){return function(e,t,r){var n=e._transformState;n.transforming=!1;var o=n.writecb;if(!o)return e.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!=r&&e.push(r);o(t);var s=e._readableState;s.reading=!1,(s.needReadable||s.length<s.highWaterMark)&&e._read(s.highWaterMark)}(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function us(e){if(!(this instanceof us))return new us(e);ns.call(this,e),this._transformState=new is(this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",(function(){"function"==typeof this._flush?this._flush((function(e){as(t,e)})):as(t)}))}function as(e,t){if(t)return e.emit("error",t);var r=e._writableState,n=e._transformState;if(r.length)throw new Error("Calling transform done when ws.length != 0");if(n.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}function ps(e){if(!(this instanceof ps))return new ps(e);us.call(this,e)}function cs(){co.call(this)}Dn(us,ns),us.prototype.push=function(e,t){return this._transformState.needTransform=!1,ns.prototype.push.call(this,e,t)},us.prototype._transform=function(e,t,r){throw new Error("Not implemented")},us.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var o=this._readableState;(n.needTransform||o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}},us.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},Dn(ps,us),ps.prototype._transform=function(e,t,r){r(null,e)},Dn(cs,co),cs.Readable=Po,cs.Writable=Vo,cs.Duplex=ns,cs.Transform=us,cs.PassThrough=ps,cs.Stream=cs,cs.prototype.pipe=function(e,t){var r=this;function n(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause()}function o(){r.readable&&r.resume&&r.resume()}r.on("data",n),e.on("drain",o),e._isStdio||t&&!1===t.end||(r.on("end",i),r.on("close",u));var s=!1;function i(){s||(s=!0,e.end())}function u(){s||(s=!0,"function"==typeof e.destroy&&e.destroy())}function a(e){if(p(),0===co.listenerCount(this,"error"))throw e}function p(){r.removeListener("data",n),e.removeListener("drain",o),r.removeListener("end",i),r.removeListener("close",u),r.removeListener("error",a),e.removeListener("error",a),r.removeListener("end",p),r.removeListener("close",p),e.removeListener("close",p)}return r.on("error",a),e.on("error",a),r.on("end",p),r.on("close",p),e.on("close",p),e.emit("pipe",r),e};var hs=3,fs=4;function ls(e,t,r){var n,o=this;if(Po.call(o),o._mode=r,o.headers={},o.rawHeaders=[],o.trailers={},o.rawTrailers=[],o.on("end",(function(){Cn((function(){o.emit("close")}))})),"fetch"===r){o._fetchResponse=t,o.url=t.url,o.statusCode=t.status,o.statusMessage=t.statusText;for(var s,i,u=t.headers[Symbol.iterator]();s=(i=u.next()).value,!i.done;)o.headers[s[0].toLowerCase()]=s[1],o.rawHeaders.push(s[0],s[1]);var a=t.body.getReader();(n=function(){a.read().then((function(e){o._destroyed||(e.done?o.push(null):(o.push(new Er(e.value)),n()))}))})()}else{if(o._xhr=e,o._pos=0,o.url=e.responseURL,o.statusCode=e.status,o.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach((function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===o.headers[r]&&(o.headers[r]=[]),o.headers[r].push(t[2])):void 0!==o.headers[r]?o.headers[r]+=", "+t[2]:o.headers[r]=t[2],o.rawHeaders.push(t[1],t[2])}})),o._charset="x-user-defined",!Mn){var p=o.rawHeaders["mime-type"];if(p){var c=p.match(/;\s*charset=([^;])(;|$)/);c&&(o._charset=c[1].toLowerCase())}o._charset||(o._charset="utf-8")}}}function ds(e){var t,r=this;Vo.call(r),r._opts=e,r._body=[],r._headers={},e.auth&&r.setHeader("Authorization","Basic "+new Er(e.auth).toString("base64")),Object.keys(e.headers).forEach((function(t){r.setHeader(t,e.headers[t])}));var n=!0;if("disable-fetch"===e.mode)n=!1,t=!0;else if("prefer-streaming"===e.mode)t=!1;else if("allow-wrong-content-type"===e.mode)t=!Mn;else{if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw new Error("Invalid value for opts.mode");t=!0}r._mode=function(e,t){return Sn&&t?"fetch":qn?"moz-chunked-arraybuffer":Ln?"ms-stream":xn&&e?"arraybuffer":On&&e?"text:vbarray":"text"}(t,n),r.on("finish",(function(){r._onFinish()}))}Dn(ls,Po),ls.prototype._read=function(){},ls.prototype._onXHRProgress=function(){var e=this,t=e._xhr,r=null;switch(e._mode){case"text:vbarray":if(t.readyState!==fs)break;try{r=new Yt.VBArray(t.responseBody).toArray()}catch(e){}if(null!==r){e.push(new Er(r));break}case"text":try{r=t.responseText}catch(t){e._mode="text:vbarray";break}if(r.length>e._pos){var n=r.substr(e._pos);if("x-user-defined"===e._charset){for(var o=new Er(n.length),s=0;s<n.length;s++)o[s]=255&n.charCodeAt(s);e.push(o)}else e.push(n,e._charset);e._pos=r.length}break;case"arraybuffer":if(t.readyState!==fs||!t.response)break;r=t.response,e.push(new Er(new Uint8Array(r)));break;case"moz-chunked-arraybuffer":if(r=t.response,t.readyState!==hs||!r)break;e.push(new Er(new Uint8Array(r)));break;case"ms-stream":if(r=t.response,t.readyState!==hs)break;var i=new Yt.MSStreamReader;i.onprogress=function(){i.result.byteLength>e._pos&&(e.push(new Er(new Uint8Array(i.result.slice(e._pos)))),e._pos=i.result.byteLength)},i.onload=function(){e.push(null)},i.readAsArrayBuffer(r)}e._xhr.readyState===fs&&"ms-stream"!==e._mode&&e.push(null)},Dn(ds,Vo);var ms=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];function ys(){}function gs(e){if(!e.headers.entries().length)return{};var t={};return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Ht(arguments[t]));return e}(e.headers.entries()).forEach((function(e){var r=Ht(e,2),n=r[0],o=r[1];t[n]=o})),t}function vs(e){switch(e.headers.get("content-type")||""){case"application/json":return e.json().then((function(e){return e||{}}));case"application/octet-stream":case"binary/octet-stream":case"application/gzip":return e.blob().then(Buffer.from);default:return e.text().then((function(e){return e||""}))}}ds.prototype.setHeader=function(e,t){var r=e.toLowerCase();-1===ms.indexOf(r)&&(this._headers[r]={name:e,value:t})},ds.prototype.getHeader=function(e){return this._headers[e.toLowerCase()].value},ds.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},ds.prototype._onFinish=function(){var e=this;if(!e._destroyed){var t,r=e._opts,n=e._headers;if("POST"!==r.method&&"PUT"!==r.method&&"PATCH"!==r.method||(t=function(){if(void 0!==Un)return Un;try{new Yt.Blob([new ArrayBuffer(1)]),Un=!0}catch(e){Un=!1}return Un}()?new Yt.Blob(e._body.map((function(e){return function(e){if(e instanceof Uint8Array){if(0===e.byteOffset&&e.byteLength===e.buffer.byteLength)return e.buffer;if("function"==typeof e.buffer.slice)return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(hn(e)){for(var t=new Uint8Array(e.length),r=e.length,n=0;n<r;n++)t[n]=e[n];return t.buffer}throw new Error("Argument must be a Buffer")}(e)})),{type:(n["content-type"]||{}).value||""}):Er.concat(e._body).toString()),"fetch"===e._mode){var o=Object.keys(n).map((function(e){return[n[e].name,n[e].value]}));Yt.fetch(e._opts.url,{method:e._opts.method,headers:o,body:t,mode:"cors",credentials:r.withCredentials?"include":"same-origin"}).then((function(t){e._fetchResponse=t,e._connect()}),(function(t){e.emit("error",t)}))}else{var s=e._xhr=new Yt.XMLHttpRequest;try{s.open(e._opts.method,e._opts.url,!0)}catch(t){return void Cn((function(){e.emit("error",t)}))}"responseType"in s&&(s.responseType=e._mode.split(":")[0]),"withCredentials"in s&&(s.withCredentials=!!r.withCredentials),"text"===e._mode&&"overrideMimeType"in s&&s.overrideMimeType("text/plain; charset=x-user-defined"),Object.keys(n).forEach((function(e){s.setRequestHeader(n[e].name,n[e].value)})),e._response=null,s.onreadystatechange=function(){switch(s.readyState){case hs:case fs:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(s.onprogress=function(){e._onXHRProgress()}),s.onerror=function(){e._destroyed||e.emit("error",new Error("XHR error"))};try{s.send(t)}catch(t){return void Cn((function(){e.emit("error",t)}))}}}},ds.prototype._onXHRProgress=function(){(function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}})(this._xhr)&&!this._destroyed&&(this._response||this._connect(),this._response._onXHRProgress())},ds.prototype._connect=function(){this._destroyed||(this._response=new ls(this._xhr,this._fetchResponse,this._mode),this.emit("response",this._response))},ds.prototype._write=function(e,t,r){this._body.push(e),r()},ds.prototype.abort=ds.prototype.destroy=function(){this._destroyed=!0,this._response&&(this._response._destroyed=!0),this._xhr&&this._xhr.abort()},ds.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),Vo.prototype.end.call(this,e,t,r)},ds.prototype.flushHeaders=function(){},ds.prototype.setTimeout=function(){},ds.prototype.setNoDelay=function(){},ds.prototype.setSocketKeepAlive=function(){},ys.defaultMaxSockets=4;var bs,ws,Rs,Is=function(e,t){void 0===t&&(t={});var r={};return Object.entries(e).forEach((function(e){var n=v(e,2),o=n[0],s=n[1];r[o]=w(s,t)})),r}(Nt,{requester:(bs=function(e,t){void 0===t&&(t={});var r=function(e,t){var r,n,o=void 0===t?{}:t,s=o.body,u=o.query,a=o.sudo,p=o.method,c=void 0===p?"get":p,h=e.headers;return a&&(h.sudo=a),"object"==typeof s&&"FormData"!==s.constructor.name?(r=JSON.stringify(i.decamelizeKeys(s)),h["content-type"]="application/json"):r=s,{headers:h,timeout:e.requestTimeout,method:c,searchParams:(n=u,l.stringify(i.decamelizeKeys(n||{}),{arrayFormat:"bracket"})),prefixUrl:e.url,body:r}}(e,t);return e.url.includes("https")&&(r.agent=new ys({rejectUnauthorized:e.rejectUnauthorized})),Gt(Gt({},r),{headers:new Headers(e.headers)})},ws=function(e,t){return Ft(this,void 0,void 0,(function(){var r,n,o,s,i,u,a,p,c;return zt(this,(function(h){switch(h.label){case 0:r=!0,n=10,s=0,h.label=1;case 1:if(!(s<n))return[3,10];h.label=2;case 2:return h.trys.push([2,4,,9]),"stream"===t.method?[2,dr(e,t)]:[4,dr(e,t)];case 3:return o=h.sent(),[3,10];case 4:return i=h.sent(),u=.1*Math.pow(2,s),i.response?r&&429===i.response.status?[4,R(u)]:[3,6]:[3,8];case 5:return h.sent(),[3,9];case 6:return[4,i.response.json()];case 7:a=h.sent(),i.description=a.error||a.message,h.label=8;case 8:throw i;case 9:return s+=1,[3,1];case 10:return p=o.status,c=gs(o),[4,vs(o)];case 11:return[2,{body:h.sent(),headers:c,status:p}]}}))}))},Rs={},["get","post","put","delete","stream"].forEach((function(e){Rs[e]=function(t,r,n){var o=bs(t,m(m({},n),{method:e}));return ws(r,o)}})),Rs)}),js=Is.Groups,Cs=Is.GroupAccessRequests,_s=Is.GroupBadges,Us=Is.GroupCustomAttributes,ks=Is.GroupIssueBoards,Es=Is.GroupMembers,Ss=Is.GroupMilestones,Ps=Is.GroupProjects,As=Is.GroupVariables,Ts=Is.GroupLabels,xs=Is.Epics,Ls=Is.EpicIssues,qs=Is.EpicNotes,Ms=Is.EpicDiscussions,Os=Is.Users,Bs=Is.UserCustomAttributes,Ds=Is.UserEmails,Ns=Is.UserImpersonationTokens,Gs=Is.UserKeys,Fs=Is.UserGPGKeys,zs=Is.Branches,Hs=Is.Commits,Ys=Is.CommitDiscussions,Vs=Is.ContainerRegistry,Ws=Is.Deployments,Ks=Is.DeployKeys,Js=Is.Environments,$s=Is.Issues,Xs=Is.IssuesStatistics,Zs=Is.IssueNotes,Qs=Is.IssueDiscussions,ei=Is.IssueAwardEmojis,ti=Is.Jobs,ri=Is.Labels,ni=Is.MergeRequests,oi=Is.MergeRequestAwardEmojis,si=Is.MergeRequestDiscussions,ii=Is.MergeRequestNotes,ui=Is.Packages,ai=Is.Pipelines,pi=Is.PipelineSchedules,ci=Is.PipelineScheduleVariables,hi=Is.Projects,fi=Is.ProjectAccessRequests,li=Is.ProjectBadges,di=Is.ProjectCustomAttributes,mi=Is.ProjectImportExport,yi=Is.ProjectIssueBoards,gi=Is.ProjectHooks,vi=Is.ProjectMembers,bi=Is.ProjectMilestones,wi=Is.ProjectSnippets,Ri=Is.ProjectSnippetNotes,Ii=Is.ProjectSnippetDiscussions,ji=Is.ProjectSnippetAwardEmojis,Ci=Is.ProtectedBranches,_i=Is.ProtectedTags,Ui=Is.ProjectVariables,ki=Is.PushRules,Ei=Is.Releases,Si=Is.ReleaseLinks,Pi=Is.Repositories,Ai=Is.RepositoryFiles,Ti=Is.Runners,xi=Is.Services,Li=Is.Tags,qi=Is.Todos,Mi=Is.Triggers,Oi=Is.VulnerabilityFindings,Bi=Is.ApplicationSettings,Di=Is.BroadcastMessages,Ni=Is.Events,Gi=Is.FeatureFlags,Fi=Is.GeoNodes,zi=Is.GitignoreTemplates,Hi=Is.GitLabCIYMLTemplates,Yi=Is.Keys,Vi=Is.License,Wi=Is.LicenceTemplates,Ki=Is.Lint,Ji=Is.Namespaces,$i=Is.NotificationSettings,Xi=Is.Markdown,Zi=Is.PagesDomains,Qi=Is.Search,eu=Is.SidekiqMetrics,tu=Is.Snippets,ru=Is.SystemHooks,nu=Is.Version,ou=Is.Wikis,su=Is.GroupsBundle,iu=Is.UsersBundle,uu=Is.ProjectsBundle,au=Is.Gitlab;e.ApplicationSettings=Bi,e.Branches=zs,e.BroadcastMessages=Di,e.CommitDiscussions=Ys,e.Commits=Hs,e.ContainerRegistry=Vs,e.DeployKeys=Ks,e.Deployments=Ws,e.Environments=Js,e.EpicDiscussions=Ms,e.EpicIssues=Ls,e.EpicNotes=qs,e.Epics=xs,e.Events=Ni,e.FeatureFlags=Gi,e.GeoNodes=Fi,e.GitLabCIYMLTemplates=Hi,e.GitignoreTemplates=zi,e.Gitlab=au,e.GroupAccessRequests=Cs,e.GroupBadges=_s,e.GroupCustomAttributes=Us,e.GroupIssueBoards=ks,e.GroupLabels=Ts,e.GroupMembers=Es,e.GroupMilestones=Ss,e.GroupProjects=Ps,e.GroupVariables=As,e.Groups=js,e.GroupsBundle=su,e.IssueAwardEmojis=ei,e.IssueDiscussions=Qs,e.IssueNotes=Zs,e.Issues=$s,e.IssuesStatistics=Xs,e.Jobs=ti,e.Keys=Yi,e.Labels=ri,e.LicenceTemplates=Wi,e.License=Vi,e.Lint=Ki,e.Markdown=Xi,e.MergeRequestAwardEmojis=oi,e.MergeRequestDiscussions=si,e.MergeRequestNotes=ii,e.MergeRequests=ni,e.Namespaces=Ji,e.NotificationSettings=$i,e.Packages=ui,e.PagesDomains=Zi,e.PipelineScheduleVariables=ci,e.PipelineSchedules=pi,e.Pipelines=ai,e.ProjectAccessRequests=fi,e.ProjectBadges=li,e.ProjectCustomAttributes=di,e.ProjectHooks=gi,e.ProjectImportExport=mi,e.ProjectIssueBoards=yi,e.ProjectMembers=vi,e.ProjectMilestones=bi,e.ProjectSnippetAwardEmojis=ji,e.ProjectSnippetDiscussions=Ii,e.ProjectSnippetNotes=Ri,e.ProjectSnippets=wi,e.ProjectVariables=Ui,e.Projects=hi,e.ProjectsBundle=uu,e.ProtectedBranches=Ci,e.ProtectedTags=_i,e.PushRules=ki,e.ReleaseLinks=Si,e.Releases=Ei,e.Repositories=Pi,e.RepositoryFiles=Ai,e.Runners=Ti,e.Search=Qi,e.Services=xi,e.SidekiqMetrics=eu,e.Snippets=tu,e.SystemHooks=ru,e.Tags=Li,e.Todos=qi,e.Triggers=Mi,e.UserCustomAttributes=Bs,e.UserEmails=Ds,e.UserGPGKeys=Fs,e.UserImpersonationTokens=Ns,e.UserKeys=Gs,e.Users=Os,e.UsersBundle=iu,e.Version=nu,e.VulnerabilityFindings=Oi,e.Wikis=ou,Object.defineProperty(e,"__esModule",{value:!0})}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.12';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/Credentials.js":
/*!***************************************!*\
  !*** ./src/components/Credentials.js ***!
  \***************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _service_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/credentials */ "./src/service/credentials.js");



const Credentials = vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('app-credentials', {
  props: {
    host: String,
    token: String,
  },

  data() {
    return {
      gitlabHost: this.host || '',
      gitlabToken: this.token || '',
      loading: false,
      errors: [],
    };
  },

  render(h) {
    return h('form', {
      on: {
        submit: this.onFormSubmit,
      },
    }, [
      h('div', { class: 'form-group', }, [
        h('label', { attrs: { for: 'gitlab-host' } }, 'GitLab URL'),
        h('input', {
          attrs: {
            id: 'gitlab-host',
            type: 'text',
            value: this.gitlabHost,
            placeholder: 'https://...',
          },
          class: 'form-control',
          on: {
            input: event => this.gitlabHost = event.target.value,
          },
        }),
      ]),
      h('div', { class: 'form-group' }, [
        h('label', { attrs: { for: 'gitlab-token' } }, 'GitLab Access Token'),
        h('input', {
          attrs: {
            id: 'gitlab-token',
            type: 'text',
            value: this.gitlabToken,
          },
          class: 'form-control',
          on: {
            input: event => this.gitlabToken = event.target.value,
          },
        }),
      ]),
      h('button', {
        class: 'btn btn-primary',
        attrs: {
          type: 'submit',
          disabled: !(this.gitlabHost || '').trim() || !(this.gitlabToken || '').trim(),
        },
      }, [
        'Submit ',
        !this.loading ? [] : h('div', {
          class: 'spinner-border spinner-border-sm text-light',
          style: 'vertical-align: middle',
        }),
      ]),
      this.errors.map(errorMessage =>
        h('div', { class: 'alert alert-danger mt-3' }, errorMessage),
      ),
      h('div', { class: 'mt-5' }, [
        h('h4', {}, 'How to Create an Access Token'),
        h('p', {}, [
          'In GitLab, go to ', h('strong', {}, 'Settings > Access Tokens'), ', choose a name and an expiration date, ',
          'check the ', h('strong', {}, 'read_user'), ' and ', h('strong', {}, 'read_api'), ' permissions, and click ',
          h('span', { class: 'badge badge-success' }, 'Create personal access token'),
        ]),
      ]),
    ]);
  },

  methods: {
    async onFormSubmit(event) {
      event.preventDefault();
      this.errors = [];

      const credentials = {
        host: this.gitlabHost.trim(),
        token: this.gitlabToken.trim(),
      };

      this.loading = true;

      const result = await Object(_service_credentials__WEBPACK_IMPORTED_MODULE_1__["validateCredentials"])(credentials.host, credentials.token)
        .finally(() => this.loading = false);

      if (result.ok) {
        this.$emit('submit', credentials);
        return;
      }

      if (result.code === 'INVALID_HOST') {
        this.errors.push('URL is not valid or does not allow CORS');
      }

      if (result.code === 'INVALID_TOKEN') {
        this.errors.push('Invalid access token');
      }
    },
  },
});


/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Credentials */ "./src/components/Credentials.js");
/* harmony import */ var _service_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/credentials */ "./src/service/credentials.js");
/* harmony import */ var _MergeRequestList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MergeRequestList */ "./src/components/MergeRequestList.js");
/* harmony import */ var _gitbeaker_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gitbeaker/browser */ "./node_modules/@gitbeaker/browser/dist/index.js");
/* harmony import */ var _gitbeaker_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gitbeaker_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_merge_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/merge-requests */ "./src/service/merge-requests.js");








const Main = vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('app-main', {
  data() {
    return {
      loading: false,
      credentials: Object(_service_credentials__WEBPACK_IMPORTED_MODULE_2__["getCredentials"])() || { host: '', token: '' },
      mergeRequests: null,
    };
  },

  async mounted() {
    await this.validateCredentials();
  },

  methods: {
    async updateCredentials(credentials) {
      Object(_service_credentials__WEBPACK_IMPORTED_MODULE_2__["saveCredentials"])(credentials);
      this.credentials = credentials;
      await this.validateCredentials();
    },

    clearCredentials() {
      Object(_service_credentials__WEBPACK_IMPORTED_MODULE_2__["clearCredentials"])();
      this.credentials = { host: '', token: ''};
    },

    async validateCredentials() {
      const { host, token } = this.credentials;

      if (!host || !token) {
        return;
      }

      this.loading = true;
      const result = await Object(_service_credentials__WEBPACK_IMPORTED_MODULE_2__["validateCredentials"])(host, token)
        .finally(() => this.loading = false);

      if (!result.ok) {
        this.credentials = { host: '', token: '' };
        return;
      }

      await this.getMergeRequests();
    },

    async getMergeRequests() {
      this.loading = true;
      const gitlab = new _gitbeaker_browser__WEBPACK_IMPORTED_MODULE_4__["Gitlab"](this.credentials);
      this.mergeRequests = await Object(_service_merge_requests__WEBPACK_IMPORTED_MODULE_5__["getMergeRequests"])(gitlab)
        .finally(() => this.loading = false);
    }
  },

  render(h) {
    return h('main', {
      class: 'container main--container',
      attrs: { id: 'app' },
    }, [
      h('div', { class: 'row' }, [
        h('div', { class: 'col' }, [
          (this.loading) ? [
            h('div', { class: 'd-flex justify-content-center' }, [
              h('div', { class: 'spinner-border text-primary' }),
            ]),
          ] : (!this.credentials.host || !this.credentials.token) ? [
            h(_Credentials__WEBPACK_IMPORTED_MODULE_1__["Credentials"], {
              props: {
                host: this.credentials.host,
                token: this.credentials.token,
              },
              on: {
                submit: this.updateCredentials,
              },
            }),
          ] : (this.mergeRequests) ? [
            h(_MergeRequestList__WEBPACK_IMPORTED_MODULE_3__["MergeRequestList"], {
              props: {
                mergeRequests: this.mergeRequests,
              },
              on: {
                'clear-credentials': this.clearCredentials,
              },
            }),
          ] : [
            h('div', {}, 'Loading...'),
          ],
        ]),
      ]),
    ]);
  },
});


/***/ }),

/***/ "./src/components/MergeRequestList.js":
/*!********************************************!*\
  !*** ./src/components/MergeRequestList.js ***!
  \********************************************/
/*! exports provided: MergeRequestList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeRequestList", function() { return MergeRequestList; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_1__);



function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength - 1) + '…';
  }
}

function padZeros(value, amount) {
  return String(value).padStart(amount, '0');
}

function formatDate(rawDate, formatString) {
  const date = new Date(rawDate);

  const mappings = {
    YYYY: () => padZeros(date.getFullYear(), 4),
    MM: () => padZeros(date.getMonth() + 1, 2),
    DD: () => padZeros(date.getDate(), 2),
    HH: () => padZeros(date.getHours(), 2),
    mm: () => padZeros(date.getMinutes(), 2),
    ss: () => padZeros(date.getSeconds(), 2),
  };

  return formatString.replace(/YYYY|MM|DD|HH|mm|ss/g, match => {
    return mappings[match]();
  });
}

function lastUpdateInterval(updateAt) {
  return ms__WEBPACK_IMPORTED_MODULE_1___default()(Date.now() - new Date(updateAt).getTime(), { long: true });
}

const MergeRequestList = vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('app', {
  props: {
    mergeRequests: Array,
  },

  data() {
    return {
      showOnlyIncludesMe: true,
    };
  },

  computed: {
    filteredMergeRequests() {
      if (!this.showOnlyIncludesMe) {
        return this.mergeRequests;
      }

      return this.mergeRequests.filter(mr => mr.includesMe);
    },

    noMergeRequestsMessage() {
      const message = 'There are no merge requests to display';

      if (this.filteredMergeRequests.length !== this.mergeRequests.length) {
        return `${message} (${this.mergeRequests.length} hidden)`;
      }

      return message;
    }
  },

  render(h) {
    return h('div', {}, [
      h('div', { class: 'form-group mergeRequestToolbar' }, [
        h('button', {
          class: 'btn btn-outline-primary',
          attrs: { type: 'button' },
          on: { click: () => this.$emit('clear-credentials') },
        }, 'Reset Credentials'),
        h('div', { class: 'form-check' }, [
          h('input', {
            class: 'form-check-input',
            attrs: {
              id: 'only-includes-me',
              type: 'checkbox',
              checked: this.showOnlyIncludesMe ? 'checked' : undefined,
            },
            on: {
              change: event => {
                this.showOnlyIncludesMe = Boolean(event.target.checked)
              },
            },
          }),
          h('label', {
            class: 'form-check-label',
            attrs: {
              for: 'only-includes-me',
            },
          }, 'Only show merge requests that I participate in'),
        ]),
      ]),

      (this.filteredMergeRequests.length === 0) ? [
        h('h5', { class: 'text-center' }, this.noMergeRequestsMessage),
      ] : [],

      this.filteredMergeRequests.map(mergeRequest => {
        // mergeRequest.labels = ['feature', 'deploy', 'ready for review'];

        const projectName = mergeRequest.references.full.split('!')[0];
        const projectUrl = mergeRequest.web_url.split('/-/')[0];

        const sourceBranch = truncateText(mergeRequest.source_branch, 60);
        const targetBranch = truncateText(mergeRequest.target_branch, 60);

        const participants = mergeRequest.participants.filter(
          participant => mergeRequest.author.username !== participant.username,
        );

        return h('div', { class: 'mergeRequest--item' }, [
          h('img', {
            class: 'mergeRequest--authorImage',
            attrs: {
              src: mergeRequest.author.avatar_url,
              width: 48,
              height: 48,
              title: `${mergeRequest.author.name} (${mergeRequest.author.username})`,
            },
          }),
          h('div', { class: 'mergeRequest--body' }, [
            h('p', { class: 'mergeRequest--p' }, [
              h('a', {
                class: 'mergeRequest--title',
                attrs: {
                  href: mergeRequest.web_url,
                  target: '_blank',
                },
              }, mergeRequest.title),
            ]),
            h('p', { class: 'mergeRequest--p' }, [
              h('a', {
                class: 'mergeRequest--project',
                attrs: {
                  href: projectUrl,
                  target: '_blank',
                },
              }, projectName),
              ` · updated ${lastUpdateInterval(mergeRequest.updated_at)} ago `,
              mergeRequest.labels.map(label => h('div', { class: `badge badge-primary` }, label)),
            ]),
            h('p', { class: 'mergeRequest--p' }, [
              h('span', { class: 'mergeRequest--branches' }, `${sourceBranch} 🡪 ${targetBranch} `),
            ]),
            h('div', { class: 'mergeRequest--participants', }, [
              h('span', {
                class: 'mergeRequest--comments',
              }, [
                `${mergeRequest.user_notes_count} `,
                h('img', {
                  attrs: {
                    src: 'assets/comment.png',
                    width: 16,
                    height: 16,
                  },
                }),
              ]),
              participants.map(participant => h('img', {
                class: 'mergeRequest--participantImage',
                attrs: {
                  src: participant.avatar_url,
                  width: 24,
                  height: 24,
                  title: `${participant.name} (${participant.username})`,
                },
              })),
            ])
          ]),
        ]);
      }),
    ]);
  },
});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.js");




new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  render(h) {
    return h(_components_Main__WEBPACK_IMPORTED_MODULE_1__["Main"]);
  },
});


/***/ }),

/***/ "./src/service/credentials.js":
/*!************************************!*\
  !*** ./src/service/credentials.js ***!
  \************************************/
/*! exports provided: validateCredentials, getCredentials, saveCredentials, clearCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCredentials", function() { return validateCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCredentials", function() { return getCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCredentials", function() { return saveCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCredentials", function() { return clearCredentials; });
/* harmony import */ var _gitbeaker_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gitbeaker/browser */ "./node_modules/@gitbeaker/browser/dist/index.js");
/* harmony import */ var _gitbeaker_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gitbeaker_browser__WEBPACK_IMPORTED_MODULE_0__);


async function validateCredentials(host, token) {
  const api = new _gitbeaker_browser__WEBPACK_IMPORTED_MODULE_0__["Gitlab"]({ host, token });

  try {
    await api.Users.current();
    return { ok: true };
  } catch (error) {
    if (error.name === 'TypeError' && error.message.startsWith('NetworkError')) {
      return { ok: false, code: 'INVALID_HOST', error };
    }

    if (error.name === 'HTTPError' && error.message === 'Unauthorized') {
      return { ok: false, code: 'INVALID_TOKEN', error };
    }

    throw error;
  }
}

function tryParseJsonBase64(base64Json) {
  try {
    return JSON.parse(atob(base64Json));
  } catch (error) {
    return null;
  }
}

function stringifyJsonBase64(data) {
  return btoa(JSON.stringify(data));
}

function getCredentials() {
  const query = new URLSearchParams(window.location.search);

  const credentialsRaw = query.get('config') || localStorage.getItem('config');

  if (!credentialsRaw) {
    return null;
  }

  const credentials = tryParseJsonBase64(credentialsRaw);

  if (!credentials || !credentials.host || !credentials.token) {
    return null;
  }

  return {
    host: credentials.host,
    token: credentials.token,
  };
}

function saveCredentials(credentials) {
  const credentialsRaw = stringifyJsonBase64({
    host: credentials.host,
    token: credentials.token,
  });

  const query = new URLSearchParams(window.location.search);
  query.set('config', credentialsRaw);
  localStorage.setItem('config', credentialsRaw);
  // window.location.search = query.toString();
  // throw new Error('stop the world');
}

function clearCredentials() {
  localStorage.removeItem('config');
  // window.location.search = '';
  // throw new Error('stop the world');
}


/***/ }),

/***/ "./src/service/merge-requests.js":
/*!***************************************!*\
  !*** ./src/service/merge-requests.js ***!
  \***************************************/
/*! exports provided: getMergeRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMergeRequests", function() { return getMergeRequests; });


async function getMergeRequests(gitlab) {
  const self = await gitlab.Users.current();

  const mergeRequestsSimple = await gitlab.MergeRequests.all({
    state: 'opened',
    scope: 'all',
    order_by: 'updated_at',
    sort: 'desc',
  });

  const mergeRequests = await Promise.all(mergeRequestsSimple.map(async mr => {
    const participants = await gitlab.MergeRequests.participants(
      mr.project_id, mr.iid,
    );

    const includesMe = [mr.author, ...participants]
      .map(person => person.username)
      .includes(self.username);

    return {
      ...mr,
      includesMe,
      participants,
    };
  }));

  return mergeRequests;
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map