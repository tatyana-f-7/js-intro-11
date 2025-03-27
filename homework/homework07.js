console.log('\n---------------TASK01---------------\n');

/*
Write a function named hasUpperCase() which takes a string argument and return true if there is an
uppercase letter and false otherwise.
*/

function hasUpperCase(str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            return true;
        }
}
return false;
}


console.log(hasUpperCase('javascript'));
console.log(hasUpperCase('John'));
console.log(hasUpperCase('$125.0'));
console.log(hasUpperCase(''));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named noDigit() which takes a string argument and returns a new string with all
digits removed from the original string​.
*/

const noDigit = (str) => str.split('').filter(char => isNaN(char)).join('');

console.log(noDigit(''));
console.log(noDigit('Javascript'));
console.log(noDigit('123Hello'));
console.log(noDigit('123Hello World149'));
console.log(noDigit('123Tech456Global149'));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named noVowel() which takes a string argument and returns a new string with all
vowels removed from the original string​.
*/

const noVowel = (str) => str.replace(/[AEIOUaeiou]/g, '');

console.log(noVowel('TechGlobal'));
console.log(noVowel('AEOxyz'));
console.log(noVowel('Javascript'));
console.log(noVowel(''));
console.log(noVowel('125$'));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named no13() which takes an array of numbers as argument and return a new array
with all 13s replaced with 0s. 
*/

const no13 = (arr) => arr.map(num => num === 13 ? 0 : num);

console.log(no13([1, 2, 3, 4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13, 13, 13]));
console.log(no13([]));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named middleInt() which takes three number arguments and return the middle number.
*/

function middleInt(num1, num2, num3) {
    let numbers = 
}



console.log('\n---------------TASK06---------------\n');

/*
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits
from the original string. 
*/



console.log('\n---------------TASK07---------------\n');

/*
Write a function named arrFactorial() which takes an array of numbers as argument and return the
array with every number replaced with their factorials.
*/

function arrFactorial(arr) {
    function factorial(num) {
        let result = 1;
        for(let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    return arr.map(num => factorial(num));
}

console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));



console.log('\n---------------TASK08---------------\n');

/*
Write a function named categorizeCharacters() which takes a string word as argument and return an
array as letters at index of 0, digits at index of 1 and specials at index of 2. 
*/










