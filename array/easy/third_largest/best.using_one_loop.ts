/**
 * #### Given an array of n integers, the task is to find the third largest element. All the elements in the array are distinct integers.
 *
 * Solution:- best approach - using one loop
 *
 * Eg.1:-
 * input: nums[] = [1, 14, 2, 16, 10, 20],
 * output: 14
 *
 * Eg.2:-
 * input: nums[] = [19, -10, 20, 14, 2, 16, 10],
 * output: 16
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function third_largest_by_using_one_loop(nums: number[]): number {
   let largest = -Infinity;
   let second_largest = -Infinity;
   let third_largest = -Infinity;

   for (let i = 0; i < nums.length; i++) {
      // update the values if the current element is the largest value
      if (nums[i] > largest) {
         third_largest = second_largest;
         second_largest = largest;
         largest = nums[i];
      }

      // update the values if the current element is greater than second
      else if (nums[i] > second_largest) {
         third_largest = second_largest;
         second_largest = nums[i];
      }
         
      // last check if the current element is greater than third_largest
      // but smaller then both second and largest values.
      else if (nums[i] > third_largest) {
         third_largest = nums[i];
      }
   }
   return third_largest;
}

/**
 * ### 💡 Idea behind the code:-
 * 
 * The idea behind this approach is simple, we track largest, second largest
 * and third largest element in the given array using only one loop.
 *
 *
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 14, 2, 16, 10, 20]
 * Function call:- third_largest_by_using_one_loop(arr);
 *
 * Inside Function execution:-
 *    • In the first if check, we check if the current element is the largest element
 *      then we update the values of:
 *          third = second
 *          second = largest
 *          largest = nums[i]
 *
 *    • In second if check we check if the current element is greater than secondLargest
 *      then we update the values of second largest and third largest
 *
 *    • In third if check we check if the current element is greater then the third largest.
 *      We need this check if the element is greater than thirdLargest but smaller than both
 *      second largest and largest.
 */
