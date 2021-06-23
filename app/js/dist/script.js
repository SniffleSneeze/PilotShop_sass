"use strict";

fetch('product.json').then(function (response) {
  return response.json();
}).then(function (products) {
  var source = document.querySelector('#productTemplate').innerText;
  var template = Handlebars.compile(source);
  var target = document.querySelector('#product');
  target.innerHTML = template(products);
  console.log(products);
});
//# sourceMappingURL=script.js.map
