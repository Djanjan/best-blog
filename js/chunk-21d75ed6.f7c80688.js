(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21d75ed6"],{"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[i]=a.directives[i]||e[i]}},"2cad":function(t,e,a){"use strict";var i=a("f6c0"),s=a.n(i);s.a},ce87:function(t,e,a){"use strict";var i=a("16b7"),s=a("f2e7"),r=a("58df"),n=a("d9bd");e["a"]=Object(r["a"])(i["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(n["c"])("v-hover should only contain a single element",this),t)):(Object(n["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},d4bc:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-full",{attrs:{"custom-class":this.customClass,isAvatar:this.isAvatar,icon:this.icon,avatar:this.avatar},scopedSlots:t._u([{key:"img",fn:function(){return[a("v-img",{attrs:{"min-height":"150px","max-height":"250px",src:"https://picsum.photos/500/300?random","lazy-src":"https://picsum.photos/10/6?random","aspect-ratio":16/9,transition:"fade-transition"}})]},proxy:!0}])},[a("v-card-text",{staticClass:"text-center text--primary",staticStyle:{"padding-top":"4px"}},[a("h2",{staticClass:"pb-3 font-weight-regular title"},[t._v(t._s(t.title))]),a("div",{staticClass:"pa-3 pb-4 font-weight-light"},[t._v(" "+t._s(t.subTitle)+" ")])]),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",{staticClass:"px-6"},[a("v-row",{attrs:{align:"center"}},[a("div",{staticClass:"font-weight-light caption"},[a("v-icon",{attrs:{medium:""}},[t._v("mdi-clock-outline")]),t._v(" "+t._s(t.lastUpdate)+" ")],1),a("v-spacer"),a("v-btn",{attrs:{icon:"",small:""}},[a("v-icon",{},[t._v("mdi-bookmark")])],1)],1)],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-card",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"primary--text"},expression:"{ class: 'primary--text' }"}],class:t.customClass+"a-link",attrs:{elevation:i?20:2}},[t._t("img"),a("div",{staticClass:"d-flex justify-center",style:"height:"+t.circleSize/2+"px;"},[a("v-avatar",{style:"top:"+-(t.circleSize/2+4)+"px ;",attrs:{color:t.$vuetify.theme.dark?"#424242":"white",size:t.circleSize+12}},[a("v-avatar",{attrs:{color:t.circleColor,size:t.circleSize}},[t.isAvatar?a("img",{attrs:{src:t.avatar}}):a("v-icon",{attrs:{color:"white",size:t.circleSize/2}},[t._v(" "+t._s(t.icon)+" ")])],1)],1)],1),t._t("default")],2)]}}],null,!0)})},n=[],o=(a("a9e3"),{name:"app-card-full",props:{customClass:{type:String,default:""},circleColor:{type:String,default:"secondary"},circleSize:{type:Number,default:90},isAvatar:{type:Boolean,default:!1},icon:{type:String,default:""},avatar:{type:String,default:""}},data:function(){return{}},computed:{},created:function(){}}),c=o,l=(a("2cad"),a("2877")),d=a("6544"),u=a.n(d),p=a("8212"),v=a("b0af"),f=a("ce87"),h=a("132d"),m=a("269a"),y=a.n(m),g=a("5607"),x=Object(l["a"])(c,r,n,!1,null,"fc4c1e64",null),S=x.exports;u()(x,{VAvatar:p["a"],VCard:v["a"],VHover:f["a"],VIcon:h["a"]}),y()(x,{Ripple:g["a"]});var b={name:"ArticleCard",props:{customClass:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""},lastUpdate:{type:String,default:"Update now"},isAvatar:{type:Boolean,default:!1},icon:{type:String,default:"mdi-account-tie"},avatar:{type:String,default:""}},components:{"card-full":S},data:function(){return{article:null,loading:!0}},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),1e3)}},_=b,C=a("8336"),w=a("99d9"),A=a("ce7e"),V=a("adda"),k=a("0fd9"),z=a("2fa4"),j=Object(l["a"])(_,i,s,!1,null,null,null);e["default"]=j.exports;u()(j,{VBtn:C["a"],VCardText:w["b"],VDivider:A["a"],VIcon:h["a"],VImg:V["a"],VRow:k["a"],VSpacer:z["a"]})},f6c0:function(t,e,a){}}]);
//# sourceMappingURL=chunk-21d75ed6.f7c80688.js.map