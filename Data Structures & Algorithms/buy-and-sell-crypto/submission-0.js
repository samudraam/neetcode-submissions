class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;
        while(right < prices.length){
            //assume left is the day we buy 
            if (prices[left] < prices[right]){
                let profit = prices[right]-prices[left];
                maxProfit = Math.max(maxProfit, profit);
            }
            else{
                left = right;
            }
            right++;
        }
        return maxProfit;
    }
}
