// End search bar

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card-horizontal");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    productCards.forEach(function (card) {

        const productName = card.querySelector("h6").textContent.toLowerCase();

        if (productName.includes(searchValue)) {

            card.parentElement.style.display = "";

        } else {

            card.parentElement.style.display = "none";

        }

    });

});
// End search bar