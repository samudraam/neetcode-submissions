class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        // count num occurences
        for (let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }

        // sort entries
        const sortedMap = new Map([...freqMap.entries()].sort((a, b) => b[1] - a[1]));
        const sortedKeys = [...sortedMap.keys()];
        let topK = [];

        for (let i = 0; i < k; i++) {
            topK.push(sortedKeys[i]);
        }

        return topK;
    }
}
