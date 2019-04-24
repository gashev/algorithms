/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    var result = [];
    var num = 0;

    for (let i = 0; i < A.length; i++) {
        num = (num * 2 + A[i]) % 10;
        result.push(num % 5 == 0);
    }   

    return result; 
};


console.log(prefixesDivBy5([0,1,1]));
