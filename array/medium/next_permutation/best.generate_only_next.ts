/**
 * #### Given an array of numbers, rearrange them to create the next sequence that would appear in dictionary order.For example, [1,2,3] → [1,3,2], or [2,3,1] → [3,1,2]. If the array is already in its largest possible arrangement (like [3,2,1]), return the smallest possible arrangement instead ([1,2,3]).
 *
 * Solution:- best approach - generate only next permutation
 *
 * Eg.1:-
 * input: nums = [2,4,1]
 * output: [4,1,2]
 *
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function find_next_permutation_using_one_loop(sequence: number[]): void {
   const length = sequence.length;
   let pivot = -1;
   for (let currentIndex = length - 2; currentIndex >= 0; currentIndex--) {
      if (sequence[currentIndex] < sequence[currentIndex + 1]) {
         pivot = currentIndex;
         break;
      }
   }
   if (pivot === -1) {
      sequence.reverse();
      return;
   }
   for (
      let successorIndex = length - 1;
      successorIndex > pivot;
      successorIndex--
   ) {
      if (sequence[successorIndex] > sequence[pivot]) {
         [sequence[successorIndex], sequence[pivot]] = [
            sequence[pivot],
            sequence[successorIndex],
         ];
         break;
      }
   }
   let left = pivot + 1;
   let right = length - 1;
   while (left < right) {
      [sequence[left], sequence[right]] = [sequence[right], sequence[left]];
      left++;
      right--;
   }
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple:-
 * Step 1: Find the pivot element?
 * -------------------------------
 * we start from the right side of the sequence.
 * There we look for the place in the sequence where the numbers start getting smaller.
 * This position/place is what we call as 'pivot'.
 * Eg: [1,5,8,4,7,5,2,1]: Here the pivot element is '4' because its smaller than 7 after it.
 *
 * Step 2: What if no pivot element?
 * ----------------------------------
 * If we don't find a pivot element in the sequence means that the sequence is in non-decreasing
 * order (descending order that allows duplicates), this means that the sequence is in its
 * largest possible order, we then just simply reverse the array.
 * Eg: [3,2,1] -> [1,2,3]
 *
 * Step 3: Finding the successor.
 * ------------------------------
 * If we find the pivot then we look from the right side of the sequence again.
 * There we find the smallest number that is larger than the pivot.
 * Eg: [1,5,8,4,7,5,2,1]: here the pivot is 4 and from the right side of the
 * sequence the successor is 5.
 *
 * Step 4: Swap and rearrange
 * ---------------------------
 * We swap the pivot element with its successor. Then, we sort the portion that comes after
 * the pivot in ascending order (which can be done by simply reversing that portion)
 * Eg: [1,5,8,4,7,5,2,1]
 *     After swap:- [1,5,8,5,7,4,2,1];
 *     Then re-arrange the elements after 5: [1,5,8,5,1,2,4,7]
 *
 * This approach ensures that we always get the smallest possible next arrangement that is still
 * larger than the current one in lexicographic order.
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- sequence[] = [2,1,4]
 * Function call:- find_next_permutation_using_one_loop(sequence);
 *
 * Function execution:-
 *
 *
 */
