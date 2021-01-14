// Creating my first function with javascript
function logger(){
    console.log("My name is Jonas");
}
// Calling / running / invoking function
logger();
logger();
logger();


// Creating a function with two arguments
function fuitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const my_return =  fuitProcessor(5, 0);
console.log(my_return);
console.log(fuitProcessor(5, 0));

// Function Declarations vs. Expressions

    //Function Declaration
function calcAge1(birthYeah){
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
console.log(age1);

    //Function Expression
const calcAge2 = function (birthYeah){
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);
console.log(age1, age2);


//--------------------------------------------------------------------//

//Arrow Function
const calAge3 = birthYeah => 2037 - birthYeah;
const age3 = calAge3(1991);
console.log(age3);


const yearUntilRetirement = birthYeah => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1991, "Andres"));

//------------------------------------------------------------------------//
//Functions Calling Other Functions
function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const Juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return Juice;
}
console.log(fruitProcessor(2, 3));
