import{a as r,l as n,c as i,r as p,o as a}from"./entry.82952630.js";import{C as c}from"./ChatFeed.daa894f1.js";import"./ChatPost.4b1e10a7.js";import"./user.65f0c4e6.js";import"./ProfileImage.ff85bd13.js";import"./MintedPostImage.964c02ce.js";import"./WaitingToast.3191acdb.js";import"./textUtils.a745dca8.js";import"./storageUtils.36aba7aa.js";import"./domainUtils.42b10002.js";import"./site.bae39cb9.js";import"./ConnectWalletButton.d77ff693.js";import"./FileUploadModal.5381cc57.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,h,u,f,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};