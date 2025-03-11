/**
 * ### 🤔 Question:-
 * Given an array nums[] consisting of only 0’s and 1’s, the task is to find 
 * the count of a maximum number of consecutive 1’s or 0’s present in the array.
 *
 * #### 🧠 Solution:- best approach - using loop
 *
 * Eg.1:-
 * input: nums = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
 * output: 4 
 * 
 * Explanation: the maximum number of consecutive 1’s 
 * in the array is 4 from index 8-11.
 *
 * Eg.2:-
 * input: nums = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
 * output: 2 
 * 
 * Explanation: the maximum number of consecutive 0’s 
 * in the array is 2 from index 0-1.
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(1);
 */

function maxConsecutiveCountUsingLoop(nums: number[]): number {
   let maxConsecutiveCount = 0, currentCount = 1;
   for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
         // if previous element is same as the current one
         // increase the current count.
         currentCount++;
      } else {
         // we check if the current count is greater than the previous
         // max consecutive count, we just then store the max of both values
         maxConsecutiveCount = Math.max(maxConsecutiveCount, currentCount);
         currentCount = 1;
      }
   }
   return Math.max(maxConsecutiveCount, currentCount);
}

/**
 * ### 💡 Idea behind the code:-
 * 
 * The idea behind this approach is simple, we traverse the array
 * and keep track of the current streak of consecutive 1's or 0's.
 * If we find an element that breaks the current streak, we update 
 * the currentMaxCount and we reset our counter to 1. 
 *
 *
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 ** Function call:- maxConsecutiveCountUsingLoop(arr);
 *
 * Inside Function execution:-
 *    • We initialize our currentMaxCount=0 and count=1
 *    
 *    • Why count=1 and not 0?
 *      Because the first element of any sequence is part of the 
 *      current count.
 * 
 **    0  1  2  3  4  5  6  7  8  9  10 11
 *     -  -  -  -  -  -  -  -  -  -  -  -
 **   [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 * 
 *    • Iterations:=
 **         currentMax = 0
 *          (i=1) = nums[i] === nums[i-1]
 *                = nums[1] === nums[0] => 1==1 => true
 *                = count++ => 2
 * 
 **         currentMax = 0
 *          (i=2) = nums[i] === nums[i-1]
 *                = nums[2] === nums[1] => 0==1 => false
 *                = currentMax = max(0, 2) => 2
 *                = count = 1
 * 
 **         currentMax = 2
 *          (i=3) = nums[i] === nums[i-1]
 *                = nums[3] === nums[2] => 0==0 => true
 *                = count++ => 2
 *
 **         currentMax = 2
 *          (i=4) = nums[i] === nums[i-1]
 *                = nums[4] === nums[3] => 1==0 => false
 *                = currentMax = max(2, 2) => 2
 *                = count = 1
 * 
 **         currentMax = 2
 *          (i=5) = nums[i] === nums[i-1]
 *                = nums[5] === nums[4] => 0==1 => false
 *                = currentMax = max(2, 1) => 2
 *                = count = 1
 * 
 **         currentMax = 2
 *          (i=6) = nums[i] === nums[i-1]
 *                = nums[6] === nums[5] => 1==0 => false
 *                = currentMax = max(2, 1) => 2
 *                = count = 1
 * 
 **         currentMax = 2 
 *          (i=7) = nums[i] === nums[i-1]
 *                = nums[7] === nums[6] => 0==1 => false
 *                = currentMax = max(2, 1) => 2
 *                = count = 1
 * 
 **         currentMax = 2
 *          (i=8) = nums[i] === nums[i-1]
 *                = nums[8] === nums[7] => 1==0 => false
 *                = currentMax = max(2, 1) => 2
 *                = count = 1
 * 
 **         currentMax = 2
 *          (i=9) = nums[i] === nums[i-1]
 *                = nums[9] === nums[8] => 1==1 => true
 *                = count++ => 2
 * 
 **         currentMax = 2
 *          (i=10) = nums[i] === nums[i-1]
 *                 = nums[10] === nums[9] => 1==1 => true
 *                 = count++ => 3
 * 
 **         currentMax = 2
 *          (i=11) = nums[i] === nums[i-1]
 *                 = nums[11] === nums[10] => 1==1 => true
 *                 = count++ => 4
 * 
 **         return max(maxConsecutiveCount, currentCount)
 **              = max(2, 4)
 **         return = 4
 
 * Now after the loop ends, we just return the max(currentMax, count);
 */
