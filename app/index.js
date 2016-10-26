const express = require('express');
const app = express();

app.get('/', function(request, response){
	response.send('hey i like your shoes');
});

module.exports = app;