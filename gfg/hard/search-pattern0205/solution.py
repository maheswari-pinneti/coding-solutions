class Solution:
    def search(self, pat, txt):
        m = len(pat)
        lps = [0] * m
        j = 0

        for i in range(1, m):
            while j and pat[i] != pat[j]:
                j = lps[j - 1]
            if pat[i] == pat[j]:
                j += 1
            lps[i] = j

        ans = []
        j = 0

        for i in range(len(txt)):
            while j and txt[i] != pat[j]:
                j = lps[j - 1]
            if txt[i] == pat[j]:
                j += 1
            if j == m:
                ans.append(i - m + 1)
                j = lps[j - 1]

        return ans