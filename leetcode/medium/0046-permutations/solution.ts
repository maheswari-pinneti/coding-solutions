function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const current: number[] = [];
    const used: boolean[] = new Array(nums.length).fill(false);

    function backtrack() {
        // We have used every number
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip numbers already used
            if (used[i]) continue;

            // Choose
            used[i] = true;
            current.push(nums[i]);

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