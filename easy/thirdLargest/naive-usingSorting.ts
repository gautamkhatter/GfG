function thirdLargestUsingSorting(nums: number[]) {
   if (nums.length === 0) return -1;
   if (nums.length === 1) return nums[0];

   nums.sort((a, b) => a - b);
   return nums[nums.length - 3];
}