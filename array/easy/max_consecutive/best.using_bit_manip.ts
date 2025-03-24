/**
 * ### 🤔 Question:-
 * Given an array nums[] consisting of only 0’s and 1’s, the task is to find
 * the count of a maximum number of consecutive 1’s or 0’s present in the array.
 *
 * #### 🧠 Solution:- best approach - using bit manipulation
 *
 * Eg.1:-
 * input: nums = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
 * output: 4
 *
 * Explanation: the maximum number of consecutive 1’s
 * in the array is 4 from index 8-11.
 *
 * Eg.2:-
 * input: nums = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
 * output: 2
 *
 * Explanation: the maximum number of consecutive 0’s
 * in the array is 2 from index 0-1.
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(1);
 */

function max_consecutive_count_using_bit_manipulation(nums: number[]): number {
   let max_consecutive_count = 0,
      current_count = 0,
      previous = -1;

   for (let num of nums) {
      if ((previous ^ num) === 0) {
         current_count++;
      } else {
         max_consecutive_count = Math.max(max_consecutive_count, current_count);
         current_count = 1;
      }
      previous = num;
   }
   return Math.max(max_consecutive_count, current_count);
}

/**
 * ### 💡 Idea behind the code:-
 *
 * The idea behind this approach is simple, we do XOR (^) to check 
 * if consecutive elements are the same. If prev ^ num == 0, the 
 * sequence continues; otherwise, reset the count. 
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 * Function call:- max_consecutive_count_using_bit_manipulation(nums);
 *
 * Inside Function execution:-
 *    • We initialize our currentMaxCount=0 and count=1 and prev = -1
 *    
 **   • Why prev = -1?
 *       previous is initialized with -1 for a specific reason:=
 * 
 **   • First Element Handling:  
 *       When the loop starts with the first element (0 or 1), 
 *       we need a way to ensure the else block executes because
 *       it will set current count to 1 for the first element.
 *    
 **   • XOR properties:
 **       -1 ^ 0 = -1 (non-zero) 
 **       -1 ^ 1 = -2 (non-zero)
 **        0 ^ 0 = 0
 **        0 ^ 1 = 1
 **        1 ^ 0 = 1
 **        1 ^ 1 = 0
 *
 *    • This means that (previous ^ num) === 0 will be false for the 
 *      first element regardless of whether it's 0 or 1, this guarantees 
 *      the else block executes for the first element
 *  
 * 
 **    0  1  2  3  4  5  6  7  8  9  10 11
 *     -  -  -  -  -  -  -  -  -  -  -  -
 **   [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 * 
 *    • Iterations:=
 * 
 *          n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = -1
 **         max_consecutive_count = 0
 **         current_count = 1
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = -1 ^ 1 => -2 (false)
 *                  = max_count => max(0, 1) => 1;
 *                  = current_count => 1;
 *                  = previous = num => 1
 * 
 * 
 *             n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         max_consecutive_count = 1
 **         current_count = 1
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = 1 ^ 1 => 0 (true)
 *                  = current_count++ => 2;
 *                  = previous = num => 1
 * 
 * 
 *                n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         current_count = 2
 **         max_consecutive_count = 1
 *         -------------------------------
 *          (num=0) = previous ^ num
 *                  = 1 ^ 0 => 1 (false)
 *                  = max_count => max(1, 2) => 2;
 *                  = current_count = 1;
 *                  = previous = num => 0
 * 
 * 
 *                   n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 0
 **         current_count = 1
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=0) = previous ^ num
 *                  = 0 ^ 0 => 0 (true)
 *                  = current_count++ => 2;
 *                  = previous = num => 0
 * 
 * 
 *                      n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 0
 **         current_count = 2
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = 0 ^ 1 => 1 (false)
 *                  = max_count = max(2, 2) => 2;
 *                  = current_count = 1;
 *                  = previous = num => 1
 * 
 * 
 *                         n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         current_count = 1
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=0) = previous ^ num
 *                  = 1 ^ 0 => 1 (false)
 *                  = max_count = max(2, 1) => 2;
 *                  = current_count = 1;
 *                  = previous = num => 0
 * 
 * 
 *                            n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 0
 **         current_count = 1
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = 0 ^ 1 => 1 (false)
 *                  = max_count = max(2, 1) => 2;
 *                  = current_count = 1;
 *                  = previous = num => 1
 * 
 * 
 *                               n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         current_count = 1
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=0) = previous ^ num
 *                  = 1 ^ 0 => 1 (false)
 *                  = max_count = max(2, 1) => 2;
 *                  = current_count = 1;
 *                  = previous = num => 0
 * 
 * 
 *                                  n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         current_count = 1
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = 0 ^ 1 => 1 (false)
 *                  = max_count = max(2, 1) => 2;
 *                  = current_count = 1;
 *                  = previous = num => 1
 * 
 * 
 *                                     n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         current_count = 1
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = 1 ^ 1 => 0 (true)
 *                  = current_count++ => 2;
 *                  = previous = num => 1
 * 
 * 
 *                                        n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         current_count = 2
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = 1 ^ 1 => 0 (true)
 *                  = current_count++ => 3;
 *                  = previous = num => 1
 *
 * 
 *                                           n
 *         [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]
 **         previous = 1
 **         current_count = 3
 **         max_consecutive_count = 2
 *         -------------------------------
 *          (num=1) = previous ^ num
 *                  = 1 ^ 1 => 0 (true)
 *                  = current_count++ => 4;
 *                  = previous = num => 1
 * 
 * 
 **         return max(max_consecutive_count, current_count)
 **              = max(2, 4)
 **         return = 4
 
 * Now after the loop ends, we just return the max(currentMax, count);
 */
