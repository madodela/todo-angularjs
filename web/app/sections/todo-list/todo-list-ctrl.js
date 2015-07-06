angular.module('TodoApp')
	// Dependency injection to make $scope available
	.controller('TodoListCtrl', ['$scope', '$http', function ($scope, $http) {

		$scope.onTitle = false;

		function init () {
			//using http service for get information
			$http.get('http://localhost:3000/tasks').success(function (response) {
				$scope.tasks = response.tasks;
			});
		};

		function cleanInputs() {
			$scope.title = '';
			$scope.description = '';
			$scope.overDue = '';
			$scope.priority = '';
		};

		$scope.setPriorityColor = function (priority) {
			// low by default
			var priorityClass = 'low-priority';
			switch (priority) {
				case 'H':
					priorityClass = 'high-priority';
					break;
				case 'M':
					priorityClass = 'medium-priority';
			};
			return priorityClass;
		};

		$scope.addTask = function() {
			var task = { 
				"title": $scope.title, 
				"description": $scope.description, 
				"overDue": $scope.overDue, 
				"status": "P", 
				"priority": $scope.priority
			};

			$http({method: 'POST', url:'http://localhost:3000/tasks', headers: {'Content-Type': 'application/json'}, data: task}).success(function(data, status, headers, config) {
				task.idTask = data.insertedId;
				$scope.tasks.push(task);
				cleanInputs();
			});
		}
		
		init();
	}]);