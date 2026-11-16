class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let buy = 0;
        for (let sell = 1; sell < prices.length; sell++){
            if(prices[sell] < prices[buy]){
                buy = sell;
            }
            let current = prices[sell] - prices[buy];
            maxProfit = Math.max(maxProfit, current);
        }
        return maxProfit;
    }
}
