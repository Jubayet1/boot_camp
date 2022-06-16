const express = require('express');
const dotenv = require('dotenv');
// const route = require('./Routes/Routes');

dotenv.config({path: './Config/Config.env'})

const port = process.env.PORT;
const app = express()

// show all bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({status: 'true', todo: "show all bootcamps"});
})

// show single bootcamps
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({status: 'true', todo: `display ${req.params.id} bootcamp`});
})

// create a bootcamps
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({status: 'true', todo: "create new bootcamp"});
})

// update a bootcamps
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({status: 'true', todo: `update ${req.params.id} bootcamp`});
})

// delete a bootcamps
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({status: 'true', todo: `delete ${req.params.id} bootcamp`});
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});