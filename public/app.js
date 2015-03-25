var lib = angular.module('app', ['ngRoute']);

lib.controller('LibCtrl', ['$scope','$http', function ($scope, $http) {

	// var type = $routeParams.type;

	// $http.get('api/v1/'+type).success( function (data) {
	// 	$scope.docs = data;
	// });
	
}]);

lib.service('getDocs', [ '$http', function ($http) {

	var baseUrl = 'api/v1/docs/type/';

	this.books = $http.get(baseUrl+'book');
	this.articles = $http.get(baseUrl+'article');
	this.papers = $http.get(baseUrl+'paper');

}]);

lib.controller('BooksCtrl', ['$scope','getDocs', function ($scope,getDocs) {
	getDocs.books.success(function(data){
		$scope.documents = data;
	});
	console.log('Viewing: books')
}]);

lib.controller('ArticlesCtrl', ['$scope','getDocs', function ($scope,getDocs) {
	getDocs.articles.success(function(data){
		$scope.documents = data;
	});
	console.log('Viewing: articles')
}]);

lib.controller('PapersCtrl', ['$scope','getDocs', function ($scope,getDocs) {
	getDocs.papers.success(function(data){
		$scope.documents = data;
	});
	console.log('Viewing: papers')
}]);



lib.config( function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl	: 'partials/home.html',
		controller	: 'LibCtrl'
	}).when('/books', {
		templateUrl	: 'partials/books.html',
		controller	: 'BooksCtrl'
	}).when('/articles', {
		templateUrl	: 'partials/articles.html',
		controller	: 'ArticlesCtrl'
	}).when('/papers', {
		templateUrl	: 'partials/papers.html',
		controller	: 'PapersCtrl'
	}).otherwise({
		redirectTo	: '/'
	});
});



