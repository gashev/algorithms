'use strict';

function getPythagoreanTripletProduct(sum) {
    for (var a = 1; a < sum - 1; a++) 
        for (var b = 1; b < sum - 1; b++) {
            var c = sum - a - b;
            if (a * a + b * b == c * c)
                return (a * b * c);
        }
}

console.log(getPythagoreanTripletProduct(1000));
