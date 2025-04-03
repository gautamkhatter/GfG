/**
 * #### Given an array of numbers, rearrange them to create the next sequence that would appear in dictionary order.For example, [1,2,3] → [1,3,2], or [2,3,1] → [3,1,2]. If the array is already in its largest possible arrangement (like [3,2,1]), return the smallest possible arrangement instead ([1,2,3]).
 *
 * Solution:- naive approach - we generate all permutations.
 *
 * Eg.1:-
 * input: nums = [2,4,1]
 * output: [4,1,2]
 *
 * Time Complexity: O(n!*nlog(n!));
 * Space Complexity: O(n!);
 */

function find_next_permutation_by_generating_all(sequence: number[]): void {
   const permutations: number[][] = [];
   // building all the permutations for the given sequence
   build_permutations(permutations, sequence, 0);
   // sorting the permutations in lexicographic order
   sort_permutations(permutations);
   // finding the next sequence in the sorted order of permutations
   const next_sequence = next_permutation(permutations, sequence);
   console.log(next_sequence);
}

function next_permutation(
   permutations: number[][],
   sequence: number[]
): number[] {
   const length = permutations.length;
   for (let index = 0; index < length; index++) {
      const is_identical = is_identical_sequence(
         permutations[index],
         sequence
      );
      if (is_identical) {
         if (index < length - 1) {
            return [...permutations[index + 1]];
         } else if (index === length - 1) {
            return [...permutations[0]];
         }
      }
   }
   return [...sequence];
}

function sort_permutations(permutations: number[][]): void {
   permutations.sort((permA, permB) => {
      for (let position = 0; position < permA.length; position++) {
         if (permA[position] !== permB[position]) {
            return permA[position] - permB[position];
         }
      }
      return permA.length - permB.length;
   });
}

function build_permutations(
   permutations: number[][],
   given_sequence: number[],
   pivot_position: number
) {
   // complete permutation found when pivot reaches final element
   if (pivot_position === given_sequence.length - 1) {
      permutations.push([...given_sequence]);
   }

   // trying every possible element at pivot position
   for (
      let swap_pos = pivot_position;
      swap_pos < given_sequence.length;
      swap_pos++
   ) {
      [given_sequence[pivot_position], given_sequence[swap_pos]] = [
         given_sequence[swap_pos],
         given_sequence[pivot_position],
      ];
      // after we fix the pivot position we continue to build the rest of the permutation
      build_permutations(
         permutations,
         given_sequence,
         pivot_position + 1
      );

      // before we try the next permutation we have to restore the original order of the array
      [given_sequence[pivot_position], given_sequence[swap_pos]] = [
         given_sequence[swap_pos],
         given_sequence[pivot_position],
      ];
   }
}

function is_identical_sequence(
   sequenceA: number[],
   sequenceB: number[]
): boolean {
   if (sequenceA.length !== sequenceB.length) return false;
   for (let i = 0; i < sequenceA.length; i++) {
      if (sequenceA[i] !== sequenceB[i]) return false;
   }
   return true;
}

