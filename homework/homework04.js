console.log('\n---------------TASK01---------------\n');

/*
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
*/

for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}



console.log('\n---------------TASK02---------------\n');

/*
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
*/

for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}



console.log('\n---------------TASK03---------------\n');

/*
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
*/

for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}



console.log('\n---------------TASK04---------------\n');

/*
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).

NOTE: Use loop!!!
*/

for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i ** 2}`);
}



console.log('\n---------------TASK05---------------\n');

/*
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).

Calculation => 1+2+3+4+5+6+7+8+9+10

NOTE: Use loop!!!
*/

let sum = 0

for(let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);



console.log('\n---------------TASK06---------------\n');

/*
Write a program that generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
*/

let randNum = Math.round(Math.random() * (10 - 1)) + 1;
let factorial = 1;

for(let i = randNum; i >= 1; i--) {
    factorial *= i;
}

console.log(`The random number is ${randNum} and its factorial is = ${factorial}`);



console.log('\n---------------TASK07---------------\n');

/*
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.

The program should also count how many attempts it 
takes to generate such a number.

Eventually, print the random number divisible by 5 with 
the number of attempts as below.
*/

let random;
let attempts = 0;

do {
  random = Math.round(Math.random() * (100 - 1)) + 1;
  attempts++;
} while (random % 5 !== 0);

console.log(`The random number is ${random} and it took ${attempts} attempts to generate it.`);



console.log('\n---------------TASK08---------------\n');

/*
Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
*/

const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(countries);

const sortedCountries = countries.sort();
console.log(sortedCountries);



console.log('\n---------------TASK09---------------\n');

/*
Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
*/

const dogs = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];
console.log(dogs);

let checkForPluto = dogs.includes('Pluto');
console.log(checkForPluto);



console.log('\n---------------TASK10---------------\n');

/*
Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
*/

const cats = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael' ];
console.log(cats.sort());

let checkNames = cats.includes('Garfield') && cats.includes('Felix');
console.log(checkNames);



console.log('\n---------------TASK11---------------\n');

/*
Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element
*/

const numbers = [ 10.5, 20.75, 70, 80, 15.75 ];
console.log(numbers);

for(let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}



console.log('\n---------------TASK12---------------\n');

/*
Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
*/

const officeSupp = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];
console.log(officeSupp);

let countBP = 0;

for(let i = 0; i <= officeSupp.length - 1; i++) {
    if (officeSupp[i].toLowerCase().startsWith('b') || officeSupp[i].toLowerCase().startsWith('p')) {
        countBP++;
    }
}

console.log(`Elements starting with 'B' or 'P' = ${countBP}`);

let countWords = 0;

for(let i = 0; i <= officeSupp.length - 1; i++) {
    if (officeSupp[i].toLowerCase().includes('book') || officeSupp[i].toLowerCase().includes('pen')) {
        countWords++;
    }
}

console.log(`Elemnts having 'book' or 'pen' = ${countWords}`);



console.log('\n---------------TASK13---------------\n');

/*
Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
*/

const nums = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];
console.log(nums);

let countMore_10 = 0;

for(let i = 0; i <= nums.length - 1; i++) {
    if(nums[i] > 10) {
        countMore_10++;
    }
}

console.log(`Elements that are more than 10 = ${countMore_10}`);

let countLess_10 = 0;

for(let i = 0; i <= nums.length - 1; i++) {
    if(nums[i] < 10) {
        countLess_10++;
    }
}

console.log(`Elements that are less than 10 = ${countLess_10}`);

let count10 = 0;

for(let i = 0; i <= nums.length - 1; i++) {
    if(nums[i] === 10) {
        count10++;
    }
}

console.log(`Elements that are 10 = ${count10}`);



console.log('\n---------------TASK14---------------\n');

/*
Create 2 arrays that store numbers below.
First array ->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
*/

const numbers1 = [ 5, 8, 13, 1, 2 ];
const numbers2 = [ 9, 3, 67, 1, 0 ];

console.log(`1st array is = ${numbers1}`);
console.log(`2nd array is = ${numbers2}`);

const numbers3 = [];

for(let i = 0; i <= numbers1.length - 1; i++) {
    numbers3.push(Math.max(numbers1[i], numbers2[i]));
}

console.log(`3rd array is = ${numbers3}`);



console.log('\n---------------TASK15---------------\n');

/*
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
*/

function firstDuplicate(arr) {
    for(let i = 0; i <= arr.length - 1; i++) {
        for(let j = i + 1; j <= arr.length - 1; j++) {
            if(arr[i] === arr[j]) { 
                return arr[i];
        }
    }
}
return -1;
}


console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 1, 2, 3 ]));
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]));



console.log('\n---------------TASK16---------------\n');

/*
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
*/




/*
Bilal, I didn't make this task right. I tried my best but couldn't figure it out unfortunately.
Below is the code that I created, though it doesn't work.
*/

function getDuplicates(arr) {
    let duplicates = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        for(let j = i + 1; j <= arr.length - 1; j++) {
            if(arr[i] === arr[j]) { 
                duplicates.push(arr[i]);
        }
    }
}
return duplicates;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));



console.log('\n---------------TASK17---------------\n');

/*
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
*/

function reverseStringWords(str) {
    const reversedWords = str.split(' ').map(str => str.split('').reverse().join(''));
    return reversedWords.join(' ');
}

console.log(reverseStringWords('Hello World'));
console.log(reverseStringWords('I like JavaScript'));
console.log(reverseStringWords('Hello'));
console.log(reverseStringWords(''));
console.log(reverseStringWords('   '));



console.log('\n---------------TASK18---------------\n');

/*
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 

Assume you will not be given negative numbers.
*/

function getEvens(num1, num2) {
    let evens = [];
    
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if(i % 2 === 0) evens.push(i);
    }
    return evens;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));



console.log('\n---------------TASK19---------------\n');

/*
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 

Assume you will not be given negative numbers.
*/

function getMultipleOf5(num1, num2) {
    let of5 = [];
    
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if(i % 5 === 0) of5.push(i);
    }
    return of5;
}

console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));



console.log('\n---------------TASK20---------------\n');

/*
Write a function named as fizzBuzz() which takes 2 number
arguments and returns a string composed with below 
requirements when invoked.

•You need to find all the numbers within the range of given 2 
numbers (both inclusive) and store them in a string from 
smallest to greatest number with a ' | ' separator for each 
number.

•You will need to convert numbers divisible by 3 to 'Fizz'

•You will need to convert numbers divisible by 5 to 'Buzz'

•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’

•The rest will stay the same.

NOTE: Make your code dynamic that works for any numbers.

Assume you will not be given negative numbers.
*/

function fizzBuzz(num1, num2) {
    let numbers = [];
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        numbers.push(i);
}
}

console.log(numbers(13, 18));