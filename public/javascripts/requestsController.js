'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.requests', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './views/requests.html',
		controller: 'requestsController'
	});
}])

.controller('requestsController', ['$scope', '$http', 'posts', function ($scope, $http, posts) {
	// create a message to display in our view
	$scope.message = 'Here is a list of all current requests. Click a request to see its details.';
	posts.getAll();
	$scope.posts = posts.posts;
	//$http.get('/posts').success(function(data){
	//	$scope.ideas = data;
	//});
	$scope.IncrementVote = function(post){
		posts.upvote(post);
		posts.getAll();
		$scope.posts = posts.posts;
	}
}]);