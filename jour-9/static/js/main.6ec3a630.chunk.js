(this["webpackJsonpjour-9"]=this["webpackJsonpjour-9"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(18),r=n.n(i),s=n(15),c=n(20),o=n(5),d=n(6),l=n(8),j=n(7),u=n(9),p=n(2),b=n(1),h=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)(u.b,{to:"/panier",children:Object(b.jsxs)("div",{className:"panier pointer ".concat(this.props.quantite>0?"bg-primary":"bg-dark"," text-white rounded cursor-pointer"),children:[Object(b.jsx)("i",{className:"bi bi-cart3 py-1 pl-2 d-inline-block"}),Object(b.jsx)("span",{className:"d-inline-block px-2",children:this.props.quantite>0?"Mes courses":"Panier vide"}),this.props.quantite>0&&Object(b.jsx)("span",{className:"d-inline-block px-3 rounded-right py-1 bg-dark",children:this.props.quantite})]})})}}]),n}(a.Component),m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props.produits.map((function(e){return Object(b.jsxs)("div",{className:"produit d-flex mb-3",children:[Object(b.jsx)("img",{src:e.image}),Object(b.jsxs)("div",{className:"details d-flex flex-column pl-2",children:[Object(b.jsx)("span",{children:e.nom}),Object(b.jsxs)("span",{className:"font-weight-bold d-block",children:[e.prix," F"]}),Object(b.jsx)("span",{onClick:function(){t.props.onAddToCart(e)},className:"btn text-xs btn-sm mt-2 pointer align-text-bottom bg-dark text-white",children:"Ajouter au panier"})]})]},e.code)}));return Object(b.jsx)("div",{className:"produits d-md-flex flex-wrap justify-content-between",children:e})}}]),n}(a.Component),x=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={produits:[{code:"P1",nom:"Cotton T-Shirt",image:"https://preview.colorlib.com/theme/ashion/img/trend/bs-1.jpg",prix:12e3},{code:"P2",nom:"Chain bucket bag",image:"https://preview.colorlib.com/theme/ashion/img/trend/ht-1.jpg",prix:6e3},{code:"P3",nom:"Pendant earrings",image:"https://preview.colorlib.com/theme/ashion/img/trend/ht-2.jpg",prix:5e3}]},t.handleAddCart=function(e){t.props.updateCart(e)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container-md mt-5 mx-auto",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(b.jsx)("h2",{className:"h2",children:"Panier"}),Object(b.jsx)(h,{quantite:this.props.quantite})]}),Object(b.jsxs)("p",{children:["Ajoutez des produits dans le ",Object(b.jsx)("strong",{children:"panier"})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(m,{produits:this.state.produits,onAddToCart:this.handleAddCart})]})}}]),n}(a.Component),O=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).handleOnChange=function(){console.log("OnchangeQty")},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props.produits.map((function(e){return Object(b.jsxs)("div",{className:"produit d-flex align-items-center justify-content-between mb-3",children:[Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("img",{src:e.image}),Object(b.jsxs)("div",{className:"pl-2",children:[Object(b.jsx)("span",{children:e.nom}),Object(b.jsxs)("span",{className:"font-weight-bold d-block",children:[e.quantite," x ",e.prix," F = ",e.prix*e.quantite," F"]})]})]}),Object(b.jsxs)("span",{onClick:function(){t.props.removeProduct(e)},className:"btn text-xs btn-sm mt-2 pointer align-text-bottom bg-danger text-white",children:[Object(b.jsx)("i",{className:"bi bi-trash"})," Retirer"]})]},e.code)}));return Object(b.jsxs)("div",{className:"container-md mt-5 mx-auto",children:[Object(b.jsxs)(u.b,{to:"/",children:[Object(b.jsx)("i",{class:"bi bi-chevron-left"})," Retour \xe0 la boutique"]}),Object(b.jsx)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:Object(b.jsx)("h2",{className:"h2",children:"Votre commande"})}),Object(b.jsxs)("p",{children:["Total \xe0 payer : ",Object(b.jsxs)("strong",{children:[this.props.total," F"]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"produits",children:e})]})}}]),n}(a.Component),f=(n(31),n(32),n(33),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={quantite:0,total:0,produitsPanier:[]},t.handleUpdateCart=function(e){var n=!1,a=0,i=0,r=t.state.produitsPanier.map((function(t){return t.code===e.code&&(n=!0,t.quantite=t.quantite+1),a+=t.quantite,i+=t.prix*t.quantite,t}));n||(r=[].concat(Object(c.a)(r),[Object(s.a)(Object(s.a)({},e),{},{quantite:1})]),a++,i+=e.prix),t.setState({quantite:a,total:i,produitsPanier:r})},t.handleRemoveProduct=function(e){var n=0,a=0,i=t.state.produitsPanier.filter((function(t){return t.code!==e.code&&(n+=t.quantite,a+=t.prix*t.quantite),t.code!==e.code}));t.setState({quantite:n,total:a,produitsPanier:i})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{updateCart:this.handleUpdateCart,quantite:this.state.quantite})}),Object(b.jsx)(p.a,{path:"/panier",children:Object(b.jsx)(O,{total:this.state.total,produits:this.state.produitsPanier,removeProduct:this.handleRemoveProduct})})]})})}}]),n}(a.Component));r.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6ec3a630.chunk.js.map