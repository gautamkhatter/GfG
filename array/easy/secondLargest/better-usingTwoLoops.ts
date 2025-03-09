/**
 * ### 🤔 Question:-
 * Given an array of positive integers arr[] of size n, the task is to 
 * find second largest distinct element in the array. Note: If the second 
 * largest element does not exist, return -1.
 * 
 * #### 🧠 Solution:- Better approach - using two loops
 * 
 * 💭 Ex.1:-
 * Input: arr[] = [12, 35, 1, 10, 34, 1],
 * Output: 34
 * 
 * 💭 Ex.2:-
 * Input: arr[] = [10, 10, 10],
 * Output: -1
 * 
 *#### Time Complexity: O(2n) = O(n);
 *####  Space Complexity: O(1);
*/


function secondLargestUsingTwoLoops(nums: number[]): number {
   let largest = -Infinity;
   let secondLargest = -Infinity;

   // finding the largest element in the given array
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
         largest = nums[i];
      }
   }
   // finding the second largest element in the given array;
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > secondLargest && nums[i] !== largest) {
         secondLargest = nums[i];
      }
   }
   return secondLargest === -Infinity ? -1 : secondLargest;
}

const arr2 = [12, 35, 1, 10, 34, 1];
console.log(secondLargestUsingTwoLoops(arr2));

/**
 * ### 💡 Idea:- 
 * The idea behind this approach is simple, in first traverse the array to find the 
 * largest and in second traversal we find the second largest on the condition that it
 * is not equal to the largest we fond earlier.
 * 
 * 
 * ### 🤯 Dry Run:-
 * Eg: arr[] = [12, 35, 1, 10, 34, 1]
 * 
 * Call - secondLargestUsingTwoLoops   (arr);
 * Inside Function:
 *    • declare two variables that largest and second largest value.
 *    
 *    • In the first loop we find the largest element in the array
 *      Eg: [12, 35, 1, 10, 34, 1];
 *          largest = 35
 * 
 *    • In the second loop we find the second largest element by checking it
 *      not being same as the largest.
 *      Eg: largest = 35
 *          second largest = 34
 *          second largest !== largest = 34 !== 35 (true);
 *          return 34;
 * 
 *    • At last we check if we find any second largest element, if not we return -1;  
 */