(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{9454:function(e,n,i){"use strict";var r=i(7379),o=i(5893),t=r.ZP.div.withConfig({displayName:"header__Jumbo",componentId:"sc-t8fmwg-0"})(["margin:90px 0 30px 0;border-radius:20px;background-color:",";position:relative;padding:40px 10px 20px 20px;@media screen and (max-width:1000px){padding:15px;}"],(function(e){return e.primary?"#1920EF":"#FFC024"})),s=r.ZP.h1.withConfig({displayName:"header__Title",componentId:"sc-t8fmwg-1"})(["font-weight:600;font-size:2.5em;margin:0px;color:",";@media screen and (max-width:1000px){width:100%;font-size:1.8em;}"],(function(e){return e.primary?"#FFF":"#000"})),a=r.ZP.h4.withConfig({displayName:"header__Desc",componentId:"sc-t8fmwg-2"})(["font-weight:",";font-size:",";margin:0px;width:50%;color:",";@media screen and (max-width:1000px){width:100%;font-size:1em;}"],(function(e){return e.primary?"bold":null}),(function(e){return e.primary?"1.4em":"1em"}),(function(e){return e.primary?"#FFC024":"#000"})),d=r.ZP.img.withConfig({displayName:"header__Img",componentId:"sc-t8fmwg-3"})(["position:absolute;width:38%;bottom:0;right:0;z-index:1;border-radius:20px;@media screen and (max-width:1000px){width:0px;}"]);n.Z=function(e){var n=e.title,i=e.desc,r=e.imgH,c=e.primary;return(0,o.jsxs)(t,{primary:c,children:[(0,o.jsx)(s,{primary:c,children:n}),(0,o.jsx)(a,{primary:c,children:i}),(0,o.jsx)(d,{src:r,primary:c})]})}},2506:function(e,n,i){"use strict";i.r(n);var r=i(2279),o=i(2004),t=i(6673),s=i(7379),a=i(7294),d=i(5893),c=s.ZP.div.withConfig({displayName:"mentores__Content",componentId:"sc-15xu8yk-0"})(["height:30em;display:flex;text-align:center;@media screen and (max-width:1300px){flex-direction:column;height:40em;}"]),l=s.ZP.div.withConfig({displayName:"mentores__Video",componentId:"sc-15xu8yk-1"})(["width:70%;@media screen and (max-width:1300px){width:100%;height:900px;}"]),p=s.ZP.div.withConfig({displayName:"mentores__Nav",componentId:"sc-15xu8yk-2"})(["width:35%;height:100%;overflow:auto;padding:10px;border-radius:10px;::-webkit-scrollbar-track{border:none;padding:10px 0;margin:10px 0;background-color:none;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#ccc;border:1px solid rgba(0,0,0,0);}@media screen and (max-width:1300px){width:100%;height:550px;}"]),m=s.ZP.img.withConfig({displayName:"mentores__Imagen",componentId:"sc-15xu8yk-3"})(["cursor:pointer;max-width:95%;margin:5px;:hover{transform:scale(1.05);}"]);n.default=function(){var e=(0,t.aS)(),n=(0,a.useState)(0),i=n[0],s=n[1];return(0,d.jsxs)(c,{children:[(0,d.jsx)(l,{children:""===e[i][0]?(0,d.jsx)("iframe",{src:"https://prezi.com/v/embed/dgu_3zxmqcmt/",id:"iframe_container",webkitallowfullscreen:"",mozallowfullscreen:"",allow:"autoplay; fullscreen",height:"100%",width:"100%"}):(0,d.jsx)(o.Z,{url:e[i][0],className:"react-player",width:"100%",height:"100%",controls:!0})}),(0,d.jsx)(p,{children:e.map((function(e,n){return(0,d.jsx)(m,{onClick:function(){return s(n)},src:"".concat(r.O,"/imgs/ment/").concat(e[1])},n)}))})]})}},2033:function(e,n,i){"use strict";i.r(n);var r=i(2279),o=i(7294),t=i(7379),s=i(8180),a=i(9454),d=i(2506),c=i(5892),l=i(5893),p="".concat(r.O,"/imgs/header/zones.png"),m=t.ZP.div.withConfig({displayName:"actors__Margin",componentId:"sc-1gtrkzr-0"})(["margin:0 20px;"]),h=t.ZP.div.withConfig({displayName:"actors__Option",componentId:"sc-1gtrkzr-1"})(["font-size:1.2rem;font-weight:700;margin-right:10px;margin-bottom:10px;border-bottom:",";color:",";:hover{cursor:pointer;}@media screen and (max-width:800px){font-size:1rem;}"],(function(e){return e.selected?"3px solid #172BEF":"0px"}),(function(e){return e.selected?"black":"#999"})),u=t.ZP.div.withConfig({displayName:"actors__Opciones",componentId:"sc-1gtrkzr-2"})(["display:flex;margin-bottom:20px;"]);n.default=function(){var e=(0,o.useState)(!0),n=e[0],i=e[1];function r(e){i(e)}return(0,l.jsxs)(s.Z,{pg:"Actores",children:[(0,l.jsx)(a.Z,{title:"Actores",desc:"Aqui puedes conocer a los actores del juego",imgH:p}),(0,l.jsxs)(m,{children:[(0,l.jsxs)(u,{children:[(0,l.jsx)(h,{selected:n,onClick:function(){return r(!0)},children:"MENTORES"}),(0,l.jsx)(h,{selected:!n,onClick:function(){return r(!1)},children:"ASESORES"})]}),n?(0,l.jsx)(d.default,{}):(0,l.jsx)(c.default,{active:!0})]})]})}},5892:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return I}});var r=i(2640),o=i(7294),t=i(2279),s=i(6673),a=i(3303),d=i(7379),c=i(5893),l=d.ZP.div.withConfig({displayName:"asesorContact__Container",componentId:"sc-12zfhy5-0"})(["padding:.5em 1em;h3{color:blue;}h3,h4,p{margin:.3em 0;}@media screen and (max-width:600px){padding:0em .5em;transform:scale(0.95);}"]),p=d.ZP.ul.withConfig({displayName:"asesorContact__Ul",componentId:"sc-12zfhy5-1"})(["padding:0 1em;"]),m=d.ZP.div.withConfig({displayName:"asesorContact__Li",componentId:"sc-12zfhy5-2"})(["font-size:.9em;margin:.5em 0;"]),h=function(){return(0,c.jsxs)(p,{children:[(0,c.jsxs)(m,{children:["Preparar un correo con el Asunto: ",(0,c.jsx)("strong",{children:"TPI-SolicitudAsesoria-GXX"})," donde XX es el numero de tu grupo"]}),(0,c.jsxs)(m,{children:["En el cuerpo del correo escribe tu ",(0,c.jsx)("strong",{children:"Horario"})," (2-4pm o 4-6pm), el ",(0,c.jsx)("strong",{children:"Numero y Nombre de tu grupo"})," y ",(0,c.jsx)("strong",{children:"el Nombre del Asesor"})," con el que deseas solicitar una reunion."]}),(0,c.jsxs)(m,{children:["Adicionalmente puedes definir un ",(0,c.jsx)("strong",{children:"Dia y Hora"})," en la que tu grupo podria estar disponible. (la fecha y hora final dependera de la disponibilidad del asesor)"]}),(0,c.jsxs)(m,{children:["Enviar el mensaje al ",(0,c.jsx)("strong",{children:"Monitor Correspondiente"})," que aparece abajo, ellos se comunicaran contigo y organizaran una fecha para reunirse con el asesor."]})]})},u=function(e){var n=e.asesor;return(0,c.jsxs)(l,{children:[(0,c.jsx)("h3",{children:"Instrucciones para solicitar una Asesoria"}),(0,c.jsx)("p",{children:"Si deseas recibir una asesoria para apoyar el desarrollo de tu proyecto debes:"}),(0,c.jsx)(h,{}),(0,c.jsx)("h4",{children:"Monitor :"}),(0,c.jsxs)("p",{children:[n.nombreMon," - ",(0,c.jsx)("strong",{children:n.correoMon})]})]})},x=d.ZP.div.withConfig({displayName:"virt__Cont",componentId:"sc-nj1z2o-0"})(["padding:0px 20px;display:",";transition:.3s ease;flex-direction:column;"],(function(e){return e.active?"flex":"none"})),g=d.ZP.div.withConfig({displayName:"virt__AsesorCard",componentId:"sc-nj1z2o-1"})(["background-color:#ffffff;box-shadow:0px 6px 6px rgba(0,0,0,0.15);border-radius:10px;padding:15px;margin:1em 5%;display:grid;grid-template-columns:repeat(1,1fr 2fr 2fr);grid-gap:10px;@media screen and (max-width:620px){grid-template-columns:1fr;}"]),f=d.ZP.img.withConfig({displayName:"virt__Img",componentId:"sc-nj1z2o-2"})(["border-radius:2em;margin:auto;width:110px;height:110px;"]),w=d.ZP.h4.withConfig({displayName:"virt__Name",componentId:"sc-nj1z2o-3"})(["margin:0;"]),j=d.ZP.h5.withConfig({displayName:"virt__Rol",componentId:"sc-nj1z2o-4"})(["margin:0;"]),_=d.ZP.p.withConfig({displayName:"virt__Desc",componentId:"sc-nj1z2o-5"})(["font-weight:300;font-size:12px;line-height:14px;"]),b=d.ZP.div.withConfig({displayName:"virt__CoinsCont",componentId:"sc-nj1z2o-6"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;@media screen and (max-width:620px){align-items:flex-start;}"]),y=d.ZP.span.withConfig({displayName:"virt__AsesorField",componentId:"sc-nj1z2o-7"})(["text-align:center;color:#BC8600;background-color:#ffc1244f;border-radius:4px;margin:0;padding:4px 10px;font-weight:bold;"]),C=d.ZP.p.withConfig({displayName:"virt__CostLabel",componentId:"sc-nj1z2o-8"})(["font-weight:bold;font-size:10px;color:#444;margin:20px 0 0 0;"]),v=d.ZP.div.withConfig({displayName:"virt__Coins",componentId:"sc-nj1z2o-9"})(["text-align:end;font-weight:bolder;font-size:26px;color:#0000BB;"]),N=d.ZP.img.withConfig({displayName:"virt__CoinsImg",componentId:"sc-nj1z2o-10"})(["padding:0 10px;"]),z=d.ZP.button.withConfig({displayName:"virt__Button",componentId:"sc-nj1z2o-11"})(["padding:8px 16px;border-radius:5px;border:none;background-color:#172bef;font-weight:bold;font-size:1em;color:white;transition:0.3s;:hover{transform:scale(1.02);cursor:pointer;}"]),I=function(e){var n=e.active,i=(0,s.Cf)(),d=(0,a.d)(!1),l=(0,r.Z)(d,3),p=l[0],m=l[1],h=l[2],I=(0,o.useState)({}),Z=I[0],P=I[1];return(0,c.jsxs)(x,{active:n,children:[i.map((function(e){return(0,c.jsxs)(g,{children:[(0,c.jsx)(f,{src:"".concat(t.O,"/imgs/asesorVirtual/").concat(e.img)}),(0,c.jsxs)("div",{children:[(0,c.jsx)(w,{children:e.nombre}),(0,c.jsx)(j,{children:e.rol}),(0,c.jsx)(_,{children:e.desc.substr(0,295)+"..."})]}),(0,c.jsxs)(b,{children:[(0,c.jsx)(y,{children:e.campo}),(0,c.jsxs)(v,{children:[(0,c.jsx)(C,{children:"Costo Asesoria"}),(0,c.jsx)(N,{src:"".concat(t.O,"/imgs/innocoin1.png")}),e.costo]}),(0,c.jsx)(z,{onClick:function(){return function(e){P(e),m()}(e)},children:"Mas Informaci\xf3n"})]})]},e.nombre)})),(0,c.jsx)(a.u,{isOpen:p,closeM:h,title:"Contacta a tu Asesor",width:"400px",children:(0,c.jsx)(u,{asesor:Z})})]})}},5522:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/actors",function(){return i(2033)}])}},function(e){e.O(0,[735,4,180,774,888,179],(function(){return n=5522,e(e.s=n);var n}));var n=e.O();_N_E=n}]);