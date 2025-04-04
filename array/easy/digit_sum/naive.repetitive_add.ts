/**
 * #### Given an integer n, we need to repeatedly find the sum of its digits until the result becomes a single-digit number.
 *
 * Solution:- best approach - using only one traversal
 *
 * Eg.1:-
 * input: num = 5674
 * output: 4
 *
 * Explanation: 
 * Step 1: 5 + 6 + 7 + 4 = 22 
 * Step 2: 2 + 2 = 4
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1);
 */

function sum_of_digits_by_repetitively_add(num: number): number {
   let sum = 0;
   while (num > 0 || sum > 9) {
      // check if the sum is 2 digit number
      // if yes, then reset the values
      if (num === 0) {
         num = sum;
         sum = 0;
      }

      // take the last digit and add it to sum
      sum += num % 10;
      // remove the last digit from the given number
      num = Math.floor(num / 10);
   }
   return sum;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this app roach is simple, we are doing the following steps:=
 *    - Summing the digits
 *    - Checking if the sum is < 10 (or >9), if not
 *      Repeat the summation process of the digits.
 * 
 * These steps will make sure that we get a single digit sum for the given number.
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- num = 5674
 * Function call:- sum_of_digits_by_repetitively_add(num);
 *
 * Function execution:-
 *    • sum=0
 * 
 * *     num=5674 & sum=0
 *      (num > 0 || sum > 9) => true
 *                           => num == 0 (false)
 *                           => sum += num % 10 => 5674 % 10 (take the last digit)
 *                           => sum += 4 => sum = 4 (add to sum)
 *                           => num = num / 10  = 5674 / 10 (remove the last digit)
 *                           => num = 567
 **      num=567 & sum=4
 *      (num > 0 || sum > 9) => true
 *                           => num == 0 (false)
 *                           => sum += num % 10 => 567 % 10 (take the last digit)
 *                           => sum += 7 => sum = 4+7 = 11 (add to sum)
 *                           => num = num / 10  = 567 / 10 (remove the last digit)
 *                           => num = 56
 **      num=56 & sum=11
 *      (num > 0 || sum > 9) => true
 *                           => num == 0 (false)
 *                           => sum += num % 10 => 56 % 10 (take the last digit)
 *                           => sum += 6 => sum = 11+6 = 17 (add to sum)
 *                           => num = num / 10  = 56 / 10 (remove the last digit)
 *                           => num = 5
 **      num=5 & sum=17
 *      (num > 0 || sum > 9) => true
 *                           => num == 0 (false)
 *                           => sum += num % 10 => 5 % 10 = 5 (take the last digit)
 *                           => sum += 5 => sum = 17+5 = 22 (add to sum)
 *                           => num = num / 10  = 5 / 10 = 0 (remove the last digit)
 *                           => num = 0
 **      num=0 & sum=22
 *      (num > 0 || sum > 9) => true
 *                           => num == 0 (true)
 **                          => num = sum => num = 22
 **                          => sum = 0
 *                           => sum += num % 10 => 22 % 10 (take the last digit)
 *                           => sum += 2 => sum = 0+2 = 2 (add to sum)
 *                           => num = num / 10  = 22 / 10 (remove the last digit)
 *                           => num = 2
 **      num=2 & sum=2
 *      (num > 0 || sum > 9) => true
 *                           => num == 0 (false)
 *                           => sum += num % 10 => 2 % 10 = 2 (take the last digit)
 *                           => sum += 2 => sum = 2+2 = 4 (add to sum)
 *                           => num = num / 10  = 2 / 10 (remove the last digit)
 *                           => num = 0
 * 
 * So at last we get our final digit sum which is 4.
 */