var express = require('express');
var app     = express();
var mongoose = require('mongoose');
var port     = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/MeanExample');

app.configure(function(){
	app.use(express.static(__dirname + '/angular'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

require('./app/routes.js');

app.listen(port);

console.log("App por el puerto " + port);