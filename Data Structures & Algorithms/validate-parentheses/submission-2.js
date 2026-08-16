class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (const char of s) {
            const topElement = stack.at(-1);

            if (char === "[" || char === "(" || char === "{") {
                stack.push(char);
            } else if (char === "}") {
                if (topElement !== "{") {
                    return false;
                }
                stack.pop();
            } else if (char === ")") {
                if (topElement !== "(") {
                    return false;
                }
                stack.pop();
            } else if (char === "]") {
                if (topElement !== "[") {
                    return false;
                }
                stack.pop();
            }
        }
        if (stack.length > 0) {
            return false;
        }
        return true;

    }
}
