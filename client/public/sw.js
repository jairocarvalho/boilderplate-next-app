if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,t)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=t(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Rgslu82rryop9vG8uCegB/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/Rgslu82rryop9vG8uCegB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/Rgslu82rryop9vG8uCegB/pages/_app.js",revision:"959b4cfba536ccf9a807e27da097ba16"},{url:"/_next/static/Rgslu82rryop9vG8uCegB/pages/_error.js",revision:"e8d6ef586da259ada3e1086fe5aeda95"},{url:"/_next/static/Rgslu82rryop9vG8uCegB/pages/index.js",revision:"3d808f7381397c8dc8e409ada2511eae"},{url:"/_next/static/chunks/709a7288f175ad6b860a5275270b9d29099e2fa2.d19c24717b8e83b7743f.js",revision:"7ac7c6c088ce73b594d03fd9d672b2bc"},{url:"/_next/static/chunks/f4c633866db6a18f61169a99d3abf32247453a18.58e90d8c4b4ce1ae9cb5.js",revision:"5bbf71a5cd4692e1dc6fda656d3a9f73"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/runtime/main-615208b61de4c921b073.js",revision:"7238a9a37b7fca5e070d3be0a7d07bcc"},{url:"/_next/static/runtime/polyfills-788051cc5ba9cb123111.js",revision:"a0ea5f96a4be5b35ba9bd515ec22017d"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/hero-illustration.svg",revision:"61a4c6858f159127641cd8cee0815527"},{url:"/img/logo.svg",revision:"ee61ca49ec2188e4ac026017e8b315b7"},{url:"/manifest.json",revision:"1365a5fad80c5a4b09cd759cff5f607d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));