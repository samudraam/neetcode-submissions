class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1;
        let maxArea = 0;
        while (left < right) {
            let width = right - left;
            let length = Math.min(heights[right], heights[left]);
            let currentArea = width * length;
            maxArea = Math.max(currentArea, maxArea);

            if (heights[left] < heights[right]){
                left++;
            }
            else{
                right--;
            }

        }
        return maxArea;
    }
}
