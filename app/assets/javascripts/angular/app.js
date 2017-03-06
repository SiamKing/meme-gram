angular.module('app', ['templates', 'ui.router', 'ngMessages'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'angular/templates/application/index.html',
        controller: 'HomeController as home'
      })
      .state('home.signin', {
        url: '/signin',
        templateUrl: 'angular/templates/users/signin',
        controller: 'UsersController as user'
      })
      .state('home.signup', {
        url: '/signup',
        templateUrl: 'angular/templates/users/signup',
        controller: 'UsersController as user'
      })

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
});
