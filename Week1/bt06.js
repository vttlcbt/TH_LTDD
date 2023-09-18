var calcTip = function (bill) {
    return rsTip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
};

console.log("Test Data 1: ");
console.log("Hoá đơn 100, tips = " + calcTip(100));
console.log("Hoá đơn 10, tips = " + calcTip(10));

var calcTips = function (bills) {
    var tips = [];
    for (var i = 0; i < bills.length; i++) {
       tips[i] = calcTip(bills[i]);
    }
    return tips;
};

var bills = [125, 555, 44];
var tips = calcTips(bills);
console.log("Test Data 2: ");
console.log("DS Hoá đơn: " + bills);
console.log("DS Tips: " + tips);


