function minOperations(n: number): number {
    let operations = 0;

    while (n > 0) {
        if ((n & 1) === 0) {
            n >>= 1;
        } else {
            operations++;

            // If n is 3, subtract 1 twice is better than rounding up.
            if (n === 1 || (n & 3) === 1) {
                n -= 1;
            } else {
                n += 1;
            }
        }
    }

    return operations;
}