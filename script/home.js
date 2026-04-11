// document.addEventListener("DOMContentLoaded", () => {
//   const productCards = document.querySelectorAll(".product");

//   const goToDetailPage = (productCard) => {
//     const image = productCard.querySelector("img")?.getAttribute("src") || "";
//     const name = productCard.querySelector("h3")?.textContent?.trim() || "San pham";
//     const price =
//       productCard.querySelector(".price")?.textContent?.trim() || "Lien he";
//     const category =
//       productCard.closest(".ultrabook")?.querySelector(".title")?.textContent?.trim() ||
//       "Chi tiet san pham";
//     const detailPage = productCard.dataset.link || "./detail.html";

//     const productData = { image, name, price, category };
//     localStorage.setItem("selectedProduct", JSON.stringify(productData));

//     const params = new URLSearchParams(productData);
//     window.location.href = `${detailPage}?${params.toString()}`;
//   };

//   productCards.forEach((productCard) => {
//     productCard.tabIndex = 0;
//     productCard.setAttribute("role", "link");

//     productCard.addEventListener("click", (event) => {
//       event.preventDefault();
//       goToDetailPage(productCard);
//     });

//     productCard.addEventListener("keydown", (event) => {
//       if (event.key === "Enter" || event.key === " ") {
//         event.preventDefault();
//         goToDetailPage(productCard);
//       }
//     });
//   });
// });
