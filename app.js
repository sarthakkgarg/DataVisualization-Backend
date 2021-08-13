const express=require("express");
const app=express();
require("./db/conn");
const data = require("./model/dataSchema");
const dashboarddata = require("./route/dashboarddata")


const cors = require('cors');
app.use(express.json());
app.use(cors())
app.use(dashboarddata);

app.listen(5000,()=>{
    console.log("Run on port number 5000");
});
