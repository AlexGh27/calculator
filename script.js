
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
    smallScreenOutput += bigScreenOutput;
    bigScreenOutput = '';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
    document.getElementById('small-screen').innerHTML = smallScreenOutput;
});

let minus = document.querySelector('#minus');

minus.addEventListener('click', function(e) {
    bigScreenOutput += ' - ';
    smallScreenOutput += bigScreenOutput;
    bigScreenOutput = '';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
    document.getElementById('small-screen').innerHTML = smallScreenOutput;
});

let multiply = document.querySelector('#multiply');

multiply.addEventListener('click', function(e) {
    bigScreenOutput += ' x ';
    smallScreenOutput += bigScreenOutput;
    bigScreenOutput = '';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
    document.getElementById('small-screen').innerHTML = smallScreenOutput;
});

let divide = document.querySelector('#divide');

divide.addEventListener('click', function(e) {
    bigScreenOutput += ' ÷ ';
    smallScreenOutput += bigScreenOutput;
    bigScreenOutput = '';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
    document.getElementById('small-screen').innerHTML = smallScreenOutput;
});

let percentage = document.querySelector('#percentage');

percentage.addEventListener('click', function(e) {
    bigScreenOutput += ' % ';
    smallScreenOutput += bigScreenOutput;
    bigScreenOutput = '';
    document.getElementById('big-screen').innerHTML = bigScreenOutput;
    document.getElementById('small-screen').innerHTML = smallScreenOutput;
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
function operate (firstNumber, secondNumber) {
    //Sum

        let smallScreenArray = smallScreenOutput.split(' ');
        console.log(smallScreenArray);

        while(smallScreenArray.length > 3) {
            if (smallScreenArray[1] == '+') {
                smallScreenArray[2] = Number(smallScreenArray[0]) + Number(smallScreenArray[2]) 
                smallScreenArray.shift();
                smallScreenArray.shift();
            }
        }

        if(smallScreenArray.length == 3 && smallScreenArray[1] == '+') {
            smallScreenArray[0] += Number(bigScreenOutput);
        }
        bigScreenOutput = smallScreenArray[0];
        console.log(smallScreenArray);
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = ''
        document.getElementById('small-screen').innerHTML = smallScreenOutput;


    //Subtraction
    if (smallScreenOutput.includes(' - ')) {
        subtract();
    }

    //Multiplication
    if (smallScreenOutput.includes(' x ')) {
        multi();
    }

    //Division
    if (smallScreenOutput.includes(' ÷ ')) {
        division();
    }
    
    //Percentage
    if (smallScreenOutput.includes(' % ')) {
        percent();  
    }
}

function add() {
    let firstNumberArray = smallScreenOutput.split(' + ', smallScreenOutput.length - 1);
        let firstNumber = 0;
        for (let i = 0; i < firstNumberArray.length - 1; i++) {
            firstNumber += Number(firstNumberArray[i]);
        }
        let secondNumber = bigScreenOutput;
        bigScreenOutput = Number(firstNumber) + Number(secondNumber);
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
}

function subtract() {
    let smallScreenArray = smallScreenOutput.split(' - ', smallScreenOutput.length - 1);
        let firstNumber = smallScreenArray[0];
        let secondNumber = 0;
        for (let i = 1; i < smallScreenArray.length - 1; i++) {
            secondNumber -= smallScreenArray[i];
        }
        secondNumber -= bigScreenOutput;
        bigScreenOutput = Number(firstNumber) + Number(secondNumber);
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
}

function multi() {
    let firstNumberArray = smallScreenOutput.split(' x ', smallScreenOutput.length - 1);
        let firstNumber = 1;
        for (let i = 0; i < firstNumberArray.length - 1; i++) {
            firstNumber *= Number(firstNumberArray[i]);
        }
        let secondNumber = bigScreenOutput;
        bigScreenOutput = Number(firstNumber) * Number(secondNumber);
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
}

function division() {
    let smallScreenArray = smallScreenOutput.split(' ÷ ', smallScreenOutput.length - 1);
        let result = smallScreenArray[0];
        
        for (let i = 1; i < smallScreenArray.length - 1; i++) {
            result = result / Number(smallScreenArray[i]);
        }
        result = result / bigScreenOutput;
        bigScreenOutput = result;
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
}

function percent() {
    let smallScreenArray = smallScreenOutput.split(' % ', smallScreenOutput.length - 1);
        let result = smallScreenArray[0];
        if (bigScreenOutput == '') {
            result = result / 100;
        }
        else {
            for (let i = 1; i < smallScreenArray.length - 1; i++) {
                result = (result / 100) * Number(smallScreenArray[i]);
            }
        }
        result = (result / 100) * bigScreenOutput;
        bigScreenOutput = result;
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
}
