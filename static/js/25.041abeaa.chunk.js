(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{353:function(e,t,a){"use strict";a.r(t);var l=a(49),n=a(50),r=a(52),c=a(51),m=a(53),s=a(0),o=a.n(s),i=a(66),u=a.n(i),E=a(69),d=a(84),p=a(58),h=a(5),b=a(56),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).IncrementItem=function(e){e.qty=e.qty+1,a.setState({cartitem:a.state.cartitem,priceTotal:b.reduce(function(e,t){return e+t.price*t.qty},0)})},a.DecreaseItem=function(e){e.qty=e.qty-1,a.setState({cartitem:a.state.cartitem,priceTotal:b.reduce(function(e,t){return e+t.price*t.qty},0)})},a.state={priceTotal:b.reduce(function(e,t){return e+t.price*t.qty},0),cartitem:b},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"container"},o.a.createElement("table",{className:"ct-responsive-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"remove-item"}),o.a.createElement("th",null,"Product"),o.a.createElement("th",null,"Price"),o.a.createElement("th",null,"Qunantity"),o.a.createElement("th",null,"Total"))),o.a.createElement("tbody",null,b.map(function(t,a){return o.a.createElement("tr",{key:a},o.a.createElement("td",{className:"remove"},o.a.createElement("button",{type:"button",className:"close-btn close-danger remove-from-cart"},o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement("td",{"data-title":"Product"},o.a.createElement("div",{className:"cart-product-wrapper"},o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/"+t.img,alt:t.name}),o.a.createElement("div",{className:"cart-product-body"},o.a.createElement("h6",null," ",o.a.createElement(h.b,{to:"/menu-item-v1/1"},t.name)," "),t.flavours.map(function(e,t){return o.a.createElement("p",{key:t},e)})))),o.a.createElement("td",{"data-title":"Price"}," ",o.a.createElement("strong",null,(new Intl.NumberFormat).format(t.price.toFixed(2)),"$")," "),o.a.createElement("td",{className:"quantity","data-title":"Quantity"},o.a.createElement("div",{className:"qty"},o.a.createElement("span",{className:"qty-subtract",onClick:function(){return e.DecreaseItem(t)}},o.a.createElement("i",{className:"fa fa-minus"})),o.a.createElement("input",{type:"text",name:"clicks",value:t.qty,readOnly:!0}),o.a.createElement("span",{className:"qty-add",onClick:function(){return e.IncrementItem(t)}},o.a.createElement("i",{className:"fa fa-plus"})))),o.a.createElement("td",{"data-title":"Total"}," ",o.a.createElement("strong",null,(new Intl.NumberFormat).format((t.price*t.qty).toFixed(2)),"$")," "))}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("div",{className:"form-group mb-0"},o.a.createElement("div",{className:"input-group mb-0"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Coupon Code","aria-label":"Coupon Code"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn-custom shadow-none",type:"button"},"Apply")))))),o.a.createElement("div",{className:"row ct-cart-form"},o.a.createElement("div",{className:"offset-lg-6 col-lg-6"},o.a.createElement("h4",null,"Cart Total"),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Subtotal"),o.a.createElement("td",null,(new Intl.NumberFormat).format(this.state.priceTotal.toFixed(2)),"$")),o.a.createElement("tr",null,o.a.createElement("th",null,"Tax"),o.a.createElement("td",null," ",9.99,"$ ",o.a.createElement("span",{className:"small"},"(11%)")," ")),o.a.createElement("tr",null,o.a.createElement("th",null,"Total"),o.a.createElement("td",null," ",o.a.createElement("b",null,(new Intl.NumberFormat).format((this.state.priceTotal+9.99).toFixed(2)),"$")," ")))),o.a.createElement("button",{type:"submit",className:"btn-custom primary btn-block"},"Proceeed to Checkout")))))}}]),t}(s.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Slices - React Template | ","Cart"),o.a.createElement("meta",{name:"description",content:"#"})),o.a.createElement(E.a,null),o.a.createElement(d.a,{breadcrumb:{pagename:"Cart"}}),o.a.createElement(g,null),o.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),t}(s.Component);t.default=N},69:function(e,t,a){"use strict";var l=a(49),n=a(50),r=a(52),c=a(51),m=a(53),s=a(0),o=a.n(s),i=a(5),u=a(57),E=a(59),d=a(60),p=a(61),h=a(62),b=a(54),g=a.n(b),N=a(56),v=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement("div",{className:"cart-sidebar-wrapper"},o.a.createElement("aside",{className:g()("cart-sidebar",{"cart-open":this.state.cartmethod})},o.a.createElement("div",{className:"cart-sidebar-header"},o.a.createElement("h3",null,"Your Cart"),o.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement(E.a,null)),o.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),o.a.createElement("div",{className:g()("search-form-wrapper",{open:this.state.searchmethod})},o.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},o.a.createElement("span",null),o.a.createElement("span",null)),o.a.createElement(d.a,null)),o.a.createElement("aside",{className:g()("main-aside",{open:this.state.navmethod})},o.a.createElement(p.a,null)),o.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),o.a.createElement("header",{className:"main-header header-1 header-absolute header-light"},o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar"},o.a.createElement(i.b,{className:"navbar-brand",to:"/"}," ",o.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/assets/img/transparent-logo.png",alt:"logo"})," "),o.a.createElement(h.a,null),o.a.createElement("div",{className:"header-controls"},o.a.createElement("ul",{className:"header-controls-inner"},o.a.createElement("li",{className:"cart-dropdown-wrapper cart-trigger",onClick:this.cartToggle},o.a.createElement("span",{className:"cart-item-count"},N.length),o.a.createElement("i",{className:"flaticon-shopping-bag"})),o.a.createElement("li",{className:"search-dropdown-wrapper search-trigger",onClick:this.searchToggle},o.a.createElement("i",{className:"flaticon-search"}))),o.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)))))))}}]),t}(u.a);t.a=v}}]);
//# sourceMappingURL=25.041abeaa.chunk.js.map