(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-922228d6"],{"01de":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.customClass},[a("v-row",{attrs:{align:"center"}},[a("v-col",[a("h2",{staticClass:"font-weight-medium"},[t._v(t._s(t.title))])]),""!==t.movementId?a("v-col",[a("h4",{staticClass:"text-right font-weight-medium a-link",on:{click:function(e){return e.stopPropagation(),t.toMovement()}}},[t._v("see all")])]):t._e()],1),a("v-row",{attrs:{align:"start",justify:"space-between"}},[t._t("default")],2)],1)},r=[],o={name:"app-layout",props:{customClass:{type:String,default:""},title:{type:String,default:""},movementId:{type:String,default:""}},data:function(){return{}},computed:{},created:function(){},methods:{toMovement:function(){this.$router.push({path:"/view",params:{movementId:this.movementId}})}}},c=o,i=(a("08e9"),a("2877")),s=a("6544"),l=a.n(s),u=a("62ad"),d=a("0fd9"),p=Object(i["a"])(c,n,r,!1,null,"7c7f1a3c",null);e["a"]=p.exports;l()(p,{VCol:u["a"],VRow:d["a"]})},"08e9":function(t,e,a){"use strict";var n=a("d69c"),r=a.n(n);r.a},"3ff6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",{attrs:{title:"All Category"}},[t._l(t.data,(function(t){return a("v-col",{key:t.id,attrs:{cols:"16",md:"4"}},[a("category-card",{attrs:{isHoverAndRipple:"",title:t.title,subTitle:t.description,id:t.id.toString()}})],1)})),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-pagination",{attrs:{length:t.maxPage,"total-visible":t.$vuetify.breakpoint.mdAndUp?7:5,color:"secondary"},model:{value:t.selectedPage,callback:function(e){t.selectedPage=e},expression:"selectedPage"}})],1)],1)],1)],2)},r=[],o=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ade3")),c=a("bc3a"),i=a.n(c),s=a("2f62"),l=a("1b80"),u=a("01de");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"categories-all-page",mixins:[l["a"]],components:{"app-layout":u["a"],"category-card":function(){return a.e("chunk-1f96c6b0").then(a.bind(null,"90c7"))}},data:function(){return{loading:!0,data:[]}},computed:{},created:function(){},mounted:function(){this.fetchData(this.page)},methods:p({fetchData:function(t){var e=this;this.loading=!0,i.a.get("/categories",{params:{limit:this.limitPage,page:t}}).then((function(t){e.data=t.data.data.data,e.maxPage=t.data.data.last_page,e.loading=!1})).catch((function(t){console.error(t),e.newError(t),e.loading=!0}))}},Object(s["b"])("error",["newError"]))},m=f,g=a("2877"),b=a("6544"),v=a.n(b),h=a("62ad"),y=a("891e"),w=a("0fd9"),O=Object(g["a"])(m,n,r,!1,null,null,null);e["default"]=O.exports;v()(O,{VCol:h["a"],VPagination:y["a"],VRow:w["a"]})},d69c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-922228d6.02c091df.js.map