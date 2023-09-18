var calcTip = function (bill) {
    return rsTip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
};


var calcTips = function (bills) {
    var tips = [];
    var totals = [];
    for (var i = 0; i < bills.length; i++) {
        tips.push(calcTip(bills[i]));
        totals.push(bills[i] + tips[i]);
    }
    return { tips, totals };
};

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var { tips, totals } = calcTips(bills);
console.log("Test Data: ");
console.log("DS Hoá đơn: " + bills);
console.log("DS Tips: " + tips);
console.log("DS Totals: " + totals);