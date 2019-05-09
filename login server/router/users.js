const express = require('express')
var router = express.Router()
var User =  require('../models/user')
var Blog =  require('../models/blog')

//登录
 router.route('/validate').post((req, res) => {
      User.findOne({name : req.body.name, pass : req.body.pass},(err,user)=>{
           if(err)console.log(err);
            res.json(user ? user:{});
      })
     
 })
 //注册
 router.route('/register').post((req, res) => {
//    数据库查询库中是否有注册的这个用户名 
     User.findOne({name : req.body.name},(err,user)=>{
          if(err)console.log(err);
          res.json(user ? user:{});
          var times = new Date();
          var time = times.getFullYear() + "-" + (times.getMonth() + 1) + "-" + times.getDate() + " " + times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
    
    if(user == null){
     //     两次密码验证
         if(req.body.pass !== req.body.checkpass){
              return false;
          // 为空验证
         }else if(req.body.name == undefined || req.body.pass == undefined || req.body.checkpass == undefined) {
              return false; 
         }else if(req.body.name ==' ' || req.body.pass == ' ' || req.body.checkpass == ' ') {
          return false;
     }
         else{
          //     存储数据
               var users = new User({
                     name: req.body.name,
                     pass: req.body.pass,
                     time: time,
               });
               users.save((err, res) => {
                    if (err) console.log(err);
                     console.log(res);
               });
          
         }
     }else{
       return false;
     }
     })
})

router.route('/').post((req, res) => {
     Blog.find({},(err,blog)=>{
          if(err){console.log(err);}
          console.log(blog)
           res.json(blog ? blog:{});
     })
     
    
})

router.route('/issue').post((req, res) => {
    
     Blog.find({},(err,blog)=>{
          if(err){console.log(err);}
          console.log(blog)
           res.json(blog ? blog:{});
     })
     if(req.body.title==''||req.body.content==''||req.body.tag=='')
     {
          return false
     }else{
               //     存储数据
                    var blogs = new Blog({
                          title: req.body.title,
                          tag: req.body.tag,
                          content: req.body.content,
                    });
                    blogs.save((err, res) => {
                         if (err) console.log(err);
                          console.log(res);
                    });
                    res.end()
               }
           
     })

module.exports = router
