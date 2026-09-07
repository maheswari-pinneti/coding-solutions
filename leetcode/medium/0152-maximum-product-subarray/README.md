# Q1. Maximum Product Subarray

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

Given an integer array `nums`, find a subarray that has the largest product, and return  *the product*.

The test cases are generated so that the answer will fit in a  **32-bit**  integer.

 **Note**  that the product of an array with a single element is the value of that element.

 

 **Example 1:** 

```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

```

 **Example 2:** 

```
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

```

 

 **Constraints:** 

- 1 <= nums.length <= 2 * 104
- -10 <= nums[i] <= 10
- The product of any subarray of nums is guaranteed to fit in a 32-bit integer.

## Solution

**Language:** TypeScript  
**Runtime:** 2 ms (beats 81.91%)  
**Memory:** 58.6 MB (beats 29.28%)  
**Submitted:** 2026-09-07T14:03:23.764Z  

```ts
function maxProduct(nums: number[]): number {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let answer = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(num, maxProduct * num);
        minProduct = Math.min(num, minProduct * num);

        answer = Math.max(answer, maxProduct);
    }

    return answer;
}
```

---

[View on LeetCode](https://leetcode.com/problems/maximum-product-subarray/)