(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{110:function(e,t,a){"use strict";var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"section bg-center bg-cover dark-overlay",style:{backgroundImage:"url(./assets/img/bg/Tenali-Double-Horse-NewsLetter.png)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"ct-newsletter"},o.a.createElement("div",{className:"section-title-wrap section-header"},o.a.createElement("h2",{className:"title"},"Join Our Newsletter"),o.a.createElement("p",{className:"subtitle"},"At Tenali Double Horse we're creating a world where accessibility of quality and health in return for trust is a norm.")),o.a.createElement("form",{method:"post"},o.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter your email address"}),o.a.createElement("button",{type:"submit",className:"btn-custom primary",name:"button"}," Submit ",o.a.createElement("i",{className:"far fa-paper-plane"})," ")))))}}]),t}(i.Component);t.a=m},136:function(e,t,a){"use strict";var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section light-bg"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-lg-6 mb-lg-30 "},o.a.createElement("img",{src:"./assets/img/misc/great-place-to-work.png",alt:"img",className:"shadow  p-1  bg-white rounded"})),o.a.createElement("div",{className:"col-lg-6 alignments"},o.a.createElement("div",{className:"section-title-wrap mr-lg-30 mt-lg-2"},o.a.createElement("h5",{className:"custom-primary"},"Achievement Certificate"),o.a.createElement("h2",{className:"title"},"Great Place to Work"),o.a.createElement("p",{className:"subtitle",style:{textAlign:"justify"}},"The Great Place to Work certification is a prestigious recognition given to companies that have created a positive workplace culture where employees feel valued, respected, and engaged. Tenali Double Horse Company has achieved this certification by meeting the high standards set by the Great Place to Work Institute."))))))}}]),t}(i.Component);t.a=m},186:function(e,t,a){"use strict";var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=[{icon:"flaticon-employee",count:24934,title:"Happy Customers"},{icon:"fas fa-box-open",count:20,title:"Products"},{icon:"fas fa-truck",count:67335,title:"orders delivered"},{icon:"fas fa-globe",count:8,title:"Total country"}],u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section section-padding  bg-cover bg-center mt-5 ",style:{backgroundImage:"url(./assets/img/categories/stats-banner.png)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center"},o.a.createElement("h2",{className:"title text-white"},"Our success Story"),o.a.createElement("p",{className:"subtitle text-white"},"Tenali Double Horse team is committed to provide the highest quality products and services to our customers to satisfy their needs and expectations of quality, reliability, and timely delivery.")),o.a.createElement("div",{className:"row "},m.map(function(e,t){return o.a.createElement("div",{key:t,className:"col-lg-3 col-md-6 col-sm-6"},o.a.createElement("div",{className:"ct-infographic-item"},o.a.createElement("i",{className:e.icon}),o.a.createElement("h4",null,(new Intl.NumberFormat).format(e.count)),o.a.createElement("p",null,e.title)))}))))}}]),t}(i.Component);t.a=u},188:function(e,t,a){"use strict";var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=a(5),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleIntersection=function(e){e.forEach(function(e){e.isIntersecting&&a.setState({isVisible:!0})})},a.state={isVisible:!1},a.sectionRef=o.a.createRef(),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:.3});this.sectionRef.current&&e.observe(this.sectionRef.current)}},{key:"render",value:function(){var e=this.state.isVisible;return o.a.createElement("div",{ref:this.sectionRef,className:"subheader mt-lg-5 mb-5 pt-5  fade-in-section ".concat(e?"visible":""),style:{backgroundImage:"url(./assets/img/bg/tenali-souble-horse-about-section-1900x600.png)",paddingTop:"30px!important"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"subheader-inner"},o.a.createElement("nav",{"aria-label":"breadcrumb breadcrumb-two"},o.a.createElement("ol",{className:"breadcrumb breadcrumb-two "},o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement("h5",{className:"custom-primary",style:{marginBottom:"10px"}},"About")),o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement("h2",{className:"title",style:{marginBottom:"10px"}},"Tenali Double Horse")),o.a.createElement("li",{className:"breadcrumb-item active text-dark","aria-current":"page"},"Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse\u2019s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you."),o.a.createElement(m.c,{to:"/about",className:"btn-custom primary mt-4"},"Read More  "))))))}}]),t}(i.Component);t.a=u},195:function(e,t,a){"use strict";var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=[{icon:"flaticon-employee",count:24934,title:"Happy Customers"},{icon:"fas fa-box-open",count:20,title:"Products"},{icon:"fas fa-truck",count:67335,title:"orders delivered"}],u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2",style:{backgroundImage:"url(./assets/img/tenali-double-horse-about-1920x980.jpg)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center"},o.a.createElement("h2",{className:"title text-white"},"Our success Story"),o.a.createElement("p",{className:"subtitle text-white"},"Tenali Double Horse team is committed to provide the highest quality products and services to our customers to satisfy their needs and expectations of quality, reliability, and timely delivery.")),o.a.createElement("div",{className:"row"},m.map(function(e,t){return o.a.createElement("div",{key:t,className:"col-lg-4 col-md-6 col-sm-6"},o.a.createElement("div",{className:"ct-infographic-item"},o.a.createElement("i",{className:e.icon}),o.a.createElement("h4",null,(new Intl.NumberFormat).format(e.count)),o.a.createElement("p",null,e.title)))}))))}}]),t}(i.Component);t.a=u},313:function(e,t,a){"use strict";var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section  mb-5 mt-5",style:{backgroundColor:"#f9f9f9"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"col-lg-6 mb-lg-30 ct-single-img-wrapper"},o.a.createElement("img",{src:"./assets/img/Tenali-Double-Horse-about-1280x1560.png",alt:"img"}),o.a.createElement("div",{className:"ct-dots"})),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"section-title-wrap mr-lg-30 mt-4"},o.a.createElement("h5",{className:"custom-primary"},"About"),o.a.createElement("h2",{className:"title"}," Tenali Double Horse "),o.a.createElement("p",{className:"subtitle",style:{textAlign:"justify"}},"Since launching in 2005,  Tenali Double Horse has empowered many lives in India and gained millions of people. By putting all the pieces of a successful business in one convenient platform, Tenali Double Horse\u2019s impeccable distribution network got started and grew faster. We provide the best quality Urad Gota and Urad Dall near you."),o.a.createElement("a",{href:"/about",className:"btn-custom"},"Read more"))))))}}]),t}(i.Component);t.a=m},389:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=a(63),u=a.n(m),d=a(74),b=a(59),p=a(58),h=(a(313),a(188)),E=(a(195),a(110),a(186)),g=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"rules-container"},o.a.createElement("div",{className:"Legacy-Container mr-lg-3"},o.a.createElement("h5",{className:"custom-primary"},"Our Legacy"),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"From the very start, the entire Tenali Double Horse team has always been focused on fanatically serving our consumers. We believe the only way to be successful is to truly understand the market requirements and provide the products our consumers need and cherish."),o.a.createElement("br",null),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"Now we have grown to a huge team of service personnel working out of our headquarters in Tenali. By staying humble and focused on bringing the heart to quality, we are encouraging more online business owners to make their impact every day.")),o.a.createElement("div",{className:"principles-Container ml-lg-3"},o.a.createElement("h5",{className:"custom-primary"},"Our Principles"),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"We strongly believe in commitment and loyalty being primary work ethics. And in its decades of service, these are what brought the Tenali Double Horse success without fail. As a reason, Tenali Double Horse stands committed to serve its consumers with products of the highest quality and keeps striving to exceed their expectations and remain their favorite choice forever. "),o.a.createElement("br",null),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"A higher amount of dedication and commitment is shown towards our team consisting of hundreds of employees because of whom we are who we are today."))))}}]),t}(i.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"main-timeline"},this.props.timelineData.map(function(e,t){return o.a.createElement("div",{className:"timeline",key:t},o.a.createElement("div",{className:"timeline-icon"},o.a.createElement("span",{className:"year"},e.year)),o.a.createElement("div",{className:"timeline-content"},o.a.createElement("h3",{className:"title"},e.title),o.a.createElement("p",{className:"description"},e.description)))})))))}}]),t}(o.a.Component),f=(o.a.Component,function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{id:"timeline"},o.a.createElement("h5",{className:"custom-primary text-center"},"Unraveling Our Story"),o.a.createElement("h2",{className:"title text-center"},"A Timeline of Growth, Innovation, and Impact"),o.a.createElement("div",{className:"demo-card-wrapper"},o.a.createElement("div",{className:"demo-card demo-card--step1"},o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"number-box"},o.a.createElement("span",null,"2005")),o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Subtitle")," Technology")),o.a.createElement("div",{className:"body"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam."),o.a.createElement("img",{src:"http://placehold.it/1000x500",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step2"},o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"number-box"},o.a.createElement("span",null,"2010")),o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Subtitle")," Confidence")),o.a.createElement("div",{className:"body"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam."),o.a.createElement("img",{src:"http://placehold.it/1000x500",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step3"},o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"number-box"},o.a.createElement("span",null,"2015")),o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Subtitle")," Adaptation")),o.a.createElement("div",{className:"body"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam."),o.a.createElement("img",{src:"http://placehold.it/1000x500",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step4"},o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"number-box"},o.a.createElement("span",null,"2020")),o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Subtitle")," Consistency")),o.a.createElement("div",{className:"body"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam."),o.a.createElement("img",{src:"http://placehold.it/1000x500",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step5"},o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"number-box"},o.a.createElement("span",null,"2023")),o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Subtitle")," Conversion")),o.a.createElement("div",{className:"body"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam."),o.a.createElement("img",{src:"http://placehold.it/1000x500",alt:"Graphic"})))))}}]),t}(i.Component)),N=a(136),y=(i.Component,function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section light-bg  mb-5 mt-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center "},o.a.createElement("h5",{className:"custom-primary"},"A Brand of "),o.a.createElement("h2",{className:"title"},"Tenali Double horse Group"),o.a.createElement("p",{className:"subtitle"},"Tenali Double Horse industry-leading all-in-one platform makes it simple to set a healthy breakfast regime.")),o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-lg-6 mb-lg-30 alignments d-flex flex-column border-right"},o.a.createElement("img",{src:"./assets/img/prods/tdh-main-3.png",alt:"img",className:"mb-2  "}),o.a.createElement("a",{href:"https://www.tenalidoublehorse.com/",rel:"noopener noreferrer",target:"_blank",class:"btn-custom  shadow-none "},"View More")),o.a.createElement("div",{className:"col-lg-6 alignments d-flex flex-column"},o.a.createElement("img",{src:"./assets/img/prods/tdhf-icon-3.png",alt:"img",className:" mb-2"}),o.a.createElement("a",{href:"https://tdhfoodproducts.com/",rel:"noopener noreferrer",target:"_blank",class:"btn-custom  shadow-none "},"View More")))))}}]),t}(i.Component)),w=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement(h.a,null),o.a.createElement(y,null),o.a.createElement(g,null),o.a.createElement(N.a,null),o.a.createElement(E.a,null),o.a.createElement(f,null))}}]),t}(i.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Tenali  doublehorse | ","About Us"),o.a.createElement("meta",{name:"description",content:"#"})),o.a.createElement(d.a,null),o.a.createElement(b.a,{breadcrumb:{pagename:"About Us",bannerimg:"/assets/img/banner/about-header-banner.png"}}),o.a.createElement(w,null),o.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),t}(i.Component);t.default=j},59:function(e,t,a){"use strict";var n=a(49),r=a(50),l=a(53),c=a(51),s=a(52),i=a(0),o=a.n(i),m=a(5),u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"subheader-inner"},o.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement(m.c,{to:"/"},"Home")),o.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(i.Component);t.a=u}}]);
//# sourceMappingURL=22.4e56e244.chunk.js.map