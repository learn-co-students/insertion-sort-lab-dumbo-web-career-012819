function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0

  for (let i = 0; i < array.length; i ++ ){
    if(array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  // create new sorted array
  let newArray = []
  // find the minimum value in array and append it to new array
  while(array.length > 0){
    newArray.push(findMinAndRemove(array))
  }

  return newArray
}
