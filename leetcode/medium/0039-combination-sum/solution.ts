function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const path: number[] = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start: number, remaining: number): void {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break;

            path.push(candidates[i]);

            // i, not i + 1 → same number can be reused
            backtrack(i, remaining - candidates[i]);

            path.pop();
        }
    }

    backtrack(0, target);
    return result;
}