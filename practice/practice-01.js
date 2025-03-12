console.log('\n---------------TASK01---------------\n');

/*
Write a program that generates a random number between 0 and 50
(both 0 and 50 are included).

Multiply number with 5 and print the result with below message.
*/

let random = Math.round(Math.random() * (50 - 0)) + 0;
let random5 = random * 5;

console.log(random);
console.log(`The random number * 5 = ${random5}`);



console.log('\n---------------TASK02---------------\n');

/*
Write a program that generates two random numbers between 1 and
10 (both 1 and 10 are included).

Find the min number.
Find the max number.
Find the absolute difference of the numbers.
*/

let randomNumber1 = Math.round(Math.random() * (10 - 1)) + 1;
let randomNumber2 = Math.round(Math.random() * (10 - 1)) + 1;

console.log(randomNumber1, randomNumber2);
console.log(`Min number = ${Math.min(randomNumber1, randomNumber2)}`);
console.log(`Max number = ${Math.max(randomNumber1, randomNumber2)}`);
console.log(`Difference = ${Math.abs(randomNumber1 - randomNumber2)}`);



console.log('\n---------------TASK03---------------\n');

/*
Write a program that generates a random number between 50 and
100 (both 50 and 100 are included).

Find the remainder of the number by 10.
*/

let randomNum = Math.round(Math.random() * (100 - 50)) + 50;

console.log(randomNum);
console.log(`The random number % 10 = ${randomNum % 10}`);



console.log('\n---------------TASK04---------------\n');

/*
Write a program that generates 5 random numbers between 1 and 10 (1 and
10 are included).

Calculate some points based on numbers generated. So, the points will be
calculated as below.

1st number will be multiplied by 5 and added as points.
2nd number will be multiplied by 4 and added as points.
3rd number will be multiplied by 3 and added as points.
4th number will be multiplied by 2 and added as points.
5th number will be multiplied by 1 and added as points.
*/

/*
My solution:

let num1 = Math.round(Math.random() * (10 - 1)) + 1;
let num2 = Math.round(Math.random() * (10 - 1)) + 1;
let num3 = Math.round(Math.random() * (10 - 1)) + 1;
let num4 = Math.round(Math.random() * (10 - 1)) + 1;
let num5 = Math.round(Math.random() * (10 - 1)) + 1;

let points = num1 * 5 + num2 * 4 + num3 * 3 + num4 * 2 + num5;

console.log(num1, num2, num3, num4, num5);
console.log(points);
*/

// Bilal's solution:

let score = 0;

let num1 = Math.floor(Math.random() * 10) + 1;
score += num1 * 5;
let num2 = Math.floor(Math.random() * 10) + 1;
score += num2 * 4
let num3 = Math.floor(Math.random() * 10) + 1;
score += num3 * 3;
let num4 = Math.floor(Math.random() * 10) + 1;
score += num4 * 2;
let num5 = Math.floor(Math.random() * 10) + 1;
score += num5;

console.log(num1, num2, num3, num4, num5);
console.log(score);





console.log('\n---------------TASK05---------------\n');

/*
Write a program that generates 4 random numbers as below.

1st number to be between 1 and 25 (both included).
2nd number to be between 26 and 50 (both included).
3rd number to be between 51 and 75 (both included).
4th number to be between 76 and 100 (both included).

Find the absolute difference between the max and min number.
Find the absolute difference between the second and third number.
Find the average of all 4 numbers.
*/

let ranNum1 = Math.round(Math.random() * (25 - 1)) + 1;
let ranNum2 = Math.round(Math.random() * (50 - 26)) + 26;
let ranNum3 = Math.round(Math.random() * (75 - 51)) + 51;
let ranNum4 = Math.round(Math.random() * (100 - 76)) + 76;

let max = Math.max(ranNum1, ranNum2, ranNum3, ranNum4);
let min = Math.min(ranNum1, ranNum2, ranNum3, ranNum4);

console.log(ranNum1, ranNum2, ranNum3, ranNum4);
console.log(`Difference of max and min = ${max - min}`);
console.log(`Difference of second and third = ${Math.abs(ranNum2 - ranNum3)}`);
console.log(`Average of all = ${(ranNum1 + ranNum2 + ranNum3 + ranNum4) / 4}`);