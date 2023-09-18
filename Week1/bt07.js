var calcBMI = function(obj) {
    return (obj.mass / obj.height ** 2).toFixed(2);
}

var Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

}
var John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
}

console.log(Mark);
console.log(John);

var bmiMark = calcBMI(Mark);
var bmiJohn = calcBMI(John);
console.log(bmiMark);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI (" + bmiMark + ") is higher than John's BMI (" + bmiJohn + ")");
} 
else if (bmiJohn > bmiMark) {
    console.log("John's BMI (" + bmiJohn + ") is higher than Mark's BMI (" + bmiMark + ")");
}
else {
    console.log("John's BMI (" + bmiJohn + ") and Mark's BMI (" + bmiMark + ") Same BMI");
}



