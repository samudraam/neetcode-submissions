class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if(s[l] === s[r]){
                l++;
                r--;
            }
            else{
                return this.isPalindrome(l+1, r, s) || this.isPalindrome(l, r-1, s);
            }
        }
        return true;

    }

    isPalindrome(l,r,s){
        while (l < r){
            if (s[l] !== s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
