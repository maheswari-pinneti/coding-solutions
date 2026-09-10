# Permutations

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in  **any order**.

 

 **Example 1:** 

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

```

 **Example 2:** 

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]

```

 **Example 3:** 

```
Input: nums = [1]
Output: [[1]]

```

 

 **Constraints:** 

- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the integers of nums are unique.

## Solution

**Language:** TypeScript  
**Runtime:** 1 ms (beats 87.34%)  
**Memory:** 58.5 MB (beats 98.88%)  
**Submitted:** 2026-09-10T17:32:28.272Z  

```ts
function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const current: number[] = [];
    const used: boolean[] = new Array(nums.length).fill(false);

    function backtrack() {
        // We have used every number
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip numbers already used
            if (used[i]) continue;

            // Choose
            used[i] = true;
            current.push(nums[i]);

            // Explore
            backtrack();

            // Undo choice
            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
}
```

---

[View on LeetCode](https://leetcode.com/problems/permutations/)