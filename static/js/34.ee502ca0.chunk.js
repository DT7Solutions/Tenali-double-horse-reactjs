(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{378:function(e){e.exports=[{id:"AL",val:"01"},{id:"AK",val:"02"},{id:"AS",val:"60"},{id:"AZ",val:"04"},{id:"AR",val:"05"},{id:"CA",val:"06"},{id:"CO",val:"08"},{id:"CT",val:"09"},{id:"DE",val:"10"},{id:"DC",val:"11"},{id:"FL",val:"12"},{id:"FM",val:"64"},{id:"GA",val:"13"},{id:"GU",val:"66"},{id:"HI",val:"15"},{id:"ID",val:"16"},{id:"IL",val:"17"},{id:"IN",val:"18"},{id:"IA",val:"19"},{id:"KS",val:"20"},{id:"KY",val:"21"},{id:"LA",val:"22"},{id:"ME",val:"23"},{id:"MH",val:"68"},{id:"MD",val:"24"},{id:"MA",val:"25"},{id:"MI",val:"26"},{id:"MN",val:"27"},{id:"MS",val:"28"},{id:"MO",val:"29"},{id:"MT",val:"30"},{id:"NE",val:"31"},{id:"NV",val:"32"},{id:"NH",val:"33"},{id:"NJ",val:"34"},{id:"NM",val:"35"},{id:"NY",val:"36"},{id:"NC",val:"37"},{id:"ND",val:"38"},{id:"MP",val:"69"},{id:"OH",val:"39"},{id:"OK",val:"40"},{id:"OR",val:"41"},{id:"PW",val:"70"},{id:"PA",val:"42"},{id:"PR",val:"72"},{id:"RI",val:"44"},{id:"SC",val:"45"},{id:"SD",val:"46"},{id:"TN",val:"47"},{id:"TX",val:"48"},{id:"UM",val:"74"},{id:"UT",val:"49"},{id:"VT",val:"50"},{id:"VA",val:"51"},{id:"VI",val:"78"},{id:"WA",val:"53"},{id:"WV",val:"54"},{id:"WI",val:"55"},{id:"WY",val:"56"}]},405:function(e,a,t){"use strict";t.r(a);var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(67),u=t.n(m),d=t(94),N=t(59),h=t(339),p=t(338),g=t(111),E=t(341),y=[{Header:"Sl No",accessor:"slNo"},{Header:"State Name",accessor:"stateName"},{Header:"City",accessor:"city"},{Header:"Store Name",accessor:"storeName"}],b=function(){var e=Object(o.useState)([{slNo:1,stateName:"Connecticut",city:"Weathersfield",storeName:"Annpurna Indian Grocery"},{slNo:2,stateName:"Connecticut",city:"Hartford",storeName:"Godavari"},{slNo:3,stateName:"Massachusetts",city:"Acton",storeName:"Shivas super Bazar"},{slNo:4,stateName:"Massachusetts",city:"Lowell",storeName:"Maruthi Indian Grocery"},{slNo:5,stateName:"Massachusetts",city:"Burlington",storeName:"Towne Plaza"},{slNo:6,stateName:"Massachusetts",city:"Burlington",storeName:"Spiceland"},{slNo:7,stateName:"Massachusetts",city:"Shrewsbury",storeName:"Spiceh ut Bawarchi"},{slNo:8,stateName:"Massachusetts",city:"Quincy",storeName:"India Mart"},{slNo:9,stateName:"Massachusetts",city:"Weymouth",storeName:"Aha India"},{slNo:10,stateName:"Massachusetts",city:"Tewksbury",storeName:"Spicindya Grocery"},{slNo:11,stateName:"Washington",city:"Seattle",storeName:"ApnaBazar"},{slNo:12,stateName:"Washington",city:"Redwood",storeName:"ApnaBazar"},{slNo:13,stateName:"Washington",city:"Bohell",storeName:"ApnaBazar"},{slNo:14,stateName:"Virginia",city:"Chantilly",storeName:"Lotte Plaza"},{slNo:15,stateName:"Virginia",city:"Springfield",storeName:"Lotte Plaza"},{slNo:16,stateName:"Virginia",city:"Herndon",storeName:"Lotte Plaza"},{slNo:17,stateName:"New Jersey",city:"Hillsborough",storeName:"Patidar"},{slNo:18,stateName:"New Jersey",city:" Finnegan",storeName:"Patidar"},{slNo:19,stateName:"New Jersey",city:"Hightstown",storeName:"Patidar"},{slNo:20,stateName:"New Jersey",city:"Franklin Park",storeName:"Apna Bazar Farmers Market"},{slNo:21,stateName:"New Jersey",city:"Centennial Ave",storeName:"Asian Food Market"},{slNo:22,stateName:"New Jersey",city:"Lawrence Township",storeName:"Star Big Bazaar"},{slNo:23,stateName:"New Jersey",city:"Old Bridge Township",storeName:"Bhavani Food Farmer\u2019s Market"},{slNo:24,stateName:"New Jerseys",city:"East Windsor",storeName:"Patel Brothers"},{slNo:25,stateName:"New Jersey",city:"Oak Tree Rd Edison",storeName:"Apna Bazar Cash & Carry"},{slNo:26,stateName:"New Jersey",city:"Easton Ave",storeName:"Star Bazaar"},{slNo:27,stateName:"New Jersey",city:"Gaston Ave Somerville",storeName:"Desi Bazaar"},{slNo:28,stateName:"New Jersey",city:"Centennial Ave",storeName:"Asian Food Market"},{slNo:29,stateName:"New Jersey",city:"Plainsboro",storeName:"Big Bazaar"},{slNo:30,stateName:"New Jersey",city:"Bound Brook",storeName:"Bhavani Cash And Carry"},{slNo:31,stateName:"New Jersey",city:"Talmadge Rd",storeName:"Indian Grocery Outlet"}]),a=Object(g.a)(e,2),t=a[0],l=(a[1],Object(o.useState)(t)),n=Object(g.a)(l,2),r=n[0],s=n[1],c=Object(E.useTable)({columns:y,data:r},E.useFilters),m=c.getTableProps,u=c.getTableBodyProps,d=c.headerGroups,N=c.rows,h=c.prepareRow;return i.a.createElement("div",{className:"mt-5",style:{backgroundColor:"#f9f9f9"}},i.a.createElement("div",{className:"search-section shadow-sm p-3 bg-rounded"},i.a.createElement("div",{className:"col-lg-9 col-6"},i.a.createElement("h3",null,"Find Your Store")),i.a.createElement("div",{className:"col-lg-3 col-6"},i.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){var a=e.target.value;""===a.trim()?s(t):s(t.filter(function(e){return e.storeName.toLowerCase().includes(a.toLowerCase())||e.slNo.toString().includes(a)||e.stateName.toLowerCase().includes(a.toLowerCase())||e.city.toLowerCase().includes(a.toLowerCase())}))},style:{borderColor:"black",border:"2px solid #66676A",borderRadius:"5px"}}))),r.length>0?i.a.createElement("table",Object.assign({},m(),{className:"table"}),i.a.createElement("thead",null,d.map(function(e){return i.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return i.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),i.a.createElement("tbody",u(),N.map(function(e){return h(e),i.a.createElement("tr",Object.assign({},e.getRowProps(),{className:e.index%2===0?"odd-row":"even-row"}),e.cells.map(function(e){return i.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))):i.a.createElement("p",null,"No results found."))},f=[{Header:"Sl No",accessor:"slNo"},{Header:"State Name",accessor:"stateName"},{Header:"City",accessor:"city"},{Header:"Store Name",accessor:"storeName"}],v=function(){var e=Object(o.useState)([{slNo:1,stateName:"Arizona",city:"AZ",storeName:"Cloves Indian grocery"},{slNo:2,stateName:"Arizona",city:"AZ",storeName:"Turmeric"},{slNo:3,stateName:"Arizona",city:"AZ",storeName:"Turmeric cash & Carry"},{slNo:4,stateName:"Arizona",city:"AZ",storeName:"Lotus / Urban Chilli"},{slNo:5,stateName:"Arizona",city:"AZ",storeName:"Apana bazar"},{slNo:6,stateName:"Arizona",city:"AZ",storeName:"Lee lee International market"},{slNo:7,stateName:"Arizona",city:"AZ",storeName:"Safron"},{slNo:8,stateName:"Arizona",city:"AZ",storeName:"Turmeric"},{slNo:9,stateName:"Arizona",city:"AZ",storeName:"Lee lee International market (2stores)"},{slNo:10,stateName:"California",city:"Diamond Bar",storeName:"International india bazar"},{slNo:11,stateName:"California",city:"Fullerton",storeName:"International india bazar"},{slNo:12,stateName:"California",city:"Irvine",storeName:"Namaste plaza"},{slNo:13,stateName:"California",city:"Pasadena",storeName:"Namaste spice land"},{slNo:14,stateName:"California",city:"Portland",storeName:"Apana bazar"},{slNo:15,stateName:"California",city:"San Diego",storeName:"Namaste plaza"},{slNo:16,stateName:"California",city:"Tustin",storeName:"International india bazar /lakshmi"},{slNo:17,stateName:"California",city:"Valley side",storeName:"Namaste spice land"},{slNo:18,stateName:"California",city:"River side",storeName:"International india bazar"},{slNo:19,stateName:"California",city:"Santa Clarita",storeName:"Namaste spice land"},{slNo:20,stateName:"Los Angeles",city:"LA",storeName:"Suva spice mart"},{slNo:21,stateName:"Los Angeles",city:"LA",storeName:"Sunshine Indian grocery"},{slNo:22,stateName:"Los Angeles",city:"LA",storeName:"Shresta Indian grocery"},{slNo:23,stateName:"Los Angeles",city:"LA",storeName:"India sweet & spices"},{slNo:24,stateName:"Los Angeles",city:"LA",storeName:"Bombay market"},{slNo:25,stateName:"Los Angeles",city:"LA",storeName:"New india bazar"},{slNo:26,stateName:"Los Angeles",city:"LA",storeName:"New Bombay market"},{slNo:27,stateName:"Los Angeles",city:"LA",storeName:"Europa /india spice &Sweets"},{slNo:28,stateName:"Los Angeles",city:"LA",storeName:"New Delhi spice land"},{slNo:29,stateName:"Los Angeles",city:"LA",storeName:"Bhanus Indian grocery"},{slNo:30,stateName:"Los Angeles",city:"LA",storeName:"Punjabi Indian grocery"},{slNo:31,stateName:"Los Angeles",city:"LA",storeName:"Spencers mart"},{slNo:32,stateName:"Los Angeles",city:"LA",storeName:"JH Bazar"},{slNo:33,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:34,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:35,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:36,stateName:"Seattle",city:"Seattle",storeName:"Mayuri"},{slNo:37,stateName:"Seattle",city:"Seattle",storeName:"Swagath foods grocery"},{slNo:38,stateName:"Seattle",city:"Seattle",storeName:"Swagath"},{slNo:39,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:40,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:41,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:42,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:43,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:44,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:45,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:46,stateName:"San Francisco",city:"Sfo",storeName:"Namaste plaza"},{slNo:47,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:48,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:49,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:50,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:51,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"},{slNo:52,stateName:"San Francisco",city:"Sfo",storeName:"New india Bazar"}]),a=Object(g.a)(e,2),t=a[0],l=(a[1],Object(o.useState)(t)),n=Object(g.a)(l,2),r=n[0],s=n[1],c=Object(E.useTable)({columns:f,data:r},E.useFilters),m=c.getTableProps,u=c.getTableBodyProps,d=c.headerGroups,N=c.rows,h=c.prepareRow;return i.a.createElement("div",{className:"mt-5",style:{backgroundColor:"#f9f9f9"}},i.a.createElement("div",{className:"search-section shadow-sm p-3 bg-rounded"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("h3",null,"Find Your Store")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(e){var a=e.target.value;""===a.trim()?s(t):s(t.filter(function(e){return e.storeName.toLowerCase().includes(a.toLowerCase())||e.slNo.toString().includes(a)||e.stateName.toLowerCase().includes(a.toLowerCase())||e.city.toLowerCase().includes(a.toLowerCase())}))},style:{borderColor:"black",border:"3px solid #66676A"}}))),r.length>0?i.a.createElement("table",Object.assign({},m(),{className:"table"}),i.a.createElement("thead",null,d.map(function(e){return i.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return i.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),i.a.createElement("tbody",u(),N.map(function(e){return h(e),i.a.createElement("tr",Object.assign({},e.getRowProps(),{className:e.index%2===0?"odd-row":"even-row"}),e.cells.map(function(e){return i.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))):i.a.createElement("p",null,"No results found."))},k=t(378),w=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(s.a)(a).call(this,e))).handleOptionChange=function(e){t.setState({selectedOption:e.target.value})},t.state={selectedOption:"match_1"},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.state.selectedOption;return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement(p.ComposableMap,{projection:"geoAlbersUsa"},i.a.createElement(p.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"},function(e){var a=e.geographies;return i.a.createElement(i.a.Fragment,null,a.map(function(e){return i.a.createElement(p.Geography,{key:e.rsmKey,stroke:"#FFF",geography:e,fill:"#DDD"})}),a.map(function(e){Object(h.a)(e),k.find(function(a){return a.val===e.id})}))})),i.a.createElement("div",{className:"section-title-wrap section-header text-center"},i.a.createElement("h5",{className:"custom-primary"},"Find Nearby Stores"),i.a.createElement("h2",{className:"title "},"Discover Stores Near You"),i.a.createElement("p",{className:"subtitle "},"Quickly locate stores in your vicinity. Simply select your preferred option, and we'll show you the nearest stores that match your choice, bringing convenience right to your doorstep.")),i.a.createElement("div",{className:"section text-center cta-2 cta bg-cover bg-center dark-overlay dark-overlay-2 bg-parallax",style:{backgroundImage:"url(./assets/img/bg/usa-locations.png)"}},i.a.createElement("div",{className:"form"},i.a.createElement("form",null,i.a.createElement("fieldset",{className:"form__options"},i.a.createElement("p",{className:"form__answer"},i.a.createElement("input",{type:"radio",name:"match",id:"match_1",value:"match_1",checked:"match_1"===e,onChange:this.handleOptionChange}),i.a.createElement("label",{htmlFor:"match_1",className:"text-white"},i.a.createElement("img",{src:"./assets/img/ig/1.png",alt:"img"}),"East Coast")),i.a.createElement("p",{className:"form__answer"},i.a.createElement("input",{type:"radio",name:"match",id:"match_2",value:"match_2",checked:"match_2"===e,onChange:this.handleOptionChange}),i.a.createElement("label",{htmlFor:"match_2",className:"text-white"},i.a.createElement("img",{src:"./assets/img/ig/2.png",alt:"img"}),"West Coast")))))),"match_1"===e&&i.a.createElement(b,null),"match_2"===e&&i.a.createElement(v,null)))}}]),a}(o.Component),C=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Slices - React Template | ","Contact Us"),i.a.createElement("meta",{name:"description",content:"#"})),i.a.createElement(d.a,null),i.a.createElement(w,null),i.a.createElement(N.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),a}(o.Component);a.default=C},55:function(e){e.exports=[{id:1,img:"assets/img/prods-sm/1.png",name:"Eco Pack",qty:4,price:154.99,flavours:["14 Inches","Extra Cheese","Cheese Crust"]}]},56:function(e,a,t){"use strict";var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(61),i=t(0),m=t.n(i),u=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(s.a)(a).call(this,e))).getNextSibling=function(e,a){var t=e.nextElementSibling;if(!a)return t;for(;t;){if(t.matches(a))return t;t=t.nextElementSibling}},t.triggerChild=function(e){var a="";null!==(a=void 0!==t.getNextSibling(e.target,".submenu")?t.getNextSibling(e.target,".submenu"):null)&&void 0!==a&&""!==a&&(a.classList=a.classList.contains("d-block")?"submenu":"submenu d-block")},t.state={navmethod:!1,cartmethod:!1,searchmethod:!1},t.toggleNav=t.toggleNav.bind(Object(o.a)(Object(o.a)(t))),t.cartToggle=t.cartToggle.bind(Object(o.a)(Object(o.a)(t))),t.searchToggle=t.searchToggle.bind(Object(o.a)(Object(o.a)(t))),t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"toggleNav",value:function(){this.setState({navmethod:!this.state.navmethod})}},{key:"cartToggle",value:function(){this.setState({cartmethod:!this.state.cartmethod})}},{key:"searchToggle",value:function(){this.setState({searchmethod:!this.state.searchmethod})}},{key:"render",value:function(){return m.a.createElement(i.Fragment,null)}}]),a}(i.Component);a.a=u},57:function(e){e.exports=[{id:1,linkText:"Home",link:"/",child:!1,submenu:[{id:12,link:"/home-v2",linkText:"Home"}]},{id:2,linkText:"About",link:"/about",child:!0,submenu:[{id:21,linkText:"Our Company",link:"/about"},{id:23,link:"/Where-we-are",linkText:"Where We Are"}]},{id:3,linkText:"Blog",child:!1,submenu:[{id:31,link:"/about",linkText:"About Us"},{id:32,link:"/login",linkText:"Login"},{id:33,link:"/register",linkText:"Sign Up"},{id:34,link:"/checkout",linkText:"Checkout"},{id:35,link:"/cart",linkText:"Cart"},{id:36,link:"/legal",linkText:"Legal"},{id:37,link:"/error",linkText:"Error 404"}]},{id:4,linkText:"Products",child:!0,submenu:[{id:41,link:"/tenali-double-horse-products",linkText:"TDH Products"},{id:42,link:"/tenali-double-hosre-food-products",linkText:"TDHF Products"}]},{id:5,linkText:"Contact",link:"/locations"}]},59:function(e,a,t){"use strict";var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(4),u=t(62),d=t.n(u),N=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return i.a.createElement("footer",{id:"footer-bg",className:this.props.footer.style,style:{position:"relative"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer-top"},i.a.createElement("div",{className:"footer-buttons",style:{position:"absolute",top:"-24px",right:"-1%",zIndex:"9999"}},i.a.createElement("img",{src:"./assets/img/great-place-to-work-image.png",style:{height:"180px",width:"100%"},alt:"logo"})))),i.a.createElement("div",{className:"footer-middle"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Quick Links"),i.a.createElement("ul",null,i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/about"},"Our Company")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/tenali-double-horse-products"},"Tdh Products")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/tenali-double-hosre-food-products"},"Tdh Food Products")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/usa-shops"},"Usa")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/locations"},"Contact")," "))),i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Legal Links"),i.a.createElement("ul",null,i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/terms-and-condation"},"Terms of Use")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/privacy-policy"},"Privacy Policy")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/shipping-policy"},"Shipping Policy")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/refund-policy"},"Refund Policy")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/payment-ploicy"},"Payment Services")," "))),i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Contact"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"tel:1800 270 567567"},"Call Us")),i.a.createElement("li",null," ",i.a.createElement("a",{href:"mailto:info@tenalidoublehorse.com"},"Email")," "),i.a.createElement("li",null," ",i.a.createElement(m.c,{to:"/locations"},"Locate")," "))),i.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget"},i.a.createElement("h5",{className:"widget-title"},"Social Media"),i.a.createElement("ul",{className:"social-media"},i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/tenalidoublehorse",className:"facebook"},i.a.createElement("i",{className:"fab fa-facebook-f"}))),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/c/TenaliDoubleHorse",className:"youtube"},i.a.createElement("i",{className:"fab fa-youtube"}))),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/tenalidoublehorse/",className:"youtube"},i.a.createElement("i",{className:"fab fa-instagram"}))),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/i/flow/login?redirect_after_login=%2Ftnldoublehorse",className:"twitter"},i.a.createElement("i",{className:"fab fa-twitter"})))),i.a.createElement("div",{className:"footer-offer"},i.a.createElement("p",{className:"text-dark"},"Download Our Brochure for More Information!"),i.a.createElement("a",{href:d.a,download:"tdh-brouchure.pdf",className:"btn-custom btn-sm shadow-none",target:"_blank",type:"application/pdf"},"Download Brochure")))))),i.a.createElement("div",{className:"footer-bottom"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer-copyright"},i.a.createElement("p",null," Copyright \xa9 2022 ",i.a.createElement(m.c,{to:" "},"Tenali Double Horse ")," All Rights Reserved. "),i.a.createElement(m.c,{to:"#",className:"back-to-top",onClick:function(){return e.scrollToTop()}},i.a.createElement("i",{className:"fas fa-chevron-up"})," ")))))}}]),a}(o.Component);a.a=N},62:function(e,a,t){e.exports=t.p+"static/media/tdh-brouchure.ac86b663.pdf"},63:function(e,a,t){"use strict";var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(4),u=t(80),d=t.n(u),N=t(55),h=N.reduce(function(e,a){return e+a.price*a.qty},0),p=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"cart-sidebar-body"},i.a.createElement(d.a,{className:"cart-sidebar-scroll",style:{height:"100vh"}},N.map(function(e,a){return i.a.createElement("div",{key:a,className:"cart-sidebar-item"},i.a.createElement("div",{className:"media"},i.a.createElement(m.c,{to:"/menu-item-v1/1"},i.a.createElement("img",{src:"./"+e.img,alt:e.name})),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",null," ",i.a.createElement(m.c,{to:"/menu-item-v1/1",title:e.name},e.name)," "),i.a.createElement("span",null,e.qty,"x ",(new Intl.NumberFormat).format(e.price.toFixed(2)),"$"))),i.a.createElement("div",{className:"cart-sidebar-item-meta"},e.flavours.map(function(e,a){return i.a.createElement("span",{key:a},e)})),i.a.createElement("div",{className:"cart-sidebar-price"},(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$"),i.a.createElement("div",{className:"close-btn"},i.a.createElement("span",null),i.a.createElement("span",null)))}))),i.a.createElement("div",{className:"cart-sidebar-footer"},i.a.createElement("h4",null,"Total: ",i.a.createElement("span",null,(new Intl.NumberFormat).format(h.toFixed(2)),"$")," "),i.a.createElement("button",{type:"button",className:"btn-custom"},"Checkout")))}}]),a}(o.Component);a.a=p},64:function(e,a,t){"use strict";var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{className:"search-form",method:"post"},i.a.createElement("input",{type:"text",placeholder:"Search..."}),i.a.createElement("button",{type:"submit",className:"search-btn"},i.a.createElement("i",{className:"flaticon-magnifying-glass"})))}}]),a}(o.Component);a.a=m},65:function(e,a,t){"use strict";var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(4),u=t(57),d=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=window.innerWidth<=767;return i.a.createElement(o.Fragment,null,i.a.createElement(m.c,{className:"navbar-brand",to:"/"},i.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})),i.a.createElement("div",{className:"aside-scroll"},i.a.createElement("ul",null,u.length>0?u.map(function(t,l){return a&&"Blog"===t.linkText?null:i.a.createElement("li",{key:l,className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild},t.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",t.linkText," "):i.a.createElement(m.c,{to:t.link}," ",t.linkText," "),t.child?i.a.createElement("ul",{className:"submenu ".concat(t.child?"menu-item-has-children":"")},t.submenu.map(function(e,a){return i.a.createElement("li",{key:a,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):i.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?i.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,a){return i.a.createElement("li",{className:"menu-item",key:a},i.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)))}}]),a}(t(56).a);a.a=d},87:function(e,a,t){"use strict";var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(4),u=t(57),d=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"navbar-nav "},u.length>0?u.slice(0,2).map(function(a,t){return i.a.createElement("li",{key:t,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):i.a.createElement(m.c,{to:a.link}," ",a.linkText," "),a.child?i.a.createElement("ul",{className:"submenu",role:"menu"},a.submenu.map(function(e,a){return i.a.createElement("li",{key:a,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):i.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?i.a.createElement("ul",{className:"submenu"},e.submenu.map(function(e,a){return i.a.createElement("li",{className:"menu-item",key:a},i.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null,i.a.createElement("li",{className:"menu-item menu-item-has-children mega-menu-wrapper"},i.a.createElement(m.c,{to:"/menu-v1"},"Products")),u.length>0?u.slice(4,10).map(function(a,t){return i.a.createElement("li",{key:t,className:"menu-item ".concat(a.child?"menu-item-has-children":""," "),onClick:e.triggerChild},a.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",a.linkText," "):i.a.createElement(m.c,{to:a.link}," ",a.linkText," "),a.child?i.a.createElement("ul",{className:"sub-menu",role:"menu"},a.submenu.map(function(e,a){return i.a.createElement("li",{key:a,className:"menu-item ".concat(e.child?"menu-item-has-children":""," ")},e.child?i.a.createElement(m.c,{onClick:function(e){return e.preventDefault()},to:"/"}," ",e.linkText," "):i.a.createElement(m.c,{to:e.link}," ",e.linkText," "),e.submenu?i.a.createElement("ul",{className:"sub-menu"},e.submenu.map(function(e,a){return i.a.createElement("li",{className:"menu-item",key:a},i.a.createElement(m.c,{to:e.link},e.linkText))})):null)})):null)}):null)}}]),a}(o.Component);a.a=d},94:function(e,a,t){"use strict";var l=t(49),n=t(50),r=t(53),s=t(51),c=t(52),o=t(0),i=t.n(o),m=t(4),u=t(56),d=t(63),N=t(64),h=t(65),p=t(87),g=t(54),E=t.n(g),y=(t(55),function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"cart-sidebar-wrapper"},i.a.createElement("aside",{className:E()("cart-sidebar",{"cart-open":this.state.cartmethod})},i.a.createElement("div",{className:"cart-sidebar-header"},i.a.createElement("h3",null,"Your Cart"),i.a.createElement("div",{className:"close-btn cart-trigger close-dark",onClick:this.cartToggle},i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement(d.a,null)),i.a.createElement("div",{className:"cart-sidebar-overlay cart-trigger",onClick:this.cartToggle})),i.a.createElement("div",{className:E()("search-form-wrapper",{open:this.state.searchmethod})},i.a.createElement("div",{className:"search-trigger close-btn",onClick:this.searchToggle},i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement(N.a,null)),i.a.createElement("aside",{className:E()("main-aside",{open:this.state.navmethod})},i.a.createElement(h.a,null)),i.a.createElement("div",{className:"aside-overlay aside-trigger",onClick:this.toggleNav}),i.a.createElement("header",{className:"main-header header-1"},i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"navbar"},i.a.createElement(m.c,{className:"navbar-brand",to:"/"}," ",i.a.createElement("img",{src:"./assets/img/tenali-double-horse-logo-135x73.png",alt:"logo"})," "),i.a.createElement(p.a,null),i.a.createElement("div",{className:"header-controls"},i.a.createElement("ul",{className:"header-controls-inner"}),i.a.createElement("div",{className:"aside-toggler aside-trigger",onClick:this.toggleNav},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)))))))}}]),a}(u.a));a.a=y}}]);
//# sourceMappingURL=34.ee502ca0.chunk.js.map