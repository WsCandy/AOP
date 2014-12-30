var app = angular.module('AOP', []);

app.controller('AOPMain', ['$scope', '$http', function($scope, $http) {

	$scope.getUsers = function() {

		getUsers($scope, $http);

	}

	getUsers($scope, $http);

}]);