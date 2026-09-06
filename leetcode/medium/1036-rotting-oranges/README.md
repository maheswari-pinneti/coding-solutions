# Q2. Rotting Oranges

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

You are given an `m x n` `grid` where each cell can have one of three values:

- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.

Every minute, any fresh orange that is  **4-directionally adjacent**  to a rotten orange becomes rotten.

Return  *the minimum number of minutes that must elapse until no cell has a fresh orange*. If  *this is impossible, return*  `-1`.

 

 **Example 1:** 

```
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

```

 **Example 2:** 

```
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

```

 **Example 3:** 

```
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

```

 

 **Constraints:** 

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 10
- grid[i][j] is 0, 1, or 2.

## Solution

**Language:** TypeScript  
**Runtime:** 13 ms (beats 28.11%)  
**Memory:** 61.5 MB (beats 29.47%)  
**Submitted:** 2026-09-06T16:00:48.670Z  

```ts
function orangesRotting(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    const queue: [number, number][] = [];
    let fresh = 0, minutes = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 2) queue.push([r, c]);
            else if (grid[r][c] === 1) fresh++;
        }
    }

    while (queue.length && fresh > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift()!;
            for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
                const nr = r + dr, nc = c + dc;

                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                }
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;
}
```

---

[View on LeetCode](https://leetcode.com/problems/rotting-oranges/)