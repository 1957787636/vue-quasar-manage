(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5db365f0","chunk-06f8cf94","chunk-2d2389f9"],{b0dd:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"100%"},attrs:{"thumb-style":t.thumbStyle,visible:!1}},[t._t("default")],2)],1)},s=[],i=(o("dca8"),o("ffbe")),r={name:"BaseContent",data:function(){return{thumbStyle:i["thumbStyle"],BasePath:""}},props:["position"],methods:{ScrollToPosition:function(t){this.$refs.scrollArea.setScrollPosition(t,300)},getPosition:function(){return this.$refs.scrollArea.getScrollPosition()}},mounted:function(){this.BasePath=this.$route.path,Object.freeze(this.BasePath);var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},deactivated:function(){window.sessionStorage.setItem(this.BasePath,JSON.stringify({listScrollTop:this.getPosition()}))},activated:function(){var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},destroyed:function(){sessionStorage.removeItem(this.BasePath)}},a=r,l=o("2877"),c=o("fe09"),u=Object(l["a"])(a,n,s,!1,null,null,null);e["default"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QScrollArea:c["A"]})},c37d:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("base-content",[o("h5",[t._v(t._s(t.msg))])])},s=[],i=o("b0dd"),r={name:"TableDetail",components:{BaseContent:i["default"]},data:function(){return{msg:""}},created:function(){this.msg=this.$route.query}},a=r,l=o("2877"),c=Object(l["a"])(a,n,s,!1,null,null,null);e["default"]=c.exports},ffbe:function(t,e,o){"use strict";o.r(e),o.d(e,"thumbStyle",(function(){return n})),o.d(e,"thumbStyleOfMenu",(function(){return s}));var n={right:"5px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},s={borderRadius:"5px",backgroundColor:"rgba(144,147,153,0.9)",padding:"10px;",margin:"10px;",width:"3px"}}}]);