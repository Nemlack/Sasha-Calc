function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert('Invalid expression');
    }
}

function calculatePercentage() {
    let display = document.getElementById('display');
    let expression = display.value;

    let sign;
    if (expression.includes('+')) sign = '+';
    else if (expression.includes('-')) sign = '-';
    else {
        alert('Invalid expression for percentage calculation');
        return;
    }

    const elements = expression.split(sign);
    let result = eval(elements[0] + sign + (elements[0] * elements[1] / 100));
    display.value = result;
}

function sqrt() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(value);
}

function square() {
    let value = document.getElementById('display').value;
    document.getElementById('display').value = Math.pow(value, 2);
}

function factorial() {
    let value = parseInt(document.getElementById('display').value);
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    document.getElementById('display').value = result;
}

function changeBackground() {
    const calculator = document.querySelector('.calculator');
    calculator.style.backgroundColor = calculator.style.backgroundColor === 'red' ? '#d3d3d3' : 'red';
}

function changeDisplayColor() {
    const display = document.getElementById('display');
    display.style.backgroundColor = display.style.backgroundColor === 'yellow' ? '#ffffff' : 'yellow';
}
