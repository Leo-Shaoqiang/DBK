var express = require('express')
const mongoose = require('mongoose')
var app = new express()
const  bodyParser = require('body-parser')
var router = require('./router/users');
const url = "mongodb://localhost:27017/blog"

mongoose.connect(url,(err)=>{
    if(err)console.log(err);
    console.log('db connect success');
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});
app.use('/users',router)  //将路由注册到/user的路径下



var port = process.env.PORT || 3000;
app.listen(port);
console.log('listen on port:' + port);
