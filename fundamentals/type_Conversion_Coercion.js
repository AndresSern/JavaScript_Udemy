const inputYear = "1991";
//Type Coercion
console.log(Number(inputYear), inputYear); //Number convert a number
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //Number convert a number
console.log(typeof Nan);

console.log(String(23), 23);

//Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "18");
console.log("23" > "18");

let n = '1' + 1; // '11'
n = n - 1; //10 When a sub a string with a number the string convert a number
console.log(n);
