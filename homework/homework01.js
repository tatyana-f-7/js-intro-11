console.log('\n---------------TASK01---------------\n');

/*
Write a program that outputs below sentences.

Double quotations must be displayed in your console when
you run your code.

Every line below must be printed with a separate
console.log() statement.
*/

console.log('I start to practice "JavaScript" today and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log('"Don\'t limit yourself."');
console.log('Invest in your dreams. Grind now. Shine later.');
console.log('It\'s not the load that breaks you down, it\'s the way you carry it.');
console.log('The hard days are what make you stronger.');
console.log('You can waste your life drawing lines. Or you can live your life crossing them.');



console.log('\n---------------TASK02---------------\n');

/*
Write a program that prints the whole below text in
ONLY 1 console.log() statement (you can use escape
sequences to insert line or a tab).
*/

console.log(
      '\tJavaScript is a high-level programming language \n' +
'primarily used to build web applications. It is not limited \n' +
'to the web; it can also be used for the backend\n' +
'development with technologies like Node.js. \n' +
'\n' +
      '\tIt is open source and has a huge community support, \n' +
'which means there are plenty of resources and support \n' +
'available for learning. It uses a syntax like other \n' +
'programming languages and easy to learn.');

console.log(`
   JavaScript is a high-level programming language 
primarily used to build web applications. It is not limited 
to the web; it can also be used for the backend
development with technologies like Node.js.

   It is open source and has a huge community support, 
which means there are plenty of resources and support 
available for learning. It uses a syntax like other 
programming languages and easy to learn`)



console.log('\n---------------TASK03---------------\n');

/*
Write a program that stores below information with
proper data types and output all variables with
separate console.log() statements.
*/

let myAge = 39;
let myFavoriteNumber = 7;
let myHeight = '5\'04"';
let myWeight = '200 lbs';
let myFavoriteLetter = 'T';

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);



console.log('\n---------------TASK04---------------\n');

/*
Create 2 variables called as num1 and num2 and
store values of 25, 35 in these variables respectively.
Then output the sum of the numbers with a proper
message as given below.
*/

let num1 = 25;
let num2 = 35;

console.log(`Test data: ${num1}, ${num2}`);
console.log(`The sum of the numbers = ${num1 + num2}`);



console.log('\n---------------TASK05---------------\n');

/*
Create 2 variables called n1, n2 and store
values of 5, 7 in these variables respectively. Then
output the product of the numbers with a proper
message as given below.
*/

let n1 = 5;
let n2 = 7;

console.log(`Test data: ${n1}, ${n2}`);
console.log(`The product of the numbers = ${n1 * n2}`);



console.log('\n---------------TASK06---------------\n');

/*
Create 2 variables called as number1, number2 and
store values of 24, 10 in these variables
respectively. Then output the sum (addition),
multiplication, subtraction, division and remainder of
these numbers with a proper message as given below.
*/

let number1 = 24;
let number2 = 10;

console.log(`Test data: ${number1}, ${number2}`);
console.log(`The sum of the numbers is = ${number1 + number2}`);
console.log(`The product of the numbers is = ${number1 * number2}`);
console.log(`The subtraction of the numbers is = ${number1 - number2}`);
console.log(`The division of the numbers is = ${number1 / number2}`);
console.log(`The remainder of the numbers is = ${number1 % number2}`);



console.log('\n---------------TASK07---------------\n');

/*
Create 2 variables called i1, i2 and store values
of 7, 11 in these variables respectively. Then output
the average of the numbers.
*/

let i1 = 7;
let i2 = 11;

console.log(`The test data: ${i1}, ${i2}`);
console.log(`The average of the numbers is: ${(i1 + i2) / 2}`);



console.log('\n---------------TASK08---------------\n');

/*
Create 5 variables called as a1, a2, a3, a4, a5 and
store values of 6, 10, 12, 15, 17 in these
variables respectively. Then output the average of the
numbers.
*/

let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

console.log(`Test data: ${a1}, ${a2}, ${a3}, ${a4}, ${a5}`);
console.log(`The average of the numbers is: ${(a1 + a2 + a3 + a4 + a5) / 5}`);



console.log('\n---------------TASK09---------------\n');

/*
Create 3 variables called as b1, b2, b3 and store
values of 5, 6, 10 in these variables respectively. Then
output the square of each number entered by user.

NOTE: Square of number means number 
multiplied with itself.
*/

let b1 = 5;
let b2 = 6;
let b3 = 10;

console.log(`Test data: ${b1}, ${b2}, ${b3}`);
console.log(`The ${b1} multiplied with ${b1} is = ${Math.pow(b1, 2)}`);
console.log(`The ${b2} multiplied with ${b2} is = ${Math.pow(b2, 2)}`);
console.log(`The ${b3} multiplied with ${b3} is = ${Math.pow(b3, 2)}`);



console.log('\n---------------TASK10---------------\n');

/*
Create a variable called as side to be assumed as one
side of a square and store value of 7 in that variable.
Then output the area and perimeter for that square.

NOTE: area of a square = side * side
      perimeter of a square = 4 * side.
*/

let side = 7;

console.log(`The perimeter of the square = ${4 * side}`);
console.log(`The area of the square = ${side * side}`);



console.log('\n---------------TASK11---------------\n');

/*
Write a program that stores below information with
proper data types and output all variables with ONLY
one console.log() statement.

favBook = JS Algorithms & Data Structures
favColor = Blue
favNumber = 7
*/

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;

console.log(`The favorite book is ${favBook}.
The favorite color is ${favColor}.
The favorite number is ${favNumber}.`);



console.log('\n---------------TASK12---------------\n');

/*
Write a program that stores below information with
proper data types and output all variables with ONLY
one console.log() statement.

firstName = John
lastName = Doe
age = 45
emailAddress = johndoe@gmail.com
phoneNumber = (123) 123 1234
address = 123 St Chicago IL 12345
*/

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 St Chicago IL 12345';

console.log(`      User who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}.
${firstName}'s email address is ${emailAddress}, phone number is
${phoneNumber}, and address is ${address}.`);