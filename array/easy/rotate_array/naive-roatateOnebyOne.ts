/**
 * #### Given an array of integers nums[] of size n, the task is to rotate the array elements to the left by k positions.
 *
 * Solution:- naive approach - rotating one by one
 *
 * Eg.1:-
 * input: nums = [1, 2, 3, 4, 5, 6], k=2
 * output: [3, 4, 5, 6, 1, 2]
 *
 * Eg.2:-
 * input: nums = [1, 2, 3], k=4
 * output: [2, 3, 1]
 *
 * Explanation:-
 *
 * After first left rotation, nums = [2, 3, 1],
 * After second left rotation, nums = [3, 1, 2],
 *
 * After third left rotation, nums = [1, 2, 3],
 * After fourth left rotation, nums = [2, 3, 1],
 *
 * Time Complexity: O(n*k);
 * Space Complexity: O(1);
 */

function rotate_array_one_element_each(
   nums: number[],
   left_rotate_count: number
): void {
   for (let i = 0; i < left_rotate_count; i++) {
      // we take the current first element
      let first_element = nums[0];

      // shift all the remaining elements 
      // to the left by one position
      for (let j = 0; j < nums.length - 1; j++) {
         nums[j] = nums[j + 1];
      }
      
      // place the first element as the last
      nums[nums.length - 1] = first_element;
   }
}

/**
 * ### 💡 Idea behind the approach:- 
 * 
 * The idea behind this approach is simple, we perform this one
 * simple thing k (left_rotate_count) times:-
 * In each rotation we shift all the elements to the left in a
 * circular fashion (the first element becomes the last)
 * 
 *
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 2, 3, 4, 5, 6], k=2
 * Function call:- rotate_array_one_element_each(nums);
 * 
 * Function execution:
 *    • Iterations:=
 *          (i=0) = first = 1
 *          (d=1) = shift nums[j] = nums[j+1] x (n times)
 *                = [_, 2, 3, 4, 5, 6];
 *                = [2, 3, 4, 5, 6, _];
 *                = place first at last
 *                = [2, 3, 4, 5, 6, 1];
 * 
 *          (i=1) = first = 2
 *          (d=2) = shift nums[j] = nums[j+1] x (n times)
 *                = [_, 3, 4, 5, 6, 1];
 *                = [3, 4, 5, 6, 1, _];
 *                = place first at last
 *                = [3, 4, 5, 6, 1, 2];
 * 
 * And that's it, we have now rotated out array two times.
 */