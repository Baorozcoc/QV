(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{6646:function(e,n,t){"use strict";var i=t(4141),a=t(2279),o=t(7379),r=(t(8177),t(5893)),c=o.ZP.div.withConfig({displayName:"pdf__Center",componentId:"sc-fahwqw-0"})(["width:100%;text-align:center;"]),s=o.ZP.div.withConfig({displayName:"pdf__Container",componentId:"sc-fahwqw-1"})(["height:800px;width:90%;margin:0 auto;@media screen and (max-width:1210px){height:580px;}@media screen and (max-width:1000px){height:400px;}@media screen and (max-width:800px){height:530px;width:100%;}"]);n.Z=function(e){var n=e.file,t=e.choice,o=void 0===t?0:t;return console.log(n),(0,r.jsx)(c,{children:(0,r.jsx)(i.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js",children:(0,r.jsx)(s,{children:0===o?(0,r.jsx)(i.Viewer,{fileUrl:"".concat(a.O,"/").concat(n),defaultScale:i.SpecialZoomLevel.PageFit,theme:"dark"}):(0,r.jsx)(i.Viewer,{fileUrl:n,defaultScale:i.SpecialZoomLevel.PageFit,theme:"dark"})})})})}},8569:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var i=t(7379),a=t(7294),o=t(2869),r=t(1468),c=t(8735);function s(e){var n={};return e.info.length>1e3&&(n.info="La informaci\xf3n puede tener como m\xe1ximo 1000 caracteres"),e.hobbies.length>45&&(n.hobbies="Este campo solo puede tener 45 caracteres m\xe1ximo"),e.lenguajes.length>45&&(n.lenguajes="Este campo solo puede tener 45 caracteres m\xe1ximo"),e.contacto.length>45&&(n.contacto="Este campo solo puede tener 45 caracteres m\xe1ximo"),n}var d=t(6646),l=t(5893),u=i.ZP.div.withConfig({displayName:"info__Nav",componentId:"sc-5nbef4-0"})(["display:flex;margin-top:30px;"]),p=i.ZP.div.withConfig({displayName:"info__Option",componentId:"sc-5nbef4-1"})(["font-size:1.2rem;font-weight:700;margin-right:10px;margin-bottom:10px;border-bottom:",";:hover{cursor:pointer;}@media screen and (max-width:800px){font-size:1rem;}"],(function(e){return e.selected?"3px solid #172BEF":"0px"})),f=i.ZP.div.withConfig({displayName:"info__Contenido",componentId:"sc-5nbef4-2"})(["margin-top:30px;cursor:pointer;"]),h=i.ZP.div.withConfig({displayName:"info__Cards",componentId:"sc-5nbef4-3"})(["margin-top:20px;display:flex;flex-wrap:wrap;@media screen and (max-width:800px){margin-bottom:90px;}"]),m=i.ZP.form.withConfig({displayName:"info__ND",componentId:"sc-5nbef4-4"})(["background-color:#172bef;color:white;padding:10px;position:absolute;border-radius:10px;text-align:right;width:350px;z-index:5;@media screen and (max-width:800px){position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}"]),x=i.ZP.div.withConfig({displayName:"info__OutCard",componentId:"sc-5nbef4-5"})(["cursor:pointer;"]),g=i.ZP.div.withConfig({displayName:"info__Error",componentId:"sc-5nbef4-6"})(["width:100%;background-color:red;align-text:center;color:white;font-size:0.8rem;text-transform:uppercase;margin-bottom:10px;"]),j=function(e){var n=e.idUsuario,t=e.infoUsuario,i=e.hojadeVidaUsuario,j=e.hobbiesUsuario,b=e.contactoUsuario,v=e.lenguajesUsuario,C=(0,a.useState)(!1),w=C[0],y=C[1];(0,a.useEffect)((function(){y(!0)}),[]);var k=(0,a.useState)(!0),_=k[0],I=k[1];function P(e){I(e)}var Z=(0,a.useState)(!1),S=Z[0],N=Z[1],U=(0,a.useState)(!1),E=U[0],O=U[1],T=(0,a.useState)(!1),V=T[0],z=T[1],D=(0,a.useState)(!1),q=D[0],F=D[1],G=(0,a.useState)(!1),L=G[0],H=G[1],B={id:n,info:t,hojadeVida:"",hobbies:j,contacto:b,lenguajes:v},A=(0,r.Z)(B,s,(function(){var e=M;""===K&&(e.hojadeVida=i);console.log(e),S&&N(!1),E&&O(!1),V&&z(!1),q&&F(!1),L&&H(!1)})),M=A.valores,R=A.errores,J=A.handleSubmit,W=A.handleChange;M.id;var $=M.info,K=M.hojadeVida,Q=M.hobbies,X=M.contacto,Y=M.lenguajes;return(0,l.jsxs)("div",{children:[(0,l.jsxs)(u,{children:[(0,l.jsx)(p,{selected:_,onClick:function(){return P(!0)},children:"INFORMACI\xd3N"}),(0,l.jsx)(p,{selected:!_,onClick:function(){return P(!1)},children:"HOJA DE VIDA"}),S?(0,l.jsxs)(m,{onSubmit:J,noValidate:!0,children:[(0,l.jsx)("input",{type:"text",name:"info",value:$,onChange:W,placeholder:"Ingresa tu descripci\xf3n"}),(0,l.jsx)("input",{type:"submit",value:"Guardar"}),(0,l.jsx)("button",{onClick:function(){return N(!1)},children:"Cancelar"}),R.info&&(0,l.jsx)(g,{children:R.info})]}):null,E?(0,l.jsxs)(m,{onSubmit:J,noValidate:!0,children:[(0,l.jsx)("input",{type:"file",name:"hojadeVida",value:K,onChange:W,placeholder:"Ingresa tu hoja de vida",accept:"application/pdf"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"submit",value:"Guardar"}),(0,l.jsx)("button",{onClick:function(){return O(!1)},children:"Cancelar"})]})]}):null]}),_?t?(0,l.jsx)(f,{"data-tip":!0,"data-for":"dscTooltipInf",selected:_,onClick:function(){return N(!S)},children:t}):(0,l.jsx)(f,{"data-tip":!0,"data-for":"dscTooltipInf",selected:_,onClick:function(){return N(!S)},children:"En esta secci\xf3n va tu descripci\xf3n personal, puedes escribir hasta 1000 caracteres! haz click aqui para ingresarla"}):i?(0,l.jsx)(f,{"data-tip":!0,"data-for":"dscTooltipInf",selected:_,onClick:function(){return O(!E)},children:(0,l.jsx)(d.Z,{file:i,choice:1})}):(0,l.jsx)(f,{"data-tip":!0,"data-for":"dscTooltipInf",selected:_,onClick:function(){return O(!E)},children:"En esta secci\xf3n va tu hoja de vida, haz click aqui para ingresarla (Solo se permite en formato PDF)"}),V?(0,l.jsxs)(m,{onSubmit:J,noValidate:!0,children:[(0,l.jsx)("input",{type:"text",name:"contacto",value:X,onChange:W,placeholder:"Ingresa tu contacto"}),(0,l.jsx)("input",{type:"submit",value:"Guardar"}),(0,l.jsx)("button",{onClick:function(){return z(!1)},children:"Cancelar"}),R.contacto&&(0,l.jsx)(g,{children:R.contacto})]}):null,q?(0,l.jsxs)(m,{onSubmit:J,noValidate:!0,children:[(0,l.jsx)("input",{type:"text",name:"hobbies",value:Q,onChange:W,placeholder:"Ingresa tus hobbies"}),(0,l.jsx)("input",{type:"submit",value:"Guardar"}),(0,l.jsx)("button",{onClick:function(){return F(!1)},children:"Cancelar"}),R.hobbies&&(0,l.jsx)(g,{children:R.hobbies})]}):null,L?(0,l.jsxs)(m,{onSubmit:J,noValidate:!0,children:[(0,l.jsx)("input",{type:"text",name:"lenguajes",value:Y,onChange:W,placeholder:"Ingresa tus lenguajes"}),(0,l.jsx)("input",{type:"submit",value:"Guardar"}),(0,l.jsx)("button",{onClick:function(){return H(!1)},children:"Cancelar"}),R.lenguajes&&(0,l.jsx)(g,{children:R.lenguajes})]}):null,(0,l.jsxs)(h,{children:[b?(0,l.jsx)(x,{"data-tip":!0,"data-for":"dscTooltip",onClick:function(){return z(!V)},children:(0,l.jsx)(o.default,{title:"Contacto",data:b})}):(0,l.jsx)(x,{"data-tip":!0,"data-for":"dscTooltip",onClick:function(){return z(!V)},children:(0,l.jsx)(o.default,{title:"Contacto",data:"En esta secci\xf3n van tus medios de contacto(telefono, celular...), Haz click aqui para editar"})}),j?(0,l.jsx)(x,{"data-tip":!0,"data-for":"dscTooltip",onClick:function(){return F(!q)},children:(0,l.jsx)(o.default,{title:"Hobbies",data:j})}):(0,l.jsx)(x,{"data-tip":!0,"data-for":"dscTooltip",onClick:function(){return F(!q)},children:(0,l.jsx)(o.default,{title:"Hobbies",data:"En esta secci\xf3n van tus hobbies, Haz click aqui para editar"})}),v?(0,l.jsx)(x,{"data-tip":!0,"data-for":"dscTooltip",onClick:function(){return H(!L)},children:(0,l.jsx)(o.default,{title:"Lenguajes",data:v})}):(0,l.jsx)(x,{"data-tip":!0,"data-for":"dscTooltip",onClick:function(){return H(!L)},children:(0,l.jsx)(o.default,{title:"Lenguajes",data:"En esta secci\xf3n van tus idiomas, Haz click aqui para editar"})})]}),w&&(0,l.jsx)(c.Z,{id:"dscTooltip",place:"bottom",type:"info",children:"Click aqui para editar"}),w&&(0,l.jsx)(c.Z,{id:"dscTooltipInf",place:"top",type:"info",children:"Click aqui para ingresar nueva informaci\xf3n"})]})}},4264:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var i=t(7379),a=t(9965),o=t(8569),r=t(7294),c=t(1468);function s(e){var n={};return e.nombre?e.nombre.length<8?n.nombre="El nombre debe ser de al menos 8 caracteres":e.nombre.length>46?n.nombre="El nombre puede contener m\xe1ximo 45 caracteres":/^([A-Z]{1}[a-z\xf1\xe1\xe9\xed\xf3\xfa]+[\s]*)+$/.test(e.nombre)||(n.nombre="El nombre solo puede contener letras, la primera letra debe ir en may\xfascula"):n.nombre="El nombre es obligatorio",e.carrera.length>45&&(n.carrera="La carrera debe tener menos de 45 caracteres"),e.institucion.length>45&&(n.institucion="La institucion debe tener menos de 45 caracteres"),e.facultad.length>45&&(n.facultad="La facultad debe tener menos de 45 caracteres"),n}var d=t(8735),l=t(2279),u=t(5893),p=i.ZP.div.withConfig({displayName:"mainComp__OutContainer",componentId:"sc-1wyarvo-0"})(["display:flex;flex-direction:column;padding:10px;margin-left:20px;@media screen and (max-width:1500px){margin-left:0px;}"]),f=i.ZP.div.withConfig({displayName:"mainComp__Nombre",componentId:"sc-1wyarvo-1"})(["font-size:1.7rem;font-weight:700;cursor:pointer;"]),h=i.ZP.div.withConfig({displayName:"mainComp__RolCarr",componentId:"sc-1wyarvo-2"})(["font-size:1.2rem;color:#888;font-weight:600;cursor:pointer;"]),m=i.ZP.div.withConfig({displayName:"mainComp__Empresa",componentId:"sc-1wyarvo-3"})(["font-size:1.1rem;display:flex;font-weight:500;"]),x=i.ZP.div.withConfig({displayName:"mainComp__Cargo",componentId:"sc-1wyarvo-4"})(["color:#006FFF;"]),g=i.ZP.div.withConfig({displayName:"mainComp__Coins",componentId:"sc-1wyarvo-5"})(["padding:5px;display:flex;justify-content:space-around;align-items:center;width:200px;font-size:1.2rem;font-weight:700;"]),j=i.ZP.form.withConfig({displayName:"mainComp__ND",componentId:"sc-1wyarvo-6"})(["background-color:#172bef;color:white;padding:10px;position:absolute;border-radius:10px;text-align:right;width:350px;@media screen and (max-width:800px){position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);}"]),b=i.ZP.div.withConfig({displayName:"mainComp__Error",componentId:"sc-1wyarvo-7"})(["width:100%;background-color:red;align-text:center;color:white;font-size:0.8rem;text-transform:uppercase;margin-bottom:10px;"]),v=function(e){var n=(0,r.useState)(!1),t=n[0],i=n[1];(0,r.useEffect)((function(){i(!0)}),[]);var v=e.idUsuario,C=e.nombreUsuario,w=e.rolUsuario,y=e.carreraUsuario,k=e.empresaUsuario,_=e.cargoUsuario,I=e.puntajeUsuario,P=e.infoUsuario,Z=e.hojadeVidaUsuario,S=e.contactoUsuario,N=e.hobbiesUsuario,U=e.lenguajesUsuario,E=e.facultadUsuario,O=e.institucionUsuario,T=e.IncsUsuario,V=e.PtsVictoriaUsuario,z={id:v,nombre:C,carrera:y,facultad:E,institucion:O},D=(0,c.Z)(z,s,(function(){console.log("Cambios Realizados"),W&&$(!W);Q&&X(!Q);ee&&ne(!ee);ie&&ae(!ie)})),q=D.valores,F=D.errores,G=D.handleSubmit,L=D.handleChange,H=(q.id,q.nombre),B=q.carrera,A=q.facultad,M=q.institucion;function R(e){0==e&&$(!W),1===e&&X(!Q),2===e&&ne(!ee),3===e&&ae(!ie)}var J=(0,r.useState)(!1),W=J[0],$=J[1],K=(0,r.useState)(!1),Q=K[0],X=K[1],Y=(0,r.useState)(!1),ee=Y[0],ne=Y[1],te=(0,r.useState)(!1),ie=te[0],ae=te[1];return(0,u.jsxs)(p,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(f,{onClick:function(){return R(0)},"data-tip":!0,"data-for":"dscTooltipDec",children:C}),W?(0,u.jsxs)(j,{onSubmit:G,noValidate:!0,children:[(0,u.jsx)("input",{type:"text",name:"nombre",value:H,onChange:L,placeholder:"Ingresa tu nuevo nombre"}),(0,u.jsx)("input",{type:"submit",value:"Guardar"}),(0,u.jsx)("button",{onClick:function(){return R(0)},children:"Cancelar"}),F.nombre&&(0,u.jsx)(b,{children:F.nombre})]}):null,(0,u.jsxs)(h,{children:[y?(0,u.jsxs)("b",{onClick:function(){return R(1)},"data-tip":!0,"data-for":"dscTooltipDec",children:[w," -",y]}):"Estudiante"===w?(0,u.jsx)("b",{onClick:function(){return R(1)},"data-tip":!0,"data-for":"dscTooltipDec",children:"Carrera del estudiante"}):null,A?(0,u.jsxs)("b",{onClick:function(){return R(2)},"data-tip":!0,"data-for":"dscTooltipDec",children:[rol," -",A]}):"Mentor"===w?(0,u.jsx)("b",{onClick:function(){return R(2)},"data-tip":!0,"data-for":"dscTooltipDec",children:"Facultad del mentor"}):null,M?(0,u.jsxs)("b",{onClick:function(){return R(3)},"data-tip":!0,"data-for":"dscTooltipDec",children:[rol," -",M]}):"Explorador"===w?(0,u.jsx)("b",{onClick:function(){return R(3)},"data-tip":!0,"data-for":"dscTooltipDec",children:"instituci\xf3n del explorador"}):null,Q?(0,u.jsxs)(j,{onSubmit:G,noValidate:!0,children:[(0,u.jsx)("input",{type:"text",name:"carrera",value:B,onChange:L,placeholder:"Ingresa tu carrera"}),(0,u.jsx)("input",{type:"submit",value:"Guardar"}),(0,u.jsx)("button",{onClick:function(){return R(1)},children:"Cancelar"}),F.carrera&&(0,u.jsx)(b,{children:F.carrera})]}):null,ee?(0,u.jsxs)(j,{onSubmit:G,noValidate:!0,children:[(0,u.jsx)("input",{type:"text",name:"facultad",value:A,onChange:L,placeholder:"Ingresa tu facultad"}),(0,u.jsx)("input",{type:"submit",value:"Guardar"}),(0,u.jsx)("button",{onClick:function(){return R(2)},children:"Cancelar"}),F.facultad&&(0,u.jsx)(b,{children:F.facultad})]}):null,ie?(0,u.jsxs)(j,{onSubmit:G,noValidate:!0,children:[(0,u.jsx)("input",{type:"text",name:"institucion",value:M,onChange:L,placeholder:"Ingresa tu instituci\xf3n"}),(0,u.jsx)("input",{type:"submit",value:"Guardar"}),(0,u.jsx)("button",{onClick:function(){return R(3)},children:"Cancelar"}),F.institucion&&(0,u.jsx)(b,{children:F.institucion})]}):null,t&&(0,u.jsx)(d.Z,{id:"dscTooltipDec",place:"bottom",type:"info",children:"Click aqui para editar"})]}),k?(0,u.jsxs)(m,{children:[(0,u.jsxs)("div",{children:[k," "]})," ",(0,u.jsxs)(x,{children:["(",_,")"]})]}):null,(0,u.jsx)(a.default,{nivel:Math.trunc(I/100),avance:I%100}),(0,u.jsxs)(g,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"".concat(l.O,"/imgs/innocoin1.png")})," ",T," Incs"]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"".concat(l.O,"/imgs/ptvictory.png")})," ",V," PV"]})]})]}),(0,u.jsx)(o.default,{idUsuario:v,infoUsuario:P,hojadeVidaUsuario:Z,hobbiesUsuario:N,contactoUsuario:S,lenguajesUsuario:U})]})}},9965:function(e,n,t){"use strict";t.r(n);var i=t(7379),a=(t(7294),t(5893)),o=i.ZP.div.withConfig({displayName:"nivel__OutContainer",componentId:"sc-1fq0yrv-0"})(["margin-top:20px;width:500px;@media screen and (max-width:1500px){width:80%;}"]),r=i.ZP.div.withConfig({displayName:"nivel__Barra",componentId:"sc-1fq0yrv-1"})(["background-color:#172BEF;border-radius:10px;width:","%;height:18px;"],(function(e){return e.avance})),c=i.ZP.div.withConfig({displayName:"nivel__ExtBarra",componentId:"sc-1fq0yrv-2"})(["border:2px solid #172BEF;padding:2px;border-radius:10px;width:100%;"]),s=i.ZP.div.withConfig({displayName:"nivel__Titulo",componentId:"sc-1fq0yrv-3"})(["font-size:1rem;font-weight:700;"]);n.default=function(e){var n=e.nivel,t=e.avance;return(0,a.jsxs)(o,{children:[(0,a.jsxs)(s,{children:["Nivel ",n]}),(0,a.jsx)(c,{children:(0,a.jsx)(r,{avance:t})})]})}},2869:function(e,n,t){"use strict";t.r(n);var i=t(7379),a=t(5893),o=i.ZP.div.withConfig({displayName:"profCards__OutContainer",componentId:"sc-1rffhlv-0"})(["color:#777;height:50px;width:300px;padding:5px;margin:15px;@media screen and (max-width:800px){margin-left:0px;}"]),r=i.ZP.div.withConfig({displayName:"profCards__Title",componentId:"sc-1rffhlv-1"})(["font-size:1.2rem;font-weight:500;"]),c=i.ZP.div.withConfig({displayName:"profCards__Data",componentId:"sc-1rffhlv-2"})(["font-size:.8rem;font-weight:500;margin-left:20px;"]);n.default=function(e){var n=e.title,t=e.data;return(0,a.jsxs)(o,{children:[(0,a.jsx)(r,{children:n}),(0,a.jsx)(c,{children:t})]})}},1468:function(e,n,t){"use strict";var i=t(9499),a=t(7294);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e,n,t){var o=(0,a.useState)(e),c=o[0],s=o[1],d=(0,a.useState)({}),l=d[0],u=d[1],p=(0,a.useState)(!1),f=p[0],h=p[1];(0,a.useEffect)((function(){f&&(0===Object.keys(l).length&&t(),h(!1))}),[l]);return{valores:c,errores:l,handleSubmit:function(e){console.log(c),e.preventDefault();var t=n(c);u(t),h(!0)},handleChange:function(e){s(r(r({},c),{},(0,i.Z)({},e.target.name,e.target.value)))}}}},3414:function(){},172:function(){},2001:function(){},3779:function(){},2258:function(){}}]);