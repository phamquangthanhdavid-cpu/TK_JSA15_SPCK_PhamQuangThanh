document.addEventListener("DOMContentLoaded", function () {
  var products = document.querySelectorAll(".product");

  products.forEach(function (product) {
    product.addEventListener("click", function (event) {
      event.preventDefault();

      var image = product.querySelector("img");
      var name = product.querySelector("h3");
      var price = product.querySelector(".price");

      var productData = {
        image: image.getAttribute("src"),
        name: name.innerText,
        price: price.innerText,
      };

      localStorage.setItem("selectedProduct", JSON.stringify(productData));
      window.location.href = "./detail.html";
    });
  });
});
