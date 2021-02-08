(function (Object) {
    Object.getValueOf = function (value) {
        if (value && typeof value.valueOf === 'function') {
            return value.valueOf();
        }
        return value;
    }

    Object.compare = function (a, b) {
        a = Object.getValueOf(a);
        b = Object.getValueOf(b);

        if (a === b) {
            return 0;
        }

        var aType = typeof a;
        var bType = typeof b;

        if (aType === 'number' && bType === 'number') {
            return a - b;
        }

        if (aType === 'string' && bType === 'string') {
            return a < b ? -Infinity : Infinity;
        }

        if (a && typeof a.compare === 'function') {
            return a.compare(b);
        }
        if (b && typeof b.compare === 'function') {
            return -b.compare(a);
        }

        return 0;
    }

})(Object);
