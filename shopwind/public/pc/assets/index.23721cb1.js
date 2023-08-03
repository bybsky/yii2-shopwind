import{_ as W}from"./cart_empty.ba3c6efa.js";import{r as $,x as D,b as X,d as h,e as Y,o as _,c as u,a as t,f as n,h as s,w as Z,j as f,F as j,l as q,k as b,g as O,i as r,t as m,B as x,q as ee,v as te,T as se,D as le,m as ae,E as F,S as M}from"./index.5aeb4455.js";import{a as oe,b as ne,d as ce,e as z}from"./cart.1f2e7166.js";import{a as ie,v as de}from"./blocks.bc527001.js";import{d as _e}from"./favorite.50e06692.js";import{_ as re}from"./home.5ea94d25.js";import{_ as ue}from"./home.b1c313a4.js";import"./chat.7e9d6648.js";const g=C=>(ee("data-v-053abf44"),C=C(),te(),C),pe={class:"main bgf"},fe={class:"w",style:{"padding-top":"20px"}},me={style:{"min-height":"100px"}},he={key:0,class:"cartbox mt20 f-13"},ve={class:"hd mb20"},be=r("\u9009\u62E9"),ge=r("\u5E97\u94FA\u5546\u54C1"),ke=r("\u4EF7\u683C"),ye=r("\u6570\u91CF"),xe=r("\u5C0F\u8BA1"),Ve=r("\u64CD\u4F5C"),we={class:"bd"},Ce={class:"list mb10"},Be=g(()=>n("label",null,"\u5E97\u94FA\uFF1A",-1)),je={key:0,class:"ml20"},Oe={class:"ml10"},Ue={class:"item"},Ee=["src"],Ie={class:"desc mr10 pt5 pb5 f-14"},qe=r("\u865A\u62DF\u5546\u54C1"),Fe=r("\u670D\u52A1\u5546\u54C1"),Ne={key:0,class:"f-gray f-12 mt5"},Se=["onClick"],$e=["onClick"],De={class:"fd"},Me=g(()=>n("label",null,"\u5168\u9009",-1)),ze=g(()=>n("label",null,"\u603B\u8BA1\uFF1A",-1)),Le={class:"mr20 f-17 f-red"},Pe=r(" \u786E\u8BA4\u5E76\u63D0\u4EA4\u8BA2\u5355"),Te={key:0,class:"empty uni-flex uni-row flex-middle"},Ge=g(()=>n("p",{class:"pd10"},[n("img",{src:W,width:"83"})],-1)),Ke={class:"ml20"},Qe=g(()=>n("p",{class:"bold mb20"},"\u60A8\u7684\u8D2D\u7269\u8F66\u662F\u7A7A\u7684\uFF0C\u60A8\u53EF\u4EE5",-1)),Re=r("\u9009\u8D2D\u5546\u54C1"),Ae=g(()=>n("span",{class:"f-simsun"},">>",-1)),He={class:"w"},Je={key:0,class:"pt10 pb10 gallery"},We=g(()=>n("div",{class:"hd flex-middle center"},[n("h3",{class:"f-20 f-yahei pl20 pr20 relative"},"\u731C\u4F60\u559C\u6B22")],-1)),Xe=["src"],Ye={class:"price pd10 mb10 mt5 center"},Ze={key:0},et={class:"del mr20 f-gray"},tt={class:"f-red"},st={key:1,class:"f-red"},lt={setup(C){const U=$(!0),c=D({amount:0,checkall:!1,list:[],settle:0}),E=$([]),L=D({gtype:"material"});X(()=>{oe(L,e=>{c.list=e.list||{},V()},U),de({page_size:6},e=>{E.value=e.list})});const P=e=>{ne({spec_id:e.spec_id,quantity:e.quantity},l=>{l&&(F.success("\u6570\u91CF\u5DF2\u4FEE\u6539"),B(l,e.store_id),V())})},T=e=>{ce({product_id:e.product_id},l=>{delete c.list[e.store_id].items[e.product_id],Object.values(c.list[e.store_id].items).length==0&&delete c.list[e.store_id],B(l,e.store_id),V()})},G=()=>{if(c.settle>0){let e=[];return Object.values(c.list).forEach(l=>{Object.values(l.items).forEach(a=>{a.selected==1&&e.push(a.gtype)})}),se(e).length>1?le.alert("\u5B9E\u7269\u5546\u54C1\u548C\u865A\u62DF\u670D\u52A1\u7C7B\u5546\u54C1\u56E0\u7ED3\u7B97\u5468\u671F\u4E0D\u540C\uFF0C\u4E0D\u652F\u6301\u4E00\u8D77\u7ED3\u7B97\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u7ED3\u7B97\u5546\u54C1","\u63D0\u793A",{confirmButtonText:"OK"}):ae("/trade/order/normal")}F.warning("\u8BF7\u9009\u62E9\u5546\u54C1\u7ED3\u7B97")},K=(e,l)=>{_e({goods_id:e},a=>{F.success("\u6536\u85CF\u6210\u529F")})};function V(){c.checkall=!0,c.settle=0,c.amount=0;let e=c.list;for(let l in e){e[l].checkall=!0;for(let a in e[l].items)e[l].items[a].selected==1?(c.settle++,c.amount+=parseFloat(e[l].items[a].subtotal)):(c.checkall=!1,e[l].checkall=!1)}}function Q(e,l,a){let k=c.list[e].items;z({product_ids:l,selected:a},o=>{for(let p in l)k[l[p]].selected=a;B(o,e),V()})}function B(e,l){if(M(e)||M(e.items))return!1;for(let a in e.items)l&&e.items[a].store_id!=l||Object.assign(c.list[e.items[a].store_id].items[a],e.items[a])}function N(e){let l=[],a=c.list,k=(e?c.list[e].checkall:c.checkall)?1:0;for(let o in a)if(!(e&&o!=e))for(let p in a[o].items)l.push(p);z({product_ids:l,selected:k},o=>{if(o){for(let p in a)if(!(e&&p!=e))for(let w in a[p].items)a[p].items[w].selected=Number(k);B(o),V()}})}return(e,l)=>{const a=h("el-step"),k=h("el-steps"),o=h("el-col"),p=h("el-row"),w=h("el-checkbox"),y=h("router-link"),I=h("el-tag"),R=h("el-input-number"),A=h("el-button"),H=Y("loading");return _(),u(j,null,[t(re,{exclude:["category","imagead"]}),n("div",pe,[n("div",fe,[t(k,{active:0,"finish-status":"success","process-status":"process",simple:""},{default:s(()=>[t(a,{title:"\u9009\u62E9\u5546\u54C1\u7ED3\u7B97"}),t(a,{title:"\u786E\u8BA4\u8BA2\u5355\u4FE1\u606F"}),t(a,{title:"\u4ED8\u6B3E"}),t(a,{title:"\u786E\u8BA4\u6536\u8D27"}),t(a,{title:"\u8BC4\u4EF7"})]),_:1}),Z((_(),u("div",me,[Object.values(f(c).list).length>0?(_(),u("div",he,[n("div",ve,[t(p,{class:"center"},{default:s(()=>[t(o,{span:1},{default:s(()=>[be]),_:1}),t(o,{span:10},{default:s(()=>[ge]),_:1}),t(o,{span:3},{default:s(()=>[ke]),_:1}),t(o,{span:3},{default:s(()=>[ye]),_:1}),t(o,{span:3},{default:s(()=>[xe]),_:1}),t(o,{span:4},{default:s(()=>[Ve]),_:1})]),_:1})]),n("div",we,[(_(!0),u(j,null,q(f(c).list,(d,S)=>(_(),u("div",Ce,[Object.values(d.items).length>0?(_(),O(p,{key:0,class:"pt10 pb10"},{default:s(()=>[t(o,{span:1,class:"center flex-middle"},{default:s(()=>[t(w,{modelValue:d.checkall,"onUpdate:modelValue":i=>d.checkall=i,onChange:i=>{N(S)}},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024),t(o,{span:23,class:"uni-flex uni-row flex-middle"},{default:s(()=>[Be,t(y,{to:"/store/index/"+d.store_id,class:"rlink f-blue"},{default:s(()=>[r(m(d.store_name),1)]),_:2},1032,["to"]),d.storeFullPreferInfo?(_(),u("p",je,[t(I,{type:"warning"},{default:s(()=>[r(m(d.storeFullPreferInfo.prefer.label),1)]),_:2},1024),n("span",Oe,m(d.storeFullPreferInfo.text),1)])):b("",!0)]),_:2},1024)]),_:2},1024)):b("",!0),(_(!0),u(j,null,q(d.items,(i,J)=>(_(),u("div",Ue,[t(p,{class:"flex-middle"},{default:s(()=>[t(o,{span:1,class:"center"},{default:s(()=>[t(w,{modelValue:i.selected,"onUpdate:modelValue":v=>i.selected=v,"true-label":1,"false-label":0,onChange:v=>{Q(S,[J],i.selected)}},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024),t(o,{span:10,class:"uni-flex uni-row flex-middle"},{default:s(()=>[t(y,{to:"/goods/detail/"+i.goods_id,class:"pic mr10 pt5 pb5"},{default:s(()=>[n("img",{width:"70",height:"70",src:i.goods_image},null,8,Ee)]),_:2},1032,["to"]),n("div",Ie,[t(y,{to:"/goods/detail/"+i.goods_id,class:"rlink"},{default:s(()=>[i.gtype=="virtual"?(_(),O(I,{key:0,class:"f-12"},{default:s(()=>[qe]),_:1})):i.gtype=="service"?(_(),O(I,{key:1,class:"f-12"},{default:s(()=>[Fe]),_:1})):b("",!0),r(" "+m(i.goods_name),1)]),_:2},1032,["to"]),i.specification?(_(),u("p",Ne,m(i.specification),1)):b("",!0)])]),_:2},1024),t(o,{span:3,class:"center f-red"},{default:s(()=>[r(m(f(x)(i.price)),1)]),_:2},1024),t(o,{span:3,class:"center"},{default:s(()=>[t(R,{onChange:v=>P(i),modelValue:i.quantity,"onUpdate:modelValue":v=>i.quantity=v,size:"small",min:1,max:i.stock},null,8,["onChange","modelValue","onUpdate:modelValue","max"])]),_:2},1024),t(o,{span:3,class:"center f-red f-14"},{default:s(()=>[r(m(f(x)(i.subtotal)),1)]),_:2},1024),t(o,{span:4,class:"center f-blue"},{default:s(()=>[n("p",{onClick:v=>K(i.goods_id),class:"mb5 pointer"},"\u52A0\u5165\u6536\u85CF\u5939",8,Se),n("p",{onClick:v=>T(i),class:"pointer"},"\u79FB\u9664",8,$e)]),_:2},1024)]),_:2},1024)]))),256))]))),256))]),n("div",De,[t(p,{class:"pt10 pb10 mt10"},{default:s(()=>[t(o,{span:1,class:"center flex-middle"},{default:s(()=>[t(w,{modelValue:f(c).checkall,"onUpdate:modelValue":l[0]||(l[0]=d=>f(c).checkall=d),onChange:l[1]||(l[1]=d=>{N()})},null,8,["modelValue"])]),_:1}),t(o,{span:2,class:"uni-flex uni-row flex-middle"},{default:s(()=>[Me]),_:1}),t(o,{span:21,class:"vertical-middle flex-end f-15"},{default:s(()=>[ze,n("span",Le,m(f(x)(f(c).amount)),1),t(A,{onClick:G,type:"primary",size:"large",class:"mr10"},{default:s(()=>[Pe]),_:1})]),_:1})]),_:1})])])):b("",!0)])),[[H,U.value]]),!U.value&&Object.values(f(c).list).length==0?(_(),u("div",Te,[Ge,n("div",Ke,[Qe,t(y,{to:"/",class:"rlink f-blue f-13 f-yahei"},{default:s(()=>[Re,Ae]),_:1})])])):b("",!0)]),n("div",He,[E.value.length>0?(_(),u("div",Je,[We,t(p,{gutter:20,class:"uni-flex uni-row bd mb20"},{default:s(()=>[(_(!0),u(j,null,q(E.value,d=>(_(),O(o,{span:4,class:"item"},{default:s(()=>[t(y,{to:"/goods/detail/"+d.goods_id,class:"pic block rlink"},{default:s(()=>[n("img",{src:d.default_image},null,8,Xe)]),_:2},1032,["to"]),t(y,{to:"/goods/detail/"+d.goods_id,class:"desc mt10 line-clamp-2 f-13 rlink"},{default:s(()=>[r(m(d.goods_name),1)]),_:2},1032,["to"]),n("div",Ye,[d.promotion?(_(),u("p",Ze,[n("label",et,m(f(x)(d.price)),1),n("span",tt,m(f(x)(d.promotion.price)),1)])):(_(),u("p",st,m(f(x)(d.price)),1))])]),_:2},1024))),256))]),_:1})])):b("",!0)])]),t(ue)],64)}}};var ut=ie(lt,[["__scopeId","data-v-053abf44"]]);export{ut as default};
