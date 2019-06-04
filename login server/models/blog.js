const  mongoose = require('mongoose')
var blogSchema=new mongoose.Schema({
    title:String,
    tag:String,
    content:String,
    time : String,
    Auid : String,
})

module.exports = mongoose.model('Blog',blogSchema);