console.log('\n---------------TASK01---------------\n');

/*
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.

1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/

function calculateTotalPrice2(items) {
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };

    let total = 0;
    
    for(let item in items) {
        total += prices[item] * items[item]
    }

    return total
}

console.log(calculateTotalPrice2({apple: 3, mango: 1}));
console.log(calculateTotalPrice2({apple: 2, pineapple: 1, orange: 3}));
console.log(calculateTotalPrice2({apple: 0, mango: 0, orange: 0}));
console.log(calculateTotalPrice2({apple: 1, pineapple: 1, orange: 0, mango: 1}));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named calculateTotalPrice2() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.

1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25

Note: There will be some discounts as below .
There will be %50 discount for every second Apple 
There will be 1 free Mango if customer gets 3. So, fourth one is free.
*/

function calculateTotalPrice2(items) {
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };

    let total = 0;
    
    for(let item in items) {
        const noSale = items[item] * prices[item]
        let sale = 0;

        if(item === 'apple') sale = (Math.floor(items[item] / 2) * prices[item]) / 2;
        else if(item === 'mango') sale = (Math.floor(items[item] / 4) * prices[item]);

        total += noSale - sale;
    }

    return total === 0 ? total : total.toFixed(2);
}

console.log(calculateTotalPrice2({apple: 3, mango: 5}));
console.log(calculateTotalPrice2({apple: 4, mango: 8, orange: 3}));
console.log(calculateTotalPrice2({apple: 0, pineapple: 0, orange: 0}));
console.log(calculateTotalPrice2({apple: 4, pineapple: 1, orange: 1, mango: 3}));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named nthWord() which takes a string and a number 
arguments and returns the nth word in the string. 

Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string.
*/

function nthWord(str, num) {
    return str.split(' ')[num - 1] || '';
}

console.log(nthWord('I like programming languages', 2));
console.log(nthWord('QA stands for Quality Assurance', 4));
console.log(nthWord('Hello World', 3));
console.log(nthWord('Javascript', 1));
console.log(nthWord('', 1));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise. 

Note: An armstrong number is a number that is equal to the sum of its own 
digits raised to the power of the number of digits. In other words, an n-digit 
number is an Armstrong number if the sum of its digits, each raised to the nth 
power, is equal to the number itself.

Let's take an example to understand it better. Consider the number 153. 
To determine if 153 is an armstrong number, we need to check if the sum of 
its digits, each raised to the power of the number of digits, equals the original 
number. 
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
In this case, the sum of the individual digits raised to the power of 3 (the 
number of digits in 153) is equal to the original number, which means 153 is 
an armstrong number.
*/

const isArmstrong = num => num.toFixed().split('').reduce((total, i) => total + Math.pow(i, num.toFixed().length), 0) === num;

console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(153));
console.log(isArmstrong(1111));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.

Note: Do not convert number to string to complete the task.
*/

function reverseNumber(num) {
    let reversed = 0;

    for(let i = num; i > 0; i = Math.floor(i / 10)) {
        reversed = (reversed * 10) + (i % 10);
    }

    return reversed;
}

console.log(reverseNumber(371));
console.log(reverseNumber(123));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));



console.log('\n---------------TASK06---------------\n');

/*
Write a function named doubleOrTriple() which takes an array of numbers as 
argument and a boolean value. It will return the array elements doubled if true 
or tripled if the boolean value is false. 
*/

const doubleOrTriple = (arr, isDouble) => isDouble ? arr.map((el) => el * 2) : arr.map((el) => el * 3);

console.log(doubleOrTriple([1, 5, 10], true));
console.log(doubleOrTriple([3, 7, 2], false));
console.log(doubleOrTriple([-1, -2], true));
console.log(doubleOrTriple([0], false));
console.log(doubleOrTriple([-1, 0, 1], true));



console.log('\n---------------TASK07---------------\n');

/*
Write a function named splitString() which takes a string and a number 
arguments and returns the string back split by the given number.

Note: Return empty string if the string shorter than splitting number or the 
string length is not divisible by the given number.
*/

const splitString = (str, num) => (str.length % num !== 0 || num > str.length) ? '' : str.slice(0, num) + ' ' + str.slice(num);

console.log(splitString('JavaScript', 5));
console.log(splitString('Java', 2));
console.log(splitString('Automation', 3));
console.log(splitString('Hello', 6));
console.log(splitString('12', 1));