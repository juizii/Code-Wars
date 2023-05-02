// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let zeroArr = [] 
    let everything = []
    let together = []
    for (let i = 0; i <= arr.length -1; i++){
        if (arr[i] === 0){
          zeroArr.push(arr[i])
          }
        else{ 
          everything.push(arr[i])
        }
      }
    together = everything.concat(zeroArr)
    return together
  }