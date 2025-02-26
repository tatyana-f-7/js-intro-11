function isDigit(char) {
    return /^\d$/.test(char);
}



function isLowerCase(char) {
    return /^[a-z]$/.test(char);
}



function isUpperCase(char) {
    return /^[A-Z]$/.test(char);
}



function isLetter(char) {
  return isLowerCase(char) || isUpperCase(char);
}

function isSpace(char) {
    return char === ' ';
}

function isDigitOrLetter(char) {
    return isDigit(char) || isLetter(char);
}

function isSpecial(char) {
    return !isDigitOrLetter(char) && !isSpace(char);
}


function isVowel(char) {
    return /^[aeiou]$/i.test(char);
}


const CharacterHelper = {
    isDigit,
    isLowerCase,
    isUpperCase,
    isLetter,
    isSpace,
    isDigitOrLetter,
    isSpecial,
    isVowel
};

module.exports.CharacterHelper = CharacterHelper
