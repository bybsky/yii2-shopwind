import{s as S,b as V}from"./store.77527230.js";import{u as B}from"./upload.8196a000.js";import{m as M}from"./multiselector.56581d3c.js";import{m as G}from"./seller.d47cb281.js";import{_ as L}from"./user.d45283f4.js";import{m as Q}from"./seller.61881c9a.js";import{a as j}from"./blocks.ccf7c496.js";import{r as p,x as z,b as J,d as n,o as c,c as w,a as e,f as _,h as l,F as K,j as a,g as y,k as R,i as f,q as T,v as $,K as A,E as D}from"./index.d9c42d52.js";import"./chat.de97ba48.js";const H=m=>(T("data-v-41cc5337"),m=m(),$(),m),P={class:"main w pt10"},W={class:"round-edge pd10 bgf"},X={class:"pd10"},Y=f("\u5E97\u94FA"),Z=f("\u5E97\u94FA\u8BBE\u7F6E"),ee={class:"round-edge pd10 bgf mt20"},oe=H(()=>_("h3",{class:"pd10 mb20"},"\u57FA\u672C\u8BBE\u7F6E",-1)),te=["src"],le=f("\u63D0\u4EA4"),ae={setup(m){const b=p(!1),u=p({}),o=z({}),g=p(Math.random());J(()=>{u.value=JSON.parse(localStorage.getItem("visitor")),S({store_id:u.value.store_id},r=>{["store_logo","store_name","region_id","address","description","tel","qq","province","city","district"].forEach(t=>{o[t]=r[t]})})});const k=r=>{o.region_id=r.id},U=()=>{V(o,r=>{A({title:"\u63D0\u793A",message:"\u5E97\u94FA\u4FE1\u606F\u4FEE\u6539\u6210\u529F\uFF01",type:"success",position:"bottom-left"})},b)},x=r=>{B(r.raw,{filename:"store_logo",store_id:u.value.store_id,folder:"other/"},t=>{o.store_logo=t.fileUrl,V({store_logo:t.fileUrl},()=>{g.value=Math.random(),D.success("\u5E97\u94FALOGO\u5DF2\u4FEE\u6539\uFF01")})})};return(r,t)=>{const v=n("el-col"),h=n("el-breadcrumb-item"),q=n("el-breadcrumb"),F=n("plus"),N=n("el-icon"),C=n("el-upload"),d=n("el-form-item"),i=n("el-input"),E=n("el-button"),I=n("el-form"),O=n("el-row");return c(),w(K,null,[e(G),_("div",P,[e(O,{gutter:12},{default:l(()=>[e(v,{span:4},{default:l(()=>[e(Q)]),_:1}),e(v,{span:20},{default:l(()=>[_("div",W,[_("div",X,[e(q,{separator:"/"},{default:l(()=>[e(h,null,{default:l(()=>[Y]),_:1}),e(h,null,{default:l(()=>[Z]),_:1})]),_:1})])]),_("div",ee,[oe,e(I,{inline:!0,class:"pd10"},{default:l(()=>[e(d,{label:"\u5E97\u94FALOGO","label-width":100},{default:l(()=>[e(C,{action:"#","show-file-list":!1,"auto-upload":!1,"on-change":x},{default:l(()=>[a(o).store_logo?(c(),w("img",{key:0,width:"120",height:"120",src:a(o).store_logo+"?t="+g.value},null,8,te)):(c(),y(N,{key:1,class:"image",size:20},{default:l(()=>[e(F)]),_:1}))]),_:1})]),_:1}),e(d,{label:"\u5E97\u94FA\u540D\u79F0","label-width":100},{default:l(()=>[e(i,{modelValue:a(o).store_name,"onUpdate:modelValue":t[0]||(t[0]=s=>a(o).store_name=s)},null,8,["modelValue"])]),_:1}),a(o).store_name?(c(),y(d,{key:0,label:"\u6240\u5728\u5730\u533A","label-width":100},{default:l(()=>[e(M,{api:"region/list",idField:"region_id",nameField:"region_name",parentField:"parent_id",original:[a(o).province||"",a(o).city||"",a(o).district||""],onCallback:t[1]||(t[1]=s=>{k(s)})},null,8,["original"])]),_:1})):R("",!0),e(d,{label:"\u8BE6\u7EC6\u5730\u5740","label-width":100},{default:l(()=>[e(i,{modelValue:a(o).address,"onUpdate:modelValue":t[2]||(t[2]=s=>a(o).address=s),clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"\u8054\u7CFBQQ","label-width":100},{default:l(()=>[e(i,{modelValue:a(o).qq,"onUpdate:modelValue":t[3]||(t[3]=s=>a(o).qq=s),clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"\u8054\u7CFB\u7535\u8BDD","label-width":100},{default:l(()=>[e(i,{modelValue:a(o).tel,"onUpdate:modelValue":t[4]||(t[4]=s=>a(o).tel=s),clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5E97\u94FA\u4ECB\u7ECD","label-width":100},{default:l(()=>[e(i,{modelValue:a(o).description,"onUpdate:modelValue":t[5]||(t[5]=s=>a(o).description=s),type:"textarea"},null,8,["modelValue"])]),_:1}),e(d,{label:" ","label-width":100},{default:l(()=>[e(E,{type:"primary",onClick:U,loading:b.value},{default:l(()=>[le]),_:1},8,["loading"])]),_:1})]),_:1})])]),_:1})]),_:1})]),e(L)],64)}}};var pe=j(ae,[["__scopeId","data-v-41cc5337"]]);export{pe as default};
