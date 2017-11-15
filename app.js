const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./routes/index');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Map gobal promise - get rid of warning;
mongoose.Promise = global.Promise;

// Connect to db
mongoose.connect('mongodb://localhost:27017/customers', {
    useMongoCLient: true
});
const db = mongoose.connection;

app.use('/', routes);

app.listen(3000);
console.log('Running on port 3000...');
