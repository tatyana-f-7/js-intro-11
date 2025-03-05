console.log('\n---------------TASK01---------------\n');

/*
Create 2 variables and assign them numbers.
Then, find the sum, subtraction, multiplication,
division and remainder of these 2 numbers.
*/

let n1 = 6;
let n2 = 4;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);



console.log('\n---------------TASK02---------------\n');

/*
Write a program that calculates and outputs
the area and the perimeter of a rectangle.
*/

let a = 2;
let b = 4;

let area = a * b;
let perimeter = 2 * (a + b);

console.log(`The area of rectangle is ${area}, the perimeter of a rectangle is ${perimeter}.`);



console.log('\n---------------TASK03---------------\n');

/*
An annual average salary for an SDET in the
United States is 120k. Write a program that
calculates and prints the monthly, bi-weekly
and weekly average amount that an SDET
makes in the United States.
*/

let avrgSal = 120000.00;

let monthlyAvrg = (avrgSal / 12).toFixed(2);
let biweekAvrg = (avrgSal / 26).toFixed(2);
let weekAvrg = (avrgSal / 52).toFixed(2);

console.log(`Monthly average salary is ${monthlyAvrg}`);
console.log(`Bi-weekly average salary is ${biweekAvrg}`);
console.log(`Weekly average salary is ${weekAvrg}`);