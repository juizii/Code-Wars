// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
    let total= 1;
    for(let i=0; i< x.length; i++){
      total *= x[i];
    } return total;
    }
  // const total = x.reduce((total, element) =>{ total * element, 1;
  //   }); return total;
  //    