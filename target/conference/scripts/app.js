'use strict';

angular.module('conference',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Speakers',{templateUrl:'views/Speaker/search.html',controller:'SearchSpeakerController'})
      .when('/Speakers/new',{templateUrl:'views/Speaker/detail.html',controller:'NewSpeakerController'})
      .when('/Speakers/edit/:SpeakerId',{templateUrl:'views/Speaker/detail.html',controller:'EditSpeakerController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
