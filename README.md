# jsaw
Javascript Whiteboard

### How to us JSAW?
##### 1. clone this project.
##### 2. add a js file to problem folder
~~~js
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
})(jsaw);
~~~
##### 3. add the js file to the end of index.html
~~~html
  <!-- Problems JS Files Start-->
  <script src="./problems/maxSumSubarrayOfSizek.js"></script>
  <!-- Problems JS Files End-->
~~~
