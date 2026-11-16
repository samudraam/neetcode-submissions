class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let sPointer = 0;
        if (s.length == 0){
            return true;
        }
        for (let i = 0; i < t.length; i++){
            if (t[i]== s[sPointer]){
                sPointer++;
                
                if (sPointer === s.length){
                    return true;
                }
            }
        }
        return false;
    }
}
