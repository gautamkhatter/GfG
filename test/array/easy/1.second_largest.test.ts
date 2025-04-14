import second_largest_using_sorting from "../../../array/easy/1.second_largest/a.naive.using_sorting";
import second_largest_using_two_loops from "../../../array/easy/1.second_largest/b.better.using_two_loops";
import second_largest_using_one_loop from "../../../array/easy/1.second_largest/c.best.using_one_loop";

describe("Second Largest Element", () => {
   const implementations = [
      { name: "using sorting", fn: second_largest_using_sorting },
      { name: "using two loops", fn: second_largest_using_two_loops },
      { name: "using one loop", fn: second_largest_using_one_loop },
   ];

   implementations.forEach(({ name, fn }) => {
      describe(`Implementation ${name}`, () => {
         // Normal cases
         test("should find second largest in normal array", () => {
            expect(fn([12, 35, 1, 10, 34, 1])).toBe(34);
         });

         test("should handle array with negative numbers", () => {
            expect(fn([-10, -5, -20, -1, -15])).toBe(-5);
         });

         test("should handle array with mixed positive and negative numbers", () => {
            expect(fn([-1, 10, -5, 15, 8])).toBe(10);
         });

         // Edge cases
         test("should handle array with all same elements", () => {
            expect(fn([10, 10, 10])).toBe(-1);
         });

         test("should handle array with two elements", () => {
            expect(fn([10, 5])).toBe(5);
         });

         test("should handle array with single element", () => {
            expect(fn([5])).toBe(-1);
         });

         // Corner cases
         test("should handle empty array", () => {
            expect(fn([])).toBe(-1);
         });

         test("should handle array with duplicates", () => {
            expect(fn([20, 10, 20, 8, 12, 10, 15, 20])).toBe(15);
         });

         test("should handle array where second largest appears multiple times", () => {
            expect(fn([20, 15, 15, 15, 10, 10])).toBe(15);
         });

         // Large numbers
         test("should handle array with large numbers", () => {
            expect(
               fn([Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1, 1, 2])
            ).toBe(Number.MAX_SAFE_INTEGER - 1);
         });
      });
   });

   // Cross-implementation verification
   test("all implementations should produce the same results", () => {
      const testCases = [
         [12, 35, 1, 10, 34, 1],
         [-10, -5, -20, -1, -15],
         [10, 10, 10],
         [5],
         [],
         [20, 10, 20, 8, 12, 10, 15, 20],
         [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1, 1, 2],
      ];

      testCases.forEach((testCase) => {
         const results = implementations.map(({ fn }) => fn([...testCase]));
         // All results should be equal to the first result
         results.forEach((result) => {
            expect(result).toBe(results[0]);
         });
      });
   });
});
