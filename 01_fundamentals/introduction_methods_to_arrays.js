//--------------------INTRODUCTION TO ARRAYS------------------------------------//

const friend1 = "Michael";
const friend2 = "Andres";
const friend3 = "Francisco";

const friends = ["Michael", "Andres", "Francisco" ];
console.log(friends);

const variousDatas = new Array("Como", 1984, 1008, 2020); // This works to create an array with the function new Array
console.log(variousDatas);

const years = new Array(1991, 1984, 1008, 2020); // This works to create an array with the function new Array
console.log(years);

console.log(friends[0]); //Diplay the 1991 on the position 0 of thearray
console.log(friends[2]); //Diplay the 1008 on the position 2 of thearray
console.log(friends.length); //Diplay the length of the array
console.log(friends[friends.length - 1]); //Display the ultimum value of the array

friends[2] = 'Jay'; // Changed the value in the positiion 2 by 'Jay'
console.log(friends);


const firstName = 'Jonas';
const jonas = [firstName, 'Schemedtamn', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length); //Display the length of the array

const calcAge = function (birthYeah){
    return 2037 - birthYeah;
}
const years1 = [1990, 1967, 2002, 2010, 2018]; // This is an array
const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years1[1]),
             calcAge(years1[years1.length - 1])];
console.log(ages);

//------------------------------------------------------------------------------//
//----------------------BASIC ARRAY OPERATIONS(METHODS)-------------------------//
const newFriends = ['Michael', 'Steven', 'Peter'];
    // Add elements
const newReturn = newFriends.push('Jay'); //push is used to add a new element in the end of the array and Return to the length of the array
console.log(newFriends, newReturn); // Print the new array y the length of the array

newFriends.unshift('John'); // unshift is used to add a new element at the beginning of and array and Return to the length of the array
console.log(newFriends);

    //Remove the first element
const popped = newFriends.pop();
friends.pop(); // pop deletes the last elemente of the array and Return to the element deleted
console.log(newFriends);
console.log("Element popped at the array " + popped);

    // Remove the First Element Of The Array

const shifted = newFriends.shift(); // shift deletes the first elemente of the array and Return to the element deleted
console.log(newFriends);
console.log("Element shifted at the array" + shifted);

    // Obtain the Index OF AN Element OF THE ARRAY
console.log(newFriends.indexOf('Steven')); // Print what position steven is in

    // RETURN TRUE IF THE ELEMENT EXISTS AT THE ARRAY IF NOT RETURN FALSE
console.log(newFriends.includes('Steven'));
console.log(newFriends.includes('Andres'));

if (newFriends.includes('Peter')){
    console.log("You have a friend called Peter");
}
else{
    console.log("You dont have a friend called Peter");
}
//--------------------INTRODUCTION TO ARRAYS------------------------------------//

const friend1 = "Michael";
const friend2 = "Andres";
const friend3 = "Francisco";

const friends = ["Michael", "Andres", "Francisco" ];
console.log(friends);

const variousDatas = new Array("Como", 1984, 1008, 2020); // This works to create an array with the function new Array
console.log(variousDatas);

const years = new Array(1991, 1984, 1008, 2020); // This works to create an array with the function new Array
console.log(years);

console.log(friends[0]); //Diplay the 1991 on the position 0 of thearray
console.log(friends[2]); //Diplay the 1008 on the position 2 of thearray
console.log(friends.length); //Diplay the length of the array
console.log(friends[friends.length - 1]); //Display the ultimum value of the array

friends[2] = 'Jay'; // Changed the value in the positiion 2 by 'Jay'
console.log(friends);


const firstName = 'Jonas';
const jonas = [firstName, 'Schemedtamn', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length); //Display the length of the array

const calcAge = function (birthYeah){
    return 2037 - birthYeah;
}
const years1 = [1990, 1967, 2002, 2010, 2018]; // This is an array
const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years1[1]),
             calcAge(years1[years1.length - 1])];
console.log(ages);

//------------------------------------------------------------------------------//
//----------------------BASIC ARRAY OPERATIONS(METHODS)-------------------------//
const newFriends = ['Michael', 'Steven', 'Peter'];
    // Add elements
const newReturn = newFriends.push('Jay'); //push is used to add a new element in the end of the array and Return to the length of the array
console.log(newFriends, newReturn); // Print the new array y the length of the array

newFriends.unshift('John'); // unshift is used to add a new element at the beginning of and array and Return to the length of the array
console.log(newFriends);

    //Remove the first element
const popped = newFriends.pop();
friends.pop(); // pop deletes the last elemente of the array and Return to the element deleted
console.log(newFriends);
console.log("Element popped at the array " + popped);

    // Remove the First Element Of The Array

const shifted = newFriends.shift(); // shift deletes the first elemente of the array and Return to the element deleted
console.log(newFriends);
console.log("Element shifted at the array" + shifted);

    // Obtain the Index OF AN Element OF THE ARRAY
console.log(newFriends.indexOf('Steven')); // Print what position steven is in

    // RETURN TRUE IF THE ELEMENT EXISTS AT THE ARRAY IF NOT RETURN FALSE
console.log(newFriends.includes('Steven'));
console.log(newFriends.includes('Andres'));

if (newFriends.includes('Peter')){
    console.log("You have a friend called Peter");
}
else{
    console.log("You dont have a friend called Peter");
}

