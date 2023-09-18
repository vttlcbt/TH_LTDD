var bmi = function(mass, height) {
    return rs = mass / height ** 2;
}

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.76;

console.log("Test Data 1");
bmiMark = bmi(massMark, heightMark);
bmiJohn = bmi(massJohn, heightJohn);

var markHigherBMI = function(bmiMark, bmiJohn) {
    if (bmiMark > bmiJohn)
        return console.log("Mark's BM(", bmiMark.toFixed(2), ") is higher than John's!(", bmiJohn.toFixed(2), ")");;
    return console.log("John's BMI(", bmiJohn.toFixed(2), ") is higher than Mark's!(", bmiMark.toFixed(2), ")");;
}
markHigherBMI(bmiMark, bmiJohn);

console.log("Test Data 2");

massMark1 = 95;
heightMark1 = 1.88;

massJohn1 = 85;
heightJohn1 = 1.76;

bmiMark2 = bmi(massMark1, heightMark1);
bmiJohn2 = bmi(massJohn1, heightJohn1);
markHigherBMI(bmiMark2, bmiJohn2);