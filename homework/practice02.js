/*
Task01

Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"
*/

let str1 = "I like apples and orange";
let str2 = "JavaScript is not a scripting programming language";
let str3 = "I don't like books";

console.log(str1.slice(7, 12).toUpperCase());
console.log(str2.slice(0,10));
console.log(str3[0] + str3.slice(7));
console.log(str3.replace("don't ", ''));


/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"
*/

let s2 = "Tatyana";
console.log(s2[(s2.length - 1) / 2]); // for odd length
console.log(s2[Math.floor(s2.length / 2)]); // for odd and even

/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"


Toyota -> yo
*/

let s3 = 'abcd';
console.log(s3[Math.floor(s3.length / 2) -1] + s3[Math.floor(s3.length / 2)]);


/*
Task05

Requirement:
Write a program that divides the given String. Assume the length of the 
String will at least be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1: let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = ''

Test Data 2: let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'Tesla';
console.log(s4.slice(0, 2)); // 'Te'
console.log(s4.slice(-2)); // 'la'
console.log(s4.slice(2, -2)); // 's'



/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/

let s5 = '12ab12';
console.log(s5.slice(0, 2) === s5.slice(-2));
console.log(s5.endsWith(s5.slice(0, 2)));
console.log(s5.startsWith(s5.slice(-2)));


/*
Task07

Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1: rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2: 23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3: 2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4: elloe
*/

let s61 = '';
let s62 = '';





/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
*/

let s8 = 'I like Apple';
let first = s8.slice(0, s8.indexOf(' '));
let last = s8.slice(s8.lastIndexOf(' ') + 1);
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') +1);
console.log(last + middle + first);

let s9 = '   I like Apple    ';
console.log(s9.trim().split(' ').length);
