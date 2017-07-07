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