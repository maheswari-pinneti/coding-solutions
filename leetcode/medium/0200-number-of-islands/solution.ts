function numIslands(grid: string[][]): number {
    let count = 0;
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (r: number, c: number) => {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === "0") return;

        grid[r][c] = "0";

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
}