class Solution:
    def countWays(self, s):
        n = len(s)
        dp = {}

        def solve(i, j, want):
            if i == j:
                return 1 if (s[i] == 'T') == want else 0

            key = (i, j, want)
            if key in dp:
                return dp[key]

            ans = 0

            for k in range(i + 1, j, 2):
                op = s[k]

                lt = solve(i, k - 1, True)
                lf = solve(i, k - 1, False)
                rt = solve(k + 1, j, True)
                rf = solve(k + 1, j, False)

                if op == '&':
                    t = lt * rt
                elif op == '|':
                    t = lt * rt + lt * rf + lf * rt
                else:
                    t = lt * rf + lf * rt

                total = (lt + lf) * (rt + rf)
                ans += t if want else total - t

            dp[key] = ans
            return ans

        return solve(0, n - 1, True)