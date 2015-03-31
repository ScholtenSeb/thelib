angular.module('app', ['ngRoute','ngSanitize'])
.service('getDocs', [ '$http', DocsService ])
.controller('LibCtrl', ['$scope','$location', LibController ])
.controller('HomeCtrl', ['$scope','$location', 'getDocs', HomeController ])
.controller('BooksCtrl', ['$scope','getDocs', BooksController ])
.controller('ArticlesCtrl', ['$scope','getDocs', ArticlesController ])
.controller('PapersCtrl', ['$scope','getDocs', PapersController ])
.controller('DocCtrl', ['$scope', '$routeParams','$rootScope','getDocs', DocumentController ])
.controller('DocCtrl', ['$scope', '$routeParams','$rootScope','getDocs', DocumentController ])
.config( AppConfig )
.run(['$rootScope', AppRun]);







