function minRemoveToMakeValid(s: string): string {
    const stack: number[] = [];
    const chars = s.split("");

    // Remove invalid ')'
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "(") {
            stack.push(i);
        } else if (chars[i] === ")") {
            if (stack.length > 0) {
                stack.pop();
            } else {
                chars[i] = "";
            }
        }
    }

    // Remove unmatched '('
    while (stack.length > 0) {
        chars[stack.pop()!] = "";
    }

    return chars.join("");
}