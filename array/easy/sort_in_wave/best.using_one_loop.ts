/**
 * #### Given an unsorted array of integers, sort the array into a wave array.
 *
 * Solution:- best approach - using one loop
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
 * Time Complexity: O(n)
 * Space Complexity: O(1);
*/

function sort_in_wave_using_one_loop(nums: number[]) {
   let length = nums.length;
   for (let i = 0; i < length-1; i += 2) {
      if (i > 0 && nums[i - 1] > nums[i]) {
         swap(nums, i - 1, i);
      }
      if (i < length - 1 && nums[i] < nums[i + 1]) {
         swap(nums, i, i + 1);
      }
   }
}

function swap(nums: number[], a: number, b: number) {
   let temp = nums[a];
   nums[a] = nums[b];
   nums[b] = nums[a];
}
 
/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we should observe from
 * the fact that the wavy form that we want to achieve can be 
 * obtained easily if we make sure that all even positioned 
 * elements (0, 2, 4...) are smaller / greater than their adjacent
 * odd elements, this way we don't need to worry about odd elements.
 * 
 * To do this we do the following steps:-
 *    - We traverse all even positioned elements of input array
 *      and then we do the following in that iteration:-
 * 
 *           • If the current element (even position) is greater
 *             than the previous element (odd position), we swap
 *             these two elements
 * 
 *           • Also we should make sure that if the current element
 *             (even position) is greater than the next element (odd
 *             position), we swap these two element.
 * 
 * These steps are for the wavy sorting in which we have (l, s, l),if
 * we want to change this and do sorting in (s, l, s) we then just
 * compare if the previous and next element are smaller than the current
 * even positioned element. 
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [10, 5, 6, 3, 2, 20, 100, 80]
 * Function call:- sort_in_wave_using_one_loop(nums);
 *
 * Function execution:
 *    • Iterations:- length of array = 8
 *    
 **         i i+1       
 **       [10, 5, 6, 3, 2, 20, 100, 80]
 *          0  1  2  3  4  5    6   7
 *       --------------------------------
 *          (i=0) = first if condition
 *                = i > 0 (false)
 *                =
 *                = second if condition
 *                = i < length-1 => 0 < 7 (true)
 *                = && nums[i] < nums[i+1]
 *                = 10 < 5 (false)
 *                =
 *                = no swapping
 *                = i+=2 => i=2
 * 
 * 
 **           (i-1) (i) (i+1) 
 **       [10,  5,   6,   3,  2,  20,  100,  80]
 *          0   1    2    3   4   5     6    7
 *       --------------------------------
 *          (i=2) = first if condition
 *                = i > 0 => 2 > 0 (true)
 *                = && nums[i-1] > nums[i]
 *                = 5 > 6 (false)
 *                =
 *                = second if condition
 *                = i < length-1 => 2 < 7 (true)
 *                = && nums[i] < nums[i+1]
 *                = 6 < 3 (false)
 *                =
 *                = no swapping
 *                = i+=2 => i=4
 * 
 * 
 **                    (i-1) (i) (i+1) 
 **       [10,  5,   6,  3,   2,  20,  100,  80]
 *          0   1    2   3    4   5     6    7
 *       --------------------------------
 *          (i=4) = first if condition
 *                = i > 0 => 4 > 0 (true)
 *                = && nums[i-1] > nums[i]
 *                = 3 > 2 (true)
 *                = swap(i-1, i) => swap(3,2)
 **               = nums = [10,5,6,2,3,20,100,80]
 *                =
 *                = second if condition
 *                = i < length-1 => 4 < 7 (true)
 *                = && nums[i] < nums[i+1]
 *                = 3 < 20 (true)
 *                = swap(i, i+1) => swap(3,20)
 **               = nums = [10,5,6,2,20,3,100,80]  
 *                =
 *                = i+=2 => i=6
 * 
 * 
 **                             (i-1) (i) (i+1) 
 **       [10,  5,   6,  2,  20,  3,  100,  80]
 *          0   1    2   3   4    5     6    7
 *       --------------------------------
 *          (i=6) = first if condition
 *                = i > 0 => 6 > 0 (true)
 *                = && nums[i-1] > nums[i]
 *                = 3 > 100 (false)
 *                =
 *                = second if condition
 *                = i < length-1 => 6 < 7
 *                = && nums[i] < nums[i+1]
 *                = 100 < 80 (false)
 *                = no swapping 
 *                =
 *                = i+=2 => i=8
 * 
 * 
 **                             (i-1) (i) (i+1) 
 **       [10,  5,   6,  2,  20,  3,  100,  80]
 *          0   1    2   3   4    5     6    7
 *       --------------------------------
 *          (i=8) = for condition => i < length-1
 *                = 8 < 7 (false) => loop ends
 * 
 * At the end we have our sorted array:= [10, 5, 6, 2, 20, 3, 100, 80]
 */
