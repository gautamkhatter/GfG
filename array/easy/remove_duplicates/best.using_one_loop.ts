/**
 * #### Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order. Additionally, return the length of this distinct sorted subarray.
 *
 * Note: The elements after the distinct ones can be in any order and 
 * hold any value, as they don’t affect the result.
 * 
 * Solution:- best approach - using one traversal
 *
 * Eg.1:-
 * input: nums = [1, 2, 2, 3, 4, 4, 4, 5, 5]
 * output: 5 because distinct elements are [1, 2, 3, 4, 5]
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function remove_duplicates_using_one_loop(nums: number[]): number {
   const length = nums.length;
   if (length <= 1) return length;

   let distinct = 0;
   for (let i = 1; i < length; i++) {
      if (nums[i] !== nums[i - 1]) {
         nums[distinct++] = nums[i];
      }
   }

   return distinct;
}

