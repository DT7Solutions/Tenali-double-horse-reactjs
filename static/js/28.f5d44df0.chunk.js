(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{417:function(e,t,n){"use strict";n.r(t);var r=n(48),a=n(49),o=n(7),c=n(50),l=n(51),u=n(0),i=n.n(u),f=n(59),s=n.n(f),p=n(97),m=n(61),d=n(58),y=n(10),b=n(86),h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).IncrementItem=function(e){e.qty=e.qty+1,n.setState({cartitem:n.state.cartitem,priceTotal:b.reduce(function(e,t){return e+t.price*t.qty},0)})},n.DecreaseItem=function(e){e.qty=e.qty-1,n.setState({cartitem:n.state.cartitem,priceTotal:b.reduce(function(e,t){return e+t.price*t.qty},0)})},n.state={priceTotal:b.reduce(function(e,t){return e+t.price*t.qty},0),cartitem:b},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("table",{className:"ct-responsive-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"remove-item"}),i.a.createElement("th",null,"Product"),i.a.createElement("th",null,"Price"),i.a.createElement("th",null,"Qunantity"),i.a.createElement("th",null,"Total"))),i.a.createElement("tbody",null,b.map(function(t,n){return i.a.createElement("tr",{key:n},i.a.createElement("td",{className:"remove"},i.a.createElement("button",{type:"button",className:"close-btn close-danger remove-from-cart"},i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("td",{"data-title":"Product"},i.a.createElement("div",{className:"cart-product-wrapper"},i.a.createElement("img",{src:"./"+t.img,alt:t.name}),i.a.createElement("div",{className:"cart-product-body"},i.a.createElement("h6",null," ",i.a.createElement(y.c,{to:"/menu-item-v1/1"},t.name)," "),t.flavours.map(function(e,t){return i.a.createElement("p",{key:t},e)})))),i.a.createElement("td",{"data-title":"Price"}," ",i.a.createElement("strong",null,(new Intl.NumberFormat).format(t.price.toFixed(2)),"$")," "),i.a.createElement("td",{className:"quantity","data-title":"Quantity"},i.a.createElement("div",{className:"qty"},i.a.createElement("span",{className:"qty-subtract",onClick:function(){return e.DecreaseItem(t)}},i.a.createElement("i",{className:"fa fa-minus"})),i.a.createElement("input",{type:"text",name:"clicks",value:t.qty,readOnly:!0}),i.a.createElement("span",{className:"qty-add",onClick:function(){return e.IncrementItem(t)}},i.a.createElement("i",{className:"fa fa-plus"})))),i.a.createElement("td",{"data-title":"Total"}," ",i.a.createElement("strong",null,(new Intl.NumberFormat).format((t.price*t.qty).toFixed(2)),"$")," "))}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-5"},i.a.createElement("div",{className:"form-group mb-0"},i.a.createElement("div",{className:"input-group mb-0"},i.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Coupon Code","aria-label":"Coupon Code"}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn-custom shadow-none",type:"button"},"Apply")))))),i.a.createElement("div",{className:"row ct-cart-form"},i.a.createElement("div",{className:"offset-lg-6 col-lg-6"},i.a.createElement("h4",null,"Cart Total"),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Subtotal"),i.a.createElement("td",null,(new Intl.NumberFormat).format(this.state.priceTotal.toFixed(2)),"$")),i.a.createElement("tr",null,i.a.createElement("th",null,"Tax"),i.a.createElement("td",null," ",9.99,"$ ",i.a.createElement("span",{className:"small"},"(11%)")," ")),i.a.createElement("tr",null,i.a.createElement("th",null,"Total"),i.a.createElement("td",null," ",i.a.createElement("b",null,(new Intl.NumberFormat).format((this.state.priceTotal+9.99).toFixed(2)),"$")," ")))),i.a.createElement("button",{type:"submit",className:"btn-custom primary btn-block"},"Proceeed to Checkout")))))}}]),t}(u.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return i.a.createElement(u.Fragment,null,i.a.createElement(s.a,null,i.a.createElement("title",null,"Slices - React Template | ","Cart"),i.a.createElement("meta",{name:"description",content:"#"})),i.a.createElement(p.a,null),i.a.createElement(m.a,{breadcrumb:{pagename:"Cart"}}),i.a.createElement(h,null),i.a.createElement(d.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/logo-light.png"}}))}}]),t}(u.Component);t.default=v},48:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},49:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return a})},50:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})},51:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(76);function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(r.a)(e,t)}},52:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}"undefined"!==typeof e&&e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},55:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=c(n(71)),a=c(n(72)),o=c(n(80));function c(e){return e&&e.__esModule?e:{default:e}}var l=a.default;t.default=l},61:function(e,t,n){"use strict";var r=n(48),a=n(49),o=n(7),c=n(50),l=n(51),u=n(0),i=n.n(u),f=n(10),s=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subheader-inner"},i.a.createElement("h1",{className:"text-light"},this.props.breadcrumb.pagename),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item "},i.a.createElement(f.c,{to:"/"},"Home")),i.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(u.Component);t.a=s},7:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}var o=n(55);function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(o.a)(e):t}n.d(t,"a",function(){return c})},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=(0,r.createContext)({});t.MetaContext=i;var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,l(t).apply(this,arguments))}var n,a,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.Component),n=t,(a=[{key:"render",value:function(){return r.default.createElement(i.Provider,{value:{extract:this.props.extract}},r.Children.only(this.props.children))}}])&&o(n.prototype,a),f&&o(n,f),t}();t.default=f},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=(r=n(6))&&r.__esModule?r:{default:r},c=n(79),l=n(71);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=a.default.createElement("div",{className:"react-head-temp"},t);o.default.render(n,this.temporaryElement,function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),a=document.head,o=a.innerHTML;(r=(r=r.filter(function(e){return-1===o.indexOf(e.outerHTML)})).map(function(e){return e.cloneNode(!0)})).forEach(function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,c.getDuplicateTitle)();n&&(0,c.removeChild)(a,n)}else if(e.id){var r=(0,c.getDuplicateElementById)(e);r&&(0,c.removeChild)(a,r)}else if("meta"===t){var o=(0,c.getDuplicateMeta)(e);o&&(0,c.removeChild)(a,o)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(a,l)}}),(0,c.appendChild)(document.head,r)}}})}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&i(n.prototype,r),l&&i(n,l),t}();!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(m,"contextType",l.MetaContext);var d=m;t.default=d,e.exports=t.default},76:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return r})},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],c=[];return e.forEach(function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?n=e:"meta"===a?r.push(e):c.push(e)}),[t].concat((l=function(e){var t={};o.forEach(function(e){t[e]=[]});for(var n=[],r=function(r){var c=e[r],l=c.props.id;(l?!t.id[l]:0===a.filter(function(e){var n=c.props[e],r=t[e][n];return r&&!r.props.id}).length)&&(n.unshift(c),o.forEach(function(e){var n=c.props[e];n&&(t[e][n]=c)}))},c=e.length-1;c>=0;c--)r(c);return n}(r),function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(l)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),[n],c);var l},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return r.reduce(function(n,r){var a,o=e.getAttribute(r);return o?n.concat((a=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter(function(e){return!e.id}))):n},[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,a=t.length;r<a;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],a=r.concat(["itemProp"]),o=a.concat(["id"])},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=(r=n(72))&&r.__esModule?r:{default:r};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,i(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.Component),n=t,(r=[{key:"render",value:function(){return a.default.createElement(o.default,null,a.default.createElement("title",null,this.props.title))}}])&&l(n.prototype,r),c&&l(n,c),t}();t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=28.f5d44df0.chunk.js.map