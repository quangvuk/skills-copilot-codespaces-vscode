// Import express
const express = require('express');
const app = express();

// Create a web server
const server = require('http').createServer(app);


// Import module

const bodyParser = require('body-parser');


// Handle request and response
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());