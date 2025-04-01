/**
 * ### 🤔 Question:-
 * Given an array arr. Find the majority element in the array. If no majority exists, 
 * return -1. A majority element in an array is an element that appears strictly more 
 * than arr.size() / 2 times in the array.
 *
 * #### 🧠 Solution:- best approach - using a hashmap
 *
 * Eg.1:-
 * input: nums = [1, 1, 2, 1, 3, 5, 1]
 * output: 1
 * 
 * Explanation: 1 appear 4 times which is more than  7 / 2 times 
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(n);
 */

function majority_element_using_hashmap(nums: number[]) {
   const length = nums.length;
   if (length === 1) return nums[0];
   const occ_map = new Map();

   for (const num of nums) {
      occ_map.set(num, (occ_map.get(num) || 0) + 1);
      if (occ_map.get(num) > length / 2) return num;
   }
   return -1;
}

/**
 * ### 💡 Idea behind the approach:-
 *  
 * The idea behind this approach is simple, we use a hashmap to track
 * the occurrence of each element, while traversing we do the following:=
 *    - While traversing we update the its count in the hashmap
 *    - After updating its count we check if count exceed length / 2
 *    - If such an element exists, we return it immediately.
 *    - If we found no such element we return -1;
 * 
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 1, 2, 1, 3, 5, 1]
 * Function call:- majority_element_using_hashmap(nums);
 * 
 * Function execution:-
 *     •  occ_map = {}
 *         -----------------------
 *           0  1  2  3  4  5  6
 *           |  |  |  |  |  |  |
 *          [1, 1, 2, 1, 3, 5, 1]
 *         -----------------------
 *        (num=1) => map.set(1, 1);
 *                => map.get(1) => 1 > 3 (false)
 * 
 *        (num=1) => map.set(1, 1+1)
 *                => map.get(1) => 2 > 3 (false)
 * 
 *        (num=2) => map.set(2,1);
 *                => map.get(2) => 1 > 3 (false)
 * 
 *        (num=1) => map.set(1, 2+1);
 *                => map.get(1) => 3 > 3 (false)
 * 
 *        (num=3) => map.get(3, 1);
 *                => map.get(3) => 1 > 3 (false);
 * 
 *        (num=5) => map.set(5,1);
 *                => map.get(5) => 1 > 3 (false)
 * 
 *        (num=1) => map.set(1, 3+1);
 *                => map.get(1) => 4 > 3 (true)
 *                => return 1;
 * 
 * And that's how using a hashmap we found the majority element in 
 * just one traversal.  
 */