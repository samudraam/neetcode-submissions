
class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
      let n2 = 0;
      for (let k = m; k < nums1.length; k++){
        nums1[k] = nums2[n2];
        n2++;
      }
      nums1.sort((a,b)=> a-b);
    }
}
