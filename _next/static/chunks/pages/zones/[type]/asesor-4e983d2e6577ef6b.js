(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{5627:function(e,n,i){"use strict";var r=i(2279),t=(i(1664),i(7379)),o=i(5893),s=t.ZP.div.withConfig({displayName:"SrcItemList__SrcGrid",componentId:"sc-let18i-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));grid-auto-rows:auto;grid-gap:20px 40px;transition:0.3s ease;"]),a=t.ZP.div.withConfig({displayName:"SrcItemList__SrcList",componentId:"sc-let18i-1"})(["display:flex;flex-direction:column;color:blue;"]),c=t.ZP.div.withConfig({displayName:"SrcItemList__Src",componentId:"sc-let18i-2"})(["display:flex;color:#000;align-items:center;margin-bottom:10px;margin-top:10px;margin-left:20px;transition:0.3s;:hover{transform:scale(1.02);color:#1920EF;}"]),d=t.ZP.img.withConfig({displayName:"SrcItemList__Img",componentId:"sc-let18i-3"})(["width:25px;"]),p=t.ZP.div.withConfig({displayName:"SrcItemList__Title",componentId:"sc-let18i-4"})(["margin-left:1em;font-size:1em;"]),l=function(e){var n=e.data,i=e.src;return(0,o.jsx)("a",{href:n[1],target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(c,{children:[(0,o.jsx)(d,{src:"".concat(r.O,"/imgs/items/").concat(i,".png")}),(0,o.jsx)(p,{children:n[0]})]})})};n.Z=function(e){var n=e.data,i=[];for(var r in n)i.push({name:r,cont:n[r]});return(0,o.jsx)(s,{children:i.map((function(e){return e.cont[0]?(0,o.jsxs)(a,{children:[(0,o.jsxs)("h4",{children:["_",e.name]}),e.cont.map((function(n){return(0,o.jsx)(l,{data:n,src:e.name},n[0])}))]},e.name):null}))})}},1150:function(e,n,i){"use strict";var r=i(9499),t=i(2640),o=i(7379),s=i(4786),a=i(5893);function c(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var p=o.ZP.div.withConfig({displayName:"groupSel__GrContainer",componentId:"sc-18e3el9-0"})(["display:flex;justify-content:center;"]),l=o.ZP.div.withConfig({displayName:"groupSel__Group",componentId:"sc-18e3el9-1"})(["margin:10px 8px 5px 8px;padding:5px 10px;border-radius:5px;border:2px solid ",";font-weight:bold;font-size:1.2em;text-align:center;background-color:",";color:",";transition:0.3s;:hover{transform:scale(1.03);cursor:pointer;border:2px solid #172bef;color:#172bef;}@media screen and (max-width:800px){font-size:.7em;}"],(function(e){return e.primary?"#172bef":null}),(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":"#999"}));n.Z=function(){var e=(0,s.L)(),n=(0,t.Z)(e,2),i=n[0],r=n[1],o=function(e){r(d(d({},i),{},{group:e}))};return(0,a.jsxs)(p,{children:[(0,a.jsx)(l,{onClick:function(){return o("dos")},primary:"dos"===i.group,children:"Horario 2 - 4 pm"}),(0,a.jsx)(l,{onClick:function(){return o("cuatro")},primary:"cuatro"===i.group,children:"Horario 4 - 6 pm"})]})}},4804:function(e,n,i){"use strict";var r=i(9499),t=i(2640),o=i(7379),s=i(4786),a=i(4530),c=i(5893);function d(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function p(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?d(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var l=o.ZP.div.withConfig({displayName:"pisoSel__Selector",componentId:"sc-198y8og-0"})(["display:flex;flex-wrap:wrap;align-items:center;text-align:center;justify-content:space-evenly;padding:5px 5%;margin:20px 0;background-color:#e0e5ed;border-radius:20px;color:#1920EF;font-weight:bold;font-size:1em;@media screen and (max-width:1000px){padding:5px 15%;}@media screen and (max-width:800px){font-size:.8em;}"]),u=o.ZP.div.withConfig({displayName:"pisoSel__SelItem",componentId:"sc-198y8og-1"})(["border-radius:20px;padding:5px 10px;margin:5px 0px;white-space:nowrap;transition:0.5s;background-color:",";color:",";:hover{transform:scale(1.2);background-color:#979FF5;color:#ffffff;cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null}));n.Z=function(){var e=(0,s.L)(),n=(0,t.Z)(e,2),i=n[0],r=n[1],o=(0,a.yz)();return(0,c.jsx)(l,{children:[1,2,3,4,5,6].map((function(e){return(0,c.jsxs)(u,{onClick:function(){var n;(n=e)>o||r(p(p({},i),{},{piso:n}))},primary:i.piso===e,children:["Piso ",e]},e.toString())}))})}},1026:function(e,n,i){"use strict";var r=i(7379),t=i(1163),o=i(1664),s=i(2279),a=i(4530),c=i(5893),d=r.ZP.div.withConfig({displayName:"zoneHeader__Container",componentId:"sc-1oy950j-0"})(["display:flex;align-items:flex-end;justify-content:flex-start;margin:40px 0em;"]),p=r.ZP.div.withConfig({displayName:"zoneHeader__Cont",componentId:"sc-1oy950j-1"})(["padding:10px 20px;"]),l=r.ZP.h1.withConfig({displayName:"zoneHeader__Title",componentId:"sc-1oy950j-2"})(["font-size:30px;letter-spacing:-0.03em;margin:0;"]),u=r.ZP.h4.withConfig({displayName:"zoneHeader__Desc",componentId:"sc-1oy950j-3"})(["font-weight:normal;font-size:14px;margin:0;"]),m=r.ZP.img.withConfig({displayName:"zoneHeader__Img",componentId:"sc-1oy950j-4"})(["margin:30px 0 0 0;max-width:100px;max-height:90px;"]),f=r.ZP.img.withConfig({displayName:"zoneHeader__Back",componentId:"sc-1oy950j-5"})(["height:1.4em;transition:0.3s ease;:hover{transform:scale(1.1);cursor:pointer;}"]);n.Z=function(e){var n=e.zone,i=((0,t.useRouter)(),(0,a.Ug)()[n]),r=i.name,x=i.desc,g=i.img;return(0,c.jsxs)(d,{children:[(0,c.jsx)(o.default,{href:"/zones",passHref:!0,children:(0,c.jsx)(f,{src:"".concat(s.O,"/imgs/items/back.png")})}),(0,c.jsxs)(p,{children:[(0,c.jsx)(m,{src:"".concat(s.O).concat(g)}),(0,c.jsx)(l,{children:r}),(0,c.jsx)(u,{children:x})]})]})}},6204:function(e,n,i){"use strict";i.r(n);var r=i(7294),t=i(7379),o=i(4530),s=i(5893),a=t.ZP.div.withConfig({displayName:"faqs__Cont",componentId:"sc-t90390-0"})(["padding:0px 20px;display:",";transition:.3s ease;flex-direction:column;"],(function(e){return e.active?"flex":"none"})),c=t.ZP.div.withConfig({displayName:"faqs__Title",componentId:"sc-t90390-1"})(["font-weight:bold;font-size:18px;line-height:27px;margin:10px 0px 30px 0px;"]),d=t.ZP.div.withConfig({displayName:"faqs__Item",componentId:"sc-t90390-2"})(["align-self:center;border:1.5px solid #AEBCD9;box-sizing:border-box;border-radius:7px;padding:20px 20px;margin:15px 25px 15px 20px;width:90%;text-align:justify;transition:all 0.2s ease;box-shadow:",";p{overflow:hidden;max-height:",";font-size:14px;line-height:19px;color:#4F4F4F;padding:",";margin:0px;transition:all 0.2s ease-in-out;}"],(function(e){return e.active?"0px 6px 8px rgba(0, 0, 0, 0.3)":null}),(function(e){return e.active?"120px":"0px"}),(function(e){return e.active?"5px 10px":"0px"})),p=t.ZP.div.withConfig({displayName:"faqs__ItemTitle",componentId:"sc-t90390-3"})(["font-weight:600;font-size:15px;line-height:22px;color:#172BEF;margin:0px;transition:all 0.2s ease;:hover{transform:scale(1.01);}"]);n.default=function(e){var n=e.active,i=(0,o.kI)(),t=(0,r.useState)(""),l=t[0],u=t[1];return(0,s.jsxs)(a,{active:n,children:[(0,s.jsx)(c,{children:"_Lo que m\xe1s nos preguntan"}),i.map((function(e){return(0,s.jsxs)(d,{id:e.menu,active:e.menu===l,children:[(0,s.jsx)(p,{onClick:function(){return function(e){if(e===l)return u("");u(e)}(e.menu)},children:e.name}),(0,s.jsx)("p",{children:e.desc})]},e.menu)}))]})}},4078:function(e,n,i){"use strict";i.r(n);var r=i(1163),t=i(1664),o=i(7379),s=i(8180),a=i(1026),c=i(4221),d=i(5892),p=(i(6204),i(5893)),l=[{title:"ASESORES VIRTUALES",link:"/zones/vir/asesor",type:"vir"},{title:"CONTENIDO",link:"/zones/src/asesor",type:"src"}],u=o.ZP.div.withConfig({displayName:"asesor__SelContainer",componentId:"sc-xqya9-0"})(["display:flex;flex-wrap:wrap;align-items:center;margin:.8em 0 3em 1em;min-height:3em;"]),m=o.ZP.span.withConfig({displayName:"asesor__SelItem",componentId:"sc-xqya9-1"})(["margin:0 10px;padding:5px 0;font-weight:bold;font-size:","em;color:",";border-bottom:solid "," blue;transition:.3s ease;:hover{transform:translatey(-2px);cursor:pointer;}"],(function(e){return e.active?"1.2":"1"}),(function(e){return e.active?"black":"grey"}),(function(e){return e.active?"3px":"0px"})),f=function(e){var n=e.type;return(0,p.jsx)(u,{children:l.map((function(e){return(0,p.jsx)(t.default,{href:e.link,passHref:!0,children:(0,p.jsx)(m,{active:n===e.type,children:e.title})},e.title)}))})};n.default=function(){var e=(0,r.useRouter)().query.type;return(0,p.jsxs)(s.Z,{pg:"Zonas Comunes",children:[(0,p.jsx)(a.Z,{zone:2}),(0,p.jsx)(f,{type:e}),(0,p.jsx)(c.default,{active:"src"===e}),(0,p.jsx)(d.default,{active:"vir"===e})]})}},4221:function(e,n,i){"use strict";i.r(n);var r=i(2640),t=i(7294),o=i(4786),s=i(7379),a=i(4804),c=i(1150),d=i(5627),p=i(4530),l=i(5893),u=s.ZP.div.withConfig({displayName:"srcs__Cont",componentId:"sc-182l532-0"})(["padding:0px 20px;display:",";transition:.3s ease;"],(function(e){return e.active?"block":"none"}));n.default=function(e){var n=e.active,i=(0,o.L)(),s=(0,r.Z)(i,2),m=s[0],f=(s[1],m.group?m.group:"dos"),x=m.piso?m.piso:1,g=(0,t.useState)({}),h=g[0],j=g[1],y=(0,p.LR)();return(0,t.useEffect)((function(){j((0,p.P9)(f,x))}),[f,x]),(0,l.jsxs)(u,{active:n,children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)(a.Z,{}),x<=y?(0,l.jsx)(d.Z,{data:h}):null]})}},5892:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return Z}});var r=i(2640),t=i(7294),o=i(2279),s=i(4530),a=i(3303),c=i(7379),d=i(5893),p=c.ZP.div.withConfig({displayName:"asesorContact__Container",componentId:"sc-12zfhy5-0"})(["padding:.5em 1em;h3{color:blue;}h3,h4,p{margin:.3em 0;}@media screen and (max-width:600px){padding:0em .5em;transform:scale(0.95);}"]),l=c.ZP.ul.withConfig({displayName:"asesorContact__Ul",componentId:"sc-12zfhy5-1"})(["padding:0 1em;"]),u=c.ZP.div.withConfig({displayName:"asesorContact__Li",componentId:"sc-12zfhy5-2"})(["font-size:.9em;margin:.5em 0;"]),m=function(){return(0,d.jsxs)(l,{children:[(0,d.jsxs)(u,{children:["Preparar un correo con el Asunto: ",(0,d.jsx)("strong",{children:"TPI-SolicitudAsesoria-GXX"})," donde XX es el numero de tu grupo"]}),(0,d.jsxs)(u,{children:["En el cuerpo del correo escribe tu ",(0,d.jsx)("strong",{children:"Horario"})," (2-4pm o 4-6pm), el ",(0,d.jsx)("strong",{children:"Numero y Nombre de tu grupo"})," y ",(0,d.jsx)("strong",{children:"el Nombre del Asesor"})," con el que deseas solicitar una reunion."]}),(0,d.jsxs)(u,{children:["Adicionalmente puedes definir un ",(0,d.jsx)("strong",{children:"Dia y Hora"})," en la que tu grupo podria estar disponible. (la fecha y hora final dependera de la disponibilidad del asesor)"]}),(0,d.jsxs)(u,{children:["Enviar el mensaje al ",(0,d.jsx)("strong",{children:"Monitor Correspondiente"})," que aparece abajo, ellos se comunicaran contigo y organizaran una fecha para reunirse con el asesor."]})]})},f=function(e){var n=e.asesor;return(0,d.jsxs)(p,{children:[(0,d.jsx)("h3",{children:"Instrucciones para solicitar una Asesoria"}),(0,d.jsx)("p",{children:"Si deseas recibir una asesoria para apoyar el desarrollo de tu proyecto debes:"}),(0,d.jsx)(m,{}),(0,d.jsx)("h4",{children:"Monitor :"}),(0,d.jsxs)("p",{children:[n.nombreMon," - ",(0,d.jsx)("strong",{children:n.correoMon})]})]})},x=c.ZP.div.withConfig({displayName:"virt__Cont",componentId:"sc-nj1z2o-0"})(["padding:0px 20px;display:",";transition:.3s ease;flex-direction:column;"],(function(e){return e.active?"flex":"none"})),g=c.ZP.div.withConfig({displayName:"virt__AsesorCard",componentId:"sc-nj1z2o-1"})(["background-color:#ffffff;box-shadow:0px 6px 6px rgba(0,0,0,0.15);border-radius:10px;padding:15px;margin:1em 5%;display:grid;grid-template-columns:repeat(1,1fr 2fr 2fr);grid-gap:10px;@media screen and (max-width:620px){grid-template-columns:1fr;}"]),h=c.ZP.img.withConfig({displayName:"virt__Img",componentId:"sc-nj1z2o-2"})(["border-radius:2em;margin:auto;width:110px;height:110px;"]),j=c.ZP.h4.withConfig({displayName:"virt__Name",componentId:"sc-nj1z2o-3"})(["margin:0;"]),y=c.ZP.h5.withConfig({displayName:"virt__Rol",componentId:"sc-nj1z2o-4"})(["margin:0;"]),v=c.ZP.p.withConfig({displayName:"virt__Desc",componentId:"sc-nj1z2o-5"})(["font-weight:300;font-size:12px;line-height:14px;"]),b=c.ZP.div.withConfig({displayName:"virt__CoinsCont",componentId:"sc-nj1z2o-6"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;@media screen and (max-width:620px){align-items:flex-start;}"]),w=c.ZP.span.withConfig({displayName:"virt__AsesorField",componentId:"sc-nj1z2o-7"})(["text-align:center;color:#BC8600;background-color:#ffc1244f;border-radius:4px;margin:0;padding:4px 10px;font-weight:bold;"]),_=c.ZP.p.withConfig({displayName:"virt__CostLabel",componentId:"sc-nj1z2o-8"})(["font-weight:bold;font-size:10px;color:#444;margin:20px 0 0 0;"]),C=c.ZP.div.withConfig({displayName:"virt__Coins",componentId:"sc-nj1z2o-9"})(["text-align:end;font-weight:bolder;font-size:26px;color:#0000BB;"]),P=c.ZP.img.withConfig({displayName:"virt__CoinsImg",componentId:"sc-nj1z2o-10"})(["padding:0 10px;"]),I=c.ZP.button.withConfig({displayName:"virt__Button",componentId:"sc-nj1z2o-11"})(["padding:8px 16px;border-radius:5px;border:none;background-color:#172bef;font-weight:bold;font-size:1em;color:white;transition:0.3s;:hover{transform:scale(1.02);cursor:pointer;}"]),Z=function(e){var n=e.active,i=(0,s.Cf)(),c=(0,a.d)(!1),p=(0,r.Z)(c,3),l=p[0],u=p[1],m=p[2],Z=(0,t.useState)({}),N=Z[0],z=Z[1];return(0,d.jsxs)(x,{active:n,children:[i.map((function(e){return(0,d.jsxs)(g,{children:[(0,d.jsx)(h,{src:"".concat(o.O,"/imgs/asesorVirtual/").concat(e.img)}),(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{children:e.nombre}),(0,d.jsx)(y,{children:e.rol}),(0,d.jsx)(v,{children:e.desc.substr(0,295)+"..."})]}),(0,d.jsxs)(b,{children:[(0,d.jsx)(w,{children:e.campo}),(0,d.jsxs)(C,{children:[(0,d.jsx)(_,{children:"Costo Asesoria"}),(0,d.jsx)(P,{src:"".concat(o.O,"/imgs/innocoin1.png")}),e.costo]}),(0,d.jsx)(I,{onClick:function(){return function(e){z(e),u()}(e)},children:"Mas Informaci\xf3n"})]})]},e.nombre)})),(0,d.jsx)(a.u,{isOpen:l,closeM:m,title:"Contacta a tu Asesor",width:"400px",children:(0,d.jsx)(f,{asesor:N})})]})}},2039:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zones/[type]/asesor",function(){return i(4078)}])},1163:function(e,n,i){e.exports=i(9898)}},function(e){e.O(0,[735,180,774,888,179],(function(){return n=2039,e(e.s=n);var n}));var n=e.O();_N_E=n}]);