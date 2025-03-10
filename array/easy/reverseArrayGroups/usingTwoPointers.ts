/**
 * ### 🤔 Question:-
 * Given an array arr[] and an integer k (group size), the task is to reverse every subarray 
 * formed by consecutive K (group) elements.
 *
 * #### 🧠 Solution:- best approach - using two pointers
 *
 * Eg.1:-
 * input: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3,
 * output: [(3,2,1), (6,5,4), (9,8,7)];
 *
 * Eg.2:-
 * input: nums = [1, 2, 3, 4, 5, 6], K = 1,
 * output: [1, 2, 3, 4, 5, 6]
 * 
 * Eg.3:-
 * input: nums = [1, 2, 3, 4, 5, 6, 7, 8], K = 10,
 * output: [8, 7, 6, 5, 4, 3, 2, 1]
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(1);
 */

function reverseArrayInGroups(nums: number[], groupSize: number): void {
   // iterating over the array with the fixed groupSize (k)
   for (let i = 0; i < nums.length; i += groupSize) {
      let left = i;
      // the main logic is determining the right pointer position 
      // and also checking that it remains in the array bounds
      let right = Math.min(i + groupSize - 1, nums.length - 1);
      while (left < right) {
         // this is array destructuring and assigning logic that is
         // a language feature that JS provides
         [nums[left], nums[right]] = [nums[right], nums[left]];
         left++;
         right--;
      }
   }
}

/**
 * ### 💡 Idea behind the approach:-
 * 
 * The idea behind this approach is that is we traverse the array according to the 
 * groupSize (K) and then for every groupSize or sub-array we reverse those elements.
 * But we need to take care of some edge cases:-
 * 
 *    - If groupSize (K) is not a multiple of the array length (n), then for the last
 *      group we will have less than (K) elements, and we have to reverse those elements 
 *      as well.
 *    
 *    - If groupSize (K) = 1, the array should remain unchanged and if groupSize is greater
 *      or equal to array length (K >= n), then we just need to reverse all the elements in
 *      array.
 *
 * 
 * ### 🤯 Dry run of the code:-
 * 
 * Eg: nums[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], K=3
 * Function call - reverseArrayInGroups(nums);
 *
 * Function execution:-
 *    • We start traversing the array where we start with left position to be 0
 *      and right position = i+groupSize-1 = 0+3-1 = 2
 *       
 *    • Iterations:=
 *                   l     r
 *          (i=0) = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *                = After the inner while loop runs the array becomes
 *                = [3, 2, 1, 4, 5, 6, 7, 8, 9]
 * 
 *                            l     r
 *          (i=3) = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *                = right = i+groupSize-1 = 3+3-1 = 5
 *                = After the inner while loop runs the array becomes
 *                = [(3, 2, 1), (6, 5, 4), 7, 8, 9]
 * 
 *                                     l     r
 *          (i=6) = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *                = right = i+groupSize-1 = 6+3-1 = 8
 *                = After the inner while loop runs the array becomes
 *                = [(3, 2, 1), (6, 5, 4), (7, 8, 9)]
 * 
 *    • At thats it we reversed our array in groups.
*/
