
let output = 'car';
document.getElementById('big-screen').innerHTML = output;

let clear = document.querySelector('#clear');

clear.addEventListener('click', function(e) {
    output = '';
    document.getElementById('big-screen').innerHTML = output;
});

let one = document.querySelector('#one');

one.addEventListener('click', function(e) {
    output += '1';
    document.getElementById('big-screen').innerHTML = output;
});

let two = document.querySelector('#two');

two.addEventListener('click', function(e) {
    output += '2';
    document.getElementById('big-screen').innerHTML = output;
});

let three = document.querySelector('#three');

three.addEventListener('click', function(e) {
    output += '3';
    document.getElementById('big-screen').innerHTML = output;
});

let four = document.querySelector('#four');

four.addEventListener('click', function(e) {
    output += '4';
    document.getElementById('big-screen').innerHTML = output;
});

let five = document.querySelector('#five');

five.addEventListener('click', function(e) {
    output += '5';
    document.getElementById('big-screen').innerHTML = output;
});

let six = document.querySelector('#six');

six.addEventListener('click', function(e) {
    output += '6';
    document.getElementById('big-screen').innerHTML = output;
});

let seven = document.querySelector('#seven');

seven.addEventListener('click', function(e) {
    output += '7';
    document.getElementById('big-screen').innerHTML = output;
});

let eight = document.querySelector('#eight');

eight.addEventListener('click', function(e) {
    output += '8';
    document.getElementById('big-screen').innerHTML = output;
});

let nine = document.querySelector('#nine');

nine.addEventListener('click', function(e) {
    output += '9';
    document.getElementById('big-screen').innerHTML = output;
});











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