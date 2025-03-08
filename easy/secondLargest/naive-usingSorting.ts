function secondLargestBySorting(nums: number[]) {
   nums.sort((a, b) => a - b);
   for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] !== nums[nums.length - 1]) {
         return nums[i];
      }
   }
   return -1;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(secondLargestBySorting(arr));