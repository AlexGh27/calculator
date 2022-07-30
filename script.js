
let bigScreenOutput = '';
let smallScreenOutput = '';
document.getElementById('big-screen').innerHTML = bigScreenOutput;
document.getElementById('small-screen').innerHTML = smallScreenOutput;


//Defining all the functions for all the calculator's numbers
let zero = document.querySelector('#zero');

zero.addEventListener('click', function(e) {
    bigScreenOutput += '0';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let one = document.querySelector('#one');

one.addEventListener('click', function(e) {
    bigScreenOutput += '1';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let two = document.querySelector('#two');

two.addEventListener('click', function(e) {
    bigScreenOutput += '2';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let three = document.querySelector('#three');

three.addEventListener('click', function(e) {
    bigScreenOutput += '3';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let four = document.querySelector('#four');

four.addEventListener('click', function(e) {
    bigScreenOutput += '4';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let five = document.querySelector('#five');

five.addEventListener('click', function(e) {
    bigScreenOutput += '5';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let six = document.querySelector('#six');

six.addEventListener('click', function(e) {
    bigScreenOutput += '6';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let seven = document.querySelector('#seven');

seven.addEventListener('click', function(e) {
    bigScreenOutput += '7';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let eight = document.querySelector('#eight');

eight.addEventListener('click', function(e) {
    bigScreenOutput += '8';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let nine = document.querySelector('#nine');

nine.addEventListener('click', function(e) {
    bigScreenOutput += '9';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let dot = document.querySelector('#dot');

dot.addEventListener('click', function(e) {
    bigScreenOutput += '.';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let plus = document.querySelector('#plus');

plus.addEventListener('click', function(e) {
    bigScreenOutput += ' + ';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let minus = document.querySelector('#minus');

minus.addEventListener('click', function(e) {
    bigScreenOutput += ' - ';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let multiply = document.querySelector('#multiply');

multiply.addEventListener('click', function(e) {
    bigScreenOutput += ' x ';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let divide = document.querySelector('#divide');

divide.addEventListener('click', function(e) {
    bigScreenOutput += ' ÷ ';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let percentage = document.querySelector('#percentage');

percentage.addEventListener('click', function(e) {
    bigScreenOutput += ' % ';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});

let equal = document.querySelector('#equal');

equal.addEventListener('click', function(e) {
    operate(bigScreenOutput);
});

//Defining the CLEAR function
let clear = document.querySelector('#clear');

clear.addEventListener('click', function(e) {
    bigScreenOutput = '';
    smallScreenOutput = '';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
    document.getElementById('small-screen').innerHTML = smallScreenOutput;

});

//Defining the equal sign button function
function operate (bigScreenOutput) {
    let newOutput;
    if (bigScreenOutput.includes('x')) {
        newOutput = bigScreenOutput.replace(/x/g, '*')
    }

    else if (bigScreenOutput.includes('÷')) {
        newOutput = bigScreenOutput.replace(/÷/g, '/')
    }
    else {
        newOutput = bigScreenOutput;
    }

    let result = newOutput;

    Math.floor(result);

    

    document.getElementById('small-screen').innerHTML = result;
    
}

