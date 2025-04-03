/**
 * #### Given an array arr. Find the majority element in the array. If no majority exists, return -1. A majority element in an array is an element that appears strictly more than arr.size() / 2 times in the array.
 *
 * Solution:- better approach - using sorting
 *
 * Eg.1:-
 * input: nums = [1, 1, 2, 1, 3, 5, 1]
 * output: 1
 * 
 * Explanation: 1 appear 4 times which is more than  7 / 2 times 
 *
 * Time Complexity: O(nlogn);
 * Space Complexity: O(n);
 */

function majority_element_using_sorting(nums: number[]) {
   const length = nums.length;
   if (length === 1) return nums[0];

   let occurrence = 1;
   nums.sort((a, b) => a - b);

   for (let majority = 1; majority < length; majority++) {
      if (nums[majority - 1] === nums[majority]) {
         occurrence++;
      } else {
         if (occurrence > Math.floor(length / 2)) {
            return nums[majority - 1];
         }
         occurrence = 1;
      }
   }

   // checking the condition for the last element
   if (occurrence > Math.floor(length / 2)) {
      return nums[length - 1];
   }

   return -1;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we sort the array so that the
 * similar elements are next to each other, then once the array is sorted we
 * go through the array and keep track of how many times each element occurs.
 *
 * When we encounter a different element, the before resetting the occurrence 
 * we check that the previous elements occurrence satisfies our condition for 
 * the majority element.
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [1, 1, 2, 1, 3, 5, 1]
 * Function call:- majority_element_using_sorting(nums);
 *
 * Function execution:-
 *    • check length == 1 => false
 *       continue,
 *    • occ=1
 *    • sort the array => [1,1,1,1,2,3,5]
 *    • traverse to find occurrence of majority element
 *         -----------------------
 *           0  1  2  3  4  5  6
 *           |  |  |  |  |  |  |
 *          [1, 1, 1, 1, 2, 3, 5]
 *         -----------------------
 *          (maj=1) => nums[maj-1] == nums[maj]
 *                  => nums[0] == nums[1]
 *                  => 1 == 1 => true
 *                  => occ++ => occ = 2;
 *          
 *          (maj=2) => nums[maj-1] == nums[maj]
 *                  => nums[1] == nums[2]
 *                  => 1 == 1 => true
 *                  => occ++ => occ = 3;
 *    
 *          (maj=3) => nums[maj-1] == nums[maj]
 *                  => nums[2] == nums[3]
 *                  => 1 == 1 => true
 *                  => occ++ => occ = 4;
 * 
 *          (maj=4) => nums[maj-1] == nums[maj]
 *                  => nums[3] == nums[4]
 *                  => 1 == 2 => false
 *                  => now we check the else condition
 *                         => occ > length/2 => 4 > 7/2
 *                         => 4 > 2 => true, so we return nums[maj-1]
 *                         => nums[maj-1] => maj[4-1] => maj[3] = 1
 *                         => return 1 as the majority element.
 * 
 * And that's it now we have found our majority element using sorting.
 */
