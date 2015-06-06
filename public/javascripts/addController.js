'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/add', {
		templateUrl: './views/add.html',
		controller: 'addController'
	});
}])

.controller('addController', ['$scope', '$http','posts', function ($scope, $http, posts) {
	// create a message to display in our view
	$scope.submit = function() {
		var description = $scope.description;
		var details = $scope.details;
		var data = {
			description: description,
			details: details,
		};
		posts.create(data);
		
		$scope.description = "";
		$scope.details = "";
		alert("Idea Submitted");
		//$http({method: 'POST', url: 'ws/requests', data:data}).
		//success(function(data, status, headers, config) {
		//	// this callback will be called asynchronously
		//	// when the response is available
		//		alert("Comment submitted successfully!");
		//	}).
		//error(function(data, status, headers, config) {
		//	// called asynchronously if an error occurs
		//	// or server returns response with an error status.
		//	alert("There was an error processing the comment");
		//});
	};
}]);
