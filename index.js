const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const customMW = require('./custom_middleware.js');

const server = express();
const PORT = 5050;

server.use(
  express.json(), 
  helmet(),
  morgan('dev'),
  customMW.gatekeeper
);

// route handlers
server.get('/entrance', (req, res) => {
  res.status(404).json({message: 'welcome my good weasel'});
});

server.listen(PORT, err => {
  console.log(`Listening on port ${PORT}`);
});