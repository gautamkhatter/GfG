/**
 * ### 🤔 Question:-
 * Given an array of n integers, the task is to find the third largest element. 
 * All the elements in the array are distinct integers. 
 * 
 * #### 🧠 Solution:- better approach - using three loops
 * 
 * 💭 Ex.1:-
 * Input: arr[] = [1, 14, 2, 16, 10, 20],
 * Output: 14
 * 
 * 💭 Ex.2:-
 * Input: arr[] = [19, -10, 20, 14, 2, 16, 10],
 * Output: 16
 * 
 *#### Time Complexity: O(3n) = O(n);
 *#### Space Complexity: O(1);
*/

function thirdLargestUsingThreeLoops(nums: number[]): number {
   let largest = -Infinity;
   let secondLargest = -Infinity;
   let thirdLargest = -Infinity;

   // finding the largest element
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) largest = nums[i];
   }
   // finding the second largest element
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > secondLargest && nums[i] < largest) {
         secondLargest = nums[i];
      }
   }
   // finding the third largest element
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > thirdLargest && nums[i] < secondLargest) {
         thirdLargest = nums[i];
      }
   }
   return thirdLargest;
}

/**
 * ### 💡 Idea:- 
 * The idea behind this approach is simple, we track largest, second largest 
 * and third largest element in the given array using three individual loops to
 * find each element.
 * 
 *
 * ### 🤯 Dry Run:-
 * Eg: arr[] = [1, 14, 2, 16, 10, 20]
 * 
 * Call - thirdLargestUsingThreeLoops(arr);
 * 
 * Inside Function:
 *    • In first loop one we find largest element which is 20
 *    
 *    • In second loop we find the second largest while comparing it with largest
 *      we find second largest to be 16.
 *    
 *    • In third loop we find our desired element while comparing the current
 *      element with the second largest, we find the element to be 14.
 */