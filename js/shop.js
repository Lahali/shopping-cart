// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  for (let counter = 0; counter < products.length; counter++) {
    if (counter === id) {
      cartList.push(products[counter - 1]);
    }
  }
  console.log(cartList);
  //calculateTotal();
}

// Exercise 2
function cleanCart() {
  cartList = [];
  cart = [];
  console.log(cartList);
  console.log(cart);
}

// Exercise 3
function calculateTotal() {
  // A esta función la llama la función buy porque no hay ningún botón que la llame
  // Calculate total price of the cart using the "cartList" array
  let totalPrice = 0;
  const productPrice = [];
  cartList.forEach((element) => {
    productPrice.push(element.price);
  });

  for (let counter = 0; counter < productPrice.length; counter++) {
    totalPrice += productPrice[counter];
  }

  console.log(productPrice);
  console.log(totalPrice);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  cartList.forEach((element, index) => {
    cartList[index];
    element.quantity = 1;
  });

  //he necesitado ordenar el array xq si estaban desordenados los items no funcionaba el for
  cartList.sort((a, b) => {
    return a.id - b.id;
  });

  for (let counter = 0; counter < cartList.length; counter++) {
    if (cartList[counter] !== cartList[counter + 1]) {
      const addItem = cartList[counter];
      cart.push(addItem);
    }
    if (cartList[counter] === cartList[counter + 1]) {
      cartList[counter].quantity += 1;
    }
  }

  cart.forEach((element, index) => {
    cart[index];
    element.subtotal = cart[index].quantity * cart[index].price;
  });

  console.log(cartList);
  console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"

  cart.forEach((element, index) => {
    if (cart[index].id === 1) {
      if (cart[index].quantity >= 3) {
        element.priceDiscount = 10;
        const discountOil = cart[index].quantity * element.priceDiscount;
        element.subtotalWithDiscount = discountOil;
      }
    }
    if (cart[index].id === 3) {
      if (cart[index].quantity >= 10) {
        const discountCake = cart[index].price - cart[index].price * 0.3;
        element.priceDiscount = discountCake;
        element.subtotalWithDiscount =
          element.priceDiscount * cart[index].quantity;
      }
    }
  });
  console.log(cart);
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  const table = document.getElementById("cart_list");
  table.innerHTML = "";
  let totalPriceDiscount = 0
  let totalPriceNoDiscount = 0
  
  for (let counter = 0; counter < cart.length; counter++) {
    const row = document.createElement("tr");
    const cellProductName = document.createElement("th");
    cellProductName.innerHTML = cart[counter].name;
    const cellProductPrice = document.createElement("td");
    cellProductPrice.innerHTML = cart[counter].price;
    const cellProductQuantity = document.createElement("td");
    cellProductQuantity.innerHTML = cart[counter].quantity;
    const cellProductTotal = document.createElement("td");
    if (!cart[counter].subtotalWithDiscount) {
      cellProductTotal.innerHTML = cart[counter].subtotal;
    } else {
      cellProductTotal.innerHTML = cart[counter].subtotalWithDiscount;
    }
    
    row.appendChild(cellProductName);
    row.appendChild(cellProductPrice);
    row.appendChild(cellProductQuantity);
    row.appendChild(cellProductTotal);
    table.appendChild(row);

    if (!cart[counter].subtotalWithDiscount) {
      totalPriceNoDiscount += cart[counter].subtotal
    } else {
      totalPriceDiscount += cart[counter].subtotalWithDiscount
    }

  }
  
  const elementPrice = document.getElementById("total_price");
  const totalPrice = (totalPriceDiscount + totalPriceNoDiscount)
  elementPrice.innerHTML = totalPrice
  console.log(totalPrice)

}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  generateCart();
  applyPromotionsCart();
  printCart();
}
