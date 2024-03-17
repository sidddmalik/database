
const express = require("express");
const mongoose = require("mongoose");
const conRoute = require("./controller/conRoute");
const serRoute = require("./controller/serRoute");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();



mongoose.set("strictQuery",true); //Depercation Warning //To supress the warning
mongoose.connect("mongodb+srv://siddharthamalik2021:1234@cluster0.5douab4.mongodb.net/condb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/conRoute",conRoute);
app.use("/serRoute",serRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000")


});
