//const express = require('express');
import express from 'express';
//conecting to database 
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import productRoute from './routes/product.route.js';

dotenv.config();

const app = express();
const Port = process.env.port||5000;
app.use(express.json()); // allow to accept json data from the client

app.use("/api/products",productRoute)

console.log(process.env.MONGO_URI)

app.listen(Port,()=>{
    connectDB();
    console.log ("Server Started at http://localhost:"+Port)
});
