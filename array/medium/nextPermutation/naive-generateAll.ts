/**
 * ### 🤔 Question:-
 * Given an array of numbers, rearrange them
 * to create the next sequence that would appear in dictionary order.
 * For example, [1,2,3] → [1,3,2], or [2,3,1] → [3,1,2]. If the array
 * is already in its largest possible arrangement (like [3,2,1]), return
 * the smallest possible arrangement instead ([1,2,3]).
 *
 * #### 🧠 Solution:- naive approach - we generate all permutations
 *
 * Eg.1:-
 * input: nums = [1, 2, 4]
 * output: 125
 *
 * Eg.2:-
 * input: nums = [9, 9, 9]
 * output: 1000
 *
 *#### Time Complexity: O(n);
 *#### Space Complexity: O(1);
 */

function findNextPermutationByGeneratingAll(sequence: number[]): void {
   const allPermutations: number[][] = [];
   // building all the permutations of the sequence
   buildPermutations(allPermutations, sequence, 0);
   // sorting the collection so that we find the next permutation of the given sequence
   sortPermutations(allPermutations);
   // this function finds the next permutation in the sorted collection
   const nextSequence = findPermutation(allPermutations, sequence);
   console.log(nextSequence);
}

function findPermutation(
   allPermutations: number[][],
   sequence: number[]
): number[] {
   for (let seqIndex = 0; seqIndex < allPermutations.length; seqIndex++) {
      if (isIdenticalSequence(allPermutations[seqIndex], sequence)) {
         if (seqIndex < allPermutations.length - 1) {
            return [...allPermutations[seqIndex + 1]];
         } else if (seqIndex === allPermutations.length - 1) {
            return [...allPermutations[0]];
         }
      }
   }
   return [...sequence];
}

function sortPermutations(allPermutations: number[][]): void {
   allPermutations.sort((permA, permB) => {
      const minLength = Math.min(permA.length, permB.length);

      for (let elementPos = 0; elementPos < minLength; elementPos++) {
         if (permA[elementPos] !== permB[elementPos]) {
            return permA[elementPos] - permB[elementPos];
         }
      }
      return permA.length - permB.length;
   });
}

function buildPermutations(
   allPermutations: number[][],
   workingSequence: number[],
   pivotPosition: number
) {
   // complete permutation found when pivot reaches final element
   if (pivotPosition === workingSequence.length - 1) {
      allPermutations.push([...workingSequence]);
   }

   // trying every possible element at pivot position
   for (
      let swapElPos = pivotPosition;
      swapElPos < workingSequence.length;
      swapElPos++
   ) {
      [workingSequence[pivotPosition], workingSequence[swapElPos]] = [
         workingSequence[swapElPos],
         workingSequence[pivotPosition],
      ];
      // after we fix the pivot position we continue to build the rest of the permutation
      buildPermutations(
         allPermutations,
         workingSequence,
         pivotPosition + 1
      );

      // before we try the next permutation we have to restore the original order of the array
      [workingSequence[pivotPosition], workingSequence[swapElPos]] = [
         workingSequence[swapElPos],
         workingSequence[pivotPosition],
      ];
   }
}

