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

const airline = "Tap Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[0]);
console.log("B737"[0]);

console.log(airline.length); // Return a number when finds the first "r"
console.log("B737".length);

console.log(airline.indexOf("r")); // Return a number when finds the first "r"
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));
console.log("B737"[0]);

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B  and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat ");
  else console.log("You got lucky ");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("EE");

console.log(new String("Jonas"));
console.log(new String("Jonas"));
console.log(typeof new String("Jonas"));

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalizacion in Name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Emails
const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmeEmail = lowerEmail.trim(); // Removing the la
console.log(trimmeEmail); //  method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters
//  (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

const normalizedEmail = loginEmail.toLowerCase().trim(); // It is equal to the function up
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97$";
const priceUS = priceGB.replace("$", "&").replace(",", "."); //
console.log(priceUS);

const announcement =
  "All passengers come to barding door 23, Boarding door 23!";
console.log(announcement.replace("door", "gate"));

// console.log(announcement.replaceAll("door", "gate")); This doesnt work

console.log(announcement.replace(/door/g, "gate")); // This replace every word in the phrase

// Boleans
const newPlane = "Airbus A320 neo";
console.log(newPlane.includes("A320")); // If string is in the paramater return true else false
console.log(newPlane.includes("Boeing"));
console.log(newPlane.startsWith("Air")); //If the string starts with the paramater return true else return false

if (plane.startsWith("Airbus") && plane.endsWith("neo"))
  console.log("Part of the new aIRbUS fAMILY");
else {
  console.log("COmo");
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("You are not allowed on board");
  else console.log("Welcome aboard");
};
checkBaggage("I have a laptop, some foof and a pocket knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

console.log("a+very+nice+string".split("+"));
console.log("Jonas Schemetmann".split(" "));
const [firstName, lastName] = "Jonas Schmedtamann".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("andres campo serna");

// Padding String
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Jonas".padStart(25, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  let last = str.slice(-4);

  last = last.padStart(str.length, "*");
  console.log(last);
  return last;
};
maskCreditCard(234234234234234);
maskCreditCard("234123123151341234234");

// Repeat
const message2 = "Bad waether... All departues Delayed...";
console.log(message2.repeat(5));
const planesinLine = function (n) {
  console.log(`There are ${n} planes in line ${"".repeat(n)}`);
};

