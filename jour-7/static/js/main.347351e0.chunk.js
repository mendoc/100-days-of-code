(this["webpackJsonpjour-7"]=this["webpackJsonpjour-7"]||[]).push([[0],{159:function(e,t,c){},160:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(37),a=c.n(r),i=c(111),o=c(60),l=c(61),j=c(85),u=c(78),h=c(104),d=c.n(h),b=c(105),m=c(181),p=c(54),O=c(182),x=c(180),f=c(177),v=c(106),g=c.n(v),y=c(4),w=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={last:3,visibleItems:[]},e.handleBottomVisible=function(){e.setState({last:e.state.last+2})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.props.items.filter((function(t,c){return c<=e.state.last})).map((function(e,t){var c=new Date(e.pubDate);return Object(y.jsxs)(m.a,{children:[Object(y.jsx)(m.a.Image,{size:"small",src:e.image}),Object(y.jsxs)(m.a.Content,{children:[Object(y.jsx)(m.a.Header,{children:e.title}),Object(y.jsx)(m.a.Meta,{children:Object(y.jsxs)("p",{className:"stay",children:[Object(y.jsx)(p.a,{name:"clock outline",size:"small"}),Object(y.jsx)(g.a,{format:"DD/MM/YYYY \xe0 HH:mm",children:c})]})}),Object(y.jsx)(m.a.Description,{children:e.description}),Object(y.jsx)(m.a.Meta,{children:Object(y.jsxs)("p",{className:"stay",children:["Par ",e.author]})}),Object(y.jsxs)("div",{className:"ui two column grid",children:[Object(y.jsx)("div",{className:"column",children:Object(y.jsx)("a",{className:"ui item",href:e.link,children:Object(y.jsx)(O.a,{size:"mini",color:"grey",children:"Lire l'article complet"})})}),Object(y.jsx)("div",{className:"column",children:Object(y.jsxs)("div",{className:"ui three column grid",children:[Object(y.jsx)("div",{className:"column",children:Object(y.jsx)("a",{href:"whatsapp://send?text=".concat(e.link,"&source=&data="),children:Object(y.jsx)(p.a,{name:"whatsapp",bordered:!0,color:"green"})})}),Object(y.jsx)("div",{className:"column",children:Object(y.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(e.link),children:Object(y.jsx)(p.a,{name:"facebook f",bordered:!0,color:"blue"})})}),Object(y.jsx)("div",{className:"column",children:Object(y.jsx)(x.a,{content:"Lien copi\xe9",on:"click",pinned:!0,size:"mini",hideOnScroll:!0,position:"top right",trigger:Object(y.jsx)("div",{children:Object(y.jsx)(b.CopyToClipboard,{text:e.link,children:Object(y.jsx)(p.a,{name:"copy",bordered:!0,color:"grey"})})})})})]})})]})]})]},t)}));return Object(y.jsx)(f.a,{onBottomVisible:this.handleBottomVisible,once:!1,children:Object(y.jsx)(m.a.Group,{divided:!0,children:t})})}}]),c}(s.a.Component),k=(c(158),c(159),c(178)),N=c(183),S=c(179),C=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={items:[]},e.componentDidMount=function(){e.getArticles()},e.getArticles=function(){d.a.get("https://cross-origin.herokuapp.com/https://www.futura-sciences.com/rss/actualites.xml").then((function(t){if(200===t.status){var c=t.request.responseXML.querySelectorAll("channel item"),n=[];c.forEach((function(e){var t={title:e.querySelector("title").textContent,description:e.querySelector("description").textContent,pubDate:e.querySelector("pubDate").textContent,link:e.querySelector("guid").textContent,image:e.querySelector("enclosure").getAttribute("url"),author:e.querySelector("author").textContent};n=[].concat(Object(i.a)(n),[t])})),e.setState({items:n})}}))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(y.jsxs)(k.a,{children:[Object(y.jsx)(N.a,{as:"h2",children:"Futura News"}),Object(y.jsxs)("p",{children:["Derni\xe8res actualit\xe9s du site ",Object(y.jsx)("a",{href:"https://www.futura-sciences.com/rss/actualites.xml",children:"Futura Sciences"})]}),Object(y.jsx)(S.a,{}),Object(y.jsx)(w,{items:this.state.items})]})}}]),c}(n.Component);a.a.render(Object(y.jsx)(C,{}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.347351e0.chunk.js.map