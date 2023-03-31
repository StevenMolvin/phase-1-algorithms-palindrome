function isPalindrome(word) {
  let letters = word.split("");
  let inverse = letters.reverse();
  let newWord = inverse.join("");
  if (word == newWord) {
    return true;
  }else {
    return false;
  }
}
isPalindrome("mom");
/* 
  Pseudocode
  Initialize a function 
  Assign a method which splits the letters of a word,
  reverses the spelling order and rejoins the letters to a variable.
  If the result of the method is equal to a word, return "true"
  otherwise return false.
*/

/*
  Solution
  The function "isPalindrome" takes a string as an argument(word).
  A variable, "letters", is declared and assigned a value which
  takes a word then uses"split" method to create an array of its letters.
  Another variable, "inverse" is declared and assigned a value which uses
  the "reverse" method to invert the order of the elements in the letters 
  array which was formed prior.
  Yet another variable, "newWord", is declared and is assigned a value which 
  takes the inverted array from the inverse variable then uses the "join" 
  method to merge the inverted array elements into a single string.
  Finally the if statement is used to return "true" if the value of the newWord
  variable is strictly equal to the original word or "false" if it is not.
  The required boolean result is returned upon calling the "isPalindrome" function
  and passing a string to it. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
