import{a as r,l as n,c as i,r as p,o as a}from"./entry.57d176b0.js";import{C as c}from"./ChatFeed.2cfe56cc.js";import"./ChatPost.ef76ce24.js";import"./user.92334214.js";import"./ProfileImage.5b51266e.js";import"./WaitingToast.665f25c7.js";import"./textUtils.52f132e7.js";import"./storageUtils.6fab5108.js";import"./MintedPostImage.3e6ef26e.js";import"./domainUtils.d654c486.js";import"./site.73b666a7.js";import"./ConnectWalletButton.14edfd42.js";import"./SwitchChainButton.9b1e0894.js";import"./FileUploadModal.b63f6798.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,h,u,f,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const T=r(m,[["render",d]]);export{T as default};
