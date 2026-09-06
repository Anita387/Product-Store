//const express = require('express');
import express from 'express';
//conecting to database 
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/product",(reg ,res) => {
    res.send("server is ready");
});

console.log(process.env.MONGO_URI)

app.listen(5000,()=>{
    console.log ("server started at http://localhost:5000")
});
