import{a as p,l as u,o as d,b as r,t as s,z as i,f as t,F as c}from"./entry.ffeed8b9.js";const m={name:"SwitchChainButton",props:["dropdown","navbar"],computed:{showChainName(){return this.chainId===this.$config.supportedChainId?this.$getChainName(this.$config.supportedChainId):"Unsupported network"}},methods:{changeNetwork(e){const n=this.$switchChain(e);window.ethereum.request({method:n.method,params:n.params})}},setup(){const{chainId:e}=u();return{chainId:e}}},w={key:1,class:"dropdown"},g={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},l={class:"dropdown-menu"},C={key:2,class:"nav-item dropdown"},f={class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},N={class:"dropdown-menu dropdown-menu-end"};function b(e,n,o,k,v,a){return d(),r(c,null,[!o.navbar&&!o.dropdown?(d(),r("button",{key:0,class:"btn btn-primary",onClick:n[0]||(n[0]=h=>a.changeNetwork(e.$getChainName(e.$config.supportedChainId)))}," Switch to "+s(e.$getChainName(e.$config.supportedChainId)),1)):i("",!0),!o.navbar&&o.dropdown?(d(),r("div",w,[t("button",g,s(a.showChainName),1),t("div",l,[t("span",{class:"dropdown-item cursor-pointer",onClick:n[1]||(n[1]=h=>a.changeNetwork(e.$getChainName(e.$config.supportedChainId)))}," Switch to "+s(e.$getChainName(e.$config.supportedChainId)),1)])])):i("",!0),o.navbar&&o.dropdown?(d(),r("li",C,[t("a",f,s(a.showChainName),1),t("div",N,[t("span",{class:"dropdown-item cursor-pointer",onClick:n[2]||(n[2]=h=>a.changeNetwork(e.$getChainName(e.$config.supportedChainId)))}," Switch to "+s(e.$getChainName(e.$config.supportedChainId)),1)])])):i("",!0)],64)}const I=p(m,[["render",b]]);export{I as S};