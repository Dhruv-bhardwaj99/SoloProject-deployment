const mongoose = require("mongoose");


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://dhruv:dhruv12@cluster0.dcpqvb8.mongodb.net/times?retryWrites=true&w=majority")
}