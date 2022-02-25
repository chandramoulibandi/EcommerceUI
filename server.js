const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/dist/ecom-portal'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/*', (req, res) => {
  //console.log("Index Page");
  res.sendFile(path.join(__dirname + '/dist/ecom-portal/index.html'));
});

app.listen(process.env.PORT || port, () => console.log('application started'));
