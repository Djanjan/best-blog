(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dda41"],{"81f8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-layout",{attrs:{title:"All Posts"}},[t._l(t.data,(function(t){return a("v-col",{key:t.id,attrs:{cols:"12",md:"6"}},[a("article-card",{attrs:{title:t.title,subTitle:t.body,id:t.id.toString()}})],1)})),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-pagination",{attrs:{length:t.maxPage,"total-visible":t.$vuetify.breakpoint.mdAndUp?7:5,color:"secondary"},model:{value:t.selectedPage,callback:function(e){t.selectedPage=e},expression:"selectedPage"}})],1)],1)],1)],2)},r=[],o=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ade3")),c=a("bc3a"),i=a.n(c),l=a("2f62"),d=a("1b80"),s=a("01de");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={name:"article-all-page",mixins:[d["a"]],components:{"app-layout":s["a"],"article-card":function(){return a.e("chunk-177ded88").then(a.bind(null,"d4bc"))}},data:function(){return{loading:!0,data:[]}},computed:{},created:function(){},mounted:function(){this.fetchData(this.page)},methods:p({fetchData:function(t){var e=this;this.loading=!0,i.a.get("/posts",{params:{limit:this.limitPage,page:t}}).then((function(t){e.data=t.data.data.data,e.maxPage=t.data.data.last_page,e.loading=!1})).catch((function(t){console.error(t),e.newError(t),e.loading=!0}))}},Object(l["b"])("error",["newError"]))},f=b,g=a("2877"),h=a("6544"),m=a.n(h),O=a("62ad"),y=a("891e"),v=a("0fd9"),w=Object(g["a"])(f,n,r,!1,null,null,null);e["default"]=w.exports;m()(w,{VCol:O["a"],VPagination:y["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-2d0dda41.997dfec0.js.map