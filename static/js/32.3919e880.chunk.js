(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{368:function(e){e.exports={}},396:function(e,a,t){"use strict";t.r(a);var n=t(174),l=t(175),r=t(47),o=t(176),c=t(177),s=t(0),i=t.n(s),m=t(196),u=t.n(m),d=t(281),p=t(7),E=t(185),f=(t(368),t(71)),b=t.n(f),N=t(74),v=t(379),g=t(410),y=t(386),h=Object(y.b)(function(e,a){return{instance:new f.Popup(e,a.overlayContainer),context:a}},function(e,a,t,n){var l=t.onClose,r=t.onOpen,o=t.position;Object(s.useEffect)(function(){var t=e.instance;function c(e){e.popup===t&&(t.update(),n(!0),null==r||r())}function s(e){e.popup===t&&(n(!1),null==l||l())}return a.map.on({popupopen:c,popupclose:s}),null==a.overlayContainer?(null!=o&&t.setLatLng(o),t.openOn(a.map)):a.overlayContainer.bindPopup(t),function(){a.map.off({popupopen:c,popupclose:s}),null==a.overlayContainer?a.map.removeLayer(t):a.overlayContainer.unbindPopup()}},[e,a,n,l,r,o])}),x=t(380),j=Object(y.b)(function(e,a){return{instance:new f.Tooltip(e,a.overlayContainer),context:a}},function(e,a,t,n){var l=t.onClose,r=t.onOpen;Object(s.useEffect)(function(){var t=a.overlayContainer;if(null!=t){var o=e.instance,c=function(e){e.tooltip===o&&(o.update(),n(!0),null==r||r())},s=function(e){e.tooltip===o&&(n(!1),null==l||l())};return t.on({tooltipopen:c,tooltipclose:s}),t.bindTooltip(o),function(){t.off({tooltipopen:c,tooltipclose:s}),t.unbindTooltip()}}},[e,a,n,l,r])}),D=(t(24),{guntur:{position:[16.268,80.639],name:"Tenali",description:"Description for Guntur",url:"https://www.google.com/maps/place/Tenali+Double+Horse/@16.268832,80.639928,8z/data=!4m6!3m5!1s0x3a4a062f6663586f:0x47ee4650ea8b815d!8m2!3d16.2688321!4d80.6399277!16s%2Fg%2F11dz0y28f_?hl=en&entry=ttu"},hyderabad:{position:[17.437,78.414],name:"HYDERABAD",description:"Description for Hyderabad",url:"https://www.google.com/maps?ll=17.437395,78.414571&z=8&t=m&hl=en&gl=IN&mapclient=embed&cid=15603634934683396795"}}),O=b.a.icon({iconUrl:"/Tenali-Double-horse-Reactjs/assets/img/misc/marker.png",iconSize:[32,32]}),A=function(e){var a=e.position,t=e.name,n=e.url;return i.a.createElement(x.a,{position:a,icon:O,eventHandlers:{click:function(){window.open(n,"_blank")}}},i.a.createElement(j,null,t))},w=function(){var e=Object(s.useState)("hyderabad"),a=Object(N.a)(e,2),t=a[0],n=a[1],l=Object(s.useState)(null),r=Object(N.a)(l,2),o=r[0],c=r[1];Object(s.useEffect)(function(){o&&o.setView(D[t].position,12)},[o,t]);var m=function(e){n(e)};return i.a.createElement("div",null,i.a.createElement("div",{className:"row "},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{style:{backgroundColor:"#ED4E53"}},i.a.createElement("ul",{className:"ullist controls",style:{display:"flex",margin:"0",padding:"0",listStyleType:"none"}},i.a.createElement("li",{key:"guntur",style:{margin:"0"},className:"guntur"===t?"active":""},i.a.createElement("a",{"data-load":"guntur",id:"ullist_a_guntur",href:"#guntur",title:"GUNTUR",style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"},onClick:function(){return m("guntur")},tabIndex:"0"},i.a.createElement("span",null,"TENALI"))),i.a.createElement("li",{key:"hyderabad",style:{margin:"0"},className:"hyderabad"===t?"active":""},i.a.createElement("a",{"data-load":"hyderabad",id:"ullist_a_hyderabad",href:"#hyderabad",title:"HYDERABAD",style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"},onClick:function(){return m("hyderabad")},tabIndex:"0"},i.a.createElement("span",null,"HYDERABAD"))))),i.a.createElement(v.a,{whenCreated:c,center:D[t].position,zoom:8,style:{height:"400px"}},i.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 Tiles \xa9 Esri \u2014 Esri, DeLorme, NAVTEQ",maxZoom:16}),Object.keys(D).map(function(e){return i.a.createElement(A,{key:e,position:D[e].position,name:D[e].name,url:D[e].url},e===t&&i.a.createElement(h,null,D[e].description))})))))},k=(b.a.icon({iconUrl:"/Tenali-Double-horse-Reactjs/assets/img/misc/marker.png",iconSize:[32,32]}),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container locations-wrapper"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section-title-wrap text-center mb-5"},i.a.createElement("h5",{className:"custom-primary"},"Let's Chat"),i.a.createElement("h2",{className:"title"},"Contact Us for Any Questions or Business Inquiries"),i.a.createElement("p",{className:"subtitle"},"Connect with us for questions, business inquiries & support. Let's chat!")),i.a.createElement("div",{className:"row  p-2"},i.a.createElement("div",{className:"col-lg-7 mb-lg-30 "},i.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},i.a.createElement("div",{className:"col-lg-12 col-md-7 col-sm-12  mb-lg-30  "},i.a.createElement("div",{className:"row  top-row"},i.a.createElement("div",{className:"col-lg-6 col-sm-12 mb-3 d-flex email-toll-card1"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-envelope mt-3 phone-email",style:{fontSize:"30px",color:" #ED4E53"}}))," \xa0",i.a.createElement("div",null,"email",i.a.createElement("h5",{className:"card-title"}," ",i.a.createElement("a",{href:"mailto: info@tenalidoublehorse.com"},"info@tenalidoublehorse.com")))),i.a.createElement("div",{className:"col-lg-6 col-sm-12   mb-3 d-flex email-toll-card2"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-phone-volume mt-3 phone-icon",style:{fontSize:"33px",color:" #ED4E53"}}))," \xa0",i.a.createElement("div",null,"Toll Free Number",i.a.createElement("h5",{className:"card-title"}," ",i.a.createElement("a",{href:"tel: 1800 270 567567"},"1800 270 567567")))))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"},"MAHENDRA DALL MILL"),i.a.createElement("p",{className:"card-text content-justify"},"P.No.37,47,48,49 & 49A, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"},"MAHARANI DALL MILL"),i.a.createElement("p",{className:"card-text content-justify"},"Plot.No. 38, 39, 40, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"},"MAHADEVA DALL INDUSTRIES PVT LTD"),i.a.createElement("p",{className:"card-text content-justify"},"Nandivelugu, Nandivelugu (Post) \u2013 522 306 TENALI, Guntur Dist, A.P")))),i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"card-locations mb-4"},i.a.createElement("div",{className:"card-body"},i.a.createElement("i",{className:"fas fa-building",style:{fontSize:"35px",color:" #ED4E53"}}),i.a.createElement("h5",{className:"card-title"}," CORPORATE ADDRESS"),i.a.createElement("p",{className:"card-text content-justify"},"JK TOWERS, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033 ")))))),i.a.createElement("div",{className:"col-lg-5  p-2"},i.a.createElement("form",{className:"mb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"First Name",className:"form-control",name:"fname"})),i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"Last Name",className:"form-control",name:"lname"})),i.a.createElement("div",{className:"form-group col-lg-12"},i.a.createElement("input",{type:"email",placeholder:"Email Address",className:"form-control",name:"email"})),i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"Phone no",className:"form-control",name:"Phonenumber"})),i.a.createElement("div",{className:"form-group col-lg-6"},i.a.createElement("select",{className:"form-control",name:"purpose"},i.a.createElement("option",{value:"",disabled:!0,selected:!0},"Purpose"),i.a.createElement("option",{value:"export"},"Export & Import"),i.a.createElement("option",{value:"distribution"},"Distribution Enquiry "),i.a.createElement("option",{value:"Feedback"},"Feedback"),i.a.createElement("option",{value:"Other"},"Other"))),i.a.createElement("div",{className:"form-group col-lg-12"},i.a.createElement("input",{type:"text",placeholder:"Subject",className:"form-control",name:"subject"})),i.a.createElement("div",{className:"form-group col-lg-12"},i.a.createElement("textarea",{name:"message",className:"form-control",placeholder:"Type your message",rows:9}))),i.a.createElement("button",{type:"submit",className:"btn-custom primary",name:"button"},"Send Message"))))),i.a.createElement(w,null)))}}]),a}(s.Component)),T=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(s.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Tenali  doublehorse | ","Locations"),i.a.createElement("meta",{name:"description",content:"#"})),i.a.createElement(d.a,null),i.a.createElement(p.a,{breadcrumb:{pagename:"Locations"}}),i.a.createElement(k,null),i.a.createElement(E.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),a}(s.Component);a.default=T},7:function(e,a,t){"use strict";var n=t(174),l=t(175),r=t(47),o=t(176),c=t(177),s=t(0),i=t.n(s),m=t(5),u=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sub-header-breadcrumbs dark-overlay dark-overlay-2",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/bg/top-banner-sketch.jpg)"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subheader-inner"},i.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item "},i.a.createElement(m.b,{to:"/"},"Home")),i.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(s.Component);a.a=u}}]);
//# sourceMappingURL=32.3919e880.chunk.js.map