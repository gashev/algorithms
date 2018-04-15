'use strict';

function isPrime(num) {
    var i =0;
    while ((i < primes.length) && (i <= Math.sqrt(num))) {
        if (num % primes[i] == 0) {
            return false;
        }
        i++;
    } 

    return true;
}

var primes = [2];
var sum = 2;
for (var i = 3; i < 2000000; i += 2) {
    if (isPrime(i)) {
        primes.push(i); 
        sum += i;
    }
}

console.log(sum);
