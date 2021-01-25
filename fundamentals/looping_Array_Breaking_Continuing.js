/*console.log("Lifting wights repetition 1");
console.log("Lifting wights repetition 2");
console.log("Lifting wights repetition 3");
console.log("Lifting wights repetition 4");
console.log("Lifting wights repetition 5");
console.log("Lifting wights repetition 6");
console.log("Lifting wights repetition 7");
console.log("Lifting wights repetition 8");
console.log("Lifting wights repetition 9");
console.log("Lifting wights repetition 10");
*/

//For look keeps running while condition is true
/*
for(let rep = 1; rep <= 10; rep++ ){
    console.log(`Lifting wights repetition ${rep}`);
}
*/
console.log("------------------------------------");
const types = [];

const jonasArray = [
    'Jonas', 'Schmedtamm', 2037 - 1991, 'teacher',
    ['Michael', 'Peter', 'Steven'], true
];

for(let i = 0; i < jonasArray.length; i++){
    // Reading From Jonas Array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // FIlling Types Array
    // console.log = typeof jonas[i];
    types.push(typeof jonasArray[i]);
}
console.log(types)

console.log("------------------------------------");

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

console.log("------------------------------------");
// CONTINUE AND BREAK
console.log("--------ONLY STRINGS-----------");
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') continue;
    // Reading From Jonas Array
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("------------------------------------");
console.log("--------BREAK WITH NUMBER-----------");
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] === 'number') break;
    // Reading From Jonas Array
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("------------------------------------");

console.log("----------Looping Backwards and Loops in Loops-------")
const andresArray = [
    'Jonas', 'Schmedtamm', 2037 - 1991, 'teacher',
    ['Michael', 'Peter', 'Steven'], true
];

// 0, 1, ...., 4
// 4, 3, ...., 0

for(let i = andresArray.length - 1; i >= 0; i--){
    console.log(i, andresArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------------Starting Exercise ${exercise}-------`)

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


