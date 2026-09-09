//const express = require('express');
import express from 'express';
//conecting to database 
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import productRoute from './routes/product.route.js';

dotenv.config();

const app = express();
app.use(express.json()); // allow to accept json data from the client

app.use("/api/products",productRoute)

console.log(process.env.MONGO_URI)

app.listen(5000,()=>{
    connectDB();
    console.log ("Server Started at http://localhost:5000")
});
