//Basic Calculator Program for CI Pipeline implementaion

const express = require('express')
const app = express()
const PORT = 8080

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
    return num1 / num2
}

 // HTTP Methods

 app.get('/api/sum', (req,res) => {

    result = sum(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.get('/api/sub', (req,res) => {

    result = sub(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.get('/api/mul', (req,res) => {

    result = mul(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.get('/api/div', (req,res) => {

    result = div(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.listen(PORT,()=>{
    console.log(`Server running succesfully on PORT ${PORT}`)
})
