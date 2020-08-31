(function (window) {
    function Heap(values, compare) {
        values = values || [];
        this._compare = compare || Object.compare;
        this._nodes = [];
        for (var i = 0, l = values.length; i < l; i++) {
            this.push(values[i]);
        }
        Object.defineProperty(this, 'length', {
            get: function () {
                return this._nodes.length;
            }
        });
    }
    Heap.prototype = Object.create(Object.prototype);
    Heap.prototype.constructor = Heap;
    Heap.prototype.peek = function () {
        return this._nodes[0];
    };
    Heap.prototype.push = function (value) {
        var length = this._nodes.push(value);
        this._float(length - 1);
        return this;
    };
    Heap.prototype.pop = function () {
        var result = this._nodes[0];
        var top = this._nodes.pop();
        if (this._nodes.length > 0) {
            this._nodes[0] = top;
            this._sink(0);
        }
        return result;
    };
    Heap.prototype._float = function (index) {
        var value = this._nodes[index];

        while (index > 0) {
            var parentIndex = Math.floor((index + 1) / 2) - 1;
            var parentValue = this._nodes[parentIndex];

            if (this._compare(parentValue, value) < 0) {
                this._nodes[parentIndex] = value;
                this._nodes[index] = parentValue;
            } else {
                break;
            }
            index = parentIndex;
        }
    };
    Heap.prototype._sink = function (index) {
        var length = this._nodes.length;
        var value = this._nodes[index];
        var leftIndex, rightIndex, swapIndex, needsSwap;
        while (true) {
            rightIndex = (index + 1) * 2;
            leftIndex = rightIndex - 1;

            needsSwap = false;
            if (leftIndex < length) {
                var left = this._nodes[leftIndex];
                if (this._compare(left, value) > 0) {
                    swapIndex = leftIndex;
                    needsSwap = true;
                }
            }
            if (rightIndex < length) {
                var right = this._nodes[rightIndex];
                if (this._compare(right, needsSwap ? left : value) > 0) {
                    swapIndex = rightIndex;
                    needsSwap = true;
                }
            }
            if (needsSwap) {
                this._nodes[index] = this._nodes[swapIndex];
                this._nodes[swapIndex] = value;
                index = swapIndex;
            } else {
                break;
            }
        }
    };
    window.Heap = Heap;
})(window);
