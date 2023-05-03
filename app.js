//using express
const express = require('express');//returns a func
const app = express();//instance of that func given varname app

//set ejs view engine
app.set('view engine', 'ejs');

//by default assumes views are in views folder..to set another folder
// app.set('views','newviews');

//listen for requests
//no need for localhost to be defined
app.listen('3000')

//middleware (works top to btm)
//add arg next() for the code to continue
app.use((req, res, next) => {
    console.log('new request made');
    console.log('hostname: ', req.hostname);
    console.log('path: ',req.path);
    console.log('method',req.method);
    next(); //allows code to continue,get URL and fire correct handler
})

//listen for get requests
app.get('/',(req,res)=>{
    // res.write()
    // res.end()
    //simpler alternative
    //send() infers status codes and headers...setHeader() & statusCode="" unrequired
    // res.send('<p>Express routes to Zion</p>')

    //sending HTML files
    //sendFile takes in abs dir for rel dir include 2nd arg to show root of relative dir 
    //__dirname gets that Abs dir that's root of 1st arg.../views & app.js share same dir
    // res.sendFile('./views/index.html', { root: __dirname})

    //rendering ejs templates
    //no need for .ejs ext,it looks in views folder and finds index.ejs 
    //2nd arg is data passed from app.js to ejs templates...check <title>
    // res.render('index',{ title: 'home'})

    //can also pass more complex data
    const blogs = [{ title: 'Mario rides', snippet: ' Lorem ipsum dolor sit amet consectetur.'},
                    { title: 'Luigi follows', snippet: ' Lorem ipsum dolor sit amet consectetur.'},
                    { title: 'Bowser attacks', snippet: ' Lorem ipsum dolor sit amet consectetur.'}
                    ]
    //blogs destructuring
    res.render('index',{ title: 'home', blogs})
})

//another middleware testing topdown approach
// req, res, included otherwise next not working
app.use((req, res,next) => {
    console.log('2nd middleware not fired when we goto "/"');
    next();
})

//about page
app.get('/about',(req,res)=>{
    // res.send('<p>About Express </p>')
    //sending HTML files
    // res.sendFile('./views/about.html', { root: __dirname})

    //ejs
    res.render('about',{ title: 'about'})
})

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
     //statuscode 301 included automatically
});

//blogs/create handler
app.get('/blogs/create',(req,res)=>{
    res.render('create' ,{ title: 'create'})
});

//404
//use() used below all others...when above urls dont match
app.use((req,res)=>{
    // res.sendFile('./views/404.html', { root: __dirname})

    //to include statuscodes...use() is general for any HTML you wanna send
    //Express doesn't know its a 404...res.status() returns res obj so can attach senFile()
    // res.status(404).sendFile('./views/404.html', { root: __dirname})

    //ejs
    res.status(404).render('404',{ title: '404'})
})
