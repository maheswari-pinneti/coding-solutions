# Combination Sum

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given an array of  **distinct**  integers `candidates` and a target integer `target`, return  *a list of all  **unique combinations**  of* `candidates` *where the chosen numbers sum to* `target` *.*  You may return the combinations in  **any order**.

The  **same**  number may be chosen from `candidates` an  **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

 

 **Example 1:** 

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

```

 **Example 2:** 

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

```

 **Example 3:** 

```
Input: candidates = [2], target = 1
Output: []

```

 

 **Constraints:** 

- 1 <= candidates.length <= 30
- 2 <= candidates[i] <= 40
- All elements of candidates are distinct.
- 1 <= target <= 40

## Solution

**Language:** TypeScript  
**Runtime:** 2 ms (beats 84.17%)  
**Memory:** 60.5 MB (beats 71.32%)  
**Submitted:** 2026-09-08T17:32:31.888Z  

```ts
function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const path: number[] = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start: number, remaining: number): void {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break;

            path.push(candidates[i]);

            // i, not i + 1 → same number can be reused
            backtrack(i, remaining - candidates[i]);

            path.pop();
        }
    }

    backtrack(0, target);
    return result;
}
```

---

[View on LeetCode](https://leetcode.com/problems/combination-sum/)