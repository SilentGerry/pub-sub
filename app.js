var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var app = express();
var server = http.createServer(app);
var port = '3000';
server.listen(port, function() {
    console.log('Listening on port: ' + port);
});
module.exports = app;
