function removeElement(nums, a) {
  // [3,2,1,5,3,4,8,3]

  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != a) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

console.log(removeElement([3, 2, 1, 5, 3, 4, 8, 3], 3));