const sequence = [2, 1, 4];
console.log(find_next_permutation_by_generating_all(sequence));
/**
 * ### 💡 Idea behind the approach:-
 *
 * The very basic idea that comes to our mind is that we would first generate
 * all possible permutations of a given array and sort them. Once sorted, we
 * locate the current permutation within this list. The next permutation is
 * simply the next arrangement in the sorted order. If the current arrangement
 * is the last in the list then display the first permutation (smallest permutation).
 *
 * Note: This approach will work only when there are no duplicated in the input array.
 * Please refer the expected approach to handle duplicates.
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- sequence[] = [2,4,1]
 * Function call:- findNextPermutationByGeneratingAll(sequence);
 * 
 * Function execution:
 **    aliases used: pc = permutations
 **                   s = sequence       
 **                  gs = given_sequence
 **                  pivot = pivot_position
 **                  si = swapElPosition / swap index
 * 
 * Inside the findNextPermutationByGeneratingAll() function
 **         pc = []
 **         s = [2,4,1]
 ** Call • buildAllPermutations(pc, gs, 0):=
            => base case => if(pivot === gs.length-1) 
 *                                 0 === 2 => false;
 *          Iterations:=
 *               si = pivot => si = 0 
 *                (si=0) => Swap elements at pivot=0 and si=0
 *                       => [2,4,1] -> [2,4,1] (no change)
 ** R.Call               => buildAll(pc, [2,4,1], 1)
 *                          -----------------------------
 **                           [pivot = 1, with 2 fixed]
 *                          -----------------------------
 *                           => base case => if(pivot === gs.length-1) 
 *                                                  1 === 2 => false;
 *                                        => Iterations:= 
 *                                              si = pivot = 1
 *                                                 (si=1) => swap elements at pivot=1 and si=1
 *                                                        => [2,4,1] -> [2,4,1]            (control comes back here)
 *                                                        => buildAll(pc, [2,4,1], 2);    <--------------------|
 *                                                          ------------------------------                     |
 **                                                           [pivot = 2, with 2,4 fixed]                      |
 *                                                          ------------------------------                     |
 *                                                            => base case = if(pivot === gs.length-1)         |
 *                                                                                  2 === 2 => true            |  
 *                                                            => pc.push([2,4,1]);                             |
 **                                                           => pc = [ [2,4,1] ]                              |
 *                                                            => control goes back to iteration (si=1);  ------>
 *                                                        => swap elements back from pivot=1, si=1
 *                                                        => [2,4,1] -> [2,4,1];
 * 
 *                                                 (si=2) => swap elements at pivot=1 and si=2
 *                                                        => [2,4,1] -> [2,1,4]              (control comes back here)
 *                                                        => buildAll(pc, [2,1,4], 2)      <--------------------|
 *                                                          ------------------------------                      |   
 **                                                           [pivot = 2, with 2,1 fixed]                       |
 *                                                          ------------------------------                      |
 *                                                             => base condition = if(pivot === gs.length-1)    |
 *                                                                                        2 === 2 => true       |
 *                                                             => pc.push([2,1,4])                              |
 **                                                            => pc = [ [2,4,1], [2,1,4] ];                    |
 *                                                             => control goes back to iteration (si=2);  ------>
 *                                                        => swap elements back from pivot=1 and si=2
 *                                                        => [2,1,4] -> [2,4,1];
 *                    => swap elements back from pivot=0, si=0
 *                    => [2,4,1] -> [2,4,1];
 *       
 *             (si=1) => Swap elements at pivot=0 and si=1
 *                       => [2,4,1] -> [4,2,1]
 ** R.Call               => buildAll(pc, [4,2,1], 1)
 *                          -----------------------------
 **                           [pivot = 1, with 4 fixed]
 *                          -----------------------------
 *                           => base case => if(pivot === gs.length-1) 
 *                                                  1 === 2 => false;
 *                                        => Iterations:= 
 *                                              si = pivot = 1
 *                                                 (si=1) => swap elements at pivot=1 and si=1
 *                                                        => [4,2,1] -> [4,2,1]              (control comes back here)
 *                                                        => buildAll(pc, [4,2,1], 2);    <--------------------|
 *                                                          ------------------------------                     |
 **                                                           [pivot = 2, with 4,2 fixed]                      |
 *                                                          ------------------------------                     |
 *                                                            => base case = if(pivot === gs.length-1)         |   
 *                                                                                  2 === 2 => true            |
 *                                                            => pc.push([4,2,1]);                             |
 **                                                           => pc = [ [2,4,1], [2,1,4],                      |
 **                                                                     [4,2,1]                                |
 **                                                                   ]                                        |
 *                                                            => control goes back to iteration (si=1);  ------>
 *                                                        => swap elements back from pivot=1, si=1
 *                                                        => [4,2,1] -> [4,2,1];
 * 
 *                                                 (si=2) => swap elements at pivot=1 and si=2
 *                                                        => [4,2,1] -> [4,1,2]              (control comes back here)
 *                                                        => buildAll(pc, [4,1,2], 2)     <--------------------|
 *                                                          ------------------------------                     |
 **                                                           [pivot = 2, with 4,1 fixed]                      |
 *                                                          ------------------------------                     |
 *                                                             => base condition = if(pivot === gs.length-1)   |
 *                                                                                        2 === 2 => true      |
 *                                                             => pc.push([4,1,2])                             |
 **                                                            => pc = [ [2,4,1], [2,1,4]                      |
 **                                                                      [4,2,1], [4,1,2]                      | 
 **                                                                    ];                                      |
 *                                                             => control goes back to iteration (si=2)  ------>
 *                                                        => swap elements back from pivot=1 and si=2
 *                                                        => [4,1,2] -> [4,2,1];
 *                 => swap element back from pivot=0, si=1
 *                 => [4,2,1] -> [2,4,1];     
 * 
 *          (si=2) => Swap elements at pivot=0 and si=2
 *                       => [2,4,1] -> [1,4,2]
 ** R.Call               => buildAll(pc, [1,4,2], 1)
 *                          -----------------------------
 **                           [pivot = 1, with 1 fixed]
 *                          -----------------------------
 *                           => base case => if(pivot === gs.length-1) 
 *                                                  1 === 2 => false;
 *                                        => Iterations:= 
 *                                              si = pivot = 1
 *                                                 (si=1) => swap elements at pivot=1 and si=1
 *                                                        => [1,4,2] -> [1,4,2]            (control comes back here)
 *                                                        => buildAll(pc, [1,4,2], 2);  <--------------------|       
 *                                                          ------------------------------                   | 
 **                                                           [pivot = 2, with 1,4 fixed]                    |
 *                                                          ------------------------------                   |
 *                                                            => base case = if(pivot === gs.length-1)       |
 *                                                                                  2 === 2 => true          |
 *                                                            => pc.push([1,4,2]);                           |
 **                                                           => pc = [ [2,4,1], [2,1,4],                    |
 **                                                                     [4,2,1], [4,1,2],                    |
 **                                                                     [1,4,2],                             |
 **                                                                   ]                                      |
                                                              => control goes back to iteration (si=1) ------>
 *                                                        => swap elements back from pivot=1, si=1
 *                                                        => [1,4,2] -> [1,4,2];
 * 
 *                                                 (si=2) => swap elements at pivot=1 and si=2
 *                                                        => [1,4,2] -> [1,2,4]             (control comes back here)
 *                                                        => buildAll(pc, [1,2,4], 2)    <--------------------|                 
 *                                                          ------------------------------                    |
 **                                                           [pivot = 2, with 4,1 fixed]                     |
 *                                                          ------------------------------                    |
 *                                                             => base condition = if(pivot === gs.length-1)  |
 *                                                                                        2 === 2 => true     |
 *                                                             => pc.push([1,2,4])                            |
 **                                                            => pc = [ [2,4,1], [2,1,4]                     |
 **                                                                      [4,2,1], [4,1,2],                    | 
 **                                                                      [1,4,2], [1,2,4]                     |
 **                                                                    ];                                     |
 *                                                             => control goes back to iteration (si=2) ------>
 *                                                        => swap elements back from pivot=1 and si=2
 *                                                        => [1,2,4] -> [1,4,2];
 *                       => swap elements back from pivot=0 and si=2
 *                       => [1,4,2] -> [2,4,1]
 * 
 * And exit this function, you now are able to understand how each function call is adding
 * another mutation of the given sequence in the final collection. Below is a recursion tree
 * to visualize these function calls better.
 * 
 *                                                      Recursion tree to visualize
 **                                                            [2,4,1] (Start)
 **                                                             /     |     \
 **                                               (Pivot 0)    /      |      \
 **                                               Swap(0,0)   /   Swap(0,1)   \   Swap(0,2)
 **                                                          /        |        \
 **                                                   [2,4,1]     [4,2,1]      [1,4,2]
 **                                                  /    \       /    \        /    \
 **                                (Pivot 1)        /      \     /      \      /      \
 **                                Swap(1,1)       /        \   /        \    /        \
 **                                               /  Swap(1,2) /  Swap(1,2)  / Swap(1,2) \
 **                                              /            /             /             \
 **                                         [2,4,1]      [2,1,4]        [4,2,1]        [4,1,2]        [1,4,2]        [1,2,4]
 **                                            |            |              |               |               |              |
 **                                (Pivot 2)   |            |              |               |               |              |
 **                                Base Case   |            |              |               |               |              |
 **                                            ↓            ↓              ↓               ↓               ↓              ↓
 **                                         Add [2,4,1]   Add [2,1,4]   Add [4,2,1]     Add [4,1,2]     Add [1,4,2]    Add [1,2,4]
 **                                            to all        to all        to all         to all          to all         to all
 * 
 * Now, we have all the permutations, now we need to sort them lexicographically
 * For that we call sort function.
 *       
 *       First, How JavaScript's sort() uses the comparator function?
 *          - In JavaScript, the sort() method uses the return value of the comparator function to determine the order:
 *          - If the function returns a negative number, (a-b) = (-ve), 'a' comes first.
 *          - If the function returns a positive number, (a-b) = (+ve), 'b' comes first.
 *          - If the function returns 0, their order remains unchanged.
 * 
 *    Dry run of sort_permutations(permutations)
 *       Our permutations: [ 
 *                           [2,4,1], [2,1,4], 
 *                           [4,2,1], [4,1,2],
 *                           [1,4,2], [1,2,4] 
 *                         ];
 *       We compare two permutations at a time:-
 *           Comparing => [2,4,1] & [2,1,4]
 *             (pos=0) => permA[pos] != permB[pos]
 *                     => permA[0] != permB[0] => 2 != 2 (false)
 *                     => continue
 *             (pos=1) => permA[1] != permB[1] => 4 != 1 (true)
 *                     => return 4-1 (+ve)
 *                     => [2,1,4] will come first
 * 
 *    How the Sort Algorithm Uses These Comparisons?
 *    ----------------------------------------------
 *       - The sort method calls the comparator multiple times on different pairs of elements. 
 *         It does not follow a single, linear sequence like “first compare A with B, then with C, …”. 
 *         Instead, it uses an efficient algorithm (like Timsort or QuickSort) which:
 *             - Selects pairs to compare: The algorithm might not compare adjacent elements first.
 *             - Swaps elements: Based on the result, elements might be swapped.
 *             - Re-compares: Elements may be compared again later in different contexts to ensure the 
 *               entire array is ordered.
 *       - Final Sorted Order:
 *         By repeatedly calling our comparator, the sort algorithm will eventually arrange all elements 
 *         in the correct order according to our defined comparison logic.
 * 
 * After this sorting our permutations will be like this: [ 
 *                                                          [1,2,4], [1,4,2],
 *                                                          [2,1,4], [2,4,1],
 *                                                          [4,1,2], [4,2,1] 
 *                                                        ]
 * 
 * Then, our last job is to find the next permutation in the sorted collection of sequences.
 *    We call next_permutation(permutations) - try dry running that yourself.
 */
