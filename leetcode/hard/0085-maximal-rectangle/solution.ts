function maximalRectangle(matrix: string[][]): number {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    function largestRectangleArea(heights: number[]): number {
        const stack: number[] = [];
        let max = 0;

        for (let i = 0; i <= heights.length; i++) {
            const current = i === heights.length ? 0 : heights[i];

            while (
                stack.length > 0 &&
                current < heights[stack[stack.length - 1]]
            ) {
                const h = heights[stack.pop()!];
                const width =
                    stack.length === 0
                        ? i
                        : i - stack[stack.length - 1] - 1;

                max = Math.max(max, h * width);
            }

            stack.push(i);
        }

        return max;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === "1") {
                heights[c]++;
            } else {
                heights[c] = 0;
            }
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
}