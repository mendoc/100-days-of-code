(this["webpackJsonpjour-3"]=this["webpackJsonpjour-3"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(3),c=n.n(o),a=n(4),i=n(5),s=n(7),u=n(6),l=n(0),h=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={links:[],texts:[]},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://fr.wikipedia.org/w/api.php?action=opensearch&search=Kotlin&format=json&origin=*").then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({texts:e[1],links:e[3]})}))}},{key:"render",value:function(){var t=this.state,e=t.texts,n=t.links,r=e.map((function(t,e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:n[e],target:"_blank",rel:"noreferrer",children:t})},e)}));return Object(l.jsx)("ul",{children:r})}}]),n}(r.Component);n(13);c.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a8936dad.chunk.js.map