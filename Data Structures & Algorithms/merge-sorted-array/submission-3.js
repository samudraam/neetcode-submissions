
class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
      //position of last element in nums1
      let f = m - 1;
      //position of last element in nums2
      let s = n -1 ; 

      for (let i = nums1.length - 1; i >= 0; i--){
        if (s >= 0 && (f < 0 || nums1[f]< nums2[s])){
            nums1[i] = nums2[s];
            s--;
        }
        else {
            nums1[i] = nums1[f];
            f--;
        }
      }
    }
}