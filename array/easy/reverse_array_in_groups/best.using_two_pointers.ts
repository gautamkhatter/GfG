/**
 * #### Given an array arr[] and an integer k (group size), the task is to reverse every subarray formed by consecutive K (group) elements.
 *
 * Solution:- best approach - using two pointers
 *
 * Eg.1:-
 * input: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3,
 * output: [(3,2,1), (6,5,4), (9,8,7)];
 *
 * Eg.2:-
 * input: nums = [1, 2, 3, 4, 5, 6], K = 1,
 * output: [1, 2, 3, 4, 5, 6]
 *
 * Eg.3:-
 * input: nums = [1, 2, 3, 4, 5, 6, 7, 8], K = 10,
 * output: [8, 7, 6, 5, 4, 3, 2, 1]
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function reverse_array_in_groups(nums: number[], group_size: number): void {
   // iterating over the array with the fixed group_size (k)
   for (let i = 0; i < nums.length; i += group_size) {
      let left_pointer = i;
      // the main logic is determining the right_pointer pointer position
      // and also checking that it remains in the array bounds
      let right_pointer = Math.min(i + group_size - 1, nums.length - 1);
      while (left_pointer < right_pointer) {
         // this is array destructuring and assigning logic that is
         // a language feature that JS provides
         [nums[left_pointer], nums[right_pointer]] = [
            nums[right_pointer],
            nums[left_pointer],
         ];
         left_pointer++;
         right_pointer--;
      }
   }
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is that is we traverse the array according to the
 * group_size (K) and then for every group_size or sub-array we reverse those elements.
 * But we need to take care of some edge cases:-
 *
 *    - If group_size (K) is not a multiple of the array length (n), then for the last
 *      group we will have less than (K) elements, and we have to reverse those elements
 *      as well.
 *
 *    - If group_size (K) = 1, the array should remain unchanged and if group_size is greater
 *      or equal to array length (K >= n), then we just need to reverse all the elements in
 *      array.
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg: nums[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], K=3
 * Function call - reverse_array_in_groups(nums);
 *
 * Function execution:-
 *    • We start traversing the array where we start with left_pointer position to be 0
 *      and right_pointer position = i+group_size-1 = 0+3-1 = 2
 *
 *    • Iterations:=
 *                   l     r
 *          (i=0) = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *                = After the inner while loop runs the array becomes
 *                = [3, 2, 1, 4, 5, 6, 7, 8, 9]
 *
 *                            l     r
 *          (i=3) = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *                = right_pointer = i+group_size-1 = 3+3-1 = 5
 *                = After the inner while loop runs the array becomes
 *                = [(3, 2, 1), (6, 5, 4), 7, 8, 9]
 *
 *                                     l     r
 *          (i=6) = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *                = right_pointer = i+group_size-1 = 6+3-1 = 8
 *                = After the inner while loop runs the array becomes
 *                = [(3, 2, 1), (6, 5, 4), (7, 8, 9)]
 *
 *    • At thats it we reversed our array in groups.
 */
