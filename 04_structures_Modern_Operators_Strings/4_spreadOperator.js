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
};
restaurante.orderDelivery({
  time: "23:20",
  address: "Via del Sole, 21",
  mainIndex: 2,
  startIndex: 2,
});

restaurante.orderDelivery({
  address: "Bogota",
});

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurante.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurante.mainMenu];

// Join 2 arrays
const menu = [...restaurante.startMenu, ...restaurante.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not Objects

const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
//console.log(`${str} Shmetedan`); This doesn´t work

/*const ingredients = [
  prompt("Let's make pasta! Ingredient 1?'"),
  prompt("Ingrediente 2?"),
  prompt("Ingredient 3"),
];
console.log(ingredients);
restaurante.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurante.orderPasta(...ingredients);*/

// Objects
const newRestaurant = { foundeIn: "1998", ...restaurante, founder: "Guiseppe" };
console.log(newRestaurant);

const newRestaurantCopy = { ...restaurante };
newRestaurantCopy.name = "Risotrante Roma";
console.log(restaurante.name);
console.log(newRestaurantCopy.name);

