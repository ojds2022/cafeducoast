const express = require('express');
const Datastore = require('nedb');
const app = express();
const port = process.env.port || 3002;
const path = require('path');
app.use(express.static(path.join('../pages')));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('westCodeDatabase.db');
database.loadDatabase();

app.post('/api', (req, res) => {
  console.log('Request completed!');
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  res.json(data);
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`listening at ${port}`);
});
