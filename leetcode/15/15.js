/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var items = [];
    var start;
    var end;

    nums = nums.sort(function(a, b) { return a - b; });
    
    for (var i = 0; (i < nums.length - 2) && (nums[i] <= 0); i++) {
        if (nums[i] == nums[i - 1]) {
            continue;
        }
        start = i + 1;
        end = nums.length - 1;
        while (start < end) {
            while ((start < end) && (nums[i] + nums[start] + nums[end] > 0)) {
                end--;
            }

            while ((start < end) && (nums[i] + nums[start] + nums[end] < 0)) {
                start++;
            }  

            if ((start < end) && (nums[i] + nums[start] + nums[end] == 0)) {
                items.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
                while ((start < end ) && (nums[start] == nums[start - 1])) {
                    start++;
                }
                while ((start < end ) && (nums[end] == nums[end + 1])) {
                    end--;
                }
            } 
        }
    }

    return items;
}

var nums = [-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3];
console.log(threeSum(nums));
