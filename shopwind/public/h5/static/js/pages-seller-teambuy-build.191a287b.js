(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-seller-teambuy-build"],{"54e7":function(t,e,i){"use strict";i.r(e);var a=i("fa28"),n=i("ed05");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("76ba");var u=i("828b"),o=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"53b7c582",null,!1,a["a"],void 0);e["default"]=o.exports},6135:function(t,e,i){"use strict";var a=i("f5bd").default;i("64aa");var n=a(i("8e1d")),s=a(i("a03c"));function u(t){var e=[];n.default.request("goods/read",{goods_id:t.goods_id},(function(i){0==i.code&&i.data&&(t.goods=i.data,function(t){var e=uni.getStorageSync("teambuy");e&&(t.teambuy.title=e.title,t.teambuy.people=e.people,uni.removeStorageSync("teambuy"))}(t),n.default.request("goods/specs",{goods_id:t.goods_id},(function(i){if(0==i.code){for(var a in i.data.list){var n=i.data.list[a];e[a]={specification:n.spec_1+" "+n.spec_2,price:n.price,stock:n.stock,image:n.image,spec_id:n.spec_id};var u=t.teambuy.specs;s.default.isEmpty(u)||s.default.isEmpty(u[n.spec_id])||(e[a].discount=u[n.spec_id].discount)}t.gallery.list=e}})))}))}t.exports={teambuy:
/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 *
 * @Id apply.js 2020.2.1 $
 * @author mosir
 */
function(t){n.default.request("teambuy/read",{id:t.id},(function(e){0==e.code&&(t.teambuy=e.data||{},u(t))}))},goods:u,submit:function(t){if(t.gallery.list.length<1)return uni.showModal({content:"请选择商品",showCancel:!1}),!1;var e={};for(var i in t.gallery.list){var a=t.gallery.list[i];if(e[a.spec_id]={},!(a.discount&&Number(a.discount)>0&&Number(a.discount)<10))return uni.showModal({title:"提示",content:"拼团折扣设置不合理，请检查！",showCancel:!1}),!1;e[a.spec_id].discount=Number(a.discount)}n.default.request(t.id?"teambuy/update":"teambuy/add",Object.assign(t.teambuy,{specs:e,goods_id:t.goods_id}),(function(e){0==e.code?uni.showToast({title:t.id?"修改成功":"创建成功",duration:2e3,success:function(){setTimeout((function(){uni.navigateBack()}),2e3)}}):e.message&&uni.showToast({title:e.message,icon:"none"})}))}}},"76ba":function(t,e,i){"use strict";var a=i("e8e0"),n=i.n(a);n.a},acde:function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a03c")),s=a(i("6135")),u={data:function(){return{id:0,goods:{},goods_id:0,gallery:{list:[]},range:[2,3],teambuy:{people:2}}},methods:{submit:function(){s.default.submit(this)},change:function(t){this.teambuy.people=0==t.detail.value?2:3},clearInput:function(t,e){this.teambuy[e]=""},redirect:function(t){uni.setStorageSync("teambuy",this.teambuy),n.default.redirect(t+"?redirect="+n.default.getUrl(),"navigate")}},onLoad:function(t){this.id=t.id||0,this.goods_id=t.goods_id||0,n.default.verifyLogin(!0,this.$mp.page.route,!0,!0)&&(this.id?s.default.teambuy(this):s.default.goods(this))}};e.default=u},be47:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,".mybutton[data-v-53b7c582]{border-radius:%?20?%}.gallery .image[data-v-53b7c582],\n.gallery uni-image[data-v-53b7c582]{width:%?150?%;height:%?150?%;border-radius:%?10?%}.gallery uni-input[data-v-53b7c582]{width:%?140?%;padding:%?8?% 0;background-color:#f5f5f5;border-radius:%?10?%}",""]),t.exports=e},e8e0:function(t,e,i){var a=i("be47");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("39dcea2c",a,!0,{sourceMap:!1,shadowMode:!1})},ed05:function(t,e,i){"use strict";i.r(e);var a=i("acde"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},fa28:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uniIcons:i("f7b7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-flex uni-column bgf round-edge ml10 mr10 mt10 pt5 pr10 pb5 pl10"},[i("v-uni-view",{staticClass:"uni-flex uni-row pt10 pb10 flex-middle f-16"},[i("v-uni-text",{staticClass:"mr10"},[t._v("拼团标题")]),i("v-uni-input",{staticClass:"width-surplus",attrs:{placeholder:"设置活动标题"},model:{value:t.teambuy.title,callback:function(e){t.$set(t.teambuy,"title",e)},expression:"teambuy.title"}}),i("uni-icons",{directives:[{name:"show",rawName:"v-show",value:t.teambuy.title,expression:"teambuy.title"}],staticClass:"ml10",attrs:{type:"closeempty",color:"gray"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput(e,"title")}}})],1),i("v-uni-view",{staticClass:"uni-flex uni-row pt10 pb10 flex-middle width-between f-16 bt"},[i("v-uni-text",{staticClass:"mr10"},[t._v("成团人数")]),i("v-uni-picker",{attrs:{range:t.range,value:2==t.teambuy.people?0:1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"f-16"},[t._v(t._s(t.teambuy.people)+"人")]),i("uni-icons",{attrs:{type:"arrowright"}})],1)],1)],1),i("v-uni-view",{staticClass:"uni-flex uni-column bgf round-edge ml10 mr10 mt10 pt5 pr10 pb5 pl10"},[i("v-uni-view",{staticClass:"uni-flex uni-row pt10 pb10 flex-middle width-between f-16"},[i("v-uni-text",{staticClass:"mr10"},[t._v("拼团商品")]),i("v-uni-view",{staticClass:"f-16 f-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirect("/pages/popup/goods")}}},[t.goods.goods_id?i("v-uni-text",[t._v("更换")]):i("v-uni-text",[t._v("添加")])],1)],1),t.gallery.list.length>0?i("v-uni-view",{staticClass:"gallery"},t._l(t.gallery.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-flex uni-row bt pt10"},[i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{attrs:{src:e.image||t.goods.default_image,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"uni-flex uni-column ml10"},[i("v-uni-text",{staticClass:"line-clamp-2 l-h20"},[t._v(t._s(t.goods.goods_name))]),i("v-uni-text",{staticClass:"f-gray"},[t._v(t._s(e.specification))]),i("v-uni-view",{staticClass:"uni-flex uni-row mt5 flex-middle"},[i("v-uni-text",{staticClass:"uni-bold f-15"},[t._v(t._s(t._f("currency")(e.price)))]),i("v-uni-text",{staticClass:"f-gray ml10"},[t._v("库存"+t._s(e.stock||0)+"件")])],1),i("v-uni-view",{staticClass:"uni-flex uni-row width-between pb10 flex-middle mt10"},[i("v-uni-text",{staticClass:"width-surplus f-gray"},[t._v("拼团折扣")]),i("v-uni-view",{staticClass:"uni-flex uni-row flex-middle flex-end"},[i("v-uni-input",{staticClass:"mr5 f-12 uni-center",attrs:{type:"digit",maxlength:"4",placeholder:"0.01-9.99"},model:{value:e.discount,callback:function(i){t.$set(e,"discount",i)},expression:"item.discount"}}),i("v-uni-text",[t._v("折")])],1)],1)],1)],1)})),1):t._e()],1),i("v-uni-view",{staticClass:"pd10"},[i("v-uni-view",{staticClass:"mybutton f-white f-16 mt10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("保存提交")])],1)],1)},s=[]}}]);