(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{376:function(e){e.exports={}},401:function(e,a,t){"use strict";t.r(a);var n=t(49),l=t(50),c=t(53),o=t(51),r=t(52),s=t(0),i=t.n(s),m=t(67),u=t.n(m),p=t(79),d=t(60),E=t(59),f=(t(376),t(108)),b=t.n(f),N=t(111),v=t(4),g=t(386),y=t(423),h=t(394),x=Object(h.b)(function(e,a){return{instance:new f.Popup(e,a.overlayContainer),context:a}},function(e,a,t,n){var l=t.onClose,c=t.onOpen,o=t.position;Object(s.useEffect)(function(){var t=e.instance;function r(e){e.popup===t&&(t.update(),n(!0),null==c||c())}function s(e){e.popup===t&&(n(!1),null==l||l())}return a.map.on({popupopen:r,popupclose:s}),null==a.overlayContainer?(null!=o&&t.setLatLng(o),t.openOn(a.map)):a.overlayContainer.bindPopup(t),function(){a.map.off({popupopen:r,popupclose:s}),null==a.overlayContainer?a.map.removeLayer(t):a.overlayContainer.unbindPopup()}},[e,a,n,l,c,o])}),O=t(387),j=Object(h.b)(function(e,a){return{instance:new f.Tooltip(e,a.overlayContainer),context:a}},function(e,a,t,n){var l=t.onClose,c=t.onOpen;Object(s.useEffect)(function(){var t=a.overlayContainer;if(null!=t){var o=e.instance,r=function(e){e.tooltip===o&&(o.update(),n(!0),null==c||c())},s=function(e){e.tooltip===o&&(n(!1),null==l||l())};return t.on({tooltipopen:r,tooltipclose:s}),t.bindTooltip(o),function(){t.off({tooltipopen:r,tooltipclose:s}),t.unbindTooltip()}}},[e,a,n,l,c])}),w=(t(17),{guntur:{position:[16.268,80.639],name:"Tenali",description:"Description for Guntur",url:"https://www.google.com/maps/place/Tenali+Double+Horse/@16.268832,80.639928,8z/data=!4m6!3m5!1s0x3a4a062f6663586f:0x47ee4650ea8b815d!8m2!3d16.2688321!4d80.6399277!16s%2Fg%2F11dz0y28f_?hl=en&entry=ttu"},hyderabad:{position:[17.437,78.414],name:"HYDERABAD",description:"Description for Hyderabad",url:"https://www.google.com/maps?ll=17.437395,78.414571&z=8&t=m&hl=en&gl=IN&mapclient=embed&cid=15603634934683396795"}}),A=b.a.icon({iconUrl:"./assets/img/misc/marker.png",iconSize:[32,32]}),D=function(e){var a=e.position,t=e.name,n=e.url;return i.a.createElement(O.a,{position:a,icon:A,eventHandlers:{click:function(){window.open(n,"_blank")}}},i.a.createElement(j,null,t))},k=function(){var e=Object(s.useState)("guntur"),a=Object(N.a)(e,2),t=a[0],n=a[1],l=Object(s.useState)(null),c=Object(N.a)(l,2),o=c[0],r=c[1];Object(s.useEffect)(function(){o&&o.setView(w[t].position,12)},[o,t]);var m=function(e){n(e)};return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row "},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{style:{backgroundColor:"#ED4E53"}},i.a.createElement("ul",{className:"ullist controls",style:{display:"flex",margin:"0",padding:"0",listStyleType:"none"}},i.a.createElement("li",{key:"guntur",style:{margin:"0"},className:"guntur"===t?"active":""},i.a.createElement(v.c,{to:"#guntur",className:"location-link",onClick:function(){return m("guntur")},style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"}},"  TENALI ")),i.a.createElement("li",{key:"hyderabad",style:{margin:"0"},className:"hyderabad"===t?"active":""},i.a.createElement(v.c,{to:"#hyderabad",className:"location-link",onClick:function(){return m("hyderabad")},style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"}}," HYDERABAD ")))),i.a.createElement(g.a,{whenCreated:r,center:w[t].position,zoom:8,style:{height:"400px"}},i.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 Tiles \xa9 Esri \u2014 Esri, DeLorme, NAVTEQ",maxZoom:16}),Object.keys(w).map(function(e){return i.a.createElement(D,{key:e,position:w[e].position,name:w[e].name,url:w[e].url},e===t&&i.a.createElement(x,null,w[e].description))})))))},L=(b.a.icon({iconUrl:"./assets/img/misc/marker.png",iconSize:[32,32]}),function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container locations-wrapper"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section-title-wrap text-center mb-5"},i.a.createElement("h5",{className:"custom-primary"},"Let's Chat"),i.a.createElement("h2",{className:"title"},"Contact Us for Any Questions or Business Inquiries"),i.a.createElement("p",{className:"subtitle"},"Connect with us for questions, business inquiries & support. Let's chat!")),i.a.createElement("div",{className:"row  p-2"},i.a.createElement("div",{className:"col-lg-7 mb-lg-30 "},i.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},i.a.createElement("div",{className:"col-lg-12 col-md-7 col-sm-12  mb-lg-30  "},i.a.createElement("div",{className:"row  top-row"},i.a.createElement("div",{className:"col-lg-6 col-sm-12 mb-3 d-flex email-toll-card1"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-envelope mt-3 phone-email",style:{fontSize:"30px",color:"white"}}))," \xa0",i.a.createElement("div",{className:"mt-1"},"email",i.a.createElement("h5",{className:"card-title"}," ",i.a.createElement("a",{href:"mailto: info@tenalidoublehorse.com"},"info@tenalidoublehorse.com")))),i.a.createElement("div",{className:"col-lg-6 col-sm-12   mb-3 d-flex email-toll-card2"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-phone-volume mt-3 phone-icon",style:{fontSize:"33px",color:" #ED4E53"}}))," \xa0",i.a.createElement("div",{className:"mt-1"},"Toll Free Number",i.a.createElement("h5",{className:"card-title"}," ",i.a.createElement("a",{href:"tel: 1800 270 567567"},"1800 270 567567")))))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"},"MAHENDRA DALL MILL"),i.a.createElement("p",{className:"card-text content-justify"},"P.No.37,47,48,49 & 49A, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"},"MAHARANI DALL MILL"),i.a.createElement("p",{className:"card-text content-justify"},"Plot.No. 38, 39, 40, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"},"MAHADEVA DALL INDUSTRIES PVT LTD"),i.a.createElement("p",{className:"card-text content-justify"},"Nandivelugu, Nandivelugu (Post) \u2013 522 306 TENALI, Guntur Dist, A.P")))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-building",style:{fontSize:"35px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"}," CORPORATE ADDRESS"),i.a.createElement("p",{className:"card-text content-justify"},"JK TOWERS, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033 ")))))),i.a.createElement("div",{className:"col-lg-5  p-2"},i.a.createElement("form",{className:"mb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"First Name",className:"form-control",name:"fname"})),i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"Last Name",className:"form-control",name:"lname"})),i.a.createElement("div",{className:"form-group col-lg-12"},i.a.createElement("input",{type:"email",placeholder:"Email Address",className:"form-control",name:"email"})),i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"Phone no",className:"form-control",name:"Phonenumber"})),i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("select",{className:"form-control",name:"purpose"},i.a.createElement("option",{value:"",disabled:!0,selected:!0},"Purpose"),i.a.createElement("option",{value:"export"},"Export & Import"),i.a.createElement("option",{value:"distribution"},"Distribution Enquiry "),i.a.createElement("option",{value:"Feedback"},"Feedback"),i.a.createElement("option",{value:"Other"},"Other"))),i.a.createElement("div",{className:"form-group col-lg-12"},i.a.createElement("input",{type:"text",placeholder:"Subject",className:"form-control",name:"subject"})),i.a.createElement("div",{className:"form-group col-lg-12"},i.a.createElement("textarea",{name:"message",className:"form-control",placeholder:"Type your message",rows:9}))),i.a.createElement("button",{type:"submit",className:"btn-custom primary",name:"button"},"Send Message"))))),i.a.createElement(k,null)))}}]),a}(s.Component)),S=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(s.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Tenali  doublehorse | ","Locations"),i.a.createElement("meta",{name:"description",content:"#"})),i.a.createElement(p.a,null),i.a.createElement(d.a,{breadcrumb:{pagename:"Locations",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),i.a.createElement(L,null),i.a.createElement(E.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),a}(s.Component);a.default=S},60:function(e,a,t){"use strict";var n=t(49),l=t(50),c=t(53),o=t(51),r=t(52),s=t(0),i=t.n(s),m=t(4),u=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subheader-inner"},i.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item "},i.a.createElement(m.c,{to:"/"},"Home")),i.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(s.Component);a.a=u}}]);
//# sourceMappingURL=33.b89a8b56.chunk.js.map