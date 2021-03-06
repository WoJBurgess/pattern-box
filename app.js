angular.module('pattern-box', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: 'templates/home.html'
      })
      .state('post', {
        url: "/read/:id",
        templateUrl: 'templates/components/post.html'
      });
  });
