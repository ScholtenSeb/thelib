"use strict";
var mysql = require('mysql');

var dbArgs = {
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'thelib'
}

exports.getDocs = function (req, res) {

	var connection = mysql.createConnection(dbArgs),
		type = req.params.type,
		qString = 'SELECT * FROM docs WHERE type = ?'

	connection.query( qString , [type] , function (error, results) {
		if(error) throw error; else res.json(results);
	});

	 connection.end();
}

exports.getOneDoc = function (req, res) {

	var connection = mysql.createConnection(dbArgs),
		id = req.params.id,
		qString = 'SELECT * FROM docs WHERE id = ?'

	connection.query( qString , [id] , function (error, results) {
		if(error) throw error; else res.json(results);
	});

	 connection.end();

}