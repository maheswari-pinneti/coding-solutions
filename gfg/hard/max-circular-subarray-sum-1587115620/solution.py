class Solution:
    def maxCircularSum(self, arr):
        total = sum(arr)
        mx = mn = arr[0]
        curMax = curMin = arr[0]

        for x in arr[1:]:
            curMax = max(x, curMax + x)
            mx = max(mx, curMax)

            curMin = min(x, curMin + x)
            mn = min(mn, curMin)

        if mx < 0:
            return mx

        return max(mx, total - mn)  