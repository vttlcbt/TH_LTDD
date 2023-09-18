
var printForecast = function (arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        temp.push( arr[i] + '°C in ' + (i + 1) + ' days...');
    }
    console.log(temp.join(' '));
};

var data1 = [17, 21, 23];
var data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);