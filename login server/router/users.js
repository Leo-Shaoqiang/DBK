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
     var times = new Date();
     var time = times.getFullYear() + "-" + (times.getMonth() + 1) + "-" + times.getDate() + " " + times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
     var  users = new User({
          name: req.body.name,
          pass: req.body.pass,
          time: time,
        });
        User.findOne({name : req.body.name},(err,user)=>{
          if(err)console.log(err);
          //  res.json(user ? user:{});
     })
     //    if(this.user.name == res.data.name){
     //      alert('用户名已有人使用！')
     //  }else{
         
     //  }
      users.save((err,res)=>{
          if(err)console.log(err);
           console.log(res)
     })
})

module.exports = router
