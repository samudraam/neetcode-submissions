class Solution {
    containsNearbyDuplicate(nums, k) {
        let numsMap = new Map();
        for (let i = 0; i <= nums.length-1; i++){
            if (numsMap.has(nums[i])) {
                if (i - numsMap.get(nums[i]) <= k) {
                    return true
                }
            }
        numsMap.set(nums[i], i);

        }
        return false;

    }
}