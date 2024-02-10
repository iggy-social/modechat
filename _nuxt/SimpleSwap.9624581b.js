import{s as W,C as v,P as x,A as d,I as D,a as N,l as O,x as H,o as l,b as c,f as n,t as r,i as P,y as C,z as I,m,v as Y,a4 as j,F as M,G as F,c as z,e as U,r as S}from"./entry.5fa3938b.js";import{E as G,b as K,a as X}from"./balanceUtils.cedf0ed2.js";import{u as E}from"./site.f9ed7279.js";import{C as Z}from"./ConnectWalletButton.4147853b.js";import{W as B}from"./WaitingToast.96150bf8.js";import{f as q}from"./storageUtils.ef953615.js";const T={1:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",10:"0x4200000000000000000000000000000000000006",14:"0x1d80c49bbbcd1c0911346656b529df9e5c2f783d",19:"0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED",56:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",100:"0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",137:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",250:"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",324:"0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",919:"0xeb72756ee12309Eae82a0deb9787e69f5b62949c",1101:"0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",34443:"0x4200000000000000000000000000000000000006",42161:"0x82af49447d8a07e3bd95bd0d56f35241523fbab1",43114:"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"};async function J(o,e,i,u,s){const t=W();let p=o;p||(p=this.$getFallbackProvider(t.supportedChainId));const h=["function getPriceImpact(address tokenIn, address tokenOut, uint amountIn) external view returns (uint)"],b=new v(s,h,p),a=x(u,e.decimals),f=await b.getPriceImpact(e.address,i.address,a);return Number(f)}async function Q(o,e,i,u,s){const t=W();let p=o;p||(p=this.$getFallbackProvider(t.supportedChainId));const h=x(u,e.decimals);let b=[e.address,i.address];const a=T[String(t.supportedChainId)];if(e.address!==d&&e.address!==a&&i.address!==d&&i.address!==a&&(b=[e.address,a,i.address]),(e.address===d||e.address===a)&&(i.address===d||i.address===a))return h;const f=["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"],k=await new v(s,f,p).getAmountsOut(h,b);return k[k.length-1]}function $(o,e,i,u,s,t,p,h){const b=W(),a=E();let f=o;const A=Math.floor(Date.now()/1e3)+60*Number(a.getSwapDeadline),k=String(T[String(b.supportedChainId)]).toLowerCase(),w=String(i.address).toLowerCase(),g=String(u.address).toLowerCase(),R=new D(["function deposit() payable","function withdraw(uint wad)"]),L=new v(k,R,f);if(w===d&&g===k)return L.deposit({value:s});if(w===k&&g===d)return L.withdraw(s);{const V=["function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactTokensForTokensWithReferrer(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function swapExactETHForTokensWithReferrer(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactTokensForETHWithReferrer(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)"],y=new v(p,V,f);let _=[w,g];return w===d&&g!==k&&g!==d?h===d?y.swapExactETHForTokens(t,_,e,A,{value:s}):y.swapExactETHForTokensWithReferrer(t,_,e,A,h,{value:s}):w!==d&&w!==k&&g===d?h===d?y.swapExactTokensForETH(s,t,_,e,A):y.swapExactTokensForETHWithReferrer(s,t,_,e,A,h):(w!==k&&g!==k&&(_=[w,k,g]),h===d?y.swapExactTokensForTokens(s,t,_,e,A):y.swapExactTokensForTokensWithReferrer(s,t,_,e,A,h))}}const tt={name:"TokenApprovalModal",props:["amount","modalId","routerAddress","token"],emits:["setApprovalAmount"],components:{WaitingToast:B},data(){return{waiting:!1,selectedOption:"unlimited",approvalAmount:0}},mounted(){this.approvalAmount=this.amount},computed:{isUnlimited(){return this.selectedOption==="unlimited"}},methods:{selectOption(o){this.selectedOption=o},async approveToken(){this.waiting=!0;let o=this.approvalAmount;this.isUnlimited&&(o=1e16);const e=x(String(o),this.token.decimals),i=new v(this.token.address,G,this.signer);try{const u=await i.approve(this.routerAddress,e),s=this.toast({component:B,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+u.hash,"_blank").focus()}),t=await u.wait();t.status===1?(this.toast.dismiss(s),this.toast("You have successfully approved "+this.token.symbol+"!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+u.hash,"_blank").focus()}),this.$emit("setApprovalAmount",o),this.waiting=!1,document.getElementById("closeTokenApprovalModal"+this.modalId).click()):(this.waiting=!1,this.toast.dismiss(s),this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+u.hash,"_blank").focus()}),console.log(t))}catch{this.toast.error("Something went wrong while approving the token"),this.waiting=!1;return}this.waiting=!1}},setup(){const{signer:o}=O(),e=H();return{signer:o,toast:e}},watch:{amount(o,e){o&&(this.approvalAmount=this.amount)}}},et=["id","aria-labelledby"],nt={class:"modal-dialog"},ot={class:"modal-content"},st={class:"modal-header"},it=["id"],at=["id"],ut={class:"modal-body"},rt={class:"row mt-3"},lt={class:"col-lg-8"},dt={class:"input-group-text"},ct=["checked"],pt=n("input",{value:"Unlimited",type:"text",class:"form-control",disabled:""},null,-1),mt={class:"input-group-text"},ht=["checked"],kt=["disabled"],Tt={class:"input-group-text",id:"basic-addon2"},bt=n("p",{class:"mt-3"},[n("small",null,[n("em",null," If you want to do more swaps without approvals, set a big enough amount or choose unlimited. ")])],-1),ft={class:"modal-footer"},wt=["disabled"],gt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},At={key:1},_t={key:2};function yt(o,e,i,u,s,t){return l(),c("div",{class:"modal fade",id:"tokenApprovalModal"+i.modalId,tabindex:"-1","aria-labelledby":"tokenApprovalModalLabel"+i.modalId,"aria-hidden":"true"},[n("div",nt,[n("div",ot,[n("div",st,[n("h1",{class:"modal-title fs-5",id:"tokenApprovalModalLabel"+i.modalId},"Approve "+r(i.token?.symbol)+" token",9,it),n("button",{id:"closeTokenApprovalModal"+i.modalId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,at)]),n("div",ut,[P(" Approve "+r(i.token?.symbol)+" tokens for swapping: ",1),n("div",rt,[n("div",lt,[n("div",{class:"input-group",onClick:e[0]||(e[0]=p=>t.selectOption("unlimited"))},[n("div",dt,[n("input",{class:"form-check-input mt-0",type:"radio",checked:t.isUnlimited},null,8,ct)]),pt]),n("div",{class:"input-group mt-2",onClick:e[2]||(e[2]=p=>t.selectOption("limited"))},[n("div",mt,[n("input",{class:"form-check-input mt-0",type:"radio",checked:!t.isUnlimited},null,8,ht)]),C(n("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>s.approvalAmount=p),type:"text",class:"form-control",disabled:s.waiting},null,8,kt),[[I,s.approvalAmount]]),n("span",Tt,r(i.token?.symbol),1)])])]),bt]),n("div",ft,[n("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...p)=>t.approveToken&&t.approveToken(...p)),disabled:s.waiting},[s.waiting?(l(),c("span",gt)):m("",!0),t.isUnlimited?(l(),c("span",At,"Approve unlimited")):m("",!0),t.isUnlimited?m("",!0):(l(),c("span",_t,"Approve "+r(s.approvalAmount)+" "+r(i.token?.symbol),1))],8,wt)])])])],8,et)}const vt=N(tt,[["render",yt]]),xt={name:"SwapTokensModal",props:["inputToken","inputTokenAmount","modalId","outputToken","outputTokenAmount","outputTokenAmountWei","routerAddress"],emits:["changeInputTokenBalance"],data(){return{waiting:!1}},components:{WaitingToast:B},computed:{bothTokensAreNativeCoinOrWrappedToken(){return!!(this.inputIsNativeCoin&&this.outputIsWrappedNativeCoin||this.inputIsWrappedNativeCoin&&this.outputIsNativeCoin)},inputIsNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(d).toLowerCase()},inputIsWrappedNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(T[this.$config.supportedChainId]).toLowerCase()},outputIsNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(d).toLowerCase()},outputIsWrappedNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(T[this.$config.supportedChainId]).toLowerCase()}},methods:{async swap(){this.waiting=!0;const o=x(this.inputTokenAmount,this.inputToken?.decimals);try{const e=await $(this.signer,this.address,this.inputToken,this.outputToken,o,this.outputTokenAmountWei,this.routerAddress,q(window)),i=this.toast({component:B,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),u=await e.wait();u.status===1?(this.toast.dismiss(i),this.toast("You have successfully swapped "+this.inputToken.symbol+" for "+this.outputToken.symbol+"!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),this.$emit("changeInputTokenBalance"),this.waiting=!1,document.getElementById("closeSwapTokensModal"+this.modalId).click()):(this.waiting=!1,this.toast.dismiss(i),this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+e.hash,"_blank").focus()}),console.log(u))}catch{this.toast.error("Something went wrong while swapping tokens"),this.waiting=!1;return}this.waiting=!1}},setup(){const{address:o,signer:e}=O(),i=H(),u=E();return{address:o,signer:e,siteStore:u,toast:i}}},Ct=["id","aria-labelledby"],It={class:"modal-dialog"},Bt={class:"modal-content"},St={class:"modal-header"},Wt=["id"],Nt=["id"],Ot={class:"modal-body"},Et=n("p",null,"Double-check the swap amounts:",-1),Lt={class:"input-group mb-3"},Mt={class:"input-group-text",id:"basic-addon1"},Ft=["value"],Ut=n("h4",{class:"text-center mt-2"},[n("i",{class:"bi bi-arrow-down"})],-1),Ht={class:"input-group mb-3"},Pt={class:"input-group-text",id:"basic-addon1"},Rt=["value"],Vt={key:0},Dt={class:"modal-footer"},Yt=["disabled"],jt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function zt(o,e,i,u,s,t){return l(),c("div",{class:"modal fade",id:"swapTokensModal"+i.modalId,tabindex:"-1","aria-labelledby":"swapTokensModalLabel"+i.modalId,"aria-hidden":"true"},[n("div",It,[n("div",Bt,[n("div",St,[n("h1",{class:"modal-title fs-5",id:"swapTokensModalLabel"+i.modalId},"Swap tokens",8,Wt),n("button",{id:"closeSwapTokensModal"+i.modalId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Nt)]),n("div",Ot,[Et,n("div",Lt,[n("span",Mt,r(i.inputToken?.symbol),1),n("input",{type:"text",class:"form-control",value:i.inputTokenAmount,disabled:""},null,8,Ft)]),Ut,n("div",Ht,[n("span",Pt,r(i.outputToken?.symbol),1),n("input",{type:"text",class:"form-control",value:i.outputTokenAmount,disabled:""},null,8,Rt)]),t.bothTokensAreNativeCoinOrWrappedToken?m("",!0):(l(),c("small",Vt,[n("em",null," You will get at least "+r(i.outputTokenAmount)+" "+r(i.outputToken?.symbol)+", but probably more ("+r(u.siteStore.getSlippage)+"% slippage). ",1)]))]),n("div",Dt,[n("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...p)=>t.swap&&t.swap(...p)),disabled:s.waiting},[s.waiting?(l(),c("span",jt)):m("",!0),P(" Swap tokens ")],8,Yt)])])])],8,Ct)}const Gt=N(xt,[["render",zt]]),Kt={name:"SimpleSwap",props:["outputPlaceholder","poweredBy","routerAddress","swapId","tokens"],data(){return{debounce:null,filterTextInput:"",filterTextOutput:"",inputToken:null,inputTokenAllowance:0,inputTokenAmount:null,inputTokenBalance:null,outputText:"0",outputToken:null,outputTokenAmountWei:null,preswapCheck:!1,priceImpact:0,timeout:800,tokenList:[]}},components:{ConnectWalletButton:Z,SwapTokensModal:Gt,TokenApprovalModal:vt},mounted(){this.tokenList=this.getFilteredTokens(this.tokens.tokens),this.selectInputToken(this.tokenList[0]),this.selectOutputToken(this.tokenList[1]),this.outputPlaceholder&&(this.outputText=this.outputPlaceholder)},computed:{allowanceTooLow(){return Number(this.inputTokenAllowance)<Number(this.inputTokenAmount)},bothTokensAreNativeCoinOrWrappedTokenOrSame(){return this.inputToken.address==d&&this.outputToken.address==T[this.$config.supportedChainId]||this.inputToken.address==T[this.$config.supportedChainId]&&this.outputToken.address==d||this.inputToken.address==d&&this.outputToken.address==d||this.inputToken.address==T[this.$config.supportedChainId]&&this.outputToken.address==T[this.$config.supportedChainId]?!0:this.inputToken.address==this.outputToken.address},bothTokensAreTheSame(){return this.inputToken.address==this.outputToken.address},filteredTokensInput(){const o=new RegExp(this.filterTextInput,"i");return this.tokenList.filter(e=>o.test(e.symbol))},filteredTokensOutput(){const o=new RegExp(this.filterTextOutput,"i");return this.tokenList.filter(e=>o.test(e.symbol))},formatInputTokenBalance(){return this.inputTokenBalance?this.inputTokenBalance==0?0:this.inputTokenBalance>100?Number(this.inputTokenBalance).toFixed(2):this.inputTokenBalance>1?Number(this.inputTokenBalance).toFixed(4):this.inputTokenBalance>.01?Number(this.inputTokenBalance).toFixed(6):this.inputTokenBalance>1e-4?Number(this.inputTokenBalance).toFixed(8):Number(this.inputTokenBalance).toFixed(10):0},inputAmountLessThanBalance(){return this.inputTokenAmount&&this.inputTokenBalance?Number(this.inputTokenAmount)<=Number(this.inputTokenBalance):!1},inputIsWrappedNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(T[this.$config.supportedChainId]).toLowerCase()},outputIsNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(d).toLowerCase()},outputTokenAmount(){if(this.outputTokenAmountWei){let o=Y(String(this.outputTokenAmountWei),this.outputToken.decimals);return o==0?0:o>100?Number(o).toFixed(2):o>1?Number(o).toFixed(4):o>.01?Number(o).toFixed(6):o>1e-4?Number(o).toFixed(8):Number(o).toFixed(10)}return null},priceImpactTooHigh(){return this.priceImpact>this.$config.swapPriceImpactMaxBps},unwrappingWrappedNativeCoin(){return!!(this.inputIsWrappedNativeCoin&&this.outputIsNativeCoin)}},methods:{getTokenAllowance:K,getTokenBalance:X,changeInputTokenAllowance(o){this.inputTokenAllowance=Number(o)},getFilteredTokens(o){return o.filter(e=>e.swap)},async getOutputAmount(){if(this.inputTokenAmount){if(this.bothTokensAreNativeCoinOrWrappedTokenOrSame)this.outputTokenAmountWei=x(this.inputTokenAmount,this.inputToken.decimals);else{const o=await Q(this.signer,this.inputToken,this.outputToken,this.inputTokenAmount,this.routerAddress),e=Math.floor(Number(this.siteStore.getSlippage)*100);this.outputTokenAmountWei=o.sub(o.div(1e4).mul(e))}this.priceImpact=await J(this.signer,this.inputToken,this.outputToken,this.inputTokenAmount,this.routerAddress)}else this.outputTokenAmountWei=null},getOutputAmountWithTimeout(){this.debounce&&clearTimeout(this.debounce);const o=this;this.debounce=setTimeout(()=>{o.getOutputAmount()},o.timeout)},async selectInputToken(o){this.inputTokenAllowance=0,this.outputTokenAmountWei=null,this.inputToken=o,this.inputTokenAmount=null,this.signer&&(this.inputTokenBalance=await this.getTokenBalance(o,this.address,this.signer)),o.address==d?this.inputTokenAllowance=Number(j):this.inputTokenAllowance=await this.getTokenAllowance(o,this.address,this.routerAddress,this.signer)},selectOutputToken(o){this.outputToken=o,this.outputTokenAmountWei=null},setMaxInputTokenAmount(){this.inputTokenAmount=String(this.inputTokenBalance),this.getOutputAmount()},subtractInputTokenBalance(){this.inputTokenBalance=Number(this.inputTokenBalance)-Number(this.inputTokenAmount)},togglePreswapCheck(){this.preswapCheck=!this.preswapCheck}},setup(){const{address:o,isActivated:e,signer:i}=O(),u=E();return{address:o,isActivated:e,signer:i,siteStore:u}},watch:{async isActivated(){this.address&&(this.inputTokenBalance=await this.getTokenBalance(this.inputToken,this.address,this.signer))}}},Xt={class:"input-group mb-1"},Zt={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},qt={class:"dropdown-menu p-2"},Jt=["onClick"],Qt=n("small",null,"MAX",-1),$t=[Qt],te=n("em",null,"Balance: ",-1),ee={class:"cursor-pointer hover-color"},ne=n("i",{class:"bi bi-arrow-down"},null,-1),oe=[ne],se={class:"input-group mt-4"},ie={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},ae={class:"dropdown-menu p-2"},ue=["onClick"],re=["value","placeholder"],le={key:0},de={class:"d-flex justify-content-center mt-4"},ce={key:1,disabled:!0,class:"btn btn-outline-primary",type:"button"},pe=["data-bs-target"],me=["disabled","data-bs-target"],he={key:4,disabled:!0,class:"btn btn-outline-primary",type:"button"},ke={key:5,disabled:!0,class:"btn btn-outline-primary",type:"button"},Te={key:6,disabled:!0,class:"btn btn-outline-primary",type:"button"},be={key:1,class:"text-center mt-4"};function fe(o,e,i,u,s,t){const p=S("ConnectWalletButton"),h=S("TokenApprovalModal"),b=S("SwapTokensModal");return l(),c("div",null,[n("div",Xt,[n("button",Zt,r(s.inputToken?.symbol),1),n("ul",qt,[C(n("input",{class:"form-control mb-2",placeholder:"Filter tokens","onUpdate:modelValue":e[0]||(e[0]=a=>s.filterTextInput=a)},null,512),[[I,s.filterTextInput]]),(l(!0),c(M,null,F(t.filteredTokensInput,a=>(l(),c("li",{key:a.address,class:"cursor-pointer"},[n("span",{onClick:f=>t.selectInputToken(a),class:"dropdown-item"},r(a.symbol)+" ("+r(a.name)+")",9,Jt)]))),128))]),C(n("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.inputTokenAmount=a),type:"text",class:"form-control",placeholder:"0.00",onKeyup:e[2]||(e[2]=(...a)=>t.getOutputAmountWithTimeout&&t.getOutputAmountWithTimeout(...a))},null,544),[[I,s.inputTokenAmount]]),n("button",{onClick:e[3]||(e[3]=(...a)=>t.setMaxInputTokenAmount&&t.setMaxInputTokenAmount(...a)),class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},$t)]),n("small",{onClick:e[4]||(e[4]=(...a)=>t.setMaxInputTokenAmount&&t.setMaxInputTokenAmount(...a))},[te,n("em",ee,r(t.formatInputTokenBalance)+" "+r(s.inputToken?.symbol),1)]),n("h4",{onClick:e[5]||(e[5]=(...a)=>t.getOutputAmount&&t.getOutputAmount(...a)),class:"text-center mt-2 cursor-pointer"},oe),n("div",se,[n("button",ie,r(s.outputToken?.symbol),1),n("ul",ae,[C(n("input",{class:"form-control mb-2",placeholder:"Filter tokens","onUpdate:modelValue":e[6]||(e[6]=a=>s.filterTextOutput=a)},null,512),[[I,s.filterTextOutput]]),(l(!0),c(M,null,F(t.filteredTokensOutput,a=>(l(),c("li",{key:a.address,class:"cursor-pointer"},[n("span",{onClick:f=>t.selectOutputToken(a),class:"dropdown-item"},r(a.symbol)+" ("+r(a.name)+")",9,ue)]))),128))]),n("input",{type:"text",class:"form-control",value:t.outputTokenAmount,placeholder:s.outputText,disabled:""},null,8,re)]),t.outputTokenAmount&&!t.bothTokensAreNativeCoinOrWrappedTokenOrSame?(l(),c("small",le,[n("em",null," You will get at least "+r(t.outputTokenAmount)+" "+r(s.outputToken.symbol)+", but probably more ("+r(u.siteStore.getSlippage)+"% slippage). ",1)])):m("",!0),n("div",de,[u.isActivated?m("",!0):(l(),z(p,{key:0,class:"btn btn-outline-primary",btnText:"Connect wallet"})),u.isActivated&&!s.inputTokenAmount?(l(),c("button",ce," Swap tokens ")):m("",!0),u.isActivated&&s.inputTokenAmount&&t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&t.allowanceTooLow&&!t.unwrappingWrappedNativeCoin&&!t.priceImpactTooHigh?(l(),c("button",{key:2,class:"btn btn-outline-primary",type:"button","data-bs-toggle":"modal","data-bs-target":"#tokenApprovalModal"+i.swapId}," Approve token ",8,pe)):m("",!0),U(h,{modalId:i.swapId,token:s.inputToken,amount:s.inputTokenAmount,routerAddress:i.routerAddress,onSetApprovalAmount:t.changeInputTokenAllowance},null,8,["modalId","token","amount","routerAddress","onSetApprovalAmount"]),u.isActivated&&s.inputTokenAmount&&t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&!t.priceImpactTooHigh&&!t.priceImpactTooHigh&&(!t.allowanceTooLow||t.unwrappingWrappedNativeCoin)?(l(),c("button",{key:3,disabled:!s.inputToken||!s.outputToken||!s.inputTokenAmount||!t.outputTokenAmount||!u.isActivated||t.bothTokensAreTheSame||!t.inputAmountLessThanBalance,class:"btn btn-outline-primary",type:"button","data-bs-toggle":"modal","data-bs-target":"#swapTokensModal"+i.swapId,onClick:e[7]||(e[7]=(...a)=>t.getOutputAmount&&t.getOutputAmount(...a))}," Swap tokens ",8,me)):m("",!0),U(b,{modalId:i.swapId,inputToken:s.inputToken,inputTokenAmount:s.inputTokenAmount,outputToken:s.outputToken,outputTokenAmount:t.outputTokenAmount,outputTokenAmountWei:s.outputTokenAmountWei,routerAddress:i.routerAddress,onChangeInputTokenBalance:t.subtractInputTokenBalance},null,8,["modalId","inputToken","inputTokenAmount","outputToken","outputTokenAmount","outputTokenAmountWei","routerAddress","onChangeInputTokenBalance"]),u.isActivated&&s.inputTokenAmount&&!t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&!t.priceImpactTooHigh?(l(),c("button",he," Balance too low ")):m("",!0),u.isActivated&&s.inputTokenAmount&&t.bothTokensAreTheSame&&!t.priceImpactTooHigh?(l(),c("button",ke," Both tokens are the same ")):m("",!0),u.isActivated&&s.inputTokenAmount&&t.priceImpactTooHigh?(l(),c("button",Te," Price impact too high ")):m("",!0)]),i.poweredBy?(l(),c("p",be,[n("small",null,[n("em",null,"Powered by "+r(i.poweredBy)+".",1)])])):m("",!0)])}const xe=N(Kt,[["render",fe]]);export{xe as S};
