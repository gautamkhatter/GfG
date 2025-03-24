/**
 * ### 🤔 Question:-
 * Given an array of n integers, the task is to find the third largest element. 
 * All the elements in the array are distinct integers. 
 * 
 * #### 🧠 Solution:- better approach - using three loops
 * 
 * Eg.1:-
 * input: nums[] = [1, 14, 2, 16, 10, 20],
 * output: 14
 * 
 * Eg.2:-
 * input: nums[] = [19, -10, 20, 14, 2, 16, 10],
 * output: 16
 * 
 *#### Time Complexity: O(3n) = O(n);
 *#### Space Complexity: O(1);
*/

function third_largest_by_using_three_loops(nums: number[]): number {
   let largest = -Infinity;
   let second_largest = -Infinity;
   let third_largest = -Infinity;

   // finding the largest element
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) largest = nums[i];
   }
   // finding the second largest element
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > second_largest && nums[i] < largest) {
         second_largest = nums[i];
      }
   }
   // finding the third largest element
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > third_largest && nums[i] < second_largest) {
         third_largest = nums[i];
      }
   }
   return third_largest;
}

/**
 * ### 💡 Idea behind the approach:-
 * 
 * The idea behind this approach is simple, we track largest, second largest 
 * and third largest element in the given array using three individual loops to
 * find each element.
 * 
 *
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 14, 2, 16, 10, 20]
 * Function call:- third_largest_by_using_three_loops(nums);
 * 
 * Function execution:-
 *    • In first loop one we find largest element which is 20
 *    
 *    • In second loop we find the second largest while comparing it with largest
 *      we find second largest to be 16.
 *    
 *    • In third loop we find our desired element while comparing the current
 *      element with the second largest, we find the element to be 14.
 */