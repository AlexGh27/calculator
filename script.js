
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
    bigScreenOutput += '';
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
function operate () {
    //Sum
    if (smallScreenOutput.includes(' + ')) {
        let firstNumberArray = smallScreenOutput.split(' + ', smallScreenOutput.length - 1);
        let firstNumber = 0;
        console.log(firstNumberArray);
        for (let i = 0; i < firstNumberArray.length - 1; i++) {
            firstNumber += Number(firstNumberArray[i]);
        }
        let secondNumber = bigScreenOutput;
        bigScreenOutput = Number(firstNumber) + Number(secondNumber);
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
    }

    //Subtraction
    if (smallScreenOutput.includes(' - ')) {
        let smallScreenArray = smallScreenOutput.split(' - ', smallScreenOutput.length - 1);
        let firstNumber = smallScreenArray[0];
        let secondNumber = 0;
        console.log(smallScreenArray);
        for (let i = 1; i < smallScreenArray.length - 1; i++) {
            secondNumber -= smallScreenArray[i];
        }
        secondNumber -= bigScreenOutput;
        console.log(secondNumber);
        bigScreenOutput = Number(firstNumber) + Number(secondNumber);
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
    }

    //Multiplication
    if (smallScreenOutput.includes(' x ')) {
        let firstNumberArray = smallScreenOutput.split(' x ', smallScreenOutput.length - 1);
        let firstNumber = 1;
        console.log(firstNumberArray);
        for (let i = 0; i < firstNumberArray.length - 1; i++) {
            firstNumber *= Number(firstNumberArray[i]);
        }
        let secondNumber = bigScreenOutput;
        bigScreenOutput = Number(firstNumber) * Number(secondNumber);
        document.getElementById('big-screen').innerHTML = bigScreenOutput;
        smallScreenOutput = '';
        document.getElementById('small-screen').innerHTML = smallScreenOutput;
    }






    //Division
    if (smallScreenOutput.includes(' ÷ ')) {
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




    
    
    //Percentage
    if (bigScreenOutput.includes('%')) {
        let arrayOutput = bigScreenOutput.split('%');
        if (arrayOutput[1] == ' ') {
            arrayOutput[1] = 1;
        }
        let newOutput = Number(arrayOutput[0]) / 100 * Number(arrayOutput[1]);
        document.getElementById('big-screen').innerHTML = newOutput;
        bigScreenOutput = newOutput;
        
    }

}

