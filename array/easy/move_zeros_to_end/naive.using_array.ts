/**
 * #### Given an array of integers nums[], the task is to move all the zeros in the array to the end of the array while maintaining the relative order of all non-zero elements.
 *
 * Solution:- naive approach - using temporary array
 *
 * Eg.1:-
 * input: nums = [1, 2, 0, 4, 3, 0, 5, 0],
 * output: [1, 2, 4, 3, 5, 0, 0, 0]
 *
 * Eg.2:-
 * input: nums = [10, 20, 30],
 * output: [10, 20, 30]
 * 
 * Time Complexity: O(2n) = O(n);
 * Space Complexity: O(n);
 */

function move_zeros_to_end_using_temp_array(nums: number[]): void {
   // creating a pointer to track of the index from where we start
   // filling the zeros in temp array
   let temp_index = 0;

   // creating a temporary array of the same size as nums
   const temp = new Array(nums.length);

   // copying all the non zero elements from nums to temp 
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
         temp[temp_index++] = nums[i]; 
      }
   }

   // filling the remaining positions in temp array with 0
   for (let i = temp_index; i < temp.length; i++) {
      temp[i] = 0;
   }
   
   // copying all the elements from temp array to input array
   for (let i = 0; i < nums.length; i++) {
      nums[i] = temp[i];
   }
}

/**
 * ### 💡 Idea behind the approach:-
 * 
 * The idea behind this approach is that we create a temporary array of the same
 * size as the input array and do the following steps:-
 *    - We copy all non-zero elements from the input array to temp array.
 *    - Then, we fill the remaining positions in temp array with 0.
 *    - And finally we copy all the elements from temp to the input array.
 *
 * 
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 2, 0, 4, 3, 0, 5, 0]
 * Function call:- move_zeros_to_end_using_temp_array(nums);
 * 
 * Function execution:-
 *    • We first make a temp array of the same size as the input array. And
 *      we also make a pointer to keep track of the index from which we have to
 *      start filling the zeros.
 * 
 *    • Copying non-zero elements to temp      
 *         nums = [1, 2, 0, 4, 3, 0, 5, 0]
 *                           temp_index=5
 *         temp = [1, 2, 4, 3, 5]
 *    
 *    • Filling rest of the temp array with 0's
 *         temp = [1, 2, 4, 3, 5, 0, 0, 0];
 *    
 *    • Now, last step is just to copy temp back to nums
 *         nums[i] = temp[i];
 *         nums = [1, 2, 4, 3, 5, 0, 0, 0];
 */
