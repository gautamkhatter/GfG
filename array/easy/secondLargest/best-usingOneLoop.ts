/**
 * ### Question 🤔 :-
 * Given an array of positive integers arr[] of size n, the task is to 
 * find second largest distinct element in the array. Note: If the second 
 * largest element does not exist, return -1.
 * 
 * #### Solution 🧠 :- Best approach - using one loop
 * 
 * Ex.1 💭 :-
 * Input: arr[] = [12, 35, 1, 10, 34, 1],
 * Output: 34
 * 
 * Ex.2 💭 :-
 * Input: arr[] = [10, 10, 10],
 * Output: -1
 * 
 *#### Time Complexity: O(n);
 *####  Space Complexity: O(1);
*/

function secondLargestUsingOneLoop(nums: number[]) {
   let largest = -Infinity;
   let secondLargest = -Infinity;
   
   // traversing the array and tracking both elements at the same time
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] > largest) {
         secondLargest = largest;
         largest = nums[i];
      }
      else if (nums[i] < largest && nums[i] > secondLargest) {
         secondLargest = nums[i];
      }
   }
   return secondLargest === -Infinity ? -1 : secondLargest;
}

const arr3 = [12, 35, 1, 10, 34, 1];
console.log(secondLargestUsingOneLoop(arr3));

/**
 * ### Idea💡 :- 
 * The idea behind this approach is simple, we keep track of largest ans second
 * largest in a single loop.
 * 
 *
 * ### Dry Run 🤯 :-
 * Eg: arr[] = [12, 35, 1, 10, 34, 1]
 * 
 * Call - secondLargestUsingOneVariable(arr);
 * Inside Function:
 *    • declare two variables that largest and second largest value.
 *    
 *    • In the first loop we find the largest element in the array
 *      Eg: Iteration 1:
 *             nums[i] > largest = 12 > -Infinity = (true)
 *                secondLargest = -Infinity
 *                largest = 12
 *
 *          Iteration 2:
 *             nums[i] > largest = 35 > 12 = (true);
 *             secondLargest = 12
 *             largest = 35
 *          and so on...
 *          Finally we get largest = 35, secondLargest = 34;
 *
 *    • At last we check if we find any second largest element, if not we return -1;  
 */