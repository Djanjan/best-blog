(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ae64c0a","chunk-511c6440","chunk-76d2b1f7"],{"0d90":function(t,e,r){},"20f6":function(t,e,r){},"36a7":function(t,e,r){},"62ad":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0");var n=r("ade3"),i=(r("4b85"),r("a026")),a=r("d9f7"),s=r("80d2");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["offset"+Object(s["t"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return l.reduce((function(t,e){return t["order"+Object(s["t"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(d),order:Object.keys(h)};function p(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var i=e.replace(t,"");n+="-".concat(i)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),n.toLowerCase()):n.toLowerCase()}}var g=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:o({cols:{type:[Boolean,String,Number],default:!1}},u,{offset:{type:[String,Number],default:null}},d,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,i=e.data,s=e.children,c=(e.parent,"");for(var o in r)c+=String(r[o]);var l=g.get(c);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var n=r[t],i=p(e,t,n);i&&l.push(i)}));var i=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!i||!r.cols},Object(n["a"])(t,"col-".concat(r.cols),r.cols),Object(n["a"])(t,"offset-".concat(r.offset),r.offset),Object(n["a"])(t,"order-".concat(r.order),r.order),Object(n["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),g.set(c,l)}(),t(r.tag,Object(a["a"])(i,{class:l}),s)}})},"66b5":function(t,e,r){t.exports=r.p+"img/cat-what.b9182613.gif"},"8a12":function(t,e,r){"use strict";var n=r("0d90"),i=r.n(n);i.a},"8efc":function(t,e,r){},"90a2":function(t,e,r){"use strict";r("7db0");var n=r("53ca");function i(t,e){var r=e.modifiers||{},i=e.value,s="object"===Object(n["a"])(i),c=s?i.handler:i,o=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(c&&(!r.quiet||t._observe.init)){var i=Boolean(e.find((function(t){return t.isIntersecting})));c(e,n,i)}t._observe.init&&r.once?a(t):t._observe.init=!0}}),i.options||{});t._observe={init:!1,observer:o},o.observe(t)}function a(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var s={inserted:i,unbind:a};e["a"]=s},a722:function(t,e,r){"use strict";r("20f6");var n=r("e8f2");e["a"]=Object(n["a"])("layout")},adda:function(t,e,r){"use strict";r("a15b"),r("a9e3"),r("8efc");var n=r("90a2"),i=(r("36a7"),r("24b2")),a=r("58df"),s=Object(a["a"])(i["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=s,o=r("d9bd");e["a"]=c.extend({name:"v-img",directives:{intersect:n["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect:function(){return"undefined"!==typeof window&&"IntersectionObserver"in window},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var r=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[r]):r}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!this.hasIntersect||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(o["b"])("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(o["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var i=t.naturalHeight,a=t.naturalWidth;i||a?(e.naturalWidth=a,e.calculatedAspectRatio=a/i):null!=r&&setTimeout(n,r)};n()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,modifiers:{once:!0},value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},d9f7:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("498a"),r("159b"),r("ddb0");var n=r("ade3"),i=r("3835"),a=r("80d2");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){var e={},r=!0,n=!1,s=void 0;try{for(var c,l=t.split(o.styleList)[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value,d=u.split(o.styleProp),h=Object(i["a"])(d,2),f=h[0],p=h[1];f=f.trim(),f&&("string"===typeof p&&(p=p.trim()),e[Object(a["c"])(f)]=p)}}catch(g){n=!0,s=g}finally{try{r||null==l.return||l.return()}finally{if(n)throw s}}return e}function u(){var t,e,r={},n=arguments.length;while(n--)for(var i=0,a=Object.keys(arguments[n]);i<a.length;i++)switch(t=a[i],t){case"class":case"style":case"directives":if(Array.isArray(r[t])||(r[t]=[]),"style"===t){var s=void 0;s=Array.isArray(arguments[n].style)?arguments[n].style:[arguments[n].style];for(var o=0;o<s.length;o++){var u=s[o];"string"===typeof u&&(s[o]=l(u))}arguments[n].style=s}r[t]=r[t].concat(arguments[n][t]);break;case"staticClass":if(!arguments[n][t])break;void 0===r[t]&&(r[t]=""),r[t]&&(r[t]+=" "),r[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":r[t]||(r[t]={});for(var d=r[t],h=0,f=Object.keys(arguments[n][t]||{});h<f.length;h++)e=f[h],d[e]?d[e]=Array().concat(d[e],arguments[n][t][e]):d[e]=arguments[n][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":r[t]||(r[t]={}),r[t]=c({},arguments[n][t],{},r[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:r[t]||(r[t]=arguments[n][t])}return r}},e822:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{style:t.$vuetify.breakpoint.mdAndUp?"height: 100vh;":"height: 100vh; margin-bottom: -40px;"},[n("v-img",{staticClass:"v-img-full",attrs:{src:r("66b5"),"lazy-src":"https://picsum.photos/10/6?image=40",gradient:"to top, rgba(0,0,0,.4), rgba(0,0,0,.7)"}},[n("v-layout",{staticStyle:{height:"100%"},attrs:{"align-center":"","justify-center":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"white--text",attrs:{cols:"12",md:"8",align:"center",justify:"center"}},[n("div",[n("div",{staticClass:"display-3 font-weight-bold text-center"},[t._v("Ohhh god what is it!")]),n("div",{staticClass:"subtitle-1 text-center mt-5"},[t._v("You are lost...")]),n("v-btn",{staticClass:"mt-3",attrs:{color:"secondary",rounded:"",large:""},on:{click:function(e){return e.stopPropagation(),t.$router.push({path:"/app/home"})}}},[t._v(" Back to homepage ")])],1)])],1)],1)],1)],1)},i=[],a={data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),500)},methods:{randomNumber:function(){return Math.floor(100*Math.random())+1}}},s=a,c=(r("8a12"),r("2877")),o=r("6544"),l=r.n(o),u=r("8336"),d=r("62ad"),h=r("adda"),f=r("a722"),p=r("0fd9"),g=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=g.exports;l()(g,{VBtn:u["a"],VCol:d["a"],VImg:h["a"],VLayout:f["a"],VRow:p["a"]})},e8f2:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("99af"),r("4de4"),r("a15b"),r("b64b"),r("2ca0"),r("498a");var n=r("a026");function i(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,i=r.data,a=r.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var c=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(i.staticClass+=" ".concat(c.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,a)}})}}}]);
//# sourceMappingURL=chunk-2ae64c0a.75e5a466.js.map