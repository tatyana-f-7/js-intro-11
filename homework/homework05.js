console.log('\n---------------TASK01---------------\n');

/*
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked.
*/

function countPos(numbers) {
    return numbers.reduce((pos, curr) => curr > 0 ? pos + 1 : pos, 0);
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.

NOTE: Ignore case sensitivity.
*/

function countA(str) {
    return str.toLowerCase().split('').filter(char => char === 'a').length;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/

function countVowels(word) {
    return word.toLowerCase().split('').filter(char => 'aeoui'.includes(char)).length;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant 
letter.
*/

function countConsonants(word) {
    return word.toLowerCase().split('').filter(char => !'aeoui'.includes(char)).length;
}

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.

NOTE: Be careful about the extra whitespaces before 
and after the string.
*/

function countWords(str) {
    const words = Array.from(str.trim().split(' '));
    return words.length;
}

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));



console.log('\n---------------TASK06---------------\n');

/*
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.

NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
*/

function factorial(number) {
    let counter = 1;
    for(let i = number; i >= 1; i--) {
    counter *= i;
}
return counter;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));



console.log('\n---------------TASK07---------------\n');

/*
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
*/

function isPalindrome(word) {
    let reverse = word.toLowerCase().split('').reverse().join('');
    return reverse === word.toLowerCase();
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("ab a"));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome(""));



console.log('\n---------------TASK08---------------\n');

/*
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after 
the array element.
*/

function countMultipleWords(arr) {
    return arr.reduce((acc, curr) => curr.trim().split(' ').length > 1 ? acc + 1 : acc, 0)
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "   foobar  " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "   foo bar  " ]));
console.log(countMultipleWords([]));



console.log('\n---------------TASK09---------------\n');

/*
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
*/

function count3OrLess(word) {
    return word.split(' ').reduce((acc, curr) => curr.length <= 3 && curr.length > 0 ? acc + 1 : acc, 0);
}

console.log(count3OrLess("Hello"))
console.log(count3OrLess("Hi John"))
console.log(count3OrLess("JavaScript is fun"))
console.log(count3OrLess("My name is John Doe"))
console.log(count3OrLess(""))



console.log('\n---------------TASK10---------------\n');

/*
Write a function named as isPrime() which takes a 
number as an argument and returns true if the 
number is prime or returns false otherwise when 
invoked.

NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...

NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
*/

function isPrime(number) {
    return number >= 2 && number % number === 0 && number % 1 === 0;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));



console.log('\n---------------TASK11---------------\n');

/*
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.

NOTE: Be careful about the array sizes as they could be 
different.
*/

function add(arr) {
    return 
}

console.log('\n---------------TASK12---------------\n');

/*
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
*/

function removeExtraSpaces(str) {
    return str.split(' ').filter(word => word.length > 0).join(' ');
}

console.log(removeExtraSpaces(("Hello")));
console.log(removeExtraSpaces(("      Hello    World     ")));
console.log(removeExtraSpaces(("     JavaScript is          fun")));
console.log(removeExtraSpaces(("")));



console.log('\n---------------TASK13---------------\n');

/*
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.

NOTE: Assume that length of array is always more than zero.

NOTE: Ignore the 10 itself.

NOTE: If there are more than one numbers are close equally, 
return the smaller number.
*/

function findClosestTo10(arr) {
    return 
}



console.log('\n---------------TASK14---------------\n');

/*
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.

NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
*/

function isEmailValid(email) {
    if(email.includes(' ')) {
        console.log('false')
    }

}



console.log('\n---------------TASK15---------------\n');

/*
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
*/

function isPasswordValid(password) {

}



















