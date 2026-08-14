public class Solution {
    public bool hasDuplicate(int[] nums) {
        //what if length is only 1 or less
        if (nums.Length < 2){
            return false;
        }

        //hashmap
        HashSet<int> seen = new HashSet<int>();

        for (int i = 0; i < nums.Length; i++){
            if(seen.Contains(nums[i])){
                return true;
            }
            else{
                seen.Add(nums[i]);
            }
        }

        return false;
        
    }
}