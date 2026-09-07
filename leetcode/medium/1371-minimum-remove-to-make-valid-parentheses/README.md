# Q1. Minimum Remove to Make Valid Parentheses

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given a string s of `'('`, `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses (`'('` or `')'`, in any positions) so that the resulting  *parentheses string*  is valid and return  **any**  valid string.

Formally, a  *parentheses string*  is valid if and only if:

- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

 

 **Example 1:** 

```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)", "lee(t(c)ode)" would also be accepted.

```

 **Example 2:** 

```
Input: s = "a)b(c)d"
Output: "ab(c)d"

```

 **Example 3:** 

```
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

```

 

 **Constraints:** 

- 1 <= s.length <= 105
- s[i] is either '(', ')', or lowercase English letter.

## Solution

**Language:** TypeScript  
**Runtime:** 14 ms (beats 85.29%)  
**Memory:** 63.4 MB (beats 70.59%)  
**Submitted:** 2026-09-07T14:17:04.450Z  

```ts
function minRemoveToMakeValid(s: string): string {
    const stack: number[] = [];
    const chars = s.split("");

    // Remove invalid ')'
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "(") {
            stack.push(i);
        } else if (chars[i] === ")") {
            if (stack.length > 0) {
                stack.pop();
            } else {
                chars[i] = "";
            }
        }
    }

    // Remove unmatched '('
    while (stack.length > 0) {
        chars[stack.pop()!] = "";
    }

    return chars.join("");
}
```

---

[View on LeetCode](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)