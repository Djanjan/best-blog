(function(t){function e(e){for(var r,a,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1f27ddd9":"beb9044e","chunk-2d0c4856":"6819e7d4","chunk-2d0e5e97":"9191ed47","chunk-2d21a3d2":"3617fcfa","chunk-2d22d746":"7eb12189"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-1f27ddd9":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1f27ddd9":"dc07e286","chunk-2d0c4856":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],m.parentNode.removeChild(m),n(i)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/best-blog/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"206d":function(t,e,n){"use strict";var r=n("50a7"),a=n.n(r);a.a},"271d":function(t,e,n){},"50a7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("navigationPanel"),n("appBar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",dark:"",app:""},model:{value:t.updateDrawer,callback:function(e){t.updateDrawer=e},expression:"updateDrawer"}},[n("v-skeleton-loader",{attrs:{loading:t.loading,transition:"scale-transition",type:"list-item-avatar-two-line"}},[n("div",[t.logged?[n("v-list",{attrs:{dense:""}},[n("v-list-group",{attrs:{value:"false","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.userDate.avatar}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.userDate.login))]),n("v-list-item-subtitle",[t._v(t._s(t.userDate.email))])],1)]},proxy:!0}],null,!1,830427190)},[n("v-list-item",{attrs:{link:""},on:{click:function(e){return e.stopPropagation(),t.logout()}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-exit-to-app")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1)]:[n("v-list",[n("v-list-item",{attrs:{link:""},on:{click:function(e){return e.stopPropagation(),t.toggleDialog()}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-exit-to-app")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Login")])],1)],1)],1),n("loginDialog")]],2)]),n("v-divider"),n("v-skeleton-loader",{attrs:{loading:t.loading,transition:"scale-transition",type:"list-item-three-line"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{"active-class":"primary",mandatory:""},model:{value:t.selectedItems,callback:function(e){t.selectedItems=e},expression:"selectedItems"}},t._l(t.links,(function(e,r){return n("v-list-item",{key:r,attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),1)],1)],1)],1)},c=[],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),l=n("2f62"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{staticClass:"overflow-hidden",attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.openDialog,callback:function(e){t.openDialog=e},expression:"openDialog"}},[n("v-toolbar",{attrs:{flat:"",color:"transparent",absolute:"",dark:"",height:"80px"}},[n("v-btn",{staticClass:"ml-1",attrs:{icon:""},on:{click:function(e){return t.toggleDialog()}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",{staticClass:"ml-7"},[t._v("Login Page")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"mr-7 hidden-sm-and-down"},[n("v-btn",{attrs:{dark:"",text:""}},[t._v("Home")]),n("v-btn",{attrs:{dark:"",text:""}},[t._v("Register")]),n("v-btn",{attrs:{dark:"",text:""}},[t._v("About")])],1)],1),n("section",{staticStyle:{height:"100vh"}},[n("v-img",{staticClass:"v-img-full",attrs:{src:"https://picsum.photos/1900/1200?random","lazy-src":"https://picsum.photos/10/6?random",gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,.8)"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])},[n("v-layout",{staticStyle:{"margin-top":"8em"},attrs:{"white--text":"","align-center":"",column:"","justify-center":""}},[n("v-card",{staticClass:"px-5 pb-3",attrs:{"max-width":"100%",width:"400"}},[n("v-sheet",{staticClass:"v-sheet--offset mx-auto pa-8 text-center",attrs:{color:"primary",elevation:"12",dark:"","max-width":"calc(100% - 32px)"}},[n("h1",{staticClass:"display-2 font-weight-bold mb-2"},[t._v(" Login ")]),n("v-btn",{staticClass:"ma-1",attrs:{icon:""}},[n("v-icon",[t._v("mdi-facebook-box")])],1),n("v-btn",{staticClass:"ma-1",attrs:{icon:""}},[n("v-icon",[t._v("mdi-twitter")])],1),n("v-btn",{staticClass:"ma-1",attrs:{icon:""}},[n("v-icon",[t._v("mdi-github-box")])],1)],1),n("v-card-text",{staticClass:"text-center mx-auto"},[n("div",{staticClass:"text-center grey--text body-1 font-weight-light"},[t._v(" Or Registary ")]),n("form",[n("v-text-field",{attrs:{"error-messages":t.nameErrors,counter:25,label:"Name","prepend-icon":"mdi-face",required:""},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{"error-messages":t.emailErrors,label:"E-mail","prepend-icon":"mdi-email",required:""},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{"error-messages":t.passwordErrors,label:"Password","prepend-icon":"mdi-lock-outline",required:""},on:{change:function(e){return t.$v.password.$touch()},blur:function(e){return t.$v.password.$touch()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-checkbox",{attrs:{"error-messages":t.checkboxErrors,label:"Do you agree?",color:"primary",required:""},on:{change:function(e){return t.$v.checkbox.$touch()},blur:function(e){return t.$v.checkbox.$touch()}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),n("v-btn",{attrs:{color:"primary",text:"",rounded:"",large:""},on:{click:t.submit}},[t._v(" LET'S GO ")])],1)],1),n("hfooter")],1)],1)],1)],1)},d=[],m=(n("b0c0"),n("1dce")),p=n("b5ae"),v=n("fd2d");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={mixins:[m["validationMixin"]],validations:{name:{required:p["required"],maxLength:Object(p["maxLength"])(25)},email:{required:p["required"],email:p["email"]},password:{required:p["required"]},checkbox:{checked:function(t){return t}},submitStatus:""},components:{hfooter:v["a"]},data:function(){return{loading:!0,name:"",email:"",password:"",checkbox:!1}},computed:f({},Object(l["d"])({openDialog:function(t){return t.dialog}}),{checkboxErrors:function(){var t=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&t.push("You must agree to continue!"),t):t},passwordErrors:function(){var t=[];return this.$v.password.$dirty?(!this.$v.password.required&&t.push("Password is required"),t):t},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&t.push("Name must be at most 25 characters long"),!this.$v.name.required&&t.push("Name is required."),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Must be valid e-mail"),!this.$v.email.required&&t.push("E-mail is required"),t):t}}),mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)},methods:f({},Object(l["b"])(["toggleDialog"]),{},Object(l["b"])("user",["authorization"]),{randomNumber:function(t){return Math.floor(Math.random()*(t-1+1))+1},submit:function(){var t=this;this.$v.$touch(),this.$v.$invalid?this.submitStatus="ERROR":(this.submitStatus="PENDING",setTimeout((function(){t.authorization({login:t.name,email:t.email,password:t.password,avatar:"https://randomuser.me/api/portraits/men/"+t.randomNumber(99)+".jpg"}),t.submitStatus="OK"}),500))},clear:function(){this.$v.$reset(),this.name="",this.email="",this.password="",this.checkbox=!1}})},h=b,y=(n("206d"),n("2877")),k=n("6544"),w=n.n(k),O=n("8336"),x=n("b0af"),_=n("99d9"),j=n("ac7c"),C=n("169a"),V=n("132d"),D=n("adda"),P=n("a722"),S=n("490a"),$=n("0fd9"),B=n("8dd9"),L=n("2fa4"),T=n("8654"),E=n("71d9"),I=n("2a7f"),q=Object(y["a"])(h,u,d,!1,null,null,null),A=q.exports;function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}w()(q,{VBtn:O["a"],VCard:x["a"],VCardText:_["b"],VCheckbox:j["a"],VDialog:C["a"],VIcon:V["a"],VImg:D["a"],VLayout:P["a"],VProgressCircular:S["a"],VRow:$["a"],VSheet:B["a"],VSpacer:L["a"],VTextField:T["a"],VToolbar:E["a"],VToolbarItems:I["a"],VToolbarTitle:I["b"]});var R={components:{loginDialog:A},data:function(){return{loading:!0,openLoginPage:!1,links:[{text:"Home",icon:"mdi-home",share:"/home"},{text:"Contact",icon:"mdi-contact-mail",share:"/"},{text:"Settings",icon:"mdi-settings",share:"/settings"}]}},computed:M({},Object(l["d"])("appBar",{drawer:function(t){return t.drawer}}),{},Object(l["d"])("user",{logged:function(t){return t.logged},userDate:function(t){return t.date}}),{},Object(l["d"])({openDialog:function(t){return t.openDialog}}),{selectedItems:{get:function(){return this.value},set:function(t){void 0!==t&&this.$router.currentRoute.path!==this.links[t].share&&this.$router.push(this.links[t].share)}},updateDrawer:{get:function(){return this.drawer},set:function(t){this.setDrawer(t)}}}),created:function(){},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)},methods:M({randomNumber:function(t){return Math.floor(Math.random()*(t-1+1))+1}},Object(l["b"])("appBar",["setDrawer"]),{},Object(l["b"])("user",["toggleLogged","logout"]),{},Object(l["b"])(["toggleDialog"]))},z=R,F=n("ce7e"),U=n("8860"),G=n("56b0"),H=n("da13"),J=n("1800"),K=n("8270"),Y=n("5d23"),Q=n("1baa"),W=n("f774"),X=n("3129"),Z=Object(y["a"])(z,i,c,!1,null,null,null),tt=Z.exports;w()(Z,{VDivider:F["a"],VIcon:V["a"],VImg:D["a"],VList:U["a"],VListGroup:G["a"],VListItem:H["a"],VListItemAction:J["a"],VListItemAvatar:K["a"],VListItemContent:Y["a"],VListItemGroup:Q["a"],VListItemSubtitle:Y["b"],VListItemTitle:Y["c"],VNavigationDrawer:W["a"],VSkeletonLoader:X["a"]});var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.contentBar.prominent?[n("v-app-bar",{style:"background-image: linear-gradient("+t.$vuetify.theme.themes.light.secondary+", "+t.$vuetify.theme.themes.light.primary+");",attrs:{app:"",height:"350px","min-height":"80px",prominent:"",dark:"",flat:"",color:t.contentBar.color,src:t.contentBar.img,transition:"slide-y-transition","shrink-on-scroll":"",elevation:"16"},scopedSlots:t._u([{key:"img",fn:function(e){var r=e.props;return[n("v-img",t._b({attrs:{"min-height":"80px",gradient:"to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"}},"v-img",r,!1))]}}])},[n("v-app-bar-nav-icon",{staticClass:"ma-2",attrs:{elevation:"24"},on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),n("v-toolbar-title",{staticClass:"pb-6"},[t._v(t._s(t.contentBar.title))]),n("v-progress-linear",{attrs:{active:!1,indeterminate:!1,absolute:"",top:"",color:"primary"}}),n("v-spacer"),n("v-btn",{staticClass:"mt-3",attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{staticClass:"mt-3",attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{staticClass:"mt-3",attrs:{icon:"",large:"",color:"primary"},on:{click:function(e){return e.stopPropagation(),t.closeContentBar(e)}}},[n("v-icon",[t._v("mdi-close")])],1)],1)]:[n("v-app-bar",{attrs:{app:"",flat:"",height:"80px","min-width":"130px",transition:"slide-y-transition",collapse:!t.collapseOnScroll,"collapse-on-scroll":t.collapseOnScroll,elevation:"16"}},[n("v-app-bar-nav-icon",{staticClass:"ml-2 v-btn--contained v-btn--fab v-btn--round v-size--small",on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),n("v-toolbar-title",[t._v("Blog")]),n("v-progress-linear",{attrs:{active:!1,indeterminate:!1,absolute:"",top:"",color:"primary"}}),n("v-spacer"),n("v-checkbox",{staticClass:"ml-5",attrs:{color:"primary","hide-details":""},model:{value:t.collapseOnScroll,callback:function(e){t.collapseOnScroll=e},expression:"collapseOnScroll"}}),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("menuContext")],1)]],2)},nt=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:"","offset-y":"",transition:"scale-transition","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-sheet",{staticClass:"mx-auto text-center mb-0",attrs:{elevation:"4","max-width":"400"}},[n("v-card-text",[n("v-list",t._l(5,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v("Option "+t._s(e))])],1)})),1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.menu=!1}}},[t._v("Save")])],1)],1)],1)],1)},at=[],ot={data:function(){return{menu:!1,model:null}}},it=ot,ct=n("e449"),st=Object(y["a"])(it,rt,at,!1,null,null,null),lt=st.exports;function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}w()(st,{VBtn:O["a"],VCardActions:_["a"],VCardText:_["b"],VDivider:F["a"],VIcon:V["a"],VList:U["a"],VListItem:H["a"],VListItemTitle:Y["c"],VMenu:ct["a"],VSheet:B["a"],VSpacer:L["a"]});var mt={components:{menuContext:lt},data:function(){return{loading:!0,collapseOnScroll:!0}},computed:dt({},Object(l["d"])("appBar",{contentBar:function(t){return t.contentBar}}),{},Object(l["c"])("appBar",["getContentBar"])),created:function(){},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)},methods:dt({closeContentBar:function(){this.$router.go(-1)}},Object(l["b"])("appBar",["toggleDrawer","toggleContentBar","updateContentBar"]))},pt=mt,vt=(n("e3c7"),n("40dc")),gt=n("5bc1"),ft=n("8e36"),bt=Object(y["a"])(pt,et,nt,!1,null,null,null),ht=bt.exports;w()(bt,{VAppBar:vt["a"],VAppBarNavIcon:gt["a"],VBtn:O["a"],VCheckbox:j["a"],VIcon:V["a"],VImg:D["a"],VProgressLinear:ft["a"],VSpacer:L["a"],VToolbarTitle:I["b"]});var yt={props:{source:String},components:{navigationPanel:tt,appBar:ht},computed:{},data:function(){return{}},created:function(){},methods:{}},kt=yt,wt=(n("5c0b"),n("7496")),Ot=n("a523"),xt=n("a75b"),_t=Object(y["a"])(kt,a,o,!1,null,null,null),jt=_t.exports;w()(_t,{VApp:wt["a"],VContainer:Ot["a"],VContent:xt["a"]});n("d3b7");var Ct=n("8c4f");r["a"].use(Ct["a"]);var Vt=[{path:"*",name:"not-found",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}},{path:"/home",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/article/:id",name:"article",component:function(){return n.e("chunk-2d0c4856").then(n.bind(null,"3ad6"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/settings",name:"settings",component:function(){return n.e("chunk-1f27ddd9").then(n.bind(null,"26d3"))}}],Dt=new Ct["a"]({base:"/best-blog/",routes:Vt}),Pt=Dt,St={namespaced:!0,state:{drawer:!0,contentBar:{prominent:!1,img:"https://picsum.photos/1920/1080?random",color:"transparent",title:"Article"}},getters:{getContentBar:function(t,e){return t.contentBar}},mutations:{Toggle_Drawer:function(t){t.drawer=!t.drawer},Set_Drawer:function(t,e){t.drawer=e},Toggle_ContentBar:function(t){t.contentBar.prominent=!t.contentBar.prominent},Update_ContentBar:function(t,e){null!==e.img&&(t.contentBar.img=e.img),null!==e.color&&(t.contentBar.color=e.color),null!==e.title&&(t.contentBar.title=e.title)}},actions:{setDrawer:function(t,e){var n=t.commit;n("Set_Drawer",e)},toggleDrawer:function(t){var e=t.commit;e("Toggle_Drawer")},toggleContentBar:function(t){var e=t.commit;e("Toggle_ContentBar")},updateContentBar:function(t,e){var n=t.commit;n("Update_ContentBar",e)}}},$t={namespaced:!0,state:{logged:!1,date:{login:null,password:null,email:null,avatar:null}},getters:{getContentBar:function(t,e){return t.contentBar}},mutations:{Toggle_Logged:function(t){t.logged=!t.logged},Authorization:function(t,e){t.date.login=e.login,t.date.email=e.email,t.date.password=e.password,t.date.avatar=e.avatar,t.logged=!0},Logout:function(t){t.date.email=null,t.date.password=null,t.date.login=null,t.date.avatar=null,t.logged=!1}},actions:{authorization:function(t,e){var n=t.commit;n("Authorization",e)},logout:function(t){var e=t.commit;e("Logout")},toggleLogged:function(t){var e=t.commit;e("Toggle_Logged")}}};r["a"].use(l["a"]);var Bt=new l["a"].Store({modules:{appBar:St,user:$t},state:{dialog:!1},mutations:{Toggle_Dialog:function(t){t.dialog=!t.dialog}},actions:{toggleDialog:function(t){var e=t.commit;e("Toggle_Dialog")}}}),Lt=n("f309");r["a"].use(Lt["a"]);var Tt=new Lt["a"]({theme:{dark:!1,themes:{light:{primary:"#F44336",secondary:"#b0bec5"},dark:{primary:"#F44336",secondary:"#b0bec5"}}}});r["a"].config.productionTip=!1,new r["a"]({router:Pt,store:Bt,vuetify:Tt,render:function(t){return t(jt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(t,e,n){},e3c7:function(t,e,n){"use strict";var r=n("271d"),a=n.n(r);a.a},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"transparent",attrs:{padless:"",flat:""}},[n("v-card-text",{attrs:{flat:"",tile:""}},[n("v-skeleton-loader",{attrs:{loading:t.loading,transition:"scale-transition",type:"text"}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return n("v-btn",{key:e,staticClass:"my-2",attrs:{text:"",rounded:""}},[t._v(" "+t._s(e)+" ")])})),n("v-spacer"),n("v-col",[n("v-card-text",{staticClass:"font-weight-light text-right"},[t._v(" © "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Djan Production")])])],1)],2)],1)],1)],1)},a=[],o={data:function(){return{loading:!0,links:["Home","About Us","Team","Services","Blog","Contact Us"]}},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)}},i=o,c=n("2877"),s=n("6544"),l=n.n(s),u=n("8336"),d=n("99d9"),m=n("62ad"),p=n("553a"),v=n("0fd9"),g=n("3129"),f=n("2fa4"),b=Object(c["a"])(i,r,a,!1,null,null,null);e["a"]=b.exports;l()(b,{VBtn:u["a"],VCardText:d["b"],VCol:m["a"],VFooter:p["a"],VRow:v["a"],VSkeletonLoader:g["a"],VSpacer:f["a"]})}});
//# sourceMappingURL=app.c2966759.js.map