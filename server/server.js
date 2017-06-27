// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

// webpack dependencies
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.config');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');

// run express server
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// enable hot-reload
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDev(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHot(compiler));
}

// serve static files
app.use(express.static(path.join(__dirname, '/../dist/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/', 'index.html'));
});

app.listen(8000, () => {
  // console.log('Listening on port 8000');
});
