function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const current: number[] = [];
    const used: boolean[] = new Array(nums.length).fill(false);

    function backtrack(): void {
        // A complete permutation is formed
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip numbers already used
            if (used[i]) continue;

            // Choose
            current.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack();

            // Undo choice
            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
}