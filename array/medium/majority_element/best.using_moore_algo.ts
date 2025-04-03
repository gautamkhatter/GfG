/**
 * #### Given an array arr. Find the majority element in the array. If no majority exists, return -1. A majority element in an array is an element that appears strictly more than arr.size() / 2 times in the array.
 *
 * Solution:- best expected approach - using Moore's voting algorithm.
 *
 * Eg.1:-
 * input: nums = [1, 1, 2, 1, 3, 5, 1]
 * output: 1
 * 
 * Explanation: 1 appear 4 times which is more than  7 / 2 times 
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function majority_element_using_moore_voting_algorithm(nums: number[]) {
   const length = nums.length;
   let majority_candidate = -1;
   let occ_count = 0;

   for (const current_element of nums) {
      if (occ_count === 0) {
         majority_candidate = current_element;
         occ_count = 1;
      } else if (current_element === majority_candidate) {
         occ_count++;
      } else {
         occ_count--;
      }
   }

   occ_count = 0;
   for (const current_element of nums) {
      if (current_element === majority_candidate) {
         occ_count++;
      }
   }

   if (occ_count > length / 2) {
      return majority_candidate;
   } else {
      return -1;
   }
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, finding the majority element
 * is a two step process:=
 * 
 * First Step:=
 * -------------
 *    - This step gives us our majority element (if there exists one) otherwise
 *      it will return the candidate that may be the majority element
 * 
 * Second Step:=
 * --------------
 *    - We check if the candidate for the majority element obtained from the above
 *      step is really the majority element. This step is necessary because we
 *      may not find any majority element.
 * 
 * These are steps we will take to accomplish the above two steps:=
 *    - We initialize a candidate variable and occurrence variable
 *    - We traverse the array only once:=
 *          = If occ is 0, we set the current element as our candidate and set occ to 1.
 *          = If the current element equals the candidate, we increment our occ number.
 *          = If the current element differs from the candidate then we decrement occ.
 *    - Then after finding our candidate, we traverse the array again to count its
 *      occurrences.
 *    - If the candidate's count is greater than n/2, this is then our majority element.
 * 
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [1, 1, 2, 1, 3, 5, 1]
 * Function call:- majority_element_using_moore_voting_algorithm(nums);
 *
 * Function execution:-
 *    • candid = -1;
 *    • occ = 0;
 *    • first loop to find our candidate for majority element
 *         -----------------------
 *           0  1  2  3  4  5  6
 *           |  |  |  |  |  |  |
 *          [1, 1, 2, 1, 3, 5, 1]
 *         -----------------------
 *          (el=1) => occ == 0 (true)
 *                 => candid = el => candid=1;
 *                 => occ = 1;
 * 
 *          (el=1) => occ == 0 (false)
 *                 => else(el == candid)
 *                 => 1 == 1 (true)
 *                 => occ++ => occ=2;
 * 
 *          (el=2) => occ == 0 (false)
 *                 => else(el == candid) 
 *                 => 2 == 1 (false)
 *                 => else occ--
 *                 => occ = 1;
 * 
 *          (el=1) => occ == 0 (false)
 *                 => else(el == candid)
 *                 => 1 == 1 (true)
 *                 => occ++ => occ=2;
 * 
 *          (el=3) => occ == 0 (false)
 *                 => else(el == candid) 
 *                 => 3 == 1 (false)
 *                 => else occ--
 *                 => occ = 1;
 * 
 *          (el=5) => occ == 0 (false)
 *                 => else(el == candid)
 *                 => 5 == 1 (false)
 *                 => else occ--;
 *                 => occ = 0;
 * 
 *          (el=1) => occ == 0 (true)
 *                 => candid = el => candid=1; 
 *                 => occ = 1;
 * 
 * Now that we have our majority candidate, we now find its occurrence frequency in
 * the array:=
 *         -----------------------
 *           0  1  2  3  4  5  6
 *           |  |  |  |  |  |  |
 *          [1, 1, 2, 1, 3, 5, 1]
 *         -----------------------
 *          occ = 0;
 *          (el=1) => el == candid
 *                 => 1 == 1 (true)
 *                 => occ++ => occ=1;
 * 
 *          (el=1) => el == candid
 *                 => 1 == 1 (true)
 *                 => occ++ => occ=2;
 * 
 *          (el=2) => el == candid
 *                 => 2 == 1 (false)
 *
 *          (el=1) => el == candid
 *                 => 1 == 1 (true)
 *                 => occ++ => occ=3;
 * 
 *          (el=3) => el == candid
 *                 => 3 == 1 (false)
 *
 *          (el=5) => el == candid
 *                 => 5 == 1 (false)
 *                
 *          (el=1) => el == candid
 *                 => 1 == 1 (true)
 *                 => occ++ => occ=4;          
 *          
 * Now, we check if occ frequency of our majority candidate satisfies the majority condition
 *          => occ > len/2
 *          => 4 > 7/2 => 4 > 3 (true)
 *          => return 1;
 * 
 * And that's it, we have found our majority element using moore's voting algorithm.
 */
