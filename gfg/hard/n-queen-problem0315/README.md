# N-Queen Problem

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

The N-Queens puzzle is the problem of placing N queens on an N * N chessboard such that no two queens attack each other. Two queens attack each other if they are placed in the same row, the same column, or the same diagonal.

Given an integer  **n** representing the number of queens, find all distinct solutions to this puzzle. Each solution should be represented as an array of size n, where the **ith**  element (1-based indexing) denotes the column position of the queen placed in the  **ith** row.

 **Note:**  You may return the solutions in any order.

 **Examples:** 

```
Input: n = 1
Output: [1]
Explanation: Only one queen can be placed in the single cell available.
```

```
Input: n = 4
Output: [[2, 4, 1, 3], [3, 1, 4, 2]]
Explanation: There are 2 possible solutions for n = 4.

```

```
Input: n = 3
Output: []
Explanation: There are no possible solutions for n = 3.
```

**Constraints:
**1 ≤ n ≤ 10

## Solution

**Language:** Python  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-06T15:39:00.349Z  

```py
class Solution:
    def nQueen(self, n: int) -> list[list[int]]:
        ans = []
        board = []

        def solve(row, cols, d1, d2):
            if row == n:
                ans.append([x + 1 for x in board])
                return

            for col in range(n):
                if col in cols or row - col in d1 or row + col in d2:
                    continue

                board.append(col)
                cols.add(col)
                d1.add(row - col)
                d2.add(row + col)

                solve(row + 1, cols, d1, d2)

                board.pop()
                cols.remove(col)
                d1.remove(row - col)
                d2.remove(row + col)

        solve(0, set(), set(), set())
        return ans
```

---

[View on GeeksforGeeks](https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1)