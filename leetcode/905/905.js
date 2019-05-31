/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    A.sort(function(a, b){return (a % 2) - (b % 2)});
    return A;
};

var a = [4016,2240,402,1600,2540,4665,545,2756,3533,2737,4073,2701,4820,3016,2938,2225,2982,1924,2878,1451];
console.log(sortArrayByParity(a));