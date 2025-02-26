/*
Requirement for TASK 1

-Write a program that outputs below sentences
-Double quotations must be displayed in your console when you run the code
-Every line below must be printed with a separate console.log() statement
 
I start to practice "JavaScript" today, and I like it.
The secret of getting ahead is getting started.
"Don't limit yourself. "
Invest in your dreams. Grind now. Shine later.
It's not the load that breaks you down, it's the way you carry it.
The hard days are what make you stronger.
You can waste your lives drawing lines. Or you can live your life crossing them.
*/

console.log('\n---------------TASK01---------------\n');

console.log('I start to practice "JavaScript" today, and I like it.');
console.log('The secret of getting ahead is getting started.');
console.log(`"Dont't limit yourself."`);
console.log('Invest in your dreams. Grind now. Shine later.');
console.log("It's not the load that breaks you down, it's the way you carry it.");
console.log('The hard days are what make you stronger.');
console.log('You can waste your lives drawing lines. Or you can live your life crossing them.');

// I used different quotations and backticks with different strings to avoid escape sequences, and to show you that I know them )))



/*
Requirement for TASK 2

-Write a program that prints the whole below text in ONLY 1
console.log() statement (you can use escape sequences to insert line
or a tab)

    JavaScript is a high-level programming language primarily used to
build web applications. It is not limited to the web; it can also be used
for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means
there are plenty of resources and support available for learning. It
uses a syntax like other programming languages and easy to learn.
*/

console.log('\n---------------TASK02---------------\n');

console.log('\tJavaScript is a high-level programming language primarily used to \nbuild web applications. It is not limited to the web; it can also be used \nfor the backend development with technologies like Node.js. \n\n\tIt is open source and has a huge community support, which means \nthere are plenty of resources and support available for learning. It \nuses syntax like other programming languages and easy to learn.');

// I used method mentioned in requirement (escape sequences), but if I had a choice, I'd rather use backticks with such a large text



/*
Requirement for TASK 3

-Write a program that stores below information with proper data types and output all variables with separate console.log() statements.

myAge
myFavoriteNumber
myHeight
myWeight
myFavoriteLetter
*/

console.log('\n---------------TASK03---------------\n');

let myAge = 39;
let myFavoriteNumber = 7;
let myHeight = `5'4"`;
let myWeight = '180 lbs';
let myFavoriteLetter = 'T';

console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);



/*
Requirement for TASK 4

-Create 2 variables called as num1, num2 and store values of 25,
35 in these variables, respectively. Then, output the sum of the
numbers with a proper message as given below.

Test Data:
25, 35

Expected output: 
The sum of the numbers = 60
*/

console.log('\n---------------TASK04---------------\n');

let num1 = 25;
let num2 = 35;

console.log('Test Data: ' + num1 + ', ' + num2);
console.log('The sum of the numbers = ' + (num1 + num2));



/*
Requirement for TASK 5

-Create 2 variables called as n1, n2 and store values of 5, 7 in
these variables, respectively. Then, output the product of the
numbers with a proper message as given below.

Test Data:
5, 7

Expected output: 
The product of the numbers = 35
*/

console.log('\n---------------TASK05---------------\n');

let n1 = 5;
let n2 = 7;

console.log('Test Data: ' + n1 + ', ' + n2);
console.log('The product of the numbers = ' + (n1 * n2));



/*
Requirement for TASK 6

-Create 2 variables called as number1, number2 and store values
of 24, 10 in these variables, respectively. Then, output the sum
(addition), multiplication, subtraction, division and remainder of these
numbers with a proper message as given below.

Test Data:
24, 10

Expected output: 
The sum of the numbers is = 34
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
*/

console.log('\n---------------TASK06---------------\n');

let number1 = 24;
let number2 = 10;

console.log('Test Data: ' + number1 + ', ' + number2);
console.log('The sum of the numbers is = ' + (number1 + number2));
console.log('The product of the numbers is = ' + (number1 * number2));
console.log('The substraction of the numbers is = ' + (number1 - number2));
console.log('The division of the numbers is = ' + (number1 / number2));
console.log('The remainder of the numbers is = ' + (number1 % number2));



