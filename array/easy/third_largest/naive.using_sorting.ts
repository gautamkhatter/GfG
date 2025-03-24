/**
 * ### 🤔 Question:-
 * Given an array of n integers, the task is to find the third largest element. 
 * All the elements in the array are distinct integers. 
 * 
 * #### 🧠 Solution:- naive approach - using sorting
 * 
 * Eg.1:-
 * input: nums[] = [1, 14, 2, 16, 10, 20],
 * output: 14
 * 
 * Eg.2:-
 * input: nums[] = [19, -10, 20, 14, 2, 16, 10],
 * output: 16
 * 
 *#### Time Complexity: O(nlogn);
 *#### Space Complexity: O(1);
*/

function third_largest_using_sorting(nums: number[]): number {
   // checking for edge cases
   if (nums.length === 0) return -1;
   if (nums.length === 1) return nums[0];
   // sorting elements in non-decreasing order
   nums.sort((a, b) => a - b);
   return nums[nums.length - 3];
}

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
 * Function call:- third_largest_using_sorting(nums);
 * 
 * Function execution:-
 *    • Calling the sort function which takes (nlogn) time
 * 
 *    • Because there can be multiple same elements after sorting like:
 *      arr[] = [2, 10, 22, 45, 66, 66];
 * 
 *    • We traverse the array from the second last element to the front
 *      till we find the number that is not equal to the last element.
 * 
 *    • After finding that value we return it, otherwise we 
 */