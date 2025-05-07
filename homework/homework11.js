console.log('\n---------------TASK01---------------\n');

/*
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
*/

function countPalindrome(str) {
    let count = 0;
    const words = str.toLowerCase().split(' ');

    for (let word of words) {
        if(word === word.split('').reverse().join('')) count++;
    }

    return count;
}

console.log(countPalindrome('Mom and Dad'));
console.log(countPalindrome('See you at noon'));
console.log(countPalindrome('Kayak races attracts racecar drivers'));
console.log(countPalindrome(''));
console.log(countPalindrome('No palindrome here'));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false.
*/

function sum(numbers, value) {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(value === true && i % 2 === 0) sum += numbers[i];
        else if(value === false && i % 2 !== 0) sum += numbers[i];
    }
return sum;
}

console.log(sum([1, 5, 10], true));
console.log(sum([3, 7, 2, 5, 10], false));
console.log(sum([-1, 1, -2, 2], true));
console.log(sum([0, -1, 15, 1], false));
console.log(sum([1, 2, 3, 4, -4], true));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters.
*/

function nthChars(str, num) {
    let result = '';
    
    for(let i = num -1; i < str.length; i += num) result += str[i];

    return result;
}

console.log(nthChars('Java', 2));
console.log(nthChars('JavaScript', 5));
console.log(nthChars('Java', 3));
console.log(nthChars('Hi', 4));
console.log(nthChars('0123456789', 2));



console.log('\n---------------TASK04---------------\n'); // Couldn't figure this one out

/*
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.

NOTE: This method is case-insensitive and ignore the white spaces.
*/

function canFormString(str1, str2) {
    str1 = str1.toLowerCase;
    str2 = str2.toLowercase;

    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        
    }
}



console.log('\n---------------TASK05---------------\n');

/*
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.

NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.

NOTE: This method is case-insensitive and ignore the white spaces.
*/

function isAnagram(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    if(s1.length !== s2.length) return false;

    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');

    return sortedS1 === sortedS2;
}

console.log(isAnagram('Apple', 'Peach'));
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('astronomer', 'moon starer'));
console.log(isAnagram('CINEMA', 'iceman'));
console.log(isAnagram('123', '1234'));



console.log('\n---------------TASK06---------------\n');

/*
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false.
*/

function count(numbers, value1) {
    let count = 0;

    for(let num of numbers) {
        if(value1 === true && num % 2 === 0) count++;
        else if(value1 === false && num % 2 !== 0) count++;
    }

    return count;
}

console.log(count([1, 5, 10], true));
console.log(count([3, 7, 2, 5, 10], false));
console.log(count([-1, 1, -2, 2], true));
console.log(count([0, -1, 15, 1], false));
console.log(count([1, 2, 3, 4, -4], true));



console.log('\n---------------TASK07---------------\n');

/*
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return -1 if the given 
string does not have any digits. Ignore negative numbers.
*/

function sumDigitsDouble(str) {
    let sum = 0;
    let digit = false;

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if(char >= '0' && char<= '9') {
            sum += Number(char);
            digit = true;
        }
    }

    if(digit) return sum * 2;
    else return -1;
}

console.log(sumDigitsDouble('Javascript'));
console.log(sumDigitsDouble('23abc45'));
console.log(sumDigitsDouble('Hi-23'));
console.log(sumDigitsDouble('ab12'));
console.log(sumDigitsDouble('n0numh3r3'));



console.log('\n---------------TASK08---------------\n'); // Couldn't figure this one out

/*
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
*/

function countOccurence(str1, str2) {
    let count = 0;


}