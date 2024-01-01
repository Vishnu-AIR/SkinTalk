const mongoose= require('mongoose');
const db = require('../config/db')
const bcrypt = require('bcrypt');
const { string } = require('i/lib/util');

const {Schema} = mongoose;

const userSchema = new Schema({
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true
    },
    age:{
        type:Number,
        default:''
        
    },
    skintype:{
        type:String,
        default:''
    },
    Allergy:{
        type:String,
        default:''
    },
    Medications:{
        type:String,
        default:''
        
    }
    // password:{
    //     type:String,
    //     length:10,
    //     required:true
    // }

});

// userSchema.pre('save',async function(){
//     try{
//         var user = this;
//         const salt = await(bcrypt.genSalt(10));
//         const hashpass = await bcrypt.hash(user.password,salt);

//         user.password= hashpass;
        
//     }
//     catch(err){
//         throw(err)
//     }
// })


// userSchema.methods.comparePassword=async function(userPassword){
//     try{
        
//         const isMatch = await bcrypt.compare(userPassword,this.password)
//         return isMatch
//     }
//     catch(err){
//         throw(err)
//     }

// }

const userModel = db.model('user',userSchema);

module.exports = userModel