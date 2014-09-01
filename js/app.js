var app = angular.module('Formula', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/drivers', {
        templateUrl: 'partials/drivers.html',
        controller: 'DriversListCtrl'
      }).
      when('/driver/:drivertId', {
        templateUrl: 'partials/driver.html',
        controller: 'DriverDetailsCtrl'
      }).
      when('/teams', {
        templateUrl: 'partials/teams.html',
        controller: 'TeamsListCtrl'
      }).
      when('/team/:teamId', {
        templateUrl: 'partials/team.html',
        controller: 'TeamDetailsCtrl'
      }).
      otherwise({
        redirectTo: '/drivers'
      });
  }]);


       