const express = require("express");
const app=express()
const connectToMongo=require("./db")
connectToMongo();
// to use req.body we need a middleware
// it is used in auth.js so using middleware here
app.use(express.json()) 

// using routes we dont use get function instead in that we use post function
//available routes -
app.use('/auth', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))

app.listen('5000',()=>{
    console.log("listening to 5000")
})