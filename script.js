
const calculatorScreen = document.querySelector('.calculator-screen');

const clearBtn = document.querySelector('.all-clear');
const equalSign = document.querySelector('.equal-sign');
const decimal = document.querySelector('.decimal');
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let prevNumber = '';
let calculationOperator = '';
let currNumber = '0';

const updatedScreen = (number) => {
    calculatorScreen.value = number;
}

//tombol angka
const inputNumber = (number) => {
    if (currNumber === '0') {
        currNumber = number;
    } else {
        currNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updatedScreen(currNumber);
    })
})

//tombol operator
const inputOperator = (operator) => {
    prevNumber = currNumber;
    calculationOperator = operator;
    currNumber = '';

    if (calculationOperator === '') {
        prevNumber = currNumber;
    }
    calculationOperator = operator;
    currNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    })
})

//tombol sama dengan
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currNumber)
            break
        default:
            return
    }
    currNumber = result;
    calculationOperator = '';
}

equalSign.addEventListener('click', () => {
    calculate();
    updatedScreen(currNumber);
})

//tombol AC
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updatedScreen(currNumber);
})

//decimal
inputDecimal = (dot) => {
    if (currNumber.includes('.')) {
        return;
    }
    currNumber += dot;
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updatedScreen(currNumber);
})
