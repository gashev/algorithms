var fib = [1, 1];

var index = 1;
var sum = 0;

while (fib[index] <= 4000000) {
    index++;
    fib[index] = fib[index - 1] + fib[index - 2];
    if (fib[index] % 2 == 0) {
        sum += fib[index];
    }
} 

console.log(sum);
