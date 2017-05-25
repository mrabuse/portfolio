// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const react = require('react');

// run express server
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// serve static files
// app.use('/public', express.static(path.join(__dirname, '/../client/')));
app.use(express.static(path.join(__dirname, '/../dist/')));

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
