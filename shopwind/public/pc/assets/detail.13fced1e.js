import{u as I,r as h,b as N,d as r,e as B,o as n,c,a as e,f as t,h as s,F as g,w as V,n as D,t as d,j as u,H as E,i as l,V as q,B as b,l as z,g as F,k as y,q as L,v as O}from"./index.62034e5b.js";import{e as T}from"./deposit.2625540d.js";import{m as j}from"./my.3491255e.js";import{_ as H}from"./user.01a6387e.js";import{m as M}from"./my.cf8c535a.js";import{a as R}from"./blocks.8ce53700.js";import"./chat.3e501cc2.js";const k=i=>(L("data-v-4dba8a86"),i=i(),O(),i),U={class:"main w pt10"},$={class:"wraper"},A={class:"round-edge pd10 bgf"},G={class:"pd10"},J=l("\u8D44\u4EA7"),K=l("\u4EA4\u6613\u8BE6\u60C5"),P={class:"round-edge pd10 bgf mt20"},Q={class:"mt5 mb5 pl10 pr10 bold"},W={class:"round-edge pd10 bgf mt20"},X={class:"pl10 pr10 pt10"},Y=k(()=>t("h3",{class:"f-14"},"\u4EA4\u6613\u4FE1\u606F",-1)),Z=l("\u4EA4\u6613\u91D1\u989D\uFF1A"),ee={class:"f-red f-yahei"},se={key:0,class:"round-edge pd10 bgf mt20"},ae={class:"pl10 pr10 pt10"},te=k(()=>t("h3",{class:"f-14"},"\u5546\u54C1\u4FE1\u606F",-1)),oe=["src"],de={key:0,class:"f-gray"},le={class:"mt5 f-red"},_e={setup(i){const w=I(),S=h(!1),a=h({});return N(()=>{T({tradeNo:w.params.id},f=>{a.value=f})}),(f,ne)=>{const o=r("el-col"),m=r("el-breadcrumb-item"),x=r("el-breadcrumb"),p=r("el-row"),v=r("router-link"),C=B("loading");return n(),c(g,null,[e(j),t("div",U,[e(p,{gutter:12},{default:s(()=>[e(o,{span:4},{default:s(()=>[e(M)]),_:1}),e(o,{span:20},{default:s(()=>[V((n(),c("div",$,[t("div",A,[t("div",G,[e(x,{separator:"/"},{default:s(()=>[e(m,null,{default:s(()=>[J]),_:1}),e(m,null,{default:s(()=>[K]),_:1})]),_:1})])]),t("div",P,[t("p",Q,[t("span",{class:D([a.value.status=="SUCCESS"?"f-blue":a.value.status=="CLOSED"?"f-gray":""])},d(u(E)(a.value.status,"trade")),3)])]),t("div",W,[t("div",X,[Y,e(p,{class:"f-13 f-c55 mt20 mb10"},{default:s(()=>[e(o,{span:12},{default:s(()=>[l("\u6D88\u8D39\u540D\u79F0\uFF1A"+d(u(q)(a.value.title,30)),1)]),_:1}),e(o,{span:12},{default:s(()=>[l("\u4EA4\u6613\u7F16\u53F7\uFF1A"+d(a.value.tradeNo),1)]),_:1}),e(o,{span:12},{default:s(()=>[Z,t("span",ee,d(u(b)(a.value.amount)),1)]),_:1}),e(o,{span:12},{default:s(()=>[l("\u652F\u4ED8\u65B9\u5F0F\uFF1A"+d(a.value.payment_name),1)]),_:1}),e(o,{span:12},{default:s(()=>[l("\u5546\u6237\u4EA4\u6613\u53F7\uFF1A"+d(a.value.bizOrderId||"-"),1)]),_:1}),e(o,{span:12},{default:s(()=>[l("\u521B\u5EFA\u65F6\u95F4\uFF1A"+d(a.value.add_time),1)]),_:1}),e(o,{span:12},{default:s(()=>[l("\u4ED8\u6B3E\u65F6\u95F4\uFF1A"+d(a.value.pay_time||"-"),1)]),_:1}),e(o,{span:12},{default:s(()=>[l("\u5B8C\u6210\u65F6\u95F4\uFF1A"+d(a.value.end_time||"-"),1)]),_:1})]),_:1})])]),a.value.orderInfo?(n(),c("div",se,[t("div",ae,[te,e(p,{class:"f-13 f-c55 mt20"},{default:s(()=>[(n(!0),c(g,null,z(a.value.orderInfo.items,_=>(n(),F(o,{span:12,class:"mb10"},{default:s(()=>[e(o,{span:4},{default:s(()=>[e(v,{to:"/goods/detail/"+_.goods_id,class:"rlink mr10"},{default:s(()=>[t("img",{src:_.goods_image,width:"60",height:"60"},null,8,oe)]),_:2},1032,["to"])]),_:2},1024),e(o,{span:20,class:"l-h20"},{default:s(()=>[e(v,{to:"/goods/detail/"+_.goods_id,class:"rlink line-clamp-2"},{default:s(()=>[l(d(_.goods_name),1)]),_:2},1032,["to"]),_.specification?(n(),c("p",de,d(_.specification),1)):y("",!0),t("p",le,d(u(b)(_.price))+" x "+d(_.quantity),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})])])):y("",!0)])),[[C,S.value]])]),_:1})]),_:1})]),e(H)],64)}}};var ve=R(_e,[["__scopeId","data-v-4dba8a86"]]);export{ve as default};
