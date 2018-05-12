'use strict';

function getGlobalMaxiumOnColumn(nums, j) {
    var i = 0;
    var max = nums[i][j];

    for (var c = 1; c < nums.length; c++) {
        if (max < nums[c][j]) {
            i = c;
            max = nums[i][j];
        }
    }
    
    return i;
} 

function findPeak(nums) {
    var min_index = 0;
    var max_index = nums.length - 1;
    var index;
    var prev;
    var next;
    var i;

    while (min_index < max_index) {
        index = Math.round((min_index + max_index) / 2);
        i = getGlobalMaxiumOnColumn(nums, index);
        if (index < 1) {
            prev = Number.MIN_SAFE_INTEGER;
        } else {
            prev = nums[i][index - 1];
        }
        if (prev > nums[i][index]) {
            max_index = index - 1;
            continue;
        }
        
        if (index + 1 == nums.length) {
            next = Number.MIN_SAFE_INTEGER;
        } else {
            next = nums[i][index + 1];
        }
        
        if (next > nums[i][index]) {
            min_index = index + 1;
            continue;
        } else {
            console.log(nums[i][index]);
            return [i, index];
        }
    }
    console.log(nums[i][min_index]);
    return [i, min_index];

}

var data = [
    [1, 3, 5, 16, 4],
    [4, 5, 3, 6, 9],
    [8, 10, 5, 3, 9],
    [6, 4, 23, 34, 5],
    [1, 4, 8, 2, 9]
];

console.log(findPeak(data));
