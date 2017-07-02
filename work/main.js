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

var i = 0;

while (i < 50) {
    console.log( i + 1 );
    i++;
}

var i;

for (i = 0; i < 50; i++) {
    console.log( i + 1 );
}

