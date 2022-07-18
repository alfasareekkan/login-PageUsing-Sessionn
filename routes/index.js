var express = require('express');
var router = express.Router();



// var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
   
   
   
  if(req.session.userid){
    res.redirect('/home');
  }
  else{
   
    res.render('index',{loginValue:req.session.loginValue})
    req.session.loginValue=false
    
  }
  
});
router.post('/signup',(req,res,next)=>{

  let userEmail="alfas@gmail.com";
  let userPassword="alfas"

  
  if(req.body.email===userEmail && req.body.password===userPassword){
    console.log("3");
    req.session.userid=req.body.email;
    res.redirect('/home')
  }
  else{
    req.session.loginValue=true
    res.redirect('/')
  }
})
router.get('/logout',(req,res,next)=>{
  req.session.destroy();
  res.redirect('/')
})


module.exports = router;
