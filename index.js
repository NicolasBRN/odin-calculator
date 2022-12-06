// crear funcion que permita usar los operadores basicos + - / *

function operate (firstValue, secondValue, operator) {
    switch (operator) {
        case "+": return firstValue + secondValue;
        case "-": return firstValue - secondValue;
        case "*": return firstValue * secondValue;
        case "/": return firstValue / secondValue;
    }
}

// al usar los numeros, que se vean en el display
const display = document.getElementById("display")
const numbers = document.querySelectorAll(".numbers")
numbers.forEach(function (number) {
    number.addEventListener('click', function () {
        display.value += number.textContent;
        value += number.textContent;
    }
)})
    
const clean = document.getElementById("clean")
    clean.addEventListener('click', function () {
        display.value = "";
        value = 0;
        operator = "";
        firstValue = undefined;
        secondValue;
})

let value = 0;
let operator = "";
let firstValue;
let secondValue;


const operators = document.querySelectorAll(".operators");
operators.forEach(function (op) {
    op.addEventListener('click', function () {
        if (firstValue === undefined) {
            operator = op.textContent;
            firstValue = value;
            value = 0;
            display.value += op.textContent;
        } 
        else if (value === 0) {
            value = firstValue;
            operator = op.textContent;
            display.value = firstValue + op.textContent;
            value = 0;
            return;
        }
        else {
            display.value = "";
            secondValue = value;
            value = 0;
            firstValue = operate(+firstValue, +secondValue, operator);
            operator = op.textContent;
            console.log(firstValue)
            display.value = firstValue + operator;
        }
    })
})

const equal = document.querySelector("#equal");
equal.addEventListener('click', function () {

    if (firstValue === undefined) {
        display.value = "ERROR";
    }
    else {
        secondValue = value;
        value = 0;
        firstValue = operate(+firstValue, +secondValue, operator);
        display.value = firstValue;
        secondValue = 0;
    }
})

// poder combinar los operadores al realizar la operacion
