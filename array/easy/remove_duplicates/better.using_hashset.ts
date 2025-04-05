/**
 * #### Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order. Additionally, return the length of this distinct sorted subarray.
 *
 * Note: The elements after the distinct ones can be in any order and 
 * hold any value, as they don’t affect the result.
 * 
 * Solution:- better approach - using Hash Set
 *
 * Eg.1:-
 * input: nums = [1, 2, 2, 3, 4, 4, 4, 5, 5]
 * output: 5 because distinct elements are [1, 2, 3, 4, 5]
 *
 * Time Complexity: O(n);
 * Space Complexity: O(n);
 */

function remove_duplicates_using_hash_set(nums: number[]): number {
   const set = new Set();
   let distinct = 0;

   for (let i = 0; i < nums.length; i++) {
      if (!set.has(nums[i])) {
         set.add(nums[i]);
         nums[distinct++] = nums[i];
      }
   }

   return distinct;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, hashset has the property
 * that it only allows to store only distinct elements, we take advantage
 * of this and traverse through our array which have duplicates.
 * 
 * As we go through the array we check if we already have that element in the
 * hashset or not, if it is not present we take the distinct and because the question
 * asks us to place distinct elements at the front, to keep track of we encountering
 * distinct element we use the distinct variable. Upon encountering a distinct element
 * we swap the numbers with the distinct and the current position.
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
 * Function call:- remove_duplicates_using_hash_set(nums);
 *
 * Function execution:
 *    • set = [];
 *      distinct = 0;
 **    d=0   i
 *          [1, 2, 2, 3, 4, 4, 4, 5, 5]
 *          (i=0) => !set.has(1) => true
 *                => set = [1]
 *                => nums[distinct] = nums[i]
 *                => nums[0] = nums[0] (no change)
 *                => distinct++
 * 
 **    d=1      i
 *          [1, 2, 2, 3, 4, 4, 4, 5, 5]
 *          (i=1) => !set.has(2) => true
 *                => set = [1,2]
 *                => nums[distinct] = nums[i]
 *                => nums[1] = nums[1] (no change)
 *                => distinct++
 * 
 **    d=2         i
 *          [1, 2, 2, 3, 4, 4, 4, 5, 5]
 *          (i=2) => !set.has(2) => false
 * 
 **    d=2            i
 *          [1, 2, 2, 3, 4, 4, 4, 5, 5]
 *          (i=3) => !set.has(3) => true
 *                => set = [1,2,3]
 *                => nums[distinct] = nums[i]
 *                => nums[2] = nums[3]
 *                => [1,2,3,2,4,4,4,5,5];
 *                => distinct++
 * 
 **    d=3               i
 *          [1, 2, 3, 2, 4, 4, 4, 5, 5]
 *          (i=4) => !set.has(4) => true
 *                => set = [1,2,3,4]
 *                => nums[distinct] = nums[i]
 *                => nums[3] = nums[4]
 *                => [1,2,3,4,2,4,4,5,5];
 *                => distinct++
 * 
 **    d=4                  i
 *          [1, 2, 3, 4, 2, 4, 4, 5, 5]
 *          (i=5) => !set.has(4) => false
 * 
 **    d=4                     i
 *          [1, 2, 3, 4, 2, 4, 4, 5, 5]
 *          (i=6) => !set.has(4) => false
 * 
 **    d=4                        i
 *          [1, 2, 3, 4, 2, 4, 4, 5, 5]
 *          (i=7) => !set.has(5) => true
 *                => set = [1,2,3,4,5]
 *                => nums[distinct] = nums[i]
 *                => nums[4] = nums[7]
 *                => [1,2,3,4,5,4,2,5];
 *                => distinct++
 * 
 **    d=5                           i
 *          [1, 2, 3, 4, 5, 4, 4, 2, 5]
 *          (i=8) => !set.has(5) => false
 * 
 * And this way, while not using the set data structure more purposefully, taking
 * advantage of its property that it only contains distinct elements we were able to
 * manipulate our original array to move distinct elements at the front.
 * At last we were asked to return the number of distinct numbers in our array
 * which is distinct=5
 */
