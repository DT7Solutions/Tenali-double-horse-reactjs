(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{106:function(e,a,t){"use strict";var n=t(48),l=t(49),o=t(51),r=t(50),i=t(52),c=t(0),m=t.n(c),u=t(5),s=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"subheader dark-overlay dark-overlay-2",style:{backgroundImage:"url(/Tenali-Double-horse-Reactjs/assets/img/Tenali-Double-Horse-About-1920x800.jpg)"}},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"subheader-inner"},m.a.createElement("h1",null,this.props.breadcrumb.pagename),m.a.createElement("nav",{"aria-label":"breadcrumb"},m.a.createElement("ol",{className:"breadcrumb"},m.a.createElement("li",{className:"breadcrumb-item"},m.a.createElement(u.b,{to:"/"},"Home")),m.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(c.Component);a.a=s},354:function(e,a,t){"use strict";t.r(a);var n=t(48),l=t(49),o=t(51),r=t(50),i=t(52),c=t(0),m=t.n(c),u=t(107),s=t.n(u),p=t(119),E=t(106),v=t(54),d=t(5),b=t(55),h=t(102),g=t(83),N=b.reduce(function(e,a){return e+a.price*a.qty},0),y=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement("section",{className:"section"},m.a.createElement("div",{className:"container"},m.a.createElement("form",{method:"post"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-7"},m.a.createElement(h.a,{defaultActiveKey:"0"},m.a.createElement("div",{className:"ct-notice"},m.a.createElement("p",null,"Are you a returning customer?",m.a.createElement(h.a.Toggle,{as:g.a,variant:"link",eventKey:"0",className:"p-0"},"Click here to login"))),m.a.createElement(h.a.Collapse,{eventKey:"0"},m.a.createElement("div",{className:"ct-notice-content d-block"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-6 form-group"},m.a.createElement("label",null,"Email Address"),m.a.createElement("input",{type:"text",className:"form-control",name:"login-email",placeholder:"Email Address"})),m.a.createElement("div",{className:"col-xl-6 form-group"},m.a.createElement("label",null,"Password"),m.a.createElement("input",{type:"password",className:"form-control",name:"login-pass",placeholder:"Password"})),m.a.createElement("div",{className:"col-12 form-group"},m.a.createElement("div",{className:"custom-control custom-checkbox"},m.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"rememberMe"}),m.a.createElement("label",{className:"custom-control-label",htmlFor:"rememberMe"},"Remember Me"))),m.a.createElement("div",{className:"col-12"},m.a.createElement("button",{type:"submit",className:"btn-custom shadow-none btn-sm",name:"button"},"Login"))))),m.a.createElement("div",{className:"ct-notice"},m.a.createElement("p",null,"Do you have a coupon code?",m.a.createElement(h.a.Toggle,{as:g.a,variant:"link",eventKey:"1",className:"p-0"},"Click here to apply"))),m.a.createElement(h.a.Collapse,{eventKey:"1"},m.a.createElement("div",{className:"ct-notice-content d-block"},m.a.createElement("p",null,"If you have a coupon code, apply it below"),m.a.createElement("div",{className:"input-group"},m.a.createElement("input",{type:"text",className:"form-control",placeholder:"Coupon Code"}),m.a.createElement("div",{className:"input-group-append"},m.a.createElement("button",{className:"btn-custom shadow-none",type:"button"},"Apply Code")))))),m.a.createElement("h4",null,"Billing Details"),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"form-group col-xl-6"},m.a.createElement("label",null,"First Name ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement("input",{type:"text",placeholder:"First Name",name:"fname",className:"form-control",required:!0})),m.a.createElement("div",{className:"form-group col-xl-6"},m.a.createElement("label",null,"Last Name ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lname",className:"form-control",required:!0})),m.a.createElement("div",{className:"form-group col-xl-12"},m.a.createElement("label",null,"Company Name"),m.a.createElement("input",{type:"text",placeholder:"Company Name (Optional)",name:"cname",className:"form-control"})),m.a.createElement("div",{className:"form-group col-xl-12"},m.a.createElement("label",null,"Country ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement("select",{className:"form-control"},m.a.createElement("option",{value:!0},"Select a Country"),m.a.createElement("option",{value:"Afghanistan"},"Afghanistan"),m.a.createElement("option",{value:"\xc5land Islands"},"\xc5land Islands"),m.a.createElement("option",{value:"Albania"},"Albania"),m.a.createElement("option",{value:"Algeria"},"Algeria"),m.a.createElement("option",{value:"American Samoa"},"American Samoa"),m.a.createElement("option",{value:"Andorra"},"Andorra"),m.a.createElement("option",{value:"Angola"},"Angola"),m.a.createElement("option",{value:"Anguilla"},"Anguilla"),m.a.createElement("option",{value:"Antarctica"},"Antarctica"),m.a.createElement("option",{value:"Antigua and Barbuda"},"Antigua and Barbuda"),m.a.createElement("option",{value:"Argentina"},"Argentina"),m.a.createElement("option",{value:"Armenia"},"Armenia"),m.a.createElement("option",{value:"Aruba"},"Aruba"),m.a.createElement("option",{value:"Australia"},"Australia"),m.a.createElement("option",{value:"Austria"},"Austria"),m.a.createElement("option",{value:"Azerbaijan"},"Azerbaijan"),m.a.createElement("option",{value:"Bahamas"},"Bahamas"),m.a.createElement("option",{value:"Bahrain"},"Bahrain"),m.a.createElement("option",{value:"Bangladesh"},"Bangladesh"),m.a.createElement("option",{value:"Barbados"},"Barbados"),m.a.createElement("option",{value:"Belarus"},"Belarus"),m.a.createElement("option",{value:"Belgium"},"Belgium"),m.a.createElement("option",{value:"Belize"},"Belize"),m.a.createElement("option",{value:"Benin"},"Benin"),m.a.createElement("option",{value:"Bermuda"},"Bermuda"),m.a.createElement("option",{value:"Bhutan"},"Bhutan"),m.a.createElement("option",{value:"Bolivia"},"Bolivia"),m.a.createElement("option",{value:"Bosnia and Herzegovina"},"Bosnia and Herzegovina"),m.a.createElement("option",{value:"Botswana"},"Botswana"),m.a.createElement("option",{value:"Bouvet Island"},"Bouvet Island"),m.a.createElement("option",{value:"Brazil"},"Brazil"),m.a.createElement("option",{value:"British Indian Ocean Territory"},"British Indian Ocean Territory"),m.a.createElement("option",{value:"Brunei Darussalam"},"Brunei Darussalam"),m.a.createElement("option",{value:"Bulgaria"},"Bulgaria"),m.a.createElement("option",{value:"Burkina Faso"},"Burkina Faso"),m.a.createElement("option",{value:"Burundi"},"Burundi"),m.a.createElement("option",{value:"Cambodia"},"Cambodia"),m.a.createElement("option",{value:"Cameroon"},"Cameroon"),m.a.createElement("option",{value:"Canada"},"Canada"),m.a.createElement("option",{value:"Cape Verde"},"Cape Verde"),m.a.createElement("option",{value:"Cayman Islands"},"Cayman Islands"),m.a.createElement("option",{value:"Central African Republic"},"Central African Republic"),m.a.createElement("option",{value:"Chad"},"Chad"),m.a.createElement("option",{value:"Chile"},"Chile"),m.a.createElement("option",{value:"China"},"China"),m.a.createElement("option",{value:"Christmas Island"},"Christmas Island"),m.a.createElement("option",{value:"Cocos (Keeling) Islands"},"Cocos (Keeling) Islands"),m.a.createElement("option",{value:"Colombia"},"Colombia"),m.a.createElement("option",{value:"Comoros"},"Comoros"),m.a.createElement("option",{value:"Congo"},"Congo"),m.a.createElement("option",{value:"Congo, The Democratic Republic of The"},"Congo, The Democratic Republic of The"),m.a.createElement("option",{value:"Cook Islands"},"Cook Islands"),m.a.createElement("option",{value:"Costa Rica"},"Costa Rica"),m.a.createElement("option",{value:"Cote D'ivoire"},"Cote D'ivoire"),m.a.createElement("option",{value:"Croatia"},"Croatia"),m.a.createElement("option",{value:"Cuba"},"Cuba"),m.a.createElement("option",{value:"Cyprus"},"Cyprus"),m.a.createElement("option",{value:"Czech Republic"},"Czech Republic"),m.a.createElement("option",{value:"Denmark"},"Denmark"),m.a.createElement("option",{value:"Djibouti"},"Djibouti"),m.a.createElement("option",{value:"Dominica"},"Dominica"),m.a.createElement("option",{value:"Dominican Republic"},"Dominican Republic"),m.a.createElement("option",{value:"Ecuador"},"Ecuador"),m.a.createElement("option",{value:"Egypt"},"Egypt"),m.a.createElement("option",{value:"El Salvador"},"El Salvador"),m.a.createElement("option",{value:"Equatorial Guinea"},"Equatorial Guinea"),m.a.createElement("option",{value:"Eritrea"},"Eritrea"),m.a.createElement("option",{value:"Estonia"},"Estonia"),m.a.createElement("option",{value:"Ethiopia"},"Ethiopia"),m.a.createElement("option",{value:"Falkland Islands (Malvinas)"},"Falkland Islands (Malvinas)"),m.a.createElement("option",{value:"Faroe Islands"},"Faroe Islands"),m.a.createElement("option",{value:"Fiji"},"Fiji"),m.a.createElement("option",{value:"Finland"},"Finland"),m.a.createElement("option",{value:"France"},"France"),m.a.createElement("option",{value:"French Guiana"},"French Guiana"),m.a.createElement("option",{value:"French Polynesia"},"French Polynesia"),m.a.createElement("option",{value:"French Southern Territories"},"French Southern Territories"),m.a.createElement("option",{value:"Gabon"},"Gabon"),m.a.createElement("option",{value:"Gambia"},"Gambia"),m.a.createElement("option",{value:"Georgia"},"Georgia"),m.a.createElement("option",{value:"Germany"},"Germany"),m.a.createElement("option",{value:"Ghana"},"Ghana"),m.a.createElement("option",{value:"Gibraltar"},"Gibraltar"),m.a.createElement("option",{value:"Greece"},"Greece"),m.a.createElement("option",{value:"Greenland"},"Greenland"),m.a.createElement("option",{value:"Grenada"},"Grenada"),m.a.createElement("option",{value:"Guadeloupe"},"Guadeloupe"),m.a.createElement("option",{value:"Guam"},"Guam"),m.a.createElement("option",{value:"Guatemala"},"Guatemala"),m.a.createElement("option",{value:"Guernsey"},"Guernsey"),m.a.createElement("option",{value:"Guinea"},"Guinea"),m.a.createElement("option",{value:"Guinea-bissau"},"Guinea-bissau"),m.a.createElement("option",{value:"Guyana"},"Guyana"),m.a.createElement("option",{value:"Haiti"},"Haiti"),m.a.createElement("option",{value:"Heard Island and Mcdonald Islands"},"Heard Island and Mcdonald Islands"),m.a.createElement("option",{value:"Holy See (Vatican City State)"},"Holy See (Vatican City State)"),m.a.createElement("option",{value:"Honduras"},"Honduras"),m.a.createElement("option",{value:"Hong Kong"},"Hong Kong"),m.a.createElement("option",{value:"Hungary"},"Hungary"),m.a.createElement("option",{value:"Iceland"},"Iceland"),m.a.createElement("option",{value:"India"},"India"),m.a.createElement("option",{value:"Indonesia"},"Indonesia"),m.a.createElement("option",{value:"Iran, Islamic Republic of"},"Iran, Islamic Republic of"),m.a.createElement("option",{value:"Iraq"},"Iraq"),m.a.createElement("option",{value:"Ireland"},"Ireland"),m.a.createElement("option",{value:"Isle of Man"},"Isle of Man"),m.a.createElement("option",{value:"Israel"},"Israel"),m.a.createElement("option",{value:"Italy"},"Italy"),m.a.createElement("option",{value:"Jamaica"},"Jamaica"),m.a.createElement("option",{value:"Japan"},"Japan"),m.a.createElement("option",{value:"Jersey"},"Jersey"),m.a.createElement("option",{value:"Jordan"},"Jordan"),m.a.createElement("option",{value:"Kazakhstan"},"Kazakhstan"),m.a.createElement("option",{value:"Kenya"},"Kenya"),m.a.createElement("option",{value:"Kiribati"},"Kiribati"),m.a.createElement("option",{value:"Korea, Democratic People's Republic of"},"Korea, Democratic People's Republic of"),m.a.createElement("option",{value:"Korea, Republic of"},"Korea, Republic of"),m.a.createElement("option",{value:"Kuwait"},"Kuwait"),m.a.createElement("option",{value:"Kyrgyzstan"},"Kyrgyzstan"),m.a.createElement("option",{value:"Lao People's Democratic Republic"},"Lao People's Democratic Republic"),m.a.createElement("option",{value:"Latvia"},"Latvia"),m.a.createElement("option",{value:"Lebanon"},"Lebanon"),m.a.createElement("option",{value:"Lesotho"},"Lesotho"),m.a.createElement("option",{value:"Liberia"},"Liberia"),m.a.createElement("option",{value:"Libyan Arab Jamahiriya"},"Libyan Arab Jamahiriya"),m.a.createElement("option",{value:"Liechtenstein"},"Liechtenstein"),m.a.createElement("option",{value:"Lithuania"},"Lithuania"),m.a.createElement("option",{value:"Luxembourg"},"Luxembourg"),m.a.createElement("option",{value:"Macao"},"Macao"),m.a.createElement("option",{value:"Macedonia, The Former Yugoslav Republic of"},"Macedonia, The Former Yugoslav Republic of"),m.a.createElement("option",{value:"Madagascar"},"Madagascar"),m.a.createElement("option",{value:"Malawi"},"Malawi"),m.a.createElement("option",{value:"Malaysia"},"Malaysia"),m.a.createElement("option",{value:"Maldives"},"Maldives"),m.a.createElement("option",{value:"Mali"},"Mali"),m.a.createElement("option",{value:"Malta"},"Malta"),m.a.createElement("option",{value:"Marshall Islands"},"Marshall Islands"),m.a.createElement("option",{value:"Martinique"},"Martinique"),m.a.createElement("option",{value:"Mauritania"},"Mauritania"),m.a.createElement("option",{value:"Mauritius"},"Mauritius"),m.a.createElement("option",{value:"Mayotte"},"Mayotte"),m.a.createElement("option",{value:"Mexico"},"Mexico"),m.a.createElement("option",{value:"Micronesia, Federated States of"},"Micronesia, Federated States of"),m.a.createElement("option",{value:"Moldova, Republic of"},"Moldova, Republic of"),m.a.createElement("option",{value:"Monaco"},"Monaco"),m.a.createElement("option",{value:"Mongolia"},"Mongolia"),m.a.createElement("option",{value:"Montenegro"},"Montenegro"),m.a.createElement("option",{value:"Montserrat"},"Montserrat"),m.a.createElement("option",{value:"Morocco"},"Morocco"),m.a.createElement("option",{value:"Mozambique"},"Mozambique"),m.a.createElement("option",{value:"Myanmar"},"Myanmar"),m.a.createElement("option",{value:"Namibia"},"Namibia"),m.a.createElement("option",{value:"Nauru"},"Nauru"),m.a.createElement("option",{value:"Nepal"},"Nepal"),m.a.createElement("option",{value:"Netherlands"},"Netherlands"),m.a.createElement("option",{value:"Netherlands Antilles"},"Netherlands Antilles"),m.a.createElement("option",{value:"New Caledonia"},"New Caledonia"),m.a.createElement("option",{value:"New Zealand"},"New Zealand"),m.a.createElement("option",{value:"Nicaragua"},"Nicaragua"),m.a.createElement("option",{value:"Niger"},"Niger"),m.a.createElement("option",{value:"Nigeria"},"Nigeria"),m.a.createElement("option",{value:"Niue"},"Niue"),m.a.createElement("option",{value:"Norfolk Island"},"Norfolk Island"),m.a.createElement("option",{value:"Northern Mariana Islands"},"Northern Mariana Islands"),m.a.createElement("option",{value:"Norway"},"Norway"),m.a.createElement("option",{value:"Oman"},"Oman"),m.a.createElement("option",{value:"Pakistan"},"Pakistan"),m.a.createElement("option",{value:"Palau"},"Palau"),m.a.createElement("option",{value:"Palestinian Territory, Occupied"},"Palestinian Territory, Occupied"),m.a.createElement("option",{value:"Panama"},"Panama"),m.a.createElement("option",{value:"Papua New Guinea"},"Papua New Guinea"),m.a.createElement("option",{value:"Paraguay"},"Paraguay"),m.a.createElement("option",{value:"Peru"},"Peru"),m.a.createElement("option",{value:"Philippines"},"Philippines"),m.a.createElement("option",{value:"Pitcairn"},"Pitcairn"),m.a.createElement("option",{value:"Poland"},"Poland"),m.a.createElement("option",{value:"Portugal"},"Portugal"),m.a.createElement("option",{value:"Puerto Rico"},"Puerto Rico"),m.a.createElement("option",{value:"Qatar"},"Qatar"),m.a.createElement("option",{value:"Reunion"},"Reunion"),m.a.createElement("option",{value:"Romania"},"Romania"),m.a.createElement("option",{value:"Russian Federation"},"Russian Federation"),m.a.createElement("option",{value:"Rwanda"},"Rwanda"),m.a.createElement("option",{value:"Saint Helena"},"Saint Helena"),m.a.createElement("option",{value:"Saint Kitts and Nevis"},"Saint Kitts and Nevis"),m.a.createElement("option",{value:"Saint Lucia"},"Saint Lucia"),m.a.createElement("option",{value:"Saint Pierre and Miquelon"},"Saint Pierre and Miquelon"),m.a.createElement("option",{value:"Saint Vincent and The Grenadines"},"Saint Vincent and The Grenadines"),m.a.createElement("option",{value:"Samoa"},"Samoa"),m.a.createElement("option",{value:"San Marino"},"San Marino"),m.a.createElement("option",{value:"Sao Tome and Principe"},"Sao Tome and Principe"),m.a.createElement("option",{value:"Saudi Arabia"},"Saudi Arabia"),m.a.createElement("option",{value:"Senegal"},"Senegal"),m.a.createElement("option",{value:"Serbia"},"Serbia"),m.a.createElement("option",{value:"Seychelles"},"Seychelles"),m.a.createElement("option",{value:"Sierra Leone"},"Sierra Leone"),m.a.createElement("option",{value:"Singapore"},"Singapore"),m.a.createElement("option",{value:"Slovakia"},"Slovakia"),m.a.createElement("option",{value:"Slovenia"},"Slovenia"),m.a.createElement("option",{value:"Solomon Islands"},"Solomon Islands"),m.a.createElement("option",{value:"Somalia"},"Somalia"),m.a.createElement("option",{value:"South Africa"},"South Africa"),m.a.createElement("option",{value:"South Georgia and The South Sandwich Islands"},"South Georgia and The South Sandwich Islands"),m.a.createElement("option",{value:"Spain"},"Spain"),m.a.createElement("option",{value:"Sri Lanka"},"Sri Lanka"),m.a.createElement("option",{value:"Sudan"},"Sudan"),m.a.createElement("option",{value:"Suriname"},"Suriname"),m.a.createElement("option",{value:"Svalbard and Jan Mayen"},"Svalbard and Jan Mayen"),m.a.createElement("option",{value:"Swaziland"},"Swaziland"),m.a.createElement("option",{value:"Sweden"},"Sweden"),m.a.createElement("option",{value:"Switzerland"},"Switzerland"),m.a.createElement("option",{value:"Syrian Arab Republic"},"Syrian Arab Republic"),m.a.createElement("option",{value:"Taiwan, Province of China"},"Taiwan, Province of China"),m.a.createElement("option",{value:"Tajikistan"},"Tajikistan"),m.a.createElement("option",{value:"Tanzania, United Republic of"},"Tanzania, United Republic of"),m.a.createElement("option",{value:"Thailand"},"Thailand"),m.a.createElement("option",{value:"Timor-leste"},"Timor-leste"),m.a.createElement("option",{value:"Togo"},"Togo"),m.a.createElement("option",{value:"Tokelau"},"Tokelau"),m.a.createElement("option",{value:"Tonga"},"Tonga"),m.a.createElement("option",{value:"Trinidad and Tobago"},"Trinidad and Tobago"),m.a.createElement("option",{value:"Tunisia"},"Tunisia"),m.a.createElement("option",{value:"Turkey"},"Turkey"),m.a.createElement("option",{value:"Turkmenistan"},"Turkmenistan"),m.a.createElement("option",{value:"Turks and Caicos Islands"},"Turks and Caicos Islands"),m.a.createElement("option",{value:"Tuvalu"},"Tuvalu"),m.a.createElement("option",{value:"Uganda"},"Uganda"),m.a.createElement("option",{value:"Ukraine"},"Ukraine"),m.a.createElement("option",{value:"United Arab Emirates"},"United Arab Emirates"),m.a.createElement("option",{value:"United Kingdom"},"United Kingdom"),m.a.createElement("option",{value:"United States"},"United States"),m.a.createElement("option",{value:"United States Minor Outlying Islands"},"United States Minor Outlying Islands"),m.a.createElement("option",{value:"Uruguay"},"Uruguay"),m.a.createElement("option",{value:"Uzbekistan"},"Uzbekistan"),m.a.createElement("option",{value:"Vanuatu"},"Vanuatu"),m.a.createElement("option",{value:"Venezuela"},"Venezuela"),m.a.createElement("option",{value:"Viet Nam"},"Viet Nam"),m.a.createElement("option",{value:"Virgin Islands, British"},"Virgin Islands, British"),m.a.createElement("option",{value:"Virgin Islands, U.S."},"Virgin Islands, U.S."),m.a.createElement("option",{value:"Wallis and Futuna"},"Wallis and Futuna"),m.a.createElement("option",{value:"Western Sahara"},"Western Sahara"),m.a.createElement("option",{value:"Yemen"},"Yemen"),m.a.createElement("option",{value:"Zambia"},"Zambia"),m.a.createElement("option",{value:"Zimbabwe"},"Zimbabwe"))),m.a.createElement("div",{className:"form-group col-xl-6"},m.a.createElement("label",null,"Street Address 1 ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement("input",{type:"text",placeholder:"Street Address One",name:"addr-1",className:"form-control",required:!0})),m.a.createElement("div",{className:"form-group col-xl-6"},m.a.createElement("label",null,"Street Address 2"),m.a.createElement("input",{type:"text",placeholder:"Street Address Two (Optional)",name:"addr-1",className:"form-control"})),m.a.createElement("div",{className:"form-group col-xl-12"},m.a.createElement("label",null,"Town / City ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement("input",{type:"text",placeholder:"Town/City",name:"town",className:"form-control",required:!0})),m.a.createElement("div",{className:"form-group col-xl-6"},m.a.createElement("label",null,"Phone Number ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement("input",{type:"text",placeholder:"Phone Number",name:"phone",className:"form-control",required:!0})),m.a.createElement("div",{className:"form-group col-xl-6"},m.a.createElement("label",null,"Email Address ",m.a.createElement("span",{className:"text-danger"},"*")),m.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",className:"form-control",required:!0})),m.a.createElement("div",{className:"form-group col-xl-12 mb-0"},m.a.createElement("label",null,"Order Notes"),m.a.createElement("textarea",{name:"name",rows:5,className:"form-control",placeholder:"Order Notes (Optional)"})))),m.a.createElement("div",{className:"col-xl-5 checkout-billing"},m.a.createElement("table",{className:"ct-responsive-table"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Product"),m.a.createElement("th",null,"Qunantity"),m.a.createElement("th",null,"Total"))),m.a.createElement("tbody",null,b.map(function(e,a){return m.a.createElement("tr",{key:a},m.a.createElement("td",{"data-title":"Product"},m.a.createElement("div",{className:"cart-product-wrapper"},m.a.createElement("div",{className:"cart-product-body"},m.a.createElement("h6",null," ",m.a.createElement(d.b,{to:"/menu-item-v1/1"},e.name)," "),e.flavours.map(function(e,a){return m.a.createElement("p",{key:a},e)})))),m.a.createElement("td",{"data-title":"Quantity"},"x",e.qty),m.a.createElement("td",{"data-title":"Total"}," ",m.a.createElement("strong",null,(new Intl.NumberFormat).format((e.price*e.qty).toFixed(2)),"$")," "))}),m.a.createElement("tr",{className:"total"},m.a.createElement("td",null,m.a.createElement("h6",{className:"mb-0"},"Grand Total")),m.a.createElement("td",null),m.a.createElement("td",null," ",m.a.createElement("strong",null,(new Intl.NumberFormat).format(N.toFixed(2)),"$")," ")))),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Card Number"),m.a.createElement("input",{type:"text",className:"form-control",name:"master-number",placeholder:"Card Number"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Full Name"),m.a.createElement("input",{type:"text",className:"form-control",name:"master-name",placeholder:"Full Name"})),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-6 form-group"},m.a.createElement("label",null,"Expiry Date"),m.a.createElement("input",{type:"text",className:"form-control",name:"master-expiry",placeholder:"Expiry Date (MM/YY)"})),m.a.createElement("div",{className:"col-xl-6 form-group"},m.a.createElement("label",null,"CVV*"),m.a.createElement("input",{type:"number",className:"form-control",name:"master-cvv",placeholder:"CVV"}))),m.a.createElement("p",{className:"small"},"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our ",m.a.createElement(d.b,{className:"btn-link",to:"#"},"privacy policy.")," "),m.a.createElement("button",{type:"submit",className:"btn-custom primary btn-block"},"Place Order"))))))}}]),a}(c.Component),f=function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement(c.Fragment,null,m.a.createElement(s.a,null,m.a.createElement("title",null,"Slices - React Template | ","Checkout"),m.a.createElement("meta",{name:"description",content:"#"})),m.a.createElement(p.a,null),m.a.createElement(E.a,{breadcrumb:{pagename:"Checkout"}}),m.a.createElement(y,null),m.a.createElement(v.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),a}(c.Component);a.default=f}}]);
//# sourceMappingURL=24.48c56a83.chunk.js.map