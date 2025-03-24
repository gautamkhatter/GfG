/**
 * ### 🤔 Question:-
 * Given an array of integers nums[], the task is to move all the zeros in the array
 * to the end of the array while maintaining the relative order of all non-zero elements.
 *
 * #### 🧠 Solution:- better approach - using two loops
 *
 * Eg.1:-
 * input: nums = [1, 2, 0, 4, 3, 0, 5, 0],
 * output: [1, 2, 4, 3, 5, 0, 0, 0]
 *
 * Eg.2:-
 * input: nums = [10, 20, 30],
 * output: [10, 20, 30]
 * 
 *#### Time Complexity: O(2n) = O(n);
 *#### Space Complexity: O(1);
 */

function move_zeros_to_end_using_two_loops(nums: number[]): void {
   // count tracks where should we put the non-zero element that comes next
   let count = 0;
   // replace the zero element position with a non-zero element when encountering it
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
         nums[count] = nums[i];
         count++;
      }
   }
   // fill the remaining places with 0's
   while (count < nums.length) {
      nums[count] = 0;
   }
}

/**
 * ### 💡 Idea behind the approach:-
 * 
 * The idea behind this approach is traversing the array twice. Each traversal has the
 * following responsibilities:-
 *    
 *    - First traversal: Shift non-zero elements
 *          • While traversing the array we maintain a count for non-zero elements. 
 *            This count starts with 0 and keeps track of where the next non-zero
 *            element should be placed in the array.
 * 
 *          • If we encounter a non-zero element we place it at nums[count] and
 *            increment count by 1.
 * 
 *          • After traversing all the elements in the array, all non-zero elements
 *            will be shifted to the front while maintaining their original order.
 *
 *    - Second traversal: Filling remaining places with 0's
 *          • After the first traversal, the count variable has the value from where
 *            the zeros should be start placing.
 * 
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [1, 2, 0, 4, 3, 0, 5, 0]
 * Function call:- move_zeros_to_end_using_two_loops(nums);
 * 
 * Function execution:-
 *    • We initialize the count variable with 0.
 * 
 *    • Iterations:= (count = c)
 **                 i/c     
 *          (i=0) = [1, 2, 0, 4, 3, 0, 5, 0]
 *          (c=0) = (nums[0] !== 0) = (1 !== 0) = true
 *                = nums[count] = nums[i] 
 *                = nums[0] = nums[0] => 1 = 1 (no change)
 *                = count++ (c=1);
 * 
 * 
 **                    i/c
 *          (i=1) = [1, 2, 0, 4, 3, 0, 5, 0]
 *          (c=1) = (nums[1] !== 0) = (2 !== 0) = true
 *                = nums[count] = nums[i]
 *                = nums[1] = nums[1] => 2 = 2 (no change)
 *                = count++ (c=2);
 * 
 * 
 **                       i/c
 *          (i=2) = [1, 2, 0, 4, 3, 0, 5, 0]
 *          (c=2) = (nums[2] !== 0) = (0 !== 0) = false
 * 
 * 
 **                        c  i
 *          (i=3) = [1, 2, 0, 4, 3, 0, 5, 0]
 *          (c=2) = (nums[3] !== 0) = (4 !== 0) = true
 *                = nums[count] = nums[i]
 *                = nums[2] = nums[3] => (0 <=> 4) (changed places)
 *                = count++ (c=3);
 * 
 * 
 **                           c  i
 *          (i=4) = [1, 2, 4, 0, 3, 0, 5, 0]
 *          (c=3) = (nums[4] !== 0) = (3 !== 0) = true
 *                = nums[count] = nums[i]
 *                = nums[3] = nums[4] => (0 <=> 3) (changed places)
 *                = count++ (c=4);
 * 
 * 
 **                              c  i
 *          (i=5) = [1, 2, 4, 3, 0, 0, 5, 0]
 *          (c=4) = (nums[5] !== 0) = (0 !== 0) = false
 *
 * 
 **                              c     i
 *          (i=6) = [1, 2, 4, 3, 0, 0, 5, 0]
 *          (c=4) = (nums[6] !== 0) = (5 !== 0) = true
 *                = nums[count] = nums[i]
 *                = nums[4] = nums[6] => (0 <=> 5) (changed places)
 *                = count++ (c=5);
 * 
 * 
 **                                 c     i
 *          (i=7) = [1, 2, 4, 3, 5, 0, 0, 0]
 *          (c=5) = (nums[7] !== 0) = (0 !== 0) = false
 *          LOOP ENDS
 * 
 *    • And thats it we have moved all the zeros at the end of the array.
 */

