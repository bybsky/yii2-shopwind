import{u as h,r as f,d as i,o as s,c as t,a as e,f as o,h as l,k as r,F as y,m as v}from"./index.5aeb4455.js";import{c as C}from"./cashier.7126e373.js";import{_ as k}from"./home.5ea94d25.js";import{_ as g}from"./home.b1c313a4.js";import"./blocks.bc527001.js";import"./chat.7e9d6648.js";const b={class:"main w pt10"},N={class:"round-edge pd10 bgf mt10 mb20 center"},T={class:"mt20 mb20 pd10"},E={key:0},F={key:0},z=o("h3",{class:"mt10"},"\u8BA2\u5355\u652F\u4ED8\u6210\u529F",-1),x={key:0,class:"mt20 f-gray"},D={key:1},w=o("h3",{class:"mt10"},"\u8BA2\u5355\u5DF2\u63D0\u4EA4",-1),B={key:0,class:"mt20 f-gray"},R={key:2},V=o("h3",{class:"mt10"},"\u652F\u4ED8\u51FA\u73B0\u5F02\u5E38",-1),A=o("p",{class:"mt20 f-gray"},"\u8BF7\u6838\u5B9E\u8BA2\u5355\u662F\u5426\u5DF2\u7ECF\u652F\u4ED8",-1),O={key:1},P=o("h3",{class:"mt10"},"\u8BA2\u5355\u5904\u7406\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...",-1),K={setup(S){const n=h(),a=f(null);setTimeout(()=>{m()},4e3);function m(){C({tradeNo:n.params.tradeNo,payTradeNo:n.params.payTradeNo},_=>{a.value=_,setTimeout(()=>{v(_.bizIdentity=="ORDER"?"/my/order/list":"/deposit/trade/list")},2e3)})}return(_,$)=>{const d=i("SuccessFilled"),c=i("el-icon"),u=i("CircleCloseFilled"),p=i("Clock");return s(),t(y,null,[e(k,{exclude:["category","imagead"]}),o("div",b,[o("div",N,[o("div",T,[a.value?(s(),t("div",E,[a.value.ispay?(s(),t("div",F,[e(c,{size:60,class:"f-green mb10"},{default:l(()=>[e(d)]),_:1}),z,a.value.status=="ACCEPTED"?(s(),t("p",x,"\u5356\u5BB6\u6B63\u5728\u7ED9\u60A8\u5B89\u6392\u53D1\u8D27\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85")):r("",!0)])):a.value.payType=="COD"?(s(),t("div",D,[e(c,{size:60,class:"f-green mb10"},{default:l(()=>[e(d)]),_:1}),w,a.value.status=="ACCEPTED"?(s(),t("p",B,"\u8BF7\u5728\u6536\u5230\u8D27\u540E\u5411\u5546\u5BB6\u4ED8\u6B3E\uFF0C\u76EE\u524D\u8BA2\u5355\u72B6\u6001\u4E3A\uFF1A\u7B49\u5F85\u5546\u5BB6\u53D1\u8D27")):r("",!0)])):(s(),t("div",R,[e(c,{size:60,class:"f-yellow mb10"},{default:l(()=>[e(u)]),_:1}),V,A]))])):(s(),t("div",O,[e(c,{size:60,class:"f-blue mb10"},{default:l(()=>[e(p)]),_:1}),P]))])])]),e(g)],64)}}};export{K as default};
