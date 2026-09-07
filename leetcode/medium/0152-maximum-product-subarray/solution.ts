function maxProduct(nums: number[]): number {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let answer = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(num, maxProduct * num);
        minProduct = Math.min(num, minProduct * num);

        answer = Math.max(answer, maxProduct);
    }

    return answer;
}