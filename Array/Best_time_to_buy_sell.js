//121. Best Time to Buy and Sell Stock.
let prices = [7,1,5,3,6,4];
function MaxProfit(prices){
    let minPrice=prices[0];
    let maxProfit=0;
    for(let i=1;i<prices.length;i++){
        let profit=prices[i]-minPrice;

        maxProfit=Math.max(profit,maxProfit);

        minPrice=Math.min(minPrice,prices[i]);

    }
    return maxProfit;
}
console.log(MaxProfit(prices));