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

console.log("--------------------------MAPS FUNDAMENTALS---------------------");
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze", "Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]) // Add a new value in the set
  .set("open", 11) // Add a new value in the set
  .set("c lose", 23) // Add a new value in the set
  .set(true, "We are open :D") // Add a new value in the set
  .set(false, "we are close :("); // Add a new value in the set

console.log(rest.get("name")); // Show the value of the name in the set, show "Classio Italiano"
console.log(rest.get(true)); // Show the value of the boolean true in the set = "We are open :D"
console.log(rest.get(1)); // Show the value of the 1 in the set, show "Italy"

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories")); // .has() return true if the key exist else return false
rest.delete(2); // Delete works to delete a key of the set and its value
console.log(rest); // Prints rest without the key 2 and its value
//  rest.clear(); Clear all the datas, keys and values
//  console.log(rest);
const arr = [1, 2];
// rest.set([1, 2], "Test"); // This doesn't work beacuse [1, 2] has a object own
rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "heading"); It comments this line beacuse document doesnt work in console of vagrant
console.log(rest.size); //Return the length of the map
console.log(rest);
console.log(rest.get([1, 2])); // This prints undifined beacuse this object is diferrent
console.log(rest.get(arr));

console.log("--------------------------Map Interaction--------------------");
const question = new Map([
  ["question", "What is the best programming language in the word?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScritp"],
  ["correct", 3],
  [true, "Correct "],
  [false, "Try again"],
]);
console.log(question);

// Convert Object To Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert Map To Array
console.log(...question);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

