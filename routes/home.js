var express = require('express');
var router = express.Router();
var datas=[{
    title1:"OPPO Reno 7 Pro",
    description:"The portrate expert.order now and save up to Rs.4000 with Bank Discount",
    imageName:"Phones-reno7-pro.jpg.thumb.webp"
  },{
    title1:"OPPO Reno7 5G",
    description:"The Portrait Expert. Order now and save up to Rs.3000 with Bank Discount.",
    imageName:"Phones-reno7.jpg.thumb.webp"
  },
  {
    title1:"OPPO A96",
    description:"The portrate expert.order now and save up to Rs.4000 with Bank Discount",
    imageName:"Phones-a96.jpg.thumb.webp"
  },
  {
    title1:"OPPO A76",
    description:"90Hz Colour-Rich Punch-Hole Display. Save up to Rs.1000 with Bank Discount.*",
    imageName:"Phones-a76.jpg.thumb.webp"
  }
  ]

router.get('/',(req,res)=>{
    if(req.session.userid){
        res.render('home',{datas})
    }
    else{
        res.redirect('/')
    }
    

})




module.exports = router;