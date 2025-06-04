console.log('\n---------------TASK01---------------\n');

/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
*/

function toCamelCase(str) {
    let words = str.toLowerCase().split(' ');

    for(let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

console.log(toCamelCase('first name'));
console.log(toCamelCase('last  name'));
console.log(toCamelCase('  ZIP CODE'));
console.log(toCamelCase('I Learn Java Script'));
console.log(toCamelCase('helloWorld'));


console.log('\n---------------TASK02---------------\n');

/*
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
*/

function toSnakeCase(str) {
    return str.toLowerCase().split(' ').join('_');
}

console.log(toSnakeCase('first name'));
console.log(toSnakeCase('last  name'));
console.log(toSnakeCase('  I love Java Script'));
console.log(toSnakeCase('already_snake_case'));
console.log(toSnakeCase('hello'));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
*/

function alternatingCases(str) {
    let result = '';
    let letters = 0;
    for(let i = 0; i < str.length; i++) {
        let char = str.toLowerCase()[i];
        if(char >= 'a' && char <= 'z') {
            if(letters % 2 === 0) result += char.toUpperCase();
            else result += char.toLowerCase();
        }
        letters++;
    }
    return result;
}

console.log(alternatingCases('Hello'));
console.log(alternatingCases('basketball'));
console.log(alternatingCases('Tech Global'));
console.log(alternatingCases(''));
console.log(alternatingCases('123!@#aB'));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
*/

function isNeutral(str1, str2) {
    let result = '';

    for(let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];

        if(char1 === char2) result += char1;
        else result += '0';
    }

    return result;
}

console.log(isNeutral('-', '+'));
console.log(isNeutral('-+', '-+'));
console.log(isNeutral('-++-', '-+-+'));
console.log(isNeutral('--++--', '++--++'));
console.log(isNeutral('+++', '+++'));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
*/

function isTrueOrfalse(str) {
    let alphabetPositive = 'abcdefghijklm';
    let alphabetNegative = 'nopqrstuvwxyz';

    let positive = 0;
    let negative = 0;

    let words = str.split(' ');

    for(let i = 0; i < words.length; i++) {
        let word = words[i].trim;
    }

    let 
}
