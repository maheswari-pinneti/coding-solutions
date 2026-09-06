# Q1. Number of Islands

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return  *the number of islands*.

An  **island**  is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

 **Example 1:** 

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

```

 **Example 2:** 

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

```

 

 **Constraints:** 

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] is '0' or '1'.

## Solution

**Language:** TypeScript  
**Runtime:** 39 ms  
**Memory:** 53.1 MB  
**Submitted:** 2026-09-06T15:59:44.778Z  

```ts
function numIslands(grid: string[][]): number {
    let count = 0;
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (r: number, c: number) => {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === "0") return;

        grid[r][c] = "0";

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
}
```

---

[View on LeetCode](https://leetcode.com/problems/number-of-islands/)