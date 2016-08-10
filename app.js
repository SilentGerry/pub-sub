var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var projectId = process.env.tutorial2-1470427656482;
var gcloud = require('gcloud')({
	projectId: projectId
});

var app = express();
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/schedule', require('./sub.route')());
app.get('/', function(req, res) {
	console.log('Fuck yoooouuuuu!!!!!!');
	res.json({message: 'Alright, alright...'});
	res.end();
});
var port = '3000';
server.listen(port, function() {
    console.log('Listening on port: ' + port);
});
module.exports = app;