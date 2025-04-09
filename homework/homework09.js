console.log('\n---------------TASK01---------------\n');

/*
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself.
*/

function fizzBuzz1(num) {
    return num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' :
    num % 3 === 0 ? 'Fizz' :
    num % 5 === 0 ? 'Buzz' :
    num;
}

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
*/

function fizzBuzz2(num) {
    let result = [];

    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        else if(i % 3 === 0) result.push('Fizz');
        else if(i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(2));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
*/

function findSumNumbers(str) {
    let numbers = str.match(/\d+/g);
    if(!numbers) return 0;

    let sum = numbers.reduce((total, num) => total + parseInt(num), 0);

    return sum;
}

console.log(findSumNumbers('abc$'));
console.log(findSumNumbers('a1b4c 6#'));
console.log(findSumNumbers('ab110c045d'));
console.log(findSumNumbers('525'));
console.log(findSumNumbers('3 for 10 dollars'));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
*/

function findBiggestNumber(str) {
    let numbers = str.match(/\d+/g);
    if(!numbers) return 0;

    let biggestNum = Math.max(...numbers.map(Number));
    return biggestNum;
}

console.log(findBiggestNumber('abc$'));
console.log(findBiggestNumber('a1b4c 6#'));
console.log(findBiggestNumber('ab110c045d'));
console.log(findBiggestNumber('525'));
console.log(findBiggestNumber('3 for 10 dollars'));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String.

NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
*/

function countOccurencesOfCharacters(str) {

}



console.log('\n---------------TASK06---------------\n');

/*
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

function fibonacciSeries1(n) {

}



console.log('\n---------------TASK07---------------\n');

/*
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.

REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

function fibonacciSeries2(n) {

}



console.log('\n---------------TASK08---------------\n');

/*
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.

NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
*/

function findUniques(arr1, arr2) {

}



console.log('\n---------------TASK09---------------\n');

/*
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 

NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
*/

function isPowerOf3(num) {
    if(num <= 0) return false;

    while(num > 1) {
        if(num % 3 !== 0) return false;
        return true
    }
}

console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));
