//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

function findAverage(array) {
    let avg = 0;
   let average = 0;
   for (let i = 0; i < array.length; i++) {
     avg += array[i]
   }
   avg = avg / array.length
   if (array.length === 0) {
     return 0;
   } else return avg;
 }