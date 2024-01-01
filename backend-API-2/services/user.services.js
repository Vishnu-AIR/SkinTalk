const UserModel = require('../model/user.model')
const jwt = require('jsonwebtoken')

class UserService{
    static async registerUser(phone,name,email){
        try{
            const createUser = new UserModel({phone,name,email});
            return await createUser.save()
            
        }
        catch(err){
            throw(err);

        }
    
    }
    static async checkuser(email){
        try{
            return await UserModel.findOne({email})
        }
        catch(err){
            throw(err)
        }
    }
    static async checkuser2(phone){
        
        try{
           
            
            return await UserModel.findOne({phone})
           
            
        }
        catch(err){
            throw(err)
        }
    }
    static async generateToken(tokenData,secretkey,jwt_expire){
        return jwt.sign(tokenData,secretkey,{expiresIn:jwt_expire});
    }
    

   

}


module.exports = UserService