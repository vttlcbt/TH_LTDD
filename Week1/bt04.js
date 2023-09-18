
var calTips = function (bill) {
    return tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
};

console.log("Hoá đơn 275, tổng = " + (275 + calTips(275)) +"; tips = " + calTips(275));
console.log("Hoá đơn 40, tổng = " + (40 + calTips(40)) + "; tips = "+calTips(40));
console.log("Hoá đơn 430, tổng = " + (430 + calTips(430)) + "; tips = "+calTips(430));
