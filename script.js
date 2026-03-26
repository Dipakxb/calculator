window.add = function(a, b) {
    return a + b;
};

window.subtract = function(a, b) {
	return a - b;
};

window.multiply = function(a, b) {
    return a * b;
};

window.divide = function(a, b) {
    return a / b;
};

window.power = function(base, exponent) {
	return base ** exponent;
};

window.factorial = function(num) {
    if(num == 0){
        return 1;
    }
        for(let i = num -1 ; i >= 1; i--) {
        num = (num * i);
    }
    return num;
};

let operandOne = '';
let operator;
let operandTwo = '';

//operate takes 2 numbers and operator then calls the right function 
const operate = function(operandOne, sym, operandTwo){
    const operators = [["+", "add"], ["-", "subtract"], ["÷", "divide"], ["×", "multiply"], ["**", "power"], ["!", "factorial"]];
    for(let operator of operators){
        if(operator[0] == sym){
            return window[operator[1]](parseFloat(operandOne), parseFloat(operandTwo))
        }
    }
    return
}

//keys for calculators
const keys = document.querySelector('.keys');
const keyArr = [['C','clear'], ['%', 'percent'], ["←", 'back'],
                ['÷', 'divide'], 7, 8, 9, ['×', 'multiply'], 4, 5, 6, ['-', 'subtract'], 1, 2, 3, ['+', 'add'],
                ['00', '00' ], 0, ['.', 'decimal'], ['=', 'equal']];
for(let key of keyArr){
    let button = document.createElement('div');
    if(typeof(key) == 'object'){
        button.className = `${key[1]}-button`
        button.innerText = `${key[0]}`;
    }else{
        button.className = `button-${key}`
        button.innerText = `${key}`;
    }
    keys.appendChild(button);
}

let isOperatorPressed = false;
//function to update number variable
keys.addEventListener('click', (e)=> {
    const nums = ['1','2','3','4','5','6','7','8','9','0','00'];
    const operatorArr = ['+', '-', '×', '÷', '%', '='];
    const keyValue = e.target.innerText;
    let display = document.querySelector('.display');

    if(operatorArr.includes(keyValue)){
        if(isOperatorPressed){
            if(operandTwo.length > 0){
                operandOne = operate(operandOne, operator, operandTwo);
                operandTwo = '';
                keyValue == '=' ? isOperatorPressed = false : operator = keyValue;
            }
            display.innerHTML = operandOne;
        }
        if(operandOne.length > 0){
            isOperatorPressed = true;
            operator = keyValue;
        }
        keyValue == '=' ? false : display.innerHTML += keyValue;
    }
    
    if(nums.includes(keyValue)){
        if(isOperatorPressed){
            operandTwo += keyValue;
            display.innerHTML += keyValue;
        }else {
            operandOne += keyValue;
            display.innerHTML += keyValue;
        }
    }
})