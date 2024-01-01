const slotservice =require('../services/slotschedule.service');
const slotModel = require('../model/slotschedule.model');

exports.slotschedule = async(req,res,next)=>{
    try{
        const {userId,doctorId,Prescription} = req.body;
        
        const Imagelink = doctorId+"-"+userId
        
        const successRes = await slotservice.Slotschedule(userId,doctorId,Prescription,Imagelink);

        res.json({status:true,success:"Prescription Successful",details:successRes});
        
    }
    catch(err){
        throw(err);

    }




}
exports.getslotdetails = async(req,res,next)=>{
    try{
        const {slotId}= req.body

        const successRes = await slotservice.getslot(slotId);
        res.json({status:true,success:"Slot Details Retrieval Successful",details:successRes});
}
    catch(err){
        throw(err)
    }
}
