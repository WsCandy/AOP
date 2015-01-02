var app = angular.module('AOP', []);

app.controller('AOPMain', ['$scope', '$http', 'employeeService', function($scope, $http, employeeService) {

	employeeService.getEmployees($scope, $http);

	$scope.sortEmployees = function(by) {

		employeeService.sortEmployees($scope, by);

	}

}]);