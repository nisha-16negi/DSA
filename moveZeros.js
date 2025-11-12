// [0,1,0,3,12]

function moveZeros(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // to move 0 at the end
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
