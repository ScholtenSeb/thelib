function DocsService ($http) {
	var docsBaseURL = 'api/v1/docs/type/';
	var oneDocBaseURL = 'api/v1/docs/id/';
	var allDocsBaseURL = 'api/v1/docs/';
	this.docs = function (type) {
		if (type === 'all') {
			return $http.get(allDocsBaseURL);
		} else {
			return $http.get(docsBaseURL+type);
		};
	}
	this.oneDoc = function (id) {
		return $http.get(oneDocBaseURL+id);
	}
}