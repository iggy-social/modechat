import{a as r,l as n,c as i,r as p,o as a}from"./entry.3ab93f32.js";import{C as c}from"./ChatFeed.5286df69.js";import"./textUtils.3e2a3f55.js";import"./ChatPost.b7ac797a.js";import"./user.6a6612c1.js";import"./ProfileImage.e58e5318.js";import"./MintedPostImage.68c056e7.js";import"./WaitingToast.0dc21868.js";import"./storageUtils.76506656.js";import"./domainUtils.778019d8.js";import"./site.1cc6cd52.js";import"./ConnectWalletButton.606f1afb.js";import"./FileUploadModal.a9466a5c.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,h,u,f,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};