(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-refund-detail"],{1404:function(e,t,n){"use strict";n.r(t);var i=n("52ef"),u=n("2b3c");for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("5a26");var r=n("828b"),o=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"2ab30a78",null,!1,i["a"],void 0);t["default"]=o.exports},"2b3c":function(e,t,n){"use strict";n.r(t);var i=n("43e0"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=u.a},"2c57e":function(e,t,n){"use strict";n.r(t);var i=n("693a"),u=n("dd81");for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("4564");var r=n("828b"),o=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"3b781cf0",null,!1,i["a"],void 0);t["default"]=o.exports},"3aa8":function(e,t,n){var i=n("a172");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var u=n("967d").default;u("b944ddd0",i,!0,{sourceMap:!1,shadowMode:!1})},"43e0":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n("a03c")),a=i(n("ade2")),r={data:function(){return{refund_id:0,refund:{}}},methods:{cancel:function(){a.default.cancel(this)},intervene:function(){a.default.intervene(this)},showPopup:function(e,t){return this.$refs[t].open()},closePopup:function(e,t){return this.$refs[t].close()}},onLoad:function(e){this.refund_id=e.id,u.default.verifyLogin(!0,this.$mp.page.route)&&a.default.refund(this)}};t.default=r},4564:function(e,t,n){"use strict";var i=n("3aa8"),u=n.n(i);u.a},"4ef9":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("64aa");i(n("8e1d"));var u={name:"MyFooter",props:{bgcolor:{type:String,default:""},height:{type:Number/String,default:0},fixed:{type:Boolean,default:!0}}};t.default=u},"52ef":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("f7b7").default,myFooter:n("2c57e").default,uniPopup:n("9b8e3").default},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-flex uni-column round-edge ml10 mr10 mt10 mb10 pb10 order-status"},[n("v-uni-text",{staticClass:"f-17 mt10 pt10 pl10 ml10 pb10"},[e._v(e._s(e._f("translator")(e.refund.status,"refund")))]),n("v-uni-view",{staticClass:"uni-flex uni-row pl10 ml10 pb10 mb10 pr10 width-between flex-middle"},[n("v-uni-text",[e._v(e._s(e.refund.created))]),"SUCCESS"!=e.refund.status&&"CLOSED"!=e.refund.status?n("v-uni-navigator",{staticClass:"mybutton mr10",attrs:{url:"/pages/my/refund/logs?id="+e.refund.refund_id,"hover-class":"none"}},[e._v("提交申诉")]):e._e()],1)],1),n("v-uni-view",{staticClass:"pd10 bgf ml10 mr10 round-edge"},[n("v-uni-view",{staticClass:"uni-flex uni-row width-between pb10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPopup(t,"ordermoney")}}},[n("v-uni-text",[e._v("订单金额")]),n("v-uni-view",[n("v-uni-text",[e._v(e._s(e.refund.total_fee))]),n("uni-icons",{attrs:{type:"arrowright"}})],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-row width-between bt pt10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showPopup(t,"refundmoney")}}},[n("v-uni-text",[e._v("退款金额")]),n("v-uni-view",[n("v-uni-text",[e._v(e._s(e.refund.refund_total_fee))]),n("uni-icons",{attrs:{type:"arrowright"}})],1)],1)],1),n("v-uni-view",{staticClass:"pd10 bgf ml10 mr10 round-edge mt10"},[n("v-uni-view",{staticClass:"uni-flex uni-row width-between pb10"},[n("v-uni-text",[e._v("退款编号")]),n("v-uni-view",[n("v-uni-text",[e._v(e._s(e.refund.refund_sn))])],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-row width-between bt pt10 pb10"},[n("v-uni-text",[e._v("收货情况")]),n("v-uni-view",[n("v-uni-text",[e._v(e._s(e.refund.shipped))])],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-row width-between bt pt10 pb10"},[n("v-uni-text",[e._v("退款原因")]),n("v-uni-view",[n("v-uni-text",[e._v(e._s(e.refund.refund_reason))])],1)],1),n("v-uni-view",{staticClass:"uni-flex uni-row width-between bt pt10 pb10"},[n("v-uni-text",[e._v("退款说明")]),n("v-uni-view",[n("v-uni-text",[e._v(e._s(e.refund.refund_desc))])],1)],1),n("v-uni-navigator",{staticClass:"uni-flex uni-row width-between bt pt10",attrs:{url:"/pages/my/refund/logs?id="+e.refund.refund_id,"hover-class":"none"}},[n("v-uni-text",[e._v("协商历史")]),n("v-uni-view",[n("uni-icons",{attrs:{type:"arrowright"}})],1)],1)],1),"SUCCESS"!=e.refund.status&&"CLOSED"!=e.refund.status?n("v-uni-view",{staticClass:"uni-flex uni-row mt10 mb10 pt10 flex-center operate"},[n("v-uni-view",{staticClass:"mybutton",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v("取消退款")]),n("v-uni-navigator",{staticClass:"mybutton yellow",attrs:{url:"/pages/my/refund/build?id="+e.refund.refund_id}},[e._v("修改退款")]),0==e.refund.intervene?n("v-uni-view",{staticClass:"mybutton gray",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.intervene.apply(void 0,arguments)}}},[e._v("申请介入")]):e._e(),1==e.refund.intervene?n("v-uni-navigator",{staticClass:"mybutton gray",attrs:{url:"/pages/my/order/detail?id="+e.refund.order_id}},[e._v("查看订单")]):e._e()],1):e._e(),"SUCCESS"!=e.refund.status&&"CLOSED"!=e.refund.status&&1==e.refund.intervene?n("my-footer",{attrs:{bgcolor:"#F0AD4E",height:"45"}},[n("v-uni-view",{staticClass:"uni-center f-white pd10"},[e._v("该退款已申请平台客服介入处理")])],1):e._e(),n("uni-popup",{ref:"ordermoney",staticClass:"relative",staticStyle:{"z-index":"100"},attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"pd10 bgf"},[n("v-uni-view",{staticClass:"pt10"},[e._v("订单总额说明")]),n("v-uni-view",{staticClass:"f-gray pb10"},[e._v("订单总额 = 商品总额("+e._s(e.refund.goods_fee)+") + 运费总额("+e._s(e.refund.freight)+")")])],1)],1),n("uni-popup",{ref:"refundmoney",staticClass:"relative",staticStyle:{"z-index":"100"},attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"pd10 bgf"},[n("v-uni-view",{staticClass:"pt10"},[e._v("退款金额说明")]),n("v-uni-view",{staticClass:"f-gray pb10"},[e._v("退款金额 = 退商品金额("+e._s(e.refund.refund_goods_fee)+") +\n\t\t\t\t退运费("+e._s(e.refund.refund_freight)+")")])],1)],1)],1)},a=[]},"5a26":function(e,t,n){"use strict";var i=n("6e57"),u=n.n(i);u.a},"693a":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"footer",style:{"--height":this.height+"px"}},[t("v-uni-view",{class:["bgp pdx",this.fixed?"fixed-bottom":""],style:{"background-color":this.bgcolor||"#ededed"}},[this._t("default")],2)],1)},u=[]},"6e57":function(e,t,n){var i=n("dc86");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var u=n("967d").default;u("38478139",i,!0,{sourceMap:!1,shadowMode:!1})},a172:function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,".footer[data-v-3b781cf0]{\n\t/* 适配iphoneX的底部 */height:calc(var(--height) + constant(safe-area-inset-bottom));\n\t/* 兼容 IOS>11.2 */height:calc(var(--height) + env(safe-area-inset-bottom))}.footer .pdx[data-v-3b781cf0]{\n\t/* 适配iphoneX的底部*/padding-bottom:constant(safe-area-inset-bottom);\n\t/*兼容 IOS>11.2*/padding-bottom:env(safe-area-inset-bottom)}",""]),e.exports=t},ade2:function(e,t,n){"use strict";var i=n("f5bd").default,u=i(n("8e1d"));function a(e){return["未收到货，需要退款","已收到货，不退货只退款","已收到货，需退货退款"][e]}e.exports={refund:
/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 *
 * @Id view.js 2020.12.9 $
 * @author winder
 */
function(e){u.default.request("refund/read",{refund_id:e.refund_id},(function(t){0==t.code&&(e.refund=t.data,e.refund.shipped=a(e.refund.shipped))}))},shipped:a,cancel:function(e){uni.showModal({content:"您确定要取消退款吗？",success:function(t){t.confirm&&u.default.request("refund/cancel",{refund_id:e.refund.refund_id},(function(e){0==e.code&&uni.showToast({title:"退款已取消",icon:"none",duration:2e3,complete:function(){setTimeout((function(){uni.redirectTo({url:"/pages/my/order/list"})}),2e3)}})}))}})},intervene:function(e){u.default.request("refund/intervene",{refund_id:e.refund_id},(function(t){0==t.code?uni.showModal({content:"平台客服已介入处理",showCancel:!1,success:function(){e.refund.intervene=1}}):t.message&&uni.showToast({title:t.message,icon:"none"})}))}}},dc86:function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,".order-status[data-v-2ab30a78]{background-image:linear-gradient(90deg,#ff570a,#fc2b34);color:#fff}.order-status .mybutton[data-v-2ab30a78]{border:%?1?% #fff solid;border-radius:%?6?%;width:%?150?%;height:%?64?%;line-height:%?64?%;padding:0;text-align:center;background:none}.operate .mybutton[data-v-2ab30a78]{background:#fff;border:%?2?% #09f solid;color:#09f;width:calc(50% - %?22?%);margin-left:%?20?%;margin-right:%?20?%;padding-top:%?10?%;padding-bottom:%?10?%}.operate .mybutton.yellow[data-v-2ab30a78]{border:%?2?% #f29d18 solid;color:#f29d18}.operate .mybutton.gray[data-v-2ab30a78]{border:%?2?% #666 solid;color:#666}",""]),e.exports=t},dd81:function(e,t,n){"use strict";n.r(t);var i=n("4ef9"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=u.a}}]);