//using express
const express = require('express');//returns a func
const app = express();//instance of that func given varname app

//listen for requests
//no need for localhost to be defined
app.listen('3000')

//listen for get requests
app.get('/',(req,res)=>{
    // res.write()
    // res.end()
    //simpler alternative
    //send() infers status codes and headers...setHeader() & statusCode="" unrequired
    res.send('<p>Express routes to Zion</p>')
    //sending HTML files
    //sendFile takes in abs dir for rel dir include 2nd arg to show root of relative dir 
    //__dirname gets that Abs dir that's root of 1st arg.../views & app.js share same dir
    res.sendFile('./views/index.html', { root: __dirname})
})
//about page
app.get('/about',(req,res)=>{
    res.send('<p>About Express </p>')
    //sending HTML files
    res.sendFile('./views/about.html', { root: __dirname})

})