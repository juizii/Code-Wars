// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(sentence){
    let newArr = sentence.split(' '); //turns into an array of words
    let sentence = '';
    newArr.map((word, i) => {
      if (word.length >= 5){ //if characters are more than or equal to 5, reverse the characters.
        newArr[i] = word.split('').reverse().join('');
      } else {
        newArr[i] = word; //nothing changed, so keep the word.
      }
    sentence = newArr.join(' '); // put everything back together.
    });
  return sentence;
  }