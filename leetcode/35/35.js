/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let current = -1;

    if (max === -1) {
        return 0;
    }

    while(min !== max - 1) {
        current = min + Math.floor((max - min) / 2);
        if (current === min) {
            break;
        }
        if (nums[current] < target) {
            min = current;
        } else {    
            max = current;
        }
    }

    if (nums[min] > target) {
        return min;
    }
    if (nums[max] < target) {
        return max + 1;
    }

    if (nums[min] === target) {
        return min;
    }

    if (nums[max] === target) {
        return max;
    }

    return min + 1;
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([1], 1));
console.log(searchInsert([1], 2));
console.log(searchInsert([1,3,6,9], 9));
console.log(searchInsert([2,3,6,9], 7));