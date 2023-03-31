// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let newArr = n.toString().split("").reverse().map(Number)
     return newArr
   //   let newArr = n.toString().split("");
   //   let newArr2= newArr.reverse()
     
   //   return newArr2;
   }

   //Did this during Vonds' review sessions