// Create application module

angular.module('TodoApp', ['ui.router', 'TaskDetail'])

// A little difference

/*
	angular.module('TodoApp', []); [Create]
				VS
	angular.module('TodoApp'); [Get]
*/
	.config(function($stateProvider, $urlRouterProvider) {
		// Whenever the user try to an unregistered state, it will always go to the list
		$urlRouterProvider.otherwise("/todo");
		// states machine
		$stateProvider
			.state('todoList', { //Status name
			  url: "/todo", //status url
			  templateUrl: "app/sections/todo-list/todo-list.html", //view 
			  controller: 'TodoListCtrl' //controller of the view
			});
	});
