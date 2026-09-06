class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (count.has(nums[i])) {
                return true;
            } else {
                count.set(nums[i], 0);
            }
        }
        return false;
    }
}
