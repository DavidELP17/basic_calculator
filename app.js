//Basic Calculator Program for CI Pipeline implementaion

const express = require('express')
const Calculator = require('./modules/operations')

const app = express()
const PORT = 3000


 // HTTP Methods
 
 app.get('/api/sum', (req,res) => {

    let result = Calculator.sum(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.get('/api/sub', (req,res) => {

    let result = Calculator.sub(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.get('/api/mul', (req,res) => {

    let result = Calculator.mul(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.get('/api/div', (req,res) => {

    let result = Calculator.div(Number(req.query.n1), Number(req.query.n2))

    res.json(`result = ${result}`)
})

app.listen(PORT,()=>{
    console.log(`Server running succesfully on PORT ${PORT}`)
})
