console.log('\n---------------TASK01---------------\n');

/*
Convert given Strings below to number data types and
find their sum, product, division, subtraction, remainder
and exponentiation.

let str1 = '5', str2 = '2'
*/

let str1 = '5';
let str2 = '2';

let num1 = Number(str1);
let num2 = Number(str2);

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}`);
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`);
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`);
console.log(`The subtraction of ${num1} and ${num2} is = ${num1 - num2}`);
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`);
console.log(`The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}`);



console.log('\n---------------TASK02---------------\n');

/*
Convert given Strings below to number data
types and find the greatest and smallest values
and find the average and absolute difference of
them.

let s1 = '200', s2 = '-50'
*/

let s1 = '200';
let s2 = '-50';

let n1 = Number(s1);
let n2 = Number(s2);

console.log(`The greatest value is = ${Math.max(n1, n2)}`);
console.log(`The smallest values is = ${Math.min(n1, n2)}`);
console.log(`The average is = ${(n1 + n2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(n1 - n2)}`);



console.log('\n---------------TASK03---------------\n');

/*
Write a program that generates 2 random numbers
between 1 and 50 (both 1 and 50 are included). Then
find the absolute difference of these numbers.
*/

let num3 = Math.round(Math.random() * (50 - 1)) + 1;
let num4 = Math.round(Math.random() * (50 - 1)) + 1;

console.log(`Test Data:
${num3}, ${num4}`);

console.log(`The absolute difference between numbers is = ${Math.abs(num3 - num4)}`);



console.log('\n---------------TASK04---------------\n');

/*
Write a program that generates 5 random numbers
between 1 and 50 (both 1 and 50 are included). Then
find the max and min of these numbers.
*/

let number1 = Math.round(Math.random() * (50 - 1)) + 1;
let number2 = Math.round(Math.random() * (50 - 1)) + 1;
let number3 = Math.round(Math.random() * (50 - 1)) + 1;
let number4 = Math.round(Math.random() * (50 - 1)) + 1;
let number5 = Math.round(Math.random() * (50 - 1)) + 1;

console.log(`Test Data:
${number1}, ${number2}, ${number3}, ${number4}, ${number5}`);

console.log(`The max value = ${Math.max(number1, number2, number3, number4, number5)}`);
console.log(`The min value = ${Math.min(number1, number2, number3, number4, number5)}`);



console.log('\n---------------TASK05---------------\n');

/*
Write a program that generates 3 random numbers
between 50 and 100 both included.

First print the numbers.

Then find the sum of these numbers.
*/

let n3 = Math.round(Math.random() * (100 - 50)) + 50;
let n4 = Math.round(Math.random() * (100 - 50)) + 50;
let n5 = Math.round(Math.random() * (100 - 50)) + 50;

console.log(`The number 1 = ${n3}`);
console.log(`The number 2 = ${n4}`);
console.log(`The number 3 = ${n5}`);

console.log(`the sum of numbers is = ${n3 + n4 + n5}`);



console.log('\n---------------TASK06---------------\n');

/*
Write a program that generates 3 random numbers
between 1 and 100 (1 and 100 are included) and find if
all the numbers are more than 25.

Print true if all numbers are greater than 25.

Print false if any of the numbers is less than or equals 25.
*/

let x = Math.round(Math.random() * (100 - 1)) + 1;
let y = Math.round(Math.random() * (100 - 1)) + 1;
let z = Math.round(Math.random() * (100 - 1)) + 1;

console.log(x, y, z);
console.log(x > 25 && y > 25 && z > 25);



console.log('\n---------------TASK07---------------\n');

/*
Assume you are given a name let name = 'David';

1. Print out the length of the name.
2. Find the first character in the name and print it.
3. Find the last character in the name and print it.
4. Find the first 3 characters in the name and print them
5. Find the last 3 characters in the name and print them.
*/

let name = 'David';

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name[0]}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);