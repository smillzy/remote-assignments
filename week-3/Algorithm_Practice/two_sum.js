function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9);
