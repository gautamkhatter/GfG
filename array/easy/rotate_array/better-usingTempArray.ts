/**
 * ### 🤔 Question:-
 * Given an array of integers nums[] of size n, the task is to rotate the
 * array elements to the left by k positions.
 *
 * #### 🧠 Solution:- better approach - using temp array
 *
 * Eg.1:-
 * input: nums = [1, 2, 3, 4, 5, 6], k=2
 * output: [3, 4, 5, 6, 1, 2]
 *
 * Eg.2:-
 * input: nums = [1, 2, 3], k=4
 * output: [2, 3, 1]
 *
 * Explanation:-
 *
 * After first left rotation, nums = [2, 3, 1],
 * After second left rotation, nums = [3, 1, 2],
 *
 * After third left rotation, nums = [1, 2, 3],
 * After fourth left rotation, nums = [2, 3, 1],
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(n);
 */

function rotate_array_using_temp_array(
   nums: number[],
   left_rotate_count: number
): void {
   let length = nums.length;
   let temp = new Array(length);

   // this handles the case when k > nums.length
   left_rotate_count %= length;

   // now we copy last (n-k) element to the front of temp
   // eg: n=6, k=2 => 6-2=4, copy the elements
   // that come after the k positions
   for (let i = 0; i < length - left_rotate_count; i++) {
      temp[i] = nums[i + left_rotate_count];
   }
   // now copy those 'k' elements after the position
   // of elements that were copied before
   for (let i = 0; i < left_rotate_count; i++) {
      temp[length - left_rotate_count + i] = nums[i];
   }
   // now copy back elements from temp to nums
   for (let i = 0; i < length; i++) {
      nums[i] = temp[i];
   }
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we use a temp array
 * of the same size (n) as nums. Now observe this, if we left rotate
 * the array by 'k' (left_rotate_count) positions, the last n-k meaning lets
 * say array of size 5 and we rotate it by 2 so n-k = 5-2 = 3. The last
 * three elements will be at the front and the 2 elements which are k
 * will be at the last of the array.
 * 
 * So after having this observation, we do the following:-
 *    - We copy n-k (last three 3) elements of nums in
 *      the temp array at the start.
 *    - Then, we copy the 'k' elements at the remaining positions
 *      of temp.
 *    - Finally we just copy back the temp elements into nums.
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [1, 2, 3, 4, 5, 6], k=2
 * Function call:- rotate_array_using_temp_array(nums);
 *
 * Function execution:
 *    • Iterations:=
 *          nums.length = n = 6
 *          left_rotate_count = k = 2
 * 
 * 
 **         First for loop begins
 *          n = 6, k = 2
 *          temp = []
 *                    0  1  2  3  4  5
 *          nums[] = [1, 2, 3, 4, 5, 6]
 *        -------------------------------
 *          (i=0) = i < n-k 
 *                = 0 < 6-2 => 0 < 4 (true)
 *                = temp[i] = nums[i+k];
 *                = temp[0] = nums[0+2]
 *                = temp[0] = nums[2]
 *                = temp[0] = 3
 *           temp = [3]
 * 
 * 
 *          n = 6, k = 2
 *          temp = [3]
 *                    0  1  2  3  4  5
 *          nums[] = [1, 2, 3, 4, 5, 6]
 *        -------------------------------
 *          (i=1) = i < n-k 
 *                = 1 < 6-2 => 1 < 4 (true)
 *                = temp[i] = nums[i+k];
 *                = temp[1] = nums[1+2]
 *                = temp[1] = nums[3]
 *                = temp[1] = 4
 *           temp = [3, 4]
 * 
 * 
 *          n = 6, k = 2
 *          temp = []
 *                    0  1  2  3  4  5
 *          nums[] = [1, 2, 3, 4, 5, 6]
 *        -------------------------------
 *          (i=2) = i < n-k 
 *                = 2 < 6-2 => 2 < 4 (true)
 *                = temp[i] = nums[i+k];
 *                = temp[2] = nums[2+2]
 *                = temp[2] = nums[4]
 *                = temp[2] = 5
 *           temp = [3, 4, 5]
 * 
 * 
 *          n = 6, k = 2
 *          temp = [3, 4, 5]
 *                    0  1  2  3  4  5
 *          nums[] = [1, 2, 3, 4, 5, 6]
 *        -------------------------------
 *          (i=3) = i < n-k 
 *                = 3 < 6-2 => 3 < 4 (true)
 *                = temp[i] = nums[i+k];
 *                = temp[3] = nums[3+2]
 *                = temp[3] = nums[5]
 *                = temp[3] = 6
 *           temp = [3, 4, 5, 6]
 *       
 **         First for loop ends
 *
 * 
 **         Second for loop begins
 *          n = 6, k = 2
 *          temp = [3, 4, 5, 6]
 *                    0  1  2  3  4  5
 *          nums[] = [1, 2, 3, 4, 5, 6]
 *        -------------------------------
 *          (i=0) = i < k 
 *                = 0 < 2 (true)
 *                = temp[n-k+i] = nums[i];
 *                = temp[6-2+0] = nums[0]
 *                = temp[4] = nums[0]
 *                = temp[4] = 1
 *           temp = [3, 4, 5, 6, 1]
 *       
 * 
 *          n = 6, k = 2
 *          temp = [3, 4, 5, 6, 1]
 *                    0  1  2  3  4  5
 *          nums[] = [1, 2, 3, 4, 5, 6]
 *        -------------------------------
 *          (i=1) = i < k 
 *                = 0 < 2 (true)
 *                = temp[n-k+i] = nums[i];
 *                = temp[6-2+1] = nums[1]
 *                = temp[5] = nums[1]
 *                = temp[5] = 2
 *           temp = [3, 4, 5, 6, 1, 2]
 *
 **         Second for loop ends
 *
 **         Third for loop begins
 *       The third loop is simple as it it just copying elements
 *       from temp back to nums
 * 
 *       That's it, we just rotated an arrays using temp array. 
 */
