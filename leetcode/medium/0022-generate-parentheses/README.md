# Q3. Generate Parentheses

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given `n` pairs of parentheses, write a function to  *generate all combinations of well-formed parentheses*.

 

 **Example 1:** 

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

```

 **Example 2:** 

```
Input: n = 1
Output: ["()"]

```

 

 **Constraints:** 

- 1 <= n <= 8

## Solution

**Language:** TypeScript  
**Runtime:** 2 ms (beats 44.65%)  
**Memory:** 55.7 MB (beats 70.39%)  
**Submitted:** 2026-09-06T16:01:40.909Z  

```ts
function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(s: string, open: number, close: number) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        if (open < n) backtrack(s + "(", open + 1, close);
        if (close < open) backtrack(s + ")", open, close + 1);
    }

    backtrack("", 0, 0);
    return result;
}
```

---

[View on LeetCode](https://leetcode.com/problems/generate-parentheses/)