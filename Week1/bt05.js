var calcAverage = function(p1, p2, p3){
    var point = (p1 + p2 + p3) / 3;
    return point.toFixed(2);
};


var checkWinner = function(avgDolhins, avgKoalas){
    if (avgDolhins >= (avgKoalas * 2)){
        console.log('Dolhin thắng ' + '(' + avgDolhins + ' vs ' + avgKoalas + ')' );
    }
    else if (avgKoalas >= (avgDolhins* 2)){
        console.log('Koala thắng ' + '(' + avgKoalas + ' vs ' + avgDolhins + ')' );
    }
    else{
        console.log('Không đội nào chiến thắng!')
    }
};

console.log('Test Data 1: ');
var avgDolhins = calcAverage(44, 23, 71);
var avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolhins, avgKoalas);

console.log('Test Data 2: ');
var avgDolhins2 = calcAverage(85, 54, 41);
var avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolhins2, avgKoalas2);

console.log('Test Data: ');
var avgDolhins3 = calcAverage(16, 54, 1);
var avgKoalas3 = calcAverage(25, 85, 106);
checkWinner(avgDolhins3, avgKoalas3);


