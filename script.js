
let bigScreenOutput = '';

document.getElementById('big-screen').innerHTML = bigScreenOutput;


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
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
});




//Defining the equal sign button function
function operate () {
    //Sum

        let bigSreenArray = bigScreenOutput.split(' ');

        while(bigSreenArray.length > 3) {
            if (bigSreenArray[1] == '+') {
                bigSreenArray[2] = Number(bigSreenArray[0]) + Number(bigSreenArray[2]) 
                bigSreenArray.shift();
                bigSreenArray.shift();
            }

            else if (bigSreenArray[1] == '-') {
                bigSreenArray[2] = Number(bigSreenArray[0]) - Number(bigSreenArray[2])
                bigSreenArray.shift();
                bigSreenArray.shift();
            }

            else if (bigSreenArray[1] == 'x') {
                bigSreenArray[2] = Number(bigSreenArray[0]) * Number(bigSreenArray[2])
                bigSreenArray.shift();
                bigSreenArray.shift();
            }

            else if (bigSreenArray[1] == '÷') {
                bigSreenArray[2] = Number(bigSreenArray[0]) / Number(bigSreenArray[2])
                bigSreenArray.shift();
                bigSreenArray.shift();
            }

            else if (bigSreenArray[1] == '%') {
                bigSreenArray[2] = (Number(bigSreenArray[0]) / 100) * Number(bigSreenArray[2])
                bigSreenArray.shift();
                bigSreenArray.shift();
            }

        }

        if(bigSreenArray.length <= 3 && bigSreenArray[1] === '+') {
            bigScreenOutput = Number(bigSreenArray[0]) + Number(bigSreenArray[2]);
            document.getElementById('big-screen').innerHTML = bigScreenOutput;
        }

        else if(bigSreenArray.length <= 3 && bigSreenArray[1] === '-') {
            bigScreenOutput = Number(bigSreenArray[0]) - Number(bigSreenArray[2]);
            document.getElementById('big-screen').innerHTML = bigScreenOutput;
        }

        else if(bigSreenArray.length <= 3 && bigSreenArray[1] === 'x') {
            bigScreenOutput = Number(bigSreenArray[0]) * Number(bigSreenArray[2]);
            document.getElementById('big-screen').innerHTML = bigScreenOutput;
        }

        else if(bigSreenArray.length <= 3 && bigSreenArray[1] === '÷') {
            bigScreenOutput = Number(bigSreenArray[0]) / Number(bigSreenArray[2]);
            if (bigSreenArray[2] === '0') {
                bigScreenOutput = 'Sorry, you tried to divide by 0 and the calculator doesn\'t like it';
            }
            document.getElementById('big-screen').innerHTML = bigScreenOutput;
        }

        else if(bigSreenArray.length <= 3 && bigSreenArray[1] === '%') {
            if (bigSreenArray[2] === '') {
                bigScreenOutput = Number(bigSreenArray[0]) / 100;
                
            }
            else {
                bigScreenOutput = (Number(bigSreenArray[0]) / 100) * Number(bigSreenArray[2]);
            }
            document.getElementById('big-screen').innerHTML = bigScreenOutput;
        }
    }



