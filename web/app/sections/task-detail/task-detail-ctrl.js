angular.module('TaskDetail')
	.controller('TaskDetailCtrl', ['$http', '$stateParams', '$filter',
		function ($http, $stateParams, $filter) {
			var data = {};

			function init() {
				$http.get('http://localhost:3000/tasks/' + $stateParams.id).success(function (response) {
					data.title = response.title;
					data.description = response.description;
					data.overDue = response.overDue;
					data.status = response.status;
					data.priority = response.priority;
					data.statusin = response.status === 'P';
				});

			};
			init();
			this.info = data;

			this.saveChanges = function () {

				var newStatus = (this.info.statusin ? 'P' : 'F'),
					obj = {
					title: this.info.title,
					description: this.newDescription,
					overDue: $filter('date')(this.newDate, 'shortDate'),
					status: newStatus,
					priority: this.info.priority
				};

				$http({method: 'POST', url:'http://localhost:3000/tasks/' + $stateParams.id, headers: {'Content-Type': 'application/json'}, data: obj}).success(function (response) {
					this.info = data;
				});
			};
		}
	]);