function reverseString(nums){
    let n=nums.length
    for(let i=0; i<n/2;i++){
        let a = nums[i];
        nums[i]= nums[n-1-i];
        nums[n-1-i]=a;
    }
    return nums;
}

console.log(reverseString(["h","e","l","l","o"]));