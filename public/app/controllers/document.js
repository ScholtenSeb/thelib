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

function FavouriteController ($scope,getDocs,$cookies,$routeParams) {
	
	var status = {
		notAdded : 'Favourite',
		added : 'Added to favourites',
		cookieAdded : false
	}
	var arr = [];

	$scope.status = status.notAdded;

	// $cookies.fav = undefined

	// if ($cookies.fav == undefined || $cookies.fav == '') {
	// 	$cookies.putObject('fav', { list:arr } , [])
	// }
	// // console.log(typeof $cookies.fav.list);
	// console.log($cookies);

	// var DocID = $routeParams.id;
	// var fav = $.grep( $cookies.fav , function(e){ return e == DocID; });

	// if (fav[0] == DocID) {
	// 	$scope.status = status.added;
	// 	status.cookieAdded = true;
	// };

	// $scope.ToggleFav = function () {

	// 	if (status.cookieAdded) {
	// 		$cookies.fav = $.grep( $cookies.fav , function(e){ return e != DocID; });
	// 		$scope.status = status.notAdded;
	// 		console.log('Removed');
	// 		status.cookieAdded = false;
	// 	} else {
	// 		//$cookies.fav.push(DocID);
	// 		$scope.status = status.added;
	// 		console.log('Added');
	// 	}
	// }
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