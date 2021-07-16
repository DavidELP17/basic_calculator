const express = require('express')
const app = express()
const PORT = 8080

app.get('/api/sum', (req,res) => {
    res.send('Hello world')
})

app.listen(PORT,()=>{
    console.log(`Server running succesfully on PORT ${PORT}`)
})