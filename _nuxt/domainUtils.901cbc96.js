import{q as l,I as c,C as i}from"./entry.b7e7778b.js";async function f(r){const s=l();let t=r;r.includes(s.altDomain)||(t=t+s.altDomain);const o=`https://api.prd.space.id/v1/getAddress?tld=${s.altDomain.replace(".","")}&name=${t}`;try{const e=await $fetch(o).catch(d=>d.data);let n=e;if(typeof e=="string"&&(n=JSON.parse(e)),n?.error)return console.log("Error fetching alt domain holder: ",n.error),null;if(n?.code==1)return console.log("Error fetching alt domain:",n.msg),null;if(n?.code==0)return console.log("Alt domain holder:",n.address),n.address}catch(e){console.log("Error fetching alternative domain holder: ",e)}return null}async function g(r){const a=`https://api.prd.space.id/v1/getName?tld=${l().altDomain.replace(".","")}&address=${r}`;try{const o=await $fetch(a).catch(n=>n.data);let e=o;if(typeof o=="string"&&(e=JSON.parse(o)),e?.error)return console.log("Error fetching alt domain: ",e.error),null;if(e?.code==1)return console.log("Error fetching alt domain:",e.msg),null;if(e?.code==0)return console.log("Alt domain name:",e.name),e.name}catch(o){console.log("Error fetching alternative domain name: ",o)}return null}async function m(r,s){const t=l();let a=s;a||(a=this.$getFallbackProvider(t.supportedChainId)),r.includes(t.tldName)&&(r=r.replace(t.tldName,""));const o=new c(["function getDomainHolder(string memory) public view returns(address)"]);return await new i(t.punkTldAddress,o,a).getDomainHolder(r)}async function p(r,s){const t=l();let a=s;a||(a=this.$getFallbackProvider(t.supportedChainId));const o=new c(["function defaultNames(address) view returns (string)"]);return await new i(t.punkTldAddress,o,a).defaultNames(r)}export{g as a,m as b,f as c,p as g};