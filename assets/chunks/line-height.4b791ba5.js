import{h as n,o as t,c as a,b as e,F as u,j as h,z as v,t as m,u as _,S as f,f as b,H as c,e as d,d as r}from"../app.3c87db1b.js";const k={class:"demo-typo-size"},x=e("tr",null,[e("td",null,"Level"),e("td",null,"Font Size"),e("td",{class:"color-dark-light"},"Demo")],-1),S=e("td",null,"Build with Element",-1),$=n({__name:"convention",setup(p){const s=[{level:"Supplementary text",type:"extra-small"},{level:"Body (small)",type:"small"},{level:"Body",type:"base"},{level:"Small Title",type:"medium"},{level:"Title",type:"large"},{level:"Main Title",type:"extra-large"}];function o(g){return g.split("-").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}return(g,i)=>(t(),a("table",k,[e("tbody",null,[x,(t(),a(u,null,h(s,(l,y)=>e("tr",{key:y,style:v(`font-size: var(--el-font-size-${l.type})`)},[e("td",null,m(l.level),1),e("td",null,m(_(f)(`--el-font-size-${l.type}`).value+" "+o(l.type)),1),S],4)),64))])]))}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),j="/images/typography/term-pingfang.png",z="/images/typography/term-hiragino.png",T="/images/typography/term-microsoft.png",B="/images/typography/term-helvetica.png",O="/images/typography/term-arial.png",C="/images/typography/term-pingfang-dark.png",H="/images/typography/term-hiragino-dark.png",M="/images/typography/term-microsoft-dark.png",N="/images/typography/term-helvetica-dark.png",V="/images/typography/term-arial-dark.png";const D={key:0,class:"demo-term-box"},F=d('<img src="'+j+'" alt="" data-v-e1341f10><img src="'+z+'" alt="" data-v-e1341f10><img src="'+T+'" alt="" data-v-e1341f10><img src="'+B+'" alt="" data-v-e1341f10><img src="'+O+'" alt="" data-v-e1341f10>',5),L=[F],P={key:1,class:"demo-term-box"},E=d('<img src="'+C+'" alt="" data-v-e1341f10><img src="'+H+'" alt="" data-v-e1341f10><img src="'+M+'" alt="" data-v-e1341f10><img src="'+N+'" alt="" data-v-e1341f10><img src="'+V+'" alt="" data-v-e1341f10>',5),w=[E],A=n({__name:"font",setup(p){return(s,o)=>_(c)?(t(),a("div",P,w)):(t(),a("div",D,L))}});var I=b(A,[["__scopeId","data-v-e1341f10"]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),R="/images/typography/line-height-dark.png",U="/images/typography/line-height.png";const q={key:0,class:"lineH-left",src:R},G={key:1,class:"lineH-left",src:U},J=e("ul",{class:"lineH-right"},[e("li",null,[r("line-height:1 "),e("span",null,"No line height")]),e("li",null,[r("line-height:1.3 "),e("span",null,"Compact")]),e("li",null,[r("line-height:1.5 "),e("span",null,"Regular")]),e("li",null,[r("line-height:1.7 "),e("span",null,"Loose")])],-1),K=n({__name:"line-height",setup(p){return(s,o)=>(t(),a("div",null,[_(c)?(t(),a("img",q)):(t(),a("img",G)),J]))}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{W as _,X as a,Y as b};
