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
**Runtime:** 0 ms  
**Memory:** 54 MB  
**Submitted:** 2026-09-06T16:01:35.092Z  

```ts
function rob(nums: number[]): number {
    let prev2 = 0;
    let prev1 = 0;

    for (const money of nums) {
        const current = Math.max(prev1, prev2 + money);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
```

---

[View on LeetCode](https://leetcode.com/problems/generate-parentheses/)