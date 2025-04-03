/**
 * #### Given an unsorted array of integers, sort the array into a wave array.
 *
 * Solution:- naive approach - using sorting
 *
 * Eg.1:-
 * input: nums = [10, 5, 6, 3, 2, 20, 100, 80]
 * output: [10, 5, 6, 2, 20, 3, 100, 80] 
 *
 * Explanation: here you can see {10, 5, 6, 2, 20, 3, 100, 80} first element is 
 * larger than the second, and the same thing is repeated again and again.
 * 
 * (large element – small element- large element) or
 * (small element - larger element – small element)
 * are acceptable answers, all we need is to make sure this patterns
 * holds for the entire array.
 *  
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1);
*/

function sort_in_wave_using_sorting(nums: number[]): void {
   nums.sort((a, b) => a - b);
   for (let i = 0; i < nums.length; i += 2) {
      let temp = nums[i];
      nums[i] = nums[i+1];
      nums[i+1] = temp;
   }
}

let nums = [10, 5, 6, 3, 2, 20, 100, 80];
sort_in_wave_using_sorting(nums);
console.log(nums);

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we sort the elements
 * and then we swap the adjacent elements. Here's the following steps:
 *    - We sort the array
 *    - Then, we traverse the array from 0 to n-1 but incrementing
 *      each iteration with 2
 *    - While traversing we swap num[i] = nums[i+1];
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [10, 5, 6, 3, 2, 20, 100, 80]
 * Function call:- sort_in_wave_using_sorting(nums);
 *
 * Function execution:
 *    • We call the sort method and get this
 *       [2, 3, 5, 6, 10, 20, 80, 100];
 * 
 *    • Swap Iterations:-
 **          i i+1
 **         [2, 3, 5, 6, 10, 20, 80, 100];
 *           0  1  2  3  4   5   6    7
 *         --------------------------------
 *          (i=0) = swap(i, i+1)
 *                = nums[i] = nums[i+1]
 *                = nums[0] = nums[1]
 *                = nums[0] = 3
 *                = nums[1] = 2
 **               = i+= 2 => i=2
 * 
 * 
 **                i i+1
 **         [3, 2, 5, 6, 10, 20, 80, 100];
 *           0  1  2  3  4   5   6    7
 *         --------------------------------
 *          (i=2) = swap(i, i+1)
 *                = nums[i] = nums[i+1]
 *                = nums[2] = nums[3]
 *                = nums[2] = 6
 *                = nums[3] = 5
 **               = i+= 2 => i=4
 *
 * 
 **                       i  i+1
 **         [3, 2, 6, 5, 10, 20, 80, 100];
 *           0  1  2  3  4   5   6    7
 *         --------------------------------
 *          (i=4) = swap(i, i+1)
 *                = nums[i] = nums[i+1]
 *                = nums[4] = nums[5]
 *                = nums[4] = 20
 *                = nums[5] = 10
 **               = i+= 2 => i=6
 *
 * 
 **                               i  i+1
 **         [3, 2, 6, 5, 20, 10, 80, 100];
 *           0  1  2  3  4   5   6    7
 *         --------------------------------
 *          (i=6) = swap(i, i+1)
 *                = nums[i] = nums[i+1]
 *                = nums[6] = nums[7]
 *                = nums[6] = 100
 *                = nums[7] = 80
 **               = i+= 2 => i=8 (loop ends)
 *
 *         
 * Final answer after wavy sorting = [3, 2, 6, 5, 20, 10, 100, 80];
 */
