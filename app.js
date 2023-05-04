const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan'); 
const blogRoutes = require('./routes/blogRoutes')

//connectionString 
const dbURI = 'mongodb+srv://edwin:test123@node101.ejfrel0.mongodb.net/node101';

mongoose.connect(dbURI)
    .then(result => app.listen('3000'))
    .catch(err => console.log(err))

//middleware
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))//to view form input data

//OG routes
router.get('/',(req,res)=>{
    res.redirect('/blogs')
})

router.get('/about',(req,res)=>{
    res.render('about',{ title: 'about'})
})

//redirects
router.get('/about-us',(req,res)=>{
    res.redirect('/about')
});

//404
router.use((req,res)=>{
    res.status(404).render('404',{ title: '404'})
})

//blog routes
app.use('/blogs', blogRoutes);
