/**
 * ### 🤔 Question:-
 * Given an array of integers nums[], the task is to move all the zeros in the array
 * to the end of the array while maintaining the relative order of all non-zero elements.
 *
 * #### 🧠 Solution:- better approach - using sorting
 *
 * Eg.1:-
 * input: nums = [10, 3, 5, 6, 20],
 * output: 1200 (explanation: multiplication of 10, 6 and 20)
 *
 * Eg.2:-
 * input: nums =  [-10, -3, -5, -6, -20],
 * output: -90
 * 
 *#### Time Complexity: O(nlogn);
 *#### Space Complexity: O(1);
 */

function maxProductTripletBySorting(nums: number[]) {
   // sorting the array in non-decreasing order 
   // (ascending order which allows for duplicate elements)
   nums.sort((a, b) => a - b);
   // Checking if array contains -ve numbers then maybe 
   // first two elements can become positive by multiplying them.
   return Math.max(
      nums[0] * nums[1] * nums[nums.length - 1],
      nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
   );
}

/**
 * ### 💡 Idea behind the approach:-
 * 
 * The idea behind this approach is simple, we sort the array.
 * So, the triplets that we want are these two:-
 *    - All positive integers:- Then the triplets are last three elements
 *    - Two negative integers:- The the triplets can be first two elements (because 
 *      multiplying two negatives gives positive) and the last element in the array
 *      which is the biggest element.
 * 
 * 
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [10, 3, 5, 6, 20]
 * Function call:- maxProductTripletBySorting(nums);
 * 
 * Function execution:-
 *    • We sort the array and we get:-
 *          = [2, 5, 6, 10, 20];
 *          = max(2*5*20, 6*10*20);
 *          = return 6*10*20 = 1200;
 * 
 * Now if our array is this: [-10, -3, -5, -6, -20];
 *    • We sort the array and we get:-
 *          = [-20, -10, -6, -5, -3];
 *          = max((-20 * -10 * -3), (-5 * -6 * -3))
 *          = max(-600, -90)
 *          = return -90
*/

