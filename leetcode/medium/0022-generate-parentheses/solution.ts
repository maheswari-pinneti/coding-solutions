function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(s: string, open: number, close: number) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        if (open < n) backtrack(s + "(", open + 1, close);
        if (close < open) backtrack(s + ")", open, close + 1);
    }

    backtrack("", 0, 0);
    return result;
}