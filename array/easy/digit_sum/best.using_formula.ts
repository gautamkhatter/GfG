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
 * Time Complexity: O(1)
 * Space Complexity: O(1);
 */

function sum_of_digits_using_formula(num: number): number {
   return num === 0 ? 0 : (num % 9 === 0 ? 9 : num % 9);
}

// if you cannot understand the above line then this:=
function sum_of_digits_using_formula2(num: number): number {
   if (num === 0) return 0;
   if (num % 9 === 0) return 9;
   return num % 9;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this app roach is simple, we have to understand and observe this
 * mathematical concept:-
 * 
 * We know the decimal system gives each digit a place value like:-
 * Eg: 234: 2*100 + 3*10 + 4*1
 *     234: 2*(10^2) + 3*(10^1) + 4*(10^0)  
 * 
 * Now we can separate these digits and write them as follows:-
 *    - 234 = 2*(99+1) + 3*(9+1) + 4
 *    - 234 = 2*99 + 2 + 3*9 + 3 + 4
 *    - 234 = 2 + 3 + 4 + 2*99 + 3*9
 *      we take the 9 common from 99 and 9
 *    - 234 = 2 + 3 + 4 + 9(2*11 + 3)
 * 
 * What this implies is that any number can be represented as sum of its 
 * digits (2+3+4) plus a multiple of 9 = [9*(2*11 + 3)]. Now if we take modulo
 * (which gives remainder) on each side of the equation
 * 
 *    - 234 = 2 + 3 + 4 + 9(2*11 + 3)
 *    - 234 % 9 = 2 + 3 + 4 + 9(2*11 + 3) % 9
 *    - 234 % 9 = (2+3+4) % 9 + 0 (why 0, because the multiple of 9 is wholly divisible by 9)
 * 
 * What this means is that the digital root(sum of digits until a single digit remains) or simply
 * remainder of a num % 9 is equal to the remainder when we sum the digits and take that sum and 
 * modulo 9.
 * 
 * Or simply this is a formula to show this relationship = ((n-1) mod 9) + 1;
 * 
 *
 * ### 🤯 Dry run of the code:-
 * This is just a formula, it does not require a detailed dry run, just understand the 
 * mathematical concept behind this.
 */
