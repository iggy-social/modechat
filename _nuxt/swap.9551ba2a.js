import{H as l,T as d,M as m}from"./components.a02042b2.js";import{t as _}from"./tokens.0e44c413.js";import{S as f}from"./SimpleSwap.b34ea363.js";import{a as u,b as w,e,w as a,f as t,F as S,r as k,o as g,i as h,t as T}from"./entry.75e64971.js";import"./composables.f0adf088.js";import"./balanceUtils.77a3c85e.js";import"./site.8f9bd163.js";import"./ConnectWalletButton.ad2acc96.js";import"./WaitingToast.d823ddb5.js";import"./storageUtils.63ad2055.js";const $={name:"Swap",components:{SimpleSwap:f},setup(){return{tokens:_}}},b={class:"scroll-500"},v={class:"card border"},M={class:"card-body mb-3"},y={class:"fs-3"},j=t("h3",{class:"mt-3"},"Token Swap",-1),A={class:"d-flex justify-content-center mt-5"},B={class:"col-12 col-lg-8"};function C(o,s,H,n,N,V){const r=d,c=m,i=l,p=k("SimpleSwap");return g(),w(S,null,[e(i,null,{default:a(()=>[e(r,null,{default:a(()=>[h("Swap | "+T(o.$config.projectMetadataTitle),1)]),_:1}),e(c,{property:"og:title",content:"Token Swap | "+o.$config.projectMetadataTitle},null,8,["content"])]),_:1}),t("div",b,[t("div",v,[t("div",M,[t("p",y,[t("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:s[0]||(s[0]=x=>o.$router.back())})]),j,t("div",A,[t("div",B,[e(p,{routerAddress:o.$config.swapRouterAddress,swapId:"SwapPage1",tokens:n.tokens},null,8,["routerAddress","tokens"])])])])])])],64)}const K=u($,[["render",C]]);export{K as default};
