const  mongoose = require('mongoose')



var blogSchema=new mongoose.Schema({
    title:String,
    tag:String,
    content:String,
})


module.exports = mongoose.model('Blog',blogSchema);