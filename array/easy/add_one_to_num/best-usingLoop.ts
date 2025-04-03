/**
 * #### We are given a non-negative number represented as an array of digits. Our task is to add 1 to the number (increment the number represented by the digits by 1). The digits are stored such that the most significant digit is the first element of the array.
 *
 * Solution:- best approach - using a loop
 *
 * Eg.1:-
 * input: nums = [1, 2, 4]
 * output: 125
 *
 * Eg.2:-
 * input: nums = [9, 9, 9]
 * output: 1000
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

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