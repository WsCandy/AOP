var app = angular.module('AOP', []);

app.controller('AOPMain', ['$scope', '$http', 'employeeService', function($scope, $http, employeeService) {

	employeeService.getEmployees($scope, $http);

	$scope.sortEmployees = function(by) {

		employeeService.sortEmployees($scope, by);

	}

}]);

app.filter('searchEmployees', function() {

	return function(arr, findEmployee) {

		var results = [];

		if(!findEmployee) {

			return arr;

		}

		angular.forEach(arr, function(employee) {

			if(employee['name'].toLowerCase().indexOf(findEmployee.toLowerCase()) !== -1 || String(employee['number']).indexOf(String(findEmployee)) !== -1)

				results.push(employee);

		});

		return results;
		
	}

});