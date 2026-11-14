class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let counts = new Map();
        let threshold = Math.floor(nums.length/2);
        //determine counts with hashmap
        nums.sort((a,b)=> a-b);
        return nums[threshold];

    }
}
