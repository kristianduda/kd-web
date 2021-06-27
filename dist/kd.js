!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.kd=e():t.kd=e()}(self,(function(){return(()=>{"use strict";var t={129:(t,e,r)=>{r.r(e),r.d(e,{ajax:()=>B,auth:()=>C,getConfig:()=>v,init:()=>U,mail:()=>z,storage:()=>a,store:()=>I});var a={};r.r(a),r.d(a,{getUser:()=>i,removeUser:()=>n,setUser:()=>o});const s="kd-user",i=()=>(s,JSON.parse(sessionStorage.getItem("kd-user"))),o=t=>{var e;e=t,sessionStorage.setItem("kd-user",JSON.stringify(e))},n=()=>{sessionStorage.removeItem("kd-user")},u=[],c={limit:1e3,skip:0},h={field:"_id",dir:"asc"},w=[],f=()=>{var t=i();return{Accept:"application/json","Content-Type":"application/json",Authorization:t?`Bearer  ${t.token}`:null}},l=async t=>{const e=`${t.url.auth}/api/User/refresh`,r=i(),a=r?r.refreshToken:t.key,s=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`}});if(200===s.status){const t=await s.json();return t.refreshToken=a,o(t),!0}return n(),!1},p=t=>new URLSearchParams(t).toString(),d=async(t,e,r,a)=>{const s=`${e}/${r}?${p(a)}`,i=await fetch(s,{headers:f()});if(200===i.status)return await i.json();if(404===i.status)return null;if(401===i.status&&await l(t))return await d(t,e,r,a);throw new Error(i.statusText)},y=async(t,e,r=u,a=h,s=c,i=w,o)=>{const n=`${e}?filters=${JSON.stringify(r)}&page=${JSON.stringify(s)}&sort=${JSON.stringify(a)}&fields=${JSON.stringify(i)}&${p(o)}`,d=await fetch(n,{headers:f()});if(200===d.status){const t=await d.json();return t.filters=r,t.sort=a,t.page=s,t.fields=i,t}if(401===d.status&&await l(t))return await y(t,e,r,a,s,i,o);throw new Error(d.statusText)},$=async(t,e,r,a,s)=>{const i=`${e}/${a}?${p(s)}`,o=await fetch(i,{method:"PUT",headers:f(),body:JSON.stringify(r)});if(200===o.status)return await o.json();if(401===o.status&&await l(t))return await $(t,e,r,a,s);throw new Error(o.statusText)},g=async(t,e,r,a)=>{const s=`${e}?${p(a)}`,i=await fetch(s,{method:"POST",headers:f(),body:JSON.stringify(r)});if(200===i.status)return await i.json();if(401===i.status&&await l(t))return await g(t,e,r,a);throw new Error(i.statusText)},T=async(t,e,r,a=!0,s)=>{const o=`${e}/${r}?${p(s)}`;let n;if(a&&caches){n=await caches.open("kd-cache");const t=await n.match(o);if(t)return await t.blob()}const u=await fetch(o,{method:"GET",headers:{Authorization:"Bearer "+(c=i(),c?c.token:null)}});var c;if(200===u.status)return a&&caches&&n.put(o,u.clone()),await u.blob();if(401===u.status&&await l(t))return await T(t,e,r,a,s);throw new Error(u.statusText)},m=async(t,e,r,a)=>{const s=`${e}/${r}?${p(a)}`,i=await fetch(s,{method:"DELETE",headers:f()});if(200===i.status);else{if(401!==i.status||!await l(t))throw new Error(i.statusText);await m(t,e,r,a)}},S=async(t,e,r,a)=>{const s=`${e}?filters=${JSON.stringify(r)}&${p(a)}`,i=await fetch(s,{method:"DELETE",headers:f()});if(200!==i.status){if(401===i.status&&await l(t))return await S(t,e,r,a);throw new Error(i.statusText)}},b=async(t,e)=>{const r=`${t.url.store}/api/file`,a=new FormData;a.append("file",e);const s=await fetch(r,{method:"POST",headers:{Authorization:"Bearer "+i().token},body:a});if(200===s.status)return await s.json();if(401===s.status&&await l(t))return await b(t,e);throw new Error(s.statusText)},O=async(t,e)=>{const r=`${t.url.store}/api/file/${e}`,a=await fetch(r,{method:"DELETE",headers:{Authorization:"Bearer "+i().token}});if(200===a.status);else{if(401!==a.status||!await l(t))throw new Error(a.statusText);await O(t,e)}},j=async(t,e,r,a=u,s=h,i=c)=>{const o=`${t.url.store}/api/store/${e}/aggregation?group=${JSON.stringify(r)}&filters=${JSON.stringify(a)}&sort=${JSON.stringify(s)}&page=${JSON.stringify(i)}`,n=await fetch(o,{headers:f()});if(200===n.status)return await n.json();if(401===n.status&&await l(t))return await j(t,e,r,a,s);throw new Error(n.statusText)},E=async(t,e,r,a)=>{const s=`${t.url.auth}/api/user/oauth`,i=await fetch(s,{method:"PUT",headers:f(),body:JSON.stringify({provider:e,code:r,redirect_uri:a})});if(200===i.status)return await i.json();if(401===i.status&&await l(t))return await E(t,e,r,a);throw new Error(i.statusText)},x=async t=>{const e=`${t.url.auth}/api/user/secret`,r=await fetch(e,{method:"POST",headers:f()});if(200===r.status)return await r.json();if(401===r.status&&await l(t))return await x(t);throw new Error(r.statusText)},N=async(t,e,r={field:"name",dir:"asc"},a=c)=>{const s=`${t.url.auth}/api/user?filters=${JSON.stringify(e)}&page=${JSON.stringify(a)}&sort=${JSON.stringify(r)}`,i=await fetch(s,{headers:f()});if(200===i.status)return await i.json();if(401===i.status&&await l(t))return await N(t,e,r,a);throw new Error(i.statusText)},k=async(t,e)=>{const r=`${t.url.auth}/api/user/${e}`,a=await fetch(r,{headers:f()});if(200===a.status)return await a.json();if(404===a.status)return null;if(401===a.status&&await l(t))return await k(t,e);throw new Error(a.statusText)},J=async(t,e,r)=>{const a=`${t.url.auth}/api/user/${e}`,s=await fetch(a,{method:"PUT",headers:f(),body:JSON.stringify(r)});if(200===s.status){const t=await s.json(),e=i();return o({...t,token:e.token,refreshToken:e.refreshToken}),t}if(401===s.status&&await l(t))return await J(t,e,r);throw new Error(s.statusText)},P={url:{store:"https://stored.azurewebsites.net",auth:"https://storeauth.azurewebsites.net",mail:"https://storemail.azurewebsites.net"},key:null};let A=P;const U=t=>{A={...P,...t}},v=()=>A,I={postFile:t=>b(A,t),getFile:(t,e)=>((t,e,r=!0)=>{const a=`${t.url.store}/api/file`;return T(t,a,e,r)})(A,t,e),delFile:t=>O(A,t),getById:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return d(t,a,r)})(A,t,e),get:(t,e,r,a,s)=>((t,e,r=u,a=h,s=c,i=w)=>{const o=`${t.url.store}/api/store/${e}`;return y(t,o,r,a,s,i)})(A,t,e,r,a,s),put:(t,e,r)=>((t,e,r,a)=>{const s=`${t.url.store}/api/store/${e}`;return $(t,s,r,a)})(A,t,e,r),post:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return g(t,a,r)})(A,t,e),delById:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return m(t,a,r)})(A,t,e),del:(t,e)=>((t,e,r)=>{const a=`${t.url.store}/api/store/${e}`;return S(t,a,r)})(A,t,e),aggregation:(t,e,r,a,s)=>j(A,t,e,r,a,s),getLocation:()=>new Promise(((t,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{const r={type:"Point",coordinates:[e.coords.latitude,e.coords.longitude]};t(r)}),(t=>{let r;switch(t.code){case t.PERMISSION_DENIED:r="User denied the request for Geolocation.";break;case t.POSITION_UNAVAILABLE:r="Location information is unavailable.";break;case t.TIMEOUT:r="The request to get user location timed out.";break;case t.UNKNOWN_ERROR:default:r="An unknown error occurred."}e(new Error(r))})):e("Geolocation is not supported by this browser.")}))},C={auth:(t,e,r)=>(async(t,e,r,a="")=>{const s=`${t.url.auth}/api/user/auth`,i=await fetch(s,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e,password:r,token:a})});if(200===i.status){const t=await i.json();return o(t),t}if(401===i.status)return null;throw new Error(i.statusText)})(A,t,e,r),oAuth:(t,e,r,a)=>(async(t,e,r,a,s=null)=>{const i=`${t.url.auth}/api/user/oauth`,n=await fetch(i,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({provider:e,code:r,redirect_uri:a,config:s})});if(200===n.status){const t=await n.json();return o(t),t}if(401===n.status)return null;throw new Error(n.statusText)})(A,t,e,r,a),reset:t=>(async(t,e)=>{const r=`${t.url.auth}/api/user/reset`,a=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});if(200!==a.status)throw new Error(a.statusText)})(A,t),updateOauth:(t,e,r)=>E(A,t,e,r),generateSecret:()=>x(A),getUsers:(t,e,r)=>N(A,t,e,r),getUserCached:t=>(async(t,e)=>{const r="user/"+e,a=await caches.open("kd-cache"),s=await a.match(r);if(s)return await s.json();const i=`${t.url.auth}/api/user/${e}`,o=await fetch(i,{headers:f()});if(200===o.status)return a.put(r,o.clone()),await o.json();if(404===o.status)return null;if(401===o.status&&await l(t))return await k(t,e);throw new Error(o.statusText)})(A,t),getUser:t=>k(A,t),updateUser:(t,e)=>J(A,t,e),register:t=>(async(t,e)=>{const r=`${t.url.auth}/api/user`,a=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});if(200===a.status)return await a.json();throw new Error(a.statusText)})(A,t),checkUser:t=>(async(t,e)=>{const r=`${t.url.auth}/api/user/check?username=${e}`,a=await fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"}});if(200===a.status)return await a.json();throw new Error(a.statusText)})(A,t),subscribe:t=>(async(t,e)=>{const r=`${t.url.auth}/api/subscriber`,a=await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});if(200===a.status)return await a.json();throw new Error(a.statusText)})(A,t),getSubscribers:(t,e,r)=>((t,e=u,r=h,a=c)=>{const s=`${t.url.auth}/api/subscriber`;return y(t,s,e,r,a,w)})(A,t,e,r),getSubscriber:t=>((t,e)=>{const r=`${t.url.auth}/api/subscriber`;return d(t,r,e)})(A,t)},B={getById:(t,e,r)=>d(A,t,e,r),get:(t,e,r,a,s,i)=>y(A,t,e,r,a,s,i),put:(t,e,r,a)=>$(A,t,e,r,a),post:(t,e,r)=>g(A,t,e,r),delById:(t,e,r)=>m(A,t,e,r),del:(t,e,r)=>S(A,t,e,r),getFile:(t,e,r,a)=>T(A,t,e,r,a)},z={send:t=>((t,e)=>{const r=`${t.url.mail}/api/mail`;return g(t,r,e)})(A,t),get:(t,e,r)=>(async(t,e=u,r=h,a=c)=>{const s=`${t.url.mail}/api/mail`;return y(t,s,e,r,a)})(A,t,e,r),read:t=>((t,e)=>{const r=`${t.url.mail}/api/mail/read`;return g(t,r,{},{id:e})})(A,t)}}},e={};function r(a){if(e[a])return e[a].exports;var s=e[a]={exports:{}};return t[a](s,s.exports,r),s.exports}return r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(129)})()}));