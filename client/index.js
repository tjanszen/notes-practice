'use strict';

angular.module('angular-notes', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', { url: '/', templateUrl: '/views/general/home.html' })
      .state('faq', { url: '/faq', templateUrl: '/views/general/faq.html'})
      .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'});
  }]);
