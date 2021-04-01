window.onload = function() {

    document.getElementById('check').onclick = function() {
    
        const input = document.getElementById('input');
        let interpretation = interpretPalindrome(input.value);

        updateOutput(interpretation);
        return false;
    }
}

/**
 * The function `isPalindrome` converts the inputted word to lowercase, assigning to 
 * the variable `lowercaseWord`. The string `lowercaseWord` is split into variables 
 * `part1` and `part2`.
 * 
 * part1's positioning parameters are: index-0, and upto half of the length of the word.
 * For odd lettered words, the Math.floor function means it would skip the middle letter,
 * which is irrelevant.
 * 
 * part2's positioning parameter is the length of the word, minus half of the length.
 * 
 * part2 is split, creating an array; reversing the array; then joining as a string.
 */ 
function isPalindrome (word) {

    let lowercaseWord = word.toLowerCase();
    let part1 = lowercaseWord.substring(0, Math.floor(lowercaseWord.length / 2));
    let part2 = lowercaseWord.substring(lowercaseWord.length - Math.floor(lowercaseWord.length / 2));

    let change = part2.split("").reverse().join("");

    return part1 === change;
}

function interpretPalindrome (word) {
    if (word == "palindrome"){
        return "Well done for finding the Easter Egg! But the word \"palindrome\" is NOT palindromic! 😁";
    } else if (word.length <= 1) {
        return "The word is not long enough to be considered a palindrome! 🤓"
    } else if (isPalindrome(word)) {
        return "The word \"" + word + "\" is palindromic! 🥳";
    } else {
        return "The word \"" + word + "\" is not palindromic! 🙁";
    }
}

function updateOutput (str) {
    document.getElementById("output").innerHTML = str;
}

// function palindrome(word) {
//     return word === split('').reverse().join('');
// }

// function palindrome(word) {
//     const reverse = word.split("").reverse().join("");
//     return word === reverse;
// };


// String.prototype.reverse = function() {
//     return this.split("").reverse().join("");
// }

// function myPalindrome (phrase) {
//     return phrase.toLowerCase().split("").reverse().join("") === phrase.toLowerCase();
// }

// const radar = "radar";
// const lol = "LOL";
// const palindrome = "palindrome";
// const repaper = "repaper";
// const hanna = "Hannah";
// const zero = "0";

// console.log(myPalindrome("radar"));
// console.log(myPalindrome("LOL"));
// console.log(myPalindrome("palindrome"));
// console.log(myPalindrome("repaper"));
// console.log(myPalindrome("Hannah"));
// console.log(myPalindrome("0"));