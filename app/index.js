const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect('mongodb://admin:admin@ds111319.mlab.com:11319/duhoot', (err, database) => {
	if (err) return console.log(err);
	require('./routes/')(app, database);
	app.listen(port, () => {
		console.log('proxy on: http://localhost:' + port);
	});
})
