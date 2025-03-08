function thirdLargestUsingThreeLoops(nums: number[]) {
   let largest = Number.MIN_VALUE;
   let secondLargest = Number.MIN_VALUE;
   let thirdLargest = Number.MIN_VALUE;

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) largest = nums[i];
   }
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > secondLargest && nums[i] < largest) {
         secondLargest = nums[i];
      }
   }
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > thirdLargest && nums[i] < secondLargest) {
         thirdLargest = nums[i];
      }
   }
   return thirdLargest;
}