import{h as $,r as h,o as v,c as P,a as _,w as C,u as f,g as S,aE as R,aF as H,aG as J,aB as q,aH as W,aI as B,aJ as U,a4 as A,d as j,F as G,k as w,aK as D,aL as V,aM as F,aN as E,L as Z,b as M,aO as I,aP as ee,aQ as X,aR as te,aS as Q,a7 as ae,ag as oe,i as L}from"../app.3c87db1b.js";const le={style:{height:"400px"}},ne=$({__name:"auto-resizer",setup(y){const p=(u=10,o="column-",a)=>Array.from({length:u}).map((t,n)=>({...a,key:`${o}${n}`,dataKey:`${o}${n}`,title:`Column ${n}`,width:150})),m=(u,o=200,a="row-")=>Array.from({length:o}).map((t,n)=>u.reduce((e,l,r)=>(e[l.dataKey]=`Row ${n} - Col ${r}`,e),{id:`${a}${n}`,parentId:null})),s=p(10),c=m(s,200);return(u,o)=>{const a=h("el-table-v2"),t=h("el-auto-resizer");return v(),P("div",le,[_(t,null,{default:C(({height:n,width:e})=>[_(a,{columns:f(s),data:f(c),width:e,height:n,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}});var Ue=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));const re=$({__name:"basic",setup(y){const p=(u=10,o="column-",a)=>Array.from({length:u}).map((t,n)=>({...a,key:`${o}${n}`,dataKey:`${o}${n}`,title:`Column ${n}`,width:150})),m=(u,o=200,a="row-")=>Array.from({length:o}).map((t,n)=>u.reduce((e,l,r)=>(e[l.dataKey]=`Row ${n} - Col ${r}`,e),{id:`${a}${n}`,parentId:null})),s=p(10),c=m(s,1e3);return(u,o)=>{const a=h("el-table-v2");return v(),S(a,{columns:f(s),data:f(c),width:700,height:400,fixed:""},null,8,["columns","data"])}}});var Qe=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));function se(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Object]"&&!B(y)}var ue=$({__name:"cell-templating",setup(y){let p=0;const m=()=>({id:`random-id-${++p}`,name:"Tom",date:"2020-10-1"}),s=[{key:"date",title:"Date",dataKey:"date",width:150,fixed:R.LEFT,cellRenderer:({cellData:u})=>_(W,{content:q(u).format("YYYY/MM/DD")},{default:()=>[_("span",{class:"flex items-center"},[_(H,{class:"mr-3"},{default:()=>[_(J,null,null)]}),q(u).format("YYYY/MM/DD")])]})},{key:"name",title:"Name",dataKey:"name",width:150,align:"center",cellRenderer:({cellData:u})=>_(U,null,se(u)?u:{default:()=>[u]})},{key:"operations",title:"Operations",cellRenderer:()=>_(G,null,[_(A,{size:"small"},{default:()=>[j("Edit")]}),_(A,{size:"small",type:"danger"},{default:()=>[j("Delete")]})]),width:150,align:"center"}],c=w(Array.from({length:200}).map(m));return(u,o)=>{const a=h("el-table-v2");return v(),S(a,{columns:s,data:c.value,width:700,height:400,fixed:""},null,8,["data"])}}}),Je=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));const O=1,ce=$({__name:"colspan",setup(y){const p=(o=10,a="column-",t)=>Array.from({length:o}).map((n,e)=>({...t,key:`${a}${e}`,dataKey:`${a}${e}`,title:`Column ${e}`,width:150})),m=(o,a=200,t="row-")=>Array.from({length:a}).map((n,e)=>o.reduce((l,r,i)=>(l[r.dataKey]=`Row ${e} - Col ${i}`,l),{id:`${t}${e}`,parentId:null})),s=p(10),c=m(s,200);s[O].colSpan=({rowIndex:o})=>o%4+1,s[O].align="center";const u=({rowData:o,rowIndex:a,cells:t,columns:n})=>{const e=n[O].colSpan({rowData:o,rowIndex:a});if(e>1){let l=Number.parseInt(t[O].props.style.width);for(let i=1;i<e;i++)l+=Number.parseInt(t[O+i].props.style.width),t[O+i]=null;const r={...t[O].props.style,width:`${l}px`,backgroundColor:"var(--el-color-primary-light-3)"};t[O]=F(t[O],{style:r})}return t};return(o,a)=>{const t=h("el-table-v2");return v(),S(t,{fixed:"",columns:f(s),data:f(c),width:700,height:400},{row:C(n=>[_(u,D(V(n)),null,16)]),_:1},8,["columns","data"])}}});var We=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));const _e=$({__name:"controlled-sort",setup(y){const p=(a=10,t="column-",n)=>Array.from({length:a}).map((e,l)=>({...n,key:`${t}${l}`,dataKey:`${t}${l}`,title:`Column ${l}`,width:150})),m=(a,t=200,n="row-")=>Array.from({length:t}).map((e,l)=>a.reduce((r,i,d)=>(r[i.dataKey]=`Row ${l} - Col ${d}`,r),{id:`${n}${l}`,parentId:null})),s=p(10),c=w(m(s,200));s[0].sortable=!0,s[1].sortable=!0;const u=w({"column-0":E.DESC,"column-1":E.ASC}),o=({key:a,order:t})=>{u.value[a]=t,c.value=c.value.reverse()};return(a,t)=>{const n=h("el-table-v2");return v(),S(n,{"sort-state":u.value,"onUpdate:sort-state":t[0]||(t[0]=e=>u.value=e),columns:f(s),data:c.value,width:700,height:400,fixed:"",onColumnSort:o},null,8,["sort-state","columns","data"])}}});var Xe=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"}));const ie={style:{height:"400px"}},de=$({__name:"cross-hovering",setup(y){const p=(a=10,t="column-",n)=>Array.from({length:a}).map((e,l)=>({...n,key:`${t}${l}`,dataKey:`${t}${l}`,title:`Column ${l}`,width:150})),m=(a,t=200,n="row-")=>Array.from({length:t}).map((e,l)=>a.reduce((r,i,d)=>(r[i.dataKey]=`Row ${l} - Col ${d}`,r),{id:`${n}${l}`,parentId:null})),s=p(10);s.unshift({key:"column-n-1",width:50,title:"Row No.",cellRenderer:({rowIndex:a})=>`${a+1}`,align:"center"});const c=m(s,200),u=({columnIndex:a})=>{const t=`hovering-col-${a}`;return{["data-key"]:t,onMouseenter:()=>{o.value=t},onMouseleave:()=>{o.value=""}}},o=w("");return(a,t)=>{const n=h("el-table-v2"),e=h("el-auto-resizer");return v(),P("div",ie,[_(e,null,{default:C(({height:l,width:r})=>[_(n,{columns:f(s),"cell-props":u,class:Z(o.value),data:f(c),width:r,height:l},null,8,["columns","class","data","width","height"])]),_:1})])}}});var Ze=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));const me=`Velit sed aspernatur tempora. Natus consequatur officiis dicta vel assumenda.
Itaque est temporibus minus quis. Ipsum commodiab porro vel voluptas illum.
Qui quam nulla et dolore autem itaque est.
Id consequatur ipsum ea fuga et odit eligendi impedit.
Maiores officiis occaecati et magnam et sapiente est velit sunt.
Non et tempore temporibus. Excepturi et quos. Minus distinctio aut.
Voluptatem ea excepturi omnis vel. Non aperiam sit sed laboriosam eaque omnis deleniti.
Est molestiae omnis non et nulla repudiandae fuga sit.`;var pe=$({__name:"detailed-view",setup(y){const p=(o=10,a="column-",t)=>Array.from({length:o}).map((n,e)=>({...t,key:`${a}${e}`,dataKey:`${a}${e}`,title:`Column ${e}`,width:150})),m=(o,a=200,t="row-")=>Array.from({length:a}).map((n,e)=>o.reduce((l,r,i)=>(l[r.dataKey]=`Row ${e} - Col ${i}`,l),{id:`${t}${e}`,parentId:null})),s=p(10),c=w(m(s,200).map(o=>(o.children=[{id:`${o.id}-detail-content`,detail:me}],o))),u=({cells:o,rowData:a})=>a.detail?_("div",{class:"p-6"},[a.detail]):o;return u.inheritAttrs=!1,(o,a)=>{const t=h("el-table-v2");return v(),S(t,{columns:f(s),data:c.value,"estimated-row-height":50,"expand-column-key":f(s)[0].key,width:700,height:400},{row:C(n=>[_(u,D(V(n)),null,16)]),_:1},8,["columns","data","expand-column-key"])}}});var Ie=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"}));function fe(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Object]"&&!B(y)}const ye="Quaerat ipsam necessitatibus eum quibusdam est id voluptatem cumque mollitia.",he="Corrupti doloremque a quos vero delectus consequatur.",ge="Eius optio fugiat.";var $e=$({__name:"dynamic-height",setup(y){const p=[ge,he,ye];let m=0;const s=()=>({id:`random:${++m}`,name:"Tom",date:"2016-05-03",description:p[Math.floor(Math.random()*3)]}),c=[{key:"id",title:"Id",dataKey:"id",width:150,sortable:!0,fixed:R.LEFT},{key:"name",title:"Name",dataKey:"name",width:150,align:"center",cellRenderer:({cellData:t})=>_(U,null,fe(t)?t:{default:()=>[t]})},{key:"description",title:"Description",dataKey:"description",width:150,cellRenderer:({cellData:t})=>_("div",{style:"padding: 10px 0;"},[t])},{key:"operations",title:"Operations",cellRenderer:()=>_(G,null,[_(A,{size:"small"},{default:()=>[j("Edit")]}),_(A,{size:"small",type:"danger"},{default:()=>[j("Delete")]})]),width:150,align:"center"}],u=w(Array.from({length:200}).map(s).sort((t,n)=>t.name>n.name?1:-1)),o=w({key:"name",order:E.ASC}),a=t=>{const n=t.order==="asc"?1:-1,e=[...u.value];e.sort((l,r)=>l[t.key]>r[t.key]?n:-n),o.value=t,u.value=e};return(t,n)=>{const e=h("el-table-v2");return v(),S(e,{columns:c,data:u.value,"sort-by":o.value,"estimated-row-height":40,width:700,height:400,fixed:"",onColumnSort:a},null,8,["data","sort-by"])}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"}));const ve={class:"flex items-center justify-center h-100%"};var be=$({__name:"empty",setup(y){const m=((s=10,c="column-",u)=>Array.from({length:s}).map((o,a)=>({...u,key:`${c}${a}`,dataKey:`${c}${a}`,title:`Column ${a}`,width:150})))(10);return(s,c)=>{const u=h("el-empty"),o=h("el-table-v2");return v(),S(o,{columns:f(m),data:[],"row-height":40,width:700,height:400,"footer-height":50},{empty:C(()=>[M("div",ve,[_(u)])]),_:1},8,["columns"])}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),we=$({__name:"filter",setup(y){const p=(e=10,l="column-",r)=>Array.from({length:e}).map((i,d)=>({...r,key:`${l}${d}`,dataKey:`${l}${d}`,title:`Column ${d}`,width:150})),m=(e,l=200,r="row-")=>Array.from({length:l}).map((i,d)=>e.reduce((g,k,b)=>(g[k.dataKey]=`Row ${d} - Col ${b}`,g),{id:`${r}${d}`,parentId:null})),s=p(10),c=w(m(s,200)),u=w(!1),o=w(),a=()=>{o.value.hide(),u.value?c.value=m(s,100,"filtered-"):c.value=m(s,200)},t=()=>{u.value=!1,a()};s[0].headerCellRenderer=e=>_("div",{class:"flex items-center justify-center"},[_("span",{class:"mr-2 text-xs"},[e.column.title]),_(I,ee({ref:o,trigger:"click"},{width:200}),{default:()=>_("div",{class:"filter-wrapper"},[_("div",{class:"filter-group"},[_(X,{modelValue:u.value,"onUpdate:modelValue":l=>u.value=l},{default:()=>[j("Filter Text")]})]),_("div",{class:"el-table-v2__demo-filter"},[_(A,{text:!0,onClick:a},{default:()=>[j("Confirm")]}),_(A,{text:!0,onClick:t},{default:()=>[j("Reset")]})])]),reference:()=>_(H,{class:"cursor-pointer"},{default:()=>[_(te,null,null)]})})]);const n=s.map((e,l)=>{let r;return l<2&&(r=R.LEFT),l>9&&(r=R.RIGHT),{...e,fixed:r,width:100}});return(e,l)=>{const r=h("el-table-v2");return v(),S(r,{fixed:"",columns:f(n),data:c.value,width:700,height:400},null,8,["columns","data"])}}});var at=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));const Ce=$({__name:"fixed-columns",setup(y){const p=(a=10,t="column-",n)=>Array.from({length:a}).map((e,l)=>({...n,key:`${t}${l}`,dataKey:`${t}${l}`,title:`Column ${l}`,width:150})),m=(a,t=200,n="row-")=>Array.from({length:t}).map((e,l)=>a.reduce((r,i,d)=>(r[i.dataKey]=`Row ${l} - Col ${d}`,r),{id:`${n}${l}`,parentId:null})),s=p(10);let c=m(s,200);s[0].fixed=!0,s[1].fixed=R.LEFT,s[9].fixed=R.RIGHT;for(let a=0;a<3;a++)s[a].sortable=!0;const u=w({key:"column-0",order:E.ASC}),o=a=>{c=c.reverse(),u.value=a};return(a,t)=>{const n=h("el-table-v2");return v(),S(n,{columns:f(s),data:f(c),"sort-by":u.value,width:700,height:400,fixed:"",onColumnSort:o},null,8,["columns","data","sort-by"])}}});var ot=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));const Se=M("div",{class:"flex items-center",style:{"justify-content":"center",height:"100%","background-color":"var(--el-color-primary-light-7)"}}," Display a message in the footer ",-1),ke=$({__name:"footer",setup(y){const p=(u=10,o="column-",a)=>Array.from({length:u}).map((t,n)=>({...a,key:`${o}${n}`,dataKey:`${o}${n}`,title:`Column ${n}`,width:150})),m=(u,o=200,a="row-")=>Array.from({length:o}).map((t,n)=>u.reduce((e,l,r)=>(e[l.dataKey]=`Row ${n} - Col ${r}`,e),{id:`${a}${n}`,parentId:null})),s=p(10),c=m(s,200);return(u,o)=>{const a=h("el-table-v2");return v(),S(a,{columns:f(s),data:f(c),"row-height":40,width:700,height:400,"footer-height":50,fixed:""},{footer:C(()=>[Se]),_:1},8,["columns","data"])}}});var lt=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),je=$({__name:"grouping-header",setup(y){const p=(t=10,n="column-",e)=>Array.from({length:t}).map((l,r)=>({...e,key:`${n}${r}`,dataKey:`${n}${r}`,title:`Column ${r}`,width:150})),m=(t,n=200,e="row-")=>Array.from({length:n}).map((l,r)=>t.reduce((i,d,g)=>(i[d.dataKey]=`Row ${r} - Col ${g}`,i),{id:`${e}${r}`,parentId:null})),s=p(15),c=m(s,200),u=s.map((t,n)=>{let e;return n<3&&(e=R.LEFT),n>12&&(e=R.RIGHT),{...t,fixed:e,width:100}}),o=({cells:t,columns:n,headerIndex:e})=>{if(e===2)return t;const l=[];let r=0,i=0;return n.forEach((d,g)=>{if(d.placeholderSign===Q)l.push(t[g]);else{r+=t[g].props.column.width,i++;const k=n[g+1];(g===n.length-1||k.placeholderSign===Q||i===(e===0?4:2))&&(l.push(_("div",{class:"flex items-center justify-center custom-header-cell",role:"columnheader",style:{...t[g].props.style,width:`${r}px`}},[j("Group width "),r])),r=0,i=0)}}),l},a=({headerIndex:t})=>t===1?"el-primary-color":"";return(t,n)=>{const e=h("el-table-v2");return v(),S(e,{fixed:"",columns:f(u),data:f(c),"header-height":[50,40,50],"header-class":a,width:700,height:400},{header:C(l=>[_(o,D(V(l)),null,16)]),_:1},8,["columns","data"])}}});var nt=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));const Re={style:{height:"400px"}};var Oe=$({__name:"inline-editing",setup(y){const p=({value:o,onChange:a,forwardRef:t})=>_(ae,{ref:t,onInput:a,modelValue:o},null),m=(o=10,a="column-",t)=>Array.from({length:o}).map((n,e)=>({...t,key:`${a}${e}`,dataKey:`${a}${e}`,title:`Column ${e}`,width:150})),s=(o,a=200,t="row-")=>Array.from({length:a}).map((n,e)=>o.reduce((l,r,i)=>(l[r.dataKey]=`Row ${e} - Col ${i}`,l),{id:`${t}${e}`,editing:!1,parentId:null})),c=m(10);c[0]={...c[0],title:"Editable Column",cellRenderer:({rowData:o,column:a})=>{const t=i=>{o[a.dataKey]=i},n=()=>{o.editing=!0},e=()=>o.editing=!1,l=w(),r=i=>{var d;l.value=i,i&&((d=i.focus)==null||d.call(i))};return o.editing?_(p,{forwardRef:r,value:o[a.dataKey],onChange:t,onBlur:e,onKeydownEnter:e},null):_("div",{class:"table-v2-inline-editing-trigger",onClick:n},[o[a.dataKey]])}};const u=w(s(c,200));return(o,a)=>{const t=h("el-table-v2"),n=h("el-auto-resizer");return v(),P("div",Re,[_(n,null,{default:C(({height:e,width:l})=>[_(t,{columns:f(c),data:u.value,width:l,height:e,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}});var rt=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"}));const Ke={class:"mb-4 flex items-center"},Ae={class:"mb-4 flex items-center"},Te=j(" Scroll by pixels "),ze=j(" Scroll by rows "),Me={style:{height:"400px"}},xe=$({__name:"manual-scroll",setup(y){const p=(e=10,l="column-",r)=>Array.from({length:e}).map((i,d)=>({...r,key:`${l}${d}`,dataKey:`${l}${d}`,title:`Column ${d}`,width:150})),m=(e,l=200,r="row-")=>Array.from({length:l}).map((i,d)=>e.reduce((g,k,b)=>(g[k.dataKey]=`Row ${d} - Col ${b}`,g),{id:`${r}${d}`,parentId:null})),s=p(10),c=m(s,200),u=w(),o=w(200),a=w(10);function t(){var e;(e=u.value)==null||e.scrollToTop(o.value)}function n(){var e;(e=u.value)==null||e.scrollToRow(a.value)}return(e,l)=>{const r=h("el-input"),i=h("el-form-item"),d=h("el-button"),g=h("el-table-v2"),k=h("el-auto-resizer");return v(),P(G,null,[M("div",Ke,[_(i,{label:"Scroll pixels",class:"mr-4"},{default:C(()=>[_(r,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=b=>o.value=b)},null,8,["modelValue"])]),_:1}),_(i,{label:"Scroll rows"},{default:C(()=>[_(r,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=b=>a.value=b)},null,8,["modelValue"])]),_:1})]),M("div",Ae,[_(d,{onClick:t},{default:C(()=>[Te]),_:1}),_(d,{onClick:n},{default:C(()=>[ze]),_:1})]),M("div",Me,[_(k,null,{default:C(({height:b,width:T})=>[_(g,{ref_key:"tableRef",ref:u,columns:f(s),data:f(c),width:T,height:b,fixed:""},null,8,["columns","data","width","height"])]),_:1})])],64)}}});var st=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));const Ee={class:"el-loading-mask",style:{display:"flex","align-items":"center","justify-content":"center"}},Pe=$({__name:"overlay",setup(y){const p=(u=10,o="column-",a)=>Array.from({length:u}).map((t,n)=>({...a,key:`${o}${n}`,dataKey:`${o}${n}`,title:`Column ${n}`,width:150})),m=(u,o=200,a="row-")=>Array.from({length:o}).map((t,n)=>u.reduce((e,l,r)=>(e[l.dataKey]=`Row ${n} - Col ${r}`,e),{id:`${a}${n}`,parentId:null})),s=p(10),c=m(s,200);return(u,o)=>{const a=h("el-icon"),t=h("el-table-v2");return v(),S(t,{columns:f(s),data:f(c),"row-height":40,width:700,height:400},{overlay:C(()=>[M("div",Ee,[_(a,{class:"is-loading",color:"var(--el-color-primary)",size:26},{default:C(()=>[_(f(oe))]),_:1})])]),_:1},8,["columns","data"])}}});var ut=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"}));function De(y){return typeof y=="function"||Object.prototype.toString.call(y)==="[object Object]"&&!B(y)}var Ve=$({__name:"row-class",setup(y){let p=0;const m=()=>({id:`random-id-${++p}`,name:"Tom",date:"2020-10-1"}),s=[{key:"date",title:"Date",dataKey:"date",width:150,fixed:R.LEFT,cellRenderer:({cellData:o})=>_(W,{content:q(o).format("YYYY/MM/DD")},{default:()=>[_("span",{class:"flex items-center"},[_(H,{class:"mr-3"},{default:()=>[_(J,null,null)]}),q(o).format("YYYY/MM/DD")])]})},{key:"name",title:"Name",dataKey:"name",width:150,align:"center",cellRenderer:({cellData:o})=>_(U,null,De(o)?o:{default:()=>[o]})},{key:"operations",title:"Operations",cellRenderer:()=>_(G,null,[_(A,{size:"small"},{default:()=>[j("Edit")]}),_(A,{size:"small",type:"danger"},{default:()=>[j("Delete")]})]),width:150,align:"center",flexGrow:1}],c=w(Array.from({length:200}).map(m)),u=({rowIndex:o})=>o%10===5?"bg-red-100":o%10===0?"bg-blue-200":"";return(o,a)=>{const t=h("el-table-v2");return v(),S(t,{columns:s,data:c.value,"row-class":u,width:700,height:400},null,8,["data"])}}}),ct=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));const N=0,Ne=$({__name:"rowspan",setup(y){const p=(o=10,a="column-",t)=>Array.from({length:o}).map((n,e)=>({...t,key:`${a}${e}`,dataKey:`${a}${e}`,title:`Column ${e}`,width:150})),m=(o,a=200,t="row-")=>Array.from({length:a}).map((n,e)=>o.reduce((l,r,i)=>(l[r.dataKey]=`Row ${e} - Col ${i}`,l),{id:`${t}${e}`,parentId:null})),s=p(10),c=m(s,200);s[N].rowSpan=({rowIndex:o})=>o%2===0&&o<=c.length-2?2:1;const u=({rowData:o,rowIndex:a,cells:t,columns:n})=>{const e=n[N].rowSpan({rowData:o,rowIndex:a});if(e>1){const l=t[N],r={...l.props.style,backgroundColor:"var(--el-color-primary-light-3)",height:`${e*50-1}px`,alignSelf:"flex-start",zIndex:1};t[N]=F(l,{style:r})}return t};return(o,a)=>{const t=h("el-table-v2");return v(),S(t,{fixed:"",columns:f(s),data:f(c),width:700,height:400},{row:C(n=>[_(u,D(V(n)),null,16)]),_:1},8,["columns","data"])}}});var _t=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));const Ye={style:{height:"400px"}};var qe=$({__name:"selection",setup(y){const p=({value:o,intermediate:a=!1,onChange:t})=>_(X,{onChange:t,modelValue:o,indeterminate:a},null),m=(o=10,a="column-",t)=>Array.from({length:o}).map((n,e)=>({...t,key:`${a}${e}`,dataKey:`${a}${e}`,title:`Column ${e}`,width:150})),s=(o,a=200,t="row-")=>Array.from({length:a}).map((n,e)=>o.reduce((l,r,i)=>(l[r.dataKey]=`Row ${e} - Col ${i}`,l),{id:`${t}${e}`,checked:!1,parentId:null})),c=m(10);c.unshift({key:"selection",width:50,cellRenderer:({rowData:o})=>{const a=t=>o.checked=t;return _(p,{value:o.checked,onChange:a},null)},headerCellRenderer:()=>{const o=f(u),a=e=>u.value=o.map(l=>(l.checked=e,l)),t=o.every(e=>e.checked),n=o.some(e=>e.checked);return _(p,{value:t,intermediate:n&&!t,onChange:a},null)}});const u=w(s(c,200));return(o,a)=>{const t=h("el-table-v2"),n=h("el-auto-resizer");return v(),P("div",Ye,[_(n,null,{default:C(({height:e,width:l})=>[_(t,{columns:f(c),data:u.value,width:l,height:e,fixed:""},null,8,["columns","data","width","height"])]),_:1})])}}}),it=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));const Fe=$({__name:"sort",setup(y){const p=(a=10,t="column-",n)=>Array.from({length:a}).map((e,l)=>({...n,key:`${t}${l}`,dataKey:`${t}${l}`,title:`Column ${l}`,width:150})),m=(a,t=200,n="row-")=>Array.from({length:t}).map((e,l)=>a.reduce((r,i,d)=>(r[i.dataKey]=`Row ${l} - Col ${d}`,r),{id:`${n}${l}`,parentId:null})),s=p(10);let c=m(s,200);s[0].sortable=!0;const u=w({key:"column-0",order:E.ASC}),o=a=>{console.log(a),c=c.reverse(),u.value=a};return(a,t)=>{const n=h("el-table-v2");return v(),S(n,{columns:f(s),data:f(c),"sort-by":u.value,width:700,height:400,fixed:"",onColumnSort:o},null,8,["columns","data","sort-by"])}}});var dt=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"}));const K=1,z=0;var Ge=$({__name:"spans",setup(y){const p=(o=10,a="column-",t)=>Array.from({length:o}).map((n,e)=>({...t,key:`${a}${e}`,dataKey:`${a}${e}`,title:`Column ${e}`,width:150})),m=(o,a=200,t="row-")=>Array.from({length:a}).map((n,e)=>o.reduce((l,r,i)=>(l[r.dataKey]=`Row ${e} - Col ${i}`,l),{id:`${t}${e}`,parentId:null})),s=p(10),c=m(s,200);s[K].colSpan=({rowIndex:o})=>o%4+1,s[K].align="center",s[z].rowSpan=({rowIndex:o})=>o%2===0&&o<=c.length-2?2:1;const u=({rowData:o,rowIndex:a,cells:t,columns:n})=>{const e=n[K].colSpan({rowData:o,rowIndex:a});if(e>1){let r=Number.parseInt(t[K].props.style.width);for(let d=1;d<e;d++)r+=Number.parseInt(t[K+d].props.style.width),t[K+d]=null;const i={...t[K].props.style,width:`${r}px`,backgroundColor:"var(--el-color-primary-light-3)"};t[K]=F(t[K],{style:i})}const l=n[z].rowSpan({rowData:o,rowIndex:a});if(l>1){const r=t[z],i={...r.props.style,backgroundColor:"var(--el-color-danger-light-3)",height:`${l*50}px`,alignSelf:"flex-start",zIndex:1};t[z]=F(r,{style:i})}else{const r=t[z].props.style;t[z]=_("div",{style:{...r,width:`${r.width}px`}},null)}return t};return(o,a)=>{const t=h("el-table-v2");return v(),S(t,{fixed:"",columns:f(s),data:f(c),width:700,height:400},{row:C(n=>[_(u,D(V(n)),null,16)]),_:1},8,["columns","data"])}}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"}));const Le=$({__name:"sticky-rows",setup(y){const p=(e=10,l="column-",r)=>Array.from({length:e}).map((i,d)=>({...r,key:`${l}${d}`,dataKey:`${l}${d}`,title:`Column ${d}`,width:150})),m=(e,l=200,r="row-")=>Array.from({length:l}).map((i,d)=>e.reduce((g,k,b)=>(g[k.dataKey]=`Row ${d} - Col ${b}`,g),{id:`${r}${d}`,parentId:null})),s=p(10),c=m(s,200),u=({rowIndex:e})=>{if(e<0||(e+1)%5===0)return"sticky-row"},o=w(0),a=L(()=>c.slice(o.value,o.value+1)),t=L(()=>c.slice(1)),n=({scrollTop:e})=>{o.value=Math.floor(e/250)*5};return(e,l)=>{const r=h("el-table-v2");return v(),S(r,{columns:f(s),data:f(t),"fixed-data":f(a),width:700,height:400,"row-class":u,fixed:"",onScroll:n},null,8,["columns","data","fixed-data"])}}});var pt=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));const Y="column-0",He=$({__name:"tree-data",setup(y){const p=(e=10,l="column-",r)=>Array.from({length:e}).map((i,d)=>({...r,key:`${l}${d}`,dataKey:`${l}${d}`,title:`Column ${d}`,width:150})),m=(e,l=200,r="row-")=>Array.from({length:l}).map((i,d)=>e.reduce((g,k,b)=>(g[k.dataKey]=`Row ${d} - Col ${b}`,g),{id:`${r}${d}`,parentId:null})),s=p(10).map((e,l)=>{let r;return l<2&&(r=R.LEFT),l>8&&(r=R.RIGHT),{...e,fixed:r}}),c=m(s,200);for(let e=0;e<50;e++)c.push({...c[0],id:`${c[0].id}-sub-${e}`,parentId:c[0].id,[Y]:`Sub ${e}`},{...c[2],id:`${c[2].id}-sub-${e}`,parentId:c[2].id,[Y]:`Sub ${e}`},{...c[2],id:`${c[2].id}-sub-sub-${e}`,parentId:`${c[2].id}-sub-${e}`,[Y]:`Sub-Sub ${e}`});function u(e,l=null,r="id",i="parentId"){const d=[],g={};for(const k of e){const b={...k},T=b[r],x=b[i];Array.isArray(b.children)?g[T]=b.children.concat(g[T]||[]):g[T]||(g[T]=[]),b.children=g[T],x!==void 0&&x!==l?(g[x]||(g[x]=[]),g[x].push(b)):d.push(b)}return d}const o=L(()=>u(c)),a=w([]),t=({expanded:e})=>{console.log("Expanded:",e)},n=e=>{console.log(e)};return(e,l)=>{const r=h("el-table-v2");return v(),S(r,{"expanded-row-keys":a.value,"onUpdate:expanded-row-keys":l[0]||(l[0]=i=>a.value=i),columns:f(s),data:f(o),width:700,"expand-column-key":Y,height:400,fixed:"",onRowExpand:t,onExpandedRowsChange:n},null,8,["expanded-row-keys","columns","data"])}}});var ft=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"}));export{Ue as _,Qe as a,Je as b,We as c,Xe as d,Ze as e,Ie as f,et as g,tt as h,at as i,ot as j,lt as k,nt as l,rt as m,st as n,ut as o,ct as p,_t as q,it as r,dt as s,mt as t,pt as u,ft as v};
