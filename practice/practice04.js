console.log('\n---------------TASK01---------------\n');

/*
Assume you are given 2 numbers to be 0 or 1.
Print true if they are same number.
Otherwise, print false.
*/

let a = 1;
let b = 0;

console.log(a === b);



console.log('\n---------------TASK02---------------\n');

/*
Assume you are given a single character.
Find if the given character is a letter or digit.

NOTE: if the character is not a letter or digit, print "INVALID INPUT".
*/

let char = '$';

if (char >= '0' && char <= '9') console.log(`"${char}" is a digit`);
else if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) console.log(`"${char}" is a letter`);
else console.log('"INVALID INPUT"');



console.log('\n---------------TASK03---------------\n');

/*
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.

NOTE: if the character is not a letter, print "INVALID INPUT".
*/

let ch = '';

if (ch >='A' && ch <= 'Z') console.log(`"${ch}" is an uppercase letter`);
else if (ch >= 'a' && ch <= 'z') console.log(`"${ch}" is a lowercase letter`);
else console.log('"INVALID INPUT"');



console.log('\n---------------TASK04---------------\n');

/*
Assume you are given a single character.
Find if the given charactyer is a special character or not.
*/

let sp = 'J';

if ((sp >= '0' && sp <= '9') || (sp >= 'A' && sp <= 'Z') || (sp >= 'a' && sp <= 'z')) console.log(`"${sp}" is not a special character`);
else console.log(`"${sp}" is a special character`);



console.log('\n---------------TASK05---------------\n');

/*
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT".
NOTE: vowel letters: a, e, i, o, u, A, E, I, O, U.
*/

let cr = 'i';
let vowels = 'aeiouAEIOU';

if (!((cr >= 'A' && cr <= 'Z') || (cr >= 'a' && cr <= 'z'))) console.log('"INVALID UNPUT"');
else if (vowels.includes(cr)) console.log(`"${cr}" is a vowel`);
else console.log(`"${cr}" is not a vowel`)

