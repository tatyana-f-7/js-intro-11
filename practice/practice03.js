console.log('\n---------------TASK01---------------\n');

/*
Write a function named as tripleWord() which takes a string word as an argument and
returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word.
*/

const tripleWord = (str) => str.repeat(3);

console.log(tripleWord('Tech'));
console.log(tripleWord('Global'));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named as has4() which takes a string word as an argument and returns true
if given string has at least 4 characters and false otherwise when invoked.
*/

const has4 = (str) => str.length >= 4;

console.log(has4('Tech'));
console.log(has4('Global'));
console.log(has4(''));
console.log(has4('12345'));
console.log(has4('abc'));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named as celciusToFahrenheit() which takes a number to be considered as
Celsius value and returns the Fahrenheit value when invoked.

Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the
conversion from Celsius to Fahrenheit.
*/

const celciusToFahrenheit = (num) => (num * 9) / 5 + 32;

console.log(celciusToFahrenheit(20));
console.log(celciusToFahrenheit(25));
console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(-10));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named as kgToPounds() which takes a number to be considered as
Kilograms value and returns the Pounds value when invoked.

Conversion Formula: The function uses the formula kilogram * 2.2 to perform the conversion
from Kilograms to Pounds.
*/

const kgToPounds = (num) => num * 11 / 5; // 2.2 + 2.2 + 2.2 + 2.2 + 2.2 = 11 / 5 = 2.2

console.log(kgToPounds(1));
console.log(kgToPounds(20));
console.log(kgToPounds(75));
console.log(kgToPounds(100));



console.log('\n---------------TASK05---------------\n');

/*
Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the
area and perimeter of a rectangle when invoked.

NOTE: Assume the sides of the rectangle are x and y.

Conversion Formula: Area = x * y; Perimeter = 2 * (x + y).
*/

const rectangleArea = (x, y) => x * y;
const rectanglePerimeter = (x, y) => 2 * (x + y);

console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));

console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));



console.log('\n---------------TASK06---------------\n');

/*
Write 2 functions named as squareArea() and squarePerimeter() which calculate the area
and perimeter of a square when invoked.

NOTE: Assume the side of the square is x.

Conversion Formula: Area = x * x; Perimeter = 4 * x.
*/

const squareArea = (x) => x ** 2;
const squarePerimeter = (x) => 4 * x;

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));

console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));
