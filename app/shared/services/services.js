var getUsers = function($scope, $http) {

	$http.get('app/shared/data/employees/employees.json').
		success(function(data, status, headers, config) {

			$scope.employees = data['employees'];

		}).
		error(function(data, status, headers, config) {

			console.log('Fail');

		});

}