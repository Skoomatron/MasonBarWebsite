const router = require('./routes.js');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, '../../dist')));

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`We in this port ${PORT} !`)
});

module.exports = app;