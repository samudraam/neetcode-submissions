class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = new Map();
        let threshold = Math.floor(nums.length/2);

        for (let n = 0; n < nums.length; n++){
            count.set(nums[n], (count.get(nums[n]) || 0) +1);

            if (count.get(nums[n]) > threshold) { return nums[n]; }
        }
        

    }
}
