var express = require('express'),
	api = require('./routes/api'),
	web = require('./routes/web'),
	ejs = require('ejs'),
	morgan = require('morgan'),
	bodyParser = require('body-parser');

//var mysql = require('mysql'); // MySQL module

// Init app
var app = express();

app.use(express.static(__dirname + '/public')); //Path config 
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use(morgan('dev'));


app.set('views', __dirname + '/views');  
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');


// Routes - API
app.get('/api/v1/docs/', api.getAllDocs);
app.get('/api/v1/docs/type/:type?', api.getDocs);
app.get('/api/v1/docs/id/:id?', api.getOneDoc);


// Routes - Front-End
app.get('/', web.index );
//app.get('*', web.notFound );

app.post('/auth/login', function (req, res) {
	console.log(req.body);
})

// Server
app.listen(3000);
console.log('Listening on port 3000');


// JUST A RANDOM COMMENT

