(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4856":"77af809b","chunk-2d22d746":"2558001c","chunk-39e15f42":"153b06cf","chunk-2d0e5e97":"a7ca4fe9","chunk-2d21a3d2":"8839304d","chunk-787d2788":"6b3b1844"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-39e15f42":1,"chunk-787d2788":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c4856":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-39e15f42":"78b7db41","chunk-2d0e5e97":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-787d2788":"450e5903"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/best-blog/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("navigationPanel"),n("appBar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",dark:"",app:""},model:{value:t.updateDrawer,callback:function(e){t.updateDrawer=e},expression:"updateDrawer"}},[n("v-skeleton-loader",{attrs:{loading:t.loading,transition:"scale-transition",type:"list-item-avatar-two-line"}},[n("v-list",{attrs:{dense:""}},[n("v-list-group",{attrs:{value:"false","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/women/50.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Sandra Adams")]),n("v-list-item-subtitle",[t._v("sandra_a88@gmail.com")])],1)]},proxy:!0}])},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-exit-to-app")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Logaut")])],1)],1)],1)],1)],1),n("v-divider"),n("v-skeleton-loader",{attrs:{loading:t.loading,transition:"scale-transition",type:"list-item-three-line"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{"active-class":"primary",mandatory:""},model:{value:t.selectedItems,callback:function(e){t.selectedItems=e},expression:"selectedItems"}},t._l(t.links,(function(e,r){return n("v-list-item",{key:r,attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1)],1)],1)},c=[],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),u=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={data:function(){return{loading:!0,links:[{text:"Home",icon:"mdi-home",share:"/home"},{text:"Contact",icon:"mdi-contact-mail",share:"/"},{text:"Settings",icon:"mdi-settings",share:"/settings"}]}},computed:d({},Object(u["d"])("appBar",{drawer:function(t){return t.drawer}}),{selectedItems:{get:function(){return this.value},set:function(t){void 0!==t&&this.$router.currentRoute.path!==this.links[t].share&&this.$router.push(this.links[t].share)}},updateDrawer:{get:function(){return this.drawer},set:function(t){this.setDrawer(t)}}}),created:function(){},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)},methods:d({randomNumber:function(){return Math.floor(100*Math.random())+1}},Object(u["b"])("appBar",["setDrawer"]))},m=p,f=n("2877"),v=n("6544"),b=n.n(v),h=n("ce7e"),g=n("132d"),y=n("adda"),k=n("8860"),w=n("56b0"),O=n("da13"),_=n("1800"),j=n("8270"),B=n("5d23"),V=n("1baa"),C=n("f774"),P=n("3129"),x=Object(f["a"])(m,i,c,!1,null,null,null),D=x.exports;b()(x,{VDivider:h["a"],VIcon:g["a"],VImg:y["a"],VList:k["a"],VListGroup:w["a"],VListItem:O["a"],VListItemAction:_["a"],VListItemAvatar:j["a"],VListItemContent:B["a"],VListItemGroup:V["a"],VListItemSubtitle:B["b"],VListItemTitle:B["c"],VNavigationDrawer:C["a"],VSkeletonLoader:P["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.contentBar.prominent?[n("v-app-bar",{style:"background-image: linear-gradient("+t.$vuetify.theme.themes.light.primary+", "+t.$vuetify.theme.themes.light.secondary+");",attrs:{absolute:"",app:"",height:"350px",prominent:"",dark:"",flat:"",color:t.contentBar.color,src:t.contentBar.img,transition:"slide-y-transition"}},[n("v-app-bar-nav-icon",{staticClass:"ma-2",attrs:{elevation:"24"},on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),n("v-toolbar-title",[t._v(t._s(t.contentBar.title))]),n("v-progress-linear",{attrs:{active:!1,indeterminate:!1,absolute:"",top:"",color:"primary"}}),n("v-spacer"),n("v-btn",{staticClass:"mt-3",attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{staticClass:"mt-3",attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{staticClass:"mt-3",attrs:{icon:"",large:"",color:"primary"},on:{click:function(e){return e.stopPropagation(),t.closeContentBar(e)}}},[n("v-icon",[t._v("mdi-close")])],1)],1)]:[n("v-app-bar",{attrs:{absolute:"",app:"",flat:"",color:"transparent",height:"80px",transition:"slide-y-transition"}},[n("v-app-bar-nav-icon",{staticClass:"ma-2 v-btn--contained v-btn--fab v-btn--round v-size--small",on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),n("v-toolbar-title",[t._v("Blog")]),n("v-progress-linear",{attrs:{active:!1,indeterminate:!1,absolute:"",top:"",color:"primary"}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("menuContext")],1)]],2)},L=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:"","offset-y":"",transition:"scale-transition","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-sheet",{staticClass:"mx-auto text-center mb-0",attrs:{elevation:"4","max-width":"400"}},[n("v-card-text",[n("v-list",t._l(5,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v("Option "+t._s(e))])],1)})),1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.menu=!1}}},[t._v("Save")])],1)],1)],1)],1)},T=[],E={data:function(){return{menu:!1,model:null}}},A=E,$=n("8336"),N=n("99d9"),M=n("e449"),F=n("8dd9"),U=n("2fa4"),q=Object(f["a"])(A,I,T,!1,null,null,null),G=q.exports;function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}b()(q,{VBtn:$["a"],VCardActions:N["a"],VCardText:N["b"],VDivider:h["a"],VIcon:g["a"],VList:k["a"],VListItem:O["a"],VListItemTitle:B["c"],VMenu:M["a"],VSheet:F["a"],VSpacer:U["a"]});var z={components:{menuContext:G},data:function(){return{loading:!0}},computed:J({},Object(u["d"])("appBar",{contentBar:function(t){return t.contentBar}}),{},Object(u["c"])("appBar",["getContentBar"])),created:function(){},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)},methods:J({closeContentBar:function(){this.$router.go(-1)}},Object(u["b"])("appBar",["toggleDrawer","toggleContentBar","updateContentBar"]))},K=z,R=n("40dc"),Q=n("5bc1"),W=n("8e36"),X=n("2a7f"),Y=Object(f["a"])(K,S,L,!1,null,null,null),Z=Y.exports;b()(Y,{VAppBar:R["a"],VAppBarNavIcon:Q["a"],VBtn:$["a"],VIcon:g["a"],VProgressLinear:W["a"],VSpacer:U["a"],VToolbarTitle:X["a"]});var tt={props:{source:String},components:{navigationPanel:D,appBar:Z},computed:{},data:function(){return{}},created:function(){},methods:{}},et=tt,nt=(n("5c0b"),n("7496")),rt=n("a523"),at=n("a75b"),ot=Object(f["a"])(et,a,o,!1,null,null,null),it=ot.exports;b()(ot,{VApp:nt["a"],VContainer:rt["a"],VContent:at["a"]});n("d3b7");var ct=n("8c4f");r["a"].use(ct["a"]);var st=[{path:"*",name:"not-found",component:function(){return Promise.all([n.e("chunk-39e15f42"),n.e("chunk-2d0e5e97")]).then(n.bind(null,"9703"))}},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-39e15f42"),n.e("chunk-2d21a3d2")]).then(n.bind(null,"bb51"))}},{path:"/article/:id",name:"article",component:function(){return n.e("chunk-2d0c4856").then(n.bind(null,"3ad6"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/settings",name:"settings",component:function(){return n.e("chunk-787d2788").then(n.bind(null,"26d3"))}}],ut=new ct["a"]({base:"/best-blog/",routes:st}),lt=ut,dt={namespaced:!0,state:{drawer:!0,contentBar:{prominent:!1,img:"https://picsum.photos/1920/1080?random",color:"transparent",title:"Article"}},getters:{getContentBar:function(t,e){return t.contentBar}},mutations:{Toggle_Drawer:function(t){t.drawer=!t.drawer},Set_Drawer:function(t,e){t.drawer=e},Toggle_ContentBar:function(t){t.contentBar.prominent=!t.contentBar.prominent},Update_ContentBar:function(t,e){null!==e.img&&(t.contentBar.img=e.img),null!==e.color&&(t.contentBar.color=e.color),null!==e.title&&(t.contentBar.title=e.title)}},actions:{setDrawer:function(t,e){var n=t.commit;n("Set_Drawer",e)},toggleDrawer:function(t){var e=t.commit;e("Toggle_Drawer")},toggleContentBar:function(t){var e=t.commit;e("Toggle_ContentBar")},updateContentBar:function(t,e){var n=t.commit;n("Update_ContentBar",e)}}};r["a"].use(u["a"]);var pt=new u["a"].Store({modules:{appBar:dt}}),mt=n("f309");r["a"].use(mt["a"]);var ft=new mt["a"]({theme:{dark:!1,themes:{light:{primary:"#F44336",secondary:"#b0bec5"},dark:{primary:"#F44336",secondary:"#b0bec5"}}}});r["a"].config.productionTip=!1,new r["a"]({router:lt,store:pt,vuetify:ft,render:function(t){return t(it)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(t,e,n){}});
//# sourceMappingURL=app.b2dbe137.js.map