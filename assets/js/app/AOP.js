var app = angular.module('AOP', []);

app.controller('AOPMain', ['$scope', function($scope) {

	$scope.users = [

		{

			name: 'Samuel'

		},
		{

			name: 'Sam'

		}

	];
	
}]);