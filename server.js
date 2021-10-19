const express = require('express');
const db = require('./db');

const store = db.connect();

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  console.log(store);
  res.send('Hello, World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
