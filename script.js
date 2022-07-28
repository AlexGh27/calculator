
let output = 'car';
document.getElementById('big-screen').innerHTML = output;

let clear = document.querySelector('#clear');

clear.addEventListener('click', function(e) {
    output = '';
    document.getElementById('big-screen').innerHTML = output;
})


function operate (a, o, b) {

    if (o === '+') {
        return a + b;
    }
    else if (o === '-') {
        return a - b;
    }
    else if (o === '*') {
        return a * b;
    }
    else if (o === '/') {
        return a / b;
    }
}

document.getElementById('big-screen').innerHTML = output;