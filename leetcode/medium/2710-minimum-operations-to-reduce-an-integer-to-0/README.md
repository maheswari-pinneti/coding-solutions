# Q3. Minimum Operations to Reduce an Integer to 0

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

You are given a positive integer `n`, you can do the following operation  **any**  number of times:

- Add or subtract a power of 2 from n.

Return  *the  **minimum**  number of operations to make* `n` *equal to* `0`.

A number `x` is power of `2` if `x == 2i` where `i >= 0` *.* 

 

 **Example 1:** 

```
Input: n = 39
Output: 3
Explanation: We can do the following operations:
- Add 20 = 1 to n, so now n = 40.
- Subtract 23 = 8 from n, so now n = 32.
- Subtract 25 = 32 from n, so now n = 0.
It can be shown that 3 is the minimum number of operations we need to make n equal to 0.

```

 **Example 2:** 

```
Input: n = 54
Output: 3
Explanation: We can do the following operations:
- Add 21 = 2 to n, so now n = 56.
- Add 23 = 8 to n, so now n = 64.
- Subtract 26 = 64 from n, so now n = 0.
So the minimum number of operations is 3.

```

 

 **Constraints:** 

- 1 <= n <= 105

## Solution

**Language:** TypeScript  
**Runtime:** 0 ms (beats 100.00%)  
**Memory:** 55.6 MB (beats 25.00%)  
**Submitted:** 2026-09-07T14:09:02.574Z  

```ts
function minOperations(n: number): number {
    let operations = 0;

    while (n > 0) {
        if ((n & 1) === 0) {
            n >>= 1;
        } else {
            operations++;

            // If n is 3, subtract 1 twice is better than rounding up.
            if (n === 1 || (n & 3) === 1) {
                n -= 1;
            } else {
                n += 1;
            }
        }
    }

    return operations;
}
```

---

[View on LeetCode](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/)