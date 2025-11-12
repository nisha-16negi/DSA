function oddSum(n) {
  if (arr[n] % 2 != 0) {
    if (n == 0) return arr[n];
    else {
      return arr[n] + oddSum(n - 1);
    }
  }
  else{
    return oddSum(n-1);
  }
}
let arr = [5, 3, 2, 0, 1];
console.log(oddSum(arr.length - 1));
