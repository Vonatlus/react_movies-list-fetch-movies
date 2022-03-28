(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var c=s(7),i=s.n(c),n=(s(15),s(10)),a=s(2),l=s(1),r=(s(16),s(17),s(18),s(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbID)}))})},d=s(8),b=s.n(d),m=s(9),u=s(6),h=s.n(u),O="https://www.omdbapi.com/?apikey=".concat("af8590f8","&t="),v=function(){var e=Object(m.a)(h.a.mark((function e(t){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O).concat(t));case 2:return s=e.sent,e.abrupt("return",s.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=(s(21),function(e){var t=e.addedMovies,s=e.inList,c=e.setInList,i=Object(l.useState)(""),n=Object(a.a)(i,2),j=n[0],d=n[1],m=Object(l.useState)(null),u=Object(a.a)(m,2),h=u[0],O=u[1],x=Object(l.useState)(!1),f=Object(a.a)(x,2),p=f[0],N=f[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:b()("input",{"is-danger":p}),value:j,onChange:function(e){d(e.target.value.toLocaleLowerCase())}})}),p&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}),s&&Object(r.jsx)("p",{className:"help is-danger",children:"This is movie already in list."})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){v(j).then((function(e){O("True"===e.Response?e:null),N("False"===e.Response),c(!1)}))},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){null!==h&&t(h),O(null),d("")},children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),h&&Object(r.jsx)(o,{movie:h})]})]})}),f=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),s=t[0],c=t[1],i=Object(l.useState)(!1),o=Object(a.a)(i,2),d=o[0],b=o[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(j,{movies:s})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(x,{addedMovies:function(e){var t=s.find((function(t){return t.imdbID===e.imdbID}));t||c([].concat(Object(n.a)(s),[e])),t&&b(!0)},inList:d,setInList:b})})]})};i.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fa9a853a.chunk.js.map