const express = require('express');
const dotenv = require('dotenv');
const route = require('./Routes/Routes');

dotenv.config({path: './Config/Config.env'})

const port = process.env.PORT;
const app = express()

app.use('/api/v1/bootcamps', route)


app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});