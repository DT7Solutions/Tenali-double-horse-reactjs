(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{415:function(e,t,a){"use strict";a.r(t);var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=a(74),u=a.n(m),d=a(91),h=a(76),E=a(73),b=a(82),f=a(376),p=a(10),g=a(84),k=[{markerOffset:-30,name:"India",coordinates:[78.9629,20.5937]},{markerOffset:15,name:"Australia",coordinates:[133.7751,-25.2744]},{markerOffset:15,name:"USA",coordinates:[-95.7129,37.0902]},{markerOffset:-30,name:"UK",coordinates:[-3.4359,55.3781]},{markerOffset:-30,name:"UAE",coordinates:[54.366669,24.466667]},{markerOffset:15,name:"SINGAPORE",coordinates:[103.8198,1.3521]},{markerOffset:15,name:"QATAR",coordinates:[53.595284,16.564328]},{markerOffset:15,name:"PARIS",coordinates:[2.3522,48.8566]},{markerOffset:15,name:"CANADA",coordinates:[-106.3468,56.1304]},{markerOffset:15,name:"GHANA-WEST AFRICA",coordinates:[-1.0232,7.9465]},{markerOffset:15,name:"SEYCHELLES",coordinates:[55.4919,-4.6796]}],v=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"container mb-5 pt-5 pb-3"},s.a.createElement("div",{className:"section-title-wrap section-header text-center"},s.a.createElement("h5",{className:"custom-primary text-center"},"Global Presence"),s.a.createElement("h2",{className:"title text-center"},"Discover Where We Deliver"),s.a.createElement("p",null,"Explore our product availability across the globe. Use the interactive world map to select countries and regions, and find out where you can enjoy the taste of Tenali Double Horse.")),s.a.createElement(f.ComposableMap,null,s.a.createElement(f.Geographies,{geography:"https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"},function(e){return e.geographies.map(function(e){return s.a.createElement(f.Geography,{key:e.rsmKey,geography:e,fill:"#EAEAEC",stroke:"#D6D6DA"})})}),k.map(function(e){var t=e.name,a=e.coordinates,n=e.markerOffset;return s.a.createElement(f.Marker,{key:t,coordinates:a},s.a.createElement("g",null,"USA"===t?s.a.createElement(p.c,{to:"/usa-shops"},s.a.createElement("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)"},s.a.createElement("circle",{cx:"12",cy:"10",r:"3"}),s.a.createElement("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})),s.a.createElement("text",{textAnchor:"middle",y:n,style:{fontFamily:"system-ui",fill:"#5D5A6D"}},t)):s.a.createElement(s.a.Fragment,null,s.a.createElement("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)"},s.a.createElement("circle",{cx:"12",cy:"10",r:"3"}),s.a.createElement("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})),s.a.createElement("text",{textAnchor:"middle",y:n,style:{fontFamily:"system-ui",fill:"#5D5A6D"}},t))))})),s.a.createElement(b.a,null),s.a.createElement(g.a,null)))}}]),t}(i.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("title",null,"Tenali  doublehorse | ","Where we are"),s.a.createElement("meta",{name:"description",content:"#"})),s.a.createElement(d.a,null),s.a.createElement(h.a,{breadcrumb:{pagename:"Where we are",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),s.a.createElement(v,{tagId:this.props.match.params.tagId}),s.a.createElement(E.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/transparent-logo.png"}}))}}]),t}(i.Component);t.default=N},71:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(70),s=a(0),m=a.n(s),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).getNextSibling=function(e,t){var a=e.nextElementSibling;if(!t)return a;for(;a;){if(a.matches(t))return a;a=a.nextElementSibling}},a.triggerChild=function(e){var t="";null!==(t=void 0!==a.getNextSibling(e.target,".submenu")?a.getNextSibling(e.target,".submenu"):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?"submenu":"submenu d-block")},a.state={navmethod:!1,cartmethod:!1,searchmethod:!1},a.toggleNav=a.toggleNav.bind(Object(i.a)(Object(i.a)(a))),a.cartToggle=a.cartToggle.bind(Object(i.a)(Object(i.a)(a))),a.searchToggle=a.searchToggle.bind(Object(i.a)(Object(i.a)(a))),a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return m.a.createElement(s.Fragment,null)}}]),t}(s.Component);t.a=u},72:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"About",link:"/about",child:!0,submenu:[{id:21,linkText:"Our Company",link:"/about"},{id:23,link:"/Where-we-are",linkText:"Where We Are"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"},{id:42,link:"/tenali-double-hosre-food-products",linkText:"TDHF Products"}]},{id:5,linkText:"Contact",link:"/Contactus"}]},73:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=a(10),u=a(75),d=a.n(u),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return s.a.createElement("footer",{id:"footer-bg",className:this.props.footer.style,style:{position:"relative"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"footer-top"},s.a.createElement("div",{className:"footer-buttons",style:{position:"absolute",top:"-22px",right:"-1%",zIndex:"9999"}},s.a.createElement("img",{src:"./assets/img/redesgin-great-place-work.png",style:{height:"100%",width:"100%"},className:"img-responsive",alt:"logo"})))),s.a.createElement("div",{className:"footer-middle "},s.a.createElement("div",{className:"container "},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Quick Links"),s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/about",target:"_blank"},"Our Company")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/tenali-double-horse-products",target:"_blank"},"Tdh Products")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/tenali-double-hosre-food-products",target:"_blank"},"Tdh Food Products")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/usa-shops",target:"_blank"},"Usa")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/Contactus",target:"_blank"},"Contact")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Legal Links"),s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/terms-and-condation",target:"_blank"},"Terms of Use")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/privacy-policy",target:"_blank"},"Privacy Policy")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/shipping-policy",target:"_blank"},"Shipping Policy")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/refund-policy",target:"_blank"},"Refund Policy")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/payment-ploicy",target:"_blank"},"Payment Services")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Contact"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"tel:1800 270 567567",target:"_blank"},"Call Us")),s.a.createElement("li",null," ",s.a.createElement("a",{href:"mailto:info@tenalidoublehorse.com",target:"_blank"},"Email")," "),s.a.createElement("li",null," ",s.a.createElement(m.c,{to:"/Contactus",target:"_blank"},"Locate")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Follow us on Social Media"),s.a.createElement("ul",{className:"social-media"},s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},s.a.createElement("i",{className:"fab fa-facebook-f"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},s.a.createElement("i",{className:"fab fa-youtube"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},s.a.createElement("i",{className:"fab fa-instagram"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/tnldoublehorse",className:"twitter"},s.a.createElement("i",{className:"fab fa-twitter"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/tenalidoublehorse/",className:"linkedin"},s.a.createElement("i",{className:"fab fa-linkedin"})))),s.a.createElement("div",{className:"footer-offer"},s.a.createElement("p",{className:"text-dark"},"Know More Information!"),s.a.createElement("a",{href:d.a,download:"tdh-brouchure.pdf",className:"btn-custom btn-sm shadow-none",target:"_blank",type:"application/pdf"},"Download Brochure")))))),s.a.createElement("div",{className:"footer-bottom"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"footer-copyright"},s.a.createElement("p",null," Copyright \xa9 2022 ",s.a.createElement(m.c,{to:" "},"Tenali Double Horse ")," All Rights Reserved. "),s.a.createElement(m.c,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},s.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),t}(i.Component);t.a=h},75:function(e,t,a){e.exports=a.p+"static/media/tdh-brouchure.ac86b663.pdf"},76:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=a(10),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"subheader-inner"},s.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item "},s.a.createElement(m.c,{to:"/"},"Home")),s.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(i.Component);t.a=u},78:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"search-form",method:"post"},s.a.createElement("input",{type:"text",placeholder:"Search..."}),s.a.createElement("button",{type:"submit",className:"search-btn"},s.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),t}(i.Component);t.a=m},79:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=a(10),u=a(72),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth<=767;return s.a.createElement(i.Fragment,null,s.a.createElement(m.c,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),s.a.createElement("div",{className:"aside-scroll"},s.a.createElement("ul",null,u.length>0?u.map(function(a,n){return t&&"Blog"===a.linkText?null:s.a.createElement("li",{key:n,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):s.a.createElement(m.c,{to:a.link}," ",a.linkText," "),a.child?s.a.createElement("ul",{className:"submenu ".concat(a.child?"menu-item-has-children":"")},a.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),t}(a(71).a);t.a=d},81:function(e,t,a){e.exports=a.p+"static/media/trial-notable.ea726d66.png"},82:function(e,t,a){"use strict";var n=a(77),l=a(0),r=a.n(l),c=a(45);t.a=function(){var e=Object(l.useState)(!1),t=Object(n.a)(e,2),a=t[0],o=t[1],i=Object(l.useState)(""),s=Object(n.a)(i,2),m=s[0],u=s[1],d=Object(l.useState)(""),h=Object(n.a)(d,2),E=h[0],b=h[1],f=Object(l.useState)(""),p=Object(n.a)(f,2),g=p[0],k=p[1],v=function(){o(!a)};return r.a.createElement("div",null,r.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),r.a.createElement("div",{id:"feedbackDrawer",className:a?"showDrawer":""},r.a.createElement("div",{id:"feedbackForm"},r.a.createElement(c.a,{onSubmit:function(e){e.preventDefault();var t={fullName:m,email:E,message:g};console.log(t),u(""),b(""),k(""),o(!1)}},r.a.createElement("h2",null,"Submit Feedback"),r.a.createElement(c.a.Group,{controlId:"fullName",style:{marginBottom:"5px"}},r.a.createElement(c.a.Control,{type:"text",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Full Name",required:!0})),r.a.createElement(c.a.Group,{controlId:"email",style:{marginBottom:"5px"}},r.a.createElement(c.a.Control,{type:"email",value:E,onChange:function(e){return b(e.target.value)},placeholder:"Email",required:!0})),r.a.createElement(c.a.Group,{controlId:"message",style:{marginBottom:"5px"}},r.a.createElement(c.a.Control,{as:"textarea",value:g,onChange:function(e){return k(e.target.value)},placeholder:"Message",rows:"5",required:!0})),r.a.createElement("button",{type:"submit",className:"btn-custom btn-sm primary",name:"button"},"Send Message"))),r.a.createElement("div",{id:"feedbackSuccess"},r.a.createElement("h2",null,"Thank You"),r.a.createElement("p",null,"Your feedback was successfully submitted"),r.a.createElement("button",{onClick:v},"Submit More Feedback")),r.a.createElement("div",{id:"feedbackError"},r.a.createElement("h2",null,"Aw, Snap!"),r.a.createElement("p",null,"There was an error submitting your feedback"),r.a.createElement("button",{onClick:v},"Try Again")),r.a.createElement("div",{id:"feedbackTrigger",onClick:v},"Feedback",r.a.createElement("span",{id:"close"},"\xbb"))))}},83:function(e,t,a){e.exports=a.p+"static/media/aha.cc12d466.png"},84:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=(a(81),a(83),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleAccordionClick=function(e){a.setState(function(t){return{openIndex:t.openIndex===e?-1:e}})},a.state={openIndex:-1},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"womensdayawrap "},s.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(t,a){return s.a.createElement("div",{key:a,className:"accordion-item ".concat(a===e.state.openIndex?"open":"")},s.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(a)}},s.a.createElement("span",null,s.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),s.a.createElement("span",null,s.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},t.heading)),s.a.createElement("div",{className:"plusicon ".concat(a===e.state.openIndex?"minusicon":"plusicon")})),a===e.state.openIndex&&s.a.createElement("div",{className:"accordion-content bg-white"},s.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",s.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),s.a.createElement("p",{className:"p-1 text-center"},"mail us ",s.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),t}(i.Component));t.a=m},88:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=a(10),u=a(72),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"navbar-nav "},u.length>0?u.slice(0,2).map(function(t,a){return s.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):s.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?s.a.createElement("ul",{className:"submenu",role:"menu"},t.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null,s.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},s.a.createElement(m.c,null,"Products"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",{className:"d-flex"},s.a.createElement("div",{className:"container-small"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 product-hover-sec"},s.a.createElement("h5",{className:"text-center"},"Explore Our Products Range "),s.a.createElement("div",{className:"mega-menu-item d-flex justify-content-center align-items-center"},s.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},s.a.createElement("a",{href:"/tenali-double-horse-products"}," ",s.a.createElement("img",{src:"./assets/img/prods/tenali-double-horse-icon.png",alt:"pizza"})),s.a.createElement(m.c,{to:"/tenali-double-horse-products"},s.a.createElement("a",{className:"btn-custom  shadow-none btn-sm"},"View More"))),s.a.createElement("div",{className:"col-lg-6 d-flex flex-column justify-content-center align-items-center"},s.a.createElement("a",{href:"/tenali-double-hosre-food-products"}," ",s.a.createElement("img",{src:"./assets/img/prods/tdh-icon.png",alt:"pizza"})),s.a.createElement("a",{href:"https://tdhfoodproducts.com/shop/",target:"_blank"},s.a.createElement("button",{className:"btn-custom  shadow-none btn-sm"},"View More")))))))))),u.length>0?u.slice(4,10).map(function(t,a){return s.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):s.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?s.a.createElement("ul",{className:"sub-menu",role:"menu"},t.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),t}(i.Component);t.a=d},91:function(e,t,a){"use strict";var n=a(62),l=a(63),r=a(66),c=a(64),o=a(65),i=a(0),s=a.n(i),m=a(10),u=a(71),d=a(78),h=a(79),E=a(88),b=a(67),f=a.n(b),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleScroll=function(){var e=window.scrollY>90,t=window.scrollY>0;a.setState({isSticky:e,isScrolled:t})},a.cartToggle=function(){a.setState(function(e){return{cartmethod:!e.cartmethod}})},a.searchToggle=function(){a.setState(function(e){return{searchmethod:!e.searchmethod}})},a.toggleNav=function(){a.setState(function(e){return{navmethod:!e.navmethod}})},a.state={isSticky:!1,cartmethod:!1,isScrolled:!1,searchmethod:!1,navmethod:!1},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state,t=e.isSticky,a=e.isScrolled,n=f()("main-header","header-1","header-absolute",{"header-sticky":t||a});return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:f()("search-form-wrapper",{open:this.state.searchmethod})},s.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement(d.a,null)),s.a.createElement("aside",{className:f()("main-aside",{open:this.state.navmethod})},s.a.createElement(h.a,null)),s.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),s.a.createElement("header",{className:n,style:{backgroundColor:t?"white":"transparent"}},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar"},s.a.createElement(m.c,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-250x73.png",alt:"logo"})),s.a.createElement(E.a,null),s.a.createElement("div",{className:"header-controls"},s.a.createElement("ul",{className:"header-controls-inner"},s.a.createElement("div",{className:"floating-container"},s.a.createElement("div",{className:"floating-button share-icon"}," ",s.a.createElement("img",{src:"./assets/img/header/network-connection.png",alt:"topicon"})),s.a.createElement("div",{className:"element-container"},s.a.createElement("span",{className:"float-element tooltip-left"}," ",s.a.createElement("a",{href:"https://www.facebook.com/tenalidoublehorse",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-facebook-f"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://twitter.com/tnldoublehorse",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-twitter"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://www.instagram.com/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-instagram"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://www.linkedin.com/company/tenalidoublehorse/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-linkedin-in"}))),s.a.createElement("span",{className:"float-element"},s.a.createElement("a",{href:"https://www.youtube.com/c/TenaliDoubleHorse",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{class:"fab fa-youtube"})))))),s.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)))))))}}]),t}(u.a);t.a=p}}]);
//# sourceMappingURL=8.863cf17e.chunk.js.map