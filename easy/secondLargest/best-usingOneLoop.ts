function secondLargestUsingOneLoop(nums: number[]) {
   let largest = Number.MIN_VALUE;
   let secondLargest = Number.MIN_VALUE;
   
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
         secondLargest = largest;
         largest = nums[i];
      }
      else if (nums[i] < largest && nums[i] > secondLargest) {
         secondLargest = nums[i];
      }
   }

   return secondLargest;
}


const arr3 = [12, 35, 1, 10, 34, 1];
console.log(secondLargestUsingOneLoop(arr3));
