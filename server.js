var express = require('express'),
	api = require('./routes/api'),
	web = require('./routes/web'),
	ejs = require('ejs');

//var mysql = require('mysql'); // MySQL module

// Init app
var app = express();

app.use(express.static(__dirname + '/public')); //Path config 
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.set('views', __dirname + '/views');  
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');


// Routes - API
app.get('/api/v1/docs/type/:type?', api.getDocs);


// Routes - Front-End
app.get('/', web.index );
app.get('*', web.notFound );


// Server
app.listen(3000);
console.log('Listening on port 3000');
