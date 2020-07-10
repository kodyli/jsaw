(function (window) {
    var defaultFunction = function () {};
    var jsaw = window.jsaw = {
        parse: function (expression) {
            try {
                return new Function(expression);
            } catch (e) {
                throw e;
            }
        }
    };
})(window);
