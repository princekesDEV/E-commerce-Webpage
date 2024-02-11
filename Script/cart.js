let cart_arr = JSON.parse(localStorage.getItem("Cart_Products")) || [];
displayCard(cart_arr);
function displayCard(cart_arr) {
  document.querySelector("#container").innerHTML = null;
  cart_arr.forEach((ele, i) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.image;
    let title = document.createElement("p");
    title.innerText = ele.title;
    let price = document.createElement("h3");
    price.innerText = ele.price;
    let rating = document.createElement("p");
    rating.innerText = `Rating:- ${ele.rating.rate}`;
    let delete_but = document.createElement("button");
    delete_but.innerText = "Remove From Cart";
    delete_but.addEventListener("click", (i) => deleteItem(i));
    card.append(image, title, price, rating, delete_but);
    document.querySelector("#container").append(card);
  });
}
function deleteItem(i) {
  cart_arr.splice(i, 1);
  localStorage.setItem("Cart_Products", JSON.stringify(cart_arr));
  displayCard(cart_arr);
}
