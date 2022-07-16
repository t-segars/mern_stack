//1 import your dependencies here
const express = require('express');



//2 instantiate your server here
const app = express();
const port = 8000;


//2.25 start your mongoose configuration here
require('../superheroapi/config/mongoose.congfig.js');


//2.5 set up middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//3 define your api endpoints here
const superheroRoutes = require("./routes/superhero.routes");
superheroRoutes(app);


//4. run your server here
app.listen(port, () => console.log("listening on port 8000"));