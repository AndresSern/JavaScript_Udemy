"use script";
const restaurante = {
  name: "Clasicco Italiano",
  location: "Via Agenlo Tavant 23, Firenze, Italy",
  categories: ["Italian", "Pizezeria", "Vegetaria", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salda"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (startIndex, mainIndex) {
    return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
let newArr = [1, 2, 3, 4, 5];
let [p, q] = arr;
console.log(b, z);

let [first, , second] = restaurante.categories;
console.log(first, second);

const temp = first;
first = second;
second = temp;
console.log(first, second);
let prueba;
[first, second, prueba] = [second, first];
console.log(first, second);

console.log(restaurante.order(2, 0));
//Receive 2 Return Values From A Function
const [starter, mainCourse] = restaurante.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];
//const [i, j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

