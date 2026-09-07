# Q2. Merge k Sorted Lists

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

 *Merge all the linked-lists into one sorted linked-list and return it.* 

 

 **Example 1:** 

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6

```

 **Example 2:** 

```
Input: lists = []
Output: []

```

 **Example 3:** 

```
Input: lists = [[]]
Output: []

```

 

 **Constraints:** 

- k == lists.length
- 0 <= k <= 104
- 0 <= lists[i].length <= 500
- -104 <= lists[i][j] <= 104
- lists[i] is sorted in ascending order.
- The sum of lists[i].length will not exceed 104.

## Solution

**Language:** TypeScript  
**Runtime:** 22 ms (beats 48.83%)  
**Memory:** 67.7 MB (beats 5.97%)  
**Submitted:** 2026-09-07T14:08:03.854Z  

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap: ListNode[] = [];

    const push = (node: ListNode) => {
        heap.push(node);
        let i = heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (heap[parent].val <= heap[i].val) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };

    const pop = (): ListNode => {
        const min = heap[0];
        const last = heap.pop()!;

        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;

            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (
                    left < heap.length &&
                    heap[left].val < heap[smallest].val
                ) {
                    smallest = left;
                }

                if (
                    right < heap.length &&
                    heap[right].val < heap[smallest].val
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }

        return min;
    };

    for (const list of lists) {
        if (list) push(list);
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (heap.length > 0) {
        const node = pop();
        current.next = node;
        current = current.next;

        if (node.next) {
            push(node.next);
        }
    }

    return dummy.next;
}
```

---

[View on LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/)