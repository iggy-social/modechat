import{a as r,l as n,c as i,r as p,o as a}from"./entry.62e57deb.js";import{C as c}from"./ChatFeed.4823d009.js";import"./ChatPost.5279a40d.js";import"./user.cdf8e8b9.js";import"./ProfileImage.de3e49bc.js";import"./MintedPostImage.8c3ec91f.js";import"./WaitingToast.39ba5675.js";import"./textUtils.3bfe5aff.js";import"./storageUtils.dbe982fd.js";import"./domainUtils.41b08c87.js";import"./site.61de74d4.js";import"./ConnectWalletButton.fda5f060.js";import"./FileUploadModal.ec432e9e.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,h,u,f,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};
