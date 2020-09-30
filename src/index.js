exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let newArray = array.sort(function (a, b) {
            return a - b
        })

        return newArray[0];
    }

}

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let newArray = array.sort(function (a, b) {
            return a - b
        })
        return newArray[newArray.length - 1];
    }
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let sum = array.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        let average = sum / array.length;
        return average;
    }
}
