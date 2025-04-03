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
   let majority1 = -1,
      majority2 = -1,
      maj_count_1 = 0,
      maj_count_2 = 0;

   const majority: number[] = [];

   for (const element of nums) {
      if (majority1 === element) maj_count_1++;
      else if (majority2 === element) maj_count_2++;
      else if (maj_count_1 === 0) {
         majority1 = element;
         maj_count_1++;
      } else if (majority2 === 0) {
         majority2 = element;
         maj_count_2++;
      } else {
         maj_count_1--;
         maj_count_2--;
      }
   }

   maj_count_1 = 0;
   maj_count_2 = 0;

   for (const element of nums) {
      if (majority1 === element) maj_count_1++;
      if (majority2 === element) maj_count_2++;
   }

   if (maj_count_1 > Math.floor(length / 3)) majority.push(majority1);
   if (maj_count_2 > Math.floor(length / 3) && majority1 !== majority2)
      majority.push(majority2);

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
