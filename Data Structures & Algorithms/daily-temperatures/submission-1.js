class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      const result = new Array(temperatures.length).fill(0);
      const stack = [];
    
      for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[i] > temperatures[stack.at(-1)]) {
          const poppedIndex = stack.pop();
          result[poppedIndex] = i - poppedIndex;
        }
        stack.push(i);
      }
      return result;
    }
}
