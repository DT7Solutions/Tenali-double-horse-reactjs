(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{106:function(e,t,a){"use strict";var n=a(48),c=a(49),l=a(51),r=a(50),s=a(52),m=a(0),i=a.n(m),o=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"subheader dark-overlay dark-overlay-2",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/Tenali-Double-Horse-About-1920x800.jpg)"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subheader-inner"},i.a.createElement("h1",null,this.props.breadcrumb.pagename),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(o.b,{to:"/"},"Home")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(m.Component);t.a=u},112:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(59);function c(e){return n.filter(function(t){return t.id===parseInt(e)})[0]}},116:function(e,t,a){"use strict";var n=a(48),c=a(49),l=a(51),r=a(50),s=a(52),m=a(0),i=a.n(m),o=a(337),u=a(112),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).IncrementItem=function(){a.setState({clicks:a.state.clicks+1})},a.DecreaseItem=function(){a.state.clicks<1?a.setState({clicks:0}):a.setState({clicks:a.state.clicks-1})},a.state={clicks:1},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({clicks:e.target.value})}},{key:"render",value:function(){var e=this.props.productId,t=Object(u.a)(e);return i.a.createElement(m.Fragment,null,i.a.createElement(o.a.Header,{className:"modal-bg mt-5",closeButton:!0,style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/"+t.img+")"}}),i.a.createElement(o.a.Body,null,i.a.createElement("div",{className:"customize-meta"},i.a.createElement("h4",{className:"customize-title"},t.name," ",i.a.createElement("span",{className:"custom-primary"},(new Intl.NumberFormat).format(t.price.toFixed(2)),"\u20b9")," "),i.a.createElement("p",null,t.shortdesc)),i.a.createElement("div",{className:"customize-variations"},i.a.createElement("div",{className:"customize-size-wrapper"},i.a.createElement("h5",null,"Size: "),t.sizes.map(function(e,t){return i.a.createElement("div",{key:t,className:e.state?"customize-size active":"customize-size"},e.size)})),i.a.createElement("div",{className:"row"},t.attributes.slice(0,3).map(function(e,t){return i.a.createElement("div",{key:t,className:"col-lg-4 col-12"},i.a.createElement("div",{className:"customize-variation-wrapper"},i.a.createElement("i",{className:e.icon}),i.a.createElement("h5",null,e.name),e.items.map(function(t,a){return i.a.createElement("div",{key:a,className:"customize-variation-item"},i.a.createElement("div",{className:"custom-control custom-"+e.type},i.a.createElement("input",{type:e.type,id:t.title+a,name:e.name,className:"custom-control-input"}),i.a.createElement("label",{className:"custom-control-label",htmlFor:t.title+a},t.title)),i.a.createElement("span",null,"+",(new Intl.NumberFormat).format(t.addprice.toFixed(2)),"$"))})))}))),i.a.createElement("div",{className:"customize-controls"},i.a.createElement("div",{className:"qty"},i.a.createElement("span",{className:"qty-subtract",onClick:this.DecreaseItem},i.a.createElement("i",{className:"fa fa-minus"})),i.a.createElement("input",{type:"text",name:"clicks",value:this.state.clicks,onChange:this.handleChange.bind(this)}),i.a.createElement("span",{className:"qty-add",onClick:this.IncrementItem},i.a.createElement("i",{className:"fa fa-plus"}))),i.a.createElement("div",{className:"customize-total","data-price":(new Intl.NumberFormat).format(t.price.toFixed(2))},i.a.createElement("h5",null,"Total Price: ",i.a.createElement("span",{className:"final-price custom-primary"},(new Intl.NumberFormat).format(t.price.toFixed(2))," ",i.a.createElement("span",null,"\u20b9")," ")," "))),i.a.createElement("button",{type:"button",className:"btn-custom btn-block"},"Order Now")))}}]),t}(m.Component);t.a=d},117:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),c=a.n(n);function l(e){for(var t=[],a=0;a<5;a++)t.push(c.a.createElement("i",{className:"fa fa-star",key:a}));if(e&&e>0)for(var n=0;n<=e;n++)t[n]=c.a.createElement("i",{className:"fa fa-star active",key:n});return t}},358:function(e,t,a){"use strict";a.r(t);var n=a(48),c=a(49),l=a(51),r=a(50),s=a(52),m=a(0),i=a.n(m),o=a(107),u=a.n(o),d=a(119),b=a(106),p=a(54),E=a(56),v=a(5),h=a(337),f=a(116),N=a(59),g=a(66),y=a(117),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={modalshow:!1,lastActiveBox:-1},a.modalShow=a.modalShow.bind(Object(E.a)(Object(E.a)(a))),a.modalClose=a.modalClose.bind(Object(E.a)(Object(E.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"modalShow",value:function(e){this.setState({modalshow:!0,lastActiveBox:e})}},{key:"modalClose",value:function(){this.setState({modalshow:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"section section-padding menu-v2"},i.a.createElement("div",{className:"container"},g.map(function(t,a){return i.a.createElement(m.Fragment,{key:a},i.a.createElement("div",{className:"menu-category dark-overlay dark-overlay-2",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/"+t.lgimg+")"}},i.a.createElement("h3",null,t.title),i.a.createElement("p",null,t.shortdesc)),i.a.createElement("div",{className:"row"},N.filter(function(e){return e.category.includes(t.id)}).map(function(t,a){return i.a.createElement("div",{className:"col-lg-4 col-md-6",key:a},i.a.createElement("div",{className:"product"},i.a.createElement("div",{className:"favorite"},i.a.createElement("i",{className:"far fa-heart"})),i.a.createElement(v.b,{className:"product-thumb",to:"/menu-item-v1/"+t.id},i.a.createElement("img",{src:"/Tenali-Double-horse-Reactjs/"+t.img,alt:t.name})),i.a.createElement("div",{className:"product-body"},i.a.createElement("div",{className:"product-desc"},i.a.createElement("h4",null," ",i.a.createElement(v.b,{to:"/menu-item-v1/"+t.id},t.name)),i.a.createElement("div",{className:"ct-rating-wrapper"},i.a.createElement("div",{className:"ct-rating"},Object(y.a)(t.rating))),i.a.createElement("p",null,t.shortdesc),i.a.createElement(v.b,{to:"#",className:"btn-custom light btn-sm shadow-none",onClick:function(a){return e.modalShow(t.id)}}," Customize ",i.a.createElement("i",{className:"fas fa-plus"})," ")),i.a.createElement("div",{className:"product-controls"},i.a.createElement("p",{className:"product-price"},(new Intl.NumberFormat).format(t.price.toFixed(2)),"$"),i.a.createElement(v.b,{to:"/menu-item-v1/"+t.id,className:"order-item btn-custom btn-sm shadow-none"},"Order ",i.a.createElement("i",{className:"fas fa-shopping-cart"})," ")))))})))})),i.a.createElement(h.a,{show:this.state.modalshow,id:"customizeModal",onHide:this.modalClose,"aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0},i.a.createElement(f.a,{productId:this.state.lastActiveBox})))}}]),t}(m.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Slices - React Template | ","Menu v2"),i.a.createElement("meta",{name:"description",content:"#"})),i.a.createElement(d.a,null),i.a.createElement(b.a,{breadcrumb:{pagename:"Menu v2"}}),i.a.createElement(k,null),i.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),t}(m.Component);t.default=j}}]);
//# sourceMappingURL=29.426e359e.chunk.js.map