/*
Requirement for TASK 7

-Create 2 variables called as i1, i2 and store values of 7, 11 in
these variables, respectively. Then, output the average of the
numbers.

Test Data:
7, 11

Expected Output:
The average of the numbers is: 9
*/

console.log('\n---------------TASK07---------------\n');

let i1 = 7;
let i2 = 11;

console.log('Test Data: ' + i1 + ', ' + i2);
console.log('The average of the numbers is: ' + ((i1 + i2) / 2));



/*
Requirement for TASK 8

-Create 5 variables called as a1, a2, a3, a4, a5 and store values of
6, 10, 12, 15, 17 in these variables, respectively. Then, output the
average of the numbers.

Test Data:
6, 10, 12, 15, 17

Expected Output:
The average of the numbers is: 12
*/

console.log('\n---------------TASK08---------------\n');

let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

console.log('Test Data: ' + a1 + ', ' + a2 + ', ' + a3 + ', ' + a4 + ', ' + a5);
console.log('The average of the numbers is: ' + ((a1 + a2 + a3 + a4 + a5) / 5));



/*
Requirement for TASK 9

-Create 3 variables called as b1, b2, b3 and store values of 5, 6,
10 in these variables, respectively. Then, output the square of each
number entered by user.

NOTE: Square of number means number multiplied with itself

Test Data:
5, 6, 10

Expected Output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100
*/

console.log('\n---------------TASK09---------------\n');

/*let b1 = 5;
let b2 = 6;
let b3 = 10;

console.log('Test data; ' + b1 + ', ' + b2 + ', ' + b3);
console.log('The 5 multiplied with 5 is = ' + (b1 ** 2));
console.log('The 6 multiplied with 6 is = ' + (b2 ** 2));
console.log('The 10 multiplied with 10 is = ' + (b3 ** 2));
*/

let b1 = 5;
let b2 = 6;
let b3 = 10;

console.log(`The ${b1} multiplied with ${b1} is = ${b1 ** 2}`);
console.log(`The ${b2} multiplied with ${b2} is = ${b2 * b2}`);
console.log(`The ${b3} multiplied with 1${b3} is = ${Math.pow(b3, 2)}`);


/*
Requirement for TASK 10

-Create a variable called as side to be assumed as one side of a square
and store value of 7 in that variable. Then, output the area and
perimeter for that square.

NOTE: area of a square = side * side
      perimeter of a square = 4 * side
 

Test Data:
7

Expected Output:
The perimeter of the square = 28
The area of the square = 49
*/

console.log('\n---------------TASK10---------------\n');

let side = 7;

console.log('The side of the square is = ' + side);
console.log('The perimeter of the square = ' + (side * 4));
console.log('The area of the square = ' + (side * side));



/*
Requirement for TASK 11

-Write a program that stores below information with proper data
types and output all variables with ONLY one console.log() statement.
	
    favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/

console.log('\n---------------TASK11---------------\n');

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;

console.log(`The favorite book is ${favBook}
The favorite color is ${favColor}
The favorite number is ${favNumber}`);



/*
Requirement for TASK 12

-Write a program that stores below information with proper data
types and output all variables with ONLY one console.log() statement.
	
    firstName = John
	lastName = Doe
	age = 45
	emailAddress = johndoe@gmail.com
	phoneNumber = (123) 123 1234
	address = 123 St Chicago IL 12345

Expected output: (it should exactly be same as below paragraph)

    User who joined this program is John Doe. John's age is 45.
John's email address is johndoe@gmail.com, phone number is
(123) 123 1234, and address is 123 St Chicago IL 12345
*/

console.log('\n---------------TASK12---------------\n');

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 St Chicago IL 12345';

console.log(`   User who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}.
${firstName}'s email address is ${emailAddress}, phone number is
${phoneNumber}, and address is ${address}.`);






























