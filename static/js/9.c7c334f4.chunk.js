(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{408:function(e,a,t){"use strict";t.r(a);var n=t(49),r=t(50),c=t(53),l=t(51),o=t(52),s=t(0),m=t.n(s),i=t(63),u=t.n(i),d=t(75),p=t(60),b=t(57),E=t(58),f=t(369),h=t(4),g=t(59),k=[{markerOffset:-30,name:"India",coordinates:[78.9629,20.5937]},{markerOffset:15,name:"Australia",coordinates:[133.7751,-25.2744]},{markerOffset:15,name:"USA",coordinates:[-95.7129,37.0902]},{markerOffset:-30,name:"UK",coordinates:[-3.4359,55.3781]},{markerOffset:-30,name:"UAE",coordinates:[54.366669,24.466667]},{markerOffset:15,name:"SINGAPORE",coordinates:[103.8198,1.3521]},{markerOffset:15,name:"QATAR",coordinates:[53.595284,16.564328]},{markerOffset:15,name:"PARIS",coordinates:[2.3522,48.8566]},{markerOffset:15,name:"CANADA",coordinates:[-106.3468,56.1304]},{markerOffset:15,name:"GHANA-WEST AFRICA",coordinates:[-1.0232,7.9465]},{markerOffset:15,name:"SEYCHELLES",coordinates:[55.4919,-4.6796]}],y=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(s.Fragment,null,m.a.createElement("div",{className:"container mb-5 pt-5 pb-3"},m.a.createElement("div",{className:"section-title-wrap section-header text-center"},m.a.createElement("h5",{className:"custom-primary text-center"},"Global Presence"),m.a.createElement("h2",{className:"title text-center"},"Discover Where We Deliver"),m.a.createElement("p",null,"Explore our product availability across the globe. Use the interactive world map to select countries and regions, and find out where you can enjoy the taste of Tenali Double Horse.")),m.a.createElement(f.ComposableMap,null,m.a.createElement(f.Geographies,{geography:"https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"},function(e){return e.geographies.map(function(e){return m.a.createElement(f.Geography,{key:e.rsmKey,geography:e,fill:"#EAEAEC",stroke:"#D6D6DA"})})}),k.map(function(e){var a=e.name,t=e.coordinates,n=e.markerOffset;return m.a.createElement(f.Marker,{key:a,coordinates:t},m.a.createElement("g",null,"USA"===a?m.a.createElement(h.c,{to:"/usa-shops"},m.a.createElement("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)"},m.a.createElement("circle",{cx:"12",cy:"10",r:"3"}),m.a.createElement("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})),m.a.createElement("text",{textAnchor:"middle",y:n,style:{fontFamily:"system-ui",fill:"#5D5A6D"}},a)):m.a.createElement(m.a.Fragment,null,m.a.createElement("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)"},m.a.createElement("circle",{cx:"12",cy:"10",r:"3"}),m.a.createElement("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})),m.a.createElement("text",{textAnchor:"middle",y:n,style:{fontFamily:"system-ui",fill:"#5D5A6D"}},a))))})),m.a.createElement(E.a,null),m.a.createElement(g.a,null)))}}]),a}(s.Component),v=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement(s.Fragment,null,m.a.createElement(u.a,null,m.a.createElement("title",null,"Authentic Indian Groceries | Tenali Double Horse USA |Tenali Double Horse UAE| ","Where we are"),m.a.createElement("meta",{name:"We are the premium quality supplier of Urad dal and pulses in Andhra Pradesh & Telangana",content:"#"})),m.a.createElement(d.a,null),m.a.createElement(p.a,{breadcrumb:{pagename:"Where we are",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),m.a.createElement(y,{tagId:this.props.match.params.tagId}),m.a.createElement(b.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/transparent-logo.png"}}))}}]),a}(s.Component);a.default=v},58:function(e,a,t){"use strict";var n=t(64),r=t(0),c=t.n(r),l=t(76),o=t(78);a.a=function(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],s=a[1],m=Object(r.useState)(""),i=Object(n.a)(m,2),u=i[0],d=i[1],p=Object(r.useState)(""),b=Object(n.a)(p,2),E=b[0],f=b[1],h=Object(r.useState)(""),g=Object(n.a)(h,2),k=g[0],y=g[1],v=Object(r.useState)(""),O=Object(n.a)(v,2),j=O[0],N=O[1],A=function(){s(!t)};return c.a.createElement("div",null,c.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),c.a.createElement("div",{id:"feedbackDrawer",className:t?"showDrawer":""},c.a.createElement("div",{id:"feedbackForm"},c.a.createElement(l.a,{onSubmit:function(e){e.preventDefault();var a={fullName:u,email:E,phoneNumber:k,message:j};o.a.send("service_u0jehlt","template_aamrei5",a,"cjCRUWDX0cKAQSKL6").then(function(e){console.log("Email sent successfully:",e),alert("Message successfully sent!")}).catch(function(e){console.error("Email sending error:",e)}),d(""),f(""),y(""),N(""),s(!1)}},c.a.createElement("h2",null,"Submit Feedback"),c.a.createElement(l.a.Group,{controlId:"fullName",style:{marginBottom:"5px"}},c.a.createElement(l.a.Control,{type:"text",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Full Name",required:!0})),c.a.createElement(l.a.Group,{controlId:"email",style:{marginBottom:"5px"}},c.a.createElement(l.a.Control,{type:"email",value:E,onChange:function(e){return f(e.target.value)},placeholder:"Email",required:!0})),c.a.createElement(l.a.Group,{controlId:"phoneNumber",style:{marginBottom:"5px"}},c.a.createElement(l.a.Control,{type:"tel",value:k,onChange:function(e){return y(e.target.value)},placeholder:"Phone Number",required:!0})),c.a.createElement(l.a.Group,{controlId:"message",style:{marginBottom:"5px"}},c.a.createElement(l.a.Control,{as:"textarea",value:j,onChange:function(e){return N(e.target.value)},placeholder:"Message",rows:"5",required:!0})),c.a.createElement("button",{type:"submit",className:"btn-custom btn-sm primary",name:"button"},"Send Message"))),c.a.createElement("div",{id:"feedbackSuccess"},c.a.createElement("h2",null,"Thank You"),c.a.createElement("p",null,"Your feedback was successfully submitted"),c.a.createElement("button",{onClick:A},"Submit More Feedback")),c.a.createElement("div",{id:"feedbackError"},c.a.createElement("h2",null,"Aw, Snap!"),c.a.createElement("p",null,"There was an error submitting your feedback"),c.a.createElement("button",{onClick:A},"Try Again")),c.a.createElement("div",{id:"feedbackTrigger",onClick:A},"Feedback",c.a.createElement("span",{id:"close"},"\xbb"))))}},59:function(e,a,t){"use strict";var n=t(49),r=t(50),c=t(53),l=t(51),o=t(52),s=t(0),m=t.n(s),i=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(l.a)(a).call(this,e))).handleAccordionClick=function(e){t.setState(function(a){return{openIndex:a.openIndex===e?-1:e}})},t.state={openIndex:-1},t}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"womensdayawrap "},m.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(a,t){return m.a.createElement("div",{key:t,className:"accordion-item ".concat(t===e.state.openIndex?"open":"")},m.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(t)}},m.a.createElement("span",null,m.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),m.a.createElement("span",null,m.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},a.heading)),m.a.createElement("div",{className:"plusicon ".concat(t===e.state.openIndex?"minusicon":"plusicon")})),t===e.state.openIndex&&m.a.createElement("div",{className:"accordion-content bg-white"},m.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",m.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),m.a.createElement("p",{className:"p-1 text-center"},"mail us ",m.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),a}(s.Component);a.a=i},60:function(e,a,t){"use strict";var n=t(49),r=t(50),c=t(53),l=t(51),o=t(52),s=t(0),m=t.n(s),i=t(4),u=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"subheader-inner"},m.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item "},m.a.createElement(i.c,{to:"/"},"Home")),m.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(s.Component);a.a=u}}]);
//# sourceMappingURL=9.c7c334f4.chunk.js.map