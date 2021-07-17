// Operation functions

const sum = (num1, num2) => {
    return num1 + num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

const mul = (num1, num2) => {
    return num1 * num2
}

const div = (num1, num2) => {
    
    // Division by zero
    if (num2 == 0) {
         return "Cannot divide by zero"
    }
    else { 
        return num1 / num2
    } 
}

module.exports = {sum, sub, mul, div}