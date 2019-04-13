var paths = function(root) {
    if (root == null) {
        return [];
    };

    const val = root.val.toString();
    if ((root.left == null ) && (root.right == null)) {
        return [val];
    }
    const arr = paths(root.left).concat(paths(root.right));
    return arr.map(x => val + x);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue, 2);
    return paths(root).reduce(reducer, 0);  
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 
var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);

console.log(sumRootToLeaf(root));
