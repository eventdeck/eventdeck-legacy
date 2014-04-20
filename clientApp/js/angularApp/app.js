'use strict';
 
angular.module('theTool', [
  'ng',
  'ngRoute',
  'ngSanitize',
  'theTool.filters',
  'theTool.services',
  'theTool.directives',
  'theTool.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/'                , {templateUrl: 'views/company/list.html',   controller: 'CompaniesController'});
  $routeProvider.when('/companies/'      , {templateUrl: 'views/company/list.html',   controller: 'CompaniesController'});
  $routeProvider.when('/company/'        , {templateUrl: 'views/company/create.html', controller: 'CreateCompanyController'});
  $routeProvider.when('/company/:id'     , {templateUrl: 'views/company/view.html',   controller: 'CompanyController'});
  $routeProvider.when('/company/:id/edit', {templateUrl: 'views/company/edit.html',   controller: 'CompanyController'});
  $routeProvider.when('/members/'        , {templateUrl: 'views/member/list.html',    controller: 'MembersController'});
  $routeProvider.when('/member/:id'      , {templateUrl: 'views/member/view.html',    controller: 'MemberController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);