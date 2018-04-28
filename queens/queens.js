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

var checkQueens = function(pos) {
    var positions = [];
    for (var i = 0; i < pos.length; i++) {
        positions.push([i + 1, pos[i]]);
    }

    if (isValidPosition(positions)) {
        positionNumber++;
        console.log('Position: ' + positionNumber);
        printBoard(positions);
    }
};

var printBoard = function(position) {
    var str;

    for (var i = 0; i < count; i++) {
        str = '';
        for (var j = count - 1; j >= 0; j--) {
            if ((position[i][0] == i + 1) && (position[i][1] == j + 1)) {
                str += 'o';
            } else {
                str += '.';
            }
        }
        console.log(str);
    }

    console.log('');
};

var isValidPosition = function(position) {
    var current;
    var i;
    var j;
    var steps = [ [-1, -1], [-1, 1], [1, -1], [1, 1]];
    var step;
    var vert;
    var tmp

    for (var i = 0; i < count; i++) {
        current = position[i];
        for (var k = 0; k < 4; k++) {
            step = steps[k];
            j = 1;
            while (
                (current[0] + step[0] * j > 0) &&
                (current[0] + step[0] * j <= count) &&
                (current[1] + step[1] * j > 0) &&
                (current[1] + step[1] * j <= count)
            ) {
                tmp = [current[0] + step[0] * j, current[1] + step[1] * j];
                for (var z = 0; z < count; z ++) {
                    if (
                        (tmp[0] == position[z][0]) &&
                        (tmp[1] == position[z][1])
                    ) {
                        return false;
                    }
                }
                j++;
            }
        }
    }

    return true;
}

var count = 8;
var positionNumber = 0;
var a = Array.from({length: count}, (v, k) => k + 1);
checkQueens(a);
while (nextPermutation(a)) {
    checkQueens(a);
}
