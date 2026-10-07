class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const numsSet = new Set();
        //O(N)
        nums.forEach((n)=>{
            if (!numsSet.has(n)){
                numsSet.add(n);
            }
        })
        
        //O(n log n)
        const sortedSet = [...numsSet].sort((a, b) => a - b);
        console.log(sortedSet);

        let numConsecutive = 1; 
        let bestRun = 0

        for (let i = 0; i < sortedSet.length-1; i++){
            if (sortedSet[i+1] === sortedSet[i]+1){
                numConsecutive++;
            }
            else{
                //save last run;
                bestRun = Math.max(bestRun, numConsecutive);

                numConsecutive = 1; 
            }
        }
        return Math.max(bestRun, numConsecutive);
        
    }
}


