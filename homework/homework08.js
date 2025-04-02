console.log('\n---------------TASK01---------------\n');

/*
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t.
*/

function hasLowerCase(str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] >= 'a' && str[i] <= 'z') return true;
    }
    return false;
}

console.log(hasLowerCase(''));
console.log(hasLowerCase('JAVASCRIPT'));
console.log(hasLowerCase('hello'));
console.log(hasLowerCase('125$'));
console.log(hasLowerCase('  a  '));



console.log('\n---------------TASK02---------------\n');

/*
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
*/

function noZero(arr) {
    return arr.filter(num => num !== 0);
}

console.log(noZero([1]));
console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));



console.log('\n---------------TASK03---------------\n');

/*
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared.
*/

function numberAndSquare(numbers) {
    let sqrArr = [];
    numbers.forEach(number => {
        sqrArr.push([number, number * number]);
    });
    return sqrArr;
}

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));



console.log('\n---------------TASK04---------------\n');

/*
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  

NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
*/

function containsValue(arr, str) {
    return arr.includes(str);
}

console.log(containsValue(['abc', 'foo', 'javascript'], 'hello'));
console.log(containsValue(['abc', 'def', '123'], 'Abc'));
console.log(containsValue(['abc', 'def', '123', 'Javascript', 'Hello'], '123'));



console.log('\n---------------TASK05---------------\n');

/*
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is not enough words reverse, 
return "There is not enough words!".
*/

function reverseSentence(str) {
    let newStr = str.split(' ');

    if(newStr.length <= 1) {
        return 'There is not enough words!';
    }
    else return newStr.reverse().join(' ');
}

console.log(reverseSentence('Hello'));
console.log(reverseSentence('Javascript is fun'));
console.log(reverseSentence('This is a sentence'));



console.log('\n---------------TASK06---------------\n');

/*
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
*/

function removeStringSpecialsDigits(str) {

}



console.log('\n---------------TASK07---------------\n');

/*
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
*/



console.log('\n---------------TASK08---------------\n');

/*
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
*/

console.log('\n---------------TASK09---------------\n');

/*
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
*/
