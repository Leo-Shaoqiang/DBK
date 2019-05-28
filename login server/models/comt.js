const  mongoose = require('mongoose')



var comtSchema=new mongoose.Schema({
   comment:String,
   time:String,
   article_id:String
})


module.exports = mongoose.model('Comt',comtSchema);