function DocsService ($http) {
	var docsBaseURL = 'api/v1/docs/type/';
	var oneDocBaseURL = 'api/v1/docs/id/'
	this.docs = function (type) {
		return $http.get(docsBaseURL+type);
	}
	this.oneDoc = function (id) {
		return $http.get(oneDocBaseURL+id);
	}
}