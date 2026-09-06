class Solution:
    def solveSudoku(self, mat: list[list[int]]) -> None:
        def solve():
            for r in range(9):
                for c in range(9):
                    if mat[r][c] == 0:
                        for num in range(1, 10):
                            if valid(r, c, num):
                                mat[r][c] = num

                                if solve():
                                    return True

                                mat[r][c] = 0
                        return False
            return True

        def valid(r, c, num):
            for i in range(9):
                if mat[r][i] == num or mat[i][c] == num:
                    return False

            sr, sc = (r // 3) * 3, (c // 3) * 3
            for i in range(sr, sr + 3):
                for j in range(sc, sc + 3):
                    if mat[i][j] == num:
                        return False

            return True

        solve()