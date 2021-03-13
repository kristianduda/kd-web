!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.kd=e():t.kd=e()}(self,(function(){return(()=>{"use strict";var t={129:(t,e,r)=>{r.r(e),r.d(e,{ajax:()=>z,auth:()=>B,getConfig:()=>I,init:()=>U,mail:()=>_,storage:()=>a,store:()=>C});var a={};r.r(a),r.d(a,{getUser:()=>i,removeUser:()=>n,setUser:()=>o});const s="kd-user",i=()=>(s,JSON.parse(sessionStorage.getItem("kd-user"))),o=t=>{var e;e=t,sessionStorage.setItem("kd-user",JSON.stringify(e))},n=()=>{sessionStorage.removeItem("kd-user")},u=[],c={limit:1e3,skip:0},w={field:"_id",dir:"asc"},h=[],f=()=>{var t=i();return{Accept:"application/json","Content-Type":"application/json",Authorization:t?`Bearer  ${t.token}`:null}},d=async t=>{const e=`${t.url.auth}/api/User/refresh`,r=i(),a=r?r.refreshToken:t.key,s=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`}});if(200===s.status){const t=await s.json();return t.refreshToken=a,o(t),!0}return n(),!1},p=async(t,e,r)=>{const a=`${e}/${r}`,s=await fetch(a,{headers:f()});if(200===s.status)return await s.json();if(404===s.status)return null;if(401===s.status&&await d(t))return await p(t,e,r);throw new Error(s.statusText)},l=async(t,e,r=u,a=w,s=c,i=h)=>{const o=`${e}?filters=${JSON.stringify(r)}&page=${JSON.stringify(s)}&sort=${JSON.stringify(a)}&fields=${JSON.stringify(i)}`,n=await fetch(o,{headers:f()});if(200===n.status){const t=await n.json();return t.filters=r,t.sort=a,t.page=s,t.fields=i,t}if(401===n.status&&await d(t))return await l(t,e,r,a,s,i);throw new Error(n.statusText)},y=async(t,e,r,a)=>{const s=`${e}/${a}`,i=await fetch(s,{method:"PUT",headers:f(),body:JSON.stringify(r)});if(200===i.status)return await i.json();if(401===i.status&&await d(t))return await y(t,e,r,a);throw new Error(i.statusText)},g=async(t,e,r)=>{const a=`${e}`,s=await fetch(a,{method:"POST",headers:f(),body:JSON.stringify(r)});if(200===s.status)return await s.json();if(401===s.status&&await d(t))return await g(t,e,r);throw new Error(s.statusText)},$=async(t,e,r)=>{const a=`${e}/${r}`,s=await fetch(a,{method:"DELETE",headers:f()});if(200===s.status);else{if(401!==s.status||!await d(t))throw new Error(s.statusText);await $(t,e,r)}},T=async(t,e,r)=>{const a=`${e}?filters=${JSON.stringify(r)}`,s=await fetch(a,{method:"DELETE",headers:f()});if(200!==s.status){if(401===s.status&&await d(t))return await T(t,e,r);throw new Error(s.statusText)}},S=async(t,e)=>{const r=`${t.url.store}/api/file`,a=new FormData;a.append("file",e);const s=await fetch(r,{method:"POST",headers:{Authorization:"Bearer "+i().token},body:a});if(200===s.status)return await s.json();if(401===s.status&&await d(t))return await S(t,e);throw new Error(s.statusText)},b=async(t,e)=>{const r="file/"+e,a=await caches.open("kd-cache"),s=await a.match(r);if(s)return await s.blob();const o=`${t.url.store}/api/file/${e}`,n=await fetch(o,{method:"GET",headers:{Authorization:"Bearer "+i().token}});if(200===n.status)return a.put(r,n.clone()),await n.blob();if(401===n.status&&await d(t))return await b(t,e);throw new Error(n.statusText)},O=async(t,e)=>{const r=`${t.url.store}/api/file/${e}`,a=await fetch(r,{method:"DELETE",headers:{Authorization:"Bearer "+i().token}});if(200===a.status);else{if(401!==a.status||!await d(t))throw new Error(a.statusText);await O(t,e)}},m=async(t,e,r,a=u,s=w,i=c)=>{const o=`${t.url.store}/api/store/${e}/aggregation?group=${JSON.stringify(r)}&filters=${JSON.stringify(a)}&sort=${JSON.stringify(s)}&page=${JSON.stringify(i)}`,n=await fetch(o,{headers:f()});if(200===n.status)return await n.json();if(401===n.status&&await d(t))return await m(t,e,r,a,s);throw new Error(n.statusText)},j=async(t,e,r,a)=>{const s=`${t.url.auth}/api/user/oauth`,i=await fetch(s,{method:"PUT",headers:f(),body:JSON.stringify({provider:e,code:r,redirect_uri:a})});if(200===i.status)return await i.json();if(401===i.status&&await d(t))return await j(t,e,r,a);throw new Error(i.statusText)},E=async t=>{const e=`${t.url.auth}/api/user/secret`,r=await fetch(e,{method:"POST",headers:f()});if(200===r.status)return await r.json();if(401===r.status&&await d(t))return await E(t);throw new Error(r.statusText)},x=async(t,e)=>{const r=`${t.url.auth}/api/user/sign?withQrCode=true`,a=await fetch(r,{method:"POST",headers:f(),body:JSON.stringify({data:e})});if(200===a.status)return await a.json();if(401===a.status&&await d(t))return await x(t,e);throw new Error(a.statusText)},N=async(t,e,r)=>{const a=`${t.url.auth}/api/user/verify`,s=await fetch(a,{method:"POST",headers:f(),body:JSON.stringify({data:e,signature:r})});if(200===s.status)return!0;if(400===s.status)return!1;if(401===s.status&&await d(t))return await N(t,e,r);throw new Error(s.statusText)},k=async(t,e,r={field:"name",dir:"asc"},a=c)=>{const s=`${t.url.auth}/api/user?filters=${JSON.stringify(e)}&page=${JSON.stringify(a)}&sort=${JSON.stringify(r)}`,i=await fetch(s,{headers:f()});if(200===i.status)return await i.json();if(401===i.status&&await d(t))return await k(t,e,r,a);throw new Error(i.statusText)},J=async(t,e)=>{const r=`${t.url.auth}/api/user/${e}`,a=await fetch(r,{headers:f()});if(200===a.status)return await a.json();if(404===a.status)return null;if(401===a.status&&await d(t))return await J(t,e);throw new Error(a.statusText)},P=async(t,e,r)=>{const a=`${t.url.auth}/api/user/${e}`,s=await fetch(a,{method:"PUT",headers:f(),body:JSON.stringify(r)});if(200===s.status){const t=await s.json(),e=i();return o({...t,token:e.token,refreshToken:e.refreshToken}),t}if(401===s.status&&await d(t))return await P(t,e,r);throw new Error(s.statusText)},A={url:{store:"https://stored.azurewebsites.net",auth:"https://storeauth.azurewebsites.net",mail:"https://storemail.azurewebsites.net"},key:null};let v=A;const U=t=>{v={...A,...t}},I=()=>v,C={postFile:t=>S(v,t),getFile:t=>b(v,t),delFile:t=>O(v,t),getById:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return p(t,a,r)})(v,t,e),get:(t,e,r,a,s)=>((t,e,r=u,a=w,s=c,i=h)=>{const o=`${t.url.store}/api/store/${e}`;return l(t,o,r,a,s,i)})(v,t,e,r,a,s),put:(t,e,r)=>((t,e,r,a)=>{const s=`${t.url.store}/api/store/${e}`;return y(t,s,r,a)})(v,t,e,r),post:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return g(t,a,r)})(v,t,e),delById:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return $(t,a,r)})(v,t,e),del:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return T(t,a,r)})(v,t,e),aggregation:(t,e,r,a,s)=>m(v,t,e,r,a,s),getLocation:()=>new Promise(((t,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{const r={type:"Point",coordinates:[e.coords.latitude,e.coords.longitude]};t(r)}),(t=>{let r;switch(t.code){case t.PERMISSION_DENIED:r="User denied the request for Geolocation.";break;case t.POSITION_UNAVAILABLE:r="Location information is unavailable.";break;case t.TIMEOUT:r="The request to get user location timed out.";break;case t.UNKNOWN_ERROR:default:r="An unknown error occurred."}e(new Error(r))})):e("Geolocation is not supported by this browser.")}))},B={auth:(t,e,r)=>(async(t,e,r,a="")=>{const s=`${t.url.auth}/api/user/auth`,i=await fetch(s,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:r,token:a})});if(200===i.status){const t=await i.json();return o(t),t}if(401===i.status)return null;throw new Error(i.statusText)})(v,t,e,r),oAuth:(t,e,r,a)=>(async(t,e,r,a,s=null)=>{const i=`${t.url.auth}/api/user/oauth`,n=await fetch(i,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({provider:e,code:r,redirect_uri:a,config:s})});if(200===n.status){const t=await n.json();return o(t),t}if(401===n.status)return null;throw new Error(n.statusText)})(v,t,e,r,a),reset:(t,e)=>(async(t,e,r)=>{const a=`${t.url.auth}/api/user/reset`,s=await fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,redirectUri:r})});if(200!==s.status)throw new Error(s.statusText)})(v,t,e),updateOauth:(t,e,r)=>j(v,t,e,r),generateSecret:()=>E(v),sign:t=>x(v,t),verify:(t,e)=>N(v,t,e),getUsers:(t,e,r)=>k(v,t,e,r),getUserCached:t=>(async(t,e)=>{const r="user/"+e,a=await caches.open("kd-cache"),s=await a.match(r);if(s)return await s.json();const i=`${t.url.auth}/api/user/${e}`,o=await fetch(i,{headers:f()});if(200===o.status)return a.put(r,o.clone()),await o.json();if(404===o.status)return null;if(401===o.status&&await d(t))return await J(t,e);throw new Error(o.statusText)})(v,t),getUser:t=>J(v,t),updateUser:(t,e)=>P(v,t,e),register:t=>(async(t,e)=>{const r=`${t.url.auth}/api/user`,a=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});if(200===a.status)return await a.json();throw new Error(a.statusText)})(v,t),checkUser:t=>(async(t,e)=>{const r=`${t.url.auth}/api/user/check?username=${e}`,a=await fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"}});if(200===a.status)return await a.json();throw new Error(a.statusText)})(v,t),subscribe:t=>(async(t,e)=>{const r=`${t.url.auth}/api/subscriber`,a=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});if(200===a.status)return await a.json();throw new Error(a.statusText)})(v,t),getSubscribers:(t,e,r)=>((t,e=u,r=w,a=c)=>{const s=`${t.url.auth}/api/subscriber`;return l(t,s,e,r,a,h)})(v,t,e,r),getSubscriber:t=>((t,e)=>{const r=`${t.url.auth}/api/subscriber`;return p(t,r,e)})(v,t)},z={getById:(t,e)=>p(v,t,e),get:(t,e,r,a,s)=>l(v,t,e,r,a,s),put:(t,e,r)=>y(v,t,e,r),post:(t,e)=>g(v,t,e),delById:(t,e)=>$(v,t,e),del:(t,e)=>T(v,t,e)},_={send:t=>((t,e)=>{const r=`${t.url.mail}/api/mail`;return g(t,r,e)})(v,t)}}},e={};function r(a){if(e[a])return e[a].exports;var s=e[a]={exports:{}};return t[a](s,s.exports,r),s.exports}return r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(129)})()}));