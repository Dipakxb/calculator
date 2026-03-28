const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    },

    power(base, exponent) {
        return base ** exponent;
    },

    factorial(num) {
        if(num == 0){
            return 1;
        }
            for(let i = num -1 ; i >= 1; i--) {
            num = (num * i);
        }
        return num;
    }
}

let operandOne = '';
let operator = '';
let operandTwo = '';

//operate takes 2 numbers and operator then calls the right function 
const operate = function(operandOne, sym, operandTwo){
    const operators = [["+", "add"], ["-", "subtract"], ["÷", "divide"], ["×", "multiply"], ["**", "power"], ["!", "factorial"]];
    for(let operator of operators){
        if(operator[0] == sym){
            return calculator[operator[1]](parseFloat(operandOne), parseFloat(operandTwo)).toFixed();
        }
    }
    return '';
}

//keys for calculators
const keys = document.querySelector('.keys');
const keyArr = [['C','clear'], ['%', 'percent'], ["←", 'back'],
                ['÷', 'divide'], 7, 8, 9, ['×', 'multiply'], 4, 5, 6, ['-', 'subtract'], 1, 2, 3, ['+', 'add'],
                ['00', '00' ], 0, ['.', 'decimal'], ['=', 'equal']];
for(let key of keyArr){
    let button = document.createElement('div');
    if(typeof(key) == 'object'){
        button.className = `${key[1]}-button`;
        button.innerText = `${key[0]}`;
    }else{
        button.className = `button-${key}`;
        button.innerText = `${key}`;
    }
    keys.appendChild(button);
}

let isOperatorPressed = false;
const display = document.querySelector('.display');
//function to update number variable
keys.addEventListener('click', (e)=> {
    const nums = ['1','2','3','4','5','6','7','8','9','0','00', '.'];
    const operatorArr = ['+', '-', '×', '÷', '%', '='];
    const keyValue = e.target.innerText;
    
    keyValue == 'C' ? clear() : '';
    if(operatorArr.includes(keyValue)){
        if(isOperatorPressed){
            if(operandTwo.length > 0){
                operandOne = operate(operandOne, operator, operandTwo);
                operandTwo = '';
                keyValue == '=' ? isOperatorPressed = false : operator = keyValue;
            }
            display.innerText = operandOne;
        }
        if(operandOne.length > 0){
            isOperatorPressed = true;
            if(keyValue == '='){
                isOperatorPressed = false;
            }else {
                display.innerText += keyValue;
            }    
            operator = keyValue;
        }
    }
    
    if(nums.includes(keyValue)){
        if(isOperatorPressed){
            operandTwo += keyValue;
            display.innerText += keyValue;
        }else {
            operator == '=' ? clear() : '';
            operandOne += keyValue;
            display.innerText += keyValue;
        }
    }
})

const clear = function(){
    operandOne = '';
    operator = '';
    operandTwo = '';
    display.innerText = '';
    isOperatorPressed = false;
}