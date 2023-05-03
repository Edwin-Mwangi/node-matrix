//Models and Schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Schema
const blogSchema = new Schema({
    //title: String //..if no other props to define
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    //2nd arg for timestamps
},{timestamps: true})

//Model
//takes in the Model itself and the Schema to use
const Blog = mongoose.model('Blog', blogSchema)

//export Model
module.exports = Blog;