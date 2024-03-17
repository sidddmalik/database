const mongoose = require("mongoose");
const conSchema = new mongoose.Schema(
  {
    Name: { type: String },
    EmailID: { type: String },
    PhoneNo: { type: String },
    Probtype: { type: String },
    Probleme: { type: String },
  },
  {
    collection: "consumer",
  },
);
module.exports = mongoose.model("conSchema", conSchema);
