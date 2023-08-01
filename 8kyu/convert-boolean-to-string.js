// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


function booleanToString(b){
    if (b === true){
      let string= b.toString();
      return string;
    } else if (b === false){
      return "false"
    }
    }