
const mongoose = require("mongoose");
const serSchema = new mongoose.Schema({
    "Name":{type:String},
    "ID":{type:String},
    "Phone No.":{type:String},
    "Sertype":{type:String},
    "Seroff":{type:String},
    "Pincode":{type:String},

    },{
        collection: "service"    
    })
    module.exports = mongoose.model("serSchema",serSchema);