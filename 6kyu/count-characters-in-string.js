// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let count = {}; //empty object
     string.split('').forEach(function(i) { //turn each letter of str into an arr to use the forEach method
        count[i] ? count[i]++ : count[i] = 1; // runs a function on every letter, if letter repeats, counts ++ for letter property
     });
     return count; //returns object
   }