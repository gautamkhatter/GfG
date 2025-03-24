function add_one_using_one_loop(nums: number[]) {
   let last_index = nums.length - 1;
   while (last_index >= 0 && nums[last_index] === 9) {
      nums[last_index--] = 0;
   }
   if (last_index < 0) {
      nums.unshift(1);
   } else {
      nums[last_index]++;
   }
   return nums;
}