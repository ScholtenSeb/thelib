"use strict";
var mysql = require('mysql');

var dbArgs = {
	host : 'dedi409.jnb1.host-h.net',
	user : 'db_admin',
	password : 'NhMVSm48',
	database : 'db_thelib'
}

exports.getDocs = function (req, res) {

	var connection = mysql.createConnection(dbArgs),
		type = req.params.type,
		qString = 'SELECT * FROM tl_docs WHERE type = ?'

	connection.query( qString , [type] , function (error, results) {
		if(error) throw error; else res.json(results);
	});

	 connection.end();
}

