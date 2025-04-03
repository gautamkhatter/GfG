/**
 * #### Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times. Note: The returned array of majority elements should be sorted.
 *
 * Solution:- better approach - using a hashmap
 *
 * Eg.1:-
 * input: nums = [2, 2, 3, 1, 3, 2, 1, 1]
 * output: [1, 2]
 *
 * Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).
 *
 * Time Complexity: O(n);
 * Space Complexity: O(n);
 */

function majority_element_using_hashmap2(nums: number[]) {
   const length = nums.length;
   const freqMap = new Map();
   const majority: number[] = [];

   for (const element of nums) {
      freqMap.set(element, (freqMap.get(element) || 0) + 1);
   }

   for (const [element, freqCount] of freqMap.entries()) {
      if (freqCount > Math.floor(length / 3)) {
         majority.push(Number(element));
      }
   }

   if (majority.length === 2 && majority[0] > majority[1]) {
      [majority[0], majority[1]] = [majority[1], majority[0]];
   }
   return majority;
}

const nums2 = [2, 2, 3, 1, 3, 2, 1, 1];
console.log(majority_element_using_hashmap2(nums2));

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we use a hashmap to count the frequency
 * of each element. After counting we iterate over the hashmap and check for each
 * element's frequency is greater than floor(n/3).
 * 
 * Now there can only be at most two majority elements. Why?
 *    - Because a majority element must appear more than floor(n/3) times in the array.
 *    - As such, the majority element occupies more than 1/3 of array's space.
 *    - If entire array is 1/3 + 1/3 + 1/3 => 3/3 = 1 or 100%.
 *    - At most two elements can occupy more than 1/3 of the array, because if there's 
 *      more than two elements that occupy more than 1/3 of the array, these elements will
 *      exceed the array size and that is not possible.
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [2, 2, 3, 1, 3, 2, 1, 1]
 * Function call:- majority_element_using_hashmap(nums);
 *
 * Function execution:-
 *    • The dry run of this program is really simple, give it a try yourself.
 */
