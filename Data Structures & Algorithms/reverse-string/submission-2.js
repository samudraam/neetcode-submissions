class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
      let left = 0;
      let right = s.length-1;
      let dupe = 0;

      while (left < right){
        dupe = s[left];
        s[left]= s[right];
        s[right] = dupe;
        left++;
        right--;
      }
      return s;
    }
}