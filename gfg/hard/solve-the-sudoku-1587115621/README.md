# Solve the Sudoku

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

Given a 9*9 matrix  **mat[][]**  representing an incomplete Sudoku puzzle. Each cell contains a digit from 0 to 9, where 0 represents an empty cell and non-zero digits represent fixed values.

Fill the empty cells to complete the puzzle. It is guaranteed that the puzzle has exactly one valid solution.

A valid Sudoku solution must satisfy the following conditions:

- Each digit from 1 to 9 appears exactly once in every row.
- Each digit from 1 to 9 appears exactly once in every column.
- Each digit from 1 to 9 appears exactly once in each of the nine 3*3 subgrids.

 **Examples:** 

```
Input: mat[][] = 

Output:

Explanation: Each row, column and 3 x 3 box of the output matrix contains unique numbers.
```

```
Input: mat[][] = 

Output:

Explanation: Each row, column and 3 x 3 box of the output matrix contains unique numbers.
```

 **Constraints:** 
0 ≤ mat[i][j] ≤ 9

## Solution

**Language:** Python  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-06T15:39:24.978Z  

```py
class Solution:
    def solveSudoku(self, mat: list[list[int]]) -> None:
        def solve():
            for r in range(9):
                for c in range(9):
                    if mat[r][c] == 0:
                        for num in range(1, 10):
                            if valid(r, c, num):
                                mat[r][c] = num

                                if solve():
                                    return True

                                mat[r][c] = 0
                        return False
            return True

        def valid(r, c, num):
            for i in range(9):
                if mat[r][i] == num or mat[i][c] == num:
                    return False

            sr, sc = (r // 3) * 3, (c // 3) * 3
            for i in range(sr, sr + 3):
                for j in range(sc, sc + 3):
                    if mat[i][j] == num:
                        return False

            return True

        solve()
```

---

[View on GeeksforGeeks](https://practice.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1)