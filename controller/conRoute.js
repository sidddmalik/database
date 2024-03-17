
const express = require('express');
const conSchema = require('../model/conSchema');
const { mongo, default: mongoose } = require('mongoose');
const app = express();
const conRoute = express.Router();


conRoute.post("/create-con",(req,res)=>{
    conSchema.create(req.body,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})
conRoute.get("/",(req,res)=>{
    conSchema.find((err,data)=>{

        if(err)
            return err
        else
            res.json(data);
    })


})
conRoute.route("/update-con/:id")
.get((req,res)=>{
    conSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err
        else
            res.json(data);       
})
}).put((req,res)=>{
    conSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},(err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})
petRoute.delete("/delete-con/:id",(req,res)=>{
    conSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data)
    })
})

module.exports = conRoute;