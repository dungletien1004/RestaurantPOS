(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(16),a=n.n(s),r=n(12),l=n(2),o=n(3),d=n(4),j=n(5),u=n(7),h=n(6),p=n(0),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(i.Fragment,{children:[Object(p.jsxs)("div",{className:"footer",style:{textAlign:"center",background:"#eeeeee"},children:[Object(p.jsx)("img",{src:"img/restaurant.png",alt:"",width:"300",height:"300"}),Object(p.jsx)("h5",{children:"Team 45 CNPM 2021"}),Object(p.jsx)("a",{href:"https://github.com/dungletien1004/RestaurantPOS",children:Object(p.jsx)("img",{src:"img/github.png",alt:"",width:"40",height:"40"})})]}),Object(p.jsx)("footer",{className:"bg-white",children:Object(p.jsx)("div",{className:"bg-light py-2",children:Object(p.jsx)("div",{className:"container text-center",children:Object(p.jsx)("p",{className:"text-muted mb-0 py-2",children:"\xa9 2021 BKU HK211 Assignment CNPM."})})})})]})}}]),n}(c.a.Component),b=m;n(28),n(29);var f=function(e){var t=e.Login,n=e.error,c=Object(i.useState)({email:"",password:""}),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(p.jsx)("div",{className:"loginForm",children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a)},className:"FormLogin",children:Object(p.jsxs)("div",{className:"form-inner",children:[Object(p.jsx)("h2",{children:"\u0110\u0103ng nh\u1eadp"}),""!==n?Object(p.jsx)("div",{className:"error",children:n}):"",Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(p.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return r(Object(l.a)(Object(l.a)({},a),{},{email:e.target.value}))},value:a.email})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"password",children:"M\u1eadt Kh\u1ea9u: "}),Object(p.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return r(Object(l.a)(Object(l.a)({},a),{},{password:e.target.value}))},value:a.password})]}),Object(p.jsx)("input",{type:"submit",value:"\u0110\u0103ng nh\u1eadp"})]})})})},O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(p.jsx)("a",{children:Object(p.jsx)("img",{src:"img/restaurant.png",alt:"",width:"40",height:"40"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(p.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsx)("h2",{children:"Restaurant POS @BKU 2021"})})}),Object(p.jsx)("div",{className:"form-logout",children:Object(p.jsx)("a",{href:"/",className:"logout",onClick:function(e){window.confirm("B\u1ea1n ch\u1eafc ch\u1eafn \u0110\u0103ng xu\u1ea5t?")||e.preventDefault()},children:"\u0110\u0103ng xu\u1ea5t"})})]})]})}}]),n}(c.a.Component),g=O,x=(n(30),n(31),n(22)),y=n.n(x),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).showPopup=function(){i.setState({isOpen:!0})},i.hidePopup=function(){i.setState({isOpen:!1})},i.handleCountDown=function(){i.state.count>1&&i.setState({count:i.state.count-1})},i.handleCountUp=function(){i.setState({count:i.state.count+1})},i.state={isOpen:!1,count:1},i}return Object(j.a)(n,[{key:"currencyFormat",value:function(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},{key:"render",value:function(){var e=this,t=this.state,n=t.isOpen,i=t.count;return Object(p.jsxs)("div",{className:"Item",children:[Object(p.jsx)("img",{src:this.props.product.imgUrl,className:"small",width:"190px",height:"190px",alt:this.props.product.name,onClick:this.showPopup}),Object(p.jsx)("h3",{children:this.props.product.name}),Object(p.jsxs)("div",{children:["S\u1ed1 l\u01b0\u1ee3ng c\xf2n l\u1ea1i: ",this.props.product.leftQuantity]}),Object(p.jsxs)("div",{children:["\u0110\u01a1n gi\xe1: ",this.currencyFormat(this.props.product.UnitPrice)," VN\u0110"]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){e.props.onAdd(e.props.product)},children:"Th\xeam v\xe0o gi\u1ecf h\xe0ng"})}),Object(p.jsxs)(y.a,{className:"food-modal",isOpen:n,onRequestClose:this.hidePopup,children:[Object(p.jsxs)("div",{className:"food-modal-header",children:[Object(p.jsx)("b",{className:"food-modal-title",children:"Th\xeam v\xe0o gi\u1ecf h\xe0ng"}),Object(p.jsx)("i",{className:"fas fa-times btnClose",onClick:this.hidePopup})]}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:this.props.product.imgUrl,className:"modal-image",alt:"Hamburger B",onClick:this.showPopup})}),Object(p.jsxs)("div",{className:"col col-right",children:[Object(p.jsxs)("div",{className:"row ",children:[Object(p.jsx)("div",{className:"col col-left title-row",children:"Item"}),Object(p.jsx)("div",{className:"col col-left col2 title-row",children:"\u0110\u01a1n gi\xe1"})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col col-left",children:this.props.product.name}),Object(p.jsxs)("div",{className:"col col-left col2",style:{color:"red",fontWeight:"bold"},children:["VND ",this.currencyFormat(this.props.product.UnitPrice)]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col col-left",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(p.jsx)("button",{type:"button",className:"remove",onClick:this.handleCountDown,children:"-"}),Object(p.jsx)("b",{children:i}),Object(p.jsx)("button",{type:"button",className:"add",onClick:this.handleCountUp,children:"+"})]}),Object(p.jsx)("div",{className:"row",style:{marginTop:"40%"},children:Object(p.jsxs)("button",{type:"button",className:"btn btn-danger paybtn ",onClick:function(){e.props.onAdds(e.props.product,i)},children:[Object(p.jsx)("i",{className:"fas fa-shopping-cart"})," VND ",this.currencyFormat(i*this.props.product.UnitPrice)]})})]})]})})]})]})}}]),n}(c.a.Component),N=(n(43),n(47)),C=n(48),k=n(49),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={products:Object(r.a)(e.props.products)},e.handleFilterFood=function(){console.log("Food"),e.state.products.forEach((function(e){"food"!==e.type?e.display=!1:"food"===e.type&&(e.display=!0)})),e.setState({products:e.state.products})},e.handleFilterDrinks=function(){console.log("Drinks"),e.state.products.forEach((function(e){"drinks"!==e.type?e.display=!1:"drinks"===e.type&&(e.display=!0)})),e.setState({products:e.state.products})},e.handleFilterChicken=function(){console.log("Drinks"),e.state.products.forEach((function(e){"chicken"!==e.type?e.display=!1:"chicken"===e.type&&(e.display=!0)})),e.setState({products:e.state.products})},e.handleFilterRefreshments=function(){console.log("refreshments"),e.state.products.forEach((function(e){"refreshments"!==e.type?e.display=!1:"refreshments"===e.type&&(e.display=!0)})),e.setState({products:e.state.products})},e.handleFilterAll=function(){console.log("All"),e.state.products.forEach((function(e){e.display=!0})),e.setState({products:e.state.products})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("main",{className:"blockMain",children:[Object(p.jsxs)(N.a,{"aria-setsize":"outline-danger",children:[Object(p.jsx)("h2",{children:"Menu"}),Object(p.jsxs)(C.a,{className:"mb-2",children:[Object(p.jsx)(k.a,{variant:"outline-danger",onClick:function(){return e.handleFilterFood()},type:"button",className:"filter",children:"Th\u1ee9c \u0102n Ch\xednh"}),Object(p.jsx)(k.a,{variant:"outline-danger",onClick:this.handleFilterChicken,type:"button",className:"filter",children:"M\xf3n g\xe0"}),Object(p.jsx)(k.a,{variant:"outline-danger",onClick:this.handleFilterDrinks,type:"button",className:"filter",children:"Th\u1ee9c u\u1ed1ng"}),Object(p.jsx)(k.a,{variant:"outline-danger",onClick:this.handleFilterRefreshments,type:"button",className:"filter",children:"Th\u1ee9c \u0103n nh\u1eb9"}),Object(p.jsx)(k.a,{variant:"outline-danger",onClick:this.handleFilterAll,type:"button",className:"filter",children:"T\u1ea5t c\u1ea3"})]})]}),Object(p.jsx)("div",{className:"row",children:this.state.products.filter((function(e){return!0===e.display})).map((function(t){return Object(p.jsx)(v,{product:t,onAdd:e.props.onAdd,onAdds:e.props.onAdds},t.id)}))})]})}}]),n}(c.a.Component),U=w;n(44);function P(e){var t=e.cartItems,n=e.onAdd,i=e.onRemove,c=e.onClear,s=t.reduce((function(e,t){return e+t.qty*t.UnitPrice}),0),a=new Intl.NumberFormat("vn",{style:"currency",currency:"VND"}),r=s;return Object(p.jsxs)("aside",{className:"blockCart",children:[Object(p.jsx)("h2",{children:"Gi\u1ecf H\xe0ng"}),Object(p.jsxs)("div",{children:[0===t.length&&Object(p.jsx)("div",{children:"Gi\u1ecf h\xe0ng tr\u1ed1ng"}),t.map((function(e){return Object(p.jsxs)("div",{className:"rowCart",children:[Object(p.jsx)("div",{style:{flex:"1",marginLeft:"1em"},children:e.name}),Object(p.jsxs)("div",{className:"col-2",children:[Object(p.jsx)("button",{onClick:function(){return n(e)},className:"add",children:"+"}),Object(p.jsx)("button",{onClick:function(){return i(e)},className:"remove",children:"-"}),Object(p.jsx)("button",{onClick:function(){return c(e)},className:"clear",children:"X\xf3a"})]}),Object(p.jsxs)("div",{className:"col-2 text-left",children:[e.qty,Object(p.jsx)("br",{}),a.format(e.UnitPrice.toFixed(0))]})]},e.id)})),0!==t.length&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{style:{flex:"1",marginLeft:"1rem"},children:Object(p.jsx)("strong",{children:"T\u1ed5ng ti\u1ec1n"})}),Object(p.jsx)("div",{className:"col-2 text-right",children:Object(p.jsx)("strong",{children:a.format(r.toFixed(0))})})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("button",{onClick:function(e){window.confirm("B\u1ea1n mu\u1ed1n thanh to\xe1n?")||e.preventDefault()},children:"Thanh To\xe1n"})})]})]})]})}var F={products:[{id:1,imgUrl:"/img/hamberB.jpg",dishId:0,UnitPrice:1e5,leftQuantity:12,type:"food",name:"Combo Hamburger B",display:!0},{id:2,imgUrl:"img/hamberA.jpg",dishId:1,UnitPrice:12e4,leftQuantity:4,type:"food",name:"Combo Hamburger A",display:!0},{id:3,imgUrl:"img/pepsi.jpg",dishId:2,UnitPrice:2e4,leftQuantity:5,type:"drinks",name:"Pepsi Lon",display:!0},{id:4,imgUrl:"img/ccdc.jpg",dishId:3,UnitPrice:5e4,leftQuantity:20,type:"food",name:"C\u01a1m Chi\xean D\u01b0\u01a1ng Ch\xe2u",display:!0},{id:5,imgUrl:"img/psc.jpg",dishId:4,UnitPrice:2e4,leftQuantity:20,type:"drinks",name:"Pepsi V\u1ecb Chanh",display:!0},{id:6,imgUrl:"img/aqua.jpg",dishId:5,UnitPrice:15e3,leftQuantity:20,type:"drinks",name:"Aquafina",display:!0},{id:7,imgUrl:"img/milo.jpg",dishId:6,UnitPrice:2e4,leftQuantity:100,type:"drinks",name:"S\u1eefa Milo",display:!0},{id:8,imgUrl:"img/ccgpl.jpg",dishId:7,UnitPrice:8e4,leftQuantity:20,type:"food",name:"C\u01a1m Chi\xean G\xe0 Phi L\xea",display:!0},{id:9,imgUrl:"img/pv.jpg",dishId:7,UnitPrice:22222,leftQuantity:20,type:"refreshments",name:"Popcorn (V\u1eeba)",display:!0},{id:10,imgUrl:"img/ktv.jpg",dishId:7,UnitPrice:34e3,leftQuantity:20,type:"refreshments",name:"Khoai T\xe2y Vi\xean Nh\xe2n Rau",display:!0},{id:11,imgUrl:"img/garan.jpg",dishId:7,UnitPrice:281e3,leftQuantity:20,type:"chicken",name:"G\xe0 R\xe1n (9 mi\u1ebfn)",display:!0},{id:12,imgUrl:"img/garanvakhoaitay.jpg",dishId:7,UnitPrice:381e3,leftQuantity:20,type:"chicken",name:"G\xe0 R\xe1n Khoai T\xe2y",display:!0}]};var S=function(){var e=F.products,t=Object(i.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1],a=function(e){var t=c.find((function(t){return t.id===e.id})),n=c.find((function(t){return t.id===e.id&&t.qty<e.leftQuantity}));t?n?s(c.map((function(n){return n.id===e.id?Object(l.a)(Object(l.a)({},t),{},{qty:t.qty+1}):n}))):alert("H\u1ebft h\xe0ng!!"):s([].concat(Object(r.a)(c),[Object(l.a)(Object(l.a)({},e),{},{qty:1})]))},d=function(e,t){var n=c.find((function(t){return t.id===e.id})),i=c.find((function(t){return t.id===e.id&&t.qty<e.leftQuantity}));n?i?s(c.map((function(i){return i.id===e.id?Object(l.a)(Object(l.a)({},n),{},{qty:n.qty+t}):i}))):alert("H\u1ebft h\xe0ng!!"):s([].concat(Object(r.a)(c),[Object(l.a)(Object(l.a)({},e),{},{qty:t})]))},j="admin@admin.com",u="admin123",h=Object(i.useState)({email:""}),m=Object(o.a)(h,2),O=m[0],x=m[1],y=Object(i.useState)(""),v=Object(o.a)(y,2),N=v[0],C=v[1];return Object(p.jsx)("div",{className:"App",children:""!==O.email?Object(p.jsxs)("div",{className:"mainMenu",children:[Object(p.jsx)(g,{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(U,{onAdd:a,onAdds:d,products:e}),Object(p.jsx)(P,{cartItems:c,onAdd:a,onAdds:d,onRemove:function(e){var t=c.find((function(t){return t.id===e.id}));1===t.qty?s(c.filter((function(t){return t.id!==e.id}))):s(c.map((function(n){return n.id===e.id?Object(l.a)(Object(l.a)({},t),{},{qty:t.qty-1}):n})))},onClear:function(e){s(c.filter((function(t){return t.id!==e.id})))}})]}),Object(p.jsx)(b,{})]}):Object(p.jsx)(f,{Login:function(e){console.log(e),e.email===j&&e.password===u?(console.log("Logged in"),x({email:e.email})):(console.log("\u0110\u0103ng nh\u1eadp kh\xf4ng th\xe0nh c\xf4ng"),C("\u0110\u0103ng nh\u1eadp kh\xf4ng th\xe0nh c\xf4ng"))},error:N})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.b76b2ef9.chunk.js.map