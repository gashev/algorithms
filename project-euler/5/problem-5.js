function isSmallestMultiple(num, max) {
    for (var i = 2; i <= max; i++) {
        if (num % i > 0) {
            return false;
        }
    }

    return true;
}

var num = 21;
while (!isSmallestMultiple(num, 20)) {
    num++;
}

console.log(num);
