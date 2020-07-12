(function (jsaw) {
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
