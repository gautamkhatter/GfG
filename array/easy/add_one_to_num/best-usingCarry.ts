/**
 * #### We are given a non-negative number represented as an array of digits. Our task is to add 1 to the number (increment the number represented by the digits by 1). The digits are stored such that the most significant digit is the first element of the array.
 *
 * Solution:- best approach - using carry method
 *
 * Eg.1:-
 * input: nums = [1, 2, 4]
 * output: 125
 *
 * Eg.2:-
 * input: nums = [9, 9, 9]
 * output: 1000
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function add_one_using_carry(nums: number[]) {
   let carry = 1;
   
   for (let i = nums.length - 1; i >= 0; i--) {
      let sum = nums[i] + carry;
      nums[i] = sum % 10;
      carry = Math.floor(sum / 10);
   }

   if (carry > 0) {
      nums.unshift(carry);
   }
   return nums;
}

/**
 * ### 💡 Idea behind the approach:- 
 * 
 * The idea behind this approach is simple, 
 *
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 2, 4]
 * Function call:- add_one_using_carry(nums);
 * 
 * Function execution:
 *    • Iterations:=
 *          (i=0) 
 */