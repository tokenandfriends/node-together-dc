const express = require('express');
const app = express();
const motivations = require('motivations');
const pickOne = require('pick-one');

app.get('/', function(request, response){
	var motivation = pickOne(motivations);
	response.send(motivation);
});

module.exports = app;