const express = require('express');
const router = express.Router();
const Blog = require('./models/blog');

//blogs
router.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1})
        .then(result => res.render('index',{ title: 'All blogs', blogs: result}))
        .catch(err => console.log(err))    
})

//posting a new blog
router.post('/',(req, res) =>{
    const blog = new Blog(req.body);
    blog.save()
        .then(result => res.redirect('/blogs'))
        .catch(err => console.log(err))  
})

//create 
router.get('/create',(req,res)=>{
    res.render('create' ,{ title: 'create'})
});

//route param using variable id
router.get('/:id',(req,res)=>{
    const id = route.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', {
                blog: result,
                title: 'Blog Details'
            })
        })
        .catch(err => console.log(err))
})

//delete
router.delete('/:id',(req,res)=>{
    const id = route.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs'})
        })
        .catch(err => console.log(err))
})

//404
router.use((req,res)=>{
    res.status(404).render('404',{ title: '404'})
})

module.exports = router;
