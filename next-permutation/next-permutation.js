var nextPermutation = function(nums) {
    var size = nums.length;

    var i;
    var j;
    var tmp = size - 1;

    while ((tmp > 0) && (nums[tmp - 1] > nums[tmp]))  {
        tmp--;
    }
    if (tmp == 0)
        return false;

    i = tmp - 1;
    tmp = size - 1;
    while ((tmp > i) && (nums[tmp] < nums[i])) {
        tmp--;
    }
    j = tmp;

    tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  
    i = i + 1;
    j = size - 1;
    while (i < j) {
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j--;
    } 
    return true;
};


var a = [1, 2, 3, 4, 5, 6];
console.log(a);

while (nextPermutation(a)) {
    console.log(a);
}
