import{q as i,A as l,Z as g}from"./entry.59f49a22.js";const a="-username",u="-altname",f="-collection",m="referrer";function S(e,t){if(!e)return console.log("No window object in fetchAltname"),null;try{const r=i().expiryUsernames,s=new Date().getTime(),c=e.localStorage.getItem(String(t).toLowerCase()+u);if(!c)return null;const o=JSON.parse(c);return r!=0&&o.stored+r<s?null:o.username?o.username:null}catch(n){return console.log(n),null}}function N(e,t){if(!e)return console.log("No window object in fetchCollection"),null;try{const r=i().expiryCollections,s=new Date().getTime(),c=e.localStorage.getItem(String(t).toLowerCase()+f);if(!c)return null;const o=JSON.parse(c);return r!=0&&o.stored+r<s?null:typeof o=="object"?o:null}catch(n){return console.log(n),null}}function b(e,t){if(!e)return console.log("No window object in fetchUsername"),null;try{const r=i().expiryUsernames,s=new Date().getTime(),c=e.localStorage.getItem(String(t).toLowerCase()+a);if(!c)return null;const o=JSON.parse(c);return r!=0&&o.stored+r<s?null:o.username?o.username:null}catch(n){return console.log(n),null}}function p(e){if(!e)return console.log("No window object in fetchReferrer"),l;try{const t=e.localStorage.getItem(m);return t?g(t)?t:l:l}catch(t){return console.log(t),l}}function h(e,t){const n=b(e,t);return n||S(e,t)}function y(e,t,n){if(!e)return console.log("No window object in storeAltname"),null;const r=new Date().getTime(),s={username:n,stored:r};e.localStorage.setItem(String(t).toLowerCase()+u,JSON.stringify(s))}function C(e,t,n){if(!e)return console.log("No window object in storeCollection"),null;const r=new Date().getTime();n.stored=r,e.localStorage.setItem(String(t).toLowerCase()+f,JSON.stringify(n))}function O(e,t){if(!e)return console.log("No window object in storeReferrer"),null;e.localStorage.setItem(m,t)}function d(e,t,n){if(!e)return console.log("No window object in storeUsername"),null;const r=new Date().getTime(),s={username:n,stored:r};e.localStorage.setItem(String(t).toLowerCase()+a,JSON.stringify(s))}export{h as a,N as b,C as c,y as d,O as e,p as f,d as s};
