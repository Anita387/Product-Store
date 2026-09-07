//const express = require('express');
import express from 'express';
//conecting to database 
import dotenv from "dotenv";
import {connectDB} from './config/db.js';

dotenv.config();

const app = express();

app.post("product",async(reg ,res) => {
    const product = req.body; // user will send this data
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success: false , message:"Please fill all the fields"});
    }
    const newProduct = new Product(product);
    try{
        //saving our product to the database
        await newProduct.save();
        res.status(200).json({success: true , data: newProduct});
    }
    catch(error){
        console.error("Error in Create product:", error.message);
        res.status(500).json({success: false , message: "Server Error"})
    }
});

console.log(process.env.MONGO_URI)

app.listen(5000,()=>{
    connectDB();
    console.log ("Server Started at http://localhost:5000")
});
