import{a as p,l as g,o as i,b as h,t as s,m as u,f as a,F as m,I as l,C as w,c as f,w as C,T as I}from"./entry.eede31a6.js";const $={name:"SwitchChainButton",props:["dropdown","navbar"],computed:{showChainName(){return this.chainId===this.$config.supportedChainId?this.$getChainName(this.$config.supportedChainId):"Unsupported network"}},methods:{changeNetwork(t){this.$switchOrAddChain(window.ethereum,t)}},setup(){const{chainId:t}=g();return{chainId:t}}},_={key:1,class:"dropdown"},b={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},k={class:"dropdown-menu"},N={key:2,class:"nav-item dropdown"},v={class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},y={class:"dropdown-menu dropdown-menu-end"};function S(t,n,e,r,d,o){return i(),h(m,null,[!e.navbar&&!e.dropdown?(i(),h("button",{key:0,class:"btn btn-primary",onClick:n[0]||(n[0]=c=>o.changeNetwork(t.$getChainName(t.$config.supportedChainId)))}," Switch to "+s(t.$getChainName(t.$config.supportedChainId)),1)):u("",!0),!e.navbar&&e.dropdown?(i(),h("div",_,[a("button",b,s(o.showChainName),1),a("div",k,[a("span",{class:"dropdown-item cursor-pointer",onClick:n[1]||(n[1]=c=>o.changeNetwork(t.$getChainName(t.$config.supportedChainId)))}," Switch to "+s(t.$getChainName(t.$config.supportedChainId)),1)])])):u("",!0),e.navbar&&e.dropdown?(i(),h("li",N,[a("a",v,s(o.showChainName),1),a("div",y,[a("span",{class:"dropdown-item cursor-pointer",onClick:n[2]||(n[2]=c=>o.changeNetwork(t.$getChainName(t.$config.supportedChainId)))}," Switch to "+s(t.$getChainName(t.$config.supportedChainId)),1)])])):u("",!0)],64)}const F=p($,[["render",S]]),B={name:"MintedPostImage",props:["id"],data(){return{streamId:null,image:null}},mounted(){this.fetchMetadata()},methods:{async fetchMetadata(){let t=localStorage.getItem("minted-post-"+this.id);if(!t){let r=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(r=this.signer);const d=new l(["function uri(uint256 _tokenId) external view returns (string memory)"]);t=await new w(this.$config.iggyPostAddress,d,r).uri(this.id),localStorage.setItem("minted-post-"+this.id,t)}const n=atob(t.substring(29)),e=JSON.parse(n);this.streamId=e.external_url.split("?id=")[1],this.image=e.image}},setup(){const{isActivated:t,chainId:n,signer:e}=g();return{isActivated:t,chainId:n,signer:e}}},M=["src"];function P(t,n,e,r,d,o){const c=I;return i(),f(c,{to:"/minted-post/?id="+e.id},{default:C(()=>[a("img",{class:"img-fluid rounded",src:d.image},null,8,M)]),_:1},8,["to"])}const E=p(B,[["render",P]]);export{E as M,F as S};
