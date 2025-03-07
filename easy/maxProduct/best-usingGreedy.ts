function maxProductTriplet3(nums: number[]) {
   let largest = -Infinity,
      secondLargest = -Infinity,
      thirdLargest = -Infinity;

   let minimum = Infinity,
      secondMinimum = Infinity;

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
         thirdLargest = secondLargest;
         secondLargest = largest;
         largest = nums[i];
      }
      else if (nums[i] > secondLargest) {
         thirdLargest = secondLargest;
         secondLargest = nums[i];
      }
      else if (nums[i] > thirdLargest) {
         thirdLargest = nums[i];
      }

      if (nums[i] < minimum) {
         secondMinimum = minimum;
         minimum = nums[i];
      }
      else if (nums[i] < secondMinimum) {
         secondMinimum = nums[i];
      }
   }

   return Math.max(
      minimum * secondMinimum * largest,
      largest * secondLargest * thirdLargest
   );
}

const maxProduct = maxProductTriplet3([-10, -3, -5, -6, -20]);
console.log(maxProduct);
