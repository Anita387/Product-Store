//const express = require('express');

import express from 'express';
const app = express();

app.get("/product",(reg ,res) => {
    res.send("server is ready");
});

app.listen(5000,()=>{
    console.log ("server started at http://localhost:5000")
});