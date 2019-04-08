var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require('./routes')

var url = 'mongodb://127.0.0.1:27017/blog';
mongoose.connect(url, { useNewUrlParser: true });
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

var Schema = mongoose.Schema;
var blogSchema = new Schema({
  title: String,
  content: String,
  time: String
})
var Blog = mongoose.model('Blog', blogSchema);
// 路由所有页面
routes(app);
app.get('/', function (req, res, next) {
  Blog.find({}, function (err, data) {
    if (err) {
      console.log(err);
    };

    res.render('index', {
      contents: data
    });
  });
});
app.get('/change', function (req, res, next) {

  Blog.find({}, function (err, data) {
    if (err) {
      console.log(err);
    };

    res.render('change', {
      contents: data
    });
   console.log(contents);
   
  });
});

app.post('/publish', function (req, res, next) {
  var times = new Date();
  var time = times.getFullYear() + "-" + (times.getMonth() + 1) + "-" + times.getDate() + " " + times.getHours() + ":" + times.getMinutes() + ":" + times.getSeconds();
  var blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    time: time,
  });
  console.log(blog);
  blog.save(function (err, res) { });
  res.redirect('/publish');

});
app.listen(3000);
console.log('server at port 3000');


