function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (root === null) {
        return 0;
    }

    var sum;
    if ((root.val >= L) && (root.val <= R)) {
        sum = root.val;
    } else {
        sum = 0;
    }

    return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};


var root = new TreeNode();
root.val = 10;

root.left = new TreeNode();
root.left.val = 5;

root.right = new TreeNode();
root.right.val = 15;

root.left.left = new TreeNode();
root.left.left.val = 3;

root.left.right = new TreeNode();
root.left.right.val = 7;

root.right.right = new TreeNode();
root.right.right.val = 18;

console.log(rangeSumBST(root, 7, 15));
