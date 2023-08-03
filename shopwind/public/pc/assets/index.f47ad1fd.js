import{s as F,a as G}from"./store.8f84ac27.js";import{a as H,b as L,_ as j}from"./blocks.bc527001.js";import{s as E}from"./order.fe8a397e.js";import{d as J}from"./deposit.1c102c19.js";import{r as k,b as T,d as _,o as n,c as v,a as s,f as e,h as t,F as S,t as o,g as b,k as h,l as A,i as I,j as r,m as u,B as N,q as K,v as P}from"./index.5aeb4455.js";import{f as Q}from"./moment.ab47a251.js";import{m as U}from"./seller.2c86fc10.js";import{_ as W}from"./user.a03ff82a.js";import{m as X}from"./seller.a34c8c09.js";import"./chat.7e9d6648.js";const a=x=>(K("data-v-e7185968"),x=x(),P(),x),Y={class:"main w pt10"},Z={class:"round-edge bgf pd10"},ee={class:"uni-flex uni-row width-between pd10"},se={class:"width-surplus pt5 vertical-middle"},te={class:"inline-block f-16 mr10"},le=I("\u6B63\u5E38\u8425\u4E1A"),oe={key:0,class:"uni-flex uni-row vertical-middle"},de=a(()=>e("i",{class:"iconfont icon-fenleimulu mr5",style:{"margin-top":"2px"}},null,-1)),ae=a(()=>e("span",{class:"mr10 f-13"},"\u7ECF\u8425\u7C7B\u76EE",-1)),ne={class:"f-13"},ie={class:"bold f-20 pb10 pt10 mt5 f-number"},ce={class:"f-12 flex-middle"},re=a(()=>e("span",{class:"f-gray mr5"},"\u4E0E\u540C\u884C\u6BD4",-1)),_e={key:0,class:"f-green f-number"},pe={key:3,class:"f-c55"},ue={class:"f-13"},me={class:"bold f-20 pb10 pt10 mt5 f-number"},fe={class:"f-12 flex-middle"},ve=a(()=>e("span",{class:"f-gray mr5"},"\u4E0E\u540C\u884C\u6BD4",-1)),be={key:0,class:"f-green f-number"},he={key:3,class:"f-c55"},ge={class:"f-13"},ye={class:"bold f-20 pb10 pt10 mt5 f-number"},ke={class:"f-12 flex-middle"},xe=a(()=>e("span",{class:"f-gray mr5"},"\u4E0E\u540C\u884C\u6BD4",-1)),we={key:0,class:"f-green f-number"},ze={key:3,class:"f-c55"},Ce={class:"round-edge bgf pd10 mt20"},$e=a(()=>e("div",{class:"bold f-16 pd10 mb20"},"\u5F85\u529E\u4E8B\u9879",-1)),Ne={class:"mb20 pt10"},Ie=a(()=>e("span",null,"\u5F85\u4ED8\u6B3E",-1)),Se={class:"f-20 f-number bold"},Be={class:"mb20 pt10"},De=a(()=>e("span",null,"\u5F85\u53D6\u8D27",-1)),Me={class:"f-20 f-number bold"},Ve={class:"mb20 pt10"},qe=a(()=>e("span",null,"\u5F85\u6210\u56E2",-1)),Oe={class:"f-20 f-number bold f-number"},Re={class:"mb20 pt10"},Fe=a(()=>e("span",null,"\u4EA4\u6613\u5B8C\u6210",-1)),Ge={class:"f-20 f-number bold"},He={class:"mb20 pt10"},Le=a(()=>e("span",null,"\u5F85\u53D1\u8D27",-1)),je={class:"f-20 f-number bold"},Ee={class:"mb20 pt10"},Je=a(()=>e("span",null,"\u4EA4\u6613\u5173\u95ED",-1)),Te={class:"f-20 f-number bold"},Ae={class:"mb20 pt10"},Ke=a(()=>e("span",null,"\u5F85\u914D\u9001",-1)),Pe={class:"f-20 f-number bold"},Qe={class:"mb20 pt10"},Ue=a(()=>e("span",null,"\u9000\u6B3E\u5904\u7406",-1)),We={class:"f-20 f-number bold"},Xe={class:"round-edge bgf pd10 mt20"},Ye={class:"uni-flex uni-row pd10 mb20 width-between"},Ze={class:"f-16"},es=a(()=>e("span",{class:"bold"},"\u8D44\u91D1\u6570\u636E",-1)),ss=a(()=>e("view",null,null,-1)),ts={class:"f-gray f-12"},ls={class:"mb20"},os=a(()=>e("span",null,"\u53EF\u7528\u4F59\u989D",-1)),ds={class:"f-20 f-number bold"},as={class:"mb20"},ns={class:"flex-middle mb10"},is=a(()=>e("span",{class:"pr5"},"\u4E0D\u53EF\u63D0\u73B0",-1)),cs={class:"f-20 f-number bold"},rs={class:"mb20"},_s=a(()=>e("dt",{class:"flex-middle mb10"},[e("span",null,"\u51BB\u7ED3\u91D1\u989D")],-1)),ps={class:"f-20 f-number bold"},us={setup(x){const B=k([]),g=k({}),m=k({}),w=k({}),d=k({goods:{},shipped:{},service:{},comprehensive:{}});return T(()=>{let z=JSON.parse(localStorage.getItem("visitor"))||{};F({store_id:z.userid},l=>{g.value=l}),G({store_id:z.userid},l=>{l&&(d.value=l)}),J(null,l=>{w.value=l}),L({page_size:10},l=>{B.value=l.list}),E(null,l=>{m.value=l})}),(z,l)=>{const c=_("el-col"),D=_("el-button"),M=_("el-breadcrumb-item"),V=_("el-breadcrumb"),q=_("el-progress"),O=_("el-divider"),C=_("bottom"),i=_("el-icon"),$=_("top"),y=_("el-row"),f=_("arrow-right"),R=_("question-filled");return n(),v(S,null,[s(U),e("div",Y,[s(y,{gutter:12},{default:t(()=>[s(c,{span:4},{default:t(()=>[s(X)]),_:1}),s(c,{span:14},{default:t(()=>[e("div",Z,[e("div",ee,[e("div",se,[e("h3",te,o(g.value.store_name),1),g.value.state==1?(n(),b(D,{key:0,class:"opening f-10",size:"small"},{default:t(()=>[le]),_:1})):h("",!0)]),g.value.category?(n(),v("div",oe,[de,ae,s(V,{separator:"/"},{default:t(()=>[(n(!0),v(S,null,A(g.value.category,p=>(n(),b(M,{class:"f-gray f-13"},{default:t(()=>[I(o(p),1)]),_:2},1024))),256))]),_:1})])):h("",!0)]),d.value.comprehensive.percentage?(n(),b(y,{key:0,class:"mt10 pb10 pt20"},{default:t(()=>[s(c,{span:6,class:"center f-12"},{default:t(()=>[s(q,{type:"dashboard",width:80,"stroke-width":6,percentage:Number(d.value.comprehensive.percentage.replace("%",""))},{default:t(()=>[I(o(d.value.comprehensive.percentage.replace("%",""))+"\u5206",1)]),_:1},8,["percentage"])]),_:1}),s(c,{span:2},{default:t(()=>[s(O,{style:{height:"90%"},direction:"vertical"})]),_:1}),s(c,{span:16},{default:t(()=>[s(y,null,{default:t(()=>[s(c,{span:8},{default:t(()=>[e("p",ne,[e("span",null,o(d.value.goods.label),1)]),e("p",ie,o(d.value.goods.value),1),e("p",ce,[re,d.value.goods.compare.value>0?(n(),v("span",_e,o(d.value.goods.compare.value),1)):h("",!0),d.value.goods.compare.name=="low"?(n(),b(i,{key:1,size:12,color:"#00CC00"},{default:t(()=>[s(C)]),_:1})):d.value.goods.compare.name=="high"?(n(),b(i,{key:2,size:12,color:"#fc2b34"},{default:t(()=>[s($)]),_:1})):(n(),v("label",pe,"\u6301\u5E73"))])]),_:1}),s(c,{span:8},{default:t(()=>[e("p",ue,[e("span",null,o(d.value.shipped.label),1)]),e("p",me,o(d.value.shipped.value),1),e("p",fe,[ve,d.value.shipped.compare.value>0?(n(),v("span",be,o(d.value.shipped.compare.value),1)):h("",!0),d.value.shipped.compare.name=="low"?(n(),b(i,{key:1,size:12,color:"#00CC00"},{default:t(()=>[s(C)]),_:1})):d.value.shipped.compare.name=="high"?(n(),b(i,{key:2,size:12,color:"#fc2b34"},{default:t(()=>[s($)]),_:1})):(n(),v("label",he,"\u6301\u5E73"))])]),_:1}),s(c,{span:8},{default:t(()=>[e("p",ge,[e("span",null,o(d.value.service.label),1)]),e("p",ye,o(d.value.service.value),1),e("p",ke,[xe,d.value.service.compare.value>0?(n(),v("span",we,o(d.value.service.compare.value),1)):h("",!0),d.value.service.compare.name=="low"?(n(),b(i,{key:1,size:12,color:"#00CC00"},{default:t(()=>[s(C)]),_:1})):d.value.service.compare.name=="high"?(n(),b(i,{key:2,size:12,color:"#fc2b34"},{default:t(()=>[s($)]),_:1})):(n(),v("label",ze,"\u6301\u5E73"))])]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0)]),e("div",Ce,[$e,s(y,{style:{"margin-left":"40px"}},{default:t(()=>[s(c,{span:6},{default:t(()=>[e("dl",Ne,[e("dt",{onClick:l[0]||(l[0]=p=>r(u)("/seller/order/list?type=pending")),class:"flex-middle mb10 pointer"},[Ie,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",Se,o(m.value.pending||0),1)]),e("dl",Be,[e("dt",{onClick:l[1]||(l[1]=p=>r(u)("/seller/order/list?type=delivered")),class:"flex-middle mb10 pointer"},[De,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",Me,o(m.value.delivered||0),1)])]),_:1}),s(c,{span:6},{default:t(()=>[e("dl",Ve,[e("dt",{onClick:l[2]||(l[2]=p=>r(u)("/seller/order/list?type=teaming")),class:"flex-middle mb10 pointer"},[qe,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",Oe,o(m.value.teaming||0),1)]),e("dl",Re,[e("dt",{onClick:l[3]||(l[3]=p=>r(u)("/seller/order/list?type=finished")),class:"flex-middle mb10 pointer"},[Fe,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",Ge,o(m.value.finished||0),1)])]),_:1}),s(c,{span:6},{default:t(()=>[e("dl",He,[e("dt",{onClick:l[4]||(l[4]=p=>r(u)("/seller/order/list?type=accepted")),class:"flex-middle mb10 pointer"},[Le,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",je,o(m.value.accepted||0),1)]),e("dl",Ee,[e("dt",{onClick:l[5]||(l[5]=p=>r(u)("/seller/order/list?type=canceled")),class:"flex-middle mb10 pointer"},[Je,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",Te,o(m.value.canceled||0),1)])]),_:1}),s(c,{span:6},{default:t(()=>[e("dl",Ae,[e("dt",{onClick:l[6]||(l[6]=p=>r(u)("/seller/order/list?type=picking")),class:"flex-middle mb10 pointer"},[Ke,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",Pe,o(m.value.picking||0),1)]),e("dl",Qe,[e("dt",{onClick:l[7]||(l[7]=p=>r(u)("/seller/refund/list?status=GOING")),class:"flex-middle mb10 pointer"},[Ue,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",We,o(m.value.refund||0),1)])]),_:1})]),_:1})]),e("div",Xe,[e("div",Ye,[e("p",Ze,[es,s(i,null,{default:t(()=>[ss]),_:1})]),e("p",ts,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+o(r(Q)().format("MM/DD HH:mm:ss")),1)]),s(y,{style:{"margin-left":"40px"}},{default:t(()=>[s(c,{span:8},{default:t(()=>[e("dl",ls,[e("dt",{onClick:l[8]||(l[8]=p=>r(u)("/deposit/index")),class:"flex-middle mb10 pointer"},[os,s(i,{size:14},{default:t(()=>[s(f)]),_:1})]),e("dd",ds,o(r(N)(w.value.money)),1),e("dd",{onClick:l[9]||(l[9]=p=>r(u)("/deposit/trade/drawal")),class:"f-blue mt5 f-12 ml5 pointer"},"\u63D0\u73B0 ")])]),_:1}),s(c,{span:8},{default:t(()=>[e("dl",as,[e("dt",ns,[is,s(i,{size:15,color:"#dddddd"},{default:t(()=>[s(R)]),_:1})]),e("dd",cs,o(r(N)(w.value.nodrawal)),1)])]),_:1}),s(c,{span:8},{default:t(()=>[e("dl",rs,[_s,e("dd",ps,o(r(N)(w.value.frozen)),1)])]),_:1})]),_:1})])]),_:1}),s(c,{span:6},{default:t(()=>[s(j,{page:"sellerindex",header:!1,footer:!1})]),_:1})]),_:1})]),s(W)],64)}}};var zs=H(us,[["__scopeId","data-v-e7185968"]]);export{zs as default};
