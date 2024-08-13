function showNavbar() {
    document.querySelector('.side-navbar').style.left = '0';
}

function closeNavbar() {
    document.querySelector('.side-navbar').style.left = '-60%';
}

var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll(".product-box");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    productList.forEach(function(product) {
        var productName = product.querySelector("p").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            // Hide the product if it doesn't match the search term
            product.style.display = "none";
        } else {
            // Show the product if it matches the search term
            product.style.display = "block";
        }
    });
});
