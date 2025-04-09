console.log('\n---------------TASK01---------------\n');

/*
Write a program that extracts expected values from a given String using JS String functions.
*/

let str1 = 'I like apples and oranges';

console.log(str1.slice(7, 12).toUpperCase());

let str2 = 'JavaScript is not a scripting programming language';

console.log(str2.slice(0, 10));
console.log(str2.slice(0, str2.indexOf(' ')));
console.log(str2.split(' ')[0]);

let str3 = 'I don\'t like books';
let splitStr3 = str3.split(' ');
 
console.log(str3.slice(0, 2) + str3.slice(8))
console.log(splitStr3[0] + ' ' + splitStr3[2] + ' '  + splitStr3[3]);



console.log('\n---------------TASK02---------------\n');

/*
Assume that you are given a String of any length.
Find:
 - The length of the String.
 - First char in the String.
 - Last char in the String.
 - Check if the String contains any vowel letters.
         - If it has any vowel, then print true.
         - Else, print false.
         Vowels = a, e, i, u, o, A, E, I, U, O.
*/

let s1 = 'JavaScript';

console.log(s1.length);
console.log(s1[0]);
console.log(s1.at(-1));
console.log(s1.toLowerCase().includes('a') || s1.toLowerCase().includes('e') || s1.toLowerCase().includes('i') || s1.toLowerCase().includes('u') || s1.toLowerCase().includes('o'));



console.log('\n---------------TASK03---------------\n');

/*
Assume that you are given A String of any odd length.
Find the middle character for the given String.
*/

let s2 = 'civic'

console.log(s2[Math.floor(s2.length / 2)]);



console.log('\n---------------TASK04---------------\n');

/*
Assume that you are given a String of any even length including empty.
Find the middle 2 characters for the given String.
*/

let s3 = 'abcd'

console.log(s3.slice((s3.length / 2 - 1), (s3.length / 2 + 1)));



console.log('\n---------------TASK05---------------\n');

/*
Write a program that divides the given String. Assume the length of the String will at least
be 4.

 - Find and print the first two characters.
 - Find and print the last two characters.
 - Find and print all the middle characters other than first and last 2 characters.
*/

let s4 = 'JavaScript';

let first2 = s4.slice(0, 2);
let middle = s4.slice(2, -2);
let last2 = s4.slice(-2);

console.log(first2);
console.log(middle);
console.log(last2);



console.log('\n---------------TASK06---------------\n');

/*
Assume that you are given a String that has at least 2 characters.
If first 2 and last 2 characters are same, then print true. Otherwise, print false.
*/

let s5 = 'JavaScript';

let first = s5.slice(0, 2);
let last = s5.slice(-2);

console.log(first, last);
console.log(first === last);



console.log('\n---------------TASK07---------------\n');

/*
Write a program that gets rid of first and last characters of given two String values. Then, add these two
String values to each other and print the result.
*/

let s61 = 'Orange';
let s62 = '6';

let newS = s61.slice(1, -1) + s62.slice(1, -1);
console.log(newS);



console.log('\n---------------TASK08---------------\n');

/*
Write a program that checks if a given String starts and ends with xx.
 - If given String starts and ends with xx, then print true.
 - Otherwise, print false.
*/

let s7 = 'xxbluexx';

console.log(s7.startsWith('xx') && s7.endsWith('xx'));



console.log('\n---------------TASK09---------------\n');

/*
Write a program that swaps the first and last word of a given sentence as a String.
*/

let s8 = 'I like Apple';

let firstS8 = s8.slice(0, s8.indexOf(' '));
let middleS8 = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1);
let lastS8 = s8.slice(s8.lastIndexOf(' ') + 1);

let newS8 = lastS8 + ' ' + middleS8 + ' ' + firstS8;

console.log(newS8);


console.log('\n---------------TASK10---------------\n');

/*
Write a program that counts the number of words in a given sentence as a String.
Assume you will not be given redundant whitespaces and at least one word.
*/

let s9 = ' JavaScript is nice to learn';

console.log(s9.trim().split(' ').length);








