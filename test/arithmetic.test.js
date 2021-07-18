const Calculator = require('../modules/operations')

// SUM
describe('Calculator sum unit tests', () => {
    test('Sum of two numbers', () =>{
        let num1 = 10
        let num2 = 3

        expect(Calculator.sum(num1,num2)).toBe(13)
    })

    test('Sum of two numbers equals negative number', () =>{
        let num1 = 70
        let num2 = -700

        expect(Calculator.sum(num1,num2)).toBe(-630)
    })

    test('Sum of two numbers, with negative and decimal number', () =>{
        let num1 = -70
        let num2 = 700.68795

        expect(Calculator.sum(num1,num2)).toBe(630.68795)
    })
})

// SUBTRACTION
describe('Calculator subtraction unit tests', () => {
    test('Sum of two numbers', () =>{
        let num1 = 10
        let num2 = 3

        expect(Calculator.sub(num1,num2)).toBe(7)
    })

    test('Subtraction of two numbers, implying sign operation', () =>{
        let num1 = 70
        let num2 = -700

        expect(Calculator.sub(num1,num2)).toBe(770)
    })

    test('Subtraction of two numbers with negative and decimal numbers', () =>{
        let num1 = -70.432
        let num2 = 700.487

        expect(Calculator.sub(num1,num2)).toBe(-770.919)
    })
})

// MULTIPLICATION
describe('Calculator multiply unit tests', () => {
    test('Muliplying two numbers', () =>{
        let num1 = 10
        let num2 = 3

        expect(Calculator.mul(num1,num2)).toBe(30)
    })

    test('Muliplying two numbers equals negative number', () =>{
        let num1 = -70
        let num2 = 700

        expect(Calculator.mul(num1,num2)).toBe(-49000)
    })

    test('Muliplying two numbers with negative and decimal numbers', () =>{
        let num1 = -70.465
        let num2 = 700.8973

        expect(Calculator.mul(num1,num2)).toBe(-49388.7282445)
    })
})

// DIVISION
describe('Calculator division unit tests', () => {
    test('Division of two numbers', () =>{
        let num1 = 10
        let num2 = 5

        expect(Calculator.div(num1,num2)).toBe(2)
    })

    test('Division of two numbers, negative result', () =>{
        let num1 = 700
        let num2 = -70

        expect(Calculator.div(num1,num2)).toBe(-10)
    })

    test('Division of two numbers equals negative decimal number', () =>{
        let num1 = -70
        let num2 = 700

        expect(Calculator.div(num1,num2)).toBe(-0.1)
    })

    test('Division of two numbers equals negative decimal number', () =>{
        let num1 = 70
        let num2 = 0

        expect(Calculator.div(num1,num2)).toBe(0)
    })

    test('0/0 Indetermination', () =>{
        let num1 = 0
        let num2 = 0

        expect(Calculator.div(num1,num2)).toBe(0)
    })
})