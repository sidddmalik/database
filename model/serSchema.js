
const mongoose = require("mongoose");
const serSchema = new mongoose.Schema({
    "Name":{type:String},
    "ID":{type:String},
    "PhoneNo":{type:String},
    "EmailID":{type:String},
    "Services":{type:String},
    "Pincode":{type:String},

    },{
        collection: "service"    
    })
    module.exports = mongoose.model("serSchema",serSchema);
