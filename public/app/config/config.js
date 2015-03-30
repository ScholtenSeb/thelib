function AppConfig ($routeProvider) {
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
}

function AppRun ($rootScope) {
	$rootScope.page = {
		setTitle : function(title) {
			this.title = title;
		}
	}
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Default Title');
    });
};
