import{u as J,r as E,x as L,b as T,d,e as A,o as r,c as u,a as e,f as t,h as s,F as w,w as H,l as I,g as M,t as g,k as y,j as n,B as K,J as O,i as f,q as P,v as Q,E as W,I as X}from"./index.5aeb4455.js";import{b as Y,d as Z,g as ee}from"./order.fe8a397e.js";import{u as se}from"./upload.96eb5c9c.js";import{m as oe}from"./my.79ee95ff.js";import{_ as te}from"./user.a03ff82a.js";import{m as ae}from"./my.b2d7c696.js";import{a as le}from"./blocks.bc527001.js";import"./chat.7e9d6648.js";const N=v=>(P("data-v-7eeab856"),v=v(),Q(),v),de={class:"main w pt10"},ne={class:"wraper"},ce={class:"round-edge pd10 bgf"},_e={class:"pd10"},re=f("\u8BA2\u5355"),ie=f("\u6211\u7684\u8BA2\u5355"),ue=f("\u8BA2\u5355\u8BC4\u4EF7"),pe={class:"round-edge pd10 bgf mt20"},me={class:"pd10"},fe=N(()=>t("h3",{class:"f-14"},"\u5546\u54C1\u8BC4\u4EF7",-1)),ve={class:"pd10"},he=["src"],ge={class:"line-clamp-2"},be={key:0,class:"f-gray"},Ve={class:"mt5 f-red"},we={class:"mt10 mb5"},ye={class:"uni-flex uni-row mb20 mt20 share flex-wrap"},ke=["src"],xe={class:"round-edge pd10 bgf mt20"},Ue={class:"pd10"},Ce=N(()=>t("h3",{class:"f-14 mb20"},"\u5E97\u94FA\u8BC4\u5206",-1)),Be={class:"pd10"},Ee=f("\u670D\u52A1\u8BC4\u5206"),Ie=f("\u7269\u6D41\u8BC4\u5206"),Me={key:0,class:"pd10 center mb20"},Ne=f("\u63D0\u4EA4\u8BC4\u4EF7"),Se={setup(v){const S=J(),k=E(!1),p=E({}),a=L({goods:{},store:{service:5,shipped:5},images:{}});T(()=>{Y({order_id:S.params.id},_=>{Z({order_id:_.order_id},c=>{_.items=c.list,p.value=_,_.items.forEach(function(l,m){a.images[l.spec_id]=l.images||[],a.goods[l.spec_id]={value:5,comment:""}})})},k)});const D=()=>{ee({order_id:p.value.order_id,evaluations:a},()=>{p.value.evaluation_status=1,W.success("\u60A8\u5DF2\u5B8C\u6210\u8BC4\u4EF7\uFF01"),X.replace("/my/order/detail/"+p.value.order_id)})},F=(_,c)=>{a.images[_].splice(c,1)},x=(_,c,l)=>{se(_.raw,{folder:"evaluate/"},m=>{a.images[c][l]=m.fileUrl})};return(_,c)=>{const l=d("el-col"),m=d("el-breadcrumb-item"),q=d("el-breadcrumb"),b=d("el-rate"),R=d("close-bold"),U=d("el-icon"),C=d("el-upload"),$=d("plus"),j=d("el-input"),h=d("el-row"),z=d("el-button"),G=A("loading");return r(),u(w,null,[e(oe),t("div",de,[e(h,{gutter:12},{default:s(()=>[e(l,{span:4},{default:s(()=>[e(ae)]),_:1}),e(l,{span:20},{default:s(()=>[H((r(),u("div",ne,[t("div",ce,[t("div",_e,[e(q,{separator:"/"},{default:s(()=>[e(m,null,{default:s(()=>[re]),_:1}),e(m,null,{default:s(()=>[ie]),_:1}),e(m,null,{default:s(()=>[ue]),_:1})]),_:1})])]),t("div",pe,[t("div",me,[fe,t("div",ve,[(r(!0),u(w,null,I(p.value.items,o=>(r(),M(h,{class:"f-13 f-c55 mt20 mb10"},{default:s(()=>[e(l,{span:3},{default:s(()=>[t("img",{src:o.goods_image,width:"60",height:"60",style:{margin:"4px 10px 0 0"}},null,8,he)]),_:2},1024),e(l,{span:12,class:"l-h20"},{default:s(()=>[t("p",ge,g(o.goods_name),1),o.specification?(r(),u("p",be,g(o.specification),1)):y("",!0),t("p",Ve,g(n(K)(o.price))+" x "+g(o.quantity),1),t("p",we,[e(b,{modelValue:n(a).goods[o.spec_id].value,"onUpdate:modelValue":i=>n(a).goods[o.spec_id].value=i},null,8,["modelValue","onUpdate:modelValue"])]),t("div",ye,[(r(!0),u(w,null,I(n(a).images[o.spec_id],(i,V)=>(r(),u("div",{key:V,class:"relative"},[i?(r(),M(C,{key:0,action:"#","show-file-list":!1,"auto-upload":!1,"on-change":B=>{x(B,o.spec_id,V)},class:"mr20 mb20"},{default:s(()=>[t("img",{src:i+"?t="+Math.random()},null,8,ke),e(U,{onClick:O(B=>F(o.spec_id,V),["stop"]),class:"absolute remove",color:"#ffffff"},{default:s(()=>[e(R)]),_:2},1032,["onClick"])]),_:2},1032,["on-change"])):y("",!0)]))),128)),e(C,{action:"#","show-file-list":!1,"auto-upload":!1,"on-change":i=>{x(i,o.spec_id,n(a).images[o.spec_id].length)},class:"mr20"},{default:s(()=>[e(U,{class:"add",size:20},{default:s(()=>[e($)]),_:1})]),_:2},1032,["on-change"])]),t("p",null,[e(j,{modelValue:n(a).goods[o.spec_id].comment,"onUpdate:modelValue":i=>n(a).goods[o.spec_id].comment=i,placeholder:"\u8F93\u5165\u60A8\u5BF9\u5B9D\u8D1D\u7684\u8BC4\u4EF7"},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]),_:2},1024))),256))])])]),t("div",xe,[t("div",Ue,[Ce,t("div",Be,[e(h,null,{default:s(()=>[e(l,{span:3},{default:s(()=>[Ee]),_:1}),e(l,{span:12},{default:s(()=>[e(b,{modelValue:n(a).store.service,"onUpdate:modelValue":c[0]||(c[0]=o=>n(a).store.service=o)},null,8,["modelValue"])]),_:1})]),_:1}),e(h,null,{default:s(()=>[e(l,{span:3},{default:s(()=>[Ie]),_:1}),e(l,{span:12},{default:s(()=>[e(b,{modelValue:n(a).store.shipped,"onUpdate:modelValue":c[1]||(c[1]=o=>n(a).store.shipped=o),class:"mt5"},null,8,["modelValue"])]),_:1})]),_:1})])]),p.value.evaluation_status==0?(r(),u("div",Me,[e(z,{onClick:D,type:"primary"},{default:s(()=>[Ne]),_:1})])):y("",!0)])])),[[G,k.value]])]),_:1})]),_:1})]),e(te)],64)}}};var Je=le(Se,[["__scopeId","data-v-7eeab856"]]);export{Je as default};
