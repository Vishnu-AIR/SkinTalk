const { compare } = require('bcrypt');
const UserService =require('../services/user.services');
const userModel = require('../model/user.model');

exports.register = async(req,res,next)=>{
    try{
        const {phone,name,email} = req.body;
        const user = await UserService.checkuser(email);
        const user2 =await UserService.checkuser2(phone);
        const user3= user || user2
        if(!user3){
        
        const successRes = await UserService.registerUser(phone,name,email);

        res.json({status:true,success:"User Registered Successfully",details:successRes});}
        else{
            if(user2){
    
                res.json({status:false,succes:"Phone Already Registered"})
            }
            else if (user){
                res.json({status:false,success:"Email Already Registered"})
            }
            
        }
    }
    catch(err){
        throw(err);

    }



}

exports.login = async(req,res,next)=>{
    try{
        const {phone} = req.body;
        
        const user= await UserService.checkuser2(phone);
        if (!user){
            res.json({status:false,sucess:"User Don't Exist"});
            

        }
        else{
        // const isMatch= await user.comparePassword(password);
        let tokenData = {_id:user._id,phone:user.phone};
        const token = await UserService.generateToken(tokenData,"secretkey",'10h');
        res.status(200).json({status:true,token:token})
        }
    }
    catch(err){
        throw(err);

    }



}


exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const updateData = req.body;
  
      const updatedUser = await userModel.findOneAndUpdate(
        { _id: userId },
        updateData,
        { new: true }
      );
  
      if (!updatedUser) {
        throw "user not found!";
      }
  
      return res.json({
        success: true,
        data: updatedUser,
        message: "User updated!",
      });
    } catch (ex) {
      //console.log(ex)
      return res.json({ success: false, message: ex });
    }
  };
