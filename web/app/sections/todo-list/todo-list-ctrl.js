angular.module('TodoApp')
	// Dependency injection to make $scope available
	.controller('TodoListCtrl', ['$scope', '$http', function ($scope, $http) {
		
		function init () {
			//using http service for get information
			$http.get('http://localhost:3000/tasks').success(function (response) {
				$scope.tasks = response.tasks;
				setMissingPropierties();
			});
		};

		var setMissingPropierties = function () {
			var len = $scope.tasks.length, 
			i;
			for (i = len; i > 0; i--) {
				// Set task status
				$scope.tasks[i - 1].isChecked = $scope.tasks[i - 1].status === 'F';
				// Set background color
				$scope.tasks[i - 1].backColor = checkPriority($scope.tasks[i - 1].priority);
			}
		};

		var checkPriority = function (priority) {
			// low by default
			var color = '#569401';
			switch (priority) {
				case 'H':
					color = '#DE1920';
					break;
				case 'M':
					color = '#FDF100';
			};
			return color;
		};
		
		init();
	}]);