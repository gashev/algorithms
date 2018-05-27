/**
 * @param {number[]} nums
 * @param {number} sum
 * @return {number[][]}
 */
var twoSum = function(nums, sum) {
    var items = [];
    var start;
    var end;
    var curr_sum;
    var item;
    
    nums = nums.sort(function(a, b) { return a - b; });
    
    for (var i = 0; (i < nums.length - 1) && (nums[i] + nums[i + 1] <= sum); i++) {
        if (nums[i] == nums[i - 1]) {
            continue;
        }
        start = i;
        end = nums.length - 1;
        while (start < end) {
            item = Math.trunc((start + end) / 2) + 1;
            curr_sum = nums[i] + nums[item];
            if (curr_sum == sum) {  
                items.push([nums[i], nums[item]]);
                break;
            } else if (curr_sum < sum) {  
                if (start == item) 
                    break;
                start = item;
            } else {
                if (end == item) 
                    break;
                end = item;
            }
        } 
    }

    return items;
}

var nums = [-1,-2,-3,4,1,3,0,3,-2,1,9,-2,2,-1,1,-5,4,-3];
console.log(twoSum(nums, -2));
