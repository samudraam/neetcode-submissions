class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let doubleLen = nums.length * 2;
        let concatenatedArr = [];
        for (let i = 0; i < doubleLen; i++) {
            let currentIndex = i % nums.length;
            concatenatedArr.push(nums[currentIndex]);
        }
        return concatenatedArr;
    }
}
