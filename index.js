require('dotenv').config() //Copied from dotenv website
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("I am Twitter say Hi")
})

app.get('/login',(req,res)=>{
    res.send('<H1>Logged In</H1>')
})
 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
