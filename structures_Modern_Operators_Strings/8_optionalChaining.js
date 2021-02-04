"use script";
// Removing The Function in the objects and only leave the paramaters
const weekdays = ["mon", "true", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24, //Open 24 Hours
  },
};
const restaurante = {
  name: "Clasicco Italiano",
  location: "Via Agenlo Tavant 23, Firenze, Italy",
  categories: ["Italian", "Pizezeria", "Vegetaria", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salda"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //openingHours: openingHours,

  // ES6 ENHANCED OBJECT LIETRALS
  openingHours,

  order(startIndex, mainIndex) {
    return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ startIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your deliciious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredientes, ...OtherIngredients) {
    console.log(mainIngredientes);
    console.log(OtherIngredients);
  },
};

if (restaurante.openingHours && restaurante.openingHours.non)
  console.log(restaurante.openingHours.mon.open);

// console.log(restaurante.openingHours.mon.open); //It doent exist in the object, there is an error

// WITH OPTIOANL CHAINING
console.log(restaurante.openingHours.mon?.open);
console.log(restaurante.Prevent?.mon?.open);

//Example

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurante.openingHours[day]?.open || /* ??*/ "closed"; // If dont put the "closed" display undifined
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurante.order?.(0, 1) ?? "Method does not exist");
console.log(restaurante.orderRisotoo?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [
  {
    name: "Jonas",
    email: "hello@jonas.io",
  },
];
console.log(users[0]?.name ?? "User array empty");

const newUsers = [];

if (newUsers.length > 0) console.log(newUsers[0].name);
else console.log("User array empty");

