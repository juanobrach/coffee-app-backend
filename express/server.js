'use strict';
const express = require('express');
const path = require('path');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const products = require('./API/products.js')
app.use(cors());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', products);  // path must route to lambda
app.use('/api/products', products);

module.exports = app;
module.exports.handler = serverless(app);
