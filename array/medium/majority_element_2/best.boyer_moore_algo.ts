/**
 * #### Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times. Note: The returned array of majority elements should be sorted.
 *
 * Solution:- best approach - using Boyer Moore's voting algorithm
 *
 * Eg.1:-
 * input: nums = [2, 2, 3, 1, 3, 2, 1, 1]
 * output: [1, 2]
 *
 * Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function majority_element_using_boyer_moore_voting_algorithm(nums: number[]) {
   // Initialize two potential majority candidates and their counts
   // Since we can have at most 2 elements appearing more than n/3 times
   let candidate1 = -1,
      candidate2 = -1,
      count1 = 0,
      count2 = 0;

   // Array to store the final majority elements
   const majority: number[] = [];

   // First pass: Boyer-Moore voting algorithm to find potential candidates
   for (const element of nums) {
      // If current element matches first candidate, increment its count
      if (candidate1 === element) count1++;
      // If current element matches second candidate, increment its count
      else if (candidate2 === element) count2++;
      // If first candidate is not set (count = 0), make current element the candidate
      else if (count1 === 0) {
         candidate1 = element;
         count1++;
      }
      // If second candidate is not set (count = 0), make current element the candidate
      else if (candidate2 === 0) {
         candidate2 = element;
         count2++;
      }
      // If element doesn't match either candidate, decrease both counts
      // This is the pairing/cancellation step of Boyer-Moore
      else {
         count1--;
         count2--;
      }
   }

   // Reset counts for second pass
   count1 = 0;
   count2 = 0;

   // Second pass: Count the actual occurrences of the potential candidates
   for (const element of nums) {
      if (candidate1 === element) count1++;
      if (candidate2 === element) count2++;
   }

   // Check if the candidates appear more than n/3 times
   if (count1 > Math.floor(nums.length / 3)) majority.push(candidate1);

   if (count2 > Math.floor(nums.length / 3) && candidate1 !== candidate2)
      majority.push(candidate2);

   // Sort the result array if there are two majority elements
   if (majority.length === 2 && majority[0] > majority[1])
      [majority[0], majority[1]] = [majority[1], majority[0]];

   return majority;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple,
 *
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
 * Function call:- majority_element_using_nested_loops(nums);
 *
 * Function execution:-
 *    •
 */
