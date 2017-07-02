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