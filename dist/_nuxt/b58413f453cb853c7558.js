(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(t,e,r){var content=r(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("4e948dce",content,!0,{sourceMap:!1})},173:function(t,e,r){"use strict";var o=r(172);r.n(o).a},174:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".details[data-v-f98a11d6]{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.details[data-v-f98a11d6]:hover{border:1px solid #51bafc}.button[data-v-f98a11d6],.select[data-v-f98a11d6]{z-index:2}.select[data-v-f98a11d6]{position:absolute;right:15px;bottom:35px}.card-content[data-v-f98a11d6]{padding:0}.buttons[data-v-f98a11d6]{margin:0}",""])},175:function(t,e,r){"use strict";function o(t,e){var r=e.trim().toLowerCase();return r.length?t.filter(function(t){return t.title.toLowerCase().indexOf(r)>-1}):t}r.d(e,"a",function(){return o})},178:function(t,e,r){var content=r(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("38b77eec",content,!0,{sourceMap:!1})},179:function(t,e,r){var content=r(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("f0094e5c",content,!0,{sourceMap:!1})},180:function(t,e,r){"use strict";var o={name:"products",props:["product"],data:function(){return{addToCartLabel:"Add to cart",viewDetailsLabel:"Details",removeFromCartLabel:"Remove from cart",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favourite",selected:1,quantityArray:[]}},mounted:function(){for(var i=1;i<=20;i++)this.quantityArray.push(i);this.$props.product.quantity>1&&(this.selected=this.$props.product.quantity)},computed:{isUserLogged:function(){return this.$store.getters.isUserLoggedIn}},methods:{addToCart:function(t){var data={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",data)},removeFromCart:function(t){var data={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",data)},saveToFavorite:function(t){this.$store.state.userInfo.isLoggedIn?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)},onSelectQuantity:function(t){var data={id:t,quantity:this.selected};this.$store.commit("quantity",data)}}},n=(r(173),r(3)),component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-4by3"},[r("img",{attrs:{src:t.product.picURL,alt:"Placeholder image"}})])]),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(t.product.title))])]),t._v(" "),r("div",[r("button",{directives:[{name:"show",rawName:"v-show",value:t.product.isFavourite,expression:"product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.removeFromFavouriteLabel},on:{click:function(e){return t.removeFromFavourite(t.product.id)}}},[t._m(0)]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.product.isFavourite,expression:"!product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.addToFavouriteLabel},on:{click:function(e){return t.saveToFavorite(t.product.id)}}},[t._m(1)])])]),t._v(" "),r("div",{staticClass:"content is-clearfix"},[r("p",[t._v(t._s(t.product.description))]),t._v(" "),r("div",{staticClass:"is-pulled-left"},[1===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),r("p",[t._v(t._s(t.product.reviews>0?t.product.reviews+" Reviews":"No reviews"))])]),t._v(" "),r("p",{staticClass:"is-pulled-right"},[r("span",{staticClass:"title is-4"},[r("strong",[t._v("₹ "+t._s(t.product.price))])])])]),t._v(" "),r("div",{staticClass:"card-footer btn-actions"},[r("div",{staticClass:"card-footer-item field is-grouped"},[r("div",{staticClass:"buttons"},[t.product.isAddedToCart?t._e():r("button",{staticClass:"button is-primary",on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v(t._s(t.addToCartLabel))]),t._v(" "),t.product.isAddedToCart?r("button",{staticClass:"button is-text",on:{click:function(e){return t.removeFromCart(t.product.id,!1)}}},[t._v(t._s(t.removeFromCartLabel))]):t._e()]),t._v(" "),r("div",{staticClass:"select is-rounded is-small"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?r:r[0]},function(e){return t.onSelectQuantity(t.product.id)}]}},t._l(t.quantityArray,function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e))])}),0)])])])]),t._v(" "),r("nuxt-link",{staticClass:"details",attrs:{to:{name:"product_detail-id",params:{id:t.product.id,title:t.product.title,price:t.product.price,rating:t.product.ratings,reviews:t.product.reviews,isAddedBtn:t.product.isAddedBtn}}}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-heart"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-heart-o"})])}],!1,null,"f98a11d6",null);e.a=component.exports},185:function(t,e,r){"use strict";var o=r(178);r.n(o).a},186:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".card[data-v-97753e18]{margin:10px}",""])},187:function(t,e,r){"use strict";var o=r(179);r.n(o).a},188:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".hero[data-v-34615a3c]{background-image:url(https://betablog.veenaworld.com/wp-content/uploads/2018/06/Ooty-Blog-escape2explore.jpg);background-repeat:no-repeat;width:100vw;min-height:100vh;margin-bottom:20px;overflow:visible}h1[data-v-34615a3c],h2[data-v-34615a3c]{color:#f0e6e6}",""])},189:function(t,e,r){"use strict";r.r(e);var o=r(180),n=r(175),c={name:"productsList",components:{VmProducts:o.a},data:function(){return{id:"",noProductLabel:"No product found",productsFiltered:[]}},computed:{products:function(){return this.$store.state.userInfo.hasSearched?this.getProductByTitle():this.$store.state.products}},methods:{getProductByTitle:function(){var t=this.$store.state.products,e=this.$store.state.userInfo.productTitleSearched;return this.productsFiltered=Object(n.a)(t,e)}}},d=(r(185),r(3)),l=Object(d.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticStyle:{"font-size":"25px",margin:"50px","padding-bottom":"10px"}},[t._v("Our Popular Products")]),r("br"),t._v(" "),r("div",{staticClass:"columns is-centered is-multiline"},[r("div",{staticClass:"columns is-centered is-multiline",staticStyle:{"padding-top":"15px"}},[t._l(t.products,function(t){return r("div",{key:t.id,staticClass:"card column is-one-quarter",staticStyle:{"min-width":"23vw"}},[r("VmProducts",{attrs:{product:t}})],1)}),t._v(" "),0===t.products.length?r("div",{staticClass:"section"},[r("p",[t._v(t._s(t.noProductLabel))])]):t._e()],2)])])},[],!1,null,"97753e18",null).exports,v=(r(187),{name:"index",components:{VmProductsList:l,VmHero:Object(d.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-bold"},[e("div",{staticClass:"hero-body",staticStyle:{"padding-top":"50vh"}},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v("\n        Coonoor Dairy and Agro. \n      ")]),this._v(" "),e("h2",{staticClass:"subtitle"},[this._v("\n        Completely organic products at all levels. The milk is produced without any hormonal injection. We ensure our Farm partners use only natural fertilizers and minimum insecticides.\n      ")])])])])}],!1,null,"34615a3c",null).exports},head:function(){return{script:[{src:"https://identity.netlify.com/v1/netlify-identity-widget.js"},{src:"https://kit.fontawesome.com/45f615a25c.js"}]}}}),f=Object(d.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("VmHero"),this._v(" "),e("VmProductsList")],1)},[],!1,null,null,null);e.default=f.exports}}]);