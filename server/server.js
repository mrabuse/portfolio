// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
// const webpackDev = require('webpack-dev-middleware');
// const webpackHot = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

// run express server
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// enable hot-reload
// app.use(webpackDev(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath,
// }));

// app.use(webpackHot(compiler, {
//   log: false,
//   reload: true,
// }));

// serve static files
app.use(express.static(path.join(__dirname, '/../dist/')));
app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

app.listen(8000, (error) => {
  if (error) throw error;

  // console.log('Listening on port 8000');
});
