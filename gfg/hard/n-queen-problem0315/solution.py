class Solution:
    def nQueen(self, n: int) -> list[list[int]]:
        ans = []
        board = []

        def solve(row, cols, d1, d2):
            if row == n:
                ans.append([x + 1 for x in board])
                return

            for col in range(n):
                if col in cols or row - col in d1 or row + col in d2:
                    continue

                board.append(col)
                cols.add(col)
                d1.add(row - col)
                d2.add(row + col)

                solve(row + 1, cols, d1, d2)

                board.pop()
                cols.remove(col)
                d1.remove(row - col)
                d2.remove(row + col)

        solve(0, set(), set(), set())
        return ans