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
        return b == 0 ? 'Nah! can\'t divide by Zero ' : a / b;
    },
}

let operandOne = '';
let operator = '';
let operandTwo = '';

//operate takes 2 numbers and operator then calls the right function 
const operate = function(operandOne, sym, operandTwo){
    const operators = [["+", "add"], ["-", "subtract"], ["÷", "divide"], ["×", "multiply"]];
    for(let operator of operators){
        if(operator[0] == sym){
            return calculator[operator[1]](parseFloat(operandOne), parseFloat(operandTwo));
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
        button.className = `button-${key[1]}`;
        button.innerText = `${key[0]}`;
    }else{
        button.className = `button-${key}`;
        button.innerText = `${key}`;
    }
    keys.appendChild(button);
}

let isOperatorClicked = false;
const display = document.querySelector('.display');
//function to update number variable
keys.addEventListener('click', (e)=> {
    const nums = ['1','2','3','4','5','6','7','8','9','0','00', '.', '%'];
    const operatorArr = ['+', '-', '×', '÷', '='];
    const keyValue = e.target.innerText;

    keyValue == 'C' ? clear() : '';
    if(operatorArr.includes(keyValue)){
        if(isOperatorClicked){
            if(operandTwo.length > 0){
                const result = operate(operandOne, operator, operandTwo);
                operandOne = Number.isInteger(result) || typeof(result) == 'string' ? `${result}` : result.toPrecision(2);
                operandTwo = '';
                keyValue == '=' ? isOperatorClicked = false : operator = keyValue;
            }
            display.textContent = operandOne;
        }
        if(operandOne.length > 0){
            isOperatorClicked = true;
            if(keyValue == '='){
                isOperatorClicked = false;
            }else {
                display.textContent += ` ${keyValue} `;
            }    
            operator = keyValue;
        }
    }

    if(nums.includes(keyValue)){
        if((operandOne.includes('%') || operandTwo.includes('%')) && keyValue == '%') return;
        if(isOperatorClicked){
            if(keyValue == '.' && operandTwo.includes('.')) return;
            if(operandTwo.includes('%')) return;
            operandTwo = keyValue == '%' ? `${operandTwo /= 100}` : operandTwo += keyValue;
            display.textContent = `${operandOne} ${operator} ${operandTwo}`;    
        }else {
            operator == '=' ? clear() : '';
            if(operandOne.includes('%')) return;
            if(operandOne.includes('.') && (keyValue == '.')) return;
            operandOne = keyValue == '%' ? `${operandOne /= 100}` : operandOne += keyValue;
            display.textContent = operandOne;
        }
    }
})

const clear = function(){
    operandOne = '';
    operator = '';
    operandTwo = '';
    display.textContent = '';
    isOperatorClicked = false;
}