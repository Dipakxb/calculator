const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
    if(arr.length === 0){
        return 0;
    }
        return arr.reduce((Current, total) => {
        return total += Current;
    }, 0)
};

const multiply = function(arr) {
    return arr.reduce((Current, total) => {
        return total *= Current;
    }, 1)
};

const divide = function(arr) {
    return arr.reduce((Current, total) => {
        return total /= Current;
    }, 1)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
    if(num == 0){
        return 1;
    }
        for(let i = num -1 ; i >= 1; i--) {
        num = (num * i);
    }
    return num;
};

const test = divide([2,1]);