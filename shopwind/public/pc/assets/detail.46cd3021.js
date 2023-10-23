import{u as C,r as h,b as D,d as i,e as q,o as r,c as u,a as e,f as o,h as s,F as I,w as E,i as d,t,j as g,B as b,g as y,k as m,l as F,q as R,v as $}from"./index.e25e7f47.js";import{b as j,c as G,d as L}from"./order.d86e1cb5.js";import{m as M}from"./seller.93f328f5.js";import{_ as T}from"./user.fdb2a033.js";import{m as z}from"./seller.c923749c.js";import{_ as A}from"./ordertimeline.16842906.js";import{a as H}from"./blocks.82061d8b.js";import"./chat.0e6f222a.js";const k=p=>(R("data-v-31431faf"),p=p(),$(),p),J={class:"main w pt10"},K={class:"wraper"},O={class:"round-edge pd10 bgf"},P={class:"pd10"},Q=d("\u8BA2\u5355"),U=d("\u8BA2\u5355\u7BA1\u7406"),W=d("\u8BA2\u5355\u8BE6\u60C5"),X={class:"round-edge pd10 bgf mt20"},Y={class:"round-edge pd10 bgf mt20"},Z={class:"pl10 pr10 pt10"},ee=k(()=>o("h3",{class:"f-14"},"\u8BA2\u5355\u4FE1\u606F",-1)),se=d("\u8BA2\u5355\u603B\u4EF7\uFF1A"),ae={class:"f-red f-yahei"},te=d("\u914D\u9001\u8D39\u7528\uFF1A"),oe={class:"f-red f-yahei"},de={key:0,class:"round-edge pd10 bgf mt20"},_e={class:"pl10 pr10 pt10"},le=k(()=>o("h3",{class:"f-14"},"\u914D\u9001\u4FE1\u606F",-1)),re={class:"round-edge pd10 bgf mt20"},ne={class:"pl10 pr10 pt10"},ce=k(()=>o("h3",{class:"f-14"},"\u5546\u54C1\u4FE1\u606F",-1)),ie=["src"],ue={key:0,class:"f-gray"},pe={class:"mt5 f-red"},fe={setup(p){const x=C(),w=h(!1),_=h({}),n=h();return D(()=>{j({order_id:x.params.id},c=>{L({order_id:c.order_id},B=>{c.items=B.list,_.value=c})},w),G({order_id:x.params.id},c=>{n.value=c})}),(c,B)=>{const a=i("el-col"),v=i("el-breadcrumb-item"),S=i("el-breadcrumb"),f=i("el-row"),N=i("router-link"),V=q("loading");return r(),u(I,null,[e(M),o("div",J,[e(f,{gutter:12},{default:s(()=>[e(a,{span:4},{default:s(()=>[e(z)]),_:1}),e(a,{span:20},{default:s(()=>[E((r(),u("div",K,[o("div",O,[o("div",P,[e(S,{separator:"/"},{default:s(()=>[e(v,null,{default:s(()=>[Q]),_:1}),e(v,null,{default:s(()=>[U]),_:1}),e(v,null,{default:s(()=>[W]),_:1})]),_:1})])]),o("div",X,[e(A,{data:_.value},null,8,["data"])]),o("div",Y,[o("div",Z,[ee,e(f,{class:"f-13 f-c55 mt20 mb10"},{default:s(()=>[e(a,{span:12},{default:s(()=>[d("\u8BA2\u5355\u7F16\u53F7\uFF1A"+t(_.value.order_sn),1)]),_:1}),e(a,{span:12},{default:s(()=>[se,o("span",ae,t(g(b)(_.value.order_amount)),1)]),_:1}),e(a,{span:12},{default:s(()=>[d("\u4E70\u5BB6\u540D\u79F0\uFF1A"+t(_.value.buyer_name),1)]),_:1}),e(a,{span:12},{default:s(()=>[te,o("span",oe,t(g(b)(_.value.shipping_fee)),1)]),_:1}),e(a,{span:12},{default:s(()=>[d("\u652F\u4ED8\u65B9\u5F0F\uFF1A"+t(_.value.payment_name),1)]),_:1}),e(a,{span:12},{default:s(()=>[d("\u4EA4\u6613\u7F16\u53F7\uFF1A"+t(_.value.tradeNo||"-"),1)]),_:1})]),_:1})])]),n.value?(r(),u("div",de,[o("div",_e,[le,e(f,{class:"f-13 f-c55 mt20 mb10"},{default:s(()=>[e(a,{span:12},{default:s(()=>[d("\u6536\u8D27\u4EBA\u59D3\u540D\uFF1A"+t(_.value.buyer_name),1)]),_:1}),e(a,{span:12},{default:s(()=>[d("\u6536\u8D27\u5730\u5740\uFF1A"+t(n.value.province+n.value.city+(n.value.district||"")+n.value.address),1)]),_:1}),e(a,{span:12},{default:s(()=>[d("\u8054\u7CFB\u7535\u8BDD\uFF1A"+t(n.value.phone_mob),1)]),_:1}),e(a,{span:12},{default:s(()=>[d("\u53D1\u8D27\u65F6\u95F4\uFF1A"+t(_.value.ship_time||"-"),1)]),_:1}),_.value.express?(r(),y(a,{key:0,span:12},{default:s(()=>[d("\u914D\u9001\u65B9\u5F0F\uFF1A"+t(_.value.express.company||"-"),1)]),_:1})):m("",!0),_.value.express?(r(),y(a,{key:1,span:12},{default:s(()=>[d("\u7269\u6D41\u5355\u53F7\uFF1A"+t(_.value.express.number||"-"),1)]),_:1})):m("",!0)]),_:1})])])):m("",!0),o("div",re,[o("div",ne,[ce,e(f,{class:"f-13 f-c55 mt20"},{default:s(()=>[(r(!0),u(I,null,F(_.value.items,l=>(r(),y(a,{span:12,class:"mb10"},{default:s(()=>[e(a,{span:4},{default:s(()=>[e(N,{to:"/goods/detail/"+l.goods_id,class:"rlink mr10"},{default:s(()=>[o("img",{src:l.goods_image,width:"60",height:"60"},null,8,ie)]),_:2},1032,["to"])]),_:2},1024),e(a,{span:20,class:"l-h20"},{default:s(()=>[e(N,{to:"/goods/detail/"+l.goods_id,class:"rlink line-clamp-2"},{default:s(()=>[d(t(l.goods_name),1)]),_:2},1032,["to"]),l.specification?(r(),u("p",ue,t(l.specification),1)):m("",!0),o("p",pe,t(g(b)(l.price))+" x "+t(l.quantity),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})])])])),[[V,w.value]])]),_:1})]),_:1})]),e(T)],64)}}};var we=H(fe,[["__scopeId","data-v-31431faf"]]);export{we as default};
