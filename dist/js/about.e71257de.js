(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=c("cf05"),r=c.n(a),s={class:"container"},o=Object(n["e"])("img",{alt:"Vue logo",loading:"lazy",src:r.a,style:{width:"10rem",height:"10rem"}},null,-1),i=Object(n["f"])(),u=Object(n["e"])("h1",{class:"text-white"},"APP HECHO CON COMPOSITION API",-1),b=Object(n["f"])(),l=Object(n["f"])(),d={class:"row"};function O(e,t,c,a,r,O){var p=Object(n["u"])("Buscador"),j=Object(n["u"])("Card");return Object(n["p"])(),Object(n["d"])("div",s,[o,i,u,b,Object(n["g"])(p,{onAccion:a.obtenerStickers,class:"mb-4"},null,8,["onAccion"]),l,Object(n["e"])("div",d,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(a.stickers,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"col",key:e.id},[Object(n["g"])(j,{data:e},null,8,["data"])])})),128))])])}var p=c("1da1"),j=(c("96cf"),c("d3b7"),c("ae8d")),f=c("1ce0"),h={name:"App",components:{Card:j["a"],Buscador:f["a"]},setup:function(){var e=Object(n["s"])({}),t=Object(n["s"])(""),c=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var c,n,a,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=r.length>0&&void 0!==r[0]?r[0]:"DBZ",t.prev=1,t.next=4,fetch("https://api.giphy.com/v1/stickers/search?q=".concat(c,"&api_key=8DzXku6215DmtAiEngS54kVEfdzsa3Cu"));case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,e.value=a.data,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();return c(),{stickers:e,search:t,obtenerStickers:c}}},v=c("6b0d"),k=c.n(v);const g=k()(h,[["render",O]]);t["default"]=g}}]);
//# sourceMappingURL=about.e71257de.js.map