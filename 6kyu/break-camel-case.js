// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let newStr = ""; 
    let words = string.split(""); //turn into an array
    words.forEach(letter=>{ //if letter(uppercase) is equal to letter (normal)
      if(letter.toUpperCase() === letter)
        newStr+=" "+letter //if so, seperate the words with a space
      else
        newStr+=letter //if not, keep them together
    })
    return newStr; // new words
}