const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const Hosts = require('../database/Host.js');
const sampleData = require('../database/sampleData.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//returns host data based on the id
app.get('/hosts/:id', function(req, res, next = () => {}) {

  Hosts.find({id: req.params.id}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(data);
    next();
  })
});

//returns all host data
app.get('/hosts', function(req, res, next = () => {}) {

  Hosts.find({}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(data);
    next();
  })
});
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));

});

app.get('/listings/:id/hosts', function(req, res, next = () => {}) {
  // call listing service API to get host id associated with the listing id in the url
  // query the db or call my own api to get host data with host id
  console.log("ID is ", req.params.id);
  Hosts.find({id: Math.round(Math.random() * 100)}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(data[0]);
    next();
  })
  //res.status(200).json(sampleData);
});

app.get('/assets/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/assets/' + req.params.id));
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
