//using express
const express = require('express');
const app = express();
const morgan = require('morgan'); 

//set ejs view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen('3000')

//middleware to specify static files
app.use(express.static('public'))

//running morgan
app.use(morgan('dev'))

//listen for get requests
app.get('/',(req,res)=>{
    //can also pass more complex data
    const blogs = [{ title: 'Mario rides', snippet: ' Lorem ipsum dolor sit amet consectetur.'},
                    { title: 'Luigi follows', snippet: ' Lorem ipsum dolor sit amet consectetur.'},
                    { title: 'Bowser attacks', snippet: ' Lorem ipsum dolor sit amet consectetur.'}
                    ]
    //blogs destructuring
    res.render('index',{ title: 'home', blogs})
})


//about page
app.get('/about',(req,res)=>{
    res.render('about',{ title: 'about'})
})

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
});

//blogs/create handler
app.get('/blogs/create',(req,res)=>{
    res.render('create' ,{ title: 'create'})
});

//404
app.use((req,res)=>{
    res.status(404).render('404',{ title: '404'})
})
