# Q1. Subarray Sum Equals K

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given an array of integers `nums` and an integer `k`, return  *the total number of subarrays whose sum equals to*  `k`.

A subarray is a contiguous  **non-empty**  sequence of elements within an array.

 

 **Example 1:** 

```
Input: nums = [1,1,1], k = 2
Output: 2

```

 **Example 2:** 

```
Input: nums = [1,2,3], k = 3
Output: 2

```

 

 **Constraints:** 

- 1 <= nums.length <= 2 * 104
- -1000 <= nums[i] <= 1000
- -107 <= k <= 107

## Solution

**Language:** TypeScript  
**Runtime:** 0 ms  
**Memory:** 54.6 MB  
**Submitted:** 2026-09-07T14:06:41.381Z  

```ts
function subarraySum(nums: number[], k: number): number {
    const map = new Map<number, number>();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k)!;
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}
```

---

[View on LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/)