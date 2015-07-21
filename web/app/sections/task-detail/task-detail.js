angular.module('TaskDetail', [])
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('task', {
				url: "/task/{id:[0-9]{1,2}}", //validate parameter to match only with numbers
				templateUrl: "app/sections/task-detail/task-detail.html",
				controller: 'TaskDetailCtrl',
				controllerAs: 'detail'
			});
	}]);