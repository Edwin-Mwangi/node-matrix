//using express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan'); 
const Blog = require('./models/blog');

//connectionString from mongo Atlas
const dbURI = 'mongodb+srv://edwin:test123@node101.ejfrel0.mongodb.net/node101';

//use mongoose to connect to mongo db..takes time so async
mongoose.connect(dbURI)

//to remove deprecated error, add 2nd arg
// mongoose.connect(dbURI, { useNewURIParser: true, useUnifiedTopology: true})
    //listen to port after db connection
    .then(result => app.listen('3000'))
    .catch(err => console.log(err))


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(morgan('dev'))

//mongoose and mongo sandbox routes..just test examples
//adding doc to db collection
// app.get('/add-blog',(req,res)=>{
//     //instantiate the model
//     const blog = new Blog({
//         title: 'blog 2',
//         snippet: 'about my other blog',
//         body: 'the white rabbit is elusive'
//         //timestamp included automatically
//     });
//     //async
//     blog.save()
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })

//retrieving doc
app.get('/all-blogs',(req,res)=>{
    //no instantiation method used automatically
    Blog.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
})

//single doc
app.get('/single-blog',(req,res)=>{
    //no instantiation method used automatically
    Blog.findById('6452cc304e6fe4c7f2034218')//include id from db
        .then(result => res.send(result))
        .catch(err => console.log(err))
})

//outputting data to views
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt: -1})//sort in desc order
        .then(result => res.render('index',{ title: 'All blogs', blogs: result}))
        .catch(err => console.log(err))    
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
