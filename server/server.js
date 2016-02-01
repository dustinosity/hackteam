import express from 'express';
var bodyParser = require('body-parser');
var webpack = require('webpack');

import Hello from './app/components/Hello';

var React = require('react');
var ReactDOMServer = require('react-dom/server');
import { RouterContext, match } from 'react-router'

var config = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

const app = new express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.send('hello world! Here\'s MERN');
});

app.get('/react', (req, res) => {
  res.send(ReactDOMServer.renderToString(<Hello />));
});

app.listen(8000, (error) => {
  console.log(error);
});