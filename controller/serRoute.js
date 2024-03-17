
const express = require('express');
const serSchema = require('../model/serSchema');
const { mongo, default: mongoose } = require('mongoose');
const app = express();
const serRoute = express.Router();

serRoute.post("/create-service",(req,res)=>{
    serSchema.create(req.body,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})
serRoute.get("/",(req,res)=>{
    serSchema.find((err,data)=>{

        if(err)
            return err
        else
            res.json(data);
    })


})
serRoute.route("/update-service/:id")
.get((req,res)=>{
    serSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err
        else
            res.json(data);       
})
}).put((req,res)=>{
    serSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })

})
serRoute.delete("/delete-service/:id",(req,res)=>{
    conSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

module.exports = serRoute;