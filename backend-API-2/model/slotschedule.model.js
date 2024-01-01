const mongoose= require('mongoose');
const db = require('../config/db');
const { string } = require('i/lib/util');

const {Schema } = mongoose;

const slotSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    doctorId:{
        type:String,
        required:true
    },
    Time:{
        type:Date,
        default:Date.now()
    },
    Prescription:{
        type:String,
    },
    Imagelink:{
        type:String

    }

})


const slotModel = db.model('slotschedule',slotSchema);

module.exports = slotModel