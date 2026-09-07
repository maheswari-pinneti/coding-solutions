# Q3. Maximum Product of Splitted Binary Tree

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given the `root` of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return  *the maximum product of the sums of the two subtrees*. Since the answer may be too large, return it  **modulo**  `109 + 7`.

 **Note**  that you need to maximize the answer before taking the mod and not after taking it.

 

 **Example 1:** 

```
Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)

```

 **Example 2:** 

```
Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)

```

 

 **Constraints:** 

- The number of nodes in the tree is in the range [2, 5 * 104].
- 1 <= Node.val <= 104

## Solution

**Language:** TypeScript  
**Runtime:** 25 ms (beats 75.00%)  
**Memory:** 91.5 MB  
**Submitted:** 2026-09-07T14:13:49.109Z  

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxProduct(root: TreeNode | null): number {
    const MOD = 1000000007n;
    const sums: bigint[] = [];

    function dfs(node: TreeNode | null): bigint {
        if (!node) return 0n;

        const sum =
            BigInt(node.val) +
            dfs(node.left) +
            dfs(node.right);

        sums.push(sum);
        return sum;
    }

    const total = dfs(root);
    let max = 0n;

    for (const sum of sums) {
        const product = sum * (total - sum);

        if (product > max) {
            max = product;
        }
    }

    return Number(max % MOD);
}
```

---

[View on LeetCode](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/)