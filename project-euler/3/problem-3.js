var primes = [2];

function checkPrime(n) {
    for (var i = 0; i < primes.length; i++) {
        if (primes[i] == n) {
             return true
        }
        if (primes[i] > n) {
            break;
        }

        if (n % primes[i] == 0) {
            return false;
        }
    }

    primes.push(n);
    return true;
}

function getLargestPrimeFactor(n) {
    var max = Math.round(Math.sqrt(n)) + 1;
    for (var i = 3; i < max; i += 2) {
        checkPrime(i);
    }

    for (var i = primes[primes.length -1]; i >= 0; i--) {
        if (n % primes[i] == 0) {
            return primes[i];
        }
    }

    return n;
}

console.log(getLargestPrimeFactor(600851475143));
