const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

const noteRouters = require('./src/routes/noteRouters');


app.use(cors("*"));
app.use(bodyParser.json());


// 2) Routes
app.use('/api/v1/note', noteRouters)

module.exports = app;