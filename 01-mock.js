console.log('\n---------------TASK01---------------\n');


/*
Write a program that generates a random number between 1 and 10 (both inclusive).
 If the random number is even, print true. Otherwise, print false.
 */


 let randNum = Math.round(Math.random() * (10 - 1)) + 1;
 console.log(`Is number ${randNum} even? - ${randNum % 2 === 0}`);



 console.log('\n---------------TASK02---------------\n');

 /*
 Write a program that generates a random number between 1 and 10 (both inclusive).
 If the random number is odd, print true. Otherwise print false.
 */

let number = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`Is number ${number} odd? - ${number % 2 >= 1}`);



console.log('\n---------------TASK03---------------\n');

/*Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is positive, print true.
Otherwise, print false
*/

let num = Math.round(Math.random() * (5 - (-5))) + (-5);
console.log(`Is random number ${num} positive? - ${num > 0}`);


console.log('\n---------------TASK04---------------\n');

/*
Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is negative, print true.
Otherwise, print false.
*/

let num1 = Math.round(Math.random() * (5 - (-5))) + (-5);
console.log(`Is random number ${num1} negative? - ${num1 < 0}`);


console.log('\n---------------TASK05---------------\n');

/*
Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number divisible by 5, print true.
Otherwise, print false.
*/

let num2 = Math.round(Math.random() * (50 - 1)) + 1;
console.log(`Is random number ${num2} divisible by 5? - ${num2 % 5 === 0}`);


console.log('\n---------------TASK06---------------\n');

/*Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 7, print true.
Otherwise, print false.
*/

let num3 = Math.round(Math.random() * (50 - 1)) + 1;
console.log(`Is random number ${num3} divisible by 7? - ${num3 % 7 === 0}`);



