(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{56:function(e){e.exports=[{id:1,img:"assets/img/prods-sm/1.png",name:"Eco Pack",qty:4,price:154.99,flavours:["14 Inches","Extra Cheese","Cheese Crust"]}]},57:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),m=a(66),s=a(0),o=a.n(s),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).getNextSibling=function(e,t){var a=e.nextElementSibling;if(!t)return a;for(;a;){if(a.matches(t))return a;a=a.nextElementSibling}},a.triggerChild=function(e){var t="";null!==(t=void 0!==a.getNextSibling(e.target,".submenu")?a.getNextSibling(e.target,".submenu"):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?"submenu":"submenu d-block")},a.state={navmethod:!1,cartmethod:!1,searchmethod:!1},a.toggleNav=a.toggleNav.bind(Object(m.a)(Object(m.a)(a))),a.cartToggle=a.cartToggle.bind(Object(m.a)(Object(m.a)(a))),a.searchToggle=a.searchToggle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return o.a.createElement(s.Fragment,null)}}]),t}(s.Component);t.a=u},58:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"About",link:"/about",child:!0,submenu:[{id:21,linkText:"Our Company",link:"/about"},{id:23,link:"/Where-we-are",linkText:"Where We Are"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",link:"/menu-v1",child:!0,submenu:[{id:41,link:"/menu-v1",linkText:"TDH Products"},{id:42,link:"/menu-v2",linkText:"TDHF Products"}]},{id:5,linkText:"Contact",link:"/locations"}]},61:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),m=a(0),s=a.n(m),o=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return s.a.createElement("footer",{id:"footer-bg",className:this.props.footer.style,style:{position:"relative"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"footer-top"},s.a.createElement("div",{className:"footer-buttons",style:{position:"absolute",top:"-25px",right:"-1%",zIndex:"9999"}},s.a.createElement("img",{src:"./assets/img/great-place-to-work-image.png",style:{height:"180px",width:"100%"},alt:"logo"})))),s.a.createElement("div",{className:"footer-middle"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Quick Links"),s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(o.b,{to:"/menu-v1"},"Products")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Recipes")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Blog")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:"/locations"},"Contact")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Usa")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Legal Links"),s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Terms of Use")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Privacy Policy")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Shipping Policy")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Refund Policy")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Payment Services")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Contact"),s.a.createElement("ul",null,s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Call Us")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Email")," "),s.a.createElement("li",null," ",s.a.createElement(o.b,{to:" "},"Locate")," "))),s.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},s.a.createElement("h5",{className:"widget-title"},"Social Media"),s.a.createElement("ul",{className:"social-media"},s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},s.a.createElement("i",{className:"fab fa-facebook-f"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},s.a.createElement("i",{className:"fab fa-youtube"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},s.a.createElement("i",{className:"fab fa-instagram"}))),s.a.createElement("li",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/i/flow/login?redirect_after_login=%2Ftnldoublehorse",className:"twitter"},s.a.createElement("i",{className:"fab fa-twitter"})))),s.a.createElement("div",{className:"footer-offer"},s.a.createElement("p",{className:"text-dark"},"Download Our Brochure for More Information!"),s.a.createElement(o.b,{to:" ",className:"btn-custom btn-sm shadow-none"},"Download Brochure")))))),s.a.createElement("div",{className:"footer-bottom"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"footer-copyright"},s.a.createElement("p",null," Copyright \xa9 2022 ",s.a.createElement(o.b,{to:" "},"Tenali Double Horse ")," All Rights Reserved. "),s.a.createElement(o.b,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},s.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),t}(m.Component);t.a=u},67:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),m=a(0),s=a.n(m),o=a(5),u=a(90),d=a.n(u),E=a(56),b=E.reduce(function(e,t){return e+t.price*t.qty},0),h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(m.Fragment,null,s.a.createElement("div",{className:"cart-sidebar-body"},s.a.createElement(d.a,{className:"cart-sidebar-scroll",style:{height:"100vh"}},E.map(function(e,t){return s.a.createElement("div",{key:t,className:"cart-sidebar-item"},s.a.createElement("div",{className:"media"},s.a.createElement(o.b,{to:"/menu-item-v1/1"},s.a.createElement("img",{src:"./"+e.img,alt:e.name})),s.a.createElement("div",{className:"media-body"},s.a.createElement("h5",null," ",s.a.createElement(o.b,{to:"/menu-item-v1/1",title:e.name},e.name)," "),s.a.createElement("span",null,e.qty,"x ",(new Intl.NumberFormat).format(e.price.toFixed(2)),"$"))),s.a.createElement("div",{className:"cart-sidebar-item-meta"},e.flavours.map(function(e,t){return s.a.createElement("span",{key:t},e)})),s.a.createElement("div",{className:"cart-sidebar-price"},(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$"),s.a.createElement("div",{className:"close-btn"},s.a.createElement("span",null),s.a.createElement("span",null)))}))),s.a.createElement("div",{className:"cart-sidebar-footer"},s.a.createElement("h4",null,"Total: ",s.a.createElement("span",null,(new Intl.NumberFormat).format(b.toFixed(2)),"$")," "),s.a.createElement("button",{type:"button",className:"btn-custom"},"Checkout")))}}]),t}(m.Component);t.a=h},68:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),m=a(0),s=a.n(m),o=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"search-form",method:"post"},s.a.createElement("input",{type:"text",placeholder:"Search..."}),s.a.createElement("button",{type:"submit",className:"search-btn"},s.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),t}(m.Component);t.a=o},69:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),m=a(0),s=a.n(m),o=a(5),u=a(58),d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth<=767;return s.a.createElement(m.Fragment,null,s.a.createElement(o.b,{className:"navbar-brand",to:"/"},s.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),s.a.createElement("div",{className:"aside-scroll"},s.a.createElement("ul",null,u.length>0?u.map(function(a,n){return t&&"Blog"===a.linkText?null:s.a.createElement("li",{key:n,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?s.a.createElement(o.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):s.a.createElement(o.b,{to:a.link}," ",a.linkText," "),a.child?s.a.createElement("ul",{className:"submenu ".concat(a.child?"menu-item-has-children":"")},a.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(o.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(o.b,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(o.b,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),t}(a(57).a);t.a=d},89:function(e,t,a){"use strict";var n=a(49),l=a(50),c=a(53),r=a(51),i=a(52),m=a(0),s=a.n(m),o=a(5),u=a(57),d=a(67),E=a(68),b=a(69),h=a(58),g=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"navbar-nav "},h.length>0?h.slice(0,2).map(function(t,a){return s.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?s.a.createElement(o.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):s.a.createElement(o.b,{to:t.link}," ",t.linkText," "),t.child?s.a.createElement("ul",{className:"submenu",role:"menu"},t.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(o.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(o.b,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(o.b,{to:e.link},e.linkText))})):null)})):null)}):null,s.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},s.a.createElement(o.b,{to:"/menu-v1"},"Products"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h5",{className:"text-center"},"Explore Our Products Range "),s.a.createElement("div",{className:"mega-menu-item d-flex justify-content-center align-items-center"},s.a.createElement("div",{className:"col-lg-4 d-flex flex-column justify-content-center align-items-center"},s.a.createElement("a",{href:"/menu-v1"}," ",s.a.createElement("img",{src:"./assets/img/prods/tenali-double-horse-icon.png",alt:"pizza"})),s.a.createElement(o.b,{to:"/menu-v1"},s.a.createElement("a",{className:"btn-custom  shadow-none btn-sm"},"View More"))),s.a.createElement("div",{className:"col-lg-4 d-flex flex-column justify-content-center align-items-center"},s.a.createElement("a",{href:"/Tenalifoodproducts"}," ",s.a.createElement("img",{src:"./assets/img/prods/tdh-icon.png",alt:"pizza"})),s.a.createElement(o.b,{to:"/menu-v2"},s.a.createElement("button",{className:"btn-custom  shadow-none btn-sm"},"View More")))))))))),h.length>0?h.slice(4,10).map(function(t,a){return s.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?s.a.createElement(o.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):s.a.createElement(o.b,{to:t.link}," ",t.linkText," "),t.child?s.a.createElement("ul",{className:"sub-menu",role:"menu"},t.submenu.map(function(e,t){return s.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?s.a.createElement(o.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):s.a.createElement(o.b,{to:e.link}," ",e.linkText," "),e.submenu?s.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,t){return s.a.createElement("li",{className:"menu-item",key:t},s.a.createElement(o.b,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),t}(m.Component),f=a(54),p=a.n(f),k=(a(56),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(m.Fragment,null,s.a.createElement("div",{className:"cart-sidebar-wrapper"},s.a.createElement("aside",{className:p()("cart-sidebar",{"cart-open":this.state.cartmethod})},s.a.createElement("div",{className:"cart-sidebar-header"},s.a.createElement("h3",null,"Your Cart"),s.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement(d.a,null)),s.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),s.a.createElement("div",{className:p()("search-form-wrapper",{open:this.state.searchmethod})},s.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement(E.a,null)),s.a.createElement("aside",{className:p()("main-aside",{open:this.state.navmethod})},s.a.createElement(b.a,null)),s.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),s.a.createElement("header",{className:"main-header header-1 header-absolute header-light"},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar"},s.a.createElement(o.b,{className:"navbar-brand",to:"/"}," ",s.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-250x73.png",alt:"logo"})," "),s.a.createElement(g,null),s.a.createElement("div",{className:"header-controls"},s.a.createElement("ul",{className:"header-controls-inner"},s.a.createElement("div",{className:"floating-container"},s.a.createElement("div",{className:"floating-button share-icon"}," ",s.a.createElement("img",{src:"./assets/img/header/network-connection.png",alt:"topicon"})),s.a.createElement("div",{className:"element-container"},s.a.createElement("span",{className:"float-element tooltip-left"},s.a.createElement("i",{class:"fab fa-facebook-f"})),s.a.createElement("span",{className:"float-element"},s.a.createElement("i",{class:"fab fa-twitter"})),s.a.createElement("span",{className:"float-element"},s.a.createElement("i",{class:"fab fa-instagram"})),s.a.createElement("span",{className:"float-element"},s.a.createElement("i",{class:"fab fa-linkedin-in"})),s.a.createElement("span",{className:"float-element"},s.a.createElement("i",{class:"fab fa-youtube"}))))),s.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)))))))}}]),t}(u.a));t.a=k}}]);
//# sourceMappingURL=3.9293e356.chunk.js.map