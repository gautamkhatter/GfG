/**
 * #### Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. Note: Stock must be bought before being sold.
 *
 * Solution:- naive approach - exploring all pairs of buy and sell
 *
 * Eg.1:-
 * input: nums = [7, 10, 1, 3, 6, 9, 2],
 * output: 8
 *
 * Explanation: Buy for price 1 and sell for price 9.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1);
 */

function max_profit_by_exploring_all_pairs(prices: number[]) {
   const length = prices.length;
   let result = 0;

   for (let buyDay = 0; buyDay < length - 1; buyDay++) {
      for (let sellDay = buyDay + 1; sellDay < length; sellDay++) {
         result = Math.max(result, prices[sellDay] - prices[buyDay]);
      }
   }

   return result;
}

/**
 * ### 💡 Idea behind the approach:-
 *
 * The idea behind this approach is simple, we use two nested loops to explore
 * all possible ways to buy and sell stock. 
 * 
 * Outer loop: decides the buy price of the stock
 * Inner loop: decides the sell price of the stock
 * 
 * We will get our maximum profit after exploring every pair where we get 
 * our maximum difference of selling - (minus) buying price.
 * 
 *
 * ### 🤯 Dry run of the code:-
 *
 * Eg:- prices[] = [12, 35, 1, 10, 34, 1]
 * Function call:- max_profit_by_exploring_all_pairs(prices);
 *
 * Function execution:-
 *    • result = 0
 **         b   s
 *         [7, 10, 1, 3, 6, 9, 2]
 *         (buy=0) => (sell=buy+1)
 *                 => (sell=1) => now we calculate result
 *                 => result = Math.max(res, p[sell] - p[buy]);
 *                 => result = Math.max(0, 10-7) => max(0,3);
 *                 => result = 3 
 * 
 **                    b      s
 *                    [7, 10, 1, 3, 6, 9, 2]
 *                 => (sell=2) => now we calculate result
 *                 => result = Math.max(res, p[sell] - p[buy]);
 *                 => result = Math.max(3, 1-7) => max(3,-6);
 *                 => result = 3
 * 
 **                    b         s
 *                    [7, 10, 1, 3, 6, 9, 2]
 *                 => (sell=3) => now we calculate result
 *                 => result = Math.max(res, p[sell] - p[buy]);
 *                 => result = Math.max(3, 3-7) => max(3,-4);
 *                 => result = 3
 * 
 **                    b            s
 *                    [7, 10, 1, 3, 6, 9, 2]
 *                 => (sell=4) => now we calculate result
 *                 => result = Math.max(res, p[sell] - p[buy]);
 *                 => result = Math.max(3, 6-7) => max(3,-1);
 *                 => result = 3
 * 
 **                    b               s
 *                    [7, 10, 1, 3, 6, 9, 2]
 *                 => (sell=2) => now we calculate result
 *                 => result = Math.max(res, p[sell] - p[buy]);
 *                 => result = Math.max(3, 9-7) => max(3,2);
 *                 => result = 3
 * 
 **                    b                  s
 *                    [7, 10, 1, 3, 6, 9, 2]
 *                 => (sell=2) => now we calculate result
 *                 => result = Math.max(res, p[sell] - p[buy]);
 *                 => result = Math.max(3, 2-7) => max(3,-5);
 *                 => result = 3
 * 
 * Now we move forward with buy and move from 7(buy) to 10(buy)
 * and we repeat this same steps from above until we have iterated over,
 * every pair of buy and sell and maximize our result.
 * 
 * This is very inefficient way to calculate the max profit of buy and sell
 * when there is only one transaction allowed.
 */               
