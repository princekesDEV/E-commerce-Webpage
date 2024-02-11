let bag = [];
fetch("https://fakestoreapi.com/products")
  .then((res) =>
    res.json().then((e) => {
      bag = e;
      displayCards(e);
    })
  )
  .catch((err) => console.log(err));

let cart_arr = JSON.parse(localStorage.getItem("Cart_Products")) || [];

function displayCards(e) {
  document.querySelector("#container").innerHTML = "";
  e.forEach((elem) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.image;

    let title = document.createElement("p");
    title.innerText = elem.title;

    let price = document.createElement("h3");
    price.innerText = elem.price;

    let rating = document.createElement("p");
    rating.innerText = `Rating:- ${elem.rating.rate}`;

    let addToCart = document.createElement("button");
    addToCart.addEventListener("click", () => {
      cart_arr.push(elem);
      localStorage.setItem("Cart_Products", JSON.stringify(cart_arr));
    });
    addToCart.innerText = "Add To Cart";

    document.querySelector("#container").append(card);
    card.append(image, title, price, rating, addToCart);
  });
}

function search() {
  let search_value = document.querySelector("input").value;

  let new_data = bag.filter((elem) => {
    return elem.title.toLowerCase().includes(search_value.toLowerCase());
  });

  displayCards(new_data);
}

function tosort() {
  let select = document.querySelector("select");

  if (select.value == "Low-to-high") {
    bag.sort((elem1, elem2) => elem1.price - elem2.price);
  } else if (select.value == "High-to-low") {
    bag.sort((elem1, elem2) => elem2.price - elem1.price);
  }
  displayCards(bag);
}
