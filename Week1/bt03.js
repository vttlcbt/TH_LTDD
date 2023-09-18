var avgPoints = function(p1, p2, p3){
    var point = (p1 + p2 + p3) / 3;
    return point.toFixed(2);
};


var rs = function(dolphineAvg, koalasAvg){
    if ( dolphineAvg > koalasAvg && dolphineAvg >= 100){
        console.log("Team Dolphine thắng!");
    }
    else if ( koalasAvg > dolphineAvg && koalasAvg >= 100){
        console.log("Team Koalas thắng!");
    }
    else if ( dolphineAvg == koalasAvg 
                && dolphineAvg >= 100 && koalasAvg >= 100){
        console.log("Hoà nhau!");
    }
    else{
        console.log("Không team nào chiến thắng!");
    }
};

console.log("Test data 1: ");
var dolphineAvg1 = avgPoints(96, 108, 89);
var koalasAvg1 = avgPoints(88, 91, 110);
console.log("Dolphine: " + dolphineAvg1);
console.log("Koalas: " + koalasAvg1);
rs(dolphineAvg1, koalasAvg1);

console.log("Test data 2: ");
var dolphineAvg2 = avgPoints(97, 112, 101);
var koalasAvg2 = avgPoints(109, 95, 123);
console.log("Dolphine: " + dolphineAvg2);
console.log("Koalas: " + koalasAvg2);
rs(dolphineAvg2, koalasAvg2);


console.log("Test data 3: ");
var dolphineAvg3 = avgPoints(97, 112, 101);
var koalasAvg3 = avgPoints(109, 95, 106);
console.log("Dolphine: " + dolphineAvg3);
console.log("Koalas: " + koalasAvg3);
rs(dolphineAvg3, koalasAvg3);



