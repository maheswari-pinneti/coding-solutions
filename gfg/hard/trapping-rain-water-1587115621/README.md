# Trapping Rain Water

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

Given an array  **arr[]** with non-negative integers representing the height of blocks. If the width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

 **Examples:** 

```
Input: arr[] = [3, 0, 1, 0, 4, 0, 2]
Output: 10
Explanation: Total water trapped = 0 + 3 + 2 + 3 + 0 + 2 + 0 = 10 units.

```

```
Input: arr[] = [3, 0, 2, 0, 4]
Output: 7
Explanation: Total water trapped = 0 + 3 + 1 + 3 + 0 = 7 units.

```

```
Input: arr[] = [1, 2, 3, 4]
Output: 0
Explanation: We cannot trap water as there is no height bound on both sides.
```

```
Input: arr[] = [2, 1, 5, 3, 1, 0, 4]
Output: 9
Explanation: Total water trapped = 0 + 1 + 0 + 1 + 3 + 4 + 0 = 9 units.
```

 **Constraints:** 
1 < arr.size() < 105
0 < arr[i] < 103

## Solution

**Language:** Python  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-06T15:38:30.933Z  

```py
class Solution:
    def maxWater(self, arr):
        l, r = 0, len(arr) - 1
        left = right = water = 0

        while l < r:
            if arr[l] <= arr[r]:
                if arr[l] >= left:
                    left = arr[l]
                else:
                    water += left - arr[l]
                l += 1
            else:
                if arr[r] >= right:
                    right = arr[r]
                else:
                    water += right - arr[r]
                r -= 1

        return water
```

---

[View on GeeksforGeeks](https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1)