# Min Chars to Add for Palindrome

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

Given a string  **s**, the task is to find the  **minimum**  characters to be added at the  **front**  to make the string  **palindrome**.

 **Note:**  A palindrome string is a sequence of characters that reads the same forward and backward.

 **Examples:** 

```
Input: s = "abc"
Output: 2
Explanation: Add 'b' and 'c' at front of the above string to make it palindrome: "cbabc"

```

```
Input: s = "aacecaaaa"
Output: 2
Explanation: Add 2 a's at front of the above string to make it palindrome: "aaaacecaaaa"
```

 **Constraints:** 
1 ≤ s.size() ≤ 106
s consists of lowercase english alphabets

## Solution

**Language:** Python  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-06T15:37:52.868Z  

```py
class Solution:
    def minChar(self, s):
        t = s + '#' + s[::-1]
        lps = [0] * len(t)
        j = 0

        for i in range(1, len(t)):
            while j and t[i] != t[j]:
                j = lps[j - 1]
            if t[i] == t[j]:
                j += 1
            lps[i] = j

        return len(s) - lps[-1]
```

---

[View on GeeksforGeeks](https://practice.geeksforgeeks.org/problems/minimum-characters-to-be-added-at-front-to-make-string-palindrome/1)