function remove_all_occurrences(nums: number[], el: number) {
   let k = 0;
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== el) {
         nums[k] = nums[i]
         k++;
      }
   }
   return k;
}