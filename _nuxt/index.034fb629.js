import{a as r,l as n,c as i,r as p,o as a}from"./entry.4ebf8945.js";import{C as c}from"./ChatFeed.0a0cc153.js";import"./ChatPost.92fc867d.js";import"./user.5b82152b.js";import"./ProfileImage.59d2d06a.js";import"./MintedPostImage.77100d7f.js";import"./WaitingToast.74989820.js";import"./textUtils.6f589622.js";import"./storageUtils.1614141b.js";import"./domainUtils.c00435c5.js";import"./site.cc6cfd4d.js";import"./ConnectWalletButton.eba99bf8.js";import"./FileUploadModal.053e35d4.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,h,u,f,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};
