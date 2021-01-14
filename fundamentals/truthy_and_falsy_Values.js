// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // Zero is equal to false
console.log(Boolean(undefined)); // undefined is equal to false
console.log(Boolean('Jonas')); // This condition is true
console.log(Boolean({})); // This condition is true
console.log(Boolean('')); // '' is equal to false

const money = 100;
if(money){ //True
    console.log("Don't spend it all ;");
}else {
    console.log("You should get a job!");
}

let height = 0;
if (height){ //False
    console.log("YAY! Height is define");
}else{
    console.log("Height is undefine");
}
