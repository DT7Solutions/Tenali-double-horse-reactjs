(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{286:function(e,a,t){"use strict";var n=t(49),r=t(50),s=t(53),l=t(51),c=t(52),i=t(0),o=t.n(i),m=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"section "},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-lg-6 mb-lg-30",style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("video",{width:"100%",height:"95%",controls:!0,poster:"./assets/img/misc/great-place-to-work.png"},o.a.createElement("source",{src:"./assets/video/great-place.mp4",type:"video/mp4"}))),o.a.createElement("div",{className:"col-lg-6 alignments"},o.a.createElement("div",{className:"section-title-wrap mr-lg-30 mt-lg-2"},o.a.createElement("h5",{className:"custom-primary"},"Cultivating Excellence: A Great Place to Work"),o.a.createElement("h2",{className:"title"},"Nurturing Growth, Collaboration, and Fulfillment"),o.a.createElement("p",{className:"subtitle",style:{textAlign:"justify"}},"At Tenali Double Horse, our journey is defined not only by our products but also by our people. We take immense pride in fostering a work environment that is more than just a workplace; it's a space where creativity, innovation, and camaraderie flourish. As a testament to our commitment to our employees, we are honored to be recognized as a 'Great Place to Work.' This recognition reflects our dedication to creating an atmosphere where talent is nurtured, diversity is celebrated, and personal growth is encouraged."))))))}}]),a}(i.Component);a.a=m},325:function(e,a,t){"use strict";var n=t(49),r=t(50),s=t(53),l=t(51),c=t(52),i=t(0),o=t.n(i),m=t(147),u=t.n(m),d=(t(148),[{icon:"fas fa-medal",count:18,title:"Years of Experience",delay:"0.4s"},{icon:"fas fa-globe",count:12,title:"Total countries",delay:"0.6s"},{icon:"fas fa-map",count:18,title:"States",delay:"0.8s"},{icon:"fas fa-box-open",count:10,title:"Products",delay:"0.9s"}]),h=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){(new u.a).init()}},{key:"render",value:function(){return o.a.createElement("div",{className:"section section-padding  bg-cover bg-center mt-5 ",style:{backgroundImage:"url(./assets/img/categories/stats-banner.png)"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center"},o.a.createElement("h2",{className:"title text-white"},"Empowering Progress"),o.a.createElement("p",{className:"subtitle text-white"},"Explore the statistics that define Tenali Double Horse's journey. From years of excellence to a growing customer base, discover the metrics that highlight our commitment to quality and growth.")),o.a.createElement("div",{className:"row "},d.map(function(e,a){return o.a.createElement("div",{key:a,className:"col-lg-3 col-md-6 col-sm-6 wow animate__animated animate__fadeInUp","data-wow-delay":e.delay},o.a.createElement("div",{className:"ct-infographic-item"},o.a.createElement("i",{className:e.icon}),o.a.createElement("h4",null,(new Intl.NumberFormat).format(e.count)),o.a.createElement("p",null,e.title)))}))))}}]),a}(i.Component);a.a=h},394:function(e,a,t){"use strict";t.r(a);var n=t(49),r=t(50),s=t(53),l=t(51),c=t(52),i=t(0),o=t.n(i),m=t(69),u=t.n(m),d=t(93),h=t(67),p=t(59),b=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(l.a)(a).call(this,e))).handleIntersection=function(e){e.forEach(function(e){e.isIntersecting&&t.setState({isVisible:!0})})},t.state={isVisible:!1},t.sectionRef=o.a.createRef(),t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:.3});this.sectionRef.current&&e.observe(this.sectionRef.current)}},{key:"render",value:function(){var e=this.state.isVisible;return o.a.createElement("div",{ref:this.sectionRef,className:"subheader mt-lg-5 mb-5 pt-5  fade-in-section ".concat(e?"visible":""),style:{backgroundImage:"url(./assets/img/bg/tenali-souble-horse-about-section-1900x600.webp)",paddingTop:"30px!important"}},o.a.createElement("div",{className:"container",style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{className:"subheader-inner"},o.a.createElement("nav",{"aria-label":"breadcrumb breadcrumb-two"},o.a.createElement("ol",{className:"breadcrumb breadcrumb-two "},o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement("h5",{className:"custom-primary",style:{marginBottom:"10px"}},"About")),o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement("h2",{className:"title",style:{marginBottom:"10px"}},"Tenali Double Horse")),o.a.createElement("li",{className:"breadcrumb-item active text-dark","aria-current":"page",style:{textAlign:"justify"}},"At Tenali Double Horse, our journey began in 2005 with a vision to bring excellence and trust to every household in India. Guided by our commitment to quality and customer satisfaction, we have since become a trusted name that resonates with millions."))))))}}]),a}(i.Component),g=t(325),E=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container mt-md-5 mt-sm-5 "},o.a.createElement("div",{className:"row  rules-container"},o.a.createElement("div",{className:"col-lg-6 col-md-12"},o.a.createElement("div",{className:"tdh-legacy-principles"},o.a.createElement("h5",{className:"custom-primary text-center"},"Our Legacy"),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"From the very start, the entire Tenali Double Horse team has always been focused on fanatically serving our consumers. We believe the only way to be successful is to truly understand the market requirements and provide the products our consumers need and cherish."),o.a.createElement("br",null),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"Now we have grown to a huge team of service personnel working out of our headquarters in Tenali. By staying humble and focused on bringing the heart to quality, we are encouraging more online business owners to make their impact every day."))),o.a.createElement("div",{className:"col-lg-6 col-md-12"},o.a.createElement("div",{className:"tdh-legacy-principles"},o.a.createElement("h5",{className:"custom-primary text-center"},"Our Principles"),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"We strongly believe that commitment and loyalty are primary work ethics. And in its decades of service, these are what brought the Tenali Double Horse success without fail. As a result, Tenali Double Horse stands committed to serving its consumers with products of the highest quality and keeps striving to exceed their expectations and remain their favorite choice forever."),o.a.createElement("p",{className:"para",style:{textAlign:"justify"}},"A higher amount of dedication and commitment is shown towards our team, which consists of hundreds of employees, because of whom we are who we are today.")))))}}]),a}(i.Component),f=t(286),y=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"section light-bg  mb-5 mt-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center "},o.a.createElement("h5",{className:"custom-primary"},"A Brand of "),o.a.createElement("h2",{className:"title"},"Tenali Double Horse Group"),o.a.createElement("p",{className:"subtitle"},"Tenali Double Horse industry-leading all-in-one platform makes it simple to set a healthy breakfast regime.")),o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-lg-6 mb-lg-30 alignments d-flex flex-column border-right"},o.a.createElement("img",{src:"./assets/img/prods/tdh-main-3.png",alt:"img",className:"mb-2  "}),o.a.createElement("a",{href:"#tenali-double-horse-products",rel:"noopener noreferrer",target:"_blank",class:"btn-custom  shadow-none "},"View More")),o.a.createElement("div",{className:"col-lg-6 alignments d-flex flex-column"},o.a.createElement("img",{src:"./assets/img/prods/tdhf-icon-3.png",alt:"img",className:" mb-2"}),o.a.createElement("a",{href:"https://tdhfoodproducts.com/",rel:"noopener noreferrer",target:"_blank",class:"btn-custom  shadow-none "},"View More")))))}}]),a}(i.Component),v=t(60),N=t(61),w=t(307),j=t.n(w),x=(t(308),function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){j.a.init({duration:1500})}},{key:"render",value:function(){var e={backgroundImage:"url(".concat(".","/assets/img/bg/video-background-image.png)"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};return o.a.createElement("section",{id:"timeline",style:{backgroundColor:"#fff",borderTop:"none"}},o.a.createElement("h5",{className:"custom-primary text-center"},"Unraveling Our Story"),o.a.createElement("h2",{className:"title text-center"},"A Timeline of Growth, Innovation, and Impact"),o.a.createElement("div",{className:"demo-card-wrapper pt-2 pb-5"},o.a.createElement("div",{className:"demo-card demo-card--step1  ","data-aos":"fade-left","data-aos-delay":"400"},o.a.createElement("div",{className:"head p-3"},o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"The"),"Beginning")),o.a.createElement("div",{className:"body"},o.a.createElement("p",{className:"content-justify",style:{lineHeight:"24px"}},"Tenali Double Horse, renowned for high-quality dals and ready-to-eat products, started in 2005 when Shri Munagala Krishnamurthy planted a seed in Tenali, Andhra Pradesh. His care nurtured Sri Krishnamurthy's Mahendra Dall Mill, supplying premium urad dall in 50-kilogram packs."),o.a.createElement("img",{src:"./assets/img/people/2005.png",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step2 ","data-aos":"fade-right","data-aos-delay":"600"},o.a.createElement("div",{className:"head p-3"},o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Passing ")," the Torch")),o.a.createElement("div",{className:"body"},o.a.createElement("p",{className:"content-justify",style:{lineHeight:"24px"}},"Sri Krishnamurthy's legacy continued through his son, Sri Munagala Mohan Shyam Prasad, driving our swift growth. Outstanding response led to South India's first 1-kg urad dall consumer pack by Shri Shyam Prasad."),o.a.createElement("img",{src:"./assets/img/people/2010.png",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step3 ","data-aos":"fade-left","data-aos-delay":"800"},o.a.createElement("div",{className:"head p-3"},o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Expanding ")," Horizons")),o.a.createElement("div",{className:"body"},o.a.createElement("p",{className:"content-justify",style:{lineHeight:"24px"}},"New infrastructure led to our second mill, the Maharani Dal Mill, addressing the challenging consumer market. Tireless work by the Tenali Double Horse team secured successful product placement, initially in general trade and later in modern trade outlets."),o.a.createElement("img",{src:"./assets/img/people/2012.png",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step4 ","data-aos":"fade-right","data-aos-delay":"1000"},o.a.createElement("div",{className:"head p-3"},o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Going")," Global")),o.a.createElement("div",{className:"body"},o.a.createElement("p",{className:"content-justify",style:{lineHeight:"24px"}},"Tenali Double Horse's high-yield Urad Dall earned consumer affection. Partnerships with influential brand ambassadors, like our IPL partnership with Sunrisers Hyderabad, expanded our global presence, attracting distributors and consumers from the US, UK, Singapore, and Australia, fueling growth."),o.a.createElement("img",{src:"./assets/img/people/2020.png",alt:"Graphic"}))),o.a.createElement("div",{className:"demo-card demo-card--step5","data-aos":"fade-left","data-aos-delay":"500"},o.a.createElement("div",{className:"head p-3"},o.a.createElement("h2",{className:"text-white"},o.a.createElement("span",{className:"small"},"Expanding ")," the Range")),o.a.createElement("div",{className:"body"},o.a.createElement("p",{className:"content-justify",style:{lineHeight:"28px"}},"Our third mill, Mahadeva Dall Industries Private Limited, was a significant milestone. We aimed to reach every Indian home, introducing new products such as dals and the beloved Telugu sweet, sunundalu. This transformation, embodied by brands like TDH, Rishika, and Sunundalu, symbolizes our journey from humble beginnings to a renowned name in the food industry."),o.a.createElement("img",{src:"./assets/img/people/2025.png",alt:"Graphic"})))),o.a.createElement("div",{className:"fluid-container video-conatiner"},o.a.createElement("h2",{className:"text-center title mt-4 mb-3"},"Our Story"),o.a.createElement("div",{className:"row ourstory-section text-center",style:e},o.a.createElement("div",{className:"col-lg-8 col-12"},o.a.createElement("video",{width:"100%",height:"100%",controls:!0},o.a.createElement("source",{src:"./assets/video/tdh-our-story.mp4",type:"video/mp4"}))))))}}]),a}(i.Component)),k=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"section "},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-title-wrap section-header text-center "},o.a.createElement("h5",{className:"custom-primary"},"Savor Delights with TDH Foods"),o.a.createElement("h2",{className:"title"},"Indulge in Tradition and Convenience"),o.a.createElement("p",{className:"subtitle"},"Explore TDH Foods, our renowned subsidiary brand known for iconic Sunnundalu and instant mixes like dosa, idly, and vada. Elevate your culinary journey with authentic flavors and easy preparation.")),o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-lg-6 mb-lg-30 alignments d-flex flex-column "},o.a.createElement("img",{src:"./assets/img/prods/tenali-double-horse-about-page-tdhf-section.png",alt:"img",className:" mb-2"})),o.a.createElement("div",{className:"col-lg-6 alignments d-flex flex-column"},o.a.createElement("div",{className:"section-title-wrap mr-lg-30 mt-lg-2"},o.a.createElement("h2",{style:{fontSize:"30px"}},"About  Company"),o.a.createElement("p",{className:"subtitle",style:{textAlign:"justify"}},"TDH Foods is a sister company to Tenali Double Horse that started on the core principle of selling the healthiest foods in their purest form without adding any preservatives. Everything that is made is of the highest quality, and there are no second guesses about our authenticity. We assure you that you\u2019ll only have the best\u2014so good that there\u2019s no turning back! It\u2019ll make you crave more and be hooked on our products!"),o.a.createElement("a",{href:"https://tdhfoodproducts.com/about/",rel:"noopener noreferrer",target:"_blank",class:"btn-custom  shadow-none "},"View More"))))))}}]),a}(i.Component),O=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement(b,null),o.a.createElement(y,null),o.a.createElement(x,null),o.a.createElement(E,null),o.a.createElement(f.a,null),o.a.createElement(g.a,null),o.a.createElement(k,null),o.a.createElement(v.a,null),o.a.createElement(N.a,null))}}]),a}(i.Component),T=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"Known for quality and taste Tenali double Horse | ","About Us"),o.a.createElement("meta",{name:"Come get Tenali double horse quality products like urad dal, toor dal, and moong dal for a reasonable price from stores near you",content:"#"})),o.a.createElement(d.a,null),o.a.createElement(h.a,{breadcrumb:{pagename:"About Us",bannerimg:"/assets/img/banner/tenali-double-horse-about-page-banner.png"}}),o.a.createElement(O,null),o.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),a}(i.Component);a.default=T},60:function(e,a,t){"use strict";var n=t(73),r=t(0),s=t.n(r),l=t(86),c=t(92);a.a=function(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],i=a[1],o=Object(r.useState)(""),m=Object(n.a)(o,2),u=m[0],d=m[1],h=Object(r.useState)(""),p=Object(n.a)(h,2),b=p[0],g=p[1],E=Object(r.useState)(""),f=Object(n.a)(E,2),y=f[0],v=f[1],N=function(){i(!t)};return s.a.createElement("div",null,s.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),s.a.createElement("div",{id:"feedbackDrawer",className:t?"showDrawer":""},s.a.createElement("div",{id:"feedbackForm"},s.a.createElement(l.a,{onSubmit:function(e){e.preventDefault();var a={fullName:u,email:b,message:y};c.a.send("service_u0jehlt","template_aamrei5",a,"cjCRUWDX0cKAQSKL6").then(function(e){console.log("Email sent successfully:",e),alert("Message successfully sent!")}).catch(function(e){console.error("Email sending error:",e)}),d(""),g(""),v(""),i(!1)}},s.a.createElement("h2",null,"Submit Feedback"),s.a.createElement(l.a.Group,{controlId:"fullName",style:{marginBottom:"5px"}},s.a.createElement(l.a.Control,{type:"text",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Full Name",required:!0})),s.a.createElement(l.a.Group,{controlId:"email",style:{marginBottom:"5px"}},s.a.createElement(l.a.Control,{type:"email",value:b,onChange:function(e){return g(e.target.value)},placeholder:"Email",required:!0})),s.a.createElement(l.a.Group,{controlId:"message",style:{marginBottom:"5px"}},s.a.createElement(l.a.Control,{as:"textarea",value:y,onChange:function(e){return v(e.target.value)},placeholder:"Message",rows:"5",required:!0})),s.a.createElement("button",{type:"submit",className:"btn-custom btn-sm primary",name:"button"},"Send Message"))),s.a.createElement("div",{id:"feedbackSuccess"},s.a.createElement("h2",null,"Thank You"),s.a.createElement("p",null,"Your feedback was successfully submitted"),s.a.createElement("button",{onClick:N},"Submit More Feedback")),s.a.createElement("div",{id:"feedbackError"},s.a.createElement("h2",null,"Aw, Snap!"),s.a.createElement("p",null,"There was an error submitting your feedback"),s.a.createElement("button",{onClick:N},"Try Again")),s.a.createElement("div",{id:"feedbackTrigger",onClick:N},"Feedback",s.a.createElement("span",{id:"close"},"\xbb"))))}},61:function(e,a,t){"use strict";var n=t(49),r=t(50),s=t(53),l=t(51),c=t(52),i=t(0),o=t.n(i),m=(t(62),t(63),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(l.a)(a).call(this,e))).handleAccordionClick=function(e){t.setState(function(a){return{openIndex:a.openIndex===e?-1:e}})},t.state={openIndex:-1},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"womensdayawrap "},o.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(a,t){return o.a.createElement("div",{key:t,className:"accordion-item ".concat(t===e.state.openIndex?"open":"")},o.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(t)}},o.a.createElement("span",null,o.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),o.a.createElement("span",null,o.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},a.heading)),o.a.createElement("div",{className:"plusicon ".concat(t===e.state.openIndex?"minusicon":"plusicon")})),t===e.state.openIndex&&o.a.createElement("div",{className:"accordion-content bg-white"},o.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",o.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),o.a.createElement("p",{className:"p-1 text-center"},"mail us ",o.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),a}(i.Component));a.a=m},62:function(e,a,t){e.exports=t.p+"static/media/trial-notable.ea726d66.png"},63:function(e,a,t){e.exports=t.p+"static/media/aha.cc12d466.png"},67:function(e,a,t){"use strict";var n=t(49),r=t(50),s=t(53),l=t(51),c=t(52),i=t(0),o=t.n(i),m=t(6),u=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"subheader-inner"},o.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item "},o.a.createElement(m.c,{to:"/"},"Home")),o.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(i.Component);a.a=u}}]);
//# sourceMappingURL=21.42f6b44a.chunk.js.map