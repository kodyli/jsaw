(function (window) {
    const problems = [{
        name: 'Example',
        statement: 'Sum',
        examples: "Input: 2, 3; Output: 5.",
        test: function (userFn) {
            describe("Two Sum", function () {
                it("2+3=5", function () {
                    expect(userFn(2, 3)).toEqual(5);
                });
                it("2-3=-1", function () {
                    expect(userFn(2, -3)).toEqual(-1);
                });
            });
        },
        code: function example(a, b) {
            return a + b;
        },
        solution: function example(a, b) {
            return a + b;
        }
    }];

    function parse(expression) {
        try {
            let userFn = new Function('return ' + expression + ';')();
            if (typeof userFn !== 'function') {
                throw new TypeError('Expression is not a function.');
            }
            console.clear();
            console.log('Double click the function name to setup breakpoints and debug your code:');
            console.log(userFn);
            return userFn;
        } catch (e) {
            throw e;
        }
    }
    window.jsaw = {
        problem: function (problemObj) {
            if (Array.isArray(problemObj)) {
                Array.prototype.push.apply(problems, problemObj);
            } else {
                problems.push(problemObj);
            }
        },
        getProblem: function (index) {
            return problems[index];
        },
        renderProblems: function () {
            let optionTags = '';
            for (let i = 0, l = problems.length; i < l; i++) {
                let problem = problems[i];
                optionTags += `<option value="${i}">${i+1}. ${problem.name}</option>`
            }
            return optionTags;
        },
        test: function (expression, problem) {
            let userFn = parse(expression);
            problem.test(userFn);
        }
    };
})(window);
