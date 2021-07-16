const express = require('express')
const app = express()
const PORT = 8080

app.get('/api/sum', (req,res) => {
    let op1 = Number(req.query.n1)
    let op2 = Number(req.query.n2)

    result = op1 + op2

    res.json(`result = ${result}`)
})

app.get('/api/sub', (req,res) => {
    let op1 = Number(req.query.n1)
    let op2 = Number(req.query.n2)

    result = op1 - op2

    res.json(`result = ${result}`)
})

app.get('/api/mul', (req,res) => {
    let op1 = Number(req.query.n1)
    let op2 = Number(req.query.n2)

    result = op1 * op2

    res.json(`result = ${result}`)
})

app.get('/api/div', (req,res) => {
    let op1 = Number(req.query.n1)
    let op2 = Number(req.query.n2)

    result = op1 / op2

    res.json(`result = ${result}`)
})

app.listen(PORT,()=>{
    console.log(`Server running succesfully on PORT ${PORT}`)
})
