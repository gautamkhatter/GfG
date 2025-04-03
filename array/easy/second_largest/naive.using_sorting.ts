/**
 * #### Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array. Note: If the second largest element does not exist, return -1.
 * 
 * Solution:- naive approach - using sorting
 * 
 * Eg.1:-
 * input: nums[] = [12, 35, 1, 10, 34, 1],
 * output: 34
 * 
 * Eg.2:-
 * input: nums[] = [10, 10, 10],
 * output: -1
 * 
 * Time Complexity: O(nlogn);
 * Space Complexity: O(1);
*/

function second_largest_using_sorting(nums: number[]): number {
   // sorting the given array in non decreasing order
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
console.log(second_largest_using_sorting(arr));

/**
 * ### 💡 Idea behind the approach:-
 *  
 * The idea behind this approach is simple, we sort the array in non-decreasing order.
 * Q: What is this non decreasing order?
 * A: Well, to put it simply it is ascending order that allows to have duplication
 * of elements.
 * 
 * Now, because the sorted array may contain duplicate elements at the last, we simply
 * cannot return the second last element (nums.length - 2), so we do another traversal
 * that goes from second last element till the beginning to check for an element that
 * is not equal to the last, if we find it we return that element otherwise we return -1;
 * 
 *
 * ### 🤯 Dry run of the code:-
 * 
 * Eg:- nums[] = [12, 35, 1, 10, 34, 1]
 * Function call:- second_largest_using_sorting(nums);
 * 
 * Function execution:
 *    • We call the sort function which takes (nlogn) time
 * 
 *    • Because there can be multiple same elements after sorting like:
 *      arr[] = [2, 10, 22, 45, 66, 66];
 * 
 *    • We traverse the array from the second last element to the front
 *      till we find the number that is not equal to the last element.
 * 
 *    • After finding that value we return it, otherwise we 
 */