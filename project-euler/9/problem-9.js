'use strict';

function getPythagoreanTripletProduct(sum) {
    for (var a = 1; a < sum - 1; a++) 
        for (var b = 1; b < sum - 1; b++) 
            for (var c = 1; c < sum - 1; c++)
                if ((a * a + b * b == c * c) && (a + b + c == sum))
                    return (a * b * c);
}

console.log(getPythagoreanTripletProduct(1000));
