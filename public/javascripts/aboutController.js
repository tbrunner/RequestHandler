'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: './views/about.html',
		controller: 'aboutController'
	});
}])

.controller('aboutController', ['$scope', function ($scope) {
	// create a message to display in our view
	$scope.message = 'Place to vote on or add new feature requests';
}]);

