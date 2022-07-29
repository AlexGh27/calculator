
let output = '';
document.getElementById('big-screen').innerHTML = output;

let clear = document.querySelector('#clear');

clear.addEventListener('click', function(e) {
    output = '';
    document.getElementById('big-screen').innerHTML = output;
});

let zerp = document.querySelector('#zero');

zero.addEventListener('click', function(e) {
    output += '0';
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

let dot = document.querySelector('#dot');

dot.addEventListener('click', function(e) {
    output += '.';
    document.getElementById('big-screen').innerHTML = output;
});

let plus = document.querySelector('#plus');

plus.addEventListener('click', function(e) {
    output += ' + ';
    document.getElementById('big-screen').innerHTML = output;
});

let minus = document.querySelector('#minus');

minus.addEventListener('click', function(e) {
    output += ' - ';
    document.getElementById('big-screen').innerHTML = output;
});

let multiply = document.querySelector('#multiply');

multiply.addEventListener('click', function(e) {
    output += ' x ';
    document.getElementById('big-screen').innerHTML = output;
});

let divide = document.querySelector('#divide');

divide.addEventListener('click', function(e) {
    output += ' ÷ ';
    document.getElementById('big-screen').innerHTML = output;
});

let percentage = document.querySelector('#percentage');

percentage.addEventListener('click', function(e) {
    output += ' % ';
    document.getElementById('big-screen').innerHTML = output;
});

let equal = document.querySelector('#equal');

equal.addEventListener('click', function(e) {
    operate(output);
});


function operate (output) {
    if (output.includes('x')) {
        let newOutput = output.replace(/x/g, '*')
    }

    else if (output.includes('÷')) {
        let newOutput = output.replace(/÷/g, '/')
    }
    else {
        let newOutput = output;
    }

    Math.floor(newOutput);

    let result = newOutput;

    document.getElementById('small-screen').innerHTML = newOutput;
    
}

