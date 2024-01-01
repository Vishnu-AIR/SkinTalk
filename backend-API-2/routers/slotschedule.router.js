const router = require('express').Router();
const slotschedule= require('../controller/slotschedule.controller')

router.post('/slotschedule',slotschedule.slotschedule);
router.post('/slotdetail',slotschedule.getslotdetails);



//router.get('/testapi',function(req,res,next){
  //  res.send("Api kaam karri bawa")
//})

module.exports= router
