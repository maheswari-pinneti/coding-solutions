function maxSlidingWindow(nums: number[], k: number): number[] {
    const deque: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove indices outside the window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove smaller elements from the back
        while (
            deque.length > 0 &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        deque.push(i);

        // Window is ready
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}