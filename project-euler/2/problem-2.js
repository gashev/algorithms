var sum = 0;

var prev = 1;
var current = 1;

while (current <= 4000000) {
    current = [current + prev, prev = current][0];
    if (current % 2 == 0) {
        sum += current;
    }
} 

console.log(sum);
