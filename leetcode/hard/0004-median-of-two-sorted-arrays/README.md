# Q2. Median of Two Sorted Arrays

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return  **the median**  of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

 

 **Example 1:** 

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

```

 **Example 2:** 

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

```

 

 **Constraints:** 

- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -106 <= nums1[i], nums2[i] <= 106

## Solution

**Language:** TypeScript  
**Runtime:** 0 ms  
**Memory:** 55 MB  
**Submitted:** 2026-09-07T14:17:52.132Z  

```ts
function findMedianSortedArrays(
    nums1: number[],
    nums2: number[]
): number {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = Math.floor((m + n + 1) / 2) - partition1;

        const maxLeft1 =
            partition1 === 0 ? -Infinity : nums1[partition1 - 1];

        const minRight1 =
            partition1 === m ? Infinity : nums1[partition1];

        const maxLeft2 =
            partition2 === 0 ? -Infinity : nums2[partition2 - 1];

        const minRight2 =
            partition2 === n ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            }

            return (
                (Math.max(maxLeft1, maxLeft2) +
                    Math.min(minRight1, minRight2)) /
                2
            );
        }

        if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }

    return 0;
}
```

---

[View on LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/)