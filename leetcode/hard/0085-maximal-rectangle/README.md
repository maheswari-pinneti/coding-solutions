# Q3. Maximal Rectangle

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return  *its area*.

 

 **Example 1:** 

```
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

```

 **Example 2:** 

```
Input: matrix = [["0"]]
Output: 0

```

 **Example 3:** 

```
Input: matrix = [["1"]]
Output: 1

```

 

 **Constraints:** 

- rows == matrix.length
- cols == matrix[i].length
- 1 <= rows, cols <= 200
- matrix[i][j] is '0' or '1'.

## Solution

**Language:** TypeScript  
**Runtime:** 11 ms (beats 58.33%)  
**Memory:** 60.9 MB (beats 61.67%)  
**Submitted:** 2026-09-07T14:21:55.369Z  

```ts
function maximalRectangle(matrix: string[][]): number {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    function largestRectangleArea(heights: number[]): number {
        const stack: number[] = [];
        let max = 0;

        for (let i = 0; i <= heights.length; i++) {
            const current = i === heights.length ? 0 : heights[i];

            while (
                stack.length > 0 &&
                current < heights[stack[stack.length - 1]]
            ) {
                const h = heights[stack.pop()!];
                const width =
                    stack.length === 0
                        ? i
                        : i - stack[stack.length - 1] - 1;

                max = Math.max(max, h * width);
            }

            stack.push(i);
        }

        return max;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === "1") {
                heights[c]++;
            } else {
                heights[c] = 0;
            }
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
}
```

---

[View on LeetCode](https://leetcode.com/problems/maximal-rectangle/)