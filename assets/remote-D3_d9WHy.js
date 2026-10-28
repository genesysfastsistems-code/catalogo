import{T as Dc,A as Cr}from"./config-ClWKWZ3i.js";import{C as Af}from"./index-8VkDqS4X.js";const Rf=()=>{};var Nc={};/**
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
 */const pl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],u=n[t++],l=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=o>>2,g=(o&3)<<4|u>>4;let v=(u&15)<<2|d>>6,S=d&63;l||(S=64,a||(v=64)),r.push(t[p],t[g],t[v],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||g==null)throw new Sf;const v=o<<2|u>>4;if(r.push(v),d!==64){const S=u<<4&240|d>>2;if(r.push(S),g!==64){const b=d<<6&192|g;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cf=function(n){const e=pl(n);return ml.encodeByteArray(e,!0)},Cs=function(n){return Cf(n).replace(/\./g,"")},gl=function(n){try{return ml.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kf=()=>bf().__FIREBASE_DEFAULTS__,Vf=()=>{if(typeof process>"u"||typeof Nc>"u")return;const n=Nc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Df=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gl(n[1]);return e&&JSON.parse(e)},Ks=()=>{try{return Rf()||kf()||Vf()||Df()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_l=n=>{var e,t;return(t=(e=Ks())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nf=n=>{const e=_l(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yl=()=>{var n;return(n=Ks())===null||n===void 0?void 0:n.config},vl=n=>{var e;return(e=Ks())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Dn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function El(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Lf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Cs(JSON.stringify(t)),Cs(JSON.stringify(a)),""].join(".")}const hr={};function Mf(){const n={prod:[],emulator:[]};for(const e of Object.keys(hr))hr[e]?n.emulator.push(e):n.prod.push(e);return n}function xf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Oc=!1;function Tl(n,e){if(typeof window>"u"||typeof document>"u"||!Dn(window.location.host)||hr[n]===e||hr[n]||Oc)return;hr[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",o=Mf().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Oc=!0,a()},v}function p(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=xf(r),S=t("text"),b=document.getElementById(S)||document.createElement("span"),L=t("learnmore"),V=document.getElementById(L)||document.createElement("a"),z=t("preprendIcon"),q=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const H=v.element;u(H),p(V,L);const te=d();l(q,z),H.append(q,b,V,te),document.body.appendChild(H)}o?(b.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Uf(){var n;const e=(n=Ks())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $f(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zf(){return!Uf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hf(){try{return typeof indexedDB=="object"}catch{return!1}}function Wf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gf="FirebaseError";class pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gf,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Kf(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new pt(s,u,r)}}function Kf(n,e){return n.replace(Qf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qf=/\{\$([^}]+)}/g;function Jf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Lc(o)&&Lc(a)){if(!Xt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Lc(n){return n!==null&&typeof n=="object"}/**
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
 */function kr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function or(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Yf(n,e){const t=new Xf(n,e);return t.subscribe.bind(t)}class Xf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Bi),s.error===void 0&&(s.error=Bi),s.complete===void 0&&(s.complete=Bi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bi(){}/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class Zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class ep{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Of;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(np(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tp(n){return n===Gt?void 0:n}function np(n){return n.instantiationMode==="EAGER"}/**
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
 */class rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ep(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const sp={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},ip=W.INFO,op={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},ap=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=op[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ko{constructor(e){this.name=e,this._logLevel=ip,this._logHandler=ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const cp=(n,e)=>e.some(t=>n instanceof t);let Mc,xc;function up(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lp(){return xc||(xc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,no=new WeakMap,wl=new WeakMap,ji=new WeakMap,Vo=new WeakMap;function hp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Ct(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Il.set(t,n)}).catch(()=>{}),Vo.set(e,n),e}function dp(n){if(no.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});no.set(n,e)}let ro={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return no.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fp(n){ro=n(ro)}function pp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qi(this),e,...t);return wl.set(r,e.sort?e.sort():[e]),Ct(r)}:lp().includes(n)?function(...e){return n.apply(qi(this),e),Ct(Il.get(this))}:function(...e){return Ct(n.apply(qi(this),e))}}function mp(n){return typeof n=="function"?pp(n):(n instanceof IDBTransaction&&dp(n),cp(n,up())?new Proxy(n,ro):n)}function Ct(n){if(n instanceof IDBRequest)return hp(n);if(ji.has(n))return ji.get(n);const e=mp(n);return e!==n&&(ji.set(n,e),Vo.set(e,n)),e}const qi=n=>Vo.get(n);function gp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),u=Ct(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ct(a.result),l.oldVersion,l.newVersion,Ct(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const _p=["get","getKey","getAll","getAllKeys","count"],yp=["put","add","delete","clear"],$i=new Map;function Fc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_p.includes(t)))return;const o=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&l.done]))[0]};return $i.set(e,o),o}fp(n=>({...n,get:(e,t,r)=>Fc(e,t)||n.get(e,t,r),has:(e,t)=>!!Fc(e,t)||n.has(e,t)}));/**
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
 */class vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ep(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ep(n){const e=n.getComponent();return e?.type==="VERSION"}const so="@firebase/app",Uc="0.13.2";/**
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
 */const lt=new ko("@firebase/app"),Tp="@firebase/app-compat",Ip="@firebase/analytics-compat",wp="@firebase/analytics",Ap="@firebase/app-check-compat",Rp="@firebase/app-check",Pp="@firebase/auth",Sp="@firebase/auth-compat",Cp="@firebase/database",bp="@firebase/data-connect",kp="@firebase/database-compat",Vp="@firebase/functions",Dp="@firebase/functions-compat",Np="@firebase/installations",Op="@firebase/installations-compat",Lp="@firebase/messaging",Mp="@firebase/messaging-compat",xp="@firebase/performance",Fp="@firebase/performance-compat",Up="@firebase/remote-config",Bp="@firebase/remote-config-compat",jp="@firebase/storage",qp="@firebase/storage-compat",$p="@firebase/firestore",zp="@firebase/ai",Hp="@firebase/firestore-compat",Wp="firebase",Gp="11.10.0";/**
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
 */const io="[DEFAULT]",Kp={[so]:"fire-core",[Tp]:"fire-core-compat",[wp]:"fire-analytics",[Ip]:"fire-analytics-compat",[Rp]:"fire-app-check",[Ap]:"fire-app-check-compat",[Pp]:"fire-auth",[Sp]:"fire-auth-compat",[Cp]:"fire-rtdb",[bp]:"fire-data-connect",[kp]:"fire-rtdb-compat",[Vp]:"fire-fn",[Dp]:"fire-fn-compat",[Np]:"fire-iid",[Op]:"fire-iid-compat",[Lp]:"fire-fcm",[Mp]:"fire-fcm-compat",[xp]:"fire-perf",[Fp]:"fire-perf-compat",[Up]:"fire-rc",[Bp]:"fire-rc-compat",[jp]:"fire-gcs",[qp]:"fire-gcs-compat",[$p]:"fire-fst",[Hp]:"fire-fst-compat",[zp]:"fire-vertex","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
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
 */const An=new Map,oo=new Map,ao=new Map;function Bc(n,e){try{n.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rn(n){const e=n.name;if(ao.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;ao.set(e,n);for(const t of An.values())Bc(t,n);for(const t of oo.values())Bc(t,n);return!0}function Do(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new br("app","Firebase",Qp);/**
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
 */class Jp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nn=Gp;function No(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:io,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(t||(t=yl()),!t)throw bt.create("no-options");const o=An.get(s);if(o){if(Xt(t,o.options)&&Xt(r,o.config))return o;throw bt.create("duplicate-app",{appName:s})}const a=new rp(s);for(const l of ao.values())a.addComponent(l);const u=new Jp(t,r,a);return An.set(s,u),u}function Al(n=io){const e=An.get(n);if(!e&&n===io&&yl())return No();if(!e)throw bt.create("no-app",{appName:n});return e}async function Yp(n){let e=!1;const t=n.name;An.has(t)?(e=!0,An.delete(t)):oo.has(t)&&n.decRefCount()<=0&&(oo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function kt(n,e,t){var r;let s=(r=Kp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${e}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(u.join(" "));return}Rn(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Xp="firebase-heartbeat-database",Zp=1,_r="firebase-heartbeat-store";let zi=null;function Rl(){return zi||(zi=gp(Xp,Zp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_r)}catch(t){console.warn(t)}}}}).catch(n=>{throw bt.create("idb-open",{originalErrorMessage:n.message})})),zi}async function em(n){try{const t=(await Rl()).transaction(_r),r=await t.objectStore(_r).get(Pl(n));return await t.done,r}catch(e){if(e instanceof pt)lt.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e?.message});lt.warn(t.message)}}}async function jc(n,e){try{const r=(await Rl()).transaction(_r,"readwrite");await r.objectStore(_r).put(e,Pl(n)),await r.done}catch(t){if(t instanceof pt)lt.warn(t.message);else{const r=bt.create("idb-set",{originalErrorMessage:t?.message});lt.warn(r.message)}}}function Pl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tm=1024,nm=30;class rm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new im(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>nm){const a=om(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qc(),{heartbeatsToSend:r,unsentEntries:s}=sm(this._heartbeatsCache.heartbeats),o=Cs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return lt.warn(t),""}}}function qc(){return new Date().toISOString().substring(0,10)}function sm(n,e=tm){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),$c(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$c(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class im{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hf()?Wf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await em(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $c(n){return Cs(JSON.stringify({version:2,heartbeats:n})).length}function om(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function am(n){Rn(new Zt("platform-logger",e=>new vp(e),"PRIVATE")),Rn(new Zt("heartbeat",e=>new rm(e),"PRIVATE")),kt(so,Uc,n),kt(so,Uc,"esm2017"),kt("fire-js","")}am("");var cm="firebase",um="11.10.0";/**
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
 */kt(cm,um,"app");function Oo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Sl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lm=Sl,Cl=new br("auth","Firebase",Sl());/**
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
 */const bs=new ko("@firebase/auth");function hm(n,...e){bs.logLevel<=W.WARN&&bs.warn(`Auth (${Nn}): ${n}`,...e)}function ys(n,...e){bs.logLevel<=W.ERROR&&bs.error(`Auth (${Nn}): ${n}`,...e)}/**
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
 */function qe(n,...e){throw Lo(n,...e)}function Ge(n,...e){return Lo(n,...e)}function bl(n,e,t){const r=Object.assign(Object.assign({},lm()),{[e]:t});return new br("auth","Firebase",r).create(e,{appName:n.name})}function ct(n){return bl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cl.create(n,...e)}function x(n,e,...t){if(!n)throw Lo(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ys(e),new Error(e)}function ht(n,e){n||ot(e)}/**
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
 */function co(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dm(){return zc()==="http:"||zc()==="https:"}function zc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function fm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dm()||jf()||"connection"in navigator)?navigator.onLine:!0}function pm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ht(t>e,"Short delay should be less than long delay!"),this.isMobile=Ff()||qf()}get(){return fm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mo(n,e){ht(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class kl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_m=new Vr(3e4,6e4);function mt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tt(n,e,t,r,s={}){return Vl(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=kr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},o);return Bf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Dn(n.emulatorConfig.host)&&(d.credentials="include"),kl.fetch()(await Dl(n,n.config.apiHost,t,u),d)})}async function Vl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},mm),e);try{const s=new vm(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ls(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ls(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ls(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ls(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw bl(n,p,d);qe(n,p)}}catch(s){if(s instanceof pt)throw s;qe(n,"network-request-failed",{message:String(s)})}}async function Dr(n,e,t,r,s={}){const o=await tt(n,e,t,r,s);return"mfaPendingCredential"in o&&qe(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Dl(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?Mo(n.config,s):`${n.config.apiScheme}://${s}`;return gm.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function ym(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),_m.get())})}}function ls(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function Hc(n){return n!==void 0&&n.enterprise!==void 0}class Em{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ym(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tm(n,e){return tt(n,"GET","/v2/recaptchaConfig",mt(n,e))}/**
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
 */async function Im(n,e){return tt(n,"POST","/v1/accounts:delete",e)}async function ks(n,e){return tt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function dr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wm(n,e=!1){const t=ie(n),r=await t.getIdToken(e),s=xo(r);x(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:dr(Hi(s.auth_time)),issuedAtTime:dr(Hi(s.iat)),expirationTime:dr(Hi(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Hi(n){return Number(n)*1e3}function xo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=gl(t);return s?JSON.parse(s):(ys("Failed to decode base64 JWT payload"),null)}catch(s){return ys("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Wc(n){const e=xo(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pt&&Am(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Am({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Rm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Pn(n,ks(t,{idToken:r}));x(s?.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Nl(o.providerUserInfo):[],u=Sm(n.providerData,a),l=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!u?.length,p=l?d:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new uo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function Pm(n){const e=ie(n);await Vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Nl(n){return n.map(e=>{var{providerId:t}=e,r=Oo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Cm(n,e){const t=await Vl(n,{},async()=>{const r=kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Dl(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Dn(n.emulatorConfig.host)&&(l.credentials="include"),kl.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bm(n,e){return tt(n,"POST","/v2/accounts:revokeToken",mt(n,e))}/**
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
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=Wc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await Cm(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new En;return r&&(x(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(x(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function Tt(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class je{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,o=Oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new uo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wm(this,e)}reload(){return Pm(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await Pn(this,Im(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,o,a,u,l,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,b=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(u=t.tenantId)!==null&&u!==void 0?u:void 0,V=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:te,isAnonymous:xe,providerData:oe,stsTokenManager:T}=t;x(H&&T,e,"internal-error");const m=En.fromJSON(this.name,T);x(typeof H=="string",e,"internal-error"),Tt(g,e.name),Tt(v,e.name),x(typeof te=="boolean",e,"internal-error"),x(typeof xe=="boolean",e,"internal-error"),Tt(S,e.name),Tt(b,e.name),Tt(L,e.name),Tt(V,e.name),Tt(z,e.name),Tt(q,e.name);const y=new je({uid:H,auth:e,email:v,emailVerified:te,displayName:g,isAnonymous:xe,photoURL:b,phoneNumber:S,tenantId:L,stsTokenManager:m,createdAt:z,lastLoginAt:q});return oe&&Array.isArray(oe)&&(y.providerData=oe.map(E=>Object.assign({},E))),V&&(y._redirectEventId=V),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new En;s.updateFromServerResponse(t);const o=new je({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vs(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];x(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Nl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,u=new En;u.updateFromIdToken(r);const l=new je({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new uo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(l,d),l}}/**
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
 */const Gc=new Map;function at(n){ht(n instanceof Function,"Expected a class definition");let e=Gc.get(n);return e?(ht(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gc.set(n,e),e)}/**
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
 */class Ol{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ol.type="NONE";const Ds=Ol;/**
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
 */function vs(n,e,t){return`firebase:${n}:${e}:${t}`}class Tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=vs(this.userKey,s.apiKey,o),this.fullPersistenceKey=vs("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ks(this.auth,{idToken:e}).catch(()=>{});return t?je._fromGetAccountInfoResponse(this.auth,t,e):null}return je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Tn(at(Ds),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||at(Ds);const a=vs(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const v=await ks(e,{idToken:p}).catch(()=>{});if(!v)break;g=await je._fromGetAccountInfoResponse(e,v,p)}else g=je._fromJSON(e,p);d!==o&&(u=g),o=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Tn(o,e,r):(o=l[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Tn(o,e,r))}}/**
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
 */function Kc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ll(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bl(e))return"Blackberry";if(jl(e))return"Webos";if(Ml(e))return"Safari";if((e.includes("chrome/")||xl(e))&&!e.includes("edge/"))return"Chrome";if(Ul(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ll(n=Re()){return/firefox\//i.test(n)}function Ml(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xl(n=Re()){return/crios\//i.test(n)}function Fl(n=Re()){return/iemobile/i.test(n)}function Ul(n=Re()){return/android/i.test(n)}function Bl(n=Re()){return/blackberry/i.test(n)}function jl(n=Re()){return/webos/i.test(n)}function Fo(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function km(n=Re()){var e;return Fo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vm(){return $f()&&document.documentMode===10}function ql(n=Re()){return Fo(n)||Ul(n)||jl(n)||Bl(n)||/windows phone/i.test(n)||Fl(n)}/**
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
 */function $l(n,e=[]){let t;switch(n){case"Browser":t=Kc(Re());break;case"Worker":t=`${Kc(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nn}/${r}`}/**
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
 */class Dm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const l=e(o);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Nm(n,e={}){return tt(n,"GET","/v2/passwordPolicy",mt(n,e))}/**
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
 */const Om=6;class Lm{constructor(e){var t,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Om,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,o,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Mm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qc(this),this.idTokenSubscription=new Qc(this),this.beforeStateQueue=new Dm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ks(this,{idToken:e}),r=await je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Fe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(s=l.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(ct(this));const t=e?ie(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nm(this),t=new Lm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await bm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$l(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hm(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Bt(n){return ie(n)}class Qc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yf(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xm(n){Qs=n}function zl(n){return Qs.loadJS(n)}function Fm(){return Qs.recaptchaEnterpriseScript}function Um(){return Qs.gapiScript}function Bm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jm{constructor(){this.enterprise=new qm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $m="recaptcha-enterprise",Hl="NO_RECAPTCHA";class zm{constructor(e){this.type=$m,this.auth=Bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Tm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Em(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function s(o,a,u){const l=window.grecaptcha;Hc(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Hl)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jm().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Hc(window.grecaptcha))s(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Fm();l.length!==0&&(l+=u),zl(l).then(()=>{s(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Jc(n,e,t,r=!1,s=!1){const o=new zm(n);let a;if(s)a=Hl;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Ns(n,e,t,r,s){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Jc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Jc(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
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
 */function Uo(n,e){const t=Do(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Xt(o,e??{}))return s;qe(s,"already-initialized")}return t.initialize({options:e})}function Hm(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(at);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Wm(n,e,t){const r=Bt(n);x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Wl(e),{host:a,port:u}=Gm(e),l=u===null?"":`:${u}`,d={url:`${o}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){x(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),x(Xt(d,r.config.emulator)&&Xt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Dn(a)?(El(`${o}//${a}${l}`),Tl("Auth",!0)):Km()}function Wl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gm(n){const e=Wl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Yc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Yc(a)}}}function Yc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Km(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function Qm(n,e){return tt(n,"POST","/v1/accounts:update",e)}async function Jm(n,e){return tt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ym(n,e){return Dr(n,"POST","/v1/accounts:signInWithPassword",mt(n,e))}async function Xm(n,e){return tt(n,"POST","/v1/accounts:sendOobCode",mt(n,e))}async function Zm(n,e){return Xm(n,e)}/**
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
 */async function eg(n,e){return Dr(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}async function tg(n,e){return Dr(n,"POST","/v1/accounts:signInWithEmailLink",mt(n,e))}/**
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
 */class yr extends Bo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new yr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new yr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,t,"signInWithPassword",Ym);case"emailLink":return eg(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,r,"signUpPassword",Jm);case"emailLink":return tg(e,{idToken:t,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function In(n,e){return Dr(n,"POST","/v1/accounts:signInWithIdp",mt(n,e))}/**
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
 */const ng="http://localhost";class en extends Bo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,o=Oo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new en(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return In(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,In(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,In(e,t)}buildRequest(){const e={requestUri:ng,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kr(t)}return e}}/**
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
 */function rg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sg(n){const e=ir(or(n)).link,t=e?ir(or(e)).deep_link_id:null,r=ir(or(n)).deep_link_id;return(r?ir(or(r)).link:null)||r||t||e||n}class jo{constructor(e){var t,r,s,o,a,u;const l=ir(or(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,g=rg((s=l.mode)!==null&&s!==void 0?s:null);x(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=sg(e);try{return new jo(t)}catch{return null}}}/**
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
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,t){return yr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=jo.parseLink(t);return x(r,"argument-error"),yr._fromEmailAndCode(e,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nr extends Gl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends Nr{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class At extends Nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return en._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class Rt extends Nr{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Pt extends Nr{constructor(){super("twitter.com")}static credential(e,t){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */async function ig(n,e){return Dr(n,"POST","/v1/accounts:signUp",mt(n,e))}/**
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
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await je._fromIdTokenResponse(e,r,s),a=Xc(r);return new tn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Xc(r);return new tn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Xc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Os extends pt{constructor(e,t,r,s){var o;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Os(e,t,r,s)}}function Kl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(n,o,e,r):o})}async function og(n,e,t=!1){const r=await Pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tn._forOperation(n,"link",r)}/**
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
 */async function ag(n,e,t=!1){const{auth:r}=n;if(Fe(r.app))return Promise.reject(ct(r));const s="reauthenticate";try{const o=await Pn(n,Kl(r,s,e,n),t);x(o.idToken,r,"internal-error");const a=xo(o.idToken);x(a,r,"internal-error");const{sub:u}=a;return x(n.uid===u,r,"user-mismatch"),tn._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&qe(r,"user-mismatch"),o}}/**
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
 */async function Ql(n,e,t=!1){if(Fe(n.app))return Promise.reject(ct(n));const r="signIn",s=await Kl(n,r,e),o=await tn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function cg(n,e){return Ql(Bt(n),e)}/**
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
 */async function Jl(n){const e=Bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ug(n,e,t){const r=Bt(n);await Ns(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Zm)}async function Yl(n,e,t){if(Fe(n.app))return Promise.reject(ct(n));const r=Bt(n),a=await Ns(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ig).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jl(n),l}),u=await tn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function lg(n,e,t){return Fe(n.app)?Promise.reject(ct(n)):cg(ie(n),On.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jl(n),r})}function hg(n,e){return dg(ie(n),null,e)}async function dg(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(o.password=t);const a=await Pn(n,Qm(r,o));await n._updateTokensIfNecessary(a,!0)}function fg(n,e,t,r){return ie(n).onIdTokenChanged(e,t,r)}function pg(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}function mg(n,e,t,r){return ie(n).onAuthStateChanged(e,t,r)}function Zc(n){return ie(n).signOut()}const Ls="__sak";/**
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
 */class Xl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ls,"1"),this.storage.removeItem(Ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gg=1e3,_g=10;class Zl extends Xl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ql(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Vm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_g):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zl.type="LOCAL";const eh=Zl;/**
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
 */class th extends Xl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}th.type="SESSION";const nh=th;/**
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
 */function yg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,o)),l=await yg(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Js.receivers=[];/**
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
 */function qo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((u,l)=>{const d=qo("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(v.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ke(){return window}function Eg(n){Ke().location.href=n}/**
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
 */function rh(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Tg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ig(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wg(){return rh()?self:null}/**
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
 */const sh="firebaseLocalStorageDb",Ag=1,Ms="firebaseLocalStorage",ih="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ys(n,e){return n.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function Rg(){const n=indexedDB.deleteDatabase(sh);return new Or(n).toPromise()}function lo(){const n=indexedDB.open(sh,Ag);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ms,{keyPath:ih})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ms)?e(r):(r.close(),await Rg(),e(await lo()))})})}async function eu(n,e,t){const r=Ys(n,!0).put({[ih]:e,value:t});return new Or(r).toPromise()}async function Pg(n,e){const t=Ys(n,!1).get(e),r=await new Or(t).toPromise();return r===void 0?null:r.value}function tu(n,e){const t=Ys(n,!0).delete(e);return new Or(t).toPromise()}const Sg=800,Cg=3;class oh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Cg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Js._getInstance(wg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tg(),!this.activeServiceWorker)return;this.sender=new vg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ig()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lo();return await eu(e,Ls,"1"),await tu(e,Ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>eu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Pg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ys(s,!1).getAll();return new Or(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oh.type="LOCAL";const ah=oh;new Vr(3e4,6e4);/**
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
 */function bg(n,e){return e?at(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $o extends Bo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,t){return In(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kg(n){return Ql(n.auth,new $o(n),n.bypassAuthState)}function Vg(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),ag(t,new $o(n),n.bypassAuthState)}async function Dg(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),og(t,new $o(n),n.bypassAuthState)}/**
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
 */class ch{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kg;case"linkViaPopup":case"linkViaRedirect":return Dg;case"reauthViaPopup":case"reauthViaRedirect":return Vg;default:qe(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ng=new Vr(2e3,1e4);class yn extends ch{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=qo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ng.get())};e()}}yn.currentPopupAction=null;/**
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
 */const Og="pendingRedirect",Es=new Map;class Lg extends ch{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Es.get(this.auth._key());if(!e){try{const r=await Mg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Es.set(this.auth._key(),e)}return this.bypassAuthState||Es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mg(n,e){const t=Ug(e),r=Fg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function xg(n,e){Es.set(n._key(),e)}function Fg(n){return at(n._redirectPersistence)}function Ug(n){return vs(Og,n.config.apiKey,n.name)}async function Bg(n,e,t=!1){if(Fe(n.app))return Promise.reject(ct(n));const r=Bt(n),s=bg(r,e),a=await new Lg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const jg=10*60*1e3;class qg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$g(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!uh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jg&&this.cachedEventUids.clear(),this.cachedEventUids.has(nu(e))}saveEventToCache(e){this.cachedEventUids.add(nu(e)),this.lastProcessedEventTime=Date.now()}}function nu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function $g(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uh(n);default:return!1}}/**
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
 */async function zg(n,e={}){return tt(n,"GET","/v1/projects",e)}/**
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
 */const Hg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wg=/^https?/;async function Gg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zg(n);for(const t of e)try{if(Kg(t))return}catch{}qe(n,"unauthorized-domain")}function Kg(n){const e=co(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Wg.test(t))return!1;if(Hg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Qg=new Vr(3e4,6e4);function ru(){const n=Ke().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jg(n){return new Promise((e,t)=>{var r,s,o;function a(){ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ru(),t(Ge(n,"network-request-failed"))},timeout:Qg.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Ke().gapi)===null||o===void 0)&&o.load)a();else{const u=Bm("iframefcb");return Ke()[u]=()=>{gapi.load?a():t(Ge(n,"network-request-failed"))},zl(`${Um()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Ts=null,e})}let Ts=null;function Yg(n){return Ts=Ts||Jg(n),Ts}/**
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
 */const Xg=new Vr(5e3,15e3),Zg="__/auth/iframe",e_="emulator/auth/iframe",t_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r_(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Mo(e,e_):`https://${n.config.authDomain}/${Zg}`,r={apiKey:e.apiKey,appName:n.name,v:Nn},s=n_.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${kr(r).slice(1)}`}async function s_(n){const e=await Yg(n),t=Ke().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:r_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t_,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ge(n,"network-request-failed"),u=Ke().setTimeout(()=>{o(a)},Xg.get());function l(){Ke().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const i_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o_=500,a_=600,c_="_blank",u_="http://localhost";class su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l_(n,e,t,r=o_,s=a_){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},i_),{width:r.toString(),height:s.toString(),top:o,left:a}),d=Re().toLowerCase();t&&(u=xl(d)?c_:t),Ll(d)&&(e=e||u_,l.scrollbars="yes");const p=Object.entries(l).reduce((v,[S,b])=>`${v}${S}=${b},`,"");if(km(d)&&u!=="_self")return h_(e||"",u),new su(null);const g=window.open(e||"",u,p);x(g,n,"popup-blocked");try{g.focus()}catch{}return new su(g)}function h_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const d_="__/auth/handler",f_="emulator/auth/handler",p_=encodeURIComponent("fac");async function iu(n,e,t,r,s,o){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Nn,eventId:s};if(e instanceof Gl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Jf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Nr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${p_}=${encodeURIComponent(l)}`:"";return`${m_(n)}?${kr(u).slice(1)}${d}`}function m_({config:n}){return n.emulator?Mo(n,f_):`https://${n.authDomain}/${d_}`}/**
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
 */const Wi="webStorageSupport";class g_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nh,this._completeRedirectFn=Bg,this._overrideRedirectResult=xg}async _openPopup(e,t,r,s){var o;ht((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await iu(e,t,r,co(),s);return l_(e,a,qo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await iu(e,t,r,co(),s);return Eg(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await s_(e),r=new qg(e);return t.register("authEvent",s=>(x(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wi,{type:Wi},s=>{var o;const a=(o=s?.[0])===null||o===void 0?void 0:o[Wi];a!==void 0&&t(!!a),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ql()||Ml()||Fo()}}const __=g_;var ou="@firebase/auth",au="1.10.8";/**
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
 */class y_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function v_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function E_(n){Rn(new Zt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;x(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$l(n)},d=new Mm(r,s,o,l);return Hm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new Zt("auth-internal",e=>{const t=Bt(e.getProvider("auth").getImmediate());return(r=>new y_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(ou,au,v_(n)),kt(ou,au,"esm2017")}/**
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
 */const T_=5*60,I_=vl("authIdTokenMaxAge")||T_;let cu=null;const w_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>I_)return;const s=t?.token;cu!==s&&(cu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function A_(n=Al()){const e=Do(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Uo(n,{popupRedirectResolver:__,persistence:[ah,eh,nh]}),r=vl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=w_(o.toString());pg(t,a,()=>a(t.currentUser)),fg(t,u=>a(u))}}const s=_l("auth");return s&&Wm(t,`http://${s}`),t}function R_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=Ge("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",R_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});E_("Browser");var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,lh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,I,A){for(var _=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)_[nt-2]=arguments[nt];return m.prototype[I].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)E[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],_=m+(A^y&(I^A))+E[0]+3614090360&4294967295;m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+E[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+E[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+E[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+E[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+E[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+E[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(I^A&(y^I))+E[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+E[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+E[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+E[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+E[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+E[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+E[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(y^I^A)+E[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+E[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+E[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+E[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+E[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+E[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+E[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(I^(y|~A))+E[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+E[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+E[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+E[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+E[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+E[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,E=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<m;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var E=0;32>E;E+=8)T[y++]=this.g[m]>>>E&255;return T};function o(T,m){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==m||(y[I]=A,E=!1)}this.g=y}var u={};function l(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return V(d(-T));for(var m=[],y=1,E=0;T>=y;E++)m[E]=T/y|0,y*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),E=g,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),_=parseInt(T.substring(I,I+A),m);8>A?(A=d(Math.pow(m,A)),E=E.j(A).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var g=l(0),v=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(L(this))return-V(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(L(this))return"-"+V(this).toString(T);for(var m=d(Math.pow(T,6)),y=this,E="";;){var I=te(y,m).g;y=z(y,I.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,b(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function L(T){return T.h==-1}n.l=function(T){return T=z(this,T),L(T)?-1:b(T)?0:1};function V(T){for(var m=T.g.length,y=[],E=0;E<m;E++)y[E]=~T.g[E];return new a(y,~T.h).add(v)}n.abs=function(){return L(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0,I=0;I<=m;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=_>>>16,A&=65535,_&=65535,y[I]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(T,m){return T.add(V(m))}n.j=function(T){if(b(this)||b(T))return g;if(L(this))return L(T)?V(this).j(V(T)):V(V(this).j(T));if(L(T))return V(this.j(V(T)));if(0>this.l(S)&&0>T.l(S))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],E=0;E<2*m;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,_=this.i(E)&65535,nt=T.i(I)>>>16,jn=T.i(I)&65535;y[2*E+2*I]+=_*jn,q(y,2*E+2*I),y[2*E+2*I+1]+=A*jn,q(y,2*E+2*I+1),y[2*E+2*I+1]+=_*nt,q(y,2*E+2*I+1),y[2*E+2*I+2]+=A*nt,q(y,2*E+2*I+2)}for(E=0;E<m;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=m;E<2*m;E++)y[E]=0;return new a(y,0)};function q(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function te(T,m){if(b(m))throw Error("division by zero");if(b(T))return new H(g,g);if(L(T))return m=te(V(T),m),new H(V(m.g),V(m.h));if(L(m))return m=te(T,V(m)),new H(V(m.g),m.h);if(30<T.g.length){if(L(T)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var y=v,E=m;0>=E.l(T);)y=xe(y),E=xe(E);var I=oe(y,1),A=oe(E,1);for(E=oe(E,2),y=oe(y,2);!b(E);){var _=A.add(E);0>=_.l(T)&&(I=I.add(y),A=_),E=oe(E,1),y=oe(y,1)}return m=z(T,I.j(m)),new H(I,m)}for(I=g;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(y),_=A.j(m);L(_)||0<_.l(T);)y-=E,A=d(y),_=A.j(m);b(A)&&(A=v),I=I.add(A),T=z(T,_)}return new H(I,T)}n.A=function(T){return te(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function xe(T){for(var m=T.g.length+1,y=[],E=0;E<m;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function oe(T,m){var y=m>>5;m%=32;for(var E=T.g.length-y,I=[],A=0;A<E;A++)I[A]=0<m?T.i(A+y)>>>m|T.i(A+y+1)<<32-m:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Vt=a}).apply(typeof uu<"u"?uu:typeof self<"u"?self:typeof window<"u"?window:{});var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hh,ar,dh,Is,ho,fh,ph,mh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,h){return i==Array.prototype||i==Object.prototype||(i[c]=h.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof hs=="object"&&hs];for(var c=0;c<i.length;++c){var h=i[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var h=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in h))break e;h=h[w]}i=i[i.length-1],f=h[i],c=c(f),c!=f&&c!=null&&e(h,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var h=0,f=!1,w={next:function(){if(!f&&h<i.length){var R=h++;return{value:c(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,h){return i.call.apply(i.bind,arguments)}function g(i,c,h){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(c,w)}}return function(){return i.apply(c,arguments)}}function v(i,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function S(i,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function b(i,c){function h(){}h.prototype=c.prototype,i.aa=c.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(f,w,R){for(var k=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)k[Y-2]=arguments[Y];return c.prototype[w].apply(f,k)}}function L(i){const c=i.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=i[f];return h}return[]}function V(i,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const w=i.length||0,R=f.length||0;i.length=w+R;for(let k=0;k<R;k++)i[w+k]=f[k]}else i.push(f)}}class z{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function q(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function te(i){return te[" "](i),i}te[" "]=function(){};var xe=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function oe(i,c,h){for(const f in i)c.call(h,i[f],f,i)}function T(i,c){for(const h in i)c.call(void 0,i[h],h,i)}function m(i){const c={};for(const h in i)c[h]=i[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)i[h]=f[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(f,h)&&(i[h]=f[h])}}function I(i){var c=1;i=i.split(":");const h=[];for(;0<c&&i.length;)h.push(i.shift()),c--;return i.length&&h.push(i.join(":")),h}function A(i){u.setTimeout(()=>{throw i},0)}function _(){var i=gi;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class nt{constructor(){this.h=this.g=null}add(c,h){const f=jn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var jn=new z(()=>new qd,i=>i.reset());class qd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let qn,$n=!1,gi=new nt,Da=()=>{const i=u.Promise.resolve(void 0);qn=()=>{i.then($d)}};var $d=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(h){A(h)}var c=jn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}$n=!1};function _t(){this.s=this.s,this.C=this.C}_t.prototype.s=!1,_t.prototype.ma=function(){this.s||(this.s=!0,this.N())},_t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var zd=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return i}();function zn(i,c){if(ye.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(xe){e:{try{te(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=i.fromElement:h=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Hd[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&zn.aa.h.call(this)}}b(zn,ye);var Hd={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Hr="closure_listenable_"+(1e6*Math.random()|0),Wd=0;function Gd(i,c,h,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++Wd,this.da=this.fa=!1}function Wr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Gr(i){this.src=i,this.g={},this.h=0}Gr.prototype.add=function(i,c,h,f,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var k=yi(i,c,f,w);return-1<k?(c=i[k],h||(c.fa=!1)):(c=new Gd(c,this.src,R,!!f,w),c.fa=h,i.push(c)),c};function _i(i,c){var h=c.type;if(h in i.g){var f=i.g[h],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Wr(c),i.g[h].length==0&&(delete i.g[h],i.h--))}}function yi(i,c,h,f){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return w}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),Ei={};function Na(i,c,h,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Na(i,c[R],h,f,w);return null}return h=Ma(h),i&&i[Hr]?i.K(c,h,d(f)?!!f.capture:!1,w):Kd(i,c,h,!1,f,w)}function Kd(i,c,h,f,w,R){if(!c)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,Y=Ii(i);if(Y||(i[vi]=Y=new Gr(i)),h=Y.add(c,h,f,k,R),h.proxy)return h;if(f=Qd(),h.proxy=f,f.src=i,f.listener=h,i.addEventListener)zd||(w=k),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(La(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Qd(){function i(h){return c.call(i.src,i.listener,h)}const c=Jd;return i}function Oa(i,c,h,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)Oa(i,c[R],h,f,w);else f=d(f)?!!f.capture:!!f,h=Ma(h),i&&i[Hr]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],h=yi(R,h,f,w),-1<h&&(Wr(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=Ii(i))&&(c=i.g[c.toString()],i=-1,c&&(i=yi(c,h,f,w)),(h=-1<i?c[i]:null)&&Ti(h))}function Ti(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Hr])_i(c.i,i);else{var h=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(h,f,i.capture):c.detachEvent?c.detachEvent(La(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Ii(c))?(_i(h,i),h.h==0&&(h.src=null,c[vi]=null)):Wr(i)}}}function La(i){return i in Ei?Ei[i]:Ei[i]="on"+i}function Jd(i,c){if(i.da)i=!0;else{c=new zn(c,this);var h=i.listener,f=i.ha||i.src;i.fa&&Ti(i),i=h.call(f,c)}return i}function Ii(i){return i=i[vi],i instanceof Gr?i:null}var wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ma(i){return typeof i=="function"?i:(i[wi]||(i[wi]=function(c){return i.handleEvent(c)}),i[wi])}function ve(){_t.call(this),this.i=new Gr(this),this.M=this,this.F=null}b(ve,_t),ve.prototype[Hr]=!0,ve.prototype.removeEventListener=function(i,c,h,f){Oa(this,i,c,h,f)};function Pe(i,c){var h,f=i.F;if(f)for(h=[];f;f=f.F)h.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new ye(c,i);else if(c instanceof ye)c.target=c.target||i;else{var w=c;c=new ye(f,i),E(c,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var k=c.g=h[R];w=Kr(k,f,!0,c)&&w}if(k=c.g=i,w=Kr(k,f,!0,c)&&w,w=Kr(k,f,!1,c)&&w,h)for(R=0;R<h.length;R++)k=c.g=h[R],w=Kr(k,f,!1,c)&&w}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var h=i.g[c],f=0;f<h.length;f++)Wr(h[f]);delete i.g[c],i.h--}}this.F=null},ve.prototype.K=function(i,c,h,f){return this.i.add(String(i),c,!1,h,f)},ve.prototype.L=function(i,c,h,f){return this.i.add(String(i),c,!0,h,f)};function Kr(i,c,h,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var k=c[R];if(k&&!k.da&&k.capture==h){var Y=k.listener,pe=k.ha||k.src;k.fa&&_i(i.i,k),w=Y.call(pe,f)!==!1&&w}}return w&&!f.defaultPrevented}function xa(i,c,h){if(typeof i=="function")h&&(i=v(i,h));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function Fa(i){i.g=xa(()=>{i.g=null,i.i&&(i.i=!1,Fa(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Yd extends _t{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Fa(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(i){_t.call(this),this.h=i,this.g={}}b(Hn,_t);var Ua=[];function Ba(i){oe(i.g,function(c,h){this.g.hasOwnProperty(h)&&Ti(c)},i),i.g={}}Hn.prototype.N=function(){Hn.aa.N.call(this),Ba(this)},Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ai=u.JSON.stringify,Xd=u.JSON.parse,Zd=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Ri(){}Ri.prototype.h=null;function ja(i){return i.h||(i.h=i.i())}function qa(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pi(){ye.call(this,"d")}b(Pi,ye);function Si(){ye.call(this,"c")}b(Si,ye);var $t={},$a=null;function Qr(){return $a=$a||new ve}$t.La="serverreachability";function za(i){ye.call(this,$t.La,i)}b(za,ye);function Gn(i){const c=Qr();Pe(c,new za(c))}$t.STAT_EVENT="statevent";function Ha(i,c){ye.call(this,$t.STAT_EVENT,i),this.stat=c}b(Ha,ye);function Se(i){const c=Qr();Pe(c,new Ha(c,i))}$t.Ma="timingevent";function Wa(i,c){ye.call(this,$t.Ma,i),this.size=c}b(Wa,ye);function Kn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function Qn(){this.g=!0}Qn.prototype.xa=function(){this.g=!1};function ef(i,c,h,f,w,R){i.info(function(){if(i.g)if(R)for(var k="",Y=R.split("&"),pe=0;pe<Y.length;pe++){var Q=Y[pe].split("=");if(1<Q.length){var Ee=Q[0];Q=Q[1];var Te=Ee.split("_");k=2<=Te.length&&Te[1]=="type"?k+(Ee+"="+Q+"&"):k+(Ee+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+k})}function tf(i,c,h,f,w,R,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+R+" "+k})}function an(i,c,h,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+rf(i,h)+(f?" "+f:"")})}function nf(i,c){i.info(function(){return"TIMEOUT: "+c})}Qn.prototype.info=function(){};function rf(i,c){if(!i.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var f=h[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Ai(h)}catch{return c}}var Jr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ga={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ci;function Yr(){}b(Yr,Ri),Yr.prototype.g=function(){return new XMLHttpRequest},Yr.prototype.i=function(){return{}},Ci=new Yr;function yt(i,c,h,f){this.j=i,this.i=c,this.l=h,this.R=f||1,this.U=new Hn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ka}function Ka(){this.i=null,this.g="",this.h=!1}var Qa={},bi={};function ki(i,c,h){i.L=1,i.v=ts(rt(c)),i.m=h,i.P=!0,Ja(i,null)}function Ja(i,c){i.F=Date.now(),Xr(i),i.A=rt(i.v);var h=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),lc(h.i,"t",f),i.C=0,h=i.j.J,i.h=new Ka,i.g=Cc(i.j,h?c:null,!i.m),0<i.O&&(i.M=new Yd(v(i.Y,i,i.g),i.O)),c=i.U,h=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ua[0]=w.toString()),w=Ua);for(var R=0;R<w.length;R++){var k=Na(h,w[R],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Gn(),ef(i.i,i.u,i.A,i.l,i.R,i.m)}yt.prototype.ca=function(i){i=i.target;const c=this.M;c&&st(i)==3?c.j():this.Y(i)},yt.prototype.Y=function(i){try{if(i==this.g)e:{const Te=st(this.g);var c=this.g.Ba();const ln=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||_c(this.g)))){this.J||Te!=4||c==7||(c==8||0>=ln?Gn(3):Gn(2)),Vi(this);var h=this.g.Z();this.X=h;t:if(Ya(this)){var f=_c(this.g);i="";var w=f.length,R=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),Jn(this);var k="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,tf(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,pe=this.g;if((Y=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Y)){var Q=Y;break t}}Q=null}if(h=Q)an(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Di(this,h);else{this.o=!1,this.s=3,Se(12),zt(this),Jn(this);break e}}if(this.P){h=!0;let Be;for(;!this.J&&this.C<k.length;)if(Be=sf(this,k),Be==bi){Te==4&&(this.s=4,Se(14),h=!1),an(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==Qa){this.s=4,Se(15),an(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else an(this.i,this.l,Be,null),Di(this,Be);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||k.length!=0||this.h.h||(this.s=1,Se(16),h=!1),this.o=this.o&&h,!h)an(this.i,this.l,k,"[Invalid Chunked Response]"),zt(this),Jn(this);else if(0<k.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Fi(Ee),Ee.M=!0,Se(11))}}else an(this.i,this.l,k,null),Di(this,k);Te==4&&zt(this),this.o&&!this.J&&(Te==4?Ac(this.j,this):(this.o=!1,Xr(this)))}else If(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),zt(this),Jn(this)}}}catch{}finally{}};function Ya(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function sf(i,c){var h=i.C,f=c.indexOf(`
`,h);return f==-1?bi:(h=Number(c.substring(h,f)),isNaN(h)?Qa:(f+=1,f+h>c.length?bi:(c=c.slice(f,f+h),i.C=f+h,c)))}yt.prototype.cancel=function(){this.J=!0,zt(this)};function Xr(i){i.S=Date.now()+i.I,Xa(i,i.I)}function Xa(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Kn(v(i.ba,i),c)}function Vi(i){i.B&&(u.clearTimeout(i.B),i.B=null)}yt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nf(this.i,this.A),this.L!=2&&(Gn(),Se(17)),zt(this),this.s=2,Jn(this)):Xa(this,this.S-i)};function Jn(i){i.j.G==0||i.J||Ac(i.j,i)}function zt(i){Vi(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Ba(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Di(i,c){try{var h=i.j;if(h.G!=0&&(h.g==i||Ni(h.h,i))){if(!i.K&&Ni(h.h,i)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)as(h),is(h);else break e;xi(h),Se(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Kn(v(h.Za,h),6e3));if(1>=tc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Wt(h,11)}else if((i.K||h.g==i)&&as(h),!q(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let Q=w[c];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const Ee=Q[3];Ee!=null&&(h.la=Ee,h.j.info("VER="+h.la));const Te=Q[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const ln=Q[5];ln!=null&&typeof ln=="number"&&0<ln&&(f=1.5*ln,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Be=i.g;if(Be){const us=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var R=f.h;R.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Oi(R,R.h),R.h=null))}if(f.D){const Ui=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;Ui&&(f.ya=Ui,Z(f.I,f.D,Ui))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=i;if(f.qa=Sc(f,f.J?f.ia:null,f.W),k.K){nc(f.h,k);var Y=k,pe=f.L;pe&&(Y.I=pe),Y.B&&(Vi(Y),Xr(Y)),f.g=k}else Ic(f);0<h.i.length&&os(h)}else Q[0]!="stop"&&Q[0]!="close"||Wt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Wt(h,7):Mi(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Gn(4)}catch{}}var of=class{constructor(i,c){this.g=i,this.map=c}};function Za(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ec(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function tc(i){return i.h?1:i.g?i.g.size:0}function Ni(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Oi(i,c){i.g?i.g.add(c):i.h=c}function nc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Za.prototype.cancel=function(){if(this.i=rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function rc(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const h of i.g.values())c=c.concat(h.D);return c}return L(i.i)}function af(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(l(i)){for(var c=[],h=i.length,f=0;f<h;f++)c.push(i[f]);return c}c=[],h=0;for(f in i)c[h++]=i[f];return c}function cf(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(l(i)||typeof i=="string"){var c=[];i=i.length;for(var h=0;h<i;h++)c.push(h);return c}c=[],h=0;for(const f in i)c[h++]=f;return c}}}function sc(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(l(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var h=cf(i),f=af(i),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],h&&h[R],i)}var ic=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(i,c){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var f=i[h].indexOf("="),w=null;if(0<=f){var R=i[h].substring(0,f);w=i[h].substring(f+1)}else R=i[h];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ht(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ht){this.h=i.h,Zr(this,i.j),this.o=i.o,this.g=i.g,es(this,i.s),this.l=i.l;var c=i.i,h=new Zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),oc(this,h),this.m=i.m}else i&&(c=String(i).match(ic))?(this.h=!1,Zr(this,c[1]||"",!0),this.o=Yn(c[2]||""),this.g=Yn(c[3]||"",!0),es(this,c[4]),this.l=Yn(c[5]||"",!0),oc(this,c[6]||"",!0),this.m=Yn(c[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Ht.prototype.toString=function(){var i=[],c=this.j;c&&i.push(Xn(c,ac,!0),":");var h=this.g;return(h||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Xn(c,ac,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Xn(h,h.charAt(0)=="/"?df:hf,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Xn(h,pf)),i.join("")};function rt(i){return new Ht(i)}function Zr(i,c,h){i.j=h?Yn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function es(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function oc(i,c,h){c instanceof Zn?(i.i=c,mf(i.i,i.h)):(h||(c=Xn(c,ff)),i.i=new Zn(c,i.h))}function Z(i,c,h){i.i.set(c,h)}function ts(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Yn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Xn(i,c,h){return typeof i=="string"?(i=encodeURI(i).replace(c,lf),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function lf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ac=/[#\/\?@]/g,hf=/[#\?:]/g,df=/[#\?]/g,ff=/[#\?@]/g,pf=/#/g;function Zn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function vt(i){i.g||(i.g=new Map,i.h=0,i.i&&uf(i.i,function(c,h){i.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Zn.prototype,n.add=function(i,c){vt(this),this.i=null,i=cn(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(c),this.h+=1,this};function cc(i,c){vt(i),c=cn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function uc(i,c){return vt(i),c=cn(i,c),i.g.has(c)}n.forEach=function(i,c){vt(this),this.g.forEach(function(h,f){h.forEach(function(w){i.call(c,w,f,this)},this)},this)},n.na=function(){vt(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const w=i[f];for(let R=0;R<w.length;R++)h.push(c[f])}return h},n.V=function(i){vt(this);let c=[];if(typeof i=="string")uc(this,i)&&(c=c.concat(this.g.get(cn(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)c=c.concat(i[h])}return c},n.set=function(i,c){return vt(this),this.i=null,i=cn(this,i),uc(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function lc(i,c,h){cc(i,c),0<h.length&&(i.i=null,i.g.set(cn(i,c),L(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const R=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var w=R;k[f]!==""&&(w+="="+encodeURIComponent(String(k[f]))),i.push(w)}}return this.i=i.join("&")};function cn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function mf(i,c){c&&!i.j&&(vt(i),i.i=null,i.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(cc(this,f),lc(this,w,h))},i)),i.j=c}function gf(i,c){const h=new Qn;if(u.Image){const f=new Image;f.onload=S(Et,h,"TestLoadImage: loaded",!0,c,f),f.onerror=S(Et,h,"TestLoadImage: error",!1,c,f),f.onabort=S(Et,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(Et,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function _f(i,c){const h=new Qn,f=new AbortController,w=setTimeout(()=>{f.abort(),Et(h,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?Et(h,"TestPingServer: ok",!0,c):Et(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),Et(h,"TestPingServer: error",!1,c)})}function Et(i,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function yf(){this.g=new Zd}function vf(i,c,h){const f=h||"";try{sc(i,function(w,R){let k=w;d(w)&&(k=Ai(w)),c.push(f+R+"="+encodeURIComponent(k))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function ns(i){this.l=i.Ub||null,this.j=i.eb||!1}b(ns,Ri),ns.prototype.g=function(){return new rs(this.l,this.j)},ns.prototype.i=function(i){return function(){return i}}({});function rs(i,c){ve.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(rs,ve),n=rs.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,tr(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hc(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function hc(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?er(this):tr(this),this.readyState==3&&hc(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,er(this))},n.Qa=function(i){this.g&&(this.response=i,er(this))},n.ga=function(){this.g&&er(this)};function er(i){i.readyState=4,i.l=null,i.j=null,i.v=null,tr(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=c.next();return i.join(`\r
`)};function tr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function dc(i){let c="";return oe(i,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Li(i,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=dc(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):Z(i,c,h))}function re(i){ve.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(re,ve);var Ef=/^https?$/i,Tf=["POST","PUT"];n=re.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ci.g(),this.v=this.o?ja(this.o):ja(Ci),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){fc(this,R);return}if(i=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Tf,c,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of h)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gc(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){fc(this,R)}};function fc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,pc(i),ss(i)}function pc(i){i.A||(i.A=!0,Pe(i,"complete"),Pe(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Pe(this,"complete"),Pe(this,"abort"),ss(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ss(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mc(this):this.bb())},n.bb=function(){mc(this)};function mc(i){if(i.h&&typeof a<"u"&&(!i.v[1]||st(i)!=4||i.Z()!=2)){if(i.u&&st(i)==4)xa(i.Ea,0,i);else if(Pe(i,"readystatechange"),st(i)==4){i.h=!1;try{const k=i.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var w=String(i.D).match(ic)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!Ef.test(w?w.toLowerCase():"")}h=f}if(h)Pe(i,"complete"),Pe(i,"success");else{i.m=6;try{var R=2<st(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",pc(i)}}finally{ss(i)}}}}function ss(i,c){if(i.g){gc(i);const h=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Pe(i,"ready");try{h.onreadystatechange=f}catch{}}}function gc(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function st(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Xd(c)}};function _c(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function If(i){const c={};i=(i.g&&2<=st(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(q(i[f]))continue;var h=I(i[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[w]||[];c[w]=R,R.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(i,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||c}function yc(i){this.Aa=0,this.i=[],this.j=new Qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,i),this.cb=nr("retryDelaySeedMs",1e4,i),this.Wa=nr("forwardChannelMaxRetries",2,i),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Za(i&&i.concurrentRequestLimit),this.Da=new yf,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yc.prototype,n.la=8,n.G=1,n.connect=function(i,c,h,f){Se(0),this.W=i,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Sc(this,null,this.W),os(this)};function Mi(i){if(vc(i),i.G==3){var c=i.U++,h=rt(i.I);if(Z(h,"SID",i.K),Z(h,"RID",c),Z(h,"TYPE","terminate"),rr(i,h),c=new yt(i,i.j,c),c.L=2,c.v=ts(rt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Cc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Xr(c)}Pc(i)}function is(i){i.g&&(Fi(i),i.g.cancel(),i.g=null)}function vc(i){is(i),i.u&&(u.clearTimeout(i.u),i.u=null),as(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function os(i){if(!ec(i.h)&&!i.s){i.s=!0;var c=i.Ga;qn||Da(),$n||(qn(),$n=!0),gi.add(c,i),i.B=0}}function wf(i,c){return tc(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Kn(v(i.Ga,i,c),Rc(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new yt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Tc(this,w,c),h=rt(this.I),Z(h,"RID",i),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),rr(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(dc(R)))+"&"+c:this.m&&Li(h,this.m,R)),Oi(this.h,w),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",c),Z(h,"SID","null"),w.T=!0,ki(w,h,null)):ki(w,h,c),this.G=2}}else this.G==3&&(i?Ec(this,i):this.i.length==0||ec(this.h)||Ec(this))};function Ec(i,c){var h;c?h=c.l:h=i.U++;const f=rt(i.I);Z(f,"SID",i.K),Z(f,"RID",h),Z(f,"AID",i.T),rr(i,f),i.m&&i.o&&Li(f,i.m,i.o),h=new yt(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Tc(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Oi(i.h,h),ki(h,f,c)}function rr(i,c){i.H&&oe(i.H,function(h,f){Z(c,f,h)}),i.l&&sc({},function(h,f){Z(c,f,h)})}function Tc(i,c,h){h=Math.min(i.i.length,h);var f=i.l?v(i.l.Na,i.l,i):null;e:{var w=i.i;let R=-1;for(;;){const k=["count="+h];R==-1?0<h?(R=w[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let Y=!0;for(let pe=0;pe<h;pe++){let Q=w[pe].g;const Ee=w[pe].map;if(Q-=R,0>Q)R=Math.max(0,w[pe].g-100),Y=!1;else try{vf(Ee,k,"req"+Q+"_")}catch{f&&f(Ee)}}if(Y){f=k.join("&");break e}}}return i=i.i.splice(0,h),c.D=i,f}function Ic(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;qn||Da(),$n||(qn(),$n=!0),gi.add(c,i),i.v=0}}function xi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Kn(v(i.Fa,i),Rc(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Kn(v(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),is(this),wc(this))};function Fi(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function wc(i){i.g=new yt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=rt(i.qa);Z(c,"RID","rpc"),Z(c,"SID",i.K),Z(c,"AID",i.T),Z(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(c,"TO",i.ja),Z(c,"TYPE","xmlhttp"),rr(i,c),i.m&&i.o&&Li(c,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=ts(rt(c)),h.m=null,h.P=!0,Ja(h,i)}n.Za=function(){this.C!=null&&(this.C=null,is(this),xi(this),Se(19))};function as(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Ac(i,c){var h=null;if(i.g==c){as(i),Fi(i),i.g=null;var f=2}else if(Ni(i.h,c))h=c.D,nc(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=i.B;f=Qr(),Pe(f,new Wa(f,h)),os(i)}else Ic(i);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&wf(i,c)||f==2&&xi(i)))switch(h&&0<h.length&&(c=i.h,c.i=c.i.concat(h)),w){case 1:Wt(i,5);break;case 4:Wt(i,10);break;case 3:Wt(i,6);break;default:Wt(i,2)}}}function Rc(i,c){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*c}function Wt(i,c){if(i.j.info("Error code "+c),c==2){var h=v(i.fb,i),f=i.Xa;const w=!f;f=new Ht(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Zr(f,"https"),ts(f),w?gf(f.toString(),h):_f(f.toString(),h)}else Se(2);i.G=0,i.l&&i.l.sa(c),Pc(i),vc(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function Pc(i){if(i.G=0,i.ka=[],i.l){const c=rc(i.h);(c.length!=0||i.i.length!=0)&&(V(i.ka,c),V(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function Sc(i,c,h){var f=h instanceof Ht?rt(h):new Ht(h);if(f.g!="")c&&(f.g=c+"."+f.g),es(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Ht(null);f&&Zr(R,f),c&&(R.g=c),w&&es(R,w),h&&(R.l=h),f=R}return h=i.D,c=i.ya,h&&c&&Z(f,h,c),Z(f,"VER",i.la),rr(i,f),f}function Cc(i,c,h){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new re(new ns({eb:h})):new re(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}n=bc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function cs(){}cs.prototype.g=function(i,c){return new Oe(i,c)};function Oe(i,c){ve.call(this),this.g=new yc(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!q(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!q(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new un(this)}b(Oe,ve),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Mi(this.g)},Oe.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=Ai(i),i=h);c.i.push(new of(c.Ya++,i)),c.G==3&&os(c)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Mi(this.g),delete this.g,Oe.aa.N.call(this)};function kc(i){Pi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const h in c){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}b(kc,Pi);function Vc(){Si.call(this),this.status=1}b(Vc,Si);function un(i){this.g=i}b(un,bc),un.prototype.ua=function(){Pe(this.g,"a")},un.prototype.ta=function(i){Pe(this.g,new kc(i))},un.prototype.sa=function(i){Pe(this.g,new Vc)},un.prototype.ra=function(){Pe(this.g,"b")},cs.prototype.createWebChannel=cs.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,mh=function(){return new cs},ph=function(){return Qr()},fh=$t,ho={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jr.NO_ERROR=0,Jr.TIMEOUT=8,Jr.HTTP_ERROR=6,Is=Jr,Ga.COMPLETE="complete",dh=Ga,qa.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",ve.prototype.listen=ve.prototype.K,ar=qa,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,hh=re}).apply(typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{});const lu="@firebase/firestore",hu="4.8.0";/**
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
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
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
 */let Ln="11.10.0";/**
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
 */const nn=new ko("@firebase/firestore");function pn(){return nn.logLevel}function O(n,...e){if(nn.logLevel<=W.DEBUG){const t=e.map(zo);nn.debug(`Firestore (${Ln}): ${n}`,...t)}}function dt(n,...e){if(nn.logLevel<=W.ERROR){const t=e.map(zo);nn.error(`Firestore (${Ln}): ${n}`,...t)}}function Nt(n,...e){if(nn.logLevel<=W.WARN){const t=e.map(zo);nn.warn(`Firestore (${Ln}): ${n}`,...t)}}function zo(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,gh(n,r,t)}function gh(n,e,t){let r=`FIRESTORE (${Ln}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw dt(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||gh(e,s,r)}function j(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class _h{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class S_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C_{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let o=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ut,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new _h(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class b_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class k_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new b_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class du{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new du(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new du(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function D_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function yh(){return new TextEncoder}/**
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
 */class Ho{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=D_(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function $(n,e){return n<e?-1:n>e?1:0}function fo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return $(r,s);{const o=yh(),a=N_(o.encode(fu(n,t)),o.encode(fu(e,t)));return a!==0?a:$(r,s)}}t+=r>65535?2:1}return $(n.length,e.length)}function fu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function N_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return $(n[t],e[t]);return $(n.length,e.length)}function Sn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const pu="__name__";class ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=ze.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return $(e.length,t.length)}static compareSegments(e,t){const r=ze.isNumericId(e),s=ze.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ze.extractNumericId(e).compare(ze.extractNumericId(t)):fo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vt.fromString(e.substring(4,e.length-2))}}class X extends ze{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new X(t)}static emptyPath(){return new X([])}}const O_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends ze{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return O_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pu}static keyField(){return new ge([pu])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new D(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new D(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(X.fromString(e))}static fromName(e){return new M(X.fromString(e).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new X(e.slice()))}}/**
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
 */function vh(n,e,t){if(!t)throw new D(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function L_(n,e,t,r){if(e===!0&&r===!0)throw new D(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function mu(n){if(!M.isDocumentKey(n))throw new D(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gu(n){if(M.isDocumentKey(n))throw new D(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Eh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function ke(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xs(n);throw new D(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function M_(n,e){if(e<=0)throw new D(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function Lr(n,e){if(!Eh(n))throw new D(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new D(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const _u=-62135596800,yu=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*yu);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<_u)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yu}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lr(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_u;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:le("string",ee._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ee(0,0))}static max(){return new B(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vr=-1;function x_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new Ot(s,M.empty(),e)}function F_(n){return new Ot(n.readTime,n.key,vr)}class Ot{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ot(B.min(),M.empty(),vr)}static max(){return new Ot(B.max(),M.empty(),vr)}}function U_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
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
 */const B_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class j_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==B_)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,o=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&t()},l=>r(l))}),a=!0,o===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,o)=>{r.push(t.call(this,s,o))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const o=e.length,a=new Array(o);let u=0;for(let l=0;l<o;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(e,t){return new C((r,s)=>{const o=()=>{e()===!0?t().next(()=>{o()},s):r()};o()})}}function q_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Zs.ue=-1;/**
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
 */const Wo=-1;function ei(n){return n==null}function xs(n){return n===0&&1/n==-1/0}function $_(n){return typeof n=="number"&&Number.isInteger(n)&&!xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Th="";function z_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=vu(e)),e=H_(n.get(t),e);return vu(e)}function H_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case Th:t+="";break;default:t+=o}}return t}function vu(n){return n+Th+""}/**
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
 */function Eu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ih(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ne{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ds(this.root,e,this.comparator,!0)}}class ds{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=o??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new me(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tu(this.data.getIterator())}getIteratorFrom(e){return new Tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class Tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Me{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Me([])}unionWith(e){let t=new he(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class wh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wh("Invalid base64 string: "+o):o}}(e);return new _e(t)}static fromUint8Array(e){const t=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const W_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=W_.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mt(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
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
 */const Ah="server_timestamp",Rh="__type__",Ph="__previous_value__",Sh="__local_write_time__";function Go(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rh])===null||t===void 0?void 0:t.stringValue)===Ah}function ti(n){const e=n.mapValue.fields[Ph];return Go(e)?ti(e):e}function Er(n){const e=Lt(n.mapValue.fields[Sh].timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class G_{constructor(e,t,r,s,o,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const Fs="(default)";class Tr{constructor(e,t){this.projectId=e,this.database=t||Fs}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database===Fs}isEqual(e){return e instanceof Tr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ch="__type__",K_="__max__",fs={mapValue:{}},bh="__vector__",Us="value";function xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Go(n)?4:J_(n)?9007199254740991:Q_(n)?10:11:F(28295,{value:n})}function Ze(n,e){if(n===e)return!0;const t=xt(n);if(t!==xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Er(n).isEqual(Er(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Lt(s.timestampValue),u=Lt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return Mt(s.bytesValue).isEqual(Mt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return ae(s.geoPointValue.latitude)===ae(o.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ae(s.integerValue)===ae(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ae(s.doubleValue),u=ae(o.doubleValue);return a===u?xs(a)===xs(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Sn(n.arrayValue.values||[],e.arrayValue.values||[],Ze);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Eu(a)!==Eu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Ze(a[l],u[l])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function Ir(n,e){return(n.values||[]).find(t=>Ze(t,e))!==void 0}function Cn(n,e){if(n===e)return 0;const t=xt(n),r=xt(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=ae(o.integerValue||o.doubleValue),l=ae(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Iu(n.timestampValue,e.timestampValue);case 4:return Iu(Er(n),Er(e));case 5:return fo(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Mt(o),l=Mt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=$(u[d],l[d]);if(p!==0)return p}return $(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=$(ae(o.latitude),ae(a.latitude));return u!==0?u:$(ae(o.longitude),ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wu(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,l,d,p;const g=o.fields||{},v=a.fields||{},S=(u=g[Us])===null||u===void 0?void 0:u.arrayValue,b=(l=v[Us])===null||l===void 0?void 0:l.arrayValue,L=$(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((p=b?.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:wu(S,b)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===fs.mapValue&&a===fs.mapValue)return 0;if(o===fs.mapValue)return 1;if(a===fs.mapValue)return-1;const u=o.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const v=fo(l[g],p[g]);if(v!==0)return v;const S=Cn(u[l[g]],d[p[g]]);if(S!==0)return S}return $(l.length,p.length)}(n.mapValue,e.mapValue);default:throw F(23264,{le:t})}}function Iu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=Lt(n),r=Lt(e),s=$(t.seconds,r.seconds);return s!==0?s:$(t.nanos,r.nanos)}function wu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=Cn(t[s],r[s]);if(o)return o}return $(t.length,r.length)}function bn(n){return po(n)}function po(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Lt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Mt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=po(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${po(t.fields[a])}`;return s+"}"}(n.mapValue):F(61005,{value:n})}function ws(n){switch(xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ti(n);return e?16+ws(e):16;case 5:return 2*n.stringValue.length;case 6:return Mt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+ws(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return jt(r.fields,(o,a)=>{s+=o.length+ws(a)}),s}(n.mapValue);default:throw F(13486,{value:n})}}function Au(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mo(n){return!!n&&"integerValue"in n}function Ko(n){return!!n&&"arrayValue"in n}function Ru(n){return!!n&&"nullValue"in n}function Pu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function As(n){return!!n&&"mapValue"in n}function Q_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ch])===null||t===void 0?void 0:t.stringValue)===bh}function fr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=fr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function J_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===K_}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!As(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fr(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=fr(a):s.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());As(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];As(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jt(t,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Ne(fr(this.value))}}function kh(n){const e=[];return jt(n.fields,(t,r)=>{const s=new ge([t]);if(As(r)){const o=kh(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Me(e)}/**
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
 */class Ae{constructor(e,t,r,s,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ae(e,0,B.min(),B.min(),B.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,B.min(),B.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,B.min(),B.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bs{constructor(e,t){this.position=e,this.inclusive=t}}function Su(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class wr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vh{}class ue extends Vh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Z_(e,t,r):t==="array-contains"?new ny(e,r):t==="in"?new ry(e,r):t==="not-in"?new sy(e,r):t==="array-contains-any"?new iy(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ey(e,r):new ty(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Cn(t,this.value)):t!==null&&xt(this.value)===xt(t)&&this.matchesComparison(Cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Vh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new $e(e,t)}matches(e){return Dh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Dh(n){return n.op==="and"}function Nh(n){return X_(n)&&Dh(n)}function X_(n){for(const e of n.filters)if(e instanceof $e)return!1;return!0}function go(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+bn(n.value);if(Nh(n))return n.filters.map(e=>go(e)).join(",");{const e=n.filters.map(t=>go(t)).join(",");return`${n.op}(${e})`}}function Oh(n,e){return n instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&Ze(r.value,s.value)}(n,e):n instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Oh(a,s.filters[u]),!0):!1}(n,e):void F(19439)}function Lh(n){return n instanceof ue?function(t){return`${t.field.canonicalString()} ${t.op} ${bn(t.value)}`}(n):n instanceof $e?function(t){return t.op.toString()+" {"+t.getFilters().map(Lh).join(" ,")+"}"}(n):"Filter"}class Z_ extends ue{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class ey extends ue{constructor(e,t){super(e,"in",t),this.keys=Mh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ty extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Mh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class ny extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ko(t)&&Ir(t.arrayValue,this.value)}}class ry extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ir(this.value.arrayValue,t)}}class sy extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ir(this.value.arrayValue,t)}}class iy extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ko(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ir(this.value.arrayValue,r))}}/**
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
 */class oy{constructor(e,t=null,r=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Pe=null}}function bu(n,e=null,t=[],r=[],s=null,o=null,a=null){return new oy(n,e,t,r,s,o,a)}function Qo(n){const e=j(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>go(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ei(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>bn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>bn(r)).join(",")),e.Pe=t}return e.Pe}function Jo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Y_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Oh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cu(n.startAt,e.startAt)&&Cu(n.endAt,e.endAt)}function _o(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fn{constructor(e,t=null,r=[],s=[],o=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ay(n,e,t,r,s,o,a,u){return new Fn(n,e,t,r,s,o,a,u)}function ni(n){return new Fn(n)}function ku(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xh(n){return n.collectionGroup!==null}function pr(n){const e=j(n);if(e.Te===null){e.Te=[];const t=new Set;for(const o of e.explicitOrderBy)e.Te.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new he(ge.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Te.push(new wr(o,r))}),t.has(ge.keyField().canonicalString())||e.Te.push(new wr(ge.keyField(),r))}return e.Te}function Qe(n){const e=j(n);return e.Ie||(e.Ie=cy(e,pr(n))),e.Ie}function cy(n,e){if(n.limitType==="F")return bu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new wr(s.field,o)});const t=n.endAt?new Bs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bs(n.startAt.position,n.startAt.inclusive):null;return bu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function yo(n,e){const t=n.filters.concat([e]);return new Fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function js(n,e,t){return new Fn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ri(n,e){return Jo(Qe(n),Qe(e))&&n.limitType===e.limitType}function Fh(n){return`${Qo(Qe(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Lh(s)).join(", ")}]`),ei(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>bn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>bn(s)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function si(n,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,s){for(const o of pr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,l){const d=Su(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,pr(r),s)||r.endAt&&!function(a,u,l){const d=Su(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,pr(r),s))}(n,e)}function uy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uh(n){return(e,t)=>{let r=!1;for(const s of pr(n)){const o=ly(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ly(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,u){const l=a.data.field(o),d=u.data.field(o);return l!==null&&d!==null?Cn(l,d):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jt(this.inner,(t,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return Ih(this.inner)}size(){return this.innerSize}}/**
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
 */const hy=new ne(M.comparator);function ft(){return hy}const Bh=new ne(M.comparator);function cr(...n){let e=Bh;for(const t of n)e=e.insert(t.key,t);return e}function jh(n){let e=Bh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Qt(){return mr()}function qh(){return mr()}function mr(){return new sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const dy=new ne(M.comparator),fy=new he(M.comparator);function G(...n){let e=fy;for(const t of n)e=e.add(t);return e}const py=new he($);function my(){return py}/**
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
 */function Yo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xs(e)?"-0":e}}function $h(n){return{integerValue:""+n}}function zh(n,e){return $_(e)?$h(e):Yo(n,e)}/**
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
 */class ii{constructor(){this._=void 0}}function gy(n,e,t){return n instanceof Ar?function(s,o){const a={fields:{[Rh]:{stringValue:Ah},[Sh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Go(o)&&(o=ti(o)),o&&(a.fields[Ph]=o),{mapValue:a}}(t,e):n instanceof Rr?Wh(n,e):n instanceof Pr?Gh(n,e):function(s,o){const a=Hh(s,o),u=Vu(a)+Vu(s.Ee);return mo(a)&&mo(s.Ee)?$h(u):Yo(s.serializer,u)}(n,e)}function _y(n,e,t){return n instanceof Rr?Wh(n,e):n instanceof Pr?Gh(n,e):t}function Hh(n,e){return n instanceof Sr?function(r){return mo(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Ar extends ii{}class Rr extends ii{constructor(e){super(),this.elements=e}}function Wh(n,e){const t=Kh(e);for(const r of n.elements)t.some(s=>Ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pr extends ii{constructor(e){super(),this.elements=e}}function Gh(n,e){let t=Kh(e);for(const r of n.elements)t=t.filter(s=>!Ze(s,r));return{arrayValue:{values:t}}}class Sr extends ii{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Vu(n){return ae(n.integerValue||n.doubleValue)}function Kh(n){return Ko(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Qh{constructor(e,t){this.field=e,this.transform=t}}function yy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Rr&&s instanceof Rr||r instanceof Pr&&s instanceof Pr?Sn(r.elements,s.elements,Ze):r instanceof Sr&&s instanceof Sr?Ze(r.Ee,s.Ee):r instanceof Ar&&s instanceof Ar}(n.transform,e.transform)}class vy{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class oi{}function Jh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ai(n.key,Ve.none()):new Mr(n.key,n.data,Ve.none());{const t=n.data,r=Ne.empty();let s=new he(ge.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new qt(n.key,r,new Me(s.toArray()),Ve.none())}}function Ey(n,e,t){n instanceof Mr?function(s,o,a){const u=s.value.clone(),l=Nu(s.fieldTransforms,o,a.transformResults);u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(s,o,a){if(!Rs(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Nu(s.fieldTransforms,o,a.transformResults),l=o.data;l.setAll(Yh(s)),l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function gr(n,e,t,r){return n instanceof Mr?function(o,a,u,l){if(!Rs(o.precondition,a))return u;const d=o.value.clone(),p=Ou(o.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(o,a,u,l){if(!Rs(o.precondition,a))return u;const d=Ou(o.fieldTransforms,l,a),p=a.data;return p.setAll(Yh(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(o,a,u){return Rs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Ty(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Hh(r.transform,s||null);o!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,o))}return t||null}function Du(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Sn(r,s,(o,a)=>yy(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mr extends oi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qt extends oi{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Yh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Nu(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,u=e.data.field(o.field);r.set(o.field,_y(a,u,t[s]))}return r}function Ou(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,gy(o,a,e))}return r}class ai extends oi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Iy extends oi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Ey(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qh();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const l=Jh(a,u);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(t,r)=>Du(t,r))&&Sn(this.baseMutations,e.baseMutations,(t,r)=>Du(t,r))}}class Xo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return dy}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Xo(e,t,r,s)}}/**
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
 */class Ay{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ry{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ce,K;function Py(n){switch(n){case P.OK:return F(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Xh(n){if(n===void 0)return dt("GRPC error has no .code"),P.UNKNOWN;switch(n){case ce.OK:return P.OK;case ce.CANCELLED:return P.CANCELLED;case ce.UNKNOWN:return P.UNKNOWN;case ce.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ce.INTERNAL:return P.INTERNAL;case ce.UNAVAILABLE:return P.UNAVAILABLE;case ce.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ce.NOT_FOUND:return P.NOT_FOUND;case ce.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ce.ABORTED:return P.ABORTED;case ce.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ce.DATA_LOSS:return P.DATA_LOSS;default:return F(39323,{code:n})}}(K=ce||(ce={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Sy=new Vt([4294967295,4294967295],0);function Lu(n){const e=yh().encode(n),t=new lh;return t.update(e),new Uint8Array(t.digest())}function Mu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Vt([t,r],0),new Vt([s,o],0)]}class Zo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ur(`Invalid padding: ${t}`);if(r<0)throw new ur(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ur(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ur(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Vt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Vt.fromNumber(r)));return s.compare(Sy)===1&&(s=new Vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Lu(e),[r,s]=Mu(t);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Zo(o,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;const t=Lu(e),[r,s]=Mu(t);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ci{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,xr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ci(B.min(),s,new ne($),ft(),G())}}class xr{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xr(r,t,G(),G(),G())}}/**
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
 */class Ps{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Zh{constructor(e,t){this.targetId=e,this.De=t}}class ed{constructor(e,t,r=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class xu{constructor(){this.ve=0,this.Ce=Fu(),this.Fe=_e.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=G(),t=G(),r=G();return this.Ce.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:o})}}),new xr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Fu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Cy{constructor(e){this.We=e,this.Ge=new Map,this.ze=ft(),this.je=ps(),this.Je=ps(),this.He=new ne($)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const o=s.target;if(_o(o))if(r===0){const a=new M(o.path);this.Xe(t,a,Ae.newNoDocument(a,B.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,u;try{a=Mt(r).toUint8Array()}catch(l){if(l instanceof wh)return Nt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Zo(a,s,o)}catch(l){return Nt(l instanceof ur?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(o=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,o,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((o,a)=>{const u=this.st(a);if(u){if(o.current&&_o(u.target)){const l=new M(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,Ae.newNoDocument(l,e))}o.Ne&&(t.set(a,o.Le()),o.ke())}});let r=G();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ze.forEach((o,a)=>a.setReadTime(e));const s=new ci(e,t,this.He,this.ze,r);return this.ze=ft(),this.je=ps(),this.Je=ps(),this.He=new ne($),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new xu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new he($),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new he($),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new xu),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ps(){return new ne(M.comparator)}function Fu(){return new ne(M.comparator)}const by={asc:"ASCENDING",desc:"DESCENDING"},ky={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vy={and:"AND",or:"OR"};class Dy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vo(n,e){return n.useProto3Json||ei(e)?e:{value:e}}function qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function td(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ny(n,e){return qs(n,e.toTimestamp())}function Je(n){return J(!!n,49232),B.fromTimestamp(function(t){const r=Lt(t);return new ee(r.seconds,r.nanos)}(n))}function ea(n,e){return Eo(n,e).canonicalString()}function Eo(n,e){const t=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function nd(n){const e=X.fromString(n);return J(ad(e),10190,{key:e.toString()}),e}function To(n,e){return ea(n.databaseId,e.path)}function Gi(n,e){const t=nd(e);if(t.get(1)!==n.databaseId.projectId)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(sd(t))}function rd(n,e){return ea(n.databaseId,e)}function Oy(n){const e=nd(n);return e.length===4?X.emptyPath():sd(e)}function Io(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sd(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Uu(n,e,t){return{name:To(n,e),fields:t.value.mapValue.fields}}function Ly(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(J(p===void 0||typeof p=="string",58123),_e.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),_e.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?P.UNKNOWN:Xh(d.code);return new D(p,d.message||"")}(a);t=new ed(r,s,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gi(n,r.document.name),o=Je(r.document.updateTime),a=r.document.createTime?Je(r.document.createTime):B.min(),u=new Ne({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Ps(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gi(n,r.document),o=r.readTime?Je(r.readTime):B.min(),a=Ae.newNoDocument(s,o),u=r.removedTargetIds||[];t=new Ps([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gi(n,r.document),o=r.removedTargetIds||[];t=new Ps([],o,s,null)}else{if(!("filter"in e))return F(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Ry(s,o),u=r.targetId;t=new Zh(u,a)}}return t}function My(n,e){let t;if(e instanceof Mr)t={update:Uu(n,e.key,e.value)};else if(e instanceof ai)t={delete:To(n,e.key)};else if(e instanceof qt)t={update:Uu(n,e.key,e.data),updateMask:Hy(e.fieldMask)};else{if(!(e instanceof Iy))return F(16599,{Rt:e.type});t={verify:To(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Pr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Sr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw F(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ny(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)}(n,e.precondition)),t}function xy(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map(t=>function(s,o){let a=s.updateTime?Je(s.updateTime):Je(o);return a.isEqual(B.min())&&(a=Je(o)),new vy(a,s.transformResults||[])}(t,e))):[]}function Fy(n,e){return{documents:[rd(n,e.path)]}}function Uy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rd(n,s);const o=function(d){if(d.length!==0)return od($e.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:gn(v.field),direction:qy(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=vo(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:s}}function By(n){let e=Oy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(g){const v=id(g);return v instanceof $e&&Nh(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(b){return new wr(_n(b.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(v))}(t.orderBy));let u=null;t.limit&&(u=function(g){let v;return v=typeof g=="object"?g.value:g,ei(v)?null:v}(t.limit));let l=null;t.startAt&&(l=function(g){const v=!!g.before,S=g.values||[];return new Bs(S,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,S=g.values||[];return new Bs(S,v)}(t.endAt)),ay(e,s,a,o,u,"F",l,d)}function jy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function id(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=_n(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_n(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_n(t.unaryFilter.field);return ue.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_n(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return ue.create(_n(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $e.create(t.compositeFilter.filters.map(r=>id(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function qy(n){return by[n]}function $y(n){return ky[n]}function zy(n){return Vy[n]}function gn(n){return{fieldPath:n.canonicalString()}}function _n(n){return ge.fromServerFormat(n.fieldPath)}function od(n){return n instanceof ue?function(t){if(t.op==="=="){if(Pu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(Ru(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(Ru(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:$y(t.op),value:t.value}}}(n):n instanceof $e?function(t){const r=t.getFilters().map(s=>od(s));return r.length===1?r[0]:{compositeFilter:{op:zy(t.op),filters:r}}}(n):F(54877,{filter:n})}function Hy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ad(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class St{constructor(e,t,r,s,o=B.min(),a=B.min(),u=_e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Wy{constructor(e){this.gt=e}}function Gy(n){const e=By({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?js(e,e.limit,"L"):e}/**
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
 */class Ky{constructor(){this.Dn=new Qy}addToCollectionParentIndex(e,t){return this.Dn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Ot.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Qy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new he(X.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new he(X.comparator)).toArray()}}/**
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
 */const Bu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cd=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(cd,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
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
 */class kn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new kn(0)}static ur(){return new kn(-1)}}/**
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
 */const ju="LruGarbageCollector",Jy=1048576;function qu([n,e],[t,r]){const s=$(n,t);return s===0?$(e,r):s}class Yy{constructor(e){this.Tr=e,this.buffer=new he(qu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Xy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(ju,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xn(t)?O(ju,"Ignoring IndexedDB error during garbage collection: ",t):await Mn(t)}await this.Rr(3e5)})}}class Zy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Zs.ue);const r=new Yy(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Bu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bu):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,o,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,u=Date.now(),this.removeTargets(e,r,t))).next(g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),pn()<=W.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g})))}}function ev(n,e){return new Zy(n,e)}/**
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
 */class tv{constructor(){this.changes=new sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class nv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class rv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&gr(r.mutation,s,Me.empty(),ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const s=Qt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(o=>{let a=cr();return o.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Qt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const s=[];return r.forEach(o=>{t.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let o=ft();const a=mr(),u=function(){return mr()}();return t.forEach((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof qt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),gr(p.mutation,d,p.mutation.getFieldMask(),ee.now())):a.set(d.key,Me.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return u.set(d,new nv(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,t){const r=mr();let s=new ne((a,u)=>a-u),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||Me.empty();p=u.applyToLocalView(d,p),r.set(l,p);const g=(s.get(u.batchId)||G()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,g=qh();p.forEach(v=>{if(!o.has(v)){const S=Jh(t.get(v),r.get(v));S!==null&&g.set(v,S),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):C.resolve(Qt());let u=vr,l=o;return a.next(d=>C.forEach(d,(p,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{l=l.insert(p,v)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,G())).next(p=>({batchId:u,changes:jh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=cr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=cr();return this.indexManager.getCollectionParents(e,o).next(u=>C.forEach(u,l=>{const d=function(g,v){return new Fn(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s))).next(a=>{o.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ae.newInvalidDocument(p)))});let u=cr();return a.forEach((l,d)=>{const p=o.get(l);p!==void 0&&gr(p.mutation,d,Me.empty(),ee.now()),si(t,d)&&(u=u.insert(l,d))}),u})}}/**
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
 */class sv{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return C.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:Gy(s.bundledQuery),readTime:Je(s.readTime)}}(t)),C.resolve()}}/**
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
 */class iv{constructor(){this.overlays=new ne(M.comparator),this.kr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qt();return C.forEach(t,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,o)=>{this.wt(e,t,o)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Qt(),o=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&s.set(l.getKey(),l)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new ne((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Qt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Qt(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return C.resolve(u)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ay(t,r));let o=this.kr.get(t);o===void 0&&(o=G(),this.kr.set(t,o)),this.kr.set(t,o.add(r.key))}}/**
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
 */class ov{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class ta{constructor(){this.qr=new he(fe.Qr),this.$r=new he(fe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new fe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new fe(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new M(new X([])),r=new fe(t,e),s=new fe(t,e+1),o=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new M(new X([])),r=new fe(t,e),s=new fe(t,e+1);let o=G();return this.$r.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new fe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return M.comparator(e.key,t.key)||$(e.Hr,t.Hr)}static Ur(e,t){return $(e.Hr,t.Hr)||M.comparator(e.key,t.key)}}/**
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
 */class av{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new he(fe.Qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new wy(o,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new fe(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Wo:this.er-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),s=new fe(t,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he($);return t.forEach(s=>{const o=new fe(s,0),a=new fe(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new fe(new M(o),0);let u=new he($);return this.Yr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Hr)),!0)},a),C.resolve(this.ei(u))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(t.mutations,s=>{const o=new fe(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new fe(t,0),s=this.Yr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class cv{constructor(e){this.ni=e,this.docs=function(){return new ne(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=ft();return t.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ae.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=ft();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||U_(F_(p),r)<=0||(s.has(p.key)||si(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,r,s){F(9500)}ri(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new uv(this)}getSize(e){return C.resolve(this.size)}}class uv extends tv{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class lv{constructor(e){this.persistence=e,this.ii=new sn(t=>Qo(t),Jo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new ta,this.targetCount=0,this._i=kn.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),C.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new kn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.hr(t),C.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.oi.containsKey(t))}}/**
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
 */class ud{constructor(e,t){this.ai={},this.overlays={},this.ui=new Zs(0),this.ci=!1,this.ci=!0,this.li=new ov,this.referenceDelegate=e(this),this.hi=new lv(this),this.indexManager=new Ky,this.remoteDocumentCache=function(s){return new cv(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Wy(t),this.Ti=new sv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new av(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new hv(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(e,t){return C.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class hv extends j_{constructor(e){super(),this.currentSequenceNumber=e}}class na{constructor(e){this.persistence=e,this.Ai=new ta,this.Ri=null}static Vi(e){return new na(e)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(o=>this.mi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,r=>{const s=M.fromPath(r);return this.fi(e,s).next(o=>{o||t.removeEntry(s,B.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return C.or([()=>C.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class $s{constructor(e,t){this.persistence=e,this.gi=new sn(r=>z_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ev(this,t)}static Vi(e,t){return new $s(e,t)}Ii(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return C.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(o=>o?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,o.removeEntry(a,B.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ws(e.data.value)),t}Sr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ra{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=G(),s=G();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ra(e,t.fromCache,r,s)}}/**
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
 */class dv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fv{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return zf()?8:q_(Re())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ps(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ys(e,t,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new dv;return this.ws(e,t,a).next(u=>{if(o.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>o.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(pn()<=W.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(pn()<=W.DEBUG&&O("QueryEngine","Query:",mn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(pn()<=W.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):C.resolve())}ps(e,t){if(ku(t))return C.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=js(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=G(...o);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,js(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,s){return ku(t)||s.isEqual(B.min())?C.resolve(null):this.gs.getDocuments(e,r).next(o=>{const a=this.bs(t,o);return this.Ds(t,a,r,s)?C.resolve(null):(pn()<=W.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mn(t)),this.vs(e,a,t,x_(s,vr)).next(u=>u))})}bs(e,t){let r=new he(Uh(e));return t.forEach((s,o)=>{si(e,o)&&(r=r.add(o))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(e,t,r){return pn()<=W.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",mn(t)),this.gs.getDocumentsMatchingQuery(e,t,Ot.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const sa="LocalStore",pv=3e8;class mv{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ne($),this.Ms=new sn(o=>Qo(o),Jo),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rv(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function gv(n,e,t,r){return new mv(n,e,t,r)}async function ld(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let l=G();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function _v(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){const g=d.batch,v=g.keys();let S=C.resolve();return v.forEach(b=>{S=S.next(()=>p.getEntry(l,b)).next(L=>{const V=d.docVersions.get(b);J(V!==null,48541),L.version.compareTo(V)<0&&(g.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),p.addEntry(L)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=G();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function hd(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function yv(n,e){const t=j(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const u=[];e.targetChanges.forEach((p,g)=>{const v=s.get(g);if(!v)return;u.push(t.hi.removeMatchingKeys(o,p.removedDocuments,g).next(()=>t.hi.addMatchingKeys(o,p.addedDocuments,g)));let S=v.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(_e.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(g,S),function(L,V,z){return L.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=pv?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(v,S,p)&&u.push(t.hi.updateTargetData(o,S))});let l=ft(),d=G();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(vv(o,a,e.documentUpdates).next(p=>{l=p.Ls,d=p.ks})),!r.isEqual(B.min())){const p=t.hi.getLastRemoteSnapshotVersion(o).next(g=>t.hi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(t.Fs=s,o))}function vv(n,e,t){let r=G(),s=G();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=ft();return t.forEach((u,l)=>{const d=o.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):O(sa,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:s}})}function Ev(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Tv(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(o=>o?(s=o,C.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new St(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function wo(n,e,t){const r=j(n),s=r.Fs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!xn(a))throw a;O(sa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function $u(n,e,t){const r=j(n);let s=B.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const g=j(l),v=g.Ms.get(p);return v!==void 0?C.resolve(g.Fs.get(v)):g.hi.getTargetData(d,p)}(r,a,Qe(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{o=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?o:G())).next(u=>(Iv(r,uy(e),u),{documents:u,qs:o})))}function Iv(n,e,t){let r=n.xs.get(e)||B.min();t.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.xs.set(e,r)}class zu{constructor(){this.activeTargetIds=my()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wv{constructor(){this.Fo=new zu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new zu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Av{xo(e){}shutdown(){}}/**
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
 */const Hu="ConnectivityMonitor";class Wu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(Hu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(Hu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ms=null;function Ao(){return ms===null?ms=function(){return 268435456+Math.round(2147483648*Math.random())}():ms++,"0x"+ms.toString(16)}/**
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
 */const Ki="RestConnection",Rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Pv{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Fs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,o){const a=Ao(),u=this.Go(e,t.toUriEncodedString());O(Ki,`Sending RPC '${e}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,o);const{host:d}=new URL(u),p=Dn(d);return this.jo(e,u,l,r,p).then(g=>(O(Ki,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Nt(Ki,`RPC '${e}' ${a} failed with error: `,g,"url: ",u,"request:",r),g})}Jo(e,t,r,s,o,a){return this.Wo(e,t,r,s,o)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ln}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}Go(e,t){const r=Rv[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Sv{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ie="WebChannelConnection";class Cv extends Pv{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,o){const a=Ao();return new Promise((u,l)=>{const d=new hh;d.setWithCredentials(!0),d.listenOnce(dh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Is.NO_ERROR:const g=d.getResponseJson();O(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),u(g);break;case Is.TIMEOUT:O(Ie,`RPC '${e}' ${a} timed out`),l(new D(P.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const v=d.getStatus();if(O(Ie,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S?.error;if(b&&b.status&&b.message){const L=function(z){const q=z.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(b.status);l(new D(L,b.message))}else l(new D(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new D(P.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(Ie,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);O(Ie,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}P_(e,t,r){const s=Ao(),o=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=mh(),u=ph(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=o.join("");O(Ie,`Creating RPC '${e}' stream ${s}: ${p}`,l);const g=a.createWebChannel(p,l);this.T_(g);let v=!1,S=!1;const b=new Sv({Ho:V=>{S?O(Ie,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(v||(O(Ie,`Opening RPC '${e}' stream ${s} transport.`),g.open(),v=!0),O(Ie,`RPC '${e}' stream ${s} sending:`,V),g.send(V))},Yo:()=>g.close()}),L=(V,z,q)=>{V.listen(z,H=>{try{q(H)}catch(te){setTimeout(()=>{throw te},0)}})};return L(g,ar.EventType.OPEN,()=>{S||(O(Ie,`RPC '${e}' stream ${s} transport opened.`),b.s_())}),L(g,ar.EventType.CLOSE,()=>{S||(S=!0,O(Ie,`RPC '${e}' stream ${s} transport closed`),b.__(),this.I_(g))}),L(g,ar.EventType.ERROR,V=>{S||(S=!0,Nt(Ie,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),b.__(new D(P.UNAVAILABLE,"The operation could not be completed")))}),L(g,ar.EventType.MESSAGE,V=>{var z;if(!S){const q=V.data[0];J(!!q,16349);const H=q,te=H?.error||((z=H[0])===null||z===void 0?void 0:z.error);if(te){O(Ie,`RPC '${e}' stream ${s} received error:`,te);const xe=te.status;let oe=function(y){const E=ce[y];if(E!==void 0)return Xh(E)}(xe),T=te.message;oe===void 0&&(oe=P.INTERNAL,T="Unknown error status: "+xe+" with message "+te.message),S=!0,b.__(new D(oe,T)),g.close()}else O(Ie,`RPC '${e}' stream ${s} received:`,q),b.a_(q)}}),L(u,fh.STAT_EVENT,V=>{V.stat===ho.PROXY?O(Ie,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===ho.NOPROXY&&O(Ie,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.o_()},0),b}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Qi(){return typeof document<"u"?document:null}/**
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
 */function ui(n){return new Dy(n,!0)}/**
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
 */class dd{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Gu="PersistentStream";class fd{constructor(e,t,r,s,o,a,u,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new dd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(dt(t.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new D(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return O(Gu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(O(Gu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bv extends fd{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Ly(this.serializer,e),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Je(a.readTime):B.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Io(this.serializer),t.addTarget=function(o,a){let u;const l=a.target;if(u=_o(l)?{documents:Fy(o,l)}:{query:Uy(o,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=td(o,a.resumeToken);const d=vo(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=qs(o,a.snapshotVersion.toTimestamp());const d=vo(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=jy(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Io(this.serializer),t.removeTarget=e,this.k_(t)}}class kv extends fd{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=xy(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Io(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>My(this.serializer,r))};this.k_(t)}}/**
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
 */class Vv{}class Dv extends Vv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,Eo(t,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(P.UNKNOWN,o.toString())})}Jo(e,t,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,Eo(t,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(P.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Nv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(dt(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const rn="RemoteStore";class Ov{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{on(this)&&(O(rn,"Restarting streams for network reachability change."),await async function(l){const d=j(l);d.Ia.add(4),await Fr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await li(d)}(this))})}),this.Aa=new Nv(r,s)}}async function li(n){if(on(n))for(const e of n.da)await e(!0)}async function Fr(n){for(const e of n.da)await e(!1)}function pd(n,e){const t=j(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ca(t)?aa(t):Un(t).x_()&&oa(t,e))}function ia(n,e){const t=j(n),r=Un(t);t.Ta.delete(e),r.x_()&&md(t,e),t.Ta.size===0&&(r.x_()?r.B_():on(t)&&t.Aa.set("Unknown"))}function oa(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Un(n).H_(e)}function md(n,e){n.Ra.$e(e),Un(n).Y_(e)}function aa(n){n.Ra=new Cy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.Aa.aa()}function ca(n){return on(n)&&!Un(n).M_()&&n.Ta.size>0}function on(n){return j(n).Ia.size===0}function gd(n){n.Ra=void 0}async function Lv(n){n.Aa.set("Online")}async function Mv(n){n.Ta.forEach((e,t)=>{oa(n,e)})}async function xv(n,e){gd(n),ca(n)?(n.Aa.la(e),aa(n)):n.Aa.set("Unknown")}async function Fv(n,e,t){if(n.Aa.set("Online"),e instanceof ed&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))}(n,e)}catch(r){O(rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zs(n,r)}else if(e instanceof Ps?n.Ra.Ye(e):e instanceof Zh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(B.min()))try{const r=await hd(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=o.Ta.get(d);p&&o.Ta.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const p=o.Ta.get(l);if(!p)return;o.Ta.set(l,p.withResumeToken(_e.EMPTY_BYTE_STRING,p.snapshotVersion)),md(o,l);const g=new St(p.target,l,d,p.sequenceNumber);oa(o,g)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){O(rn,"Failed to raise snapshot:",r),await zs(n,r)}}async function zs(n,e,t){if(!xn(e))throw e;n.Ia.add(1),await Fr(n),n.Aa.set("Offline"),t||(t=()=>hd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(rn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await li(n)})}function _d(n,e){return e().catch(t=>zs(n,t,e))}async function hi(n){const e=j(n),t=Ft(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Wo;for(;Uv(e);)try{const s=await Ev(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Bv(e,s)}catch(s){await zs(e,s)}yd(e)&&vd(e)}function Uv(n){return on(n)&&n.Pa.length<10}function Bv(n,e){n.Pa.push(e);const t=Ft(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function yd(n){return on(n)&&!Ft(n).M_()&&n.Pa.length>0}function vd(n){Ft(n).start()}async function jv(n){Ft(n).na()}async function qv(n){const e=Ft(n);for(const t of n.Pa)e.X_(t.mutations)}async function $v(n,e,t){const r=n.Pa.shift(),s=Xo.from(r,e,t);await _d(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await hi(n)}async function zv(n,e){e&&Ft(n).Z_&&await async function(r,s){if(function(a){return Py(a)&&a!==P.ABORTED}(s.code)){const o=r.Pa.shift();Ft(r).N_(),await _d(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await hi(r)}}(n,e),yd(n)&&vd(n)}async function Ku(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),O(rn,"RemoteStore received new credentials");const r=on(t);t.Ia.add(3),await Fr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await li(t)}async function Hv(n,e){const t=j(n);e?(t.Ia.delete(2),await li(t)):e||(t.Ia.add(2),await Fr(t),t.Aa.set("Unknown"))}function Un(n){return n.Va||(n.Va=function(t,r,s){const o=j(t);return o.ia(),new bv(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Lv.bind(null,n),e_:Mv.bind(null,n),n_:xv.bind(null,n),J_:Fv.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),ca(n)?aa(n):n.Aa.set("Unknown")):(await n.Va.stop(),gd(n))})),n.Va}function Ft(n){return n.ma||(n.ma=function(t,r,s){const o=j(t);return o.ia(),new kv(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:jv.bind(null,n),n_:zv.bind(null,n),ea:qv.bind(null,n),ta:$v.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await hi(n)):(await n.ma.stop(),n.Pa.length>0&&(O(rn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class ua{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,u=new ua(e,t,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(n,e){if(dt("AsyncQueue",`${e}: ${n}`),xn(n))return new D(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wn{static emptySet(e){return new wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=cr(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Qu{constructor(){this.fa=new ne(M.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):F(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Vn{constructor(e,t,r,s,o,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Vn(e,t,wn.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ri(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Wv{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Gv{constructor(){this.queries=Ju(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=j(t),o=s.queries;s.queries=Ju(),o.forEach((a,u)=>{for(const l of u.wa)l.onError(r)})})(this,new D(P.ABORTED,"Firestore shutting down"))}}function Ju(){return new sn(n=>Fh(n),ri)}async function ha(n,e){const t=j(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.Sa()&&e.ba()&&(r=2):(o=new Wv,r=e.ba()?0:1);try{switch(r){case 0:o.ya=await t.onListen(s,!0);break;case 1:o.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=la(a,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,o),o.wa.push(e),e.va(t.onlineState),o.ya&&e.Ca(o.ya)&&fa(t)}async function da(n,e){const t=j(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.wa.indexOf(e);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=e.ba()?0:1:!o.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Kv(n,e){const t=j(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&fa(t)}function Qv(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const o of s.wa)o.onError(t);r.queries.delete(e)}function fa(n){n.Da.forEach(e=>{e.next()})}var Ro,Yu;(Yu=Ro||(Ro={})).Fa="default",Yu.Cache="cache";class pa{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ro.Cache}}/**
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
 */class Ed{constructor(e){this.key=e}}class Td{constructor(e){this.key=e}}class Jv{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=G(),this.mutatedKeys=G(),this.Xa=Uh(e),this.eu=new wn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Qu,s=t?t.eu:this.eu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const v=s.get(p),S=si(this.query,g)?g:null,b=!!v&&this.mutatedKeys.has(v.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;v&&S?v.data.isEqual(S.data)?b!==L&&(r.track({type:3,doc:S}),V=!0):this.iu(v,S)||(r.track({type:2,doc:S}),V=!0,(l&&this.Xa(S,l)>0||d&&this.Xa(S,d)<0)&&(u=!0)):!v&&S?(r.track({type:0,doc:S}),V=!0):v&&!S&&(r.track({type:1,doc:v}),V=!0,(l||d)&&(u=!0)),V&&(S?(a=a.add(S),o=L?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:o}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((p,g)=>function(S,b){const L=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:V})}};return L(S)-L(b)}(p.type,g.type)||this.Xa(p.doc,g.doc)),this.su(r),s=s!=null&&s;const u=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new Vn(this.query,e.eu,o,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Qu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=G(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Td(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Ed(r))}),t}uu(e){this.Ha=e.qs,this.Za=G();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Vn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ma="SyncEngine";class Yv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Xv{constructor(e){this.key=e,this.lu=!1}}class Zv{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new sn(u=>Fh(u),ri),this.Tu=new Map,this.Iu=new Set,this.du=new ne(M.comparator),this.Eu=new Map,this.Au=new ta,this.Ru={},this.Vu=new Map,this.mu=kn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function eE(n,e,t=!0){const r=Sd(n);let s;const o=r.Pu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Id(r,e,t,!0),s}async function tE(n,e){const t=Sd(n);await Id(t,e,!0,!1)}async function Id(n,e,t,r){const s=await Tv(n.localStore,Qe(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await nE(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&pd(n.remoteStore,s),u}async function nE(n,e,t,r,s){n.gu=(g,v,S)=>async function(L,V,z,q){let H=V.view.nu(z);H.Ds&&(H=await $u(L.localStore,V.query,!1).then(({documents:T})=>V.view.nu(T,H)));const te=q&&q.targetChanges.get(V.targetId),xe=q&&q.targetMismatches.get(V.targetId)!=null,oe=V.view.applyChanges(H,L.isPrimaryClient,te,xe);return Zu(L,V.targetId,oe._u),oe.snapshot}(n,g,v,S);const o=await $u(n.localStore,e,!0),a=new Jv(e,o.qs),u=a.nu(o.documents),l=xr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,l);Zu(n,t,d._u);const p=new Yv(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function rE(n,e,t){const r=j(n),s=r.Pu.get(e),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter(a=>!ri(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ia(r.remoteStore,s.targetId),Po(r,s.targetId)}).catch(Mn)):(Po(r,s.targetId),await wo(r.localStore,s.targetId,!0))}async function sE(n,e){const t=j(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ia(t.remoteStore,r.targetId))}async function iE(n,e,t){const r=dE(n);try{const s=await function(a,u){const l=j(a),d=ee.now(),p=u.reduce((S,b)=>S.add(b.key),G());let g,v;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let b=ft(),L=G();return l.Os.getEntries(S,p).next(V=>{b=V,b.forEach((z,q)=>{q.isValidDocument()||(L=L.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,b)).next(V=>{g=V;const z=[];for(const q of u){const H=Ty(q,g.get(q.key).overlayedDocument);H!=null&&z.push(new qt(q.key,H,kh(H.value.mapValue),Ve.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,z,u)}).next(V=>{v=V;const z=V.applyToLocalDocumentSet(g,L);return l.documentOverlayCache.saveOverlays(S,V.batchId,z)})}).then(()=>({batchId:v.batchId,changes:jh(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new ne($)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,t),await Ur(r,s.changes),await hi(r.remoteStore)}catch(s){const o=la(s,"Failed to persist write");t.reject(o)}}async function wd(n,e){const t=j(n);try{const r=await yv(t.localStore,e);e.targetChanges.forEach((s,o)=>{const a=t.Eu.get(o);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?J(a.lu,14607):s.removedDocuments.size>0&&(J(a.lu,42227),a.lu=!1))}),await Ur(t,r,e)}catch(r){await Mn(r)}}function Xu(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((o,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=j(a);l.onlineState=u;let d=!1;l.queries.forEach((p,g)=>{for(const v of g.wa)v.va(u)&&(d=!0)}),d&&fa(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oE(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),o=s&&s.key;if(o){let a=new ne(M.comparator);a=a.insert(o,Ae.newNoDocument(o,B.min()));const u=G().add(o),l=new ci(B.min(),new Map,new ne($),a,u);await wd(r,l),r.du=r.du.remove(o),r.Eu.delete(e),ga(r)}else await wo(r.localStore,e,!1).then(()=>Po(r,e,t)).catch(Mn)}async function aE(n,e){const t=j(n),r=e.batch.batchId;try{const s=await _v(t.localStore,e);Rd(t,r,null),Ad(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ur(t,s)}catch(s){await Mn(s)}}async function cE(n,e,t){const r=j(n);try{const s=await function(a,u){const l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(g=>(J(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Rd(r,e,t),Ad(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ur(r,s)}catch(s){await Mn(s)}}function Ad(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Rd(n,e,t){const r=j(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Po(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Pd(n,r)})}function Pd(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ia(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),ga(n))}function Zu(n,e,t){for(const r of t)r instanceof Ed?(n.Au.addReference(r.key,e),uE(n,r)):r instanceof Td?(O(ma,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Pd(n,r.key)):F(19791,{yu:r})}function uE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(O(ma,"New document in limbo: "+t),n.Iu.add(r),ga(n))}function ga(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new M(X.fromString(e)),r=n.mu.next();n.Eu.set(r,new Xv(t)),n.du=n.du.insert(t,r),pd(n.remoteStore,new St(Qe(ni(t.path)),r,"TargetPurposeLimboResolution",Zs.ue))}}async function Ur(n,e,t){const r=j(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=ra.Es(l.targetId,d);o.push(g)}}))}),await Promise.all(a),r.hu.J_(s),await async function(l,d){const p=j(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>C.forEach(d,v=>C.forEach(v.Is,S=>p.persistence.referenceDelegate.addReference(g,v.targetId,S)).next(()=>C.forEach(v.ds,S=>p.persistence.referenceDelegate.removeReference(g,v.targetId,S)))))}catch(g){if(!xn(g))throw g;O(sa,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const S=p.Fs.get(v),b=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(b);p.Fs=p.Fs.insert(v,L)}}}(r.localStore,o))}async function lE(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){O(ma,"User change. New user:",e.toKey());const r=await ld(t.localStore,e);t.currentUser=e,function(o,a){o.Vu.forEach(u=>{u.forEach(l=>{l.reject(new D(P.CANCELLED,a))})}),o.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ur(t,r.Bs)}}function hE(n,e){const t=j(n),r=t.Eu.get(e);if(r&&r.lu)return G().add(r.key);{let s=G();const o=t.Tu.get(e);if(!o)return s;for(const a of o){const u=t.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function Sd(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oE.bind(null,e),e.hu.J_=Kv.bind(null,e.eventManager),e.hu.pu=Qv.bind(null,e.eventManager),e}function dE(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cE.bind(null,e),e}class Hs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ui(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return gv(this.persistence,new fv,e.initialUser,this.serializer)}Du(e){return new ud(na.Vi,this.serializer)}bu(e){return new wv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hs.provider={build:()=>new Hs};class fE extends Hs{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){J(this.persistence.referenceDelegate instanceof $s,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Xy(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new ud(r=>$s.Vi(r,t),this.serializer)}}class So{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lE.bind(null,this.syncEngine),await Hv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gv}()}createDatastore(e){const t=ui(e.databaseInfo.databaseId),r=function(o){return new Cv(o)}(e.databaseInfo);return function(o,a,u,l){return new Dv(o,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,o,a,u){return new Ov(r,s,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Xu(this.syncEngine,t,0),function(){return Wu.C()?new Wu:new Av}())}createSyncEngine(e,t){return function(s,o,a,u,l,d,p){const g=new Zv(s,o,a,u,l,d);return p&&(g.fu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const o=j(s);O(rn,"RemoteStore shutting down."),o.Ia.add(5),await Fr(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}So.provider={build:()=>new So};/**
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
 *//**
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
 */class _a{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ut="FirestoreClient";class pE{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O(Ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(Ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=la(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ji(n,e){n.asyncQueue.verifyOperationInProgress(),O(Ut,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ld(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Nt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Nt("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function el(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mE(n);O(Ut,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ku(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ku(e.remoteStore,s)),n._onlineComponents=e}async function mE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Ut,"Using user provided OfflineComponentProvider");try{await Ji(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Nt("Error using user provided cache. Falling back to memory cache: "+t),await Ji(n,new Hs)}}else O(Ut,"Using default OfflineComponentProvider"),await Ji(n,new fE(void 0));return n._offlineComponents}async function Cd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Ut,"Using user provided OnlineComponentProvider"),await el(n,n._uninitializedComponentsProvider._online)):(O(Ut,"Using default OnlineComponentProvider"),await el(n,new So))),n._onlineComponents}function gE(n){return Cd(n).then(e=>e.syncEngine)}async function Ws(n){const e=await Cd(n),t=e.eventManager;return t.onListen=eE.bind(null,e.syncEngine),t.onUnlisten=rE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sE.bind(null,e.syncEngine),t}function _E(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,l,d){const p=new _a({next:v=>{p.Ou(),a.enqueueAndForget(()=>da(o,g));const S=v.docs.has(u);!S&&v.fromCache?d.reject(new D(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&l&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new pa(ni(u.path),p,{includeMetadataChanges:!0,ka:!0});return ha(o,g)}(await Ws(n),n.asyncQueue,e,t,r)),r.promise}function yE(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,l,d){const p=new _a({next:v=>{p.Ou(),a.enqueueAndForget(()=>da(o,g)),v.fromCache&&l.source==="server"?d.reject(new D(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new pa(u,p,{includeMetadataChanges:!0,ka:!0});return ha(o,g)}(await Ws(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function bd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const tl=new Map;/**
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
 */const kd="firestore.googleapis.com",nl=!0;class rl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kd,this.ssl=nl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:nl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jy)throw new D(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}L_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class di{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new P_;switch(r.type){case"firstParty":return new k_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=tl.get(t);r&&(O("ComponentProvider","Removing Datastore"),tl.delete(t),r.terminate())}(this),Promise.resolve()}}function vE(n,e,t,r={}){var s;n=ke(n,di);const o=Dn(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;o&&(El(`https://${l}`),Tl("Firestore",!0)),a.host!==kd&&a.host!==l&&Nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:l,ssl:o,emulatorOptions:r});if(!Xt(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=we.MOCK_USER;else{p=Lf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new D(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new we(v)}n._authCredentials=new S_(new _h(p,g))}}/**
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
 */class gt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gt(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Lr(t,se._jsonSchema))return new se(e,r||null,new M(X.fromString(t.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:le("string",se._jsonSchemaVersion),referencePath:le("string")};class Dt extends gt{constructor(e,t,r){super(e,t,ni(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new M(e))}withConverter(e){return new Dt(this.firestore,e,this._path)}}function de(n,e,...t){if(n=ie(n),vh("collection","path",e),n instanceof di){const r=X.fromString(e,...t);return gu(r),new Dt(n,null,r)}{if(!(n instanceof se||n instanceof Dt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return gu(r),new Dt(n.firestore,null,r)}}function U(n,e,...t){if(n=ie(n),arguments.length===1&&(e=Ho.newId()),vh("doc","path",e),n instanceof di){const r=X.fromString(e,...t);return mu(r),new se(n,null,new M(r))}{if(!(n instanceof se||n instanceof Dt))throw new D(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return mu(r),new se(n.firestore,n instanceof Dt?n.converter:null,new M(r))}}/**
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
 */const sl="AsyncQueue";class il{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new dd(this,"async_queue_retry"),this.oc=()=>{const r=Qi();r&&O(sl,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Qi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Qi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ut;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!xn(e))throw e;O(sl,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,dt("INTERNAL UNHANDLED ERROR: ",ol(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=ua.createAndSchedule(this,e,t,r,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&F(47125,{hc:ol(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ol(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function al(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class et extends di{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new il,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new il(e),this._firestoreClient=void 0,await e}}}function EE(n,e){const t=typeof n=="object"?n:Al(),r=typeof n=="string"?n:Fs,s=Do(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Nf("firestore");o&&vE(s,...o)}return s}function Br(n){if(n._terminated)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TE(n),n._firestoreClient}function TE(n){var e,t,r;const s=n._freezeSettings(),o=function(u,l,d,p){return new G_(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,bd(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new pE(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class Ue{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ue(_e.fromBase64String(e))}catch(t){throw new D(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ue(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ue._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lr(e,Ue._jsonSchema))return Ue.fromBase64String(e.bytes)}}Ue._jsonSchemaVersion="firestore/bytes/1.0",Ue._jsonSchema={type:le("string",Ue._jsonSchemaVersion),bytes:le("string")};/**
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
 */class Bn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jr{constructor(e){this._methodName=e}}/**
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
 */class Ye{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ye._jsonSchemaVersion}}static fromJSON(e){if(Lr(e,Ye._jsonSchema))return new Ye(e.latitude,e.longitude)}}Ye._jsonSchemaVersion="firestore/geoPoint/1.0",Ye._jsonSchema={type:le("string",Ye._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
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
 */class Xe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lr(e,Xe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Xe(e.vectorValues);throw new D(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:le("string",Xe._jsonSchemaVersion),vectorValues:le("object")};/**
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
 */const IE=/^__.*__$/;class wE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mr(e,this.data,t,this.fieldTransforms)}}class Vd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:n})}}class ya{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ya(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gs(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Dd(this.Ec)&&IE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class AE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ui(e)}Dc(e,t,r,s=!1){return new ya({Ec:e,methodName:t,bc:r,path:ge.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qr(n){const e=n._freezeSettings(),t=ui(n._databaseId);return new AE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function va(n,e,t,r,s,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,e,t,s);Ia("Data must be an object, but it was:",a,r);const u=Ld(r,a);let l,d;if(o.merge)l=new Me(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const g of o.mergeFields){const v=Co(e,g,t);if(!a.contains(v))throw new D(P.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);xd(p,v)||p.push(v)}l=new Me(p),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new wE(new Ne(u),l,d)}class fi extends jr{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fi}}class Ea extends jr{_toFieldTransform(e){return new Qh(e.path,new Ar)}isEqual(e){return e instanceof Ea}}class Ta extends jr{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new Sr(e.serializer,zh(e.serializer,this.Cc));return new Qh(e.path,t)}isEqual(e){return e instanceof Ta&&this.Cc===e.Cc}}function Nd(n,e,t,r){const s=n.Dc(1,e,t);Ia("Data must be an object, but it was:",s,r);const o=[],a=Ne.empty();jt(r,(l,d)=>{const p=wa(e,l,t);d=ie(d);const g=s.gc(p);if(d instanceof fi)o.push(p);else{const v=$r(d,g);v!=null&&(o.push(p),a.set(p,v))}});const u=new Me(o);return new Vd(a,u,s.fieldTransforms)}function Od(n,e,t,r,s,o){const a=n.Dc(1,e,t),u=[Co(e,r,t)],l=[s];if(o.length%2!=0)throw new D(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<o.length;v+=2)u.push(Co(e,o[v])),l.push(o[v+1]);const d=[],p=Ne.empty();for(let v=u.length-1;v>=0;--v)if(!xd(d,u[v])){const S=u[v];let b=l[v];b=ie(b);const L=a.gc(S);if(b instanceof fi)d.push(S);else{const V=$r(b,L);V!=null&&(d.push(S),p.set(S,V))}}const g=new Me(d);return new Vd(p,g,a.fieldTransforms)}function RE(n,e,t,r=!1){return $r(t,n.Dc(r?4:3,e))}function $r(n,e){if(Md(n=ie(n)))return Ia("Unsupported field value:",e,n),Ld(n,e);if(n instanceof jr)return function(r,s){if(!Dd(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let l=$r(u,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,s){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ee.fromDate(r);return{timestampValue:qs(s.serializer,o)}}if(r instanceof ee){const o=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qs(s.serializer,o)}}if(r instanceof Ye)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ue)return{bytesValue:td(s.serializer,r._byteString)};if(r instanceof se){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ea(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xe)return function(a,u){return{mapValue:{fields:{[Ch]:{stringValue:bh},[Us]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Yo(u.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Xs(r)}`)}(n,e)}function Ld(n,e){const t={};return Ih(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(n,(r,s)=>{const o=$r(s,e.Vc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Ye||n instanceof Ue||n instanceof se||n instanceof jr||n instanceof Xe)}function Ia(n,e,t){if(!Md(t)||!Eh(t)){const r=Xs(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Co(n,e,t){if((e=ie(e))instanceof Bn)return e._internalPath;if(typeof e=="string")return wa(n,e);throw Gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const PE=new RegExp("[~\\*/\\[\\]]");function wa(n,e,t){if(e.search(PE)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bn(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new D(P.INVALID_ARGUMENT,u+n+l)}function xd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Fd{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SE extends Fd{data(){return super.data()}}function pi(n,e){return typeof e=="string"?wa(n,e):e instanceof Bn?e._internalPath:e._delegate._internalPath}/**
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
 */function Ud(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Aa{}class Ra extends Aa{}function gs(n,e,...t){let r=[];e instanceof Aa&&r.push(e),r=r.concat(t),function(o){const a=o.filter(l=>l instanceof Pa).length,u=o.filter(l=>l instanceof mi).length;if(a>1||a>0&&u>0)throw new D(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class mi extends Ra{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new mi(e,t,r)}_apply(e){const t=this._parse(e);return Bd(e._query,t),new gt(e.firestore,e.converter,yo(e._query,t))}_parse(e){const t=qr(e.firestore);return function(o,a,u,l,d,p,g){let v;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new D(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){dl(g,p);const b=[];for(const L of g)b.push(hl(l,o,L));v={arrayValue:{values:b}}}else v=hl(l,o,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||dl(g,p),v=RE(u,a,g,p==="in"||p==="not-in");return ue.create(d,p,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cl(n,e,t){const r=e,s=pi("where",n);return mi._create(s,r,t)}class Pa extends Aa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:$e.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const l of u)Bd(a,l),a=yo(a,l)}(e._query,t),new gt(e.firestore,e.converter,yo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sa extends Ra{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sa(e,t)}_apply(e){const t=function(s,o,a){if(s.startAt!==null)throw new D(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wr(o,a)}(e._query,this._field,this._direction);return new gt(e.firestore,e.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Fn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ul(n,e="asc"){const t=e,r=pi("orderBy",n);return Sa._create(r,t)}class Ca extends Ra{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ca(e,t,r)}_apply(e){return new gt(e.firestore,e.converter,js(e._query,this._limit,this._limitType))}}function ll(n){return M_("limit",n),Ca._create("limit",n,"F")}function hl(n,e,t){if(typeof(t=ie(t))=="string"){if(t==="")throw new D(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xh(e)&&t.indexOf("/")!==-1)throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(X.fromString(t));if(!M.isDocumentKey(r))throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Au(n,new M(r))}if(t instanceof se)return Au(n,t._key);throw new D(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xs(t)}.`)}function dl(n,e){if(!Array.isArray(n)||n.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bd(n,e){const t=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class CE{convertValue(e,t="none"){switch(xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jt(e,(s,o)=>{r[s]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Us].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ae(a.doubleValue));return new Xe(o)}convertGeoPoint(e){return new Ye(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ti(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const t=Lt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=X.fromString(e);J(ad(r),9688,{name:e});const s=new Tr(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(t)||dt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function ba(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jt extends Fd{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(pi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Jt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Jt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jt._jsonSchema={type:le("string",Jt._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class Ss extends Jt{data(e={}){return super.data(e)}}class Yt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new lr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ss(this._firestore,this._userDataWriter,r.key,r,new lr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new Ss(s._firestore,s._userDataWriter,u.doc.key,u.doc,new lr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const l=new Ss(s._firestore,s._userDataWriter,u.doc.key,u.doc,new lr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:bE(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ho.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */function He(n){n=ke(n,se);const e=ke(n.firestore,et);return _E(Br(e),n._key).then(t=>jd(e,n,t))}Yt._jsonSchemaVersion="firestore/querySnapshot/1.0",Yt._jsonSchema={type:le("string",Yt._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class ka extends CE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ue(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}function kE(n){n=ke(n,gt);const e=ke(n.firestore,et),t=Br(e),r=new ka(e);return Ud(n._query),yE(t,n._query).then(s=>new Yt(e,r,n,s))}function it(n,e,t){n=ke(n,se);const r=ke(n.firestore,et),s=ba(n.converter,e,t);return zr(r,[va(qr(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ve.none())])}function Kt(n,e,t,...r){n=ke(n,se);const s=ke(n.firestore,et),o=qr(s);let a;return a=typeof(e=ie(e))=="string"||e instanceof Bn?Od(o,"updateDoc",n._key,e,t,r):Nd(o,"updateDoc",n._key,e),zr(s,[a.toMutation(n._key,Ve.exists(!0))])}function It(n){return zr(ke(n.firestore,et),[new ai(n._key,Ve.none())])}function hn(n,e){const t=ke(n.firestore,et),r=U(n),s=ba(n.converter,e);return zr(t,[va(qr(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function Le(n,...e){var t,r,s;n=ie(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||al(e[a])||(o=e[a++]);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(al(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,p;if(n instanceof se)d=ke(n.firestore,et),p=ni(n._key.path),l={next:g=>{e[a]&&e[a](jd(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=ke(n,gt);d=ke(g.firestore,et),p=g._query;const v=new ka(d);l={next:S=>{e[a]&&e[a](new Yt(d,v,g,S))},error:e[a+1],complete:e[a+2]},Ud(n._query)}return function(v,S,b,L){const V=new _a(L),z=new pa(S,V,b);return v.asyncQueue.enqueueAndForget(async()=>ha(await Ws(v),z)),()=>{V.Ou(),v.asyncQueue.enqueueAndForget(async()=>da(await Ws(v),z))}}(Br(d),p,u,l)}function zr(n,e){return function(r,s){const o=new ut;return r.asyncQueue.enqueueAndForget(async()=>iE(await gE(r),s,o)),o.promise}(Br(n),e)}function jd(n,e,t){const r=t.docs.get(e._key),s=new ka(n);return new Jt(n,s,e._key,r,new lr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class VE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=qr(e)}set(e,t,r){this._verifyNotCommitted();const s=Yi(e,this._firestore),o=ba(s.converter,t,r),a=va(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,Ve.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const o=Yi(e,this._firestore);let a;return a=typeof(t=ie(t))=="string"||t instanceof Bn?Od(this._dataReader,"WriteBatch.update",o._key,t,r,s):Nd(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(a.toMutation(o._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Yi(e,this._firestore);return this._mutations=this._mutations.concat(new ai(t._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yi(n,e){if((n=ie(n)).firestore!==e)throw new D(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function fl(){return new Ea("serverTimestamp")}function sr(n){return new Ta("increment",n)}/**
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
 */function dn(n){return Br(n=ke(n,et)),new VE(n,e=>zr(n,e))}(function(e,t=!0){(function(s){Ln=s})(Nn),Rn(new Zt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new et(new C_(r.getProvider("auth-internal")),new V_(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),kt(lu,hu,e),kt(lu,hu,"esm2017")})();const bo=No(Cr.firebase);let We;try{We=Uo(bo,{persistence:Af.isNativePlatform()?Ds:[ah,eh]})}catch{We=A_(bo)}const N=EE(bo),DE=n=>{const e=n.trim().toLowerCase();return e.includes("@")?e:`${e}@${Cr.dominioUsuarios}`},_s=n=>`${n}.${Date.now().toString(36)}@${Cr.dominioUsuarios}`;async function NE(n){const e=n.trim().toLowerCase();if(e.includes("@"))return e;try{const t=await He(U(N,"logins",e));if(t.exists())return t.data().email}catch{}return DE(e)}async function Xi(n){if((await He(U(N,"logins",n))).exists())throw new Error("Ese usuario ya existe")}const Ce=n=>({id:n.id,...n.data()}),OE=n=>n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,24)||"tienda",LE=n=>n?.toMillis?n.toMillis():n,Zi=n=>({...n,creado:LE(n.creado)||Date.now()});let be=null;async function Va(n){if(!n)return null;if(n.email?.toLowerCase()===Cr.superEmail.toLowerCase())return{uid:n.uid,usuario:n.email,rol:"super",tiendaId:null,debeCambiarClave:!1};const e=await He(U(N,"usuarios",n.uid));if(!e.exists())return{uid:n.uid,usuario:n.email,rol:"sinacceso",tiendaId:null};const t=e.data();return{uid:n.uid,usuario:t.usuario,rol:t.rol||"admin",permisos:t.permisos||null,tiendaId:t.tiendaId,debeCambiarClave:!!t.debeCambiarClave}}const vn=new Set;mg(We,async n=>{be=await Va(n).catch(()=>null),vn.forEach(e=>e(be))});const UE={onCambio(n){return vn.add(n),(be!==null||We.currentUser===null)&&n(be),()=>vn.delete(n)},async login(n,e){try{const t=await lg(We,await NE(n),e);if(be=await Va(t.user),be.rol==="sinacceso")throw await Zc(We),new Error("Este usuario no tiene acceso");return vn.forEach(r=>r(be)),be}catch(t){throw String(t.code||"").includes("auth/")?new Error("Usuario o contraseña incorrectos"):t}},async salir(){await Zc(We)},async recuperarPorCorreo(n){await ug(We,n.trim().toLowerCase())},async cambiarClave(n){const e=We.currentUser;if(!e)throw new Error("Sin sesión");await hg(e,n),be&&be.rol!=="super"&&await Kt(U(N,"usuarios",e.uid),{debeCambiarClave:!1}),be={...be,debeCambiarClave:!1},vn.forEach(t=>t(be))}};async function eo(n,e){const t=No(Cr.firebase,"secundaria-"+Date.now());try{const r=Uo(t,{persistence:Ds});return(await Yl(r,n,e)).user.uid}catch(r){throw r.code==="auth/email-already-in-use"?new Error("Ese usuario ya existe"):r.code==="auth/weak-password"?new Error("La contraseña debe tener al menos 6 caracteres"):r}finally{Yp(t).catch(()=>{})}}const fn=n=>U(N,"tiendas",n),to={async getTienda(n){const e=await He(fn(n));return e.exists()?e.data():null},watchTienda(n,e){return Le(fn(n),t=>e(t.exists()?t.data():null),()=>e(null))},watchTiendas(n){return Le(de(N,"tiendas"),e=>n(e.docs.map(Ce)))},async existeTienda(n){return(await He(fn(n))).exists()},async crearTienda(n,e,t){if(await to.existeTienda(n))throw new Error("Ya existe una tienda con ese ID");await Xi(t.usuario);const r=_s(t.usuario),s=await eo(r,t.clave),o=dn(N);o.set(fn(n),{...Dc,...e,creada:Date.now()}),o.set(U(N,"usuarios",s),{usuario:t.usuario,rol:"admin",tiendaId:n,debeCambiarClave:!0,creado:Date.now()}),o.set(U(N,"logins",t.usuario),{email:r,uid:s,tiendaId:n}),await o.commit()},async crearUsuarioAdmin(n,e,t,r="admin",s=null){await Xi(e);const o=_s(e),a=await eo(o,t),u=dn(N);u.set(U(N,"usuarios",a),{usuario:e,rol:r,permisos:s,tiendaId:n,debeCambiarClave:!0,creado:Date.now()}),u.set(U(N,"logins",e),{email:o,uid:a,tiendaId:n}),await u.commit()},async resetearClave(n,e){const t=_s(n.usuario),r=await eo(t,e),s=dn(N);s.set(U(N,"usuarios",r),{usuario:n.usuario,rol:n.rol||"admin",permisos:n.permisos||null,tiendaId:n.tiendaId,debeCambiarClave:!0,creado:Date.now()}),s.delete(U(N,"usuarios",n.id)),s.set(U(N,"logins",n.usuario),{email:t,uid:r,tiendaId:n.tiendaId}),await s.commit()},async quitarAcceso(n){const e=dn(N);e.delete(U(N,"usuarios",n.id)),e.delete(U(N,"logins",n.usuario)),await e.commit()},async listUsuarios(n){return(await kE(gs(de(N,"usuarios"),cl("tiendaId","==",n)))).docs.map(Ce)},async actualizarTienda(n,e){await Kt(fn(n),e)},watchProductos(n,e){return Le(de(N,"tiendas",n,"productos"),t=>e(t.docs.map(Ce).sort((r,s)=>(r.orden??0)-(s.orden??0))),()=>e([]))},async guardarProducto(n,e){const{id:t,...r}=e;return t?(await it(U(N,"tiendas",n,"productos",t),r,{merge:!0}),t):(await hn(de(N,"tiendas",n,"productos"),{...r,creado:Date.now(),orden:Date.now()})).id},async borrarProducto(n,e){await It(U(N,"tiendas",n,"productos",e))},async ajustarStock(n,e,t){const r=dn(N);e.forEach(s=>{const o=U(N,"tiendas",n,"productos",s.id);s.stockVar&&s.variante?r.update(o,"stock",sr(t*s.cantidad),new Bn("stockVariantes",s.variante),sr(t*s.cantidad)):s.controlaStock&&r.update(o,{stock:sr(t*s.cantidad)})}),await r.commit()},async crearPedido(n,e){return(await hn(de(N,"tiendas",n,"pedidos"),{...e,estado:"nuevo",creado:fl()})).id},async getPedido(n,e){const t=await He(U(N,"tiendas",n,"pedidos",e));return t.exists()?Zi(Ce(t)):null},watchPedidos(n,e){return Le(gs(de(N,"tiendas",n,"pedidos"),ul("creado","desc"),ll(300)),t=>e(t.docs.map(r=>Zi(Ce(r)))),()=>e([]))},async actualizarPedido(n,e,t){await Kt(U(N,"tiendas",n,"pedidos",e),t)},watchPlanes(n){return Le(de(N,"planes"),e=>n(e.docs.map(Ce).sort((t,r)=>(t.orden??0)-(r.orden??0))))},async guardarPlan(n){const{id:e,...t}=n;e?await it(U(N,"planes",e),t):await hn(de(N,"planes"),t)},async borrarPlan(n){await It(U(N,"planes",n))},watchPagos(n){return Le(gs(de(N,"pagos"),ul("fecha","desc"),ll(500)),e=>n(e.docs.map(Ce)))},async registrarPago(n){await hn(de(N,"pagos"),{...n,fecha:Date.now()})},async actualizarUsuario(n,e){await Kt(U(N,"usuarios",n),e)},watchPedido(n,e,t){return Le(U(N,"tiendas",n,"pedidos",e),r=>t(r.exists()?Zi(Ce(r)):null),()=>t(null))},watchCupones(n,e){return Le(de(N,"tiendas",n,"cupones"),t=>e(t.docs.map(Ce)),()=>e([]))},async guardarCupon(n,e){const{id:t,...r}=e;await it(U(N,"tiendas",n,"cupones",(t||r.codigo).toUpperCase()),r,{merge:!0})},async borrarCupon(n,e){await It(U(N,"tiendas",n,"cupones",e))},async getCupon(n,e){const t=await He(U(N,"tiendas",n,"cupones",e.trim().toUpperCase()));return t.exists()?Ce(t):null},async usarCupon(n,e){try{await Kt(U(N,"tiendas",n,"cupones",e.toUpperCase()),{usos:sr(1)})}catch{}},watchMayoristas(n,e){return Le(de(N,"tiendas",n,"mayoristas"),t=>e(t.docs.map(Ce)),()=>e([]))},async guardarMayorista(n,e,t){await it(U(N,"tiendas",n,"mayoristas",e),t,{merge:!0})},async borrarMayorista(n,e){await It(U(N,"tiendas",n,"mayoristas",e))},async esMayorista(n,e){try{return(await He(U(N,"tiendas",n,"mayoristas",e))).exists()}catch{return!1}},async guardarDispositivo(n,e,t){await it(U(N,"tiendas",n,"dispositivos",e),t,{merge:!0})},async borrarDispositivo(n,e){await It(U(N,"tiendas",n,"dispositivos",e))},async crearVenta(n,e){return(await hn(de(N,"tiendas",n,"pedidos"),{...e,creado:fl()})).id},async crearAviso(n,e){await hn(de(N,"tiendas",n,"avisos"),{...e,creado:Date.now()})},watchAvisos(n,e){return Le(de(N,"tiendas",n,"avisos"),t=>e(t.docs.map(Ce).sort((r,s)=>s.creado-r.creado)),()=>e([]))},async borrarAviso(n,e){await It(U(N,"tiendas",n,"avisos",e))},async guardarCarrito(n,e,t){await it(U(N,"tiendas",n,"carritos",e),{...t,tel:e,actualizado:Date.now()})},async borrarCarrito(n,e){await It(U(N,"tiendas",n,"carritos",e))},watchCarritos(n,e){return Le(de(N,"tiendas",n,"carritos"),t=>e(t.docs.map(Ce).sort((r,s)=>s.actualizado-r.actualizado)),()=>e([]))},async getPuntos(n,e){try{const t=await He(U(N,"tiendas",n,"puntosClientes",e));return t.exists()&&Number(t.data().puntos)||0}catch{return 0}},async sumarPuntos(n,e,t,r){await it(U(N,"tiendas",n,"puntosClientes",e),{puntos:sr(t),nombre:r||"",actualizado:Date.now()},{merge:!0})},watchPuntos(n,e){return Le(de(N,"tiendas",n,"puntosClientes"),t=>e(t.docs.map(Ce)),()=>e([]))},async crearResena(n,e,t){await it(U(N,"tiendas",n,"resenas",e),{...t,visible:!0,creado:Date.now()})},watchResenas(n,e,t=!1){const r=de(N,"tiendas",n,"resenas");return Le(t?r:gs(r,cl("visible","==",!0)),s=>e(s.docs.map(Ce)),()=>e([]))},async actualizarResena(n,e,t){await Kt(U(N,"tiendas",n,"resenas",e),t)},async borrarResena(n,e){await It(U(N,"tiendas",n,"resenas",e))},async subirComprobante(n,e,t){await Kt(U(N,"tiendas",n,"pedidos",e),{comprobante:{img:t,t:Date.now()}})},async registrarTienda({nombre:n,whatsapp:e,usuario:t,clave:r}){const s=await to.getAjustes();if(!s.registroAbierto)throw new Error("El registro no está habilitado");const o=t.trim().toLowerCase();await Xi(o);let a=OE(n);await to.existeTienda(a)&&(a=`${a}-${Math.random().toString(36).slice(2,6)}`);const u=_s(o);let l;try{l=await Yl(We,u,r)}catch(v){throw v.code==="auth/weak-password"?new Error("La contraseña debe tener al menos 6 caracteres"):v}const d=l.user.uid,p=Number(s.diasPrueba)||7,g=dn(N);g.set(fn(a),{...Dc,nombre:n.trim(),whatsapp:e,estado:"activa",plan:{id:"prueba",nombre:"Prueba gratis"},vence:Date.now()+p*864e5,maxProductos:Number(s.maxProductosPrueba)||30,creada:Date.now(),duenoUid:d,origen:"registro"}),g.set(U(N,"usuarios",d),{usuario:o,rol:"admin",tiendaId:a,debeCambiarClave:!1,creado:Date.now()}),g.set(U(N,"logins",o),{email:u,uid:d,tiendaId:a});try{await g.commit()}catch{throw await l.user.delete().catch(()=>{}),new Error("No se pudo crear la tienda. Intentá de nuevo.")}return be=await Va(l.user),vn.forEach(v=>v(be)),a},async getAjustes(){const n=await He(U(N,"ajustes","global"));return n.exists()?n.data():{}},async guardarAjustes(n){await it(U(N,"ajustes","global"),n,{merge:!0})}};export{to as api,UE as auth};
