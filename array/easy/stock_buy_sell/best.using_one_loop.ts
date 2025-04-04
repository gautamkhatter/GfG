/**
 * #### Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. Note: Stock must be bought before being sold.
 *
 * Solution:- best approach - using only one traversal
 *
 * Eg.1:-
 * input: nums = [7, 10, 1, 3, 6, 9, 2],
 * output: 8
 *
 * Explanation: Buy for price 1 and sell for price 9.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1);
 */

function max_profit_using_one_loop(prices: number[]) {
   let min_so_far = prices[0];
   let result = 0;

   for (let currentDay = 1; currentDay < prices.length; currentDay++) {
      min_so_far = Math.min(min_so_far, prices[currentDay]);
      result = Math.max(result, prices[currentDay] - min_so_far);
   }

   return result;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this app roach is simple, so in order for us to maximize
 * our profit we need to make sure that the buying price is minimum and the selling
 * price is maximum (it is obvious, i know). 
 * 
 * So for this, we keep track of the minimum buying price so far at every step, then 
 * for every price, we subtract that price with the minimum and if their difference yield
 * us more profit than the current result (keeping track of result at every step), we
 * update our result. 
 *
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- prices[] = [7, 10, 1, 3, 6, 9, 2]
 * Function call:- max_profit_using_one_loop(prices);
 *
 * Function execution:-
 *    • min = prices[0] = 7;
 *      result = 0
 **          m   c 
 *          [7, 10, 1, 3, 6, 9, 2]
 *          (day=1) => min = Math.min(min, prices[current]);
 *                  => min = Math.min(7, 10);
 *                  => min = 7
 *                  => result = Math.max(result, p[current]-min);
 *                  => result = Math.max(0, 10-7)
 *                  => result = 3;
 * 
 **          m      c 
 *          [7, 10, 1, 3, 6, 9, 2]
 *          (day=2) => min = Math.min(min, prices[current]);
 *                  => min = Math.min(7, 1);
 *                  => min = 1
 *                  => result = Math.max(result, p[current]-min);
 *                  => result = Math.max(3, 1-1) => max(3,0)
 *                  => result = 3;
 * 
 **                 m  c 
 *          [7, 10, 1, 3, 6, 9, 2]
 *          (day=3) => min = Math.min(min, prices[current]);
 *                  => min = Math.min(1, 3);
 *                  => min = 1
 *                  => result = Math.max(result, p[current]-min);
 *                  => result = Math.max(3, 3-1) => max(3,2)
 *                  => result = 3;
 * 
 **                 m     c 
 *          [7, 10, 1, 3, 6, 9, 2]
 *          (day=4) => min = Math.min(min, prices[current]);
 *                  => min = Math.min(1, 6);
 *                  => min = 1
 *                  => result = Math.max(result, p[current]-min);
 *                  => result = Math.max(3, 6-1) => max(3,5)
 *                  => result = 5;
 * 
 **                 m        c 
 *          [7, 10, 1, 3, 6, 9, 2]
 *          (day=5) => min = Math.min(min, prices[current]);
 *                  => min = Math.min(1, 9);
 *                  => min = 1
 *                  => result = Math.max(result, p[current]-min);
 *                  => result = Math.max(5, 9-1) => max(5,8)
 *                  => result = 8;
 * 
 **                 m           c 
 *          [7, 10, 1, 3, 6, 9, 2]
 *          (day=6) => min = Math.min(min, prices[current]);
 *                  => min = Math.min(1, 2);
 *                  => min = 1
 *                  => result = Math.max(result, p[current]-min);
 *                  => result = Math.max(8, 2-1) => max(8,1)
 *                  => result = 8;
 * 
 * So, with this approach we got our maximum profit = 8
 */
