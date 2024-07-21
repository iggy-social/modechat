import{H as z,T as H,M as Y}from"./components.529fc494.js";import{a as w,I as _,C as b,l as v,x as k,o as a,b as r,f as t,e as m,m as c,y as I,z as A,i as u,r as f,t as p,F as T,G as S,S as N,q as G,w as U,c as F,T as q,h as Q}from"./entry.187e2ee6.js";import{C as J}from"./ChatFeed.4e99b980.js";import{C as K}from"./ConnectWalletButton.528cdb8c.js";import{I as x}from"./Image.dec6d7d1.js";import{W as y}from"./WaitingToast.715411de.js";import{a as P}from"./FileUploadModal.574d5b5c.js";import{g as X,a as Z}from"./domainUtils.20cda23d.js";import{s as ee,b as te,c as se,a as oe,d as B}from"./storageUtils.b729df30.js";import{g as D}from"./textUtils.1fccc199.js";import"./composables.d9a0ab3e.js";import"./ChatPost.e8a82262.js";import"./user.456bacc7.js";import"./ProfileImage.3af9e2f7.js";import"./MintedPostImage.98b62c0c.js";import"./site.f25043b8.js";const ie={name:"AddImageToCollectionModal",props:["cAddress","mdAddress"],components:{FileUploadInput:P,Image:x},data(){return{componentId:null,imageUrl:null,waiting:!1}},mounted(){this.componentId=this.$.uid},methods:{async addNewImage(){this.waiting=!0;const i=new _(["function addImageToCollection(address nftAddress_, string memory imageUrl_) external"]),s=new b(this.mdAddress,i,this.signer);try{const n=await s.addImageToCollection(this.cAddress,this.imageUrl),o=this.toast({component:y,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have successfully added new image URL to the NFT collection.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.imageUrl=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(o),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}},insertImageLink(i){this.imageUrl=i}},setup(){const{signer:i}=v(),s=k();return{signer:i,toast:s}}},ne=["aria-labelledby"],ae={class:"modal-dialog"},re={class:"modal-content"},le={class:"modal-header"},ce=["id"],de=["id"],he={class:"modal-body"},me={class:"mt-2"},ue={key:0},pe=t("p",null,"Upload additional image (and then click Submit below):",-1),ge=t("p",{class:"mt-3"},"Or paste image link here:",-1),fe={key:1},_e={key:2,class:"mt-3"},be=t("br",null,null,-1),ye=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),we={class:"modal-footer"},ve=["disabled"],ke={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Ce(i,s,n,o,e,l){const d=f("FileUploadInput"),h=f("Image");return a(),r("div",{class:"modal fade",id:"addImageToCollectionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",ae,[t("div",re,[t("div",le,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Add Image To Collection",8,ce),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,de)]),t("div",he,[t("div",me,[!e.imageUrl&&i.$config.fileUploadEnabled?(a(),r("div",ue,[pe,m(d,{btnCls:"btn btn-primary",storageType:"imagekit",maxFileSize:i.$config.fileUploadSizeLimit,onProcessUploadedFileUrl:l.insertImageLink},null,8,["maxFileSize","onProcessUploadedFileUrl"]),ge])):c("",!0),i.$config.fileUploadEnabled?c("",!0):(a(),r("p",fe,"Paste image link here:")),I(t("input",{"onUpdate:modelValue":s[0]||(s[0]=g=>e.imageUrl=g),type:"text",class:"form-control",id:"addImageToCollectionInput"},null,512),[[A,e.imageUrl]]),e.imageUrl?(a(),r("div",_e,[m(h,{url:e.imageUrl,alt:"Image",cls:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,["url"]),be,ye])):c("",!0)])]),t("div",we,[t("button",{onClick:s[1]||(s[1]=(...g)=>l.addNewImage&&l.addNewImage(...g)),type:"button",class:"btn btn-primary",disabled:!e.imageUrl||e.waiting},[e.waiting?(a(),r("span",ke)):c("",!0),u(" Submit to blockchain ")],8,ve)])])])],8,ne)}const Ie=w(ie,[["render",Ce]]),Ae={name:"ChangeCollectionPreviewModal",props:["cAddress","mdAddress"],emits:["saveCollection"],components:{FileUploadInput:P,Image:x},data(){return{componentId:null,imageUrl:null,waiting:!1}},mounted(){this.componentId=this.$.uid},methods:{async updateImage(){this.waiting=!0;const i=new _(["function setCollectionPreview(address nftAddress_, string memory collectionPreview_) external"]),s=new b(this.mdAddress,i,this.signer);try{const n=await s.setCollectionPreview(this.cAddress,this.imageUrl),o=this.toast({component:y,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have updated the NFT collection preview image.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{image:this.imageUrl}),this.imageUrl=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(o),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}},insertImageLink(i){this.imageUrl=i}},setup(){const{signer:i}=v(),s=k();return{signer:i,toast:s}}},xe=["aria-labelledby"],Ue={class:"modal-dialog"},Te={class:"modal-content"},Me={class:"modal-header"},Ne=["id"],Fe=["id"],Be={class:"modal-body"},De=t("p",null,"Change your collection preview image.",-1),Se={class:"mt-4"},Pe={key:0},$e=t("p",null,"Upload new image (and then click Submit below):",-1),Ee=t("p",{class:"mt-3"},"Or paste image link here:",-1),Le={key:1},Oe={key:2,class:"mt-3"},Re=t("br",null,null,-1),We=t("small",null,"If image didn't appear above, then something is wrong with the link you added (wait until the loading indicator completes). If you have an IPFS link, it also helps to cut/paste the same link a couple of times.",-1),je={class:"modal-footer"},Ve=["disabled"],ze={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function He(i,s,n,o,e,l){const d=f("FileUploadInput"),h=f("Image");return a(),r("div",{class:"modal fade",id:"changeCollectionPreviewModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Ue,[t("div",Te,[t("div",Me,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Change Collection Preview Image",8,Ne),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Fe)]),t("div",Be,[De,t("div",Se,[!e.imageUrl&&i.$config.fileUploadEnabled?(a(),r("div",Pe,[$e,m(d,{btnCls:"btn btn-primary",maxFileSize:i.$config.fileUploadSizeLimit,storageType:"imagekit",onProcessUploadedFileUrl:l.insertImageLink},null,8,["maxFileSize","onProcessUploadedFileUrl"]),Ee])):c("",!0),i.$config.fileUploadEnabled?c("",!0):(a(),r("p",Le,"Paste image link here:")),I(t("input",{"onUpdate:modelValue":s[0]||(s[0]=g=>e.imageUrl=g),type:"text",class:"form-control"},null,512),[[A,e.imageUrl]]),e.imageUrl?(a(),r("div",Oe,[m(h,{url:e.imageUrl,cls:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,["url"]),Re,We])):c("",!0)])]),t("div",je,[t("button",{onClick:s[1]||(s[1]=(...g)=>l.updateImage&&l.updateImage(...g)),type:"button",class:"btn btn-primary",disabled:!e.imageUrl||e.waiting},[e.waiting?(a(),r("span",ze)):c("",!0),u(" Submit to blockchain ")],8,Ve)])])])],8,xe)}const Ye=w(Ae,[["render",He]]),Ge={name:"ChangeDescriptionModal",props:["cAddress","cDescription","mdAddress"],emits:["saveCollection"],data(){return{componentId:null,editDescription:null,waiting:!1}},mounted(){this.componentId=this.$.uid,this.editDescription=this.cDescription},methods:{async update(){this.waiting=!0;const i=new _(["function setDescription(address nftAddress_, string memory description_) external"]),s=new b(this.mdAddress,i,this.signer);try{const n=await s.setDescription(this.cAddress,this.editDescription.replace(/"/g,"'")),o=this.toast({component:y,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have updated the NFT description.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{description:this.editDescription.replace(/"/g,"'")}),this.editDescription=null,document.getElementById("closeModal-"+this.componentId).click(),this.waiting=!1):(this.toast.dismiss(o),this.waiting=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waiting=!1}}},setup(){const{signer:i}=v(),s=k();return{signer:i,toast:s}},watch:{cDescription(){this.editDescription=this.cDescription}}},qe=["aria-labelledby"],Qe={class:"modal-dialog"},Je={class:"modal-content"},Ke={class:"modal-header"},Xe=["id"],Ze=["id"],et={class:"modal-body"},tt=t("p",null,"Change your collection description.",-1),st={class:"mt-4"},ot=["for"],it=t("strong",null," Enter new description: ",-1),nt=[it],at=["id"],rt={class:"modal-footer"},lt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),ct=["disabled"],dt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function ht(i,s,n,o,e,l){return a(),r("div",{class:"modal fade",id:"changeDescriptionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Qe,[t("div",Je,[t("div",Ke,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Change description",8,Xe),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Ze)]),t("div",et,[tt,t("div",st,[t("label",{for:"input-"+e.componentId,class:"form-label"},nt,8,ot),I(t("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>e.editDescription=d),type:"text",class:"form-control",id:"input-"+e.componentId},null,8,at),[[A,e.editDescription]])])]),t("div",rt,[lt,t("button",{onClick:s[1]||(s[1]=(...d)=>l.update&&l.update(...d)),type:"button",class:"btn btn-primary",disabled:!e.editDescription||e.waiting},[e.waiting?(a(),r("span",dt)):c("",!0),u(" Submit ")],8,ct)])])])],8,qe)}const mt=w(Ge,[["render",ht]]),ut={name:"ChangeNftTypeModal",props:["cAddress","cType","mdAddress"],emits:["saveCollection"],data(){return{componentId:null,editImageMetadataUrl:null,editImageOptions:[{description:"0) Onchain image(s)"},{description:"1) Static metadata URL"},{description:"2) Generative metadata (.json)"},{description:"3) Generative metadata"}],editImagePreviewUrl:"",typeChoice:0,waitingMetadata:!1}},mounted(){this.componentId=this.$.uid},methods:{async updateMetadata(){this.waitingMetadata=!0;const i=new _(["function setMdTypeAndUrlOrImage(address nftAddress_, uint256 mdType_, string memory mdUrlOrImage_, string memory collectionImage_) external"]),s=new b(this.mdAddress,i,this.signer);this.typeChoice===0&&(this.editImagePreviewUrl=this.editImageMetadataUrl),this.editImagePreviewUrl===null&&(this.editImagePreviewUrl="");try{const n=await s.setMdTypeAndUrlOrImage(this.cAddress,this.typeChoice,this.editImageMetadataUrl,this.editImagePreviewUrl),o=this.toast({component:y,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();e.status===1?(this.toast.dismiss(o),this.toast("You have updated the NFT image and/or metadata URL.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.$emit("saveCollection",{type:this.typeChoice,image:this.editImagePreviewUrl}),this.editImageMetadataUrl=null,this.editImagePreviewUrl="",document.getElementById("closeModal-"+componentId).click(),this.waitingMetadata=!1):(this.toast.dismiss(o),this.waitingMetadata=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e))}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingMetadata=!1}}},setup(){const{signer:i}=v(),s=k();return{signer:i,toast:s}}},pt={class:"modal fade",id:"changeNftTypeModal",tabindex:"-1","aria-labelledby":"changeNftTypeModalLabel","aria-hidden":"true"},gt={class:"modal-dialog"},ft={class:"modal-content"},_t={class:"modal-header"},bt=t("h1",{class:"modal-title fs-5",id:"changeNftTypeModalLabel"},"Change NFT Type",-1),yt=["id"],wt={class:"modal-body"},vt=t("p",null,[t("strong",null,"Pick one of these options:")],-1),kt={class:"dropdown"},Ct={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},It={class:"dropdown-menu text-break"},At=["onClick"],xt={class:"mt-3"},Ut={key:0},Tt={key:1},Mt=t("strong",null,"file",-1),Nt={key:2},Ft=t("strong",null,"folder",-1),Bt={key:3},Dt=t("strong",null,"folder",-1),St={class:"mt-4"},Pt={for:"imageMetadataUrl",class:"form-label"},$t={key:0},Et={key:1},Lt={key:2},Ot={key:3},Rt={key:0,class:"mt-4"},Wt=t("label",{for:"collectionPreviewUrl",class:"form-label"},[t("strong",null," Change collection preview image (optional): ")],-1),jt=t("div",{id:"previewImageHelp",class:"form-text"},"This is a preview image for the whole collection, not for individual NFTs.",-1),Vt={class:"modal-footer"},zt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),Ht=["disabled"],Yt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Gt(i,s,n,o,e,l){return a(),r("div",pt,[t("div",gt,[t("div",ft,[t("div",_t,[bt,t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,yt)]),t("div",wt,[t("p",null,"Current type of this NFT collection is: "+p(e.editImageOptions[n.cType].description)+".",1),vt,t("div",kt,[t("button",Ct,p(e.editImageOptions[e.typeChoice].description),1),t("div",It,[(a(!0),r(T,null,S(e.editImageOptions,(d,h)=>(a(),r("span",{key:h,onClick:g=>e.typeChoice=h,class:"dropdown-item cursor-pointer"},p(d.description),9,At))),128))])]),t("div",xt,[e.typeChoice==0?(a(),r("p",Ut,' The "Onchain image(s)" option means that metadata is stored onchain (within the smart contract itself). Use this option if you want to add an image URL in the field below (not a metadata file). This is the default option for NFTs created through this launchpad. ')):c("",!0),e.typeChoice==1?(a(),r("p",Tt,[u(' The "Static metadata URL" option means that all the NFTs in the collection have the same (static) image and meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a URL of a single metadata '),Mt,u(" (all NFTs have the same metadata and image). ")])):c("",!0),e.typeChoice==2?(a(),r("p",Nt,[u(' The "Generative metadata (.json)" option means that all the NFTs in the collection have a different image and different meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a metadata '),Ft,u(" URL with multiple metadata files in it, where these files HAVE a .json extension. ")])):c("",!0),e.typeChoice==3?(a(),r("p",Bt,[u(' The "Generative metadata" option means that all the NFTs in the collection have a different image and different meta data. The metadata is stored offchain, usually on IPFS or on a centralized server. Use this option if you have a metadata '),Dt,u(" URL with multiple metadata files in it, where these files DO NOT HAVE a .json extension. ")])):c("",!0)]),t("div",St,[t("label",Pt,[t("strong",null,[u(" Enter "),e.typeChoice==0?(a(),r("span",$t,"image URL:")):c("",!0),e.typeChoice==1?(a(),r("span",Et,"metadata file URL:")):c("",!0),e.typeChoice==2?(a(),r("span",Lt,"metadata folder URL:")):c("",!0),e.typeChoice==3?(a(),r("span",Ot,"metadata folder URL:")):c("",!0)])]),I(t("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>e.editImageMetadataUrl=d),type:"text",class:"form-control",id:"imageMetadataUrl"},null,512),[[A,e.editImageMetadataUrl]])]),e.typeChoice>0?(a(),r("div",Rt,[Wt,I(t("input",{"onUpdate:modelValue":s[1]||(s[1]=d=>e.editImagePreviewUrl=d),type:"text",class:"form-control",id:"collectionPreviewUrl","aria-describedby":"previewImageHelp"},null,512),[[A,e.editImagePreviewUrl]]),jt])):c("",!0)]),t("div",Vt,[zt,t("button",{onClick:s[2]||(s[2]=(...d)=>l.updateMetadata&&l.updateMetadata(...d)),type:"button",class:"btn btn-primary",disabled:!e.editImageMetadataUrl||e.waitingMetadata},[e.waitingMetadata?(a(),r("span",Yt)):c("",!0),u(" Submit ")],8,Ht)])])])])}const qt=w(ut,[["render",Gt]]),Qt={name:"RemoveImageFromCollectionModal",props:["cAddress","mdAddress"],data(){return{componentId:null,images:[],imageUrl:null,waitingLoad:!1,waitingRemove:!1}},components:{Image:x},mounted(){this.componentId=this.$.uid},methods:{async loadImages(){this.waitingLoad=!0;const i=new _(["function getCollectionImages(address nftAddress_) external view returns (string[] memory)"]),s=new b(this.mdAddress,i,this.signer);try{this.images=await s.getCollectionImages(this.cAddress),this.waitingLoad=!1}catch(n){console.error(n),this.waitingLoad=!1}},async removeImage(i){this.waitingRemove=!0;const s=new _(["function removeImageFromCollectionByIndex(address nftAddress_, uint256 index_) external"]),n=new b(this.mdAddress,s,this.signer);try{const o=await n.removeImageFromCollectionByIndex(this.cAddress,i),e=this.toast({component:y,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+o.hash,"_blank").focus()}),l=await o.wait();if(l.status===1){this.toast.dismiss(e),this.toast("You have successfully removed an image from the NFT collection.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+o.hash,"_blank").focus()}),this.imageUrl=null;const d=[...this.images];d.splice(i,1),this.images=d,this.waitingRemove=!1}else this.toast.dismiss(e),this.waitingRemove=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+o.hash,"_blank").focus()}),console.log(l)}catch(o){console.error(o);try{let e=o.message.split("reason=")[1];e=e.split(", method=")[0],e=e.replace(/"/g,""),e=e.replace("execution reverted:","Error:"),console.log(e),this.toast(e,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingRemove=!1}}},setup(){const{signer:i}=v(),s=k();return{signer:i,toast:s}}},Jt=["aria-labelledby"],Kt={class:"modal-dialog"},Xt={class:"modal-content"},Zt={class:"modal-header"},es=["id"],ts=["id"],ss={class:"modal-body"},os={class:"row"},is=["for"],ns=t("strong",null," Load images from collection: ",-1),as=[ns],rs=["disabled"],ls={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},cs={key:0,class:"row mt-3"},ds={class:"card"},hs={class:"card-body"},ms={class:"row"},us=["onClick","disabled"],ps=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);function gs(i,s,n,o,e,l){const d=f("Image");return a(),r("div",{class:"modal fade",id:"removeImageFromCollectionModal",tabindex:"-1","aria-labelledby":"modalLabel-"+e.componentId,"aria-hidden":"true"},[t("div",Kt,[t("div",Xt,[t("div",Zt,[t("h1",{class:"modal-title fs-5",id:"modalLabel-"+e.componentId},"Remove Image From Collection",8,es),t("button",{id:"closeModal-"+e.componentId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,ts)]),t("div",ss,[t("div",os,[t("label",{for:"input-"+e.componentId,class:"form-label"},as,8,is)]),t("div",null,[t("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=(...h)=>l.loadImages&&l.loadImages(...h)),disabled:e.waitingLoad},[e.waitingLoad?(a(),r("span",ls)):c("",!0),u(" Load images ")],8,rs)]),e.images?(a(),r("div",cs,[(a(!0),r(T,null,S(e.images,(h,g)=>(a(),r("div",{key:h,class:"col-md-4 mb-3"},[t("div",ds,[m(d,{url:h,alt:"Image",cls:"card-img-top"},null,8,["url"]),t("div",hs,[t("div",ms,[t("button",{class:"btn btn-danger",onClick:M=>l.removeImage(g),disabled:e.waitingRemove||e.images.length==1}," Delete ",8,us)])])])]))),128))])):c("",!0)]),ps])])],8,Jt)}const fs=w(Qt,[["render",gs]]),_s={name:"NftCollection",data(){return{cAddress:null,cAuthorAddress:null,cAuthorDomain:null,cDescription:null,cImage:null,cName:null,cSupply:null,cType:0,mdAddress:null,priceBuyWei:null,priceSellWei:null,userTokenId:null,waitingBuy:!1,waitingData:!1,waitingSell:!1}},components:{AddImageToCollectionModal:Ie,ChangeCollectionPreviewModal:Ye,ChangeDescriptionModal:mt,ChangeNftTypeModal:qt,ChatFeed:J,ConnectWalletButton:K,Image:x,RemoveImageFromCollectionModal:fs,WaitingToast:y},mounted(){this.cAddress=this.$route.query.id,this.cAddress&&this.getCollectionDetails()},computed:{getUsernameOrFullAddress(){return this.cAuthorDomain?D(this.cAuthorDomain):this.cAuthorAddress},getUsernameOrShortAddress(){return this.cAuthorAddress?this.cAuthorDomain?D(this.cAuthorDomain):N(this.cAuthorAddress):null},isCurrentAddressOwner(){return this.cAuthorAddress&&this.address?String(this.cAuthorAddress).toLowerCase()===String(this.address).toLowerCase():!1}},methods:{getDomainName:X,async buyNft(){this.waitingBuy=!0;const i=new _(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function mint(address to) external payable returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),s=new b(this.cAddress,i,this.signer);this.priceBuyWei=await s.getMintPrice();try{const n=await s.mint(this.address,{value:this.priceBuyWei}),o=this.toast({component:y,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();if(e.status===1){this.toast.dismiss(o),this.toast("You have successfully bought the NFT! Congrats!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.priceBuyWei=await s.getMintPrice(),this.priceSellWei=await s.getBurnPrice();try{this.userTokenId=await s.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.cSupply=await s.totalSupply(),this.waitingBuy=!1}else this.toast.dismiss(o),this.waitingBuy=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e)}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingBuy=!1}},async fetchUserDomain(){if(this.cAuthorAddress){const i=await this.getDomainName(this.cAuthorAddress);i?(this.cAuthorDomain=i,ee(window,this.cAuthorAddress,i+this.$config.tldName)):(this.cAuthorDomain=await Z(this.cAuthorAddress),te(window,this.cAuthorAddress,this.cAuthorDomain))}},formatPrice(i){if(i===null)return null;const s=Number(G(i));return s>100?s.toFixed(0):s>1?s.toFixed(2):s>.1?s.toFixed(4):s>.01?s.toFixed(5):s>.001?s.toFixed(6):s>1e-4?s.toFixed(7):s>1e-5?s.toFixed(8):s>1e-6?s.toFixed(9):s},async getCollectionDetails(i=!1){this.waitingData=!0;let s=se(window,this.cAddress);i&&(console.log("Refreshing collection metadata..."),s=null);let n=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(n=this.signer);const o=new _(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function metadataAddress() public view returns (address)","function name() public view returns (string memory)","function owner() public view returns (address)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),e=new b(this.cAddress,o,n);s?.mdAddress?this.mdAddress=s.mdAddress:this.mdAddress=await e.metadataAddress();const l=new _(["function getCollectionDescription(address) public view returns (string memory)","function getCollectionMetadataType(address nftAddress_) external view returns (uint256)","function getCollectionPreviewImage(address) public view returns (string memory)"]),d=new b(this.mdAddress,l,n);if(this.priceBuyWei=await e.getMintPrice(),this.priceSellWei=await e.getBurnPrice(),s?.image?this.cImage=s.image:this.cImage=await d.getCollectionPreviewImage(this.cAddress),this.cImage.includes(".ipfs.sphn.link/")){const h=this.cImage.split(".ipfs.sphn.link/"),g=h[0].replace("https://","");this.cImage=this.$config.ipfsGateway+g+"/"+h[1]}s?.description&&s.description!==""&&s.description!==null?this.cDescription=s.description:this.cDescription=await d.getCollectionDescription(this.cAddress),s?.type>=0?this.cType=s.type:this.cType=Number(await d.getCollectionMetadataType(this.cAddress)),s?.name?this.cName=s.name:this.cName=await e.name();try{this.userTokenId=await e.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.waitingData=!1,this.cSupply=await e.totalSupply(),s?.authorAddress?(this.cAuthorAddress=s.authorAddress,this.cAuthorDomain=s.authorDomain):this.cAuthorAddress=await e.owner(),this.cAuthorDomain=oe(window,this.cAuthorAddress),this.cAuthorDomain||this.fetchUserDomain(),s={address:this.cAddress,authorAddress:this.cAuthorAddress,authorDomain:this.cAuthorDomain,description:this.cDescription,image:this.cImage,mdAddress:this.mdAddress,name:this.cName,type:this.cType},B(window,this.cAddress,s)},saveCollection(i){i?.type&&(this.cType=i.type),i?.description&&(this.cDescription=i.description),i?.image&&(this.cImage=i.image);const s={address:this.cAddress,authorAddress:this.cAuthorAddress,authorDomain:this.cAuthorDomain,description:this.cDescription,image:this.cImage,mdAddress:this.mdAddress,name:this.cName,type:this.cType};B(window,this.cAddress,s)},async sellNft(){this.waitingSell=!0;const i=new _(["function getBurnPrice() public view returns (uint256)","function getMintPrice() public view returns (uint256)","function burn(uint256 tokenId) external returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)","function totalSupply() public view returns (uint256)"]),s=new b(this.cAddress,i,this.signer);try{const n=await s.burn(this.userTokenId),o=this.toast({component:y,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),e=await n.wait();if(e.status===1){this.toast.dismiss(o),this.toast("You have dumped the NFT.",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),this.priceBuyWei=await s.getMintPrice(),this.priceSellWei=await s.getBurnPrice();try{this.userTokenId=await s.tokenOfOwnerByIndex(this.address,0)}catch{this.userTokenId=null}this.cSupply=await s.totalSupply(),this.waitingSell=!1}else this.toast.dismiss(o),this.waitingSell=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(e)}catch(n){console.error(n);try{let o=n.message.split("reason=")[1];o=o.split(", method=")[0],o=o.replace(/"/g,""),o=o.replace("execution reverted:","Error:"),console.log(o),this.toast(o,{type:"error"})}catch{this.toast("Transaction has failed.",{type:"error"})}this.waitingSell=!1}}},setup(){const{address:i,chainId:s,isActivated:n,signer:o}=v(),e=k();return{address:i,chainId:s,isActivated:n,shortenAddress:N,signer:o,toast:e}}},bs={class:"card border"},ys={class:"card-body"},ws={class:"fs-3"},vs={key:0,class:"mb-3 mt-3"},ks={key:1,class:"mb-3 mt-3"},Cs={key:2,class:"d-flex justify-content-center mb-3"},Is=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),As=[Is],xs={class:"row"},Us={class:"col-md-5 text-center mb-3"},Ts={class:"dropdown mt-3"},Ms=t("button",{class:"btn btn-outline-primary btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Actions ",-1),Ns={class:"dropdown-menu"},Fs={key:0},Bs=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeDescriptionModal"}," Change description ",-1),Ds=[Bs],Ss={key:1},Ps=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeCollectionPreviewModal"}," Change collection preview image ",-1),$s=[Ps],Es={key:2},Ls=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#addImageToCollectionModal"}," Add additional image to collection ",-1),Os=[Ls],Rs={key:3},Ws=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#removeImageFromCollectionModal"}," Remove image from collection ",-1),js=[Ws],Vs={key:4},zs=t("span",{class:"dropdown-item cursor-pointer","data-bs-toggle":"modal","data-bs-target":"#changeNftTypeModal"}," Change collection type ",-1),Hs=[zs],Ys={class:"col-md-7"},Gs={class:"mt-1 mb-4 muted-text",style:{"font-size":"14px"}},qs={class:"me-4"},Qs=t("i",{class:"bi bi-file-earmark-text-fill me-1"},null,-1),Js={class:"me-4"},Ks=t("i",{class:"bi bi-coin me-1"},null,-1),Xs={class:"me-4"},Zs=t("i",{class:"bi bi-file-earmark-binary me-1"},null,-1),eo={class:"me-4"},to=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),so=["href"],oo={key:0},io={class:"me-4"},no=t("i",{class:"bi bi-box-arrow-up-right me-2"},null,-1),ao=["href"],ro={class:"row mb-3"},lo={key:0,class:"d-grid gap-2 col"},co={key:1,class:"d-grid gap-2 col"},ho=["disabled"],mo={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},uo={key:2,class:"d-grid gap-2 col"},po=["disabled"],go={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},fo={key:0},_o={key:0,class:"card border mt-3 scroll-500"},bo=Q('<div class="card-body"><h5 class="mb-2 mt-3 text-center">Buy an NFT to see the chat</h5><div class="d-flex justify-content-center"><div class="col-12 col-lg-8"><p class="text-break text-center mt-3 mb-4"> This NFT&#39;s chat is open only for NFT holders. Buy an NFT to see the chat and talk with the NFT creator and other NFT holders. </p></div></div></div>',1),yo=[bo];function wo(i,s,n,o,e,l){const d=H,h=Y,g=z,M=f("Image"),$=q,E=f("ConnectWalletButton"),L=f("ChatFeed"),O=f("AddImageToCollectionModal"),R=f("ChangeCollectionPreviewModal"),W=f("ChangeDescriptionModal"),j=f("ChangeNftTypeModal"),V=f("RemoveImageFromCollectionModal");return a(),r(T,null,[m(g,null,{default:U(()=>[m(d,null,{default:U(()=>[u("NFT Collection Details | "+p(i.$config.projectMetadataTitle),1)]),_:1}),m(h,{property:"og:title",content:"NFT Collection Details | "+i.$config.projectMetadataTitle},null,8,["content"]),m(h,{name:"description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"]),m(h,{property:"og:image",content:i.$config.projectUrl+i.$config.previewImageNftCollection},null,8,["content"]),m(h,{property:"og:description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"]),m(h,{name:"twitter:image",content:i.$config.projectUrl+i.$config.previewImageNftCollection},null,8,["content"]),m(h,{name:"twitter:description",content:"Check this NFT collection on "+i.$config.projectName+"!"},null,8,["content"])]),_:1}),t("div",bs,[t("div",ys,[t("p",ws,[t("i",{onClick:s[0]||(s[0]=C=>i.$router.push({path:"/nft"})),class:"bi bi-arrow-left-circle cursor-pointer"})]),e.cName?c("",!0):(a(),r("h3",vs,"NFT Collection Details")),e.cName?(a(),r("h3",ks,p(e.cName),1)):c("",!0),e.waitingData?(a(),r("div",Cs,As)):c("",!0),t("div",xs,[t("div",Us,[e.cImage?(a(),F(M,{url:e.cImage,cls:"img-fluid img-thumbnail rounded col-12",alt:e.cName,key:e.cImage},null,8,["url","alt"])):c("",!0),t("div",Ts,[Ms,t("ul",Ns,[l.isCurrentAddressOwner?(a(),r("li",Fs,Ds)):c("",!0),l.isCurrentAddressOwner?(a(),r("li",Ss,$s)):c("",!0),l.isCurrentAddressOwner&&e.cType==0?(a(),r("li",Es,Os)):c("",!0),l.isCurrentAddressOwner&&e.cType==0?(a(),r("li",Rs,js)):c("",!0),l.isCurrentAddressOwner?(a(),r("li",Vs,Hs)):c("",!0),t("li",null,[t("span",{class:"dropdown-item cursor-pointer",onClick:s[1]||(s[1]=C=>l.getCollectionDetails(!0))},"Refresh metadata")])])])]),t("div",Ys,[t("div",Gs,[t("p",qs,[Qs,u(" "+p(e.cDescription),1)]),t("p",Js,[Ks,u(" Buy/Sell price: "+p(l.formatPrice(e.priceBuyWei))+" "+p(i.$config.tokenSymbol)+" / "+p(l.formatPrice(e.priceSellWei))+" "+p(i.$config.tokenSymbol),1)]),t("p",Xs,[Zs,u(" "+p(e.cSupply)+" NFTs minted ",1)]),t("p",eo,[to,t("a",{href:i.$config.blockExplorerBaseUrl+"/address/"+e.cAddress,target:"_blank",style:{"text-decoration":"none"}},p(o.shortenAddress(e.cAddress)),9,so),l.getUsernameOrShortAddress?(a(),r("span",oo,[u(" by "),m($,{to:"/profile/?id="+String(l.getUsernameOrFullAddress)},{default:U(()=>[u(p(l.getUsernameOrShortAddress),1)]),_:1},8,["to"])])):c("",!0)]),t("p",io,[no,t("a",{href:i.$config.marketplaceNftCollectionBaseUrl+e.cAddress,target:"_blank",style:{"text-decoration":"none"}}," See on NFT marketplace ",8,ao)])]),t("div",ro,[o.isActivated?c("",!0):(a(),r("div",lo,[m(E,{class:"btn btn-primary",btnText:"Connect wallet"})])),o.isActivated?(a(),r("div",co,[t("button",{onClick:s[2]||(s[2]=(...C)=>l.buyNft&&l.buyNft(...C)),class:"btn btn-primary",type:"button",disabled:e.waitingData||e.waitingBuy},[e.waitingBuy?(a(),r("span",mo)):c("",!0),u(" Buy for "+p(l.formatPrice(e.priceBuyWei))+" "+p(i.$config.tokenSymbol),1)],8,ho)])):c("",!0),o.isActivated?(a(),r("div",uo,[t("button",{onClick:s[3]||(s[3]=(...C)=>l.sellNft&&l.sellNft(...C)),class:"btn btn-primary",type:"button",disabled:e.waitingData||e.waitingSell||!e.userTokenId||e.priceSellWei==0},[e.waitingSell?(a(),r("span",go)):c("",!0),u(" Sell for "+p(l.formatPrice(e.priceSellWei))+" "+p(i.$config.tokenSymbol),1)],8,po)])):c("",!0)]),o.isActivated?(a(),r("small",fo,[t("em",null," (Price may still change after pressing the button, so make sure to check the "+p(i.$config.tokenSymbol)+" amount in wallet.) ",1)])):c("",!0)])])])]),e.userTokenId?c("",!0):(a(),r("div",_o,yo)),i.$config.chatChannels.nftLaunchpad&&e.userTokenId?(a(),F(L,{key:e.cAddress,class:"mt-3 scroll-500",showQuotedPost:i.$config.showRepliesOnHomepage,orbisContext:i.$config.chatChannels.nftLaunchpad+":"+e.cAddress},null,8,["showQuotedPost","orbisContext"])):c("",!0),m(O,{cAddress:e.cAddress,mdAddress:e.mdAddress},null,8,["cAddress","mdAddress"]),m(R,{cAddress:e.cAddress,mdAddress:e.mdAddress,onSaveCollection:l.saveCollection},null,8,["cAddress","mdAddress","onSaveCollection"]),m(W,{cAddress:e.cAddress,cDescription:e.cDescription,mdAddress:e.mdAddress,onSaveCollection:l.saveCollection},null,8,["cAddress","cDescription","mdAddress","onSaveCollection"]),m(j,{mdAddress:e.mdAddress,cType:e.cType,cAddress:e.cAddress,onSaveCollection:l.saveCollection},null,8,["mdAddress","cType","cAddress","onSaveCollection"]),m(V,{mdAddress:e.mdAddress,cAddress:e.cAddress},null,8,["mdAddress","cAddress"])],64)}const Eo=w(_s,[["render",wo]]);export{Eo as default};
