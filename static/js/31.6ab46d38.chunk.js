(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{136:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return o});var a=n(0),r=1,c=Object(a.createContext)(null),l=c.Provider;function o(){var e=Object(a.useContext)(c);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}},137:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(i){r=!0,c=i}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},272:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(288);function r(e,t){var n,r=null!=(n=e.pane)?n:t.pane;return r?Object(a.a)({},e,{pane:r}):e}},278:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",function(){return a})},288:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(289);function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Object(a.a)(e,t,n[t])})}return e}},369:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(278),r=n(137),c=n(136),l=n(109),o=n(0),i=n.n(o);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){var t=e.children,n=e.className,s=e.id,m=e.placeholder,f=e.style,d=e.whenCreated,p=Object(a.a)(e,["children","className","id","placeholder","style","whenCreated"]),b=Object(o.useRef)(null),E=function(e,t){var n=Object(o.useState)(null),a=Object(r.a)(n,2),c=a[0],i=a[1];return Object(o.useEffect)(function(){if(null!==e.current&&null===c){var n=new l.Map(e.current,t);null!=t.center&&null!=t.zoom?n.setView(t.center,t.zoom):null!=t.bounds&&n.fitBounds(t.bounds,t.boundsOptions),null!=t.whenReady&&n.whenReady(t.whenReady),i(n)}},[e,c,t]),c}(b,p),v=Object(o.useRef)(!1);Object(o.useEffect)(function(){null!=E&&!1===v.current&&null!=d&&(v.current=!0,d(E))},[E,d]);var y=Object(o.useState)({className:n,id:s,style:f}),g=Object(r.a)(y,1)[0],O=Object(o.useMemo)(function(){return E?{__version:c.a,map:E}:null},[E]),N=O?i.a.createElement(c.b,{value:O},t):null!=m?m:null;return i.a.createElement("div",u({},g,{ref:b}),N)}},370:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(288),r=n(278),c=n(378),l=n(109),o=Object(c.a)(function(e,t){var n=e.position,c=Object(r.a)(e,["position"]),o=new l.Marker(n,c);return{instance:o,context:Object(a.a)({},t,{overlayContainer:o})}},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())})},373:function(e){e.exports={}},378:function(e,t,n){"use strict";var a=n(137),r=n(0),c=n.n(r),l=n(12),o=n(136);function i(e){function t(t,n){var a=e(t).current,l=a.instance,i=a.context;return Object(r.useImperativeHandle)(n,function(){return l}),null==t.children?null:c.a.createElement(o.b,{value:i},t.children)}return Object(r.forwardRef)(t)}function u(e){function t(t,n){var a=e(t).current.instance;return Object(r.useImperativeHandle)(n,function(){return a}),null}return Object(r.forwardRef)(t)}function s(e,t){return null==t?function(t,n){return Object(r.useRef)(e(t,n))}:function(n,a){var c=Object(r.useRef)(e(n,a)),l=Object(r.useRef)(n),o=c.current.instance;return Object(r.useEffect)(function(){l.current!==n&&(t(o,n,l.current),l.current=n)},[o,n,a]),c}}function m(e,t){var n=Object(r.useRef)(t);Object(r.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function f(e,t){var n=Object(r.useRef)();Object(r.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}var d=n(272);function p(e,t){Object(r.useEffect)(function(){var n,a=null!=(n=t.layerContainer)?n:t.map;return a.addLayer(e.instance),function(){a.removeLayer(e.instance)}},[t,e])}function b(e){return function(t){var n=Object(o.c)(),a=e(Object(d.a)(t,n),n);return m(n.map,t.attribution),f(a.current,t.eventHandlers),p(a.current,n),a}}function E(e,t){return i(b(s(e,t)))}function v(e,t){return function(e){return Object(r.forwardRef)(function(t,n){var c=Object(r.useState)(!1),o=Object(a.a)(c,2),i=o[0],u=o[1],s=e(t,u).current.instance;Object(r.useImperativeHandle)(n,function(){return s}),Object(r.useEffect)(function(){i&&s.update()},[s,i,t.children]);var m=s._contentNode;return m?Object(l.createPortal)(t.children,m):null})}(function(e,t){return function(n,a){var r=Object(o.c)(),c=e(Object(d.a)(n,r),r);return m(r.map,n.attribution),f(c.current,n.eventHandlers),t(c.current,r,n,a),c}}(s(e),t))}function y(e,t){return u(b(s(e,t)))}n.d(t,"a",function(){return E}),n.d(t,"b",function(){return v}),n.d(t,"c",function(){return y})},382:function(e,t,n){"use strict";var a=n(278),r=n(378),c=n(272);var l=n(109);n.d(t,"a",function(){return o});var o=Object(r.c)(function(e,t){var n=e.url,r=Object(a.a)(e,["url"]);return{instance:new l.TileLayer(n,Object(c.a)(r,t)),context:t}},function(e,t,n){var a=t.opacity,r=t.zIndex;null!=a&&a!==n.opacity&&e.setOpacity(a),null!=r&&r!==n.zIndex&&e.setZIndex(r)})},400:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(50),c=n(53),l=n(51),o=n(52),i=n(0),u=n.n(i),s=n(73),m=n.n(s),f=n(89),d=n(74),p=n(61),b=(n(373),n(109)),E=n.n(b),v=n(137),y=n(369),g=n(382),O=n(378),N=Object(O.b)(function(e,t){return{instance:new b.Popup(e,t.overlayContainer),context:t}},function(e,t,n,a){var r=n.onClose,c=n.onOpen,l=n.position;Object(i.useEffect)(function(){var n=e.instance;function o(e){e.popup===n&&(n.update(),a(!0),null==c||c())}function i(e){e.popup===n&&(a(!1),null==r||r())}return t.map.on({popupopen:o,popupclose:i}),null==t.overlayContainer?(null!=l&&n.setLatLng(l),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){t.map.off({popupopen:o,popupclose:i}),null==t.overlayContainer?t.map.removeLayer(n):t.overlayContainer.unbindPopup()}},[e,t,a,r,c,l])}),h=n(370),j=Object(O.b)(function(e,t){return{instance:new b.Tooltip(e,t.overlayContainer),context:t}},function(e,t,n,a){var r=n.onClose,c=n.onOpen;Object(i.useEffect)(function(){var n=t.overlayContainer;if(null!=n){var l=e.instance,o=function(e){e.tooltip===l&&(l.update(),a(!0),null==c||c())},i=function(e){e.tooltip===l&&(a(!1),null==r||r())};return n.on({tooltipopen:o,tooltipclose:i}),n.bindTooltip(l),function(){n.off({tooltipopen:o,tooltipclose:i}),n.unbindTooltip()}}},[e,t,a,r,c])}),x=(n(17),{guntur:{position:[16.268,80.639],name:"Tenali",description:"Description for Guntur",url:"https://www.google.com/maps/place/Tenali+Double+Horse/@16.268832,80.639928,8z/data=!4m6!3m5!1s0x3a4a062f6663586f:0x47ee4650ea8b815d!8m2!3d16.2688321!4d80.6399277!16s%2Fg%2F11dz0y28f_?hl=en&entry=ttu"},hyderabad:{position:[17.437,78.414],name:"HYDERABAD",description:"Description for Hyderabad",url:"https://www.google.com/maps?ll=17.437395,78.414571&z=8&t=m&hl=en&gl=IN&mapclient=embed&cid=15603634934683396795"}}),w=E.a.icon({iconUrl:"./assets/img/misc/marker.png",iconSize:[32,32]}),A=function(e){var t=e.position,n=e.name,a=e.url;return u.a.createElement(h.a,{position:t,icon:w,eventHandlers:{click:function(){window.open(a,"_blank")}}},u.a.createElement(j,null,n))},C=function(){var e=Object(i.useState)("hyderabad"),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(null),c=Object(v.a)(r,2),l=c[0],o=c[1];Object(i.useEffect)(function(){l&&l.setView(x[n].position,12)},[l,n]);var s=function(e){a(e)};return u.a.createElement("div",null,u.a.createElement("div",{className:"row "},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{style:{backgroundColor:"#ED4E53"}},u.a.createElement("ul",{className:"ullist controls",style:{display:"flex",margin:"0",padding:"0",listStyleType:"none"}},u.a.createElement("li",{key:"guntur",style:{margin:"0"},className:"guntur"===n?"active":""},u.a.createElement("a",{"data-load":"guntur",id:"ullist_a_guntur",href:"#guntur",title:"GUNTUR",style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"},onClick:function(){return s("guntur")},tabIndex:"0"},u.a.createElement("span",null,"TENALI"))),u.a.createElement("li",{key:"hyderabad",style:{margin:"0"},className:"hyderabad"===n?"active":""},u.a.createElement("a",{"data-load":"hyderabad",id:"ullist_a_hyderabad",href:"#hyderabad",title:"HYDERABAD",style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"},onClick:function(){return s("hyderabad")},tabIndex:"0"},u.a.createElement("span",null,"HYDERABAD"))))),u.a.createElement(y.a,{whenCreated:o,center:x[n].position,zoom:8,style:{height:"400px"}},u.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 Tiles \xa9 Esri \u2014 Esri, DeLorme, NAVTEQ",maxZoom:16}),Object.keys(x).map(function(e){return u.a.createElement(A,{key:e,position:x[e].position,name:x[e].name,url:x[e].url},e===n&&u.a.createElement(N,null,x[e].description))})))))},D=(E.a.icon({iconUrl:"./assets/img/misc/marker.png",iconSize:[32,32]}),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"section"},u.a.createElement("div",{className:"container locations-wrapper"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"section-title-wrap text-center mb-5"},u.a.createElement("h5",{className:"custom-primary"},"Let's Chat"),u.a.createElement("h2",{className:"title"},"Contact Us for Any Questions or Business Inquiries"),u.a.createElement("p",{className:"subtitle"},"Connect with us for questions, business inquiries & support. Let's chat!")),u.a.createElement("div",{className:"row  p-2"},u.a.createElement("div",{className:"col-lg-7 mb-lg-30 "},u.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},u.a.createElement("div",{className:"col-lg-12 col-md-7 col-sm-12  mb-lg-30  "},u.a.createElement("div",{className:"row  top-row"},u.a.createElement("div",{className:"col-lg-6 col-sm-12 mb-3 d-flex email-toll-card1"},u.a.createElement("div",null,u.a.createElement("i",{className:"fas fa-envelope mt-3 phone-email",style:{fontSize:"30px",color:"white"}}))," \xa0",u.a.createElement("div",{className:"mt-1"},"email",u.a.createElement("h5",{className:"card-title"}," ",u.a.createElement("a",{href:"mailto: info@tenalidoublehorse.com"},"info@tenalidoublehorse.com")))),u.a.createElement("div",{className:"col-lg-6 col-sm-12   mb-3 d-flex email-toll-card2"},u.a.createElement("div",null,u.a.createElement("i",{className:"fas fa-phone-volume mt-3 phone-icon",style:{fontSize:"33px",color:" #ED4E53"}}))," \xa0",u.a.createElement("div",{className:"mt-1"},"Toll Free Number",u.a.createElement("h5",{className:"card-title"}," ",u.a.createElement("a",{href:"tel: 1800 270 567567"},"1800 270 567567")))))),u.a.createElement("div",{className:"col"},u.a.createElement("div",{className:"card-locations mb-4"},u.a.createElement("div",{className:"card-body"},u.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),u.a.createElement("h5",{className:"card-title"},"MAHENDRA DALL MILL"),u.a.createElement("p",{className:"card-text content-justify"},"P.No.37,47,48,49 & 49A, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),u.a.createElement("div",{className:"col"},u.a.createElement("div",{className:"card-locations mb-4"},u.a.createElement("div",{className:"card-body"},u.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),u.a.createElement("h5",{className:"card-title"},"MAHARANI DALL MILL"),u.a.createElement("p",{className:"card-text content-justify"},"Plot.No. 38, 39, 40, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),u.a.createElement("div",{className:"col"},u.a.createElement("div",{className:"card-locations mb-4"},u.a.createElement("div",{className:"card-body"},u.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),u.a.createElement("h5",{className:"card-title"},"MAHADEVA DALL INDUSTRIES PVT LTD"),u.a.createElement("p",{className:"card-text content-justify"},"Nandivelugu, Nandivelugu (Post) \u2013 522 306 TENALI, Guntur Dist, A.P")))),u.a.createElement("div",{className:"col"},u.a.createElement("div",{className:"card-locations mb-4"},u.a.createElement("div",{className:"card-body"},u.a.createElement("i",{className:"fas fa-building",style:{fontSize:"35px",color:" #ED4E53"}}),u.a.createElement("h5",{className:"card-title"}," CORPORATE ADDRESS"),u.a.createElement("p",{className:"card-text content-justify"},"JK TOWERS, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033 ")))))),u.a.createElement("div",{className:"col-lg-5  p-2"},u.a.createElement("form",{className:"mb-5"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"form-group col-lg-6"},u.a.createElement("input",{type:"text",placeholder:"First Name",className:"form-control",name:"fname"})),u.a.createElement("div",{className:"form-group col-lg-6"},u.a.createElement("input",{type:"text",placeholder:"Last Name",className:"form-control",name:"lname"})),u.a.createElement("div",{className:"form-group col-lg-12"},u.a.createElement("input",{type:"email",placeholder:"Email Address",className:"form-control",name:"email"})),u.a.createElement("div",{className:"form-group col-lg-6"},u.a.createElement("input",{type:"text",placeholder:"Phone no",className:"form-control",name:"Phonenumber"})),u.a.createElement("div",{className:"form-group col-lg-6"},u.a.createElement("select",{className:"form-control",name:"purpose"},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Purpose"),u.a.createElement("option",{value:"export"},"Export & Import"),u.a.createElement("option",{value:"distribution"},"Distribution Enquiry "),u.a.createElement("option",{value:"Feedback"},"Feedback"),u.a.createElement("option",{value:"Other"},"Other"))),u.a.createElement("div",{className:"form-group col-lg-12"},u.a.createElement("input",{type:"text",placeholder:"Subject",className:"form-control",name:"subject"})),u.a.createElement("div",{className:"form-group col-lg-12"},u.a.createElement("textarea",{name:"message",className:"form-control",placeholder:"Type your message",rows:9}))),u.a.createElement("button",{type:"submit",className:"btn-custom primary",name:"button"},"Send Message"))))),u.a.createElement(C,null)))}}]),t}(i.Component)),S=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(i.Fragment,null,u.a.createElement(m.a,null,u.a.createElement("title",null,"Tenali  doublehorse | ","Locations"),u.a.createElement("meta",{name:"description",content:"#"})),u.a.createElement(f.a,null),u.a.createElement(d.a,{breadcrumb:{pagename:"Locations"}}),u.a.createElement(D,null),u.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),t}(i.Component);t.default=S},74:function(e,t,n){"use strict";var a=n(49),r=n(50),c=n(53),l=n(51),o=n(52),i=n(0),u=n.n(i),s=n(5),m=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"sub-header-breadcrumbs dark-overlay dark-overlay-2",style:{backgroundImage:"url(./assets/img/bg/top-banner-sketch.jpg)"}},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"subheader-inner"},u.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item "},u.a.createElement(s.b,{to:"/"},"Home")),u.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(i.Component);t.a=m}}]);
//# sourceMappingURL=31.6ab46d38.chunk.js.map