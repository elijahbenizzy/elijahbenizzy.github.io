// $(document).ready(function(){
//     $('.nav li').click(function(event){
//     	// debugger
//         //remove all pre-existing active classes
//         $('.active').removeClass('active');

//         //add the active class to the link we clicked
//         $(this).addClass('active');
//         $(this).show()

//         //Load the content
//         //e.g.
//         //load the page that the link was pointing to
//         // $('#content').load($(this).find(a).attr('href'));      

//         // event.preventDefault();
//     });
// });

var blog = angular.module('blog',[
'ngRoute'
]) //creating the variable for the module

/*
* Lets configure the routes
*/

blog.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "partials/about.html",
	}).when("/contact", {
		templateUrl: "partials/contact.html",
	}).when("/blog", {
		templateUrl: "partials/blog.html",
	}).when("/projects", {
		templateUrl: "partials/projects.html",
		controller: "projectsController"
 //Add a controller, make clicking on a project render just that template in that
	}).when("/projects/trello_gold", {
		templateUrl: "partials/about.html",
	})
}])

blog.controller('projectsController', function($scope) {
	$scope.project = "";
	$scope.set_project = function(project) {
		$scope.project = project
		// console.log(project)
	}}
	)








// var blog = angular.module('blog',[]).directive('resources', function() {
// 	return {
// 	  templateUrl: 'template/resources.html',
//       restrict: 'A', 
//       replace: true,
//       controller: ['$scope', '$filter', function ($scope, $filter) {
//             // Your behaviour goes here :)
//         }]
// 	}
// })

// blog.directive('header', function() {
//     return {
//       templateUrl: 'template/header.html',
//       restrict: 'A', 
//       replace: true,
//       controller: ['$scope', '$filter', function ($scope, $filter) {
//             // Your behaviour goes here :)
//         }]
//     };
//   })
// blog.directive('end-resources', function() {
//     return {
//       templateUrl: 'template/end-resources.html',
//       restrict: 'A', 
//       replace: true,
//       controller: ['$scope', '$filter', function ($scope, $filter) {
//             // Your behaviour goes here :)
//         }]
//     };
//   });

blog.controller('IndexController', ['$scope','$location', function($scope) {

}]);
