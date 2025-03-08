function thirdLargestUsingOneLoop(nums: number[]) {
   let largest = Number.MIN_VALUE;
   let secondLargest = Number.MIN_VALUE;
   let thirdLargest = Number.MIN_VALUE;

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
         thirdLargest = secondLargest;
         secondLargest = largest;
         largest = nums[i];
      } else if (nums[i] > secondLargest) {
         thirdLargest = secondLargest;
         secondLargest = nums[i];
      } else if (nums[i] > thirdLargest) {
         thirdLargest = nums[i];
      }
   }
   return thirdLargest;
}
