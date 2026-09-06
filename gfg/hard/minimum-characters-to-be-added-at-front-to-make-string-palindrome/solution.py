class Solution:
    def minChar(self, s):
        t = s + '#' + s[::-1]
        lps = [0] * len(t)
        j = 0

        for i in range(1, len(t)):
            while j and t[i] != t[j]:
                j = lps[j - 1]
            if t[i] == t[j]:
                j += 1
            lps[i] = j

        return len(s) - lps[-1]