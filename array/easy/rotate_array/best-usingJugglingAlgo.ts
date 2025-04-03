/**
 * #### Given an array of integers nums[] of size n, the task is to rotate the array elements to the left by k positions.
 *
 * Solution:- best approach - using juggling algorithm
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
 * Time Complexity: O(n);
 * Space Complexity: O(1);
 */

function rotate_array_by_juggling(
   nums: number[],
   left_rotate_count: number
): void {
   let array_size = nums.length;
   left_rotate_count %= array_size;

   // calculating number of cycles in the rotation
   let total_cycles = gcd(array_size, left_rotate_count);

   // now we start processing each cycle;
   for (let cycle_count = 0; cycle_count < total_cycles; cycle_count++) {
      // start element of the current cycle
      let temp_element = nums[cycle_count];
      let current_position = cycle_count,
         next_position: number;

      while (true) {
         next_position = (current_position + left_rotate_count) % array_size;
         if (next_position === cycle_count) break;
         nums[current_position] = nums[next_position];
         current_position = next_position;
      }

      nums[current_position] = temp_element;
   }
}

function gcd(dividend: number, divisor: number): number {
   while (divisor !== 0) {
      let remainder = divisor;
      divisor = dividend % divisor;
      dividend = remainder;
   }
   return dividend;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, the juggling algorithms
 * main idea revolves around the concept of cycles.
 * 
 ** Why its called juggling technique?
 * -----------------------------------
 * The "juggling" name comes from how we handle these cycles:
 *    - We hold one element as a temporary value (like juggling a ball).
 *    - We move through one complete cycle, shifting each element
 *    - We return the temporary value to complete the cycle
 *    - We repeat for each cycle (starting position).
 *
 * 
 ** Now, what is a cycle?
 * -----------------------
 * A cycle represents an independent group of elements that will
 * shift (juggle) among themselves during rotation.
 *
 *
 ** Core Insight: Element Movement Forms Cycles
 * --------------------------------------------
 * When rotating an array by (k) positions, each element follows
 * a specific pattern:-
 * 
 * Now there can be two ways to be thinking about this rotation pattern:=
 * 
 **    • Approach 1: Source-based Formula (i+k) % n
 *     ----------------------------------------------
 *       - In this way of thinking, we ask which element should come in this
 *         position (i) rather than thinking where this position's element should
 *         go.
 *             Eg: Imagine we have array [A, B, C, D, E, F] and want to rotate left by 2:
 *                   (i=0) => We ask, which element belongs at this position? 
 *                            The element which was at the position => (0+2) % 6 = 2 => C
 *                            Meaning: At position 0, C is the element that should come here
 *                            after 2 rotations.
 *                                           (i=0 => C)
 *                   (i=1) => We ask, which element belongs at this position? 
 *                            The element which was at the position => (1+2) % 6 = 3 => D
 *                                           (i=1 => D)
 *                   (i=2) => We ask, which element belongs at this position?
 *                            The element which was at the position => (2+2) % 6 = 4 => E
 *                                           (i=2 => E)
 *                   (i=3) => We ask, which element belongs at this position? 
 *                            The element which was at the position => (3+2) % 6 = 5 => F
 *                                           (i=3 => F)
 *                   (i=4) => We ask, which element belongs at this position? 
 *                            The element which was at the position => (4+2) % 6 = 0 => A
 *                                           (i=4 => A)
 *                   (i=5) => We ask, which element belongs at this position? 
 *                            The element which was at the position => (5+2) % 6 = 1 => B
 *                                           (i=5 => B)
 *                  Result => [C, D, E, F, A, B]
 *                             0  1  2  3  4  5
 * 
 * 
 **    • Approach 2: Destination-based Formula (i-k+n) % n
 *     ----------------------------------------------------
 *       - In this way of thinking, we ask where does this current element (i) 
 *         should go after rotation, rather than thinking what element comes to the
 *         current position.
 * 
 *       - We add 'n' to (i-k) to ensure a positive number before taking the modulo, 
 *         as modulo operations with negative numbers can behave differently across 
 *         programming languages.
 * 
 *             Eg: Imagine we have array [A, B, C, D, E, F] and want to rotate left by 2:
 *                   (i=0) => We ask, where does current element (A) go? 
 *                            It should go at position => (0-2+6) % 6 = 4
 *                                                     => 'A' goes to position 4
 * 
 *                   (i=1) => We ask, where does current element (B) go? 
 *                            It should go at position => (1-2+6) % 6 = 5
 *                                                     => 'B' goes to position 5
 * 
 *                   (i=2) => We ask, where does current element (C) go? 
 *                            It should go at position => (2-2+6) % 6 = 0
 *                                                     => 'C' goes to position 0
 * 
 *                   (i=3) => We ask, where does current element (D) go? 
 *                            It should go at position => (3-2+6) % 6 = 1
 *                                                     => 'D' goes to position 1
 * 
 *                   (i=4) => We ask, where does current element (E) go? 
 *                            It should go at position => (4-2+6) % 6 = 2
 *                                                     => 'E' goes to position 2   
 * 
 *                   (i=5) => We ask, where does current element (F) go? 
 *                            It should go at position => (5-2+6) % 6 = 3
 *                                                     => 'f' goes to position 3        
 *                  Result => [C, D, E, F, A, B]
 *                             0  1  2  3  4  5
 * 
 * 
 **    • Key insights
 *     ---------------
 *       - Despite using opposite formulas, both approaches follow the same cycle structure, 
 *         with exactly GCD(n,k) distinct cycles.
 *       - The first approach (i+k)%n is generally more intuitive in practice as it avoids 
 *         dealing with negative numbers.
 *       - In the juggling algorithm, we process one complete cycle at a time, using a single 
 *         temporary variable to juggle elements through the cycle.
 *    
 *
 ** How cycles are forming?
 * ------------------------
 * We take the above example of [A, B, C, D, E, F], an array of length 6
 * and we want to rotate array left by 2 positions.
 * We take gcd(6,2) = 2, this means 2 cycles are forming.
 * Each cycle contains n / gcd(n,k) = 6 / 2 = 3
 * 
 * Now lets use destination based formula as an example:=
 **    Cycle 1 (starting at index 0)
 *          - Element A at index 0 moves to index (0-2+6) % 6 = 4
 *          - Element E at index 4 moves to index (4-2+6) % 6 = 2
 *          - Element C at index 2 moves to index (2-2+6) % 6 = 0
 *          - Back to the start: 0 → 4 → 2 → 0
 * 
 **    Cycle 2 (starting at index 1)
 *          - Element B at index 1 moves to index (1-2+6) % 6 = 5
 *          - Element F at index 5 moves to index (5-2+6) % 6 = 3
 *          - Element D at index 3 moves to index (3-2+6) % 6 = 1
 *          - Back to the start: 1 → 5 → 3 → 1
 * 
 *
 ** Why GCD / HCF matters?
 * -----------------------
 * The GCD(n,k) tells us exactly how many groups / cycles exist, why?
 *    - Because each cycle has exactly n / GCD(n,k) elements
 *    - Each cycle is independent of others (non-overlapping)
 * 
 * For our example array [A, B, C, D, E, F] with length n=6 and rotation k=2:
 *    - GCD(6,2) = 2, meaning there are 2 distinct cycles
 *    - Each cycle contains 6/2 = 3 elements
 *    - The two cycles are:
 *          0 → 4 → 2 → 0 (cycle 1: elements A, E, C)
 *          1 → 5 → 3 → 1 (cycle 2: elements B, F, D)
 *
 * Since we have 2 cycles, we need to process the array starting from 2 different 
 * indices (0 and 1) to complete the rotation. Each cycle is processed independently, 
 * and together they cover the entire array.
 *
 * 
 ** Why this algo is elegant?
 * --------------------------
 * The juggling algorithm efficiently exploits the mathematical structure
 * of the rotation problem:
 *    - It recognizes the cyclical nature of rotations
 *    - It identifies the exact number of independent cycles
 *    - It processes each cycle with minimal space complexity (O(1) extra space)
 *    - It achieves optimal time complexity (O(n))
 *
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- nums[] = [10, 23, 34, 45, 57, 66], k=2
 * The provided code uses source based formula for juggling.
 * Function call:- rotate_array_by_juggling(nums);
 *
 * Function execution:
 *    • Cycles(c) = gcd(len, k) => gcd(6,2) => 2
 *    • Iterations:=
 *           aliases used:= cycle = c
 *                       := cycle_count = cc
 *                       := current_position = cp
 *                       := next_position = np
 *                       := tempElement = t
 *                       := leftRotationCount = lrc
 *                       := array_size = l
 * 
 **          0       2       4   
 *         [10, 23, 34, 45, 57, 66]
 *        --------------------------
 *                  (cc=0)
 *        --------------------------
 *          (c=0) => t = nums[cc] => t = 10
 *                => cp = cc => cp = 0
 *                => while(true)
 *                => np = (cp + lrc) % l
 *                => np = (0 + 2) % 6 => np = 2
 *                =>
 *                => if(np == cc) => (2 == 0) => false
 *                => 
 *                => nums[cp] = nums[np]
 *                => nums[0] = nums[2]
 **               => nums = [34, 23, _, 45, 57, 66];
 *                =>
 *                => cp = np => cp = 2
 *                =>
 *                => loop dint end so we continue
 *                => np = (cp + lrc) % l
 *                => np = (2 + 2) % 6 => np = 4
 *                =>
 *                => if(np == cc) => (4 == 0) => false
 *                => 
 *                => nums[cp] = nums[np]
 *                => nums[2] = nums[4]
 **               => nums = [34, 23, 57, 45, _, 66];
 *                =>
 *                => cp = np => cp = 4
 *                =>
 *                => loop didn't end, so we continue
 *                => np = (cp + lrc) % l
 *                => np = (4 + 2) % 6 => np = 0
 *                => 
 *                => if(np == cc) => (0 == 0) => true
 *                => break, loop ends
 *                =>
 *                => nums[cp] = t
 *                => nums[4] = 10
 **               => nums = [34, 23, 57, 45, 10, 66];
 *
 *  
 *        -------------------------
 *          first cycle completed
 *        -------------------------
 * 
 * 
 **              1       3       5   
 *         [34, 23, 57, 45, 10, 66]
 *        --------------------------
 *                  (cc=1)
 *        --------------------------
 *          (c=1) => t = nums[cc] => t = 23
 *                => cp = cc => cp = 1
 *                => while(true)
 *                => np = (cp + lrc) % l
 *                => np = (1 + 2) % 6 => np = 3
 *                =>
 *                => if(np == cc) => (3 == 1) => false
 *                => 
 *                => nums[cp] = nums[np]
 *                => nums[1] = nums[3]
 **               => nums = [34, 45, 57, _, 10, 66];
 *                =>
 *                => cp = np => cp = 3
 *                =>
 *                => loop dint end so we continue
 *                => np = (cp + lrc) % l
 *                => np = (3 + 2) % 6 => np = 5
 *                =>
 *                => if(np == cc) => (5 == 1) => false
 *                => 
 *                => nums[cp] = nums[np]
 *                => nums[3] = nums[5]
 **               => nums = [34, 45, 57, 66, 10, _];
 *                =>
 *                => cp = np => cp = 5
 *                =>
 *                => loop didn't end, so we continue
 *                => np = (cp + lrc) % l
 *                => np = (5 + 2) % 6 => np = 1
 *                => 
 *                => if(np == cc) => (1 == 1) => true
 *                => break, loop ends
 *                =>
 *                => nums[cp] = t
 *                => nums[5] = 23
 **               => nums = [34, 45, 57, 66, 10, 23];
 *
 *
 *        -------------------------
 *          second cycle completed
 *        -------------------------
 * 
 * After both the cycles have finished we have rotated out array by
 * 'k' positions:-
 *          original:= [10, 23, 34, 45, 57, 66];
 *           rotated:= [34, 45, 57, 66, 10, 23];
 */