function isIdenticalSequence(
   sequenceA: number[],
   sequenceB: number[]
): boolean {
   if (sequenceA.length !== sequenceB.length) return false;
   for (let i = 0; i < sequenceA.length; i++) {
      if (sequenceA[i] !== sequenceB[i]) return false;
   }
   return true;
}

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
 **    aliases used: pc = allPermutations
 **                   s = sequence       
 **                  ws = workingSequence
 **                  pivot = pivotPosition
 **                  si = swapElPosition / swap index
 * 
 * Inside the findNextPermutationByGeneratingAll() function
 **         pc = []
 **         s = [2,4,1]
 ** Call • buildAllPermutations(pc, ws, 0):=
            => base case => if(pivot === ws.length-1) 
 *                                 0 === 2 => false;
 *          Iterations:=
 *               si = pivot => si = 0 
 *                (si=0) => Swap elements at pivot=0 and si=0
 *                       => [2,4,1] -> [2,4,1] (no change)
 ** R.Call               => buildAll(pc, [2,4,1], 1)
 *                          -----------------------------
 **                           [pivot = 1, with 2 fixed]
 *                          -----------------------------
 *                           => base case => if(pivot === ws.length-1) 
 *                                                  1 === 2 => false;
 *                                        => Iterations:= 
 *                                              si = pivot = 1
 *                                                 (si=1) => swap elements at pivot=1 and si=1
 *                                                        => [2,4,1] -> [2,4,1]
 *                                                        => buildAll(pc, [2,4,1], 2);
 *                                                          ------------------------------
 **                                                           [pivot = 2, with 2,4 fixed]
 *                                                          ------------------------------
 *                                                            => base case = if(pivot === ws.length-1)
 *                                                                                  2 === 2 => true
 *                                                            => pc.push([2,4,1]);
 **                                                           => pc = [ [2,4,1] ]
 *                                                            => control goes back to iteration (si=1);
 *                                                        => swap elements back from pivot=1, si=1
 *                                                        => [2,4,1] -> [2,4,1];
 * 
 *                                                 (si=2) => swap elements at pivot=1 and si=2
 *                                                        => [2,4,1] -> [2,1,4]
 *                                                        => buildAll(pc, [2,1,4], 2)
 *                                                          ------------------------------
 **                                                           [pivot = 2, with 2,1 fixed]
 *                                                          ------------------------------
 *                                                             => base condition = if(pivot === ws.length-1)
 *                                                                                        2 === 2 => true
 *                                                             => pc.push([2,1,4])
 **                                                            => pc = [ [2,4,1], [2,1,4] ];
 *                                                             => control goes back to iteration (si=2)
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
 *                           => base case => if(pivot === ws.length-1) 
 *                                                  1 === 2 => false;
 *                                        => Iterations:= 
 *                                              si = pivot = 1
 *                                                 (si=1) => swap elements at pivot=1 and si=1
 *                                                        => [4,2,1] -> [4,2,1]
 *                                                        => buildAll(pc, [4,2,1], 2);
 *                                                          ------------------------------
 **                                                           [pivot = 2, with 4,2 fixed]
 *                                                          ------------------------------
 *                                                            => base case = if(pivot === ws.length-1)
 *                                                                                  2 === 2 => true
 *                                                            => pc.push([4,2,1]);
 **                                                           => pc = [ [2,4,1], [2,1,4], 
 **                                                                     [4,2,1]
 **                                                                   ]
 *                                                            => control goes back to iteration (si=1);
 *                                                        => swap elements back from pivot=1, si=1
 *                                                        => [4,2,1] -> [4,2,1];
 * 
 *                                                 (si=2) => swap elements at pivot=1 and si=2
 *                                                        => [4,2,1] -> [4,1,2]
 *                                                        => buildAll(pc, [4,1,2], 2)
 *                                                          ------------------------------
 **                                                           [pivot = 2, with 4,1 fixed]
 *                                                          ------------------------------
 *                                                             => base condition = if(pivot === ws.length-1)
 *                                                                                        2 === 2 => true
 *                                                             => pc.push([4,1,2])
 **                                                            => pc = [ [2,4,1], [2,1,4] 
 **                                                                      [4,2,1], [4,1,2]        
 **                                                                    ];
 *                                                             => control goes back to iteration (si=2)
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
 *                           => base case => if(pivot === ws.length-1) 
 *                                                  1 === 2 => false;
 *                                        => Iterations:= 
 *                                              si = pivot = 1
 *                                                 (si=1) => swap elements at pivot=1 and si=1
 *                                                        => [1,4,2] -> [1,4,2]
 *                                                        => buildAll(pc, [1,4,2], 2);
 *                                                          ------------------------------
 **                                                           [pivot = 2, with 1,4 fixed]
 *                                                          ------------------------------
 *                                                            => base case = if(pivot === ws.length-1)
 *                                                                                  2 === 2 => true
 *                                                            => pc.push([1,4,2]);
 **                                                           => pc = [ [2,4,1], [2,1,4], 
 **                                                                     [4,2,1], [4,1,2],
 **                                                                     [1,4,2],
 **                                                                   ]
                                                              => control goes back to iteration (si=1)
 *                                                        => swap elements back from pivot=1, si=1
 *                                                        => [1,4,2] -> [1,4,2];
 * 
 *                                                 (si=2) => swap elements at pivot=1 and si=2
 *                                                        => [1,4,2] -> [1,2,4]
 *                                                        => buildAll(pc, [1,2,4], 2)
 *                                                          ------------------------------
 **                                                           [pivot = 2, with 4,1 fixed]
 *                                                          ------------------------------
 *                                                             => base condition = if(pivot === ws.length-1)
 *                                                                                        2 === 2 => true
 *                                                             => pc.push([1,2,4])
 **                                                            => pc = [ [2,4,1], [2,1,4] 
 **                                                                      [4,2,1], [4,1,2],
 **                                                                      [1,4,2], [1,2,4]        
 **                                                                    ];
 *                                                             => control goes back to iteration (si=2)
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
 * For that we call sortPermutation function.
 * 
 * 
 */
