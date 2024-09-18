import{u as L}from"./site.a4aced12.js";import{a as x,a0 as k,o as f,b as c,f as s,m as g,i as S,H as N,t as v,F as C,e as K,E as B,G as z,r as G}from"./entry.ff62ed4d.js";function y(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?y=function(t){return typeof t}:y=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(i)}function j(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function w(i,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function V(i,t,e){return t&&w(i.prototype,t),e&&w(i,e),i}function R(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function E(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),e.push.apply(e,r)}return e}function h(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?E(Object(e),!0).forEach(function(r){R(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}var q="2.0.0",d={MANDATORY_INITIALIZATION_MISSING:{message:"Missing urlEndpoint during SDK initialization",help:""},INVALID_TRANSFORMATION_POSITION:{message:"Invalid transformationPosition parameter",help:""},PRIVATE_KEY_CLIENT_SIDE:{message:"privateKey should not be passed on the client side",help:""},MISSING_UPLOAD_DATA:{message:"Missing data for upload",help:""},MISSING_UPLOAD_FILE_PARAMETER:{message:"Missing file parameter for upload",help:""},MISSING_UPLOAD_FILENAME_PARAMETER:{message:"Missing fileName parameter for upload",help:""},MISSING_AUTHENTICATION_ENDPOINT:{message:"Missing authentication endpoint for upload",help:""},MISSING_PUBLIC_KEY:{message:"Missing public key for upload",help:""},AUTH_ENDPOINT_TIMEOUT:{message:"The authenticationEndpoint you provided timed out in 60 seconds",help:""},AUTH_ENDPOINT_NETWORK_ERROR:{message:"Request to authenticationEndpoint failed due to network error",help:""},AUTH_INVALID_RESPONSE:{message:"Invalid response from authenticationEndpoint. The SDK expects a JSON response with three fields i.e. signature, token and expire.",help:""},UPLOAD_ENDPOINT_NETWORK_ERROR:{message:"Request to ImageKit upload endpoint failed due to network error",help:""},INVALID_UPLOAD_OPTIONS:{message:"Invalid uploadOptions parameter",help:""},MISSING_SIGNATURE:{message:"Missing signature for upload. The SDK expects token, sginature and expire for authentication.",help:""},MISSING_TOKEN:{message:"Missing token for upload. The SDK expects token, sginature and expire for authentication.",help:""},MISSING_EXPIRE:{message:"Missing expire for upload. The SDK expects token, sginature and expire for authentication.",help:""}};function u(i,t,e){typeof e=="function"&&(i?e(t,null):e(null,t))}function W(i){var t={},e=i.getAllResponseHeaders();return Object.keys(e).length&&e.trim().split(/[\r\n]+/).map(function(r){return r.split(/: /)}).forEach(function(r){t[r[0].trim()]=r[1].trim()}),t}var P=function(t,e){var r=h({},t),a={statusCode:e.status,headers:W(e)};return Object.defineProperty(r,"$ResponseMetadata",{value:a,enumerable:!1,writable:!1}),r},Y=function(t,e,r){J(t,e).then(function(a){return u(!1,a,r)},function(a){return u(!0,a,r)})},J=function(t,e){return new Promise(function(r,a){t.open("POST","https://upload.imagekit.io/api/v1/files/upload"),t.onerror=function(n){return a(d.UPLOAD_ENDPOINT_NETWORK_ERROR)},t.onload=function(){if(t.status===200)try{var n=JSON.parse(t.responseText),o=P(n,t);return r(o)}catch(m){return a(m)}else try{var n=JSON.parse(t.responseText),l=P(n,t);return a(l)}catch(m){return a(m)}},t.send(e)})},H=function(t,e,r,a){if(!e.file){u(!0,d.MISSING_UPLOAD_FILE_PARAMETER,a);return}if(!e.fileName){u(!0,d.MISSING_UPLOAD_FILENAME_PARAMETER,a);return}if(!r.publicKey){u(!0,d.MISSING_PUBLIC_KEY,a);return}if(!e.token){u(!0,d.MISSING_TOKEN,a);return}if(!e.signature){u(!0,d.MISSING_SIGNATURE,a);return}if(!e.expire){u(!0,d.MISSING_EXPIRE,a);return}var n=new FormData,o;for(o in e)o&&(o==="file"&&typeof e.file!="string"?n.append("file",e.file,String(e.fileName)):o==="tags"&&Array.isArray(e.tags)?n.append("tags",e.tags.join(",")):o==="signature"?n.append("signature",e.signature):o==="expire"?n.append("expire",String(e.expire)):o==="token"?n.append("token",e.token):o==="responseFields"&&Array.isArray(e.responseFields)?n.append("responseFields",e.responseFields.join(",")):o==="extensions"&&Array.isArray(e.extensions)?n.append("extensions",JSON.stringify(e.extensions)):o==="customMetadata"&&y(e.customMetadata)==="object"&&!Array.isArray(e.customMetadata)&&e.customMetadata!==null?n.append("customMetadata",JSON.stringify(e.customMetadata)):e[o]!==void 0&&n.append(o,String(e[o])));n.append("publicKey",r.publicKey),Y(t,n,a)},F={width:"w",height:"h",aspectRatio:"ar",quality:"q",crop:"c",cropMode:"cm",focus:"fo",x:"x",y:"y",format:"f",radius:"r",background:"bg",border:"b",rotation:"rt",rotate:"rt",blur:"bl",named:"n",overlayImage:"oi",overlayImageAspectRatio:"oiar",overlayImageBackground:"oibg",overlayImageBorder:"oib",overlayImageDPR:"oidpr",overlayImageQuality:"oiq",overlayImageCropping:"oic",overlayImageTrim:"oit",overlayX:"ox",overlayY:"oy",overlayFocus:"ofo",overlayHeight:"oh",overlayWidth:"ow",overlayText:"ot",overlayTextFontSize:"ots",overlayTextFontFamily:"otf",overlayTextColor:"otc",overlayTextTransparency:"oa",overlayAlpha:"oa",overlayTextTypography:"ott",overlayBackground:"obg",overlayTextEncoded:"ote",overlayTextWidth:"otw",overlayTextBackground:"otbg",overlayTextPadding:"otp",overlayTextInnerAlignment:"otia",overlayRadius:"or",progressive:"pr",lossless:"lo",trim:"t",metadata:"md",colorProfile:"cp",defaultImage:"di",dpr:"dpr",effectSharpen:"e-sharpen",effectUSM:"e-usm",effectContrast:"e-contrast",effectGray:"e-grayscale",original:"orig",raw:"raw"},O="path",D="query",Q=[O,D],Z=":",$=",",X="-",p={getDefault:function(){return O},addAsQueryParameter:function(t){return t.transformationPosition===D},validParameters:function(t){return typeof t.transformationPosition>"u"?!1:Q.indexOf(t.transformationPosition)!=-1},getTransformKey:function(t){return t&&(F[t]||F[t.toLowerCase()])||""},getChainTransformDelimiter:function(){return Z},getTransformDelimiter:function(){return $},getTransformKeyValueDelimiter:function(){return X}},M="tr";function ee(i){return typeof i=="string"&&i[i.length-1]=="/"&&(i=i.substring(0,i.length-1)),i}function te(i){return typeof i=="string"&&i[0]=="/"&&(i=i.slice(1)),i}function b(i,t){var e=t||"/",r=new RegExp(e+"{1,}","g");return i.join(e).replace(r,e)}var ie=function(t){if(!t.path&&!t.src)return"";var e,r,a;try{t.path?(a=new URL(t.urlEndpoint).pathname,e=new URL(b([t.urlEndpoint.replace(a,""),t.path]))):(e=new URL(t.src),r=!0)}catch(l){return console.error(l),""}for(var n in t.queryParameters)e.searchParams.append(n,String(t.queryParameters[n]));var o=ae(t.transformation);return o&&o.length&&(p.addAsQueryParameter(t)||r?e.searchParams.append(M,o):e.pathname=b([M+p.getChainTransformDelimiter()+o,e.pathname])),a?e.pathname=b([a,e.pathname]):e.pathname=b([e.pathname]),e.href};function ae(i){if(!Array.isArray(i))return"";for(var t=[],e=0,r=i.length;e<r;e++){var a=[];for(var n in i[e]){var o=p.getTransformKey(n);if(o||(o=n),i[e][n]==="-")a.push(o);else if(n==="raw")a.push(i[e][n]);else{var l=i[e][n];(o==="oi"||o==="di")&&(l=ee(te(l||"")),l=l.replace(/\//g,"@@")),a.push([o,l].join(p.getTransformKeyValueDelimiter()))}}t.push(a.join(p.getTransformDelimiter()))}return t.join(p.getChainTransformDelimiter())}var re=function(t,e){return ie(h(h({},e),t))};function ne(i){return i.urlEndpoint}var oe=function(t,e){return function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];if(a.length===e.length&&typeof a[a.length-1]<"u"){if(typeof a[a.length-1]!="function")throw new Error("Callback must be a function.");e.call.apply(e,[t].concat(a))}else return new Promise(function(o,l){var m=function(U){if(U)return l(U);for(var _=arguments.length,T=new Array(_>1?_-1:0),I=1;I<_;I++)T[I-1]=arguments[I];o(T.length>1?T:T[0])};a.pop(),a.push(m),e.call.apply(e,[t].concat(a))})}},se=function(){function i(t){if(j(this,i),R(this,"options",{sdkVersion:"javascript-".concat(q),publicKey:"",urlEndpoint:"",transformationPosition:p.getDefault()}),this.options=h(h({},this.options),t||{}),!ne(this.options))throw d.MANDATORY_INITIALIZATION_MISSING;if(!p.validParameters(this.options))throw d.INVALID_TRANSFORMATION_POSITION}return V(i,[{key:"url",value:function(e){return re(e,this.options)}},{key:"upload",value:function(e,r,a){var n;if(typeof r=="function"?n=r:a=r||{},!e||y(e)!=="object")return u(!0,d.INVALID_UPLOAD_OPTIONS,n);var o=h(h({},this.options),a),l=e||{},m=l.xhr;delete e.xhr;var A=m||new XMLHttpRequest;return oe(this,H)(A,e,o,n)}}]),i}();const le={name:"FileUploadInput",props:["btnCls","disable","maxFileSize","storageType"],emits:["processUploadedFileUrl"],data(){return{componentId:null,file:null,newFileName:null,uploadedFileSize:null,uploadToken:null,waitingUpload:!1}},mounted(){this.componentId=this.$.uid},computed:{fileTooBig(){if(this.uploadedFileSize)return this.maxFileSize&&this.uploadedFileSize>this.maxFileSize}},methods:{async imageKitUpload(){const i=window.location.origin;let t;this.$config.fileUploadTokenService==="netlify"?t=i+"/.netlify/functions/imageUploaderFallback":this.$config.fileUploadTokenService==="vercel"&&(t=i+"/api/imageUploaderFallback");const e=await $fetch(t).catch(o=>o.data);let r=e;typeof e=="string"&&(r=JSON.parse(e));const n=await new se({publicKey:this.$config.imagekitPublicKey,urlEndpoint:this.$config.imagekitEndpoint}).upload({file:this.file,fileName:this.newFileName,tags:[this.$config.projectName,this.$config.projectUrl],token:r.data.token,signature:r.data.signature,expire:r.data.expire});this.$emit("processUploadedFileUrl",n.url),this.waitingUpload=!1},handleFileInput(i){const t=i.target.files[0];if(this.uploadedFileSize=t.size,this.maxFileSize&&t.size>this.maxFileSize){const n=this.maxFileSize/1024/1024;console.error("File is too large (max size is "+n+" MB)");return}const r=t.name.split(".").pop();this.newFileName=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)+"."+r;const a=new File([t],this.newFileName,{type:t.type});this.file=a},async uploadFile(){if(this.waitingUpload=!0,this.storageType==="arweave")try{const i=window.location.origin;let t;this.$config.fileUploadTokenService==="netlify"?t=i+"/.netlify/functions/arweaveUploader":this.$config.fileUploadTokenService==="vercel"&&(t=i+"/api/arweaveUploader"),console.log(t);const e=await this.fileToBase64(this.file),r=this.file.type,a=await k.post(t,{fileData:e,fileName:this.file.name,fileType:this.file.type});console.log(a);let o=`ar://${a.data.transactionId}`;r.startsWith("image/")?o+="?img":r.startsWith("video/")||r.startsWith("audio/")?o+=`?${r}`:r.startsWith("text/plain")&&(o+="?txt"),this.$emit("processUploadedFileUrl",o)}catch(i){console.error("Error uploading file to decentralized storage service",i),console.log("Falling back to centralized storage service"),await this.imageKitUpload()}else await this.imageKitUpload();this.waitingUpload=!1},fileToBase64(i){return new Promise((t,e)=>{const r=new FileReader;r.readAsDataURL(i),r.onload=()=>t(r.result.split(",")[1]),r.onerror=a=>e(a)})}}},de=["id","disabled"],ue=["disabled"],fe={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ce={key:0,class:"alert alert-danger mt-3",role:"alert"};function pe(i,t,e,r,a,n){return f(),c(C,null,[s("input",{onChange:t[0]||(t[0]=(...o)=>n.handleFileInput&&n.handleFileInput(...o)),type:"file",class:"form-control form-control-lg mb-3",id:"file-input-"+a.componentId,disabled:a.waitingUpload||e.disable},null,40,de),s("button",{type:"button",class:N(e.btnCls),onClick:t[1]||(t[1]=(...o)=>n.uploadFile&&n.uploadFile(...o)),disabled:a.waitingUpload||!a.file||n.fileTooBig||e.disable},[a.waitingUpload?(f(),c("span",fe)):g("",!0),S(" Upload ")],10,ue),n.fileTooBig?(f(),c("div",ce," File is too big (max size is "+v(e.maxFileSize/1024/1024)+" MB). ",1)):g("",!0)],64)}const me=x(le,[["render",pe]]),he={name:"FileUploadModal",props:["title","componentId","infoText","maxFileSize","storageType"],emits:["processFileUrl"],components:{FileUploadInput:me},data(){return{currentTab:"upload",pastedLink:null}},mounted(){this.fileUploadEnabled||(this.currentTab="paste")},computed:{arweaveBalance(){const i=this.siteStore.arweaveBalance;if(i){const t=Number(i).toFixed(6);return Number.parseFloat(t)}return 0},arweaveBalanceTooLow(){return this.storageType!=="arweave"?!1:this.arweaveBalance<this.$config.arweaveMinBalance},fileUploadEnabled(){return this.siteStore.getFileUploadEnabled},getTitle(){return this.title||"Upload file"}},methods:{processUploadedFileUrl(i){this.$emit("processFileUrl",i),document.getElementById("closeFileUploadModal"+this.componentId).click()}},setup(){return{siteStore:L()}},watch:{fileUploadEnabled(){this.fileUploadEnabled?this.currentTab="upload":this.currentTab="paste"}}},ge=["id","aria-labelledby"],ve={class:"modal-dialog"},ye={class:"modal-content"},Te={class:"modal-header"},Ie=["id"],be=["id"],_e={class:"modal-body mb-4"},Se={class:"nav nav-tabs nav-fill"},Ne={class:"nav-item"},Ae=["disabled"],Ue={class:"nav-item"},we={class:"tab-content mt-3"},Ee={key:0},Pe={key:0},Fe={key:1},Me=s("p",{class:"text-danger"}," Error: Arweave is used as file storage. Current balance in the Arweave wallet is insufficient to do the upload. ",-1),xe=["href"],Re={key:1},Oe=s("p",null,"Paste file link",-1),De=["disabled"];function Le(i,t,e,r,a,n){const o=G("FileUploadInput");return f(),c("div",{class:"modal fade",id:"fileUploadModal"+e.componentId,tabindex:"-1","aria-labelledby":"fileUploadModalLabel"+e.componentId,"aria-hidden":"true"},[s("div",ve,[s("div",ye,[s("div",Te,[s("h1",{class:"modal-title fs-5",id:"fileUploadModalLabel"+e.componentId},v(n.getTitle),9,Ie),s("button",{id:"closeFileUploadModal"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,be)]),s("div",_e,[s("ul",Se,[s("li",Ne,[s("button",{disabled:!this.fileUploadEnabled,class:N(["nav-link",a.currentTab==="upload"?"active":""]),onClick:t[0]||(t[0]=l=>a.currentTab="upload")}," Upload ",10,Ae)]),s("li",Ue,[s("button",{class:N(["nav-link",a.currentTab==="paste"?"active":""]),onClick:t[1]||(t[1]=l=>a.currentTab="paste")}," Paste Link ",2)])]),s("div",we,[a.currentTab==="upload"?(f(),c("div",Ee,[e.infoText?(f(),c("p",Pe,v(e.infoText),1)):g("",!0),n.arweaveBalanceTooLow?(f(),c("div",Fe,[Me,s("p",null,[S(" Please send AR tokens to this wallet (min. "+v(i.$config.arweaveMinBalance)+" AR): ",1),s("a",{href:"https://arscan.io/address/"+this.$config.arweaveAddress,target:"_blank"},v(this.$config.arweaveAddress),9,xe),S(". ")])])):g("",!0),K(o,{btnCls:"btn btn-primary",disable:n.arweaveBalanceTooLow,maxFileSize:e.maxFileSize,storageType:e.storageType,onProcessUploadedFileUrl:n.processUploadedFileUrl},null,8,["disable","maxFileSize","storageType","onProcessUploadedFileUrl"])])):g("",!0),a.currentTab==="paste"?(f(),c("div",Re,[Oe,B(s("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>a.pastedLink=l),type:"text",class:"form-control mb-3",placeholder:"Enter http link to file"},null,512),[[z,a.pastedLink]]),s("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=l=>n.processUploadedFileUrl(a.pastedLink)),disabled:!a.pastedLink}," Submit link ",8,De)])):g("",!0)])])])])],8,ge)}const Ke=x(he,[["render",Le]]);export{Ke as F,me as a};