class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // Example
    // PASS 1:
    // let nums = [2,7,11,15], target = 9
    // let index = 0;
    // value = 2 - target 9 = 7
    // storage {
    //   "7" : 0
    // }
    twoSum(nums, target) {

        //save new complements
        let seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            // find complement value (ex 9-2 = 7)
            let complement = target - nums[i];
            
            // does seen have complement value?, return index
            if (seen.has(nums[i])){
                return [seen.get(nums[i]), i]
            }
            seen.set(complement, i);
        }
    }
}
