(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f00ac0d0"],{"1af5":function(t,e,o){},"6fb9":function(t,e,o){"use strict";var s=o("1af5"),i=o.n(s);i.a},9703:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticStyle:{height:"100vh"}},[o("v-img",{staticClass:"v-img-full",attrs:{src:"https://colorlib.com/preview/theme/cocoon/assets/img/bg/about.png","lazy-src":"https://picsum.photos/10/6?image=40",gradient:"to top, rgba(0,0,0,.4), rgba(0,0,0,.7)"}},[o("v-layout",{staticStyle:{height:"100%"},attrs:{"align-center":"","justify-center":""}},[o("v-row",{staticStyle:{position:"absolute"},attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"white--text",attrs:{align:"center",justify:"center"}},[o("div",{staticClass:"display-4 font-weight-bold"},[t._v("404")]),o("div",{staticClass:"subtitle-2"},[t._v("Page Not Found :(")])])],1)],1)],1),o("v-row",{attrs:{align:"bottom",justify:"bottom"}},[o("custom-footer")],1)],1)},i=[],n=o("fd2d"),a={components:{"custom-footer":n["a"]},data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)},methods:{randomNumber:function(){return Math.floor(100*Math.random())+1}}},r=a,c=(o("6fb9"),o("2877")),l=o("6544"),u=o.n(l),f=o("62ad"),d=o("adda"),h=o("a722"),p=o("0fd9"),b=Object(c["a"])(r,s,i,!1,null,null,null);e["default"]=b.exports;u()(b,{VCol:f["a"],VImg:d["a"],VLayout:h["a"],VRow:p["a"]})},b5b6:function(t,e,o){},fd2d:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"transparent hidden-sm-and-down",attrs:{flat:"",light:t.light,dark:t.dark,width:"100%"}},[o("v-row",{staticClass:"pa-2",attrs:{justify:"center"}},[o("v-col",{staticClass:"col-md-9"},t._l(t.links,(function(e){return o("v-btn",{key:e,staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v(" "+t._s(e)+" ")])})),1),o("v-spacer"),o("v-col",{staticClass:"col-md-3"},[o("v-card-text",{staticClass:"font-weight-light text-right"},[t._v(" © "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("Djan Production")])])],1)],1)],1)},i=[],n={props:{light:{type:Boolean,default:!1},dark:{type:Boolean,default:!1}},data:function(){return{loading:!0,links:["Home","About Us","Team","Services","Blog","Contact Us"]}},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)}},a=n,r=o("2877"),c=o("6544"),l=o.n(c),u=o("8336"),f=o("99d9"),d=o("62ad"),h=(o("a4d3"),o("4de4"),o("4160"),o("a9e3"),o("e439"),o("dbb4"),o("b64b"),o("e25e"),o("c7cd"),o("159b"),o("ade3")),p=(o("b5b6"),o("3a66")),b=o("8dd9"),g=o("d10f"),m=o("58df"),v=o("80d2");function y(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function j(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?y(Object(o),!0).forEach((function(e){Object(h["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var O=Object(m["a"])(b["a"],Object(p["a"])("footer",["height","inset"]),g["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return j({},b["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return j({},b["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(v["f"])(t),left:Object(v["f"])(this.computedLeft),right:Object(v["f"])(this.computedRight),bottom:Object(v["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),w=o("0fd9"),C=o("2fa4"),P=Object(r["a"])(a,s,i,!1,null,null,null);e["a"]=P.exports;l()(P,{VBtn:u["a"],VCardText:f["c"],VCol:d["a"],VFooter:O,VRow:w["a"],VSpacer:C["a"]})}}]);
//# sourceMappingURL=chunk-f00ac0d0.ba1cf3ee.js.map