import{p as V,a as B}from"./blocks.bc527001.js";import{r as F,x as S,b as j,z as y,d as v,o as c,c as f,l as b,g,h as z,k as d,F as k,j as w}from"./index.5aeb4455.js";/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 * 
 * @Id selector.js 2019.10.19 $
 * @author winder
 */async function E(n,r=null,t="region/list",s="region_id",l="region_name",o="parent_id"){let a=await L(n,r,t,s,l,o);return U(a,n,s,l)}async function L(n,r,t,s,l,o,a=[],e=0){return e==0||n[e-1]>-1?a[e]=await V(t,{[o]:e>0?a[e-1].list[n[e-1]][s]:0,if_show:1,page_size:1e3}):a[e]=[],a[e].list&&a[e].list.length>0?(r!=null&&r.length>0&&M(a[e].list,n,r[e],l,e),L(n,r,t,s,l,o,a,++e)):a.length>0?a.splice(0,a.length-1):a}function M(n,r,t,s,l){for(let o in n)n[o][s]==t&&(r[l]=parseInt(o))}function U(n,r,t,s){let l=[],o=[];return n.forEach((a,e)=>{r[e]>-1&&(l[e]=a.list[r[e]][s]),o[e]=a.list}),{id:l.length>0&&r[l.length-1]>-1?o[l.length-1][r[l.length-1]][t]:0,label:l,multiList:o}}const A={props:{api:{type:String,default:"region/list"},data:{type:Object,default:()=>({})},original:{type:Array,default:()=>[]},idField:{type:String,default:"region_id"},parentField:{type:String,default:"parent_id"},nameField:{type:String,default:"region_name"},placeholder:{type:Boolean,default:!1}},emits:["callback"],setup(n,{emit:r}){const t=n,s=F({}),l=S(t.placeholder?[-1,-1,-1,-1]:[0,0,0,0]);j(()=>{t.data.multiList?s.value=t.data:a(t.original)}),y(()=>t.data,e=>{s.value=e}),y(()=>t.original,e=>{a(e)});const o=(e,u)=>{l[u]=e;for(let i=u+1;i<=s.value.multiList.length;i++)l[i]=t.placeholder?-1:0;a()},a=e=>{E(l,e,t.api,t.idField,t.nameField,t.parentField).then(u=>{s.value=u,r("callback",{id:u.id,label:u.label})})};return(e,u)=>{const i=v("el-option"),C=v("el-select");return c(!0),f(k,null,b(s.value.multiList,(h,_)=>(c(),f("div",{key:_,class:"warper"},[h.length>0?(c(),g(C,{key:0,modelValue:w(l)[_],"onUpdate:modelValue":p=>w(l)[_]=p,onChange:p=>o(p,_),class:"mr10"},{default:z(()=>[t.placeholder?(c(),g(i,{key:0,label:"\u8BF7\u9009\u62E9",value:-1})):d("",!0),(c(!0),f(k,null,b(h,(p,m)=>(c(),g(i,{key:m,label:p[t.nameField],value:m},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])):d("",!0)]))),128)}}};var O=B(A,[["__scopeId","data-v-78fbf8a1"]]);export{O as m};
