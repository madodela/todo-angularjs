angular.module('TodoApp')
	// Dependency injection to make $scope available
	.controller('TodoListCtrl', ['$scope', function ($scope) {
		$scope.tasks = [
			{
				id: 1,
				title: 'Read books',
				description: "'Clean Code', '7 languages in 7 weeks', ...",
				overDue: '06/06/15',
				status: 'P',
				priority: 'M'
			},
			{
				id: 2,
				title: 'Run 20 minutes',
				description: '',
				overDue: '03/06/15',
				status: 'F',
				priority: 'L'
			},
			{
				id: 3,
				title: 'Have my dinner',
				description: 'Some quesadillas and milk',
				overDue: '17/06/2015',
				status: 'P',
				priority: 'H'
			}
		];

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
		
		setMissingPropierties();
	}]);