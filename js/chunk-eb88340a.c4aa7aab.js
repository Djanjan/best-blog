(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb88340a"],{"01de":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.customClass},[n("v-row",{attrs:{align:"center"}},[n("v-col",[n("h2",{staticClass:"font-weight-medium"},[t._v(t._s(t.title))])]),""!==t.movementId?n("v-col",[n("h4",{staticClass:"text-right font-weight-medium a-link",on:{click:function(e){return e.stopPropagation(),t.toMovement()}}},[t._v("see all")])]):t._e()],1),n("v-row",{attrs:{align:"start",justify:"space-between"}},[t._t("default")],2)],1)},a=[],s={name:"app-layout",props:{customClass:{type:String,default:""},title:{type:String,default:""},movementId:{type:String,default:""}},data:function(){return{}},computed:{},created:function(){},methods:{toMovement:function(){this.$router.push({path:"/view",params:{movementId:this.movementId}})}}},r=s,o=(n("08e9"),n("2877")),c=n("6544"),l=n.n(c),u=n("62ad"),h=n("0fd9"),d=Object(o["a"])(r,i,a,!1,null,"7c7f1a3c",null);e["a"]=d.exports;l()(d,{VCol:u["a"],VRow:h["a"]})},"08e9":function(t,e,n){"use strict";var i=n("d69c"),a=n.n(i);a.a},"17b3":function(t,e,n){},"891e":function(t,e,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("4160"),n("d81d"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("e25e"),n("25f0"),n("159b");var i=n("2909"),a=n("ade3"),s=(n("17b3"),n("9d26")),r=n("dc22"),o=n("58df"),c=n("a9ad"),l=n("7560");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(o["a"])(c["a"],l["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return h({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2===0?1:0,a=Math.floor(e/2),s=this.length-a+1+n;if(this.value>a&&this.value<s){var r=this.value-a+2,o=this.value+a-2-n;return[1,"..."].concat(Object(i["a"])(this.range(r,o)),["...",this.length])}if(this.value===a){var c=this.value+a-1-n;return[].concat(Object(i["a"])(this.range(1,c)),["...",this.length])}if(this.value===s){var l=this.value-a+1;return[1,"..."].concat(Object(i["a"])(this.range(l,this.length)))}return[].concat(Object(i["a"])(this.range(1,a)),["..."],Object(i["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var i=t;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:i}},[t(s["a"],[e])])])},genItem:function(t,e){var n=this,i=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(n,i){return t("li",{key:i},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},d69c:function(t,e,n){},f0ca:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-layout",{attrs:{title:"All Professions"}},[t._l(t.data,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",md:"6"}},[n("profession-card",{attrs:{isHoverAndRipple:"",title:t.title,subTitle:t.body,id:t.id.toString()}})],1)})),n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-pagination",{attrs:{length:t.maxPage,"total-visible":t.$vuetify.breakpoint.mdAndUp?7:5,color:"secondary"},model:{value:t.selectedPage,callback:function(e){t.selectedPage=e},expression:"selectedPage"}})],1)],1)],1)],2)},a=[],s=(n("d3b7"),n("bc3a")),r=n.n(s),o=n("01de"),c={name:"professions-all-page",components:{"app-layout":o["a"],"profession-card":function(){return Promise.all([n.e("chunk-616c7a79"),n.e("chunk-2d0ddc3b")]).then(n.bind(null,"837a"))}},data:function(){return{loading:!0,error:"",page:1,maxPage:1,limitPage:12,data:[]}},computed:{isError:function(){return""!==this.error},selectedPage:{get:function(){return this.page},set:function(t){t!==this.page&&(this.page=t,this.fetchData(t))}}},created:function(){},mounted:function(){this.fetchData(this.page)},methods:{fetchData:function(t){var e=this;this.loading=!0,r.a.get("/professions/categories/"+this.$router.currentRoute.params.id,{params:{limit:this.limitPage,page:t}}).then((function(t){e.data=t.data.data.data,e.maxPage=t.data.data.last_page,e.loading=!1})).catch((function(t){console.error(t),e.error=t,e.loading=!0}))}}},l=c,u=n("2877"),h=n("6544"),d=n.n(h),p=n("62ad"),f=n("891e"),v=n("0fd9"),g=Object(u["a"])(l,i,a,!1,null,null,null);e["default"]=g.exports;d()(g,{VCol:p["a"],VPagination:f["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-eb88340a.c4aa7aab.js.map