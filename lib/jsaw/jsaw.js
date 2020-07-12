(function (window) {
    var defaultFunction = function () {};

    function Problem(arg) {
        this.name = arg.name || '';
        this.statement = arg.statement || '';
        this.examples = arg.examples || [];
        this.test = arg.test || defaultFunction;
        this.solution = arg.solution || defaultFunction;
        this.code = arg.code || defaultFunction;
    }

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
            return new Function('return ' + expression + ';')();
        } catch (e) {
            throw e;
        }
    }
    window.jsaw = {
        problem: function (problemObj) {
            problems.push(problemObj);
        },
        getProblem: function (index) {
            return problems[index];
        },
        renderProblems: function () {
            let optionTags = '';
            for (let i = 0, l = problems.length; i < l; i++) {
                let problem = problems[i];
                optionTags += `<option value="${i}">${problem.name}</option>`
            }
            return optionTags;
        },
        test: function (expression, problem) {
            let userFn = parse(expression);
            problem.test(userFn);
        }
    };

})(window);
