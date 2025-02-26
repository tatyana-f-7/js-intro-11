console.log('\n---------------TASK01---------------\n');

/*
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
*/

let num1 = Math.round(Math.random() * (100 - 1)) + 1;
let num2 = Math.round(Math.random() * (100 - 1)) + 1;
let num3 = Math.round(Math.random() * (100 - 1)) + 1;
let average = (num1 + num2 + num3) / 3;

console.log(`Random numbers are ${num1}, ${num2}, ${num3}. Their average is ${average} and it's greater or equals 50 - ${average >= 50}`);



console.log('\n---------------TASK02---------------\n');

/*
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
*/

let number1 = Math.round(Math.random() * (3 - 1)) + 1;
let number2 = Math.round(Math.random() * (3 - 1)) + 1;
let number3 = Math.round(Math.random() * (3 - 1)) + 1;

console.log(`Random numbers are ${number1}, ${number2}, ${number3}`);
if(number1 == number2 == number3) {
    console.log('TRIPLE MATCH');
}
else if(number1 == number2 || number2 == number3 || number1 == number3) {
    console.log('DOUBLE MATCH');
}
else console.log('NO MATCH');



console.log('\n---------------TASK03---------------\n');

/*
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.
*/

function hasA(word) {
    return(word.includes('a') || word.includes('A'));
}
 console.log(hasA('Tech'));
 console.log(hasA('Global'));
 console.log(hasA(''));
 console.log(hasA('Apple'));




 console.log('\n---------------TASK04---------------\n');

 /*
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
 */

function doubleOrTripleWord(word) {
    if(word.length % 2 === 0) {
        return word.repeat(3);
}
else return word.repeat(2);
}

console.log(doubleOrTripleWord('Tech'));
console.log(doubleOrTripleWord('Apple'));
console.log(doubleOrTripleWord(''));
console.log(doubleOrTripleWord(' '));
console.log(doubleOrTripleWord('1'));
console.log(doubleOrTripleWord('22'));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named as firstWord() which takes a 
string str as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
*/
const firstWord = str => {
    str = str.trim();
    const firstSpaceOfStr = str.indexOf(' ');
    const firstWord = str.slice(0, firstSpaceOfStr);
    return firstWord;
}

console.log(firstWord('I like JavaScript'));

/*
function firstWord(word) {
    let splitWord = word.split(' ');
    return splitWord[0];
}

console.log(firstWord('Hello World'));
console.log(firstWord('I like JavaScript'));
console.log(firstWord('Hello'));
console.log(firstWord(''));
console.log(firstWord(' '));
*/



console.log('\n---------------TASK06---------------\n');

/*
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
*/

const lastWord = str => {
    str = str.trim();
    const lastSpaceOfStr = str.lastIndexOf(' ');
    const lastWord = str.slice(lastSpaceOfStr + 1);
    return lastWord;
}

console.log(lastWord('I like JavaScript'));

/*
function lastWord(word) {
    let splitWord1 = word.split(' ');
    return splitWord1.at(-1);
}

console.log(lastWord('Hello World'));
console.log(lastWord('I like JavaScript'));
console.log(lastWord('Hello'));
console.log(lastWord(''));
console.log(lastWord(' '));
*/



console.log('\n---------------TASK07---------------\n');

/*
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
*/

function firstLastWord(word) {
    let splitWord2 = word.split(' ');
    return splitWord2[0] + splitWord2.at(-1);
}

console.log(firstLastWord('Hello World'));
console.log(firstLastWord('I like JavaScript'));
console.log(firstLastWord('Hello'));
console.log(firstLastWord(''));
console.log(firstLastWord(' '));



console.log('\n---------------TASK08---------------\n');

/*
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

function startVowel(word) {
    let firstChar = word.trim().toLowerCase()[0];
    return ['a', 'e', 'i', 'o', 'u'].includes(firstChar);
}

console.log(startVowel('Hello'));
console.log(startVowel('Apple'));
console.log(startVowel('orange'));
console.log(startVowel(''));
console.log(startVowel(' '));
console.log(startVowel('123'));



console.log('\n---------------TASK09---------------\n');

/*
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
*/

const swap4 = str => {
    str = str.trim();
    if(str.length >= 8) {
    const first4 = str.slice(0, 4);
    const middle4 = str.slice(4, -4);
    const last4 = str.slice(-4);
    return last4  + middle4   + first4;
}
else return '';
}

console.log(swap4('123456789'));
console.log(swap4('123'));
console.log(swap4('TechGlobal'));

/*
function swap4(word) {
    if(word.trim().length >= 8){
        return word.slice(word.length-4) + word.slice (4, word.length-4 ) + word.slice(0,4);
    }
    else {
        return '';
    }
}

console.log(swap4('abc'));
console.log(swap4('JavaScript'));
console.log(swap4('TechGlobal'));
console.log(swap4(''));
console.log(swap4(' '));
console.log(swap4('Apple'));
*/



console.log('\n---------------TASK10---------------\n');

/*
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.
*/

const swapFirstLast = str => {
    str = str.trim();
    if(str.length >= 2) {
    const first = str.slice(0, str.indexOf(' ')); // I
    const middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1); //  like 
    const last = str.slice(str.lastIndexOf(' ') + 1); // JavaScript

    return last + middle + first;
    }
    else return '';
}

console.log(swapFirstLast('I like Javascript'));

/*
let swapFirstLastWord = (word) => {
    let wordCount =  word.trim().split(' ')
    return wordCount.length > 1 ? `${word.slice(word.trim().lastIndexOf(' '))}${word.slice(word.trim().indexOf(' '), word.trim().lastIndexOf(' '))} ${word.slice(0, word.trim().indexOf(' '))}`
            : ''; 
}

console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like JavaScript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord(' '));
console.log(swapFirstLastWord('Hello'));
console.log(swapFirstLastWord('Hello  '));
*/