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
  calculateTotal();
}

// Exercise 2
function cleanCart() {
  //usamos el valor 0 para que empiece a contar y vacíe todo el array
  cartList.splice(0);
  console.log(cartList);
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
    element.quantity = 1
  });
  
  //he necesitado ordenar el array xq si estaban desordenados los items no funcionaba el for
  cartList.sort((a, b) => {
   return a.id - b.id
  })

  for (let counter = 0; counter < cartList.length; counter++) {
    if (cartList[counter] !== cartList[counter + 1]) {
      const addItem = cartList[counter];
      cart.push(addItem);
    }
    cartList.forEach((element, index) => {
      if (cartList[index] === cartList[index+1]) {
        element.quantity += 1
      }
    });
  }

  console.log(cartList)
  console.log(cart);
}


// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
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
  printCart();
}
