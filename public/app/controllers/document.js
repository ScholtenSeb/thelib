function LibController ($scope,$location) {
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

function HomeController ($scope,$location,getDocs) {
	getDocs.docs('all').success(function(data){
		$scope.documents = data;
	});
}

function BooksController ($scope,getDocs) {
	getDocs.docs('book').success(function(data){
		$scope.documents = data;
	});
}

function ArticlesController ($scope,getDocs) {
	getDocs.docs('article').success(function(data){
		$scope.documents = data;
	});
}

function PapersController ($scope,getDocs) {
	getDocs.docs('paper').success(function(data){
		$scope.documents = data;
	});
}

function DocumentController ($scope,$routeParams,$rootScope,getDocs) {
	var id = $routeParams.id;
	getDocs.oneDoc(id).success(function(data){
		$scope.document = data[0];
		$scope.document.summary = markdown.toHTML($scope.document.summary);
		if ($scope.document.img == null) {
			$scope.document.img = 'sample.jpg'
		};
		$rootScope.page.title = $scope.document.title;
	});
}