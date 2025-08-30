function negativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    } else {
      continue;
    }
  }
  if (count > 0) {
    console.log(count);
  } else {
    console.log("No negative numbers!!");
  }
}

let arr = [4, 2, 10, 0, 1, 6, 8];

let result = negativeNumbers(arr);
