# Q1. Top K Frequent Elements

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given an integer array `nums` and an integer `k`, return  *the*  `k`  *most frequent elements*. You may return the answer in  **any order**.

 

 **Example 1:** 

 **Input:**  nums = [1,1,1,2,2,3], k = 2

 **Output:**  [1,2]

 **Example 2:** 

 **Input:**  nums = [1], k = 1

 **Output:**  [1]

 **Example 3:** 

 **Input:**  nums = [1,2,1,2,1,2,3,1,3,2], k = 2

 **Output:**  [1,2]

 

 **Constraints:** 

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.

 

 **Follow up:**  Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.

## Solution

**Language:** TypeScript  
**Runtime:** 20 ms (beats 24.62%)  
**Memory:** 62.2 MB (beats 41.06%)  
**Submitted:** 2026-09-07T14:22:51.911Z  

```ts
function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const buckets: number[][] = Array.from(
        { length: nums.length + 1 },
        () => []
    );

    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    const result: number[] = [];

    for (let i = nums.length; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);

            if (result.length === k) {
                break;
            }
        }
    }

    return result;
}
```

---

[View on LeetCode](https://leetcode.com/problems/top-k-frequent-elements/)