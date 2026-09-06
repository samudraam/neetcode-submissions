class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        let addend = [];
        while (left < right) {
            let sum = numbers[left] + numbers[right];
            if (sum === target) {
                addend.push(++left);
                addend.push(++right);
                return addend;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return -1;
    }
}
