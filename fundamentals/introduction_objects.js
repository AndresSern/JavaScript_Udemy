const jonasArray = [
    'Jonas',
    'Schemdtmann',
    2047 - 1991,
    'teacher',
    ['Michael', 'Peter','Andres']
];

const Jonas = {firstName: 'Jonas',
     lastName: 'Schemdtamann',
     'age': 2037 - 1991,
     job: 'teacher',
     friends: ['Michael', 'Peter', 'Steven']};

console.log(Jonas);
console.log(Jonas.lastName); // This is dot notation

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // This is bracket Notation
console.log(jonas["last" + nameKey]); // This is bracket Notation

//console.log(jonas."last" + nameKey); // This is an error
const interestedIn = prompt("What do you want to Know about Jonas? Choose between firstName, lastName, age, job, and friends ");
console.log(interestedIn);
console.log(Jonas.interestedIn) // Jonas doesnt have an atributte called interesetedIn
console.log(Jonas[interestedIn]);

if(jonas[interestedIn]){
    console.log(Jonas[interestedIn]);
}else{
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends ");
}
Jonas.location = 'Portugal';
jonas["twitter"] = "@jonasschemedtaman";
console.log(jonas);
