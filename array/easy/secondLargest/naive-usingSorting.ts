/**
 * -----------
 * Question:-
 * -----------
 * Given an array of positive integers arr[] of size n, the task is to 
 * find second largest distinct element in the array. Note: If the second 
 * largest element does not exist, return -1.
 * 
 * -------
 * Ex.1:-
 * -------
 * Input: arr[] = [12, 35, 1, 10, 34, 1]
 * Output: 34
 * 
 * -------
 * Ex.2:-
 * -------
 * Input: arr[] = [10, 10, 10]
 * Output: -1
 *                      ----------------------------
 *                       Time Complexity: O(nlogn);
 *                       Space Complexity: O(1);
 *                      ----------------------------
*/

function secondLargestBySorting(nums: number[]) {
   // sorting the given array
   nums.sort((a, b) => a - b);
   // array may contain duplicate elements so we are traversing
   // from the second last element to find the second largest element.
   for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] !== nums[nums.length - 1]) {
         return nums[i];
      }
   }
   return -1;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(secondLargestBySorting(arr));

/**
 * -----------
 * Dry Run:-
 * -----------
 * Eg: arr[] = [12, 35, 1, 10, 34, 1]
 * 
 * Call - secondLargestBySorting(arr);
 * Inside Function:
 *    • Calling the sort function which takes (nlogn) time
 * 
 *    • Because there can be multiple same elements after sorting like:
 *      arr[] = [2, 10, 22, 45, 66, 66];
 * 
 *    • We traverse the array from the second last element to the front
 *      till we find the number that is not equal to the last element.
 *    • After finding that value we return it, otherwise we 
 */