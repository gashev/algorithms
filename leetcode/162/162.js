/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var min_index = 0;
    var max_index = nums.length - 1;
    var index;
    var prev;
    var next;

    while (min_index < max_index) {
        index = Math.round((min_index + max_index) / 2);
        
        if (index < 1) {
            prev = Number.MIN_SAFE_INTEGER;
        } else {
            prev = nums[index - 1];
        }
        
        if (prev > nums[index]) {
            max_index = index - 1;
            continue;
        }
        
        if (index + 1 == nums.length) {
            next = Number.MIN_SAFE_INTEGER;
        } else {
            next = nums[index + 1];
        }
        
        if (next > nums[index]) {
            min_index = index + 1;
            continue;
        } else {
            return index;
        }
    }
    return min_index;
};


var nums = [1,2,1,3,5,6,4];
console.log(findPeakElement(nums));
