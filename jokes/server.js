// 1. import your dependencies
const express = require('express');

// 2. instantiate your express server
const app = express();
const port = 8000;

// 2.25 start your mongoose config  
require('./server/config/mongoose.config.js');

// 2.5 setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3 define your api routes
const jokesRoutes = require('./server/routes/jokes.routes');
jokesRoutes(app);

// 4 run your express server
app.listen(port, () => 
    console.log(`Server is listening on port 8000`));