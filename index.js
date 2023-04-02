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
  1. Initialize a function 
  2. Assign methods which (splits the letters of a word and creates
  an array which has the individual letters as the elements,
  reverses the order of the elements in the array and rejoins the 
  elements in the array to a single string) to variables.
  3. If the result of the final method is equal to a word, return "true"
  otherwise return false.
  4. Call the function.
*/

/*
  Solution
  1. The function "isPalindrome" takes a string as an argument(word).
  2. A variable, "letters", is declared and assigned a value which
  takes a word then uses"split" method to create an array of its letters.
  3. Another variable, "inverse" is declared and assigned a value which uses
  the "reverse" method to invert the order of the elements in the letters 
  array which was formed prior.
  4. Yet another variable, "newWord", is declared and is assigned a value which 
  takes the inverted array from the inverse variable then uses the "join" 
  method to merge the inverted array elements into a single string.
  5. Finally the if statement is used to return "true" if the value of the newWord
  variable is strictly equal to the original word or "false" if it is not.
  6. The required boolean result is returned upon calling the "isPalindrome" function
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
