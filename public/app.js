var lib = angular.module('app', ['ngRoute']);

lib.controller('LibCtrl', ['$scope','$http', function ($scope, $http) {
	
}]);

lib.controller('DocsCtrl', ['$scope', '$routeParams','$http', function ($scope, $routeParams, $http) {

	var type = $routeParams.type;

	$http.get('api/v1/'+type).success( function (data) {
		$scope.docs = data;
	});

}]);

lib.config( function ($routeProvider) {
	$routeProvider.when('/docs/:type', {
		templateUrl	: 'views/docs.html',
		controller	: 'DocsCtrl'
	}).otherwise({
		redirectTo	: '/'
	})
});



