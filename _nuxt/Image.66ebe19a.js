import{a as c,o as l,b as h,f,D as o,m as p}from"./entry.c0d3013c.js";const n={name:"Image",props:["alt","cls","url"],data(){return{cid:null,imageUrl:null,loading:!0}},mounted(){this.fetchImageData()},computed:{parseImageLink(){let s=this.imageUrl;return s&&s.includes("ipfs://")&&(s=s.replace("ipfs://",this.$config.ipfsGateway)),s}},methods:{fetchImageData(){this.imageUrl=this.url,this.url&&(this.url.startsWith(this.$config.ipfsGateway)?this.cid=this.url.replace(this.$config.ipfsGateway,""):this.url.startsWith(this.$config.ipfsGateway2)?this.cid=this.url.replace(this.$config.ipfsGateway2,""):this.url.startsWith(this.$config.ipfsGateway3)?this.cid=this.url.replace(this.$config.ipfsGateway3,""):this.url.startsWith("https://cloudflare-ipfs.com/ipfs/")?this.cid=this.url.replace("https://cloudflare-ipfs.com/ipfs/",""):this.url.startsWith("https://ipfs.io/ipfs/")?this.cid=this.url.replace("https://ipfs.io/ipfs/",""):this.url.startsWith("ipfs://")?this.cid=this.url.replace("ipfs://",""):this.url.startsWith("https://ipfs.itslit.org/ipfs/")?this.cid=this.url.replace("https://ipfs.itslit.org/ipfs/",""):this.url.startsWith("https://ipfs.dylmusic.com/ipfs/")&&(this.cid=this.url.replace("https://ipfs.dylmusic.com/ipfs/","")))},handleLoadError(){if(this.cid){if(this.imageUrl.startsWith(this.$config.ipfsGateway))return this.imageUrl=this.$config.ipfsGateway3+this.cid;if(this.imageUrl.startsWith(this.$config.ipfsGateway3))return this.imageUrl=this.$config.ipfsGateway2+this.cid}this.imageUrl="https://placeholder.pics/svg/300/8e85e6/ffffff/loading%20error",this.loading=!1}}},d=["src","alt"],u={class:"d-flex justify-content-center"},g={key:0,class:"spinner-grow spinner-grow-lg",role:"status","aria-hidden":"true"};function m(s,i,e,y,r,t){return l(),h("div",null,[f("img",{onLoad:i[0]||(i[0]=a=>r.loading=!1),src:t.parseImageLink,onError:i[1]||(i[1]=(...a)=>t.handleLoadError&&t.handleLoadError(...a)),alt:e.alt,class:o(e.cls)},null,42,d),f("div",u,[r.loading?(l(),h("span",g)):p("",!0)])])}const G=c(n,[["render",m]]);export{G as I};
