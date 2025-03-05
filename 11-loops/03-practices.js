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

let r1 = getRandomNumber(1, 10);
let r2


// const numbers = [ 5, 7, 1, 3, 10 ];

numbers.forEach((x) => console.log(x * 2));

// const names = [ 'Mariia', 'Alex', 'John', 'Jane', 'Victoria' ];

/*
names.forEach(function(x) {
    if(x.length <= 4) console.log(x);
});
*/

/*
names.forEach(function(x) {
    if(x.length <= 4) console.log(x);
});
*/

/*
names.forEach((name) => {
    if(name.length === 4) console.log(name);
});
*/

const names = [ 'Mariia', 'Alex', 'John', 'Jane', 'Victoria' ];

const names4 = names.filter((x) => x.length === 4);

console.log(names4);

console.log(names.filter((name) => name.toLowerCase().includes('a')).length);



const numbers = [ 10, 5, 100, 77, 50, 65, 0 ];

console.log(numbers.filter((number) => number >= 50));

const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('apple')));
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('a')).length);
console.log(fruits.filter((fruit) => fruit.toLowerCase().includes('i')).length);

const nums = [ 5, 3, 2, 20 ];

const oddEven = nums.map((num) => num % 2 === 0 ? 'even' : 'odd');

console.log(oddEven);

const sentences = ['Good evening', 'I like arrays', 'It is Monday'];
// each sentence's first word -> ['Good', 'I', 'It'];

const firstWord = sentences.map((sen) => sen.slice(0, sen.indexOf(' ')));
console.log(firstWord);

const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

const revisedSal = salaries.map((sal) => sal.toFixed(2));
console.log(revisedSal);

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv


const numbers = [ 3, 6, 10, 4 ]

// count even
let countEven = numbers.reduce((accumulator, current) => current % 2 === 0 ? accumulator + 1 : accumulator, 0);

console.log(countEven);

let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity);

const fruits = [ 'Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon' ];

const numbers = [ -2, -5, 3, 0, 5, 8, 10 ];

// count even and positive numbers -> 2

for(const num of numbers) {
    if(num > 0 && num % 2 === 0) countEvenPos++
}