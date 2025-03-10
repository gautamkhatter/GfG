/**
 * ### 🤔 Question:-
 * Given an array of n integers, the task is to find the third largest element.
 * All the elements in the array are distinct integers.
 *
 * #### 🧠 Solution:- best approach - using one loop
 *
 * Eg.1:-
 * input: nums[] = [1, 14, 2, 16, 10, 20],
 * output: 14
 *
 * Eg.2:-
 * input: nums[] = [19, -10, 20, 14, 2, 16, 10],
 * output: 16
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(1);
 */

function thirdLargestUsingOneLoop(nums: number[]): number {
   let largest = -Infinity;
   let secondLargest = -Infinity;
   let thirdLargest = -Infinity;

   for (let i = 0; i < nums.length; i++) {
      // update the values if the current element is the largest value
      if (nums[i] > largest) {
         thirdLargest = secondLargest;
         secondLargest = largest;
         largest = nums[i];
      }
      // update the values if the current element is greater than second
      else if (nums[i] > secondLargest) {
         thirdLargest = secondLargest;
         secondLargest = nums[i];
      }
      // last check if the current element is greater than thirdLargest
      // but smaller then both second and largest values.
      else if (nums[i] > thirdLargest) {
         thirdLargest = nums[i];
      }
   }
   return thirdLargest;
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
 * Function call:- thirdLargestUsingOneLoops(arr);
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
