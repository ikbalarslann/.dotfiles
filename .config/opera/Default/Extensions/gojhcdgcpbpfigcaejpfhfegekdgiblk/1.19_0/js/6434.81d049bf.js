"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[6434],{36080:function(t,i,e){e.d(i,{Z:function(){return x}});var s=function(){var t=this,i=t._self._c;t._self._setupProxy;return t.activity&&t.token?i("div",{staticClass:"cursor-pointer flex my-3 p-4 rounded-lg t-activity_preview_item-transaction_detail",class:{"bg-dark-N16":!("pending"===t.txStatus),"bg-white":"pending"===t.txStatus,"text-spectrum-red":"failure"===t.txStatus,"text-white":!("pending"===t.txStatus),"text-dark-N16":"pending"===t.txStatus},on:{click:function(i){return t.openTransactionDetail(t.activity.hash)}}},[i("div",{staticClass:"mt-3 shrink-0"},[i("img",{class:[{"animate-spin":"pending"===t.txStatus}],attrs:{src:t.icons[t.txStatus]}})]),i("div",{staticClass:"flex items-center justify-between ml-4 truncate w-full"},[i("div",[i("div",{staticClass:"font-bold t-headline text-sm"},[t._v(t._s(t.headline))]),t.isRecipientOnly||t.isSenderOnly?t._e():i("div",{staticClass:"t-address text-dark-N77 text-sm",class:[{"text-spectrum-red":"failure"===t.txStatus}]},[t._v(" "+t._s(t.prettyAddress)+" ")])]),t.token?i("div",{staticClass:"text-end truncate"},[i("div",{staticClass:"flex font-bold justify-end text-sm"},[i("div",{staticClass:"max-w-[160px] pr-1 truncate",attrs:{title:t.value}},[t._v(" "+t._s(t.value)+" ")]),i("div",{staticClass:"max-w-[50px] min-w-[30px] truncate",attrs:{title:t.symbol}},[t._v(" "+t._s(t.symbol)+" ")])]),i("div",{staticClass:"text-dark-N77 text-sm",class:[{"text-spectrum-red":"failure"===t.txStatus}]},["pending"===t.txStatus?i("span",[t._v(t._s(t.$t("general.pending")+"..."))]):i("span",[t._v(t._s(t.timeOfActivity))])])]):t._e()])]):t._e()},a=[],n=e(79317),r=e(67041),c=e(46686),o=e(92496),l=e(20144),d=e(13692),h=e(10359),u=e(9502),p=e(44245),v=e(37426),y=l.ZP.extend({name:"ActivityItem",props:{activity:{default:void 0,type:Object}},data(){const t=1e4;return{BASE_DELAY:t,delay:{bnb:t,btc:6e4,eth:t,matic:5e3},icons:{failure:e(98498),pending:e(71643),success:e(27176)},prettyAddress:`${this.$t("general.loading")}...`,timeOfActivity:"",token:void 0,txStatus:null,updateActivityInterval:null,updateTimeOfActivityInterval:null,updatingTxStatus:!1}},computed:{address(){const t=this.token?.chain.coinType||this.activity.chain.coinType;return this.$store.getters.accountsByCoinType[t].toLowerCase()},displayAddress(){if(this.isRecipientOnly)return this.recipient;if(this.isSenderOnly)return this.sender;switch(this.address){case this.recipient:return this.sender;case this.sender:return this.recipient;default:return this.address}},headline(){if(this.isRecipientOnly)return this.$t("general.received");if(this.isSenderOnly)return this.$t("general.sent");const t="failure"===this.txStatus;switch(this.address){case this.recipient:return t?this.$t("general.failedToReceive"):this.$t("general.receivedFrom");case this.sender:return t?this.$t("general.failedToSend"):this.$t("general.sentTo");default:return this.$t("general.unknown")}},isRecipientOnly(){return!(!this.recipient||this.sender)},isSenderOnly(){return!(this.recipient||!this.sender)},recipient(){return this.activity.to?.toLowerCase()??""},sender(){return this.activity.from?.toLowerCase()??""},status(){return this.txStatus?this.$t(`general.${this.txStatus}`):`${this.$t("general.loading")}...`},symbol(){const{token:t}=this,i="symbol"in t?t.symbol:t.contract.symbol;return i},type(){return this.activity.type},value(){let{token:t}=this;return t=Object.assign({},t,{balance:h.Z.formatNumber(this.activity.value)}),h.Z.formatNumber(v.Z.tokenDecimal(t))}},watch:{activity:{deep:!0,handler(){this.txStatus!==this.activity.status&&this.updateActivity()}},displayAddress(){this.updateAddress()}},beforeDestroy(){clearInterval(this.updateActivityInterval),clearInterval(this.updateTimeOfActivityInterval)},mounted(){this.updateActivity(),this.updateToken(),this.updateAddress(),this.updateTimeOfActivity()},methods:{assembleEvmActivity(t){const i=t.status?"success":"failure";return this.txStatus=i,{block:t.blockNumber,chain:this.activity.chain,contract:this.activity.contract??t.contractAddress,from:this.activity.from,hash:t.transactionHash,status:i,time:(new Date).getTime(),to:this.activity.to,type:this.activity.type,unindexed:!0,value:this.activity.value}},fromNow:p.ZP.fromNow,openTransactionDetail(t){const i=this.$store.getters.transactionDetailsUrl(t,this.token.chain);this.$platform.openNewTab(i)},async requestUpdatedTransactions(){if(await this.$store.dispatch("getTransactions",this.activity.chain),this.$store.getters.allTransactions.find((t=>t.hash===this.activity.hash))){const{chain:t,hash:i,type:e}=this.activity;this.$store.dispatch("clearPendingTransaction",i),this.$store.dispatch("getTokensForChain",{chain:t,type:e}),this.updateTimeOfActivity()}else{const t=this.delay[this.type]??this.BASE_DELAY;setTimeout((()=>this.requestUpdatedTransactions()),t)}},async resolveEnsAddress(){try{this.prettyAddress=await this.$ens.resolveAddress(this.displayAddress)}catch(t){}},updateActivity(){if(this.txStatus=this.activity.status,"pending"!==this.txStatus||this.updateActivityInterval){if((0,c.ij)(this.activity.chain)){const t=-1;this.txStatus=this.activity.block===t?"failure":"success"}}else{this.$nextTick((()=>this.updateTxStatus()));const t=this.delay[this.type]??this.BASE_DELAY;this.updateActivityInterval=window.setInterval(this.updateTxStatus,t)}},updateAddress(){this.prettyAddress=u.Z.elideAddress(this.displayAddress),this.resolveEnsAddress()},updateTimeOfActivity(t){clearInterval(this.updateTimeOfActivityInterval);const i=()=>{const i=(new Date).getTime(),{time:e}=this.activity;if(!t&&i-e>=p.EB)return this.updateTimeOfActivity(p.EB);this.timeOfActivity="pending"===this.txStatus?"":this.fromNow(i,e)};i(),this.updateTimeOfActivityInterval=window.setInterval(i,t??p.sh)},async updateToken(){const{contract:t,chain:i,type:e}=this.activity;if(v.Z.isNativeTokenType(e)?this.token=this.$store.getters.matchingNativeToken(e):this.token=this.$store.getters.getTokenViaSerializedKey(t,i,n.oZ.VISIBLE),!this.token&&(0,c.cA)(i)){const e=await((0,d.Z)(i).getTokenInfo?.(t));e&&(this.token=v.Z.makeEvmToken(e,i))}},async updateTxStatus(){if(this.updatingTxStatus)return;if(this.updatingTxStatus=!0,"pending"!==this.txStatus)return clearInterval(this.updateActivityInterval),void(this.updatingTxStatus=!1);const t=r.B1.find((t=>(0,c.F2)(t.chain,this.activity.chain)));if(t?.rpcUrls?.length){const[i]=t.rpcUrls,[e]=i.split("//"),s=new Map([["https:","JsonRpcProvider"],["wss:","WebSocketProvider"]]),a=s.get(e),n=new o[a](i),r=await n.waitForTransaction(this.activity.hash);"status"in r&&(clearInterval(this.updateActivityInterval),this.$store.dispatch("clearPendingTransaction",this.activity.hash),this.$store.dispatch("addTransaction",{chain:this.activity.chain,tx:this.assembleEvmActivity(r)}))}else await this.$store.dispatch("getTransactions",this.activity.chain);this.updatingTxStatus=!1}}}),f=y,m=e(1001),g=(0,m.Z)(f,s,a,!1,null,null,null),x=g.exports},72232:function(t,i,e){e.d(i,{Z:function(){return u}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"backdrop-blur-2xl bg-dark-N16 cursor-pointer fixed h-14 right-6 rounded-full transition-opacity w-14",style:{opacity:t.showBackToTopOpacity,bottom:`${t.showBackToTopBottom}px`},on:{click:function(i){return i.stopPropagation(),t.scrollToTop.apply(null,arguments)}}},[i("img",{staticClass:"mx-auto",style:{marginTop:"23px"},attrs:{src:e(80779)}})])},a=[];const n=22,r=56,c=window.innerHeight;var o={name:"BackToTop",data(){return{showBackToTopBottom:-r,showBackToTopOpacity:0}},computed:{scrollableEl(){return this.$el.parentElement}},beforeUnmount(){this.scrollableEl.removeEventListener("scroll",this.onScroll)},mounted(){this.scrollableEl.addEventListener("scroll",this.onScroll)},methods:{onScroll(t){const i=c,{scrollTop:e}=t.target,s=e-i;if(s>0){this.showBackToTopOpacity=1;let t=-r+s;t>n&&(t=n),this.showBackToTopBottom=t}else this.showBackToTopOpacity=0},scrollToTop(){this.scrollableEl.scrollTo(0,0)}}},l=o,d=e(1001),h=(0,d.Z)(l,s,a,!1,null,null,null),u=h.exports},36434:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"flex flex-col"},[i("top-bar",{attrs:{"test-parent-name":"notifications_view",title:t.$t("general.notifications")}}),t.allTransactions.length?i("div",{staticClass:"p-5"},t._l(t.allTransactions,(function(t,e){return i("activity-item",{key:e,attrs:{activity:t}})})),1):i("div",{staticClass:"flex flex-col flex-grow justify-center px-14"},[i("div",{staticClass:"flex flex-row justify-center"},[i("div",{},[i("div",{staticClass:"algin-right bg-contain bg-no-repeat bg-squircle-dark h-32 p-8 pl-9 relative w-32"},[i("img",{attrs:{src:e(29395)}})])]),i("div",{staticClass:"flex flex-col justify-center px-8"},[i("div",{staticClass:"font-bold text-2xl text-dark-N77 tracking-wider"},[t._v(" "+t._s(t.$t("general.nothingHere"))+" ")]),i("div",{staticClass:"leading-5 mt-4 text-dark-N77 tracking-wider"},[t._v(" "+t._s(t.$t("views.notificationsView.notifications"))+" ")])])])]),i("back-to-top")],1)},a=[],n=e(36080),r=e(72232),c=e(69986),o={name:"NotificationsView",components:{ActivityItem:n.Z,BackToTop:r.Z,TopBar:c.Z},computed:{allTransactions(){return this.$store.getters.allTransactions}}},l=o,d=e(1001),h=(0,d.Z)(l,s,a,!1,null,null,null),u=h.exports},27176:function(t,i,e){t.exports=e.p+"img/complete_big.fe2ecc72.svg"},71643:function(t,i,e){t.exports=e.p+"img/in_progress_big.35353198.svg"},29395:function(t,i,e){t.exports=e.p+"img/buzzer.2dcc83b6.svg"},80779:function(t,i,e){t.exports=e.p+"img/chevron_up.316e082e.svg"}}]);