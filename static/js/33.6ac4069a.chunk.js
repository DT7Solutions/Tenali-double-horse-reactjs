(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{412:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a(48),l=a(333),c=a(49),o=a(50),i=a(0),s=a.n(i),m=a(66),u=a.n(m),d=a(151),p=a(56),h=a(58),b=a(57),f=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"section"},s.a.createElement("h1",{className:"text-center legeal-title"}," Payment Services"),s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("ul",{className:"terms"},s.a.createElement("li",null,"All payments in respect of the Products shall be made to Us through the Platform. To the extent permitted by applicable law and subject to Our Privacy Policy, You acknowledge and agree that We may use certain third-party vendors and service providers, including payment gateways, to process payments and manage payment card information."),s.a.createElement("li",null," In order to make payments online, You undertake to use a valid payment card or bank details or third party wallets or details required for any other mode of payment (\u201cPayment Details\u201d) with the authority to use the same, to have sufficient funds or credit available to complete the payment on the Platform in good standing. By providing the Payment Details, You represent, warrant, and covenant that."),s.a.createElement("li",null," You are legally authorized to provide such Payment Details."),s.a.createElement("li",null,"You are legally authorized to perform payments using such Payment Details and such action does not violate the terms and conditions applicable to Your use of such Payment Details or applicable law."))),s.a.createElement("div",null,s.a.createElement("h5",null,"You agree that You are responsible for any fees charged by Your mobile carrier in connection with Your use of the payment services through Your mobile. We shall use the Payment Details as described in Our Privacy Policy. You may add, delete, and edit the Payment Details You have provided from time to time through the Platform."),s.a.createElement("div",{className:"terms-p"},s.a.createElement("p",null,"The payment receipt for completion of a transaction shall be made available on the Platform and also sent to Your email address."),s.a.createElement("p",null,"Your payment card or bank account or third party wallet does not contain sufficient funds to complete the transaction or the transaction exceeds the credit limit in respect of the Payment Details provided;"),s.a.createElement("p",null,"You have not provided Us with correct Payment Details."),s.a.createElement("p",null,"Your payment card has expired."),s.a.createElement("p",null,"Circumstances beyond Our control (such as, but not limited to, power outages, interruptions of cellular service, or any other interferences from an outside force) prevent the execution of the transaction."),s.a.createElement("p",null,"The Platform shall not be responsible for any unauthorized transactions conducted on our Platform using Your payment card or internet banking. The Platform shall not be obligated to refund any money to You in such instances."),s.a.createElement("p",null,"All information that is collected at the time of payment, like card details, names, passwords etc. are encrypted using Secure Socket Layer (SSL) coding"))))),s.a.createElement(h.a,null),s.a.createElement(b.a,null))}}]),t}(i.Component),E=a(64),y=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("title",null,"Tenali  doublehorse | ","Payment Services"),s.a.createElement("meta",{name:"description",content:"#"})),s.a.createElement(d.a,null),s.a.createElement(E.a,{breadcrumb:{pagename:"Payment Services",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),s.a.createElement(f,null),s.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-250x73.png"}}))}}]),t}(i.Component);t.default=y},57:function(e,t,a){"use strict";var n=a(334),r=a(0),l=a.n(r),c=a(83),o=a(89);t.a=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],s=Object(r.useState)(""),m=Object(n.a)(s,2),u=m[0],d=m[1],p=Object(r.useState)(""),h=Object(n.a)(p,2),b=h[0],f=h[1],E=Object(r.useState)(""),y=Object(n.a)(E,2),g=y[0],v=y[1],k=function(){i(!a)};return l.a.createElement("div",null,l.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),l.a.createElement("div",{id:"feedbackDrawer",className:a?"showDrawer":""},l.a.createElement("div",{id:"feedbackForm"},l.a.createElement(c.a,{onSubmit:function(e){e.preventDefault();var t={fullName:u,email:b,message:g};o.a.send("service_u0jehlt","template_aamrei5",t,"cjCRUWDX0cKAQSKL6").then(function(e){console.log("Email sent successfully:",e),alert("Message successfully sent!")}).catch(function(e){console.error("Email sending error:",e)}),d(""),f(""),v(""),i(!1)}},l.a.createElement("h2",null,"Submit Feedback"),l.a.createElement(c.a.Group,{controlId:"fullName",style:{marginBottom:"5px"}},l.a.createElement(c.a.Control,{type:"text",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Full Name",required:!0})),l.a.createElement(c.a.Group,{controlId:"email",style:{marginBottom:"5px"}},l.a.createElement(c.a.Control,{type:"email",value:b,onChange:function(e){return f(e.target.value)},placeholder:"Email",required:!0})),l.a.createElement(c.a.Group,{controlId:"message",style:{marginBottom:"5px"}},l.a.createElement(c.a.Control,{as:"textarea",value:g,onChange:function(e){return v(e.target.value)},placeholder:"Message",rows:"5",required:!0})),l.a.createElement("button",{type:"submit",className:"btn-custom btn-sm primary",name:"button"},"Send Message"))),l.a.createElement("div",{id:"feedbackSuccess"},l.a.createElement("h2",null,"Thank You"),l.a.createElement("p",null,"Your feedback was successfully submitted"),l.a.createElement("button",{onClick:k},"Submit More Feedback")),l.a.createElement("div",{id:"feedbackError"},l.a.createElement("h2",null,"Aw, Snap!"),l.a.createElement("p",null,"There was an error submitting your feedback"),l.a.createElement("button",{onClick:k},"Try Again")),l.a.createElement("div",{id:"feedbackTrigger",onClick:k},"Feedback",l.a.createElement("span",{id:"close"},"\xbb"))))}},58:function(e,t,a){"use strict";var n=a(47),r=a(48),l=a(333),c=a(49),o=a(50),i=a(0),s=a.n(i),m=(a(59),a(60),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleAccordionClick=function(e){a.setState(function(t){return{openIndex:t.openIndex===e?-1:e}})},a.state={openIndex:-1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"womensdayawrap "},s.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(t,a){return s.a.createElement("div",{key:a,className:"accordion-item ".concat(a===e.state.openIndex?"open":"")},s.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(a)}},s.a.createElement("span",null,s.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),s.a.createElement("span",null,s.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},t.heading)),s.a.createElement("div",{className:"plusicon ".concat(a===e.state.openIndex?"minusicon":"plusicon")})),a===e.state.openIndex&&s.a.createElement("div",{className:"accordion-content bg-white"},s.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",s.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),s.a.createElement("p",{className:"p-1 text-center"},"mail us ",s.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),t}(i.Component));t.a=m},59:function(e,t,a){e.exports=a.p+"static/media/trial-notable.ea726d66.png"},60:function(e,t,a){e.exports=a.p+"static/media/aha.cc12d466.png"},64:function(e,t,a){"use strict";var n=a(47),r=a(48),l=a(333),c=a(49),o=a(50),i=a(0),s=a.n(i),m=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"subheader-inner"},s.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item "},s.a.createElement(m.c,{to:"/"},"Home")),s.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(i.Component);t.a=u}}]);
//# sourceMappingURL=33.6ac4069a.chunk.js.map