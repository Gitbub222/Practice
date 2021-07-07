// const _ = require('lodash');
// const tf = require('@tensorflow/tfjs');
// const fetch = require("node-fetch")
// require('@tensorflow/tfjs-node');

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1 style='text-align: center;' >Hello, World!</h1>")
});

app.get('/dashboard', (req, res)=>{
    res.send("My Dashboard")
})

app.get('/dashboard/:uuid/:name', (req, res)=>{
    const {uuid, name} = req.params;
    res.send(`UUID: ${uuid}<br> Name: ${name}`)
})


app.listen(3000)