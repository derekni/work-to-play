_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{BsWD:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var n=s("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Object(n.a)(e,t):void 0}}},KQm4:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var n=s("a3WO");var o=s("BsWD");function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Qetd:function(e,t,s){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},"UN/f":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/options",function(){return s("nL8s")}])},a3WO:function(e,t,s){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}s.d(t,"a",(function(){return n}))},nL8s:function(e,t,s){"use strict";s.r(t);var n=s("nKUr"),o=s("q1tI"),i=s("KQm4"),r=function(){return Object(n.jsx)("svg",{className:"w-5 h-5 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})},c=function(){var e=Object(o.useState)(["facebook.com","youtube.com","reddit.com"]),t=e[0],s=e[1],c=Object(o.useState)(""),a=c[0],l=c[1],u=Object(o.useState)(""),b=u[0],m=u[1];Object(o.useEffect)((function(){chrome.storage.sync.get({blockedSites:[]},(function(e){var t=e.blockedSites;s(t)}))}),[]);var d=function(e){if(""===e)m("You must block something!");else if(f(e))if(t.includes(e))m("You have already blocked this site!");else{var n=[].concat(Object(i.a)(t),[e]);s(n),l(""),m(""),chrome.storage.sync.set({blockedSites:n})}else m("You must put a valid URL!")},f=function(e){return null!==e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"font-semibold text-xl mb-2",children:"Blocked sites"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",className:"flex-row flex-1 mb-2 mr-2 py-1 pl-2 text-base  border border-gray-200 rounded-sm",placeholder:"Block a site",value:a,onKeyUp:function(e){"Enter"===e.key&&a&&d(a)},onChange:function(e){l(e.target.value)}}),Object(n.jsx)("button",{disabled:""===a,className:"bg-red-500 text-white text-base font-semibold w-20 py-1  shadow hover:shadow-lg transition-all duration-200 rounded  disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",onClick:function(e){d(a)},children:"Block"})]}),b&&Object(n.jsx)("div",{className:"text-sm ml-1 mb-1 text-red-500",children:b}),Object(n.jsx)("ul",{className:"pl-2 text-base w-64",children:t.map((function(e){return Object(n.jsxs)("li",{className:"flex justify-between mb-1",children:[Object(n.jsx)("div",{children:e}),Object(n.jsx)("button",{className:"ml-2",onClick:function(){var n=t.filter((function(t){return t!==e}));s(n),chrome.storage.sync.set({blockedSites:n})},children:Object(n.jsx)(r,{})})]},e)}))})]})};t.default=function(){var e=Object(o.useState)(!0),t=e[0],s=e[1],i=Object(o.useState)(!1),r=i[0],a=i[1],l=Object(o.useState)(.5),u=l[0],b=l[1],m=Object(o.useState)(null),d=m[0],f=m[1],j=Object(o.useState)(!0),h=j[0],p=j[1];Object(o.useEffect)((function(){f(new Audio("sounds/chime.mp3")),chrome.storage.sync.get({tabPermissions:!1,notificationPermissions:!1,volume:.5},(function(e){var t=e.tabPermissions,n=e.notificationPermissions,o=e.volume;s(t),a(n),b(o),p(!1)}))}),[]);return h?Object(n.jsx)("div",{className:"bg-gray-50 min-h-screen"}):Object(n.jsxs)("div",{className:"bg-gray-50 min-h-screen p-10 pl-14",children:[Object(n.jsx)("div",{className:"font-bold text-4xl mb-4",children:"Options"}),Object(n.jsx)("div",{className:"font-semibold text-xl mb-1",children:"Alarm Volume"}),Object(n.jsx)("input",{type:"range",defaultValue:100*u,onMouseUp:function(e){var t=e.target,s=Number(t.value)/100;b(s),null!==d&&(d.volume=s,d.load(),d.play()),chrome.storage.sync.set({volume:s})}}),Object(n.jsx)("div",{className:"font-semibold text-xl mt-2",children:"Permissions"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{id:"notifications",type:"checkbox",className:"mr-2",checked:r,onChange:function(e){r?(chrome.permissions.remove({permissions:["notifications"]}),a(!1),chrome.storage.sync.set({notificationPermissions:!1})):chrome.permissions.request({permissions:["notifications"]},(function(e){e&&(a(!0),chrome.storage.sync.set({notificationPermissions:!0}))}))}}),Object(n.jsx)("label",{className:"text-base",htmlFor:"notifications",children:"Show notifications for alarms"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{id:"block-sites",type:"checkbox",className:"mr-2 mb-12",checked:t,onChange:function(e){t?(chrome.permissions.remove({permissions:["tabs"]}),s(!1),chrome.storage.sync.set({tabPermissions:!1})):chrome.permissions.request({permissions:["tabs"]},(function(e){e&&(s(!0),chrome.storage.sync.set({tabPermissions:!0}))}))}}),Object(n.jsx)("label",{className:"text-base",htmlFor:"block-sites",children:"Block sites when working"})]}),Object(n.jsx)(c,{})]})}}},[["UN/f",0,1]]]);