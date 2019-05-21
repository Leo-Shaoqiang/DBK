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
// 首页数据
router.route('/').get((req, res) => {
     const { page } = req.query;  
     Blog.find({},(err,blog)=>{
          if(err){console.log(err);}
          res.json(blog ?blog:{});  //数据转化为json  然后可在前端使用   
     }).sort({ _id : -1 }).limit(3).skip((page-1)*3);
     
})
router.route('/ContentInfo/:id').get((req, res) => {
     Blog.findOne({id:req.params.id},(err,blog)=>{
          if(err){console.log(err);}
          console.log(req.params.id);
          console.log(blog);
           res.json(blog ? blog:{});
     })
     })
router.route('/list').get(async (req,res)=>{
     const { page } = req.query;
     try {
          const total = await  Blog.find().countDocuments();
         const lists =  await Blog
          .find({})
          .skip((page - 1) * 3)
          .limit(3)      
          res.json({ok : 1, data: {lists , pagination : {total,page}}})
     } catch (error) {
          console.log(error);
          
     }
     });
   
   
// 发表页面
router.route('/issue').post((req, res) => {
    
     Blog.find({},(err,blog)=>{
          if(err){console.log(err);}
          console.log(blog)
           res.json(blog ? blog:{});
           var times = new Date();
           var time = times.getFullYear() + "-" + (times.getMonth() + 1) + "-" + times.getDate() + " " + times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
     

     if(req.body.title==''||req.body.content==''||req.body.tag=='')
     {
          return false
     }else{
               //     存储数据
                    var blogs = new Blog({
                          title: req.body.title,
                          tag: req.body.tag,
                          content: req.body.content,
                          time : time
                    });
                    blogs.save((err, res) => {
                         if (err) console.log(err);
                          console.log(res);
                    });
                    res.end()
               }
           
     })
})

module.exports = router
