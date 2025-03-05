for(let i = 100; i >= 0; i--) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) console.log(i);
}

// OR

for(let i = 0; i <= 50; i += 2) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
}

let sum = 0

for(let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);


let sum2 = 0;

for(i = 10; i <= 15; i++) {
    sum2 += i;
}

console.log(sum2);

let result = 1;

for(i = 1; i <= 6; i++) {
    result *= i;
}

console.log(result);

let str = 'TechGlobal School';

for(let i = 0; i <= str.length - 1; i++) {
console.log(str[i]);
}


let fruit = 'banana';
let counterA = 0;

for(let i = 0; i <= fruit.length - 1; i++) {
    if(fruit[i] === 'a') {
        counterA++;
    }
}

console.log(counterA);


const number = [ 2, 6, 3, -1, 10, 8 ];
let counterEven = 0;

for(let i = 0; i < number.length; i++) {
    if(number[i] % 2 === 0) {
        counterEven++;
}
}
console.log(counterEven);


for(let i = 0; i )