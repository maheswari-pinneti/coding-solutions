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