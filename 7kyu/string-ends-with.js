// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    if (ending.length > str.length) {
      return false;
    }
    
    let beginning = str.length - ending.length;
    let substring = str.substring(beginning);
    
    return substring === ending;
  }

// I seen this in the solutions, holy moly REMEMBER THIS
// const solution = (str, ending) => str.endsWith(ending)