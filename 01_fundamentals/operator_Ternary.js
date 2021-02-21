let age = 4;

let drink = age >= 18 ? "wine!" : age >= 15 ? "water": "fire"; // Operator Ternary
console.log(drink);

age = 15;
if (age >= 18){ // This is equal to the operator ternary above
    drink = "wine!";
}else if (age >= 15){
    drink = "water";
}else{
    drink = "fire" ;
}
console.log(drink);
age = 20;
drink = age >= 18 ? "wine!" : "fire"; // Operator Ternary

if (age >= 18){ // This is equal to the operator ternary above
    drink = "wine!";
}else{
    drink = "fire" ;
}
console.log(drink);
