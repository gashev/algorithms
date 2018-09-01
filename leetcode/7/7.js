/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var tmp = x;
    var sign = 1;

    if (tmp < 0) {
        sign = -1;
        tmp = -tmp;
    }

    var result = 0;
    var digit;

    while (tmp > 0) {
        digit = tmp % 10;
        result = result * 10 + digit;
        tmp = (tmp - digit) / 10;
    }

    result = sign * result;
    if ((result > Math.pow(2, 31) - 1) || (result < -Math.pow(2, 31))) {
        return 0;
    }

    return result;
};

console.log(reverse(123));
