(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{180:function(e){e.exports=[{id:1,img:"assets/img/prods-sm/1.png",name:"Eco Pack",qty:4,price:154.99,flavours:["14 Inches","Extra Cheese","Cheese Crust"]}]},182:function(e,t,a){"use strict";var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(189),o=a(0),m=a.n(o),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).getNextSibling=function(e,t){var a=e.nextElementSibling;if(!t)return a;for(;a;){if(a.matches(t))return a;a=a.nextElementSibling}},a.triggerChild=function(e){var t="";null!==(t=void 0!==a.getNextSibling(e.target,".submenu")?a.getNextSibling(e.target,".submenu"):null)&&void 0!==t&&""!==t&&(t.classList=t.classList.contains("d-block")?"submenu":"submenu d-block")},a.state={navmethod:!1,cartmethod:!1,searchmethod:!1},a.toggleNav=a.toggleNav.bind(Object(s.a)(Object(s.a)(a))),a.cartToggle=a.cartToggle.bind(Object(s.a)(Object(s.a)(a))),a.searchToggle=a.searchToggle.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null)}}]),t}(o.Component);t.a=u},183:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"About",link:"/about",child:!0,submenu:[{id:21,linkText:"Our Company",link:"/about"},{id:23,link:"/Where-we-are",linkText:"Where We Are"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",link:"/menu-v1",child:!0,submenu:[{id:41,link:"/menu-v1",linkText:"TDH Products"},{id:42,link:"/menu-v2",linkText:"TDHF Products"}]},{id:5,linkText:"Contact",link:"/locations"}]},185:function(e,t,a){"use strict";var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(0),o=a.n(s),m=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return o.a.createElement("footer",{id:"footer-bg",className:this.props.footer.style,style:{position:"relative",backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/footer/footer-bg-image.png)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-top"},o.a.createElement("div",{className:"footer-logo"},o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/"+this.props.footer.logo,alt:"logo"})),o.a.createElement("div",{className:"footer-buttons",style:{position:"absolute",top:"-25px",right:"-1%",zIndex:"9999"}},o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/great-place-to-work-image.png",style:{height:"180px",width:"100%"},alt:"logo"})))),o.a.createElement("div",{className:"footer-middle"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Quick Links"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(m.b,{to:"/menu-v1"},"Products")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Recipes")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Blog")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:"/locations"},"Contact")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Usa")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Legal Links"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Terms of Use")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Privacy Policy")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Shipping Policy")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Refund Policy")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Payment Services")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Contact"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Call Us")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Email")," "),o.a.createElement("li",null," ",o.a.createElement(m.b,{to:" "},"Locate")," "))),o.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},o.a.createElement("h5",{className:"widget-title"},"Social Media"),o.a.createElement("ul",{className:"social-media"},o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},o.a.createElement("i",{className:"fab fa-facebook-f"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},o.a.createElement("i",{className:"fab fa-youtube"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},o.a.createElement("i",{className:"fab fa-instagram"}))),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/i/flow/login?redirect_after_login=%2Ftnldoublehorse",className:"twitter"},o.a.createElement("i",{className:"fab fa-twitter"})))),o.a.createElement("div",{className:"footer-offer"},o.a.createElement("p",{className:"text-light"},"Download Our Brochure for More Information!"),o.a.createElement(m.b,{to:" ",className:"btn-custom btn-sm shadow-none"},"Download Brochure")))))),o.a.createElement("div",{className:"footer-bottom"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-copyright"},o.a.createElement("p",null," Copyright \xa9 2022 ",o.a.createElement(m.b,{to:" "},"Tenali Double Horse ")," All Rights Reserved. "),o.a.createElement(m.b,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},o.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),t}(s.Component);t.a=u},192:function(e,t,a){"use strict";var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(0),o=a.n(s),m=a(5),u=a(212),b=a.n(u),d=a(180),E=d.reduce(function(e,t){return e+t.price*t.qty},0),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement("div",{className:"cart-sidebar-body"},o.a.createElement(b.a,{className:"cart-sidebar-scroll",style:{height:"100vh"}},d.map(function(e,t){return o.a.createElement("div",{key:t,className:"cart-sidebar-item"},o.a.createElement("div",{className:"media"},o.a.createElement(m.b,{to:"/menu-item-v1/1"},o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/"+e.img,alt:e.name})),o.a.createElement("div",{className:"media-body"},o.a.createElement("h5",null," ",o.a.createElement(m.b,{to:"/menu-item-v1/1",title:e.name},e.name)," "),o.a.createElement("span",null,e.qty,"x ",(new Intl.NumberFormat).format(e.price.toFixed(2)),"$"))),o.a.createElement("div",{className:"cart-sidebar-item-meta"},e.flavours.map(function(e,t){return o.a.createElement("span",{key:t},e)})),o.a.createElement("div",{className:"cart-sidebar-price"},(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$"),o.a.createElement("div",{className:"close-btn"},o.a.createElement("span",null),o.a.createElement("span",null)))}))),o.a.createElement("div",{className:"cart-sidebar-footer"},o.a.createElement("h4",null,"Total: ",o.a.createElement("span",null,(new Intl.NumberFormat).format(E.toFixed(2)),"$")," "),o.a.createElement("button",{type:"button",className:"btn-custom"},"Checkout")))}}]),t}(s.Component);t.a=h},193:function(e,t,a){"use strict";var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(0),o=a.n(s),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"search-form",method:"post"},o.a.createElement("input",{type:"text",placeholder:"Search..."}),o.a.createElement("button",{type:"submit",className:"search-btn"},o.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),t}(s.Component);t.a=m},194:function(e,t,a){"use strict";var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(0),o=a.n(s),m=a(5),u=a(183),b=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth<=767;return o.a.createElement(s.Fragment,null,o.a.createElement(m.b,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),o.a.createElement("div",{className:"aside-scroll"},o.a.createElement("ul",null,u.length>0?u.map(function(a,n){return t&&"Blog"===a.linkText?null:o.a.createElement("li",{key:n,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?o.a.createElement(m.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):o.a.createElement(m.b,{to:a.link}," ",a.linkText," "),a.child?o.a.createElement("ul",{className:"submenu ".concat(a.child?"menu-item-has-children":"")},a.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(m.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(m.b,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(m.b,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),t}(a(182).a);t.a=b},202:function(e,t,a){"use strict";var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(0),o=a.n(s),m=a(5),u=a(183),b=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"navbar-nav "},u.length>0?u.slice(0,2).map(function(t,a){return o.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?o.a.createElement(m.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):o.a.createElement(m.b,{to:t.link}," ",t.linkText," "),t.child?o.a.createElement("ul",{className:"submenu",role:"menu"},t.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(m.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(m.b,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(m.b,{to:e.link},e.linkText))})):null)})):null)}):null,o.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},o.a.createElement(m.b,{to:"/menu-v1"},"Products")),u.length>0?u.slice(4,10).map(function(t,a){return o.a.createElement("li",{key:a,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?o.a.createElement(m.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):o.a.createElement(m.b,{to:t.link}," ",t.linkText," "),t.child?o.a.createElement("ul",{className:"sub-menu",role:"menu"},t.submenu.map(function(e,t){return o.a.createElement("li",{key:t,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?o.a.createElement(m.b,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):o.a.createElement(m.b,{to:e.link}," ",e.linkText," "),e.submenu?o.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,t){return o.a.createElement("li",{className:"menu-item",key:t},o.a.createElement(m.b,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),t}(s.Component);t.a=b},236:function(e,t,a){"use strict";var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(0),o=a.n(s),m=a(5),u=a(182),b=a(192),d=a(193),E=a(194),h=a(202),g=a(178),f=a.n(g),p=(a(180),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement("div",{className:"cart-sidebar-wrapper"},o.a.createElement("aside",{className:f()("cart-sidebar",{"cart-open":this.state.cartmethod})},o.a.createElement("div",{className:"cart-sidebar-header"},o.a.createElement("h3",null,"Your Cart"),o.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement(b.a,null)),o.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),o.a.createElement("div",{className:f()("search-form-wrapper",{open:this.state.searchmethod})},o.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement(d.a,null)),o.a.createElement("aside",{className:f()("main-aside",{open:this.state.navmethod})},o.a.createElement(E.a,null)),o.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),o.a.createElement("header",{className:"main-header header-1"},o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar"},o.a.createElement(m.b,{className:"navbar-brand",to:"/"}," ",o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})," "),o.a.createElement(h.a,null),o.a.createElement("div",{className:"header-controls"},o.a.createElement("ul",{className:"header-controls-inner"}),o.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)))))))}}]),t}(u.a));t.a=p},408:function(e,t,a){"use strict";a.r(t);var n=a(174),l=a(175),r=a(47),c=a(176),i=a(177),s=a(0),o=a.n(s),m=a(196),u=a.n(m),b=a(236),d=a(185),E=a(5),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"page-404-wrapper"},o.a.createElement("div",{className:"page-404-text"},o.a.createElement("h1",null,"Page Not Found"),o.a.createElement("p",null,"Sorry, the page you're looking for does not exist"),o.a.createElement(E.b,{to:"/",className:"btn-custom"},"Go Back Home")),o.a.createElement("div",{className:"banner-bottom-img"},o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/veg/2.png",alt:"veg"}),o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/prods/3.png",alt:"pizza"}),o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/veg/12.png",alt:"veg"})))}}]),t}(s.Component),g=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Slices - React Template | ","Error 404"),o.a.createElement("meta",{name:"description",content:"#"})),o.a.createElement("div",{style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/bg/pattern.jpg)"}},o.a.createElement(b.a,null),o.a.createElement(h,null),o.a.createElement(d.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}})))}}]),t}(s.Component);t.default=g}}]);
//# sourceMappingURL=27.1aec270b.chunk.js.map