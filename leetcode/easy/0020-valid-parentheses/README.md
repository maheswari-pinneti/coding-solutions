# Q1. Valid Parentheses

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)

## Problem

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

 

 **Example 1:** 

 **Input:**  s = "()"

 **Output:**  true

 **Example 2:** 

 **Input:**  s = "()[]{}"

 **Output:**  true

 **Example 3:** 

 **Input:**  s = "(]"

 **Output:**  false

 **Example 4:** 

 **Input:**  s = "([])"

 **Output:**  true

 **Example 5:** 

 **Input:**  s = "([)]"

 **Output:**  false

 

 **Constraints:** 

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

## Solution

**Language:** TypeScript  
**Runtime:** 4 ms (beats 59.84%)  
**Memory:** 58.1 MB (beats 47.33%)  
**Submitted:** 2026-09-07T14:10:47.453Z  

```ts
function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
```

---

[View on LeetCode](https://leetcode.com/problems/valid-parentheses/)