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

function asynchronousProcessing () {
    var arr = [1, 2, 3, 4, 5, 6];

    arr.forEach(function (i) {
        setTimeout(function () {
            console.log(i)
        }, 0, i)
    })
}

asynchronousProcessing ();

(function() {
    var a = b;
    var b = 5;

    console.log(b);
})();

function findElem (elem, arr) {
    var n = arr.length;
    var i = 0;

    while (arr[i] != elem && i < n) i++;

    if (i >= n) {
        console.log('Not found');
    } else {
        console.log([i]);
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 19, 9, 16, 15, 65, 0];

findElem ( 4, arr );

function getButtonName () {
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    var btnIndex;

    for (btnIndex = 0; btnIndex < prizes.length; btnIndex++) {
        (function (){
            var index = btnIndex;
            document.getElementById('btn-' + btnIndex).onclick = function () {
            console.log(prizes[index]);
            };
        })();
    }
}

getButtonName ();

var click = document.getElementById('button');

click.addEventListener('click', addTextInput);

function addTextInput () {
    var text = 'Hello World!';

    document.getElementById('text').value = text;
}

var click = document.getElementById('button2');

click.addEventListener('click', swapInput);

function swapInput () {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var input1Value = input1.value;
    var input2Value = input2.value;
    input1.value = input2Value;
    input2.value = input1Value;
}

var click = document.getElementById('button2');

click.addEventListener('click', dyeInput);

function dyeInput () {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');

    input1.style.color = 'red';
    input2.style.color = 'blue';
}

var click = document.getElementById('button3');

click.addEventListener('click', addInput);

function addInput () {
    var parentElem = document.body;
    var newInput = document.createElement('input');

    parentElem.appendChild(newInput);
}

var inputBlur = document.getElementById('input3');

inputBlur.onblur = function() {
    var valueInput = document.getElementById('input3').value;

    console.log (valueInput);
};

window.onload = function() {
    var elements = {
        prev: document.getElementById('prev'),
        current: document.getElementById('current'),
        next: document.getElementById('next')
    };

    var events = {
        prev: function () {
            console.log('prev');
        },

        current: function () {
            console.log('current');
        },

        next: function () {
            console.log('next');
        }
    };

    var key;
    var click;

    for (key in events) {
        for (key in elements) {
            click = elements[key];
            click.addEventListener('click', events[key]);
        }
    }
};

var arr = [1, 2, 3, 4, 5];
var i = 0;

function recurciveFunction(arr) {
    console.log(arr[i]);
    i++;

    if (i < arr.length) {
        recurciveFunction(arr);
    }
}

recurciveFunction(arr);

function makeString() {
    var arr = ['Hello', 'world', '!'];
    var str = arr.join(' ');

    console.log (str);
}

makeString();

function findElem (elem, arr) {
    var n = arr.length;
    var i = 0;

    while (arr[i] != elem && i < n) i++;

    if (i >= n) {
        console.log('Not found');
    } else {
        console.log('Present');
    }
}

var arr = [1, 2, 5, 9, 4, 13, 4, 10];

findElem ( 4, arr );

function getNumberfromArray (arr1, arr2) {
    var overlap;
    var ln1 = arr1.length;
    var ln2 = arr2.length;
    var i;
    var j;
	var notfound = false;

    for (i = 0; i < ln1; ++i) {
        overlap = arr1[i];
        for (j = 0; j < ln2; ++j) {
            if (overlap === arr2[j]) {
				console.log('found: ' + overlap);
                notfound = true;
		    } 
		} 
	}
	if (notfound === false) {
        console.log ('Not found');
    }
}

var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [2, 4, 3, 7, 8];

getNumberfromArray ( arr1, arr2 );