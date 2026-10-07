class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let best = 0;

        for (const num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let length = 1;
                while (numsSet.has(num + length)) {
                    length++;
                }
                best = Math.max(best, length);
            }
        }
        return best;
    }
}