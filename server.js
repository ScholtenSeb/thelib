var express = require('express'); // Express module

require('./api/api');

var mysql = require('mysql'); // MySQL module

// Create DB connection
var conn = mysql.createConnection({
	host : 'dedi409.jnb1.host-h.net',
	user : 'db_admin',
	password : 'NhMVSm48',
	database : 'db_thelib'
});

// Init app
var app = express();

app.use(express.static(__dirname + '/public')); //Path config    


// Routes - API
app.get('/api/v1/:type?', function (req, res) {

	var type = req.params.type; // Get type param from URL

	// Query database
	conn.query( 'SELECT * FROM tl_docs WHERE type = ?' , [type] , function (error, results) {

		if(error) {
			throw error; // Throw error
		} else {
			//console.log('Requested: '+type);
			res.json(results); // Render results in json format
		}

	});

	//conn.end(); // Close DB connection;
	
});

// Routes - Front-End
app.get('*', function (req, res) {
	res.sendfile('/public/index.html'); //Render front-end (angular)
});


// Server
app.listen(3000);
console.log('Listening on port 3000');
