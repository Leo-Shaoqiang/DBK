const express = require("express");
var router = express.Router();
var User = require("../models/user");
var Blog = require("../models/blog");
var Comt = require("../models/comt");
// 图片上传
var multer  = require('multer')
var upload = multer({ dest: 'upload/' });



//登录
router.route("/validate").post((req, res) => {
     let { name, pass } = req.body;
     User.findOne(
          {
               name: name,
               pass: pass
          },
          (err, user) => {
               if (err) {
                    console.log(err);
               }else if(user == null){
                   res.jsonp(user ? user : {});
                    
               } 
               else {
                   
                         let sessions = req.session;
                         sessions.userName = name;
                         sessions.userID = user._id;
                         sessions.save();
                         // console.log("登录时的会话 ID ：", req.sessionID);
                         // console.log(sessions.userName);
                         // console.log(sessions.cookie) //以上代码不可与下面的 互换顺序
                         res.json(user ? user : {});
               }
               
          }
     );
});
//注册
router.route("/register").post((req, res) => {
     //    数据库查询库中是否有注册的这个用户名
     User.findOne(
          {
               name: req.body.name
          },
          (err, user) => {
               if (err) console.log(err);
               res.json(user ? user : {});
               var times = new Date();
               var time =
                    times.getFullYear() +
                    "-" +
                    (times.getMonth() + 1) +
                    "-" +
                    times.getDate() +
                    " " +
                    times.getHours() +
                    ":" +
                    times.getMinutes() +
                    ":" +
                    times.getSeconds();

               if (user == null) {
                    //     两次密码验证
                    if (req.body.pass !== req.body.checkpass) {
                         return false;
                         // 为空验证
                    } else if (
                         req.body.name == undefined ||
                         req.body.pass == undefined ||
                         req.body.checkpass == undefined
                    ) {
                         return false;
                    } else if (
                         req.body.name == " " ||
                         req.body.pass == " " ||
                         req.body.checkpass == " "
                    ) {
                         return false;
                    } else {
                         //     存储数据
                         var users = new User({
                              name: req.body.name,
                              pass: req.body.pass,
                              time: time,
                              Avatar :'blob:http://localhost:8080/24249695-3479-4dd7-9921-56050ff2f806'
                         });
                         users.save((err, res) => {
                              if (err) console.log(err);
                              console.log(res);
                         });
                    }
               } else {
                    return false;
               }
          }
     );
});
// 首页数据
router.route("/").get((req, res) => {
     const { page } = req.query;
     Blog.find({}, (err, blog) => {
          if (err) {
               console.log(err);
          }
          res.json(blog ? blog : {}); //数据转化为json  然后可在前端使用
     })
          .sort({
               _id: -1
          })
          .limit(3)
          .skip((page - 1) * 3);
});
// 文章列表
router.route("/list").get(async (req, res) => {
     const { page } = req.query;
     try {
          const total = await Blog.find().countDocuments();
          const lists = await Blog.find({})
               .skip((page - 1) * 3)
               .limit(3);
          res.json({
               ok: 1,
               data: {
                    lists,
                    pagination: {
                         total,
                         page
                    }
               }
          });
     } catch (error) {
          console.log(error);
     }
});
// 发表页面
router.route("/issue").post((req, res) => {
     Blog.find({}, (err, blog) => {
          if (err) {
               console.log(err);
          }
          console.log(blog);
          res.json(blog ? blog : {});
          var times = new Date();
          var time =
               times.getFullYear() +
               "-" +
               (times.getMonth() + 1) +
               "-" +
               times.getDate() +
               " " +
               times.getHours() +
               ":" +
               times.getMinutes() +
               ":" +
               times.getSeconds();

          if (req.body.title == "" || req.body.content == "" || req.body.tag == "") {
               return false;
          } else {
          
               //     存储数据
               var blogs = new Blog({
                    title: req.body.title,
                    tag: req.body.tag,
                    content: req.body.content,
                    time: time,
                    Auid : req.session.userName,
               });
               blogs.save((err, res) => {
                    if (err) console.log(err);
                    console.log(res);
               });
               res.end();
          }
     });
});


router.route('/Nav').post((req, res) => {
     
     Blog.find({"title":req.body.msg}, (err,blog) => {
          if (err) { console.log(err); }
          console.log(req.body.msg)
          console.log(blog)
          res.json(blog?blog:{}); 
          
     })
          
           
})

//电影筛选页面
router.route('/Movie').post((req, res) => {
     if(req.body.my=="其他"){
          Blog.find({}, (err,blog) => {
               if (err) { console.log(err); }
               console.log(req.body.my)
               console.log(blog)
               res.json(blog?blog:{}); 
     
               
          })
     }else{ 
     Blog.find({"title":req.body.my}, (err,blog) => {
          if (err) { console.log(err); }
          console.log(req.body.my)
          console.log(blog)
          res.json(blog?blog:{}); 

          
     })
}
           
})


//点赞
router.route("/bonus").post((req, res) => {
     Blog.findOne({
          id: req.body.data._id
     });
});
// 判断cookie
router.route("/checkCookie").get((req, res) => {
     if (!req.session.userName) {
          console.log(req.session.userName)
          res.end("");
     } else {
          let userName = req.session.userName;
          User.findOne({
               name: userName
           },(err, user) => {
                    res.json({'userName' : userName,'userAvatar': user.Avatar});
           })
          
          console.log("Cookie" + req.session.userName);
     }
});
//退出即删除cookie
router.route("/deleteCookie").get((req, res) => {
     res.clearCookie(req.session.userName);

     req.session.destroy(function (err) {
          if (err) {
               res.json({ ret_code: 2, ret_msg: "退出登录失败" });
               return;
          }
     });
     // console.log('req.session.userName ' + req.session.userName);
     
});

//动态路由寻找详情页面
router.route("/ContentInfo/:id").get((req, res) => {
     // console.log(req.params.id);

     Blog.findOne(
          {
               _id: req.params.id
          },
          (err, blog) => {
               if (err) {
                    console.log(err);
               } else {
                    console.log(blog);
               }

               Comt.find(
                    {
                         article_id: req.params.id
                    },
                    (err, comt) => {
                         if (err) {
                              console.log(err);
                         } else {
                              console.log(comt);
                         }

                         var temp = {
                              blog: blog,
                              comt: comt
                         };

                         res.json(temp);
                    }
               );
          }
     );
});

//存储评论数据
router.route("/ContentInfo/Submit/:id").post((req, res) => {
     console.error(req);
     if (req.body.input == "") {
          return false;
     } else {
          var comts = new Comt({
               comment: req.body.input,
               article_id: req.params.id
          });
          comts.save((err, res) => {
               if (err) console.log(err);
               console.log("保存成功" + res);
          });
     }
});

// 上传图片
router.route('/Myinfo', upload.single('avatar')).post((req, res, next)=>{
      User.findOne({
          name: req.body.user
      },(err, user) => {
           if(err)  console.log(err);
          user.Avatar = req.body.imageUrl;
          console.log( 'user'+user);
      })
 });
 router.route('/Myinfo').get((req, res, next)=>{
     res.send('get' +  res)
 });
module.exports = router;