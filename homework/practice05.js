console.log('\n---------------TASK01---------------\n');

/*
Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

let number = 104;

/*
if(number <= 25) {
    console.log(`${number} is in the 1st half`);
    console.log(`${number} is in the 1st quarter`);
} 
else if(number <= 50) {
    console.log(`${number} is in the 1st half`);
    console.log(`${number} is in the 2nd quarter`);
} 
else if(number <= 75) {
    console.log(`${number} is in the 2nd half`);
    console.log(`${number} is in the 3rd quarter`);
} 
else {
    console.log(`${number} is in the 2nd half`);
    console.log(`${number} is in the 4th quarter`);
}
*/

switch(true) {
    case(number >= 1 && number <= 25):{
        console.log(`${number} is in the 1st half`)
        console.log(`${number} is in the 1st quarter`)
        break;
    }
    case(number >= 26 && number <= 50):{
        console.log(`${number} is in the 1st half`)
        console.log(`${number} is in the 2nd quarter`)
        break;
    }
    case(number >= 51 && number <= 75):{
        console.log(`${number} is in the 2nd half`)
        console.log(`${number} is in the 3rd quarter`)
        break;
    }
    case(number >= 76 && number <= 100):{
        console.log(`${number} is in the 2nd half`)
        console.log(`${number} is in the 4th quarter`)
        break;
    }
    default:console.log('This number is out of range.');
    
}


console.log('\n---------------TASK02---------------\n');

/*
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1: 2, 4, 6
Expected result 1: true
Test data 2: 68, 44, 2
Expected result 2: true
Test data 3: 10, 20, 25
Expected result 3: false
Test data 4: 51, 67, 99
Expected result 4: false
*/

const1 = 2;
const2 = 4;
const3 = 6;

console.log(const1 % 2 === 0 && const2 % 2 === 0 && const3 % 2 === 0);



console.log('\n---------------TASK03---------------\n');

/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.
*/

const char = 'L';

/*
if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) console.log(`"${char}" is a letter`);
else if(char >= '0' && char <= '9') console.log(`"${char}" is a digit`);
else if(char === ' ') console.log(`"${char}" is a whitespace`);
else console.log(`"${char}" is a special character`);
*/

// regex

if(/[a-zA-Z]/.test(char))
if(/[a-zA-Z]/.test(char)) console.log(`"${char}" is a letter`);
else if(/[0-9]/.test(char)) console.log(`"${char}" is a digit`);
else if(/[\s]/.test(char)) console.log(`"${char}" is a whitespace`);
else console.log(`"${char}" is a special character`);



console.log('\n---------------TASK04---------------\n');

/*
Write a function named hasBlue() which takes a string argument
and returns true if the string has an occurrence of blue word,
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/

function hasBlue(string) {
    return string.toLowerCase().includes('blue');
}




console.log(hasBlue('Hello World'));
console.log(hasBlue('Javabluescript'));
console.log(hasBlue('Tech Blue Global'));
console.log(hasBlue('1234'));
console.log(hasBlue('ABLUEC'));



console.log('\n---------------TASK05---------------\n');

/*

*/

// Way 1
const startT = word => {
    return word.toLowerCase().startsWith('t')
}
console.log(startT('typescript'));
console.log(startT('TechGlobal'));

//Way 2
const startT1 = word => {
    return word.startsWith('t') || word.startsWith('T');
}

console.log(startT1('typescript'));
console.log(startT1('TechGlobal'));

//Way3
const startT2 = word => {
    return /^[t]/i.test(word)
}

console.log(startT2('typescript'));
console.log(startT2('TechGlobal'));