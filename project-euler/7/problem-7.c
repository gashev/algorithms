#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int isPrime(const unsigned int, const unsigned int*, const unsigned int);

int main(void) {
    const num = 10001;

    unsigned int *primes;
    primes = (unsigned int *) malloc(num * sizeof(unsigned int));

    primes[0] = 2;
    unsigned int primesCount = 1;

    if (primes == NULL) {
        puts("Can't allocate memory.");
        return 1;
    }

    unsigned int tmp = 3;
    while (primesCount < num) {
        if (isPrime(tmp, primes, primesCount) == 1) {
            primes[primesCount] = tmp;
            primesCount++;
        }
        tmp += 2;
    }
    printf("%d\n", primes[primesCount - 1]);
    free(primes);

    return 0;
}


int isPrime(
    const unsigned int num,
    const unsigned int* primes,
    const unsigned int count
) {
    unsigned int i = 0;
    
    while ((i < count) && (primes[i] <= sqrt(num))) {
        if (num % primes[i] == 0) {
            return 0;
        }
        i++;
    }
    
    return 1;
}
