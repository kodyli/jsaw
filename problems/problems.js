(function (jsaw) {
	//Sliding Window
	jsaw.problem({
		name: 'Find Average of Subarray of Size K (easy)',
		statement: "Given an array, find the average of all contiguous subarrays of size 'K' in it.",
		examples: "Input: k = 5, numbers =  [1, 3, 2, 6, -1, 4, 1, 8, 2]; Output: [2.2, 2.8, 2.4, 3.6, 2.8].",
		test: function (findAverageOfSubarray) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: k = 5, numbers = [1, 3, 2, 6, -1, 4, 1, 8, 2]; Output: [2.2, 2.8, 2.4, 3.6, 2.8].", function () {
					expect(findAverageOfSubarray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])).toEqual([2.2, 2.8, 2.4, 3.6, 2.8]);
				});
			});
		},
		code: function findAverageOfSubarray(k, numbers) {
			return [];
		},
		solution: function findAverageOfSubarray(k, numbers) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Maximun Sum Subarray of Size K (easy)',
		statement: 'Given an array of positive numbers and a positive number "K", find the maximum sum of any contiguous subarray of size "k".',
		examples: "Input: k = 3, numbers = [2, 1, 5, 1, 3, 2]; Output: 9.",
		test: function (maxSubarrayOfSizeK) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: k = 3, numbers = [2, 1, 5, 1, 3, 2]; Output: 9.", function () {
					expect(maxSubarrayOfSizeK(3, [2, 1, 5, 1, 3, 2])).toEqual(9);
				});
				it("Input: k = 2, numbers = [2, 3, 4, 1, 5]; Output: 7.", function () {
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
		name: "Smallest Subarray with a given sum (easy)",
		statement: "Given an array of positive numbers and a positive number 'S', find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0, if no such subarray exists.",
		examples: "Input: s = 7, numbers = [2, 1, 5, 2, 3, 2]; Output: 2; Explanation: The smallest subarray with a sum great than or equal to '7' is [5,2].",
		test: function (smallestSubarrayWithGivenSum) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: s = 7, numbers = [2, 1, 5, 2, 3, 2]; Output: 2.", function () {
					expect(smallestSubarrayWithGivenSum(7, [2, 1, 5, 2, 3, 2])).toEqual(2);
				});
			});
		},
		code: function smallestSubarrayWithGivenSum(s, numbers) {
			return [];
		},
		solution: function smallestSubarrayWithGivenSum(s, numbers) {
			return [];
		}
	});
	jsaw.problem({
		name: "Longest Substring with K Distinct Characters (medium)",
		statement: "Given a string, find the length of the longest substring in it with no more than K distinct characters.",
		examples: "Input: str = 'araaci', k=2; Output: 4; Explanation: The longest substring with no more than '2' distinct characters is 'araa'.",
		test: function (longestSubstringWithKDistinct) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: str = 'araaci', k=2; Output: 4.", function () {
					expect(longestSubstringWithKDistinct(2, 'araaci')).toEqual(4);
				});
			});
		},
		code: function longestSubstringWithKDistinct(k, str) {
			return 0;
		},
		solution: function longestSubstringWithKDistinct(k, str) {
			return 0;
		}
	});
	jsaw.problem({
		name: "Fruits into Baskets (medium)",
		statement: "Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put a maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.",
		examples: "Input: Fruit = ['A', 'B', 'C', 'A', 'C']; Output: 3; Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']",
		test: function (fruitsIntoBaskets) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: Fruit = ['A', 'B', 'C', 'A', 'C']; Output: 3.", function () {
					expect(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])).toEqual(3);
				});
			});
		},
		code: function fruitsIntoBaskets(fruits) {
			return 0;
		},
		solution: function fruitsIntoBaskets(fruits) {
			return 0;
		}
	});
	jsaw.problem({
		name: "No-repeat Substring (hard)",
		statement: "Given a string, find the length of the longest substring which has no repeating characters.",
		examples: "Input str = 'aabccbb'; Output: 3; Explanation: The longest substring without any repeating characters is 'abc'.",
		test: function (nonRepeatSubstring) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input str = 'aabccbb'; Output: 3.", function () {
					expect(nonRepeatSubstring('aabccbb')).toEqual(3);
				});
				it("Input str = 'abcba'; Output: 3.", function () {
					expect(nonRepeatSubstring('abcba')).toEqual(3);
				});
			});
		},
		code: function nonRepeatSubstring(str) {
			return 0;
		},
		solution: function nonRepeatSubstring(str) {
			let s = 0,
				maxL = 0,
				indexCache = {};
			for (let e = 0, l = str.length; e < l; e++) {
				let endChar = str.charAt(e);
				if (endChar in indexCache) {
					s = Math.max(indexCache[endChar] + 1, s);
				} else {
					indexCache[endChar] = e;
				}
				maxL = Math.max(e - s + 1, maxL);
			}
			return maxL;
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
			const lengthCache = {};
			let s = 0,
				maxLength = 0,
				maxRepeatLettersLength = 0;
			for (let e = 0, l = str.length; e < l; e++) {
				let endChar = str.charAt(e);
				if (!(endChar in lengthCache)) {
					lengthCache[endChar] = 0;
				}
				lengthCache[endChar] += 1;
				maxRepeatLettersLength = Math.max(maxRepeatLettersLength, lengthCache[endChar]);
				if (e - s + 1 - maxRepeatLettersLength > k) {
					let startChar = str.charAt(s);
					lengthCache[startChar] -= 1;
					s += 1;
				}
				maxLength = Math.max(maxLength, e - s + 1);
			}
			return maxLength;
		}
	});
	jsaw.problem({
		name: "Longest Subarray with Ones after Replacement (hard)",
		statement: "Given an array containing 0s and 1s, if you are allowed to replace no more than 'k' 0s with 1s, find the length of the longest contiguous subarray having all 1s.",
		examples: "Input: k = 2, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 6; Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.",
		test: function (lengthOfLongestSubstring) {
			describe(this.name, function () {
				it("Input: k = 2, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 6.", function () {
					expect(lengthOfLongestSubstring(2, [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1])).toEqual(6);
				});
				it("Input: k = 5, numbers = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]; Output: 11.", function () {
					expect(lengthOfLongestSubstring(5, [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1])).toEqual(11);
				});
				it("Input: k = 3, numbers = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]; Output: 7.", function () {
					expect(lengthOfLongestSubstring(3, [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1])).toEqual(7);
				});
			});
		},
		code: function lengthOfLongestSubstring(k, numbers) {
			return 0;
		},
		solution: function lengthOfLongestSubstring(k, numbers) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Permutation in a String (hard)',
		statement: "Given a string and a pattern, find out if the string contains any permutation of the pattern. Permutation is defined as the re-arranging of the characters of the string. For example, 'abc' has the following six permutations: 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'.",
		examples: "Input: str = 'oidbcaf', pattern = 'abc'; Output: true; Explanation: The string contains 'bca' which is a permutation of the given pattern.",
		test: function (findPermutation) {
			describe(this.name, function () {
				it("Input: str = 'oidbcaf', pattern = 'abc'; Output: true.", function () {
					expect(findPermutation('oidbcaf', 'abc')).toBe(true);
				});
				it("Input: str = 'odicf', pattern = 'dc'; Output: false.", function () {
					expect(findPermutation('odicf', 'dc')).toBe(false);
				});
			});
		},
		code: function findPermutation(str, pattern) {
			return false;
		},
		solution: function findPermutation(str, pattern) {
			return false;
		}
	});
	jsaw.problem({
		name: 'String Anagrams (hard)',
		statement: "Given a string and pattern, find all anagrams of the pattern in the given string. Anagram is actually a Permutation of a string. For example, 'abc' has the following six anagrams: 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'. Write a function to return a list of starting indices of the anagrams of the pattern in the given string.",
		examples: "Input: str = 'ppqq', pattern = 'pq'; Output: [1, 2]; Explanation: The two anagrams of the pattern in the given string are 'pq' and 'qp'.",
		test: function (findStringAnagrams) {
			describe(this.name, function () {
				it("Input: str = 'ppqq', pattern = 'pq'; Output: [1, 2].", function () {
					expect(findStringAnagrams('ppqq', 'pq')).toEqual([1, 2]);
				});
				it("Input: str = 'abbcabc', pattern = 'abc'; Output: [2, 3, 4].", function () {
					expect(findStringAnagrams('abbcabc', 'abc')).toEqual([2, 3, 4]);
				});
			});
		},
		code: function findStringAnagrams(str, pattern) {
			return [];
		},
		solution: function findStringAnagrams(str, pattern) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Smallest Window containing Substring (hard)',
		statement: "Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.",
		examples: "Input: str = 'aabdec', pattern = 'abc'; Output: 'abdec'; Explanation: The smallest substring having all characters of the pattern is 'abdec'.",
		test: function (findSubstring) {
			describe(this.name, function () {
				it("Input: str = 'aabdec', pattern = 'abc'; Output: 'abdec'.", function () {
					expect(findSubstring('aabdec', 'abc')).toEqual('abdec');
				});
				it("Input: str = 'adcad', pattern = 'abc'; Output: ''.", function () {
					expect(findSubstring('adcad', 'abc')).toEqual('');
				});
				it("Input: str = 'abdabca', pattern = 'abc'; Output: 'abc'.", function () {
					expect(findSubstring('abdabca', 'abc')).toEqual('abc');
				});
			});
		},
		code: function findSubstring(str, pattern) {
			return '';
		},
		solution: function findSubstring(str, pattern) {
			return '';
		}
	});
	jsaw.problem({
		name: 'Words Concatenation (hard)',
		statement: "Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.",
		examples: "Input: str = 'catfoxcat', words = ['cat', 'fox']; Output: [0, 3]; Explanation: The two substring containing both the words are 'catfox' & 'foxcat'.",
		test: function (findWordConcatenation) {
			describe(this.name, function () {
				it("Input: str = 'catfoxcat', words = ['cat', 'fox']; Output: [0, 3].", function () {
					expect(findWordConcatenation('catfoxcat', ['cat', 'fox'])).toEqual([0, 3]);
				});
				it("Input: str = 'catcatfoxfox', words = ['cat', 'fox']; Output: [3].", function () {
					expect(findWordConcatenation('catcatfoxfox', ['cat', 'fox'])).toEqual([3]);
				});
			});
		},
		code: function findWordConcatenation(str, pattern) {
			return [];
		},
		solution: function findWordConcatenation(str, pattern) {
			return [];
		}
	});
	//Tow Pointers
	jsaw.problem({
		name: 'Pair with Target Sum (easy)',
		statement: "Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.",
		examples: "Input: target = 6, numbers = [1, 2, 3, 4, 6]; Output: [1, 3]; Explanation: The numbers at index 1 and 3 add up to6: 2+4=6.",
		test: function (pairWithTargetSum) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: target = 6, numbers = [1, 2, 3, 4, 6]; Output: [1, 3].", function () {
					expect(pairWithTargetSum(6, [1, 2, 3, 4, 6])).toEqual([1, 3]);
				});
				it("Input: target = 11, numbers = [1, 2, 3, 4, 6]; Output: [].", function () {
					expect(pairWithTargetSum(11, [1, 2, 3, 4, 6])).toEqual([]);
				});
			});
		},
		code: function pairWithTargetSum(target, numbers) {
			return [];
		},
		solution: function pairWithTargetSum(target, numbers) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Remove Duplicates (easy)',
		statement: "Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.",
		examples: "Input: numbers = [2, 3, 3, 3, 6, 9, 9]; Output: 4; Explanation: The first four element after removing the duplicates will be [2, 3, 6, 9].",
		test: function (removeDuplicate) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [2, 3, 3, 3, 6, 9, 9]; Output: 4.", function () {
					expect(removeDuplicate([2, 3, 3, 3, 6, 9, 9])).toEqual(4);
				});
			});
		},
		code: function removeDuplicate(numbers) {
			return 0;
		},
		solution: function removeDuplicate(numbers) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Squaring a Sorted Array (easy)',
		statement: "Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.",
		examples: "Input: numbers = [-2, -1, 0, 2, 3]; Output: [0, 1, 4, 4, 9];",
		test: function (makeSquares) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [-2, -1, 0, 2, 3]; Output: [0, 1, 4, 4, 9];", function () {
					expect(makeSquares([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9]);
				});
				it("Input: numbers = [-3, -1, 0, 1, 2]; Output: [0, 1, 1, 4, 9];", function () {
					expect(makeSquares([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9]);
				});
			});
		},
		code: function makeSquares(numbers) {
			return [];
		},
		solution: function makeSquares(numbers) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Triplet Sum to Zero (medium)',
		statement: "Given an array of unsorted numbers, find all unique triplets in it that add up to zero.",
		examples: "Input: numbers = [-3, 0, 1, 2, -1, 1, -2]; Output:  [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]];",
		test: function (searchTriplets) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: numbers = [-3, 0, 1, 2, -1, 1, -2]; Output:  [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]].", function () {
					expect(searchTriplets([-3, 0, 1, 2, -1, 1, -2])).toEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
				});
			});
		},
		code: function searchTriplets(numbers) {
			return [];
		},
		solution: function searchTriplets(numbers) {
			const result = [];
			numbers.sort((a, b) => a - b);
			for (let i = 0, l = numbers.length; i < l && numbers[i] < 0; i++) {
				if (i === 0 || numbers[i] !== numbers[i - 1]) {
					pairWithTargetSum(-numbers[i], numbers, i, result);
				}
			}

			function pairWithTargetSum(target, numbers, currentIndex, result) {
				let e = numbers.length - 1;
				let s = currentIndex + 1;
				let sum = 0;
				while (e > s) {
					sum = numbers[s] + numbers[e];
					if (sum > target) {
						e -= 1;
					} else if (sum < target) {
						s += 1;
					} else {
						result.push([numbers[currentIndex], numbers[s], numbers[e]]);
						do {
							s += 1;
						} while (numbers[s] === numbers[s - 1]);
						do {
							e -= 1;
						} while (numbers[e] === numbers[e + 1]);
					}
				}
			}
			return result;
		}
	});
	jsaw.problem({
		name: 'Triplet Sum Close to Target (medium)',
		statement: "Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there is more than one such triplet, return the sum fo the triplet with the smallest sum.",
		examples: "Input: target = 2, numbers = [-2, 0, 1, 2]; Output: 1; Explanation: The triplet [-2, 1, 2] has the closest sum to the target.",
		test: function (tripletSumCloseToTarget) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: target = 2, numbers = [-2, 0, 1, 2]; Output: 1.", function () {
					expect(tripletSumCloseToTarget(2, [-2, 0, 1, 2])).toEqual(1);
				});
				it("Input: target = 100, numbers = [1, 0, 1, 1]; Output: 3.", function () {
					expect(tripletSumCloseToTarget(100, [1, 0, 1, 1])).toEqual(3);
				});
				it("Input: target = 1, numbers = [-3, -1, 1, 2]; Output: 0.", function () {
					expect(tripletSumCloseToTarget(100, [1, 0, 1, 1])).toEqual(0);
				});
			});
		},
		code: function tripletSumCloseToTarget(target, numbers) {
			return 0;
		},
		solution: function tripletSumCloseToTarget(target, numbers) {
			return 0;
		}
	});
	//Merge Intervals
	jsaw.problem({
		name: 'Merge Intervals (medium)',
		statement: "Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.",
		examples: "Input: intervals =  [[1, 4], [2, 5], [7, 9]]; Output: [[1, 5], [7, 9]]; Explanation: Since the first two intervals [1, 4] and [2, 5] overlap, we merged them into on [1, 5].",
		test: function (merge) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: intervals = [[1, 4], [2, 5], [7, 9]]; Output: [[1, 5], [7, 9]].", function () {
					expect(merge([[1, 4], [2, 5], [7, 9]])).toEqual([[1, 5], [7, 9]]);
				});
				it("Input: intervals = [[1, 4], [2, 6], [3, 5]]; Output: [[1, 6]].", function () {
					expect(merge([[1, 4], [2, 6], [3, 5]])).toEqual([[1, 6]]);
				});
			});
		},
		code: function merge(intervals) {
			return [];
		},
		solution: function merge(intervals) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Inset Interval (medium)',
		statement: "Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.",
		examples: "Input: [[1, 3], [5, 7], [8, 12]], newInterval = [4, 10]; Output: [[1, 3], [4, 12]]; Explanation: After insertion, since [4, 10] overlaps with [5, 7] & [8, 12], we merged them into [4, 12].",
		test: function (insert) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: [[1, 3], [5, 7], [8, 12]], newInterval = [4, 10]; Output: [[1, 3], [4, 12]].", function () {
					expect(insert([[1, 3], [5, 7], [8, 12]], [4, 10])).toEqual([[1, 3], [4, 12]]);
				});
				it("Input: [[1, 3], [5, 7], [8, 12]], newInterval = [4, 6]; Output: [[1, 3], [4, 7], [8, 12]].", function () {
					expect(insert([[1, 3], [5, 7], [8, 12]], [4, 6])).toEqual([[1, 3], [4, 7], [8, 12]]);
				});
				it("Input: [[2, 3], [5, 7]], newInterval = [1, 4]; Output: [[1, 4], [5, 7]].", function () {
					expect(insert([[2, 3], [5, 7]], [1, 4])).toEqual([[1, 4], [5, 7]]);
				});
			});
		},
		code: function insert(intervals, newInterval) {
			return [];
		},
		solution: function insert(intervals, newInterval) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Intervals Intersection (medium)',
		statement: "Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.",
		examples: "Input: intervals1 = [[1, 3], [5, 6], [7, 9]], intervals2 = [[2, 3], [5, 7]]; Output: [[2, 3], [5, 6], [7, 7]]; Explanation: The output list contains the common intervals between the two lists.",
		test: function (merge) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: intervals1 = [[1, 3], [5, 6], [7, 9]], intervals2 = [[2, 3], [5, 7]]; Output: [[2, 3], [5, 6], [7, 7]].", function () {
					expect(merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])).toEqual([[2, 3], [5, 6], [7, 7]]);
				});
				it("Input: intervals1 = [[1, 3], [5, 7], [9, 12]], intervals2 = [[5, 10]]; Output: [[5, 7], [9, 10]].", function () {
					expect(merge([[1, 3], [5, 7], [9, 12]], [[5, 10]])).toEqual([[5, 7], [9, 10]]);
				});
			});
		},
		code: function merge(intervals1, intervals2) {
			return [];
		},
		solution: function merge(intervals1, intervals2) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Conflicting Appointments (medium)',
		statement: "Given an array of intervals representing 'N' appointments, find out if a person can attend all the appointments.",
		examples: "Input: appointments = [[1, 4], [2, 5], [7, 9]]; Output: false; Explanation: Since [1, 4] and [2, 5] overlap, a person cannot attend both of these appointments.",
		test: function (canAttendAllAppointments) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("Input: appointments = [[1, 4], [2, 5], [7, 9]]; Output: false.", function () {
					expect(canAttendAllAppointments([[1, 4], [2, 5], [7, 9]])).toEqual(false);
				});
				it("Input: appointments = [[6, 7], [2, 4], [8, 12]]; Output: true.", function () {
					expect(canAttendAllAppointments([[6, 7], [2, 4], [8, 12]])).toEqual(true);
				});
				it("Input: appointments = [[4, 5], [2, 3], [3, 6]]; Output: false.", function () {
					expect(canAttendAllAppointments([[4, 5], [2, 3], [3, 6]])).toEqual(false);
				});
			});
		},
		code: function canAttendAllAppointments(appointments) {
			return false;
		},
		solution: function canAttendAllAppointments(appointments) {
			return false;
		}
	});
	//Breadth First Search
	jsaw.problem({
		name: 'Binary Tree Level Order Traversal (easy)',
		statement: "Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.",
		examples: "Input: <img src = 'https://he-s3.s3.amazonaws.com/media/uploads/fdec3c2.jpg'>; Output: [[0], [1, 2, 3], [4, 5, 6, 7]]",
		test: function (bfsTraverse) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new Node(1);
					root.left = new Node(2);
					root.right = new Node(3);
					root.left.left = new Node(4);
					root.left.right = new Node(5);
					root.right.left = new Node(6);
					root.right.right = new Node(7);
					expect(bfsTraverse(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
				});
			});
		},
		code: function bfsTraverse(rootNode) {
			/**
			 *	function Node(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function bfsTraverse(rootNode) {
			const result = [];
			if (!rootNode) {
				return result;
			}
			const queue = [rootNode];
			while (queue.length > 0) {
				let levelSize = queue.length;
				const currentLevel = [];
				for (let i = 0; i < levelSize; i++) {
					let currentNode = queue.shift();
					currentLevel.push(currentNode.value);
					if (currentNode.left) {
						queue.push(currentNode.left);
					}
					if (currentNode.right) {
						queue.push(currentNode.right);
					}
				}
				result.push(currentLevel);
			}
			return result;
		}
	});
	jsaw.problem({
		name: 'Reverse Level Order Traversal (easy)',
		statement: "Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate subarrays.",
		examples: "Input: <img src = 'https://he-s3.s3.amazonaws.com/media/uploads/fdec3c2.jpg'>; Output: [[4, 5, 6, 7], [1, 2, 3], [0]]",
		test: function (bfsTraverse) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new Node(1);
					root.left = new Node(2);
					root.right = new Node(3);
					root.left.left = new Node(4);
					root.left.right = new Node(5);
					root.right.left = new Node(6);
					root.right.right = new Node(7);
					expect(bfsTraverse(root)).toEqual([[4, 5, 6, 7], [2, 3], [1]]);
				});
			});
		},
		code: function bfsTraverse(rootNode) {
			/**
			 *	function Node(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function bfsTraverse(rootNode) {
			const result = [];
			if (!rootNode) {
				return result;
			}
			const queue = [rootNode];
			while (queue.length > 0) {
				let levelSize = queue.length;
				const currentLevel = [];
				for (let i = 0; i < levelSize; i++) {
					let currentNode = queue.shift();
					currentLevel.push(currentNode.value);
					if (currentNode.left) {
						queue.push(currentNode.left);
					}
					if (currentNode.right) {
						queue.push(currentNode.right);
					}
				}
				result.unshift(currentLevel);
			}
			return result;
		}
	});
	jsaw.problem({
		name: 'Zigzag Traversal (medium)',
		statement: "Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level, and keep alternating in the same manner for the following levels.",
		examples: "Input: <img src = 'https://he-s3.s3.amazonaws.com/media/uploads/fdec3c2.jpg'>; Output: [[0], [3, 2, 1], [4, 5, 6, 7]]",
		test: function (bfsTraverse) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new Node(1);
					root.left = new Node(2);
					root.right = new Node(3);
					root.left.left = new Node(4);
					root.left.right = new Node(5);
					root.right.left = new Node(6);
					root.right.right = new Node(7);
					expect(bfsTraverse(root)).toEqual([[1], [3, 2], [4, 5, 6, 7]]);
				});
			});
		},
		code: function bfsTraverse(rootNode) {
			/**
			 *	function Node(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function bfsTraverse(rootNode) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Level Averages in a Binary Tree (easy)',
		statement: "Given a binary tree, populate an array to represent the averages of all of its levels.",
		examples: "Input: <img src = 'https://he-s3.s3.amazonaws.com/media/uploads/fdec3c2.jpg'>; Output: [0, 2, 5.5]",
		test: function (findLevelAverages) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new Node(1);
					root.left = new Node(2);
					root.right = new Node(3);
					root.left.left = new Node(4);
					root.left.right = new Node(5);
					root.right.left = new Node(6);
					root.right.right = new Node(7);
					expect(findLevelAverages(root)).toEqual([1, 2.5, 5.5]);
				});
			});
		},
		code: function findLevelAverages(rootNode) {
			/**
			 *	function Node(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return [];
		},
		solution: function findLevelAverages(rootNode) {
			return [];
		}
	});
	jsaw.problem({
		name: 'Minimum Depth of a Binary Tree (easy)',
		statement: "Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the sortest path from the root node to the nearest leaf node.",
		examples: "Input: <img src = 'https://www.ideserve.co.in/learn/img/MinimumDepthOfBinaryTree.gif'>; Output: 3.",
		test: function (findMinimumDepth) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("test", function () {
					let root = new Node(1);
					root.left = new Node(2);
					root.right = new Node(3);
					root.left.left = new Node(4);
					root.left.right = new Node(5);
					expect(findMinimumDepth(root)).toEqual(2);
				});
			});
		},
		code: function findMinimumDepth(rootNode) {
			/**
			 *	function Node(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return 0;
		},
		solution: function findMinimumDepth(rootNode) {
			return 0;
		}
	});
	//Depth First Search (DFS)
	jsaw.problem({
		name: 'Binary Tree Path Sum (easy)',
		statement: "Given a binary tree and a number 'S', find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals 'S'.",
		examples: "Input: tree = <img src = 'https://media.geeksforgeeks.org/wp-content/uploads/BST_sum.png'>, s = 164; Output: true.",
		test: function (findPath) {
			//jasmine style test cases.
			describe(this.name, function () {
				it("1 + 2 + 5 = 8.", function () {
					let root = new Node(1);
					root.left = new Node(2);
					root.right = new Node(3);
					root.left.left = new Node(4);
					root.left.right = new Node(5);
					expect(findPath(root, 8)).toEqual(true);
				});
			});
		},
		code: function findPath(rootNode, s) {
			/**
			 *	function Node(value) {
			 *		this.value = value;
			 *		this.left = null;
			 *		this.right = null;
			 *	}
			 */
			return 0;
		},
		solution: function findPath(rootNode, s) {
			return 0;
		}
	});
	//Dynamic Programming
	jsaw.problem({
		name: '0/1 Knapsack',
		statement: "Given two integer arrays to represent weights and profits of 'N' items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number 'C'. Each item can only be selected once, which means either we put an item in the knapsack or we skip it.",
		examples: "Input: profits = [4, 5, 3, 7], weights =  [2, 3, 1, 4], capacity = 5; Output: 10; Explanation: profits[2] + profits[3] = 10, weights[2] + weights[3] = 5.",
		test: function (solveKnapsack) {
			describe(this.name, function () {
				it("Input: profits = [4, 5, 3, 7], weights = [2, 3, 1, 4]; Output: 10. ", function () {
					expect(solveKnapsack([4, 5, 3, 7], [2, 3, 1, 4], 5)).toEqual(10);
				});
			});
		},
		code: function solveKnapsack(profits, weights, capacity) {
			return 0;
		},
		solution: function solveKnapsack(profits, weights, capacity) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Equal Subset Sum Partition',
		statement: 'Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.',
		examples: 'Input: [1, 1, 3, 4, 7], Output: true, Explanation: The given set can be partitioned into two subsets with equal sum: [1, 3, 4] & [1, 7]; Input: [2, 3, 4, 6], Output: false, Explanation: The given set cannot be partitioned into two subsets with equal sum.',
		test: function (canPartition) {
			describe(this.name, function () {
				it("Input: [1, 1, 3, 4, 7], Output: true.", function () {
					let result = canPartition([1, 1, 3, 4, 7]);
					expect(result).toEqual(true);
				});
				it("Input: [1, 2, 3, 4], Output: true.", function () {
					let result = canPartition([1, 2, 3, 4]);
					expect(result).toEqual(true);
				});
				it("Input: [2, 3, 4, 6], Output: false.", function () {
					let result = canPartition([2, 3, 4, 6]);
					expect(result).toEqual(false);
				});
			});
		},
		code: function canPartition() {
			return false;
		},
		solution: function canPartition() {}
	});
	jsaw.problem({
		name: 'Minimum Subset Sum Difference',
		statement: "Given a set of positive numbers, partition the set into two subsets with a minimum difference between their subset sums.",
		examples: "Input: numbers = [1, 2, 3, 9], Output: 3, Explanation: We can partition the given set into two subsets where minimum absolute difference between the sum of numbers is '3'. Following are the two subsets: [1, 2, 3] & [9].",
		test: function (canPartition) {
			describe(this.name, function () {
				it("Input: numbers = [1, 2, 3, 9], Output: 3.", function () {
					let result = canPartition([1, 2, 3, 9]);
					expect(result).toEqual(3);
				});
				it("Input: [1, 2, 7, 1, 5], Output: 0.", function () {
					let result = canPartition([1, 2, 7, 1, 5]);
					expect(result).toEqual(0);
				});
				it("Input: [1, 3, 100, 4], Output: 92.", function () {
					let result = canPartition([1, 3, 100, 4]);
					expect(result).toEqual(92);
				});
			});
		},
		code: function canPartition(numbers) {
			return 0;
		},
		solution: function canPartition(numbers) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Count of Subset Sum',
		statement: "Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number 's'.",
		examples: "Input: numbers = [1, 1, 2, 3], s = 4; Output: 3, Explanation: The given set has '3' subsets whose sum is '4': [1, 1, 2], [1, 3], and [1, 3].",
		test: function (countSubsets) {
			describe(this.name, function () {
				it("Input: numbers = [1, 1, 2, 3], s = 4; Output: 3.", function () {
					let result = countSubsets([1, 1, 2, 3], 4);
					expect(result).toEqual(3);
				});
				it("Input: numbers = [1, 2, 7, 1, 5], s = 9; Output: 3.", function () {
					let result = countSubsets([1, 2, 7, 1, 5], 9);
					expect(result).toEqual(3);
				});
			});
		},
		code: function countSubsets(numbers, s) {
			return 0;
		},
		solution: function countSubsets(numbers, s) {
			return 0;
		}
	});
	jsaw.problem({
		name: 'Target Sum',
		statement: "Given a set of positive numbers (non zero) and a target sum 's'. Each number should be assigned either a '+' or '-' sign. We need to find out total ways to assign symbols to make the sum of numbers equal to target 's'.",
		examples: "Input: numbers = [1, 1, 2, 3], s = 1; Output: 3, Explanation: The given set has '3' ways to make a sum of '1': +1-1-2+3 = 1, -1+1-2+3 = 1, +1+1+2-3 = 1.",
		test: function (findTargetSubsets) {
			describe(this.name, function () {
				it("Input: numbers = [1, 1, 2, 3], s = 1; Output: 3.", function () {
					let result = findTargetSubsets([1, 1, 2, 3], 1);
					expect(result).toEqual(3);
				});
				it("Input: numbers = [1, 2, 7, 1], s = 9; Output: 2.", function () {
					let result = findTargetSubsets([1, 2, 7, 1], 9);
					expect(result).toEqual(2);
				});
			});
		},
		code: function findTargetSubsets(numbers, s) {
			return 0;
		},
		solution: function findTargetSubsets(numbers, s) {
			return 0;
		}
	});
})(jsaw);
