import{r as m,x as J,z as N,d as i,e as G,o as g,g as H,h as o,a as e,f as b,j as r,w as K,c as V,t as k,k as A,B as M,i as x,T as Q,A as W}from"./index.5aeb4455.js";import{a as X,v as Y}from"./blocks.bc527001.js";import{m as Z}from"./multiselector.f8f53ae9.js";const ee={class:"pl10 pt10"},le=x("\u67E5\u8BE2"),te=["src"],ae={class:"l-h17"},oe={key:0,class:"l-h17"},se={class:"f-yahei"},ne={key:0,class:"mt20"},de=x("\u5173\u95ED"),ie=x("\u786E\u5B9A"),re={props:{title:{type:String,default:""},visible:{type:Boolean,default:!1},data:{type:[Object,Array],default:()=>({})},limit:{type:Number,default:0},selected:{type:Array,default:()=>[]}},emits:["close"],setup(C,{emit:z}){const p=C,v=m(!1),O=m(!1),_=m([]),c=m({}),l=J({selected:[]}),{proxy:I}=W();N(()=>p.visible,n=>{v.value=n}),N(()=>p.selected,n=>{l.selected=n||[]});const E=n=>{h({page:n,page_size:c.value.page_size})},y=()=>{h()},T=n=>{l.cate_id=n.id,h()},j=(n,t)=>{let d=[];n.forEach(f=>{d.push(parseInt(f.goods_id))});let s=parseInt(t.goods_id);d.indexOf(s)>-1?l.selected.push(s):l.selected.indexOf(s)>-1&&l.selected.splice(l.selected.indexOf(s),1),l.selected=U()},D=n=>{n.length==0?_.value.forEach(t=>{let d=parseInt(t.goods_id);l.selected.indexOf(d)>-1&&l.selected.splice(l.selected.indexOf(d),1)}):n.forEach(t=>{l.selected.push(parseInt(t.goods_id))}),l.selected=U()},S=()=>{z("close",null)},F=()=>{z("close",l.selected)};function h(n){let t=JSON.parse(localStorage.getItem("visitor"))||{};Y(Object.assign({store_id:t.store_id,page_size:4},l,n),d=>{_.value=d.list,c.value=d.pagination,I.$nextTick(()=>{_.value.forEach(s=>{l.selected&&l.selected.indexOf(parseInt(s.goods_id))>-1&&I.$refs.multipleTableRef.toggleRowSelection(s,!0)})})})}function U(){return p.limit>0&&(l.selected=l.selected.splice(-p.limit)),Q(l.selected)}return(n,t)=>{const d=i("el-form-item"),s=i("el-option"),f=i("el-select"),B=i("el-input"),w=i("el-button"),P=i("el-form"),u=i("el-table-column"),R=i("el-table"),q=i("el-pagination"),L=i("el-dialog"),$=G("loading");return g(),H(L,{modelValue:v.value,"onUpdate:modelValue":t[6]||(t[6]=a=>v.value=a),title:C.title,width:1100,center:!0,draggable:!0,"destroy-on-close":!0,"close-on-click-modal":!1,"before-close":S},{footer:o(()=>[e(w,{onClick:S},{default:o(()=>[de]),_:1}),e(w,{type:"primary",onClick:F,loading:O.value},{default:o(()=>[ie]),_:1},8,["loading"])]),default:o(()=>[b("div",ee,[e(P,{inline:!0},{default:o(()=>[e(d,{label:"\u5546\u54C1\u7C7B\u76EE"},{default:o(()=>[e(Z,{api:"category/list",idField:"cate_id",nameField:"cate_name",parentField:"parent_id",placeholder:!0,onCallback:T})]),_:1}),e(d,{label:"\u63A8\u8350\u72B6\u6001"},{default:o(()=>[e(f,{modelValue:r(l).recommended,"onUpdate:modelValue":t[0]||(t[0]=a=>r(l).recommended=a),onChange:y,placeholder:"\u4E0D\u9650\u5236",clearable:""},{default:o(()=>[e(s,{label:"\u5DF2\u63A8\u8350\u7684\u5546\u54C1",value:"1"}),e(s,{label:"\u672A\u63A8\u8350\u7684\u5546\u54C1",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u5546\u54C1\u6392\u5E8F"},{default:o(()=>[e(f,{modelValue:r(l).orderby,"onUpdate:modelValue":t[1]||(t[1]=a=>r(l).orderby=a),onChange:y,placeholder:"\u4E0D\u9650\u5236",clearable:""},{default:o(()=>[e(s,{label:"\u9500\u91CF\u4ECE\u9AD8\u5230\u4F4E",value:"sales|desc"}),e(s,{label:"\u70B9\u51FB\u91CF\u4ECE\u9AD8\u5230\u4F4E",value:"views|desc"}),e(s,{label:"\u4EF7\u683C\u4ECE\u9AD8\u5230\u4F4E",value:"price|desc"}),e(s,{label:"\u4EF7\u683C\u4ECE\u4F4E\u5230\u9AD8",value:"price|asc"}),e(s,{label:"\u4E0A\u67B6\u65F6\u95F4\u4ECE\u8FD1\u5230\u8FDC",value:"add_time|desc"}),e(s,{label:"\u4E0A\u67B6\u65F6\u95F4\u4ECE\u8FDC\u5230\u8FD1",value:"add_time|asc"}),e(s,{label:"\u8BC4\u8BBA\u6570\u4ECE\u591A\u5230\u5C11",value:"comments|desc"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u5546\u54C1\u540D\u79F0"},{default:o(()=>[e(B,{modelValue:r(l).keyword,"onUpdate:modelValue":t[2]||(t[2]=a=>r(l).keyword=a),clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"\u54C1\u724C"},{default:o(()=>[e(B,{modelValue:r(l).brand,"onUpdate:modelValue":t[3]||(t[3]=a=>r(l).brand=a),clearable:""},null,8,["modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(w,{onClick:y,type:"primary",class:"f-13"},{default:o(()=>[le]),_:1})]),_:1})]),_:1})]),K((g(),V("div",null,[e(R,{ref:"multipleTableRef",data:_.value,border:!1,stripe:!1,onSelect:j,onSelectAll:D},{default:o(()=>[e(u,{fixed:"left",type:"selection"}),e(u,{width:"70",label:"\u56FE\u7247",align:"center"},{default:o(a=>[b("img",{src:a.row.default_image,width:"50",height:"50"},null,8,te)]),_:1}),e(u,{label:"\u5546\u54C1\u540D\u79F0",width:"300"},{default:o(a=>[b("p",ae,k(a.row.goods_name),1)]),_:1}),e(u,{prop:"category",label:"\u6240\u5728\u5206\u7C7B",width:"220"},{default:o(a=>[a.row.category?(g(),V("p",oe,k(a.row.category.join(" / ")),1)):A("",!0)]),_:1}),e(u,{prop:"price",label:"\u4EF7\u683C",width:"150",align:"center"},{default:o(a=>[b("p",se,k(r(M)(a.row.price)),1)]),_:1}),e(u,{prop:"stocks",label:"\u5E93\u5B58",width:"80",sortable:""}),e(u,{prop:"sales",label:"\u9500\u91CF",width:"80",align:"center",sortable:""}),e(u,{prop:"brand",label:"\u54C1\u724C",width:"100",sortable:""})]),_:1},8,["data"]),c.value.total>0?(g(),V("div",ne,[e(q,{currentPage:c.value.page,"onUpdate:currentPage":t[4]||(t[4]=a=>c.value.page=a),"page-size":c.value.page_size,"onUpdate:page-size":t[5]||(t[5]=a=>c.value.page_size=a),background:!1,layout:"total, prev, pager, next",total:c.value.total,onCurrentChange:E,"hide-on-single-page":!1,class:"center"},null,8,["currentPage","page-size","total"])])):A("",!0)])),[[$,O.value]])]),_:1},8,["modelValue","title"])}}};var _e=X(re,[["__scopeId","data-v-05823362"]]);export{_e as s};
