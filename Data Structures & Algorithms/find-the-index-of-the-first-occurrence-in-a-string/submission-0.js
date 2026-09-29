class Solution {
    strStr(haystack, needle) {
      if (haystack.length < needle.length){
        return -1;
      }
      if (haystack === "" || needle === ""){
        return 0;
      }
      
      for (let i = 0; i < haystack.length; i++){
        let sub = haystack.substring(i,i+needle.length);
        if (sub === needle){
          return i;
        }
          
      }
      return -1;
    }
}