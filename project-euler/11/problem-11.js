var fs = require('fs');

function readGridData() {
    return new Promise(function(resolve, reject) {
        try {
            fs.readFile('./grid', 'utf8', function (err,data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        } catch (err) {
            reject(err);
        }
    });
}

function createGrid(data) {
    var grid = [];
    data.split("\n").forEach(function(str) {
        var arr = [];
        if (str.length == 0) {
            return;
        }
        str.split(" ").forEach(function(numStr) {
            var num;
            if (numStr[0] == '0') {
                num = numStr[1] - '0';
            } else {
                num = parseInt(numStr);
            }
            arr.push(num);
        });
        grid.push(arr);
    });

    return grid;
}

function calculateMax(grid, count) {
    var max = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            var tmp = 1;
            for (var k = 0; k < count; k++) {
                if ((j + k) >= grid[i].length) {
                    tmp = 0;
                    break;
                } else {
                    tmp *= grid[i][j + k];
                }
            }
            if (tmp > max) {
                max = tmp;
            }

            tmp = 1;
            for (var k = 0; k < count; k++) {
                if ((i + k) >= grid.length) {
                    tmp = 0;
                    break;
                } else {
                    tmp *= grid[i + k][j];
                }
            }
            if (tmp > max) {
                max = tmp;
            }

            tmp = 1;
            for (var k = 0; k < count; k++) {
                if (((i + k) >= grid.length) || ((j + k) >= grid[i].length)) {
                    tmp = 0;
                    break;
                } else {
                    tmp *= grid[i + k][j + k];
                }
            }
            if (tmp > max) {
                max = tmp;
            }

            tmp = 1;
            for (var k = 0; k < count; k++) {
                if (((i +- k) < 0) || ((j + k) >= grid[i].length)) {
                    tmp = 0;
                    break;
                } else {
                    tmp *= grid[i - k][j + k];
                }
            }
            if (tmp > max) {
                max = tmp;
            }
        }
    }
    
    return max;
}

readGridData()
.then(function(data) {
    var grid = createGrid(data);
    var max = calculateMax(grid, 4);
    console.log(max);
});
