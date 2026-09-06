# Boolean Parenthesization

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

You are given a boolean expression  **s** containing
    'T' ---> true
    'F' ---> false 
and following operators between symbols
   &   ---> boolean AND
    |   ---> boolean OR
   ^   ---> boolean XOR
Count the number of ways we can  **parenthesize** the expression so that the value of expression evaluates to  **true**.

Note: The answer is guaranteed to fit within a  **32-bit**  integer.

 **Examples:** 

```
Input: s = "T|T&F^T"
Output: 4
Explaination: The expression evaluates to true in 4 ways: ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T) and (T|((T&F)^T)).
```

```
Input: s = "T^F|F"
Output: 2
Explaination: The expression evaluates to true in 2 ways: ((T^F)|F) and (T^(F|F)).
```

 **Constraints:** 
1 ≤ |s| ≤ 100

## Solution

**Language:** Python  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-06T15:40:36.076Z  

```py
class Solution:
    def countWays(self, s):
        n = len(s)
        dp = {}

        def solve(i, j, want):
            if i == j:
                return 1 if (s[i] == 'T') == want else 0

            key = (i, j, want)
            if key in dp:
                return dp[key]

            ans = 0

            for k in range(i + 1, j, 2):
                op = s[k]

                lt = solve(i, k - 1, True)
                lf = solve(i, k - 1, False)
                rt = solve(k + 1, j, True)
                rf = solve(k + 1, j, False)

                if op == '&':
                    t = lt * rt
                elif op == '|':
                    t = lt * rt + lt * rf + lf * rt
                else:
                    t = lt * rf + lf * rt

                total = (lt + lf) * (rt + rf)
                ans += t if want else total - t

            dp[key] = ans
            return ans

        return solve(0, n - 1, True)
```

---

[View on GeeksforGeeks](https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1)