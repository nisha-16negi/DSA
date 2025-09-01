function findSecondLargestNum(arr) {
  if (arr.length < 2) {
    // If array has 2 or less than 2 elements
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (firstLargest < arr[i]) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } 
    // to check if duplicate element exist
    else if (secondLargest < arr[i] && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const arr = [20, 2, 17, 5, 3, 20];
let result = findSecondLargestNum(arr);
console.log(result);
