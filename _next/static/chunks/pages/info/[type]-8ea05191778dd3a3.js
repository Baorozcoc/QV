(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{9454:function(i,e,n){"use strict";var t=n(7379),o=n(5893),r=t.ZP.div.withConfig({displayName:"header__Jumbo",componentId:"sc-t8fmwg-0"})(["margin:90px 0 30px 0;border-radius:20px;background-color:",";position:relative;padding:40px 10px 20px 20px;@media screen and (max-width:1000px){padding:15px;}"],(function(i){return i.primary?"#1920EF":"#FFC024"})),a=t.ZP.h1.withConfig({displayName:"header__Title",componentId:"sc-t8fmwg-1"})(["font-weight:600;font-size:2.5em;margin:0px;color:",";@media screen and (max-width:1000px){width:100%;font-size:1.8em;}"],(function(i){return i.primary?"#FFF":"#000"})),c=t.ZP.h4.withConfig({displayName:"header__Desc",componentId:"sc-t8fmwg-2"})(["font-weight:",";font-size:",";margin:0px;width:50%;color:",";@media screen and (max-width:1000px){width:100%;font-size:1em;}"],(function(i){return i.primary?"bold":null}),(function(i){return i.primary?"1.4em":"1em"}),(function(i){return i.primary?"#FFC024":"#000"})),s=t.ZP.img.withConfig({displayName:"header__Img",componentId:"sc-t8fmwg-3"})(["position:absolute;width:38%;bottom:0;right:0;z-index:1;border-radius:20px;@media screen and (max-width:1000px){width:0px;}"]);e.Z=function(i){var e=i.title,n=i.desc,t=i.imgH,d=i.primary;return(0,o.jsxs)(r,{primary:d,children:[(0,o.jsx)(a,{primary:d,children:e}),(0,o.jsx)(c,{primary:d,children:n}),(0,o.jsx)(s,{src:t,primary:d})]})}},6646:function(i,e,n){"use strict";var t=n(4141),o=n(2279),r=n(7379),a=(n(8177),n(5893)),c=r.ZP.div.withConfig({displayName:"pdf__Center",componentId:"sc-fahwqw-0"})(["width:100%;text-align:center;"]),s=r.ZP.div.withConfig({displayName:"pdf__Container",componentId:"sc-fahwqw-1"})(["height:800px;width:90%;margin:0 auto;@media screen and (max-width:1210px){height:580px;}@media screen and (max-width:1000px){height:400px;}@media screen and (max-width:800px){height:530px;width:100%;}"]);e.Z=function(i){var e=i.file,n=i.choice,r=void 0===n?0:n;return console.log(e),(0,a.jsx)(c,{children:(0,a.jsx)(t.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js",children:(0,a.jsx)(s,{children:0===r?(0,a.jsx)(t.Viewer,{fileUrl:"".concat(o.O,"/").concat(e),defaultScale:t.SpecialZoomLevel.PageFit,theme:"dark"}):(0,a.jsx)(t.Viewer,{fileUrl:e,defaultScale:t.SpecialZoomLevel.PageFit,theme:"dark"})})})})}},6215:function(i,e,n){"use strict";n.r(e);var t=n(7294),o=n(1163),r=n(2279),a=n(1664),c=n(7379),s=n(8180),d=n(9454),l=n(6034),p=n(2054),m=n(6987),u=n(9152),f=n(5893),x="".concat(r.O,"/imgs/header/info.png"),h=c.ZP.div.withConfig({displayName:"type__Cont",componentId:"sc-1x36anm-0"})(["padding:0px 30px;"]),g=c.ZP.div.withConfig({displayName:"type__Selector",componentId:"sc-1x36anm-1"})(["display:flex;position:relative;"]),w=c.ZP.div.withConfig({displayName:"type__SelItem",componentId:"sc-1x36anm-2"})(["margin:.5em 1em;font-weight:bold;font-size:1em;color:",";:hover{cursor:pointer;}@media screen and (max-width:800px){font-size:.8em;}"],(function(i){return i.active?"black":"#999"})),j=c.ZP.div.withConfig({displayName:"type__SelBar",componentId:"sc-1x36anm-3"})(["position:absolute;background:#172BEF;height:3px;width:","px;top:","px;left:","px;transition:.3s ease;"],(function(i){return i.w||"60"}),(function(i){return i.y||"0"}),(function(i){return i.x||"0"}));e.default=function(){var i=(0,o.useRouter)().query.type,e=(0,t.useRef)(),n=(0,t.useRef)(),r=(0,t.useState)(),c=r[0],v=r[1],_=(0,t.useState)(),y=_[0],b=_[1],C=(null===y||void 0===y?void 0:y.x)-(null===c||void 0===c?void 0:c.x),k=(null===y||void 0===y?void 0:y.y)-(null===c||void 0===c?void 0:c.y)+(null===y||void 0===y?void 0:y.height)+2,I=null===y||void 0===y?void 0:y.width;return(0,t.useEffect)((function(){var i,t;v(null===e||void 0===e||null===(i=e.current)||void 0===i?void 0:i.getBoundingClientRect()),b(null===n||void 0===n||null===(t=n.current)||void 0===t?void 0:t.getBoundingClientRect())}),[i]),(0,f.jsxs)(s.Z,{pg:"Acerca del juego",children:[(0,f.jsx)(d.Z,{title:"Informaci\xf3n",desc:"Acerca del juego",imgH:x}),(0,f.jsxs)(g,{ref:e,children:[(0,f.jsx)(a.default,{href:"/info/about",passHref:!0,children:(0,f.jsx)(w,{active:"about"===i,ref:"about"===i?n:null,children:"ACERCA DE"})}),(0,f.jsx)(a.default,{href:"/info/conoceQV",passHref:!0,children:(0,f.jsx)(w,{active:"conoceQV"===i,ref:"conoceQV"===i?n:null,children:"CONOCE QV"})}),(0,f.jsx)(a.default,{href:"/info/guide",passHref:!0,children:(0,f.jsx)(w,{active:"guide"===i,ref:"guide"===i?n:null,children:"GU\xcdA DEL JUGADOR"})}),(0,f.jsx)(a.default,{href:"/info/faqs",passHref:!0,children:(0,f.jsx)(w,{active:"faqs"===i,ref:"faqs"===i?n:null,children:"FAQS"})}),(0,f.jsx)(j,{x:C,y:k,w:I})]}),(0,f.jsxs)(h,{children:["about"===i&&(0,f.jsx)(l.default,{}),"conoceQV"===i&&(0,f.jsx)(p.default,{}),"guide"===i&&(0,f.jsx)(u.default,{}),"faqs"===i&&(0,f.jsx)(m.default,{})]})]})}},6034:function(i,e,n){"use strict";n.r(e);var t=n(2640),o=n(2279),r=n(6673),a=n(7379),c=n(2253),s=n(5893),d=a.ZP.h3.withConfig({displayName:"about__Title",componentId:"sc-1i0ro1k-0"})(["font-size:20px;font-weight:700;"]),l=a.ZP.h4.withConfig({displayName:"about__Subtitle",componentId:"sc-1i0ro1k-1"})(["font-style:italic;font-weight:bold;font-size:1em;color:#0000BB;"]),p=a.ZP.div.withConfig({displayName:"about__GridInfo",componentId:"sc-1i0ro1k-2"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));margin:0px 0px 40px 0px;p{font-size:1em;text-align:justify;}img{width:200px;margin:auto;}"]),m=a.ZP.div.withConfig({displayName:"about__GridImg",componentId:"sc-1i0ro1k-3"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));grid-gap:20px;align-items:center;margin-left:20px;margin-bottom:50px;"]),u=a.ZP.img.withConfig({displayName:"about__Img",componentId:"sc-1i0ro1k-4"})(["transition:.3s ease;:hover{transform:scale(1.05);cursor:pointer;}"]);e.default=function(){var i=(0,r.C5)(),e=i.infoA,n=i.infoB,a=(0,c.n)(!1),f=(0,t.Z)(a,3),x=f[0],h=f[1],g=f[2];return(0,s.jsxs)("div",{children:[(0,s.jsx)(d,{children:"_Acerca de Quanticon Valley"}),(0,s.jsxs)(p,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:i.qv[0]}),(0,s.jsx)("p",{children:i.qv[1]})]}),(0,s.jsx)("img",{src:"".concat(o.O,"/imgs/info/QV.png")})]}),(0,s.jsx)(l,{children:"Organiza"}),(0,s.jsx)(m,{children:e.map((function(i){return(0,s.jsx)("img",{src:"".concat(o.O,"/imgs/info/").concat(i,".png")},i)}))}),(0,s.jsx)(l,{children:"Apoya"}),(0,s.jsxs)(m,{children:[n.map((function(i){return(0,s.jsx)("img",{src:"".concat(o.O,"/imgs/info/").concat(i,".png")},i)})),(0,s.jsx)(u,{onClick:h,width:"150px",src:"".concat(o.O,"/imgs/egg.png")})]}),(0,s.jsx)(c.Y,{isOpen:x,closeE:g})]})}},6987:function(i,e,n){"use strict";n.r(e);var t=n(7294),o=n(7379),r=n(6673),a=n(5893),c=o.ZP.div.withConfig({displayName:"faqs__Cont",componentId:"sc-cm3k6x-0"})(["display:flex;transition:.3s ease;flex-direction:column;"]),s=o.ZP.h3.withConfig({displayName:"faqs__Title",componentId:"sc-cm3k6x-1"})(["font-size:20px;font-weight:700;"]),d=o.ZP.div.withConfig({displayName:"faqs__Item",componentId:"sc-cm3k6x-2"})(["align-self:center;border:1.5px solid #AEBCD9;box-sizing:border-box;border-radius:7px;padding:20px 20px;margin:15px 25px 15px 20px;width:90%;text-align:justify;transition:all 0.2s ease;box-shadow:",";p{overflow:hidden;max-height:",";font-size:14px;line-height:19px;color:#4F4F4F;padding:",";margin:0px;transition:all 0.2s ease-in-out;}"],(function(i){return i.active?"0px 6px 8px rgba(0, 0, 0, 0.3)":null}),(function(i){return i.active?"120px":"0px"}),(function(i){return i.active?"5px 10px":"0px"})),l=o.ZP.div.withConfig({displayName:"faqs__ItemTitle",componentId:"sc-cm3k6x-3"})(["font-weight:600;font-size:15px;line-height:22px;color:#172BEF;margin:0px;transition:all 0.2s ease;:hover{transform:scale(1.01);}"]);e.default=function(){var i=(0,r.kI)(),e=(0,t.useState)(""),n=e[0],o=e[1];return(0,a.jsxs)(c,{children:[(0,a.jsx)(s,{children:"_Lo que m\xe1s nos preguntan"}),i.map((function(i){return(0,a.jsxs)(d,{id:i.menu,active:i.menu===n,children:[(0,a.jsx)(l,{onClick:function(){return function(i){if(i===n)return o("");o(i)}(i.menu)},children:i.name}),(0,a.jsx)("p",{children:i.desc})]},i.menu)}))]})}},9152:function(i,e,n){"use strict";n.r(e);var t=n(7379),o=n(6646),r=n(2279),a=n(5893),c=t.ZP.h3.withConfig({displayName:"guide__Title",componentId:"sc-1jljg35-0"})(["font-size:20px;font-weight:700;"]),s=t.ZP.div.withConfig({displayName:"guide__ExtLink",componentId:"sc-1jljg35-1"})(["color:blue;font-weight:500;text-align:right;margin-right:8%;"]);e.default=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(c,{children:"_Guia de Juego"}),(0,a.jsx)(o.Z,{file:"content/guia.pdf"}),(0,a.jsx)(s,{children:(0,a.jsx)("a",{href:"".concat(r.O,"/content/guia.pdf"),target:"_blank",rel:"noreferrer",children:"\xbfCargar en una pesta\xf1a nueva?"})})]})}},2054:function(i,e,n){"use strict";n.r(e);var t=n(7294),o=n(2279),r=n(1664),a=n(7379),c=n(6673),s=n(5893),d=a.ZP.div.withConfig({displayName:"know__Cont",componentId:"sc-ktdc9m-0"})(["display:flex;transition:.3s ease;flex-direction:column;"]),l=a.ZP.h3.withConfig({displayName:"know__Title",componentId:"sc-ktdc9m-1"})(["font-size:20px;font-weight:700;"]),p=a.ZP.div.withConfig({displayName:"know__Selector",componentId:"sc-ktdc9m-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:.8em;justify-content:center;align-items:center;margin-bottom:2em;@media screen and (max-width:800px){grid-template-columns:repeat(2,1fr);}"]),m=a.ZP.div.withConfig({displayName:"know__Box",componentId:"sc-ktdc9m-3"})(["display:flex;justify-content:center;align-items:center;height:65px;padding:1em;font-weight:bold;background:#FFFFFF;border:2px solid ",";box-sizing:border-box;box-shadow:0px 2px 4px rgba(0,0,0,0.075);border-radius:10px;transition:.3s ease;:hover{border:2px solid #172BEF;cursor:pointer;}"],(function(i){return i.act?"#172BEF":"#D8DEF3"})),u=a.ZP.h4.withConfig({displayName:"know__SubTitle",componentId:"sc-ktdc9m-4"})(["padding:.5em 0;margin:0 0 .5em 0;border-bottom:2px solid #bbb;max-width:500px;:hover{color:#172BEF;cursor:pointer;}"]),f=a.ZP.p.withConfig({displayName:"know__Text",componentId:"sc-ktdc9m-5"})(["margin:0 0 1em .5em;max-width:500px;text-align:justify;font-size:",";height:",";color:#4F4F4F;transition:.3s ease;"],(function(i){return i.act?".9em":"0"}),(function(i){return i.act?"auto":"0"})),x=a.ZP.img.withConfig({displayName:"know__Image",componentId:"sc-ktdc9m-6"})(["margin-right:1em;"]),h=a.ZP.button.withConfig({displayName:"know__Button",componentId:"sc-ktdc9m-7"})(["width:150px;color:#172BEF;font-weight:bold;padding:.5em 1em;margin:1em auto;border:2px solid #172BEF;border-radius:.5em;transition:.3s ease;:hover{transform:scale(1.05);background:#172BEF;cursor:pointer;color:white;}"]);e.default=function(){var i=(0,c.ar)(),e=(0,t.useState)(i[0]),n=e[0],a=e[1],g=(0,t.useState)(0),w=g[0],j=g[1];return(0,s.jsxs)(d,{children:[(0,s.jsx)(l,{children:"_Conoce Quanticon Valley"}),(0,s.jsx)(p,{children:i.map((function(i){return(0,s.jsxs)(m,{act:i.title===n.title,onClick:function(){return a(i)},children:[(0,s.jsx)(x,{src:"".concat(o.O,"/").concat(i.img)}),i.title]},i.title)}))}),(0,s.jsx)(u,{onClick:function(){return j(0)},children:"1. Objetivo de esta seccion"}),(0,s.jsx)(f,{act:0===w,children:n.obj}),(0,s.jsx)(u,{onClick:function(){return j(1)},children:"2. Que encontraras aqui?"}),(0,s.jsx)(f,{act:1===w,children:n.cont}),(0,s.jsx)(u,{onClick:function(){return j(2)},children:"3. Lo mas relevante"}),(0,s.jsx)(f,{act:2===w,children:n.imp}),(0,s.jsx)(r.default,{href:"/".concat(n.link),children:(0,s.jsx)(h,{children:"Visita esta secci\xf3n "})})]})}},1459:function(i,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/[type]",function(){return n(6215)}])},1163:function(i,e,n){i.exports=n(9898)},3414:function(){},172:function(){},2001:function(){},3779:function(){},2258:function(){}},function(i){i.O(0,[577,735,638,180,774,888,179],(function(){return e=1459,i(i.s=e);var e}));var e=i.O();_N_E=e}]);