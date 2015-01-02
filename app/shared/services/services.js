app.service('employeeService', function() {

	var service = this;

	service.sortEmployees = function($scope, type) {

		var data = [],
			employees = $scope.employees,
			sortedEmployees = [];

		type = !type ? 'number' : type;

		for(var employee in employees) {

			data.push(employees[employee][type]);

		}

		data.sort()

		for(var number in data) {

			for(var employee in employees) {

				if(employees[employee][type] === data[number]) {

					sortedEmployees.push(employees[employee]);
					
				}
			
			}

		}

		$scope.employees = sortedEmployees;

	}

	service.getEmployees = function($scope, $http) {

		var request = $http.get('app/shared/data/employees/employees.json');

		request.success(function(data, status, headers, config) {

			$scope.employees = data['employees'];

			service.sortEmployees($scope, 'number');

		});

		request.error(function(data, status, headers, config) {

			console.log('Fail :( Go and speak to Sam...');

		});

	}

});