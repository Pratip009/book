"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[360],{23360:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});t(93433);var a=t(29439),r=t(72791),o=t(86549),i=t(97736),s=t(46627),c=t(94575),l=t(93006),d=t(5849),x=t(31243),m=t(64670),h=t(41286),u=t(27247),p=t(80184);var g=function(e){var n=e.id,t=e.task,a=e.secondtasks,r=e.setUpdateUI,o=e.updateMode;return(0,p.jsx)("ul",{children:(0,p.jsx)("li",{style:{display:"inline"},children:(0,p.jsxs)("div",{style:{display:"flex",backgroundColor:"#F5F7F8",justifyContent:"space-between",maxWidth:"800px",padding:"10px"},children:[(0,p.jsx)("span",{style:{fontWeight:"500"},children:t}),(0,p.jsx)("span",{style:{fontWeight:"500"},children:a}),(0,p.jsxs)("div",{className:"icon_holder",style:{justifyContent:"center"},children:[(0,p.jsx)(h.Z,{style:{cursor:"pointer",marginTop:"-10px",marginLeft:"20px",color:"green"},onClick:function(){return o(n,t,a)}}),(0,p.jsx)(u.Z,{style:{cursor:"pointer",marginTop:"-10px",marginLeft:"20px",color:"red"},onClick:function(){x.Z.delete("".concat(m.v,"/delete/").concat(n)).then((function(e){console.log(e),r((function(e){return!e}))}))}})]})]})})})};var f=function(){var e=(0,r.useState)(!1),n=(0,a.Z)(e,2),t=n[0],h=n[1],u=(0,r.useState)(""),f=(0,a.Z)(u,2),v=f[0],j=f[1],Z=(0,r.useState)(""),b=(0,a.Z)(Z,2),S=b[0],z=b[1],N=(0,r.useState)([]),k=(0,a.Z)(N,2),w=(k[0],k[1],(0,r.useState)([])),y=(0,a.Z)(w,2),M=(y[0],y[1],(0,r.useState)([])),B=(0,a.Z)(M,2),I=B[0],C=B[1],U=(0,r.useState)(!1),_=(0,a.Z)(U,2),D=_[0],H=_[1],L=(0,r.useState)(null),R=(0,a.Z)(L,2),V=R[0],W=R[1],F=((0,r.useRef)(),(0,c.Z)());(0,r.useEffect)((function(){x.Z.get("".concat(m.v,"/get")).then((function(e){console.log(e.data),C(e.data)}))}),[D]);var A=function(e,n){z(n),W(e)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Z,{title:"Notice"}),(0,p.jsxs)("div",{className:F.updateProduct,children:[(0,p.jsx)("div",{className:"".concat(t?F.toggleBox1:F.firstBox1),children:(0,p.jsx)(i.Z,{})}),(0,p.jsxs)("div",{className:F.secondBox1,children:[(0,p.jsx)("div",{className:F.navBar1,children:(0,p.jsx)(s.Z,{toggleHandler:function(){console.log("toggle"),h(!t)}})}),(0,p.jsx)("div",{className:"".concat(F.formContainer," ").concat(F.formContainer2),children:(0,p.jsx)("main",{children:(0,p.jsxs)("div",{className:"heading",children:[(0,p.jsx)("h1",{children:"Reply"}),(0,p.jsx)(l.Z,{variant:"outlined",fullWidth:!0,label:"Reply",multiline:!0,rows:1,value:v,onChange:function(e){return j(e.target.value)}}),(0,p.jsx)(d.Z,{variant:"contained",className:F.loginButton,fullWidth:!0,type:"submit",onClick:V?function(){x.Z.put("".concat(m.v,"/update/").concat(V),{task:v,secondtasks:S}).then((function(e){console.log(e.data),H((function(e){return!e})),W(null),z("")}))}:function(){x.Z.post("".concat(m.v,"/save"),{task:v,secondtasks:S}).then((function(e){console.log(e.data),z(""),H((function(e){return!e}))}))},children:V?"Update Message":"Send Message"})]})})}),(0,p.jsx)("ul",{children:I.map((function(e){return(0,p.jsx)(g,{id:e._id,task:e.task,secondtasks:e.secondtasks,setUpdateUI:H,updateMode:A},e._id)}))})]})]})]})})}},46627:function(e,n,t){var a=t(4942),r=(t(72791),t(38596)),o=t(26513),i=t(98008),s=t(67025),c=t(91523),l=t(80184),d=(0,r.Z)((function(e){var n,t;return{navbar:(0,a.Z)({display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1.5rem 1rem 1rem 1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)"},e.breakpoints.between("999"),{flexDirection:"row",alignItems:"center",padding:"1rem"}),menuIcon:(0,a.Z)({display:"none"},e.breakpoints.down("999"),{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}),dashboardHead:(n={fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)"},(0,a.Z)(n,e.breakpoints.down("sm"),{fontSize:"1.5rem",marginBottom:"0.5rem"}),(0,a.Z)(n,e.breakpoints.down("999"),{fontSize:"1.8rem",marginBottom:0}),(0,a.Z)(n,e.breakpoints.down("xs"),{marginRight:"1.5rem",fontSize:"1.8rem"}),n),contactButton:(t={padding:"10px 30px",borderRadius:"20px",boxShadow:"0px 2px 8px 0px #0000000a",cursor:"pointer",fontWeight:600,fontSize:"16px",color:"#fff",letterSpacing:"1px",background:"#414141",transition:"background-color 0.3s",marginRight:"2rem"},(0,a.Z)(t,e.breakpoints.down("sm"),{fontSize:"14px",padding:"8px 14px"}),(0,a.Z)(t,e.breakpoints.between("sm","md"),{fontSize:"14px",padding:"7px 15px"}),(0,a.Z)(t,e.breakpoints.down("xs"),{display:"none"}),(0,a.Z)(t,"&:hover",{background:"#ed1c24"}),t),headerBottom__logo_main:{height:"3.5rem",alignSelf:"center",paddingLeft:"25px","& img":{height:"100%",width:"auto"}}}}));n.Z=function(e){var n=e.toggleHandler,a=d();return(0,l.jsxs)("nav",{className:a.navbar,children:[(0,l.jsx)(s.Z,{className:a.menuIcon,onClick:n,children:(0,l.jsx)(i.Z,{fontSize:"2rem"})}),(0,l.jsx)("div",{className:a.dashboardHead,children:(0,l.jsx)(c.rU,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"},children:(0,l.jsx)("img",{src:t(35756),alt:"logo",className:a.headerBottom__logo_main})})}),(0,l.jsx)(c.rU,{to:"/contact",style:{textDecoration:"none",color:"none"},children:(0,l.jsx)(o.Z,{className:a.contactButton,children:"Contact Us"})})]})}},97736:function(e,n,t){t(72791);var a=t(64880),r=t(91523),o=t(60220),i=t(4567),s=t(5849),c=t(97235),l=t(32338),d=t(59140),x=t(42419),m=t(41992),h=t(15776),u=t(74865),p=t(37541),g=t(68535),f=t(81897),v=t(59434),j=t(80184),Z=(0,c.Z)((function(e){return{sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}}}));n.Z=function(){var e=Z(),n=(0,v.v9)((function(e){return e.userData})),t=n.user,c=n.loading,b=(0,a.k6)();return(0,j.jsx)(j.Fragment,{children:!c&&(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:e.sidebar,children:[(0,j.jsx)(o.Z,{src:t&&t.avatar.url,alt:"User Avatar",className:e.avatar11}),(0,j.jsx)(i.Z,{variant:"subtitle1",className:e.name,children:t&&t.name}),(0,j.jsx)(i.Z,{variant:"subtitle2",className:e.email,children:t&&t.email}),(0,j.jsx)("div",{className:e.divider}),(0,j.jsxs)("ul",{className:e.sideBarMenu,children:[(0,j.jsx)(r.rU,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(l.Z,{fontSize:"large"}),(0,j.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Dashboard"]})]})}),(0,j.jsx)(r.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(p.Z,{fontSize:"large"}),(0,j.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,j.jsx)(r.rU,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(d.Z,{fontSize:"large"}),(0,j.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,j.jsx)(r.rU,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(x.Z,{fontSize:"large"}),(0,j.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})}),(0,j.jsx)(r.rU,{to:"/admin/orders",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(m.Z,{fontSize:"large"}),(0,j.jsx)("span",{className:e.sideBarMenuItem_text,children:"Orders"})]})}),(0,j.jsx)(r.rU,{to:"/admin/reviews",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(h.Z,{fontSize:"large"}),(0,j.jsx)("span",{className:e.sideBarMenuItem_text,children:"Reviews"})]})}),(0,j.jsx)(r.rU,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(g.Z,{fontSize:"large"}),(0,j.jsx)("span",{className:e.sideBarMenuItem_text,children:"Contact"})]})}),(0,j.jsx)(r.rU,{to:"/admin/news",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(f.Z,{fontSize:"large"}),(0,j.jsx)("span",{className:e.sideBarMenuItem_text,children:"News Feed"})]})}),(0,j.jsx)(r.rU,{to:"/admin/createuser",style:{color:"inherit",textDecoration:"none"},children:(0,j.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,j.jsx)(f.Z,{fontSize:"large"}),(0,j.jsx)("span",{className:e.sideBarMenuItem_text,children:"Messages"})]})})]}),(0,j.jsx)("div",{className:e.divider}),(0,j.jsxs)(s.Z,{className:e.button,onClick:function(){b.push("/account")},variant:"contained",children:[(0,j.jsx)(u.Z,{fontSize:"large",style:{marginRight:"10px"}}),"Account"]})]})})})}},42419:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(45649)),o=t(80184),i=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=i},32338:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(45649)),o=t(80184),i=(0,r.default)((0,o.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");n.Z=i},37541:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(45649)),o=t(80184),i=(0,r.default)((0,o.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");n.Z=i},41992:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(45649)),o=t(80184),i=(0,r.default)((0,o.jsx)("path",{d:"M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt");n.Z=i},15776:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(45649)),o=t(80184),i=(0,r.default)((0,o.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"}),"RateReview");n.Z=i},81897:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(45649)),o=t(80184),i=(0,r.default)((0,o.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");n.Z=i}}]);
//# sourceMappingURL=360.193dd2f6.chunk.js.map