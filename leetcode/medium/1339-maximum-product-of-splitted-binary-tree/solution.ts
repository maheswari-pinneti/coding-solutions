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
    const MOD = 1_000_000_007;
    const sums: number[] = [];

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        const sum = node.val + dfs(node.left) + dfs(node.right);
        sums.push(sum);

        return sum;
    }

    const total = dfs(root);

    let max = 0;

    for (const sum of sums) {
        max = Math.max(max, sum * (total - sum));
    }

    return max % MOD;
}