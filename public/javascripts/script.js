'use strict';

// create the module
var myApp = angular.module('myApp', ['ngRoute', 'myApp.requests', 'myApp.add', 'myApp.about'])
// configure our routes
	.config([
		'$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.otherwise({ redirectTo: '/' });
			// use the HTML5 History API
			//$locationProvider.html5Mode(true);
		}
	])
	.filter('orderObjectBy', function() {
		return function(input, attribute, direction) {
			if (!angular.isObject(input)) return input;

			var array = [];
			for (var objectKey in input) {
				array.push(input[objectKey]);
			}

			array.sort(function(a, b) {
				a = parseInt(a[attribute]);
				b = parseInt(b[attribute]);
				return direction == 'asc' ? a - b : b - a;
			});
			return array;
		}
	});
	
myApp.factory('posts', ['$http', function($http){
  var o = {
	posts:[]
  };
  
  o.getAll = function() {
    return $http.get('/posts').success(function(data){
      angular.copy(data, o.posts);
    });
  };
  
  o.create = function(post) {
	return $http.post('/posts', post).success(function(data){
		o.posts.push(data);
	});
  };
  o.upvote = function(post) {
	return $http.put('/posts/' + post._id + '/upvote')
		.success(function(data){
			post.upvotes += 1;
		});
	};
  
  return o;
}]);


