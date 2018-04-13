#include <stdio.h>

int sumOfSquares(const int);
int squareOfSum(const int);

int main(void) {
    const int num = 100;
    printf("%d\n", squareOfSum(num) - sumOfSquares(num));

    return 0;
}

int sumOfSquares(const int max) {
    int sum = 0;
    int i;

    for (i = 1; i <= max; i++) {
        sum += i*i;
    }

    return sum;
}

int squareOfSum(const int max) {
    int sum = max * (max + 1) / 2;

    return sum * sum;
}
