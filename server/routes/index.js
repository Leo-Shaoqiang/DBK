module.exports = function (app) {
   
      app.get('/bootstrap',function (req,res,next) {
        res.render('bootstrap');
        res.end();
        next();
        });
    app.get('/nodejs',function (req,res,next) { 
      res.render('nodejs');
      res.end();
      next();
     });
    app.get('/mongodb',function (req,res,next) {
       res.render('mongodb');
       res.end();
       next();
       });
    app.get('/javascript',function (req,res,next) {
        res.render('javascript');
        res.end();
        next();
        });
    
    app.get('/vue',function (req,res,next) {
            res.render('vue');
            res.end();
            next();
            });  
    app.get('/publish',function (req,res,next) {
        res.render('write');
        res.end();
        next();
      });
    app.get('/login',function (req,res,next) { 
        res.render('login');
     })
  
  
  }