console.log('\n---------------TASK07---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate sum of the numbers and print it.
*/

let number1 = Math.round(Math.random() * (10 - 1)) + 1;
let number2 = Math.round(Math.random() * (10 - 1)) + 1;
let sum = number1 + number2;

console.log(`The sum of random numbers ${number1} and ${number2} = ${sum}`);


console.log('\n---------------TASK08---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the absolute difference of the numbers and print it.
*/

let number3 = Math.round(Math.random() * (10 - 1)) + 1;
let number4 = Math.round(Math.random() * (10 - 1)) + 1;
let absDiff = Math.abs(number3 - number4);

console.log(`The absolute difference of numbers ${number3} and ${number4} = ${absDiff}`);


console.log('\n---------------TASK09---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the product of the numbers and print it.
*/

let num4 = Math.round(Math.random() * (10 - 1)) + 1;
let num5 = Math.round(Math.random() * (10 - 1)) + 1;
let product = num4 * num5;

console.log(`The product of numbers ${num4} and ${num5} = ${product}`);


console.log('\n---------------TASK10---------------\n');

/*
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the square of the number and print it.
*/

let num6 = Math.round(Math.random() * (10 - 1)) + 1;
let square = num6 ** 2;

console.log(`The square of random number ${num6} = ${square}`);

console.log('\n---------------TASK11---------------\n');

/*
Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the cube of the number and print it.
*/

let num7 = Math.round(Math.random() * (10 - 1)) + 1;
let cube = num7 ** 3;

console.log(`The cube of number ${num7} = ${cube}`);


console.log('\n---------------TASK12---------------\n');

/*
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered
as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals to 1.6 kilometers.
*/

let mile = Math.round(Math.random() * (10 - 1)) + 1;
let km = mile * 1.6;

console.log(`${mile} miles = ${km} kilometers`);


console.log('\n---------------TASK13---------------\n');

/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered
as a kilogram unit.
consvert kilogram unit to pounds and print it.
Please assume that 1 kilogram equals 2.2 pounds.
*/

let kg = Math.round(Math.random() * (100 - 1)) + 1;
let lbs = kg * 2.2;

console.log(`${kg} kilograms = ${lbs} pounds`);


console.log('\n---------------TASK14---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.
*/

let num8 = Math.round(Math.random() * (3 - 1)) + 1;
let num9 = Math.round(Math.random() * (3 - 1)) + 1;

console.log(num8, num9);
console.log(num8 == num9);


console.log('\n---------------TASK15---------------\n');

/*
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered
as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
*/

let age = Math.round(Math.random() * (100 - 1)) + 1;

console.log(`Your age is ${age}.`);
console.log(`Are you 16 or older? - ${age>= 16}`);


console.log('\n---------------TASK16---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the greates of the numbers and print it.
*/

let number5 = Math.round(Math.random() * (10 - 1)) + 1;
let number6 = Math.round(Math.random() * (10 - 1)) + 1;
let bigNumber = Math.max(number5, number6);

console.log(`${number5}, ${number6} -> ${bigNumber}`);


console.log('\n---------------TASK16---------------\n');

/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.
*/

let number7 = Math.round(Math.random() * (10 - 1)) + 1;
let number8 = Math.round(Math.random() * (10 - 1)) + 1;
let number9 = Math.round(Math.random() * (10 - 1)) + 1;
let maxNumber = Math.max(number7, number8, number9);

console.log(`${number7}, ${number8}, ${number9} -> ${maxNumber}`);


console.log('\n---------------TASK17---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it.
*/

let n1 = Math.round(Math.random() * (10 - 1)) + 1;
let n2 = Math.round(Math.random() * (10 - 1)) + 1;
let minNum = Math.min(n1, n2);

console.log(`${n1}, ${n2} -> ${minNum}`);


console.log('\n---------------TASK18---------------\n');

/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Find the smallest of the numbers and print it.
*/

let ran1 = Math.round(Math.random() * (10 - 1)) + 1;
let ran2 = Math.round(Math.random() * (10 - 1)) + 1;
let ran3 = Math.round(Math.random() * (10 - 1)) + 1;
let minRan = Math.min(ran1, ran2, ran3);

console.log(`${ran1}, ${ran2}, ${ran3} -> ${minRan}`);


console.log('\n---------------TASK19---------------\n');

/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.
*/

let random1 = Math.round(Math.random() * (10 - 1)) + 1;
let random2 = Math.round(Math.random() * (10 - 1)) + 1;
let random3 = Math.round(Math.random() * (10 - 1)) + 1;
let randomAvrg = ((random1 + random2 + random3) / 3).toFixed(2);

console.log(random1, random2, random3);
console.log(randomAvrg);


console.log('\n---------------TASK20---------------\n');

/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
*/

let ranNum1 = Math.round(Math.random() * (10 - 1)) + 1;
let ranNum2 = Math.round(Math.random() * (10 - 1)) + 1;
let ranNum3 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(ranNum1, ranNum2, ranNum3);

let max = Math.max(ranNum1, ranNum2, ranNum3);
let min = Math.min(ranNum1, ranNum2, ranNum3);
console.log(max, min);

console.log(`Absolute difference = ${max - min}`);


console.log('\n---------------TASK21---------------\n');

/*
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.

1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
*/

let testNum = Math.round(Math.random() * (100 - 1)) + 1;
console.log(testNum);

if(testNum <= 25) console.log('1st quarter');
else if(testNum >= 26 && testNum <= 50) console.log('2nd quarter');
else if(testNum >= 51 && testNum <= 75) console.log('3rd quarter');
else console.log('4th quarter');


console.log('\n---------------TASK22---------------\n');

/*
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
*/

let testN = Math.round(Math.random() * (100 - 1)) + 1;
console.log(testN);

if(testN <= 50) console.log('1st half');
else console.log('2nd half');


console.log('\n---------------TASK23---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
*/

let testNumber1 = Math.round(Math.random() * (10 - 1)) + 1;
let testNumber2 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(testNumber1, testNumber2);

console.log(`Is sum even? -> ${(testNumber1 + testNumber2) % 2 === 0}`);


console.log('\n---------------TASK24---------------\n');

/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false.
*/

let test1 = Math.round(Math.random() * (10 - 1)) + 1;
let test2 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(test1, test2);

console.log(`Is product odd? -> ${(test1 * test2) % 2 > 0}`);


console.log('\n---------------TASK24---------------\n');

/*
Write a function named as rectangleArea() which calculates the area of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion formula : Area = x*y.
*/

function rectangleArea(x, y) {
    return x * y;
}

console.log(rectangleArea(5, 6));


console.log('\n---------------TASK25---------------\n');

/*
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion formula: Perimeter=2*(x+y).
*/

function rectanglePerimeter(x, y) {
    return 2 * (x + y);
}

console.log(rectanglePerimeter(2, 3));


console.log('\n---------------TASK26---------------\n');

/*
Write a function named squareArea() which calculates the area of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion formula: Area=x*x.
*/

const squareArea = function (x) {
return x * x;
}

console.log(squareArea(3));


console.log('\n---------------TASK27---------------\n');

/*
Write a function named squarePerimeter() which calculates the perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion formula: Perimeter=4*x.
*/

const squarePerimeter = function(x) {
    return 4 * x;
}

console.log(squarePerimeter(2));


console.log('\n---------------TASK28---------------\n');

/*
Write a function named as doubleWord() which takes a string word as an argument and returns the
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
*/

const doubleWord = function(word) {
    return word.repeat(2);
}

console.log(doubleWord('taxi'));


console.log('\n---------------TASK29---------------\n');

/*
Write a function named as firstCharacter() which takes a string word as an argument and returns the
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/

const firstCharacter = function(word) {
    return word[0];
}

console.log(firstCharacter('TechGlobal'));


console.log('\n---------------TASK30---------------\n');

/*
Write a function named as firstTwoCharacters() which takes a string word as an argumnet and returns
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2  or more characters, then return the given string back.
*/

const firstTwoCharacters = (word) => {
    if(word.length < 2) return word;
    else return word.slice(0, 2);
}

console.log(firstTwoCharacters('abcd'));
console.log(firstTwoCharacters('Tundra'));
console.log(firstTwoCharacters('a'));


console.log('\n---------------TASK31---------------\n');

/*
Write a function named as lastCharacter() which takes a string word as an argument and returns the last
character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/

const lastCharacter = (word) => word.slice(-1);

console.log(lastCharacter('Apple'));
console.log(lastCharacter('TechGlobal'));


console.log('\n---------------TASK32---------------\n');

/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

const lastTwoCharacters = (word) => word.length < 2 ? word : word.slice(-2);

console.log(lastTwoCharacters('Tech'));
console.log(lastTwoCharacters('Global'));
console.log(lastTwoCharacters('a'));


console.log('\n---------------TASK33---------------\n');

/*
Write a function named as firstLast() which takes a string word as an argument and returns the first and
the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function firstLast(word) {
    if(word.length < 2) return word;
    else return word[0] + word.slice(-1);
}

console.log(firstLast('Tech'));
console.log(firstLast('Global'));
console.log(firstLast(''));
console.log(firstLast('a'));


console.log('\n---------------TASK33---------------\n');

/*
Write a function names as hasFive() whcich takes a string word as an argument and returns true if given
string has at least 5 characters and false otherwise when invoked.
*/

const hasFive = (word) => word.length >= 5;

console.log(hasFive('Tech'));
console.log(hasFive('Global'));
console.log(hasFive(''));


console.log('\n---------------TASK34---------------\n');

/*
Write a function named as middle() which takes a string word as an argument and returns the middle
character if the string has odd length, and returns the middle two characters if the string has even
length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/

function middle(word) {
    if(word.length < 1) return word;
    else if(word.length % 2 === 0) return word.slice((word.length / 2 - 1), (word.length / 2 + 1));
    else return word[(word.length - 1) / 2];
}

console.log(middle('Tech'));
console.log(middle('Global'));
console.log(middle(''));
console.log(middle('a'));


console.log('\n---------------TASK35---------------\n');

/*
Write a function named as longer() which takes two string words as arguments and returns the string
that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
*/

const longer = (word1, word2) => word1.length === word2.length || word1.length > word2.length ? word1 : word2;

console.log(longer('Tech', 'Global'));
console.log(longer('cat', 'dog'));


console.log('\n---------------TASK36---------------\n');

/*
Write a function named as shorter() which takes two string words as arguments and returns the string
that has less characters when invoked.
NOTE: If both of the words have the same length, then return the second string.
*/

const shorter = (word3, word4) => word3.length === word4.length || word3.length > word4.length ? word4 : word3;

console.log(shorter('Tech', 'Global'));
console.log(shorter('cat', 'dog'));


console.log('\n---------------TASK37---------------\n');

/*
Write a function named concat() which takes two string words as arguments and returns the words
concatenated when invoked.
NOTE: Concatenation should always be as first string + second string.
*/

const concat = (string1, string2) => string1 + string2;

console.log(concat('hot', 'dog'));


console.log('\n---------------TASK38---------------\n');

/*
Write a function named as startsVowel() which takes a string word as argument and returns true if
given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
*/
const startsVowel = (word) => 'AEOUIaeoui'.includes(word[0]);

console.log(startsVowel('Tech'));
console.log(startsVowel('Apple'));
console.log(startsVowel('abc'));





























