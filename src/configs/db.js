const mongoose = require("mongoose");


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://dhruv:dhruv12@cluster0.iecuagt.mongodb.net/pro")
}