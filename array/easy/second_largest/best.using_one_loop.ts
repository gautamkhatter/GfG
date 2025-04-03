/**
 * #### Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array. Note: If the second largest element does not exist, return -1.
 *
 * Solution:- best approach - using only one loop
 *
 * Eg.1:-
 * input: nums[] = [12, 35, 1, 10, 34, 1],
 * output: 34
 *
 * Eg.2:-
 * input: nums[] = [10, 10, 10],
 * output: -1
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function second_largest_using_one_loop(nums: number[]): number {
   let largest = -Infinity;
   let second_largest = -Infinity;

   // traversing the array and tracking both elements at the same time
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
         second_largest = largest;
         largest = nums[i];
      } else if (nums[i] < largest && nums[i] > second_largest) {
         second_largest = nums[i];
      }
   }
   return second_largest === -Infinity ? -1 : second_largest;
}

const arr3 = [12, 35, 1, 10, 34, 1];
console.log(second_largest_using_one_loop(arr3));

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we keep track of largest ans second
 * largest in a single loop.
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [12, 35, 1, 10, 34, 1]
 * Function call:- second_largest_using_one_loop(arr);
 *
 * Function execution:
 *    • We declare two variables that are largest and second largest value.
 *
 *    • In the first loop we find the largest element in the array
 *      Eg: Iteration 1:
 *             nums[i] > largest = 12 > -Infinity = (true)
 *                second_largest = -Infinity
 *                largest = 12
 *
 *          Iteration 2:
 *             nums[i] > largest = 35 > 12 = (true);
 *             second_largest = 12
 *             largest = 35
 *          and so on...
 *          Finally we get largest = 35, second_largest = 34;
 *
 *    • At last we check if we find any second largest element, if not we return -1;
 */
