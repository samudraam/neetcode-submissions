class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        let i = 0;
        let j = 0;

        while(i < haystack.length){
            if (haystack[i] == needle[j]){
                i++;
                j++;
            
                if (j === needle.length) { 
                    return i - j; 
                }
            }
            else if (j == 0){
                i++;
            }
            else {
                i = i -j +1;
                j = 0;
            }

        }
        return -1;
    }
}
