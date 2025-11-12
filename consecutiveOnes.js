// [1,1,0,1,1,1,0,1,1,0,1,1]
function maxConsecutiveOnes(nums) {
  let currCount = 0,
    maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    } else {
      //   if (currCount > maxCount) {
      //     maxCount = currCount;
      //   }
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }
  //   return maxCount>currCount?maxCount:currCount;
  return Math.max(currCount, maxCount);
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1]));
