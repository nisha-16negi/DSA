function findSecondLargestNum() {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (firstLargest < arr[i]) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (secondLargest < arr[i]) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const arr = [20, 2, 11, 5, 3, 17];
let result = findSecondLargestNum(arr);
console.log(result);
