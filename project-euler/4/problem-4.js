function isPalindrome(n) {
    var palindrome = 0;
    var tmp = n;
    var digit = 0;
    while (tmp > 0) {
        digit = tmp % 10;
        tmp = (tmp - digit)/10;
        palindrome = palindrome * 10 + digit;
    }

    return palindrome == n;
}

var max = 0;
var number1 = 0;
var number2 = 0;
var currentNumber = 0;
for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        currentNumber = i * j;
        if ((currentNumber >= max) && isPalindrome(currentNumber)) {
            max = currentNumber;
            number1 = i;
            number2 = j;
        } 
    }
}

console.log( number1 + " * " + number2 + " = " + max);
