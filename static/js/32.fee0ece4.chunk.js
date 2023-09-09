(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{410:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a(48),l=a(332),o=a(49),c=a(50),i=a(0),s=a.n(i),m=a(66),u=a.n(m),d=a(150),h=a(56),p=a(58),b=a(57),f=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"section"},s.a.createElement("h1",{className:"text-center legeal-title"}," Shipping Policy"),s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("h5",null,s.a.createElement("u",null,"Shipping of Products")),s.a.createElement("ul",{className:"terms"},s.a.createElement("li",null,"Orders placed by You on the Platform are typically processed within 2 (two) business days from the date of purchase. The Products ordered will be delivered to You within 2 (two) \u2013 5 (five) business days. At times when we are experiencing high volume of orders, shipments may get delayed by a few days, in which case, You will be intimated by email or telephone call (on the details shared by You at the time of placing Your order/registering on the Platform)."),s.a.createElement("li",null,"Once Your order is dispatched, You will receive an e-mail or SMS updating You with the details of the time and progress of the delivery. On the date of delivery, the person delivering the Product will reach out to You (on the number shared by You at the time of placing Your order/registering on the Platform) to confirm Your presence to receive the Order."),s.a.createElement("li",null,"You are requested to be available on the date of delivery since the Products will either be hand delivered to You or to someone appointed by You to collect the order on Your behalf."),s.a.createElement("li",null,"All deliveries sent to residential or commercial spaces require a receipt signature for authentication. We take no responsibility for shipment receipt signed by an alternative person other than the person ordering the Product or someone appointed by You to receive the order at the delivery address. Maximum of 2 (two) attempts will be made on the date of delivery to deliver the Product at the address indicated as the delivery point, at the time of placing the order post which the order will be cancelled, and refund will not be given to You."),s.a.createElement("li",null," We do not take responsibility for an incorrect address that was provided at the time of placing the order. In case of an incorrect address, the product will be returned by the rider and refund will not be given to You."),s.a.createElement("li",null,"All claims for damages must be reported to customer service through an email at: ",s.a.createElement("a",{href:"mailto:Info@tenalidoublehorse.com"},"Info@tenalidoublehorse.com")," within 24 (twenty four) hours of order delivery."),s.a.createElement("li",null,"For each order, a shipment charge will have to be paid by the customer. The exact shipment charges for the order will be shown to the customer at the order checkout page."),s.a.createElement("li",null,"As soon as the customer receives the Product, the customer should store it under the storage conditions mentioned on the back of the pack. No  replacement or refunds will be done for any quality loss or damages if the Product is not stored in the storage conditions mentioned at the back of the pack."))))),s.a.createElement(p.a,null),s.a.createElement(b.a,null))}}]),t}(i.Component),g=a(64),E=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("title",null,"Tenali  doublehorse | ","Shipping Policy"),s.a.createElement("meta",{name:"description",content:"#"})),s.a.createElement(d.a,null),s.a.createElement(g.a,{breadcrumb:{pagename:"Shipping Policy",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),s.a.createElement(f,null),s.a.createElement(h.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-250x73.png"}}))}}]),t}(i.Component);t.default=E},57:function(e,t,a){"use strict";var n=a(333),r=a(0),l=a.n(r),o=a(82),c=a(88);t.a=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(""),m=Object(n.a)(s,2),u=m[0],d=m[1],h=Object(r.useState)(""),p=Object(n.a)(h,2),b=p[0],f=p[1],g=Object(r.useState)(""),E=Object(n.a)(g,2),v=E[0],y=E[1],w=function(){i(!a)};return l.a.createElement("div",null,l.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),l.a.createElement("div",{id:"feedbackDrawer",className:a?"showDrawer":""},l.a.createElement("div",{id:"feedbackForm"},l.a.createElement(o.a,{onSubmit:function(e){e.preventDefault();var t={fullName:u,email:b,message:v};c.a.send("service_u0jehlt","template_aamrei5",t,"cjCRUWDX0cKAQSKL6").then(function(e){console.log("Email sent successfully:",e),alert("Message successfully sent!")}).catch(function(e){console.error("Email sending error:",e)}),d(""),f(""),y(""),i(!1)}},l.a.createElement("h2",null,"Submit Feedback"),l.a.createElement(o.a.Group,{controlId:"fullName",style:{marginBottom:"5px"}},l.a.createElement(o.a.Control,{type:"text",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Full Name",required:!0})),l.a.createElement(o.a.Group,{controlId:"email",style:{marginBottom:"5px"}},l.a.createElement(o.a.Control,{type:"email",value:b,onChange:function(e){return f(e.target.value)},placeholder:"Email",required:!0})),l.a.createElement(o.a.Group,{controlId:"message",style:{marginBottom:"5px"}},l.a.createElement(o.a.Control,{as:"textarea",value:v,onChange:function(e){return y(e.target.value)},placeholder:"Message",rows:"5",required:!0})),l.a.createElement("button",{type:"submit",className:"btn-custom btn-sm primary",name:"button"},"Send Message"))),l.a.createElement("div",{id:"feedbackSuccess"},l.a.createElement("h2",null,"Thank You"),l.a.createElement("p",null,"Your feedback was successfully submitted"),l.a.createElement("button",{onClick:w},"Submit More Feedback")),l.a.createElement("div",{id:"feedbackError"},l.a.createElement("h2",null,"Aw, Snap!"),l.a.createElement("p",null,"There was an error submitting your feedback"),l.a.createElement("button",{onClick:w},"Try Again")),l.a.createElement("div",{id:"feedbackTrigger",onClick:w},"Feedback",l.a.createElement("span",{id:"close"},"\xbb"))))}},58:function(e,t,a){"use strict";var n=a(47),r=a(48),l=a(332),o=a(49),c=a(50),i=a(0),s=a.n(i),m=(a(59),a(60),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).handleAccordionClick=function(e){a.setState(function(t){return{openIndex:t.openIndex===e?-1:e}})},a.state={openIndex:-1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"womensdayawrap "},s.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(t,a){return s.a.createElement("div",{key:a,className:"accordion-item ".concat(a===e.state.openIndex?"open":"")},s.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(a)}},s.a.createElement("span",null,s.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),s.a.createElement("span",null,s.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},t.heading)),s.a.createElement("div",{className:"plusicon ".concat(a===e.state.openIndex?"minusicon":"plusicon")})),a===e.state.openIndex&&s.a.createElement("div",{className:"accordion-content bg-white"},s.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",s.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),s.a.createElement("p",{className:"p-1 text-center"},"mail us ",s.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),t}(i.Component));t.a=m},59:function(e,t,a){e.exports=a.p+"static/media/trial-notable.ea726d66.png"},60:function(e,t,a){e.exports=a.p+"static/media/aha.cc12d466.png"},64:function(e,t,a){"use strict";var n=a(47),r=a(48),l=a(332),o=a(49),c=a(50),i=a(0),s=a.n(i),m=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"subheader-inner"},s.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item "},s.a.createElement(m.c,{to:"/"},"Home")),s.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(i.Component);t.a=u}}]);
//# sourceMappingURL=32.fee0ece4.chunk.js.map