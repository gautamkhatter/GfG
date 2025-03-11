/**
 * ### 🤔 Question:-
 * Given an array of integers nums[], the task is to move all the zeros in the array
 * to the end of the array while maintaining the relative order of all non-zero elements.
 *
 * #### 🧠 Solution:- best approach - by being greedy
 *
 * Eg.1:-
 * input: nums = [10, 3, 5, 6, 20],
 * output: 1200 (explanation: multiplication of 10, 6 and 20)
 *
 * Eg.2:-
 * input: nums =  [-10, -3, -5, -6, -20],
 * output: -90
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(1);
 */

function maxProductTripletByBeingGreedy(nums: number[]): number {
   let largest = -Infinity,
      secondLargest = -Infinity,
      thirdLargest = -Infinity;

   let minimum = Infinity,
      secondMinimum = Infinity;

   for (let i = 0; i < nums.length; i++) {
      // checking if its largest and updating corresponding
      // sl and tl values
      if (nums[i] > largest) {
         thirdLargest = secondLargest;
         secondLargest = largest;
         largest = nums[i];
      }
      // checking if the element is greater than sl
      // then updating sl and tl values
      else if (nums[i] > secondLargest) {
         thirdLargest = secondLargest;
         secondLargest = nums[i];
      }
      // if the element is greater than sl and smaller than both
      // l and sl
      else if (nums[i] > thirdLargest) {
         thirdLargest = nums[i];
      }

      // check if it is the minimum, it has the potential to
      // make a greater product
      if (nums[i] < minimum) {
         secondMinimum = minimum;
         minimum = nums[i];
      }
      // we also find the second minimum because we need
      // two negatives to make it positive
      else if (nums[i] < secondMinimum) {
         secondMinimum = nums[i];
      }
   }

   return Math.max(
      minimum * secondMinimum * largest,
      largest * secondLargest * thirdLargest
   );
}

const maxProduct = maxProductTripletByBeingGreedy([-10, -3, -5, -6, -20]);
console.log(maxProduct);

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we traverse the array and
 * keep track of the following:-
 *    - largest
 *    - secondLargest
 *    - thirdLargest
 *    - minimum
 *    - second minimum
 * By doing this we only track for elements that we know for sure will
 * give us the maximum product - this is us being greedy here because we don't
 * care for the rest of the elements
 *
 * In nested loops - we were not only checking every element but also
 * finding every possible triplet to get to the maximum
 *
 * In sorting - there because we sort the element and care about each
 * elements order that is also not efficient.
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [10, 3, 5, 6, 20]
 * Function call:- maxProductTripletByBeingGreedy(nums);
 *
 * Function execution:-
 *    • I am giving proxy names to our variables here so that
 *      it is easy for me to write
 *          - largest = l
 *          - secondLargest = sl
 *          - thirdLargest = tl
 *          - minimum = m
 *          - secondMinimum = sm
 *    Now we start traversing the array:=
 *    Iterations:=
 *          (i=0) = nums[i] > l
 *                = 10 > -Infinity (true);
 *                = tl = sl (still -Infinity);
 *                = sl = l (still -Infinity);
 *                = l = 10
 *
 *          (i=1) = nums[i] > l
 *                = 3 > 10 (false);
 *                = nums[i] > sl
 *                = 3 > -Infinity (true);
 *                = tl = sl (still -Infinity)
 *                = sl = 3
 *
 *          (i=2) = nums[i] > l
 *                = 5 > 10 (false);
 *                = nums[i] > sl
 *                = 5 > 3 (true)
 *                = tl = sl
 *                = tl = 3
 *                = sl = nums[i] = 5
 *                = sl = 5
 *
 *          (i=3) = nums[i] > l
 *                = 6 > 10 (false);
 *                = nums[i] > sl
 *                = 6 > 5 (true)
 *                = tl = sl
 *                = tl = 5
 *                = sl = nums[i] = 6
 *                = sl = 6
 *
 *          (i=4) = nums[i] > l
 *                = 20 > 10 (true);
 *                = tl = sl => tl = 6
 *                = sl = l => sl = 10
 *                = l = nums[i] => l = 20
 *
 * Now we just return their product and we have our
 *
 */
