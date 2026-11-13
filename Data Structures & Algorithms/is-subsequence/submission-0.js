class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let sPointer = 0;
        let tPointer = 0;

        for (let tPointer = 0; tPointer < t.length; tPointer++){
            if (s[sPointer] === t[tPointer]){
                sPointer++;
            }
        }
        if (sPointer != s.length){
            return false;
        }
        else return true;
        
    }
}