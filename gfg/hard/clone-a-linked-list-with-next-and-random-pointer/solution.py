''' Structure of Linked List Node
class Node:
    def __init__(self, x):
        self.data = x
        self.next = None
        self.random = None
'''        

class Solution:
    def cloneLinkedList(self, head):
        if not head:
            return None

        mp = {}
        cur = head

        # Create copies
        while cur:
            mp[cur] = Node(cur.data)
            cur = cur.next

        # Connect pointers
        cur = head
        while cur:
            mp[cur].next = mp.get(cur.next)
            mp[cur].random = mp.get(cur.random)
            cur = cur.next

        return mp[head]