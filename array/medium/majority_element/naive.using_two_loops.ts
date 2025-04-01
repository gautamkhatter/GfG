/**
 * ### 🤔 Question:-
 * Given an array arr. Find the majority element in the array. If no majority exists, 
 * return -1. A majority element in an array is an element that appears strictly more 
 * than arr.size() / 2 times in the array.
 *
 * #### 🧠 Solution:- naive approach - using two nested loops
 *
 * Eg.1:-
 * input: nums = [1, 1, 2, 1, 3, 5, 1]
 * output: 1
 * Explanation: 1 appear 4 times which is more than  7 / 2 times 
 *
 *#### Time Complexity: O(n^2);
 *#### Space Complexity: O(1);
 */

function majority_element_using_two_nested_loops(nums: number[]): number {
   let length = nums.length
   // loop where each element is considered a majority element
   for (let i = 0; i < length; i++) {
      let count = 0;
      // inner loop to count the occurrences of nums[i]
      for (let j = 0; j < length; j++) {
         if (nums[i] === nums[j]) count++;
      }
      // check if count of nums[i] is more than half the size of the array
      if (count > length / 2) return nums[i];
   }
   return -1;
}

/**
 * ### 💡 Idea behind the approach:-
 *  
 * The idea behind this approach is simple, we count the frequency of each element
 * using nested loops.
 * 
 * The loops have the following responsibilities:=
 * First loop:=
 *    - It will treat each element as the majority element
 * Second loop:=
 *    - It will count all the occurrences in the entire array
 * 
 * After the second loop, we check if the occurrences of this element more than n/2
 * times, where 'n' is the size of the array.
 * If this condition checks out then it is the majority element.
 * 
 *
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 1, 2, 1, 3, 5, 1]
 * Function call:- majority_element_using_two_nested_loops(nums);
 * 
 * Function execution:-
 *    • First loop:
 *          (i=0)
 *          nums[0] = 1
 *          count = 0
 *             Inner loop: check how many times 1 occurs
 *                 0  1  2  3  4  5  6
 *                [1, 1, 2, 1, 3, 5, 1]
 * 
 *                (j=0) => nums[j] == nums[i]
 *                      => nums[0] == nums[0]
 *                      => 1 == 1 => true
 *                      => count++ => count=1
 *                
 *                (j=1) => nums[j] == nums[i]
 *                      => nums[1] == nums[0]
 *                      => 1 == 1 => true
 *                      => count++ => count=2
 *                
 *                (j=2) => nums[j] == nums[i]
 *                      => nums[2] == nums[0]
 *                      => 2 == 1 => false
 *             
 *                (j=3) => nums[j] == nums[i]
 *                      => nums[3] == nums[0]
 *                      => 1 == 1 => true
 *                      => count++ => count=3
 *             
 *                (j=4) => nums[j] == nums[i]
 *                      => nums[4] == nums[0]
 *                      => 3 == 1 => false
 *                
 *                (j=5) => nums[j] == nums[i] 
 *                      => nums[5] == nums[0] 
 *                      => 5 == 1 => false
 *             
 *                (j=6) => nums[j] == nums[i]
 *                      => nums[6] == nums[0]
 *                      => 1 == 1 => true
 *                      => count++ => count=4
 *                check if count > length / 2
 *                      => 4 > 7/2
 *                      => 4 > 3 (true) 
 *                      => return 1 as the majority element
 * 
 * And that's it we have found majority element in the array
 */


