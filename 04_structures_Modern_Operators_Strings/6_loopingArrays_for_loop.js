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

const menu = [...restaurante.startMenu, ...restaurante.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  //console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  //console.log(item);
  console.log(`${i + 1}: ${el}`);
}
//console.log(...menu.entries());

