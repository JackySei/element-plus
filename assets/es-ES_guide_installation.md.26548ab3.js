import{o,c as l,b as s,a as t,d as n,e,_ as p}from"./app.3c87db1b.js";const c=s("h1",{id:"instalacion",tabindex:"-1"},[n("Instalaci\xF3n "),s("a",{class:"header-anchor vp-link",href:"#instalacion","aria-hidden":"true"},"#")],-1),r=s("h2",{id:"compatibilidad",tabindex:"-1"},[n("Compatibilidad "),s("a",{class:"header-anchor vp-link",href:"#compatibilidad","aria-hidden":"true"},"#")],-1),i=n("Element Plus puede ejecutarse en navegadores que soportan "),u={href:"https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},d=n("ES2018"),_=n(" y "),k={href:"https://caniuse.com/resizeobserver",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},h=n("ResizeObserver"),m=n(". Si realmente es neceario soportar navegadores desactualizados, por favor a\xF1ade "),g={href:"https://babeljs.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v=n("Babel"),f=n(" y Polyfill ti mismo."),b=e('<p>Dado que Vue3 ya no es compatible con IE11, ElementPlus no es compatible con IE11 ni con versiones anteriores anteriores.</p><div class="vp-table"><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt=""></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt=""></th></tr></thead><tbody><tr><td>Edge \u2265 79</td><td>Firefox \u2265 78</td><td>Chrome \u2265 64</td><td>Safari \u2265 12</td></tr></tbody></table></div><h3 id="version" tabindex="-1">Versi\xF3n <a class="header-anchor vp-link" href="#version" aria-hidden="true">#</a></h3><p>ElementPlus se encuentra actualmente en una iteraci\xF3n de desarrollo r\xE1pido:</p>',4),q={href:"https://www.npmjs.org/package/element-plus",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},j=s("img",{src:"https://img.shields.io/npm/v/element-plus.svg?style=flat-square",alt:""},null,-1),y=s("h2",{id:"gestor-de-paquetes",tabindex:"-1"},[n("Gestor de paquetes "),s("a",{class:"header-anchor vp-link",href:"#gestor-de-paquetes","aria-hidden":"true"},"#")],-1),x=n("Se recomienda el uso del administrador de paquetes (NPM, "),P={href:"https://classic.yarnpkg.com/lang/en/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},E=n("Yarn"),S=n(", "),T={href:"https://pnpm.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},V=n("pnpm"),I=n(") para instalar Element Plus"),w=n(", pero tambi\xE9n puede utilizar otros gestores como "),C={href:"https://vitejs.dev",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},z=n("Vite"),D=n(" y "),N={href:"https://webpack.js.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},A=n("webpack"),M=n("."),W=e(`<div class="language-shell"><pre><code><span class="token comment"># Elige un gestor de paquetes que te guste.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save

<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus

<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus
</code></pre></div>`,1),Y=n("Si su entorno de red no es bueno, se recomienda utilizar un registro de r\xE9plica como "),R={href:"https://github.com/cnpm/cnpm",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},B=n("cnpm"),H=n(" o "),O={href:"https://registry.npmmirror.com/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},U=n("Alibaba"),$=n("."),G=s("h2",{id:"importar-en-el-navegador",tabindex:"-1"},[n("Importar en el navegador "),s("a",{class:"header-anchor vp-link",href:"#importar-en-el-navegador","aria-hidden":"true"},"#")],-1),L=s("p",null,[n("Puede importar Element Plus directamente a las etiquetas HTML del navegador y utilizar la variable global "),s("code",null,"ElementPlus"),n(".")],-1),F=n("Seg\xFAn los diferentes proveedores de "),J=s("strong",null,"CDN",-1),K=n(" hay diferentes URLs de importaci\xF3n. Aqu\xED usamos "),Q={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},X=n("unpkg"),Z=n(" y "),nn={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},sn=n("jsDelivr"),an=n(" como ejemplo. Tambi\xE9n puede utilizar otros proveedores CDN."),tn=e(`<h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor vp-link" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor vp-link" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>::: consejo</p>`,5),en=n("Recomendamos usar CDN para importar Element Plus. Emple\xE1ndolo podr\xE1 bloquear la versi\xF3n en la direcci\xF3n del enlace, y no verse afectado por actualizaciones incompatibles cuando Element Plus se actualice en el futuro. Por favor, consulte "),on={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ln=n("unpkg.com"),pn=n(" para ver c\xF3mo fijar una determinada versi\xF3n."),cn=s("p",null,":::",-1),rn=s("h2",{id:"hello-world",tabindex:"-1"},[n("Hello World "),s("a",{class:"header-anchor vp-link",href:"#hello-world","aria-hidden":"true"},"#")],-1),un=n("Con CDN, podemos usar Element Plus f\xE1cilmente para escribir una p\xE1gina de Hola Mundo. "),dn={href:"https://codepen.io/iamkun/pen/YzWMaVr",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_n=n("Online Demo"),kn=s("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),hn=s("p",null,[n("Si se ha instalado a trav\xE9s del gestor de paquetes y quiere usarlo con una herramienta de empaquetado, por favor lea la siguiente secci\xF3n: "),s("a",{href:"/en-US/guide/quickstart.html",class:"vp-link"},"Inicio r\xE1pido"),n(".")],-1),qn='{"title":"Instalaci\xF3n","description":"","frontmatter":{"title":"Instalaci\xF3n","lang":"es-ES"},"headers":[{"level":2,"title":"Compatibilidad","slug":"compatibilidad"},{"level":3,"title":"Versi\xF3n","slug":"version"},{"level":2,"title":"Gestor de paquetes","slug":"gestor-de-paquetes"},{"level":2,"title":"Importar en el navegador","slug":"importar-en-el-navegador"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"es-ES/guide/installation.md","lastUpdated":null}',mn={},jn=Object.assign(mn,{__name:"installation",setup(gn){return(vn,fn)=>{const a=p;return o(),l("div",null,[c,r,s("p",null,[i,s("a",u,[d,t(a,{class:"link-icon"})]),_,s("a",k,[h,t(a,{class:"link-icon"})]),m,s("a",g,[v,t(a,{class:"link-icon"})]),f]),b,s("p",null,[s("a",q,[j,t(a,{class:"link-icon"})])]),y,s("p",null,[s("strong",null,[x,s("a",P,[E,t(a,{class:"link-icon"})]),S,s("a",T,[V,t(a,{class:"link-icon"})]),I]),w,s("a",C,[z,t(a,{class:"link-icon"})]),D,s("a",N,[A,t(a,{class:"link-icon"})]),M]),W,s("p",null,[Y,s("a",R,[B,t(a,{class:"link-icon"})]),H,s("a",O,[U,t(a,{class:"link-icon"})]),$]),G,L,s("p",null,[F,J,K,s("a",Q,[X,t(a,{class:"link-icon"})]),Z,s("a",nn,[sn,t(a,{class:"link-icon"})]),an]),tn,s("p",null,[en,s("a",on,[ln,t(a,{class:"link-icon"})]),pn]),cn,rn,s("p",null,[un,s("a",dn,[_n,t(a,{class:"link-icon"})])]),kn,hn])}}});export{qn as __pageData,jn as default};
