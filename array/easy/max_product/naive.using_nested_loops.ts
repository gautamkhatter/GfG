/**
 * #### Given an array of integers nums[], the task is to move all the zeros in the array
 * to the end of the array while maintaining the relative order of all non-zero elements.
 *
 * Solution:- naive approach - using three nested loops
 *
 * Eg.1:-
 * input: nums = [10, 3, 5, 6, 20],
 * output: 1200 (explanation: multiplication of 10, 6 and 20)
 *
 * Eg.2:-
 * input: nums =  [-10, -3, -5, -6, -20],
 * output: -90
 * 
 * Time Complexity: O(n^3);
 * Space Complexity: O(1);
 */

function max_product_triplet_using_nested_loops(nums: number[]): number {
   let max_product = -Infinity;

   // 'i' is going till before the last two elements because j & k will already 
   // take care of last two elements
   for (let i = 0; i < nums.length - 2; i++) {
      // 'j' is g till second last element
      for (let j = i + 1; j < nums.length - 1; j++) {
         // finally, 'k' goes till the last element
         for (let k = j + 1; k < nums.length; k++) {
            max_product = Math.max(max_product, nums[i] * nums[j] * nums[k]);
         }  
      }
   }
   
   return max_product;
}

/**
 * ### 💡 Idea behind the approach:-
 * 
 * The idea behind this approach is really simple, we will just check for every
 * triplet possible in the array.
 *
 * 
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [10, 3, 5, 6, 20]
 * Function call:- max_product_triplet_using_nested_loops(nums);
 * 
 * Function execution:-
 *    • We declare a variable to calculate the max_product of the triplets.
 *    
 *    • Explanation for each conditions:-
 *       i = i < nums.length - 2 => because j and k are already ahead and 
 *       will take care of the values.
 *       
 *       j = j < nums.length - 1 => because k is already ahead and will take
 *       care of the last value
 * 
 *       k = k < nums.length => k starts with ahead of j and goes all the
 *       way to the end.
 * 
 *    • Iterations:=
 * 
 *    The most inner loop that will run till the end first, i.e the loop that k is handling
 **                   i  j  k     
 *          (i=0) = [10, 3, 5, 6, 20];
 *          (j=1) = nums[i] * nums[j] * nums[k]
 *          (k=2) = 10 * 3 * 5 = 150
 *                = max(-Infinity, 150)
 *     max_product = 150 
 *
 **                   i  j     k     
 *          (i=0) = [10, 3, 5, 6, 20];
 *          (j=1) = nums[i] * nums[j] * nums[k]
 *          (k=3) = 10 * 3 * 6 = 180
 *                = max(180, 150)
 *     max_product = 180 
 * 
 
 **                   i  j         k     
 *          (i=0) = [10, 3, 5, 6, 20];
 *          (j=1) = nums[i] * nums[j] * nums[k]
 *          (k=4) = 10 * 3 * 20 = 600
 *                = max(180, 600)
 *     max_product = 600
 * 
 * 
 * 
 * Now, the second inner loop that j is handling will run:-
 **                   i     j      k     
 *          (i=0) = [10, 3, 5, 6, 20];
 *          (j=2) = nums[i] * nums[j] * nums[k]
 *          (k=4) = 10 * 5 * 20 = 1000
 *                = max(1000, 600)
 *     max_product = 1000
 * 
 * 
 **                   i        j   k     
 *          (i=0) = [10, 3, 5, 6, 20];
 *          (j=3) = nums[i] * nums[j] * nums[k]
 *          (k=4) = 10 * 6 * 20 = 1200
 *                = max(1200, 1000)
 *     max_product = 1200
 * 
 * 
 * 
 * Now, the first loop will complete its journey:-
 **                      i     j   k     
 *          (i=1) = [10, 3, 5, 6, 20];
 *          (j=3) = nums[i] * nums[j] * nums[k]
 *          (k=4) = 3 * 6 * 20 = 360
 *                = max(1200, 360)
 *     max_product = 1200 (remains same);
 * 
 * 
 **                         i  j   k     
 *          (i=0) = [10, 3, 5, 6, 20];
 *          (j=3) = nums[i] * nums[j] * nums[k]
 *          (k=4) = 5 * 6 * 20 = 600
 *                = max(1200, 600)
 *     max_product = 1200 (remains same);
 * 
 * return max_product = 1200
 * 
 * So, we have gone through every possible combination, did you see how many loops
 * ran for just a small array. Imagine if this were a 10k or 1lakh elements, how much
 * would that take, thats why it is such a bad solution to this problem. 
 */

