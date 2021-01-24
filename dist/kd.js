!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.kd=e():t.kd=e()}(self,(function(){return(()=>{"use strict";var t={368:(t,e,r)=>{r.r(e),r.d(e,{ajax:()=>z,auth:()=>_,getConfig:()=>C,init:()=>I,storage:()=>a,store:()=>B});var a={};r.r(a),r.d(a,{getUser:()=>o,removeUser:()=>n,setUser:()=>i});const s="kd-user",o=()=>(s,JSON.parse(sessionStorage.getItem("kd-user"))),i=t=>{var e;e=t,sessionStorage.setItem("kd-user",JSON.stringify(e))},n=()=>{sessionStorage.removeItem("kd-user")},u=[],c={limit:1e3,skip:0},f={field:"_id",dir:"asc"},w=[],h=()=>{var t=o();return{Accept:"application/json","Content-Type":"application/json",Authorization:t?`Bearer  ${t.token}`:null}},d=async t=>{const e=`${t.url.auth}/api/User/refresh`,r=o(),a=r?r.refreshToken:t.key,s=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`}});if(200===s.status){const t=await s.json();return t.refreshToken=a,i(t),!0}return n(),!1},p=async(t,e,r)=>{const a=`${e}/${r}`,s=await fetch(a,{headers:h()});if(200===s.status)return await s.json();if(404===s.status)return null;if(401===s.status&&await d(t))return await p(t,e,r);throw new Error(s.statusText)},l=async(t,e,r=u,a=f,s=c,o=w)=>{const i=`${e}?filters=${JSON.stringify(r)}&page=${JSON.stringify(s)}&sort=${JSON.stringify(a)}&fields=${JSON.stringify(o)}`,n=await fetch(i,{headers:h()});if(200===n.status){const t=await n.json();return t.filters=r,t.sort=a,t.page=s,t.fields=o,t}if(401===n.status&&await d(t))return await l(t,e,r,a,s,o);throw new Error(n.statusText)},y=async(t,e,r,a)=>{const s=`${e}/${a}`,o=await fetch(s,{method:"PUT",headers:h(),body:JSON.stringify(r)});if(200===o.status)return await o.json();if(401===o.status&&await d(t))return await y(t,e,r,a);throw new Error(o.statusText)},g=async(t,e,r)=>{const a=`${e}`,s=await fetch(a,{method:"POST",headers:h(),body:JSON.stringify(r)});if(200===s.status)return await s.json();if(401===s.status&&await d(t))return await g(t,e,r);throw new Error(s.statusText)},$=async(t,e,r)=>{const a=`${e}/${r}`,s=await fetch(a,{method:"DELETE",headers:h()});if(200===s.status);else{if(401!==s.status||!await d(t))throw new Error(s.statusText);await $(t,e,r)}},T=async(t,e,r)=>{const a=`${e}?filters=${JSON.stringify(r)}`,s=await fetch(a,{method:"DELETE",headers:h()});if(200!==s.status){if(401===s.status&&await d(t))return await T(t,e,r);throw new Error(s.statusText)}},O=async(t,e)=>{const r=`${t.url.store}/api/file`,a=new FormData;a.append("file",e);const s=await fetch(r,{method:"POST",headers:{Authorization:"Bearer "+o().token},body:a});if(200===s.status)return await s.json();if(401===s.status&&await d(t))return await O(t,e);throw new Error(s.statusText)},S=async(t,e)=>{const r=`${t.url.store}/api/file/${e}`,a=await fetch(r,{method:"GET",headers:{Authorization:"Bearer "+o().token}});if(200===a.status)return await a.blob();if(401===a.status&&await d(t))return await S(t,e);throw new Error(a.statusText)},j=async(t,e)=>{const r=`${t.url.store}/api/file/${e}`,a=await fetch(r,{method:"DELETE",headers:{Authorization:"Bearer "+o().token}});if(200===a.status);else{if(401!==a.status||!await d(t))throw new Error(a.statusText);await j(t,e)}},E=async(t,e,r,a=u,s=f,o=c)=>{const i=`${t.url.store}/api/store/${e}/aggregation?group=${JSON.stringify(r)}&filters=${JSON.stringify(a)}&sort=${JSON.stringify(s)}&page=${JSON.stringify(o)}`,n=await fetch(i,{headers:h()});if(200===n.status)return await n.json();if(401===n.status&&await d(t))return await E(t,e,r,a,s);throw new Error(n.statusText)},m=async(t,e,r,a)=>{const s=`${t.url.auth}/api/user/oauth`,o=await fetch(s,{method:"PUT",headers:h(),body:JSON.stringify({provider:e,code:r,redirect_uri:a})});if(200===o.status)return await o.json();if(401===o.status&&await d(t))return await m(t,e,r,a);throw new Error(o.statusText)},b=async t=>{const e=`${t.url.auth}/api/user/secret`,r=await fetch(e,{method:"POST",headers:h()});if(200===r.status)return await r.json();if(401===r.status&&await d(t))return await b(t);throw new Error(r.statusText)},x=async(t,e)=>{const r=`${t.url.auth}/api/user/sign?withQrCode=true`,a=await fetch(r,{method:"POST",headers:h(),body:JSON.stringify({data:e})});if(200===a.status)return await a.json();if(401===a.status&&await d(t))return await x(t,e);throw new Error(a.statusText)},N=async(t,e,r)=>{const a=`${t.url.auth}/api/user/verify`,s=await fetch(a,{method:"POST",headers:h(),body:JSON.stringify({data:e,signature:r})});if(200===s.status)return!0;if(400===s.status)return!1;if(401===s.status&&await d(t))return await N(t,e,r);throw new Error(s.statusText)},k=async(t,e,r={field:"name",dir:"asc"},a=c)=>{const s=`${t.url.auth}/api/user?filters=${JSON.stringify(e)}&page=${JSON.stringify(a)}&sort=${JSON.stringify(r)}`,o=await fetch(s,{headers:h()});if(200===o.status)return await o.json();if(401===o.status&&await d(t))return await k(t,e,r,a);throw new Error(o.statusText)},J={},P=async(t,e)=>{const r=`${t.url.auth}/api/user/${e}`,a=await fetch(r,{headers:h()});if(200===a.status)return await a.json();if(404===a.status)return null;if(401===a.status&&await d(t))return await P(t,e);throw new Error(a.statusText)},v=async(t,e,r)=>{const a=`${t.url.auth}/api/user/${e}`,s=await fetch(a,{method:"PUT",headers:h(),body:JSON.stringify(r)});if(200===s.status){const t=await s.json(),e=o();return i({...t,token:e.token,refreshToken:e.refreshToken}),t}if(401===s.status&&await d(t))return await v(t,e,r);throw new Error(s.statusText)},A={url:{store:"https://stored.azurewebsites.net",auth:"https://storeauth.azurewebsites.net"},key:null};let U=A;const I=t=>{U={...A,...t}},C=()=>U,B={postFile:t=>O(U,t),getFile:t=>S(U,t),delFile:t=>j(U,t),getById:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return p(t,a,r)})(U,t,e),get:(t,e,r,a,s)=>((t,e,r=u,a=f,s=c,o=w)=>{const i=`${t.url.store}/api/store/${e}`;return l(t,i,r,a,s,o)})(U,t,e,r,a,s),put:(t,e,r)=>((t,e,r,a)=>{const s=`${t.url.store}/api/store/${e}`;return y(t,s,r,a)})(U,t,e,r),post:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return g(t,a,r)})(U,t,e),delById:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return $(t,a,r)})(U,t,e),del:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return T(t,a,r)})(U,t,e),aggregation:(t,e,r,a,s)=>E(U,t,e,r,a,s),getLocation:()=>new Promise(((t,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{const r={type:"Point",coordinates:[e.coords.latitude,e.coords.longitude]};t(r)}),(t=>{let r;switch(t.code){case t.PERMISSION_DENIED:r="User denied the request for Geolocation.";break;case t.POSITION_UNAVAILABLE:r="Location information is unavailable.";break;case t.TIMEOUT:r="The request to get user location timed out.";break;case t.UNKNOWN_ERROR:default:r="An unknown error occurred."}e(new Error(r))})):e("Geolocation is not supported by this browser.")}))},_={auth:(t,e,r)=>(async(t,e,r,a="")=>{const s=`${t.url.auth}/api/user/auth`,o=await fetch(s,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:r,token:a})});if(200===o.status){const t=await o.json();return i(t),t}if(401===o.status)return null;throw new Error(o.statusText)})(U,t,e,r),oAuth:(t,e,r,a)=>(async(t,e,r,a,s=null)=>{const o=`${t.url.auth}/api/user/oauth`,n=await fetch(o,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({provider:e,code:r,redirect_uri:a,config:s})});if(200===n.status){const t=await n.json();return i(t),t}if(401===n.status)return null;throw new Error(n.statusText)})(U,t,e,r,a),reset:(t,e)=>(async(t,e,r)=>{const a=`${t.url.auth}/api/user/reset`,s=await fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,redirectUri:r})});if(200!==s.status)throw new Error(s.statusText)})(U,t,e),updateOauth:(t,e,r)=>m(U,t,e,r),generateSecret:()=>b(U),sign:t=>x(U,t),verify:(t,e)=>N(U,t,e),getUsers:(t,e,r)=>k(U,t,e,r),getUserCached:t=>(async(t,e)=>{try{return J[e]||(J[e]=await P(t,e)),J[e]}catch(t){throw t}})(U,t),getUser:t=>P(U,t),updateUser:(t,e)=>v(U,t,e),register:t=>(async(t,e)=>{const r=`${t.url.auth}/api/user`,a=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});if(200===a.status)return await a.json();throw new Error(a.statusText)})(U,t),checkUser:t=>(async(t,e)=>{const r=`${t.url.auth}/api/user/check?username=${e}`,a=await fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"}});if(200===a.status)return await a.json();throw new Error(a.statusText)})(U,t)},z={getById:(t,e)=>p(U,t,e),get:(t,e,r,a,s)=>l(U,t,e,r,a,s),put:(t,e,r)=>y(U,t,e,r),post:(t,e)=>g(U,t,e),delById:(t,e)=>$(U,t,e),del:(t,e)=>T(U,t,e)}}},e={};function r(a){if(e[a])return e[a].exports;var s=e[a]={exports:{}};return t[a](s,s.exports,r),s.exports}return r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(368)})()}));