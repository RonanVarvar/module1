window.onload = function() {
    console.log('init js');
};

function pow(x, n) {
    var result;
    var x;
    var n;
    result = Math.pow(x, n);

    return result;
}

console.log( pow(2, 5) );

function comparison(a, b) {
    return (a === b);
}

console.log ( comparison (2, 2) );

function cyclewhile() {
    var i = 0;

    while (i < 50) {
        console.log(i + 1);
        i++;
    }
}

cyclewhile();

function cyclefor () {
    var i;

    for (i = 0; i < 50; i++) {
        console.log(i + 1);
    }
}

cyclefor();

function definationofCapitals () {
    var obj = {
        'Оттава': 'Канада',
        'Киев': 'Украина'
    }
    var key =  'Оттава';

    for (key in obj) {
        console.log( key + " - это " + obj[key] );
    }
}

definationofCapitals ();

function getMorebutLess() {
    var arr = [2, 5, 9, 15, 0, 4];
    var i;

    for (i = 0; i < arr.length; i++) {
       if (arr[i] < 10 && arr[i] > 3) {
            console.log(arr[i]);
       }
    }
}

getMorebutLess();

function converttoString() {
    var arr = ['я', 'учу', 'javascript', '!'];
    var str1 = arr.join('+');
    var str2 = arr.join(' ');

    console.log (str1);
    console.log (str2);
}

converttoString();

function combine() {
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3];
    var newArr = arr1.concat(arr2);

    console.log(newArr);
}

combine();

function addToEnd() {
    var arr = ['a', 'b', 'c'];
    var newArr = arr.concat(1, 2, 3);

    console.log(newArr);
}

addToEnd();
