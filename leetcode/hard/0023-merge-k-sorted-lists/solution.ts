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