const express = require('express');
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const User = require("./user.js");
const Company = require("./company.js");


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/users/new", (req, res)=>{

    res.json(new User());
})

app.get("/api/companies/new", (req, res)=>{

    res.json(new Company());
})

app.get("/api/user/company", (req, res)=>{

    res.json([new Company(), new User()]);
})


app.listen(port, ()=>console.log(`running on port ${port} is a new way I like to be!`));