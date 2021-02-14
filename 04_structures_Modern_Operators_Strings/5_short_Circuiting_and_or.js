"use script";
const restaurante = {
  name: "Clasicco Italiano",
  location: "Via Agenlo Tavant 23, Firenze, Italy",
  categories: ["Italian", "Pizezeria", "Vegetaria", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salda"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24, //Open 24 Hours
    },
  },
  order: function (startIndex, mainIndex) {
    return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deliciious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredientes, ...OtherIngredients) {
    console.log(mainIngredientes);
    console.log(OtherIngredients);
  },
};

console.log("-------Or---------");
// Use Any Data Type, Return ANy Data Type, short-circuiting

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23
restaurante.numGuest = 23;
const guests1 = restaurante.numGuests ? restaurante.numGuests : 10;
console.log(guests1);

const guest2 = restaurante.numGuests || 20;
console.log(guest2);

console.log("-------AND---------");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Jonas");

//Practical Example
if (restaurante.orderPizza) {
  restaurante.orderPizza("Mushrooms", "spinach");
}
restaurante.orderPizza && restaurante.orderPizza("mushrooms", "spinach");



// -----------------------NULLISH COALECING OPERATOR-------------------------/
