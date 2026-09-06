# Search Pattern

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

Given two strings, a text string  **txt**  and a pattern string  **pat**, both consisting of lowercase English alphabets. Return the starting  **indices**  (0-based) of all the occurrences of the pattern string pat in the text string txt.

 **Note:** Return an empty list in case of no occurrences of pattern.

 **Examples:** 

```
Input: txt = "geeksforgeeks", pat = "geek"
Output: [0, 8]
Explanation: The string "geek" occurs twice in txt, one starts at index 0 and the other at index 8.

```

```
Input: txt = "abesdu", pat = "edu"
Output: []
Explanation: There's no substring "edu" present in txt.

```

```
Input: txt = "aabaacaadaabaaba", pat = "aaba"
Output: [0, 9, 12]
Explanation:

```

 **Constraints:** 
1 ≤ txt.size() ≤ 105
1 ≤ pat.size() ≤ txt.size()

## Solution

**Language:** Python  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-06T15:38:07.646Z  

```py
class Solution:
    def search(self, pat, txt):
        m = len(pat)
        lps = [0] * m
        j = 0

        for i in range(1, m):
            while j and pat[i] != pat[j]:
                j = lps[j - 1]
            if pat[i] == pat[j]:
                j += 1
            lps[i] = j

        ans = []
        j = 0

        for i in range(len(txt)):
            while j and txt[i] != pat[j]:
                j = lps[j - 1]
            if txt[i] == pat[j]:
                j += 1
            if j == m:
                ans.append(i - m + 1)
                j = lps[j - 1]

        return ans
```

---

[View on GeeksforGeeks](https://practice.geeksforgeeks.org/problems/search-pattern0205/1)