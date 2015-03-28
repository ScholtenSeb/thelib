"use strict"; // WEB APP - ANGULAR

exports.index = function (req, res) {
	res.render('index.html');
}

exports.notFound = function (req, res) {
	res.render('404.html');
}

exports.login = function (req, res) {
	res.render('login.html');
}