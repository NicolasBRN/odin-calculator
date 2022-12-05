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
    })
})

const clean = document.getElementById("clean")
clean.addEventListener('click', function () {
    display.value = "";
})

let operator;
let a;

const operators = document.querySelectorAll(".operators")
operators.forEach(function (oper) {
    oper.addEventListener('click', function () {
        

        a = display.value;
        display.value = "";

        operator = oper.textContent
        console.log(operator)
    })
})

const equal = document.getElementById("equal")
equal.addEventListener('click', function() {
    let b = display.value;
    display.value = operate(a, b, operator);
})

