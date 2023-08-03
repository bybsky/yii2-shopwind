import{E as y,r as w,z as E,d as i,o as C,g as j,h as l,f as k,a as e,i as h,u as R,x as G,b as H,e as J,c as F,j as S,F as K,m as Q,w as W,k as N,t as D,D as X}from"./index.5aeb4455.js";import{r as U,a as Y}from"./blocks.bc527001.js";import{m as Z}from"./my.79ee95ff.js";import{_ as ee}from"./user.a03ff82a.js";import{m as te}from"./my.b2d7c696.js";import{m as le}from"./multiselector.f8f53ae9.js";import"./chat.7e9d6648.js";/**
 * @link https://www.shopwind.net/
 * @copyright Copyright (c) 2018 ShopWind Inc. All Rights Reserved.
 *
 * This is not free software. Do not use it for commercial purposes. 
 * If you need commercial operation, please contact us to purchase a license.
 * @license https://www.shopwind.net/license/
 * 
 * @Id address.js 2021.10.30 $
 * @author mosir
 */function ae(f,s,u){U("address/list",f,t=>{t.code==0&&typeof s=="function"&&s(t.data)},u)}function oe(f,s,u){U("address/add",f,t=>{t.code==0?typeof s=="function"&&s(t.data):y.warning(t.message)},u)}function se(f,s,u){U("address/update",f,t=>{t.code==0?typeof s=="function"&&s(t.data):y.warning(t.message)},u)}function ne(f,s,u){U("address/delete",f,t=>{t.code==0?typeof s=="function"&&s(t.data):y.warning(t.message)},u)}const ie={class:"mb20"},de=h("\u5173\u95ED"),ue=h("\u63D0\u4EA4"),re={props:{title:{type:String,default:""},visible:{type:Boolean,default:!1},data:{type:[Object,Array],default:()=>({})}},emits:["close"],setup(f,{emit:s}){const u=f,t=w(!1),c=w(!1),a=w({});E(()=>u.visible,r=>{t.value=r}),E(()=>u.data,r=>{a.value=r});const _=()=>{a.value.addr_id?se(a.value,r=>{r&&(y.success("\u7F16\u8F91\u6210\u529F"),s("close",a.value))},c):oe(a.value,r=>{r&&(y.success("\u6DFB\u52A0\u6210\u529F"),s("close",a.value))},c)},x=()=>{s("close",null)},$=r=>{a.value.region_id=r.id,r.label.forEach((n,g)=>{a.value[g==0?"province":g==1?"city":g==2?"district":"town"]=n})};return(r,n)=>{const g=i("el-input"),v=i("el-form-item"),V=i("el-switch"),o=i("el-form"),m=i("el-button"),z=i("el-dialog");return C(),j(z,{modelValue:t.value,"onUpdate:modelValue":n[5]||(n[5]=d=>t.value=d),title:f.title,width:600,center:!0,draggable:!0,"destroy-on-close":!0,"close-on-click-modal":!1,"before-close":x},{footer:l(()=>[k("div",ie,[e(m,{onClick:x},{default:l(()=>[de]),_:1}),e(m,{type:"primary",onClick:_,loading:c.value},{default:l(()=>[ue]),_:1},8,["loading"])])]),default:l(()=>[e(o,{inline:!0},{default:l(()=>[e(v,{label:"\u6536\u8D27\u4EBA\u59D3\u540D","label-width":85},{default:l(()=>[e(g,{modelValue:a.value.consignee,"onUpdate:modelValue":n[0]||(n[0]=d=>a.value.consignee=d)},null,8,["modelValue"])]),_:1}),e(v,{label:"\u6240\u5728\u5730\u533A","label-width":85,class:"uni-flex uni-row",style:{width:"100%"}},{default:l(()=>[e(le,{api:"region/list",idField:"region_id",nameField:"region_name",parentField:"parent_id",original:[a.value.province,a.value.city,a.value.district],onCallback:$},null,8,["original"])]),_:1}),e(v,{label:"\u8BE6\u7EC6\u5730\u5740","label-width":85},{default:l(()=>[e(g,{modelValue:a.value.address,"onUpdate:modelValue":n[1]||(n[1]=d=>a.value.address=d)},null,8,["modelValue"])]),_:1}),e(v,{label:"\u624B\u673A\u53F7\u7801","label-width":85},{default:l(()=>[e(g,{modelValue:a.value.phone_mob,"onUpdate:modelValue":n[2]||(n[2]=d=>a.value.phone_mob=d)},null,8,["modelValue"])]),_:1}),e(v,{label:"\u56FA\u8BDD\u53F7\u7801","label-width":85},{default:l(()=>[e(g,{modelValue:a.value.phone_tel,"onUpdate:modelValue":n[3]||(n[3]=d=>a.value.phone_tel=d)},null,8,["modelValue"])]),_:1}),e(v,{label:"\u8BBE\u4E3A\u9ED8\u8BA4","label-width":85,style:{width:"100%"}},{default:l(()=>[e(V,{modelValue:a.value.defaddr,"onUpdate:modelValue":n[4]||(n[4]=d=>a.value.defaddr=d),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])}}};var ce=Y(re,[["__scopeId","data-v-7ba9da4f"]]);const _e={class:"main w pt10"},pe={class:"round-edge pd10 bgf"},fe={class:"pd10"},me=h("\u7269\u6D41"),ge=h("\u6536\u8D27\u5730\u5740"),ve={class:"round-edge pd10 bgf mt20"},be={class:"mb10"},he=h("\u6DFB\u52A0\u65B0\u5730\u5740"),we=h("\u7F16\u8F91 "),ye=h("\u5220\u9664 "),Ve={key:0,class:"mt20 mb20"},Fe={setup(f){const s=R(),u=w(!1),t=w([]),c=w({}),a=w(0),_=G({visible:!1});H(()=>{V()});const x=()=>{_.title="\u6DFB\u52A0\u6536\u8D27\u5730\u5740",_.visible=!0,_.data={}},$=o=>{_.title="\u7F16\u8F91\u6536\u8D27\u5730\u5740",_.visible=!0,_.data=t.value[o],a.value=o},r=o=>{X.confirm("\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6761\u8BB0\u5F55\u5417\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",type:"warning"}).then(()=>{ne(t.value[o],m=>{y.success("\u5220\u9664\u6210\u529F\uFF01"),t.value.splice(o,1)})}).catch(()=>{})},n=o=>{_.visible=!1,o&&o.consignee&&(o.addr_id?Object.assign(t.value[a.value],o):t.value.unshift(o),s.query.redirect&&Q(s.query.redirect))},g=o=>{V({page_size:o})},v=o=>{V({page:o,page_size:c.value.page_size})};function V(o){ae(o,m=>{t.value=m.list,c.value=m.pagination},u)}return(o,m)=>{const z=i("el-col"),d=i("el-breadcrumb-item"),q=i("el-breadcrumb"),B=i("el-button"),b=i("el-table-column"),M=i("SuccessFilled"),P=i("el-icon"),A=i("el-table"),I=i("el-pagination"),L=i("el-row"),O=J("loading");return C(),F(K,null,[e(Z),k("div",_e,[e(L,{gutter:12},{default:l(()=>[e(z,{span:4},{default:l(()=>[e(te)]),_:1}),e(z,{span:20},{default:l(()=>[k("div",pe,[k("div",fe,[e(q,{separator:"/"},{default:l(()=>[e(d,null,{default:l(()=>[me]),_:1}),e(d,null,{default:l(()=>[ge]),_:1})]),_:1})])]),W((C(),F("div",ve,[k("div",be,[e(B,{type:"primary",onClick:x},{default:l(()=>[he]),_:1})]),e(A,{data:t.value,border:!1,stripe:!1,class:"f-13"},{default:l(()=>[e(b,{type:"selection"}),e(b,{width:"60",label:"\u9ED8\u8BA4"},{default:l(p=>[p.row.defaddr==1?(C(),j(P,{key:0,class:"f-green f-14"},{default:l(()=>[e(M)]),_:1})):N("",!0)]),_:1}),e(b,{prop:"consignee",width:"100",label:"\u6536\u8D27\u4EBA\u59D3\u540D"}),e(b,{label:"\u6240\u5728\u5730\u533A",width:"250"},{default:l(p=>[h(D(p.row.province)+D(p.row.city)+D(p.row.district||""),1)]),_:1}),e(b,{prop:"address",label:"\u8BE6\u7EC6\u5730\u5740",width:"240"}),e(b,{prop:"phone_mob",label:"\u624B\u673A\u53F7",width:"150",sortable:""}),e(b,{prop:"phone_tel",label:"\u56FA\u5B9A\u7535\u8BDD",width:"150",sortable:""}),e(b,{fixed:"right",label:"\u64CD\u4F5C",width:"120",align:"center"},{default:l(p=>[e(B,{class:"f-13 mr5",type:"text",onClick:T=>$(p.$index)},{default:l(()=>[we]),_:2},1032,["onClick"]),e(B,{class:"f-13",type:"text",onClick:T=>r(p.$index)},{default:l(()=>[ye]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),c.value.total>0?(C(),F("div",Ve,[e(I,{currentPage:c.value.page,"onUpdate:currentPage":m[0]||(m[0]=p=>c.value.page=p),"page-size":c.value.page_size,"onUpdate:page-size":m[1]||(m[1]=p=>c.value.page_size=p),"page-sizes":[10,50,100,200],background:!1,layout:"total, sizes, prev, pager, next",total:c.value.total,onSizeChange:g,onCurrentChange:v,"hide-on-single-page":!1,class:"center"},null,8,["currentPage","page-size","total"])])):N("",!0)])),[[O,u.value]])]),_:1})]),_:1})]),e(ce,{title:S(_).title,visible:S(_).visible,data:S(_).data,onClose:n},null,8,["title","visible","data"]),e(ee)],64)}}};export{Fe as default};
