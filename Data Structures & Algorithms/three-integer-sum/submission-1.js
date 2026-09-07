class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // store result
        let result = [];
        // sort nums
        nums.sort((a, b) => a - b);

        // For loop tracking int i
        for (let i = 0; i < nums.length; i++) {
            //checks if we have a duplicate number
            if (i !== 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            // initializing left and right ptr
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum < 0) {
                    left++; // sum too small -> move left up to increase it
                } else {
                    right--; // sum too big -> move right down to decrease it
                }
            }
        }
        return result;
    }
}
