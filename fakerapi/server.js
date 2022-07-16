// 1. IMPORT YOUR  DEPENENCIES
import express from 'express';
import faker from 'faker';

    const { response } = require('express');
const express = require ('express');
// 2. INSTANTIATE AN EXPRESS SEVER
const app = express();
const port = 8000;


    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


// 4. run your express server
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
