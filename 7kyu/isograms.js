// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let cache = {}; //breadcrumbs
    str = str.toLowerCase(); //combats case sensitivity
    for (let i = 0; i < str.length; i++) {
      if (cache[str[i]]) { //if cache contains letter yet and if so, then it's not an isogram so it's false
        return false;
      }else {
      cache[str[i]] = true; // else its an isogram
      }
    }
    return true; 
 }