/*! For license information please see index.worker.2d40fb98.js.LICENSE.txt */
(()=>{"use strict";var n={497:(n,e,t)=>{n.exports=t.p+"static/media/fuzzy_search_bg.e757e99a917d8d84e301.wasm"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/search/",t.b=self.location+"/../../../",(()=>{const n=Symbol("Comlink.proxy"),e=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),i=Symbol("Comlink.thrown"),a=n=>"object"===typeof n&&null!==n||"function"===typeof n,c=new Map([["proxy",{canHandle:e=>a(e)&&e[n],serialize(n){const{port1:e,port2:t}=new MessageChannel;return _(n,e),[t,[t]]},deserialize(n){return n.start(),l(n,[],e);var e}}],["throw",{canHandle:n=>a(n)&&i in n,serialize(n){let e,{value:t}=n;return e=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[e,[]]},deserialize(n){if(n.isError)throw Object.assign(new Error(n.value.message),n.value);throw n.value}}]]);function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:globalThis,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["*"];t.addEventListener("message",(function a(c){if(!c||!c.data)return;if(!function(n,e){for(const t of n){if(e===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(e))return!0}return!1}(r,c.origin))return void console.warn("Invalid origin '".concat(c.origin,"' for comlink proxy"));const{id:u,type:f,path:b}=Object.assign({path:[]},c.data),g=(c.data.argumentList||[]).map(y);let l;try{const t=b.slice(0,-1).reduce(((n,e)=>n[e]),e),r=b.reduce(((n,e)=>n[e]),e);switch(f){case"GET":l=r;break;case"SET":t[b.slice(-1)[0]]=y(c.data.value),l=!0;break;case"APPLY":l=r.apply(t,g);break;case"CONSTRUCT":l=function(e){return Object.assign(e,{[n]:!0})}(new r(...g));break;case"ENDPOINT":{const{port1:n,port2:t}=new MessageChannel;_(e,t),l=function(n,e){return d.set(n,e),n}(n,[n])}break;case"RELEASE":l=void 0;break;default:return}}catch(w){l={value:w,[i]:0}}Promise.resolve(l).catch((n=>({value:n,[i]:0}))).then((n=>{const[r,i]=p(n);t.postMessage(Object.assign(Object.assign({},r),{id:u}),i),"RELEASE"===f&&(t.removeEventListener("message",a),s(t),o in e&&"function"===typeof e[o]&&e[o]())})).catch((n=>{const[e,r]=p({value:new TypeError("Unserializable return value"),[i]:0});t.postMessage(Object.assign(Object.assign({},e),{id:u}),r)}))})),t.start&&t.start()}function s(n){(function(n){return"MessagePort"===n.constructor.name})(n)&&n.close()}function u(n){if(n)throw new Error("Proxy has been released and is not useable")}function f(n){return h(n,{type:"RELEASE"}).then((()=>{s(n)}))}const b=new WeakMap,g="FinalizationRegistry"in globalThis&&new FinalizationRegistry((n=>{const e=(b.get(n)||0)-1;b.set(n,e),0===e&&f(n)}));function l(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=!1;const i=new Proxy(arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},{get(e,a){if(u(o),a===r)return()=>{!function(n){g&&g.unregister(n)}(i),f(n),o=!0};if("then"===a){if(0===t.length)return{then:()=>i};const e=h(n,{type:"GET",path:t.map((n=>n.toString()))}).then(y);return e.then.bind(e)}return l(n,[...t,a])},set(e,r,i){u(o);const[a,c]=p(i);return h(n,{type:"SET",path:[...t,r].map((n=>n.toString())),value:a},c).then(y)},apply(r,i,a){u(o);const c=t[t.length-1];if(c===e)return h(n,{type:"ENDPOINT"}).then(y);if("bind"===c)return l(n,t.slice(0,-1));const[_,s]=w(a);return h(n,{type:"APPLY",path:t.map((n=>n.toString())),argumentList:_},s).then(y)},construct(e,r){u(o);const[i,a]=w(r);return h(n,{type:"CONSTRUCT",path:t.map((n=>n.toString())),argumentList:i},a).then(y)}});return function(n,e){const t=(b.get(e)||0)+1;b.set(e,t),g&&g.register(n,e,n)}(i,n),i}function w(n){const e=n.map(p);return[e.map((n=>n[0])),(t=e.map((n=>n[1])),Array.prototype.concat.apply([],t))];var t}const d=new WeakMap;function p(n){for(const[e,t]of c)if(t.canHandle(n)){const[r,o]=t.serialize(n);return[{type:"HANDLER",name:e,value:r},o]}return[{type:"RAW",value:n},d.get(n)||[]]}function y(n){switch(n.type){case"HANDLER":return c.get(n.name).deserialize(n.value);case"RAW":return n.value}}function h(n,e,t){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");n.addEventListener("message",(function e(t){t.data&&t.data.id&&t.data.id===o&&(n.removeEventListener("message",e),r(t.data))})),n.start&&n.start(),n.postMessage(Object.assign({id:o},e),t)}))}let m;const v=new Array(128).fill(void 0);function x(n){return v[n]}v.push(void 0,null,!0,!1);let E=v.length;function k(n){const e=x(n);return function(n){n<132||(v[n]=E,E=n)}(n),e}let A=0,S=null;function T(){return null!==S&&0!==S.byteLength||(S=new Uint8Array(m.memory.buffer)),S}const R="undefined"!==typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},O="function"===typeof R.encodeInto?function(n,e){return R.encodeInto(n,e)}:function(n,e){const t=R.encode(n);return e.set(t),{read:n.length,written:t.length}};function j(n,e,t){if(void 0===t){const t=R.encode(n),r=e(t.length,1)>>>0;return T().subarray(r,r+t.length).set(t),A=t.length,r}let r=n.length,o=e(r,1)>>>0;const i=T();let a=0;for(;a<r;a++){const e=n.charCodeAt(a);if(e>127)break;i[o+a]=e}if(a!==r){0!==a&&(n=n.slice(a)),o=t(o,r,r=a+3*n.length,1)>>>0;const e=T().subarray(o+a,o+r);a+=O(n,e).written,o=t(o,r,a,1)>>>0}return A=a,o}function z(n){return void 0===n||null===n}let L=null;function M(){return null!==L&&0!==L.byteLength||(L=new Int32Array(m.memory.buffer)),L}const C="undefined"!==typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};function P(n,e){return n>>>=0,C.decode(T().subarray(n,n+e))}function F(n){E===v.length&&v.push(v.length+1);const e=E;return E=v[e],v[e]=n,e}function I(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return"".concat(n);if("string"==e)return'"'.concat(n,'"');if("symbol"==e){const e=n.description;return null==e?"Symbol":"Symbol(".concat(e,")")}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?"Function(".concat(e,")"):"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=I(n[0]));for(let r=1;r<e;r++)t+=", "+I(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(o){return"Object"}return n instanceof Error?"".concat(n.name,": ").concat(n.message,"\n").concat(n.stack):r}"undefined"!==typeof TextDecoder&&C.decode();const N="undefined"===typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>{m.__wbindgen_export_2.get(n.dtor)(n.a,n.b)}));function W(n,e,t){m.__wbindgen_export_3(n,e,F(t))}let U=null;function D(){return null!==U&&0!==U.byteLength||(U=new Uint32Array(m.memory.buffer)),U}function q(n,e){const t=e(4*n.length,4)>>>0;return D().set(n,t/4),A=n.length,t}function B(n,e){try{return n.apply(this,e)}catch(t){m.__wbindgen_export_5(F(t))}}"undefined"===typeof FinalizationRegistry||new FinalizationRegistry((n=>m.__wbg_searchresult_free(n>>>0)));"undefined"===typeof FinalizationRegistry||new FinalizationRegistry((n=>m.__wbg_wasmbindgentestcontext_free(n>>>0)));function H(){const n={wbg:{}};return n.wbg.__wbindgen_object_drop_ref=function(n){k(n)},n.wbg.__wbindgen_string_get=function(n,e){const t=x(e),r="string"===typeof t?t:void 0;var o=z(r)?0:j(r,m.__wbindgen_export_0,m.__wbindgen_export_1),i=A;M()[n/4+1]=i,M()[n/4+0]=o},n.wbg.__wbindgen_error_new=function(n,e){return F(new Error(P(n,e)))},n.wbg.__wbindgen_number_new=function(n){return F(n)},n.wbg.__wbindgen_bigint_from_u64=function(n){return F(BigInt.asUintN(64,n))},n.wbg.__wbindgen_object_clone_ref=function(n){return F(x(n))},n.wbg.__wbindgen_string_new=function(n,e){return F(P(n,e))},n.wbg.__wbg_set_f975102236d3c502=function(n,e,t){x(n)[k(e)]=k(t)},n.wbg.__wbg_static_accessor_document_d4b6ae7f5578480f=function(){return F(document)},n.wbg.__wbg_getElementById_8458f2a6c28467dc=function(n,e,t){return F(x(n).getElementById(P(e,t)))},n.wbg.__wbg_settextcontent_fc3ff485b96fcb1d=function(n,e,t){x(n).textContent=P(e,t)},n.wbg.__wbg_textcontent_67e4e811cbdf00fc=function(n,e){const t=j(x(e).textContent,m.__wbindgen_export_0,m.__wbindgen_export_1),r=A;M()[n/4+1]=r,M()[n/4+0]=t},n.wbg.__wbg_stack_44743fb7d71926a0=function(n){return F(x(n).stack)},n.wbg.__wbg_self_55106357ec10ecd4=function(n){const e=x(n).self;return z(e)?0:F(e)},n.wbg.__wbg_constructor_fd0d22d60b7dfd72=function(n){return F(x(n).constructor)},n.wbg.__wbg_name_7f439d24ff7ba1d3=function(n,e){const t=j(x(e).name,m.__wbindgen_export_0,m.__wbindgen_export_1),r=A;M()[n/4+1]=r,M()[n/4+0]=t},n.wbg.__wbg_log_28eee4e6432efd24=function(n,e){console.log(P(n,e))},n.wbg.__wbg_stack_17c77e9f5bfe6714=function(n,e){const t=j(x(e).stack,m.__wbindgen_export_0,m.__wbindgen_export_1),r=A;M()[n/4+1]=r,M()[n/4+0]=t},n.wbg.__wbg_wbgtestoutputwriteln_4db3bd64914ec955=function(n){__wbg_test_output_writeln(k(n))},n.wbg.__wbg_stack_436273c21658169b=function(n){return F(x(n).stack)},n.wbg.__wbg_String_55b8bdc4bc243677=function(n,e){const t=j(String(x(e)),m.__wbindgen_export_0,m.__wbindgen_export_1),r=A;M()[n/4+1]=r,M()[n/4+0]=t},n.wbg.__wbg_wbgtestinvoke_8c20f4132af2bded=function(){return B((function(n,e){try{var t={a:n,b:e};__wbg_test_invoke((()=>{const n=t.a;t.a=0;try{return function(n,e){m.__wbindgen_export_4(n,e)}(n,t.b)}finally{t.a=n}}))}finally{t.a=t.b=0}}),arguments)},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return F(new Error)},n.wbg.__wbg_stack_658279fe44541cf6=function(n,e){const t=j(x(e).stack,m.__wbindgen_export_0,m.__wbindgen_export_1),r=A;M()[n/4+1]=r,M()[n/4+0]=t},n.wbg.__wbg_error_f851667af71bcfc6=function(n,e){let t,r;try{t=n,r=e,console.error(P(n,e))}finally{m.__wbindgen_export_6(t,r,1)}},n.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=function(n){return F(x(n).queueMicrotask)},n.wbg.__wbindgen_is_function=function(n){return"function"===typeof x(n)},n.wbg.__wbindgen_cb_drop=function(n){const e=k(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},n.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=function(n){queueMicrotask(x(n))},n.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return B((function(){return F(self.self)}),arguments)},n.wbg.__wbg_window_c6fb939a7f436783=function(){return B((function(){return F(window.window)}),arguments)},n.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return B((function(){return F(globalThis.globalThis)}),arguments)},n.wbg.__wbg_global_207b558942527489=function(){return B((function(){return F(t.g.global)}),arguments)},n.wbg.__wbindgen_is_undefined=function(n){return void 0===x(n)},n.wbg.__wbg_newnoargs_e258087cd0daa0ea=function(n,e){return F(new Function(P(n,e)))},n.wbg.__wbg_call_27c0f87801dedf93=function(){return B((function(n,e){return F(x(n).call(x(e)))}),arguments)},n.wbg.__wbg_new_16b304a2cfa7ff4a=function(){return F(new Array)},n.wbg.__wbg_new_72fb9a18b5ae2624=function(){return F(new Object)},n.wbg.__wbg_set_d4638f722068f043=function(n,e,t){x(n)[e>>>0]=k(t)},n.wbg.__wbg_forEach_2be8de7347d63332=function(n,e,t){try{var r={a:e,b:t};x(n).forEach(((n,e,t)=>{const o=r.a;r.a=0;try{return function(n,e,t,r,o){m.__wbindgen_export_7(n,e,F(t),r,F(o))}(o,r.b,n,e,t)}finally{r.a=o}}))}finally{r.a=r.b=0}},n.wbg.__wbg_message_5bf28016c2b49cfb=function(n){return F(x(n).message)},n.wbg.__wbg_name_e7429f0dda6079e2=function(n){return F(x(n).name)},n.wbg.__wbg_call_b3ca7c6051f9bec1=function(){return B((function(n,e,t){return F(x(n).call(x(e),x(t)))}),arguments)},n.wbg.__wbg_new_81740750da40724f=function(n,e){try{var t={a:n,b:e};const r=new Promise(((n,e)=>{const r=t.a;t.a=0;try{return function(n,e,t,r){m.__wbindgen_export_8(n,e,F(t),F(r))}(r,t.b,n,e)}finally{t.a=r}}));return F(r)}finally{t.a=t.b=0}},n.wbg.__wbg_resolve_b0083a7967828ec8=function(n){return F(Promise.resolve(x(n)))},n.wbg.__wbg_then_0c86a60e8fcfe9f6=function(n,e){return F(x(n).then(x(e)))},n.wbg.__wbindgen_debug_string=function(n,e){const t=j(I(x(e)),m.__wbindgen_export_0,m.__wbindgen_export_1),r=A;M()[n/4+1]=r,M()[n/4+0]=t},n.wbg.__wbindgen_throw=function(n,e){throw new Error(P(n,e))},n.wbg.__wbindgen_closure_wrapper224=function(n,e,t){const r=function(n,e,t,r){const o={a:n,b:e,cnt:1,dtor:t},i=function(){o.cnt++;const n=o.a;o.a=0;try{for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return r(n,o.b,...t)}finally{0===--o.cnt?(m.__wbindgen_export_2.get(o.dtor)(n,o.b),N.unregister(o)):o.a=n}};return i.original=o,N.register(i,o,o),i}(n,e,57,W);return F(r)},n}function Y(n,e){return m=n.exports,G.__wbindgen_wasm_module=e,L=null,U=null,S=null,m}async function G(n){if(void 0!==m)return m;"undefined"===typeof n&&(n=new URL(t(497),t.b));const e=H();("string"===typeof n||"function"===typeof Request&&n instanceof Request||"function"===typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:r,module:o}=await async function(n,e){if("function"===typeof Response&&n instanceof Response){if("function"===typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(t){if("application/wasm"==n.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const r=await n.arrayBuffer();return await WebAssembly.instantiate(r,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,e);return Y(r,o)}const J=G;_(class{constructor(){this.loaded=!1}async init(n,e){var t,r;await J(),t=n,r=e,m.init(t,r),this.loaded=!0}async search(n,e){if(!this.loaded)throw new Error("You need to initialize the worker");return function(n,e){try{const o=m.__wbindgen_add_to_stack_pointer(-16),i=j(n,m.__wbindgen_export_0,m.__wbindgen_export_1),a=A,c=q(e,m.__wbindgen_export_0),_=A;m.search(o,i,a,c,_);var t=M()[o/4+0],r=M()[o/4+1];if(M()[o/4+2])throw k(r);return k(t)}finally{m.__wbindgen_add_to_stack_pointer(16)}}(n,Int32Array.from(e))}async substringSearch(n,e){if(!this.loaded)throw new Error("You need to initialize the worker");return function(n,e){try{const o=m.__wbindgen_add_to_stack_pointer(-16),i=j(n,m.__wbindgen_export_0,m.__wbindgen_export_1),a=A,c=q(e,m.__wbindgen_export_0),_=A;m.substring_search(o,i,a,c,_);var t=M()[o/4+0],r=M()[o/4+1];if(M()[o/4+2])throw k(r);return k(t)}finally{m.__wbindgen_add_to_stack_pointer(16)}}(n,Int32Array.from(e))}})})()})();