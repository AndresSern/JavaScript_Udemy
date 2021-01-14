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

