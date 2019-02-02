/* global angular */

const myApp = angular.module('myApp', [ 'ngRoute' ]);

myApp.config([ '$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
} ]);

myApp.config(($routeProvider) => {
    $routeProvider.when('/', {
        controller: 'CustomersController',
        templateUrl: 'views/customers.html'
    })
        .when('/customers', {
            controller: 'CustomersController',
            templateUrl: 'views/customers.html'
        })
        .when('/customers/details/:id', {
            controller: 'CustomersController',
            templateUrl: 'views/customer_details.html'
        })
        .when('/customers/add', {
            controller: 'CustomersController',
            templateUrl: 'views/add_customer.html'
        })
        .when('/customers/edit/:id', {
            controller: 'CustomersController',
            templateUrl: 'views/edit_customer.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
