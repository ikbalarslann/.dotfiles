"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[4103],{72232:function(e,t,o){o.d(t,{Z:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"backdrop-blur-2xl bg-dark-N16 cursor-pointer fixed h-14 right-6 rounded-full transition-opacity w-14",style:{opacity:e.showBackToTopOpacity,bottom:`${e.showBackToTopBottom}px`},on:{click:function(t){return t.stopPropagation(),e.scrollToTop.apply(null,arguments)}}},[t("img",{staticClass:"mx-auto",style:{marginTop:"23px"},attrs:{src:o(80779)}})])},n=[];const i=22,a=56,r=window.innerHeight;var l={name:"BackToTop",data(){return{showBackToTopBottom:-a,showBackToTopOpacity:0}},computed:{scrollableEl(){return this.$el.parentElement}},beforeUnmount(){this.scrollableEl.removeEventListener("scroll",this.onScroll)},mounted(){this.scrollableEl.addEventListener("scroll",this.onScroll)},methods:{onScroll(e){const t=r,{scrollTop:o}=e.target,s=o-t;if(s>0){this.showBackToTopOpacity=1;let e=-a+s;e>i&&(e=i),this.showBackToTopBottom=e}else this.showBackToTopOpacity=0},scrollToTop(){this.scrollableEl.scrollTo(0,0)}}},c=l,p=o(1001),h=(0,p.Z)(c,s,n,!1,null,null,null),d=h.exports},8893:function(e,t,o){o.d(t,{Z:function(){return m}});var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.disabled?e._e():t("div",{staticClass:"bg-dark-N16 border border-black border-opacity-10 cursor-pointer flex items-center justify-between mb-2 px-6 py-3 rounded-lg t-token_item-click",on:{click:e.click}},[t("token-icon",{staticClass:"h-9 w-9",attrs:{address:e.address,chain:e.chain,"icon-uri":e.value.logoURI},on:{hideUnverifiedTokenPopover:e.hideUnverifiedTokenPopover,showUnverifiedTokenPopover:e.showUnverifiedTokenPopover}}),t("div",{staticClass:"flex-1 mx-4"},[t("div",{staticClass:"font-bold tracking-wider"},[e._v(e._s(e.name))]),t("div",{staticClass:"flex items-center text-dark-N77 text-xs"},[t("span",{staticClass:"mr-2"},[e._v(e._s(e.symbol))]),t("chain-badge",{attrs:{"background-color":"bg-input-bg",chain:e.chain}}),e.type&&e.type!==e.symbol?t("div",{staticClass:"bg-input-bg inline-block ml-1 px-2 py-0 rounded-full"},[e._v(" "+e._s(e.type)+" ")]):e._e()],1)]),e.selectable?t("opera-checkbox",{ref:"checkbox",staticClass:"pointer-events-none",attrs:{"model-value":e.modelValue,value:e.value},on:{change:e.onChange}}):e._e()],1),t("unverified-token-popover",{ref:"unverifiedTokenPopover",attrs:{"caret-horizontal-position":"left-[11px]","popover-position":"left-2","shorter-text":""}})],1)},n=[],i=o(43130),a=o(3998),r=o(69790),l=o(92266),c=o(30058),p=o(20144),h=p.ZP.extend({name:"TokenItem",components:{ChainBadge:i.Z,OperaCheckbox:a.Z,TokenIcon:l.Z,UnverifiedTokenPopover:c.Z},model:{event:"change",prop:"modelValue"},props:{address:{default:"",type:String},chain:{default:void 0,type:Object},disabled:{default:!1,type:Boolean},modelValue:{default:void 0,type:[String,Object,Array]},name:{default:"",type:String},selectable:{default:!0,type:Boolean},symbol:{default:"",type:String},value:{default:void 0,type:[String,Object,Array]}},computed:{type(){const e=this.value.type??this.value.contract?.type;return e?"".toUpperCase():""},unverifiedTokenPopover(){return this.$refs.unverifiedTokenPopover}},methods:{click(){this.selectable?this.$refs.checkbox.$el.click():this.$emit("change",this.value)},getStatsEventName(){if("WatchListSelect"===this.$route.name){const e=this.$refs.checkbox.isChecked?"selected":"unselected";return`wt_watch_coin_${e}`}return"ReceiveToken"===this.$route.name?"wt_receive_select":"wt_coin_selected"},hideUnverifiedTokenPopover(e){this.unverifiedTokenPopover.hide(e)},onChange(e){const[t,o]=[this.$store.getters.getNetworkName(this.chain),this.symbol],s=this.getStatsEventName();r.Z.sendStatsEvent(r.Z.types.CLICK,s,{network:t,symbol:o}),this.$emit("change",e)},showUnverifiedTokenPopover(e){this.unverifiedTokenPopover.show(e)}}}),d=h,u=o(1001),v=(0,u.Z)(d,s,n,!1,null,null,null),m=v.exports},84103:function(e,t,o){o.d(t,{Z:function(){return _}});var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"w-full"},[e.value?t("div",{staticClass:"bg-input-bg cursor-pointer flex rounded-full t-asset_selector-show_dialog",on:{click:e.showDialog}},[t("token-icon",{staticClass:"h-8 mx-4 my-5 w-10",attrs:{address:e.address,chain:e.chain}}),t("div",{staticClass:"flex items-center justify-between truncate w-full"},[t("div",{staticClass:"tracking-wider truncate"},[t("div",{staticClass:"font-bold text-lg truncate"},[e._v(e._s(e.name))]),t("div",{staticClass:"flex font-bold items-center text-grey-A text-sm truncate"},[t("span",{staticClass:"mr-2"},[e._v(e._s(e.symbol))]),t("chain-badge",{attrs:{chain:e.chain}})],1)]),t("i",{staticClass:"icon-chevron_down m-4 text-dark-N60 w-6"})])],1):e._e(),t("asset-selector-dialog",{ref:"dialog",attrs:{options:e.options,"still-loading-count":e.stillLoadingCount,value:e.value}})],1)},n=[],i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"showing"}],staticClass:"bg-background bottom-0 fixed left-0 right-0 top-0 z-30"},[t("div",{staticClass:"flex flex-col h-full"},[t("top-bar",{attrs:{"emit-back":"","test-parent-name":"asset_selector_dialog",title:e.$t("general.selectAssets")},on:{back:e.close}}),t("div",{staticClass:"px-4"},[t("opera-input",{staticClass:"t-token_dialog-query",attrs:{placeholder:e.$t("general.search"),"prepend-icon":"icon-search text-brand-primary text-opacity-40",type:"search",value:e.search},on:{input:e.updateSearch}})],1),t("div",{staticClass:"h-full overflow-y-scroll pb-4 px-4",on:{scroll:e.onScroll}},[e.loading&&e.search?t("div",{staticClass:"flex flex-1 items-center justify-center w-full"},[t("i",{staticClass:"animate-spin icon-spinner text-xl"})]):[e._l(e.tokenList,(function(o,s){return t("div",{key:s},[t("token-item",{staticClass:"my-3",attrs:{address:"contract"in o?o.contract.contract:o.address,chain:o.chain,name:"contract"in o?o.contract.name:o.name,selectable:!1,symbol:"contract"in o?o.contract.symbol:o.symbol,value:o},on:{change:e.itemClicked}})],1)})),t("back-to-top")],e._l(e.stillLoadingCount,(function(e){return t("div",{key:`loading-${e}`,staticClass:"bg-dark-N16 border border-black border-opacity-10 cursor-wait flex items-center justify-between mb-2 mt-3 px-6 py-3 rounded-lg t-token_loading_item",style:{opacity:1/e}},[t("div",{staticClass:"h-10"},[t("lottie-component",{staticClass:"h-10",attrs:{src:"loader_tx.json"}})],1)])}))],2)],1)])},a=[],r=o(72232),l=o(76501),c=o(14957),p=o(8893),h=o(69986),d=o(20144);const u=20;var v=d.ZP.extend({name:"AssetSelectorDialog",components:{BackToTop:r.Z,LottieComponent:l.Z,OperaInput:c.Z,TokenItem:p.Z,TopBar:h.Z},props:{options:{default:void 0,type:Array},stillLoadingCount:{default:0,type:Number},value:{default:void 0,type:Object}},data(){return{callback:null,loading:!1,pageSize:u,search:"",showing:!1}},computed:{tokenList(){const{tokens:e}=this;return this.search?e.filter(this.applyTokenSearchFilter).slice(0,this.pageSize):e.slice(0,this.pageSize)},tokens(){return this.options}},methods:{applyTokenSearchFilter(e){const t="contract"in e?e.contract.name:e.name,o=this.$store.getters.chainNameFriendly(e.chain),s="contract"in e?e.contract.symbol:e.symbol;return t.toLowerCase().includes(this.search.toLowerCase())||s.toLowerCase().includes(this.search.toLowerCase())||o.toLowerCase().includes(this.search.toLowerCase())},close(){!this.value||this.$route.meta?.preselectToken?this.$router.go(-1):this.showing=!1},async itemClicked(e){this.loading=!0,this.callback(e),this.showing=!1,this.loading=!1},onScroll(e){const{target:t}=e,o=t.scrollTop+t.clientHeight>=t.scrollHeight-t.clientHeight;o&&(this.pageSize+u<this.tokens.length?this.pageSize+=u:this.pageSize=this.tokens.length-1)},show(e){this.callback=e,this.showing=!0},updateSearch(e){this.search=e}}}),m=v,f=o(1001),k=(0,f.Z)(m,i,a,!1,null,null,null),g=k.exports,b=o(43130),y=o(92266),x=d.ZP.extend({name:"AssetSelector",components:{AssetSelectorDialog:g,ChainBadge:b.Z,TokenIcon:y.Z},props:{options:{default:void 0,type:Array},stillLoadingCount:{default:0,type:Number},value:{default:void 0,type:Object}},data(){return{dialog:!1}},computed:{address(){return"contract"in this.token?this.token.contract.contract:this.token.address},chain(){return this.token.chain},name(){return"contract"in this.token?this.token.contract.name:this.token.name},preselectToken(){return this.$route.meta?.preselectToken},symbol(){return"contract"in this.token?this.token.contract.symbol:this.token.symbol},token(){return this.value??this.$store.getters.matchingNativeToken("",this.chain)}},mounted(){this.preselectToken&&this.showDialog()},activated(){this.preselectToken&&"SendToken"===this.$route.name&&this.showDialog()},methods:{showDialog(){this.$refs.dialog.show((e=>{const{meta:t}=this.$route;t&&t.preselectToken&&(t.preselectToken=!1),this.$emit("input",e)}))}}}),w=x,T=(0,f.Z)(w,s,n,!1,null,null,null),_=T.exports},30058:function(e,t,o){o.d(t,{Z:function(){return h}});var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("simple-popover",{ref:"popover",staticClass:"fixed font-medium h-min t-unverified_token_popover text-sm w-72 z-10",class:[e.popoverPosition],attrs:{"background-class":"bg-dark-N04","caret-horizontal-position":e.caretHorizontalPosition,"caret-vertical-inset":"bottom"}},[e.shorterText?t("p",[e._v(e._s(e.$t("components.popovers.unverifiedTokenShorter")))]):t("i18n",{staticClass:"whitespace-pre-line",attrs:{path:"components.popovers.unverifiedToken",tag:"p"},scopedSlots:e._u([{key:"settingsPage",fn:function(){return[t("span",{staticClass:"cursor-pointer text-brand-primary",on:{click:function(t){return e.$emit("showAssetSettingsDialog")}}},[e._v(e._s(e.$t("components.popovers.unverifiedTokenSettingsPage")))])]},proxy:!0}])})],1)},n=[],i=o(18135),a=o(20144),r=a.ZP.extend({name:"UnverifiedTokenPopover",components:{SimplePopover:i.Z},props:{caretHorizontalPosition:{default:"left-7",type:String},popoverPosition:{default:"left-6",type:String},shorterText:{default:!1,type:Boolean}},computed:{popover(){return this.$refs.popover}},methods:{hide(e){this.popover.hide(e)},show(e){this.popover.show(),this.$nextTick((()=>{const t=this.popover.$el,o=11,s=t.offsetHeight+e.offsetY+o;t.style.top=e.pageY-s+"px"}))}}}),l=r,c=o(1001),p=(0,c.Z)(l,s,n,!1,null,"47f33c28",null),h=p.exports},80779:function(e,t,o){e.exports=o.p+"img/chevron_up.316e082e.svg"}}]);