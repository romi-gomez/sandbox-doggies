(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9,11],{278:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("c29c994c",content,!0,{sourceMap:!1})},279:function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("33682b05",content,!0,{sourceMap:!1})},289:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("23bce139",content,!0,{sourceMap:!1})},290:function(t,e,o){"use strict";o(278)},291:function(t,e,o){var n=o(59)(!1);n.push([t.i,".token-data__title[data-v-9c9a7270]{display:flex;justify-content:space-between;align-items:flex-end;padding:1em;border-radius:.5em .5em 0 0;color:#fff}.token-data__title h1[data-v-9c9a7270]{font-size:1.5em}.token-data__title h2[data-v-9c9a7270]{font-size:1em}.token-data__info[data-v-9c9a7270]{height:100%;background-color:rgba(0,0,0,.5);padding:1em;line-height:1.5em;border-radius:0 0 .5em .5em}.token-data__info__attrs[data-v-9c9a7270]{display:grid;grid-template-columns:repeat(2,1fr);list-style:none;padding:0}.token-data__info__attrs__attribute[data-v-9c9a7270]{width:95%;font-size:.8em;text-align:left;padding:1em 0;font-weight:800}.token-data__info__attrs__attribute__trait[data-v-9c9a7270]{display:block;background:#0a2201;color:#fff;padding:0 1em;border-radius:1.5em;margin-bottom:.5em}.token-data__info__attrs__attribute__value[data-v-9c9a7270]{display:block;color:#fff;padding:.25em 1em;border-radius:1.5em}@media screen and (min-width:1024px){.token-data__info__attrs[data-v-9c9a7270]{grid-template-columns:repeat(4,1fr);grid-gap:.5em}.token-data__info__attrs__attribute[data-v-9c9a7270]{grid-template-columns:2fr 3fr}}",""]),t.exports=n},292:function(t,e,o){"use strict";o(279)},293:function(t,e,o){var n=o(59)(!1);n.push([t.i,".token-footer[data-v-fc786430]{width:100%;margin:0 auto;color:#0a2201;background:#fff;padding:1em 1.5em;font-size:.8em;border-radius:.5em}",""]),t.exports=n},296:function(t,e,o){"use strict";o.r(e);o(28),o(45),o(18);var n={name:"TokenInfoData",computed:{setTraitsColor:function(){var t=this.$store.state.currentTokenData.attributes.filter((function(t){return"Type"===t.trait_type}));return"background: ".concat({human:"#75402f",blue:"#2f7fbe",alien:"#2e8e72",zombie:"#567244",dogg:"#6d2916",robot:"#9294a4",golden:"#af721d"}[t[0].value.toLowerCase()],";")},setDoggyType:function(){return this.$store.state.currentTokenData.attributes.filter((function(t){return"Type"===t.trait_type}))[0].value}}},r=(o(290),o(27)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"token-data"},[e("div",{staticClass:"token-data__title",style:t.setTraitsColor},[e("h1",[t._v(t._s(t.$store.state.currentTokenData.name))]),t._v(" "),e("h2",[t._v(t._s(t.setDoggyType)+" ")])]),t._v(" "),e("div",{staticClass:"token-data__info"},[e("ul",{staticClass:"token-data__info__attrs"},t._l(t.$store.state.currentTokenData.attributes,(function(o){return e("li",{key:o.trait_type,staticClass:"token-data__info__attrs__attribute",style:""===o.value?"display:none":""},[e("p",{staticClass:"token-data__info__attrs__attribute__trait",style:t.setTraitsColor},[t._v(t._s(""!==o.value?o.trait_type:""))]),t._v(" "),e("p",{staticClass:"token-data__info__attrs__attribute__value"},[t._v(t._s(o.value))])])})),0)])])}),[],!1,null,"9c9a7270",null);e.default=component.exports},297:function(t,e,o){"use strict";o.r(e);o(37),o(61);var n=o(309),r={name:"TokenInfoFooter",computed:{setDescription:function(){return Object(n.marked)(this.$store.state.currentTokenData.description)}}},d=(o(292),o(27)),component=Object(d.a)(r,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"token-footer",domProps:{innerHTML:t._s(t.setDescription)}})}),[],!1,null,"fc786430",null);e.default=component.exports},307:function(t,e,o){"use strict";o(289)},308:function(t,e,o){var n=o(59)(!1);n.push([t.i,".token[data-v-569dd71a]{display:grid;width:100%;margin:0 auto;color:#fff;grid-template-columns:1fr;grid-template-rows:1fr}.token__img[data-v-569dd71a]{background-position:50%;background-size:cover;min-height:400px;background-repeat:no-repeat;border-radius:.5em}@media screen and (min-width:1024px){.token[data-v-569dd71a]{width:100%;grid-template-columns:1fr 2fr;grid-template-rows:1fr}.token__footer[data-v-569dd71a]{grid-column-start:1;grid-column-end:3}}",""]),t.exports=n},314:function(t,e,o){"use strict";o.r(e);var n={name:"TokenInfo",computed:{setTokenImage:function(){return"background-image:url('".concat(this.$store.state.currentTokenData.image_url,"')")}}},r=(o(307),o(27)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"token"},[e("div",{staticClass:"token__img",style:t.setTokenImage}),t._v(" "),e("TokenData",{staticClass:"token__data"}),t._v(" "),e("TokenInfoFooter",{staticClass:"token__footer"})],1)}),[],!1,null,"569dd71a",null);e.default=component.exports;installComponents(component,{TokenData:o(296).default,TokenInfoFooter:o(297).default})}}]);