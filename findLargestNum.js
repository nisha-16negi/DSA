function findlargestNumber(arr) {
  let largestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (largestNum < arr[i]) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

let arr = [-3, -6, -13, -1];

let result = findlargestNumber(arr);
console.log(result);
