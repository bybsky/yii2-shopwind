import{r as g,a as U}from"./blocks.3700444d.js";import{E,r as I,x as N,b as B,d as o,o as C,c as S,a as e,f as a,h as l,F as j,j as u,i as f,q,v as F,K as M}from"./index.467940d6.js";import{m as k}from"./seller.24a61a74.js";import{_ as K}from"./user.a97d190d.js";import{m as O}from"./seller.1b4f7c07.js";import"./chat.251442be.js";/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 * 
 * @Id fullprefer.js 2021.10.30 $
 * @author mosir
 */function R(s,n,t){g("fullprefer/read",s,d=>{d.code==0&&typeof n=="function"&&n(d.data)},t)}function T(s,n,t){g("fullprefer/update",s,d=>{d.code==0?typeof n=="function"&&n(d.data):E.warning(d.message)},t)}const r=s=>(q("data-v-18565a4d"),s=s(),F(),s),$={class:"main w pt10"},z={class:"round-edge pd10 bgf"},A={class:"pd10"},D=f("\u8425\u9500"),G=f("\u6EE1\u4F18\u60E0"),H={class:"round-edge pd10 bgf mt20"},J=r(()=>a("h3",{class:"pd10 mb20"},"\u6EE1\u4F18\u60E0\u8BBE\u7F6E",-1)),L=r(()=>a("span",{class:"f-gray ml5"},"\u5143",-1)),P=r(()=>a("span",{class:"f-gray ml5"},"\u6298\uFF0C\u586B\u51990.01-9.99\u6298",-1)),Q=r(()=>a("span",{class:"f-gray ml5"},"\u5143",-1)),W=r(()=>a("p",{class:"l-h17 f-12 f-blue tips pd10"},"\u53EF\u8BBE\u7F6E\u5355\u7B14\u8BA2\u5355\u5546\u54C1\u603B\u989D\u6EE1\u591A\u5C11\u5143\u540E\u6253\u6298\u6216\u51CF\u4EF7\uFF0C\u6EE1\u8DB3\u5176\u4E2D\u4E00\u9879\u5373\u53EF\uFF0C\u9ED8\u8BA4\u6298\u6263\u4F18\u60E0",-1)),X=f("\u63D0\u4EA4"),Y={setup(s){const n=I(!1),t=N({status:1});B(()=>{R(null,m=>{Object.assign(t,m)})});const d=()=>{T(t,m=>{M({title:"\u63D0\u793A",message:"\u6EE1\u4F18\u60E0\u8BBE\u7F6E\u6210\u529F\uFF01",type:"success",position:"bottom-left"})},n)};return(m,_)=>{const b=o("el-col"),h=o("el-breadcrumb-item"),v=o("el-breadcrumb"),p=o("el-input"),c=o("el-form-item"),V=o("el-switch"),w=o("el-button"),y=o("el-form"),x=o("el-row");return C(),S(j,null,[e(k),a("div",$,[e(x,{gutter:12},{default:l(()=>[e(b,{span:4},{default:l(()=>[e(O)]),_:1}),e(b,{span:20},{default:l(()=>[a("div",z,[a("div",A,[e(v,{separator:"/"},{default:l(()=>[e(h,null,{default:l(()=>[D]),_:1}),e(h,null,{default:l(()=>[G]),_:1})]),_:1})])]),a("div",H,[J,e(y,{inline:!0,class:"pd10"},{default:l(()=>[e(c,{label:"\u8BA2\u5355\u6EE1","label-width":100},{default:l(()=>[e(p,{modelValue:u(t).amount,"onUpdate:modelValue":_[0]||(_[0]=i=>u(t).amount=i),clearable:""},null,8,["modelValue"]),L]),_:1}),e(c,{label:"\u6298\u6263","label-width":100},{default:l(()=>[e(p,{modelValue:u(t).discount,"onUpdate:modelValue":_[1]||(_[1]=i=>u(t).discount=i),clearable:""},null,8,["modelValue"]),P]),_:1}),e(c,{label:"\u51CF\u4EF7","label-width":100},{default:l(()=>[e(p,{modelValue:u(t).decrease,"onUpdate:modelValue":_[2]||(_[2]=i=>u(t).decrease=i),clearable:""},null,8,["modelValue"]),Q]),_:1}),e(c,{label:"\u542F\u7528","label-width":100},{default:l(()=>[e(V,{modelValue:u(t).status,"onUpdate:modelValue":_[3]||(_[3]=i=>u(t).status=i),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),e(c,{label:" ","label-width":100},{default:l(()=>[W]),_:1}),e(c,{label:" ","label-width":100},{default:l(()=>[e(w,{type:"primary",onClick:d,loading:n.value},{default:l(()=>[X]),_:1},8,["loading"])]),_:1})]),_:1})])]),_:1})]),_:1})]),e(K)],64)}}};var se=U(Y,[["__scopeId","data-v-18565a4d"]]);export{se as default};
