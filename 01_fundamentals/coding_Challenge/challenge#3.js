const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the prophy!");
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the prophy!");
}else if (scoreDolphins === scoreKoalas &&
          scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log("Both with the throphy");
}else{
    console.log("No one wins the throphy!");
}
