console.log('\n---------------TASK01---------------\n');

/*
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
*/

const noSpace = (str) => str.split(' ').join('');

console.log(noSpace(''));
console.log(noSpace('JavaScript'));
console.log(noSpace('  Hello  '));
console.log(noSpace(' Hello World '));
console.log(noSpace('Tech Global'));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

function replaceFirstLast(str) {

    str = str.trim();

    if(str.length > 2) {
        let first = str[0];
        let middle = str.slice(1, str.length - 1);
        let last = str[str.length - 1];
        
        return last + middle + first;
    }
    else return '';
}

console.log(replaceFirstLast(''));
console.log(replaceFirstLast('Hello'));
console.log(replaceFirstLast('Tech Global'));
console.log(replaceFirstLast('A'));
console.log(replaceFirstLast('   A   '));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/

function hasVowel(str) {
    str = str.toLowerCase();
    return /[aeoui]/.test(str);
}

console.log(hasVowel(''));
console.log(hasVowel('Javascript'));
console.log(hasVowel('Tech Global'));
console.log(hasVowel('1234'));
console.log(hasVowel('ABC'));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"

NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/

function checkAge(num) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - num;
    
    if (age < 16) {
        return 'AGE IS NOT ALLOWED';
    } 
    else if (age >= 16 && age <= 120) {
        return 'AGE IS ALLOWED';
    } 
    else return 'AGE IS NOT VALID';
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers.
*/

const averageOfEdges = (n1, n2, n3) => (Math.max(n1, n2, n3) - Math.min(n1, n2, n3)) / 2;

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));



console.log('\n---------------TASK06---------------\n');

/*
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
*/

function noA(arr) {
    return arr.map(str => {
        if(str[0].toLowerCase() === 'a') {
            return '###';
        }
        else return str;
    })
}

console.log(noA(["javascript", "hello", "123", "xyz"]));
console.log(noA(["apple", "123", "ABC", "javascript"]));
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));



console.log('\n---------------TASK07---------------\n');

/*
Write a function named no3and5() which takes an array of integer numbers 
as argument and will return a new array with elements replaced by conditions 
below.

If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
*/

function no3and5(arr) {
    return arr.map(number => {
        if (number % 3 === 0 && number % 5 === 0) return 101;
            else if (number % 5 === 0) return 99;
            else if (number % 3 === 0) return 100;
            else return number;
    });
}

console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));



console.log('\n---------------TASK08---------------\n');

/*
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.

NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
*/

const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while(d < num){
        if(num % d === 0) return false;
        d+=2;
    }

    return true;

}

const countPrimes = (arr) => {
    let counter = 0;
    for(let num of arr) {
        if(isPrime(num)) counter++;
    }
    return counter;
}

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));



console.log('\n---------------TASK09---------------\n');

/*
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
*/



console.log('\n---------------TASK10---------------\n');

/*
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
*/



console.log('\n---------------TASK11---------------\n');

/*
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
*/



console.log('\n---------------TASK12---------------\n');

/*
Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.

NOTE: Be careful when there is multiple min numbers.
*/



console.log('\n---------------TASK13---------------\n');

/*
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
*/


















