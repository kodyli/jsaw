(function (jsaw) {
    jsaw.problem({
        name: 'Maximun Sum Subarray of Size K (easy)',
        statement: 'Given an array of positive numbers and a positive number "K", find the maximum sum of any contiguous subarray of size "k".',
        examples: "Input: k = 3, numbers = [2, 1, 5, 1, 3, 2]; Output: 9.",
        test: function (maxSubarrayOfSizeK) {
            //jasmine style test cases.
            describe("Maximun Sum Subarray of Size K (easy)", function () {
                it("Input: k = 3, numbers = [2, 1, 5, 1, 3, 2]; Output: 9.", function () {
                    expect(maxSubarrayOfSizeK(3, [2, 1, 5, 1, 3, 2])).toEqual(9);
                });
                it("Input: k = 2, numbers = [2,3,4,1,5]; Output: 7.", function () {
                    expect(maxSubarrayOfSizeK(2, [2, 3, 4, 1, 5])).toEqual(7);
                });
            });
        },
        code: function maxSubarrayOfSizeK(k, numbers) {
            return 0;
        },
        solution: function maxSubarrayOfSizeK(k, numbers) {
            let maxSum = 0,
                sum = 0,
                start = 0;
            for (let i = 0, l = numbers.length; i < l; i++) {
                sum += numbers[i];
                // the size is fixed, so using 'if' statement.
                if (i >= k - 1) {
                    maxSum = Math.max(maxSum, sum);
                    sum -= numbers[start];
                    start += 1;
                }
            }
            return maxSum;
        }
    });

    jsaw.problem({
        name: 'Longest Substring with Same Letters after Replacement (hard)',
        statement: 'Given a string with lowercase letter only, if you are allowed to replace no more than "k" letters with any letter, find the length of the longest substring having the same letters after replacement.',
        examples: "Input: k = 2, str = 'aabccbb'; Output: 5; Explanation: Replace the two 'c' with 'b' to have a longest repeating substring 'bbbbb'.",
        test: function (lengthOfLongestSubstring) {
            //jasmine style test cases.
            describe(this.name, function () {
                it("Input: k = 2, str = 'aabccbb'; Output: 5.", function () {
                    expect(lengthOfLongestSubstring(2, 'aabccbb')).toEqual(5);
                });
                it("Input: k = 1, str = 'abbcb'; Output: 4.", function () {
                    expect(lengthOfLongestSubstring(1, 'abbcb')).toEqual(4);
                });
                it("Input: k = 1, str = 'abcba'; Output: 3.", function () {
                    expect(lengthOfLongestSubstring(1, 'abcba')).toEqual(3);
                });
            });
        },
        code: function lengthOfLongestSubstring(k, str) {
            return 0;
        },
        solution: function lengthOfLongestSubstring(k, str) {
            return 0;
        }
    });
})(jsaw);
