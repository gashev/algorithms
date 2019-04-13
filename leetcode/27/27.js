/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var loopIndex = -1;
    var removeCount = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            loopIndex++;
            nums[loopIndex] = nums[i];
        } else {
            removeCount++;
        }
    }
    nums.splice(nums.length - removeCount);
    return nums.length;
};

var arr = [ 0, 1, 3, 3, 4, 5, 3, 7];

console.log(removeElement(arr, 3));
console.log(arr);
