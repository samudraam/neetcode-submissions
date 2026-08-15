class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //clean the string
        const noWhitespace = s.replace(/[^a-zA-Z0-9]/g, "");
        const clean = noWhitespace.toLowerCase();

        let left = 0;
        let right = clean.length - 1;

        while (left < right){
            //see if the two are matches
            if (clean[left] === clean[right]){
                left++;
                right--;
            }
            else{
                return false;
            }
        }
        return true;
    }
}
