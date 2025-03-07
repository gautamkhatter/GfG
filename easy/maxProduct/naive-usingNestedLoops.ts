function maxProductTriplet(nums: number[]) {
   let maxProduct = Number.MIN_VALUE;

   for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
         for (let k = j + 1; k < nums.length; k++) {
            maxProduct = Math.max(maxProduct, nums[i] * nums[j] * nums[k]);
         }
      }
   }

   return maxProduct;
}
