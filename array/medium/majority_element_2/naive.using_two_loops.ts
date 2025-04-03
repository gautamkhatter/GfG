/**
 * #### Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times. Note: The returned array of majority elements should be sorted.
 *
 * Solution:- naive approach - using two nested loops
 *
 * Eg.1:-
 * input: nums = [2, 2, 3, 1, 3, 2, 1, 1]
 * output: [1, 2]
 *
 * Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).
 *
 * Time Complexity: O(n^2);
 * Space Complexity: O(1);
 */

function majority_element_using_nested_loops(nums: number[]) {
   const length = nums.length;
   const majority: number[] = [];

   for (let currentElement = 0; currentElement < length; currentElement++) {
      let count = 0;
      for (
         let compareElement = currentElement;
         compareElement < length;
         compareElement++
      ) {
         if (nums[currentElement] === nums[compareElement]) {
            count++;
         }
      }

      if (count > length / 3) {
         if (majority.length === 0 || nums[currentElement] !== majority[0]) {
            majority.push(nums[currentElement]);
         }
      }

      if (majority.length === 2) {
         if (majority[0] > majority[1]) {
            [majority[0], majority[1]] = [majority[1], majority[0]];
         }
         break;
      }
   }
   return majority;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we traverse all the elements in the
 * array one by one and for each element we count its frequency in the array. If 
 * the frequency of element is greater than floor(n/3), we add it as our result. 
 * To avoid adding duplicate elements, we have to check if the element is already 
 * present in our result or not.
 * 
 * Now there can only be at most two majority elements. Why?
 *    - Because a majority element must appear more than floor(n/3) times in the array.
 *    - As such, the majority element occupies more than 1/3 of array's space.
 *    - If entire array is 1/3 + 1/3 + 1/3 => 3/3 = 1 or 100%.
 *    - At most two elements can occupy more than 1/3 of the array, because if there's 
 *      more than two elements that occupy more than 1/3 of the array, these elements will
 *      exceed the array size and that is not possible.
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [2, 2, 3, 1, 3, 2, 1, 1]
 * Function call:- majority_element_using_nested_loops(nums);
 *
 * Function execution:-
 *    ------------------------
 *     0  1  2  3  4  5  6  7
 *     |  |  |  |  |  |  |  |
 *    [2, 2, 3, 1, 3, 2, 1, 1]
 *    ------------------------
 *    • majority = [];
 *    • (current=0) => count = 0;
 *                  => inner loop to count the frequency of nums[0]=2
 *                      (compare=0) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[0] => 2 == 2 (true)
 *                                  => count++ => count=1;
 *       
 *                      (compare=1) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[1] => 2 == 2 (true)
 *                                  => count++ => count=2;
 *    
 *                      (compare=2) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[2] => 2 == 3 (false)
 *                              
 *                      (compare=3) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[3] => 2 == 1 (false)
 *                                
 *                      (compare=4) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[3] => 2 == 3 (false)
 *                                  
 *                      (compare=5) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[5] => 2 == 2 (true)
 *                                  => count++ => count=3;
 * 
 *                      (compare=6) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[6] => 2 == 1 (false)
 *                                 
 *                      (compare=7) => nums[current] == nums[compare]
 *                                  => nums[0] == nums[0] => 2 == 1 (false)
 * 
 *                   => Now that we have the frequency of our element, we check
 *                   => count > length/3 
 *                   => 3 > 8/3 => 3 > 2 (true)
 *                   => majority.length == 0 (true) || nums[current] == majority[0] (false)
 *                   => majority.push(current)
 *                   => majority = [2]
 * 
 * Now we go to the next element and we repeat the above process for the rest of the
 * elements in the array. This is an inefficient way to find the majority elements because
 * our next current element at index 1 is 2, it will again count the frequency of 2 
 * (although starting from index 1) and that makes this approach really inefficient.
 * 
 * At last we did get our majority elements which are = [1,2]
 */
