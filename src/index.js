const express = require("express");
const connect = require("./configs/db");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const timeout = require("connect-timeout");

//controller
const productControllers = require("./controllers/product.controller");
const app = express();

app.use(cors());
app.use(express.json());
app.use(timeout('5000ms'))
app.use("/products", productControllers);



app.listen(port, async() =>{
    try{
        await connect();
        console.log(`Listening on port ${port}`);
    }
    catch(err){
        console.log(err.message);
    }
});