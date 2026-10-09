class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        const windowState = new Set();
        for (let right = 0; right < s.length; right++) {
                // 1. Add current element to window state
                const current = s[right];

                // 2. Shrink window from the left while the state is INVALID
                while (windowState.has(current)) { 
                    windowState.delete(s[left]);
                    left++;
        }
        
        // 3. Update state and record the maximum valid length
        windowState.add(current);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength

        
        
    }
}