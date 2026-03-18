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

//operate takes 2 numbers and operator then calls the right function 
const operate = function(operandOne, sym, operandTwo){
    const operators = [["+", "add"], ["-", "subtract"], ["/", "divide"], ["*", "multiply"], ["**", "power"], ["!", "factorial"]];
    for(let operator of operators){
        if(operator[0] == sym){
            return window[operator[1]](operandOne, operandTwo)
        }
    }
    return
}

const test = operate(2,"/", 5);
