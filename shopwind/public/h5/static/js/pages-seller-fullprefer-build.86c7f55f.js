(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-seller-fullprefer-build"],{"0189":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));var u={uniIcons:n("f7b7").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-flex uni-column bgf round-edge ml10 mr10 mt10 pt5 pr10 pb5 pl10"},[n("v-uni-view",{staticClass:"uni-flex uni-row pt10 pb10 flex-middle f-16"},[n("v-uni-text",{staticClass:"mr10"},[e._v("订单满")]),n("v-uni-input",{staticClass:"width-surplus",attrs:{type:"digit",placeholder:"单笔订单购满XX元"},model:{value:e.fullprefer.amount,callback:function(t){e.$set(e.fullprefer,"amount",t)},expression:"fullprefer.amount"}}),n("uni-icons",{directives:[{name:"show",rawName:"v-show",value:e.fullprefer.amount,expression:"fullprefer.amount"}],staticClass:"ml10",attrs:{type:"closeempty",color:"gray"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearInput(t,"amount")}}})],1),n("v-uni-view",{staticClass:"uni-flex uni-row pt10 pb10 flex-middle f-16 bt"},[n("v-uni-text",{staticClass:"mr10"},[e._v("享折扣")]),n("v-uni-input",{staticClass:"width-surplus",attrs:{type:"digit",placeholder:"输入折扣0.01-9.99"},model:{value:e.fullprefer.discount,callback:function(t){e.$set(e.fullprefer,"discount",t)},expression:"fullprefer.discount"}}),n("uni-icons",{directives:[{name:"show",rawName:"v-show",value:e.fullprefer.discount,expression:"fullprefer.discount"}],staticClass:"ml10",attrs:{type:"closeempty",color:"gray"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearInput(t,"discount")}}})],1),n("v-uni-view",{staticClass:"uni-flex uni-row pt10 pb10 flex-middle f-16 bt"},[n("v-uni-text",{staticClass:"mr10"},[e._v("或减价")]),n("v-uni-input",{staticClass:"width-surplus",attrs:{type:"digit",placeholder:"输入优惠金额XX元"},model:{value:e.fullprefer.decrease,callback:function(t){e.$set(e.fullprefer,"decrease",t)},expression:"fullprefer.decrease"}}),n("uni-icons",{directives:[{name:"show",rawName:"v-show",value:e.fullprefer.decrease,expression:"fullprefer.decrease"}],staticClass:"ml10",attrs:{type:"closeempty",color:"gray"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearInput(t,"decrease")}}})],1),n("v-uni-view",{staticClass:"uni-flex uni-row pt10 pb10 flex-middle width-between f-16 bt"},[n("v-uni-text",{staticClass:"mr10"},[e._v("启用")]),n("v-uni-switch",{attrs:{checked:1==e.fullprefer.status,color:"#F0AD4E"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"pd10"},[n("v-uni-view",{staticClass:"mybutton f-white f-16 mt10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("保存提交")])],1)],1)},l=[]},"16cc":function(e,t,n){"use strict";n.r(t);var u=n("0189"),i=n("b12f");for(var l in i)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(l);var s=n("828b"),a=Object(s["a"])(i["default"],u["b"],u["c"],!1,null,"829ac006",null,!1,u["a"],void 0);t["default"]=a.exports},a6f4:function(e,t,n){"use strict";var u=n("f5bd").default,i=u(n("8e1d"));u(n("a03c"));e.exports={fullprefer:
/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 *
 * @Id build.js 2020.2.1 $
 * @author mosir
 */
function(e){i.default.request("fullprefer/read",null,(function(t){0==t.code&&(e.fullprefer=t.data||{})}))},submit:function(e){i.default.request("fullprefer/update",{amount:e.fullprefer.amount,discount:e.fullprefer.discount,decrease:e.fullprefer.decrease,status:e.fullprefer.status},(function(e){0==e.code?uni.showToast({title:"设置成功",duration:2e3,success:function(){setTimeout((function(){uni.navigateBack()}),2e3)}}):e.message&&uni.showToast({title:e.message,icon:"none"})}))}}},b12f:function(e,t,n){"use strict";n.r(t);var u=n("dd33"),i=n.n(u);for(var l in u)["default"].indexOf(l)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(l);t["default"]=i.a},dd33:function(e,t,n){"use strict";n("6a54");var u=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("a03c")),l=u(n("a6f4")),s={data:function(){return{fullprefer:{status:1}}},methods:{submit:function(){l.default.submit(this)},change:function(e){this.fullprefer.status=e.detail.value?1:0},clearInput:function(e,t){this.fullprefer[t]=""}},onLoad:function(e){i.default.verifyLogin(!0,this.$mp.page.route,!0,!0)&&l.default.fullprefer(this)}};t.default=s}}]);