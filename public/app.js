var lib = angular.module('app', ['ngRoute','ngSanitize']);

lib.controller('LibCtrl', ['$scope','$location', function ($scope, $location) {

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
	
}]);

lib.service('getDocs', [ '$http', function ($http) {

	var docsBaseURL = 'api/v1/docs/type/';
	var oneDocBaseURL = 'api/v1/docs/id/'



	this.docs = function (type) {
		return $http.get(docsBaseURL+type);
	}

	this.oneDoc = function (id) {
		return $http.get(oneDocBaseURL+id);
	}

}]);

lib.controller('BooksCtrl', ['$scope','getDocs', function ($scope,getDocs) {
	getDocs.docs('book').success(function(data){
		$scope.documents = data;
	});
}]);

lib.controller('ArticlesCtrl', ['$scope','getDocs', function ($scope,getDocs) {
	getDocs.docs('article').success(function(data){
		$scope.documents = data;
	});
}]);

lib.controller('PapersCtrl', ['$scope','getDocs', function ($scope,getDocs) {
	getDocs.docs('paper').success(function(data){
		$scope.documents = data;
	});
}]);

lib.controller('HomeCtrl', ['$scope','getDocs', function ($scope,getDocs) {
	
}]);

lib.controller('DocCtrl', ['$scope', '$routeParams','$rootScope','getDocs', function ($scope,$routeParams,$rootScope,getDocs) {
	var id = $routeParams.id;
	getDocs.oneDoc(id).success(function(data){
		$scope.document = data[0];
		$scope.document.summary = markdown.toHTML($scope.document.summary);
		if ($scope.document.img == null) {
			$scope.document.img = 'sample.jpg'
		};
		$rootScope.page.title = $scope.document.title;
	});
	
}])



lib.config( function ($routeProvider) {
	$routeProvider.when('/', {
		title : 'Welcome',
		templateUrl	: 'partials/home.html',
		controller	: 'HomeCtrl'
	}).when('/books', {
		title : 'Books',
		templateUrl	: 'partials/books.html',
		controller	: 'BooksCtrl'
	}).when('/articles', {
		title : 'Articles',
		templateUrl	: 'partials/articles.html',
		controller	: 'ArticlesCtrl'
	}).when('/papers', {
		title : 'Papers',
		templateUrl	: 'partials/papers.html',
		controller	: 'PapersCtrl'
	}).when('/document/:id', {
		templateUrl	: 'partials/document.html',
		controller	: 'DocCtrl'
	}).otherwise({
		redirectTo	: '/'
	});


});

lib.run(['$rootScope', function ($rootScope) {
	$rootScope.page = {
		setTitle : function(title) {
			this.title = title;
		}
	}
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Default Title');
    });
}])



