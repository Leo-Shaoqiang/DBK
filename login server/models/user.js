const  mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: String,
    pass : String,
    nickName: String,
    time : String,
    Avatar: String,
})



module.exports = mongoose.model('User',userSchema);
