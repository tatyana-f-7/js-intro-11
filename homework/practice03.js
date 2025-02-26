/*
Task01
Requirement:
Write a function named as tripleWord() which takes a string word as an
argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
tripleWord("Tech")  -> "TechTechTech"
tripleWord("Global")  -> "GlobalGlobalGlobal"
*/

const tripleWord = word => word.repeat(3);
console.log(tripleWord('Tech'));

/*
Write a function named as has4() which takes a string word as an argument and returns true if given string has at least 4 characters, and false otherwise when invoked.
 Examples:
has4("Tech")  -> true
has4("Global")  -> true
has4("")  -> false
has4("12345")  -> true
has4("abc")   -> false
*/

const has4 = word => word.length >= 4;
console.log(has4('Hi'));

/*
Write a function named as celciusToFahrenheit() which takes a number
to be considered as Celcius value and returns the Fahrenheit value when
invoked.
Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32
to perform the conversion from Celsius to Fahrenheit.
•Multiply the Celsius temperature by 9.
•Divide the result by 5.
•Add 32 to the result.
Examples:
celciusToFahrenheit(20)  -> 68
celciusToFahrenheit(25)  -> 77
celciusToFahrenheit(0)  -> 32
celciusToFahrenheit(-10)  -> 14
*/

const celsiusToFahrenheit = celsius => (celsius * 9) / 5 + 32;
console.log(celsiusToFahrenheit(-10));

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(-10));

/*
Write a function named as kgToPounds() which takes a number to be
considered as Kilograms value and returns the Pounds value when
invoked.
Conversion Formula: The function uses the formula kilogram * 2.2 to
perform the conversion from Kilograms to Pounds.
•Multiply the Kilograms value by 2.2.
Examples:
kgToPounds(1)  -> 2.2
kgToPounds(20)  -> 44
kgToPounds(75)  -> 165
kgToPounds(100)  -> 220
*/

/*const kgToPound = kg => {
    let pounds = (kg * 2.2).toFixed(1);
 
    let poundsAsString = pounds + '';
 
    let poundsSplit = poundsAsString.split('.');
  
    if(poundsSplit[1] === '0') pounds = Number(poundsSplit[0]);
    return pounds;
}
    */

const kgToPounds = kg => {
    let pounds = (kg * 2.2);

    if(pounds % 1 === 0); return pounds;
    else return pounds.toFixed(1);
}
console.log(kgToPound(1));
console.log(kgToPound(20));
console.log(kgToPound(75));
console.log(kgToPound(100));

/*
Task05
Write 2 functions named as rectangleArea() and rectanglePerimeter()
which calculate the area and perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula:
•Area: x * y
•Perimeter 2 * (x + y)
Examples:
rectangleArea(5, 4)  -> 20
rectangleArea(3, 7)  -> 21
rectangleArea(6, 10)  -> 60
rectanglePerimeter(5, 4)  -> 18
rectanglePerimeter(3, 7)  -> 20
rectanglePerimeter(6, 10)  -> 32
*/

const rectangleArea = (width, height) => width * height;
const rectanglePerimeter = (width, height) => 2 * (width + height);

console.log(rectangleArea(5, 4));
console.log(rectangleArea(3, 7));
console.log(rectangleArea(6, 10));
console.log(rectanglePerimeter(5, 4));
console.log(rectanglePerimeter(3, 7));
console.log(rectanglePerimeter(6, 10));

/*
Task06
Write 2 functions named as squareArea() and squarePerimeter() which
calculate the area and perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:
•Area: x * x
•Perimeter 4 * x
Examples:
squareArea(5)  -> 25
squareArea(3)  -> 9
squareArea(6)  -> 36
squarePerimeter(5)  -> 20
squarePerimeter(3)  -> 12
squarePerimeter(6)  -> 24
*/

const squareArea = side => side ** 2;
const squarePerimeter = side => side * 4;

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));
console.log(squarePerimeter(5));
console.log(squarePerimeter(3));
console.log(squarePerimeter(6));


/*
Write a function named as countWords() which takes a String and returns
the number of words that are in the string
countString("Hello, my name is John Doe") -> 6
*/

const countString = str => {
    let strAsArr = str.trim().split(' ');
    return strAsArr.length;
}

console.log('   Hello,   my   name is    John Doe   ')


const middle = word => {
    if(word.length === 0) return '';
    if(word.length % 2 === 0) return word[(word.length / 2 - 1)] + word[word.length / 2];
        else return word[Math.floor(word.length / 2)];
}

console.log(middle('abc'));
console.log(middle('bilal'));
console.log(middle('123456789'));
console.log(middle('Tech'));
console.log(middle('global'));
console.log(middle(''));
console.log(middle('a'));