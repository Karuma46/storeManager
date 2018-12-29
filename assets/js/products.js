//get products json file

$.getJSON("assets/js/products.json", function(data) {
  products = data.products;
  console.log(products);

  showItems(products);
})


// iterate over the products

  showItems = (products) => {
    var len = products.length;

    for(var i=0; i<len; i++) {
      item = products[i];
      var prDiv = `
          <div class="product card">
            <a href="view-product.html?item_id=${item.id}">
            <div class="label">
                <i class="fas fa-clipboard-list"></i>
                ${item.stock}
            </div>
  
            <div class="product-image ">
              <img src="assets/images/${item.image_url}" alt="">
            </div>
  
            <div class="product-info qs">
              <p class="fs-14 fw-semi fc-pink">${item.title}</p>
              <p class="fs-13 fw-semi fc-grey">Ksh ${item.price}</p>
  
              <div class="tag">
                  <i class="fas fa-tags"></i>
                  ${item.category}
              </div>
            </div>
  
            <button class="btn" data_item_id="${item.id}">Add to Cart</button>
          </a>
          </div>
        `;
    $("#products_grid").append(prDiv)
  
  }
}





