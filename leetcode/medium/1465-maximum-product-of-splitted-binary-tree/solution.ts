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