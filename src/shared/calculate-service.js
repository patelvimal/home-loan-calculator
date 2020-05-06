

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];


export const calcHomeLoan = (loanAmount,emi,interestRate,prepayment,startDate) => {
    var result=[];
    var loanBalance=loanAmount;
    var today = new Date();
    while( 0 < loanBalance) {
        var perdayInterestAmount= ((loanBalance * (interestRate/100))/365);
        var monthlyInterest = (perdayInterestAmount *30);
        loanBalance = (loanBalance-(emi-monthlyInterest) - prepayment);
        var month = monthNames[today.getMonth()];
        result.push({
            month: month , 
            year: today.getFullYear(),
            principal: (emi-monthlyInterest),
            interest:monthlyInterest,
            balance: loanBalance
        });
        today.setMonth(today.getMonth() + 1);
    }
    return result;
};

export const generateSummary = (jsonData) =>{
    var result = null;
    if (jsonData && Array.isArray(jsonData) && jsonData.length > 0) {
        const groupByYear = groupBy(jsonData,"year");
        result = [];
        Object.keys(groupByYear).map(key=>{
            result.push(groupByYear[key].reduce((a,b)=>{
                return {year: key, principal: a.principal + b.principal, interest : a.interest + b.interest }
            }))
        })
    }
    return result;
}

const groupBy = (xs, key) => {
    return xs.reduce((totalValue, currentValue) => {
        (totalValue[currentValue[key]] = totalValue[currentValue[key]] || []).push(currentValue);
        return totalValue;
    }, {});
    // return xs.reduce(function (totalValue, currentValue) {
    //     (totalValue[currentValue[key]] = totalValue[currentValue[key]] || []).push(currentValue);
    //     return totalValue;
    // }, {});
};
