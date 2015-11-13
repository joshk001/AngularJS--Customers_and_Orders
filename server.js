var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.listen(8900);
console.log("Port running on 8900");