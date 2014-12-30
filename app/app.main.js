var app = angular.module('AOP', []);

app.controller('AOPMain', ['$scope', '$http', function($scope, $http) {

	$scope.setUsers = function() {

		getUsers($scope, $http);

	}

}]);