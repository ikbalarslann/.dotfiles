"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[3855],{6435:function(t,e,s){s.d(e,{Z:function(){return f}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex mb-8 mt-6 rtl-space-x-reverse"},[e("squircle-button",{staticClass:"t-asset_action_row-receive w-1/5",attrs:{disabled:!t.isAssetReceivable&&!t.allowGeneralActions,icon:"icon-arrow_down",text:t.$t("general.receive")},on:{click:t.goToReceive}}),e("squircle-button",{staticClass:"t-asset_action_row-send w-1/5",attrs:{disabled:!t.isAssetSendable&&!t.allowGeneralActions||!t.hasSendableAssets,icon:"icon-arrow_right_up",text:t.$t("general.send")},on:{click:t.goToSend}}),e("squircle-button",{staticClass:"t-asset_action_row-swap w-1/5",attrs:{disabled:t.isSwapButtonDisabled,icon:"icon-swap",loading:!t.isSwapReady,text:t.$t("general.swap")},on:{click:t.goToSwap}}),e("squircle-button",{staticClass:"t-asset_action_row-buy w-1/5",attrs:{disabled:!t.isAssetBuyable&&!t.allowGeneralActions||!t.hasBuyableAssets,icon:"icon-buy",text:t.$t("general.buy")},on:{click:t.goToBuy}}),e("squircle-button",{staticClass:"t-asset_action_row-sell w-1/5",attrs:{disabled:!t.isAssetSellable&&!t.allowGeneralActions||!t.hasSellableAssets,icon:"icon-arrow_down",text:t.$t("general.sell"),transform:"scale(1,-1)"},on:{click:t.goToSell}})],1)},n=[],i=(s(57658),s(47812)),o=s(79317),r=s(20629),l=s(70794),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center t-squirce_button-click",class:[{"opacity-40":t.disabled&&!t.loading,"cursor-not-allowed":t.unavailable}],on:{click:function(e){!t.unavailable&&t.$emit("click")}}},[e("button",{staticClass:"bg-contain bg-squircle-desktop flex h-12 items-center justify-center mb-2 w-12",class:[{"pointer-events-none":t.unavailable}]},[t.loading?e("spinning-loader",{staticClass:"h-5 w-5",attrs:{dark:""}}):e("i",{staticClass:"text-black",class:t.icon,style:{transform:t.transform}})],1),e("span",{staticClass:"font-bold text-dark-N60 text-xs tracking-wide"},[t._v(t._s(t.text))])])},h=[],d=s(99187),u={name:"SquircleButton",components:{SpinningLoader:d.Z},props:{disabled:{default:!1,type:Boolean},icon:{default:"",type:String},loading:{default:!1,type:Boolean},text:{default:"",type:String},transform:{default:"",type:String}},computed:{unavailable(){return this.disabled||this.loading}}},w=u,k=s(1001),b=(0,k.Z)(w,c,h,!1,null,null,null),p=b.exports,g=s(69790),m=s(20144),v=m.ZP.extend({name:"AssetActionRow",components:{SquircleButton:p},props:{address:{default:"",type:String},token:{default:void 0,type:Object}},computed:{...(0,r.Se)({isSwapAvailable:"isSwapAvailable"}),allowGeneralActions(){return"TokenOverview"!==this.currentView},chain(){return this.token.chain},currentView(){return this.$route.name||""},hasBuyableAssets(){return!!this.$store.getters.buyableTokens.length&&!this.isAssetTestnet},hasSellableAssets(){return!!this.$store.getters.sellableTokens.length&&!this.isAssetTestnet},hasSendableAssets(){return this.$store.getters.ownedTokens(o.oZ.VISIBLE).some((t=>new l.Z(t.balance??0).isGreaterThan(0)))},hasSwappableAssets(){return!!this.swappableTokenFallback&&!this.isAssetTestnet},isAssetBuyable(){return this.$store.getters.isBuyable(this.chain,this.address)},isAssetReceivable(){return this.ownsAsset},isAssetSellable(){return this.$store.getters.isSellable(this.chain,this.address)&&new l.Z(this.token.balance).isGreaterThan(0)},isAssetSendable(){return this.ownsAsset&&new l.Z(this.token.balance).isGreaterThan(0)},isAssetSwappable(){return this.swapAddress&&this.$store.getters.isTokenSwappable(this.swapAddress,this.chain)},isAssetTestnet(){return this.$store.getters.isTestnet(this.chain)},isSwapButtonDisabled(){if("Overview"!==this.currentView){const{allowGeneralActions:t,hasSwappableAssets:e,isAssetSwappable:s}=this;return!s&&!t||!e}return!this.isSwapAvailable},isSwapReady(){return this.$store.getters.isSwapReady},ownsAsset(){return!!this.$store.getters.getTokenViaSerializedKey(this.address,this.chain,o.oZ.VISIBLE)},sendableTokenFallback(){return this.$store.getters.ownedTokens(o.oZ.VISIBLE).find((t=>new l.Z(t.balance??0).isGreaterThan(0)))},swapAddress(){return this.address===i.L1?i.NA:this.address},swappableTokenFallback(){return this.$store.getters.primarySwappableToken}},methods:{getStatsEventName(t){return"Overview"===this.currentView?`wt_${t}_btn`:"Assets"===this.currentView?`wt_asset_${t}`:"TokenOverview"===this.currentView?`wt_coin_${t}`:""},goToBuy(){this.sendStats("buy"),this.$router.push({name:"Buy",params:{token:this.token}})},goToReceive(){this.sendStats("receive"),this.$router.push({name:"ReceiveToken",params:{token:this.token}})},goToSell(){const t=this.isAssetSellable?this.token:this.$store.getters.sellableTokens[0];this.sendStats("sell"),this.$router.push({name:"Sell",params:{token:t}})},goToSend(){const t=this.isAssetSendable?this.token:this.sendableTokenFallback;this.sendStats("send"),this.$router.push({name:"SendToken",params:{token:t}})},goToSwap(){const t=this.isAssetSwappable?this.token:this.swappableTokenFallback;this.sendStats("swap"),this.$router.push({name:"Swap",query:{chain:JSON.stringify(t.chain),from:t.address??this.swapAddress}})},sendStats(t){const e=this.token.symbol??this.token.contract?.symbol,s=this.getStatsEventName(t);"TokenOverview"===this.currentView?g.Z.sendStatsEvent(g.Z.types.CLICK,s,{coin:e,network:this.$store.getters.getNetworkName(this.chain)}):g.Z.sendStatsEvent(g.Z.types.CLICK,s)}}}),S=v,y=(0,k.Z)(S,a,n,!1,null,"03d35724",null),f=y.exports},342:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",[e("top-bar",{attrs:{dark:"","test-parent-name":"token_overview",title:t.name},scopedSlots:t._u([t.watchlistToken?{key:"action",fn:function(){return[e("div",{staticClass:"cursor-pointer flex-grow-0 ml-10 mr-1 text-brand-primary w-6",class:t.watchlistIcon,on:{click:t.toggleTokenOnWatchList}})]},proxy:!0}:null],null,!0)}),e("div",{staticClass:"flex flex-col items-center px-14 text-center"},[e("token-icon",{staticClass:"h-16 mb-4 mt-3.5 rounded-full w-16",attrs:{address:t.address,chain:t.chain,"non-verified-token-icon-classes":"-left-4 h-8 top-4 w-8",type:t.type}}),e("div",{staticClass:"font-semibold text-2xl text-white tracking-wide truncate w-full"},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"max-w-60 pr-2 truncate",attrs:{title:t.balance}},[t._v(" "+t._s(t.balance)+" ")]),e("div",{staticClass:"max-w-[7ch] min-w-6 text-dark-N77 truncate",attrs:{title:t.symbol}},[t._v(" "+t._s(t.symbol)+" ")])])]),t.fiatBalance?e("div",{staticClass:"font-light text-base text-dark-N77 truncate w-full"},[t._v(" "+t._s(t.fiatBalance)+" ")]):t._e(),e("div",{staticClass:"w-full"},[t.token?e("asset-action-row",{attrs:{address:t.address,token:t.token}}):t._e()],1)],1)],1),e("div",{staticClass:"pb-6 px-14"},[e("switching-tabs",{on:{selected:t.tabSelected}},[t.tokenPriceInfo?e("switching-tab",{attrs:{title:t.$t("general.overview")}},[e("price-overview",{attrs:{address:t.address,"price-info":t.tokenPriceInfo,symbol:t.symbol.toLowerCase()}})],1):t._e(),e("switching-tab",{attrs:{title:t.$t("general.activity")}},[t.token?e("activity-box",{attrs:{activities:t.transactions,token:t.token}}):t._e()],1)],1)],1)])},n=[],i=(s(57658),s(79317)),o=s(91409),r=s(5757),l=s(6435),c=s(70794),h=s(89600),d=s(69790),u=s(26234),w=s(23537),k=s(92266),b=s(69986),p=s(10359),g=s(37426),m={name:"TokenOverview",components:{ActivityBox:r.Z,AssetActionRow:l.Z,PriceOverview:h.Z,SwitchingTab:u.Z,SwitchingTabs:w.Z,TokenIcon:k.Z,TopBar:b.Z},data(){return{balance:0,contract:null,fiatBalance:0,loading:!1,name:"",token:null}},computed:{address(){return this.$route.query.address.toLowerCase()},chain(){if(this.$route.query.chain)return JSON.parse(this.$route.query.chain)},symbol(){return this.$route.query.symbol},tokenPriceInfo(){if(this.token)return this.$store.getters.getPriceInfoForToken(this.token)},transactions(){return this.$store.getters.transactionsForToken(this.address,this.type)},type(){if(this.token)return this.token.type??this.token.contract?.type},watchlistIcon(){const t=this.$store.getters.isTokenOnWatchList(this.watchlistToken);return(0,o.hp)(t)},watchlistToken(){const t={address:this.address,chain:this.chain,name:this.name,symbol:this.symbol};return this.$store.getters.watchlistToken(t)}},watch:{token(t){t&&this.assignTokenData()}},created(){this.getToken()},methods:{assignTokenData(){if(this.name=this.token.name??this.token.contract?.name,this.contract=this.token.address??this.token.contract?.contract,this.token&&this.token.balance&&(this.tokenPriceInfo&&(this.fiatBalance=p.Z.localizeCurrency(g.Z.tokenDecimal(this.token).multipliedBy(new c.Z(this.tokenPriceInfo.price)))),this.token.balance)){const t=this.token.decimals??this.token.contract.decimals;this.balance=g.Z.withDecimals(this.token.balance,t)}},getToken(){if(!this.address||!this.chain)return;const{allSupportedTokens:t}=this.$store.getters;this.token=this.$store.getters.getToken(this.address,this.chain,t(i.oZ.ALL))},goToBuy(){d.Z.sendStatsEvent(d.Z.types.CLICK,"wt_coin_buy_bottom"),this.$router.push({name:"Buy",params:{token:this.token}})},goToSell(){this.$router.push({name:"Sell",params:{token:this.token}})},tabSelected(t){const[e,s]=[this.$store.getters.getNetworkName(this.chain),this.symbol];switch(t){case 0:d.Z.sendStatsEvent(d.Z.types.CLICK,"wt_coin_overTab",{coin:s,network:e});break;case 1:d.Z.sendStatsEvent(d.Z.types.CLICK,"wt_coin_actTab",{coin:s,network:e});break}},toggleTokenOnWatchList(){this.$store.dispatch("toggleTokenOnWatchList",this.watchlistToken)}}},v=m,S=s(1001),y=(0,S.Z)(v,a,n,!1,null,null,null),f=y.exports}}]);