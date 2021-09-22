
// TODO：注意两点：
// 1. 要构建一个listNode的数据结构，包括他传入的数据也是这个结构的，需要按照这个结构去取值
// 2. 判断undifined类型的时候需要注意，不要直接用!判断 


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    const res = []
    const arr1 = []
    const arr2 = []
    while (l1) { // 把链表的值取出来加入数组arr1
        arr1.push(l1.val)
        l1 = l1.next
    }
    while (l2) { // 把链表的值取出来加入数组arr2
        arr2.push(l2.val)
        l2 = l2.next
    }

    const len = arr1.length > arr2.length ? arr1.length : arr2.length;
    let addOne = 0;

    for (let i = 0; i < len; i++) {
        let num = 0;

        if (arr1[i] == undefined) {
            num = arr2[i] + addOne
        } else if (arr2[i] == undefined) {
            num = arr1[i] + addOne
        } else {
            num = arr2[i] + arr1[i] + addOne
        }

        addOne = parseInt(num / 10)

        res.push(new ListNode(parseInt(num % 10)))
    }

    if (addOne) res.push(new ListNode(parseInt(addOne % 10)))

    for (let i = 0; i < res.length - 1; i++) {
        res[i].next = res[i + 1]
    }

    return res[0]
};