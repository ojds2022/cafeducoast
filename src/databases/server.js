//Local server setup with express and nedb
const express = require('express');
const Datastore = require('nedb');
const app = express();
const port = process.env.port || 8000;
const path = require('path');
app.use(express.static(path.join('../pages', 'Add.js')));
app.use(express.json({ limit: '1mb' }));

//creates a new department database and stores it in a variable
const departmentDatabase = new Datastore('DepartmentDatabase.db');
departmentDatabase.loadDatabase();

//creates a new team database and stores it in a variable
const teamDatabase = new Datastore('TeamDatabase.db');
teamDatabase.loadDatabase();

//creates a new user database and stores it in a variable
const userDatabase = new Datastore('UserDatabase.db');
userDatabase.loadDatabase();

app.post('/departments', (req, res) => {
  console.log('Request completed!');
  const data = req.body;
  departmentDatabase.insert(data);
  res.json(data);
});

app.post('/teams', (req, res) => {
  console.log('Request completed!');
  const data = req.body;
  teamDatabase.insert(data);
  res.json(data);
});

app.post('/users', (req, res) => {
  console.log('Request completed!');
  const data = req.body;
  userDatabase.insert(data);
  res.json(data);
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`listening on port ${port}`);
});
