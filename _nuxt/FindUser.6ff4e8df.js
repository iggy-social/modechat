import{a as o,o as d,b as m,f as e,x as u,y as c,E as r,t,i as N,z as h}from"./entry.34533b26.js";const f={name:"FindUser",emit:["closeModal"],data(){return{domainName:null}},computed:{domainNotValid(){return this.domainName===""?{invalid:!0,message:null}:this.domainName===null?{invalid:!0,message:null}:this.domainName.includes(".")?{invalid:!0,message:"Dots not allowed"}:this.domainName.includes(" ")?{invalid:!0,message:"Spaces not allowed"}:this.domainName.includes("%")?{invalid:!0,message:"% not allowed"}:this.domainName.includes("&")?{invalid:!0,message:"& not allowed"}:this.domainName.includes("?")?{invalid:!0,message:"? not allowed"}:this.domainName.includes("#")?{invalid:!0,message:"# not allowed"}:this.domainName.includes("/")?{invalid:!0,message:"/ not allowed"}:this.domainName.includes(",")?{invalid:!0,message:"Comma not allowed"}:this.domainName.includes("\\")||this.domainName.includes("\xAD")||this.domainName.includes("	")||this.domainName.includes("\u034F")||this.domainName.includes("\u061C")||this.domainName.includes("\u070F")||this.domainName.includes("\u115F")||this.domainName.includes("\u1160")||this.domainName.includes("\u1680")||this.domainName.includes("\u17B4")||this.domainName.includes("\u17B5")||this.domainName.includes("\u180E")||this.domainName.includes("\u2000")||this.domainName.includes("\u2001")||this.domainName.includes("\u2002")||this.domainName.includes("\u2003")||this.domainName.includes("\u2004")||this.domainName.includes("\u2005")||this.domainName.includes("\u2006")||this.domainName.includes("\u2007")||this.domainName.includes("\u2008")||this.domainName.includes("\u2009")||this.domainName.includes("\u200A")||this.domainName.includes("\u200B")||this.domainName.includes("\u200C")||this.domainName.includes("\u200D")||this.domainName.includes("\u200E")||this.domainName.includes("\u200F")||this.domainName.includes("\u202F")||this.domainName.includes("\u205F")||this.domainName.includes("\u2060")||this.domainName.includes("\u2061")||this.domainName.includes("\u2062")||this.domainName.includes("\u2063")||this.domainName.includes("\u2064")||this.domainName.includes("\u206A")||this.domainName.includes("\u206B")||this.domainName.includes("\u206C")||this.domainName.includes("\u206D")||this.domainName.includes("\u206E")||this.domainName.includes("\u206F")||this.domainName.includes("\u3000")||this.domainName.includes("\u2800")||this.domainName.includes("\u3164")||this.domainName.includes("\uFFA0")||this.domainName.includes("\u{110B1}")||this.domainName.includes("\u{1BCA0}")||this.domainName.includes("\u{1BCA1}")||this.domainName.includes("\u{1BCA2}")||this.domainName.includes("\u{1BCA3}")||this.domainName.includes("\u{1D159}")||this.domainName.includes("\u{1D173}")||this.domainName.includes("\u{1D174}")||this.domainName.includes("\u{1D175}")||this.domainName.includes("\u{1D176}")||this.domainName.includes("\u{1D177}")||this.domainName.includes("\u{1D178}")||this.domainName.includes("\u{1D179}")||this.domainName.includes("\u{1D17A}")||this.domainName.includes("\v")||this.domainName.includes("\f")||this.domainName.includes("\x85")?{invalid:!0,message:"This character is not allowed"}:{invalid:!1,message:"Domain name is valid"}}},methods:{redirectToProfile(){this.$router.push({path:"/profile",query:{id:this.domainName+this.$config.tldName}}),this.$emit("closeModal")}}},g={class:"input-group mb-3"},v={class:"input-group-text",id:"find-user"},p={key:0,class:"text-danger"},_=e("i",{class:"bi bi-exclamation-octagon"},null,-1),b={class:"text-center"},w=["disabled"];function x(l,a,y,V,n,i){return d(),m("div",null,[e("div",g,[u(e("input",{type:"text",class:"form-control text-end",placeholder:"enter name","aria-describedby":"find-user","onUpdate:modelValue":a[0]||(a[0]=s=>n.domainName=s),onKeyup:a[1]||(a[1]=r((...s)=>i.redirectToProfile&&i.redirectToProfile(...s),["enter"]))},null,544),[[c,n.domainName]]),e("span",v,t(l.$config.tldName),1)]),i.domainNotValid.invalid&&i.domainNotValid.message?(d(),m("p",p,[e("small",null,[_,N(" "+t(i.domainNotValid.message),1)])])):h("",!0),e("div",b,[e("button",{class:"btn btn-primary mt-2 mb-2",disabled:i.domainNotValid.invalid,onClick:a[2]||(a[2]=(...s)=>i.redirectToProfile&&i.redirectToProfile(...s))}," Find User ",8,w)])])}const P=o(f,[["render",x]]);export{P as F};