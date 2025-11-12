function missingNum(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2; // fomula to find total sum of n integer
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
  }
  return totalSum - sum;
}

console.log(missingNum([4, 0, 1, 2, 5]));
