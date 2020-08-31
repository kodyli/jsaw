(function (window) {
    window.Queue = function Queue(values) {
        this._values = values || [];
        Object.defineProperty(this, 'length', {
            get: function () {
                return this._values.length;
            }
        });
    }
    Queue.prototype = Object.create(Object.prototype);
    Queue.prototype.constructor = Queue;
    Queue.prototype.push = function (value) {
        this._values.push(value);
        return this;
    };
    Queue.prototype.pop = function () {
        return this._values.shift();
    }

})(window);
