// 1. Import Dependencies
const express = require("express");
const cors = require("cors")

// 2. Instantiate Express Server
const app = express();
const port = 8000;
    
// 2.25 Start Your Mongoose Config
require("./config/mongoose.config");
app.use(express.urlencoded({ extended: true }));

// 2.5 Setup Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

/// 3 Define API

/// 4. Run Express Server
app.listen(port, () => console.log(`Listening on port: ${port}`) );