const mongoose = require('mongoose');

var parkingLotSchema=new mongoose.Schema({
    zipCode:{
        type:String,
        required: [true, 'No zip code name provided']   

    },
    buildingName:{
        type:String,
        required: [true, 'No building name provided']   
    },
    totalSpots:{
        type:Number,
        trim: true,
        lowercase: true,
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    ,updateAt:{
        type:Date,
        default:Date.now
    }
});

var parkingLotModal=mongoose.model('parking_lot',parkingLotSchema,'parking_lots');
module.exports=parkingLotModal;