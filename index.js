function add (a, b) {
    return +a + +b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}

function operate (a, b, operator) {
    switch (operator) {
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
    }
}

const display = document.getElementById("display")

const numbers = document.querySelectorAll(".numbers")
numbers.forEach(function (number) {
    number.addEventListener('click', function () {
        display.value += number.textContent;
        if (autoclean === 1) {
            display.value = "";
            display.value = number.textContent;
            autoclean--;
        }
    })
})

const clean = document.getElementById("clean")
clean.addEventListener('click', function () {
    display.value = "";
})

let operator;
let a = 0;
let b = 0;
let click = 0;
let autoclean = 0;

const operators = document.querySelectorAll(".operators")
operators.forEach(function (oper) {
    oper.addEventListener('click', function () {
        click++;
        operator = oper.textContent;
        oneOrMoreOperations();
    })
})

function oneOrMoreOperations () {
    if (click >= 2) {
        a = operate(a, display.value,operator);
        display.value = "";
        display.value = a
        autoclean++;
    }

    else {
        a = display.value;
        display.value = "";
    }

}

const equal = document.getElementById("equal")
equal.addEventListener('click', function() {
    b = display.value;
    display.value = operate(a, b, operator);
})

