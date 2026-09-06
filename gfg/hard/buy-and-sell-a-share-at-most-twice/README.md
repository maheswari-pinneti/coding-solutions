# Stock Buy and Sell – Max 2 Transactions Allowed

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-red)

## Problem

In daily share trading, a trader buys shares and sells them on the same day. If the trader is allowed to make  **at most**   **2** transactions in a day, find out the  **maximum**  profit that a share trader could have made.

You are given an array  **prices[]**  representing stock prices throughout the day. Note that the second transaction can only start after the first one is complete (buy->sell->buy->sell).

 **Examples:** 

```
Input: prices[] = [10, 22, 5, 75, 65, 80]
Output: 87
Explanation: 
Trader will buy at 10 and sells at 22. 
Profit earned in 1st transaction = 22 - 10 = 12. 
Then he buys at 5 and sell at 80. 
Profit earned in 2nd transaction = 80 - 5 = 75. 
Total profit earned = 12 + 75 = 87. 
```

```
Input: prices[] = [2, 30, 15, 10, 8, 25, 80]
Output: 100
Explanation: 
Trader will buy at 2 and sells at 30. 
Profit earned in 1st transaction = 30 - 2 = 28. 
Then he buys at 8 and sell at 80. 
Profit earned in 2nd transaction = 80 - 8 = 72. 
Total profit earned = 28 + 72 = 100.
```

**Constraints:
**1 <= prices.size() <= 105
1 <= prices[i] <= 105

## Solution

**Language:** Python  
**Runtime:** N/A  
**Memory:** N/A  
**Submitted:** 2026-09-06T15:40:19.589Z  

```py
class Solution:
    def maxProfit(self, prices):
        buy1 = buy2 = float('-inf')
        sell1 = sell2 = 0

        for p in prices:
            buy1 = max(buy1, -p)
            sell1 = max(sell1, buy1 + p)
            buy2 = max(buy2, sell1 - p)
            sell2 = max(sell2, buy2 + p)

        return sell2
```

---

[View on GeeksforGeeks](https://practice.geeksforgeeks.org/problems/buy-and-sell-a-share-at-most-twice/1)