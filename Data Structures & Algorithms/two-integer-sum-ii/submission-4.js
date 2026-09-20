class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;
        let indexes = [];
        while (l < r) {
            let sum = numbers[l] + numbers[r];
            if (sum > target) {
                r--;
            } else if (sum < target) {
                l++;
            } else {
                indexes.push(l + 1);
                indexes.push(r + 1);
                break;
            }
        }
        return indexes;
    }
}
