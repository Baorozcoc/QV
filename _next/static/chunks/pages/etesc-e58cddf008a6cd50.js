(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{5627:function(e,n,t){"use strict";var r=t(2279),i=(t(1664),t(7379)),a=t(5893),o=i.ZP.div.withConfig({displayName:"SrcItemList__SrcGrid",componentId:"sc-let18i-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));grid-auto-rows:auto;grid-gap:20px 40px;transition:0.3s ease;"]),s=i.ZP.div.withConfig({displayName:"SrcItemList__SrcList",componentId:"sc-let18i-1"})(["display:flex;flex-direction:column;color:blue;"]),c=i.ZP.div.withConfig({displayName:"SrcItemList__Src",componentId:"sc-let18i-2"})(["display:flex;color:#000;align-items:center;margin-bottom:10px;margin-top:10px;margin-left:20px;transition:0.3s;:hover{transform:scale(1.02);color:#1920EF;}"]),d=i.ZP.img.withConfig({displayName:"SrcItemList__Img",componentId:"sc-let18i-3"})(["width:25px;"]),l=i.ZP.div.withConfig({displayName:"SrcItemList__Title",componentId:"sc-let18i-4"})(["margin-left:1em;font-size:1em;"]),p=function(e){var n=e.data,t=e.src;return(0,a.jsx)("a",{href:n[1],target:"_blank",rel:"noreferrer",children:(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{src:"".concat(r.O,"/imgs/items/").concat(t,".png")}),(0,a.jsx)(l,{children:n[0]})]})})};n.Z=function(e){var n=e.data,t=[];for(var r in n)t.push({name:r,cont:n[r]});return(0,a.jsx)(o,{children:t.map((function(e){return e.cont[0]?(0,a.jsxs)(s,{children:[(0,a.jsxs)("h4",{children:["_",e.name]}),e.cont.map((function(n){return(0,a.jsx)(p,{data:n,src:e.name},n[0])}))]},e.name):null}))})}},1150:function(e,n,t){"use strict";var r=t(9499),i=t(2640),a=t(7379),o=t(4786),s=t(5893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=a.ZP.div.withConfig({displayName:"groupSel__GrContainer",componentId:"sc-18e3el9-0"})(["display:flex;justify-content:center;"]),p=a.ZP.div.withConfig({displayName:"groupSel__Group",componentId:"sc-18e3el9-1"})(["margin:10px 8px 5px 8px;padding:5px 10px;border-radius:5px;border:2px solid ",";font-weight:bold;font-size:1.2em;text-align:center;background-color:",";color:",";transition:0.3s;:hover{transform:scale(1.03);cursor:pointer;border:2px solid #172bef;color:#172bef;}"],(function(e){return e.primary?"#172bef":null}),(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":"#999"}));n.Z=function(){var e=(0,o.L)(),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=function(e){r(d(d({},t),{},{group:e}))};return(0,s.jsxs)(l,{children:[(0,s.jsx)(p,{onClick:function(){return a("dos")},primary:"dos"===t.group,children:"Horario 2 - 4 pm"}),(0,s.jsx)(p,{onClick:function(){return a("cuatro")},primary:"cuatro"===t.group,children:"Horario 4 - 6 pm"})]})}},9454:function(e,n,t){"use strict";var r=t(7379),i=t(5893),a=r.ZP.div.withConfig({displayName:"header__Jumbo",componentId:"sc-t8fmwg-0"})(["margin:90px 0 30px 0;border-radius:20px;background-color:",";position:relative;padding:40px 10px 20px 20px;@media screen and (max-width:1000px){padding:15px;}"],(function(e){return e.primary?"#1920EF":"#FFC024"})),o=r.ZP.h1.withConfig({displayName:"header__Title",componentId:"sc-t8fmwg-1"})(["font-weight:600;font-size:2.5em;margin:0px;color:",";@media screen and (max-width:1000px){width:100%;font-size:1.8em;}"],(function(e){return e.primary?"#FFF":"#000"})),s=r.ZP.h4.withConfig({displayName:"header__Desc",componentId:"sc-t8fmwg-2"})(["font-weight:",";font-size:",";margin:0px;width:50%;color:",";@media screen and (max-width:1000px){width:100%;font-size:1em;}"],(function(e){return e.primary?"bold":null}),(function(e){return e.primary?"1.4em":"1em"}),(function(e){return e.primary?"#FFC024":"#000"})),c=r.ZP.img.withConfig({displayName:"header__Img",componentId:"sc-t8fmwg-3"})(["position:absolute;width:38%;bottom:0;right:0;z-index:1;border-radius:20px;@media screen and (max-width:1000px){width:0px;}"]);n.Z=function(e){var n=e.title,t=e.desc,r=e.imgH,d=e.primary;return(0,i.jsxs)(a,{primary:d,children:[(0,i.jsx)(o,{primary:d,children:n}),(0,i.jsx)(s,{primary:d,children:t}),(0,i.jsx)(c,{src:r,primary:d})]})}},4804:function(e,n,t){"use strict";var r=t(9499),i=t(2640),a=t(7379),o=t(4786),s=t(6673),c=t(5893);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=a.ZP.div.withConfig({displayName:"pisoSel__Selector",componentId:"sc-198y8og-0"})(["display:flex;flex-wrap:wrap;align-items:center;text-align:center;justify-content:space-evenly;padding:5px 5%;margin:20px 0;background-color:#e0e5ed;border-radius:20px;color:#1920EF;font-weight:bold;font-size:1em;@media screen and (max-width:1000px){padding:5px 15%;}"]),u=a.ZP.div.withConfig({displayName:"pisoSel__SelItem",componentId:"sc-198y8og-1"})(["border-radius:20px;padding:5px 10px;margin:5px 0px;white-space:nowrap;transition:0.5s;background-color:",";color:",";:hover{transform:scale(1.2);background-color:#979FF5;color:#ffffff;cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));n.Z=function(){var e=(0,o.L)(),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=(0,s.yz)();return(0,c.jsx)(p,{children:[1,2,3,4,5,6].map((function(e){return(0,c.jsxs)(u,{onClick:function(){var n;(n=e)>a||r(l(l({},t),{},{piso:n}))},primary:t.piso===e,children:["Piso ",e]},e.toString())}))})}},6609:function(e,n,t){"use strict";t.r(n);var r=t(7379).ZP.h2.withConfig({displayName:"TitleCont",componentId:"sc-1hkwn92-0"})(["font-weight:600;font-size:1.5em;line-height:52px;letter-spacing:-0.03em;color:#272835;margin:0px;display:inline;z-index:2"]);n.default=r},6885:function(e,n,t){"use strict";t.r(n);var r=t(7379),i=(t(6673),t(7294)),a=t(5893),o=r.ZP.div.withConfig({displayName:"listItems__Container",componentId:"sc-1e439g2-0"})([""]),s=r.ZP.div.withConfig({displayName:"listItems__Organiz",componentId:"sc-1e439g2-1"})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]),c=r.ZP.div.withConfig({displayName:"listItems__Objeto",componentId:"sc-1e439g2-2"})(["width:400px;"]),d=r.ZP.h3.withConfig({displayName:"listItems__Subtitle",componentId:"sc-1e439g2-3"})(["margin-left:10px;"]),l=r.ZP.p.withConfig({displayName:"listItems__Content",componentId:"sc-1e439g2-4"})(["margin-left:20px;"]),p=function(e){var n=e.data;return 0==n[1].length?null:(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{children:n[0]}),n[1].map((function(e){return(0,a.jsx)(l,{children:(0,a.jsxs)("p",{children:[(0,a.jsxs)("b",{children:["\u25a0 ",e[0],": "]}),e[1]]})},e)}))]})},u=function(e){var n=e.data;return 0==n[1].length?null:(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{children:n[0]}),n[1].map((function(e){return(0,a.jsx)(l,{children:(0,a.jsxs)("a",{href:e[1],target:"_blank",rel:"noreferrer",children:["\u25a0 ",e[0]]})},e)}))]})},m=function(e){var n=e.data0,t=e.data1,r=e.data2,i=e.data3;return 0==t[1].length&&0==r[1].length&&0==i[1].length?null:(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{children:n[0]}),(0,a.jsx)(u,{data:t}),(0,a.jsx)(u,{data:r}),(0,a.jsx)(u,{data:i})]})};n.default=function(e){var n=e.tipo,t=e.data,r=(0,i.useState)(!1),c=r[0],d=r[1];return(0,i.useEffect)((function(){d(!0)})),(0,a.jsx)(o,{children:c?(0,a.jsxs)("div",{children:[1===n?(0,a.jsxs)(s,{children:[(0,a.jsx)(p,{data:t["1_1"]}),(0,a.jsx)(u,{data:t["1_2"]}),(0,a.jsx)(u,{data:t["1_4"]}),(0,a.jsx)(m,{data0:t["1_3"],data1:t["1_3_1"],data2:t["1_3_2"],data3:t["1_3_3"]})]}):null,2===n?(0,a.jsxs)(s,{children:[(0,a.jsx)(p,{data:t["2_1"]}),(0,a.jsx)(u,{data:t["2_2"]}),(0,a.jsx)(u,{data:t["2_4"]}),(0,a.jsx)(m,{data0:t["2_3"],data1:t["2_3_1"],data2:t["2_3_2"],data3:t["2_3_3"]})]}):null,3===n?(0,a.jsx)(s,{children:(0,a.jsx)(u,{data:t[3]})}):null]}):null})}},1363:function(e,n,t){"use strict";t.r(n);var r=t(2640),i=t(7294),a=t(2279),o=t(6673),s=t(4786),c=t(6885),d=t(7379),l=(t(5627),t(8180)),p=t(9454),u=t(4804),m=t(1150),f=t(6609),x=t(5893),g="".concat(a.O,"/imgs/header/etesc.png"),h=d.ZP.h2.withConfig({displayName:"etesc__Title",componentId:"sc-a18d0j-0"})(["font-weight:600;font-size:35px;line-height:52px;letter-spacing:-0.03em;color:#272835;margin:0;z-index:2;"]),j=d.ZP.div.withConfig({displayName:"etesc__Margin",componentId:"sc-a18d0j-1"})(["margin:0 20px;"]),_=d.ZP.div.withConfig({displayName:"etesc__Card",componentId:"sc-a18d0j-2"})(["border-radius:10px;"]),y=d.ZP.div.withConfig({displayName:"etesc__Head",componentId:"sc-a18d0j-3"})(["background-color:#e0e5ed;padding:5px;padding-left:10px;border-radius:10px;cursor:pointer;"]),w=d.ZP.img.withConfig({displayName:"etesc__Icon",componentId:"sc-a18d0j-4"})(["display:inline;margin-left:10px;margin-right:30px;"]),b=d.ZP.div.withConfig({displayName:"etesc__Content",componentId:"sc-a18d0j-5"})(["transition:0.8s all;max-height:","px;overflow:hidden;padding:10px;@media screen and (max-width:800px){max-height:","px;}"],(function(e){return e.alt}),(function(e){return 2*e.alt}));n.default=function(){var e=(0,s.L)(),n=(0,r.Z)(e,2),t=n[0],d=(n[1],t.group?t.group:"dos"),v=t.piso?t.piso:1,I=(0,o.a5)(v),O=(0,o.LR)(),P=(0,i.useState)({}),C=P[0],Z=P[1];(0,i.useEffect)((function(){Z((0,o.ov)(d,v))}),[d,v]);var N=(0,i.useState)(0),S=N[0],E=N[1],k=(0,i.useState)(0),z=k[0],F=k[1],L=(0,i.useState)(0),D=L[0],T=L[1];function H(e){1===e&&E(0===S?800:0),2===e&&F(0===z?800:0),3===e&&T(0===D?800:0)}return(0,x.jsxs)(l.Z,{pg:"ETESC",children:[(0,x.jsx)(p.Z,{title:"ETESC",desc:"Edificio Tecnol\xf3gico de Empredimiento Sostenible",imgH:g}),(0,x.jsxs)(j,{children:[(0,x.jsx)("p",{children:"En esta secci\xf3n podras realizar los entregables m\xe1s importantes en el desarrollo de tu proyecto los cuales te permitiran avanzar al proximo piso. Con estos y otros retos podras ganar Innocoins y Puntos de Victoria ."}),(0,x.jsx)("p",{children:"Por favor selecciona tu grupo, \xa1ten en cuenta que el contenido var\xeda seg\xfan el grupo que escojas!"}),(0,x.jsx)(m.Z,{}),(0,x.jsx)(u.Z,{}),(0,x.jsx)(h,{children:I}),(0,x.jsxs)(_,{children:[(0,x.jsxs)(y,{onClick:function(){return H(1)},children:[0===S?(0,x.jsx)(w,{src:"".concat(a.O,"/imgs/main/Icon_flecha_abajo.png")}):(0,x.jsx)(w,{src:"".concat(a.O,"/imgs/main/Icon_flecha_arriba.png")}),(0,x.jsx)(f.default,{children:"Retos de piso"})]}),(0,x.jsx)(b,{alt:S,children:v<=O?(0,x.jsx)(c.default,{data:C,tipo:1}):null})]}),(0,x.jsxs)(_,{children:[(0,x.jsxs)(y,{onClick:function(){return H(2)},children:[0===z?(0,x.jsx)(w,{src:"".concat(a.O,"/imgs/main/Icon_flecha_abajo.png")}):(0,x.jsx)(w,{src:"".concat(a.O,"/imgs/main/Icon_flecha_arriba.png")}),(0,x.jsx)(f.default,{children:"Retos adicionales"})]}),(0,x.jsx)(b,{alt:z,children:v<=O?(0,x.jsx)(c.default,{data:C,tipo:2}):null})]}),(0,x.jsxs)(_,{children:[(0,x.jsxs)(y,{onClick:function(){return H(3)},children:[0===D?(0,x.jsx)(w,{src:"".concat(a.O,"/imgs/main/Icon_flecha_abajo.png")}):(0,x.jsx)(w,{src:"".concat(a.O,"/imgs/main/Icon_flecha_arriba.png")}),(0,x.jsx)(f.default,{children:"Encuestas de percepci\xf3n"})]}),(0,x.jsx)(b,{alt:D,children:v<=O?(0,x.jsx)(c.default,{data:C,tipo:3}):null})]})]})]})}},8499:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/etesc",function(){return t(1363)}])}},function(e){e.O(0,[735,180,774,888,179],(function(){return n=8499,e(e.s=n);var n}));var n=e.O();_N_E=n}]);