/**
 * ### 🤔 Question:-
 * Given an array arr[] and an integer k (group size), the task is to reverse every subarray 
 * formed by consecutive K (group) elements.
 *
 * #### 🧠 Solution:- best approach - using two pointers
 *
 * 💭 Ex.1:-
 * Input: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3,
 * Output: [(3,2,1), (6,5,4), (9,8,7)];
 *
 * 💭 Ex.2:-
 * Input: nums = [1, 2, 3, 4, 5, 6], K = 1,
 * Output: [1, 2, 3, 4, 5, 6]
 * 
 * 💭 Ex.3:-
 * Input: nums = [1, 2, 3, 4, 5, 6, 7, 8], K = 10,
 * Output: [8, 7, 6, 5, 4, 3, 2, 1]
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(1);
 */

function reverseArrayInGroups(nums: number[], groupSize: number): void {
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
 * ### 💡 Idea:-
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
 * ### 🤯 Dry Run:-
 * Eg: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], K=3
 *
 * Call - reverseArrayInGroups(nums);
 *
 * Inside Function:
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
