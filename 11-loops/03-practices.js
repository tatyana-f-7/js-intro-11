const { getRandomNumber } = require('./../utils/MathHelper.js');


for(let i = 1; i <= getRandomNumber(10, 20); i++) {
    if(i % 2 !== 0) console.log(i);
}


let rand = getRandomNumber(1, 10);
console.log(rand);
let product = 1;

for(let i = 1; i <= rand; i++) {
product *= i;
}

console.log(product);


let r1 = getRandomNumber(1, 10);
let r2 = getRandomNumber(1, 10);
console.log(`The random numbers are ${r1}, ${r2}`);

for(let i = Math.min(r1, r2); i <= Math.max(r1, r2); i++) {
    console.log(i);
}