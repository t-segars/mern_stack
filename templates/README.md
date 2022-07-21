# Start-up template for MERN_Full-stack
## React - MongoDB
### Axios, Express, Mongoose, Cors, react-router-dom

## Create Project Folder
[ ] ```mkdir example``` <br>
[ ] ```cd example``` <br>
### Server Side
[ ] ```npx create-react-app client ``` <br>
[ ] ```cd client``` 
<br>
[ ] ```npm i axios react-router-dom``` <br>
[ ] ```mkdir config controllers models routes``` <br>

## In second terminal inside ```example```<br>
[ ] ```cd mern_stack``` <br>
[ ] ``` mkdir server``` <br>
[ ]    ``` cd server``` <br>
[ ] ```npm init -y``` <br>
[ ] ```npm i cors express mongoose``` <br>
[ ] ```mkdir config pages ``` <br>
[ ] ```touch server.js```
[ ] ```code .```
##### insert inside ``serve.js```
```js
// 1. Import Dependencies
const express = require('express');
const cors = require("cors")

// 2. Instantiate Express Server
const app = express();
const port = 8000;
    
// 2.25 Start Your Mongoose Config
require("./config/mongoose.config");

// 2.5 Setup Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

/// 3 Define API

/// 4. Run Express Server
app.listen(port, () => console.log(`Listening on port: ${port}`) );

```
#### create new file in config
``` mongoose.config.js```

#### insert inside ```mongoose.config.js```
```js 
 const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/templates', {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongoose DB Status: RUNNING'))
    .catch(err => console.log('Something went wrong when connecting to MongoDB', err));

```

### start server (both terminals client and server)
[ ] ```npm start``` client side <br>
[ ] ``` nodemon server.js``` server side <br>

##### terminal will now be dedicated to server side
_______________________


















