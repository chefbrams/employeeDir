(this.webpackJsonpdirectoryapp=this.webpackJsonpdirectoryapp||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),i=c(15),j=c.n(i),a=(c(23),c(3)),o=(c.p,c(24),function(e){var t=e.users,c=e.updateUsers,r=Object(s.useState)(""),i=Object(a.a)(r,2),j=i[0],o=i[1];return Object(s.useEffect)((function(){var e=""===j?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(j.toLowerCase())>=0}));c(e)}),[j,t]),Object(n.jsx)("input",{value:j,onChange:function(e){return o(e.target.value)}})}),l=c(17),u=function(e){var t=e.users,c=Object(s.useState)([]),r=Object(a.a)(c,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){return j(t)}),[t]),Object(n.jsx)("div",{children:Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",onClick:function(){var e=Object(l.a)(t).sort((function(e,t){var c=e.name.first,n=t.name.first;return c<n?-1:c>n?1:0}));j(e)},children:"First"}),Object(n.jsx)("th",{scope:"col",children:"Last"}),Object(n.jsx)("th",{scope:"col",children:"email"}),Object(n.jsx)("th",{scope:"col",children:"phone"}),Object(n.jsx)("th",{scope:"col",children:"cell"}),Object(n.jsx)("th",{scope:"col",children:"city"}),Object(n.jsx)("th",{scope:"col",children:"state"}),Object(n.jsx)("th",{scope:"col",children:"picture"})]})}),Object(n.jsx)("tbody",{children:i.map((function(e){var t=e.location,c=t.city,s=t.state,r=e.picture.thumbnail,i=e.cell,j=e.phone,a=e.email,o=e.name,l=o.first,u=o.last;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:l}),Object(n.jsx)("td",{children:u}),Object(n.jsx)("td",{children:a}),Object(n.jsx)("td",{children:j}),Object(n.jsx)("td",{children:i}),Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:s}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:r})}),Object(n.jsx)("td",{})]},a)}))})]})})},b=c(16),d=c.n(b);var h=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)([]),j=Object(a.a)(i,2),l=j[0],b=j[1];return Object(s.useEffect)((function(){d.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){var t=e.data.results;return r(t)}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Employee Directory"}),Object(n.jsx)("p",{children:"Start typing first name"}),Object(n.jsx)(o,{users:c,updateUsers:b}),Object(n.jsx)(u,{users:l})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};j.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.84dd9381.chunk.js.map