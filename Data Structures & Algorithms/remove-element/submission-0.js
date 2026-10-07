class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let write = 0;
        for (let read = 0; read < nums.length; read++){
            if (nums[read]!==val){
                //swap 
                const temp = nums[write];
                nums[write] = nums[read];
                nums[read] = temp;
                write++;
            }
            
        }
        return write;
    }
}