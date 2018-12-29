var pathname = window.location.search.slice(1);
var id = pathname.split('=')[1];

$.getJSON("assets/js/products.json", function(data) {
  products = data.products;

  $.each(products, function(index, value){
    if(value.id == id){
      showItem(value);
    }
  })
})

showItem = (item) =>{
  var itemDiv = `
      <div id="item-images">
        <div class="big-img card flex flex-center no-pad">
            <img src="assets/images/${item.image_url}" alt="">
        </div>
      <div class="thumb-img flex flex-start mg-20-vt">
        <div class="card thumb">
          <img src="assets/images/${item.image_url}" alt="">
        </div>
      </div>
      </div>
      <div id="item-details" class="pd-20 no-pad">
        <h2 class="fs-30 fw-regular fc-dark-grey mg-0">${item.title}</h2>

        <div class="tag"> <i class="fas fa-tags"></i> ${item.category} </div>

        <div class="stock fs-14 fw-semi fc-light-grey mg-10-vt pd-10-vt">
          <p>Min Stock: 10</p>
          <p>Current Stock: ${item.stock}</p>
        </div>

        <h2 class="fs-25 fw-light fc-pink">Ksh ${item.price}</h2>
        <hr class="hr mg-10-vt">
        <div class="clear"></div>
        <button class="btn mg-10-vt" data-item-id="${item.id}">Add to Cart</button>
      </div>
  `;
  $("#item-wrapper").append(itemDiv);
}
