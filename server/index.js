const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const Hosts = require('../database/Host.js');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/hosts/:id', function(req, res, next = () => {}) {

  Hosts.find({id: req.params.id}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).json(data);
    next();
    
  })

});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
