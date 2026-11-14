class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let w2 = 0;
        let result = "";

        for (let w1 = 0; w1 < word1.length; w1++){
            result += word1[w1];
            if (w2 < word2.length){
                result += word2[w2];
                w2++;
            }
        }
        if (w2 < word2.length) {
            result += word2.substring(w2);
        }
        return result;
        
    }
}
