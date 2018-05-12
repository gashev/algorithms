/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var cur1 = l1;
    var cur2 = l2;
    var result = new ListNode(0);
    var cur = result;
    var tmp = 0;

    while ((cur1 != null) || (cur2 != null)) {
        if (cur1 == null) {
            cur1 = new ListNode(0);
        }
        if (cur2 == null) {
            cur2 = new ListNode(0);
        }

        cur.val = tmp + cur1.val + cur2.val;
        if (cur.val > 9) {
            cur.val -= 10;
            tmp = 1;
            cur.next = new ListNode(1)
        } else {
            tmp = 0;
            cur.next = null;
        }
        
        cur1 = cur1.next;
        cur2 = cur2.next;
        if ((cur1 != null) || (cur2 != null)) {
            cur.next = new ListNode(0);
        }
        cur = cur.next;
    } 

    return result; 
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};

var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
};

console.log(JSON.stringify(addTwoNumbers(l1, l2)));
