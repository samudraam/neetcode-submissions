class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const score = [];

        for (const op of operations) {
            if (op === "+") {
                score.push(score.at(-1) + score.at(-2));
            } else if (op === "D") {
                score.push(score.at(-1) * 2);
            } else if (op === "C") {
                score.pop();
            } else {
                score.push(Number(op));
            }
        }

        return score.reduce((sum, n) => sum + n, 0);
    }
}
