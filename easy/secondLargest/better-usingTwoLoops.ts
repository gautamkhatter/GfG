function secondLargestElement2(nums: number[]) {
   let largest = Number.MIN_VALUE;
   let secondLargest = Number.MIN_VALUE;

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
         largest = nums[i];
      }
   }
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > secondLargest && nums[i] !== largest) {
         secondLargest = nums[i];
      }
   }
   return secondLargest;
}

const arr2 = [12, 35, 1, 10, 34, 1];
console.log(secondLargestElement2(arr2));
