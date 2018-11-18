// task one - 1

var ua = 26;

function convertToUa() {
    var usa = document.getElementById('convert').value;
    result = usa * ua;
    document.getElementById("res").innerHTML = "Your money ua:" + "  " + result;
}

function convertToUsd() {
    var usa = document.getElementById('converttwo').value;
    result = usa / ua;
    document.getElementById("res").innerHTML = "Your money usa:" + "  " + result;
}

// task one - 2

var given = [1, 23, -5, 11];

function findMinMax(arr) {
    document.getElementById("result").innerHTML = "max " + Math.max(...arr) + ", min " + Math.min(...arr);
}

findMinMax(given)

// task one - 3 

var elmt = [1, 4, 2];

function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
        var avg = sum / arr.length;

        document.getElementById('res2').innerHTML = "Сума:" + ' ' + sum + "<br> Cереднє значення:" + " " + avg.toFixed(2);
    }
}

average(elmt);

// task two

function recursion(n) {
    if (n >= 1) {
        document.write(' ' + (n));
        recursion(n - 1);
    }
}
recursion(10)

