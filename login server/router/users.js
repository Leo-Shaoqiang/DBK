const express = require('express')
var router = express.Router()
var User =  require('../models/user')


 router.route('/validate').post((req, res) => {
      User.findOne({name : req.body.name, pass : req.body.pass},(err,user)=>{
           if(err)console.log(err);
            res.json(user ? user:{});
      })
     
 })
 router.route('/register').post((req, res) => {
   
     User.findOne({name : req.body.name},(err,user)=>{
          if(err)console.log(err);
           res.json(user ? user:{});
          var times = new Date();
     var time = times.getFullYear() + "-" + (times.getMonth() + 1) + "-" + times.getDate() + " " + times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
    
    if(user== null){
        var users = new User({
         name: req.body.name,
         pass: req.body.pass,
         time: time,
     });
                users.save((err, res) => {
               if (err) console.log(err);
               console.log(res);
           });
          
           }else{
        console.log('用户名已存在请重新输入！');
           }
     })
})

module.exports = router
